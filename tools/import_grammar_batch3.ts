#!/usr/bin/env tsx

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { GRAMMAR_BY_LEVEL } from '../src/data/grammarData';
import type { GrammarEntry, GrammarExample } from '../src/data/grammarTypes';

const ROOT = process.cwd();
const INPUT_PATH = resolve(ROOT, 'tools/grammar_new.txt');
const OUTPUT_PATH = resolve(ROOT, 'src/data/grammarImportBatch3.ts');
const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;

type Level = (typeof LEVELS)[number];

type RawGrammar = {
  s?: string;
  r?: string;
  m?: string;
  usage?: string;
  cons?: string;
  jlpt?: string;
  ex?: string[];
};

function normalizePattern(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[「」『』"'`]/g, '')
    .replace(/[()（）\[\]{}]/g, '')
    .replace(/[~〜]/g, '～')
    .replace(/[\s/]+/g, '');
}

function parseExample(raw: string): GrammarExample | null {
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

function parseJsonl(path: string): RawGrammar[] {
  const lines = readFileSync(path, 'utf-8').split(/\r?\n/);
  const out: RawGrammar[] = [];

  for (const lineRaw of lines) {
    const line = lineRaw.trim();
    if (!line || line.startsWith('#') || line.startsWith('//')) {
      continue;
    }
    try {
      out.push(JSON.parse(line) as RawGrammar);
    } catch {
      // Skip malformed lines.
    }
  }

  return out;
}

function pickLevel(rawJlpt: string): Level | null {
  const cleaned = (rawJlpt || '').toUpperCase().trim();
  if (cleaned === 'N5' || cleaned === 'N4' || cleaned === 'N3' || cleaned === 'N2' || cleaned === 'N1') {
    return cleaned;
  }
  return null;
}

function makeNote(usage?: string, construction?: string): string | undefined {
  const parts: string[] = [];
  if (usage && usage.trim()) {
    parts.push(`Usage: ${usage.trim()}`);
  }
  if (construction && construction.trim()) {
    parts.push(`Construction: ${construction.trim()}`);
  }
  return parts.length > 0 ? parts.join(' | ') : undefined;
}

function escapeTs(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

function entryToTs(entry: GrammarEntry): string {
  const lines: string[] = [];
  lines.push('  {');
  lines.push(`    id: '${escapeTs(entry.id)}',`);
  lines.push(`    pattern: '${escapeTs(entry.pattern)}',`);
  lines.push(`    meaning: '${escapeTs(entry.meaning)}',`);
  lines.push(`    category: '${escapeTs(entry.category)}', jlpt: '${escapeTs(entry.jlpt)}',`);

  if (entry.examples && entry.examples.length > 0) {
    lines.push('    examples: [');
    for (const ex of entry.examples) {
      lines.push(`      { jp: '${escapeTs(ex.jp)}', reading: '${escapeTs(ex.reading)}', meaning: '${escapeTs(ex.meaning)}' },`);
    }
    lines.push('    ],');
  }

  if (entry.note) {
    lines.push(`    note: '${escapeTs(entry.note)}',`);
  }

  lines.push('  },');
  return lines.join('\n');
}

function buildBatch(): { batch: Record<Level, GrammarEntry[]>; skippedDuplicate: number; skippedInvalid: number } {
  const raw = parseJsonl(INPUT_PATH);
  const existingPatternSet = new Set<string>();
  for (const item of GRAMMAR_BY_LEVEL.ALL) {
    existingPatternSet.add(normalizePattern(item.pattern));
  }

  const seenIncoming = new Set<string>();
  const batch: Record<Level, GrammarEntry[]> = { N5: [], N4: [], N3: [], N2: [], N1: [] };
  const counters: Record<Level, number> = { N5: 1, N4: 1, N3: 1, N2: 1, N1: 1 };

  let skippedDuplicate = 0;
  let skippedInvalid = 0;

  for (const row of raw) {
    const level = pickLevel(row.jlpt ?? '');
    if (!level) {
      continue;
    }

    const pattern = (row.s ?? '').trim();
    const meaning = (row.m ?? '').trim();
    if (!pattern || !meaning) {
      skippedInvalid += 1;
      continue;
    }

    const norm = normalizePattern(pattern);
    if (!norm) {
      skippedInvalid += 1;
      continue;
    }

    if (existingPatternSet.has(norm) || seenIncoming.has(norm)) {
      skippedDuplicate += 1;
      continue;
    }

    const examples = (row.ex ?? [])
      .map((e) => parseExample(e))
      .filter((e): e is GrammarExample => Boolean(e))
      .slice(0, 4);

    const id = `gimp3-${level.toLowerCase()}-${String(counters[level]).padStart(3, '0')}`;
    counters[level] += 1;

    const entry: GrammarEntry = {
      id,
      pattern,
      meaning,
      category: 'advanced',
      jlpt: level,
    };

    if (examples.length > 0) {
      entry.examples = examples;
    }

    const note = makeNote(row.usage, row.cons);
    if (note) {
      entry.note = note;
    }

    batch[level].push(entry);
    seenIncoming.add(norm);
  }

  return { batch, skippedDuplicate, skippedInvalid };
}

function writeBatchFile(batch: Record<Level, GrammarEntry[]>): void {
  const file: string[] = [];

  file.push('// ============================================================================');
  file.push('// GRAMMAR IMPORT BATCH 3 — Generated from tools/grammar_new.txt');
  file.push('// Scope: all remaining exact N5-N1 labels, deduped by normalized pattern');
  file.push('// ============================================================================');
  file.push("import type { GrammarEntry } from './grammarTypes';");
  file.push('');

  for (const level of LEVELS) {
    file.push(`export const GRAMMAR_IMPORT_BATCH3_${level}: GrammarEntry[] = [`);
    for (const entry of batch[level]) {
      file.push(entryToTs(entry));
    }
    file.push('];');
    file.push('');
  }

  writeFileSync(OUTPUT_PATH, `${file.join('\n')}\n`, 'utf-8');
}

function main(): void {
  const { batch, skippedDuplicate, skippedInvalid } = buildBatch();
  writeBatchFile(batch);

  console.log('Generated:', OUTPUT_PATH);
  for (const level of LEVELS) {
    console.log(`${level} imported: ${batch[level].length}`);
  }
  console.log(`Skipped duplicates/existing: ${skippedDuplicate}`);
  console.log(`Skipped invalid rows: ${skippedInvalid}`);
}

main();
