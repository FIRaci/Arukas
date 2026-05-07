import fs from 'fs';
import path from 'path';

const files = ['vocabEntriesN5.ts', 'vocabEntriesN4.ts', 'vocabEntriesN3.ts', 'vocabEntriesN2.ts', 'vocabEntriesN1.ts'];
const p = path.join(process.cwd(), 'src/data');

for (const name of files) {
    const fPath = path.join(p, name);
    if (fs.existsSync(fPath)) {
        let txt = fs.readFileSync(fPath, 'utf8');
        // Find '}' followed by newline and '{ id:'
        txt = txt.replace(/\}\s*\n(\s*)\{\s*id:/g, '},\n$1{ id:');
        
        // Also fix where there is a comment in between
        txt = txt.replace(/\}\s*\n(\s*\/\/[^\n]*\n\s*)\{\s*id:/g, '},\n$1{ id:');

        fs.writeFileSync(fPath, txt);
    }
}
console.log("Fixed missing commas in arrays!");
