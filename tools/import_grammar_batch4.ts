#!/usr/bin/env tsx

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { GRAMMAR_BY_LEVEL } from '../src/data/grammarData';
import type { GrammarEntry, GrammarExample } from '../src/data/grammarTypes';

const ROOT = process.cwd();
const INPUT_PATH = resolve(ROOT, 'tools/grammar_new.txt');
const OUTPUT_PATH = resolve(ROOT, 'src/data/grammarImportBatch4.ts');
const LEVELS = ['N2', 'N1'] as const;

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

function normalizeText(value: string): string {
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
  if (parts.length < 3) {
    return null;
  }
  if (!parts[0] || !parts[1] || !parts[2]) {
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
      // Skip malformed line.
    }
  }

  return out;
}

function pickLevel(rawJlpt: string): Level | null {
  const cleaned = (rawJlpt || '').toUpperCase().replace(/\s+/g, '');
  if (cleaned === 'N1' || cleaned === 'N2') {
    return cleaned;
  }

  if (cleaned.includes('-')) {
    const tokens = cleaned.split('-').map((t) => t.trim()).filter(Boolean);
    if (tokens.includes('N1')) return 'N1';
    if (tokens.includes('N2')) return 'N2';
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
      lines.push(
        `      { jp: '${escapeTs(ex.jp)}', reading: '${escapeTs(ex.reading)}', meaning: '${escapeTs(ex.meaning)}' },`,
      );
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
  const rows = parseJsonl(INPUT_PATH);

  const existingPatternMeaning = new Set<string>();
  for (const g of GRAMMAR_BY_LEVEL.ALL) {
    const p = normalizeText((g as GrammarEntry).pattern || '');
    const m = normalizeText((g as GrammarEntry).meaning || '');
    if (p && m) {
      existingPatternMeaning.add(`${p}::${m}`);
    }
  }

  const seenIncoming = new Set<string>();
  const batch: Record<Level, GrammarEntry[]> = { N2: [], N1: [] };
  const counters: Record<Level, number> = { N2: 1, N1: 1 };

  let skippedDuplicate = 0;
  let skippedInvalid = 0;

  for (const row of rows) {
    const level = pickLevel(row.jlpt || '');
    if (!level) {
      continue;
    }

    const pattern = (row.s || '').trim();
    const meaning = (row.m || '').trim();
    if (!pattern || !meaning) {
      skippedInvalid += 1;
      continue;
    }

    const p = normalizeText(pattern);
    const m = normalizeText(meaning);
    if (!p || !m) {
      skippedInvalid += 1;
      continue;
    }

    const key = `${p}::${m}`;
    if (existingPatternMeaning.has(key) || seenIncoming.has(key)) {
      skippedDuplicate += 1;
      continue;
    }

    const id = `gimp4-${level.toLowerCase()}-${String(counters[level]).padStart(3, '0')}`;
    counters[level] += 1;

    const examples = (row.ex || [])
      .map((e) => parseExample(e))
      .filter((e): e is GrammarExample => Boolean(e))
      .slice(0, 4);

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
    seenIncoming.add(key);
  }

  return { batch, skippedDuplicate, skippedInvalid };
}

function writeBatchFile(batch: Record<Level, GrammarEntry[]>): void {
  const lines: string[] = [];

  lines.push('// ============================================================================');
  lines.push('// GRAMMAR IMPORT BATCH 4 — Generated from tools/grammar_new.txt');
  lines.push('// Scope: N2/N1 remaining entries with pattern+meaning dedupe');
  lines.push('// ============================================================================');
  lines.push("import type { GrammarEntry } from './grammarTypes';");
  lines.push('');

  lines.push('export const GRAMMAR_IMPORT_BATCH4_N2: GrammarEntry[] = [');
  for (const entry of batch.N2) {
    lines.push(entryToTs(entry));
  }
  lines.push('];');
  lines.push('');

  lines.push('export const GRAMMAR_IMPORT_BATCH4_N1: GrammarEntry[] = [');
  for (const entry of batch.N1) {
    lines.push(entryToTs(entry));
  }
  lines.push('];');
  lines.push('');

  writeFileSync(OUTPUT_PATH, `${lines.join('\n')}\n`, 'utf-8');
}

function main(): void {
  const { batch, skippedDuplicate, skippedInvalid } = buildBatch();
  writeBatchFile(batch);

  console.log('Generated:', OUTPUT_PATH);
  console.log(`N2 imported: ${batch.N2.length}`);
  console.log(`N1 imported: ${batch.N1.length}`);
  console.log(`Skipped duplicates: ${skippedDuplicate}`);
  console.log(`Skipped invalid: ${skippedInvalid}`);
}

main();
