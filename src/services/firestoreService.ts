import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  writeBatch,
  query,
  orderBy,
} from 'firebase/firestore';
import { db } from './firebase';
import { SavedToken, SavedGrammar, SavedComparison, SavedMangaSession, SavedAnimeSession } from '../types';
import { MOCK_VOCAB_ITEMS, MOCK_GRAMMAR_ITEMS, MOCK_COMPARISONS } from '../data/mockData';

// NFC Normalizer — fixes decomposed Vietnamese diacritics from stored data
function normalizeNFC<T>(obj: T): T {
  if (typeof obj === 'string') return obj.normalize('NFC') as T;
  if (Array.isArray(obj)) return obj.map(normalizeNFC) as T;
  if (obj && typeof obj === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(obj)) out[k] = normalizeNFC(v);
    return out as T;
  }
  return obj;
}

// ============================================================
//  COLLECTION REFERENCES
// ============================================================
const userCol = (uid: string, col: string) =>
  collection(db, 'users', uid, col);

// ============================================================
//  LOAD ALL DATA FOR A USER
// ============================================================
export async function loadUserData(uid: string): Promise<{
  vocab: SavedToken[];
  grammar: SavedGrammar[];
  comparisons: SavedComparison[];
}> {
  const [vocabSnap, grammarSnap, compSnap] = await Promise.all([
    getDocs(query(userCol(uid, 'vocab'), orderBy('savedAt', 'desc'))),
    getDocs(query(userCol(uid, 'grammar'), orderBy('savedAt', 'desc'))),
    getDocs(query(userCol(uid, 'comparisons'), orderBy('savedAt', 'desc'))),
  ]);

  const vocab = vocabSnap.docs.map(d => normalizeNFC(d.data() as SavedToken));
  const grammar = grammarSnap.docs.map(d => normalizeNFC(d.data() as SavedGrammar));
  const comparisons = compSnap.docs.map(d => normalizeNFC(d.data() as SavedComparison));

  return { vocab, grammar, comparisons };
}

// ============================================================
//  SAVE / DELETE – VOCAB
// ============================================================
export async function saveVocabItem(uid: string, item: SavedToken) {
  await setDoc(doc(db, 'users', uid, 'vocab', item.id), JSON.parse(JSON.stringify(item)));
}

export async function deleteVocabItem(uid: string, id: string) {
  await deleteDoc(doc(db, 'users', uid, 'vocab', id));
}

// ============================================================
//  SAVE / DELETE – GRAMMAR
// ============================================================
export async function saveGrammarItem(uid: string, item: SavedGrammar) {
  await setDoc(doc(db, 'users', uid, 'grammar', item.id), JSON.parse(JSON.stringify(item)));
}

export async function deleteGrammarItem(uid: string, id: string) {
  await deleteDoc(doc(db, 'users', uid, 'grammar', id));
}

// ============================================================
//  SAVE / DELETE – COMPARISONS
// ============================================================
export async function saveComparisonItem(uid: string, item: SavedComparison) {
  await setDoc(doc(db, 'users', uid, 'comparisons', item.id), JSON.parse(JSON.stringify(item)));
}

export async function deleteComparisonItem(uid: string, id: string) {
  await deleteDoc(doc(db, 'users', uid, 'comparisons', id));
}

// ============================================================
//  BATCH SAVE ALL (overwrite collection completely)
// ============================================================
export async function batchSaveAll(
  uid: string,
  vocab: SavedToken[],
  grammar: SavedGrammar[],
  comparisons: SavedComparison[]
) {
  // Firestore batches are limited to 500 operations — chunk if needed
  const ops: { ref: ReturnType<typeof doc>; data: unknown }[] = [];
  vocab.forEach(v => ops.push({ ref: doc(db, 'users', uid, 'vocab', v.id), data: JSON.parse(JSON.stringify(v)) }));
  grammar.forEach(g => ops.push({ ref: doc(db, 'users', uid, 'grammar', g.id), data: JSON.parse(JSON.stringify(g)) }));
  comparisons.forEach(c => ops.push({ ref: doc(db, 'users', uid, 'comparisons', c.id), data: JSON.parse(JSON.stringify(c)) }));

  const BATCH_LIMIT = 499;
  for (let i = 0; i < ops.length; i += BATCH_LIMIT) {
    const batch = writeBatch(db);
    const chunk = ops.slice(i, i + BATCH_LIMIT);
    chunk.forEach(op => batch.set(op.ref, op.data as Record<string, unknown>));
    await batch.commit();
  }
}

// ============================================================
//  SEED MOCK DATA (first‑time user)
// ============================================================
export async function seedMockData(uid: string) {
  await batchSaveAll(uid, MOCK_VOCAB_ITEMS, MOCK_GRAMMAR_ITEMS, MOCK_COMPARISONS);
}

// ============================================================
//  EXPORT / IMPORT JSON (backup)
// ============================================================
export function exportToJSON(
  vocab: SavedToken[],
  grammar: SavedGrammar[],
  comparisons: SavedComparison[]
) {
  const data = { vocab, grammar, comparisons, exportedAt: Date.now() };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `arukas-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

export function importFromJSON(
  file: File
): Promise<{ vocab: SavedToken[]; grammar: SavedGrammar[]; comparisons: SavedComparison[] }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = normalizeNFC(JSON.parse((reader.result as string).normalize('NFC')));
        resolve({
          vocab: data.vocab || [],
          grammar: data.grammar || [],
          comparisons: data.comparisons || [],
        });
      } catch (e) {
        reject(e);
      }
    };
    reader.onerror = reject;
    reader.readAsText(file);
  });
}

// ============================================================
//  SAVE / DELETE / LOAD – MANGA SESSIONS
// ============================================================
export async function saveMangaSession(uid: string, session: SavedMangaSession) {
  await setDoc(
    doc(db, 'users', uid, 'manga', session.id),
    JSON.parse(JSON.stringify(session))
  );
}

export async function deleteMangaSession(uid: string, id: string) {
  await deleteDoc(doc(db, 'users', uid, 'manga', id));
}

export async function loadMangaSessions(uid: string): Promise<SavedMangaSession[]> {
  const snap = await getDocs(
    query(userCol(uid, 'manga'), orderBy('savedAt', 'desc'))
  );
  return snap.docs.map(d => normalizeNFC(d.data() as SavedMangaSession));
}

// ============================================================
//  SAVE / DELETE / LOAD – ANIME SESSIONS
// ============================================================
export async function saveAnimeSession(uid: string, session: SavedAnimeSession) {
  await setDoc(
    doc(db, 'users', uid, 'anime', session.id),
    JSON.parse(JSON.stringify(session))
  );
}

export async function deleteAnimeSession(uid: string, id: string) {
  await deleteDoc(doc(db, 'users', uid, 'anime', id));
}

export async function loadAnimeSessions(uid: string): Promise<SavedAnimeSession[]> {
  const snap = await getDocs(
    query(userCol(uid, 'anime'), orderBy('savedAt', 'desc'))
  );
  return snap.docs.map(d => normalizeNFC(d.data() as SavedAnimeSession));
}

