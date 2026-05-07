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
const OUTPUT_PATH = resolve(ROOT, 'src/data/vocabImportBatch5.ts');
const BATCH5_ID_PREFIX = 'vimp5-';

const TARGET_BY_LEVEL = {
  N4: 1500,
  N3: 4000,
  N2: 6000,
} as const;

type TargetLevel = keyof typeof TARGET_BY_LEVEL;

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

function isLegacyBatch5Entry(entry: VocabEntry): boolean {
  return (entry.id || '').startsWith(BATCH5_ID_PREFIX);
}

function escapeTs(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

function normalizeType(type: string): string {
  const t = (type || '').trim();
  return t || 'Từ vựng';
}

function buildDeficits(): Record<TargetLevel, number> {
  const current = {
    N4: VOCAB_BY_LEVEL.N4.filter((v) => !isLegacyBatch5Entry(v)).length,
    N3: VOCAB_BY_LEVEL.N3.filter((v) => !isLegacyBatch5Entry(v)).length,
    N2: VOCAB_BY_LEVEL.N2.filter((v) => !isLegacyBatch5Entry(v)).length,
  };

  return {
    N4: Math.max(0, TARGET_BY_LEVEL.N4 - current.N4),
    N3: Math.max(0, TARGET_BY_LEVEL.N3 - current.N3),
    N2: Math.max(0, TARGET_BY_LEVEL.N2 - current.N2),
  };
}

function toImportedEntry(source: VocabEntry, level: TargetLevel, index: number): VocabEntry {
  const word = normalizeText(source.word || '');
  const reading = normalizeText(source.reading || '') || word;
  const meaning = normalizeText(source.meaning || '');
  const romaji = normalizeText(source.romaji || '');
  const type = normalizeType(normalizeText(source.type || ''));

  return {
    id: `vimp5-${level.toLowerCase()}-${String(index + 1).padStart(5, '0')}`,
    word,
    reading,
    romaji,
    meaning,
    type,
    jlpt: level,
    tags: ['Imported Batch 5', 'Từ vựng bổ sung'],
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
    `    jlpt: '${escapeTs(entry.jlpt || '')}',`,
    "    tags: ['Imported Batch 5', 'Từ vựng bổ sung'],",
    '    examples: [],',
    '  },',
  ].join('\n');
}

function printWordArray(name: string, words: string[]): string {
  return `export const ${name}: string[] = ${JSON.stringify(words, null, 2)};`;
}

function printEntryArray(name: string, entries: VocabEntry[]): string {
  const lines: string[] = [];
  lines.push(`export const ${name}: VocabEntry[] = [`);
  for (const entry of entries) {
    lines.push(printEntry(entry));
  }
  lines.push('];');
  return lines.join('\n');
}

function writeBatchFile(byLevel: Record<TargetLevel, VocabEntry[]>): void {
  const n4Words = byLevel.N4.map((e) => e.word);
  const n3Words = byLevel.N3.map((e) => e.word);
  const n2Words = byLevel.N2.map((e) => e.word);

  const lines: string[] = [];
  lines.push('// ============================================================================');
  lines.push('// VOCAB IMPORT BATCH 5 — Generated from vocabEntriesExtra_Part1..6');
  lines.push('// Scope: Fill remaining ambitious gaps for N4/N3/N2');
  lines.push('// Mapping: clean supplemental entries distributed to N2/N3/N4 deficits');
  lines.push('// ============================================================================');
  lines.push("import type { VocabEntry } from './vocabTypes';");
  lines.push('');

  lines.push(printWordArray('VOCAB_IMPORT_BATCH5_N4_WORDS', n4Words));
  lines.push('');
  lines.push(printWordArray('VOCAB_IMPORT_BATCH5_N3_WORDS', n3Words));
  lines.push('');
  lines.push(printWordArray('VOCAB_IMPORT_BATCH5_N2_WORDS', n2Words));
  lines.push('');

  lines.push(printEntryArray('VOCAB_IMPORT_BATCH5_N4', byLevel.N4));
  lines.push('');
  lines.push(printEntryArray('VOCAB_IMPORT_BATCH5_N3', byLevel.N3));
  lines.push('');
  lines.push(printEntryArray('VOCAB_IMPORT_BATCH5_N2', byLevel.N2));
  lines.push('');

  writeFileSync(OUTPUT_PATH, `${lines.join('\n')}\n`, 'utf-8');
}

function main(): void {
  const deficits = buildDeficits();
  const levelOrder: TargetLevel[] = ['N2', 'N3', 'N4'];

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
      .filter((v) => !isLegacyBatch5Entry(v))
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

  const selectedRawByLevel: Record<TargetLevel, VocabEntry[]> = {
    N4: [],
    N3: [],
    N2: [],
  };

  for (const item of candidates) {
    const targetLevel = levelOrder.find((lvl) => deficits[lvl] > 0);
    if (!targetLevel) break;

    selectedRawByLevel[targetLevel].push(item.entry);
    deficits[targetLevel] -= 1;
  }

  const byLevel: Record<TargetLevel, VocabEntry[]> = {
    N4: selectedRawByLevel.N4.map((v, idx) => toImportedEntry(v, 'N4', idx)),
    N3: selectedRawByLevel.N3.map((v, idx) => toImportedEntry(v, 'N3', idx)),
    N2: selectedRawByLevel.N2.map((v, idx) => toImportedEntry(v, 'N2', idx)),
  };

  writeBatchFile(byLevel);

  console.log(`Generated: ${OUTPUT_PATH}`);
  console.log(`N4 selected: ${byLevel.N4.length}`);
  console.log(`N3 selected: ${byLevel.N3.length}`);
  console.log(`N2 selected: ${byLevel.N2.length}`);
  console.log(`Total selected: ${byLevel.N4.length + byLevel.N3.length + byLevel.N2.length}`);
  console.log(`Rejected bad words: ${rejectedBadWord}`);
  console.log(`Rejected bad meaning: ${rejectedBadMeaning}`);
  console.log(`Rejected duplicates: ${rejectedDup}`);
  console.log(`Top candidate score: ${candidates[0]?.score ?? 0}`);
  console.log(`Lowest selected score: ${Math.min(...[...byLevel.N4, ...byLevel.N3, ...byLevel.N2].map((e) => qualityScore(e)))} `);
  console.log(`Remaining deficits after selection: N4=${deficits.N4}, N3=${deficits.N3}, N2=${deficits.N2}`);
}

main();
