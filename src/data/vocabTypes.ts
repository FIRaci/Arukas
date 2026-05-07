// ============================================================================
// VOCABULARY TYPES — Shared interfaces for vocabulary data
// ============================================================================

export interface VocabExample {
  jp: string;
  reading: string;
  meaning: string;
}

export interface RelatedVocab {
  word: string;
  reading: string;
  meaning: string;
}

export interface VocabEntry {
  id: string;
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  hanViet?: string;
  type: string;            // 'Động từ nhóm 1', 'Tính từ -い', 'Danh từ', etc.
  jlpt: string;
  tags: string[];
  examples: VocabExample[];
  synonyms?: RelatedVocab[];
  antonyms?: RelatedVocab[];
  phrases?: RelatedVocab[];
  related?: RelatedVocab[];
  notes?: string;
}

export type VocabLevel = 'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
