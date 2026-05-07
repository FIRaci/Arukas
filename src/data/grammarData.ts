// ============================================================================
// GRAMMAR DATA — Aggregator (consolidated)
// Ngữ pháp tiếng Nhật N5 → N1, 22 nhóm chức năng + 9 expansion packs — 800+ mẫu câu
// ============================================================================

export type { GrammarEntry, GrammarExample, GrammarCategory, GrammarLevel } from './grammarTypes';
import type { GrammarEntry, GrammarCategory, GrammarLevel } from './grammarTypes';

// 22 Category Imports (merged into one file)
import { GRAMMAR_PARTICLES, GRAMMAR_TENSE, GRAMMAR_POTENTIAL, GRAMMAR_CONDITIONALS, GRAMMAR_GIVING_PASSIVE, GRAMMAR_CAUSE_REASON, GRAMMAR_CONJECTURE, GRAMMAR_ADVICE_REQUEST, GRAMMAR_COMPARISON, GRAMMAR_TIME, GRAMMAR_CONTRAST, GRAMMAR_SCOPE, GRAMMAR_RELATIONSHIP, GRAMMAR_KEIGO, GRAMMAR_ADVANCED, GRAMMAR_PARALLEL, GRAMMAR_COMPOUND_PARTICLES, GRAMMAR_EXPANDED_CONDITIONALS, GRAMMAR_EMPHASIS, GRAMMAR_OPPOSITION, GRAMMAR_PURPOSE_RESULT, GRAMMAR_CLASSICAL, GRAMMAR_DICT_REF } from './grammarCategories';
import { GRAMMAR_DICTREF_EXAMPLES } from './grammarDictRef_examples';

// 9 Expansion Packs (merged into one file)
import { GRAMMAR_EXP_N5, GRAMMAR_EXP_N4, GRAMMAR_EXP_N3_P1, GRAMMAR_EXP_N3_P2, GRAMMAR_EXP_N2_P1, GRAMMAR_EXP_N2_P2, GRAMMAR_EXP_N1_P1, GRAMMAR_EXP_N1_P2, GRAMMAR_EXP_N1_P3 } from './grammarExpansion';

// Expansion Pack 2 — 54 additional patterns from 'A Comprehensive Grammar'
import { GRAMMAR_EXP2_N5, GRAMMAR_EXP2_N4, GRAMMAR_EXP2_N3, GRAMMAR_EXP2_N2, GRAMMAR_EXP2_N1 } from './grammarExpansion2';
import { GRAMMAR_IMPORT_BATCH1_N2, GRAMMAR_IMPORT_BATCH1_N1 } from './grammarImportBatch1';
import { GRAMMAR_IMPORT_BATCH2_N2, GRAMMAR_IMPORT_BATCH2_N1 } from './grammarImportBatch2';
import { GRAMMAR_IMPORT_BATCH3_N5, GRAMMAR_IMPORT_BATCH3_N4, GRAMMAR_IMPORT_BATCH3_N3, GRAMMAR_IMPORT_BATCH3_N2, GRAMMAR_IMPORT_BATCH3_N1 } from './grammarImportBatch3';
import { GRAMMAR_IMPORT_BATCH4_N2, GRAMMAR_IMPORT_BATCH4_N1 } from './grammarImportBatch4';
import { GRAMMAR_IMPORT_CROSSREF_BATCH1_N4 } from './grammarImportCrossRefBatch1';
import { GRAMMAR_IMPORT_CROSSREF_BATCH2_N2, GRAMMAR_IMPORT_CROSSREF_BATCH2_N1 } from './grammarImportCrossRefBatch2';
import { GRAMMAR_IMPORT_CROSSREF_BATCH3_N1 } from './grammarImportCrossRefBatch3';

// Apply examples overlay to Dict-Ref entries
const GRAMMAR_DICT_REF_ENRICHED = GRAMMAR_DICT_REF.map(entry => {
  const examples = GRAMMAR_DICTREF_EXAMPLES[entry.id];
  return examples ? { ...entry, examples } : entry;
});

export {
  GRAMMAR_PARTICLES, GRAMMAR_TENSE, GRAMMAR_POTENTIAL, GRAMMAR_CONDITIONALS,
  GRAMMAR_GIVING_PASSIVE, GRAMMAR_CAUSE_REASON, GRAMMAR_CONJECTURE,
  GRAMMAR_ADVICE_REQUEST, GRAMMAR_COMPARISON, GRAMMAR_TIME, GRAMMAR_CONTRAST,
  GRAMMAR_SCOPE, GRAMMAR_RELATIONSHIP, GRAMMAR_KEIGO, GRAMMAR_ADVANCED,
  GRAMMAR_PARALLEL, GRAMMAR_COMPOUND_PARTICLES, GRAMMAR_EXPANDED_CONDITIONALS,
  GRAMMAR_EMPHASIS, GRAMMAR_OPPOSITION, GRAMMAR_PURPOSE_RESULT, GRAMMAR_CLASSICAL,
  GRAMMAR_DICT_REF,
  GRAMMAR_EXP_N5, GRAMMAR_EXP_N4,
  GRAMMAR_EXP_N3_P1, GRAMMAR_EXP_N3_P2,
  GRAMMAR_EXP_N2_P1, GRAMMAR_EXP_N2_P2,
  GRAMMAR_EXP_N1_P1, GRAMMAR_EXP_N1_P2, GRAMMAR_EXP_N1_P3,
  GRAMMAR_IMPORT_BATCH1_N2, GRAMMAR_IMPORT_BATCH1_N1,
  GRAMMAR_IMPORT_BATCH2_N2, GRAMMAR_IMPORT_BATCH2_N1,
  GRAMMAR_IMPORT_BATCH3_N5, GRAMMAR_IMPORT_BATCH3_N4, GRAMMAR_IMPORT_BATCH3_N3,
  GRAMMAR_IMPORT_BATCH3_N2, GRAMMAR_IMPORT_BATCH3_N1,
  GRAMMAR_IMPORT_BATCH4_N2, GRAMMAR_IMPORT_BATCH4_N1,
  GRAMMAR_IMPORT_CROSSREF_BATCH1_N4,
  GRAMMAR_IMPORT_CROSSREF_BATCH2_N2,
  GRAMMAR_IMPORT_CROSSREF_BATCH2_N1,
  GRAMMAR_IMPORT_CROSSREF_BATCH3_N1,
};

// Combined list (deduplicated by id)
const ALL_GRAMMAR_RAW: GrammarEntry[] = [
  ...GRAMMAR_PARTICLES,
  ...GRAMMAR_TENSE,
  ...GRAMMAR_POTENTIAL,
  ...GRAMMAR_CONDITIONALS,
  ...GRAMMAR_GIVING_PASSIVE,
  ...GRAMMAR_CAUSE_REASON,
  ...GRAMMAR_CONJECTURE,
  ...GRAMMAR_ADVICE_REQUEST,
  ...GRAMMAR_COMPARISON,
  ...GRAMMAR_TIME,
  ...GRAMMAR_CONTRAST,
  ...GRAMMAR_SCOPE,
  ...GRAMMAR_RELATIONSHIP,
  ...GRAMMAR_KEIGO,
  ...GRAMMAR_ADVANCED,
  ...GRAMMAR_PARALLEL,
  ...GRAMMAR_COMPOUND_PARTICLES,
  ...GRAMMAR_EXPANDED_CONDITIONALS,
  ...GRAMMAR_EMPHASIS,
  ...GRAMMAR_OPPOSITION,
  ...GRAMMAR_PURPOSE_RESULT,
  ...GRAMMAR_CLASSICAL,
  ...GRAMMAR_DICT_REF_ENRICHED,
  // Expansion packs
  ...GRAMMAR_EXP_N5,
  ...GRAMMAR_EXP_N4,
  ...GRAMMAR_EXP_N3_P1,
  ...GRAMMAR_EXP_N3_P2,
  ...GRAMMAR_EXP_N2_P1,
  ...GRAMMAR_EXP_N2_P2,
  ...GRAMMAR_EXP_N1_P1,
  ...GRAMMAR_EXP_N1_P2,
  ...GRAMMAR_EXP_N1_P3,
  // Expansion Pack 2 — A Comprehensive Grammar
  ...GRAMMAR_EXP2_N5,
  ...GRAMMAR_EXP2_N4,
  ...GRAMMAR_EXP2_N3,
  ...GRAMMAR_EXP2_N2,
  ...GRAMMAR_EXP2_N1,
  // Imported batch from tools/grammar_new.txt (N2/N1 only)
  ...GRAMMAR_IMPORT_BATCH1_N2,
  ...GRAMMAR_IMPORT_BATCH1_N1,
  // Imported batch 2 from tools/grammar_new.txt (remaining N2/N1 + mapped ranges)
  ...GRAMMAR_IMPORT_BATCH2_N2,
  ...GRAMMAR_IMPORT_BATCH2_N1,
  // Imported batch 3 from tools/grammar_new.txt (remaining exact N5-N1 labels)
  ...GRAMMAR_IMPORT_BATCH3_N5,
  ...GRAMMAR_IMPORT_BATCH3_N4,
  ...GRAMMAR_IMPORT_BATCH3_N3,
  ...GRAMMAR_IMPORT_BATCH3_N2,
  ...GRAMMAR_IMPORT_BATCH3_N1,
  // Imported batch 4 from tools/grammar_new.txt (remaining N2/N1 with pattern+meaning dedupe)
  ...GRAMMAR_IMPORT_BATCH4_N2,
  ...GRAMMAR_IMPORT_BATCH4_N1,
  // Imported crossref batch 1 from DOJG basic dataset
  ...GRAMMAR_IMPORT_CROSSREF_BATCH1_N4,
  // Imported crossref batch 2 from HJGP/DOJP refs (mapped N2/N1)
  ...GRAMMAR_IMPORT_CROSSREF_BATCH2_N2,
  ...GRAMMAR_IMPORT_CROSSREF_BATCH2_N1,
  // Imported crossref batch 3 supplemental refs for N1 gap closure
  ...GRAMMAR_IMPORT_CROSSREF_BATCH3_N1,
];

const seenIds = new Set<string>();
const ALL_GRAMMAR = ALL_GRAMMAR_RAW.filter(g => {
  if (seenIds.has(g.id)) return false;
  seenIds.add(g.id);
  return true;
});

// By JLPT Level
export const GRAMMAR_BY_LEVEL: Record<GrammarLevel, GrammarEntry[]> = {
  ALL: ALL_GRAMMAR,
  N5: ALL_GRAMMAR.filter(g => g.jlpt === 'N5'),
  N4: ALL_GRAMMAR.filter(g => g.jlpt === 'N4'),
  N3: ALL_GRAMMAR.filter(g => g.jlpt === 'N3'),
  N2: ALL_GRAMMAR.filter(g => g.jlpt === 'N2'),
  N1: ALL_GRAMMAR.filter(g => g.jlpt === 'N1'),
};

// By Category
// By Category (Dynamic grouping to include all expansions)
export const GRAMMAR_BY_CATEGORY = {
  ALL: ALL_GRAMMAR,
  particles: [] as GrammarEntry[],
  tense: [] as GrammarEntry[],
  potential: [] as GrammarEntry[],
  conditionals: [] as GrammarEntry[],
  giving_passive: [] as GrammarEntry[],
  cause_reason: [] as GrammarEntry[],
  conjecture: [] as GrammarEntry[],
  advice_request: [] as GrammarEntry[],
  comparison: [] as GrammarEntry[],
  time: [] as GrammarEntry[],
  contrast: [] as GrammarEntry[],
  scope: [] as GrammarEntry[],
  relationship: [] as GrammarEntry[],
  keigo: [] as GrammarEntry[],
  advanced: [] as GrammarEntry[],
  parallel: [] as GrammarEntry[],
  compound_particles: [] as GrammarEntry[],
  expanded_conditionals: [] as GrammarEntry[],
  emphasis: [] as GrammarEntry[],
  opposition: [] as GrammarEntry[],
  purpose_result: [] as GrammarEntry[],
  classical: [] as GrammarEntry[],
  dict_ref: [] as GrammarEntry[],
} as Record<GrammarCategory, GrammarEntry[]>;

// Phân bổ ngữ pháp vào đúng danh mục
for (const g of ALL_GRAMMAR) {
  const cat = g.category as GrammarCategory;
  if (cat && GRAMMAR_BY_CATEGORY[cat]) {
    GRAMMAR_BY_CATEGORY[cat].push(g);
  } else {
    // Fallback if missing
    GRAMMAR_BY_CATEGORY.advanced.push(g);
  }
}

// Category metadata
export const GRAMMAR_CATEGORY_INFO: Record<GrammarCategory, { title: string; icon: string; count: number }> = {
  ALL: { title: 'Toàn bộ', icon: '', count: ALL_GRAMMAR.length },
  particles: { title: 'Trợ từ & Cơ bản', icon: '', count: GRAMMAR_BY_CATEGORY.particles.length },
  tense: { title: 'Thì & Trạng thái', icon: '', count: GRAMMAR_BY_CATEGORY.tense.length },
  potential: { title: 'Khả năng & Ý chí', icon: '', count: GRAMMAR_BY_CATEGORY.potential.length },
  conditionals: { title: 'Điều kiện', icon: '', count: GRAMMAR_BY_CATEGORY.conditionals.length },
  giving_passive: { title: 'Cho nhận & Bị động', icon: '', count: GRAMMAR_BY_CATEGORY.giving_passive.length },
  cause_reason: { title: 'Nguyên nhân & Lý do', icon: '', count: GRAMMAR_BY_CATEGORY.cause_reason.length },
  conjecture: { title: 'Phỏng đoán & Nghe nói', icon: '', count: GRAMMAR_BY_CATEGORY.conjecture.length },
  advice_request: { title: 'Lời khuyên & Yêu cầu', icon: '', count: GRAMMAR_BY_CATEGORY.advice_request.length },
  comparison: { title: 'So sánh & Mức độ', icon: '', count: GRAMMAR_BY_CATEGORY.comparison.length },
  time: { title: 'Thời gian', icon: '', count: GRAMMAR_BY_CATEGORY.time.length },
  contrast: { title: 'Đối lập & Nhượng bộ', icon: '', count: GRAMMAR_BY_CATEGORY.contrast.length },
  scope: { title: 'Phạm vi & Giới hạn', icon: '', count: GRAMMAR_BY_CATEGORY.scope.length },
  relationship: { title: 'Quan hệ & Liên quan', icon: '', count: GRAMMAR_BY_CATEGORY.relationship.length },
  keigo: { title: 'Kính ngữ', icon: '', count: GRAMMAR_BY_CATEGORY.keigo.length },
  advanced: { title: 'N1/N2 Cao cấp', icon: '', count: GRAMMAR_BY_CATEGORY.advanced.length },
  parallel: { title: 'Song hành & Liệt kê', icon: '', count: GRAMMAR_BY_CATEGORY.parallel.length },
  compound_particles: { title: 'Trợ từ kết hợp', icon: '', count: GRAMMAR_BY_CATEGORY.compound_particles.length },
  expanded_conditionals: { title: 'Điều kiện mở rộng', icon: '', count: GRAMMAR_BY_CATEGORY.expanded_conditionals.length },
  emphasis: { title: 'Nhấn mạnh & Cảm xúc', icon: '', count: GRAMMAR_BY_CATEGORY.emphasis.length },
  opposition: { title: 'Phản đối & Ngoại lệ', icon: '', count: GRAMMAR_BY_CATEGORY.opposition.length },
  purpose_result: { title: 'Mục đích & Kết quả', icon: '', count: GRAMMAR_BY_CATEGORY.purpose_result.length },
  classical: { title: 'Cổ điển & Ít gặp', icon: '', count: GRAMMAR_BY_CATEGORY.classical.length },
  dict_ref: { title: 'Từ điển tham khảo', icon: '', count: GRAMMAR_BY_CATEGORY.dict_ref.length },
};

export const GRAMMAR_LEVEL_INFO: Record<GrammarLevel, { title: string; subtitle: string }> = {
  ALL: { title: '文法 全部 — Toàn bộ Ngữ pháp', subtitle: `Tất cả ${ALL_GRAMMAR.length} mẫu ngữ pháp N5–N1, 22 nhóm chức năng` },
  N5: { title: '文法 N5 — Ngữ pháp cơ bản', subtitle: 'Trợ từ, câu đơn giản, mệnh lệnh cơ bản' },
  N4: { title: '文法 N4 — Ngữ pháp sơ trung cấp', subtitle: 'Điều kiện, bị động, sai khiến, cho nhận' },
  N3: { title: '文法 N3 — Ngữ pháp trung cấp', subtitle: 'Kính ngữ, so sánh, nguyên nhân, quan hệ' },
  N2: { title: '文法 N2 — Ngữ pháp trung cao cấp', subtitle: 'Trợ từ kết hợp, nhượng bộ, nhấn mạnh' },
  N1: { title: '文法 N1 — Ngữ pháp cao cấp', subtitle: 'Cấu trúc cổ điển, song hành, cảm xúc cao' },
};

// Utility: get all unique categories from data
export function getAllCategories(): GrammarCategory[] {
  return Object.keys(GRAMMAR_CATEGORY_INFO) as GrammarCategory[];
}
