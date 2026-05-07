import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import SettingsPanel from '../components/SettingsPanel';
import TutorialPanel from '../components/TutorialPanel';
import { useSettings } from '../contexts/SettingsContext';
import {
  GrammarEntry,
  GrammarLevel,
  GrammarCategory,
  GRAMMAR_BY_LEVEL,
  GRAMMAR_BY_CATEGORY,
  GRAMMAR_LEVEL_INFO,
  GRAMMAR_CATEGORY_INFO,
} from '../data/grammarData';
import { DOJG_ENTRIES, HJGP_ENTRIES, DOJP_ENTRIES } from '../data/grammarCrossRef';
import type { DOJGEntry, HJGPEntry, DOJPEntry } from '../data/grammarCrossRef';
import { getDojgViMeaning } from '../data/grammarCrossRefVi';
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
// Grammar Cross-Reference lookup
// ============================================================================

interface CrossRefResult {
  dojg: DOJGEntry[];
  hjgp: HJGPEntry[];
  dojp: DOJPEntry[];
}

// Build fast lookup for cross-references by concept
const DOJG_MAP = new Map<string, DOJGEntry[]>();
for (const e of DOJG_ENTRIES) {
  const key = e.concept.replace(/[～・()（）\s]/g, '');
  const arr = DOJG_MAP.get(key) ?? [];
  arr.push(e);
  DOJG_MAP.set(key, arr);
}
const HJGP_MAP = new Map<string, HJGPEntry[]>();
for (const e of HJGP_ENTRIES) {
  const key = e.concept.replace(/[～・()（）\s]/g, '');
  const arr = HJGP_MAP.get(key) ?? [];
  arr.push(e);
  HJGP_MAP.set(key, arr);
}
const DOJP_MAP = new Map<string, DOJPEntry[]>();
for (const e of DOJP_ENTRIES) {
  const key = e.concept.replace(/[～・()（）\s]/g, '');
  const arr = DOJP_MAP.get(key) ?? [];
  arr.push(e);
  DOJP_MAP.set(key, arr);
}

function findCrossRefs(pattern: string): CrossRefResult {
  // Normalize pattern: remove ～, spaces, parenthetical reading
  const normalized = pattern.replace(/[～・()（）\s]/g, '');
  // Try exact match first, then check if pattern starts with any concept
  const dojg = DOJG_MAP.get(normalized) ?? [];
  const hjgp = HJGP_MAP.get(normalized) ?? [];
  const dojp = DOJP_MAP.get(normalized) ?? [];

  // If no exact match, try partial matches
  if (dojg.length === 0 && hjgp.length === 0 && dojp.length === 0) {
    const result: CrossRefResult = { dojg: [], hjgp: [], dojp: [] };
    for (const [key, entries] of DOJG_MAP) {
      if (normalized.includes(key) || key.includes(normalized)) {
        result.dojg.push(...entries);
      }
    }
    for (const [key, entries] of HJGP_MAP) {
      if (normalized.includes(key) || key.includes(normalized)) {
        result.hjgp.push(...entries);
      }
    }
    for (const [key, entries] of DOJP_MAP) {
      if (normalized.includes(key) || key.includes(normalized)) {
        result.dojp.push(...entries);
      }
    }
    // Limit partial results
    result.dojg = result.dojg.slice(0, 3);
    result.hjgp = result.hjgp.slice(0, 3);
    result.dojp = result.dojp.slice(0, 3);
    return result;
  }

  return { dojg, hjgp, dojp };
}

// ============================================================================
// Constants
// ============================================================================

const LEVELS: GrammarLevel[] = ['ALL', 'N5', 'N4', 'N3', 'N2', 'N1'];
const ITEMS_PER_PAGE = 30;
const BOOKMARK_KEY = 'arukas-grammar-bookmarks';

// Category groups for sidebar/filter
const CATEGORY_GROUPS: { label: string; categories: GrammarCategory[] }[] = [
  {
    label: 'Cơ bản',
    categories: ['particles', 'tense', 'potential', 'conditionals'],
  },
  {
    label: 'Giao tiếp',
    categories: ['giving_passive', 'cause_reason', 'conjecture', 'advice_request'],
  },
  {
    label: 'Nâng cao',
    categories: ['comparison', 'time', 'contrast', 'scope', 'relationship', 'keigo'],
  },
  {
    label: 'Chuyên sâu',
    categories: ['advanced', 'parallel', 'compound_particles', 'expanded_conditionals', 'emphasis', 'opposition', 'purpose_result', 'classical'],
  },
  {
    label: 'Từ điển',
    categories: ['dict_ref' as GrammarCategory],
  },
];

// ============================================================================
// Bookmark helpers
// ============================================================================

function loadBookmarks(): Set<string> {
  try {
    const raw = localStorage.getItem(BOOKMARK_KEY);
    if (raw) return new Set(JSON.parse(raw) as string[]);
  } catch { /* ignore */ }
  return new Set();
}

function saveBookmarks(ids: Set<string>) {
  localStorage.setItem(BOOKMARK_KEY, JSON.stringify([...ids]));
}

// ============================================================================
// Sub-components
// ============================================================================

// Helper: extract romaji from pattern like "～は (wa)" → { jp: "～は", romaji: "wa" }
function splitPatternRomaji(pattern: string): { jp: string; romaji: string } {
  const m = pattern.match(/^(.+?)\s*[（(]([^)）]+)[)）]\s*$/);
  if (m) return { jp: m[1].trim(), romaji: m[2] };
  return { jp: pattern, romaji: '' };
}

const GrammarCard: React.FC<{
  entry: GrammarEntry;
  isExpanded: boolean;
  onToggle: () => void;
  isBookmarked: boolean;
  onBookmark: () => void;
}> = React.memo(({ entry, isExpanded, onToggle, isBookmarked, onBookmark }) => {
  // Derive JLPT badge color
  const jlptColor: Record<string, string> = {
    N5: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    N4: 'bg-sky-50 text-sky-600 border-sky-200',
    N3: 'bg-violet-50 text-violet-600 border-violet-200',
    N2: 'bg-amber-50 text-amber-600 border-amber-200',
    N1: 'bg-rose-50 text-rose-600 border-rose-200',
  };

  return (
    <div className={`bg-white rounded-xl border transition-all duration-200 ${isExpanded ? 'border-rose-300 shadow-lg ring-1 ring-rose-100' : 'border-stone-200 hover:border-rose-200 hover:shadow-md'}`}>
      {/* Header row */}
      <div className="flex items-center gap-3 px-4 py-3 cursor-pointer select-none" onClick={onToggle}>
        {/* Pattern */}
        {(() => {
          const { jp, romaji } = splitPatternRomaji(entry.pattern);
          return (
            <div className="flex-shrink-0 min-w-0">
              <div className="text-xl font-serif-jp text-stone-800 leading-tight font-bold flex items-center gap-1.5">{jp} <SpeakBtn text={jp} size="md" /></div>
              {romaji && <div className="text-[11px] text-stone-400 font-mono">{romaji}</div>}
            </div>
          );
        })()}

        {/* Meaning */}
        <div className="flex-1 min-w-0 ml-2">
          <div className="text-sm font-medium text-stone-700 truncate">{entry.meaning}</div>
          <div className="text-[11px] text-stone-400 truncate">{entry.category}</div>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${jlptColor[entry.jlpt] || 'bg-stone-50 text-stone-500 border-stone-200'}`}>{entry.jlpt}</span>
        </div>

        {/* Bookmark */}
        <button
          onClick={e => { e.stopPropagation(); onBookmark(); }}
          className={`flex-shrink-0 p-1.5 rounded-lg transition-all ${isBookmarked ? 'text-amber-500 bg-amber-50 hover:bg-amber-100' : 'text-stone-300 hover:text-amber-400 hover:bg-stone-50'}`}
          title={isBookmarked ? 'Bỏ lưu' : 'Lưu mẫu này'}
        >
          <svg className="w-4 h-4" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>

        {/* Expand chevron */}
        <svg className={`w-4 h-4 text-stone-400 transition-transform flex-shrink-0 ${isExpanded ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Expanded details */}
      {isExpanded && (
        <div className="border-t border-stone-100 px-4 py-4 space-y-3 animate-fade-in-up">
          {/* Full meaning */}
          <div className="text-sm text-stone-700">
            <span className="font-bold text-stone-500">Nghĩa: </span>{entry.meaning}
          </div>

          {/* Category */}
          <div className="text-xs text-stone-500">
            <span className="font-bold">Nhóm: </span>
            <span className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded-full">{entry.category}</span>
          </div>

          {/* Examples */}
          {entry.examples && entry.examples.length > 0 && (
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Ví dụ</span>
              <div className="mt-1 space-y-2">
                {entry.examples.map((ex, i) => (
                  <div key={i} className="bg-stone-50 rounded-lg px-3 py-2 border border-stone-100">
                    <div className="text-sm font-serif-jp text-stone-800 flex items-center gap-1.5">{ex.jp} <SpeakBtn text={ex.jp} /></div>
                    <div className="text-xs text-stone-400 font-serif-jp mt-0.5">{ex.reading}</div>
                    <div className="text-xs text-stone-600 mt-0.5">{ex.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Note */}
          {entry.note && (
            <div className="text-xs text-stone-500 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 italic">
              {entry.note}
            </div>
          )}

          {/* Grammar Cross-References */}
          {(() => {
            const refs = findCrossRefs(entry.pattern);
            const hasRefs = refs.dojg.length > 0 || refs.hjgp.length > 0 || refs.dojp.length > 0;
            if (!hasRefs) return null;
            return (
              <div className="mt-2">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">Tham chiếu từ điển</span>
                <div className="mt-1 space-y-1.5">
                  {refs.dojg.map((d, i) => (
                    <div key={`dojg-${i}`} className="flex items-start gap-2 text-xs bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5">
                      <span className="font-bold text-blue-600 flex-shrink-0 min-w-[38px]">DOJG</span>
                      <span className="text-blue-500 flex-shrink-0">{d.volume === 'basic' ? 'B' : d.volume === 'intermediate' ? 'I' : 'A'} p.{d.page.replace(/^[BIA]\.\s*/, '')}</span>
                      {d.english && <span className="text-stone-600 italic">— {getDojgViMeaning(d.english)}</span>}
                    </div>
                  ))}
                  {refs.hjgp.map((h, i) => (
                    <div key={`hjgp-${i}`} className="flex items-start gap-2 text-xs bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-1.5">
                      <span className="font-bold text-emerald-600 flex-shrink-0 min-w-[38px]">HJGP</span>
                      <span className="text-emerald-500 flex-shrink-0">p.{h.page}</span>
                      {h.pageCount && <span className="text-stone-500">({h.pageCount}p)</span>}
                    </div>
                  ))}
                  {refs.dojp.map((p, i) => (
                    <div key={`dojp-${i}`} className="flex items-start gap-2 text-xs bg-violet-50 border border-violet-100 rounded-lg px-3 py-1.5">
                      <span className="font-bold text-violet-600 flex-shrink-0 min-w-[38px]">DOJP</span>
                      <span className="text-violet-500 flex-shrink-0">p.{p.page}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
});

// ============================================================================
// Main GrammarPage
// ============================================================================

const GrammarPage: React.FC = () => {
  const { openSettings } = useSettings();
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);
  // ── State ──
  const [level, setLevel] = useState<GrammarLevel>('ALL');
  const [category, setCategory] = useState<GrammarCategory>('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const searchTimerRef = useRef<ReturnType<typeof setTimeout>>();
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);
  const [page, setPage] = useState(1);
  const [bookmarks, setBookmarks] = useState<Set<string>>(loadBookmarks);
  const [showCategorySidebar, setShowCategorySidebar] = useState(false);

  // Persist bookmarks
  useEffect(() => { saveBookmarks(bookmarks); }, [bookmarks]);

  // Reset page on filter change
  // Debounce search input by 200ms
  useEffect(() => {
    if (searchTimerRef.current) clearTimeout(searchTimerRef.current);
    searchTimerRef.current = setTimeout(() => setDebouncedSearch(search), 200);
    return () => { if (searchTimerRef.current) clearTimeout(searchTimerRef.current); };
  }, [search]);

  useEffect(() => { setPage(1); }, [level, category, debouncedSearch, showBookmarksOnly]);

  const toggleBookmark = useCallback((id: string) => {
    setBookmarks(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  }, []);

  // ── Filtered data ──
  const filtered = useMemo(() => {
    // Start from level or category depending on which is active
    let data: GrammarEntry[];
    if (category !== 'ALL') {
      data = GRAMMAR_BY_CATEGORY[category];
      // Also filter by level if both are set
      if (level !== 'ALL') {
        data = data.filter(g => g.jlpt === level);
      }
    } else {
      data = GRAMMAR_BY_LEVEL[level];
    }

    if (showBookmarksOnly) {
      data = data.filter(g => bookmarks.has(g.id));
    }

    if (debouncedSearch.trim()) {
      const q = debouncedSearch.trim().toLowerCase();
      data = data.filter(g =>
        g.pattern.toLowerCase().includes(q) ||
        g.meaning.toLowerCase().includes(q) ||
        g.category.toLowerCase().includes(q) ||
        (g.examples && g.examples.some(ex =>
          ex.jp.includes(q) || ex.meaning.toLowerCase().includes(q)
        ))
      );
    }

    return data;
  }, [level, category, debouncedSearch, showBookmarksOnly, bookmarks]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const pageData = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const clearFilters = () => {
    setSearch('');
    setCategory('ALL');
    setLevel('ALL');
    setShowBookmarksOnly(false);
  };

  // ── Render ──
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
            <span className="text-sm font-medium text-stone-500">Ngữ pháp</span>
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
              to="/reference"
              className="flex items-center gap-2 text-sm text-stone-500 hover:text-rose-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-rose-50"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Tham khảo
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
      <div className="max-w-6xl mx-auto px-6 mt-10 mb-6 text-center">
        <h2 className="text-3xl font-serif-jp font-light text-stone-800 mb-2">Ngữ pháp tiếng Nhật</h2>
        <p className="text-stone-500 font-light">
          {GRAMMAR_LEVEL_INFO[level].subtitle} — <span className="font-medium text-rose-500">{filtered.length}</span> mẫu
        </p>
      </div>

      {/* Level tabs */}
      <div className="max-w-6xl mx-auto px-6 mb-4">
        <div className="flex flex-wrap gap-1 p-1 bg-stone-100 rounded-xl w-fit mx-auto items-center">
          {LEVELS.map(lv => (
            <button
              key={lv}
              onClick={() => setLevel(lv)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                level === lv
                  ? 'bg-white text-stone-800 shadow-sm border border-stone-200'
                  : 'text-stone-600 hover:text-stone-800 hover:bg-stone-50'
              }`}
            >
              {lv === 'ALL' ? `Tất cả (${GRAMMAR_BY_LEVEL[lv].length})` : `${lv} (${GRAMMAR_BY_LEVEL[lv].length})`}
            </button>
          ))}
        </div>
      </div>

      {/* Category filter + Search */}
      <div className="max-w-6xl mx-auto px-6 mb-6">
        <div className="bg-white rounded-xl border border-stone-200 p-4 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Tìm mẫu ngữ pháp... (pattern, nghĩa, ví dụ)"
                className="w-full pl-10 pr-8 py-2 text-sm border border-stone-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 text-lg">×</button>
              )}
            </div>

            {/* Category toggle button */}
            <button
                onClick={() => setShowCategorySidebar(v => !v)}
                className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg border transition-all whitespace-nowrap ${
                  category !== 'ALL'
                    ? 'bg-violet-50 text-violet-600 border-violet-200'
                    : 'bg-white text-stone-500 border-stone-200 hover:border-violet-200 hover:text-violet-500'
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                {category !== 'ALL' ? GRAMMAR_CATEGORY_INFO[category].title : 'Nhóm ngữ pháp'}
            </button>

            {/* Bookmark filter */}
            <button
                onClick={() => setShowBookmarksOnly(v => !v)}
                className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg border transition-all whitespace-nowrap ${
                  showBookmarksOnly
                    ? 'bg-amber-50 text-amber-600 border-amber-200'
                    : 'bg-white text-stone-500 border-stone-200 hover:border-amber-200 hover:text-amber-500'
                }`}
              >
                <svg className="w-4 h-4" fill={showBookmarksOnly ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
                Đã lưu ({bookmarks.size})
            </button>
          </div>

          {/* Category sidebar (collapsible) */}
          {showCategorySidebar && (
            <div className="mt-3 pt-3 border-t border-stone-100 animate-fade-in-up">
              <div className="flex flex-wrap gap-4">
                {/* ALL button */}
                <button
                  onClick={() => { setCategory('ALL'); setShowCategorySidebar(false); }}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    category === 'ALL'
                      ? 'bg-rose-500 text-white border-rose-500'
                      : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-rose-300 hover:text-rose-500'
                  }`}
                >
                  Tất cả ({GRAMMAR_BY_CATEGORY.ALL.length})
                </button>
              </div>
              {CATEGORY_GROUPS.map(group => (
                <div key={group.label} className="mt-3">
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{group.label}</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {group.categories.map(cat => {
                      const info = GRAMMAR_CATEGORY_INFO[cat];
                      return (
                        <button
                          key={cat}
                          onClick={() => { setCategory(cat); setShowCategorySidebar(false); }}
                          className={`text-xs px-2.5 py-1.5 rounded-lg border transition-all ${
                            category === cat
                              ? 'bg-violet-500 text-white border-violet-500'
                              : 'bg-stone-50 text-stone-600 border-stone-200 hover:border-violet-300 hover:text-violet-500'
                          }`}
                        >
                          {info.icon} {info.title} ({info.count})
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Active filters summary */}
          {(search || category !== 'ALL' || showBookmarksOnly) && (
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-stone-100">
              <span className="text-xs text-stone-400">Bộ lọc:</span>
              {search && <span className="text-xs bg-sky-50 text-sky-600 px-2 py-0.5 rounded-full border border-sky-100">"{search}"</span>}
              {category !== 'ALL' && (
                <span className="text-xs bg-violet-50 text-violet-600 px-2 py-0.5 rounded-full border border-violet-100">
                  {GRAMMAR_CATEGORY_INFO[category].icon} {GRAMMAR_CATEGORY_INFO[category].title}
                </span>
              )}
              {showBookmarksOnly && <span className="text-xs bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full border border-amber-100">Đã lưu</span>}
              <button onClick={clearFilters} className="text-xs text-rose-400 hover:text-rose-600 ml-auto">Xóa bộ lọc</button>
            </div>
          )}
        </div>
      </div>

      {/* Content: Grammar cards */}
      <div className="max-w-6xl mx-auto px-6 pb-6">
        {pageData.length > 0 ? (
          <div className="space-y-2">
            {pageData.map(entry => (
              <GrammarCard
                key={entry.id}
                entry={entry}
                isExpanded={expandedId === entry.id}
                onToggle={() => setExpandedId(prev => prev === entry.id ? null : entry.id)}
                isBookmarked={bookmarks.has(entry.id)}
                onBookmark={() => toggleBookmark(entry.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-4xl mb-4 text-stone-300">—</div>
            <p className="text-stone-500 mb-2">Không tìm thấy mẫu ngữ pháp phù hợp.</p>
            <button onClick={clearFilters} className="text-sm text-rose-500 hover:underline">Xóa bộ lọc</button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="max-w-6xl mx-auto px-6 pb-10">
          <div className="flex items-center justify-center gap-2">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="p-2 rounded-lg border border-stone-200 text-stone-500 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
              let pageNum: number;
              if (totalPages <= 7) {
                pageNum = i + 1;
              } else if (page <= 4) {
                pageNum = i + 1;
              } else if (page >= totalPages - 3) {
                pageNum = totalPages - 6 + i;
              } else {
                pageNum = page - 3 + i;
              }
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition-all ${
                    page === pageNum
                      ? 'bg-rose-500 text-white shadow-sm'
                      : 'text-stone-500 hover:bg-stone-100 border border-stone-200'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            <button
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="p-2 rounded-lg border border-stone-200 text-stone-500 hover:bg-stone-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
            <span className="text-xs text-stone-400 ml-2">Trang {page}/{totalPages}</span>
          </div>
        </div>
      )}

      {/* Stats bar */}
      <div className="max-w-6xl mx-auto px-6 pb-8">
        <div className="bg-stone-100/50 rounded-xl border border-stone-200/50 p-4 flex flex-wrap gap-4 justify-center text-xs text-stone-500">
          <span>N5: <span className="font-bold text-stone-700">{GRAMMAR_BY_LEVEL.N5.length}</span></span>
          <span className="text-stone-300">|</span>
          <span>N4: <span className="font-bold text-stone-700">{GRAMMAR_BY_LEVEL.N4.length}</span></span>
          <span className="text-stone-300">|</span>
          <span>N3: <span className="font-bold text-stone-700">{GRAMMAR_BY_LEVEL.N3.length}</span></span>
          <span className="text-stone-300">|</span>
          <span>N2: <span className="font-bold text-stone-700">{GRAMMAR_BY_LEVEL.N2.length}</span></span>
          <span className="text-stone-300">|</span>
          <span>N1: <span className="font-bold text-stone-700">{GRAMMAR_BY_LEVEL.N1.length}</span></span>
          <span className="text-stone-300">|</span>
          <span>Tổng: <span className="font-bold text-rose-500">{GRAMMAR_BY_LEVEL.ALL.length}</span> mẫu</span>
          <span className="text-stone-300">|</span>
          <span>Lưu: <span className="font-bold text-amber-500">{bookmarks.size}</span></span>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 text-center text-stone-400 text-sm font-serif italic border-t border-stone-200/50">
        Created by FIRaci —{' '}
        <Link to="/" className="text-rose-400 hover:underline">Phân tích</Link>
        {' · '}
        <Link to="/reference" className="text-rose-400 hover:underline">Tham khảo</Link>
        {' · '}
        <Link to="/dictionary" className="text-rose-400 hover:underline">Từ điển</Link>
      </footer>
    </div>
  );
};

export default GrammarPage;
