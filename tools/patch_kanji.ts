import fs from 'fs';
import path from 'path';

const fPath = path.join(process.cwd(), 'src/data/kanjiImportBatch1_Jouyou.ts');
let text = fs.readFileSync(fPath, 'utf8');

// The original output was: meaning: "...", readings: "...", examples: "..."
// We need to inject onyomi, kunyomi, hanViet, and strokes
text = text.replace(/readings:\s*([^,\[\{]+)(?=,\s*examples:)/g, 'readings: $1, onyomi: $1, kunyomi: "", hanViet: "", strokes: 0');

fs.writeFileSync(fPath, text);
console.log('Hoàn thành vá lỗi TS2322: Kanji properties missing');
