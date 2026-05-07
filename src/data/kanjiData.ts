// ============================================================================
// KANJI DATA - Aggregator (consolidated)
// Imports per-level data from merged files
// ============================================================================

export type { KanjiEntry, KanjiLevel } from './kanjiTypes';
import type { KanjiEntry, KanjiLevel } from './kanjiTypes';

// JLPT Kanji (merged into one file)
import { KANJI_N5, KANJI_N4, KANJI_N3, KANJI_N2, KANJI_N1 } from './kanjiJlpt';

// Special Kanji (merged into one file)
import { kanjiImportBatch1_Jouyou } from './kanjiImportBatch1_Jouyou';
import { KANJI_EXTRA, KANJI_IT, KANJI_SCIENCE, KANJI_BRAND, KANJI_CYBERPUNK, KANJI_SUPPLEMENT_1, KANJI_SUPPLEMENT_2, KANJI_SUPPLEMENT_3, KANJI_SUPPLEMENT_4, KANJI_SUPPLEMENT_5 } from './kanjiSpecial';

export { KANJI_N5, KANJI_N4, KANJI_N3, KANJI_N2, KANJI_N1, KANJI_EXTRA, KANJI_IT, KANJI_SCIENCE, KANJI_BRAND, KANJI_CYBERPUNK, KANJI_SUPPLEMENT_1, KANJI_SUPPLEMENT_2, KANJI_SUPPLEMENT_3, KANJI_SUPPLEMENT_4, KANJI_SUPPLEMENT_5 };

// Deduplicated combined list of ALL kanji
const ALL_KANJI_RAW = [
  ...KANJI_N5,
  ...KANJI_N4,
  ...KANJI_N3,
  ...KANJI_N2,
  ...KANJI_N1,
  ...kanjiImportBatch1_Jouyou,
  ...KANJI_EXTRA,
  ...KANJI_IT,
  ...KANJI_SCIENCE,
  ...KANJI_BRAND,
  ...KANJI_CYBERPUNK,
  ...KANJI_SUPPLEMENT_1,
  ...KANJI_SUPPLEMENT_2,
  ...KANJI_SUPPLEMENT_3,
  ...KANJI_SUPPLEMENT_4,
  ...KANJI_SUPPLEMENT_5,
];
const seen = new Set<string>();
const KANJI_ALL = ALL_KANJI_RAW.filter(k => {
  if (seen.has(k.kanji)) return false;
  seen.add(k.kanji);
  return true;
});

export const KANJI_BY_LEVEL: Record<KanjiLevel, KanjiEntry[]> = {
  ALL: KANJI_ALL,
  N5: KANJI_N5,
  N4: KANJI_N4,
  N3: KANJI_N3,
  N2: KANJI_N2,
  N1: KANJI_N1,
};

export const KANJI_LEVEL_INFO: Record<KanjiLevel, { title: string; subtitle: string }> = {
  ALL: { title: '漢字 全部 — Toàn bộ Kanji', subtitle: 'Tất cả chữ Hán Nhật Bản (Jōyō Kanji)' },
  N5: { title: '漢字 N5 — Kanji cơ bản', subtitle: 'Dành cho người mới bắt đầu' },
  N4: { title: '漢字 N4 — Kanji sơ trung cấp', subtitle: 'Giao tiếp hàng ngày nâng cao' },
  N3: { title: '漢字 N3 — Kanji trung cấp', subtitle: 'Xã hội, công việc, tin tức' },
  N2: { title: '漢字 N2 — Kanji trung cao cấp', subtitle: 'Luật, kinh tế, khoa học' },
  N1: { title: '漢字 N1 — Kanji cao cấp', subtitle: 'Văn học, triết học, chuyên ngành' },
};
