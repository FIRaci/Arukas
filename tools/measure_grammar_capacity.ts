#!/usr/bin/env tsx

import { readFileSync } from 'node:fs';
import { GRAMMAR_BY_LEVEL } from '../src/data/grammarData';

const lines = readFileSync('./tools/grammar_new.txt', 'utf-8')
  .split(/\r?\n/)
  .map((s) => s.trim())
  .filter((s) => s && !s.startsWith('#') && !s.startsWith('//'));

const norm = (s: string) =>
  s
    .trim()
    .toLowerCase()
    .replace(/[「」『』"'`]/g, '')
    .replace(/[()（）\[\]{}]/g, '')
    .replace(/[~〜]/g, '～')
    .replace(/[\s/]+/g, '');

const pickLevel = (raw: string): 'N1' | 'N2' | null => {
  const c = (raw || '').toUpperCase().replace(/\s+/g, '');
  if (c === 'N1' || c === 'N2') return c;
  if (c.includes('-')) {
    const t = c.split('-');
    if (t.includes('N1')) return 'N1';
    if (t.includes('N2')) return 'N2';
  }
  return null;
};

const existingPattern = new Set<string>();
const existingPatternMeaning = new Set<string>();

for (const g of GRAMMAR_BY_LEVEL.ALL) {
  const p = norm((g as { pattern?: string }).pattern || '');
  const m = norm((g as { meaning?: string }).meaning || '');
  if (p) existingPattern.add(p);
  if (p && m) existingPatternMeaning.add(`${p}::${m}`);
}

let total = 0;
let importablePatternOnly = 0;
let importablePatternMeaning = 0;
const seenPattern = new Set<string>();
const seenPatternMeaning = new Set<string>();

for (const line of lines) {
  let row: {
    jlpt?: string;
    s?: string;
    m?: string;
  };

  try {
    row = JSON.parse(line) as { jlpt?: string; s?: string; m?: string };
  } catch {
    continue;
  }

  const lvl = pickLevel(row.jlpt || '');
  if (!lvl) continue;

  total += 1;

  const p = norm(row.s || '');
  const m = norm(row.m || '');
  if (!p || !m) continue;

  if (!existingPattern.has(p) && !seenPattern.has(p)) {
    seenPattern.add(p);
    importablePatternOnly += 1;
  }

  const pm = `${p}::${m}`;
  if (!existingPatternMeaning.has(pm) && !seenPatternMeaning.has(pm)) {
    seenPatternMeaning.add(pm);
    importablePatternMeaning += 1;
  }
}

console.log('Total N2/N1 rows in grammar_new:', total);
console.log('Importable with pattern-only dedupe:', importablePatternOnly);
console.log('Importable with pattern+meaning dedupe:', importablePatternMeaning);
