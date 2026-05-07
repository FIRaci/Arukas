#!/usr/bin/env tsx

import { VOCAB_BY_LEVEL } from '../src/data/vocabData';
import {
  VI_N5,
  VI_N4,
  VI_N3,
  VI_N2,
  VI_N1,
  VI_N5_SUPPLEMENT,
  VI_N4_SUPPLEMENT,
  VI_N3_SUPPLEMENT_1,
  VI_N3_SUPPLEMENT_2,
  VI_N2_SUPPLEMENT_1,
  VI_N2_SUPPLEMENT_2,
  VI_N2_SUPPLEMENT_3,
  VI_N1_SUPPLEMENT_1,
  VI_N1_SUPPLEMENT_2,
  VI_N1_SUPPLEMENT_3,
  VI_N1_SUPPLEMENT_4,
  VI_N1_SUPPLEMENT_5,
  VI_N1_SUPPLEMENT_6,
  VI_N1_SUPPLEMENT_7,
  VI_ENRICH_1,
  VI_ENRICH_2,
  VI_ENRICH_3,
  VI_COMPLETE_SUPPLEMENT,
} from '../src/data/vietnameseMeanings';
import {
  WORD_ENRICHMENT_1,
  WORD_ENRICHMENT_2,
  WORD_ENRICHMENT_3,
  WORD_ENRICHMENT_4,
} from '../src/data/wordEnrichmentAll';

function hasJapaneseScript(text: string): boolean {
  return /[\u3040-\u30FF\u3400-\u9FFF々]/.test(text);
}

function countNewJapaneseWords(candidateKeys: string[], existing: Set<string>): number {
  let count = 0;
  for (const key of candidateKeys) {
    if (!hasJapaneseScript(key)) continue;
    if (existing.has(key)) continue;
    count += 1;
  }
  return count;
}

function unique(keys: string[]): string[] {
  return [...new Set(keys)];
}

function main(): void {
  const existing = new Set(VOCAB_BY_LEVEL.ALL.map(v => v.word));

  const baseViMaps = [
    VI_N5,
    VI_N4,
    VI_N3,
    VI_N2,
    VI_N1,
    VI_N5_SUPPLEMENT,
    VI_N4_SUPPLEMENT,
    VI_N3_SUPPLEMENT_1,
    VI_N3_SUPPLEMENT_2,
    VI_N2_SUPPLEMENT_1,
    VI_N2_SUPPLEMENT_2,
    VI_N2_SUPPLEMENT_3,
    VI_N1_SUPPLEMENT_1,
    VI_N1_SUPPLEMENT_2,
    VI_N1_SUPPLEMENT_3,
    VI_N1_SUPPLEMENT_4,
    VI_N1_SUPPLEMENT_5,
    VI_N1_SUPPLEMENT_6,
    VI_N1_SUPPLEMENT_7,
  ];

  const enrichViMaps = [VI_ENRICH_1, VI_ENRICH_2, VI_ENRICH_3];
  const allEnrichmentMaps = [WORD_ENRICHMENT_1, WORD_ENRICHMENT_2, WORD_ENRICHMENT_3, WORD_ENRICHMENT_4];

  const baseViKeys = unique(baseViMaps.flatMap(m => Object.keys(m)));
  const enrichViKeys = unique(enrichViMaps.flatMap(m => Object.keys(m)));
  const completeKeys = Object.keys(VI_COMPLETE_SUPPLEMENT);
  const enrichmentKeys = unique(allEnrichmentMaps.flatMap(m => Object.keys(m)));

  const newFromBaseVi = countNewJapaneseWords(baseViKeys, existing);
  const newFromEnrichVi = countNewJapaneseWords(enrichViKeys, existing);
  const newFromComplete = countNewJapaneseWords(completeKeys, existing);
  const newFromEnrichment = countNewJapaneseWords(enrichmentKeys, existing);

  const unionAll = unique([...baseViKeys, ...enrichViKeys, ...completeKeys, ...enrichmentKeys]);
  const newFromUnion = countNewJapaneseWords(unionAll, existing);

  console.log(`Current base ALL words: ${VOCAB_BY_LEVEL.ALL.length}`);
  console.log(`New Japanese-script words from base VI maps: ${newFromBaseVi}`);
  console.log(`New Japanese-script words from VI_ENRICH maps: ${newFromEnrichVi}`);
  console.log(`New Japanese-script words from VI_COMPLETE_SUPPLEMENT: ${newFromComplete}`);
  console.log(`New Japanese-script words from WORD_ENRICHMENT maps: ${newFromEnrichment}`);
  console.log(`New Japanese-script words from union(all maps above): ${newFromUnion}`);
}

main();
