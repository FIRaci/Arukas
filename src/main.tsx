import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import { SettingsProvider } from './contexts/SettingsContext';
import './index.css';

const ReferencePage = lazy(() => import('./pages/ReferencePage'));
const DictionaryPage = lazy(() => import('./pages/DictionaryPage'));
const GrammarPage = lazy(() => import('./pages/GrammarPage'));
const MangaReaderPage = lazy(() => import('./pages/MangaReaderPage'));
const AnimePlayerPage = lazy(() => import('./pages/AnimePlayerPage'));
const GrammarDictPage = lazy(() => import('./pages/GrammarDictPage'));

const RouteLoadingFallback: React.FC = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'grid',
      placeItems: 'center',
      background: '#fafaf5',
      color: '#57534e',
      fontFamily: 'ui-sans-serif, system-ui, sans-serif',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <span
        style={{
          width: 10,
          height: 10,
          borderRadius: '999px',
          background: '#fb7185',
          animation: 'pulse 1.2s ease-in-out infinite',
        }}
      />
      <span style={{ fontSize: 14, fontWeight: 500 }}>Đang tải trang...</span>
    </div>
  </div>
);

function suspenseWrap(node: React.ReactNode) {
  return <Suspense fallback={<RouteLoadingFallback />}>{node}</Suspense>;
}

// ── Error Boundary to catch UI crashes ──
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[ErrorBoundary] Caught:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 40, fontFamily: 'sans-serif', maxWidth: 600, margin: '0 auto' }}>
          <h1 style={{ color: '#e11d48' }}>⚠️ ArukaS Error</h1>
          <p>Ứng dụng gặp lỗi:</p>
          <pre style={{ background: '#fef2f2', border: '1px solid #fca5a5', padding: 16, borderRadius: 8, overflow: 'auto', fontSize: 13 }}>
            {this.state.error?.message}
            {'\n\n'}
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <SettingsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/reference" element={suspenseWrap(<ReferencePage />)} />
            <Route path="/dictionary" element={suspenseWrap(<DictionaryPage />)} />
            <Route path="/grammar" element={suspenseWrap(<GrammarPage />)} />
            <Route path="/manga" element={suspenseWrap(<MangaReaderPage />)} />
            <Route path="/anime" element={suspenseWrap(<AnimePlayerPage />)} />
            <Route path="/grammar-dict" element={suspenseWrap(<GrammarDictPage />)} />
          </Routes>
        </BrowserRouter>
      </SettingsProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
