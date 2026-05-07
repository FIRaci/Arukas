#!/usr/bin/env tsx

import { VOCAB_BY_LEVEL } from '../src/data/vocabData';
import { VOCAB_EXTRA_PART1 } from '../src/data/vocabEntriesExtra_Part1';
import { VOCAB_EXTRA_PART2 } from '../src/data/vocabEntriesExtra_Part2';
import { VOCAB_EXTRA_PART3 } from '../src/data/vocabEntriesExtra_Part3';
import { VOCAB_EXTRA_PART4 } from '../src/data/vocabEntriesExtra_Part4';
import { VOCAB_EXTRA_PART5 } from '../src/data/vocabEntriesExtra_Part5';
import { VOCAB_EXTRA_PART6 } from '../src/data/vocabEntriesExtra_Part6';
import type { VocabEntry } from '../src/data/vocabTypes';

function hasJapaneseScript(text: string): boolean {
  return /[\u3040-\u30FF\u3400-\u9FFF々]/.test(text);
}

function isCleanWord(word: string): boolean {
  const w = (word || '').trim();
  if (!w) return false;
  if (!hasJapaneseScript(w)) return false;
  if (w.length > 24) return false;
  if (/[|\\/<>]/.test(w)) return false;
  return true;
}

function main(): void {
  const source: VocabEntry[] = [
    ...VOCAB_EXTRA_PART1,
    ...VOCAB_EXTRA_PART2,
    ...VOCAB_EXTRA_PART3,
    ...VOCAB_EXTRA_PART4,
    ...VOCAB_EXTRA_PART5,
    ...VOCAB_EXTRA_PART6,
  ];

  const existingWords = new Set(VOCAB_BY_LEVEL.ALL.map((v) => v.word));

  let totalSource = 0;
  let cleanCandidate = 0;
  let importable = 0;
  let badWord = 0;
  let emptyMeaning = 0;
  let duplicate = 0;

  const incomingSeen = new Set<string>();

  for (const item of source) {
    totalSource += 1;

    const word = (item.word || '').trim();
    const meaning = (item.meaning || '').trim();

    if (!isCleanWord(word)) {
      badWord += 1;
      continue;
    }

    cleanCandidate += 1;

    if (!meaning) {
      emptyMeaning += 1;
      continue;
    }

    if (existingWords.has(word) || incomingSeen.has(word)) {
      duplicate += 1;
      continue;
    }

    incomingSeen.add(word);
    importable += 1;
  }

  console.log('Total source rows:', totalSource);
  console.log('Clean word candidates:', cleanCandidate);
  console.log('Importable unique words:', importable);
  console.log('Rejected bad words:', badWord);
  console.log('Rejected empty meaning:', emptyMeaning);
  console.log('Rejected duplicates:', duplicate);
}

main();
