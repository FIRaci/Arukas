import React from 'react';
import { VerbComponent } from '../types';

interface Props {
  components: VerbComponent[];
  compact?: boolean;
}

const VerbDecomposition: React.FC<Props> = ({ components, compact = false }) => {
  return (
    <div className={compact ? "mt-1 w-full" : "mt-4 bg-stone-50 rounded-lg p-4 border border-stone-200"}>
      {!compact && (
        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-3 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          Giải phẫu động từ
        </h4>
      )}
      <div className={`flex flex-wrap ${compact ? 'gap-1 justify-center' : 'gap-2'}`}>
        {components.map((comp, idx) => (
          <div key={idx} className="flex flex-col group relative">
             {/* Component Box */}
            <div className={`
              ${compact ? 'px-1.5 py-1 min-w-[30px] text-xs' : 'px-3 py-2 min-w-[60px]'} 
              rounded-lg border flex flex-col items-center
              ${comp.type === 'root' ? 'bg-blue-50 border-blue-200 text-blue-900' : ''}
              ${comp.type === 'auxiliary' ? 'bg-amber-50 border-amber-200 text-amber-900' : ''}
              ${comp.type === 'conjugation' ? 'bg-stone-100 border-stone-200 text-stone-700' : ''}
            `}>
              {/* Reading (Furigana) */}
              {comp.reading && comp.reading !== comp.part && (
                 <span className={`${compact ? 'text-[8px] mb-0' : 'text-[10px] mb-0.5'} text-stone-500`}>{comp.reading}</span>
              )}
              
              {/* Main Text */}
              <span className={`${compact ? 'text-sm' : 'text-lg'} font-serif-jp font-bold leading-none mb-1`}>{comp.part}</span>
              
              {/* Han Viet (if exists) */}
              {comp.hanViet && !compact && (
                  <span className="text-[9px] uppercase font-bold text-rose-400 border-t border-black/5 pt-0.5 mt-0.5 w-full text-center">
                      {comp.hanViet}
                  </span>
              )}
            </div>
            
            {/* Meaning Tooltip / Label */}
            {!compact && (
                <div className="mt-1 text-center">
                    <div className="text-[10px] font-medium text-stone-500 leading-tight max-w-[80px]">
                        {comp.meaning}
                    </div>
                </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerbDecomposition;
