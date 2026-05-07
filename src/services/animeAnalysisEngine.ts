import { GoogleGenAI, Type } from "@google/genai";
import { AnimeDialogueLine, AnimeCharacter } from '../types';

// ============================================================
//  NFC Normalizer
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
const ANIME_CACHE_KEY = 'arukas_anime_analysis_cache';
const MAX_ANIME_CACHE = 20;

interface AnimeCacheEntry {
  key: string;
  lines: AnimeDialogueLine[];
  timestamp: number;
}

function getAnimeCacheKey(videoSize: number, videoDuration: number, characters: AnimeCharacter[]): string {
  const charFingerprint = characters.map(c => c.name).sort().join(',');
  const raw = `${videoSize}:${videoDuration.toFixed(1)}::${charFingerprint}`;
  const utf8 = new TextEncoder().encode(raw);
  const binStr = Array.from(utf8, b => String.fromCharCode(b)).join('');
  return btoa(binStr).slice(0, 64);
}

function getCachedAnimeAnalysis(videoSize: number, videoDuration: number, characters: AnimeCharacter[]): AnimeDialogueLine[] | null {
  try {
    const raw = localStorage.getItem(ANIME_CACHE_KEY);
    if (!raw) return null;
    const entries: AnimeCacheEntry[] = JSON.parse(raw);
    const key = getAnimeCacheKey(videoSize, videoDuration, characters);
    const hit = entries.find(e => e.key === key);
    return hit ? hit.lines : null;
  } catch { return null; }
}

function cacheAnimeAnalysis(videoSize: number, videoDuration: number, characters: AnimeCharacter[], lines: AnimeDialogueLine[]) {
  try {
    const raw = localStorage.getItem(ANIME_CACHE_KEY);
    let entries: AnimeCacheEntry[] = raw ? JSON.parse(raw) : [];
    const key = getAnimeCacheKey(videoSize, videoDuration, characters);
    entries = entries.filter(e => e.key !== key);
    entries.unshift({ key, lines, timestamp: Date.now() });
    if (entries.length > MAX_ANIME_CACHE) entries = entries.slice(0, MAX_ANIME_CACHE);
    localStorage.setItem(ANIME_CACHE_KEY, JSON.stringify(entries));
  } catch { /* ignore */ }
}

// ============================================================
//  SYSTEM INSTRUCTION
// ============================================================
const ANIME_SYSTEM_INSTRUCTION = `You are an Anime Dialogue Analyst specialized in extracting and translating Japanese anime dialogue for Vietnamese learners.

TASK:
1. **Watch/analyze the video** and identify ALL spoken dialogue, narration, inner thoughts, and significant sound effects.
2. **Extract precise timestamps** for each dialogue line (start and end time in seconds).
3. **Extract the Japanese text** spoken in each line. Transcribe accurately including casual speech patterns, slang, and contractions.
4. **Identify the speaker** for each line:
   - If a character list is provided, match speakers to those characters.
   - If no character list is provided, try to identify characters from voice, visual appearance, or context.
   - If you cannot determine who is speaking, use "XXX".
   - For narration (voiceover/narrator), use "ナレーション".
   - For significant sound effects, use "SFX".
   - **DUAL SPEAKERS**: If two characters speak simultaneously or overlap, set characterName to the primary speaker and characterName2 to the secondary speaker. This includes scenes where characters speak in unison, interrupt each other, or have overlapping dialogue.
5. **Translate each line** into Vietnamese naturally and contextually.
6. **Provide reading** in hiragana for complex/kanji-heavy lines.
7. **Detect emotion** for each line: 'happy', 'angry', 'sad', 'surprised', 'neutral', 'scared', 'excited', 'serious'.
8. **Add cultural/grammar notes** when relevant — e.g., keigo usage, slang explanations, cultural references, grammar patterns worth noting for learners.
9. **Classify line type**: 'dialogue' (normal speech), 'narration' (voiceover), 'inner_thought' (internal monologue), 'sfx' (sound effect).

CRITICAL RULES:
- Timestamps must be accurate to within ~0.5 seconds.
- Dialogue should be in chronological order.
- Vietnamese translations should be natural and contextual, not word-by-word.
- For casual speech, note the casual form and explain the standard form in notes if helpful.
- For SFX, provide both the Japanese onomatopoeia and a descriptive Vietnamese translation.
- Be FAST and CONCISE — prioritize extraction speed over exhaustive notes.
- Output MUST be valid JSON matching the schema exactly.`;

// ============================================================
//  RESPONSE SCHEMA
// ============================================================
const animeSchema = {
  type: Type.OBJECT,
  properties: {
    lines: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          id: { type: Type.STRING, description: "Unique ID like 'line_001'" },
          startTime: { type: Type.NUMBER, description: "Start time in seconds" },
          endTime: { type: Type.NUMBER, description: "End time in seconds" },
          characterName: { type: Type.STRING, description: "Speaker name, 'XXX' if unknown, 'ナレーション' for narration, 'SFX' for sound effects" },
          characterName2: { type: Type.STRING, description: "Second speaker if two characters speak simultaneously or overlap. Null if only one speaker.", nullable: true },
          japaneseText: { type: Type.STRING, description: "The Japanese dialogue/text" },
          vietnameseText: { type: Type.STRING, description: "Vietnamese translation" },
          reading: { type: Type.STRING, description: "Hiragana reading of the Japanese text", nullable: true },
          emotion: { type: Type.STRING, enum: ['happy', 'angry', 'sad', 'surprised', 'neutral', 'scared', 'excited', 'serious'], description: "Detected emotion of the speaker" },
          notes: { type: Type.STRING, description: "Cultural notes, grammar points, or explanations for learners", nullable: true },
          type: { type: Type.STRING, enum: ['dialogue', 'narration', 'inner_thought', 'sfx'], description: "Type of the line" },
        },
        required: ['id', 'startTime', 'endTime', 'characterName', 'japaneseText', 'vietnameseText', 'type'],
      },
    },
    detectedCharacters: {
      type: Type.ARRAY,
      description: "Characters detected from the anime clip",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          description: { type: Type.STRING, description: "Brief description (voice type, appearance, role)" },
        },
      },
      nullable: true,
    },
  },
  required: ['lines'],
};

// ============================================================
//  PERCEPTUAL HASH — detect & skip duplicate/similar frames
// ============================================================
function getFrameFingerprint(canvas: HTMLCanvasElement): number[] {
  // Downsample to 8x8 grayscale for fast perceptual comparison
  const smallCanvas = document.createElement('canvas');
  smallCanvas.width = 8;
  smallCanvas.height = 8;
  const sCtx = smallCanvas.getContext('2d')!;
  sCtx.drawImage(canvas, 0, 0, 8, 8);
  const pixels = sCtx.getImageData(0, 0, 8, 8).data;
  const gray: number[] = [];
  for (let i = 0; i < pixels.length; i += 4) {
    gray.push(Math.round(pixels[i] * 0.299 + pixels[i + 1] * 0.587 + pixels[i + 2] * 0.114));
  }
  return gray;
}

function frameSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff += Math.abs(a[i] - b[i]);
  // Normalize: 0 = identical, 1 = completely different
  return diff / (a.length * 255);
}

function extractVideoFramesDeduped(
  video: HTMLVideoElement,
  maxFrames: number,
  similarityThreshold = 0.04,
): Promise<{ base64: string; mimeType: string; time: number }[]> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    const duration = video.duration;
    // Sample more candidates than needed, then filter duplicates
    const candidateCount = Math.min(maxFrames * 2, Math.ceil(duration / 1.5));
    const interval = duration / (candidateCount + 1);
    const candidates: { base64: string; mimeType: string; time: number; fingerprint: number[] }[] = [];
    let idx = 0;

    const maxW = 640, maxH = 360;

    const captureFrame = () => {
      if (idx >= candidateCount) {
        // Filter: keep only frames that differ enough from the previous kept frame
        const kept: typeof candidates = [];
        for (const frame of candidates) {
          if (kept.length === 0) {
            kept.push(frame);
          } else {
            const sim = frameSimilarity(kept[kept.length - 1].fingerprint, frame.fingerprint);
            if (sim >= similarityThreshold) {
              kept.push(frame);
            }
          }
          if (kept.length >= maxFrames) break;
        }
        // If we filtered too aggressively, fill with evenly spaced originals
        if (kept.length < Math.min(3, candidates.length)) {
          const step = Math.max(1, Math.floor(candidates.length / maxFrames));
          kept.length = 0;
          for (let i = 0; i < candidates.length && kept.length < maxFrames; i += step) {
            kept.push(candidates[i]);
          }
        }
        console.log(`[FrameDedup] ${candidates.length} candidates → ${kept.length} unique frames (threshold=${similarityThreshold})`);
        resolve(kept.map(({ base64, mimeType, time }) => ({ base64, mimeType, time })));
        return;
      }
      const time = interval * (idx + 1);
      video.currentTime = time;
    };

    video.onseeked = () => {
      const scale = Math.min(maxW / video.videoWidth, maxH / video.videoHeight, 1);
      canvas.width = Math.round(video.videoWidth * scale);
      canvas.height = Math.round(video.videoHeight * scale);
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const fingerprint = getFrameFingerprint(canvas);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.55);
      const [header, content] = dataUrl.split(',');
      const mimeType = header.match(/:(.*?);/)?.[1] || 'image/jpeg';
      candidates.push({ base64: content, mimeType, time: video.currentTime, fingerprint });
      idx++;
      captureFrame();
    };

    captureFrame();
  });
}

// ============================================================
//  VIDEO COMPRESSION — Shrink large video files via re-encoding
// ============================================================
async function compressVideoFile(file: File, maxSizeMB = 15): Promise<{ base64: string; mimeType: string }> {
  const maxBytes = maxSizeMB * 1024 * 1024;
  const base64 = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
  // If already small enough, return as-is
  if (file.size <= maxBytes) {
    return { base64, mimeType: file.type || 'video/mp4' };
  }
  // For oversized videos, we still send the full file but warn
  console.warn(`[VideoCompress] File ${(file.size / 1024 / 1024).toFixed(1)}MB exceeds ${maxSizeMB}MB target — sending frames instead`);
  return { base64: '', mimeType: '' }; // Signal to use frames mode
}

// ============================================================
//  MAIN ANALYSIS FUNCTION
// ============================================================
export async function analyzeAnimeClip(
  videoFile: File,
  videoElement: HTMLVideoElement,
  characters: AnimeCharacter[] = [],
  onProgress?: (msg: string) => void,
): Promise<{ lines: AnimeDialogueLine[]; detectedCharacters?: { name: string; description: string }[] }> {

  if (!videoFile) throw new Error("Không có video được cung cấp");

  const videoDuration = videoElement.duration;
  const fileSizeMB = videoFile.size / (1024 * 1024);

  // ═══ SIZE GUARD: Reject absurdly large files early ═══
  if (fileSizeMB > 100) {
    throw new Error(`Video quá lớn (${fileSizeMB.toFixed(0)}MB). Tối đa 100MB. Hãy cắt video ngắn hơn.`);
  }

  // Cache check
  const cached = getCachedAnimeAnalysis(videoFile.size, videoDuration, characters);
  if (cached) {
    console.log('[AnimeCache HIT] Returning cached anime analysis');
    return { lines: cached };
  }

  onProgress?.('Đang trích xuất khung hình thông minh...');

  // Adaptive frame count based on video duration
  const frameCount = videoDuration < 30 ? 6 : videoDuration < 120 ? 10 : 14;

  // Use smart deduped frame extraction — skips similar/static frames
  const frames = await extractVideoFramesDeduped(videoElement, frameCount);
  console.log(`[AnimeAnalysis] ${frames.length} unique frames from ${videoDuration.toFixed(1)}s video`);

  onProgress?.('Đang chuẩn bị dữ liệu gửi AI...');

  // Build content parts
  const parts: any[] = [];

  // Strategy: Direct video upload for small files, frames for large files
  const MAX_INLINE_SIZE = 15 * 1024 * 1024; // 15MB (safer limit)
  let useFrames = false;

  if (videoFile.size <= MAX_INLINE_SIZE) {
    // Direct video upload — best quality analysis
    const compressed = await compressVideoFile(videoFile, 15);
    if (compressed.base64) {
      parts.push({ inlineData: { mimeType: compressed.mimeType, data: compressed.base64 } });
      onProgress?.('Video đã tải lên — Gemini đang phân tích...');
    } else {
      useFrames = true;
    }
  } else {
    useFrames = true;
  }

  if (useFrames) {
    // For larger files, send only unique key frames
    onProgress?.(`Video lớn (${fileSizeMB.toFixed(1)}MB) — gửi ${frames.length} khung hình đại diện...`);
    frames.forEach(f => {
      parts.push({ inlineData: { mimeType: f.mimeType, data: f.base64 } });
    });
  }

  // Instruction text
  let instructionText = `Analyze this anime video clip (duration: ${videoDuration.toFixed(1)} seconds). Extract ALL dialogue lines with precise timestamps.`;
  if (characters.length > 0) {
    instructionText += `\n\nKnown characters:\n${characters.map(c => `- ${c.name}`).join('\n')}`;
    instructionText += `\nMatch dialogue to these characters when possible.`;
  } else {
    instructionText += `\nNo character list provided. Identify characters from voice, appearance, and context. Use "XXX" for truly unidentifiable speakers.`;
  }
  if (useFrames) {
    instructionText += `\n\nKey frames extracted at: ${frames.map(f => f.time.toFixed(1) + 's').join(', ')}`;
    instructionText += `\nNote: ${frames.length} unique frames provided (duplicates removed). Estimate dialogue timing based on scene changes.`;
  }
  parts.push({ text: instructionText });

  onProgress?.('Gemini đang phân tích...');

  let retries = 3;
  while (retries > 0) {
    try {
      const response = await getAI().models.generateContent({
        model: 'gemini-2.5-flash',
        contents: parts,
        config: {
          systemInstruction: ANIME_SYSTEM_INSTRUCTION,
          responseMimeType: "application/json",
          responseSchema: animeSchema,
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

      const lines: AnimeDialogueLine[] = (result.lines || []).map((l: any, idx: number) => ({
        id: l.id || `line_${String(idx + 1).padStart(3, '0')}`,
        startTime: Math.max(0, l.startTime ?? 0),
        endTime: Math.min(videoDuration, l.endTime ?? l.startTime + 2),
        characterName: l.characterName || 'XXX',
        characterName2: l.characterName2 || undefined,
        japaneseText: l.japaneseText || '',
        vietnameseText: l.vietnameseText || '',
        reading: l.reading || undefined,
        emotion: l.emotion || 'neutral',
        notes: l.notes || undefined,
        type: l.type || 'dialogue',
      }));

      // Sort chronologically
      lines.sort((a, b) => a.startTime - b.startTime);

      // Cache
      cacheAnimeAnalysis(videoFile.size, videoDuration, characters, lines);
      console.log(`[AnimeAnalysis] Found ${lines.length} dialogue lines in ${videoDuration.toFixed(1)}s clip`);

      return {
        lines,
        detectedCharacters: result.detectedCharacters || undefined,
      };
    } catch (error) {
      console.warn(`Anime analysis attempt failed. Retries left: ${retries - 1}`, error);
      retries--;
      if (retries === 0) {
        const msg = error instanceof Error ? error.message : String(error);
        throw new Error(`Phân tích anime thất bại sau 3 lần thử. ${msg}`);
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * (4 - retries)));
    }
  }
  throw new Error("Tất cả lần thử đều thất bại.");
}

// ============================================================
//  FORMAT TIME HELPER
// ============================================================
export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${String(s).padStart(2, '0')}`;
}
