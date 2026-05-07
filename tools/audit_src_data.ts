#!/usr/bin/env tsx

import { VOCAB_BY_LEVEL, loadExtendedDictionary, isExtendedLoaded } from '../src/data/vocabData';
import { GRAMMAR_BY_LEVEL } from '../src/data/grammarData';

const LEVELS = ['N5', 'N4', 'N3', 'N2', 'N1'] as const;
type Level = (typeof LEVELS)[number];

type TargetMatrix = {
  vocab: Record<Level, number>;
  grammar: Record<Level, number>;
};

const TARGETS: Record<'minimum' | 'ambitious', TargetMatrix> = {
  minimum: {
    vocab: { N5: 800, N4: 1500, N3: 3000, N2: 6000, N1: 10000 },
    grammar: { N5: 80, N4: 120, N3: 200, N2: 300, N1: 400 },
  },
  ambitious: {
    vocab: { N5: 800, N4: 1500, N3: 4000, N2: 6000, N1: 11000 },
    grammar: { N5: 80, N4: 120, N3: 200, N2: 300, N1: 450 },
  },
};

function getArgValue(prefix: string): string | undefined {
  const arg = process.argv.find((a) => a.startsWith(prefix));
  if (!arg) {
    return undefined;
  }
  return arg.slice(prefix.length);
}

function hasArg(name: string): boolean {
  return process.argv.includes(name);
}

function parseAllowedUnknown(raw: string | undefined): Set<string> {
  if (!raw) {
    return new Set<string>();
  }

  const values = raw
    .split(',')
    .map((v) => v.trim().toUpperCase())
    .filter(Boolean);

  return new Set(values);
}

function countByLevel<T>(
  data: Record<string, T[]>,
): Record<Level, number> {
  return {
    N5: data.N5.length,
    N4: data.N4.length,
    N3: data.N3.length,
    N2: data.N2.length,
    N1: data.N1.length,
  };
}

function sumLevels(counts: Record<Level, number>): number {
  return LEVELS.reduce((acc, level) => acc + counts[level], 0);
}

function findDuplicates<T>(items: T[], keyFn: (item: T) => string): Map<string, number> {
  const counts = new Map<string, number>();
  for (const item of items) {
    const key = keyFn(item).trim();
    if (!key) {
      continue;
    }
    counts.set(key, (counts.get(key) ?? 0) + 1);
  }

  const duplicates = new Map<string, number>();
  for (const [key, count] of counts.entries()) {
    if (count > 1) {
      duplicates.set(key, count);
    }
  }
  return duplicates;
}

function findUnknownJlpt<T>(
  items: T[],
  getJlpt: (item: T) => string | undefined,
): Map<string, number> {
  const unknown = new Map<string, number>();
  for (const item of items) {
    const jlpt = (getJlpt(item) ?? '').toUpperCase().trim();
    if (!jlpt || !LEVELS.includes(jlpt as Level)) {
      const bucket = jlpt || '(missing)';
      unknown.set(bucket, (unknown.get(bucket) ?? 0) + 1);
    }
  }
  return unknown;
}

function formatNumber(value: number): string {
  return value.toString().padStart(6, ' ');
}

function filterIssueMap(
  issues: Map<string, number>,
  allowedKeys: Set<string>,
): Map<string, number> {
  if (allowedKeys.size === 0) {
    return issues;
  }

  const filtered = new Map<string, number>();
  for (const [key, count] of issues.entries()) {
    if (!allowedKeys.has(key.toUpperCase())) {
      filtered.set(key, count);
    }
  }
  return filtered;
}

function printGapTable(
  title: string,
  counts: Record<Level, number>,
  targets: Record<Level, number>,
): { totalGap: number; totalTarget: number; totalCurrent: number } {
  let totalGap = 0;
  let totalTarget = 0;
  let totalCurrent = 0;

  console.log(`\n${title}`);
  console.log('Level  Current  Target  Gap');
  console.log('-----  -------  ------  ----');

  for (const level of LEVELS) {
    const current = counts[level];
    const target = targets[level];
    const gap = Math.max(0, target - current);
    totalGap += gap;
    totalTarget += target;
    totalCurrent += current;
    console.log(`${level}  ${formatNumber(current)}  ${formatNumber(target)}  ${formatNumber(gap)}`);
  }

  console.log('-----  -------  ------  ----');
  console.log(`ALL   ${formatNumber(totalCurrent)}  ${formatNumber(totalTarget)}  ${formatNumber(totalGap)}`);

  return { totalGap, totalTarget, totalCurrent };
}

function printIssueMap(title: string, issues: Map<string, number>): void {
  if (issues.size === 0) {
    console.log(`${title}: 0`);
    return;
  }

  console.log(`${title}: ${issues.size}`);
  for (const [key, count] of issues.entries()) {
    console.log(`  - ${key}: ${count}`);
  }
}

function validateLevelConsistency<T>(
  byLevel: Record<string, T[]>,
  getJlpt: (item: T) => string | undefined,
): Map<Level, number> {
  const mismatch = new Map<Level, number>();

  for (const level of LEVELS) {
    let bad = 0;
    for (const item of byLevel[level]) {
      const actual = (getJlpt(item) ?? '').toUpperCase().trim();
      if (actual !== level) {
        bad += 1;
      }
    }
    if (bad > 0) {
      mismatch.set(level, bad);
    }
  }

  return mismatch;
}

async function main(): Promise<void> {
  const strict = hasArg('--strict');
  const includeExtended = hasArg('--extended');
  const targetName = (getArgValue('--target=') ?? 'ambitious').toLowerCase();
  const allowedUnknownVocab = parseAllowedUnknown(
    getArgValue('--allow-vocab-unknown=') ?? 'N/A',
  );
  if (includeExtended) {
    allowedUnknownVocab.add('ALL');
  }
  if (targetName !== 'minimum' && targetName !== 'ambitious') {
    console.error(`Invalid --target value: ${targetName}`);
    console.error('Use --target=minimum or --target=ambitious');
    process.exit(1);
  }

  const targets = TARGETS[targetName as 'minimum' | 'ambitious'];

  if (includeExtended) {
    await loadExtendedDictionary();
  }

  const vocabCounts = countByLevel(VOCAB_BY_LEVEL);
  const grammarCounts = countByLevel(GRAMMAR_BY_LEVEL);

  const vocabUnknownJlpt = findUnknownJlpt(
    VOCAB_BY_LEVEL.ALL,
    (v) => (v as { jlpt?: string }).jlpt,
  );
  const grammarUnknownJlpt = findUnknownJlpt(
    GRAMMAR_BY_LEVEL.ALL,
    (g) => (g as { jlpt?: string }).jlpt,
  );
  const vocabUnexpectedUnknown = filterIssueMap(vocabUnknownJlpt, allowedUnknownVocab);

  const vocabDuplicates = findDuplicates(
    VOCAB_BY_LEVEL.ALL,
    (v) => (v as { word?: string }).word ?? '',
  );
  const grammarDuplicates = findDuplicates(
    GRAMMAR_BY_LEVEL.ALL,
    (g) => (g as { id?: string }).id ?? '',
  );

  const vocabMismatch = validateLevelConsistency(
    VOCAB_BY_LEVEL,
    (v) => (v as { jlpt?: string }).jlpt,
  );
  const grammarMismatch = validateLevelConsistency(
    GRAMMAR_BY_LEVEL,
    (g) => (g as { jlpt?: string }).jlpt,
  );

  console.log('ARUKAS src/data coverage audit');
  console.log(`Target preset: ${targetName}`);
  console.log(`Strict mode: ${strict ? 'on' : 'off'}`);
  console.log(`Extended dictionary loaded: ${isExtendedLoaded() ? 'yes' : 'no'}`);
  console.log(`Allowed vocab unknown labels: ${Array.from(allowedUnknownVocab).join(', ') || '(none)'}`);

  const vocabSummary = printGapTable('Vocabulary', vocabCounts, targets.vocab);
  const grammarSummary = printGapTable('Grammar', grammarCounts, targets.grammar);

  const vocabAllVsLevels = VOCAB_BY_LEVEL.ALL.length - sumLevels(vocabCounts);
  const grammarAllVsLevels = GRAMMAR_BY_LEVEL.ALL.length - sumLevels(grammarCounts);

  console.log('\nData integrity checks');
  printIssueMap('Vocab duplicate words in ALL', vocabDuplicates);
  printIssueMap('Grammar duplicate ids in ALL', grammarDuplicates);
  printIssueMap('Vocab unknown jlpt in ALL', vocabUnknownJlpt);
  printIssueMap('Vocab unexpected unknown jlpt in ALL', vocabUnexpectedUnknown);
  printIssueMap('Grammar unknown jlpt in ALL', grammarUnknownJlpt);

  if (vocabMismatch.size === 0) {
    console.log('Vocab level mismatch in N5-N1 buckets: 0');
  } else {
    console.log(`Vocab level mismatch in N5-N1 buckets: ${vocabMismatch.size}`);
    for (const [level, count] of vocabMismatch.entries()) {
      console.log(`  - ${level}: ${count}`);
    }
  }

  if (grammarMismatch.size === 0) {
    console.log('Grammar level mismatch in N5-N1 buckets: 0');
  } else {
    console.log(`Grammar level mismatch in N5-N1 buckets: ${grammarMismatch.size}`);
    for (const [level, count] of grammarMismatch.entries()) {
      console.log(`  - ${level}: ${count}`);
    }
  }

  console.log('\nAll-bucket delta vs sum(N5..N1)');
  console.log(`Vocab ALL delta: ${vocabAllVsLevels}`);
  console.log(`Grammar ALL delta: ${grammarAllVsLevels}`);

  console.log('\nGap summary');
  console.log(`Vocab gap remaining: ${vocabSummary.totalGap}`);
  console.log(`Grammar gap remaining: ${grammarSummary.totalGap}`);

  const hasIntegrityIssues =
    vocabDuplicates.size > 0 ||
    grammarDuplicates.size > 0 ||
    vocabUnexpectedUnknown.size > 0 ||
    grammarUnknownJlpt.size > 0 ||
    vocabMismatch.size > 0 ||
    grammarMismatch.size > 0;

  if (strict && hasIntegrityIssues) {
    console.error('\nStrict mode failed: integrity issues detected.');
    process.exit(2);
  }
}

void main();
