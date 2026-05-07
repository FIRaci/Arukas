import React, { useEffect, useRef } from 'react';
import { MangaBubble, MangaCharacter } from '../types';
import { getCharacterColor } from './MangaImageViewer';

interface MangaDialoguePanelProps {
  bubbles: MangaBubble[];
  characters: MangaCharacter[];
  pageCount: number;
  showJapanese: boolean;
  showReading: boolean;
  activeBubbleId: string | null;
  hoveredBubbleId: string | null;
  onBubbleClick: (bubbleId: string) => void;
  onRenameCharacter: (oldName: string, newName: string) => void;
}

const BUBBLE_TYPE_LABELS: Record<string, { label: string; icon: string }> = {
  dialogue:  { label: 'Hội thoại', icon: '💬' },
  narration: { label: 'Tường thuật', icon: '📝' },
  thought:   { label: 'Suy nghĩ', icon: '💭' },
  sfx:       { label: 'Hiệu ứng', icon: '💥' },
};

const MangaDialoguePanel: React.FC<MangaDialoguePanelProps> = ({
  bubbles, characters, pageCount, showJapanese, showReading, activeBubbleId, hoveredBubbleId,
  onBubbleClick, onRenameCharacter,
}) => {
  const activeRef = useRef<HTMLDivElement>(null);
  const [editingName, setEditingName] = React.useState<string | null>(null);
  const [editValue, setEditValue] = React.useState('');

  // Auto-scroll to active bubble in dialogue panel
  useEffect(() => {
    if (activeBubbleId && activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeBubbleId]);

  const handleStartRename = (name: string) => {
    setEditingName(name);
    setEditValue(name === 'XXX' ? '' : name);
  };

  const handleConfirmRename = () => {
    if (editingName && editValue.trim()) {
      onRenameCharacter(editingName, editValue.trim());
    }
    setEditingName(null);
    setEditValue('');
  };

  // Group bubbles by page
  const groupedByPage: Record<number, MangaBubble[]> = {};
  bubbles.forEach(b => {
    if (!groupedByPage[b.imageIndex]) groupedByPage[b.imageIndex] = [];
    groupedByPage[b.imageIndex].push(b);
  });

  if (bubbles.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center text-stone-400 p-8">
        <div className="text-center space-y-3">
          <svg className="w-12 h-12 mx-auto text-stone-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <p className="text-sm font-medium">Chưa có hội thoại</p>
          <p className="text-xs text-stone-300">Tải ảnh lên và nhấn "Phân tích" để trích xuất hội thoại</p>
        </div>
      </div>
    );
  }

  // Count XXX (unknown) bubbles
  const xxxCount = bubbles.filter(b => b.characterName === 'XXX').length;

  return (
    <div className="flex-1 overflow-auto">
      {/* ═══ Unknown character guidance banner ═══ */}
      {xxxCount > 0 && (
        <div className="mx-3 mt-2 mb-1 px-3 py-2.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-xl">
          <div className="flex items-start gap-2">
            <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-bold text-amber-700">
                {xxxCount} bong bóng chưa xác định nhân vật
              </p>
              <p className="text-[10px] text-amber-600/80 mt-0.5 leading-relaxed">
                Nhấn vào tên <span className="font-bold text-orange-600 bg-orange-100 px-1 rounded">XXX</span> để gán tên nhân vật. 
                Tên sẽ được ghi nhớ cho các chương tiếp theo của truyện này.
              </p>
            </div>
          </div>
        </div>
      )}
      {Object.keys(groupedByPage).sort((a, b) => Number(a) - Number(b)).map(pageIdxStr => {
        const pageIdx = Number(pageIdxStr);
        const pageBubbles = groupedByPage[pageIdx];

        return (
          <div key={pageIdx} className="border-b border-stone-100 last:border-b-0">
            {/* Page header */}
            <div className="sticky top-0 z-10 bg-stone-50/95 backdrop-blur-sm px-4 py-1.5 border-b border-stone-100">
              <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
                Trang {pageIdx + 1} / {pageCount}
              </span>
            </div>

            {/* Dialogue entries */}
            <div className="p-2 space-y-1">
              {pageBubbles.map(bubble => {
                const color = getCharacterColor(bubble.characterName, characters);
                const isActive = activeBubbleId === bubble.id;
                const isHovered = hoveredBubbleId === bubble.id;
                const typeInfo = BUBBLE_TYPE_LABELS[bubble.type] || BUBBLE_TYPE_LABELS.dialogue;

                return (
                  <div
                    key={bubble.id}
                    ref={isActive ? activeRef : null}
                    className={`rounded-lg px-3 py-2 cursor-pointer transition-all duration-200 ${
                      isActive
                        ? 'bg-rose-50/80 border border-rose-200 shadow-sm'
                        : isHovered
                          ? 'bg-stone-50 border border-stone-200'
                          : 'border border-transparent hover:bg-stone-50 hover:border-stone-100'
                    }`}
                    onClick={() => onBubbleClick(bubble.id)}
                  >
                    {/* Character name + type badge */}
                    <div className="flex items-center gap-2 mb-1">
                      {/* Color dot */}
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${color.border.replace('border-', 'bg-')}`} />

                      {/* Character name (editable — pulsing if XXX) */}
                      {editingName === bubble.characterName ? (
                        <form onSubmit={(e) => { e.preventDefault(); handleConfirmRename(); }} className="flex items-center gap-1">
                          <input
                            autoFocus
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onBlur={handleConfirmRename}
                            className="text-xs font-bold px-1.5 py-0.5 rounded border border-rose-300 bg-white focus:outline-none focus:ring-1 focus:ring-rose-400 w-24"
                            placeholder="Tên nhân vật..."
                          />
                        </form>
                      ) : (
                        <button
                          onClick={(e) => { e.stopPropagation(); handleStartRename(bubble.characterName); }}
                          className={`text-xs font-bold truncate max-w-[120px] transition-all ${
                            bubble.characterName === 'XXX'
                              ? 'text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded animate-pulse hover:bg-orange-200 border border-orange-300'
                              : `${color.text} hover:underline`
                          }`}
                          title={bubble.characterName === 'XXX' ? 'Nhấn để gán tên nhân vật — sẽ ghi nhớ cho chương sau' : `Nhấn để đổi tên: ${bubble.characterName}`}
                        >
                          {bubble.characterName === 'XXX' ? '? Gán tên' : bubble.characterName}
                        </button>
                      )}

                      {/* Bubble order */}
                      <span className="text-[9px] text-stone-300 font-mono">#{bubble.order + 1}</span>

                      {/* Type badge */}
                      {bubble.type !== 'dialogue' && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-stone-100 text-stone-500 font-medium">
                          {typeInfo.icon} {typeInfo.label}
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="pl-4.5 ml-0.5">
                      {showJapanese ? (
                        <div>
                          <p className="text-sm font-serif-jp text-stone-800 leading-relaxed whitespace-pre-wrap">
                            {bubble.japaneseText}
                          </p>
                          {showReading && bubble.reading && (
                            <p className="text-[11px] text-stone-400 font-serif-jp mt-0.5">
                              {bubble.reading}
                            </p>
                          )}
                          <p className="text-xs text-stone-500 mt-1 italic">
                            {bubble.vietnameseText}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-sm text-stone-700 leading-relaxed">
                            {bubble.vietnameseText}
                          </p>
                          <p className="text-[11px] text-stone-400 font-serif-jp mt-0.5">
                            {bubble.japaneseText}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MangaDialoguePanel;
