import React from 'react';

interface Props {
  binaryString?: string;
  text?: string;
  pattern?: string;
}

// --- HELPER: MORA PARSER ---
// Splits text into moras (handling small tsu, ya, yu, yo, and long vowels)
const getMoras = (text: string): string[] => {
    const smallKana = ['ゃ', 'ゅ', 'ょ', 'ぁ', 'ぃ', 'ぅ', 'ぇ', 'ぉ'];
    const moras: string[] = [];
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];
        
        if (nextChar && smallKana.includes(nextChar)) {
            // Combine digraphs like きゃ (kya) into one mora
            moras.push(char + nextChar);
            i++; // Skip next char
        } else {
            // Standard mora (including っ and ー and ん)
            moras.push(char);
        }
    }
    return moras;
};

const PitchGraph: React.FC<Props> = ({ binaryString, text, pattern }) => {
    if (!binaryString || binaryString.length === 0 || !text) return null;
    
    const moras = getMoras(text);
    const points = binaryString.split('').map(Number);
    
    // Ensure data integrity: Use simpler length to avoid crash
    const safeLength = Math.min(moras.length, points.length);

    const STEP = 50;     // Horizontal space per char
    const PADDING = 25;  // Left/Right padding
    const H_HIGH = 15;   // Y pos for High pitch
    const H_LOW = 45;    // Y pos for Low pitch
    const R = 5;         // Node radius

    // Add extra space for particle prediction visualization
    const EXTRA_WIDTH = 60; 
    const totalWidth = (safeLength * STEP) + EXTRA_WIDTH;
    const svgHeight = 80; // Increased height to fit labels

    // Determines the pitch of the hypothetical next particle
    let particlePitch: 'HIGH' | 'LOW' | null = null;
    if (pattern === 'HEIBAN') particlePitch = 'HIGH';
    if (pattern === 'ODAKA') particlePitch = 'LOW';
    // Atamadaka and Nakadaka drops happen inside the word, so particle is always Low, 
    // but the graph usually shows the drop clearly. 
    // We mainly want to distinguish Heiban vs Odaka which look same (011...) inside word.

    return (
        <div className="w-full mb-6 select-none relative overflow-x-auto pb-2">
             <div className="flex justify-between items-end mb-1 pl-1 pr-1">
                <div className="text-[9px] text-rose-300 uppercase font-bold tracking-widest">
                    Biểu đồ Cao độ (Mora)
                </div>
                {pattern && (
                    <div className="text-[9px] text-stone-400 font-bold bg-stone-100 px-1.5 py-0.5 rounded">
                        {pattern === 'HEIBAN' && 'Heiban (Không dấu)'}
                        {pattern === 'ATAMADAKA' && 'Atamadaka (Đầu cao)'}
                        {pattern === 'NAKADAKA' && 'Nakadaka (Giữa cao)'}
                        {pattern === 'ODAKA' && 'Odaka (Cuối cao)'}
                        {pattern === 'UNKNOWN' && 'Không xác định'}
                    </div>
                )}
             </div>
            
            {/* SVG Container */}
            <svg 
                height={svgHeight} 
                width={totalWidth + PADDING * 2} 
                className="overflow-visible"
            >
                {/* 1. Draw Connecting Path (Word Body) */}
                <path
                    d={`M ${PADDING + STEP/2} ${points[0] === 1 ? H_HIGH : H_LOW} ` + 
                       points.slice(1, safeLength).map((val, i) => 
                           `L ${(i + 1) * STEP + PADDING + STEP/2} ${val === 1 ? H_HIGH : H_LOW}`
                       ).join(' ')}
                    fill="none"
                    stroke="#D6D3D1" // Stone 300
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* 2. Draw Nodes and Accent Markers */}
                {points.slice(0, safeLength).map((val, i) => {
                    const x = i * STEP + PADDING + (STEP/2);
                    const y = val === 1 ? H_HIGH : H_LOW;
                    const nextVal = points[i+1];
                    const isKernel = val === 1 && nextVal === 0;

                    return (
                        <g key={`node-${i}`}>
                            {/* Text underneath */}
                            <text 
                                x={x} 
                                y={svgHeight - 15} 
                                textAnchor="middle" 
                                className="font-serif-jp fill-stone-500 text-lg font-medium"
                                style={{ fontSize: '16px' }}
                            >
                                {moras[i]}
                            </text>

                            {/* Accent Drop Marker (The "Cliff") inside word */}
                            {isKernel && (
                                <g>
                                    <path 
                                        d={`M ${x + R + 4} ${y} L ${x + STEP/2} ${y} L ${x + STEP/2} ${y + (H_LOW - H_HIGH)/1.5}`}
                                        fill="none"
                                        stroke="#F43F5E"
                                        strokeWidth="2"
                                    />
                                </g>
                            )}

                            {/* The Node */}
                            <circle 
                                cx={x} 
                                cy={y} 
                                r={R} 
                                fill={val === 1 ? "#F43F5E" : "white"} 
                                stroke={val === 1 ? "#F43F5E" : "#78716C"}
                                strokeWidth="2"
                            />
                        </g>
                    );
                })}

                {/* 3. PARTICLE TREND VISUALIZATION (Ghost Node) */}
                {particlePitch && points.length > 0 && (
                    <g opacity="0.6">
                        {/* Connecting Line to Particle */}
                        <path 
                            d={`M ${(safeLength - 1) * STEP + PADDING + STEP/2} ${points[safeLength-1] === 1 ? H_HIGH : H_LOW} 
                                L ${safeLength * STEP + PADDING + STEP/2} ${particlePitch === 'HIGH' ? H_HIGH : H_LOW}`}
                            fill="none"
                            stroke={particlePitch === 'HIGH' ? "#10B981" : "#F43F5E"} // Green for stable, Red for drop
                            strokeWidth="2"
                            strokeDasharray="4 4"
                        />
                        
                        {/* Ghost Node */}
                        <circle 
                            cx={safeLength * STEP + PADDING + STEP/2} 
                            cy={particlePitch === 'HIGH' ? H_HIGH : H_LOW} 
                            r={R - 1} 
                            fill="white"
                            stroke={particlePitch === 'HIGH' ? "#10B981" : "#F43F5E"}
                            strokeWidth="2"
                        />

                        {/* Particle Label */}
                        <text 
                            x={safeLength * STEP + PADDING + STEP/2} 
                            y={svgHeight - 15} 
                            textAnchor="middle" 
                            className="font-serif-jp fill-stone-400 text-sm italic"
                        >
                            (ga)
                        </text>
                        
                        {/* Odaka Drop Marker (Special Case: Drop happens AFTER word) */}
                        {pattern === 'ODAKA' && points[safeLength-1] === 1 && (
                             <g>
                                <path 
                                    d={`M ${(safeLength - 1) * STEP + PADDING + STEP/2 + R + 4} ${H_HIGH} 
                                        L ${(safeLength - 1) * STEP + PADDING + STEP} ${H_HIGH} 
                                        L ${(safeLength - 1) * STEP + PADDING + STEP} ${H_HIGH + (H_LOW - H_HIGH)/1.5}`}
                                    fill="none"
                                    stroke="#F43F5E"
                                    strokeWidth="2"
                                />
                            </g>
                        )}
                    </g>
                )}
            </svg>
        </div>
    );
};

export default PitchGraph;
