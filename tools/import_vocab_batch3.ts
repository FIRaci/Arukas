#!/usr/bin/env tsx

import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { VOCAB_BY_LEVEL } from '../src/data/vocabData';
import {
  WORD_ENRICHMENT_1,
  WORD_ENRICHMENT_2,
  WORD_ENRICHMENT_3,
  WORD_ENRICHMENT_4,
} from '../src/data/wordEnrichmentAll';
import type { VocabEntry } from '../src/data/vocabTypes';

const ROOT = process.cwd();
const OUTPUT_PATH = resolve(ROOT, 'src/data/vocabImportBatch3.ts');

function hasJapaneseScript(text: string): boolean {
  return /[\u3040-\u30FF\u3400-\u9FFF々]/.test(text);
}

function isKana(text: string): boolean {
  return /^[\u3040-\u309F\u30A0-\u30FF\u30FC\uFF66-\uFF9Fー]+$/.test(text);
}

function escapeTs(value: string): string {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n');
}

function buildBatch(): { words: string[]; entries: VocabEntry[] } {
  const enrich = {
    ...WORD_ENRICHMENT_1,
    ...WORD_ENRICHMENT_2,
    ...WORD_ENRICHMENT_3,
    ...WORD_ENRICHMENT_4,
  };

  const existing = new Set(VOCAB_BY_LEVEL.ALL.map(v => v.word));
  const incomingSeen = new Set<string>();

  const words: string[] = [];
  const entries: VocabEntry[] = [];
  let counter = 1;

  const keys = Object.keys(enrich).sort((a, b) => a.localeCompare(b, 'ja'));

  for (const word of keys) {
    if (!hasJapaneseScript(word)) {
      continue;
    }
    if (existing.has(word) || incomingSeen.has(word)) {
      continue;
    }

    const info = enrich[word];
    if (!info || !info.m) {
      continue;
    }

    const entry: VocabEntry = {
      id: `vimp3-n1-${String(counter).padStart(5, '0')}`,
      word,
      reading: isKana(word) ? word : '',
      romaji: (info.r || '').trim(),
      meaning: (info.m || '').trim(),
      type: 'Khác',
      jlpt: 'N1',
      tags: ['import-batch3', 'enrichment'],
      examples: [],
    };

    words.push(word);
    entries.push(entry);
    incomingSeen.add(word);
    counter += 1;
  }

  return { words, entries };
}

function printWordArray(words: string[]): string {
  const lines: string[] = [];
  lines.push('export const VOCAB_IMPORT_BATCH3_N1_WORDS: string[] = [');
  for (const word of words) {
    lines.push(`  '${escapeTs(word)}',`);
  }
  lines.push('];');
  return lines.join('\n');
}

function printEntryArray(entries: VocabEntry[]): string {
  const lines: string[] = [];
  lines.push('export const VOCAB_IMPORT_BATCH3_N1: VocabEntry[] = [');

  for (const entry of entries) {
    lines.push('  {');
    lines.push(`    id: '${escapeTs(entry.id)}',`);
    lines.push(`    word: '${escapeTs(entry.word)}',`);
    lines.push(`    reading: '${escapeTs(entry.reading)}',`);
    lines.push(`    romaji: '${escapeTs(entry.romaji)}',`);
    lines.push(`    meaning: '${escapeTs(entry.meaning)}',`);
    lines.push(`    type: '${escapeTs(entry.type)}',`);
    lines.push("    jlpt: 'N1',");
    lines.push("    tags: ['import-batch3', 'enrichment'],");
    lines.push('    examples: [],');
    lines.push('  },');
  }

  lines.push('];');
  return lines.join('\n');
}

function main(): void {
  const { words, entries } = buildBatch();

  const lines: string[] = [];
  lines.push('// ============================================================================');
  lines.push('// VOCAB IMPORT BATCH 3 — Generated from wordEnrichmentAll.ts');
  lines.push('// Scope: additional Japanese-script words not present in current VOCAB_BY_LEVEL.ALL');
  lines.push('// ============================================================================');
  lines.push("import type { VocabEntry } from './vocabTypes';");
  lines.push('');
  lines.push(printWordArray(words));
  lines.push('');
  lines.push(printEntryArray(entries));
  lines.push('');

  writeFileSync(OUTPUT_PATH, `${lines.join('\n')}\n`, 'utf-8');

  console.log(`Generated: ${OUTPUT_PATH}`);
  console.log(`N1 words: ${words.length}`);
  console.log(`N1 entries: ${entries.length}`);
}

main();
