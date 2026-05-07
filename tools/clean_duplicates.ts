import fs from 'fs';
import path from 'path';

function cleanDuplicates(level: string) {
    const dataDir = path.join(process.cwd(), 'src/data');
    const p = path.join(dataDir, `vocabEntries${level}.ts`);
    if (!fs.existsSync(p)) {
        console.log(`File for ${level} not found, skipping.`);
        return;
    }
    
    let txt = fs.readFileSync(p, 'utf8');
    let objects: {start: number, end: number, text: string}[] = [];
    let depth = 0;
    let start = -1;
    
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] === '{') {
            // Check if this is the start of an object with 'id:'
            let isItemStart = false;
            if (depth === 0) {
                const ahead = txt.slice(i, i + 15);
                if (ahead.match(/^\{\s*id\s*:/)) {
                    isItemStart = true;
                }
            }
            if (isItemStart) {
                start = i;
                depth = 1;
            } else if (depth > 0) {
                depth++;
            }
        } else if (txt[i] === '}') {
            if (depth > 0) {
                depth--;
                if (depth === 0) {
                    objects.push({start, end: i + 1, text: txt.slice(start, i + 1)});
                }
            }
        }
    }

    console.log(`[${level}] Found ${objects.length} entries.`);

    let ids: Record<string, typeof objects> = {};
    let toRemove: typeof objects = [];

    // Group by ID
    for (let obj of objects) {
        let m = obj.text.match(/id:\s*'([^']+)'/);
        if (!m) continue;
        let id = m[1];
        if (!ids[id]) ids[id] = [];
        ids[id].push(obj);
    }

    for (let id in ids) {
        if (ids[id].length > 1) {
            console.log(`[${level}] Duplicate id: ${id} (${ids[id].length} copies)`);
            let kanjiObj = ids[id].find((o: any) => {
                let wm = o.text.match(/word:\s*'([^']+)'/);
                // Regex for Kanji \u4e00-\u9faf
                return wm && /[\u4e00-\u9faf]/.test(wm[1]);
            });
            let hiraObj = ids[id].find((o: any) => {
                let wm = o.text.match(/word:\s*'([^']+)'/);
                return wm && !/[\u4e00-\u9faf]/.test(wm[1]);
            });
            
            if (kanjiObj && hiraObj) {
                // remove the hiragana one
                console.log(`  -> Removing hiragana version of ${id}`);
                // just safely remove all but the kanji one
                for (let o of ids[id]) {
                    if (o !== kanjiObj) toRemove.push(o);
                }
            } else {
                // just keep the first one
                console.log(`  -> Keeping first occurrence of ${id}`);
                for (let i = 1; i < ids[id].length; i++) {
                    toRemove.push(ids[id][i]);
                }
            }
        }
    }

    if (toRemove.length > 0) {
        toRemove.sort((a,b) => b.start - a.start);
        for (let obj of toRemove) {
            let end = obj.end;
            while(txt[end] === ',' || txt[end] === ' ' || txt[end] === '\n' || txt[end] === '\r') {
                end++;
            }
            txt = txt.slice(0, obj.start) + txt.slice(end);
        }
        
        fs.writeFileSync(p, txt);
        console.log(`[${level}] Removed ${toRemove.length} duplicates.`);
    } else {
        console.log(`[${level}] No duplicates found.`);
    }
}

['N5', 'N4', 'N3', 'N2', 'N1'].forEach(level => {
    cleanDuplicates(level);
});
