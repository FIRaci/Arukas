// ============================================================================
// LOCAL NUMERAL PARSER — Japanese number & counter word recognition
// ============================================================================
// Handles: 一〜九, 十, 百, 千, 万, 億, 兆
// Compound numbers: 三百五十 → 350, 二千二十五年 → Năm 2025
// Counter words: 三人 → 3 người, 五冊 → 5 quyển
// Arabic+counter: 3人, 5冊, 100円
// ============================================================================

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 1: Kanji numeral values
// ═══════════════════════════════════════════════════════════════════════════

const KANJI_DIGIT: Record<string, number> = {
  '零': 0, '〇': 0,
  '一': 1, '二': 2, '三': 3, '四': 4, '五': 5,
  '六': 6, '七': 7, '八': 8, '九': 9,
};

const KANJI_POWER: Record<string, number> = {
  '十': 10, '百': 100, '千': 1000,
  '万': 10000, '億': 100000000, '兆': 1000000000000,
};

// All numeral-related kanji
const NUM_CHARS = new Set([
  ...Object.keys(KANJI_DIGIT),
  ...Object.keys(KANJI_POWER),
]);

export function isNumeralKanji(ch: string): boolean {
  return NUM_CHARS.has(ch);
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 2: Parse kanji number to integer
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Parse a Japanese kanji number string into an integer.
 * Examples: '三百五十' → 350, '二千' → 2000, '一万五千三百二十一' → 15321
 */
export function parseKanjiNumber(text: string): number | null {
  if (!text || text.length === 0) return null;
  
  // Pure zero
  if (text === '零' || text === '〇') return 0;
  
  // Single digit
  if (text.length === 1 && KANJI_DIGIT[text] !== undefined) return KANJI_DIGIT[text];
  
  // Check all chars are numeral kanji
  if (![...text].every(ch => NUM_CHARS.has(ch))) return null;

  let result = 0;
  let currentGroup = 0;  // Accumulator within current 万/億/兆 group
  let currentDigit = 0;
  let hasDigit = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    
    if (KANJI_DIGIT[ch] !== undefined) {
      currentDigit = KANJI_DIGIT[ch];
      hasDigit = true;
    } else if (KANJI_POWER[ch] !== undefined) {
      const power = KANJI_POWER[ch];
      
      if (power >= 10000) {
        // 万, 億, 兆 — these multiply the entire accumulated group
        if (!hasDigit && currentGroup === 0) currentGroup = 1;
        else if (hasDigit) currentGroup += currentDigit;
        result += currentGroup * power;
        currentGroup = 0;
        currentDigit = 0;
        hasDigit = false;
      } else {
        // 十, 百, 千 — these multiply the current digit
        if (!hasDigit) currentDigit = 1;
        currentGroup += currentDigit * power;
        currentDigit = 0;
        hasDigit = false;
      }
    }
  }
  
  // Add remaining digit
  if (hasDigit) {
    currentGroup += currentDigit;
  }
  result += currentGroup;

  return result > 0 || text === '零' || text === '〇' ? result : null;
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 3: Counter words database
// ═══════════════════════════════════════════════════════════════════════════

interface CounterInfo {
  reading: string;
  meaning: string;
  usedFor: string;
}

const COUNTERS: Record<string, CounterInfo> = {
  // People & things
  '人': { reading: 'にん', meaning: 'người', usedFor: 'Người' },
  '個': { reading: 'こ', meaning: 'cái', usedFor: 'Đồ vật nhỏ, tròn' },
  '本': { reading: 'ほん', meaning: 'cây/chai', usedFor: 'Vật dài, thanh' },
  '枚': { reading: 'まい', meaning: 'tờ/tấm', usedFor: 'Vật phẳng, mỏng' },
  '冊': { reading: 'さつ', meaning: 'quyển', usedFor: 'Sách' },
  '台': { reading: 'だい', meaning: 'chiếc', usedFor: 'Xe, máy móc' },
  '匹': { reading: 'ひき', meaning: 'con', usedFor: 'Động vật nhỏ' },
  '頭': { reading: 'とう', meaning: 'con', usedFor: 'Động vật lớn' },
  '羽': { reading: 'わ', meaning: 'con', usedFor: 'Chim, thỏ' },
  '杯': { reading: 'はい', meaning: 'cốc/ly', usedFor: 'Đồ uống, cơm' },
  '皿': { reading: 'さら', meaning: 'đĩa', usedFor: 'Đĩa thức ăn' },
  '足': { reading: 'そく', meaning: 'đôi', usedFor: 'Giày, tất' },
  '着': { reading: 'ちゃく', meaning: 'bộ', usedFor: 'Quần áo' },
  '軒': { reading: 'けん', meaning: 'căn', usedFor: 'Nhà, cửa hàng' },
  '件': { reading: 'けん', meaning: 'vụ/việc', usedFor: 'Sự việc, sự kiện' },
  '通': { reading: 'つう', meaning: 'lá/bức', usedFor: 'Thư, email' },
  '部': { reading: 'ぶ', meaning: 'bản', usedFor: 'Tài liệu in' },
  '曲': { reading: 'きょく', meaning: 'bài', usedFor: 'Bài nhạc' },

  // Time
  '年': { reading: 'ねん', meaning: 'năm', usedFor: 'Năm' },
  '月': { reading: 'がつ', meaning: 'tháng', usedFor: 'Tháng' },
  '日': { reading: 'にち', meaning: 'ngày', usedFor: 'Ngày' },
  '時': { reading: 'じ', meaning: 'giờ', usedFor: 'Giờ' },
  '分': { reading: 'ふん', meaning: 'phút', usedFor: 'Phút' },
  '秒': { reading: 'びょう', meaning: 'giây', usedFor: 'Giây' },
  '週': { reading: 'しゅう', meaning: 'tuần', usedFor: 'Tuần' },
  '時間': { reading: 'じかん', meaning: 'tiếng', usedFor: 'Giờ đồng hồ' },
  '日間': { reading: 'にちかん', meaning: 'ngày', usedFor: 'Khoảng ngày' },
  '週間': { reading: 'しゅうかん', meaning: 'tuần', usedFor: 'Khoảng tuần' },
  'か月': { reading: 'かげつ', meaning: 'tháng', usedFor: 'Khoảng tháng' },
  'ヶ月': { reading: 'かげつ', meaning: 'tháng', usedFor: 'Khoảng tháng' },

  // Frequency / order
  '回': { reading: 'かい', meaning: 'lần', usedFor: 'Số lần' },
  '度': { reading: 'ど', meaning: 'lần/độ', usedFor: 'Lần, nhiệt độ, góc' },
  '番': { reading: 'ばん', meaning: 'số', usedFor: 'Thứ tự' },
  '目': { reading: 'め', meaning: 'thứ', usedFor: 'Thứ tự (ordinal)' },

  // Place / floor
  '階': { reading: 'かい', meaning: 'tầng', usedFor: 'Tầng lầu' },
  '号': { reading: 'ごう', meaning: 'số', usedFor: 'Số phòng, số tàu' },

  // Money
  '円': { reading: 'えん', meaning: 'yên', usedFor: 'Tiền Nhật' },
  'ドル': { reading: 'ドル', meaning: 'đô la', usedFor: 'Tiền USD' },

  // Measurements
  'キロ': { reading: 'キロ', meaning: 'km/kg', usedFor: 'Khoảng cách/Cân nặng' },
  'メートル': { reading: 'メートル', meaning: 'mét', usedFor: 'Chiều dài' },

  // Pages, chapters
  'ページ': { reading: 'ページ', meaning: 'trang', usedFor: 'Trang sách' },
  '章': { reading: 'しょう', meaning: 'chương', usedFor: 'Chương sách' },
  '課': { reading: 'か', meaning: 'bài', usedFor: 'Bài học' },

  // General
  '種': { reading: 'しゅ', meaning: 'loại', usedFor: 'Loại, chủng' },
  '点': { reading: 'てん', meaning: 'điểm', usedFor: 'Điểm, món' },
  '歳': { reading: 'さい', meaning: 'tuổi', usedFor: 'Tuổi' },
  '才': { reading: 'さい', meaning: 'tuổi', usedFor: 'Tuổi (informal)' },
  '組': { reading: 'くみ', meaning: 'nhóm/bộ', usedFor: 'Nhóm, bộ đồ' },
  '割': { reading: 'わり', meaning: 'phần mười', usedFor: 'Tỷ lệ (10%)' },
  '倍': { reading: 'ばい', meaning: 'lần (gấp)', usedFor: 'Gấp bao nhiêu' },
  '発': { reading: 'はつ', meaning: 'phát', usedFor: 'Đạn, chuyến bay' },
  '食': { reading: 'しょく', meaning: 'bữa', usedFor: 'Bữa ăn' },
  '泊': { reading: 'はく', meaning: 'đêm', usedFor: 'Đêm nghỉ' },
  '語': { reading: 'ご', meaning: 'từ', usedFor: 'Từ ngữ' },
  '行': { reading: 'ぎょう', meaning: 'dòng', usedFor: 'Dòng chữ' },
  '文': { reading: 'ぶん', meaning: 'câu', usedFor: 'Câu văn' },
  '問': { reading: 'もん', meaning: 'câu hỏi', usedFor: 'Câu hỏi, bài toán' },
};

// Counters sorted by length DESC for greedy matching
const COUNTER_KEYS = Object.keys(COUNTERS).sort((a, b) => b.length - a.length);

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 4: Parse number + counter expressions
// ═══════════════════════════════════════════════════════════════════════════

export interface NumeralParseResult {
  text: string;           // Original text consumed
  value: number;          // Numeric value
  counter: string | null; // Counter kanji if present
  counterInfo: CounterInfo | null;
  reading: string;        // Full reading
  meaning: string;        // Vietnamese meaning
}

/**
 * Try to parse a numeral expression starting at `pos` in `text`.
 * Returns null if no numeral found.
 */
export function tryParseNumeral(text: string, pos: number): NumeralParseResult | null {
  const remaining = text.substring(pos);
  
  // Pattern 1: Arabic digits + optional counter
  const arabicMatch = remaining.match(/^(\d+)/);
  if (arabicMatch) {
    const numStr = arabicMatch[1];
    const value = parseInt(numStr, 10);
    let totalLen = numStr.length;
    let counter: string | null = null;
    let counterInfo: CounterInfo | null = null;

    // Try to match a counter after the number
    const afterNum = remaining.substring(numStr.length);
    for (const key of COUNTER_KEYS) {
      if (afterNum.startsWith(key)) {
        counter = key;
        counterInfo = COUNTERS[key];
        totalLen += key.length;
        break;
      }
    }

    const consumed = remaining.substring(0, totalLen);
    const meaning = counterInfo
      ? `${value} ${counterInfo.meaning}`
      : `${value}`;
    const reading = counterInfo
      ? `${value}${counterInfo.reading}`
      : `${value}`;

    return { text: consumed, value, counter, counterInfo, reading, meaning };
  }

  // Pattern 2: Kanji number + optional counter
  let kanjiLen = 0;
  while (kanjiLen < remaining.length && NUM_CHARS.has(remaining[kanjiLen])) {
    kanjiLen++;
  }
  if (kanjiLen === 0) return null;

  const kanjiPart = remaining.substring(0, kanjiLen);
  const value = parseKanjiNumber(kanjiPart);
  if (value === null) return null;

  let totalLen = kanjiLen;
  let counter: string | null = null;
  let counterInfo: CounterInfo | null = null;

  // Try to match a counter after the kanji number
  const afterKanji = remaining.substring(kanjiLen);
  for (const key of COUNTER_KEYS) {
    if (afterKanji.startsWith(key)) {
      counter = key;
      counterInfo = COUNTERS[key];
      totalLen += key.length;
      break;
    }
  }

  // Also check if the last kanji IS a counter
  // e.g. 三人 where 人 is both in NUM_CHARS? No, 人 isn't in NUM_CHARS.
  // But 三年 where 年 is not a numeral kanji — this is already handled above.

  const consumed = remaining.substring(0, totalLen);
  const meaning = counterInfo
    ? `${value} ${counterInfo.meaning}`
    : `${value}`;
  
  // Build reading (simplified — doesn't handle all rendaku)
  const reading = counterInfo
    ? `${kanjiPart}${counterInfo.reading}`
    : kanjiPart;

  return { text: consumed, value, counter, counterInfo, reading, meaning };
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 5: Special number expressions
// ═══════════════════════════════════════════════════════════════════════════

const SPECIAL_NUM_WORDS: Record<string, { reading: string; meaning: string }> = {
  '数': { reading: 'すう', meaning: 'vài, mấy' },
  '何': { reading: 'なん', meaning: 'mấy, bao nhiêu' },
  '全': { reading: 'ぜん', meaning: 'toàn bộ' },
  '両': { reading: 'りょう', meaning: 'cả hai' },
  '各': { reading: 'かく', meaning: 'mỗi' },
  '毎': { reading: 'まい', meaning: 'mỗi' },
  '約': { reading: 'やく', meaning: 'khoảng' },
  '以上': { reading: 'いじょう', meaning: 'trở lên' },
  '以下': { reading: 'いか', meaning: 'trở xuống' },
  '以内': { reading: 'いない', meaning: 'trong vòng' },
  '以外': { reading: 'いがい', meaning: 'ngoài ra' },
  '未満': { reading: 'みまん', meaning: 'chưa đến' },
};

/**
 * Check if a text is a special number-related prefix/suffix
 */
export function getSpecialNumWord(text: string): { reading: string; meaning: string } | null {
  return SPECIAL_NUM_WORDS[text] || null;
}

/**
 * Get counter info for a given counter kanji/string
 */
export function getCounterInfo(counter: string): CounterInfo | null {
  return COUNTERS[counter] || null;
}
