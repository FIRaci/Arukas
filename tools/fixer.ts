import fs from 'fs';
import path from 'path';

let n5 = fs.readFileSync(path.join(process.cwd(), 'src/data/vocabEntriesN5.ts'), 'utf8');
n5 = n5.replace(/\]\s*\}\,\s*\{\s*id:\s*'n5-kami'/g, "  { id: 'n5-kami'");
fs.writeFileSync(path.join(process.cwd(), 'src/data/vocabEntriesN5.ts'), n5);

console.log('Fixed orphaned bracket before n5-kami!');
