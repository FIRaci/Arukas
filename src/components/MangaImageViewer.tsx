import React, { useRef, useEffect, useCallback, useState } from 'react';
import { MangaBubble, MangaPage, MangaCharacter } from '../types';

// Character color palette
const CHARACTER_COLORS: Record<string, { border: string; bg: string; text: string; ring: string }> = {
  rose:    { border: 'border-rose-400',    bg: 'bg-rose-400/20',    text: 'text-rose-700',    ring: 'ring-rose-400' },
  sky:     { border: 'border-sky-400',     bg: 'bg-sky-400/20',     text: 'text-sky-700',     ring: 'ring-sky-400' },
  emerald: { border: 'border-emerald-400', bg: 'bg-emerald-400/20', text: 'text-emerald-700', ring: 'ring-emerald-400' },
  amber:   { border: 'border-amber-400',   bg: 'bg-amber-400/20',   text: 'text-amber-700',   ring: 'ring-amber-400' },
  purple:  { border: 'border-purple-400',  bg: 'bg-purple-400/20',  text: 'text-purple-700',  ring: 'ring-purple-400' },
  cyan:    { border: 'border-cyan-400',    bg: 'bg-cyan-400/20',    text: 'text-cyan-700',    ring: 'ring-cyan-400' },
  pink:    { border: 'border-pink-400',    bg: 'bg-pink-400/20',    text: 'text-pink-700',    ring: 'ring-pink-400' },
  indigo:  { border: 'border-indigo-400',  bg: 'bg-indigo-400/20',  text: 'text-indigo-700',  ring: 'ring-indigo-400' },
};

const FALLBACK_COLOR = { border: 'border-stone-400', bg: 'bg-stone-400/20', text: 'text-stone-700', ring: 'ring-stone-400' };

function getCharacterColor(characterName: string, characters: MangaCharacter[]) {
  const char = characters.find(c => c.name === characterName);
  if (char && CHARACTER_COLORS[char.color]) return CHARACTER_COLORS[char.color];
  // Assign a deterministic fallback based on name hash
  const hash = characterName.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const keys = Object.keys(CHARACTER_COLORS);
  return CHARACTER_COLORS[keys[hash % keys.length]];
}

interface MangaImageViewerProps {
  pages: MangaPage[];
  bubbles: MangaBubble[];
  characters: MangaCharacter[];
  activeBubbleId: string | null;
  onBubbleClick: (bubbleId: string) => void;
  onBubbleHover: (bubbleId: string | null) => void;
}

const MangaImageViewer: React.FC<MangaImageViewerProps> = ({
  pages, bubbles, characters, activeBubbleId, onBubbleClick, onBubbleHover,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);

  // Scroll to active bubble
  useEffect(() => {
    if (!activeBubbleId) return;
    const el = document.getElementById(`manga-overlay-${activeBubbleId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeBubbleId]);

  const handleZoomIn = useCallback(() => setZoom(z => Math.min(z + 0.25, 3)), []);
  const handleZoomOut = useCallback(() => setZoom(z => Math.max(z - 0.25, 0.5)), []);
  const handleZoomReset = useCallback(() => setZoom(1), []);

  if (pages.length === 0) {
    return (
      <div className="flex-1" />
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Zoom controls */}
      <div className="flex items-center justify-between px-3 py-1.5 bg-stone-50/80 border-b border-stone-200 flex-shrink-0">
        <span className="text-[10px] font-medium text-stone-400 uppercase tracking-wider">
          {pages.length} trang
        </span>
        <div className="flex items-center gap-1">
          <button onClick={handleZoomOut} className="p-1 rounded text-stone-500 hover:bg-stone-200 transition-colors" title="Thu nhỏ">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /></svg>
          </button>
          <button onClick={handleZoomReset} className="px-2 py-0.5 rounded text-[10px] font-mono text-stone-500 hover:bg-stone-200 transition-colors">
            {Math.round(zoom * 100)}%
          </button>
          <button onClick={handleZoomIn} className="p-1 rounded text-stone-500 hover:bg-stone-200 transition-colors" title="Phóng to">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
          </button>
        </div>
      </div>

      {/* Scrollable image container */}
      <div ref={containerRef} className="flex-1 overflow-auto bg-stone-100/50 p-4" style={{ scrollBehavior: 'smooth' }}>
        <div className="flex flex-col items-center gap-6" style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', transition: 'transform 0.2s ease' }}>
          {pages.map((page, pageIdx) => {
            const pageBubbles = bubbles.filter(b => b.imageIndex === pageIdx);
            return (
              <div key={page.id} className="relative inline-block shadow-lg rounded-lg overflow-hidden" style={{ maxWidth: '100%' }}>
                {/* Page number badge */}
                <div className="absolute top-2 left-2 z-20 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {pageIdx + 1}
                </div>

                {/* Manga image */}
                <img
                  src={page.url}
                  alt={`Trang ${pageIdx + 1}`}
                  className="block max-w-full h-auto select-none"
                  draggable={false}
                />

                {/* Bubble overlays */}
                {pageBubbles.map(bubble => {
                  const color = getCharacterColor(bubble.characterName, characters);
                  const isActive = activeBubbleId === bubble.id;
                  return (
                    <div
                      key={bubble.id}
                      id={`manga-overlay-${bubble.id}`}
                      className={`absolute border-2 rounded-md cursor-pointer transition-all duration-200 ${color.border} ${
                        isActive
                          ? `${color.bg} ring-2 ${color.ring} shadow-lg`
                          : 'bg-transparent hover:bg-white/10'
                      }`}
                      style={{
                        left: `${bubble.boundingBox.x * 100}%`,
                        top: `${bubble.boundingBox.y * 100}%`,
                        width: `${bubble.boundingBox.w * 100}%`,
                        height: `${bubble.boundingBox.h * 100}%`,
                      }}
                      onClick={() => onBubbleClick(bubble.id)}
                      onMouseEnter={() => onBubbleHover(bubble.id)}
                      onMouseLeave={() => onBubbleHover(null)}
                      title={`${bubble.characterName}: ${bubble.japaneseText}`}
                    >
                      {/* Order number badge */}
                      <div className={`absolute -top-2.5 -left-2.5 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white shadow-sm ${
                        color.border.replace('border-', 'bg-')
                      }`}>
                        {bubble.order + 1}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MangaImageViewer;
export { CHARACTER_COLORS, FALLBACK_COLOR, getCharacterColor };
