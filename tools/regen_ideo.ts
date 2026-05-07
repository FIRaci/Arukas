import fs from 'fs';
import path from 'path';

const ideoPath = path.resolve('../nihongo_scratch/data/ideophones.csv');
const ideoCsv = fs.readFileSync(ideoPath, 'utf8');
const ideoLines = ideoCsv.split('\n').filter((x: string) => x.trim().length > 0);

const ideoObjs = ideoLines.map((line: string, idx: number) => {
    const firstSpace = line.indexOf(' ');
    if(firstSpace === -1) return '';
    const word = line.substring(0, firstSpace);
    let meaning = line.substring(firstSpace + 1).replace(/^"/, '').replace(/"$/, '').trim();
    return `  { id: 'ideo-${idx}', word: ${JSON.stringify(word)}, meaning: ${JSON.stringify(meaning)} }`;
}).filter((x: string) => x !== '');

const ideoContent = `// Tự động tạo dữ liệu từ tượng thanh/trạng thái (ideophones)\nexport const ideophonesImportBatch1 = [\n` + ideoObjs.join(',\n') + '\n];\n';
fs.writeFileSync(path.join(process.cwd(), 'src/data/ideophonesImportBatch1.ts'), ideoContent);

// And wait, there's another TS1128 error in vocabEntriesN5.ts
// `src/data/vocabEntriesN5.ts(1009,5): error TS1128: Declaration or statement expected.`
// So line 1009: `] },` still exists!
// Let me nuke it.
const n5Path = path.join(process.cwd(), 'src/data/vocabEntriesN5.ts');
let n5 = fs.readFileSync(n5Path, 'utf8');
n5 = n5.replace(/(\n\s*\}\s*\]\s*\}\s*,\s*\n)(\s*\]\s*\}\s*,\s*\n)(\s*\{\s*id:\s*'n5-kami')/g, '$1$3');

// Wait, the easiest way to remove the second `] },` from the diff we analyzed:
// 1008:     examples: [{ jp: '財布を忘れた。', reading: 'さいふをわすれた。', meaning: 'Quên ví.' }] },
// 1009:   ] },
// 1010:   { id: 'n5-kami', word: '紙', reading: 'かみ', romaji: 'kami', meaning: 'Giấy', hanViet: 'CHỈ', type: 'Danh từ', jlpt: 'N5',
n5 = n5.replace(/(\s*meaning:\s*'Quên ví\.'\s*\}\]\s*\}\,)\s*\n\s*\]\s*\}\,\s*\n\s*(\{\s*id:\s*'n5-kami')/g, '$1\n  $2');

fs.writeFileSync(n5Path, n5);
console.log('Fixed ideophones and N5!');
