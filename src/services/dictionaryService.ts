/**
 * Dictionary Service
 * Loads and searches static JSON vocab/grammar dictionaries from /public/data/
 * Data is fetched once and cached in memory.
 */

import { SavedToken, SavedGrammar, PartType } from '../types';

// ─── In-memory cache ───
let vocabCache: SavedToken[] | null = null;
let grammarCache: SavedGrammar[] | null = null;

// ─── Loaders ───

export async function loadVocabDictionary(): Promise<SavedToken[]> {
  if (vocabCache) return vocabCache;
  try {
    const res = await fetch('/data/vocab.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    vocabCache = data as SavedToken[];
    console.log(`[Dictionary] Loaded ${vocabCache.length} vocab entries`);
    return vocabCache;
  } catch (err) {
    console.warn('[Dictionary] Failed to load vocab.json:', err);
    return [];
  }
}

export async function loadGrammarDictionary(): Promise<SavedGrammar[]> {
  if (grammarCache) return grammarCache;
  try {
    const res = await fetch('/data/grammar.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    grammarCache = data as SavedGrammar[];
    console.log(`[Dictionary] Loaded ${grammarCache.length} grammar entries`);
    return grammarCache;
  } catch (err) {
    console.warn('[Dictionary] Failed to load grammar.json:', err);
    return [];
  }
}

export async function preloadDictionaries(): Promise<void> {
  await Promise.all([loadVocabDictionary(), loadGrammarDictionary()]);
}

// ─── Search ───

export interface DictSearchResult {
  vocab: SavedToken[];
  grammar: SavedGrammar[];
}

function normalize(s: string): string {
  return s.toLowerCase().trim();
}

/**
 * Search both vocab and grammar dictionaries.
 * Matches against text, reading, romaji, meaning, hanViet.
 */
export async function searchDictionary(query: string, limit = 50): Promise<DictSearchResult> {
  const q = normalize(query);
  if (!q) return { vocab: [], grammar: [] };

  const [vocabAll, grammarAll] = await Promise.all([
    loadVocabDictionary(),
    loadGrammarDictionary()
  ]);

  const vocab = vocabAll.filter(v => {
    const fields = [v.text, v.reading, v.romaji, v.meaning, v.hanViet].filter(Boolean);
    return fields.some(f => normalize(f!).includes(q));
  }).slice(0, limit);

  const grammar = grammarAll.filter(g => {
    const fields = [g.structure, g.reading, g.meaning, g.usage, g.jlpt].filter(Boolean);
    return fields.some(f => normalize(f!).includes(q));
  }).slice(0, limit);

  return { vocab, grammar };
}

/**
 * Search vocab only with optional type filter.
 */
export async function searchVocab(query: string, typeFilter?: PartType, jlptFilter?: string, limit = 100): Promise<SavedToken[]> {
  const q = normalize(query);
  const all = await loadVocabDictionary();

  return all.filter(v => {
    if (typeFilter && v.type !== typeFilter) return false;
    const jlpt = v.deepDive?.tags?.find(t => t.startsWith('JLPT'))?.replace('JLPT ', '') || '';
    if (jlptFilter && jlpt !== jlptFilter) return false;
    if (!q) return true;
    const fields = [v.text, v.reading, v.romaji, v.meaning, v.hanViet].filter(Boolean);
    return fields.some(f => normalize(f!).includes(q));
  }).slice(0, limit);
}

/**
 * Search grammar only with optional JLPT filter.
 */
export async function searchGrammar(query: string, jlptFilter?: string, limit = 100): Promise<SavedGrammar[]> {
  const q = normalize(query);
  const all = await loadGrammarDictionary();

  return all.filter(g => {
    if (jlptFilter && g.jlpt !== jlptFilter) return false;
    if (!q) return true;
    const fields = [g.structure, g.reading, g.meaning, g.usage, g.construction].filter(Boolean);
    return fields.some(f => normalize(f!).includes(q));
  }).slice(0, limit);
}

/**
 * Get dictionary stats
 */
export async function getDictionaryStats(): Promise<{ vocabCount: number; grammarCount: number; jlptDist: Record<string, number> }> {
  const [vocab, grammar] = await Promise.all([loadVocabDictionary(), loadGrammarDictionary()]);
  const jlptDist: Record<string, number> = {};
  
  vocab.forEach(v => {
    const jlpt = v.deepDive?.tags?.find(t => t.startsWith('JLPT'))?.replace('JLPT ', '') || 'Other';
    jlptDist[jlpt] = (jlptDist[jlpt] || 0) + 1;
  });
  grammar.forEach(g => {
    const jlpt = g.jlpt || 'Other';
    jlptDist[jlpt] = (jlptDist[jlpt] || 0) + 1;
  });

  return { vocabCount: vocab.length, grammarCount: grammar.length, jlptDist };
}
