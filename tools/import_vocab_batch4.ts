#!/usr/bin/env tsx

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { VOCAB_BY_LEVEL } from '../src/data/vocabData';
import { VOCAB_EXTRA_PART1 } from '../src/data/vocabEntriesExtra_Part1';
import { VOCAB_EXTRA_PART2 } from '../src/data/vocabEntriesExtra_Part2';
import { VOCAB_EXTRA_PART3 } from '../src/data/vocabEntriesExtra_Part3';
import { VOCAB_EXTRA_PART4 } from '../src/data/vocabEntriesExtra_Part4';
import { VOCAB_EXTRA_PART5 } from '../src/data/vocabEntriesExtra_Part5';
import { VOCAB_EXTRA_PART6 } from '../src/data/vocabEntriesExtra_Part6';
import type { VocabEntry } from '../src/data/vocabTypes';

const ROOT = process.cwd();
const OUTPUT_PATH = resolve(ROOT, 'src/data/vocabImportBatch4.ts');
const DEFAULT_LIMIT = 5000;
const BATCH4_ID_PREFIX = 'vimp4-';

function hasJapaneseScript(text: string): boolean {
  return /[\u3040-\u30FF\u3400-\u9FFF々]/.test(text);
}

function normalizeText(value: string): string {
  return (value || '').normalize('NFC').replace(/\s+/g, ' ').trim();
}

function isCleanWord(word: string): boolean {
  const w = normalizeText(word);
  if (!w) return false;
  if (!hasJapaneseScript(w)) return false;
  if (w.length > 12) return false;
  if (/[A-Za-z0-9０-９]/.test(w)) return false;
  if (/[\s　]/.test(w)) return false;
  if (/[、。,.!?！？・／]/.test(w)) return false;
  if (/[|\\/<>]/.test(w)) return false;
  return true;
}

function isCleanMeaning(meaning: string): boolean {
  const m = normalizeText(meaning);
  if (!m) return false;
  if (m.length > 160) return false;
  if (/�/.test(m)) return false;
  if (/^[-–—\s]+$/.test(m)) return false;
  return true;
}

function qualityScore(source: VocabEntry): number {
  const word = normalizeText(source.word || '');
  const meaning = normalizeText(source.meaning || '');
  const reading = normalizeText(source.reading || '');
  const type = normalizeText(source.type || '');

  let score = 0;

  if (/^[\u4E00-\u9FFF々]+$/.test(word)) score += 5;
  else if (/^[\u3040-\u309F\u30A0-\u30FFー]+$/.test(word)) score += 4;
  else score += 2;

  if (word.length <= 2) score += 4;
  else if (word.length <= 4) score += 3;
  else if (word.length <= 6) score += 2;
  else if (word.length <= 8) score += 1;
  else score -= 2;

  if (/[のをにへでとがはも]/.test(word) && word.length >= 5) score -= 2;
  if ((word.match(/[・]/g) || []).length > 1) score -= 2;

  if (meaning.length <= 40) score += 2;
  else if (meaning.length <= 80) score += 1;
  else score -= 2;

  if (reading) score += 1;
  if (type) score += 1;

  return score;
}

function isLegacyBatch4Entry(entry: VocabEntry): boolean {
  return (entry.id || '').startsWith(BATCH4_ID_PREFIX);
}

function escapeTs(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

function parseLimitArg(args: string[]): number {
  const arg = args.find((a) => a.startsWith('--limit='));
  if (!arg) return DEFAULT_LIMIT;
  const parsed = Number(arg.slice('--limit='.length));
  if (!Number.isFinite(parsed) || parsed <= 0) return DEFAULT_LIMIT;
  return Math.floor(parsed);
}

function normalizeType(type: string): string {
  const t = (type || '').trim();
  return t || 'Từ vựng';
}

function toImportedEntry(source: VocabEntry, index: number): VocabEntry {
  const word = normalizeText(source.word || '');
  const reading = normalizeText(source.reading || '') || word;
  const meaning = normalizeText(source.meaning || '');
  const romaji = normalizeText(source.romaji || '');
  const type = normalizeType(normalizeText(source.type || ''));

  return {
    id: `vimp4-n1-${String(index + 1).padStart(5, '0')}`,
    word,
    reading,
    romaji,
    meaning,
    type,
    jlpt: 'N1',
    tags: ['Imported Batch 4', 'Từ vựng bổ sung'],
    examples: source.examples || [],
  };
}

function printEntry(entry: VocabEntry): string {
  return [
    '  {',
    `    id: '${escapeTs(entry.id)}',`,
    `    word: '${escapeTs(entry.word)}',`,
    `    reading: '${escapeTs(entry.reading)}',`,
    `    romaji: '${escapeTs(entry.romaji || '')}',`,
    `    meaning: '${escapeTs(entry.meaning)}',`,
    `    type: '${escapeTs(entry.type || '')}',`,
    "    jlpt: 'N1',",
    "    tags: ['Imported Batch 4', 'Từ vựng bổ sung'],",
    '    examples: [],',
    '  },',
  ].join('\n');
}

function writeBatchFile(entries: VocabEntry[]): void {
  const lines: string[] = [];
  lines.push('// ============================================================================');
  lines.push('// VOCAB IMPORT BATCH 4 — Generated from vocabEntriesExtra_Part1..6');
  lines.push('// Scope: Clean Japanese-script entries not present in VOCAB_BY_LEVEL.ALL');
  lines.push('// Mapping: Imported as N1 to expand core dictionary coverage');
  lines.push('// ============================================================================');
  lines.push("import type { VocabEntry } from './vocabTypes';");
  lines.push('');

  const words = entries.map((e) => e.word);
  lines.push(`export const VOCAB_IMPORT_BATCH4_N1_WORDS: string[] = ${JSON.stringify(words, null, 2)};`);
  lines.push('');

  lines.push('export const VOCAB_IMPORT_BATCH4_N1: VocabEntry[] = [');
  for (const entry of entries) {
    lines.push(printEntry(entry));
  }
  lines.push('];');
  lines.push('');

  writeFileSync(OUTPUT_PATH, `${lines.join('\n')}\n`, 'utf-8');
}

function main(): void {
  const limit = parseLimitArg(process.argv.slice(2));
  const source: VocabEntry[] = [
    ...VOCAB_EXTRA_PART1,
    ...VOCAB_EXTRA_PART2,
    ...VOCAB_EXTRA_PART3,
    ...VOCAB_EXTRA_PART4,
    ...VOCAB_EXTRA_PART5,
    ...VOCAB_EXTRA_PART6,
  ];

  const existingWords = new Set(
    VOCAB_BY_LEVEL.ALL
      .filter((v) => !isLegacyBatch4Entry(v))
      .map((v) => v.word)
  );
  const incomingSeen = new Set<string>();

  const candidates: Array<{ entry: VocabEntry; score: number }> = [];
  let rejectedBadWord = 0;
  let rejectedBadMeaning = 0;
  let rejectedDup = 0;

  for (const item of source) {
    const word = normalizeText(item.word || '');
    const meaning = normalizeText(item.meaning || '');

    if (!isCleanWord(word)) {
      rejectedBadWord += 1;
      continue;
    }

    if (!isCleanMeaning(meaning)) {
      rejectedBadMeaning += 1;
      continue;
    }

    if (existingWords.has(word) || incomingSeen.has(word)) {
      rejectedDup += 1;
      continue;
    }

    incomingSeen.add(word);
    candidates.push({ entry: item, score: qualityScore(item) });
  }

  candidates.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return (a.entry.word || '').localeCompare(b.entry.word || '', 'ja');
  });

  const selected = candidates.slice(0, limit).map((item, idx) => toImportedEntry(item.entry, idx));
  writeBatchFile(selected);

  console.log(`Generated: ${OUTPUT_PATH}`);
  console.log(`Selected import count: ${selected.length}`);
  console.log(`Total candidates after dedupe/filters: ${candidates.length}`);
  console.log(`Rejected bad words: ${rejectedBadWord}`);
  console.log(`Rejected bad meaning: ${rejectedBadMeaning}`);
  console.log(`Rejected duplicates: ${rejectedDup}`);
  console.log(`Top candidate score: ${candidates[0]?.score ?? 0}`);
  console.log(`Lowest selected score: ${Math.min(...selected.map((e) => qualityScore(e)))}`);
}

main();
