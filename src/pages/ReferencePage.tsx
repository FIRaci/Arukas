import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { KanjiEntry, KanjiLevel, KANJI_BY_LEVEL, KANJI_LEVEL_INFO } from '../data/kanjiData';
import { COUNTER_DETAILS, TIME_COUNTERS, DATE_COUNTERS, CounterDetail } from '../data/counterData';
import SettingsPanel from '../components/SettingsPanel';
import TutorialPanel from '../components/TutorialPanel';
import { useSettings } from '../contexts/SettingsContext';
import { speakJapaneseText, stopJapaneseTts } from '../services/googleTtsService';

// --- TTS Speaker Button ---
const SpeakBtn: React.FC<{ text: string; size?: 'sm' | 'md' }> = ({ text, size = 'sm' }) => {
    const [playing, setPlaying] = React.useState(false);
    const handleSpeak = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (playing) { stopJapaneseTts(); setPlaying(false); return; }
        setPlaying(true);
        try { await speakJapaneseText(text); } catch { /* */ }
        setPlaying(false);
    };
    if (!text) return null;
    const s = size === 'md' ? 'w-6 h-6' : 'w-5 h-5';
    const ic = size === 'md' ? 'w-3.5 h-3.5' : 'w-3 h-3';
    return (
        <button onClick={handleSpeak} className={`${s} rounded-full inline-flex items-center justify-center transition-all shrink-0 ${
            playing ? 'bg-rose-100 text-rose-500 animate-pulse' : 'text-stone-300 hover:text-stone-600 hover:bg-stone-100'
        }`} title={`Ph\u00e1t \u00e2m: ${text}`}>
            {playing ? (
                <svg className={ic} viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1" /><rect x="14" y="4" width="4" height="16" rx="1" /></svg>
            ) : (
                <svg className={ic} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707A1 1 0 0112 5.586v12.828a1 1 0 01-1.707.707L5.586 15z" /></svg>
            )}
        </button>
    );
};

// ============================================================================
// Data: Hiragana, Katakana
// ============================================================================

interface KanaEntry { kana: string; romaji: string; }

// ─── HIRAGANA ───
const HIRAGANA_GOJUON: (KanaEntry | null)[][] = [
  [{ kana: 'あ', romaji: 'a' }, { kana: 'い', romaji: 'i' }, { kana: 'う', romaji: 'u' }, { kana: 'え', romaji: 'e' }, { kana: 'お', romaji: 'o' }],
  [{ kana: 'か', romaji: 'ka' }, { kana: 'き', romaji: 'ki' }, { kana: 'く', romaji: 'ku' }, { kana: 'け', romaji: 'ke' }, { kana: 'こ', romaji: 'ko' }],
  [{ kana: 'さ', romaji: 'sa' }, { kana: 'し', romaji: 'shi' }, { kana: 'す', romaji: 'su' }, { kana: 'せ', romaji: 'se' }, { kana: 'そ', romaji: 'so' }],
  [{ kana: 'た', romaji: 'ta' }, { kana: 'ち', romaji: 'chi' }, { kana: 'つ', romaji: 'tsu' }, { kana: 'て', romaji: 'te' }, { kana: 'と', romaji: 'to' }],
  [{ kana: 'な', romaji: 'na' }, { kana: 'に', romaji: 'ni' }, { kana: 'ぬ', romaji: 'nu' }, { kana: 'ね', romaji: 'ne' }, { kana: 'の', romaji: 'no' }],
  [{ kana: 'は', romaji: 'ha' }, { kana: 'ひ', romaji: 'hi' }, { kana: 'ふ', romaji: 'fu' }, { kana: 'へ', romaji: 'he' }, { kana: 'ほ', romaji: 'ho' }],
  [{ kana: 'ま', romaji: 'ma' }, { kana: 'み', romaji: 'mi' }, { kana: 'む', romaji: 'mu' }, { kana: 'め', romaji: 'me' }, { kana: 'も', romaji: 'mo' }],
  [{ kana: 'や', romaji: 'ya' }, null, { kana: 'ゆ', romaji: 'yu' }, null, { kana: 'よ', romaji: 'yo' }],
  [{ kana: 'ら', romaji: 'ra' }, { kana: 'り', romaji: 'ri' }, { kana: 'る', romaji: 'ru' }, { kana: 'れ', romaji: 're' }, { kana: 'ろ', romaji: 'ro' }],
  [{ kana: 'わ', romaji: 'wa' }, null, null, null, { kana: 'を', romaji: 'wo' }],
  [{ kana: 'ん', romaji: 'n' }, null, null, null, null],
];

const HIRAGANA_DAKUTEN: (KanaEntry | null)[][] = [
  [{ kana: 'が', romaji: 'ga' }, { kana: 'ぎ', romaji: 'gi' }, { kana: 'ぐ', romaji: 'gu' }, { kana: 'げ', romaji: 'ge' }, { kana: 'ご', romaji: 'go' }],
  [{ kana: 'ざ', romaji: 'za' }, { kana: 'じ', romaji: 'ji' }, { kana: 'ず', romaji: 'zu' }, { kana: 'ぜ', romaji: 'ze' }, { kana: 'ぞ', romaji: 'zo' }],
  [{ kana: 'だ', romaji: 'da' }, { kana: 'ぢ', romaji: 'ji' }, { kana: 'づ', romaji: 'zu' }, { kana: 'で', romaji: 'de' }, { kana: 'ど', romaji: 'do' }],
  [{ kana: 'ば', romaji: 'ba' }, { kana: 'び', romaji: 'bi' }, { kana: 'ぶ', romaji: 'bu' }, { kana: 'べ', romaji: 'be' }, { kana: 'ぼ', romaji: 'bo' }],
  [{ kana: 'ぱ', romaji: 'pa' }, { kana: 'ぴ', romaji: 'pi' }, { kana: 'ぷ', romaji: 'pu' }, { kana: 'ぺ', romaji: 'pe' }, { kana: 'ぽ', romaji: 'po' }],
];

const HIRAGANA_COMBO: (KanaEntry | null)[][] = [
  [{ kana: 'きゃ', romaji: 'kya' }, { kana: 'きゅ', romaji: 'kyu' }, { kana: 'きょ', romaji: 'kyo' }],
  [{ kana: 'しゃ', romaji: 'sha' }, { kana: 'しゅ', romaji: 'shu' }, { kana: 'しょ', romaji: 'sho' }],
  [{ kana: 'ちゃ', romaji: 'cha' }, { kana: 'ちゅ', romaji: 'chu' }, { kana: 'ちょ', romaji: 'cho' }],
  [{ kana: 'にゃ', romaji: 'nya' }, { kana: 'にゅ', romaji: 'nyu' }, { kana: 'にょ', romaji: 'nyo' }],
  [{ kana: 'ひゃ', romaji: 'hya' }, { kana: 'ひゅ', romaji: 'hyu' }, { kana: 'ひょ', romaji: 'hyo' }],
  [{ kana: 'みゃ', romaji: 'mya' }, { kana: 'みゅ', romaji: 'myu' }, { kana: 'みょ', romaji: 'myo' }],
  [{ kana: 'りゃ', romaji: 'rya' }, { kana: 'りゅ', romaji: 'ryu' }, { kana: 'りょ', romaji: 'ryo' }],
  [{ kana: 'ぎゃ', romaji: 'gya' }, { kana: 'ぎゅ', romaji: 'gyu' }, { kana: 'ぎょ', romaji: 'gyo' }],
  [{ kana: 'じゃ', romaji: 'ja' }, { kana: 'じゅ', romaji: 'ju' }, { kana: 'じょ', romaji: 'jo' }],
  [{ kana: 'びゃ', romaji: 'bya' }, { kana: 'びゅ', romaji: 'byu' }, { kana: 'びょ', romaji: 'byo' }],
  [{ kana: 'ぴゃ', romaji: 'pya' }, { kana: 'ぴゅ', romaji: 'pyu' }, { kana: 'ぴょ', romaji: 'pyo' }],
];

// ─── KATAKANA ───
const KATAKANA_GOJUON: (KanaEntry | null)[][] = [
  [{ kana: 'ア', romaji: 'a' }, { kana: 'イ', romaji: 'i' }, { kana: 'ウ', romaji: 'u' }, { kana: 'エ', romaji: 'e' }, { kana: 'オ', romaji: 'o' }],
  [{ kana: 'カ', romaji: 'ka' }, { kana: 'キ', romaji: 'ki' }, { kana: 'ク', romaji: 'ku' }, { kana: 'ケ', romaji: 'ke' }, { kana: 'コ', romaji: 'ko' }],
  [{ kana: 'サ', romaji: 'sa' }, { kana: 'シ', romaji: 'shi' }, { kana: 'ス', romaji: 'su' }, { kana: 'セ', romaji: 'se' }, { kana: 'ソ', romaji: 'so' }],
  [{ kana: 'タ', romaji: 'ta' }, { kana: 'チ', romaji: 'chi' }, { kana: 'ツ', romaji: 'tsu' }, { kana: 'テ', romaji: 'te' }, { kana: 'ト', romaji: 'to' }],
  [{ kana: 'ナ', romaji: 'na' }, { kana: 'ニ', romaji: 'ni' }, { kana: 'ヌ', romaji: 'nu' }, { kana: 'ネ', romaji: 'ne' }, { kana: 'ノ', romaji: 'no' }],
  [{ kana: 'ハ', romaji: 'ha' }, { kana: 'ヒ', romaji: 'hi' }, { kana: 'フ', romaji: 'fu' }, { kana: 'ヘ', romaji: 'he' }, { kana: 'ホ', romaji: 'ho' }],
  [{ kana: 'マ', romaji: 'ma' }, { kana: 'ミ', romaji: 'mi' }, { kana: 'ム', romaji: 'mu' }, { kana: 'メ', romaji: 'me' }, { kana: 'モ', romaji: 'mo' }],
  [{ kana: 'ヤ', romaji: 'ya' }, null, { kana: 'ユ', romaji: 'yu' }, null, { kana: 'ヨ', romaji: 'yo' }],
  [{ kana: 'ラ', romaji: 'ra' }, { kana: 'リ', romaji: 'ri' }, { kana: 'ル', romaji: 'ru' }, { kana: 'レ', romaji: 're' }, { kana: 'ロ', romaji: 'ro' }],
  [{ kana: 'ワ', romaji: 'wa' }, null, null, null, { kana: 'ヲ', romaji: 'wo' }],
  [{ kana: 'ン', romaji: 'n' }, null, null, null, null],
];

const KATAKANA_DAKUTEN: (KanaEntry | null)[][] = [
  [{ kana: 'ガ', romaji: 'ga' }, { kana: 'ギ', romaji: 'gi' }, { kana: 'グ', romaji: 'gu' }, { kana: 'ゲ', romaji: 'ge' }, { kana: 'ゴ', romaji: 'go' }],
  [{ kana: 'ザ', romaji: 'za' }, { kana: 'ジ', romaji: 'ji' }, { kana: 'ズ', romaji: 'zu' }, { kana: 'ゼ', romaji: 'ze' }, { kana: 'ゾ', romaji: 'zo' }],
  [{ kana: 'ダ', romaji: 'da' }, { kana: 'ヂ', romaji: 'ji' }, { kana: 'ヅ', romaji: 'zu' }, { kana: 'デ', romaji: 'de' }, { kana: 'ド', romaji: 'do' }],
  [{ kana: 'バ', romaji: 'ba' }, { kana: 'ビ', romaji: 'bi' }, { kana: 'ブ', romaji: 'bu' }, { kana: 'ベ', romaji: 'be' }, { kana: 'ボ', romaji: 'bo' }],
  [{ kana: 'パ', romaji: 'pa' }, { kana: 'ピ', romaji: 'pi' }, { kana: 'プ', romaji: 'pu' }, { kana: 'ペ', romaji: 'pe' }, { kana: 'ポ', romaji: 'po' }],
];

const KATAKANA_COMBO: (KanaEntry | null)[][] = [
  [{ kana: 'キャ', romaji: 'kya' }, { kana: 'キュ', romaji: 'kyu' }, { kana: 'キョ', romaji: 'kyo' }],
  [{ kana: 'シャ', romaji: 'sha' }, { kana: 'シュ', romaji: 'shu' }, { kana: 'ショ', romaji: 'sho' }],
  [{ kana: 'チャ', romaji: 'cha' }, { kana: 'チュ', romaji: 'chu' }, { kana: 'チョ', romaji: 'cho' }],
  [{ kana: 'ニャ', romaji: 'nya' }, { kana: 'ニュ', romaji: 'nyu' }, { kana: 'ニョ', romaji: 'nyo' }],
  [{ kana: 'ヒャ', romaji: 'hya' }, { kana: 'ヒュ', romaji: 'hyu' }, { kana: 'ヒョ', romaji: 'hyo' }],
  [{ kana: 'ミャ', romaji: 'mya' }, { kana: 'ミュ', romaji: 'myu' }, { kana: 'ミョ', romaji: 'myo' }],
  [{ kana: 'リャ', romaji: 'rya' }, { kana: 'リュ', romaji: 'ryu' }, { kana: 'リョ', romaji: 'ryo' }],
  [{ kana: 'ギャ', romaji: 'gya' }, { kana: 'ギュ', romaji: 'gyu' }, { kana: 'ギョ', romaji: 'gyo' }],
  [{ kana: 'ジャ', romaji: 'ja' }, { kana: 'ジュ', romaji: 'ju' }, { kana: 'ジョ', romaji: 'jo' }],
  [{ kana: 'ビャ', romaji: 'bya' }, { kana: 'ビュ', romaji: 'byu' }, { kana: 'ビョ', romaji: 'byo' }],
  [{ kana: 'ピャ', romaji: 'pya' }, { kana: 'ピュ', romaji: 'pyu' }, { kana: 'ピョ', romaji: 'pyo' }],
];

// ─── KATAKANA EXTENDED (Foreign sounds) ───
const KATAKANA_EXTENDED: (KanaEntry | null)[][] = [
  [{ kana: 'ティ', romaji: 'ti' }, { kana: 'ディ', romaji: 'di' }, { kana: 'ファ', romaji: 'fa' }, { kana: 'フィ', romaji: 'fi' }, { kana: 'フェ', romaji: 'fe' }],
  [{ kana: 'フォ', romaji: 'fo' }, { kana: 'ウィ', romaji: 'wi' }, { kana: 'ウェ', romaji: 'we' }, { kana: 'ウォ', romaji: 'wo' }, { kana: 'ヴァ', romaji: 'va' }],
  [{ kana: 'ヴィ', romaji: 'vi' }, { kana: 'ヴ', romaji: 'vu' }, { kana: 'ヴェ', romaji: 've' }, { kana: 'ヴォ', romaji: 'vo' }, { kana: 'ツァ', romaji: 'tsa' }],
  [{ kana: 'デュ', romaji: 'dyu' }, { kana: 'トゥ', romaji: 'tu' }, { kana: 'ドゥ', romaji: 'du' }, { kana: 'シェ', romaji: 'she' }, { kana: 'ジェ', romaji: 'je' }],
  [{ kana: 'チェ', romaji: 'che' }, null, null, null, null],
];

// ─── KANJI: imported from ../data/kanjiData (N5–N1) ───\n\n// ─── Counting / Quick Ref ───
interface QuickRefItem { jp: string; reading: string; meaning: string; }

const GREETINGS: QuickRefItem[] = [
  { jp: 'おはようございます', reading: 'ohayou gozaimasu', meaning: 'Chào buổi sáng' },
  { jp: 'こんにちは', reading: 'konnichiwa', meaning: 'Xin chào (ban ngày)' },
  { jp: 'こんばんは', reading: 'konbanwa', meaning: 'Chào buổi tối' },
  { jp: 'おやすみなさい', reading: 'oyasuminasai', meaning: 'Chúc ngủ ngon' },
  { jp: 'ありがとうございます', reading: 'arigatou gozaimasu', meaning: 'Cảm ơn (lịch sự)' },
  { jp: 'すみません', reading: 'sumimasen', meaning: 'Xin lỗi / Xin phép' },
  { jp: 'いただきます', reading: 'itadakimasu', meaning: 'Tôi xin phép ăn' },
  { jp: 'ごちそうさま', reading: 'gochisousama', meaning: 'Cảm ơn bữa ăn' },
  { jp: 'お願いします', reading: 'onegaishimasu', meaning: 'Xin hãy, làm ơn' },
  { jp: 'いってきます', reading: 'ittekimasu', meaning: 'Tôi đi đây' },
  { jp: 'いってらっしゃい', reading: 'itterasshai', meaning: 'Đi cẩn thận nhé' },
  { jp: 'ただいま', reading: 'tadaima', meaning: 'Tôi về rồi' },
  { jp: 'おかえりなさい', reading: 'okaerinasai', meaning: 'Chào mừng về nhà' },
  { jp: 'はじめまして', reading: 'hajimemashite', meaning: 'Rất vui được gặp' },
  { jp: 'よろしくお願いします', reading: 'yoroshiku onegaishimasu', meaning: 'Xin hãy chiếu cố' },
  { jp: 'お久しぶりです', reading: 'ohisashiburi desu', meaning: 'Lâu rồi không gặp' },
  { jp: 'お先に失礼します', reading: 'osaki ni shitsurei shimasu', meaning: 'Xin phép về trước' },
  { jp: 'お疲れ様です', reading: 'otsukaresama desu', meaning: 'Cảm ơn đã vất vả (đồng nghiệp)' },
  { jp: 'ご苦労様です', reading: 'gokurousama desu', meaning: 'Cảm ơn đã vất vả (cấp trên → dưới)' },
  { jp: 'お邪魔します', reading: 'ojama shimasu', meaning: 'Xin phép vào nhà' },
  { jp: 'ごめんなさい', reading: 'gomen nasai', meaning: 'Xin lỗi (thân mật)' },
  { jp: '失礼します', reading: 'shitsurei shimasu', meaning: 'Xin phép (vào/ra)' },
  { jp: 'どうぞ', reading: 'douzo', meaning: 'Mời; xin cứ tự nhiên' },
  { jp: 'どうも', reading: 'doumo', meaning: 'Cảm ơn (thân mật)' },
];

// ─── NUMBER GROUPS ───
type NumberEntry = { jp: string; reading: string; value: string; irregular?: boolean; note?: string };
type NumberGroup = { label: string; entries: NumberEntry[] };

const NUMBER_GROUPS: NumberGroup[] = [
  {
    label: '基本 — Số cơ bản (0~10)',
    entries: [
      { jp: '〇/零', reading: 'ゼロ/れい', value: '0' },
      { jp: '一', reading: 'いち', value: '1' },
      { jp: '二', reading: 'に', value: '2' },
      { jp: '三', reading: 'さん', value: '3' },
      { jp: '四', reading: 'し/よん', value: '4', note: 'よん phổ biến hơn' },
      { jp: '五', reading: 'ご', value: '5' },
      { jp: '六', reading: 'ろく', value: '6' },
      { jp: '七', reading: 'しち/なな', value: '7', note: 'なな phổ biến hơn' },
      { jp: '八', reading: 'はち', value: '8' },
      { jp: '九', reading: 'く/きゅう', value: '9', note: 'きゅう phổ biến hơn' },
      { jp: '十', reading: 'じゅう', value: '10' },
    ],
  },
  {
    label: '十の位 — Hàng chục (20~90)',
    entries: [
      { jp: '二十', reading: 'にじゅう', value: '20' },
      { jp: '三十', reading: 'さんじゅう', value: '30' },
      { jp: '四十', reading: 'よんじゅう', value: '40', note: 'dùng よん, không dùng し' },
      { jp: '五十', reading: 'ごじゅう', value: '50' },
      { jp: '六十', reading: 'ろくじゅう', value: '60' },
      { jp: '七十', reading: 'ななじゅう', value: '70', note: 'dùng なな, không dùng しち' },
      { jp: '八十', reading: 'はちじゅう', value: '80' },
      { jp: '九十', reading: 'きゅうじゅう', value: '90', note: 'dùng きゅう, không dùng く' },
    ],
  },
  {
    label: '百の位 — Hàng trăm (100~900)',
    entries: [
      { jp: '百', reading: 'ひゃく', value: '100' },
      { jp: '二百', reading: 'にひゃく', value: '200' },
      { jp: '三百', reading: 'さんびゃく', value: '300', irregular: true, note: 'びゃく — rendaku' },
      { jp: '四百', reading: 'よんひゃく', value: '400' },
      { jp: '五百', reading: 'ごひゃく', value: '500' },
      { jp: '六百', reading: 'ろっぴゃく', value: '600', irregular: true, note: '促音 + 半濁音' },
      { jp: '七百', reading: 'ななひゃく', value: '700' },
      { jp: '八百', reading: 'はっぴゃく', value: '800', irregular: true, note: '促音 + 半濁音' },
      { jp: '九百', reading: 'きゅうひゃく', value: '900' },
    ],
  },
  {
    label: '千の位 — Hàng nghìn (1,000~9,000)',
    entries: [
      { jp: '千', reading: 'せん', value: '1,000' },
      { jp: '二千', reading: 'にせん', value: '2,000' },
      { jp: '三千', reading: 'さんぜん', value: '3,000', irregular: true, note: 'ぜん — rendaku' },
      { jp: '四千', reading: 'よんせん', value: '4,000' },
      { jp: '五千', reading: 'ごせん', value: '5,000' },
      { jp: '六千', reading: 'ろくせん', value: '6,000' },
      { jp: '七千', reading: 'ななせん', value: '7,000' },
      { jp: '八千', reading: 'はっせん', value: '8,000', irregular: true, note: '促音 はっ' },
      { jp: '九千', reading: 'きゅうせん', value: '9,000' },
    ],
  },
  {
    label: '大きい数 — Số lớn',
    entries: [
      { jp: '一万', reading: 'いちまん', value: '10,000' },
      { jp: '十万', reading: 'じゅうまん', value: '100,000' },
      { jp: '百万', reading: 'ひゃくまん', value: '1,000,000' },
      { jp: '一億', reading: 'いちおく', value: '100,000,000' },
      { jp: '一兆', reading: 'いっちょう', value: '1,000,000,000,000', irregular: true, note: '促音 いっ' },
    ],
  },
];

// ─── DAYS OF WEEK ───
const DAYS_OF_WEEK: QuickRefItem[] = [
  { jp: '月曜日', reading: 'げつようび', meaning: 'Thứ Hai' },
  { jp: '火曜日', reading: 'かようび', meaning: 'Thứ Ba' },
  { jp: '水曜日', reading: 'すいようび', meaning: 'Thứ Tư' },
  { jp: '木曜日', reading: 'もくようび', meaning: 'Thứ Năm' },
  { jp: '金曜日', reading: 'きんようび', meaning: 'Thứ Sáu' },
  { jp: '土曜日', reading: 'どようび', meaning: 'Thứ Bảy' },
  { jp: '日曜日', reading: 'にちようび', meaning: 'Chủ nhật' },
];

// ─── DAYS OF MONTH (Special readings) ───
// Now handled by DATE_COUNTERS from counterData.ts

// ─── COLORS ───
const COLORS: QuickRefItem[] = [
  { jp: '赤い', reading: 'あかい', meaning: 'Đỏ' },
  { jp: '青い', reading: 'あおい', meaning: 'Xanh dương/lá' },
  { jp: '白い', reading: 'しろい', meaning: 'Trắng' },
  { jp: '黒い', reading: 'くろい', meaning: 'Đen' },
  { jp: '黄色い', reading: 'きいろい', meaning: 'Vàng' },
  { jp: '茶色い', reading: 'ちゃいろい', meaning: 'Nâu' },
  { jp: '緑', reading: 'みどり', meaning: 'Xanh lá' },
  { jp: 'オレンジ', reading: 'オレンジ', meaning: 'Cam' },
  { jp: '紫', reading: 'むらさき', meaning: 'Tím' },
  { jp: 'ピンク', reading: 'ピンク', meaning: 'Hồng' },
  { jp: '灰色', reading: 'はいいろ', meaning: 'Xám' },
  { jp: '金色', reading: 'きんいろ', meaning: 'Vàng kim' },
  { jp: '銀色', reading: 'ぎんいろ', meaning: 'Bạc' },
];

// ─── FAMILY TERMS ───
interface FamilyItem { jp: string; reading: string; meaning: string; honorific: string; honorificReading: string; }

const FAMILY: FamilyItem[] = [
  { jp: '父', reading: 'ちち', meaning: 'Bố (mình)', honorific: 'お父さん', honorificReading: 'おとうさん' },
  { jp: '母', reading: 'はは', meaning: 'Mẹ (mình)', honorific: 'お母さん', honorificReading: 'おかあさん' },
  { jp: '兄', reading: 'あに', meaning: 'Anh trai (mình)', honorific: 'お兄さん', honorificReading: 'おにいさん' },
  { jp: '姉', reading: 'あね', meaning: 'Chị gái (mình)', honorific: 'お姉さん', honorificReading: 'おねえさん' },
  { jp: '弟', reading: 'おとうと', meaning: 'Em trai (mình)', honorific: '弟さん', honorificReading: 'おとうとさん' },
  { jp: '妹', reading: 'いもうと', meaning: 'Em gái (mình)', honorific: '妹さん', honorificReading: 'いもうとさん' },
  { jp: '祖父', reading: 'そふ', meaning: 'Ông (mình)', honorific: 'おじいさん', honorificReading: 'おじいさん' },
  { jp: '祖母', reading: 'そぼ', meaning: 'Bà (mình)', honorific: 'おばあさん', honorificReading: 'おばあさん' },
  { jp: '夫', reading: 'おっと', meaning: 'Chồng (mình)', honorific: 'ご主人', honorificReading: 'ごしゅじん' },
  { jp: '妻', reading: 'つま', meaning: 'Vợ (mình)', honorific: '奥さん', honorificReading: 'おくさん' },
  { jp: '息子', reading: 'むすこ', meaning: 'Con trai (mình)', honorific: '息子さん', honorificReading: 'むすこさん' },
  { jp: '娘', reading: 'むすめ', meaning: 'Con gái (mình)', honorific: '娘さん', honorificReading: 'むすめさん' },
];

// ─── DIRECTIONS ───
const DIRECTIONS: QuickRefItem[] = [
  { jp: '北', reading: 'きた', meaning: 'Bắc' },
  { jp: '南', reading: 'みなみ', meaning: 'Nam' },
  { jp: '東', reading: 'ひがし', meaning: 'Đông' },
  { jp: '西', reading: 'にし', meaning: 'Tây' },
  { jp: '上', reading: 'うえ', meaning: 'Trên' },
  { jp: '下', reading: 'した', meaning: 'Dưới' },
  { jp: '右', reading: 'みぎ', meaning: 'Phải' },
  { jp: '左', reading: 'ひだり', meaning: 'Trái' },
  { jp: '前', reading: 'まえ', meaning: 'Trước' },
  { jp: '後ろ', reading: 'うしろ', meaning: 'Sau' },
  { jp: '中', reading: 'なか', meaning: 'Trong; giữa' },
  { jp: '外', reading: 'そと', meaning: 'Ngoài' },
  { jp: '隣', reading: 'となり', meaning: 'Bên cạnh' },
  { jp: '近く', reading: 'ちかく', meaning: 'Gần' },
  { jp: '向こう', reading: 'むこう', meaning: 'Bên kia' },
];

// ─── TIME EXPRESSIONS ───
const TIME_EXPR: QuickRefItem[] = [
  { jp: '今日', reading: 'きょう', meaning: 'Hôm nay' },
  { jp: '明日', reading: 'あした', meaning: 'Ngày mai' },
  { jp: '昨日', reading: 'きのう', meaning: 'Hôm qua' },
  { jp: '今週', reading: 'こんしゅう', meaning: 'Tuần này' },
  { jp: '来週', reading: 'らいしゅう', meaning: 'Tuần sau' },
  { jp: '先週', reading: 'せんしゅう', meaning: 'Tuần trước' },
  { jp: '今月', reading: 'こんげつ', meaning: 'Tháng này' },
  { jp: '来月', reading: 'らいげつ', meaning: 'Tháng sau' },
  { jp: '先月', reading: 'せんげつ', meaning: 'Tháng trước' },
  { jp: '今年', reading: 'ことし', meaning: 'Năm nay' },
  { jp: '来年', reading: 'らいねん', meaning: 'Năm sau' },
  { jp: '去年', reading: 'きょねん', meaning: 'Năm ngoái' },
  { jp: '朝', reading: 'あさ', meaning: 'Sáng' },
  { jp: '昼', reading: 'ひる', meaning: 'Trưa' },
  { jp: '夜', reading: 'よる', meaning: 'Tối/đêm' },
  { jp: '午前', reading: 'ごぜん', meaning: 'Buổi sáng (AM)' },
  { jp: '午後', reading: 'ごご', meaning: 'Buổi chiều (PM)' },
  { jp: '毎日', reading: 'まいにち', meaning: 'Mỗi ngày' },
  { jp: '毎週', reading: 'まいしゅう', meaning: 'Mỗi tuần' },
  { jp: '毎月', reading: 'まいつき', meaning: 'Mỗi tháng' },
  { jp: '毎年', reading: 'まいとし', meaning: 'Mỗi năm' },
  { jp: '一昨日', reading: 'おととい', meaning: 'Hôm kia' },
  { jp: '明後日', reading: 'あさって', meaning: 'Ngày kia' },
  { jp: '再来週', reading: 'さらいしゅう', meaning: 'Tuần sau nữa' },
];

// ─── VERB CONJUGATION ───
interface ConjugRow { form: string; group1: string; group2: string; irregular1: string; irregular2: string; meaning: string; }

const VERB_CONJUGATION: ConjugRow[] = [
  { form: '辞書形 (Từ điển)', group1: '書く (かく)', group2: '食べる (たべる)', irregular1: 'する', irregular2: '来る (くる)', meaning: 'Dạng gốc' },
  { form: 'ます形', group1: '書きます', group2: '食べます', irregular1: 'します', irregular2: '来ます (きます)', meaning: 'Lịch sự' },
  { form: 'ない形 (Phủ định)', group1: '書かない', group2: '食べない', irregular1: 'しない', irregular2: '来ない (こない)', meaning: 'Không...' },
  { form: 'た形 (Quá khứ)', group1: '書いた', group2: '食べた', irregular1: 'した', irregular2: '来た (きた)', meaning: 'Đã...' },
  { form: 'て形', group1: '書いて', group2: '食べて', irregular1: 'して', irregular2: '来て (きて)', meaning: 'Nối câu; yêu cầu' },
  { form: '可能形 (Khả năng)', group1: '書ける', group2: '食べられる', irregular1: 'できる', irregular2: '来られる (こられる)', meaning: 'Có thể...' },
  { form: '受身形 (Bị động)', group1: '書かれる', group2: '食べられる', irregular1: 'される', irregular2: '来られる (こられる)', meaning: 'Bị...' },
  { form: '使役形 (Sai khiến)', group1: '書かせる', group2: '食べさせる', irregular1: 'させる', irregular2: '来させる (こさせる)', meaning: 'Bắt/cho...' },
  { form: '意志形 (Ý chí)', group1: '書こう', group2: '食べよう', irregular1: 'しよう', irregular2: '来よう (こよう)', meaning: 'Hãy cùng...' },
  { form: '命令形 (Mệnh lệnh)', group1: '書け', group2: '食べろ', irregular1: 'しろ/せよ', irregular2: '来い (こい)', meaning: 'Hãy...!' },
  { form: '条件形 ば (Điều kiện)', group1: '書けば', group2: '食べれば', irregular1: 'すれば', irregular2: '来れば (くれば)', meaning: 'Nếu...' },
  { form: 'たら形', group1: '書いたら', group2: '食べたら', irregular1: 'したら', irregular2: '来たら (きたら)', meaning: 'Nếu/khi...' },
];

// ─── ADJECTIVE CONJUGATION ───
interface AdjConjugRow { form: string; iAdj: string; naAdj: string; meaning: string; }

const ADJ_CONJUGATION: AdjConjugRow[] = [
  { form: '辞書形 (Từ điển)', iAdj: '高い (たかい)', naAdj: '静かだ (しずかだ)', meaning: 'Dạng gốc' },
  { form: '丁寧形 (Lịch sự)', iAdj: '高いです', naAdj: '静かです', meaning: 'Lịch sự' },
  { form: 'ない形 (Phủ định)', iAdj: '高くない', naAdj: '静かじゃない', meaning: 'Không...' },
  { form: '過去形 (Quá khứ)', iAdj: '高かった', naAdj: '静かだった', meaning: 'Đã...' },
  { form: '過去否定 (QK phủ định)', iAdj: '高くなかった', naAdj: '静かじゃなかった', meaning: 'Đã không...' },
  { form: 'て形', iAdj: '高くて', naAdj: '静かで', meaning: 'Nối câu' },
  { form: '連体形 (Bổ nghĩa DT)', iAdj: '高い＋名詞', naAdj: '静かな＋名詞', meaning: '...danh từ' },
  { form: '副詞形 (Trạng từ)', iAdj: '高く', naAdj: '静かに', meaning: 'Một cách...' },
  { form: 'ば形 (Điều kiện)', iAdj: '高ければ', naAdj: '静かであれば/なら', meaning: 'Nếu ...' },
  { form: 'そう (Có vẻ)', iAdj: '高そう', naAdj: '静かそう', meaning: 'Trông có vẻ...' },
  { form: 'すぎる (Quá)', iAdj: '高すぎる', naAdj: '静かすぎる', meaning: 'Quá...' },
];

// ─── PARTICLES SUMMARY ───
interface ParticleItem { particle: string; usage: string; example: string; meaning: string; }

const PARTICLES_SUMMARY: ParticleItem[] = [
  { particle: 'は', usage: 'Chủ đề', example: '私は学生です', meaning: 'Tôi là sinh viên' },
  { particle: 'が', usage: 'Chủ ngữ', example: '猫がいる', meaning: 'Có con mèo' },
  { particle: 'を', usage: 'Tân ngữ trực tiếp', example: '本を読む', meaning: 'Đọc sách' },
  { particle: 'に', usage: 'Đích đến / thời gian', example: '学校に行く / 三時に', meaning: 'Đến trường / lúc 3 giờ' },
  { particle: 'で', usage: 'Nơi diễn ra / phương tiện', example: '学校で / バスで', meaning: 'Ở trường / bằng xe buýt' },
  { particle: 'へ', usage: 'Hướng đi', example: '日本へ行く', meaning: 'Đi đến Nhật' },
  { particle: 'と', usage: 'Cùng với / trích dẫn', example: '友達と / いいと思う', meaning: 'Với bạn / nghĩ rằng tốt' },
  { particle: 'から', usage: 'Từ / vì', example: '家から / 暇だから', meaning: 'Từ nhà / vì rảnh' },
  { particle: 'まで', usage: 'Đến; cho đến', example: '五時まで', meaning: 'Đến 5 giờ' },
  { particle: 'も', usage: 'Cũng', example: '私も行く', meaning: 'Tôi cũng đi' },
  { particle: 'の', usage: 'Sở hữu / bổ nghĩa', example: '私の本', meaning: 'Sách của tôi' },
  { particle: 'よ', usage: 'Nhấn mạnh (thông báo)', example: 'おいしいよ', meaning: 'Ngon đấy!' },
  { particle: 'ね', usage: 'Đồng ý / xác nhận', example: 'いい天気ですね', meaning: 'Thời tiết đẹp nhỉ' },
  { particle: 'か', usage: 'Câu hỏi', example: '日本人ですか', meaning: 'Là người Nhật à?' },
  { particle: 'や', usage: 'Liệt kê (không hết)', example: '犬や猫', meaning: 'Chó, mèo, vv.' },
  { particle: 'より', usage: 'So sánh hơn', example: '日本より大きい', meaning: 'Lớn hơn Nhật' },
  { particle: 'しか', usage: 'Chỉ (+ phủ định)', example: '一つしかない', meaning: 'Chỉ có một' },
  { particle: 'だけ', usage: 'Chỉ', example: 'これだけ', meaning: 'Chỉ cái này' },
  { particle: 'ばかり', usage: 'Toàn; vừa mới', example: '食べたばかり', meaning: 'Vừa mới ăn' },
  { particle: 'くらい/ぐらい', usage: 'Khoảng', example: '一時間くらい', meaning: 'Khoảng 1 tiếng' },
];

// ─── KEIGO SUMMARY ───
interface KeigoItem { plain: string; sonkeigo: string; kenjougo: string; meaning: string; }

const KEIGO_TABLE: KeigoItem[] = [
  { plain: '行く (いく)', sonkeigo: 'いらっしゃる', kenjougo: '参る (まいる)', meaning: 'Đi' },
  { plain: '来る (くる)', sonkeigo: 'いらっしゃる/おいでになる', kenjougo: '参る (まいる)', meaning: 'Đến' },
  { plain: 'いる', sonkeigo: 'いらっしゃる/おいでになる', kenjougo: 'おる', meaning: 'Ở; có mặt' },
  { plain: '食べる (たべる)', sonkeigo: '召し上がる (めしあがる)', kenjougo: 'いただく', meaning: 'Ăn' },
  { plain: '飲む (のむ)', sonkeigo: '召し上がる', kenjougo: 'いただく', meaning: 'Uống' },
  { plain: '言う (いう)', sonkeigo: 'おっしゃる', kenjougo: '申す (もうす)', meaning: 'Nói' },
  { plain: '見る (みる)', sonkeigo: 'ご覧になる (ごらんになる)', kenjougo: '拝見する (はいけんする)', meaning: 'Xem' },
  { plain: '聞く (きく)', sonkeigo: 'お聞きになる', kenjougo: '伺う (うかがう)', meaning: 'Nghe; hỏi' },
  { plain: '読む (よむ)', sonkeigo: 'お読みになる', kenjougo: '拝読する (はいどくする)', meaning: 'Đọc' },
  { plain: 'する', sonkeigo: 'なさる', kenjougo: 'いたす', meaning: 'Làm' },
  { plain: '知る (しる)', sonkeigo: 'ご存知 (ごぞんじ)', kenjougo: '存じる (ぞんじる)', meaning: 'Biết' },
  { plain: '会う (あう)', sonkeigo: 'お会いになる', kenjougo: 'お目にかかる', meaning: 'Gặp' },
  { plain: 'もらう', sonkeigo: '—', kenjougo: 'いただく', meaning: 'Nhận' },
  { plain: 'あげる', sonkeigo: '—', kenjougo: '差し上げる (さしあげる)', meaning: 'Cho' },
  { plain: 'くれる', sonkeigo: 'くださる', kenjougo: '—', meaning: 'Cho (tôi)' },
  { plain: '思う (おもう)', sonkeigo: '思われる/お思いになる', kenjougo: '存じる (ぞんじる)', meaning: 'Nghĩ' },
];

// ─── TE-FORM RULES ───
interface TeFormRule { ending: string; teForm: string; example: string; teExample: string; }

const TE_FORM_RULES: TeFormRule[] = [
  { ending: '〜う、〜つ、〜る', teForm: '→ って', example: '買う → ', teExample: '買って' },
  { ending: '〜む、〜ぶ、〜ぬ', teForm: '→ んで', example: '読む → ', teExample: '読んで' },
  { ending: '〜く', teForm: '→ いて', example: '書く → ', teExample: '書いて' },
  { ending: '〜ぐ', teForm: '→ いで', example: '泳ぐ → ', teExample: '泳いで' },
  { ending: '〜す', teForm: '→ して', example: '話す → ', teExample: '話して' },
  { ending: '行く (ngoại lệ)', teForm: '→ 行って', example: '行く → ', teExample: '行って' },
  { ending: 'Nhóm 2 (〜る)', teForm: '→ て', example: '食べる → ', teExample: '食べて' },
  { ending: 'する', teForm: '→ して', example: 'する → ', teExample: 'して' },
  { ending: '来る', teForm: '→ 来て', example: '来る → ', teExample: '来て（きて）' },
];

// ─── COMMON SET PHRASES ───
const SET_PHRASES: QuickRefItem[] = [
  { jp: 'もう一度お願いします', reading: 'もういちどおねがいします', meaning: 'Xin nói lại lần nữa' },
  { jp: 'ちょっと待ってください', reading: 'ちょっとまってください', meaning: 'Xin đợi một chút' },
  { jp: '日本語がまだ上手じゃないです', reading: 'にほんごがまだじょうずじゃないです', meaning: 'Tiếng Nhật của tôi chưa giỏi' },
  { jp: '意味が分かりません', reading: 'いみがわかりません', meaning: 'Tôi không hiểu nghĩa' },
  { jp: 'もう少しゆっくり話してください', reading: 'もうすこしゆっくりはなしてください', meaning: 'Xin nói chậm hơn một chút' },
  { jp: 'これは日本語で何と言いますか', reading: 'これはにほんごでなんといいますか', meaning: 'Cái này tiếng Nhật nói thế nào?' },
  { jp: 'トイレはどこですか', reading: 'トイレはどこですか', meaning: 'Nhà vệ sinh ở đâu?' },
  { jp: 'いくらですか', reading: 'いくらですか', meaning: 'Bao nhiêu tiền?' },
  { jp: 'これをください', reading: 'これをください', meaning: 'Cho tôi cái này' },
  { jp: 'お会計お願いします', reading: 'おかいけいおねがいします', meaning: 'Tính tiền giùm ạ' },
  { jp: '予約をしたいのですが', reading: 'よやくをしたいのですが', meaning: 'Tôi muốn đặt chỗ' },
  { jp: '大丈夫です', reading: 'だいじょうぶです', meaning: 'Không sao / Ổn mà' },
  { jp: 'お元気ですか', reading: 'おげんきですか', meaning: 'Bạn có khỏe không?' },
  { jp: 'お世話になっております', reading: 'おせわになっております', meaning: 'Cảm ơn anh/chị đã giúp đỡ (business)' },
  { jp: 'ご迷惑をおかけして申し訳ございません', reading: 'ごめいわくをおかけしてもうしわけございません', meaning: 'Rất xin lỗi đã gây phiền phức' },
  { jp: 'かしこまりました', reading: 'かしこまりました', meaning: 'Vâng, tôi hiểu rồi (trang trọng)' },
  { jp: '少々お待ちください', reading: 'しょうしょうおまちください', meaning: 'Xin vui lòng đợi một chút' },
  { jp: 'すみませんが、もう一度言っていただけませんか', reading: 'すみませんが、もういちどいっていただけませんか', meaning: 'Xin lỗi, nói lại được không ạ?' },
];

// ─── QUESTION WORDS ───
const QUESTION_WORDS: QuickRefItem[] = [
  { jp: '何/なに/なん', reading: 'なに/なん', meaning: 'Cái gì?' },
  { jp: 'だれ/どなた', reading: 'だれ/どなた', meaning: 'Ai?' },
  { jp: 'いつ', reading: 'いつ', meaning: 'Khi nào?' },
  { jp: 'どこ', reading: 'どこ', meaning: 'Ở đâu?' },
  { jp: 'どう/いかが', reading: 'どう/いかが', meaning: 'Thế nào?' },
  { jp: 'どれ', reading: 'どれ', meaning: 'Cái nào?' },
  { jp: 'どの', reading: 'どの', meaning: '...nào? (+ danh từ)' },
  { jp: 'どちら', reading: 'どちら', meaning: 'Hướng/bên nào?' },
  { jp: 'なぜ/どうして/なんで', reading: 'なぜ/どうして/なんで', meaning: 'Tại sao?' },
  { jp: 'いくつ', reading: 'いくつ', meaning: 'Bao nhiêu? / Mấy tuổi?' },
  { jp: 'いくら', reading: 'いくら', meaning: 'Bao nhiêu (tiền)?' },
  { jp: 'どのくらい', reading: 'どのくらい', meaning: 'Bao lâu? Bao xa?' },
];

// ─── BODY PARTS ───
const BODY_PARTS: QuickRefItem[] = [
  { jp: '頭', reading: 'あたま', meaning: 'Đầu' },
  { jp: '顔', reading: 'かお', meaning: 'Mặt' },
  { jp: '目', reading: 'め', meaning: 'Mắt' },
  { jp: '耳', reading: 'みみ', meaning: 'Tai' },
  { jp: '鼻', reading: 'はな', meaning: 'Mũi' },
  { jp: '口', reading: 'くち', meaning: 'Miệng' },
  { jp: '歯', reading: 'は', meaning: 'Răng' },
  { jp: '首', reading: 'くび', meaning: 'Cổ' },
  { jp: '肩', reading: 'かた', meaning: 'Vai' },
  { jp: '腕', reading: 'うで', meaning: 'Cánh tay' },
  { jp: '手', reading: 'て', meaning: 'Tay / Bàn tay' },
  { jp: '指', reading: 'ゆび', meaning: 'Ngón tay' },
  { jp: '胸', reading: 'むね', meaning: 'Ngực' },
  { jp: '背中', reading: 'せなか', meaning: 'Lưng' },
  { jp: 'お腹', reading: 'おなか', meaning: 'Bụng' },
  { jp: '腰', reading: 'こし', meaning: 'Hông / Eo' },
  { jp: '足/脚', reading: 'あし', meaning: 'Chân' },
  { jp: '膝', reading: 'ひざ', meaning: 'Đầu gối' },
  { jp: '心臓', reading: 'しんぞう', meaning: 'Tim' },
  { jp: '髪', reading: 'かみ', meaning: 'Tóc' },
];

// ─── WEATHER & SEASONS ───
const WEATHER_SEASONS: QuickRefItem[] = [
  { jp: '春', reading: 'はる', meaning: 'Mùa xuân' },
  { jp: '夏', reading: 'なつ', meaning: 'Mùa hè' },
  { jp: '秋', reading: 'あき', meaning: 'Mùa thu' },
  { jp: '冬', reading: 'ふゆ', meaning: 'Mùa đông' },
  { jp: '天気', reading: 'てんき', meaning: 'Thời tiết' },
  { jp: '晴れ', reading: 'はれ', meaning: 'Trời nắng / quang đãng' },
  { jp: '曇り', reading: 'くもり', meaning: 'Trời nhiều mây' },
  { jp: '雨', reading: 'あめ', meaning: 'Mưa' },
  { jp: '雪', reading: 'ゆき', meaning: 'Tuyết' },
  { jp: '風', reading: 'かぜ', meaning: 'Gió' },
  { jp: '台風', reading: 'たいふう', meaning: 'Bão (typhoon)' },
  { jp: '雷', reading: 'かみなり', meaning: 'Sấm / Sét' },
  { jp: '暑い', reading: 'あつい', meaning: 'Nóng (thời tiết)' },
  { jp: '寒い', reading: 'さむい', meaning: 'Lạnh (thời tiết)' },
  { jp: '暖かい', reading: 'あたたかい', meaning: 'Ấm áp' },
  { jp: '涼しい', reading: 'すずしい', meaning: 'Mát mẻ' },
  { jp: '蒸し暑い', reading: 'むしあつい', meaning: 'Nóng ẩm / oi bức' },
  { jp: '梅雨', reading: 'つゆ', meaning: 'Mùa mưa (tháng 6)' },
];

// ─── ANIMALS ───
const ANIMALS: QuickRefItem[] = [
  { jp: '犬', reading: 'いぬ', meaning: 'Chó' },
  { jp: '猫', reading: 'ねこ', meaning: 'Mèo' },
  { jp: '鳥', reading: 'とり', meaning: 'Chim' },
  { jp: '魚', reading: 'さかな', meaning: 'Cá' },
  { jp: '馬', reading: 'うま', meaning: 'Ngựa' },
  { jp: '牛', reading: 'うし', meaning: 'Bò' },
  { jp: '豚', reading: 'ぶた', meaning: 'Heo / Lợn' },
  { jp: '猿', reading: 'さる', meaning: 'Khỉ' },
  { jp: '兎', reading: 'うさぎ', meaning: 'Thỏ' },
  { jp: '象', reading: 'ぞう', meaning: 'Voi' },
  { jp: '虎', reading: 'とら', meaning: 'Hổ' },
  { jp: '熊', reading: 'くま', meaning: 'Gấu' },
  { jp: '蛇', reading: 'へび', meaning: 'Rắn' },
  { jp: '虫', reading: 'むし', meaning: 'Côn trùng' },
  { jp: '蝶', reading: 'ちょう', meaning: 'Bướm' },
  { jp: '亀', reading: 'かめ', meaning: 'Rùa' },
  { jp: '鹿', reading: 'しか', meaning: 'Hươu / Nai' },
  { jp: '鯨', reading: 'くじら', meaning: 'Cá voi' },
];

// ─── FOOD & DRINK ───
const FOOD_DRINK: QuickRefItem[] = [
  { jp: 'ご飯', reading: 'ごはん', meaning: 'Cơm / Bữa ăn' },
  { jp: 'パン', reading: 'パン', meaning: 'Bánh mì' },
  { jp: '卵', reading: 'たまご', meaning: 'Trứng' },
  { jp: '肉', reading: 'にく', meaning: 'Thịt' },
  { jp: '鶏肉', reading: 'とりにく', meaning: 'Thịt gà' },
  { jp: '牛肉', reading: 'ぎゅうにく', meaning: 'Thịt bò' },
  { jp: '豚肉', reading: 'ぶたにく', meaning: 'Thịt heo' },
  { jp: '野菜', reading: 'やさい', meaning: 'Rau' },
  { jp: '果物', reading: 'くだもの', meaning: 'Trái cây' },
  { jp: '味噌汁', reading: 'みそしる', meaning: 'Canh miso' },
  { jp: '寿司', reading: 'すし', meaning: 'Sushi' },
  { jp: 'ラーメン', reading: 'ラーメン', meaning: 'Mì ramen' },
  { jp: 'うどん', reading: 'うどん', meaning: 'Mì udon' },
  { jp: 'そば', reading: 'そば', meaning: 'Mì soba' },
  { jp: '水', reading: 'みず', meaning: 'Nước' },
  { jp: 'お茶', reading: 'おちゃ', meaning: 'Trà' },
  { jp: 'コーヒー', reading: 'コーヒー', meaning: 'Cà phê' },
  { jp: 'ビール', reading: 'ビール', meaning: 'Bia' },
  { jp: '牛乳', reading: 'ぎゅうにゅう', meaning: 'Sữa bò' },
  { jp: 'お酒', reading: 'おさけ', meaning: 'Rượu / Sake' },
  { jp: '塩', reading: 'しお', meaning: 'Muối' },
  { jp: '砂糖', reading: 'さとう', meaning: 'Đường' },
  { jp: '醤油', reading: 'しょうゆ', meaning: 'Nước tương' },
];

// ─── CLOTHING ───
const CLOTHING: QuickRefItem[] = [
  { jp: '服', reading: 'ふく', meaning: 'Quần áo (chung)' },
  { jp: 'シャツ', reading: 'シャツ', meaning: 'Áo sơ mi' },
  { jp: 'Tシャツ', reading: 'ティーシャツ', meaning: 'Áo thun' },
  { jp: 'ズボン', reading: 'ズボン', meaning: 'Quần dài' },
  { jp: 'スカート', reading: 'スカート', meaning: 'Váy' },
  { jp: '靴', reading: 'くつ', meaning: 'Giày' },
  { jp: '靴下', reading: 'くつした', meaning: 'Tất / Vớ' },
  { jp: '帽子', reading: 'ぼうし', meaning: 'Mũ / Nón' },
  { jp: 'コート', reading: 'コート', meaning: 'Áo khoác dài' },
  { jp: 'ジャケット', reading: 'ジャケット', meaning: 'Áo khoác' },
  { jp: 'ネクタイ', reading: 'ネクタイ', meaning: 'Cà vạt' },
  { jp: '眼鏡', reading: 'めがね', meaning: 'Kính (đeo mắt)' },
  { jp: '傘', reading: 'かさ', meaning: 'Ô / Dù' },
  { jp: '着物', reading: 'きもの', meaning: 'Kimono' },
  { jp: '浴衣', reading: 'ゆかた', meaning: 'Yukata (kimono mùa hè)' },
];

// ─── OCCUPATIONS ───
const OCCUPATIONS: QuickRefItem[] = [
  { jp: '先生', reading: 'せんせい', meaning: 'Giáo viên / Thầy cô' },
  { jp: '学生', reading: 'がくせい', meaning: 'Học sinh / Sinh viên' },
  { jp: '医者', reading: 'いしゃ', meaning: 'Bác sĩ' },
  { jp: '看護師', reading: 'かんごし', meaning: 'Y tá / Điều dưỡng' },
  { jp: '会社員', reading: 'かいしゃいん', meaning: 'Nhân viên công ty' },
  { jp: '公務員', reading: 'こうむいん', meaning: 'Công chức' },
  { jp: '警察官', reading: 'けいさつかん', meaning: 'Cảnh sát' },
  { jp: '店員', reading: 'てんいん', meaning: 'Nhân viên cửa hàng' },
  { jp: '料理人', reading: 'りょうりにん', meaning: 'Đầu bếp' },
  { jp: '運転手', reading: 'うんてんしゅ', meaning: 'Tài xế' },
  { jp: 'エンジニア', reading: 'エンジニア', meaning: 'Kỹ sư' },
  { jp: '弁護士', reading: 'べんごし', meaning: 'Luật sư' },
  { jp: '歌手', reading: 'かしゅ', meaning: 'Ca sĩ' },
  { jp: '作家', reading: 'さっか', meaning: 'Nhà văn' },
  { jp: '農家', reading: 'のうか', meaning: 'Nông dân' },
];

// ─── ONOMATOPOEIA (擬音語・擬態語) ───
const ONOMATOPOEIA: QuickRefItem[] = [
  { jp: 'ワクワク', reading: 'wakuwaku', meaning: 'Hồi hộp, phấn khích' },
  { jp: 'ドキドキ', reading: 'dokidoki', meaning: 'Tim đập thình thịch' },
  { jp: 'イライラ', reading: 'iraira', meaning: 'Bực bội, khó chịu' },
  { jp: 'ニコニコ', reading: 'nikoniko', meaning: 'Cười tươi' },
  { jp: 'ペラペラ', reading: 'perapera', meaning: 'Nói trôi chảy (ngoại ngữ)' },
  { jp: 'ピカピカ', reading: 'pikapika', meaning: 'Sáng bóng, lấp lánh' },
  { jp: 'フワフワ', reading: 'fuwafuwa', meaning: 'Mềm mại, bồng bềnh' },
  { jp: 'ゴロゴロ', reading: 'gorogoro', meaning: 'Lười biếng nằm / Sấm ầm ầm' },
  { jp: 'バラバラ', reading: 'barabara', meaning: 'Rời rạc, tán loạn' },
  { jp: 'ギリギリ', reading: 'girigiri', meaning: 'Sát nút, chật vật' },
  { jp: 'ボロボロ', reading: 'boroboro', meaning: 'Tả tơi, rách nát' },
  { jp: 'キラキラ', reading: 'kirakira', meaning: 'Lấp lánh (sao, mắt)' },
  { jp: 'ハラハラ', reading: 'harahara', meaning: 'Hồi hộp lo lắng' },
  { jp: 'ぐっすり', reading: 'gussuri', meaning: 'Ngủ say' },
  { jp: 'ぺこぺこ', reading: 'pekopeko', meaning: 'Đói bụng / Cúi đầu liên tục' },
  { jp: 'ソワソワ', reading: 'sowasowa', meaning: 'Bồn chồn, lo lắng' },
  { jp: 'メチャクチャ', reading: 'mechakucha', meaning: 'Loạn xạ, hỗn độn / Cực kỳ' },
  { jp: 'のんびり', reading: 'nonbiri', meaning: 'Thong thả, thư giãn' },
  { jp: 'しっかり', reading: 'shikkari', meaning: 'Chắc chắn, vững vàng' },
  { jp: 'すっきり', reading: 'sukkiri', meaning: 'Sảng khoái, thoải mái' },
];

// ─── COMMON ADVERBS ───
const COMMON_ADVERBS: QuickRefItem[] = [
  { jp: 'とても/すごく', reading: 'totemo/sugoku', meaning: 'Rất / Cực kỳ' },
  { jp: 'ちょっと', reading: 'chotto', meaning: 'Một chút / Hơi...' },
  { jp: '少し', reading: 'すこし', meaning: 'Một ít' },
  { jp: '全然', reading: 'ぜんぜん', meaning: 'Hoàn toàn không (+ phủ định)' },
  { jp: 'たぶん', reading: 'tabun', meaning: 'Có lẽ, chắc là' },
  { jp: 'きっと', reading: 'kitto', meaning: 'Chắc chắn' },
  { jp: 'もちろん', reading: 'mochiron', meaning: 'Tất nhiên, dĩ nhiên' },
  { jp: 'やっぱり/やはり', reading: 'yappari/yahari', meaning: 'Quả nhiên, đúng là' },
  { jp: 'まだ', reading: 'mada', meaning: 'Vẫn / Chưa' },
  { jp: 'もう', reading: 'mou', meaning: 'Đã rồi / Nữa' },
  { jp: 'いつも', reading: 'itsumo', meaning: 'Luôn luôn' },
  { jp: 'よく', reading: 'yoku', meaning: 'Thường xuyên / Tốt' },
  { jp: '時々', reading: 'ときどき', meaning: 'Thỉnh thoảng' },
  { jp: 'あまり', reading: 'amari', meaning: 'Không ... lắm (+ phủ định)' },
  { jp: '絶対', reading: 'ぜったい', meaning: 'Tuyệt đối' },
  { jp: 'ずっと', reading: 'zutto', meaning: 'Mãi mãi / Suốt' },
  { jp: '結局', reading: 'けっきょく', meaning: 'Cuối cùng, rốt cuộc' },
  { jp: '急に', reading: 'きゅうに', meaning: 'Bất chợt, đột ngột' },
  { jp: 'だんだん', reading: 'dandan', meaning: 'Dần dần' },
  { jp: 'なかなか', reading: 'nakanaka', meaning: 'Khá là / Mãi mà không' },
];

// ─── CONJUNCTIONS ───
const CONJUNCTIONS: QuickRefItem[] = [
  { jp: 'そして', reading: 'soshite', meaning: 'Và rồi, sau đó' },
  { jp: 'それから', reading: 'sorekara', meaning: 'Sau đó, ngoài ra' },
  { jp: 'でも/しかし', reading: 'demo/shikashi', meaning: 'Nhưng mà, tuy nhiên' },
  { jp: 'だから', reading: 'dakara', meaning: 'Bởi vậy, cho nên' },
  { jp: 'それで', reading: 'sorede', meaning: 'Vì thế mà' },
  { jp: 'ところが', reading: 'tokoroga', meaning: 'Thế nhưng (bất ngờ)' },
  { jp: 'また', reading: 'mata', meaning: 'Lại nữa, hơn nữa' },
  { jp: 'それに', reading: 'soreni', meaning: 'Hơn nữa, thêm vào đó' },
  { jp: 'つまり', reading: 'tsumari', meaning: 'Tóm lại, nghĩa là' },
  { jp: 'ただし', reading: 'tadashi', meaning: 'Tuy nhiên, với điều kiện' },
  { jp: 'むしろ', reading: 'mushiro', meaning: 'Thà rằng, đúng hơn là' },
  { jp: 'なぜなら', reading: 'nazenara', meaning: 'Bởi vì (giải thích lý do)' },
  { jp: '一方', reading: 'いっぽう', meaning: 'Mặt khác' },
  { jp: 'すると', reading: 'suruto', meaning: 'Thế thì, thế là (kết quả)' },
  { jp: 'けれども', reading: 'keredomo', meaning: 'Tuy nhiên, mặc dù vậy' },
];

// ─── SENTENCE ENDING PATTERNS ───
interface SentencePattern { pattern: string; meaning: string; example: string; exMeaning: string; }
const SENTENCE_ENDINGS: SentencePattern[] = [
  { pattern: '～んです', meaning: 'Giải thích lý do / hoàn cảnh', example: '熱があるんです', exMeaning: 'Là vì tôi bị sốt' },
  { pattern: '～でしょう', meaning: 'Có lẽ, chắc là (phỏng đoán)', example: '明日は雨でしょう', exMeaning: 'Ngày mai chắc sẽ mưa' },
  { pattern: '～かもしれない', meaning: 'Có thể, biết đâu', example: '遅れるかもしれない', exMeaning: 'Có thể sẽ trễ' },
  { pattern: '～はずだ', meaning: 'Lẽ ra phải, đáng ra', example: '届くはずだ', exMeaning: 'Lẽ ra phải nhận được rồi' },
  { pattern: '～ようだ/みたいだ', meaning: 'Có vẻ như, trông giống như', example: '雨が降るようだ', exMeaning: 'Có vẻ sắp mưa' },
  { pattern: '～そうだ (様態)', meaning: 'Trông có vẻ (外見)', example: 'おいしそうだ', exMeaning: 'Trông có vẻ ngon' },
  { pattern: '～そうだ (伝聞)', meaning: 'Nghe nói (truyền đạt)', example: '来月結婚するそうだ', exMeaning: 'Nghe nói tháng sau kết hôn' },
  { pattern: '～らしい', meaning: 'Hình như, nghe nói', example: '彼は医者らしい', exMeaning: 'Hình như anh ấy là bác sĩ' },
  { pattern: '～つもりだ', meaning: 'Định, dự định sẽ', example: '来年日本に行くつもりだ', exMeaning: 'Tôi định sang năm đi Nhật' },
  { pattern: '～ことにする', meaning: 'Quyết định sẽ', example: '毎日走ることにした', exMeaning: 'Tôi đã quyết định chạy mỗi ngày' },
  { pattern: '～ことになる', meaning: 'Được quyết định / Hóa ra', example: '転勤することになった', exMeaning: 'Kết quả là phải chuyển công tác' },
  { pattern: '～てもいい', meaning: 'Được phép, có thể', example: '写真を撮ってもいいですか', exMeaning: 'Cho phép chụp ảnh không ạ?' },
  { pattern: '～てはいけない', meaning: 'Không được phép', example: 'ここで泳いではいけない', exMeaning: 'Không được bơi ở đây' },
  { pattern: '～なければならない', meaning: 'Phải, bắt buộc', example: '薬を飲まなければならない', exMeaning: 'Phải uống thuốc' },
  { pattern: '～たらいい', meaning: 'Nên ... thì tốt', example: '医者に聞いたらいい', exMeaning: 'Nên hỏi bác sĩ' },
];

// ─── TRANSITIVITY PAIRS (自動詞・他動詞) ───
interface TransPair { intransitive: string; intReading: string; transitive: string; transReading: string; meaning: string; }
const TRANSITIVITY_PAIRS: TransPair[] = [
  { intransitive: '開く', intReading: 'あく', transitive: '開ける', transReading: 'あける', meaning: 'Mở' },
  { intransitive: '閉まる', intReading: 'しまる', transitive: '閉める', transReading: 'しめる', meaning: 'Đóng' },
  { intransitive: '入る', intReading: 'はいる', transitive: '入れる', transReading: 'いれる', meaning: 'Vào / Cho vào' },
  { intransitive: '出る', intReading: 'でる', transitive: '出す', transReading: 'だす', meaning: 'Ra / Đưa ra' },
  { intransitive: '付く', intReading: 'つく', transitive: '付ける', transReading: 'つける', meaning: 'Bật (đèn, máy)' },
  { intransitive: '消える', intReading: 'きえる', transitive: '消す', transReading: 'けす', meaning: 'Tắt / Xóa' },
  { intransitive: '壊れる', intReading: 'こわれる', transitive: '壊す', transReading: 'こわす', meaning: 'Hỏng / Phá hỏng' },
  { intransitive: '落ちる', intReading: 'おちる', transitive: '落とす', transReading: 'おとす', meaning: 'Rơi / Làm rơi' },
  { intransitive: '変わる', intReading: 'かわる', transitive: '変える', transReading: 'かえる', meaning: 'Thay đổi' },
  { intransitive: '決まる', intReading: 'きまる', transitive: '決める', transReading: 'きめる', meaning: 'Quyết định' },
  { intransitive: '見つかる', intReading: 'みつかる', transitive: '見つける', transReading: 'みつける', meaning: 'Tìm thấy' },
  { intransitive: '始まる', intReading: 'はじまる', transitive: '始める', transReading: 'はじめる', meaning: 'Bắt đầu' },
  { intransitive: '終わる', intReading: 'おわる', transitive: '終える', transReading: 'おえる', meaning: 'Kết thúc' },
  { intransitive: '集まる', intReading: 'あつまる', transitive: '集める', transReading: 'あつめる', meaning: 'Tập hợp / Thu thập' },
  { intransitive: '売れる', intReading: 'うれる', transitive: '売る', transReading: 'うる', meaning: 'Bán (được) / Bán' },
  { intransitive: '届く', intReading: 'とどく', transitive: '届ける', transReading: 'とどける', meaning: 'Đến nơi / Giao đến' },
];

// ─── VERB FORMS OVERVIEW ───
interface VerbFormEntry { form: string; how: string; example: string; meaning: string; }
const VERB_FORMS_OVERVIEW: VerbFormEntry[] = [
  { form: 'ます形', how: '丁寧 — lịch sự', example: '食べます', meaning: 'Ăn (lịch sự)' },
  { form: 'て形', how: '接続 — nối câu, yêu cầu', example: '食べて', meaning: 'Ăn rồi... / Hãy ăn' },
  { form: 'た形', how: '過去 — quá khứ', example: '食べた', meaning: 'Đã ăn' },
  { form: 'ない形', how: '否定 — phủ định', example: '食べない', meaning: 'Không ăn' },
  { form: '辞書形', how: '原形 — nguyên dạng', example: '食べる', meaning: 'Ăn (từ điển)' },
  { form: '可能形', how: '能力 — có thể', example: '食べられる', meaning: 'Có thể ăn' },
  { form: '受身形', how: '受動 — bị động', example: '食べられる', meaning: 'Bị ăn' },
  { form: '使役形', how: '使役 — sai khiến', example: '食べさせる', meaning: 'Bắt/cho ăn' },
  { form: '使役受身形', how: '使役受動', example: '食べさせられる', meaning: 'Bị bắt ăn' },
  { form: '意向形', how: '意志 — ý chí', example: '食べよう', meaning: 'Hãy ăn nào / Cùng ăn' },
  { form: '命令形', how: '命令 — mệnh lệnh', example: '食べろ', meaning: 'Ăn đi! (thô)' },
  { form: '禁止形', how: '禁止 — cấm', example: '食べるな', meaning: 'Cấm ăn!' },
  { form: '条件形 (ば)', how: '仮定 — nếu...thì', example: '食べれば', meaning: 'Nếu ăn thì...' },
  { form: 'たら形', how: '条件 — nếu/khi', example: '食べたら', meaning: 'Nếu/khi ăn xong thì...' },
];

// ─── SITUATIONAL EXPRESSIONS ───
interface SituationalGroup { situation: string; expressions: QuickRefItem[]; }
const SITUATIONAL: SituationalGroup[] = [
  {
    situation: 'Nhà hàng',
    expressions: [
      { jp: 'すみません、メニューをお願いします', reading: 'sumimasen, menyuu o onegaishimasu', meaning: 'Xin lỗi, cho tôi xem thực đơn' },
      { jp: '注文お願いします', reading: 'chuumon onegaishimasu', meaning: 'Tôi muốn gọi món' },
      { jp: 'これをください', reading: 'kore o kudasai', meaning: 'Cho tôi cái này' },
      { jp: 'お会計お願いします', reading: 'okaikei onegaishimasu', meaning: 'Tính tiền giùm' },
      { jp: 'おいしいです', reading: 'oishii desu', meaning: 'Ngon lắm ạ' },
      { jp: 'お水をもらえますか', reading: 'omizu o moraemasuka', meaning: 'Cho tôi xin nước được không?' },
      { jp: 'アレルギーがあります', reading: 'arerugii ga arimasu', meaning: 'Tôi bị dị ứng' },
      { jp: '予約した〇〇です', reading: 'yoyaku shita 〇〇 desu', meaning: 'Tôi đã đặt bàn, tên là...' },
    ],
  },
  {
    situation: 'Mua sắm',
    expressions: [
      { jp: 'いくらですか', reading: 'ikura desuka', meaning: 'Bao nhiêu tiền?' },
      { jp: '試着してもいいですか', reading: 'shichaku shitemo ii desuka', meaning: 'Cho tôi thử được không?' },
      { jp: 'もう少し安くなりませんか', reading: 'mou sukoshi yasuku narimasenka', meaning: 'Bớt được chút không ạ?' },
      { jp: 'カードで払えますか', reading: 'kaado de haraemasuka', meaning: 'Trả bằng thẻ được không?' },
      { jp: '袋をお願いします', reading: 'fukuro o onegaishimasu', meaning: 'Cho tôi xin túi' },
      { jp: 'Sサイズはありますか', reading: 'esu saizu wa arimasuka', meaning: 'Có size S không ạ?' },
      { jp: 'これをお願いします', reading: 'kore o onegaishimasu', meaning: 'Tôi lấy cái này' },
    ],
  },
  {
    situation: 'Ga tàu / Di chuyển',
    expressions: [
      { jp: '〇〇駅はどこですか', reading: '〇〇eki wa doko desuka', meaning: 'Ga ... ở đâu ạ?' },
      { jp: '切符はどこで買えますか', reading: 'kippu wa doko de kaemasuka', meaning: 'Mua vé ở đâu?' },
      { jp: 'この電車は〇〇に止まりますか', reading: 'kono densha wa 〇〇 ni tomarimasuka', meaning: 'Tàu này có dừng ở ... không?' },
      { jp: '乗り換えはどこですか', reading: 'norikae wa doko desuka', meaning: 'Chỗ chuyển tàu ở đâu?' },
      { jp: '次の駅はどこですか', reading: 'tsugi no eki wa doko desuka', meaning: 'Ga tiếp theo là gì?' },
      { jp: 'タクシーを呼んでください', reading: 'takushii o yonde kudasai', meaning: 'Gọi giùm tôi taxi' },
      { jp: '〇〇までお願いします', reading: '〇〇 made onegaishimasu', meaning: 'Đến ... giùm tôi (taxi)' },
    ],
  },
  {
    situation: 'Bệnh viện / Sức khỏe',
    expressions: [
      { jp: '具合が悪いです', reading: 'guai ga warui desu', meaning: 'Tôi không khỏe' },
      { jp: '頭が痛いです', reading: 'atama ga itai desu', meaning: 'Tôi bị đau đầu' },
      { jp: 'お腹が痛いです', reading: 'onaka ga itai desu', meaning: 'Tôi bị đau bụng' },
      { jp: '熱があります', reading: 'netsu ga arimasu', meaning: 'Tôi bị sốt' },
      { jp: '薬をもらえますか', reading: 'kusuri o moraemasuka', meaning: 'Cho tôi thuốc được không?' },
      { jp: '保険証を持っています', reading: 'hokenshou o motteimasu', meaning: 'Tôi có thẻ bảo hiểm' },
      { jp: 'アレルギーがあります', reading: 'arerugii ga arimasu', meaning: 'Tôi bị dị ứng' },
    ],
  },
  {
    situation: 'Khách sạn',
    expressions: [
      { jp: 'チェックインお願いします', reading: 'chekkuin onegaishimasu', meaning: 'Cho tôi check-in' },
      { jp: '予約した〇〇です', reading: 'yoyaku shita 〇〇 desu', meaning: 'Tôi đã đặt phòng, tên là...' },
      { jp: 'チェックアウトは何時ですか', reading: 'chekkuauto wa nanji desuka', meaning: 'Check-out mấy giờ?' },
      { jp: 'Wifiのパスワードは何ですか', reading: 'waifai no pasuwaado wa nan desuka', meaning: 'Mật khẩu wifi là gì?' },
      { jp: '荷物を預かってもらえますか', reading: 'nimotsu o azukatte moraemasuka', meaning: 'Giữ giùm hành lý được không?' },
      { jp: 'タオルをもう一枚お願いします', reading: 'taoru o mou ichimai onegaishimasu', meaning: 'Cho tôi thêm một khăn tắm' },
    ],
  },
  {
    situation: 'Khẩn cấp',
    expressions: [
      { jp: '助けて', reading: 'たすけて', meaning: 'Cứu tôi!' },
      { jp: '警察を呼んでください', reading: 'keisatsu o yonde kudasai', meaning: 'Gọi cảnh sát giùm!' },
      { jp: '救急車を呼んでください', reading: 'kyuukyuusha o yonde kudasai', meaning: 'Gọi xe cấp cứu!' },
      { jp: '火事だ', reading: 'かじだ', meaning: 'Cháy rồi!' },
      { jp: '日本語が分かりません', reading: 'nihongo ga wakarimasen', meaning: 'Tôi không hiểu tiếng Nhật' },
      { jp: '英語を話せる人はいますか', reading: 'eigo o hanaseru hito wa imasuka', meaning: 'Có ai nói được tiếng Anh không?' },
      { jp: 'パスポートをなくしました', reading: 'pasupooto o nakushimashita', meaning: 'Tôi bị mất hộ chiếu' },
    ],
  },
];


// ============================================================================
// Components
// ============================================================================

type TabId = 'hiragana' | 'katakana' | 'kanji' | 'quickref';
type QuickRefSubTab = 'numbers' | 'time' | 'comm' | 'grammar' | 'vocab' | 'practical';

const KanaTable: React.FC<{ title: string; data: (KanaEntry | null)[][]; subtitle?: string; colHeaders?: string[] }> = ({ title, data, subtitle, colHeaders }) => (
  <div className="mb-8">
    <h3 className="text-lg font-bold text-stone-700 mb-1 font-serif-jp">{title}</h3>
    {subtitle && <p className="text-xs text-stone-400 mb-3">{subtitle}</p>}
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        {colHeaders && (
          <thead>
            <tr>
              {colHeaders.map((h, i) => (
                <th key={i} className="px-2 py-1 text-xs text-stone-400 font-medium">{h}</th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {data.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className="p-1">
                  {cell ? (
                    <div className="group bg-white border border-stone-200 rounded-lg p-2 text-center hover:border-rose-300 hover:shadow-md transition-all cursor-default min-w-[56px]">
                      <div className="text-2xl font-serif-jp text-stone-800 group-hover:text-rose-500 transition-colors">{cell.kana}</div>
                      <div className="text-[10px] text-stone-400 mt-0.5 font-mono">{cell.romaji}</div>
                    </div>
                  ) : (
                    <div className="min-w-[56px] min-h-[56px]"></div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const KanjiTable: React.FC<{ title: string; data: KanjiEntry[]; level: string }> = ({ title, data, level }) => {
  const [search, setSearch] = useState('');
  const filtered = data.filter(k => {
    if (!search) return true;
    const q = search.toLowerCase();
    return k.kanji.includes(search) || k.onyomi.toLowerCase().includes(q) || k.kunyomi.toLowerCase().includes(q) || k.meaning.toLowerCase().includes(q) || k.hanViet.toLowerCase().includes(q);
  });

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="text-lg font-bold text-stone-700 font-serif-jp">{title}</h3>
          <p className="text-xs text-stone-400">{data.length} Kanji — Level {level}</p>
        </div>
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Tim Kanji..."
            className="text-sm px-3 py-1.5 border border-stone-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 w-48"
          />
          {search && (
            <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">&times;</button>
          )}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-stone-200">
              <th className="text-left px-3 py-2 text-stone-500 font-medium w-16">Kanji</th>
              <th className="text-left px-3 py-2 text-stone-500 font-medium">Han Viet</th>
              <th className="text-left px-3 py-2 text-stone-500 font-medium">Am ON</th>
              <th className="text-left px-3 py-2 text-stone-500 font-medium">Am KUN</th>
              <th className="text-left px-3 py-2 text-stone-500 font-medium">Nghia</th>
              <th className="text-center px-3 py-2 text-stone-500 font-medium w-14">Net</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((k, i) => (
              <tr key={i} className="border-b border-stone-100 hover:bg-rose-50/50 transition-colors">
                <td className="px-3 py-2.5">
                  <span className="text-2xl font-serif-jp text-stone-800">{k.kanji}</span>
                </td>
                <td className="px-3 py-2.5">
                  <span className="text-xs font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded">{k.hanViet}</span>
                </td>
                <td className="px-3 py-2.5 text-stone-600 font-serif-jp">{k.onyomi}</td>
                <td className="px-3 py-2.5 text-stone-600 font-serif-jp">{k.kunyomi || '—'}</td>
                <td className="px-3 py-2.5 text-stone-700">{k.meaning}</td>
                <td className="px-3 py-2.5 text-center text-stone-400">{k.strokes}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center text-stone-400 py-8">Khong tim thay Kanji phu hop.</div>
        )}
      </div>
    </div>
  );
};

// ─── Quick Ref simple card grid ───
const QuickRefTable: React.FC<{ title: string; data: QuickRefItem[]; subtitle?: string }> = ({ title, data, subtitle }) => (
  <div className="mb-8">
    <h3 className="text-lg font-bold text-stone-700 mb-1 font-serif-jp">{title}</h3>
    {subtitle && <p className="text-xs text-stone-400 mb-2">{subtitle}</p>}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
      {data.map((item, i) => (
        <div key={i} className="bg-white border border-stone-200 rounded-lg px-4 py-3 hover:border-rose-300 hover:shadow-sm transition-all">
          <div className="font-serif-jp text-stone-800 text-lg flex items-center gap-1.5">{item.jp} <SpeakBtn text={item.jp} /></div>
          <div className="text-xs text-stone-400 font-mono">{item.reading}</div>
          <div className="text-sm text-stone-600 mt-1">{item.meaning}</div>
        </div>
      ))}
    </div>
  </div>
);

// ─── Number Table — grouped display with irregular highlighting ───
const NumberTable: React.FC = () => {
  const [openGroup, setOpenGroup] = useState<number>(0);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-stone-700 mb-1 font-serif-jp">数字 — Hệ thống số đếm</h3>
      <p className="text-xs text-stone-400 mb-4">
        Số cơ bản, hàng chục, hàng trăm, hàng nghìn, số lớn — số có cách đọc bất quy tắc được tô đỏ.
      </p>

      {/* Group tabs */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {NUMBER_GROUPS.map((g, i) => (
          <button
            key={i}
            onClick={() => setOpenGroup(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              openGroup === i
                ? 'bg-rose-500 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {g.label.split(' — ')[0]}
            <span className="ml-1 opacity-70">{g.label.split(' — ')[1]}</span>
          </button>
        ))}
      </div>

      {/* Active group content */}
      <div className="bg-white border border-stone-200 rounded-xl overflow-hidden">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {NUMBER_GROUPS[openGroup].entries.map((n, i) => (
            <div
              key={i}
              className={`px-4 py-3 border-b border-r border-stone-100 transition-all ${
                n.irregular
                  ? 'bg-rose-50 hover:bg-rose-100'
                  : 'hover:bg-stone-50'
              }`}
            >
              <div className="flex items-baseline gap-2">
                <span className={`text-lg font-serif-jp ${n.irregular ? 'text-rose-600 font-bold' : 'text-stone-800'}`}>
                  {n.jp}
                </span>
                <span className="text-xs text-stone-400">{n.value}</span>
              </div>
              <div className={`text-sm font-mono mt-0.5 ${n.irregular ? 'text-rose-500 font-semibold' : 'text-stone-500'}`}>
                {n.reading}
              </div>
              {n.note && (
                <div className="text-[10px] text-stone-400 mt-0.5 leading-tight">{n.note}</div>
              )}
            </div>
          ))}
        </div>
        {/* Legend */}
        <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-200 flex items-center gap-4 text-xs text-stone-400">
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded bg-rose-50 border border-rose-300"></span>
            Bất quy tắc (rendaku / 促音)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded bg-white border border-stone-200"></span>
            Đọc theo quy tắc
          </span>
        </div>
      </div>
    </div>
  );
};

// ─── Section header (no emojis, clean design) ───
const SectionHeader: React.FC<{ kanji: string; title: string; subtitle: string }> = ({ kanji, title, subtitle }) => (
  <div className="mb-6 pb-4 border-b border-stone-200 mt-10 first:mt-0">
    <div className="flex items-center gap-3">
      <span className="text-2xl font-serif-jp text-rose-400 font-light">{kanji}</span>
      <div>
        <h2 className="text-xl font-bold text-stone-700 font-serif-jp">{title}</h2>
        <p className="text-xs text-stone-400">{subtitle}</p>
      </div>
    </div>
  </div>
);

// ─── Collapsible section ───
const Collapsible: React.FC<{ title: string; subtitle?: string; defaultOpen?: boolean; children: React.ReactNode }> = ({ title, subtitle, defaultOpen = false, children }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-6">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between group text-left py-2"
      >
        <div>
          <h3 className="text-base font-bold text-stone-700 font-serif-jp group-hover:text-rose-500 transition-colors">{title}</h3>
          {subtitle && <p className="text-xs text-stone-400">{subtitle}</p>}
        </div>
        <svg
          className={`w-5 h-5 text-stone-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

// ─── Interactive Counter Grid ───
const CounterGrid: React.FC<{ data: CounterDetail[]; title: string; subtitle: string }> = ({ data, title, subtitle }) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-stone-700 mb-1 font-serif-jp">{title}</h3>
      <p className="text-xs text-stone-400 mb-4">
        {subtitle} — Nhấn vào counter để xem bảng biến đổi 1~10.{' '}
        <span className="inline-flex items-center gap-1">
          <span className="inline-block w-2.5 h-2.5 rounded bg-rose-100 border border-rose-300"></span>
          <span className="text-stone-500">= đọc bất quy tắc</span>
        </span>
      </p>

      {/* Counter button badges */}
      <div className="flex flex-wrap gap-2 mb-4">
        {data.map((c, i) => (
          <button
            key={i}
            onClick={() => setExpanded(expanded === i ? null : i)}
            className={`px-3 py-2 rounded-lg text-sm border transition-all ${
              expanded === i
                ? 'bg-rose-500 text-white border-rose-500 shadow-md scale-[1.02]'
                : 'bg-white text-stone-700 border-stone-200 hover:border-rose-300 hover:shadow-sm'
            }`}
          >
            <span className="font-serif-jp text-base font-bold">{c.counter}</span>
            <span className="ml-1.5 text-xs opacity-75">{c.meaning}</span>
          </button>
        ))}
      </div>

      {/* Expanded variation detail */}
      {expanded !== null && (
        <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-sm">
          {/* Header */}
          <div className="px-5 py-4 bg-stone-50 border-b border-stone-200 flex items-start gap-4">
            <span className="text-3xl font-serif-jp font-bold text-stone-800 leading-none mt-0.5">{data[expanded].counter}</span>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-stone-700">{data[expanded].meaning}</div>
              <div className="text-xs text-stone-400 mt-0.5">Đọc gốc: <span className="font-serif-jp text-stone-600">{data[expanded].baseReading}</span></div>
              <div className="text-xs text-stone-400 mt-0.5">Dùng cho: {data[expanded].usedFor}</div>
            </div>
            <button
              onClick={() => setExpanded(null)}
              className="text-stone-400 hover:text-stone-600 transition-colors p-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Variation grid */}
          <div className="p-4">
            <div className={`grid gap-2 ${data[expanded].variations.length > 10 ? 'grid-cols-3 sm:grid-cols-4 lg:grid-cols-6' : 'grid-cols-2 sm:grid-cols-5 lg:grid-cols-10'}`}>
              {data[expanded].variations.map((v) => (
                <div
                  key={v.num}
                  className={`text-center p-3 rounded-lg border transition-all ${
                    v.irregular
                      ? 'bg-rose-50 border-rose-200 shadow-sm'
                      : 'bg-stone-50 border-stone-200'
                  }`}
                >
                  <div className={`text-lg font-bold ${v.irregular ? 'text-rose-500' : 'text-stone-500'}`}>{v.num}</div>
                  <div className={`text-sm font-serif-jp mt-1 ${v.irregular ? 'text-rose-700 font-bold' : 'text-stone-700'}`}>
                    {v.reading}
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-3 pt-3 border-t border-stone-100 flex items-center gap-4 text-xs text-stone-400">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 rounded bg-rose-50 border border-rose-200"></span>
                Biến đổi âm (rendaku / sokuon)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-3 h-3 rounded bg-stone-50 border border-stone-200"></span>
                Đọc theo quy tắc
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// ─── Family table ───
const FamilyTable: React.FC = () => (
  <Collapsible title="家族 — Gia đình" subtitle="Khiêm nhường (gia đình mình) vs Tôn kính (gia đình người khác)">
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
        <thead>
          <tr className="bg-stone-50 border-b-2 border-stone-200">
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Quan hệ</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Khiêm nhường (うち)</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Tôn kính (よそ)</th>
          </tr>
        </thead>
        <tbody>
          {FAMILY.map((f, i) => (
            <tr key={i} className="border-b border-stone-100 hover:bg-rose-50/50 transition-colors">
              <td className="px-4 py-2.5 text-stone-700 font-medium">{f.meaning}</td>
              <td className="px-4 py-2.5"><span className="font-serif-jp text-stone-800">{f.jp}</span> <span className="text-xs text-stone-400">({f.reading})</span></td>
              <td className="px-4 py-2.5"><span className="font-serif-jp text-stone-800">{f.honorific}</span> <span className="text-xs text-stone-400">({f.honorificReading})</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Collapsible>
);

// ─── Verb conjugation table ───
const VerbConjugationTable: React.FC = () => (
  <Collapsible title="動詞活用表 — Chia động từ" subtitle="Nhóm 1 (五段), Nhóm 2 (一段), Nhóm 3 (bất quy tắc: する, 来る)">
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
        <thead>
          <tr className="bg-stone-50 border-b-2 border-stone-200">
            <th className="text-left px-3 py-2.5 text-stone-500 font-medium min-w-[140px]">Dạng</th>
            <th className="text-left px-3 py-2.5 text-stone-500 font-medium">Nhóm 1</th>
            <th className="text-left px-3 py-2.5 text-stone-500 font-medium">Nhóm 2</th>
            <th className="text-left px-3 py-2.5 text-stone-500 font-medium">する</th>
            <th className="text-left px-3 py-2.5 text-stone-500 font-medium">来る</th>
            <th className="text-left px-3 py-2.5 text-stone-500 font-medium min-w-[90px]">Nghĩa</th>
          </tr>
        </thead>
        <tbody>
          {VERB_CONJUGATION.map((r, i) => (
            <tr key={i} className="border-b border-stone-100 hover:bg-rose-50/50 transition-colors">
              <td className="px-3 py-2.5 font-medium text-rose-500 font-serif-jp text-xs">{r.form}</td>
              <td className="px-3 py-2.5 font-serif-jp text-stone-800">{r.group1}</td>
              <td className="px-3 py-2.5 font-serif-jp text-stone-800">{r.group2}</td>
              <td className="px-3 py-2.5 font-serif-jp text-stone-800">{r.irregular1}</td>
              <td className="px-3 py-2.5 font-serif-jp text-stone-800">{r.irregular2}</td>
              <td className="px-3 py-2.5 text-stone-600 text-xs">{r.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Collapsible>
);

// ─── Adjective conjugation table ───
const AdjConjugationTable: React.FC = () => (
  <Collapsible title="形容詞活用表 — Chia tính từ" subtitle="い-adj (高い) vs な-adj (静かだ)">
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
        <thead>
          <tr className="bg-stone-50 border-b-2 border-stone-200">
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium min-w-[150px]">Dạng</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">い-adj</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">な-adj</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium min-w-[90px]">Nghĩa</th>
          </tr>
        </thead>
        <tbody>
          {ADJ_CONJUGATION.map((r, i) => (
            <tr key={i} className="border-b border-stone-100 hover:bg-rose-50/50 transition-colors">
              <td className="px-4 py-2.5 font-medium text-rose-500 font-serif-jp text-xs">{r.form}</td>
              <td className="px-4 py-2.5 font-serif-jp text-stone-800">{r.iAdj}</td>
              <td className="px-4 py-2.5 font-serif-jp text-stone-800">{r.naAdj}</td>
              <td className="px-4 py-2.5 text-stone-600 text-xs">{r.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Collapsible>
);

// ─── Particles table ───
const ParticlesTable: React.FC = () => (
  <Collapsible title="助詞 — Trợ từ" subtitle="Tổng hợp các trợ từ quan trọng nhất trong tiếng Nhật" defaultOpen={true}>
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
        <thead>
          <tr className="bg-stone-50 border-b-2 border-stone-200">
            <th className="text-center px-3 py-2.5 text-stone-500 font-medium w-16">Trợ từ</th>
            <th className="text-left px-3 py-2.5 text-stone-500 font-medium min-w-[120px]">Chức năng</th>
            <th className="text-left px-3 py-2.5 text-stone-500 font-medium">Ví dụ</th>
            <th className="text-left px-3 py-2.5 text-stone-500 font-medium">Nghĩa</th>
          </tr>
        </thead>
        <tbody>
          {PARTICLES_SUMMARY.map((p, i) => (
            <tr key={i} className="border-b border-stone-100 hover:bg-rose-50/50 transition-colors">
              <td className="px-3 py-2.5 text-center"><span className="text-lg font-bold font-serif-jp text-rose-500">{p.particle}</span></td>
              <td className="px-3 py-2.5 text-stone-700 font-medium text-xs">{p.usage}</td>
              <td className="px-3 py-2.5 font-serif-jp text-stone-800">{p.example}</td>
              <td className="px-3 py-2.5 text-stone-600 text-xs">{p.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Collapsible>
);

// ─── Keigo table ───
const KeigoTable: React.FC = () => (
  <Collapsible title="敬語 — Kính ngữ" subtitle="尊敬語 (Tôn kính) vs 謙譲語 (Khiêm nhường)">
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
        <thead>
          <tr className="bg-stone-50 border-b-2 border-stone-200">
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Dạng thường</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">尊敬語 (Tôn kính)</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">謙譲語 (Khiêm nhường)</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium w-24">Nghĩa</th>
          </tr>
        </thead>
        <tbody>
          {KEIGO_TABLE.map((k, i) => (
            <tr key={i} className="border-b border-stone-100 hover:bg-rose-50/50 transition-colors">
              <td className="px-4 py-2.5 font-serif-jp text-stone-800">{k.plain}</td>
              <td className="px-4 py-2.5 font-serif-jp text-blue-600">{k.sonkeigo}</td>
              <td className="px-4 py-2.5 font-serif-jp text-emerald-600">{k.kenjougo}</td>
              <td className="px-4 py-2.5 text-stone-600 text-xs">{k.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Collapsible>
);

// ─── Te-form rules table ───
const TeFormTable: React.FC = () => (
  <Collapsible title="て形 — Quy tắc Te-form" subtitle="Cách biến đổi động từ nhóm 1 sang て形">
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
        <thead>
          <tr className="bg-stone-50 border-b-2 border-stone-200">
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Đuôi gốc</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Biến đổi</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Ví dụ</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">て形</th>
          </tr>
        </thead>
        <tbody>
          {TE_FORM_RULES.map((r, i) => (
            <tr key={i} className="border-b border-stone-100 hover:bg-rose-50/50 transition-colors">
              <td className="px-4 py-2.5 font-serif-jp text-stone-800 font-medium">{r.ending}</td>
              <td className="px-4 py-2.5 font-serif-jp text-rose-500 font-bold">{r.teForm}</td>
              <td className="px-4 py-2.5 font-serif-jp text-stone-600">{r.example}</td>
              <td className="px-4 py-2.5 font-serif-jp text-emerald-600 font-bold">{r.teExample}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Collapsible>
);

// ─── Transitivity pairs table ───
const TransitivityTable: React.FC = () => (
  <Collapsible title="自動詞・他動詞 — Cặp tự/tha động từ" subtitle="Tự động từ (tự xảy ra) vs Tha động từ (ai đó làm) — phải nhớ cặp">
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
        <thead>
          <tr className="bg-stone-50 border-b-2 border-stone-200">
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Nghĩa</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">自動詞 (Tự)</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium"></th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">他動詞 (Tha)</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          {TRANSITIVITY_PAIRS.map((p, i) => (
            <tr key={i} className="border-b border-stone-100 hover:bg-rose-50/50 transition-colors">
              <td className="px-4 py-2.5 text-stone-600 text-xs font-medium">{p.meaning}</td>
              <td className="px-4 py-2.5 font-serif-jp text-blue-600">{p.intransitive}</td>
              <td className="px-4 py-2 text-xs text-stone-400 font-mono">{p.intReading}</td>
              <td className="px-4 py-2.5 font-serif-jp text-emerald-600">{p.transitive}</td>
              <td className="px-4 py-2 text-xs text-stone-400 font-mono">{p.transReading}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Collapsible>
);

// ─── Verb forms overview table ───
const VerbFormsOverview: React.FC = () => (
  <Collapsible title="動詞の形一覧 — Tổng quan các dạng động từ" subtitle="14 dạng biến đổi chính — ví dụ với 食べる (ăn)">
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
        <thead>
          <tr className="bg-stone-50 border-b-2 border-stone-200">
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Dạng</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Chức năng</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Ví dụ</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Nghĩa</th>
          </tr>
        </thead>
        <tbody>
          {VERB_FORMS_OVERVIEW.map((v, i) => (
            <tr key={i} className="border-b border-stone-100 hover:bg-rose-50/50 transition-colors">
              <td className="px-4 py-2.5 font-serif-jp text-rose-500 font-bold text-xs">{v.form}</td>
              <td className="px-4 py-2.5 text-stone-600 text-xs">{v.how}</td>
              <td className="px-4 py-2.5 font-serif-jp text-stone-800">{v.example}</td>
              <td className="px-4 py-2.5 text-stone-600 text-xs">{v.meaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Collapsible>
);

// ─── Sentence endings table ───
const SentenceEndingsTable: React.FC = () => (
  <Collapsible title="文末表現 — Mẫu câu kết thúc" subtitle="Các pattern phổ biến ở cuối câu — diễn đạt sắc thái, phỏng đoán, ý chí">
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
        <thead>
          <tr className="bg-stone-50 border-b-2 border-stone-200">
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium min-w-[160px]">Mẫu</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium min-w-[150px]">Nghĩa</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Ví dụ</th>
            <th className="text-left px-4 py-2.5 text-stone-500 font-medium">Dịch</th>
          </tr>
        </thead>
        <tbody>
          {SENTENCE_ENDINGS.map((s, i) => (
            <tr key={i} className="border-b border-stone-100 hover:bg-rose-50/50 transition-colors">
              <td className="px-4 py-2.5 font-serif-jp text-rose-500 font-bold text-xs">{s.pattern}</td>
              <td className="px-4 py-2.5 text-stone-600 text-xs">{s.meaning}</td>
              <td className="px-4 py-2.5 font-serif-jp text-stone-800 text-xs">{s.example}</td>
              <td className="px-4 py-2.5 text-stone-500 text-xs">{s.exMeaning}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Collapsible>
);

// ─── Situational expressions ───
const SituationalSection: React.FC = () => {
  const [openSit, setOpenSit] = useState<number>(0);
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-stone-700 mb-1 font-serif-jp">場面別表現 — Mẫu câu theo tình huống</h3>
      <p className="text-xs text-stone-400 mb-4">Chọn tình huống để xem các câu hữu ích tương ứng.</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {SITUATIONAL.map((s, i) => (
          <button
            key={i}
            onClick={() => setOpenSit(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              openSit === i
                ? 'bg-rose-500 text-white shadow-sm'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            {s.situation}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-2">
        {SITUATIONAL[openSit].expressions.map((e, i) => (
          <div key={i} className="bg-white border border-stone-200 rounded-lg px-4 py-3 hover:border-rose-300 hover:shadow-sm transition-all">
            <div className="font-serif-jp text-stone-800 flex items-center gap-1.5">{e.jp} <SpeakBtn text={e.jp} /></div>
            <div className="text-xs text-stone-400 font-mono mt-0.5">{e.reading}</div>
            <div className="text-sm text-stone-600 mt-1">{e.meaning}</div>
          </div>
        ))}
      </div>
    </div>
  );
};


// ============================================================================
// Main Page
// ============================================================================

const QUICKREF_SUBTABS: { id: QuickRefSubTab; label: string; kanji: string }[] = [
  { id: 'numbers', label: 'Số & Đếm', kanji: '数' },
  { id: 'time', label: 'Thời gian', kanji: '時' },
  { id: 'comm', label: 'Giao tiếp', kanji: '話' },
  { id: 'grammar', label: 'Ngữ pháp', kanji: '文' },
  { id: 'vocab', label: 'Từ vựng', kanji: '語' },
  { id: 'practical', label: 'Thực dụng', kanji: '用' },
];

const ReferencePage: React.FC = () => {
  const { openSettings } = useSettings();
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>('hiragana');
  const [kanjiLevel, setKanjiLevel] = useState<KanjiLevel>('ALL');
  const [quickrefTab, setQuickrefTab] = useState<QuickRefSubTab>('numbers');
  const kanjiLevels: KanjiLevel[] = ['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'];

  const tabs: { id: TabId; label: string; icon: string }[] = [
    { id: 'hiragana', label: 'Hiragana', icon: 'あ' },
    { id: 'katakana', label: 'Katakana', icon: 'ア' },
    { id: 'kanji', label: 'Kanji', icon: '漢' },
    { id: 'quickref', label: 'Tham khảo', icon: '参' },
  ];

  return (
    <div className="min-h-screen bg-[#FAFAF5] relative overflow-hidden">
      <SettingsPanel />
      <TutorialPanel isOpen={isTutorialOpen} onClose={() => setIsTutorialOpen(false)} />
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#FAFAF5]/80 backdrop-blur-md border-b border-stone-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <span className="text-2xl">🌸</span>
              <h1 className="text-xl font-bold tracking-tight text-stone-800 font-serif-jp">Aruka<span className="text-rose-400">S</span></h1>
            </Link>
            <span className="text-stone-300 mx-2">|</span>
            <span className="text-sm font-medium text-stone-500">Bảng tham khảo</span>
          </div>
          <div className="flex items-center gap-2">
            <Link
              to="/dictionary"
              className="flex items-center gap-2 text-sm text-stone-500 hover:text-rose-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-rose-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" /></svg>
              Từ điển
            </Link>
            <Link
              to="/grammar"
              className="flex items-center gap-2 text-sm text-stone-500 hover:text-rose-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-rose-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              Ngữ pháp
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-sm text-stone-500 hover:text-rose-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-rose-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Phân tích
            </Link>
            <button onClick={() => setIsTutorialOpen(true)} className="p-2 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-rose-500 transition-all border border-stone-200 shadow-sm" title="Hướng dẫn" aria-label="Hướng dẫn">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4M12 8h.01" /></svg>
            </button>
            <button onClick={openSettings} className="p-2 rounded-lg bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-rose-500 transition-all border border-stone-200 shadow-sm" title="Cài đặt" aria-label="Cài đặt">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><circle cx="12" cy="12" r="3" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 mt-10 mb-8 text-center">
        <h2 className="text-3xl font-serif-jp font-light text-stone-800 mb-2">Bảng tham khảo tổng hợp</h2>
        <p className="text-stone-500 font-light">Hiragana, Katakana, Kanji, trợ số từ, ngữ pháp — tra cứu nhanh cho người học tiếng Nhật.</p>
      </div>

      {/* Main Tab Bar */}
      <div className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex gap-1 p-1 bg-stone-100 rounded-xl w-fit mx-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-white text-stone-800 shadow-sm border border-stone-200'
                  : 'text-stone-600 hover:text-stone-800 hover:bg-stone-50'
              }`}
            >
              <span className="text-base font-serif-jp">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        {activeTab === 'hiragana' && (
          <div className="animate-fade-in-up">
            <KanaTable title="五十音 — Gojuon (Ngũ thập âm)" data={HIRAGANA_GOJUON} subtitle="46 ký tự cơ bản của hệ chữ Hiragana" colHeaders={['a', 'i', 'u', 'e', 'o']} />
            <KanaTable title="濁音 & 半濁音 — Dakuten & Handakuten" data={HIRAGANA_DAKUTEN} subtitle="Âm đục (゛) và âm p (゜)" colHeaders={['a', 'i', 'u', 'e', 'o']} />
            <KanaTable title="拗音 — Yoon (Âm ghép)" data={HIRAGANA_COMBO} subtitle="Âm kết hợp với ゃ ゅ ょ" colHeaders={['ya', 'yu', 'yo']} />
          </div>
        )}

        {activeTab === 'katakana' && (
          <div className="animate-fade-in-up">
            <KanaTable title="カタカナ 五十音 — Katakana Gojuon" data={KATAKANA_GOJUON} subtitle="46 ký tự cơ bản — dùng cho từ ngoại lai, onomatopoeia" colHeaders={['a', 'i', 'u', 'e', 'o']} />
            <KanaTable title="濁音 & 半濁音 — Dakuten & Handakuten" data={KATAKANA_DAKUTEN} subtitle="Âm đục và âm p cho Katakana" colHeaders={['a', 'i', 'u', 'e', 'o']} />
            <KanaTable title="拗音 — Yoon (Âm ghép)" data={KATAKANA_COMBO} subtitle="Âm kết hợp Katakana" colHeaders={['ya', 'yu', 'yo']} />
            <KanaTable title="外来音 — Âm ngoại lai mở rộng" data={KATAKANA_EXTENDED} subtitle="Dùng để phiên âm từ nước ngoài" />
          </div>
        )}

        {activeTab === 'kanji' && (
          <div className="animate-fade-in-up">
            <div className="flex flex-wrap gap-2 mb-6">
              {kanjiLevels.map(lv => (
                <button
                  key={lv}
                  onClick={() => setKanjiLevel(lv)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${kanjiLevel === lv ? 'bg-rose-500 text-white shadow-sm' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
                >
                  {lv === 'ALL' ? `Toan bo (${KANJI_BY_LEVEL[lv].length} chu)` : `${lv} (${KANJI_BY_LEVEL[lv].length} chu)`}
                </button>
              ))}
            </div>
            <KanjiTable
              title={KANJI_LEVEL_INFO[kanjiLevel].title}
              data={KANJI_BY_LEVEL[kanjiLevel]}
              level={kanjiLevel}
            />
            <p className="text-center text-stone-400 text-sm mt-4">{KANJI_LEVEL_INFO[kanjiLevel].subtitle}</p>
          </div>
        )}

        {activeTab === 'quickref' && (
          <div className="animate-fade-in-up">
            {/* Sub-tab navigation */}
            <div className="flex gap-1 p-1 bg-stone-100 rounded-xl mb-8">
              {QUICKREF_SUBTABS.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setQuickrefTab(sub.id)}
                  className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 ${
                    quickrefTab === sub.id
                      ? 'bg-white text-stone-800 shadow-sm border border-stone-200'
                      : 'text-stone-600 hover:text-stone-800 hover:bg-stone-50'
                  }`}
                >
                  <span className="font-serif-jp text-base text-rose-400">{sub.kanji}</span>
                  {sub.label}
                </button>
              ))}
            </div>

            {/* ═══ Numbers & Counting ═══ */}
            {quickrefTab === 'numbers' && (
              <div>
                <SectionHeader kanji="数" title="Số đếm & Trợ số từ" subtitle="Số cơ bản, cách đếm với các counter, biến đổi âm" />

                <NumberTable />

                <CounterGrid
                  data={COUNTER_DETAILS}
                  title="助数詞 — Trợ số từ (Counters)"
                  subtitle="Mỗi counter có cách đọc thay đổi khác nhau theo số đi kèm"
                />
              </div>
            )}

            {/* ═══ Time & Calendar ═══ */}
            {quickrefTab === 'time' && (
              <div>
                <SectionHeader kanji="時" title="Thời gian & Lịch" subtitle="Thứ, tháng, ngày, giờ, phút — cách đọc đặc biệt" />

                <QuickRefTable title="曜日 — Thứ trong tuần" data={DAYS_OF_WEEK} />

                <CounterGrid
                  data={DATE_COUNTERS}
                  title="日付・月・年 — Ngày, tháng, năm"
                  subtitle="Ngày trong tháng có nhiều đọc đặc biệt theo hệ Wago"
                />

                <CounterGrid
                  data={TIME_COUNTERS}
                  title="時・分・秒 — Giờ, phút, giây"
                  subtitle="4時=よじ, 7時=しちじ, 9時=くじ — phải nhớ riêng"
                />

                <QuickRefTable title="時間表現 — Biểu thức thời gian" data={TIME_EXPR} subtitle="Hôm nay, ngày mai, mỗi ngày, sáng/trưa/tối..." />
              </div>
            )}

            {/* ═══ Communication ═══ */}
            {quickrefTab === 'comm' && (
              <div>
                <SectionHeader kanji="話" title="Giao tiếp & Văn hóa" subtitle="Chào hỏi, mẫu câu, từ để hỏi, màu sắc, phương hướng, gia đình" />

                <Collapsible title="挨拶 — Chào hỏi & Thường ngày" defaultOpen={true}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {GREETINGS.map((item, i) => (
                      <div key={i} className="bg-white border border-stone-200 rounded-lg px-4 py-3 hover:border-rose-300 hover:shadow-sm transition-all">
                        <div className="font-serif-jp text-stone-800 text-lg flex items-center gap-1.5">{item.jp} <SpeakBtn text={item.jp} /></div>
                        <div className="text-xs text-stone-400 font-mono">{item.reading}</div>
                        <div className="text-sm text-stone-600 mt-1">{item.meaning}</div>
                      </div>
                    ))}
                  </div>
                </Collapsible>

                <Collapsible title="定型表現 — Mẫu câu thường dùng" subtitle="Các mẫu câu hay gặp trong sinh hoạt, mua sắm, công việc">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SET_PHRASES.map((item, i) => (
                      <div key={i} className="bg-white border border-stone-200 rounded-lg px-4 py-3 hover:border-rose-300 hover:shadow-sm transition-all">
                        <div className="font-serif-jp text-stone-800 flex items-center gap-1.5">{item.jp} <SpeakBtn text={item.jp} /></div>
                        <div className="text-xs text-stone-400 font-mono">{item.reading}</div>
                        <div className="text-sm text-stone-600 mt-1">{item.meaning}</div>
                      </div>
                    ))}
                  </div>
                </Collapsible>

                <QuickRefTable title="疑問詞 — Từ để hỏi" data={QUESTION_WORDS} subtitle="何, だれ, いつ, どこ, なぜ..." />
                <QuickRefTable title="色 — Màu sắc" data={COLORS} />
                <QuickRefTable title="方向 — Phương hướng & Vị trí" data={DIRECTIONS} subtitle="Bắc/Nam/Đông/Tây, Trên/Dưới, Trước/Sau..." />

                <FamilyTable />
              </div>
            )}

            {/* ═══ Grammar ═══ */}
            {quickrefTab === 'grammar' && (
              <div>
                <SectionHeader kanji="文" title="Ngữ pháp cô đọng" subtitle="Trợ từ, chia động từ, te-form, tính từ, kính ngữ, cặp tự/tha, mẫu câu" />

                <ParticlesTable />
                <VerbConjugationTable />
                <VerbFormsOverview />
                <TeFormTable />
                <AdjConjugationTable />
                <TransitivityTable />
                <SentenceEndingsTable />
                <KeigoTable />
              </div>
            )}

            {/* ═══ Vocabulary ═══ */}
            {quickrefTab === 'vocab' && (
              <div>
                <SectionHeader kanji="語" title="Từ vựng theo chủ đề" subtitle="Bộ phận cơ thể, thời tiết, động vật, thức ăn, quần áo, nghề nghiệp, onomatopoeia" />

                <QuickRefTable title="体 — Bộ phận cơ thể" data={BODY_PARTS} subtitle="Từ vựng về các bộ phận trên cơ thể người" />
                <QuickRefTable title="季節・天気 — Mùa & Thời tiết" data={WEATHER_SEASONS} subtitle="4 mùa, các hiện tượng thời tiết, tính từ mô tả" />
                <QuickRefTable title="動物 — Động vật" data={ANIMALS} subtitle="Từ vựng về các loài động vật phổ biến" />
                <QuickRefTable title="食べ物・飲み物 — Thức ăn & Đồ uống" data={FOOD_DRINK} subtitle="Từ vựng ẩm thực cơ bản, gia vị, đồ uống" />
                <QuickRefTable title="服装 — Quần áo & Phụ kiện" data={CLOTHING} subtitle="Từ vựng trang phục hàng ngày + kimono/yukata" />
                <QuickRefTable title="職業 — Nghề nghiệp" data={OCCUPATIONS} subtitle="Các nghề phổ biến trong tiếng Nhật" />

                <Collapsible title="擬音語・擬態語 — Onomatopoeia" subtitle="Từ tượng thanh / tượng hình — đặc trưng riêng của tiếng Nhật" defaultOpen={true}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {ONOMATOPOEIA.map((item, i) => (
                      <div key={i} className="bg-white border border-stone-200 rounded-lg px-4 py-3 hover:border-rose-300 hover:shadow-sm transition-all">
                        <div className="font-serif-jp text-stone-800 text-lg flex items-center gap-1.5">{item.jp} <SpeakBtn text={item.jp} /></div>
                        <div className="text-xs text-stone-400 font-mono">{item.reading}</div>
                        <div className="text-sm text-stone-600 mt-1">{item.meaning}</div>
                      </div>
                    ))}
                  </div>
                </Collapsible>

                <QuickRefTable title="副詞 — Phó từ thường dùng" data={COMMON_ADVERBS} subtitle="とても, ちょっと, 全然, たぶん, やっぱり..." />
                <QuickRefTable title="接続詞 — Liên từ" data={CONJUNCTIONS} subtitle="Nối câu: そして, でも, だから, つまり..." />
              </div>
            )}

            {/* ═══ Practical ═══ */}
            {quickrefTab === 'practical' && (
              <div>
                <SectionHeader kanji="用" title="Ứng dụng thực tế" subtitle="Mẫu câu theo tình huống thực tế tại Nhật Bản" />

                <SituationalSection />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="py-10 text-center text-stone-400 text-sm font-serif italic border-t border-stone-200/50">
        Created by FIRaci — <Link to="/" className="text-rose-400 hover:underline">Quay lại phân tích</Link>
        {' · '}
        <Link to="/grammar" className="text-rose-400 hover:underline">Ngữ pháp</Link>
      </footer>
    </div>
  );
};

export default ReferencePage;
