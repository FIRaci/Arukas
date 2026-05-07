// ============================================================================
// Counter Variation Data — 助数詞の変化表
// Shows how each counter reading changes with numbers 1~10
// ============================================================================

export interface CounterVariation {
  num: number;
  reading: string;
  irregular: boolean;   // true = sound changes (rendaku, sokuon, etc.)
}

export interface CounterDetail {
  counter: string;       // e.g. 〜本
  baseReading: string;   // e.g. ほん
  meaning: string;       // Vietnamese meaning
  usedFor: string;       // What objects it counts
  variations: CounterVariation[];
}

// ─── Main counters ─────────────────────────────────────────────────────

export const COUNTER_DETAILS: CounterDetail[] = [
  {
    counter: '〜つ', baseReading: 'つ', meaning: 'Đồ vật chung (Wago)',
    usedFor: 'Mọi thứ — dùng khi không rõ counter chuyên dụng',
    variations: [
      { num: 1, reading: 'ひとつ', irregular: true },
      { num: 2, reading: 'ふたつ', irregular: true },
      { num: 3, reading: 'みっつ', irregular: true },
      { num: 4, reading: 'よっつ', irregular: true },
      { num: 5, reading: 'いつつ', irregular: true },
      { num: 6, reading: 'むっつ', irregular: true },
      { num: 7, reading: 'ななつ', irregular: true },
      { num: 8, reading: 'やっつ', irregular: true },
      { num: 9, reading: 'ここのつ', irregular: true },
      { num: 10, reading: 'とお', irregular: true },
    ],
  },
  {
    counter: '〜人', baseReading: 'にん', meaning: 'Người',
    usedFor: 'Đếm người',
    variations: [
      { num: 1, reading: 'ひとり', irregular: true },
      { num: 2, reading: 'ふたり', irregular: true },
      { num: 3, reading: 'さんにん', irregular: false },
      { num: 4, reading: 'よにん', irregular: true },
      { num: 5, reading: 'ごにん', irregular: false },
      { num: 6, reading: 'ろくにん', irregular: false },
      { num: 7, reading: 'ななにん', irregular: false },
      { num: 8, reading: 'はちにん', irregular: false },
      { num: 9, reading: 'きゅうにん', irregular: false },
      { num: 10, reading: 'じゅうにん', irregular: false },
    ],
  },
  {
    counter: '〜個', baseReading: 'こ', meaning: 'Vật nhỏ, tròn',
    usedFor: 'Quả, viên, hộp, cục, trứng...',
    variations: [
      { num: 1, reading: 'いっこ', irregular: true },
      { num: 2, reading: 'にこ', irregular: false },
      { num: 3, reading: 'さんこ', irregular: false },
      { num: 4, reading: 'よんこ', irregular: false },
      { num: 5, reading: 'ごこ', irregular: false },
      { num: 6, reading: 'ろっこ', irregular: true },
      { num: 7, reading: 'ななこ', irregular: false },
      { num: 8, reading: 'はっこ', irregular: true },
      { num: 9, reading: 'きゅうこ', irregular: false },
      { num: 10, reading: 'じゅっこ', irregular: true },
    ],
  },
  {
    counter: '〜本', baseReading: 'ほん', meaning: 'Vật dài, mỏng',
    usedFor: 'Bút, chai, cây, ô, phim, đường ray...',
    variations: [
      { num: 1, reading: 'いっぽん', irregular: true },
      { num: 2, reading: 'にほん', irregular: false },
      { num: 3, reading: 'さんぼん', irregular: true },
      { num: 4, reading: 'よんほん', irregular: false },
      { num: 5, reading: 'ごほん', irregular: false },
      { num: 6, reading: 'ろっぽん', irregular: true },
      { num: 7, reading: 'ななほん', irregular: false },
      { num: 8, reading: 'はっぽん', irregular: true },
      { num: 9, reading: 'きゅうほん', irregular: false },
      { num: 10, reading: 'じゅっぽん', irregular: true },
    ],
  },
  {
    counter: '〜枚', baseReading: 'まい', meaning: 'Vật phẳng, mỏng',
    usedFor: 'Giấy, áo, đĩa, vé, ảnh, tờ...',
    variations: [
      { num: 1, reading: 'いちまい', irregular: false },
      { num: 2, reading: 'にまい', irregular: false },
      { num: 3, reading: 'さんまい', irregular: false },
      { num: 4, reading: 'よんまい', irregular: false },
      { num: 5, reading: 'ごまい', irregular: false },
      { num: 6, reading: 'ろくまい', irregular: false },
      { num: 7, reading: 'ななまい', irregular: false },
      { num: 8, reading: 'はちまい', irregular: false },
      { num: 9, reading: 'きゅうまい', irregular: false },
      { num: 10, reading: 'じゅうまい', irregular: false },
    ],
  },
  {
    counter: '〜匹', baseReading: 'ひき', meaning: 'Động vật nhỏ',
    usedFor: 'Chó, mèo, cá, côn trùng, chuột...',
    variations: [
      { num: 1, reading: 'いっぴき', irregular: true },
      { num: 2, reading: 'にひき', irregular: false },
      { num: 3, reading: 'さんびき', irregular: true },
      { num: 4, reading: 'よんひき', irregular: false },
      { num: 5, reading: 'ごひき', irregular: false },
      { num: 6, reading: 'ろっぴき', irregular: true },
      { num: 7, reading: 'ななひき', irregular: false },
      { num: 8, reading: 'はっぴき', irregular: true },
      { num: 9, reading: 'きゅうひき', irregular: false },
      { num: 10, reading: 'じゅっぴき', irregular: true },
    ],
  },
  {
    counter: '〜頭', baseReading: 'とう', meaning: 'Động vật lớn',
    usedFor: 'Bò, ngựa, voi, hổ...',
    variations: [
      { num: 1, reading: 'いっとう', irregular: true },
      { num: 2, reading: 'にとう', irregular: false },
      { num: 3, reading: 'さんとう', irregular: false },
      { num: 4, reading: 'よんとう', irregular: false },
      { num: 5, reading: 'ごとう', irregular: false },
      { num: 6, reading: 'ろくとう', irregular: false },
      { num: 7, reading: 'ななとう', irregular: false },
      { num: 8, reading: 'はっとう', irregular: true },
      { num: 9, reading: 'きゅうとう', irregular: false },
      { num: 10, reading: 'じゅっとう', irregular: true },
    ],
  },
  {
    counter: '〜台', baseReading: 'だい', meaning: 'Xe, máy, thiết bị',
    usedFor: 'Xe hơi, máy tính, TV, tủ lạnh, xe đạp...',
    variations: [
      { num: 1, reading: 'いちだい', irregular: false },
      { num: 2, reading: 'にだい', irregular: false },
      { num: 3, reading: 'さんだい', irregular: false },
      { num: 4, reading: 'よんだい', irregular: false },
      { num: 5, reading: 'ごだい', irregular: false },
      { num: 6, reading: 'ろくだい', irregular: false },
      { num: 7, reading: 'ななだい', irregular: false },
      { num: 8, reading: 'はちだい', irregular: false },
      { num: 9, reading: 'きゅうだい', irregular: false },
      { num: 10, reading: 'じゅうだい', irregular: false },
    ],
  },
  {
    counter: '〜杯', baseReading: 'はい', meaning: 'Cốc, chén, bát',
    usedFor: 'Cốc nước, bát cơm, ly bia, chén trà...',
    variations: [
      { num: 1, reading: 'いっぱい', irregular: true },
      { num: 2, reading: 'にはい', irregular: false },
      { num: 3, reading: 'さんばい', irregular: true },
      { num: 4, reading: 'よんはい', irregular: false },
      { num: 5, reading: 'ごはい', irregular: false },
      { num: 6, reading: 'ろっぱい', irregular: true },
      { num: 7, reading: 'ななはい', irregular: false },
      { num: 8, reading: 'はっぱい', irregular: true },
      { num: 9, reading: 'きゅうはい', irregular: false },
      { num: 10, reading: 'じゅっぱい', irregular: true },
    ],
  },
  {
    counter: '〜冊', baseReading: 'さつ', meaning: 'Sách, vở',
    usedFor: 'Sách, tạp chí, vở, từ điển, manga...',
    variations: [
      { num: 1, reading: 'いっさつ', irregular: true },
      { num: 2, reading: 'にさつ', irregular: false },
      { num: 3, reading: 'さんさつ', irregular: false },
      { num: 4, reading: 'よんさつ', irregular: false },
      { num: 5, reading: 'ごさつ', irregular: false },
      { num: 6, reading: 'ろくさつ', irregular: false },
      { num: 7, reading: 'ななさつ', irregular: false },
      { num: 8, reading: 'はっさつ', irregular: true },
      { num: 9, reading: 'きゅうさつ', irregular: false },
      { num: 10, reading: 'じゅっさつ', irregular: true },
    ],
  },
  {
    counter: '〜回', baseReading: 'かい', meaning: 'Lần',
    usedFor: 'Số lần lặp lại hành động',
    variations: [
      { num: 1, reading: 'いっかい', irregular: true },
      { num: 2, reading: 'にかい', irregular: false },
      { num: 3, reading: 'さんかい', irregular: false },
      { num: 4, reading: 'よんかい', irregular: false },
      { num: 5, reading: 'ごかい', irregular: false },
      { num: 6, reading: 'ろっかい', irregular: true },
      { num: 7, reading: 'ななかい', irregular: false },
      { num: 8, reading: 'はっかい', irregular: true },
      { num: 9, reading: 'きゅうかい', irregular: false },
      { num: 10, reading: 'じゅっかい', irregular: true },
    ],
  },
  {
    counter: '〜階', baseReading: 'かい', meaning: 'Tầng lầu',
    usedFor: 'Tầng trong tòa nhà',
    variations: [
      { num: 1, reading: 'いっかい', irregular: true },
      { num: 2, reading: 'にかい', irregular: false },
      { num: 3, reading: 'さんがい', irregular: true },
      { num: 4, reading: 'よんかい', irregular: false },
      { num: 5, reading: 'ごかい', irregular: false },
      { num: 6, reading: 'ろっかい', irregular: true },
      { num: 7, reading: 'ななかい', irregular: false },
      { num: 8, reading: 'はっかい', irregular: true },
      { num: 9, reading: 'きゅうかい', irregular: false },
      { num: 10, reading: 'じゅっかい', irregular: true },
    ],
  },
  {
    counter: '〜歳/才', baseReading: 'さい', meaning: 'Tuổi',
    usedFor: 'Đếm tuổi',
    variations: [
      { num: 1, reading: 'いっさい', irregular: true },
      { num: 2, reading: 'にさい', irregular: false },
      { num: 3, reading: 'さんさい', irregular: false },
      { num: 4, reading: 'よんさい', irregular: false },
      { num: 5, reading: 'ごさい', irregular: false },
      { num: 6, reading: 'ろくさい', irregular: false },
      { num: 7, reading: 'ななさい', irregular: false },
      { num: 8, reading: 'はっさい', irregular: true },
      { num: 9, reading: 'きゅうさい', irregular: false },
      { num: 10, reading: 'じゅっさい', irregular: true },
    ],
  },
  {
    counter: '〜番', baseReading: 'ばん', meaning: 'Số thứ tự',
    usedFor: 'Thứ nhất, thứ hai... (一番 = nhất)',
    variations: [
      { num: 1, reading: 'いちばん', irregular: false },
      { num: 2, reading: 'にばん', irregular: false },
      { num: 3, reading: 'さんばん', irregular: false },
      { num: 4, reading: 'よんばん', irregular: false },
      { num: 5, reading: 'ごばん', irregular: false },
      { num: 6, reading: 'ろくばん', irregular: false },
      { num: 7, reading: 'ななばん', irregular: false },
      { num: 8, reading: 'はちばん', irregular: false },
      { num: 9, reading: 'きゅうばん', irregular: false },
      { num: 10, reading: 'じゅうばん', irregular: false },
    ],
  },
];

// ─── Time-specific counters ───────────────────────────────────────────

export const TIME_COUNTERS: CounterDetail[] = [
  {
    counter: '〜時', baseReading: 'じ', meaning: 'Giờ',
    usedFor: 'Nói mấy giờ (3時 = 3 giờ)',
    variations: [
      { num: 1, reading: 'いちじ', irregular: false },
      { num: 2, reading: 'にじ', irregular: false },
      { num: 3, reading: 'さんじ', irregular: false },
      { num: 4, reading: 'よじ', irregular: true },
      { num: 5, reading: 'ごじ', irregular: false },
      { num: 6, reading: 'ろくじ', irregular: false },
      { num: 7, reading: 'しちじ', irregular: true },
      { num: 8, reading: 'はちじ', irregular: false },
      { num: 9, reading: 'くじ', irregular: true },
      { num: 10, reading: 'じゅうじ', irregular: false },
      { num: 11, reading: 'じゅういちじ', irregular: false },
      { num: 12, reading: 'じゅうにじ', irregular: false },
    ],
  },
  {
    counter: '〜分', baseReading: 'ふん', meaning: 'Phút',
    usedFor: 'Nói phút (5分 = 5 phút)',
    variations: [
      { num: 1, reading: 'いっぷん', irregular: true },
      { num: 2, reading: 'にふん', irregular: false },
      { num: 3, reading: 'さんぷん', irregular: true },
      { num: 4, reading: 'よんぷん', irregular: true },
      { num: 5, reading: 'ごふん', irregular: false },
      { num: 6, reading: 'ろっぷん', irregular: true },
      { num: 7, reading: 'ななふん', irregular: false },
      { num: 8, reading: 'はっぷん', irregular: true },
      { num: 9, reading: 'きゅうふん', irregular: false },
      { num: 10, reading: 'じゅっぷん', irregular: true },
    ],
  },
  {
    counter: '〜秒', baseReading: 'びょう', meaning: 'Giây',
    usedFor: 'Đếm giây',
    variations: [
      { num: 1, reading: 'いちびょう', irregular: false },
      { num: 2, reading: 'にびょう', irregular: false },
      { num: 3, reading: 'さんびょう', irregular: false },
      { num: 4, reading: 'よんびょう', irregular: false },
      { num: 5, reading: 'ごびょう', irregular: false },
      { num: 6, reading: 'ろくびょう', irregular: false },
      { num: 7, reading: 'ななびょう', irregular: false },
      { num: 8, reading: 'はちびょう', irregular: false },
      { num: 9, reading: 'きゅうびょう', irregular: false },
      { num: 10, reading: 'じゅうびょう', irregular: false },
    ],
  },
];

// ─── Day/Month counters (special readings) ────────────────────────────

export const DATE_COUNTERS: CounterDetail[] = [
  {
    counter: '〜日', baseReading: 'にち/か', meaning: 'Ngày trong tháng',
    usedFor: 'Ngày 1~31 — nhiều đọc đặc biệt theo hệ Wago',
    variations: [
      { num: 1, reading: 'ついたち', irregular: true },
      { num: 2, reading: 'ふつか', irregular: true },
      { num: 3, reading: 'みっか', irregular: true },
      { num: 4, reading: 'よっか', irregular: true },
      { num: 5, reading: 'いつか', irregular: true },
      { num: 6, reading: 'むいか', irregular: true },
      { num: 7, reading: 'なのか', irregular: true },
      { num: 8, reading: 'ようか', irregular: true },
      { num: 9, reading: 'ここのか', irregular: true },
      { num: 10, reading: 'とおか', irregular: true },
      { num: 14, reading: 'じゅうよっか', irregular: true },
      { num: 20, reading: 'はつか', irregular: true },
      { num: 24, reading: 'にじゅうよっか', irregular: true },
    ],
  },
  {
    counter: '〜月', baseReading: 'がつ', meaning: 'Tháng',
    usedFor: 'Tháng 1~12 — 4月 đọc しがつ, 7月 đọc しちがつ, 9月 đọc くがつ',
    variations: [
      { num: 1, reading: 'いちがつ', irregular: false },
      { num: 2, reading: 'にがつ', irregular: false },
      { num: 3, reading: 'さんがつ', irregular: false },
      { num: 4, reading: 'しがつ', irregular: true },
      { num: 5, reading: 'ごがつ', irregular: false },
      { num: 6, reading: 'ろくがつ', irregular: false },
      { num: 7, reading: 'しちがつ', irregular: true },
      { num: 8, reading: 'はちがつ', irregular: false },
      { num: 9, reading: 'くがつ', irregular: true },
      { num: 10, reading: 'じゅうがつ', irregular: false },
      { num: 11, reading: 'じゅういちがつ', irregular: false },
      { num: 12, reading: 'じゅうにがつ', irregular: false },
    ],
  },
  {
    counter: '〜年', baseReading: 'ねん', meaning: 'Năm',
    usedFor: 'Đếm năm / năm dương lịch',
    variations: [
      { num: 1, reading: 'いちねん', irregular: false },
      { num: 2, reading: 'にねん', irregular: false },
      { num: 3, reading: 'さんねん', irregular: false },
      { num: 4, reading: 'よねん', irregular: true },
      { num: 5, reading: 'ごねん', irregular: false },
      { num: 6, reading: 'ろくねん', irregular: false },
      { num: 7, reading: 'ななねん', irregular: false },
      { num: 8, reading: 'はちねん', irregular: false },
      { num: 9, reading: 'きゅうねん', irregular: false },
      { num: 10, reading: 'じゅうねん', irregular: false },
    ],
  },
];
