// ============================================================================
// GRAMMAR TYPES — Shared interfaces for grammar data
// ============================================================================

export interface GrammarExample {
  jp: string;
  reading: string;
  meaning: string;
}

export interface GrammarEntry {
  id: string;
  pattern: string;       // e.g. ～は (wa)
  meaning: string;       // Vietnamese meaning
  category: string;      // Category group name
  jlpt: string;          // N5, N4, N3, N2, N1
  examples?: GrammarExample[];
  note?: string;
}

export type GrammarCategory =
  | 'ALL'
  | 'particles'
  | 'tense'
  | 'potential'
  | 'conditionals'
  | 'giving_passive'
  | 'cause_reason'
  | 'conjecture'
  | 'advice_request'
  | 'comparison'
  | 'time'
  | 'contrast'
  | 'scope'
  | 'relationship'
  | 'keigo'
  | 'advanced'
  | 'parallel'
  | 'compound_particles'
  | 'expanded_conditionals'
  | 'emphasis'
  | 'opposition'
  | 'purpose_result'
  | 'classical'
  | 'dict_ref';

export type GrammarLevel = 'ALL' | 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
