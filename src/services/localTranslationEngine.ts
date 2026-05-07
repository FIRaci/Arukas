// ============================================================================
// LOCAL TRANSLATION ENGINE v2 — Advanced SOV→SVO for Japanese→Vietnamese
// ============================================================================
// Japanese: SOV (Subject–Object–Verb) + postpositional particles
// Vietnamese: SVO (Subject–Verb–Object) + prepositions
// v2: Deep tense/aspect/mood, negation, questions, copula, desire, 
//     potential, honorifics, possessives, sentence-ending particles,
//     relative clauses, te-form chaining, passive/causative, counters
// ============================================================================

import type { Token } from '../types';
import { PartType } from '../types';

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 1: Clause & morphological types
// ═══════════════════════════════════════════════════════════════════════════

interface ClauseSegment {
  subject: string[];
  object: string[];
  indirect: string[];
  location: string[];
  time: string[];
  source: string[];
  destination: string[];
  manner: string[];
  predicate: string[];
  connector: string;
  connectorPos: 'front' | 'back';
  topic: string[];
  comparison: string[];
  other: string[];
  // v2 additions
  negation: boolean;
  tense: 'present' | 'past' | 'future' | 'progressive';
  mood: 'indicative' | 'imperative' | 'volitional' | 'desire' | 'potential' | 'passive' | 'causative' | 'conditional' | 'obligation';
  politeness: 'plain' | 'polite' | 'honorific' | 'humble';
  questionType: 'none' | 'yes-no' | 'wh' | 'tag';
  sentenceEndParticles: string[];
  possessiveChains: string[];
  quotation: string;
  instrument: string[];  // で as "by means of"
}

// Particle → Vietnamese preposition map (expanded)
const PARTICLE_PREP: Record<string, string> = {
  'に': 'ở',
  'へ': 'về phía',
  'で': 'ở',
  'から': 'từ',
  'まで': 'đến',
  'より': 'hơn',
  'と': 'và',
  'や': 'và',
  'も': 'cũng',
  'について': 'về',
  'にとって': 'đối với',
  'に対して': 'đối với',
  'として': 'với tư cách là',
  'によって': 'bởi',
  'において': 'tại',
  'のために': 'vì',
  'ために': 'để',
  'とともに': 'cùng với',
  'に関して': 'liên quan đến',
  'をもって': 'bằng',
  'にわたって': 'trải dài',
  'を通じて': 'thông qua',
  'を中心に': 'lấy ... làm trung tâm',
  'のもとで': 'dưới',
  'に基づいて': 'dựa trên',
  'に応じて': 'tùy theo',
  'にかけて': 'khoảng từ ... đến',
  'をはじめ': 'bắt đầu từ',
  'に限り': 'chỉ giới hạn ở',
  'にしたがって': 'theo',
  'につれて': 'cùng với việc',
};

// Conjunction translations (expanded)
const CONJ_VI: Record<string, string> = {
  'が': 'nhưng',
  'けど': 'nhưng',
  'けれど': 'nhưng mà',
  'けれども': 'mặc dù',
  'しかし': 'tuy nhiên',
  'でも': 'nhưng',
  'だから': 'vì vậy',
  'ので': 'vì',
  'のに': 'mặc dù',
  'そして': 'và rồi',
  'それから': 'sau đó',
  'それで': 'vì thế',
  'そこで': 'thế là',
  'すると': 'thế rồi',
  'ところが': 'thế nhưng',
  'また': 'ngoài ra',
  'ながら': 'trong khi',
  'たら': 'nếu',
  'ば': 'nếu',
  'と': 'khi',
  'なら': 'nếu',
  'ても': 'dù cho',
  'し': 'và cũng',
  'ところで': 'nhân tiện',
  'つまり': 'tức là',
  'なぜなら': 'bởi vì',
  'したがって': 'do đó',
  'ゆえに': 'cho nên',
  'さらに': 'hơn nữa',
  'しかも': 'hơn nữa',
  'それとも': 'hay là',
  'もしくは': 'hoặc là',
  'あるいは': 'hoặc',
  'ただし': 'tuy nhiên',
  'もっとも': 'nhưng mà',
  'むしろ': 'thay vào đó',
  'いわば': 'có thể nói là',
  'すなわち': 'nói cách khác',
  'ようするに': 'tóm lại',
  'ちなみに': 'nhân tiện nói thêm',
  'ただ': 'chỉ là',
  'それにしても': 'dù vậy',
};

const FRONT_CONN_PARTICLES = new Set([
  'ので', 'のに', 'ながら', 'たら', 'ば', 'ても', 'し', 'なら',
  'なぜなら', 'もし', 'もしも',
]);

// Sentence-ending particle meanings
const SENTENCE_END_VI: Record<string, string> = {
  'よ': 'đấy',
  'ね': 'nhỉ',
  'な': 'nhỉ',
  'なあ': 'nhỉ',
  'ぞ': 'đấy',
  'ぜ': 'nha',
  'わ': 'đó',
  'さ': 'thôi',
  'かな': 'không nhỉ',
  'かしら': 'không biết',
  'っけ': 'nhỉ',
  'もの': 'vì',
  'もん': 'vì',
  'のだ': 'đấy',
  'んだ': 'đấy',
  'のです': 'ạ',
  'んです': 'ạ',
};

// WH-question words
const WH_WORDS = new Set([
  'なに', '何', 'なん', 'どこ', 'いつ', 'だれ', '誰', 'どれ',
  'どう', 'どの', 'どんな', 'いくつ', 'いくら', 'なぜ', 'どうして',
  'どちら', 'どのくらい', 'どのように',
]);

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 2: Meaning extraction & classification helpers
// ═══════════════════════════════════════════════════════════════════════════

function getMeaning(token: Token): string {
  if (!token.meaning) return '';
  const m = token.meaning.split(/[,/、]/)[0].trim();
  if (m.startsWith('(') && m.endsWith(')')) return '';
  return m;
}

// /** Get all meanings for context-aware selection */
// function getAllMeanings(token: Token): string[] {
//   if (!token.meaning) return [];
//   return token.meaning.split(/[,/、]/).map((m: string) => m.trim()).filter(Boolean);
// }

// /** Context-aware meaning selection for verbs */
// function getVerbMeaning(token: Token, hasObject: boolean): string {
//   const meanings = getAllMeanings(token);
//   if (meanings.length <= 1) return getMeaning(token);
//   // If there's an object, prefer transitive meanings
//   // Simple heuristic: meanings with "cho", "gửi", "đưa" are more transitive
//   if (hasObject) return meanings[0];
//   return meanings[0];
// }

function isTimeWord(token: Token): boolean {
  const text = token.text;
  const meaning = (token.meaning || '').toLowerCase();
  if (/[日月年時分秒朝昼夜今昨明毎週曜]/.test(text)) return true;
  if (/lúc|khi|hôm|ngày|tháng|năm|sáng|trưa|tối|đêm|mỗi|tuần|giờ|phút|bây giờ/.test(meaning)) return true;
  if (['いつ', 'いま', 'さっき', 'あとで', 'まえに', 'すぐ', 'もう', 'まだ', 'ずっと', 'やがて', 'ついに', 'とうとう', 'そのうち', 'さいきん', '最近'].includes(text)) return true;
  return false;
}

function isAdverb(token: Token): boolean {
  const type = (token.deepDive?.tags || []).join(' ').toLowerCase();
  if (type.includes('phó từ') || type.includes('adverb')) return true;
  if (token.type === PartType.OTHER && token.meaning && !isTimeWord(token)) return true;
  return false;
}

/** Detect negation from verb/aux conjugation info */
function hasNegation(token: Token): boolean {
  const conj = token.deepDive?.conjugation || '';
  const text = token.text;
  if (/không|phủ định|ない|ません/.test(conj)) return true;
  if (text.endsWith('ない') || text.endsWith('ません') || text.endsWith('ぬ') || text.endsWith('ず')) return true;
  if (text === 'ない' || text === 'ません') return true;
  return false;
}

/** Detect past tense */
function isPast(token: Token): boolean {
  const conj = token.deepDive?.conjugation || '';
  const text = token.text;
  if (/quá khứ|た$|ました$|だった|でした/.test(conj)) return true;
  if (text.endsWith('た') || text.endsWith('だ') || text.endsWith('ました') || text.endsWith('でした')) return true;
  return false;
}

/** Detect progressive/continuous */
function isProgressive(token: Token): boolean {
  const conj = token.deepDive?.conjugation || '';
  const text = token.text;
  if (/đang|ている|ています/.test(conj)) return true;
  if (text.includes('ている') || text.includes('ています') || text.includes('ていた') || text.includes('ていました')) return true;
  return false;
}

/** Detect desire form (たい) */
function isDesire(token: Token): boolean {
  const conj = token.deepDive?.conjugation || '';
  const text = token.text;
  if (/muốn|たい/.test(conj)) return true;
  if (text.endsWith('たい') || text.endsWith('たいです') || text.endsWith('たかった') || text.endsWith('たくない')) return true;
  return false;
}

/** Detect potential form */
function isPotential(token: Token): boolean {
  const conj = token.deepDive?.conjugation || '';
  const text = token.text;
  if (/có thể|khả năng|potential|できる/.test(conj)) return true;
  if (text.endsWith('できる') || text.endsWith('できます') || text.endsWith('れる') || text.endsWith('られる')) return true;
  return false;
}

/** Detect passive voice */
function isPassive(token: Token): boolean {
  const conj = token.deepDive?.conjugation || '';
  if (/bị|được|passive|bị động/.test(conj)) return true;
  return false;
}

/** Detect causative */
function isCausative(token: Token): boolean {
  const conj = token.deepDive?.conjugation || '';
  if (/させる|sai khiến|causative|bắt|cho phép/.test(conj)) return true;
  return false;
}

/** Detect volitional (ましょう / よう) */
function isVolitional(token: Token): boolean {
  const conj = token.deepDive?.conjugation || '';
  const text = token.text;
  if (/ý chí|volitional|ましょう|よう/.test(conj)) return true;
  if (text.endsWith('ましょう') || text.endsWith('よう') || text.endsWith('おう')) return true;
  return false;
}

/** Detect imperative */
function isImperative(token: Token): boolean {
  const conj = token.deepDive?.conjugation || '';
  const text = token.text;
  if (/mệnh lệnh|imperative|なさい|ください/.test(conj)) return true;
  if (text.endsWith('なさい') || text.endsWith('ください') || text.endsWith('ろ') || text.endsWith('れ')) return true;
  return false;
}

/** Detect copula (です/だ/である) */
function isCopula(token: Token): boolean {
  return ['です', 'だ', 'である', 'でございます', 'でした', 'だった', 'ではない', 'じゃない', 'ではありません', 'じゃありません'].includes(token.text);
}

/** Get copula translation */
function getCopulaTrans(token: Token): { meaning: string; neg: boolean; past: boolean } {
  const t = token.text;
  if (t === 'ではない' || t === 'じゃない' || t === 'ではありません' || t === 'じゃありません')
    return { meaning: 'không phải là', neg: true, past: false };
  if (t === 'でした' || t === 'だった')
    return { meaning: 'đã là', neg: false, past: true };
  return { meaning: 'là', neg: false, past: false };
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 3: Advanced clause building
// ═══════════════════════════════════════════════════════════════════════════

function createEmptyClause(): ClauseSegment {
  return {
    subject: [], object: [], indirect: [], location: [],
    time: [], source: [], destination: [], manner: [],
    predicate: [], connector: '', connectorPos: 'back',
    topic: [], comparison: [], other: [],
    negation: false, tense: 'present', mood: 'indicative',
    politeness: 'plain', questionType: 'none',
    sentenceEndParticles: [], possessiveChains: [],
    quotation: '', instrument: [],
  };
}

function buildClause(tokens: Token[]): ClauseSegment {
  const clause = createEmptyClause();
  let i = 0;
  let hasWh = false;

  // Pre-scan for WH words
  for (const t of tokens) {
    if (WH_WORDS.has(t.text) || WH_WORDS.has(t.reading || '')) hasWh = true;
  }

  while (i < tokens.length) {
    const t = tokens[i];
    const next = tokens[i + 1];
    const prev = i > 0 ? tokens[i - 1] : null;

    // Skip punctuation (but note question marks)
    if (t.type === PartType.PUNCTUATION) {
      if (t.text === '？' || t.text === '?') clause.questionType = hasWh ? 'wh' : 'yes-no';
      i++;
      continue;
    }

    // ─── Copula detection ───
    if (isCopula(t)) {
      const cop = getCopulaTrans(t);
      clause.predicate.push(cop.meaning);
      if (cop.neg) clause.negation = true;
      if (cop.past) clause.tense = 'past';
      if (t.text === 'です' || t.text === 'でした' || t.text === 'でございます' || t.text === 'ではありません' || t.text === 'じゃありません') {
        clause.politeness = 'polite';
      }
      i++;
      continue;
    }

    // ─── Sentence-ending particles ───
    if (t.type === PartType.PARTICLE && SENTENCE_END_VI[t.text] && i >= tokens.length - 2) {
      clause.sentenceEndParticles.push(SENTENCE_END_VI[t.text]);
      // か at end = question
      if (t.text === 'か') {
        clause.questionType = hasWh ? 'wh' : 'yes-no';
      }
      i++;
      continue;
    }

    // ─── Question particle か in any position ───
    if (t.text === 'か' && t.type === PartType.PARTICLE) {
      // If at the end of a clause or followed only by ？
      const remaining = tokens.slice(i + 1).filter(tok => tok.type !== PartType.PUNCTUATION);
      if (remaining.length === 0) {
        clause.questionType = hasWh ? 'wh' : 'yes-no';
      }
      i++;
      continue;
    }

    // ─── Possessive の between nouns ───
    if (t.text === 'の' && t.type === PartType.PARTICLE && prev && next) {
      const prevIsNoun = prev.type === PartType.NOUN || prev.type === PartType.PRONOUN;
      const nextIsNoun = next.type === PartType.NOUN || next.type === PartType.PRONOUN;
      if (prevIsNoun && nextIsNoun) {
        // Convert A の B → B của A (Vietnamese possessive)
        const ownerMeaning = getMeaning(prev);
        const ownedMeaning = getMeaning(next);
        if (ownerMeaning && ownedMeaning) {
          // Remove the owner from wherever it was placed
          removeFromClause(clause, ownerMeaning);
          clause.possessiveChains.push(`${ownedMeaning} của ${ownerMeaning}`);
          i += 2; // skip の and B (A was already processed)
          continue;
        }
      }
      i++;
      continue;
    }

    // ─── Quotation と (after 言う, 思う, etc.) ───
    if (t.text === 'と' && t.type === PartType.PARTICLE && next &&
        (next.type === PartType.VERB) &&
        /言|思|考|話|聞|呼|答/.test(next.text)) {
      // Gather everything before this と as the quoted content
      const quoteParts = tokens.slice(0, i)
        .filter(tok => tok.type !== PartType.PUNCTUATION && tok.text !== '「' && tok.text !== '」')
        .map(tok => getMeaning(tok))
        .filter(Boolean);
      if (quoteParts.length > 0) {
        clause.quotation = quoteParts.join(' ');
        // Clear accumulated clause data since those were part of the quote
        clause.subject = []; clause.object = []; clause.topic = [];
        clause.time = []; clause.manner = []; clause.other = [];
        clause.possessiveChains = [];
      }
      i++;
      continue;
    }

    // ─── Content word + particle pattern ───
    if (next && next.type === PartType.PARTICLE) {
      const meaning = getMeaning(t);
      if (!meaning) { i++; continue; }

      const particle = next.text;

      // Topic は
      if (particle === 'は') {
        clause.topic.push(meaning);
        i += 2; continue;
      }
      // Subject が
      if (particle === 'が') {
        clause.subject.push(meaning);
        i += 2; continue;
      }
      // Object を
      if (particle === 'を') {
        clause.object.push(meaning);
        i += 2; continue;
      }
      // Direction / indirect に・へ
      if (particle === 'に' || particle === 'へ') {
        if (t.type === PartType.NOUN && /人|者|方|さん|ちゃん|くん|先生|友/.test(t.text)) {
          clause.indirect.push('cho ' + meaning);
        } else if (isTimeWord(t)) {
          clause.time.push('vào ' + meaning);
        } else if (next.text === 'に' && /^(ở|tại|trong|trên)/.test(meaning)) {
          clause.location.push('ở ' + meaning);
        } else {
          clause.indirect.push('đến ' + meaning);
        }
        i += 2; continue;
      }
      // で (location or instrument)
      if (particle === 'で') {
        if (isTimeWord(t)) {
          clause.time.push(meaning);
        } else if (/語|弁|言葉/.test(t.text) || /tiếng|ngôn ngữ/.test(meaning)) {
          // Language = instrument: 日本語で → bằng tiếng Nhật
          clause.instrument.push('bằng ' + meaning);
        } else if (/車|電車|バス|飛行機|船|自転車|タクシー/.test(t.text) || /xe|tàu|máy bay|thuyền/.test(meaning)) {
          // Transportation = instrument
          clause.instrument.push('bằng ' + meaning);
        } else if (t.type === PartType.NOUN && /場所|所|店|学校|会社|駅|部屋|家|国|市/.test(t.text)) {
          clause.location.push('ở ' + meaning);
        } else {
          // Default: location for places, instrument for others
          clause.location.push('ở ' + meaning);
        }
        i += 2; continue;
      }
      // から (source)
      if (particle === 'から') {
        clause.source.push('từ ' + meaning);
        i += 2; continue;
      }
      // まで (destination/limit)
      if (particle === 'まで') {
        clause.destination.push('đến ' + meaning);
        i += 2; continue;
      }
      // より (comparison)
      if (particle === 'より') {
        clause.comparison.push('hơn ' + meaning);
        i += 2; continue;
      }
      // と・や (listing)
      if (particle === 'と' || particle === 'や') {
        // Check if this is enumeration (A と B)
        const afterParticle = tokens[i + 2];
        if (afterParticle && (afterParticle.type === PartType.NOUN || afterParticle.type === PartType.PRONOUN)) {
          const nextMeaning = getMeaning(afterParticle);
          if (nextMeaning) {
            const combined = meaning + ' và ' + nextMeaning;
            // Peek if there's another particle after the listed item
            const afterListed = tokens[i + 3];
            if (afterListed && afterListed.type === PartType.PARTICLE) {
              if (afterListed.text === 'が') { clause.subject.push(combined); i += 4; continue; }
              if (afterListed.text === 'は') { clause.topic.push(combined); i += 4; continue; }
              if (afterListed.text === 'を') { clause.object.push(combined); i += 4; continue; }
            }
            clause.other.push(combined);
            i += 3; continue;
          }
        }
        clause.other.push(meaning);
        i += 2; continue;
      }
      // も (also)
      if (particle === 'も') {
        // も can replace は/が: "猫も好き" = "mèo cũng thích"
        if (clause.topic.length === 0 && clause.subject.length === 0) {
          clause.topic.push(meaning + ' cũng');
        } else {
          clause.other.push(meaning + ' cũng');
        }
        i += 2; continue;
      }
      // Compound particles
      const compoundParticles = ['について', 'にとって', 'に対して', 'として', 'によって', 'において', 'ために', 'のために',
        'とともに', 'に関して', 'をもって', 'にわたって', 'を通じて', 'を中心に', 'のもとで', 'に基づいて', 'に応じて',
        'にかけて', 'をはじめ', 'に限り', 'にしたがって', 'につれて'];
      if (compoundParticles.includes(particle)) {
        const prep = PARTICLE_PREP[particle] || particle;
        clause.other.push(prep + ' ' + meaning);
        i += 2; continue;
      }
    }

    // ─── Conjunction ───
    if (t.type === PartType.CONJUNCTION) {
      const vi = CONJ_VI[t.text] || getMeaning(t);
      if (vi) {
        clause.connector = vi;
        clause.connectorPos = FRONT_CONN_PARTICLES.has(t.text) ? 'front' : 'back';
      }
      i++; continue;
    }

    // ─── Verb / Adjective → predicate with mood/tense analysis ───
    if (t.type === PartType.VERB || t.type === PartType.ADJECTIVE) {
      const m = getMeaning(t);
      if (m) {
        clause.predicate.push(m);
        // Analyze morphology for tense/mood
        if (hasNegation(t)) clause.negation = true;
        if (isPast(t)) clause.tense = 'past';
        if (isProgressive(t)) clause.tense = 'progressive';
        if (isDesire(t)) clause.mood = 'desire';
        if (isPotential(t)) clause.mood = 'potential';
        if (isPassive(t)) clause.mood = 'passive';
        if (isCausative(t)) clause.mood = 'causative';
        if (isVolitional(t)) clause.mood = 'volitional';
        if (isImperative(t)) clause.mood = 'imperative';
        // Politeness detection
        if (t.text.includes('ます') || t.text.includes('ました') || t.text.includes('ません')) {
          clause.politeness = 'polite';
        }
      }
      i++; continue;
    }

    // ─── Auxiliary → attach to predicate + analyze form ───
    if (t.type === PartType.AUXILIARY) {
      const m = getMeaning(t);
      // Don't add raw auxiliary meaning, instead use it for mood/tense detection
      if (hasNegation(t)) clause.negation = true;
      if (isPast(t) && clause.tense === 'present') clause.tense = 'past';
      if (isProgressive(t)) clause.tense = 'progressive';
      if (isDesire(t)) clause.mood = 'desire';
      if (isPotential(t)) clause.mood = 'potential';
      if (isPassive(t)) clause.mood = 'passive';
      if (isCausative(t)) clause.mood = 'causative';
      if (isVolitional(t)) clause.mood = 'volitional';
      // Specific auxiliary meanings that should be added
      if (m && !m.startsWith('(') && !['た', 'だ', 'ます', 'です', 'ない', 'ません'].includes(t.text)) {
        clause.predicate.push(m);
      }
      i++; continue;
    }

    // Time word
    if (isTimeWord(t)) {
      const m = getMeaning(t);
      if (m) clause.time.push(m);
      i++; continue;
    }

    // Adverb → manner
    if (isAdverb(t)) {
      const m = getMeaning(t);
      if (m) clause.manner.push(m);
      i++; continue;
    }

    // Standalone particle
    if (t.type === PartType.PARTICLE) {
      const connVI = CONJ_VI[t.text];
      if (connVI && !clause.connector) {
        clause.connector = connVI;
        clause.connectorPos = FRONT_CONN_PARTICLES.has(t.text) ? 'front' : 'back';
      }
      // Sentence-ending particles
      if (SENTENCE_END_VI[t.text]) {
        clause.sentenceEndParticles.push(SENTENCE_END_VI[t.text]);
      }
      i++; continue;
    }

    // Other content word (nouns, pronouns, etc.)
    const m = getMeaning(t);
    if (m) {
      // If it's a pronoun or noun with no particle, try to infer its role
      if (t.type === PartType.PRONOUN || t.type === PartType.NOUN) {
        if (clause.topic.length === 0 && clause.subject.length === 0 && clause.predicate.length === 0) {
          // First noun before predicate and no topic/subject yet → likely topic
          clause.topic.push(m);
        } else if (clause.predicate.length === 0 && clause.object.length === 0) {
          // Before predicate, after topic → likely object
          clause.object.push(m);
        } else {
          clause.other.push(m);
        }
      } else {
        clause.other.push(m);
      }
    }
    i++;
  }

  return clause;
}

/** Helper to remove a meaning string from any clause slot */
function removeFromClause(clause: ClauseSegment, meaning: string) {
  for (const key of ['subject', 'object', 'topic', 'other', 'indirect', 'location', 'time', 'manner'] as const) {
    const idx = clause[key].indexOf(meaning);
    if (idx >= 0) { clause[key].splice(idx, 1); return; }
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 4: Vietnamese sentence assembly (v2 — with tense/mood/question)
// ═══════════════════════════════════════════════════════════════════════════

function assembleVietnamese(clause: ClauseSegment): string {
  const parts: string[] = [];

  // Vietnamese order: [Connector?] [Time] [Subject/Topic] [tense/negation prefix] [Manner] [mood prefix] [Predicate] [Object] [Indirect] [Location] [Instrument] [Source] [Destination] [Comparison] [Other] [Possessives] [sentence-end particles] [question?]

  // Front connector (reason/condition/concession)
  if (clause.connector && clause.connectorPos === 'front') {
    parts.push(clause.connector);
  }

  // Time first (Vietnamese fronts time expressions)
  if (clause.time.length > 0) {
    parts.push(clause.time.join(' '));
  }

  // Subject / Topic
  const subj = clause.topic.length > 0 ? clause.topic : clause.subject;
  if (subj.length > 0) {
    parts.push(subj.join(', '));
  }

  // ─── Tense/Negation/Mood PREFIX before verb ───
  const prefixes: string[] = [];

  // Tense markers
  if (clause.tense === 'past' && !clause.negation) {
    prefixes.push('đã');
  } else if (clause.tense === 'progressive') {
    prefixes.push('đang');
  } else if (clause.tense === 'future') {
    prefixes.push('sẽ');
  }

  // Negation
  if (clause.negation) {
    if (clause.tense === 'past') {
      prefixes.push('đã không');
    } else {
      prefixes.push('không');
    }
  }

  // Mood markers
  if (clause.mood === 'desire') {
    prefixes.push('muốn');
  } else if (clause.mood === 'potential') {
    prefixes.push('có thể');
  } else if (clause.mood === 'passive') {
    prefixes.push('bị');
  } else if (clause.mood === 'causative') {
    prefixes.push('bắt');
  } else if (clause.mood === 'volitional') {
    prefixes.push('hãy cùng');
  } else if (clause.mood === 'imperative') {
    prefixes.push('hãy');
  } else if (clause.mood === 'obligation') {
    prefixes.push('phải');
  }

  if (prefixes.length > 0) {
    parts.push(prefixes.join(' '));
  }

  // Manner/Adverb before verb
  if (clause.manner.length > 0) {
    parts.push(clause.manner.join(' '));
  }

  // Predicate (verb/adj) — strip redundant tense/negation from meaning
  if (clause.predicate.length > 0) {
    const cleanedPred = clause.predicate.map(p => cleanPredicateMeaning(p, clause));
    parts.push(cleanedPred.join(' '));
  }

  // Quotation (if present, after verb: nói rằng "...")
  if (clause.quotation) {
    parts.push('rằng "' + clause.quotation + '"');
  }

  // Object after verb (SVO)
  if (clause.object.length > 0) {
    parts.push(clause.object.join(', '));
  }

  // Indirect object
  if (clause.indirect.length > 0) {
    parts.push(clause.indirect.join(', '));
  }

  // Location
  if (clause.location.length > 0) {
    parts.push(clause.location.join(', '));
  }

  // Instrument (bằng ...)
  if (clause.instrument.length > 0) {
    parts.push(clause.instrument.join(', '));
  }

  // Source & destination
  if (clause.source.length > 0) {
    parts.push(clause.source.join(' '));
  }
  if (clause.destination.length > 0) {
    parts.push(clause.destination.join(' '));
  }

  // Comparison
  if (clause.comparison.length > 0) {
    parts.push(clause.comparison.join(' '));
  }

  // Possessive chains
  if (clause.possessiveChains.length > 0) {
    parts.push(clause.possessiveChains.join(', '));
  }

  // Other
  if (clause.other.length > 0) {
    parts.push(clause.other.join(' '));
  }

  let result = parts.filter(Boolean).join(' ');

  // Back connector (contrast: が=nhưng, けど, etc.)
  if (clause.connector && clause.connectorPos === 'back') {
    result += (result ? ', ' : '') + clause.connector;
  }

  // Sentence-ending particles
  if (clause.sentenceEndParticles.length > 0) {
    result += ' ' + clause.sentenceEndParticles.join(' ');
  }

  // Question formatting
  if (clause.questionType === 'yes-no' && !result.endsWith('?')) {
    // Add "không?" at end for yes-no questions if not already implied
    if (!result.includes('không') && !result.includes('à') && !result.includes('chứ')) {
      result += ' không?';
    } else {
      result += '?';
    }
  } else if (clause.questionType === 'wh' && !result.endsWith('?')) {
    result += '?';
  }

  return result;
}

/** Strip redundant tense/negation markers from predicate meanings 
 * because we add them as Vietnamese prefixes already */
function cleanPredicateMeaning(meaning: string, clause: ClauseSegment): string {
  let m = meaning;
  // If we added đã/không/muốn/có thể as prefixes, remove them from the meaning itself
  if (clause.negation) {
    m = m.replace(/^không\s+/i, '').replace(/^đã không\s+/i, '');
  }
  if (clause.tense === 'past') {
    m = m.replace(/^đã\s+/i, '');
  }
  if (clause.mood === 'desire') {
    m = m.replace(/^muốn\s+/i, '');
  }
  if (clause.mood === 'potential') {
    m = m.replace(/^có thể\s+/i, '');
  }
  return m;
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 5: Clause splitting (v2 — improved boundary detection)
// ═══════════════════════════════════════════════════════════════════════════

function splitIntoClauses(tokens: Token[]): Token[][] {
  const clauses: Token[][] = [];
  let current: Token[] = [];

  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    current.push(t);

    const isConjunction = t.type === PartType.CONJUNCTION;
    const isSentenceEnd = t.type === PartType.PUNCTUATION && ['。', '！', '？', '!', '?'].includes(t.text);
    const isClauseEndParticle = t.type === PartType.PARTICLE && ['が', 'けど', 'けれど', 'けれども', 'ので', 'のに', 'ても', 'たら', 'ば', 'ながら', 'し', 'なら', 'つつ'].includes(t.text);

    // が after verb/adj = conjunction "but"; after noun = subject marker (don't split)
    if (t.text === 'が' && t.type === PartType.PARTICLE) {
      const prev = current.length >= 2 ? current[current.length - 2] : null;
      if (prev && (prev.type === PartType.VERB || prev.type === PartType.ADJECTIVE || prev.type === PartType.AUXILIARY)) {
        if (current.length > 1) {
          clauses.push(current);
          current = [];
        }
        continue;
      }
      // After noun = subject marker, don't split
      continue;
    }

    // て-form chaining: verbて + next clause
    if (t.type === PartType.PARTICLE && t.text === 'て') {
      // Check if previous token is verb conjugated to て form
      const prev = current.length >= 2 ? current[current.length - 2] : null;
      if (prev && prev.type === PartType.VERB) {
        if (current.length > 1) {
          clauses.push(current);
          current = [];
        }
        continue;
      }
    }

    if (isConjunction || isSentenceEnd) {
      if (current.length > 0) {
        clauses.push(current);
        current = [];
      }
    } else if (isClauseEndParticle) {
      if (current.length > 1) {
        clauses.push(current);
        current = [];
      }
    }
  }

  if (current.length > 0) {
    clauses.push(current);
  }

  // Filter out empty/punctuation-only clauses
  return clauses.filter(c => c.some(t => t.type !== PartType.PUNCTUATION));
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 6: Post-processing & fluency
// ═══════════════════════════════════════════════════════════════════════════

function postProcess(text: string): string {
  let result = text;

  // Remove double spaces
  result = result.replace(/\s+/g, ' ');

  // Fix punctuation spacing
  result = result.replace(/\s+([.,!?;:])/g, '$1');
  result = result.replace(/,\s*,/g, ',');
  result = result.replace(/\.\s*\./g, '.');

  // Fix double negation artifacts
  result = result.replace(/không không/g, 'không');
  result = result.replace(/đã đã/g, 'đã');
  result = result.replace(/muốn muốn/g, 'muốn');

  // Fix common awkward patterns
  result = result.replace(/là là/g, 'là');
  result = result.replace(/có thể có thể/g, 'có thể');
  result = result.replace(/đang đang/g, 'đang');

  // Smart comma cleanup
  result = result.replace(/^,\s*/g, '');
  result = result.replace(/,\s*$/g, '');
  result = result.replace(/,\s*\./g, '.');

  // Fix question mark duplication
  result = result.replace(/\?\?+/g, '?');
  result = result.replace(/không\? không\?/g, 'không?');

  // Capitalize after sentence-ending punctuation
  result = result.replace(/([.!?])\s+([a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ])/g,
    (_, p, c) => p + ' ' + c.toUpperCase());

  return result.trim();
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 7: Public API
// ═══════════════════════════════════════════════════════════════════════════

/**
 * Translate Japanese tokens to Vietnamese using advanced SOV→SVO reordering.
 * v2: Handles tense, negation, mood, questions, possessives, copula,
 * honorifics, sentence-ending particles, and more.
 */
export function translateTokensToVietnamese(tokens: Token[]): string {
  if (tokens.length === 0) return '';

  const clauses = splitIntoClauses(tokens);
  const translated = clauses.map(clauseTokens => {
    const clause = buildClause(clauseTokens);
    return assembleVietnamese(clause);
  });

  let result = translated.filter(Boolean).join(' ');

  // Post-process for fluency
  result = postProcess(result);

  // Capitalize first letter
  if (result.length > 0) {
    result = result[0].toUpperCase() + result.slice(1);
  }

  return result;
}


