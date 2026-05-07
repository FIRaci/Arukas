import fs from 'fs';
import path from 'path';

// 1. Process Jouyou Kanji
const kanjiPath = path.resolve('../nihongo_scratch/data/jouyou-kanji-learning.csv');
const rawCsv = fs.readFileSync(kanjiPath, 'utf8');
const lines = rawCsv.split('\n').filter((x: string) => x.trim().length > 0);

const tsObjects = lines.map((line: string, index: number) => {
    // Very basic parsing since it's just raw CSV data
    const parts = line.split(','); 
    const kanji = parts[0]?.trim() || '';
    const meaning = parts[1]?.replace(/"/g, '')?.trim() || '';
    const readings = parts[2]?.replace(/"/g, '')?.trim() || '';
    const examplesStr = parts.slice(3).join(',')?.replace(/"/g, '')?.trim() || '';

    return `  { id: 'jouyou-${index}', kanji: ${JSON.stringify(kanji)}, meaning: ${JSON.stringify(meaning)}, readings: ${JSON.stringify(readings)}, examples: ${JSON.stringify(examplesStr)} }`;
});

const tsContent = `// Tự động tạo dữ liệu Kanji học thuật từ source github: nihongo_scratch\nexport const kanjiImportBatch1_Jouyou = [\n` + tsObjects.join(',\n') + '\n];\n';
fs.writeFileSync(path.join(process.cwd(), 'src/data/kanjiImportBatch1_Jouyou.ts'), tsContent);

// 2. Process Ideophones
const ideoPath = path.resolve('../nihongo_scratch/data/ideophones.csv');
const ideoCsv = fs.readFileSync(ideoPath, 'utf8');
const ideoLines = ideoCsv.split('\n').filter((x: string) => x.trim().length > 0);

const ideoObjs = ideoLines.map((line: string, idx: number) => {
    const firstSpace = line.indexOf(' ');
    if(firstSpace === -1) return '';
    const word = line.substring(0, firstSpace);
    let meaning = line.substring(firstSpace + 1).replace(/^"/, '').replace(/"$/, '').trim();
    return `  { id: 'ideo-${idx}', word: '${word}', meaning: ${JSON.stringify(meaning)} }`;
}).filter((x: string) => x !== '');

const ideoContent = `// Tự động tạo dữ liệu từ tượng thanh/trạng thái (ideophones)\nexport const ideophonesImportBatch1 = [\n` + ideoObjs.join(',\n') + '\n];\n';
fs.writeFileSync(path.join(process.cwd(), 'src/data/ideophonesImportBatch1.ts'), ideoContent);

console.log("Thành công ingest toàn bộ dữ liệu repo nihongo sang các mảng TS!");
