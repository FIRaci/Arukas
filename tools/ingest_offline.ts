import fs from 'fs';
import path from 'path';

// Load offline dictionary text.txt (from parent directory)
const offlineDbPath = path.resolve('../text.txt');
let offlineDb: any[] = [];
try {
    let raw = fs.readFileSync(offlineDbPath, 'utf8');
    const splitIndex = raw.indexOf('Rules by Part of Speech');
    if (splitIndex > -1) raw = raw.substring(0, splitIndex).trim();
    raw = raw.replace(/\}\s*\]\s*\[\s*\{/g, '},{');
    offlineDb = JSON.parse(raw);
    console.log(`Loaded text.txt DB with ${offlineDb.length} entries.`);
} catch (e: any) {
    console.error("Error loading text.txt:", e.message);
    process.exit(1);
}

// Create a fast lookup map mapping word -> db entry
const wordMap = new Map();
// Also map by romanization for fallback matching
const romajiMap = new Map();

for (const item of offlineDb) {
    if (!wordMap.has(item.word)) {
        wordMap.set(item.word, item);
    }
    if (item.romanization && !romajiMap.has(item.romanization)) {
        romajiMap.set(item.romanization, item);
    }
}

const dataDir = path.join(process.cwd(), 'src/data');
let totalAdded = 0;

['N5', 'N4', 'N3', 'N2', 'N1'].forEach(level => {
    const filePath = path.join(dataDir, `vocabEntries${level}.ts`);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    let addedToLevel = 0;

    // Regex to match individual vocab entry blocks
    const objectRegex = /(\{\s*id:\s*['"]n[1-5]-[^'"]+['"][\s\S]*?\})(?=\s*,|\s*\])/g;
    
    content = content.replace(objectRegex, (block: string) => {
        const wordMatch = block.match(/word:\s*['"]([^'"]+)['"]/);
        const romajiMatch = block.match(/romaji:\s*['"]([^'"]+)['"]/);
        
        if (!wordMatch) return block;
        const word = wordMatch[1];
        const romaji = romajiMatch ? romajiMatch[1] : '';
        
        const hasExamplesRegex = /examples:\s*\[\s*\{/g;
        const hasExamples = hasExamplesRegex.test(block);
        
        let dbEntry = wordMap.get(word);
        if (!dbEntry && romaji) {
             dbEntry = romajiMap.get(romaji);
        }
        
        // If the entry lacks examples and we found a matching example in text.txt
        if (!hasExamples && dbEntry && dbEntry.example_sentence_native) {
            // Remove the trailing newline and closing brace
            const blockWithoutBrace = block.replace(/(\n\s*\}\s*)$/, '');
            const indent = block.match(/\n(\s+)\}/)?.[1] || '  ';
            
            const exampleStr = `,\n${indent}  examples: [{ jp: ${JSON.stringify(dbEntry.example_sentence_native)}, reading: "", meaning: ${JSON.stringify(dbEntry.example_sentence_english)} }]\n${indent}}`;
            
            addedToLevel++;
            totalAdded++;
            return blockWithoutBrace + exampleStr;
        }
        return block;
    });

    if (addedToLevel > 0) {
        fs.writeFileSync(filePath, content);
        console.log(`[${level}] Injected robust examples for ${addedToLevel} words.`);
    } else {
        console.log(`[${level}] No eligible dictionary targets found for missing examples.`);
    }
});

console.log(`Total offline-enriched words: ${totalAdded}`);
