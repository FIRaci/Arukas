#!/usr/bin/env tsx

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { VOCAB_BY_LEVEL } from '../src/data/vocabData';
import type { VocabEntry, VocabExample } from '../src/data/vocabTypes';

const ROOT = process.cwd();
const INPUT_PATH = resolve(ROOT, 'tools/vocab_new.txt');
const OUTPUT_PATH = resolve(ROOT, 'src/data/vocabImportBatch1.ts');
const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;

type Level = (typeof LEVELS)[number];

type RawVocab = {
  t?: string;
  r?: string;
  rm?: string;
  m?: string;
  type?: string;
  jlpt?: string;
  hv?: string;
  ex?: string[];
};

const TYPE_MAP: Record<string, string> = {
  NOUN: 'Danh từ',
  VERB: 'Động từ',
  ADJECTIVE: 'Tính từ',
  PARTICLE: 'Trợ từ',
  CONJUNCTION: 'Liên từ',
  AUXILIARY: 'Trợ động từ',
  PUNCTUATION: 'Dấu câu',
  OTHER: 'Khác',
};

const LIMITS: Record<Level, number> = {
  N5: 80,
  N4: 120,
  N3: 180,
  N2: 260,
  N1: 600,
};

function normalizeWord(value: string): string {
  return value
    .trim()
    .replace(/[\s]+/g, '')
    .replace(/[~〜]/g, '')
    .replace(/[()（）]/g, '');
}

function parseExample(raw: string): VocabExample | null {
  const parts = raw.split('|').map((p) => p.trim());
  if (parts.length < 3 || !parts[0] || !parts[1] || !parts[2]) {
    return null;
  }
  return {
    jp: parts[0],
    reading: parts[1],
    meaning: parts[2],
  };
}

function escapeTs(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

function parseJsonl(path: string): RawVocab[] {
  const lines = readFileSync(path, 'utf-8').split(/\r?\n/);
  const out: RawVocab[] = [];

  for (const lineRaw of lines) {
    const line = lineRaw.trim();
    if (!line || line.startsWith('#') || line.startsWith('//')) {
      continue;
    }
    try {
      out.push(JSON.parse(line) as RawVocab);
    } catch {
      // Skip malformed lines.
    }
  }

  return out;
}

function isLikelyPlaceholder(word: string): boolean {
  return /[~〜]/.test(word);
}

function toEntry(raw: RawVocab, level: Level, id: string): VocabEntry | null {
  const word = (raw.t ?? '').trim();
  const reading = (raw.r ?? '').trim();
  const meaning = (raw.m ?? '').trim();
  if (!word || !meaning || isLikelyPlaceholder(word)) {
    return null;
  }

  const typeKey = (raw.type ?? 'OTHER').trim().toUpperCase();
  const mappedType = TYPE_MAP[typeKey] ?? TYPE_MAP.OTHER;
  const examples = (raw.ex ?? [])
    .map((e) => parseExample(e))
    .filter((e): e is VocabExample => Boolean(e))
    .slice(0, 3);

  const entry: VocabEntry = {
    id,
    word,
    reading,
    romaji: (raw.rm ?? '').trim(),
    meaning,
    type: mappedType,
    jlpt: level,
    tags: ['import-batch1'],
    examples,
  };

  const hanViet = (raw.hv ?? '').trim();
  if (hanViet) {
    entry.hanViet = hanViet;
  }

  return entry;
}

function buildBatch(): { wordsByLevel: Record<Level, string[]>; entriesByLevel: Record<Level, VocabEntry[]> } {
  const existing = new Set<string>();
  for (const item of VOCAB_BY_LEVEL.ALL) {
    existing.add(normalizeWord(item.word));
  }

  const seenIncoming = new Set<string>();
  const wordsByLevel: Record<Level, string[]> = { N5: [], N4: [], N3: [], N2: [], N1: [] };
  const entriesByLevel: Record<Level, VocabEntry[]> = { N5: [], N4: [], N3: [], N2: [], N1: [] };
  const counters: Record<Level, number> = { N5: 1, N4: 1, N3: 1, N2: 1, N1: 1 };

  const rawItems = parseJsonl(INPUT_PATH);

  for (const raw of rawItems) {
    const level = (raw.jlpt ?? '').trim().toUpperCase() as Level;
    if (!LEVELS.includes(level)) {
      continue;
    }
    if (entriesByLevel[level].length >= LIMITS[level]) {
      continue;
    }

    const word = (raw.t ?? '').trim();
    const normalized = normalizeWord(word);
    if (!normalized) {
      continue;
    }
    if (existing.has(normalized) || seenIncoming.has(normalized)) {
      continue;
    }

    const id = `vimp-${level.toLowerCase()}-${String(counters[level]).padStart(4, '0')}`;
    const entry = toEntry(raw, level, id);
    if (!entry) {
      continue;
    }

    counters[level] += 1;
    wordsByLevel[level].push(entry.word);
    entriesByLevel[level].push(entry);
    seenIncoming.add(normalized);
  }

  return { wordsByLevel, entriesByLevel };
}

function printEntry(entry: VocabEntry): string {
  const lines: string[] = [];
  lines.push('  {');
  lines.push(`    id: '${escapeTs(entry.id)}',`);
  lines.push(`    word: '${escapeTs(entry.word)}',`);
  lines.push(`    reading: '${escapeTs(entry.reading)}',`);
  lines.push(`    romaji: '${escapeTs(entry.romaji)}',`);
  lines.push(`    meaning: '${escapeTs(entry.meaning)}',`);
  if (entry.hanViet) {
    lines.push(`    hanViet: '${escapeTs(entry.hanViet)}',`);
  }
  lines.push(`    type: '${escapeTs(entry.type)}',`);
  lines.push(`    jlpt: '${escapeTs(entry.jlpt)}',`);
  lines.push(`    tags: ['${entry.tags.map(escapeTs).join("', '")}'],`);

  if (entry.examples.length > 0) {
    lines.push('    examples: [');
    for (const ex of entry.examples) {
      lines.push(
        `      { jp: '${escapeTs(ex.jp)}', reading: '${escapeTs(ex.reading)}', meaning: '${escapeTs(ex.meaning)}' },`,
      );
    }
    lines.push('    ],');
  } else {
    lines.push('    examples: [],');
  }

  lines.push('  },');
  return lines.join('\n');
}

function printWordArray(name: string, words: string[]): string {
  const lines: string[] = [];
  lines.push(`export const ${name}: string[] = [`);
  for (const word of words) {
    lines.push(`  '${escapeTs(word)}',`);
  }
  lines.push('];');
  return lines.join('\n');
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

function writeBatchFile(wordsByLevel: Record<Level, string[]>, entriesByLevel: Record<Level, VocabEntry[]>): void {
  const file: string[] = [];

  file.push('// ============================================================================');
  file.push('// VOCAB IMPORT BATCH 1 — Generated from tools/vocab_new.txt');
  file.push('// Scope: N5-N1, deduped by word against current VOCAB_BY_LEVEL.ALL');
  file.push('// ============================================================================');
  file.push("import type { VocabEntry } from './vocabTypes';");
  file.push('');

  for (const level of LEVELS) {
    file.push(printWordArray(`VOCAB_IMPORT_BATCH1_${level}_WORDS`, wordsByLevel[level]));
    file.push('');
  }

  for (const level of LEVELS) {
    file.push(printEntryArray(`VOCAB_IMPORT_BATCH1_${level}`, entriesByLevel[level]));
    file.push('');
  }

  writeFileSync(OUTPUT_PATH, `${file.join('\n')}\n`, 'utf-8');
}

function main(): void {
  const { wordsByLevel, entriesByLevel } = buildBatch();
  writeBatchFile(wordsByLevel, entriesByLevel);

  console.log('Generated:', OUTPUT_PATH);
  for (const level of LEVELS) {
    console.log(`${level} words: ${wordsByLevel[level].length}, entries: ${entriesByLevel[level].length}`);
  }
}

main();
