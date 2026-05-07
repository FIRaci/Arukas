#!/usr/bin/env tsx

import { GRAMMAR_BY_LEVEL } from '../src/data/grammarData';
import { DOJG_ENTRIES } from '../src/data/grammarCrossRef';
import { getDojgViMeaning } from '../src/data/grammarCrossRefVi';

type TargetLevel = 'N4' | 'N2' | 'N1';

function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[「」『』"'`]/g, '')
    .replace(/[()（）\[\]{}]/g, '')
    .replace(/[~〜]/g, '～')
    .replace(/[\s/]+/g, '');
}

function mapVolumeToJlpt(volume: string): TargetLevel | null {
  const v = (volume || '').trim().toLowerCase();
  if (v === 'advanced') return 'N1';
  if (v === 'intermediate') return 'N2';
  if (v === 'basic') return 'N4';
  return null;
}

function canonicalPattern(concept: string, subEntry: string): string {
  const c = (concept || '').trim();
  const s = (subEntry || '').trim();
  return s ? `${c} (${s})` : c;
}

function main(): void {
  const existingPatternMeaning = new Set<string>();
  for (const g of GRAMMAR_BY_LEVEL.ALL) {
    const pattern = normalizeText(g.pattern || '');
    const meaning = normalizeText(g.meaning || '');
    if (!pattern || !meaning) continue;
    existingPatternMeaning.add(`${pattern}::${meaning}`);
  }

  const incomingSeen = new Set<string>();
  let totalCandidate = 0;
  let totalImportable = 0;
  let skippedEmpty = 0;
  let skippedDup = 0;

  const byLevel = {
    N4: { candidate: 0, importable: 0 },
    N2: { candidate: 0, importable: 0 },
    N1: { candidate: 0, importable: 0 },
  };

  for (const entry of DOJG_ENTRIES) {
    const level = mapVolumeToJlpt(entry.volume || '');
    if (!level) continue;

    const pattern = canonicalPattern(entry.concept || '', entry.subEntry || '');
    const meaningVi = getDojgViMeaning((entry.english || '').trim());

    const p = normalizeText(pattern);
    const m = normalizeText(meaningVi || '');
    if (!p || !m) {
      skippedEmpty += 1;
      continue;
    }

    totalCandidate += 1;
    byLevel[level].candidate += 1;

    const key = `${p}::${m}`;
    if (existingPatternMeaning.has(key) || incomingSeen.has(key)) {
      skippedDup += 1;
      continue;
    }

    incomingSeen.add(key);
    totalImportable += 1;
    byLevel[level].importable += 1;
  }

  console.log(`DOJG candidate rows: ${totalCandidate}`);
  console.log(`Importable rows (pattern+meaning dedupe): ${totalImportable}`);
  console.log(`Skipped empty meaning/pattern: ${skippedEmpty}`);
  console.log(`Skipped duplicates: ${skippedDup}`);
  console.log(`N4 candidate/importable: ${byLevel.N4.candidate}/${byLevel.N4.importable}`);
  console.log(`N2 candidate/importable: ${byLevel.N2.candidate}/${byLevel.N2.importable}`);
  console.log(`N1 candidate/importable: ${byLevel.N1.candidate}/${byLevel.N1.importable}`);
}

main();
