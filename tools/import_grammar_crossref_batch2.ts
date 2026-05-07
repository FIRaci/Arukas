#!/usr/bin/env tsx

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { GRAMMAR_BY_LEVEL } from '../src/data/grammarData';
import { DOJG_ENTRIES, HJGP_ENTRIES, DOJP_ENTRIES } from '../src/data/grammarCrossRef';
import { getDojgViMeaning } from '../src/data/grammarCrossRefVi';
import type { GrammarEntry } from '../src/data/grammarTypes';

const ROOT = process.cwd();
const OUTPUT_PATH = resolve(ROOT, 'src/data/grammarImportCrossRefBatch2.ts');

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

function canonicalPattern(concept: string, subEntry?: string): string {
  const c = (concept || '').trim();
  const s = (subEntry || '').trim();
  return s ? `${c} (${s})` : c;
}

function splitRefs(raw: string): string[] {
  return (raw || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function buildDojgMeaningByPage(): Map<string, string> {
  const pageMeaning = new Map<string, string>();
  for (const item of DOJG_ENTRIES) {
    const page = (item.page || '').trim();
    const english = (item.english || '').trim();
    if (!page || !english) continue;
    if (pageMeaning.has(page)) continue;
    pageMeaning.set(page, getDojgViMeaning(english));
  }
  return pageMeaning;
}

function resolveMeaningFromDojgRefs(dojgRefRaw: string, pageMeaning: Map<string, string>): string {
  for (const ref of splitRefs(dojgRefRaw)) {
    if (pageMeaning.has(ref)) {
      return pageMeaning.get(ref) || '';
    }
  }
  return '';
}

function buildExistingPatternMeaningSet(): Set<string> {
  const set = new Set<string>();
  for (const g of GRAMMAR_BY_LEVEL.ALL) {
    const pattern = normalizeText(g.pattern || '');
    const meaning = normalizeText(g.meaning || '');
    if (!pattern || !meaning) continue;
    set.add(`${pattern}::${meaning}`);
  }
  return set;
}

function buildNote(parts: Array<string | undefined>): string {
  return parts
    .map((p) => (p || '').trim())
    .filter(Boolean)
    .join(' | ');
}

function printEntry(entry: GrammarEntry): string {
  const lines: string[] = [];
  lines.push('  {');
  lines.push(`    id: '${escapeTs(entry.id)}',`);
  lines.push(`    pattern: '${escapeTs(entry.pattern)}',`);
  lines.push(`    meaning: '${escapeTs(entry.meaning)}',`);
  lines.push(`    category: 'dict_ref', jlpt: '${escapeTs(entry.jlpt)}',`);
  if (entry.note) {
    lines.push(`    note: '${escapeTs(entry.note)}',`);
  }
  lines.push('  },');
  return lines.join('\n');
}

function writeBatchFile(n2Entries: GrammarEntry[], n1Entries: GrammarEntry[]): void {
  const lines: string[] = [];
  lines.push('// ============================================================================');
  lines.push('// GRAMMAR IMPORT CROSSREF BATCH 2 — Generated from grammarCrossRef.ts');
  lines.push('// Scope: HJGP + DOJP entries with meaning resolved via linked DOJG refs');
  lines.push('// Mapping: HJGP -> N2, DOJP -> N1; deduped by normalized pattern+meaning');
  lines.push('// ============================================================================');
  lines.push("import type { GrammarEntry } from './grammarTypes';");
  lines.push('');

  lines.push('export const GRAMMAR_IMPORT_CROSSREF_BATCH2_N2: GrammarEntry[] = [');
  for (const entry of n2Entries) {
    lines.push(printEntry(entry));
  }
  lines.push('];');
  lines.push('');

  lines.push('export const GRAMMAR_IMPORT_CROSSREF_BATCH2_N1: GrammarEntry[] = [');
  for (const entry of n1Entries) {
    lines.push(printEntry(entry));
  }
  lines.push('];');
  lines.push('');

  writeFileSync(OUTPUT_PATH, `${lines.join('\n')}\n`, 'utf-8');
}

function main(): void {
  const pageMeaning = buildDojgMeaningByPage();
  const existingPatternMeaning = buildExistingPatternMeaningSet();
  const incomingSeen = new Set<string>();

  const n2Entries: GrammarEntry[] = [];
  const n1Entries: GrammarEntry[] = [];

  let hjgpNoMeaning = 0;
  let hjgpDup = 0;
  let dojpNoMeaning = 0;
  let dojpDup = 0;

  let n2Counter = 1;
  for (const item of HJGP_ENTRIES) {
    const pattern = canonicalPattern(item.concept, item.subEntry);
    const meaning = resolveMeaningFromDojgRefs(item.dojgRef || '', pageMeaning);

    const p = normalizeText(pattern);
    const m = normalizeText(meaning);
    if (!p || !m) {
      hjgpNoMeaning += 1;
      continue;
    }

    const key = `${p}::${m}`;
    if (existingPatternMeaning.has(key) || incomingSeen.has(key)) {
      hjgpDup += 1;
      continue;
    }

    incomingSeen.add(key);

    const note = buildNote([
      `HJGP: p.${(item.page || '').trim()}`,
      (item.pageCount || '').trim() ? `pp: ${(item.pageCount || '').trim()}` : '',
      (item.dojgRef || '').trim() ? `DOJG: ${(item.dojgRef || '').trim()}` : '',
      (item.dojpRef || '').trim() ? `DOJP: ${(item.dojpRef || '').trim()}` : '',
    ]);

    n2Entries.push({
      id: `gcr2-n2-${String(n2Counter).padStart(3, '0')}`,
      pattern,
      meaning,
      category: 'dict_ref',
      jlpt: 'N2',
      note,
    });

    n2Counter += 1;
  }

  let n1Counter = 1;
  for (const item of DOJP_ENTRIES) {
    const pattern = canonicalPattern(item.concept);
    const meaning = resolveMeaningFromDojgRefs(item.dojgRef || '', pageMeaning);

    const p = normalizeText(pattern);
    const m = normalizeText(meaning);
    if (!p || !m) {
      dojpNoMeaning += 1;
      continue;
    }

    const key = `${p}::${m}`;
    if (existingPatternMeaning.has(key) || incomingSeen.has(key)) {
      dojpDup += 1;
      continue;
    }

    incomingSeen.add(key);

    const note = buildNote([
      (item.page || '').trim() ? `DOJP: p.${(item.page || '').trim()}` : '',
      (item.dojgRef || '').trim() ? `DOJG: ${(item.dojgRef || '').trim()}` : '',
      (item.hjgpRef || '').trim() ? `HJGP: ${(item.hjgpRef || '').trim()}` : '',
    ]);

    n1Entries.push({
      id: `gcr2-n1-${String(n1Counter).padStart(3, '0')}`,
      pattern,
      meaning,
      category: 'dict_ref',
      jlpt: 'N1',
      note,
    });

    n1Counter += 1;
  }

  writeBatchFile(n2Entries, n1Entries);

  console.log(`Generated: ${OUTPUT_PATH}`);
  console.log(`HJGP imported (N2): ${n2Entries.length}`);
  console.log(`HJGP skipped no meaning: ${hjgpNoMeaning}`);
  console.log(`HJGP skipped duplicates: ${hjgpDup}`);
  console.log(`DOJP imported (N1): ${n1Entries.length}`);
  console.log(`DOJP skipped no meaning: ${dojpNoMeaning}`);
  console.log(`DOJP skipped duplicates: ${dojpDup}`);
}

main();
