// ============================================================================
// VOCABULARY DATA — Aggregator v6 (consolidated)
// Từ điển tiếng Nhật — 8,130 từ JLPT (N5–N1) + 5,133 enriched words
// All words now have: meaning, reading, romaji, type (Vietnamese)
// Data sources:
//   · github.com/Bluskyo/JLPT_Vocabulary (word lists)
//   · github.com/sph-mn/nihongo (readings & meanings for 5,133 words)
// ============================================================================

export type { VocabExample, RelatedVocab, VocabEntry, VocabLevel } from './vocabTypes';
import type { VocabEntry, VocabLevel } from './vocabTypes';

// ─── JLPT Word Lists (all 8,130 words — merged) ─────────────────────────
import { JLPT_N5_WORDS, JLPT_N4_WORDS, JLPT_N3_WORDS_1, JLPT_N3_WORDS_2, JLPT_N2_WORDS_1, JLPT_N2_WORDS_2, JLPT_N1_WORDS_1, JLPT_N1_WORDS_2 } from './jlptWordLists';
import {
  VOCAB_IMPORT_BATCH1_N5_WORDS,
  VOCAB_IMPORT_BATCH1_N4_WORDS,
  VOCAB_IMPORT_BATCH1_N3_WORDS,
  VOCAB_IMPORT_BATCH1_N2_WORDS,
  VOCAB_IMPORT_BATCH1_N1_WORDS,
  VOCAB_IMPORT_BATCH1_N5,
  VOCAB_IMPORT_BATCH1_N4,
  VOCAB_IMPORT_BATCH1_N3,
  VOCAB_IMPORT_BATCH1_N2,
  VOCAB_IMPORT_BATCH1_N1,
} from './vocabImportBatch1';
import { VOCAB_IMPORT_BATCH3_N1_WORDS, VOCAB_IMPORT_BATCH3_N1 } from './vocabImportBatch3';
import { VOCAB_IMPORT_BATCH4_N1_WORDS, VOCAB_IMPORT_BATCH4_N1 } from './vocabImportBatch4';
import {
  VOCAB_IMPORT_BATCH5_N4_WORDS,
  VOCAB_IMPORT_BATCH5_N3_WORDS,
  VOCAB_IMPORT_BATCH5_N2_WORDS,
  VOCAB_IMPORT_BATCH5_N4,
  VOCAB_IMPORT_BATCH5_N3,
  VOCAB_IMPORT_BATCH5_N2,
} from './vocabImportBatch5';

// ─── Word Enrichment Data (5,133 words with romaji + English meaning) ───
import { WORD_ENRICHMENT_1, WORD_ENRICHMENT_2, WORD_ENRICHMENT_3, WORD_ENRICHMENT_4 } from './wordEnrichmentAll';

// ─── Vietnamese Meanings (all levels + supplements — merged) ────────────
import { VI_N5, VI_N4, VI_N3, VI_N2, VI_N1, VI_N5_SUPPLEMENT, VI_N4_SUPPLEMENT, VI_N3_SUPPLEMENT_1, VI_N3_SUPPLEMENT_2, VI_N2_SUPPLEMENT_1, VI_N2_SUPPLEMENT_2, VI_N2_SUPPLEMENT_3, VI_N1_SUPPLEMENT_1, VI_N1_SUPPLEMENT_2, VI_N1_SUPPLEMENT_3, VI_N1_SUPPLEMENT_4, VI_N1_SUPPLEMENT_5, VI_N1_SUPPLEMENT_6, VI_N1_SUPPLEMENT_7, VI_ENRICH_1, VI_ENRICH_2, VI_ENRICH_3, VI_COMPLETE_SUPPLEMENT } from './vietnameseMeanings';

// ─── Example Sentences (merged) ─────────────────────────────────────────
import { EXAMPLES_N5, EXAMPLES_N4, EXAMPLES_N3, EXAMPLES_N2, EXAMPLES_N1 } from './vocabExamples';
import type { VocabExample } from './vocabTypes';

// Merged enrichment lookup: word → { r: romaji, m: meaning }
const ENRICHMENT: Record<string, { r: string; m: string }> = {
  ...WORD_ENRICHMENT_1,
  ...WORD_ENRICHMENT_2,
  ...WORD_ENRICHMENT_3,
  ...WORD_ENRICHMENT_4,
};

// Merged Vietnamese meanings: word → { r?, rm?, m, t? }
const VI_MEANINGS: Record<string, { r?: string; rm?: string; m: string; t?: string }> = {
  // Enrichment Vietnamese (lowest priority — fill English-only words)
  ...VI_ENRICH_1,
  ...VI_ENRICH_2,
  ...VI_ENRICH_3,
  // JLPT Supplements (override enrichment)
  ...VI_N1_SUPPLEMENT_1,
  ...VI_N1_SUPPLEMENT_2,
  ...VI_N1_SUPPLEMENT_3,
  ...VI_N1_SUPPLEMENT_4,
  ...VI_N1_SUPPLEMENT_5,
  ...VI_N1_SUPPLEMENT_6,
  ...VI_N1_SUPPLEMENT_7,
  ...VI_N2_SUPPLEMENT_1,
  ...VI_N2_SUPPLEMENT_2,
  ...VI_N2_SUPPLEMENT_3,
  ...VI_N3_SUPPLEMENT_1,
  ...VI_N3_SUPPLEMENT_2,
  ...VI_N4_SUPPLEMENT,
  ...VI_N5_SUPPLEMENT,
  // Originals (high priority)
  ...VI_N1,
  ...VI_N2,
  ...VI_N3,
  ...VI_N4,
  ...VI_N5,
  // Complete supplement last = highest priority (fills ALL remaining gaps)
  ...VI_COMPLETE_SUPPLEMENT,
};

// Merged example sentences: word → VocabExample[]
const EXAMPLE_BANK: Record<string, VocabExample[]> = {
  ...EXAMPLES_N1,
  ...EXAMPLES_N2,
  ...EXAMPLES_N3,
  ...EXAMPLES_N4,
  ...EXAMPLES_N5,  // N5 last = highest priority
};

// ─── Existing rich vocab data (merged by level) ─────────────────────────
import { VOCAB_N5, VOCAB_N5_PART2, VOCAB_N5_PART3, VOCAB_N5_PART4, VOCAB_N5_PART5 } from './vocabEntriesN5';
import { VOCAB_N4, VOCAB_N4_PART2, VOCAB_N4_PART3, VOCAB_N4_PART4, VOCAB_N4_PART5 } from './vocabEntriesN4';
import { VOCAB_N3, VOCAB_N3_PART2, VOCAB_N3_PART3, VOCAB_N3_PART4, VOCAB_N3_PART5, VOCAB_N3_PART6, VOCAB_N3_PART7, VOCAB_N3_PART8, VOCAB_N3_PART9, VOCAB_N3_PART10, VOCAB_N3_PART11, VOCAB_N3_PART12, VOCAB_N3_PART13, VOCAB_N3_PART14 } from './vocabEntriesN3';
import { VOCAB_N2_PART2, VOCAB_N2_PART3, VOCAB_N2_PART4, VOCAB_N2_PART5, VOCAB_N2_PART6, VOCAB_N2_PART7, VOCAB_N2_PART8, VOCAB_N2_PART9, VOCAB_N2_PART10, VOCAB_N2_PART11, VOCAB_N2_PART12, VOCAB_N2_PART13, VOCAB_N2_PART14 } from './vocabEntriesN2';
import { VOCAB_N1, VOCAB_N1_PART2, VOCAB_N1_PART3, VOCAB_N1_PART4, VOCAB_N1_PART5, VOCAB_N1_PART6, VOCAB_N1_PART7, VOCAB_N1_PART8, VOCAB_N1_PART9, VOCAB_N1_PART10, VOCAB_N1_PART11, VOCAB_N1_PART12, VOCAB_N1_PART13, VOCAB_N1_PART14, VOCAB_N1_PART15, VOCAB_N1_PART16, VOCAB_N1_PART17, VOCAB_N1_PART18, VOCAB_N1_PART19, VOCAB_N1_PART20, VOCAB_N1_PART21, VOCAB_N1_PART22, VOCAB_N1_PART23 } from './vocabEntriesN1';

// Topic Packs (merged into one file)
import { VOCAB_TOPIC_IT, VOCAB_TOPIC_BODY_HEALTH, VOCAB_TOPIC_NATURE, VOCAB_TOPIC_SLANG, VOCAB_TOPIC_BUSINESS, VOCAB_TOPIC_KATAKANA, VOCAB_TOPIC_ONOMATOPOEIA, VOCAB_TOPIC_EDUCATION, VOCAB_TOPIC_HOUSEHOLD, VOCAB_TOPIC_LOVE, VOCAB_TOPIC_EMERGENCY, VOCAB_TOPIC_CULTURE, VOCAB_TOPIC_SPORTS_GENERAL, VOCAB_TOPIC_SPORTS_TYPES, VOCAB_TOPIC_TRAVEL, VOCAB_TOPIC_SHOPPING, VOCAB_TOPIC_ART_HOBBIES, VOCAB_TOPIC_FOOD, VOCAB_TOPIC_PERSONALITY, VOCAB_TOPIC_COUNTERS, VOCAB_TOPIC_JOB_HUNTING, VOCAB_TOPIC_GEOGRAPHY, VOCAB_TOPIC_MEDIA, VOCAB_TOPIC_IDIOMS, VOCAB_TOPIC_YOJIJUKUGO, VOCAB_TOPIC_DRIVING, VOCAB_TOPIC_KANSAI, VOCAB_TOPIC_PREFIX_SUFFIX, VOCAB_TOPIC_GAME } from './vocabEntriesTopics';

// ─── LAZY LOADING: Extra Dictionaries (~31MB) loaded on-demand ──────────
// These are NOT imported at startup to reduce initial load from 35MB → ~5MB
// They are loaded dynamically when user accesses the full dictionary

// Lazy loaders for CSV dictionary (6 parts, ~20MB total)
const EXTRA_CSV_LOADERS = [
  () => import('./vocabEntriesExtra_Part1').then(m => m.VOCAB_EXTRA_PART1),
  () => import('./vocabEntriesExtra_Part2').then(m => m.VOCAB_EXTRA_PART2),
  () => import('./vocabEntriesExtra_Part3').then(m => m.VOCAB_EXTRA_PART3),
  () => import('./vocabEntriesExtra_Part4').then(m => m.VOCAB_EXTRA_PART4),
  () => import('./vocabEntriesExtra_Part5').then(m => m.VOCAB_EXTRA_PART5),
  () => import('./vocabEntriesExtra_Part6').then(m => m.VOCAB_EXTRA_PART6),
];


// Lazy loaders for Flashcards Offline Dictionary (27k words)
const EXTRA_FLASHCARDS_LOADERS = [
  () => import('./vocabImportBatch6_Flashcards').then(m => m.vocabImportBatch6_Flashcards),
  () => import('./vocabImportBatch7_Flashcards').then(m => m.vocabImportBatch7_Flashcards),
  () => import('./vocabImportBatch8_Flashcards').then(m => m.vocabImportBatch8_Flashcards),
  () => import('./vocabImportBatch9_Flashcards').then(m => m.vocabImportBatch9_Flashcards),
  () => import('./vocabImportBatch10_Flashcards').then(m => m.vocabImportBatch10_Flashcards),
  () => import('./vocabImportBatch11_Flashcards').then(m => m.vocabImportBatch11_Flashcards),
];

// Lazy loaders for Vi-Jp dictionary (14 parts, ~11MB total)
const EXTRA_VIJP_LOADERS = [
  () => import('./vocabEntriesExtra_ViJp_Part1').then(m => m.VOCAB_EXTRA_VIJP_PART1),
  () => import('./vocabEntriesExtra_ViJp_Part2').then(m => m.VOCAB_EXTRA_VIJP_PART2),
  () => import('./vocabEntriesExtra_ViJp_Part3').then(m => m.VOCAB_EXTRA_VIJP_PART3),
  () => import('./vocabEntriesExtra_ViJp_Part4').then(m => m.VOCAB_EXTRA_VIJP_PART4),
  () => import('./vocabEntriesExtra_ViJp_Part5').then(m => m.VOCAB_EXTRA_VIJP_PART5),
  () => import('./vocabEntriesExtra_ViJp_Part6').then(m => m.VOCAB_EXTRA_VIJP_PART6),
  () => import('./vocabEntriesExtra_ViJp_Part7').then(m => m.VOCAB_EXTRA_VIJP_PART7),
  () => import('./vocabEntriesExtra_ViJp_Part8').then(m => m.VOCAB_EXTRA_VIJP_PART8),
  () => import('./vocabEntriesExtra_ViJp_Part9').then(m => m.VOCAB_EXTRA_VIJP_PART9),
  () => import('./vocabEntriesExtra_ViJp_Part10').then(m => m.VOCAB_EXTRA_VIJP_PART10),
  () => import('./vocabEntriesExtra_ViJp_Part11').then(m => m.VOCAB_EXTRA_VIJP_PART11),
  () => import('./vocabEntriesExtra_ViJp_Part12').then(m => m.VOCAB_EXTRA_VIJP_PART12),
  () => import('./vocabEntriesExtra_ViJp_Part13').then(m => m.VOCAB_EXTRA_VIJP_PART13),
  () => import('./vocabEntriesExtra_ViJp_Part14').then(m => m.VOCAB_EXTRA_VIJP_PART14),
];

export { VOCAB_N5, VOCAB_N5_PART2, VOCAB_N5_PART3, VOCAB_N5_PART4, VOCAB_N5_PART5, VOCAB_N4, VOCAB_N4_PART2, VOCAB_N4_PART3, VOCAB_N4_PART4, VOCAB_N4_PART5, VOCAB_N3, VOCAB_N3_PART2, VOCAB_N3_PART3, VOCAB_N3_PART4, VOCAB_N3_PART5, VOCAB_N3_PART6, VOCAB_N3_PART7, VOCAB_N3_PART8, VOCAB_N3_PART9, VOCAB_N3_PART10, VOCAB_N3_PART11, VOCAB_N3_PART12, VOCAB_N3_PART13, VOCAB_N3_PART14, VOCAB_N2_PART2, VOCAB_N2_PART3, VOCAB_N2_PART4, VOCAB_N2_PART5, VOCAB_N2_PART6, VOCAB_N2_PART7, VOCAB_N2_PART8, VOCAB_N2_PART9, VOCAB_N2_PART10, VOCAB_N2_PART11, VOCAB_N2_PART12, VOCAB_N2_PART13, VOCAB_N2_PART14, VOCAB_N1, VOCAB_N1_PART2, VOCAB_N1_PART3, VOCAB_N1_PART4, VOCAB_N1_PART5, VOCAB_N1_PART6, VOCAB_N1_PART7, VOCAB_N1_PART8, VOCAB_N1_PART9, VOCAB_N1_PART10, VOCAB_N1_PART11, VOCAB_N1_PART12, VOCAB_N1_PART13, VOCAB_N1_PART14, VOCAB_N1_PART15, VOCAB_N1_PART16, VOCAB_N1_PART17, VOCAB_N1_PART18, VOCAB_N1_PART19, VOCAB_N1_PART20, VOCAB_N1_PART21, VOCAB_N1_PART22, VOCAB_N1_PART23, VOCAB_TOPIC_IT, VOCAB_TOPIC_BODY_HEALTH, VOCAB_TOPIC_NATURE, VOCAB_TOPIC_SLANG, VOCAB_TOPIC_BUSINESS, VOCAB_TOPIC_KATAKANA, VOCAB_TOPIC_ONOMATOPOEIA, VOCAB_TOPIC_EDUCATION, VOCAB_TOPIC_HOUSEHOLD, VOCAB_TOPIC_LOVE, VOCAB_TOPIC_EMERGENCY, VOCAB_TOPIC_CULTURE, VOCAB_TOPIC_SPORTS_GENERAL, VOCAB_TOPIC_SPORTS_TYPES, VOCAB_TOPIC_TRAVEL, VOCAB_TOPIC_SHOPPING, VOCAB_TOPIC_ART_HOBBIES, VOCAB_TOPIC_FOOD, VOCAB_TOPIC_PERSONALITY, VOCAB_TOPIC_COUNTERS, VOCAB_TOPIC_JOB_HUNTING, VOCAB_TOPIC_GEOGRAPHY, VOCAB_TOPIC_MEDIA, VOCAB_TOPIC_IDIOMS, VOCAB_TOPIC_YOJIJUKUGO, VOCAB_TOPIC_DRIVING, VOCAB_TOPIC_KANSAI, VOCAB_TOPIC_PREFIX_SUFFIX, VOCAB_TOPIC_GAME };

// ─── Build rich-entry lookup (word → VocabEntry) ────────────────────────
const ALL_RICH_ENTRIES: VocabEntry[] = [
  ...VOCAB_N5, ...VOCAB_N5_PART2, ...VOCAB_N5_PART3, ...VOCAB_N5_PART4, ...VOCAB_N5_PART5,
  ...VOCAB_N4, ...VOCAB_N4_PART2, ...VOCAB_N4_PART3, ...VOCAB_N4_PART4, ...VOCAB_N4_PART5,
  ...VOCAB_N3, ...VOCAB_N3_PART2, ...VOCAB_N3_PART3, ...VOCAB_N3_PART4,
  ...VOCAB_N3_PART5, ...VOCAB_N3_PART6, ...VOCAB_N3_PART7, ...VOCAB_N3_PART8,
  ...VOCAB_N3_PART9, ...VOCAB_N3_PART10, ...VOCAB_N3_PART11, ...VOCAB_N3_PART12,
  ...VOCAB_N3_PART13, ...VOCAB_N3_PART14,
  ...VOCAB_N2_PART2, ...VOCAB_N2_PART3, ...VOCAB_N2_PART4, ...VOCAB_N2_PART5,
  ...VOCAB_N2_PART6, ...VOCAB_N2_PART7, ...VOCAB_N2_PART8, ...VOCAB_N2_PART9,
  ...VOCAB_N2_PART10, ...VOCAB_N2_PART11, ...VOCAB_N2_PART12, ...VOCAB_N2_PART13,
  ...VOCAB_N2_PART14,
  ...VOCAB_N1,
  ...VOCAB_N1_PART2, ...VOCAB_N1_PART3, ...VOCAB_N1_PART4, ...VOCAB_N1_PART5,
  ...VOCAB_N1_PART6, ...VOCAB_N1_PART7, ...VOCAB_N1_PART8, ...VOCAB_N1_PART9,
  ...VOCAB_N1_PART10, ...VOCAB_N1_PART11, ...VOCAB_N1_PART12, ...VOCAB_N1_PART13,
  ...VOCAB_N1_PART14, ...VOCAB_N1_PART15, ...VOCAB_N1_PART16, ...VOCAB_N1_PART17,
  ...VOCAB_N1_PART18, ...VOCAB_N1_PART19, ...VOCAB_N1_PART20, ...VOCAB_N1_PART21,
  ...VOCAB_N1_PART22, ...VOCAB_N1_PART23,
  // Imported vocab batch (deduped by word later in RICH_MAP)
  ...VOCAB_IMPORT_BATCH1_N5,
  ...VOCAB_IMPORT_BATCH1_N4,
  ...VOCAB_IMPORT_BATCH1_N3,
  ...VOCAB_IMPORT_BATCH1_N2,
  ...VOCAB_IMPORT_BATCH1_N1,
  ...VOCAB_IMPORT_BATCH3_N1,
  ...VOCAB_IMPORT_BATCH4_N1,
  ...VOCAB_IMPORT_BATCH5_N4,
  ...VOCAB_IMPORT_BATCH5_N3,
  ...VOCAB_IMPORT_BATCH5_N2,
  ...VOCAB_TOPIC_IT, ...VOCAB_TOPIC_BODY_HEALTH, ...VOCAB_TOPIC_NATURE,
  ...VOCAB_TOPIC_SLANG, ...VOCAB_TOPIC_BUSINESS, ...VOCAB_TOPIC_KATAKANA,
  ...VOCAB_TOPIC_ONOMATOPOEIA, ...VOCAB_TOPIC_EDUCATION, ...VOCAB_TOPIC_HOUSEHOLD,
  ...VOCAB_TOPIC_LOVE, ...VOCAB_TOPIC_EMERGENCY, ...VOCAB_TOPIC_CULTURE,
  ...VOCAB_TOPIC_SPORTS_GENERAL, ...VOCAB_TOPIC_SPORTS_TYPES,
  ...VOCAB_TOPIC_TRAVEL, ...VOCAB_TOPIC_SHOPPING, ...VOCAB_TOPIC_ART_HOBBIES,
  ...VOCAB_TOPIC_FOOD, ...VOCAB_TOPIC_PERSONALITY, ...VOCAB_TOPIC_COUNTERS,
  ...VOCAB_TOPIC_JOB_HUNTING, ...VOCAB_TOPIC_GEOGRAPHY, ...VOCAB_TOPIC_MEDIA,
  ...VOCAB_TOPIC_IDIOMS, ...VOCAB_TOPIC_YOJIJUKUGO, ...VOCAB_TOPIC_DRIVING,
  ...VOCAB_TOPIC_KANSAI, ...VOCAB_TOPIC_PREFIX_SUFFIX, ...VOCAB_TOPIC_GAME,
];

// Deduplicated map: word → richest VocabEntry
const RICH_MAP = new Map<string, VocabEntry>();
for (const entry of ALL_RICH_ENTRIES) {
  if (!RICH_MAP.has(entry.word)) {
    RICH_MAP.set(entry.word, entry);
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────
// Check if string is all kana (hiragana/katakana)
function isKana(s: string): boolean {
  return /^[\u3040-\u309F\u30A0-\u30FF\u30FC\uFF66-\uFF9Fー]+$/.test(s);
}

// Check if a meaning string is likely English (not Vietnamese/Japanese)
function isLikelyEnglish(text: string): boolean {
  if (!text || text.length < 3) return false;
  // Vietnamese diacritics → definitely Vietnamese
  if (/[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ]/.test(text)) return false;
  // Count ASCII letters
  const asciiCount = (text.match(/[a-zA-Z]/g) || []).length;
  const totalChars = text.replace(/[\s,;.()（）\-–—]/g, '').length;
  // If >60% ASCII letters, likely English
  return totalChars > 0 && asciiCount / totalChars > 0.6;
}

// ─── Create VocabEntry for words without rich data (enriched when possible) ──
function makeMinimalEntry(word: string, jlpt: string): VocabEntry {
  const enrich = ENRICHMENT[word];
  const vi = VI_MEANINGS[word];
  // reading: use Vietnamese data → for kana words, reading = word itself
  const reading = vi?.r ?? (isKana(word) ? word : '');
  // romaji: Vietnamese data → enrichment → empty
  const romaji = vi?.rm ?? enrich?.r ?? '';
  // meaning: Vietnamese data ONLY (never fall back to English enrichment)
  const meaning = vi?.m ?? '';
  // type: Vietnamese data → empty
  const type = vi?.t ?? '';
  // examples: pull from example bank
  const examples = EXAMPLE_BANK[word] ?? [];

  return {
    id: `${jlpt.toLowerCase()}-${word}`,
    word,
    reading,
    romaji,
    meaning,
    type,
    jlpt,
    tags: [],
    examples,
  };
}

// ─── Merge JLPT word list + rich data for each level ────────────────────
function buildLevel(words: string[], jlpt: string): VocabEntry[] {
  const seen = new Set<string>();
  const result: VocabEntry[] = [];

  for (const word of words) {
    if (seen.has(word)) continue;
    seen.add(word);

    const rich = RICH_MAP.get(word);
    if (rich) {
      const entry = { ...rich, jlpt };
      // Overlay Vietnamese data: fill missing fields + replace English meanings
      const vi = VI_MEANINGS[word];
      if (vi) {
        // Replace meaning if empty OR if current meaning is English
        if (!entry.meaning || isLikelyEnglish(entry.meaning)) entry.meaning = vi.m;
        if (!entry.reading && vi.r) entry.reading = vi.r;
        if (!entry.romaji && vi.rm) entry.romaji = vi.rm;
        if (!entry.type && vi.t) entry.type = vi.t;
      }
      // Fill missing examples from example bank
      if ((!entry.examples || entry.examples.length === 0) && EXAMPLE_BANK[word]) {
        entry.examples = EXAMPLE_BANK[word];
      }
      // Fix kana-only words with empty reading
      if (!entry.reading && isKana(word)) entry.reading = word;
      result.push(entry);
    } else {
      result.push(makeMinimalEntry(word, jlpt));
    }
  }

  return result;
}

// Additional level-specific keys from Vietnamese maps (level-tagged sources)
const N5_WORDS_FROM_VI = [...Object.keys(VI_N5), ...Object.keys(VI_N5_SUPPLEMENT)];
const N4_WORDS_FROM_VI = [...Object.keys(VI_N4), ...Object.keys(VI_N4_SUPPLEMENT)];
const N3_WORDS_FROM_VI = [...Object.keys(VI_N3), ...Object.keys(VI_N3_SUPPLEMENT_1), ...Object.keys(VI_N3_SUPPLEMENT_2)];
const N2_WORDS_FROM_VI = [...Object.keys(VI_N2), ...Object.keys(VI_N2_SUPPLEMENT_1), ...Object.keys(VI_N2_SUPPLEMENT_2), ...Object.keys(VI_N2_SUPPLEMENT_3)];
const N1_WORDS_FROM_VI = [...Object.keys(VI_N1), ...Object.keys(VI_N1_SUPPLEMENT_1), ...Object.keys(VI_N1_SUPPLEMENT_2), ...Object.keys(VI_N1_SUPPLEMENT_3), ...Object.keys(VI_N1_SUPPLEMENT_4), ...Object.keys(VI_N1_SUPPLEMENT_5), ...Object.keys(VI_N1_SUPPLEMENT_6), ...Object.keys(VI_N1_SUPPLEMENT_7)];

// Full word arrays per level (core lists + imported supplements + leveled VI maps)
const N5_WORDS = [...JLPT_N5_WORDS, ...VOCAB_IMPORT_BATCH1_N5_WORDS, ...N5_WORDS_FROM_VI];
const N4_WORDS = [...JLPT_N4_WORDS, ...VOCAB_IMPORT_BATCH1_N4_WORDS, ...VOCAB_IMPORT_BATCH5_N4_WORDS, ...N4_WORDS_FROM_VI];
const N3_WORDS = [...JLPT_N3_WORDS_1, ...JLPT_N3_WORDS_2, ...VOCAB_IMPORT_BATCH1_N3_WORDS, ...VOCAB_IMPORT_BATCH5_N3_WORDS, ...N3_WORDS_FROM_VI];
const N2_WORDS = [...JLPT_N2_WORDS_1, ...JLPT_N2_WORDS_2, ...VOCAB_IMPORT_BATCH1_N2_WORDS, ...VOCAB_IMPORT_BATCH5_N2_WORDS, ...N2_WORDS_FROM_VI];
const N1_WORDS = [...JLPT_N1_WORDS_1, ...JLPT_N1_WORDS_2, ...VOCAB_IMPORT_BATCH1_N1_WORDS, ...VOCAB_IMPORT_BATCH3_N1_WORDS, ...VOCAB_IMPORT_BATCH4_N1_WORDS, ...N1_WORDS_FROM_VI];

// Build each level
const LEVEL_N5 = buildLevel(N5_WORDS, 'N5');
const LEVEL_N4 = buildLevel(N4_WORDS, 'N4');
const LEVEL_N3 = buildLevel(N3_WORDS, 'N3');
const LEVEL_N2 = buildLevel(N2_WORDS, 'N2');
const LEVEL_N1 = buildLevel(N1_WORDS, 'N1');

// All vocab (deduplicated by word)
const ALL_SEEN = new Set<string>();
const VOCAB_ALL: VocabEntry[] = [];
for (const entries of [LEVEL_N5, LEVEL_N4, LEVEL_N3, LEVEL_N2, LEVEL_N1]) {
  for (const e of entries) {
    if (!ALL_SEEN.has(e.word)) {
      ALL_SEEN.add(e.word);
      VOCAB_ALL.push(e);
    }
  }
}
// Also include any rich entries from topic packs not already in word lists
for (const e of ALL_RICH_ENTRIES) {
  if (!ALL_SEEN.has(e.word)) {
    ALL_SEEN.add(e.word);
    VOCAB_ALL.push(e);
  }
}

// Backfill level buckets with labeled entries that were added via rich/topic sources.
// This keeps N5-N1 views aligned with already-present ALL entries when jlpt is explicit.
const LEVEL_BUCKETS = {
  N5: LEVEL_N5,
  N4: LEVEL_N4,
  N3: LEVEL_N3,
  N2: LEVEL_N2,
  N1: LEVEL_N1,
} as const;

const LEVEL_SEEN = {
  N5: new Set(LEVEL_N5.map(v => v.word)),
  N4: new Set(LEVEL_N4.map(v => v.word)),
  N3: new Set(LEVEL_N3.map(v => v.word)),
  N2: new Set(LEVEL_N2.map(v => v.word)),
  N1: new Set(LEVEL_N1.map(v => v.word)),
};

for (const entry of VOCAB_ALL) {
  const level = (entry.jlpt || '').toUpperCase();
  if (level === 'N5' || level === 'N4' || level === 'N3' || level === 'N2' || level === 'N1') {
    if (!LEVEL_SEEN[level].has(entry.word)) {
      LEVEL_SEEN[level].add(entry.word);
      LEVEL_BUCKETS[level].push({ ...entry, jlpt: level });
    }
  }
}

// Keep level buckets mutually exclusive to avoid cross-level double counting.
// First-win order follows learning progression: N5 -> N4 -> N3 -> N2 -> N1.
const LEVEL_ORDERED = [LEVEL_N5, LEVEL_N4, LEVEL_N3, LEVEL_N2, LEVEL_N1];
const CROSS_LEVEL_SEEN = new Set<string>();
for (const levelEntries of LEVEL_ORDERED) {
  const uniqueEntries: VocabEntry[] = [];
  for (const entry of levelEntries) {
    if (CROSS_LEVEL_SEEN.has(entry.word)) {
      continue;
    }
    CROSS_LEVEL_SEEN.add(entry.word);
    uniqueEntries.push(entry);
  }
  levelEntries.length = 0;
  levelEntries.push(...uniqueEntries);
}

type KnownJlptLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

const LEVEL_DYNAMIC_SEEN: Record<KnownJlptLevel, Set<string>> = {
  N5: new Set(LEVEL_N5.map(v => v.word)),
  N4: new Set(LEVEL_N4.map(v => v.word)),
  N3: new Set(LEVEL_N3.map(v => v.word)),
  N2: new Set(LEVEL_N2.map(v => v.word)),
  N1: new Set(LEVEL_N1.map(v => v.word)),
};

function isKnownJlptLevel(level: string): level is KnownJlptLevel {
  return level === 'N5' || level === 'N4' || level === 'N3' || level === 'N2' || level === 'N1';
}

function hasJapaneseScript(text: string): boolean {
  return /[\u3040-\u30FF\u3400-\u9FFF々]/.test(text);
}

function inferLevelForExtendedEntry(entry: VocabEntry): KnownJlptLevel | null {
  const direct = (entry.jlpt || '').toUpperCase().trim();
  if (isKnownJlptLevel(direct)) {
    return direct;
  }

  for (const tag of entry.tags || []) {
    const m = String(tag).match(/JLPT\s*(N[1-5])/i);
    if (m && isKnownJlptLevel(m[1].toUpperCase())) {
      return m[1].toUpperCase() as KnownJlptLevel;
    }
  }

  // Fallback for extended dictionaries with unknown labels: keep only Japanese-script words.
  if (hasJapaneseScript(entry.word || '')) {
    return 'N1';
  }

  return null;
}

function addExtendedEntryToLevelBuckets(entry: VocabEntry): void {
  const level = inferLevelForExtendedEntry(entry);
  if (!level) {
    return;
  }

  if (LEVEL_DYNAMIC_SEEN[level].has(entry.word)) {
    return;
  }

  LEVEL_DYNAMIC_SEEN[level].add(entry.word);
  LEVEL_BUCKETS[level].push({ ...entry, jlpt: level });
}

// ─── LAZY LOADING: Extended Dictionary System ───────────────────────────
// Extra dictionaries are NOT loaded at startup. They are loaded on-demand
// when the user selects "ALL" level or searches the full dictionary.
// This reduces initial memory usage from 60K+ entries to ~15K entries.

let _extendedLoaded = false;
let _extendedLoadingPromise: Promise<void> | null = null;

/** Load extended dictionaries (CSV + ViJp) into VOCAB_ALL on demand */
export async function loadExtendedDictionary(): Promise<void> {
  if (_extendedLoaded) return;
  if (_extendedLoadingPromise) return _extendedLoadingPromise;

  _extendedLoadingPromise = (async () => {
    try {
      // Load in parallel batches for speed
      const [csvResults, vijpResults, flashResults] = await Promise.all([
        Promise.all(EXTRA_CSV_LOADERS.map(loader => loader())),
        Promise.all(EXTRA_VIJP_LOADERS.map(loader => loader())),
        Promise.all(EXTRA_FLASHCARDS_LOADERS.map(loader => loader())),
      ]);

      // Merge CSV dict
      for (const entries of csvResults) {
        for (const e of entries) {
          if (!ALL_SEEN.has(e.word)) {
            ALL_SEEN.add(e.word);
            VOCAB_ALL.push(e);
            addExtendedEntryToLevelBuckets(e);
          }
        }
      }

      // Merge ViJp dict
      for (const entries of vijpResults) {
        for (const e of entries) {
          if (!ALL_SEEN.has(e.word)) {
            ALL_SEEN.add(e.word);
            VOCAB_ALL.push(e);
            addExtendedEntryToLevelBuckets(e);
          }
        }
      }

      
      // Merge Flashcards dict
      for (const entries of flashResults) {
        for (const e of entries) {
          if (!ALL_SEEN.has(e.word)) {
            ALL_SEEN.add(e.word);
            VOCAB_ALL.push(e);
            addExtendedEntryToLevelBuckets(e);
          }
        }
      }

      _extendedLoaded = true;
    } catch (err) {
      console.error('Failed to load extended dictionary:', err);
      _extendedLoadingPromise = null; // Allow retry
    }
  })();

  return _extendedLoadingPromise;
}

/** Check if extended dictionaries are loaded */
export function isExtendedLoaded(): boolean {
  return _extendedLoaded;
}

// ─── Exports ────────────────────────────────────────────────────────────────

export const VOCAB_BY_LEVEL: Record<VocabLevel, VocabEntry[]> = {
  ALL: VOCAB_ALL,
  N5: LEVEL_N5,
  N4: LEVEL_N4,
  N3: LEVEL_N3,
  N2: LEVEL_N2,
  N1: LEVEL_N1,
};

export const VOCAB_LEVEL_INFO: Record<VocabLevel, { title: string; subtitle: string }> = {
  ALL: { title: 'Toàn bộ từ vựng', subtitle: 'Hơn 60.000 từ (JLPT + Từ điển Nhât-Việt JMDict bổ sung)' },
  N5: { title: 'Từ vựng N5', subtitle: 'Từ vựng cơ bản cho người mới bắt đầu' },
  N4: { title: 'Từ vựng N4', subtitle: 'Từ vựng sơ trung cấp — giao tiếp hàng ngày' },
  N3: { title: 'Từ vựng N3', subtitle: 'Từ vựng trung cấp — xã hội, công việc' },
  N2: { title: 'Từ vựng N2', subtitle: 'Từ vựng nâng cao — phó từ, danh từ trừu tượng' },
  N1: { title: 'Từ vựng N1', subtitle: 'Từ vựng cao cấp — động từ, tính từ văn chương' },
};

// All unique tags across all vocab entries, for filtering
export function getAllTags(): string[] {
  const tags = new Set<string>();
  VOCAB_ALL.forEach(v => v.tags.forEach((t: string) => tags.add(t)));
  return Array.from(tags).sort();
}

// All unique types
export function getAllTypes(): string[] {
  const types = new Set<string>();
  VOCAB_ALL.forEach(v => { if (v.type) types.add(v.type); });
  return Array.from(types).sort();
}

