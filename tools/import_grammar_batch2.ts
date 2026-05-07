#!/usr/bin/env tsx

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { GRAMMAR_BY_LEVEL } from '../src/data/grammarData';
import type { GrammarEntry, GrammarExample } from '../src/data/grammarTypes';

const ROOT = process.cwd();
const INPUT_PATH = resolve(ROOT, 'tools/grammar_new.txt');
const OUTPUT_PATH = resolve(ROOT, 'src/data/grammarImportBatch2.ts');
const TARGET_LEVELS = ['N2', 'N1'] as const;

type TargetLevel = (typeof TARGET_LEVELS)[number];

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

function normalizeJlptToken(token: string): string {
  return token.toUpperCase().replace(/\s+/g, '');
}

function pickTargetLevel(rawJlpt: string): TargetLevel | null {
  const cleaned = normalizeJlptToken(rawJlpt);
  if (!cleaned) {
    return null;
  }

  if (cleaned === 'N1' || cleaned === 'N2') {
    return cleaned;
  }

  // Handle range labels such as N3-N2, N5-N1
  if (cleaned.includes('-')) {
    const tokens = cleaned
      .split('-')
      .map((t) => t.trim())
      .filter(Boolean);

    if (tokens.includes('N1')) {
      return 'N1';
    }
    if (tokens.includes('N2')) {
      return 'N2';
    }
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

function buildBatch(): { batch: Record<TargetLevel, GrammarEntry[]>; skippedDuplicate: number; skippedInvalid: number } {
  const raw = parseJsonl(INPUT_PATH);
  const existingPatternSet = new Set<string>();
  for (const item of GRAMMAR_BY_LEVEL.ALL) {
    existingPatternSet.add(normalizePattern(item.pattern));
  }

  const seenIncoming = new Set<string>();
  const batch: Record<TargetLevel, GrammarEntry[]> = { N2: [], N1: [] };
  const counters: Record<TargetLevel, number> = { N2: 1, N1: 1 };

  let skippedDuplicate = 0;
  let skippedInvalid = 0;

  for (const row of raw) {
    const pickedLevel = pickTargetLevel(row.jlpt ?? '');
    if (!pickedLevel) {
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

    const id = `gimp2-${pickedLevel.toLowerCase()}-${String(counters[pickedLevel]).padStart(3, '0')}`;
    counters[pickedLevel] += 1;

    const entry: GrammarEntry = {
      id,
      pattern,
      meaning,
      category: 'advanced',
      jlpt: pickedLevel,
    };

    if (examples.length > 0) {
      entry.examples = examples;
    }

    const note = makeNote(row.usage, row.cons);
    if (note) {
      entry.note = note;
    }

    batch[pickedLevel].push(entry);
    seenIncoming.add(norm);
  }

  return { batch, skippedDuplicate, skippedInvalid };
}

function writeBatchFile(batch: Record<TargetLevel, GrammarEntry[]>): void {
  const file: string[] = [];

  file.push('// ============================================================================');
  file.push('// GRAMMAR IMPORT BATCH 2 — Generated from tools/grammar_new.txt');
  file.push('// Scope: remaining N2/N1 (+ range labels mapped to N2/N1), deduped by pattern');
  file.push('// ============================================================================');
  file.push("import type { GrammarEntry } from './grammarTypes';");
  file.push('');
  file.push('export const GRAMMAR_IMPORT_BATCH2_N2: GrammarEntry[] = [');
  for (const entry of batch.N2) {
    file.push(entryToTs(entry));
  }
  file.push('];');
  file.push('');
  file.push('export const GRAMMAR_IMPORT_BATCH2_N1: GrammarEntry[] = [');
  for (const entry of batch.N1) {
    file.push(entryToTs(entry));
  }
  file.push('];');
  file.push('');

  writeFileSync(OUTPUT_PATH, `${file.join('\n')}\n`, 'utf-8');
}

function main(): void {
  const { batch, skippedDuplicate, skippedInvalid } = buildBatch();
  writeBatchFile(batch);

  console.log('Generated:', OUTPUT_PATH);
  console.log(`N2 imported: ${batch.N2.length}`);
  console.log(`N1 imported: ${batch.N1.length}`);
  console.log(`Skipped duplicates/existing: ${skippedDuplicate}`);
  console.log(`Skipped invalid rows: ${skippedInvalid}`);
}

main();
