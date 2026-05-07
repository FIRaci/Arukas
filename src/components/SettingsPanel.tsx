import React from 'react';
import {
  useSettings,
  ThemeMode,
  FONT_VI_OPTIONS,
  FONT_JP_OPTIONS,
  FONT_SIZE_OPTIONS,
} from '../contexts/SettingsContext';

// ============================================================
//  SETTINGS PANEL (slide-out from right)
// ============================================================
const SettingsPanel: React.FC = () => {
  const { settings, updateSettings, isSettingsOpen, closeSettings } = useSettings();

  const themes: { value: ThemeMode; label: string; sublabel: string; icon: React.ReactNode; colors: string }[] = [
    {
      value: 'sakura',
      label: 'Sakura',
      sublabel: 'Hồng ấm áp',
      icon: <span className="text-lg">🌸</span>,
      colors: 'from-rose-100 to-orange-50 border-rose-300',
    },
    {
      value: 'light',
      label: 'Sáng',
      sublabel: 'Trắng tinh khiết',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" strokeWidth="2"/>
          <path strokeLinecap="round" strokeWidth="2" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
      ),
      colors: 'from-slate-100 to-white border-slate-300',
    },
    {
      value: 'dark',
      label: 'Tối',
      sublabel: 'Dịu nhẹ cho mắt',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
        </svg>
      ),
      colors: 'from-slate-700 to-slate-900 border-slate-600',
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {isSettingsOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          onClick={closeSettings}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[420px] z-[70] transform transition-transform duration-300 ease-out
          ${isSettingsOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{
          backgroundColor: 'var(--sp-bg)',
          borderLeft: '1px solid var(--sp-border)',
          boxShadow: isSettingsOpen ? '-10px 0 40px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'var(--sp-border)' }}>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" style={{ color: 'var(--sp-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <circle cx="12" cy="12" r="3" strokeWidth="2" />
              </svg>
              <h2 className="text-lg font-bold" style={{ color: 'var(--sp-text)' }}>Cài đặt</h2>
            </div>
            <button
              onClick={closeSettings}
              className="p-2 rounded-full transition-colors"
              style={{ color: 'var(--sp-text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--sp-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label="Đóng cài đặt"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 px-6 py-6 space-y-8">

            {/* ── THEME ── */}
            <section>
              <SectionTitle icon="" title="Giao diện" />
              <div className="grid grid-cols-3 gap-3 mt-3">
                {themes.map(t => (
                  <button
                    key={t.value}
                    onClick={() => updateSettings({ theme: t.value })}
                    className={`relative p-3 rounded-xl border-2 transition-all text-center group
                      ${settings.theme === t.value ? 'ring-2 ring-offset-1 scale-[1.02]' : 'opacity-70 hover:opacity-100'}
                    `}
                    style={{
                      borderColor: settings.theme === t.value ? 'var(--sp-accent)' : 'var(--sp-border)',
                      backgroundColor: 'var(--sp-card)',
                    }}
                  >
                    <div className="mb-1">{t.icon}</div>
                    <div className="text-xs font-bold" style={{ color: 'var(--sp-text)' }}>{t.label}</div>
                    <div className="text-[10px]" style={{ color: 'var(--sp-text-muted)' }}>{t.sublabel}</div>
                    {settings.theme === t.value && (
                      <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--sp-accent)' }}>
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </section>

            {/* ── FONT SIZE ── */}
            <section>
              <SectionTitle icon="" title="Cỡ chữ" />
              <div className="grid grid-cols-4 gap-2 mt-3">
                {FONT_SIZE_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => updateSettings({ fontSize: opt.value })}
                    className={`py-2 px-2 rounded-lg border text-center transition-all text-sm font-medium
                      ${settings.fontSize === opt.value ? 'ring-1' : 'opacity-70 hover:opacity-100'}
                    `}
                    style={{
                      borderColor: settings.fontSize === opt.value ? 'var(--sp-accent)' : 'var(--sp-border)',
                      color: settings.fontSize === opt.value ? 'var(--sp-accent)' : 'var(--sp-text-muted)',
                      backgroundColor: settings.fontSize === opt.value ? 'var(--sp-accent-bg)' : 'var(--sp-card)',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] mt-2" style={{ color: 'var(--sp-text-muted)' }}>
                Hiện tại: {FONT_SIZE_OPTIONS.find(o => o.value === settings.fontSize)?.px}
              </p>
            </section>

            {/* ── FONT VIETNAMESE ── */}
            <section>
              <SectionTitle icon="" title="Font tiếng Việt" />
              <div className="grid grid-cols-2 gap-2 mt-3">
                {FONT_VI_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => updateSettings({ fontVi: opt.value })}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all
                      ${settings.fontVi === opt.value ? 'ring-1' : 'opacity-70 hover:opacity-100'}
                    `}
                    style={{
                      fontFamily: `'${opt.value}', sans-serif`,
                      borderColor: settings.fontVi === opt.value ? 'var(--sp-accent)' : 'var(--sp-border)',
                      color: settings.fontVi === opt.value ? 'var(--sp-accent)' : 'var(--sp-text)',
                      backgroundColor: settings.fontVi === opt.value ? 'var(--sp-accent-bg)' : 'var(--sp-card)',
                    }}
                  >
                    <span className="text-sm font-medium">{opt.label}</span>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--sp-text-muted)' }}>Xin chào thế giới</div>
                  </button>
                ))}
              </div>
            </section>

            {/* ── FONT JAPANESE ── */}
            <section>
              <SectionTitle icon="" title="Font tiếng Nhật" />
              <div className="grid grid-cols-2 gap-2 mt-3">
                {FONT_JP_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => updateSettings({ fontJp: opt.value })}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all
                      ${settings.fontJp === opt.value ? 'ring-1' : 'opacity-70 hover:opacity-100'}
                    `}
                    style={{
                      fontFamily: `'${opt.value}', serif`,
                      borderColor: settings.fontJp === opt.value ? 'var(--sp-accent)' : 'var(--sp-border)',
                      color: settings.fontJp === opt.value ? 'var(--sp-accent)' : 'var(--sp-text)',
                      backgroundColor: settings.fontJp === opt.value ? 'var(--sp-accent-bg)' : 'var(--sp-card)',
                    }}
                  >
                    <span className="text-sm font-medium">{opt.label}</span>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--sp-text-muted)' }}>日本語テスト</div>
                  </button>
                ))}
              </div>
            </section>

            {/* ── PETALS TOGGLE ── */}
            <section>
              <SectionTitle icon="🌸" title="Hiệu ứng hoa rơi" />
              <div className="mt-3 flex items-center justify-between p-4 rounded-xl border" style={{ borderColor: 'var(--sp-border)', backgroundColor: 'var(--sp-card)' }}>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--sp-text)' }}>Hoa anh đào rơi</div>
                  <div className="text-[11px]" style={{ color: 'var(--sp-text-muted)' }}>Hiệu ứng cánh hoa rơi trên nền</div>
                </div>
                <button
                  onClick={() => updateSettings({ petalsEnabled: !settings.petalsEnabled })}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${settings.petalsEnabled ? '' : ''}`}
                  style={{
                    backgroundColor: settings.petalsEnabled ? 'var(--sp-accent)' : 'var(--sp-border)',
                  }}
                  aria-label="Chuyển đổi hiệu ứng hoa rơi"
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200"
                    style={{
                      transform: settings.petalsEnabled ? 'translateX(20px)' : 'translateX(0)',
                    }}
                  />
                </button>
              </div>
            </section>

            {/* ── DEFAULT LANGUAGE ── */}
            <section>
              <SectionTitle icon="" title="Ngôn ngữ mặc định" />
              <div className="mt-3 flex items-center justify-between p-4 rounded-xl border" style={{ borderColor: 'var(--sp-border)', backgroundColor: 'var(--sp-card)' }}>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--sp-text)' }}>Hiển tiếng Việt mặc định</div>
                  <div className="text-[11px]" style={{ color: 'var(--sp-text-muted)' }}>Manga / Anime sẽ hiển tiếng Việt thay vì Nhật</div>
                </div>
                <button
                  onClick={() => updateSettings({ defaultShowVietnamese: !settings.defaultShowVietnamese })}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200`}
                  style={{
                    backgroundColor: settings.defaultShowVietnamese ? 'var(--sp-accent)' : 'var(--sp-border)',
                  }}
                  aria-label="Chuyển đổi ngôn ngữ mặc định"
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200"
                    style={{
                      transform: settings.defaultShowVietnamese ? 'translateX(20px)' : 'translateX(0)',
                    }}
                  />
                </button>
              </div>
            </section>

            {/* ── HIDE ANATOMY TOKENS ── */}
            <section>
              <SectionTitle icon="" title="Phân tích từ vựng" />
              <div className="mt-3 flex items-center justify-between p-4 rounded-xl border" style={{ borderColor: 'var(--sp-border)', backgroundColor: 'var(--sp-card)' }}>
                <div>
                  <div className="text-sm font-medium" style={{ color: 'var(--sp-text)' }}>Ẩn bảng token trong mục 2.0</div>
                  <div className="text-[11px]" style={{ color: 'var(--sp-text-muted)' }}>Chỉ hiện ngữ pháp, ẩn bảng phân tích từng từ</div>
                </div>
                <button
                  onClick={() => updateSettings({ hideAnatomyTokens: !settings.hideAnatomyTokens })}
                  className={`relative w-11 h-6 rounded-full transition-colors duration-200`}
                  style={{
                    backgroundColor: settings.hideAnatomyTokens ? 'var(--sp-accent)' : 'var(--sp-border)',
                  }}
                  aria-label="Ẩn bảng phân tích từ vựng"
                >
                  <span
                    className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-md transition-transform duration-200"
                    style={{
                      transform: settings.hideAnatomyTokens ? 'translateX(20px)' : 'translateX(0)',
                    }}
                  />
                </button>
              </div>
            </section>

          </div>
          <div className="px-6 py-4 border-t text-center" style={{ borderColor: 'var(--sp-border)' }}>
            <p className="text-[11px]" style={{ color: 'var(--sp-text-muted)' }}>
              Cài đặt được lưu tự động {'\u00B7'} Đồng bộ khi đăng nhập
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// ── Section title helper ──
const SectionTitle: React.FC<{ icon?: string; title: string }> = ({ icon, title }) => (
  <div className="flex items-center gap-2">
    {icon && <span className="text-sm">{icon}</span>}
    <h3 className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--sp-text-muted)' }}>{title}</h3>
  </div>
);

export default SettingsPanel;
