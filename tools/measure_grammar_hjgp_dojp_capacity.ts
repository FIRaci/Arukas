#!/usr/bin/env tsx

import { GRAMMAR_BY_LEVEL } from '../src/data/grammarData';
import { DOJG_ENTRIES, HJGP_ENTRIES, DOJP_ENTRIES } from '../src/data/grammarCrossRef';
import { getDojgViMeaning } from '../src/data/grammarCrossRefVi';

function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[「」『』"'`]/g, '')
    .replace(/[()（）\[\]{}]/g, '')
    .replace(/[~〜]/g, '～')
    .replace(/[\s/]+/g, '');
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

function buildPageMeaningMap(): Map<string, string> {
  const map = new Map<string, string>();
  for (const item of DOJG_ENTRIES) {
    const page = (item.page || '').trim();
    const english = (item.english || '').trim();
    if (!page || !english) continue;
    if (map.has(page)) continue;
    map.set(page, getDojgViMeaning(english));
  }
  return map;
}

function main(): void {
  const existingPatternMeaning = new Set<string>();
  for (const g of GRAMMAR_BY_LEVEL.ALL) {
    const pattern = normalizeText(g.pattern || '');
    const meaning = normalizeText(g.meaning || '');
    if (!pattern || !meaning) continue;
    existingPatternMeaning.add(`${pattern}::${meaning}`);
  }

  const pageMeaning = buildPageMeaningMap();
  const incomingSeen = new Set<string>();

  const stats = {
    hjgp: { candidate: 0, importable: 0, noMeaning: 0, duplicates: 0 },
    dojp: { candidate: 0, importable: 0, noMeaning: 0, duplicates: 0 },
  };

  for (const item of HJGP_ENTRIES) {
    const pattern = canonicalPattern(item.concept, item.subEntry);
    if (!pattern) continue;
    stats.hjgp.candidate += 1;

    let meaning = '';
    for (const ref of splitRefs(item.dojgRef || '')) {
      if (pageMeaning.has(ref)) {
        meaning = pageMeaning.get(ref) || '';
        break;
      }
    }

    const p = normalizeText(pattern);
    const m = normalizeText(meaning);
    if (!p || !m) {
      stats.hjgp.noMeaning += 1;
      continue;
    }

    const key = `${p}::${m}`;
    if (existingPatternMeaning.has(key) || incomingSeen.has(key)) {
      stats.hjgp.duplicates += 1;
      continue;
    }

    incomingSeen.add(key);
    stats.hjgp.importable += 1;
  }

  for (const item of DOJP_ENTRIES) {
    const pattern = canonicalPattern(item.concept);
    if (!pattern) continue;
    stats.dojp.candidate += 1;

    let meaning = '';
    for (const ref of splitRefs(item.dojgRef || '')) {
      if (pageMeaning.has(ref)) {
        meaning = pageMeaning.get(ref) || '';
        break;
      }
    }

    const p = normalizeText(pattern);
    const m = normalizeText(meaning);
    if (!p || !m) {
      stats.dojp.noMeaning += 1;
      continue;
    }

    const key = `${p}::${m}`;
    if (existingPatternMeaning.has(key) || incomingSeen.has(key)) {
      stats.dojp.duplicates += 1;
      continue;
    }

    incomingSeen.add(key);
    stats.dojp.importable += 1;
  }

  const totalImportable = stats.hjgp.importable + stats.dojp.importable;

  console.log('HJGP candidates:', stats.hjgp.candidate);
  console.log('HJGP importable:', stats.hjgp.importable);
  console.log('HJGP no meaning:', stats.hjgp.noMeaning);
  console.log('HJGP duplicates:', stats.hjgp.duplicates);
  console.log('DOJP candidates:', stats.dojp.candidate);
  console.log('DOJP importable:', stats.dojp.importable);
  console.log('DOJP no meaning:', stats.dojp.noMeaning);
  console.log('DOJP duplicates:', stats.dojp.duplicates);
  console.log('Total importable:', totalImportable);
}

main();
