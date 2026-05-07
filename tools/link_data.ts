import fs from 'fs';
import path from 'path';

const vocabPath = path.join(process.cwd(), 'src/data/vocabData.ts');
let vocabTs = fs.readFileSync(vocabPath, 'utf8');

if (!vocabTs.includes('EXTRA_FLASHCARDS_LOADERS')) {
    const flashLoader = `
// Lazy loaders for Flashcards Offline Dictionary (27k words)
const EXTRA_FLASHCARDS_LOADERS = [
  () => import('./vocabImportBatch6_Flashcards').then(m => m.vocabImportBatch6_Flashcards),
  () => import('./vocabImportBatch7_Flashcards').then(m => m.vocabImportBatch7_Flashcards),
  () => import('./vocabImportBatch8_Flashcards').then(m => m.vocabImportBatch8_Flashcards),
  () => import('./vocabImportBatch9_Flashcards').then(m => m.vocabImportBatch9_Flashcards),
  () => import('./vocabImportBatch10_Flashcards').then(m => m.vocabImportBatch10_Flashcards),
  () => import('./vocabImportBatch11_Flashcards').then(m => m.vocabImportBatch11_Flashcards),
];
`;
    vocabTs = vocabTs.replace('// Lazy loaders for Vi-Jp dictionary', flashLoader + '\n// Lazy loaders for Vi-Jp dictionary');

    vocabTs = vocabTs.replace(/const \[csvResults, vijpResults\] = await Promise\.all\(\[/, 'const [csvResults, vijpResults, flashResults] = await Promise.all([');
    vocabTs = vocabTs.replace('Promise.all(EXTRA_VIJP_LOADERS.map(loader => loader())),', 'Promise.all(EXTRA_VIJP_LOADERS.map(loader => loader())),\n        Promise.all(EXTRA_FLASHCARDS_LOADERS.map(loader => loader())),');
    
    const flashMergeStr = `
      // Merge Flashcards dict
      for (const entries of flashResults) {
        for (const e of entries) {
          if (!ALL_SEEN.has(e.word)) {
            ALL_SEEN.add(e.word);
            VOCAB_ALL.push(e);
            addExtendedEntryToLevelBuckets(e);
          }
        }
      }
`;
    vocabTs = vocabTs.replace('_extendedLoaded = true;', flashMergeStr + '\n      _extendedLoaded = true;');
    fs.writeFileSync(vocabPath, vocabTs);
}

const kanjiPath = path.join(process.cwd(), 'src/data/kanjiData.ts');
let kanjiTs = fs.readFileSync(kanjiPath, 'utf8');

if (!kanjiTs.includes('kanjiImportBatch1_Jouyou')) {
    kanjiTs = kanjiTs.replace(/import \{ KANJI_EXTRA/, `import { kanjiImportBatch1_Jouyou } from './kanjiImportBatch1_Jouyou';\nimport { KANJI_EXTRA`);
    kanjiTs = kanjiTs.replace('...KANJI_N1,', '...KANJI_N1,\n  ...kanjiImportBatch1_Jouyou,');
    fs.writeFileSync(kanjiPath, kanjiTs);
}

console.log("Thành công liên kết các tệp dữ liệu vào hệ thống (vocabData.ts & kanjiData.ts)!");
