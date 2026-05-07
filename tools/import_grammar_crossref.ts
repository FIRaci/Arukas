#!/usr/bin/env tsx

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { GRAMMAR_BY_LEVEL } from '../src/data/grammarData';
import { DOJG_ENTRIES } from '../src/data/grammarCrossRef';
import { getDojgViMeaning } from '../src/data/grammarCrossRefVi';
import type { GrammarEntry } from '../src/data/grammarTypes';

const ROOT = process.cwd();
const OUTPUT_PATH = resolve(ROOT, 'src/data/grammarImportCrossRefBatch1.ts');

type TargetLevel = 'N4';

function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[「」『』"'`]/g, '')
    .replace(/[()（）\[\]{}]/g, '')
    .replace(/[~〜]/g, '～')
    .replace(/[\s/]+/g, '');
}

function escapeTs(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

function canonicalPattern(concept: string, subEntry: string): string {
  const c = (concept || '').trim();
  const s = (subEntry || '').trim();
  return s ? `${c} (${s})` : c;
}

function buildNote(page: string, hjgpRef: string, dojpRef: string): string {
  const parts: string[] = [];
  if (page.trim()) parts.push(`DOJG: ${page.trim()}`);
  if (hjgpRef.trim()) parts.push(`HJGP: ${hjgpRef.trim()}`);
  if (dojpRef.trim()) parts.push(`DOJP: ${dojpRef.trim()}`);
  return parts.join(' | ');
}

function buildBatch(): { entriesByLevel: Record<TargetLevel, GrammarEntry[]>; skippedEmpty: number; skippedDup: number } {
  const existingPatternMeaning = new Set<string>();
  for (const g of GRAMMAR_BY_LEVEL.ALL) {
    const p = normalizeText(g.pattern || '');
    const m = normalizeText(g.meaning || '');
    if (!p || !m) continue;
    existingPatternMeaning.add(`${p}::${m}`);
  }

  const incomingSeen = new Set<string>();
  const entriesByLevel: Record<TargetLevel, GrammarEntry[]> = { N4: [] };

  let skippedEmpty = 0;
  let skippedDup = 0;
  let counter = 1;

  for (const item of DOJG_ENTRIES) {
    const volume = (item.volume || '').trim().toLowerCase();
    if (volume !== 'basic') {
      continue;
    }

    const pattern = canonicalPattern(item.concept || '', item.subEntry || '');
    const meaning = getDojgViMeaning((item.english || '').trim());

    const p = normalizeText(pattern);
    const m = normalizeText(meaning);
    if (!p || !m) {
      skippedEmpty += 1;
      continue;
    }

    const key = `${p}::${m}`;
    if (existingPatternMeaning.has(key) || incomingSeen.has(key)) {
      skippedDup += 1;
      continue;
    }

    incomingSeen.add(key);

    const note = buildNote(item.page || '', item.hjgpRef || '', item.dojpRef || '');
    const entry: GrammarEntry = {
      id: `gcr1-n4-${String(counter).padStart(3, '0')}`,
      pattern,
      meaning,
      category: 'dict_ref',
      jlpt: 'N4',
      note,
    };

    entriesByLevel.N4.push(entry);
    counter += 1;
  }

  return { entriesByLevel, skippedEmpty, skippedDup };
}

function printEntry(entry: GrammarEntry): string {
  const lines: string[] = [];
  lines.push('  {');
  lines.push(`    id: '${escapeTs(entry.id)}',`);
  lines.push(`    pattern: '${escapeTs(entry.pattern)}',`);
  lines.push(`    meaning: '${escapeTs(entry.meaning)}',`);
  lines.push("    category: 'dict_ref', jlpt: 'N4',");
  if (entry.note) {
    lines.push(`    note: '${escapeTs(entry.note)}',`);
  }
  lines.push('  },');
  return lines.join('\n');
}

function writeBatchFile(entriesByLevel: Record<TargetLevel, GrammarEntry[]>): void {
  const lines: string[] = [];

  lines.push('// ============================================================================');
  lines.push('// GRAMMAR IMPORT CROSSREF BATCH 1 — Generated from grammarCrossRef.ts');
  lines.push('// Scope: DOJG basic entries (volume=basic) mapped to N4, deduped by pattern+meaning');
  lines.push('// ============================================================================');
  lines.push("import type { GrammarEntry } from './grammarTypes';");
  lines.push('');

  lines.push('export const GRAMMAR_IMPORT_CROSSREF_BATCH1_N4: GrammarEntry[] = [');
  for (const entry of entriesByLevel.N4) {
    lines.push(printEntry(entry));
  }
  lines.push('];');
  lines.push('');

  writeFileSync(OUTPUT_PATH, `${lines.join('\n')}\n`, 'utf-8');
}

function main(): void {
  const { entriesByLevel, skippedEmpty, skippedDup } = buildBatch();
  writeBatchFile(entriesByLevel);

  console.log(`Generated: ${OUTPUT_PATH}`);
  console.log(`N4 imported: ${entriesByLevel.N4.length}`);
  console.log(`Skipped empty: ${skippedEmpty}`);
  console.log(`Skipped duplicates: ${skippedDup}`);
}

main();
