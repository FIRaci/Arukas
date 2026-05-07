#!/usr/bin/env tsx

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { GRAMMAR_BY_LEVEL } from '../src/data/grammarData';
import { DOJG_ENTRIES, HJGP_ENTRIES, DOJP_ENTRIES } from '../src/data/grammarCrossRef';
import { getDojgViMeaning } from '../src/data/grammarCrossRefVi';
import type { GrammarEntry } from '../src/data/grammarTypes';

const ROOT = process.cwd();
const OUTPUT_PATH = resolve(ROOT, 'src/data/grammarImportCrossRefBatch3.ts');

const N1_TARGET = 450;
const BATCH3_ID_PREFIX = 'gcr3-n1-';

function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[「」『』"'`]/g, '')
    .replace(/[()（）\[\]{}]/g, '')
    .replace(/[~〜]/g, '～')
    .replace(/\s+/g, '');
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
  const raw = s ? `${c} (${s})` : c;
  return raw.replace(/\s*,\s*/g, ' / ').replace(/\s+/g, ' ').trim();
}

function buildExistingPatternSet(): Set<string> {
  const set = new Set<string>();
  for (const g of GRAMMAR_BY_LEVEL.ALL) {
    if ((g.id || '').startsWith(BATCH3_ID_PREFIX)) continue;
    const p = normalizeText(g.pattern || '');
    if (!p) continue;
    set.add(p);
  }
  return set;
}

function splitRefs(raw: string): string[] {
  return (raw || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function normalizePageRef(raw: string): string {
  const compact = (raw || '').trim().toUpperCase().replace(/\s+/g, '');
  return compact.replace(/^B\./, 'B.');
}

function normalizeConceptKey(raw: string): string {
  return normalizeText(raw || '').replace(/[~〜]/g, '～');
}

function buildDojgMeaningByPage(): Map<string, string> {
  const pageMeaning = new Map<string, string>();
  for (const item of DOJG_ENTRIES) {
    const page = normalizePageRef(item.page || '');
    const english = (item.english || '').trim();
    if (!page || !english) continue;
    if (pageMeaning.has(page)) continue;
    pageMeaning.set(page, getDojgViMeaning(english));
  }
  return pageMeaning;
}

function buildDojgMeaningByConcept(): Map<string, string> {
  const conceptMeaning = new Map<string, string>();
  for (const item of DOJG_ENTRIES) {
    const concept = normalizeConceptKey(item.concept || '');
    const english = (item.english || '').trim();
    if (!concept || !english) continue;
    if (conceptMeaning.has(concept)) continue;
    conceptMeaning.set(concept, getDojgViMeaning(english));
  }
  return conceptMeaning;
}

function resolveMeaningFromDojgRefs(dojgRefRaw: string, pageMeaning: Map<string, string>): string {
  const meanings: string[] = [];
  const seen = new Set<string>();

  for (const ref of splitRefs(dojgRefRaw)) {
    const key = normalizePageRef(ref);
    if (!key) continue;
    const meaning = pageMeaning.get(key);
    if (!meaning) continue;
    if (seen.has(meaning)) continue;
    seen.add(meaning);
    meanings.push(meaning);
    if (meanings.length >= 2) break;
  }

  return meanings.join('; ');
}

function patternVariants(raw: string): string[] {
  const variants = new Set<string>();
  const normalized = (raw || '').replace(/\s*,\s*/g, '/').replace(/\s*\/\s*/g, '/').trim();

  for (const token of normalized.split('/')) {
    const t = token.trim();
    if (!t) continue;
    variants.add(t);
    variants.add(t.replace(/\s*[（(].*?[）)]\s*/g, '').trim());
  }

  return [...variants].filter(Boolean);
}

function buildExistingMeaningByPatternVariant(): Map<string, string> {
  const map = new Map<string, string>();

  for (const g of GRAMMAR_BY_LEVEL.ALL) {
    if ((g.id || '').startsWith(BATCH3_ID_PREFIX)) continue;
    const meaning = (g.meaning || '').trim();
    if (!meaning) continue;

    for (const variant of patternVariants(g.pattern || '')) {
      const key = normalizeText(variant);
      if (!key) continue;
      if (!map.has(key)) map.set(key, meaning);
    }
  }

  return map;
}

function resolveMeaningFromConcept(concept: string, conceptMeaning: Map<string, string>): string {
  const key = normalizeConceptKey(concept || '');
  if (!key) return '';
  return conceptMeaning.get(key) || '';
}

function resolveMeaningFromPatternVariants(pattern: string, variantMeaning: Map<string, string>): string {
  for (const variant of patternVariants(pattern)) {
    const key = normalizeText(variant);
    if (!key) continue;
    const meaning = variantMeaning.get(key);
    if (meaning) return meaning;
  }
  return '';
}

function buildDojgRefByConceptFromHjgp(): Map<string, string> {
  const byConcept = new Map<string, string>();
  for (const item of HJGP_ENTRIES) {
    const key = normalizeText(item.concept || '');
    const refs = (item.dojgRef || '').trim();
    if (!key || !refs) continue;
    if (!byConcept.has(key)) byConcept.set(key, refs);
  }
  return byConcept;
}

function buildDojgRefByConceptFromDojp(): Map<string, string> {
  const byConcept = new Map<string, string>();
  for (const item of DOJP_ENTRIES) {
    const key = normalizeText(item.concept || '');
    const refs = (item.dojgRef || '').trim();
    if (!key || !refs) continue;
    if (!byConcept.has(key)) byConcept.set(key, refs);
  }
  return byConcept;
}

function buildNote(parts: string[]): string {
  return parts
    .map((s) => (s || '').trim())
    .filter(Boolean)
    .join(' | ');
}

function printEntry(entry: GrammarEntry): string {
  const lines: string[] = [];
  lines.push('  {');
  lines.push(`    id: '${escapeTs(entry.id)}',`);
  lines.push(`    pattern: '${escapeTs(entry.pattern)}',`);
  lines.push(`    meaning: '${escapeTs(entry.meaning)}',`);
  lines.push("    category: 'dict_ref', jlpt: 'N1',");
  if (entry.note) {
    lines.push(`    note: '${escapeTs(entry.note)}',`);
  }
  lines.push('  },');
  return lines.join('\n');
}

function writeBatchFile(entries: GrammarEntry[]): void {
  const lines: string[] = [];
  lines.push('// ============================================================================');
  lines.push('// GRAMMAR IMPORT CROSSREF BATCH 3 — Generated from grammarCrossRef.ts');
  lines.push('// Scope: Additional HJGP/DOJP reference patterns');
  lines.push('// Mapping: N1 supplemental with DOJG-derived meanings when refs are available');
  lines.push('// ============================================================================');
  lines.push("import type { GrammarEntry } from './grammarTypes';");
  lines.push('');
  lines.push('export const GRAMMAR_IMPORT_CROSSREF_BATCH3_N1: GrammarEntry[] = [');
  for (const entry of entries) {
    lines.push(printEntry(entry));
  }
  lines.push('];');
  lines.push('');

  writeFileSync(OUTPUT_PATH, `${lines.join('\n')}\n`, 'utf-8');
}

function main(): void {
  const currentN1Base = GRAMMAR_BY_LEVEL.N1.filter((g) => !(g.id || '').startsWith(BATCH3_ID_PREFIX)).length;
  const gap = Math.max(0, N1_TARGET - currentN1Base);

  if (gap === 0) {
    writeBatchFile([]);
    console.log(`Generated: ${OUTPUT_PATH}`);
    console.log('N1 gap already closed; generated empty batch.');
    return;
  }

  const existingPatterns = buildExistingPatternSet();
  const incomingPatterns = new Set<string>();
  const pageMeaning = buildDojgMeaningByPage();
  const conceptMeaning = buildDojgMeaningByConcept();
  const variantMeaning = buildExistingMeaningByPatternVariant();
  const hjgpDojgRefByConcept = buildDojgRefByConceptFromHjgp();
  const dojpDojgRefByConcept = buildDojgRefByConceptFromDojp();

  const candidates: Array<{ pattern: string; note: string; meaning: string; mapped: boolean }> = [];
  let mappedMeaningCount = 0;
  let unresolvedMeaningCount = 0;

  for (const item of DOJP_ENTRIES) {
    const pattern = canonicalPattern(item.concept);
    const p = normalizeText(pattern);
    if (!p) continue;
    if (existingPatterns.has(p) || incomingPatterns.has(p)) continue;

    const conceptKey = normalizeText(item.concept || '');
    const linkedDojgRef = (item.dojgRef || '').trim() || hjgpDojgRefByConcept.get(conceptKey) || '';
    const resolvedMeaning =
      resolveMeaningFromDojgRefs(linkedDojgRef, pageMeaning) ||
      resolveMeaningFromConcept(item.concept, conceptMeaning) ||
      resolveMeaningFromPatternVariants(pattern, variantMeaning);
    const mapped = Boolean(resolvedMeaning);

    if (mapped) mappedMeaningCount += 1;
    else unresolvedMeaningCount += 1;

    incomingPatterns.add(p);
    candidates.push({
      pattern,
      meaning: resolvedMeaning || 'Mẫu ngữ pháp tham khảo từ DOJP; xem ghi chú để tra cứu chi tiết.',
      mapped,
      note: buildNote([
        (item.page || '').trim() ? `DOJP: p.${(item.page || '').trim()}` : '',
        linkedDojgRef ? `DOJG ref: ${linkedDojgRef}` : '',
        (item.hjgpRef || '').trim() ? `HJGP ref: ${(item.hjgpRef || '').trim()}` : '',
      ]),
    });
  }

  for (const item of HJGP_ENTRIES) {
    const pattern = canonicalPattern(item.concept, item.subEntry);
    const p = normalizeText(pattern);
    if (!p) continue;
    if (existingPatterns.has(p) || incomingPatterns.has(p)) continue;

    const conceptKey = normalizeText(item.concept || '');
    const linkedDojgRef = (item.dojgRef || '').trim() || dojpDojgRefByConcept.get(conceptKey) || '';
    const resolvedMeaning =
      resolveMeaningFromDojgRefs(linkedDojgRef, pageMeaning) ||
      resolveMeaningFromConcept(item.concept, conceptMeaning) ||
      resolveMeaningFromPatternVariants(pattern, variantMeaning);
    const mapped = Boolean(resolvedMeaning);

    if (mapped) mappedMeaningCount += 1;
    else unresolvedMeaningCount += 1;

    incomingPatterns.add(p);
    candidates.push({
      pattern,
      meaning: resolvedMeaning || 'Mẫu ngữ pháp tham khảo từ HJGP; xem ghi chú để tra cứu chi tiết.',
      mapped,
      note: buildNote([
        (item.page || '').trim() ? `HJGP: p.${(item.page || '').trim()}` : '',
        (item.pageCount || '').trim() ? `pp: ${(item.pageCount || '').trim()}` : '',
        linkedDojgRef ? `DOJG ref: ${linkedDojgRef}` : '',
        (item.dojpRef || '').trim() ? `DOJP ref: ${(item.dojpRef || '').trim()}` : '',
      ]),
    });
  }

  const selected = candidates.slice(0, gap).map((item, idx) => {
    const entry: GrammarEntry = {
      id: `gcr3-n1-${String(idx + 1).padStart(3, '0')}`,
      pattern: item.pattern,
      meaning: item.meaning,
      category: 'dict_ref',
      jlpt: 'N1',
      note: item.note,
    };
    return entry;
  });

  writeBatchFile(selected);

  console.log(`Generated: ${OUTPUT_PATH}`);
  console.log(`Current N1 base count (excluding prior batch3): ${currentN1Base}`);
  console.log(`Target N1 count: ${N1_TARGET}`);
  console.log(`N1 gap before import: ${gap}`);
  console.log(`Available candidates: ${candidates.length}`);
  console.log(`Selected entries: ${selected.length}`);
  console.log(`Candidates with mapped meaning: ${mappedMeaningCount}`);
  console.log(`Candidates with unresolved meaning: ${unresolvedMeaningCount}`);
  console.log(`Selected with mapped meaning: ${selected.filter((s) => s.meaning.includes('xem ghi chú') === false).length}`);
}

main();
