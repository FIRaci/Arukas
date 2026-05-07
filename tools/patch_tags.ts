import fs from 'fs';
import path from 'path';

for(let i=6; i<=11; i++) {
    const fPath = path.join(process.cwd(), `src/data/vocabImportBatch${i}_Flashcards.ts`);
    if (fs.existsSync(fPath)) {
        let text = fs.readFileSync(fPath, 'utf8');
        text = text.replace(/jlpt:\s*"([^"]*)"/g, 'jlpt: "$1", tags: []');
        fs.writeFileSync(fPath, text);
    }
}
console.log('Hoàn thành vá lỗi TS2345: tags is missing');
