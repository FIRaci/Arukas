import fs from 'fs';
import path from 'path';

const p = path.join(process.cwd(), 'src/data/vocabEntriesN5.ts');
let txt = fs.readFileSync(p, 'utf8');

const newEntries = [
  // Animals
  { id: 'n5-inu', word: '犬', reading: 'いぬ', romaji: 'inu', meaning: 'Con chó', hanViet: 'KHUYỂN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Động vật'], examples: [{ jp: '可愛い犬がいます。', reading: 'かわいいいぬがいます。', meaning: 'Có một con chó dễ thương.' }], synonyms: [{ word: 'ワンちゃん', reading: 'ワンちゃん', meaning: 'Cún con' }] },
  { id: 'n5-neko', word: '猫', reading: 'ねこ', romaji: 'neko', meaning: 'Con mèo', hanViet: 'MIÊU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Động vật'], examples: [{ jp: '黒い猫を飼っています。', reading: 'くろいねこをかっています。', meaning: 'Tôi đang nuôi một con mèo đen.' }] },
  { id: 'n5-tori', word: '鳥', reading: 'とり', romaji: 'tori', meaning: 'Con chim', hanViet: 'ĐIỂU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Động vật'], examples: [{ jp: '空に鳥が飛んでいます。', reading: 'そらにとりがとんでいます。', meaning: 'Có con chim đang bay trên trời.' }] },
    
  // Colors
  { id: 'n5-aka', word: '赤', reading: 'あか', romaji: 'aka', meaning: 'Màu đỏ', hanViet: 'XÍCH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'], examples: [{ jp: 'リンゴは赤いです。', reading: 'リンゴはあかいです。', meaning: 'Quả táo màu đỏ.' }], related: [{ word: '青', reading: 'あお', meaning: 'Màu xanh' }] },
  { id: 'n5-ao', word: '青', reading: 'あお', romaji: 'ao', meaning: 'Màu xanh dương', hanViet: 'THANH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'], examples: [{ jp: '青い海が綺麗です。', reading: 'あおいうみがきれいです。', meaning: 'Biển xanh rất đẹp.' }], related: [{ word: '赤', reading: 'あか', meaning: 'Màu đỏ' }] },
  { id: 'n5-shiro', word: '白', reading: 'しろ', romaji: 'shiro', meaning: 'Màu trắng', hanViet: 'BẠCH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'], examples: [{ jp: '白い雪が降っています。', reading: 'しろいゆきがふっています。', meaning: 'Tuyết trắng đang rơi.' }], antonyms: [{ word: '黒', reading: 'くろ', meaning: 'Màu đen' }] },
  { id: 'n5-kuro', word: '黒', reading: 'くろ', romaji: 'kuro', meaning: 'Màu đen', hanViet: 'HẮC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'], examples: [{ jp: '黒い車を買いました。', reading: 'くろいくるまをかいました。', meaning: 'Tôi đã mua chiếc xe màu đen.' }], antonyms: [{ word: '白', reading: 'しろ', meaning: 'Màu trắng' }] },

  // Body Parts
  { id: 'n5-me', word: '目', reading: 'め', romaji: 'me', meaning: 'Mắt', hanViet: 'MỤC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'], examples: [{ jp: '彼女は目が大きいです。', reading: 'かのじょはめがおおきいです。', meaning: 'Cô ấy có đôi mắt to.' }] },
  { id: 'n5-mimi', word: '耳', reading: 'みみ', romaji: 'mimi', meaning: 'Tai', hanViet: 'NHĨ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'], examples: [{ jp: '耳が痛いです。', reading: 'みみがいたいです。', meaning: 'Tôi bị đau tai.' }] },
  { id: 'n5-kuchi', word: '口', reading: 'くち', romaji: 'kuchi', meaning: 'Miệng', hanViet: 'KHẨU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'], examples: [{ jp: '大きく口を開けてください。', reading: 'おおきくくちをあけてください。', meaning: 'Hãy há miệng to ra.' }] },
  { id: 'n5-te', word: '手', reading: 'て', romaji: 'te', meaning: 'Tay', hanViet: 'THỦ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'], examples: [{ jp: '手を洗います。', reading: 'てをあらいます。', meaning: 'Tôi rửa tay.' }] },
  { id: 'n5-ashi', word: '足', reading: 'あし', romaji: 'ashi', meaning: 'Chân', hanViet: 'TÚC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'], examples: [{ jp: '足が速いです。', reading: 'あしがはやいです。', meaning: 'Chạy nhanh (chân nhanh).' }] },

  // Directions
  { id: 'n5-migi', word: '右', reading: 'みぎ', romaji: 'migi', meaning: 'Bên phải', hanViet: 'HỮU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Phương hướng'], examples: [{ jp: '右に曲がってください。', reading: 'みぎにまがってください。', meaning: 'Xin hãy rẽ phải.' }], antonyms: [{ word: '左', reading: 'ひだり', meaning: 'Bên trái' }] },
  { id: 'n5-hidari', word: '左', reading: 'ひだり', romaji: 'hidari', meaning: 'Bên trái', hanViet: 'TẢ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Phương hướng'], examples: [{ jp: '左を見てください。', reading: 'ひだりをみてください。', meaning: 'Hãy nhìn sang trái.' }], antonyms: [{ word: '右', reading: 'みぎ', meaning: 'Bên phải' }] },
  { id: 'n5-ue', word: '上', reading: 'うえ', romaji: 'ue', meaning: 'Bên trên', hanViet: 'THƯỢNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Phương hướng'], examples: [{ jp: '机の上に本があります。', reading: 'つくえのうえにほんがあります。', meaning: 'Có quyển sách trên bàn.' }], antonyms: [{ word: '下', reading: 'した', meaning: 'Bên dưới' }] },
  { id: 'n5-shita', word: '下', reading: 'した', romaji: 'shita', meaning: 'Bên dưới', hanViet: 'HẠ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Phương hướng'], examples: [{ jp: '猫がテーブルの下にいます。', reading: 'ねこがテーブルのしたにいます。', meaning: 'Con mèo đang ở dưới bàn.' }], antonyms: [{ word: '上', reading: 'うえ', meaning: 'Bên trên' }] },
  { id: 'n5-mae', word: '前', reading: 'まえ', romaji: 'mae', meaning: 'Phía trước', hanViet: 'TIỀN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Phương hướng'], examples: [{ jp: '駅の前にいます。', reading: 'えきのまえにいます。', meaning: 'Tôi đang ở trước nhà ga.' }], antonyms: [{ word: '後ろ', reading: 'うしろ', meaning: 'Phía sau' }] },
  { id: 'n5-ushiro', word: '後ろ', reading: 'うしろ', romaji: 'ushiro', meaning: 'Phía sau', hanViet: 'HẬU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Phương hướng'], examples: [{ jp: '私の後ろに立たないで。', reading: 'わたしのうしろにたたないで。', meaning: 'Đừng đứng sau lưng tôi.' }], antonyms: [{ word: '前', reading: 'まえ', meaning: 'Phía trước' }] },

  // Extra Adjectives
  { id: 'n5-nagai', word: '長い', reading: 'ながい', romaji: 'nagai', meaning: 'Dài', hanViet: 'TRƯỜNG', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Kích thước'], examples: [{ jp: '彼女の髪は長いです。', reading: 'かのじょのかみはながいです。', meaning: 'Tóc cô ấy dài.' }], antonyms: [{ word: '短い', reading: 'みじかい', meaning: 'Ngắn' }] },
  { id: 'n5-mijikai', word: '短い', reading: 'みじかい', romaji: 'mijikai', meaning: 'Ngắn', hanViet: 'ĐOẢN', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Kích thước'], examples: [{ jp: '鉛筆が短くなりました。', reading: 'えんぴつがみじかくなりました。', meaning: 'Cây bút chì đã trở nên ngắn.' }], antonyms: [{ word: '長い', reading: 'ながい', meaning: 'Dài' }] },
  { id: 'n5-amai', word: '甘い', reading: 'あまい', romaji: 'amai', meaning: 'Ngọt', hanViet: 'CAM', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Hương vị'], examples: [{ jp: 'このケーキは甘くて美味しいです。', reading: 'このケーキはあまくておいしいです。', meaning: 'Cái bánh này ngọt và ngon.' }], antonyms: [{ word: '辛い', reading: 'からい', meaning: 'Cay' }] },
  { id: 'n5-karai', word: '辛い', reading: 'からい', romaji: 'karai', meaning: 'Cay', hanViet: 'TÂN', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Hương vị'], examples: [{ jp: 'カレーが辛いです。', reading: 'カレーがからいです。', meaning: 'Món cà ri này cay.' }], antonyms: [{ word: '甘い', reading: 'あまい', meaning: 'Ngọt' }] },
];

let addedCount = 0;
let formattedRows = '';

for (const entry of newEntries) {
    if (!txt.includes(`id: '${entry.id}'`) && !txt.includes(`word: '${entry.word}'`)) {
        // Build JSON representation that looks like TS
        const jsonStr = JSON.stringify(entry, null, 2)
            .replace(/\"([A-Za-z0-9_]+)\":/g, '$1:')
            .replace(/"/g, "'");
        formattedRows += "  " + jsonStr.replace(/\n}/g, "\n  },\n");
        addedCount++;
    }
}

if (addedCount > 0) {
    // Insert just before the closing bracket ];
    const insertHeader = `\n  // ═══════════════ BỔ SUNG — TỪ VỰNG THIẾU CƠ BẢN (N5) ═══════════════\n`;
    txt = txt.replace(/\n];/, insertHeader + formattedRows + '];');
    fs.writeFileSync(p, txt);
    console.log(`Successfully added ${addedCount} missing basic N5 words.`);
} else {
    console.log('No new basic words to add (they might already exist).');
}
