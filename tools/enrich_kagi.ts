import fs from 'fs';
import path from 'path';

const p = path.join(process.cwd(), 'src/data/vocabEntriesN5.ts');
let txt = fs.readFileSync(p, 'utf8');

txt = txt.replace(/\{\s*id:\s*'n5-kagi'[\s\S]*?\}(?:\s*,)?/g, '');
txt = txt.replace(/romaji:\s*'は',\s*meaning:\s*'Răng'/g, "romaji: 'ha', meaning: 'Răng'");

const KAGI_ENRICHED = `  { id: 'n5-kagi', word: '鍵', reading: 'かぎ', romaji: 'kagi', meaning: 'Chìa khóa, ổ khóa', hanViet: 'KIỆN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật', 'An ninh', 'Nhà cửa'],
    examples: [
      { jp: '鍵をかける。', reading: 'かぎをかける。', meaning: 'Khóa cửa / Đóng ổ khóa.' },
      { jp: '鍵を開ける。', reading: 'かぎをあける。', meaning: 'Mở khóa.' },
      { jp: '机の鍵を無くしてしまった。', reading: 'つくえのかぎをなくしてしまった。', meaning: 'Tôi đã làm mất chìa khóa ngăn kéo bàn.' }
    ],
    synonyms: [{ word: '合い鍵', reading: 'あいかぎ', meaning: 'Chìa khóa dự phòng / phụ' }],
    phrases: [
      { word: '鍵穴', reading: 'かぎあな', meaning: 'Lỗ khóa' },
      { word: '鍵束', reading: 'かぎたば', meaning: 'Chùm chìa khóa' }
    ]
  },
`;

txt = txt.replace(/\n];/, '\n' + KAGI_ENRICHED + '];');

fs.writeFileSync(p, txt);
console.log('Fixed and enriched N5 Kagi');
