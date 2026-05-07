import React from 'react';

export const GrammarFormula = ({ rule }: { rule: string }) => {
  if (!rule) return null;
  
  // Split by '+' (standard separator)
  const parts = rule.split('+').map(s => s.trim());

  const getStyle = (text: string) => {
    const lower = text.toLowerCase();
    
    // 1. Check for Grammatical Variables (Categories)
    const isVariable = 
        lower.includes('verb') || lower.startsWith('v') || lower.includes('động từ') ||
        lower.includes('noun') || lower.startsWith('n') || lower.includes('danh từ') ||
        lower.includes('adj') || lower.includes('tính từ') ||
        lower.includes('thể') || lower.includes('form') ||
        lower.includes('clause') || lower.includes('mệnh đề');

    if (isVariable) {
        return "bg-blue-50 text-blue-700 border-blue-200 shadow-sm"; // Variable style (Blue)
    }
    
    // 2. Everything else is likely a Literal (Fixed Grammar Part like 'ni', 'wa', 'te')
    return "bg-rose-50 text-rose-700 border-rose-200 font-bold shadow-sm"; // Literal style (Rose)
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {parts.map((part, i) => (
        <React.Fragment key={i}>
          {/* Connector */}
          {i > 0 && (
              <span className="text-stone-300 font-bold text-xs flex items-center justify-center bg-stone-50 rounded-full w-5 h-5">
                  +
              </span>
          )}
          
          {/* Chip */}
          <span className={`px-3 py-1.5 rounded-lg border text-sm font-serif-jp transition-transform hover:scale-105 cursor-default ${getStyle(part)}`}>
            {part}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default GrammarFormula;
