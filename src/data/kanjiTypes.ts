// ============================================================================
// KANJI TYPES — Shared interfaces for kanji data
// ============================================================================

export interface KanjiEntry {
  kanji: string;
  onyomi: string;
  kunyomi: string;
  meaning: string;
  hanViet: string;
  strokes: number;
}

export type KanjiLevel = 'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
