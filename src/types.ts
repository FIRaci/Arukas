export enum PartType {
    NOUN = 'NOUN',
    PRONOUN = 'PRONOUN',
    VERB = 'VERB',
    ADJECTIVE = 'ADJECTIVE',
    PARTICLE = 'PARTICLE',
    CONJUNCTION = 'CONJUNCTION',
    AUXILIARY = 'AUXILIARY',
    PUNCTUATION = 'PUNCTUATION',
    OTHER = 'OTHER'
}

export enum NuanceType {
    NONE = 'NONE',
    REGRET_UNINTENDED = 'REGRET_UNINTENDED',
    TENSE_ASPECT = 'TENSE_ASPECT',
    POLITE_HONORIFIC = 'POLITE_HONORIFIC',
    CERTAINTY_CONJECTURE = 'CERTAINTY_CONJECTURE',
    LIMITATION_EMPHASIS = 'LIMITATION_EMPHASIS',
    GIVING_RECEIVING = 'GIVING_RECEIVING',
    EMOTIONAL_PARTICLE = 'EMOTIONAL_PARTICLE',
    VOLITIONAL_INVITATION = 'VOLITIONAL_INVITATION',
    PASSIVE = 'PASSIVE',
    CAUSATIVE = 'CAUSATIVE',
    POTENTIAL = 'POTENTIAL',
    OBLIGATION = 'OBLIGATION',
    REASON = 'REASON',
    CONTRAST = 'CONTRAST',
    CONDITION = 'CONDITION',
    DESIRE_HOPE = 'DESIRE_HOPE',
    PURPOSE = 'PURPOSE',
    COMPARISON = 'COMPARISON',
    CHANGE_TRANSFORMATION = 'CHANGE_TRANSFORMATION',
    PERMISSION_PROHIBITION = 'PERMISSION_PROHIBITION',
    NEGATION = 'NEGATION',
    QUOTATION = 'QUOTATION'
}

export enum GrammaticalRole {
    MAIN_SUBJECT = 'MAIN_SUBJECT',
    MAIN_PREDICATE = 'MAIN_PREDICATE',
    MODIFIER = 'MODIFIER',
    OBJECT = 'OBJECT',
    TOPIC = 'TOPIC'
}

export interface VerbComponent {
    part: string;
    reading?: string;
    type: 'root' | 'auxiliary' | 'conjugation';
    meaning?: string;
    hanViet?: string;
}

export interface DeepDiveInfo {
    nuanceType?: NuanceType;
    tags?: string[];
    usageNote?: string;
    dictionaryForm?: string;
    dictionaryReading?: string;
    dictionaryPitchAccent?: string;
    conjugation?: string;
    conjugationType?: string;
    grammaticalRule?: string;
    verbComponents?: VerbComponent[];
}

export interface Token {
    id: string;
    text: string;
    reading?: string;
    romaji?: string;
    meaning?: string;
    type: PartType;
    grammaticalRole?: GrammaticalRole;
    roleDescription?: string;
    isGhost?: boolean;
    relatedTokenIds?: string[];
    mappingId?: string;
    pitchAccent?: string;
    pitchPattern?: string;
    alternativeReadings?: string[];
    hanViet?: string;
    deepDive?: DeepDiveInfo;
}

export interface TransitivityPair {
    text: string;
    reading: string;
    type: 'TRANSITIVE' | 'INTRANSITIVE';
}

export interface ConjugationTable {
    dictionary: string;
    polite: string;
    negative: string;
    past: string;
    teForm: string;
    potential?: string;
    passive?: string;
    causative?: string;
    imperative?: string;
    volitional?: string;
}

export interface VocabularyExample {
    japanese: string;
    reading: string;
    vietnamese: string;
}

export interface RelatedWord {
    text: string;
    reading: string;
    meaning: string;
    type?: string;
}

export interface RecommendationItem {
    text: string;
    reading: string;
    meaning: string;
    hanViet?: string;
    type: 'VOCAB' | 'GRAMMAR';
    partType?: PartType;
}

export interface KanjiInfo {
    char: string;
    hanViet: string;
    onyomi: string[];
    kunyomi: string[];
    meaning: string;
}

export interface ExtendedAnalysis {
    type?: string;
    canonicalForm?: string;
    transitivity?: 'TRANSITIVE' | 'INTRANSITIVE' | 'BOTH' | 'N/A';
    transitivityPair?: TransitivityPair;
    dictionaryPitchAccent?: string;
    dictionaryPitchPattern?: string;
    dictionaryReading?: string;
    conjugations?: ConjugationTable;
    examples: VocabularyExample[];
    definitionDetail: string;
    synonyms?: RelatedWord[];
    antonyms?: RelatedWord[];
    relatedForms?: RelatedWord[];
    collocations?: RelatedWord[];
    kanjiDetails?: KanjiInfo[];
    candidates?: RelatedWord[];
}

export interface SavedToken extends Token {
    savedAt: number;
    extendedAnalysis?: ExtendedAnalysis | null;
}

export interface GrammarStructure {
    structure: string;
    reading?: string;
    jlpt?: string;
    hanViet?: string;
    meaning: string;
    usage: string;
    construction: string;
}

export interface SentenceBlock {
    id: string;
    tokens: Token[];
    translation: {
        text: string;
        mappings?: { id: string, text: string }[];
    };
    connectionInfo?: {
        type: string;
        description: string;
    };
    grammarStructures?: GrammarStructure[];
}

export interface GrammarVariation {
    meaning: string;
    usage: string;
    constructionRules: string[];
    examples: VocabularyExample[];
    notes?: string;
}

export interface ExtendedGrammarAnalysis {
    structure?: string;
    reading?: string;
    hanViet?: string;
    generalMeaning: string;
    contexts: string[];
    constructionRules: string[];
    breakdown?: { part: string, role: string, meaning: string }[];
    commonMistakes?: { incorrect: string, correct: string, explanation: string }[];
    detailedComparison?: { similarStructure: string, nuance: string, difference: string }[];
    similarStructures?: string[];
    notes?: string;
    collocations?: string[];
    examples: VocabularyExample[];
    jlpt?: string;
    tags?: string[];
    variations?: GrammarVariation[];
}

export interface SavedGrammar extends GrammarStructure {
    id: string;
    tags?: string[];
    extendedAnalysis?: ExtendedGrammarAnalysis | null;
    savedAt: number;
}

export type ComparisonType = 'PARTICLE' | 'HOMOPHONE' | 'GRAMMAR' | 'VOCABULARY';

export interface ComparisonItem {
    term: string;
    reading: string;
    meaning: string;
    nuance: string;
    pitchAccent?: string;
    pitchPattern?: string;
    structureRule?: string;
    collocations?: { allowed: string[], prohibited: string[] };
    usageContext?: string;
    tags?: string[];
    example?: string;
    exampleMeaning?: string;
    hanViet?: string;
}

export interface ComparisonScenario {
    scenario: string;
    examples: {
        term: string;
        sentence: string;
        sentenceMeaning?: string;
        explanation: string;
    }[];
}

export interface SemanticScaleValue {
    term: string;
    value: number;
}

export interface SemanticScale {
    label: string;
    leftLabel: string;
    rightLabel: string;
    values: SemanticScaleValue[];
}

export interface ComparisonResult {
    title: string;
    type: ComparisonType;
    commonMeaning: string;
    keyDistinction: string;
    items: ComparisonItem[];
    scenarios: ComparisonScenario[];
    scales?: SemanticScale[];
}

export interface SavedComparison extends ComparisonResult {
    id: string;
    query: string;
    savedAt: number;
}

export interface ImageInput {
    mimeType: string;
    data: string;
}

export interface AnalysisSummary {
    title: string;
    translation: string;
    nuance: string;
    flow: string;
}

export interface AnalysisResult {
    blocks: SentenceBlock[];
    summary: AnalysisSummary;
}

export interface AnalysisState {
    isAnalyzing: boolean;
    data: AnalysisResult | null;
}

// ============================================================
//  MANGA READER TYPES
// ============================================================

export interface MangaCharacter {
    id: string;
    name: string;
    color: string; // preset color key e.g. 'rose', 'sky', 'emerald', 'amber', 'purple', 'cyan'
}

export interface BoundingBox {
    x: number;      // normalized 0-1, left edge
    y: number;      // normalized 0-1, top edge
    w: number;      // normalized 0-1, width
    h: number;      // normalized 0-1, height
}

export interface MangaBubble {
    id: string;
    imageIndex: number;          // which page this bubble belongs to
    boundingBox: BoundingBox;
    characterName: string;       // matched name or 'XXX' if unknown
    japaneseText: string;
    vietnameseText: string;
    reading?: string;            // furigana-annotated reading
    order: number;               // reading order within the page
    type: 'dialogue' | 'narration' | 'thought' | 'sfx';
}

export interface MangaPage {
    id: string;
    url: string;       // object URL for display
    base64: string;    // for API
    mimeType: string;
}

export interface MangaSession {
    id: string;
    mangaTitle: string;
    characters: MangaCharacter[];
    pages: MangaPage[];
    bubbles: MangaBubble[];
    createdAt: number;
    updatedAt: number;
}

export interface SavedMangaSession {
    id: string;
    mangaTitle: string;
    chapterLabel: string;        // e.g. 'Ch.1', 'Chương 5', '第3話'
    characters: MangaCharacter[];
    bubbles: MangaBubble[];
    pageCount: number;           // metadata only, images not persisted
    createdAt: number;
    updatedAt: number;
    savedAt: number;
}

// ============================================================
//  ANIME PLAYER TYPES
// ============================================================

export interface AnimeDialogueLine {
    id: string;
    startTime: number;       // seconds
    endTime: number;         // seconds
    characterName: string;   // speaker name or 'ナレーション' / 'SFX'
    characterName2?: string; // second speaker if two people talk simultaneously
    japaneseText: string;
    vietnameseText: string;
    reading?: string;        // hiragana reading
    emotion?: string;        // e.g. 'happy', 'angry', 'sad', 'surprised', 'neutral'
    notes?: string;          // cultural notes, grammar points, etc.
    type: 'dialogue' | 'narration' | 'inner_thought' | 'sfx';
}

export interface AnimeCharacter {
    id: string;
    name: string;
    color: string;           // preset color key
}

export interface SavedAnimeSession {
    id: string;
    animeTitle: string;
    episodeLabel: string;
    characters: AnimeCharacter[];
    lines: AnimeDialogueLine[];
    videoDuration: number;
    createdAt: number;
    updatedAt: number;
    savedAt: number;
}

// ============================================================
//  TEXT ANALYSIS SESSION TYPES
// ============================================================

export interface SavedTextSession {
    id: string;
    title: string;
    inputText: string;
    analysisData: AnalysisResult;
    createdAt: number;
    updatedAt: number;
    savedAt: number;
}
