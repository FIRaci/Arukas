// ============================================================================
// LOCAL ADVANCED ANALYSIS ENGINE v1
// ============================================================================
// Sub-engines that run LOCALLY (no API):
// 1. Register/Politeness detection (casual → keigo)
// 2. Colloquial/Contracted form recognition
// 3. Onomatopoeia / Ideophone detection
// 4. Sentence complexity scoring & JLPT estimation
// 5. Enhanced summary generation with nuance analysis
// 6. Expanded grammar pattern recognition
// ============================================================================

import type { Token, SentenceBlock, GrammarStructure, AnalysisSummary } from '../types';
import { PartType } from '../types';
import { lookupGrammar } from './localDataService';

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 1: Register / Politeness detection
// ═══════════════════════════════════════════════════════════════════════════

export type RegisterLevel = 'vulgar' | 'casual' | 'polite' | 'formal' | 'honorific' | 'humble';

interface RegisterSignal {
  marker: string;
  level: RegisterLevel;
  weight: number;
  description: string;
}

const REGISTER_SIGNALS: RegisterSignal[] = [
  // Humble (謙譲語)
  { marker: 'させていただ', level: 'humble', weight: 5, description: 'Khiêm nhường ngữ (cho phép tôi được~)' },
  { marker: 'いたし', level: 'humble', weight: 4, description: 'Khiêm nhường ngữ (làm ~)' },
  { marker: 'おり', level: 'humble', weight: 3, description: 'Khiêm nhường ngữ (đang ~)' },
  { marker: '参り', level: 'humble', weight: 4, description: 'Khiêm nhường ngữ (đi/đến)' },
  { marker: '申し', level: 'humble', weight: 4, description: 'Khiêm nhường ngữ (nói)' },
  { marker: '存じ', level: 'humble', weight: 4, description: 'Khiêm nhường ngữ (biết)' },
  // Honorific (尊敬語)
  { marker: 'でございます', level: 'honorific', weight: 5, description: 'Tôn kính ngữ (là ~)' },
  { marker: 'いらっしゃ', level: 'honorific', weight: 4, description: 'Tôn kính ngữ (có mặt/đi/đến)' },
  { marker: 'なさい', level: 'honorific', weight: 3, description: 'Tôn kính ngữ (hãy ~)' },
  { marker: 'おっしゃ', level: 'honorific', weight: 4, description: 'Tôn kính ngữ (nói)' },
  { marker: 'ご覧', level: 'honorific', weight: 4, description: 'Tôn kính ngữ (xem)' },
  { marker: 'お〜になる', level: 'honorific', weight: 4, description: 'Tôn kính (お~になる)' },
  { marker: 'ご〜になる', level: 'honorific', weight: 4, description: 'Tôn kính (ご~になる)' },
  { marker: 'くださ', level: 'honorific', weight: 3, description: 'Tôn kính ngữ (cho ~)' },
  // Formal (丁寧語)
  { marker: 'ございます', level: 'formal', weight: 4, description: 'Cực kỳ lịch sự' },
  { marker: 'でしょう', level: 'formal', weight: 2, description: 'Suy đoán lịch sự' },
  { marker: 'ましょう', level: 'polite', weight: 2, description: 'Đề nghị lịch sự' },
  { marker: 'ません', level: 'polite', weight: 2, description: 'Phủ định lịch sự' },
  { marker: 'ました', level: 'polite', weight: 2, description: 'Quá khứ lịch sự' },
  { marker: 'ます', level: 'polite', weight: 2, description: 'Thể lịch sự' },
  { marker: 'です', level: 'polite', weight: 2, description: 'Copula lịch sự' },
  // Casual
  { marker: 'だよ', level: 'casual', weight: -1, description: 'Thể thường, thân mật' },
  { marker: 'だね', level: 'casual', weight: -1, description: 'Xác nhận thân mật' },
  { marker: 'だろう', level: 'casual', weight: -1, description: 'Suy đoán thể thường' },
  { marker: 'んだ', level: 'casual', weight: -1, description: 'Giải thích (んだ)' },
  // Vulgar / very casual
  { marker: 'やがる', level: 'vulgar', weight: -3, description: 'Khinh thường (~ thằng đó)' },
  { marker: 'くそ', level: 'vulgar', weight: -3, description: 'Chửi thề' },
  { marker: 'てめえ', level: 'vulgar', weight: -3, description: 'Mày (thô lỗ)' },
  { marker: 'きさま', level: 'vulgar', weight: -3, description: 'Ngươi (khinh thường)' },
];

export interface RegisterAnalysis {
  primaryLevel: RegisterLevel;
  score: number;          // -10 (very casual) to +10 (very formal)
  signals: string[];      // Detected markers with descriptions
  description: string;    // Human-readable summary in Vietnamese
}

export function analyzeRegister(tokens: Token[]): RegisterAnalysis {
  const fullText = tokens.map(t => t.text).join('');
  const signals: string[] = [];
  let totalWeight = 0;
  let signalCount = 0;

  for (const sig of REGISTER_SIGNALS) {
    if (fullText.includes(sig.marker)) {
      signals.push(`「${sig.marker}」→ ${sig.description}`);
      totalWeight += sig.weight;
      signalCount++;
    }
  }

  // Also check for plain-form ending (no ます/です)
  const lastContent = [...tokens].reverse().find(t => t.type === PartType.VERB || t.type === PartType.ADJECTIVE || t.type === PartType.AUXILIARY);
  if (lastContent && !signals.some(s => s.includes('lịch sự') || s.includes('Tôn kính') || s.includes('Khiêm nhường'))) {
    if (lastContent.text.endsWith('た') || lastContent.text.endsWith('る') || lastContent.text.endsWith('い') || lastContent.text.endsWith('だ')) {
      signals.push('Kết thúc bằng thể thường (plain form)');
      totalWeight -= 1;
    }
  }

  const score = signalCount > 0 ? Math.round(totalWeight / signalCount * 2) : 0;
  const clampedScore = Math.max(-10, Math.min(10, score));

  let primaryLevel: RegisterLevel;
  if (clampedScore >= 8) primaryLevel = 'honorific';
  else if (clampedScore >= 5) primaryLevel = 'humble';
  else if (clampedScore >= 2) primaryLevel = 'formal';
  else if (clampedScore >= 0) primaryLevel = 'polite';
  else if (clampedScore >= -4) primaryLevel = 'casual';
  else primaryLevel = 'vulgar';

  const DESC_MAP: Record<RegisterLevel, string> = {
    honorific: '🎌 Tôn kính ngữ (尊敬語) — cực kỳ trang trọng',
    humble: '🙇 Khiêm nhường ngữ (謙譲語) — rất lịch sự, khiêm tốn',
    formal: '📋 Trang trọng (丁寧語 nâng cao) — ngữ cảnh công sở, thư từ',
    polite: '👔 Lịch sự (丁寧語) — dùng ます/です, giao tiếp chuẩn',
    casual: '👕 Thân mật (タメ口) — bạn bè, gia đình',
    vulgar: '🔥 Rất thô (乱暴) — chửi thề, manga action',
  };

  return {
    primaryLevel,
    score: clampedScore,
    signals,
    description: DESC_MAP[primaryLevel],
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 2: Colloquial / Contracted form recognition
// ═══════════════════════════════════════════════════════════════════════════

interface ColloquialForm {
  pattern: string;        // Regex pattern to detect
  standard: string;       // Standard form
  meaning: string;        // Explanation in Vietnamese
  tag: string;            // Classification tag
}

const COLLOQUIAL_FORMS: ColloquialForm[] = [
  // Contractions
  { pattern: 'ちゃう|ちゃった|ちゃいます', standard: '〜てしまう', meaning: 'Rút gọn ~てしまう → ~ちゃう (hoàn thành/tiếc)', tag: 'Rút gọn' },
  { pattern: 'じゃう|じゃった', standard: '〜でしまう', meaning: 'Rút gọn ~でしまう → ~じゃう', tag: 'Rút gọn' },
  { pattern: 'てる(?!う)', standard: '〜ている', meaning: 'Rút gọn ~ている → ~てる (đang)', tag: 'Rút gọn' },
  { pattern: 'でる(?!う)', standard: '〜でいる', meaning: 'Rút gọn ~でいる → ~でる', tag: 'Rút gọn' },
  { pattern: 'とく|どく', standard: '〜ておく', meaning: 'Rút gọn ~ておく → ~とく (chuẩn bị trước)', tag: 'Rút gọn' },
  { pattern: 'なきゃ', standard: '〜なければ', meaning: 'Rút gọn ~なければ → ~なきゃ (phải)', tag: 'Rút gọn' },
  { pattern: 'なくちゃ', standard: '〜なくては', meaning: 'Rút gọn ~なくては → ~なくちゃ (phải)', tag: 'Rút gọn' },
  { pattern: 'りゃ', standard: '〜れば', meaning: 'Rút gọn ~れば → ~りゃ (nếu)', tag: 'Rút gọn' },
  { pattern: 'ちまう|ちまった', standard: '〜てしまう', meaning: 'Rút gọn nam tính ~てしまう → ~ちまう', tag: 'Rút gọn nam' },
  
  // Sentence-ending particles (spoken)
  { pattern: 'じゃん', standard: '〜じゃないか', meaning: 'Mà đúng không? (khẩu ngữ Tokyo)', tag: 'Khẩu ngữ' },
  { pattern: 'っけ', standard: '(recall)', meaning: '~ nhỉ? (cố nhớ lại)', tag: 'Khẩu ngữ' },
  { pattern: 'ってば', standard: '(insistence)', meaning: 'Tôi đã nói rồi mà!', tag: 'Khẩu ngữ' },
  { pattern: 'もん', standard: '〜もの', meaning: 'Vì, bởi vì (khẩu ngữ, nũng nịu)', tag: 'Khẩu ngữ' },
  { pattern: 'かしら', standard: '〜かな', meaning: '~ nhỉ? (phụ nữ)', tag: 'Khẩu ngữ nữ' },
  { pattern: 'だわ', standard: '(feminine)', meaning: 'Khẳng định nhẹ (phụ nữ)', tag: 'Khẩu ngữ nữ' },
  { pattern: 'ぜ$', standard: '(masculine)', meaning: 'Nhấn mạnh (nam tính)', tag: 'Khẩu ngữ nam' },
  { pattern: 'ぞ$', standard: '(masculine)', meaning: 'Nhấn mạnh mạnh (nam tính)', tag: 'Khẩu ngữ nam' },
  
  // Internet/youth slang
  { pattern: 'めっちゃ', standard: 'とても', meaning: 'Cực kỳ (tiếng lóng Kansai)', tag: 'Tiếng lóng' },
  { pattern: 'マジ', standard: '本当', meaning: 'Thật sự, nghiêm túc (tiếng lóng)', tag: 'Tiếng lóng' },
  { pattern: 'ヤバい|やばい', standard: '(expressive)', meaning: 'Ghê, kinh, tuyệt (đa nghĩa)', tag: 'Tiếng lóng' },
  { pattern: 'ウケる|うける', standard: '(expressive)', meaning: 'Buồn cười quá!', tag: 'Tiếng lóng' },
  { pattern: 'ガチ|がち', standard: '本気', meaning: 'Thật sự, real (tiếng lóng)', tag: 'Tiếng lóng' },
  { pattern: 'ワンチャン', standard: 'ひょっとしたら', meaning: 'Biết đâu, may ra (one chance)', tag: 'Tiếng lóng' },
  { pattern: 'エモい', standard: '感動的', meaning: 'Xúc động, aesthetic (emotional)', tag: 'Tiếng lóng' },
  { pattern: 'パない|ぱない', standard: '半端じゃない', meaning: 'Kinh khủng, ghê gớm', tag: 'Tiếng lóng' },
  
  // Dialect markers
  { pattern: 'やん$', standard: '〜じゃないか', meaning: 'Mà đúng không (Kansai)', tag: 'Phương ngữ Kansai' },
  { pattern: 'へん$', standard: '〜ない', meaning: 'Không (Kansai)', tag: 'Phương ngữ Kansai' },
  { pattern: 'ねん$', standard: '〜のだ', meaning: 'Giải thích (Kansai)', tag: 'Phương ngữ Kansai' },
  { pattern: 'じゃけん|じゃけぇ', standard: '〜だから', meaning: 'Vì vậy (Hiroshima)', tag: 'Phương ngữ' },
  { pattern: 'ばい$', standard: '〜よ', meaning: 'Nhấn mạnh (Hakata)', tag: 'Phương ngữ Hakata' },
  { pattern: 'とよ$', standard: '〜のだよ', meaning: 'Giải thích (Hakata)', tag: 'Phương ngữ Hakata' },
  { pattern: 'だべ$', standard: '〜だろう', meaning: 'Chắc là (Tohoku)', tag: 'Phương ngữ Tohoku' },
];

export interface ColloquialDetection {
  form: string;           // Detected text
  standard: string;       // Standard equivalent
  meaning: string;        // Vietnamese explanation
  tag: string;            // Classification
}

export function detectColloquialForms(tokens: Token[]): ColloquialDetection[] {
  const fullText = tokens.map(t => t.text).join('');
  const results: ColloquialDetection[] = [];
  const seen = new Set<string>();

  for (const form of COLLOQUIAL_FORMS) {
    const regex = new RegExp(form.pattern);
    const match = fullText.match(regex);
    if (match && !seen.has(form.pattern)) {
      seen.add(form.pattern);
      results.push({
        form: match[0],
        standard: form.standard,
        meaning: form.meaning,
        tag: form.tag,
      });
    }
  }

  return results;
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 3: Onomatopoeia / Ideophone detection
// ═══════════════════════════════════════════════════════════════════════════

interface Ideophone {
  meaning: string;
  type: 'giả thanh' | 'giả trạng' | 'giả tình' | 'giả thái';
}

// 擬音語 (giả thanh) — Sound words
// 擬態語 (giả trạng) — State/manner words
// 擬情語 (giả tình) — Emotional state words  
// 擬容語 (giả thái) — Appearance words

const ONOMATOPOEIA: Map<string, Ideophone> = new Map([
  // ─── Common sound words (擬音語) ───
  ['ドキドキ', { meaning: 'Tim đập thình thịch (hồi hộp)', type: 'giả tình' }],
  ['どきどき', { meaning: 'Tim đập thình thịch (hồi hộp)', type: 'giả tình' }],
  ['ワクワク', { meaning: 'Phấn khích, háo hức', type: 'giả tình' }],
  ['わくわく', { meaning: 'Phấn khích, háo hức', type: 'giả tình' }],
  ['ドンドン', { meaning: 'Liên tục, ầm ầm', type: 'giả thanh' }],
  ['どんどん', { meaning: 'Liên tục, ầm ầm', type: 'giả thanh' }],
  ['バタバタ', { meaning: 'Bận rộn, lăng xăng', type: 'giả trạng' }],
  ['ばたばた', { meaning: 'Bận rộn, lăng xăng', type: 'giả trạng' }],
  ['ガタガタ', { meaning: 'Rung lắc, kêu lọc cọc', type: 'giả thanh' }],
  ['がたがた', { meaning: 'Rung lắc, kêu lọc cọc', type: 'giả thanh' }],
  ['キラキラ', { meaning: 'Lấp lánh, long lanh', type: 'giả thái' }],
  ['きらきら', { meaning: 'Lấp lánh, long lanh', type: 'giả thái' }],
  ['ピカピカ', { meaning: 'Sáng bóng, tươi mới', type: 'giả thái' }],
  ['ぴかぴか', { meaning: 'Sáng bóng, tươi mới', type: 'giả thái' }],
  ['フワフワ', { meaning: 'Nhẹ nhàng, bồng bềnh', type: 'giả thái' }],
  ['ふわふわ', { meaning: 'Nhẹ nhàng, bồng bềnh', type: 'giả thái' }],
  ['ペラペラ', { meaning: 'Nói trôi chảy, nói liến thoắng', type: 'giả trạng' }],
  ['ぺらぺら', { meaning: 'Nói trôi chảy, nói liến thoắng', type: 'giả trạng' }],
  ['ゴロゴロ', { meaning: 'Lăn lông lốc, sấm rền', type: 'giả thanh' }],
  ['ごろごろ', { meaning: 'Lăn lông lốc, sấm rền', type: 'giả thanh' }],
  ['ニコニコ', { meaning: 'Cười tươi, nét mặt vui', type: 'giả thái' }],
  ['にこにこ', { meaning: 'Cười tươi, nét mặt vui', type: 'giả thái' }],
  ['ガンガン', { meaning: 'Đau nhức, mãnh liệt', type: 'giả thanh' }],
  ['がんがん', { meaning: 'Đau nhức, mãnh liệt', type: 'giả thanh' }],
  ['バリバリ', { meaning: 'Hăng hái, mạnh mẽ', type: 'giả trạng' }],
  ['ばりばり', { meaning: 'Hăng hái, mạnh mẽ', type: 'giả trạng' }],
  ['ボロボロ', { meaning: 'Rách nát, tàn tạ', type: 'giả thái' }],
  ['ぼろぼろ', { meaning: 'Rách nát, tàn tạ', type: 'giả thái' }],
  ['イライラ', { meaning: 'Bực bội, cáu kỉnh', type: 'giả tình' }],
  ['いらいら', { meaning: 'Bực bội, cáu kỉnh', type: 'giả tình' }],
  ['ソワソワ', { meaning: 'Bồn chồn, không yên', type: 'giả tình' }],
  ['そわそわ', { meaning: 'Bồn chồn, không yên', type: 'giả tình' }],
  ['ハラハラ', { meaning: 'Hồi hộp lo lắng', type: 'giả tình' }],
  ['はらはら', { meaning: 'Hồi hộp lo lắng / rơi lả tả', type: 'giả tình' }],
  ['ウロウロ', { meaning: 'Đi loanh quanh, không mục đích', type: 'giả trạng' }],
  ['うろうろ', { meaning: 'Đi loanh quanh, không mục đích', type: 'giả trạng' }],
  ['グルグル', { meaning: 'Xoay vòng vòng', type: 'giả trạng' }],
  ['ぐるぐる', { meaning: 'Xoay vòng vòng', type: 'giả trạng' }],
  ['パチパチ', { meaning: 'Tiếng vỗ tay, lách tách', type: 'giả thanh' }],
  ['ぱちぱち', { meaning: 'Tiếng vỗ tay, lách tách', type: 'giả thanh' }],
  ['メソメソ', { meaning: 'Khóc sụt sịt', type: 'giả tình' }],
  ['めそめそ', { meaning: 'Khóc sụt sịt', type: 'giả tình' }],
  ['シクシク', { meaning: 'Khóc thầm, rỉ rả', type: 'giả tình' }],
  ['しくしく', { meaning: 'Khóc thầm, rỉ rả', type: 'giả tình' }],
  ['ゲラゲラ', { meaning: 'Cười ha ha, cười ngặt nghẽo', type: 'giả thanh' }],
  ['げらげら', { meaning: 'Cười ha ha, cười ngặt nghẽo', type: 'giả thanh' }],
  ['ジロジロ', { meaning: 'Nhìn chằm chằm', type: 'giả trạng' }],
  ['じろじろ', { meaning: 'Nhìn chằm chằm', type: 'giả trạng' }],
  ['ペコペコ', { meaning: 'Đói bụng / cúi đầu liên tục', type: 'giả trạng' }],
  ['ぺこぺこ', { meaning: 'Đói bụng / cúi đầu liên tục', type: 'giả trạng' }],
  ['モタモタ', { meaning: 'Chậm chạp, lề mề', type: 'giả trạng' }],
  ['もたもた', { meaning: 'Chậm chạp, lề mề', type: 'giả trạng' }],
  ['テキパキ', { meaning: 'Nhanh nhẹn, gọn gàng', type: 'giả trạng' }],
  ['てきぱき', { meaning: 'Nhanh nhẹn, gọn gàng', type: 'giả trạng' }],
  ['グラグラ', { meaning: 'Lung lay, rung lắc', type: 'giả trạng' }],
  ['ぐらぐら', { meaning: 'Lung lay, rung lắc', type: 'giả trạng' }],
  ['ビショビショ', { meaning: 'Ướt sũng, ướt nhẹp', type: 'giả thái' }],
  ['びしょびしょ', { meaning: 'Ướt sũng, ướt nhẹp', type: 'giả thái' }],
  ['カチカチ', { meaning: 'Cứng ngắc / tiếng tích tắc', type: 'giả thanh' }],
  ['かちかち', { meaning: 'Cứng ngắc / tiếng tích tắc', type: 'giả thanh' }],
  ['ベトベト', { meaning: 'Dính nhầy nhụa, nhớp nháp', type: 'giả thái' }],
  ['べとべと', { meaning: 'Dính nhầy nhụa, nhớp nháp', type: 'giả thái' }],
  ['サラサラ', { meaning: 'Mượt mà, chảy êm', type: 'giả thái' }],
  ['さらさら', { meaning: 'Mượt mà, chảy êm', type: 'giả thái' }],
  ['ガミガミ', { meaning: 'Cằn nhằn, mắng nhiếc', type: 'giả thanh' }],
  ['がみがみ', { meaning: 'Cằn nhằn, mắng nhiếc', type: 'giả thanh' }],
  ['ブツブツ', { meaning: 'Lẩm bẩm, phàn nàn', type: 'giả thanh' }],
  ['ぶつぶつ', { meaning: 'Lẩm bẩm, phàn nàn', type: 'giả thanh' }],
  ['ゾクゾク', { meaning: 'Rùng mình, rợn gáy', type: 'giả tình' }],
  ['ぞくぞく', { meaning: 'Rùng mình, rợn gáy', type: 'giả tình' }],
  ['ヘトヘト', { meaning: 'Kiệt sức, mệt lử', type: 'giả thái' }],
  ['へとへと', { meaning: 'Kiệt sức, mệt lử', type: 'giả thái' }],
  ['クタクタ', { meaning: 'Mệt bơ phờ', type: 'giả thái' }],
  ['くたくた', { meaning: 'Mệt bơ phờ', type: 'giả thái' }],
  ['ギリギリ', { meaning: 'Sát nút, chỉ vừa đủ', type: 'giả trạng' }],
  ['ぎりぎり', { meaning: 'Sát nút, chỉ vừa đủ', type: 'giả trạng' }],
  ['ピッタリ', { meaning: 'Vừa khít, chính xác', type: 'giả trạng' }],
  ['ぴったり', { meaning: 'Vừa khít, chính xác', type: 'giả trạng' }],
  ['スッキリ', { meaning: 'Sảng khoái, gọn gàng', type: 'giả tình' }],
  ['すっきり', { meaning: 'Sảng khoái, gọn gàng', type: 'giả tình' }],
  ['ガッカリ', { meaning: 'Thất vọng', type: 'giả tình' }],
  ['がっかり', { meaning: 'Thất vọng', type: 'giả tình' }],
  ['ビックリ', { meaning: 'Ngạc nhiên, giật mình', type: 'giả tình' }],
  ['びっくり', { meaning: 'Ngạc nhiên, giật mình', type: 'giả tình' }],
  ['ノロノロ', { meaning: 'Chậm rì, lờ đờ', type: 'giả trạng' }],
  ['のろのろ', { meaning: 'Chậm rì, lờ đờ', type: 'giả trạng' }],
  ['ダラダラ', { meaning: 'Lười biếng, kéo dài lê thê', type: 'giả trạng' }],
  ['だらだら', { meaning: 'Lười biếng, kéo dài lê thê', type: 'giả trạng' }],
  ['コツコツ', { meaning: 'Chăm chỉ, kiên trì', type: 'giả trạng' }],
  ['こつこつ', { meaning: 'Chăm chỉ, kiên trì', type: 'giả trạng' }],
  ['ジメジメ', { meaning: 'Ẩm ướt, ẩm thấp', type: 'giả thái' }],
  ['じめじめ', { meaning: 'Ẩm ướt, ẩm thấp', type: 'giả thái' }],
  ['ムカムカ', { meaning: 'Buồn nôn / tức giận', type: 'giả tình' }],
  ['むかむか', { meaning: 'Buồn nôn / tức giận', type: 'giả tình' }],
  ['シーン', { meaning: 'Im lặng hoàn toàn', type: 'giả thanh' }],
  ['しーん', { meaning: 'Im lặng hoàn toàn', type: 'giả thanh' }],
  ['ザーザー', { meaning: 'Mưa rào xối xả', type: 'giả thanh' }],
  ['ざーざー', { meaning: 'Mưa rào xối xả', type: 'giả thanh' }],
  ['ポツポツ', { meaning: 'Lác đác, lất phất', type: 'giả thanh' }],
  ['ぽつぽつ', { meaning: 'Lác đác, lất phất', type: 'giả thanh' }],
  ['しとしと', { meaning: 'Mưa phùn, lâm thâm', type: 'giả thanh' }],
  ['パラパラ', { meaning: 'Lất phất, rải rác', type: 'giả thanh' }],
  ['ぱらぱら', { meaning: 'Lất phất, rải rác', type: 'giả thanh' }],
  ['ゴクゴク', { meaning: 'Uống ừng ực', type: 'giả thanh' }],
  ['ごくごく', { meaning: 'Uống ừng ực', type: 'giả thanh' }],
  ['モグモグ', { meaning: 'Nhai nhồm nhoàm', type: 'giả thanh' }],
  ['もぐもぐ', { meaning: 'Nhai nhồm nhoàm', type: 'giả thanh' }],
  ['パクパク', { meaning: 'Ăn ngấu nghiến', type: 'giả thanh' }],
  ['ぱくぱく', { meaning: 'Ăn ngấu nghiến', type: 'giả thanh' }],
  ['ガブガブ', { meaning: 'Uống ồng ộc, ăn ngấu', type: 'giả thanh' }],
  ['がぶがぶ', { meaning: 'Uống ồng ộc, ăn ngấu', type: 'giả thanh' }],
]);

// Build sorted keys for longest-match
const ONOMATOPOEIA_KEYS = [...ONOMATOPOEIA.keys()].sort((a, b) => b.length - a.length);

export function lookupOnomatopoeia(text: string): Ideophone | null {
  return ONOMATOPOEIA.get(text) || null;
}

/**
 * Try to match an onomatopoeia at the given position in text
 */
export function tryMatchOnomatopoeia(text: string, pos: number): { word: string; info: Ideophone } | null {
  const remaining = text.substring(pos);
  for (const key of ONOMATOPOEIA_KEYS) {
    if (remaining.startsWith(key)) {
      return { word: key, info: ONOMATOPOEIA.get(key)! };
    }
  }
  return null;
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 4: Sentence complexity scoring
// ═══════════════════════════════════════════════════════════════════════════

export interface ComplexityScore {
  overall: number;          // 1-100
  jlptEstimate: string;    // N5-N1
  factors: string[];        // What makes it complex
  vocabDifficulty: number;  // 1-10
  grammarDifficulty: number;// 1-10
  structuralComplexity: number; // 1-10 (clause nesting, etc.)
}

const JLPT_SCORE: Record<string, number> = {
  'N5': 1, 'N4': 2, 'N3': 3, 'N2': 4, 'N1': 5,
};

export function scoreSentenceComplexity(tokens: Token[], grammarPatterns: GrammarStructure[]): ComplexityScore {
  const factors: string[] = [];
  
  // 1. Vocabulary difficulty
  let vocabTotal = 0;
  let vocabCount = 0;
  let n1Count = 0;
  let n2Count = 0;
  let kanjiCount = 0;

  for (const t of tokens) {
    if (t.type === PartType.PUNCTUATION || t.type === PartType.PARTICLE) continue;
    const tags = t.deepDive?.tags || [];
    for (const tag of tags) {
      const match = tag.match(/JLPT\s*(N\d)/i);
      if (match) {
        const level = match[1].toUpperCase();
        vocabTotal += JLPT_SCORE[level] || 3;
        vocabCount++;
        if (level === 'N1') n1Count++;
        if (level === 'N2') n2Count++;
      }
    }
    // Count kanji density
    if ([...t.text].some(ch => {
      const c = ch.charCodeAt(0);
      return (c >= 0x4E00 && c <= 0x9FFF);
    })) kanjiCount++;
  }

  const avgVocab = vocabCount > 0 ? vocabTotal / vocabCount : 2.5;
  const vocabDifficulty = Math.min(10, Math.round(avgVocab * 2));

  if (n1Count > 0) factors.push(`${n1Count} từ vựng N1`);
  if (n2Count > 0) factors.push(`${n2Count} từ vựng N2`);
  if (kanjiCount > 5) factors.push(`Mật độ Kanji cao (${kanjiCount} từ)`);

  // 2. Grammar difficulty
  let grammarMax = 0;
  let grammarTotal = 0;
  for (const g of grammarPatterns) {
    if (g.jlpt) {
      const score = JLPT_SCORE[g.jlpt] || 3;
      grammarTotal += score;
      if (score > grammarMax) grammarMax = score;
    }
  }
  const avgGrammar = grammarPatterns.length > 0 ? grammarTotal / grammarPatterns.length : 2;
  const grammarDifficulty = Math.min(10, Math.round(Math.max(grammarMax * 1.5, avgGrammar * 2)));

  if (grammarMax >= 4) factors.push(`Ngữ pháp N${grammarMax >= 5 ? '1' : '2'}`);
  if (grammarPatterns.length >= 3) factors.push(`${grammarPatterns.length} mẫu ngữ pháp`);

  // 3. Structural complexity
  const sentLen = tokens.length;
  const clauseCount = tokens.filter(t => 
    t.type === PartType.CONJUNCTION || 
    (t.type === PartType.PARTICLE && ['が', 'けど', 'ので', 'のに', 'ても', 'ながら', 'し'].includes(t.text))
  ).length + 1;

  let structScore = Math.min(10, Math.round(clauseCount * 2 + sentLen / 10));
  if (clauseCount > 3) factors.push(`${clauseCount} mệnh đề`);
  if (sentLen > 20) factors.push(`Câu dài (${sentLen} token)`);

  // Passive, causative, causative-passive add complexity
  const fullText = tokens.map(t => t.text).join('');
  if (fullText.includes('させられ')) { structScore += 2; factors.push('Sai khiến bị động (causative-passive)'); }
  else if (fullText.includes('させ')) { structScore += 1; factors.push('Sai khiến (causative)'); }
  else if (fullText.includes('られ')) { structScore += 1; factors.push('Bị động/khả năng'); }

  const structuralComplexity = Math.min(10, structScore);

  // Overall score
  const overall = Math.min(100, Math.round(
    vocabDifficulty * 3.5 + grammarDifficulty * 3.5 + structuralComplexity * 3
  ));

  // JLPT estimate
  let jlptEstimate: string;
  if (overall >= 80) jlptEstimate = 'N1';
  else if (overall >= 60) jlptEstimate = 'N2';
  else if (overall >= 40) jlptEstimate = 'N3';
  else if (overall >= 20) jlptEstimate = 'N4';
  else jlptEstimate = 'N5';

  return {
    overall,
    jlptEstimate,
    factors,
    vocabDifficulty,
    grammarDifficulty,
    structuralComplexity,
  };
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 5: Expanded grammar pattern recognition
// ═══════════════════════════════════════════════════════════════════════════

// Extended grammar patterns beyond the basic ones in localTokenizer
const EXTENDED_GRAMMAR_PATTERNS: { pattern: string; regex: RegExp; meaning: string; jlpt?: string; construction?: string }[] = [
  // N1 patterns
  { pattern: '〜ものなら', regex: /ものなら/, meaning: 'Nếu có thể~ thì... (ước muốn khó thực hiện)', jlpt: 'N1', construction: 'Verb (volitional) + ものなら' },
  { pattern: '〜ずにはいられない', regex: /ずにはいられない/, meaning: 'Không thể không~ (bất giác)', jlpt: 'N1', construction: 'Verb (nai-stem) + ずにはいられない' },
  { pattern: '〜を余儀なくされる', regex: /を余儀なくされ/, meaning: 'Bị buộc phải~', jlpt: 'N1', construction: 'Noun + を余儀なくされる' },
  { pattern: '〜に他ならない', regex: /に他ならない/, meaning: 'Không gì khác chính là~', jlpt: 'N1', construction: 'Noun/Clause + に他ならない' },
  { pattern: '〜てやまない', regex: /てやまない/, meaning: 'Không ngừng~ (mong muốn thiết tha)', jlpt: 'N1', construction: 'Verb (te-form) + やまない' },
  { pattern: '〜をもって', regex: /をもって/, meaning: 'Bằng~ (phương tiện trang trọng)', jlpt: 'N1', construction: 'Noun + をもって' },
  { pattern: '〜ないものか', regex: /ないものか/, meaning: 'Chẳng lẽ không thể~ sao?', jlpt: 'N1', construction: 'Verb (nai-form) + ものか' },
  { pattern: '〜たところで', regex: /たところで/, meaning: 'Cho dù có~ đi nữa (cũng vô ích)', jlpt: 'N1', construction: 'Verb (ta-form) + ところで' },
  { pattern: '〜ともなると', regex: /ともなると/, meaning: 'Khi đã đến mức~', jlpt: 'N1', construction: 'Noun + ともなると' },
  { pattern: '〜とあって', regex: /とあって/, meaning: 'Bởi vì~ (lý do đặc biệt)', jlpt: 'N1', construction: 'Clause + とあって' },
  
  // N2 patterns
  { pattern: '〜わけにはいかない', regex: /わけにはいかない/, meaning: 'Không thể~ được (vì lý do xã hội/đạo đức)', jlpt: 'N2', construction: 'Verb (dictionary) + わけにはいかない' },
  { pattern: '〜ことにする', regex: /ことにす[るした]/, meaning: 'Quyết định~', jlpt: 'N3', construction: 'Verb (dictionary/nai) + ことにする' },
  { pattern: '〜ことになる', regex: /ことにな[るった]/, meaning: 'Được quyết định~, cuối cùng thành~', jlpt: 'N3', construction: 'Verb (dictionary) + ことになる' },
  { pattern: '〜ようにする', regex: /ようにす[るした]/, meaning: 'Cố gắng làm sao cho~', jlpt: 'N3', construction: 'Verb (dictionary) + ようにする' },
  { pattern: '〜ようになる', regex: /ようにな[るった]/, meaning: 'Trở nên có thể~', jlpt: 'N3', construction: 'Verb (dictionary) + ようになる' },
  { pattern: '〜ことはない', regex: /ことはない/, meaning: 'Không cần phải~', jlpt: 'N2', construction: 'Verb (dictionary) + ことはない' },
  { pattern: '〜っぽい', regex: /っぽい/, meaning: 'Có vẻ~, hay~ (tính chất)', jlpt: 'N2', construction: 'Noun/Adj-stem + っぽい' },
  { pattern: '〜がち', regex: /がち/, meaning: 'Hay~, có xu hướng~', jlpt: 'N2', construction: 'Verb (masu-stem)/Noun + がち' },
  { pattern: '〜気味', regex: /気味/, meaning: 'Hơi~, có chiều hướng~', jlpt: 'N2', construction: 'Verb (masu-stem)/Noun + 気味' },
  { pattern: '〜つつある', regex: /つつある/, meaning: 'Đang dần~', jlpt: 'N2', construction: 'Verb (masu-stem) + つつある' },
  { pattern: '〜つつ(も)', regex: /つつも?(?!ある)/, meaning: 'Dù biết~ nhưng vẫn', jlpt: 'N2', construction: 'Verb (masu-stem) + つつ(も)' },
  { pattern: '〜に伴い', regex: /に伴[いう]/, meaning: 'Đi kèm theo~', jlpt: 'N2', construction: 'Noun + に伴い' },
  { pattern: '〜に応じて', regex: /に応じて/, meaning: 'Tùy theo~', jlpt: 'N2', construction: 'Noun + に応じて' },
  { pattern: '〜を通じて', regex: /を通じて/, meaning: 'Thông qua~, suốt~', jlpt: 'N2', construction: 'Noun + を通じて' },
  { pattern: '〜に基づいて', regex: /に基づ[いく]/, meaning: 'Dựa trên~', jlpt: 'N2', construction: 'Noun + に基づいて' },
  { pattern: '〜上(で)', regex: /上で/, meaning: 'Sau khi~ / Trên phương diện~', jlpt: 'N2', construction: 'Verb (ta-form)/Noun + 上(で)' },
  { pattern: '〜末(に)', regex: /末に/, meaning: 'Cuối cùng sau~', jlpt: 'N2', construction: 'Verb (ta-form)/Noun の + 末(に)' },
  { pattern: '〜に限り', regex: /に限[りる]/, meaning: 'Chỉ giới hạn ở~', jlpt: 'N2', construction: 'Noun + に限り' },
  { pattern: '〜からこそ', regex: /からこそ/, meaning: 'Chính vì~', jlpt: 'N2', construction: 'Clause + からこそ' },
  { pattern: '〜からして', regex: /からして/, meaning: 'Ngay từ~ đã...', jlpt: 'N2', construction: 'Noun + からして' },
  
  // N3 patterns
  { pattern: '〜たばかり', regex: /たばかり/, meaning: 'Vừa mới~', jlpt: 'N3', construction: 'Verb (ta-form) + ばかり' },
  { pattern: '〜てほしい', regex: /てほし[いかった]/, meaning: 'Muốn (ai đó) làm~', jlpt: 'N3', construction: 'Verb (te-form) + ほしい' },
  { pattern: '〜ことにしている', regex: /ことにして/, meaning: 'Lấy~ làm thói quen', jlpt: 'N3', construction: 'Verb + ことにしている' },
  { pattern: '〜ところだ', regex: /ところだ|ところです/, meaning: 'Sắp~/Đang~/Vừa mới~ (tùy thể)', jlpt: 'N3', construction: 'Verb + ところだ' },
  { pattern: '〜しかない', regex: /しかない/, meaning: 'Chỉ còn cách~', jlpt: 'N3', construction: 'Verb (dictionary) + しかない' },
  { pattern: '〜ておく', regex: /ておく|ておき/, meaning: 'Làm sẵn, chuẩn bị trước', jlpt: 'N3', construction: 'Verb (te-form) + おく' },
  { pattern: '〜てある', regex: /てある|てあり/, meaning: 'Đã được làm sẵn (trạng thái)', jlpt: 'N3', construction: 'Verb (te-form) + ある' },
  
  // N4-N5 common patterns
  { pattern: '〜たい', regex: /たい(?!へん)/, meaning: 'Muốn~', jlpt: 'N4', construction: 'Verb (masu-stem) + たい' },
  { pattern: '〜てもいい', regex: /てもいい/, meaning: 'Được phép~', jlpt: 'N4', construction: 'Verb (te-form) + もいい' },
  { pattern: '〜てはいけない', regex: /てはいけない/, meaning: 'Không được phép~', jlpt: 'N4', construction: 'Verb (te-form) + はいけない' },
  { pattern: '〜なさい', regex: /なさい/, meaning: 'Hãy~ (mệnh lệnh nhẹ)', jlpt: 'N4', construction: 'Verb (masu-stem) + なさい' },
  { pattern: '〜すぎる', regex: /すぎ/, meaning: 'Quá~ (vượt mức)', jlpt: 'N4', construction: 'Verb/Adj-stem + すぎる' },
  { pattern: '〜やすい', regex: /やすい/, meaning: 'Dễ~', jlpt: 'N4', construction: 'Verb (masu-stem) + やすい' },
  { pattern: '〜にくい', regex: /にくい/, meaning: 'Khó~', jlpt: 'N4', construction: 'Verb (masu-stem) + にくい' },
  { pattern: '〜始める', regex: /始め[るた]/, meaning: 'Bắt đầu~', jlpt: 'N4', construction: 'Verb (masu-stem) + 始める' },
  { pattern: '〜終わる', regex: /終わ[るった]/, meaning: 'Kết thúc~', jlpt: 'N4', construction: 'Verb (masu-stem) + 終わる' },
  { pattern: '〜続ける', regex: /続け[るた]/, meaning: 'Tiếp tục~', jlpt: 'N4', construction: 'Verb (masu-stem) + 続ける' },
];

export function detectExtendedGrammar(tokens: Token[]): GrammarStructure[] {
  const fullText = tokens.map(t => t.text).join('');
  const results: GrammarStructure[] = [];
  const seen = new Set<string>();

  for (const pat of EXTENDED_GRAMMAR_PATTERNS) {
    if (pat.regex.test(fullText) && !seen.has(pat.pattern)) {
      seen.add(pat.pattern);
      
      // Try to find it in the grammar database first
      const gEntry = lookupGrammar(pat.pattern.replace('〜', ''));
      
      results.push({
        structure: pat.pattern,
        meaning: gEntry?.meaning || pat.meaning,
        usage: gEntry?.note || '',
        construction: pat.construction || '',
        jlpt: gEntry?.jlpt || pat.jlpt,
      });
    }
  }

  return results;
}

// ═══════════════════════════════════════════════════════════════════════════
// SECTION 6: Enhanced summary generation
// ═══════════════════════════════════════════════════════════════════════════

export function generateEnhancedSummary(
  blocks: SentenceBlock[],
  allTokens: Token[],
  coverage: number,
  matchedCount: number,
  totalCount: number,
): AnalysisSummary {
  const register = analyzeRegister(allTokens);
  const colloquials = detectColloquialForms(allTokens);
  const grammarPatterns = blocks.flatMap(b => b.grammarStructures || []);
  const complexity = scoreSentenceComplexity(allTokens, grammarPatterns);

  // Build rich title
  const titleParts = [
    `📊 Phân tích cục bộ`,
    `(${coverage}% • ${matchedCount}/${totalCount} từ)`,
    `• ${complexity.jlptEstimate}`,
    `• Độ khó: ${complexity.overall}/100`,
  ];
  const title = titleParts.join(' ');

  // Build nuance string
  const nuanceParts: string[] = [];
  nuanceParts.push(register.description);
  
  if (colloquials.length > 0) {
    const tags = [...new Set(colloquials.map(c => c.tag))];
    nuanceParts.push(`🗣️ Phát hiện: ${tags.join(', ')}`);
    for (const c of colloquials.slice(0, 3)) {
      nuanceParts.push(`  • 「${c.form}」${c.meaning}`);
    }
  }

  if (complexity.factors.length > 0) {
    nuanceParts.push(`📐 Yếu tố: ${complexity.factors.join(', ')}`);
  }

  // Check for onomatopoeia in tokens
  const onomCount = allTokens.filter(t => 
    t.deepDive?.tags?.includes('Onomatopoeia') || t.deepDive?.tags?.includes('Giả thanh/thái')
  ).length;
  if (onomCount > 0) {
    nuanceParts.push(`🔊 ${onomCount} từ tượng thanh/tượng hình`);
  }

  const nuance = nuanceParts.join('\n');

  // Build flow string
  const flowParts: string[] = [];
  if (blocks.length > 1) {
    flowParts.push(`Gồm ${blocks.length} câu/mệnh đề.`);
  }
  
  // Analyze sentence flow from grammar
  if (grammarPatterns.some(g => g.structure?.includes('ので') || g.structure?.includes('から'))) {
    flowParts.push('Có quan hệ nhân-quả.');
  }
  if (grammarPatterns.some(g => g.structure?.includes('のに') || g.structure?.includes('が') || g.structure?.includes('けど'))) {
    flowParts.push('Có sự tương phản/nhượng bộ.');
  }
  if (grammarPatterns.some(g => g.structure?.includes('ている') || g.structure?.includes('ていた'))) {
    flowParts.push('Có hành động đang diễn ra (tiếp diễn).');
  }
  if (grammarPatterns.some(g => g.structure?.includes('てしまう') || g.structure?.includes('ちゃう'))) {
    flowParts.push('Có sắc thái tiếc nuối/hoàn thành.');
  }

  const flow = flowParts.join(' ');

  // Build translation
  const translation = blocks.map(b => b.translation.text).filter(Boolean).join(' ');

  return { title, translation, nuance, flow };
}
