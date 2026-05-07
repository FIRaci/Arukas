import fs from 'fs';
import path from 'path';

// Parse text.txt
let raw = fs.readFileSync(path.resolve('../text.txt'), 'utf8');
const splitIndex = raw.indexOf('Rules by Part of Speech');
if (splitIndex > -1) raw = raw.substring(0, splitIndex).trim();
raw = raw.replace(/\}\s*\]\s*\[\s*\{/g, '},{');
const db = JSON.parse(raw);

const flashcards = db.filter((x: any) => x.useful_for_flashcard);
console.log(`Parsed text.txt. Extracted ${flashcards.length} flashcard-ready vocabularies.`);

const chunkSize = 5000;
let part = 6; // Starts from 6 since vocabImportBatch5.ts exists
const tsFiles = [];

for (let i = 0; i < flashcards.length; i += chunkSize) {
    const chunk = flashcards.slice(i, i + chunkSize);
    
    const tsObjects = chunk.map((c: any, index: number) => {
        const id = `fc-p${part}-${index}`;
        const exStr = c.example_sentence_native ? `examples: [{ jp: ${JSON.stringify(c.example_sentence_native)}, reading: "", meaning: ${JSON.stringify(c.example_sentence_english)} }]` : ``;
        return `  { id: '${id}', word: ${JSON.stringify(c.word)}, reading: "", romaji: ${JSON.stringify(c.romanization || "")}, meaning: ${JSON.stringify(c.english_translation)}, type: ${JSON.stringify(c.pos)}, jlpt: ${JSON.stringify(c.cefr_level || "Unknown")}${exStr ? ',\n    ' + exStr : ''} }`;
    });

    const fileName = `vocabImportBatch${part}_Flashcards.ts`;
    const fileContent = `// Tự động được tạo (Auto-generated) từ text.txt Offline Dictionary\nexport const vocabImportBatch${part}_Flashcards = [\n` + tsObjects.join(',\n') + '\n];\n';
    
    fs.writeFileSync(path.join(process.cwd(), 'src', 'data', fileName), fileContent);
    tsFiles.push(fileName);
    console.log(`Created ${fileName} (${chunk.length} items)`);
    part++;
}

console.log("Successfully ran data enrichment!");
