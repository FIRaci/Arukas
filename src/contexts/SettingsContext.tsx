import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

// ============================================================
//  TYPES
// ============================================================
export type ThemeMode = 'sakura' | 'light' | 'dark';
export type FontSizeLevel = 'sm' | 'md' | 'lg' | 'xl';

export interface AppSettings {
  theme: ThemeMode;
  fontSize: FontSizeLevel;
  fontVi: string;
  fontJp: string;
  petalsEnabled: boolean;
  defaultShowVietnamese: boolean;
  hideAnatomyTokens: boolean;
}

export const DEFAULT_SETTINGS: AppSettings = {
  theme: 'sakura',
  fontSize: 'md',
  fontVi: 'Inter',
  fontJp: 'Noto Serif JP',
  petalsEnabled: true,
  defaultShowVietnamese: true,
  hideAnatomyTokens: false,
};

export const FONT_VI_OPTIONS = [
  { label: 'Inter', value: 'Inter' },
  { label: 'Be Vietnam Pro', value: 'Be Vietnam Pro' },
  { label: 'Roboto', value: 'Roboto' },
  { label: 'Noto Sans', value: 'Noto Sans' },
];

export const FONT_JP_OPTIONS = [
  { label: 'Noto Serif JP', value: 'Noto Serif JP' },
  { label: 'Noto Sans JP', value: 'Noto Sans JP' },
  { label: 'M PLUS Rounded 1c', value: 'M PLUS Rounded 1c' },
  { label: 'Sawarabi Mincho', value: 'Sawarabi Mincho' },
];

export const FONT_SIZE_OPTIONS: { label: string; value: FontSizeLevel; px: string }[] = [
  { label: 'Nhỏ', value: 'sm', px: '14px' },
  { label: 'Vừa', value: 'md', px: '16px' },
  { label: 'Lớn', value: 'lg', px: '18px' },
  { label: 'Rất lớn', value: 'xl', px: '20px' },
];

const STORAGE_KEY = 'arukas-settings';

// ============================================================
//  CONTEXT
// ============================================================
interface SettingsContextValue {
  settings: AppSettings;
  updateSettings: (partial: Partial<AppSettings>) => void;
  isSettingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used inside SettingsProvider');
  return ctx;
}

// ============================================================
//  PROVIDER
// ============================================================
export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [firestoreLoaded, setFirestoreLoaded] = useState(false);

  // Load from localStorage initially
  const [settings, setSettings] = useState<AppSettings>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...DEFAULT_SETTINGS, ...parsed };
      }
    } catch { /* ignore */ }
    // Migrate old petals key
    const oldPetals = localStorage.getItem('arukas-petals');
    if (oldPetals !== null) {
      return { ...DEFAULT_SETTINGS, petalsEnabled: oldPetals === 'true' };
    }
    return DEFAULT_SETTINGS;
  });

  // Load from Firestore when user logs in
  useEffect(() => {
    if (!user) {
      setFirestoreLoaded(false);
      return;
    }
    const ref = doc(db, 'users', user.uid, 'meta', 'settings');
    getDoc(ref).then(snap => {
      if (snap.exists()) {
        const data = snap.data() as Partial<AppSettings>;
        setSettings(prev => ({ ...prev, ...data }));
      }
      setFirestoreLoaded(true);
    }).catch((err) => {
      console.error('Failed to load settings from Firestore:', err);
      setFirestoreLoaded(true);
    });
  }, [user]);

  // Apply settings to DOM
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', settings.theme);

    // Font size
    const sizeMap: Record<FontSizeLevel, string> = { sm: '14px', md: '16px', lg: '18px', xl: '20px' };
    root.style.fontSize = sizeMap[settings.fontSize];

    // Font families
    root.style.setProperty('--font-vi', `'${settings.fontVi}', sans-serif`);
    root.style.setProperty('--font-jp', `'${settings.fontJp}', serif`);

    // Apply to body
    document.body.style.fontFamily = `'${settings.fontVi}', sans-serif`;

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    // Remove legacy key
    localStorage.removeItem('arukas-petals');
  }, [settings]);

  // Save to Firestore when settings change (debounced via user check)
  useEffect(() => {
    if (!user || !firestoreLoaded) return;
    const ref = doc(db, 'users', user.uid, 'meta', 'settings');
    const timeout = setTimeout(() => {
      setDoc(ref, settings, { merge: true }).catch(console.error);
    }, 500); // debounce 500ms
    return () => clearTimeout(timeout);
  }, [settings, user, firestoreLoaded]);

  const updateSettings = useCallback((partial: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...partial }));
  }, []);

  return (
    <SettingsContext.Provider value={{
      settings,
      updateSettings,
      isSettingsOpen,
      openSettings: () => setIsSettingsOpen(true),
      closeSettings: () => setIsSettingsOpen(false),
    }}>
      {children}
    </SettingsContext.Provider>
  );
}
