// ============================================================================
// VERB CONJUGATION UTILITY — Tự động chia động từ tiếng Nhật
// Hỗ trợ: Nhóm 1 (五段), Nhóm 2 (一段), Nhóm 3 (不規則: する・来る)
// ============================================================================

export interface ConjugationForms {
  dictionary: string;       // 辞書形 — Nguyên dạng
  masu: string;             // ます形 — Lịch sự
  masen: string;            // ません — Phủ định lịch sự
  mashita: string;          // ました — Quá khứ lịch sự
  nai: string;              // ない形 — Phủ định
  ta: string;               // た形 — Quá khứ
  te: string;               // て形 — Nối/yêu cầu
  potential: string;        // 可能形 — Khả năng
  passive: string;          // 受身形 — Bị động
  causative: string;        // 使役形 — Sai khiến
  conditional: string;      // 仮定形 (〜ば) — Điều kiện
  volitional: string;       // 意向形 — Ý chí / Gợi ý
  imperative: string;       // 命令形 — Mệnh lệnh
}

export interface ConjugationLabel {
  key: keyof ConjugationForms;
  label: string;
  labelJp: string;
}

export const CONJUGATION_LABELS: ConjugationLabel[] = [
  { key: 'dictionary', label: 'Nguyên dạng', labelJp: '辞書形' },
  { key: 'masu', label: 'Lịch sự', labelJp: 'ます形' },
  { key: 'masen', label: 'Phủ định lịch sự', labelJp: 'ません' },
  { key: 'mashita', label: 'Quá khứ lịch sự', labelJp: 'ました' },
  { key: 'nai', label: 'Phủ định', labelJp: 'ない形' },
  { key: 'ta', label: 'Quá khứ', labelJp: 'た形' },
  { key: 'te', label: 'Nối / Yêu cầu', labelJp: 'て形' },
  { key: 'potential', label: 'Khả năng', labelJp: '可能形' },
  { key: 'passive', label: 'Bị động', labelJp: '受身形' },
  { key: 'causative', label: 'Sai khiến', labelJp: '使役形' },
  { key: 'conditional', label: 'Điều kiện', labelJp: '仮定形' },
  { key: 'volitional', label: 'Ý chí / Gợi ý', labelJp: '意向形' },
  { key: 'imperative', label: 'Mệnh lệnh', labelJp: '命令形' },
];

// U-row mapping for Group 1 verbs
const U_TO_I: Record<string, string> = { 'う': 'い', 'く': 'き', 'ぐ': 'ぎ', 'す': 'し', 'つ': 'ち', 'ぬ': 'に', 'ぶ': 'び', 'む': 'み', 'る': 'り' };
const U_TO_A: Record<string, string> = { 'う': 'わ', 'く': 'か', 'ぐ': 'が', 'す': 'さ', 'つ': 'た', 'ぬ': 'な', 'ぶ': 'ば', 'む': 'ま', 'る': 'ら' };
const U_TO_E: Record<string, string> = { 'う': 'え', 'く': 'け', 'ぐ': 'げ', 'す': 'せ', 'つ': 'て', 'ぬ': 'ね', 'ぶ': 'べ', 'む': 'め', 'る': 'れ' };
const U_TO_O: Record<string, string> = { 'う': 'お', 'く': 'こ', 'ぐ': 'ご', 'す': 'そ', 'つ': 'と', 'ぬ': 'の', 'ぶ': 'ぼ', 'む': 'も', 'る': 'ろ' };

// Te/Ta form rules for Group 1
function teFormG1(stem: string, lastChar: string, suffix: 'て' | 'た'): string {
  const da = suffix === 'て' ? 'で' : 'だ';
  switch (lastChar) {
    case 'う': case 'つ': case 'る': return stem + 'っ' + suffix;
    case 'く': return stem + 'い' + suffix;
    case 'ぐ': return stem + 'い' + da;
    case 'す': return stem + 'し' + suffix;
    case 'ぬ': case 'ぶ': case 'む': return stem + 'ん' + da;
    default: return stem + lastChar + suffix;
  }
}

// ── Conjugation for Group 1 (五段/Godan) ──
function conjugateGroup1(reading: string, word: string): ConjugationForms {
  const lastKana = reading.slice(-1);
  void reading.slice(0, -1);  // reading stem (for reference)
  const wordStem = word.length > 1 ? word.slice(0, -1) : word;

  // Helper: apply kanji stem + kana suffix
  const k = (kSuffix: string) => wordStem + kSuffix;

  return {
    dictionary: word,
    masu: k(U_TO_I[lastKana] + 'ます'),
    masen: k(U_TO_I[lastKana] + 'ません'),
    mashita: k(U_TO_I[lastKana] + 'ました'),
    nai: k(U_TO_A[lastKana] + 'ない'),
    ta: teFormG1(wordStem, lastKana, 'た'),
    te: teFormG1(wordStem, lastKana, 'て'),
    potential: k(U_TO_E[lastKana] + 'る'),
    passive: k(U_TO_A[lastKana] + 'れる'),
    causative: k(U_TO_A[lastKana] + 'せる'),
    conditional: k(U_TO_E[lastKana] + 'ば'),
    volitional: k(U_TO_O[lastKana] + 'う'),
    imperative: k(U_TO_E[lastKana]),
  };
}

// ── Conjugation for Group 2 (一段/Ichidan) ──
function conjugateGroup2(word: string): ConjugationForms {
  const stem = word.slice(0, -1); // remove る

  return {
    dictionary: word,
    masu: stem + 'ます',
    masen: stem + 'ません',
    mashita: stem + 'ました',
    nai: stem + 'ない',
    ta: stem + 'た',
    te: stem + 'て',
    potential: stem + 'られる',
    passive: stem + 'られる',
    causative: stem + 'させる',
    conditional: stem + 'れば',
    volitional: stem + 'よう',
    imperative: stem + 'ろ',
  };
}

// ── Conjugation for する compounds ──
function conjugateSuru(word: string): ConjugationForms {
  // Handle する itself and compounds (e.g. 勉強する → 勉強 + する)
  const base = word.endsWith('する') ? word.slice(0, -2) : '';
  const prefix = base;

  return {
    dictionary: word,
    masu: prefix + 'します',
    masen: prefix + 'しません',
    mashita: prefix + 'しました',
    nai: prefix + 'しない',
    ta: prefix + 'した',
    te: prefix + 'して',
    potential: prefix + 'できる',
    passive: prefix + 'される',
    causative: prefix + 'させる',
    conditional: prefix + 'すれば',
    volitional: prefix + 'しよう',
    imperative: prefix + 'しろ',
  };
}

// ── Conjugation for 来る (kuru) ──
function conjugateKuru(word: string): ConjugationForms {
  const isKanji = word === '来る' || word === '來る';
  const base = isKanji ? '来' : '';

  return {
    dictionary: word,
    masu: base + 'きます',
    masen: base + 'きません',
    mashita: base + 'きました',
    nai: base + 'こない',
    ta: base + 'きた',
    te: base + 'きて',
    potential: base + 'こられる',
    passive: base + 'こられる',
    causative: base + 'こさせる',
    conditional: base + 'くれば',
    volitional: base + 'こよう',
    imperative: base + 'こい',
  };
}

// Special Group 1 verbs that end in る but are NOT Group 2
const SPECIAL_GROUP1_RU: string[] = [
  '入る', '走る', '切る', '知る', '帰る', '返る', '被る', '喋る', '蹴る',
  '滑る', '握る', '練る', '参る', '限る', '渡る', '座る', '作る', '送る',
  '売る', '取る', '乗る', '登る', '下る', '降る', '曲がる', '減る', '焦る',
  '散る', '照る', '湿る', '混じる', '茂る',
];

// ── Special case: 行く ──
function conjugateIku(word: string): ConjugationForms {
  const stem = word.slice(0, -1);
  return {
    dictionary: word,
    masu: stem + 'きます',
    masen: stem + 'きません',
    mashita: stem + 'きました',
    nai: stem + 'かない',
    ta: stem + 'った',       // irregular: いった not いいた
    te: stem + 'って',       // irregular: いって not いいて
    potential: stem + 'ける',
    passive: stem + 'かれる',
    causative: stem + 'かせる',
    conditional: stem + 'けば',
    volitional: stem + 'こう',
    imperative: stem + 'け',
  };
}

/**
 * Detect verb group from type string
 */
function detectVerbGroup(type: string, word: string, reading: string): 1 | 2 | 3 | null {
  const t = type.toLowerCase();

  // Group 3 (irregular)
  if (t.includes('nhóm 3') || t.includes('bất quy tắc') || t.includes('irregular')) return 3;
  if (word === 'する' || word.endsWith('する')) return 3;
  if (word === '来る' || word === 'くる') return 3;

  // Group 2 (ichidan)
  if (t.includes('nhóm 2') || t.includes('ichidan')) return 2;

  // Group 1 (godan)
  if (t.includes('nhóm 1') || t.includes('godan')) return 1;

  // Fallback: detect from reading
  if (t.includes('động từ') || t.includes('verb')) {
    if (word === 'する' || word.endsWith('する')) return 3;
    if (word === '来る' || word === 'くる') return 3;
    if (SPECIAL_GROUP1_RU.includes(word)) return 1;
    // Most verbs ending in る with e/i sound before are Group 2
    if (reading.endsWith('る')) {
      const beforeRu = reading.slice(-2, -1);
      const ichiGroups = ['え', 'け', 'せ', 'て', 'ね', 'へ', 'め', 'れ', 'げ', 'ぜ', 'で', 'べ', 'ぺ',
                          'い', 'き', 'し', 'ち', 'に', 'ひ', 'み', 'り', 'ぎ', 'じ', 'ぢ', 'び', 'ぴ'];
      if (ichiGroups.includes(beforeRu)) return 2;
      return 1;
    }
    return 1;
  }

  return null;
}

/**
 * Main conjugation function
 * @param word - Dạng từ điển (e.g. 食べる, 書く, する)
 * @param reading - Hiragana reading (e.g. たべる, かく, する)
 * @param type - Loại từ (e.g. 'Động từ nhóm 1', 'Động từ nhóm 2', etc.)
 * @returns ConjugationForms or null if not a verb
 */
export function conjugateVerb(word: string, reading: string, type: string): ConjugationForms | null {
  const group = detectVerbGroup(type, word, reading);
  if (group === null) return null;

  // Special cases
  if (word === '行く' || word === 'いく') return conjugateIku(word);
  if (word === '来る' || word === 'くる') return conjugateKuru(word);
  if (word === 'する' || word.endsWith('する')) return conjugateSuru(word);

  if (group === 2) return conjugateGroup2(word);
  return conjugateGroup1(reading, word);
}

/**
 * Check if a vocab type represents a verb
 */
export function isVerbType(type: string): boolean {
  if (!type) return false;
  const t = type.toLowerCase();
  return t.includes('động từ') || t.includes('verb');
}
