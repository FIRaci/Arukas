import { GoogleGenAI, Type } from "@google/genai";
import { MangaBubble, MangaCharacter, MangaPage } from '../types';

// ============================================================
//  NFC Normalizer — fixes decomposed Vietnamese diacritics
// ============================================================
function normalizeNFC<T>(obj: T): T {
  if (typeof obj === 'string') return obj.normalize('NFC') as T;
  if (Array.isArray(obj)) return obj.map(normalizeNFC) as T;
  if (obj && typeof obj === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) out[k] = normalizeNFC(v);
    return out as T;
  }
  return obj;
}

let _ai: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  if (!_ai) {
    const key = import.meta.env.VITE_API_KEY;
    if (!key) throw new Error('VITE_API_KEY chưa được cấu hình. Hãy tạo file .env với API key.');
    _ai = new GoogleGenAI({ apiKey: key });
  }
  return _ai;
}

// ============================================================
//  CACHE
// ============================================================
const MANGA_CACHE_KEY = 'arukas_manga_analysis_cache';
const MAX_MANGA_CACHE = 50;

interface MangaCacheEntry {
  key: string;
  bubbles: MangaBubble[];
  timestamp: number;
}

function getMangaCacheKey(pages: MangaPage[], characters: MangaCharacter[]): string {
  // Use a hash of base64 lengths + character names as a fast fingerprint
  const pageFingerprint = pages.map(p => `${p.mimeType}:${p.base64.length}`).join('|');
  const charFingerprint = characters.map(c => c.name).sort().join(',');
  const utf8 = new TextEncoder().encode(`${pageFingerprint}::${charFingerprint}`);
  const binStr = Array.from(utf8, b => String.fromCharCode(b)).join('');
  return btoa(binStr).slice(0, 64);
}

function getCachedMangaAnalysis(pages: MangaPage[], characters: MangaCharacter[]): MangaBubble[] | null {
  try {
    const raw = localStorage.getItem(MANGA_CACHE_KEY);
    if (!raw) return null;
    const entries: MangaCacheEntry[] = JSON.parse(raw);
    const key = getMangaCacheKey(pages, characters);
    const hit = entries.find(e => e.key === key);
    return hit ? hit.bubbles : null;
  } catch { return null; }
}

function cacheMangaAnalysis(pages: MangaPage[], characters: MangaCharacter[], bubbles: MangaBubble[]) {
  try {
    const raw = localStorage.getItem(MANGA_CACHE_KEY);
    let entries: MangaCacheEntry[] = raw ? JSON.parse(raw) : [];
    const key = getMangaCacheKey(pages, characters);
    entries = entries.filter(e => e.key !== key);
    entries.unshift({ key, bubbles, timestamp: Date.now() });
    if (entries.length > MAX_MANGA_CACHE) entries = entries.slice(0, MAX_MANGA_CACHE);
    localStorage.setItem(MANGA_CACHE_KEY, JSON.stringify(entries));
  } catch { /* ignore */ }
}

// ============================================================
//  SYSTEM INSTRUCTION
// ============================================================
const MANGA_SYSTEM_INSTRUCTION = `You are a Manga Reading Assistant specialized in analyzing Japanese manga pages for Vietnamese learners.

TASK:
1. **Analyze each manga page image** and identify ALL speech bubbles, thought bubbles, narration boxes, and sound effects (SFX/onomatopoeia).
2. **Extract the Japanese text** from each bubble/box accurately. Preserve line breaks within the bubble as they appear.
3. **Identify which character is speaking** each line:
   - If a character list is provided, match speakers to those characters.
   - If no character list is provided, try to identify characters from context (visual appearance, dialogue clues, name mentions).
   - If you truly cannot determine who is speaking, use "XXX" as the character name.
   - If the text is narration (narrator box, caption), use "ナレーション" (Narration).
   - If the text is SFX/onomatopoeia (sound effects), use "SFX".
4. **Translate each text** into Vietnamese naturally.
5. **Provide bounding box coordinates** for each bubble as normalized values (0.0 to 1.0) relative to the image dimensions: { x: left, y: top, w: width, h: height }.
6. **Reading order**: Return bubbles in Japanese manga reading order (right-to-left, top-to-bottom). Number them sequentially per page.
7. **Bubble type**: Classify each as 'dialogue', 'narration', 'thought', or 'sfx'.
8. **Reading/Furigana**: For dialogue/narration text, provide a hiragana reading of the full text.

CRITICAL RULES:
- The imageIndex field MUST match the 0-based index of the image in the input array.
- Bounding boxes should tightly fit the bubble/text area.
- Do NOT skip any visible text in the images.
- Vietnamese translations should be natural and contextual, not word-by-word.
- For SFX, provide both the Japanese onomatopoeia and a descriptive Vietnamese translation (e.g., "ドキドキ" → "thình thịch (tiếng tim đập)").
- Be FAST and CONCISE — prioritize extraction speed and accuracy over exhaustive notes.
- Output MUST be valid JSON matching the schema exactly.`;

// ============================================================
//  RESPONSE SCHEMA
// ============================================================
const mangaSchema = {
  type: Type.OBJECT,
  properties: {
    bubbles: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING, description: "Unique ID like 'p0_b1' (page 0, bubble 1)" },
          imageIndex: { type: Type.NUMBER, description: "0-based index of the page image" },
          boundingBox: {
            type: Type.OBJECT,
            properties: {
              x: { type: Type.NUMBER, description: "Left edge, normalized 0-1" },
              y: { type: Type.NUMBER, description: "Top edge, normalized 0-1" },
              w: { type: Type.NUMBER, description: "Width, normalized 0-1" },
              h: { type: Type.NUMBER, description: "Height, normalized 0-1" },
            },
            required: ['x', 'y', 'w', 'h'],
          },
          characterName: { type: Type.STRING, description: "Name of the speaking character, 'XXX' if unknown, 'ナレーション' for narration, 'SFX' for sound effects" },
          japaneseText: { type: Type.STRING, description: "The Japanese text content extracted from the bubble" },
          vietnameseText: { type: Type.STRING, description: "Vietnamese translation of the text" },
          reading: { type: Type.STRING, description: "Hiragana reading of the full Japanese text", nullable: true },
          order: { type: Type.NUMBER, description: "Reading order index within this page (0-based)" },
          type: { type: Type.STRING, enum: ['dialogue', 'narration', 'thought', 'sfx'], description: "Type of text element" },
        },
        required: ['id', 'imageIndex', 'boundingBox', 'characterName', 'japaneseText', 'vietnameseText', 'order', 'type'],
      },
    },
    detectedCharacters: {
      type: Type.ARRAY,
      description: "Characters detected/inferred from the manga pages (only if no character list was provided)",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING, description: "Brief visual description to help identify them" },
        },
      },
      nullable: true,
    },
  },
  required: ['bubbles'],
};

// ============================================================
//  IMAGE OPTIMIZATION — Compress pages before sending to API
// ============================================================
function compressImageBase64(base64: string, mimeType: string, maxW = 1200, quality = 0.7): Promise<{ base64: string; mimeType: string }> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      // Skip if already small
      if (img.width <= maxW && base64.length < 200_000) {
        resolve({ base64, mimeType });
        return;
      }
      const scale = Math.min(maxW / img.width, 1);
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      const ctx = canvas.getContext('2d')!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', quality);
      const [header, content] = dataUrl.split(',');
      const outMime = header.match(/:(.*?);/)?.[1] || 'image/jpeg';
      resolve({ base64: content, mimeType: outMime });
    };
    img.onerror = () => resolve({ base64, mimeType }); // Fallback to original
    img.src = `data:${mimeType};base64,${base64}`;
  });
}

// ============================================================
//  SINGLE BATCH ANALYSIS — analyze a chunk of pages
// ============================================================
async function analyzeMangaBatch(
  compressedPages: { base64: string; mimeType: string }[],
  characters: MangaCharacter[],
  batchOffset: number,
): Promise<{ bubbles: MangaBubble[]; detectedCharacters?: { name: string; description: string }[] }> {

  const parts: any[] = [];
  compressedPages.forEach((c) => {
    parts.push({ inlineData: { mimeType: c.mimeType, data: c.base64 } });
  });

  let instructionText = `Analyze these ${compressedPages.length} manga page(s) (pages ${batchOffset + 1}-${batchOffset + compressedPages.length}). Extract all speech bubbles, narration, and SFX.`;
  if (characters.length > 0) {
    instructionText += `\n\nKnown characters in this manga:\n${characters.map(c => `- ${c.name}`).join('\n')}`;
    instructionText += `\n\nPlease match dialogue to these characters when possible.`;
  } else {
    instructionText += `\n\nNo character list provided. Please try to identify characters from context and visual cues. Use "XXX" for truly unidentifiable speakers.`;
  }
  instructionText += `\n\nIMPORTANT: imageIndex for these pages should start at ${batchOffset}.`;
  parts.push({ text: instructionText });

  let retries = 3;
  while (retries > 0) {
    try {
      const response = await getAI().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: parts,
        config: {
          systemInstruction: MANGA_SYSTEM_INSTRUCTION,
          responseMimeType: "application/json",
          responseSchema: mangaSchema,
          thinkingConfig: { thinkingBudget: 0 },
        },
      });

      if (!response.text) {
        const candidate = (response as any).candidates?.[0];
        const finishReason = candidate?.finishReason || 'UNKNOWN';
        const safetyRatings = candidate?.safetyRatings
          ?.filter((r: any) => r.blocked)
          ?.map((r: any) => r.category)
          ?.join(', ');
        const blockMsg = (response as any).promptFeedback?.blockReason;
        const detail = blockMsg
          ? `Prompt bị chặn: ${blockMsg}`
          : safetyRatings
            ? `Bị chặn bởi bộ lọc an toàn: ${safetyRatings}`
            : finishReason !== 'STOP'
              ? `Kết thúc với lý do: ${finishReason}`
              : 'AI trả về phản hồi rỗng';
        throw new Error(`Không có phản hồi từ AI. ${detail}`);
      }
      const result = normalizeNFC(JSON.parse(response.text.normalize('NFC')));

      const bubbles: MangaBubble[] = (result.bubbles || []).map((b: any, idx: number) => ({
        id: b.id || `p${(b.imageIndex ?? batchOffset)}_b${idx}`,
        imageIndex: b.imageIndex ?? batchOffset,
        boundingBox: {
          x: Math.max(0, Math.min(1, b.boundingBox?.x ?? 0)),
          y: Math.max(0, Math.min(1, b.boundingBox?.y ?? 0)),
          w: Math.max(0, Math.min(1, b.boundingBox?.w ?? 0.1)),
          h: Math.max(0, Math.min(1, b.boundingBox?.h ?? 0.1)),
        },
        characterName: b.characterName || 'XXX',
        japaneseText: b.japaneseText || '',
        vietnameseText: b.vietnameseText || '',
        reading: b.reading || undefined,
        order: b.order ?? idx,
        type: b.type || 'dialogue',
      }));

      bubbles.sort((a, b) => a.imageIndex - b.imageIndex || a.order - b.order);

      return {
        bubbles,
        detectedCharacters: result.detectedCharacters || undefined,
      };
    } catch (error) {
      console.warn(`Manga batch analysis failed. Retries left: ${retries - 1}`, error);
      retries--;
      if (retries === 0) {
        const msg = error instanceof Error ? error.message : String(error);
        throw new Error(`Phân tích manga thất bại sau 3 lần thử. ${msg}`);
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * (4 - retries)));
    }
  }
  throw new Error("All retry attempts failed.");
}

// ============================================================
//  MAIN ANALYSIS FUNCTION — with smart batch chunking
// ============================================================
export async function analyzeMangaPages(
  pages: MangaPage[],
  characters: MangaCharacter[] = [],
  onProgress?: (msg: string) => void,
): Promise<{ bubbles: MangaBubble[]; detectedCharacters?: { name: string; description: string }[] }> {

  if (pages.length === 0) throw new Error("No manga pages provided");

  // ═══ SIZE GUARD ═══
  if (pages.length > 30) {
    throw new Error(`Quá nhiều trang (${pages.length}). Tối đa 30 trang mỗi lần. Hãy chia nhỏ.`);
  }

  // Cache check
  const cached = getCachedMangaAnalysis(pages, characters);
  if (cached) {
    console.log('[MangaCache HIT] Returning cached manga analysis');
    return { bubbles: cached };
  }

  onProgress?.(`Đang nén ${pages.length} trang ảnh...`);

  // Compress images in parallel — more aggressive for large batches
  const compressionQuality = pages.length > 8 ? 0.55 : pages.length > 4 ? 0.65 : 0.7;
  const compressionMaxW = pages.length > 8 ? 1000 : 1200;
  const compressed = await Promise.all(
    pages.map(p => compressImageBase64(p.base64, p.mimeType, compressionMaxW, compressionQuality))
  );
  console.log(`[MangaAnalysis] Compressed ${pages.length} pages (quality=${compressionQuality}, maxW=${compressionMaxW})`);

  // ═══ BATCH CHUNKING: Split into batches if too many pages ═══
  const PAGES_PER_BATCH = 5; // Gemini handles 5 images well without overload
  const allBubbles: MangaBubble[] = [];
  let allDetectedChars: { name: string; description: string }[] = [];

  if (compressed.length <= PAGES_PER_BATCH) {
    // Single batch — simple path
    onProgress?.('Gemini đang phân tích...');
    const result = await analyzeMangaBatch(compressed, characters, 0);
    allBubbles.push(...result.bubbles);
    if (result.detectedCharacters) allDetectedChars = result.detectedCharacters;
  } else {
    // Multi-batch: chunk pages and analyze sequentially
    const batchCount = Math.ceil(compressed.length / PAGES_PER_BATCH);
    console.log(`[MangaAnalysis] Chunking ${compressed.length} pages into ${batchCount} batches of ${PAGES_PER_BATCH}`);

    for (let batchIdx = 0; batchIdx < batchCount; batchIdx++) {
      const start = batchIdx * PAGES_PER_BATCH;
      const end = Math.min(start + PAGES_PER_BATCH, compressed.length);
      const batchPages = compressed.slice(start, end);

      onProgress?.(`Đang phân tích lô ${batchIdx + 1}/${batchCount} (trang ${start + 1}-${end})...`);

      try {
        const result = await analyzeMangaBatch(batchPages, characters, start);

        // Fix imageIndex to be absolute (relative to full page list)
        for (const b of result.bubbles) {
          // Ensure imageIndex is correct relative to the full list
          if (b.imageIndex < start) {
            b.imageIndex += start;
          }
        }
        allBubbles.push(...result.bubbles);

        if (result.detectedCharacters && allDetectedChars.length === 0) {
          allDetectedChars = result.detectedCharacters;
        }
      } catch (error) {
        console.warn(`[MangaAnalysis] Batch ${batchIdx + 1} failed, continuing with others...`, error);
        // Continue with remaining batches — partial results are better than none
      }

      // Small delay between batches to avoid rate limiting
      if (batchIdx < batchCount - 1) {
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }

    if (allBubbles.length === 0) {
      throw new Error('Phân tích manga thất bại — không thể trích xuất bóng thoại nào.');
    }
  }

  // Sort by page, then by reading order
  allBubbles.sort((a, b) => a.imageIndex - b.imageIndex || a.order - b.order);

  // Cache result
  cacheMangaAnalysis(pages, characters, allBubbles);
  console.log(`[MangaAnalysis] Found ${allBubbles.length} bubbles across ${pages.length} pages`);

  return {
    bubbles: allBubbles,
    detectedCharacters: allDetectedChars.length > 0 ? allDetectedChars : undefined,
  };
}
