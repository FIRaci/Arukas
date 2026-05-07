// ============================================================================
// LOCAL DATA SERVICE
// Provides fast lookup from bundled vocab (8,130+), kanji (2,000+), and 
// grammar (396+) data to reduce Gemini API calls.
// ============================================================================

import type { ExtendedAnalysis, ExtendedGrammarAnalysis, KanjiInfo, VocabularyExample, RelatedWord, Token, AnalysisResult, ComparisonResult } from '../types';
import type { VocabEntry } from '../data/vocabTypes';
import type { KanjiEntry } from '../data/kanjiTypes';
import type { GrammarEntry } from '../data/grammarTypes';

import { VOCAB_BY_LEVEL } from '../data/vocabData';
import { KANJI_BY_LEVEL } from '../data/kanjiData';
import { GRAMMAR_BY_LEVEL } from '../data/grammarData';
import { DOJG_ENTRIES, HJGP_ENTRIES } from '../data/grammarCrossRef';
import { DOJG_ENGLISH_TO_VI } from '../data/grammarCrossRefVi';

// ─── NFC Normalizer — fixes decomposed Vietnamese diacritics from cached data ──
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

// ─── BUILD LOOKUP MAPS (lazy, once) ────────────────────────────────────────

let vocabByWord: Map<string, VocabEntry> | null = null;
let vocabByReading: Map<string, VocabEntry> | null = null;
let kanjiByChar: Map<string, KanjiEntry> | null = null;
let grammarByPattern: Map<string, GrammarEntry> | null = null;

// ─── ENRICHMENT CACHE (persisted to localStorage) ──────────────────────────
// Stores Gemini API results so the same word/grammar never needs API twice.

const VOCAB_CACHE_KEY = 'arukas_vocab_enrichment_cache';
const GRAMMAR_CACHE_KEY = 'arukas_grammar_enrichment_cache';
const ANALYSIS_CACHE_KEY = 'arukas_analysis_cache';
const COMPARISON_CACHE_KEY = 'arukas_comparison_cache';
const CACHE_MAX_ENTRIES = 2000; // Prevent unbounded growth
const ANALYSIS_CACHE_MAX = 150;
const COMPARISON_CACHE_MAX = 200;
let vocabEnrichmentCache: Map<string, ExtendedAnalysis> | null = null;
let grammarEnrichmentCache: Map<string, ExtendedGrammarAnalysis> | null = null;

function ensureVocabCache(): Map<string, ExtendedAnalysis> {
  if (vocabEnrichmentCache) return vocabEnrichmentCache;
  vocabEnrichmentCache = new Map();
  try {
    const raw = localStorage.getItem(VOCAB_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw.normalize('NFC')) as [string, ExtendedAnalysis][];
      for (const [k, v] of parsed) vocabEnrichmentCache.set(k, normalizeNFC(v));
      console.log(`[Cache] Loaded ${vocabEnrichmentCache.size} vocab enrichment entries from localStorage`);
    }
  } catch (e) { console.warn('[Cache] Failed to load vocab cache', e); }
  return vocabEnrichmentCache;
}

function ensureGrammarCache(): Map<string, ExtendedGrammarAnalysis> {
  if (grammarEnrichmentCache) return grammarEnrichmentCache;
  grammarEnrichmentCache = new Map();
  try {
    const raw = localStorage.getItem(GRAMMAR_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw.normalize('NFC')) as [string, ExtendedGrammarAnalysis][];
      for (const [k, v] of parsed) grammarEnrichmentCache.set(k, normalizeNFC(v));
      console.log(`[Cache] Loaded ${grammarEnrichmentCache.size} grammar enrichment entries from localStorage`);
    }
  } catch (e) { console.warn('[Cache] Failed to load grammar cache', e); }
  return grammarEnrichmentCache;
}

function persistVocabCache() {
  try {
    const cache = ensureVocabCache();
    // Trim if too large (keep most recent entries)
    if (cache.size > CACHE_MAX_ENTRIES) {
      const entries = Array.from(cache.entries());
      const trimmed = entries.slice(entries.length - CACHE_MAX_ENTRIES);
      vocabEnrichmentCache = new Map(trimmed);
    }
    localStorage.setItem(VOCAB_CACHE_KEY, JSON.stringify(Array.from(cache.entries())));
  } catch (e) { console.warn('[Cache] Failed to persist vocab cache', e); }
}

function persistGrammarCache() {
  try {
    const cache = ensureGrammarCache();
    if (cache.size > CACHE_MAX_ENTRIES) {
      const entries = Array.from(cache.entries());
      const trimmed = entries.slice(entries.length - CACHE_MAX_ENTRIES);
      grammarEnrichmentCache = new Map(trimmed);
    }
    localStorage.setItem(GRAMMAR_CACHE_KEY, JSON.stringify(Array.from(cache.entries())));
  } catch (e) { console.warn('[Cache] Failed to persist grammar cache', e); }
}

/** Save a vocab enrichment result to cache (call after API returns) */
export function cacheVocabEnrichment(word: string, data: ExtendedAnalysis): void {
  const cache = ensureVocabCache();
  cache.set(word, data);
  // Also cache by canonicalForm for better hit rate
  if (data.canonicalForm && data.canonicalForm !== word) {
    cache.set(data.canonicalForm, data);
  }
  persistVocabCache();
  console.log(`[Cache] Cached vocab "${word}" (total: ${cache.size})`);
}

/** Save a grammar enrichment result to cache (call after API returns) */
export function cacheGrammarEnrichment(structure: string, data: ExtendedGrammarAnalysis): void {
  const cache = ensureGrammarCache();
  cache.set(structure, data);
  // Also cache by canonical structure
  if (data.structure && data.structure !== structure) {
    cache.set(data.structure, data);
  }
  persistGrammarCache();
  console.log(`[Cache] Cached grammar "${structure}" (total: ${cache.size})`);
}

/** Look up cached vocab enrichment */
export function getCachedVocabEnrichment(word: string): ExtendedAnalysis | null {
  const cache = ensureVocabCache();
  return cache.get(word) || null;
}

/** Look up cached grammar enrichment */
export function getCachedGrammarEnrichment(structure: string): ExtendedGrammarAnalysis | null {
  const cache = ensureGrammarCache();
  return cache.get(structure) || null;
}

/** Get cache statistics */
export function getCacheStats() {
  return {
    vocabCacheSize: ensureVocabCache().size,
    grammarCacheSize: ensureGrammarCache().size,
    analysisCacheSize: ensureAnalysisCache().size,
    comparisonCacheSize: ensureComparisonCache().size,
  };
}

// ─── SENTENCE ANALYSIS CACHE ──────────────────────────────────────────────

let analysisCache: Map<string, AnalysisResult> | null = null;

function ensureAnalysisCache(): Map<string, AnalysisResult> {
  if (analysisCache) return analysisCache;
  analysisCache = new Map();
  try {
    const raw = localStorage.getItem(ANALYSIS_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw.normalize('NFC')) as [string, AnalysisResult][];
      for (const [k, v] of parsed) analysisCache.set(k, normalizeNFC(v));
      console.log(`[Cache] Loaded ${analysisCache.size} sentence analysis entries from localStorage`);
    }
  } catch (e) { console.warn('[Cache] Failed to load analysis cache', e); }
  return analysisCache;
}

function persistAnalysisCache() {
  try {
    const cache = ensureAnalysisCache();
    if (cache.size > ANALYSIS_CACHE_MAX) {
      const entries = Array.from(cache.entries());
      analysisCache = new Map(entries.slice(-ANALYSIS_CACHE_MAX));
    }
    localStorage.setItem(ANALYSIS_CACHE_KEY, JSON.stringify(Array.from(cache.entries())));
  } catch (e) { console.warn('[Cache] Failed to persist analysis cache', e); }
}

/** Check if a sentence was analyzed before */
export function getCachedAnalysis(text: string): AnalysisResult | null {
  const cache = ensureAnalysisCache();
  return cache.get(text.trim()) || null;
}

/** Cache a sentence analysis result */
export function cacheAnalysis(text: string, result: AnalysisResult): void {
  const cache = ensureAnalysisCache();
  cache.set(text.trim(), result);
  persistAnalysisCache();
  console.log(`[Cache] Cached analysis for "${text.slice(0, 30)}..." (total: ${cache.size})`);
}

// ─── COMPARISON CACHE ─────────────────────────────────────────────────────

let comparisonCache: Map<string, ComparisonResult> | null = null;

function ensureComparisonCache(): Map<string, ComparisonResult> {
  if (comparisonCache) return comparisonCache;
  comparisonCache = new Map();
  try {
    const raw = localStorage.getItem(COMPARISON_CACHE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw.normalize('NFC')) as [string, ComparisonResult][];
      for (const [k, v] of parsed) comparisonCache.set(k, normalizeNFC(v));
      console.log(`[Cache] Loaded ${comparisonCache.size} comparison entries from localStorage`);
    }
  } catch (e) { console.warn('[Cache] Failed to load comparison cache', e); }
  return comparisonCache;
}

function persistComparisonCache() {
  try {
    const cache = ensureComparisonCache();
    if (cache.size > COMPARISON_CACHE_MAX) {
      const entries = Array.from(cache.entries());
      comparisonCache = new Map(entries.slice(-COMPARISON_CACHE_MAX));
    }
    localStorage.setItem(COMPARISON_CACHE_KEY, JSON.stringify(Array.from(cache.entries())));
  } catch (e) { console.warn('[Cache] Failed to persist comparison cache', e); }
}

/** Check if a comparison was generated before */
export function getCachedComparison(query: string): ComparisonResult | null {
  const cache = ensureComparisonCache();
  return cache.get(query.trim()) || null;
}

/** Cache a comparison result */
export function cacheComparison(query: string, result: ComparisonResult): void {
  const cache = ensureComparisonCache();
  cache.set(query.trim(), result);
  persistComparisonCache();
  console.log(`[Cache] Cached comparison for "${query}" (total: ${cache.size})`);
}

function ensureVocabMaps() {
  if (vocabByWord) return;
  vocabByWord = new Map();
  vocabByReading = new Map();
  for (const entry of VOCAB_BY_LEVEL.ALL) {
    if (!vocabByWord.has(entry.word)) {
      vocabByWord.set(entry.word, entry);
    }
    if (entry.reading && !vocabByReading!.has(entry.reading)) {
      vocabByReading!.set(entry.reading, entry);
    }
  }
}

function ensureKanjiMap() {
  if (kanjiByChar) return;
  kanjiByChar = new Map();
  for (const entry of KANJI_BY_LEVEL.ALL) {
    if (!kanjiByChar.has(entry.kanji)) {
      kanjiByChar.set(entry.kanji, entry);
    }
  }
}

function ensureGrammarMap() {
  if (grammarByPattern) return;
  grammarByPattern = new Map();
  for (const entry of GRAMMAR_BY_LEVEL.ALL) {
    // Store by pattern as-is, and also by a cleaned version
    const clean = normalizeGrammarPattern(entry.pattern);
    if (!grammarByPattern.has(entry.pattern)) {
      grammarByPattern.set(entry.pattern, entry);
    }
    if (clean !== entry.pattern && !grammarByPattern.has(clean)) {
      grammarByPattern.set(clean, entry);
    }
  }
}

// ─── NORMALIZE HELPERS ─────────────────────────────────────────────────────

/** Strip ～, 〜, ~, parens, and whitespace for fuzzy grammar matching */
function normalizeGrammarPattern(pattern: string): string {
  return pattern
    .replace(/[～〜~]/g, '')
    .replace(/\s*[（(].*?[）)]\s*/g, '')
    .trim();
}

/** Check if char is a Kanji (CJK Unified Ideographs) */
function isKanji(ch: string): boolean {
  const code = ch.charCodeAt(0);
  return (code >= 0x4E00 && code <= 0x9FFF) || (code >= 0x3400 && code <= 0x4DBF);
}

// ─── VOCAB LOOKUP ──────────────────────────────────────────────────────────

/** Look up a word by its written form or reading */
export function lookupVocab(word: string): VocabEntry | null {
  ensureVocabMaps();
  return vocabByWord!.get(word) || vocabByReading!.get(word) || null;
}

/** Fuzzy search: try the word, then try stripping okurigana patterns */
export function lookupVocabFuzzy(word: string): VocabEntry | null {
  const exact = lookupVocab(word);
  if (exact) return exact;

  // Try dictionary form hints
  ensureVocabMaps();

  // For verbs like 長引いた → try 長引く
  // Try progressively shorter substrings from the start
  for (let len = word.length - 1; len >= 1; len--) {
    const sub = word.substring(0, len);
    const found = vocabByWord!.get(sub);
    if (found) return found;
  }
  return null;
}

// ─── KANJI LOOKUP ──────────────────────────────────────────────────────────

/** Look up a single kanji character */
export function lookupKanji(char: string): KanjiEntry | null {
  ensureKanjiMap();
  return kanjiByChar!.get(char) || null;
}

/** Extract kanji from a word and look up each → KanjiInfo[] */
export function getKanjiDetailsForWord(word: string): KanjiInfo[] {
  ensureKanjiMap();
  const result: KanjiInfo[] = [];
  const seen = new Set<string>();

  for (const ch of word) {
    if (isKanji(ch) && !seen.has(ch)) {
      seen.add(ch);
      const entry = kanjiByChar!.get(ch);
      if (entry) {
        result.push({
          char: ch,
          hanViet: entry.hanViet || '',
          onyomi: entry.onyomi ? entry.onyomi.split(/[,、\s]+/).map(s => s.trim()).filter(Boolean) : [],
          kunyomi: entry.kunyomi ? entry.kunyomi.split(/[,、\s]+/).map(s => s.trim()).filter(Boolean) : [],
          meaning: entry.meaning || '',
        });
      }
    }
  }
  return result;
}

/** Get Han-Viet reading for a word by combining each kanji's hanViet */
export function getHanVietForWord(word: string): string | null {
  ensureKanjiMap();
  const parts: string[] = [];
  for (const ch of word) {
    if (isKanji(ch)) {
      const entry = kanjiByChar!.get(ch);
      if (entry?.hanViet) {
        parts.push(entry.hanViet);
      }
    }
  }
  return parts.length > 0 ? parts.join(' ') : null;
}

// ─── GRAMMAR LOOKUP ────────────────────────────────────────────────────────

/** Look up a grammar pattern (exact → normalized → fuzzy) */
export function lookupGrammar(structure: string): GrammarEntry | null {
  ensureGrammarMap();
  
  // 1. Exact match
  const exact = grammarByPattern!.get(structure);
  if (exact) return exact;

  // 2. Normalized match
  const clean = normalizeGrammarPattern(structure);
  const norm = grammarByPattern!.get(clean);
  if (norm) return norm;

  // 3. Fuzzy: search all entries for substring match
  for (const [, entry] of grammarByPattern!) {
    const entryClean = normalizeGrammarPattern(entry.pattern);
    if (entryClean.includes(clean) || clean.includes(entryClean)) {
      return entry;
    }
  }
  return null;
}

/** Find DOJG cross-reference for a grammar concept */
export function lookupGrammarCrossRef(concept: string): { english: string; vietnamese: string; volume: string; page: string } | null {
  const clean = normalizeGrammarPattern(concept);
  
  for (const entry of DOJG_ENTRIES) {
    const entryConcept = normalizeGrammarPattern(entry.concept);
    if (entryConcept === clean || entryConcept.includes(clean) || clean.includes(entryConcept)) {
      return {
        english: entry.english,
        vietnamese: DOJG_ENGLISH_TO_VI[entry.english] || entry.english,
        volume: entry.volume,
        page: entry.page,
      };
    }
  }
  return null;
}

// ─── BUILD ENRICHMENT DATA FROM LOCAL SOURCES ──────────────────────────────

/** Convert local VocabEntry → partial ExtendedAnalysis (what we can fill locally) */
export function buildLocalVocabEnrichment(word: string): Partial<ExtendedAnalysis> | null {
  const entry = lookupVocab(word);
  if (!entry) return null;

  const kanjiDetails = getKanjiDetailsForWord(entry.word);

  // Convert VocabEntry examples → VocabularyExample[]
  const examples: VocabularyExample[] = (entry.examples || []).slice(0, 3).map(ex => ({
    japanese: ex.jp,
    reading: ex.reading || '',
    vietnamese: ex.meaning || '',
  }));

  // Convert synonyms
  const synonyms: RelatedWord[] | undefined = entry.synonyms?.map(s => {
    if (typeof s === 'string') return { text: s, reading: '', meaning: '', type: '' };
    return { text: (s as any).word || s, reading: (s as any).reading || '', meaning: (s as any).meaning || '', type: '' };
  });

  // Convert antonyms
  const antonyms: RelatedWord[] | undefined = entry.antonyms?.map(a => {
    if (typeof a === 'string') return { text: a, reading: '', meaning: '', type: '' };
    return { text: (a as any).word || a, reading: (a as any).reading || '', meaning: (a as any).meaning || '', type: '' };
  });

  const result: Partial<ExtendedAnalysis> = {
    canonicalForm: entry.word,
    definitionDetail: entry.meaning || undefined,
    kanjiDetails: kanjiDetails.length > 0 ? kanjiDetails : undefined,
    examples: examples.length > 0 ? examples : [],
  };

  // Map VocabEntry type → ExtendedAnalysis type
  if (entry.type) {
    const typeMap: Record<string, string> = {
      '動詞': 'VERB', 'Động từ': 'VERB', 'verb': 'VERB',
      '名詞': 'NOUN', 'Danh từ': 'NOUN', 'noun': 'NOUN',
      '形容詞': 'ADJECTIVE', 'Tính từ': 'ADJECTIVE', 'adjective': 'ADJECTIVE',
      'い形容詞': 'ADJECTIVE', 'な形容詞': 'ADJECTIVE',
      'Tính từ -i': 'ADJECTIVE', 'Tính từ -na': 'ADJECTIVE',
      '副詞': 'OTHER', 'Phó từ': 'OTHER', 'adverb': 'OTHER',
      '助詞': 'PARTICLE', 'Trợ từ': 'PARTICLE', 'particle': 'PARTICLE',
      '接続詞': 'OTHER', 'Liên từ': 'OTHER', 'conjunction': 'OTHER',
    };
    result.type = typeMap[entry.type] || entry.type;
  }

  if (synonyms && synonyms.length > 0) result.synonyms = synonyms;
  if (antonyms && antonyms.length > 0) result.antonyms = antonyms;

  return result;
}

/** Convert local GrammarEntry → partial ExtendedGrammarAnalysis */
export function buildLocalGrammarEnrichment(structure: string): Partial<ExtendedGrammarAnalysis> | null {
  const entry = lookupGrammar(structure);
  if (!entry) return null;

  const examples: VocabularyExample[] = (entry.examples || []).slice(0, 3).map(ex => ({
    japanese: ex.jp,
    reading: ex.reading || '',
    vietnamese: ex.meaning || '',
  }));

  // Look up DOJG cross-reference for additional context
  const crossRef = lookupGrammarCrossRef(entry.pattern);

  const result: Partial<ExtendedGrammarAnalysis> = {
    structure: entry.pattern,
    generalMeaning: entry.meaning || (crossRef?.vietnamese) || '',
    jlpt: entry.jlpt || undefined,
    examples: examples.length > 0 ? examples : [],
    notes: entry.note || undefined,
  };

  if (crossRef) {
    result.notes = (result.notes || '') + (result.notes ? '\n' : '') + 
      `📖 DOJG (${crossRef.volume}, p.${crossRef.page}): ${crossRef.vietnamese}`;
  }

  return result;
}

// ─── POST-PROCESS TOKENS FROM SENTENCE ANALYSIS ───────────────────────────

/** Enrich tokens returned by Gemini with local data (hanViet, JLPT, meaning) */
export function enrichTokensWithLocalData(tokens: Token[]): Token[] {
  ensureVocabMaps();
  ensureKanjiMap();

  return tokens.map(token => {
    const enriched = { ...token };
    const dictForm = token.deepDive?.dictionaryForm || token.text;

    // 1. Fill missing hanViet from kanji data
    if (!enriched.hanViet && dictForm) {
      const hv = getHanVietForWord(dictForm);
      if (hv) enriched.hanViet = hv;
    }

    // 2. Look up in vocab data for JLPT level tags
    const vocabMatch = lookupVocab(dictForm) || lookupVocab(token.text);
    if (vocabMatch) {
      // Add JLPT tag if not already present
      if (vocabMatch.jlpt && enriched.deepDive) {
        const existingTags = enriched.deepDive.tags || [];
        const jlptTag = `JLPT ${vocabMatch.jlpt}`;
        if (!existingTags.some(t => t.startsWith('JLPT'))) {
          enriched.deepDive = {
            ...enriched.deepDive,
            tags: [...existingTags, jlptTag],
          };
        }
      }

      // 3. Fill missing meaning with Vietnamese from local data
      if ((!enriched.meaning || enriched.meaning === '') && vocabMatch.meaning) {
        enriched.meaning = vocabMatch.meaning;
      }
    }

    return enriched;
  });
}

// ─── SMART ENRICHMENT: DECIDE WHAT NEEDS API ──────────────────────────────

export interface LocalEnrichmentResult {
  localData: Partial<ExtendedAnalysis>;
  needsApi: boolean;
  /** Context string to include in Gemini prompt when API is needed */
  contextHint: string;
}

/**
 * Determine what we have locally for vocab enrichment.
 * Checks: 1) Enrichment cache (from previous API calls) → 2) Static vocab data → 3) Needs API
 */
export function getVocabEnrichmentStrategy(word: string, _type: string): LocalEnrichmentResult {
  // CHECK 1: Enrichment cache (previously analyzed words)
  const cached = getCachedVocabEnrichment(word);
  if (cached) {
    console.log(`[Cache HIT] Vocab "${word}" found in enrichment cache — skipping API`);
    return {
      localData: cached,
      needsApi: false,
      contextHint: '',
    };
  }

  // CHECK 2: Static bundled data
  const local = buildLocalVocabEnrichment(word);
  
  if (!local) {
    // Nothing local — full API needed
    return {
      localData: {},
      needsApi: true,
      contextHint: '',
    };
  }

  // We have local data. Decide if we need API for the rest.
  const hasKanji = local.kanjiDetails && local.kanjiDetails.length > 0;
  const hasMeaning = !!local.definitionDetail;
  
  // Build context hint to help Gemini
  const hints: string[] = [];
  if (hasMeaning) hints.push(`Vietnamese meaning: ${local.definitionDetail}`);
  if (hasKanji) {
    const kanjiHints = local.kanjiDetails!.map(k => 
      `${k.char}(HV:${k.hanViet}, On:${k.onyomi.join('/')}, Kun:${k.kunyomi.join('/')})`
    ).join(', ');
    hints.push(`Kanji: ${kanjiHints}`);
  }
  if (local.synonyms?.length) hints.push(`Synonyms: ${local.synonyms.map(s => s.text).join(', ')}`);

  return {
    localData: local,
    needsApi: true, // Always call API for conjugations, pitch, transitivity etc.
    contextHint: hints.length > 0 
      ? `\n[LOCAL DATA CONTEXT - use as reference, focus on conjugations/pitch/transitivity/collocations/relatedForms that are NOT provided]:\n${hints.join('\n')}` 
      : '',
  };
}

export interface LocalGrammarEnrichmentResult {
  localData: Partial<ExtendedGrammarAnalysis>;
  needsApi: boolean;
  contextHint: string;
}

/**
 * Determine what we have locally for grammar enrichment.
 * Checks: 1) Enrichment cache → 2) Static grammar data → 3) Needs API
 */
export function getGrammarEnrichmentStrategy(structure: string): LocalGrammarEnrichmentResult {
  // CHECK 1: Enrichment cache
  const cached = getCachedGrammarEnrichment(structure);
  if (cached) {
    console.log(`[Cache HIT] Grammar "${structure}" found in enrichment cache — skipping API`);
    return {
      localData: cached,
      needsApi: false,
      contextHint: '',
    };
  }

  // CHECK 2: Static bundled data
  const local = buildLocalGrammarEnrichment(structure);
  
  if (!local) {
    return {
      localData: {},
      needsApi: true,
      contextHint: '',
    };
  }

  const hints: string[] = [];
  if (local.generalMeaning) hints.push(`Vietnamese meaning: ${local.generalMeaning}`);
  if (local.jlpt) hints.push(`JLPT: ${local.jlpt}`);
  if (local.notes) hints.push(`Notes: ${local.notes}`);

  return {
    localData: local,
    needsApi: true, // Always call API for variations, commonMistakes, detailedComparison, breakdown
    contextHint: hints.length > 0
      ? `\n[LOCAL DATA CONTEXT - use as reference, focus on variations/commonMistakes/detailedComparison/breakdown/collocations that are NOT provided]:\n${hints.join('\n')}`
      : '',
  };
}

// ─── MERGE HELPERS ─────────────────────────────────────────────────────────

/** Merge local vocab data with API result. Local kanjiDetails always win. */
export function mergeVocabEnrichment(
  local: Partial<ExtendedAnalysis>,
  api: ExtendedAnalysis
): ExtendedAnalysis {
  return {
    ...api,
    // Local kanji details are authoritative (from our 2000+ kanji database)
    kanjiDetails: (local.kanjiDetails && local.kanjiDetails.length > 0)
      ? local.kanjiDetails
      : api.kanjiDetails,
    // Use API definition but fall back to local
    definitionDetail: api.definitionDetail || local.definitionDetail || '',
    // Merge examples: API first, then local extras
    examples: [
      ...(api.examples || []),
      ...(local.examples || []).filter(le => 
        !(api.examples || []).some(ae => ae.japanese === le.japanese)
      ),
    ],
    // Merge synonyms
    synonyms: mergeLists(api.synonyms, local.synonyms),
    // Merge antonyms
    antonyms: mergeLists(api.antonyms, local.antonyms),
  };
}

/** Merge local grammar data with API result */
export function mergeGrammarEnrichment(
  local: Partial<ExtendedGrammarAnalysis>,
  api: ExtendedGrammarAnalysis
): ExtendedGrammarAnalysis {
  return {
    ...api,
    // Use API meaning but fall back to local
    generalMeaning: api.generalMeaning || local.generalMeaning || '',
    // Use local JLPT if API didn't provide
    jlpt: api.jlpt || local.jlpt,
    // Merge notes
    notes: [api.notes, local.notes].filter(Boolean).join('\n') || undefined,
    // Merge examples
    examples: [
      ...(api.examples || []),
      ...(local.examples || []).filter(le =>
        !(api.examples || []).some(ae => ae.japanese === le.japanese)
      ),
    ],
  };
}

function mergeLists(apiList?: RelatedWord[], localList?: RelatedWord[]): RelatedWord[] | undefined {
  if (!apiList?.length && !localList?.length) return undefined;
  const combined = [...(apiList || [])];
  const texts = new Set(combined.map(r => r.text));
  for (const item of (localList || [])) {
    if (!texts.has(item.text)) {
      combined.push(item);
      texts.add(item.text);
    }
  }
  return combined.length > 0 ? combined : undefined;
}

// ─── STATS (for logging/debugging) ─────────────────────────────────────────

export function getLocalDataStats() {
  ensureVocabMaps();
  ensureKanjiMap();
  ensureGrammarMap();
  const cacheStats = getCacheStats();
  return {
    vocabCount: vocabByWord!.size,
    kanjiCount: kanjiByChar!.size,
    grammarCount: grammarByPattern!.size,
    dojgCount: DOJG_ENTRIES.length,
    hjgpCount: HJGP_ENTRIES.length,
    ...cacheStats,
  };
}
