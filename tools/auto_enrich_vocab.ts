import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({});

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function enrichVocabularies() {
    console.log("🚀 Bắt đầu quá trình tự động làm giàu từ vựng (Auto Enrichment)...");
    
    // Đọc file N5 làm mẫu
    const targetFile = path.join(process.cwd(), 'src/data/vocabEntriesN5.ts');
    let content = fs.readFileSync(targetFile, 'utf8');

    // Regex để trích xuất các object từ điển.
    // LƯU Ý: Đây là bản Parse mộc để phát hiện các từ thiếu trường dữ liệu.
    // Xây dựng JSON array các từ vựng cần xử lý:
    const objectRegex = /([{]\s*id:\s*['"](n5-[^'"]+)['"][\s\S]*?[}])(?=\s*,|\s*\])/g;
    let match;
    const itemsToEnrich: any[] = [];
    
    while ((match = objectRegex.exec(content)) !== null) {
        const block = match[0];
        const id = match[2];
        const wordMatch = block.match(/word:\s*['"]([^'"]+)['"]/);
        const meaningMatch = block.match(/meaning:\s*['"]([^'"]+)['"]/);
        
        if (wordMatch && meaningMatch) {
            // Tiêu chí: Nếu từ đó CẦN làm giàu (VD: Dưới 2 ví dụ hoặc thiếu synonyms/antonyms/phrases)
            const hasSynonyms = block.includes('synonyms:');
            const hasPhrases = block.includes('phrases:');
            
            if (!hasSynonyms && !hasPhrases) {
                itemsToEnrich.push({
                    id: id,
                    word: wordMatch[1],
                    meaning: meaningMatch[1].replace(/\\'/g, "'")
                });
            }
        }
    }

    console.log(`🔍 Tìm thấy ${itemsToEnrich.length} từ vựng N5 đang thiếu dữ liệu bổ trợ (pharses, synonyms...).`);
    if (itemsToEnrich.length === 0) return;

    // Chạy mẫu thử nghiệm batch đầu tiên (10 từ) để minh họa
    const batch = itemsToEnrich.slice(0, 10);
    console.log(`🤖 Gửi Batch đầu (10 từ) tới GenAI để xử lý...`);

    const prompt = `
Bạn là chuyên gia tiếng Nhật. Tôi có mảng JSON các từ vựng JLPT sau:
${JSON.stringify(batch, null, 2)}

Hãy bổ sung "examples" (ít nhất 2 ví dụ gồm jp, reading, meaning), "synonyms" nếu có, "antonyms" nếu có, và "phrases" (cụm từ liên quan) nếu có.
Chỉ trả về ĐÚNG MỘT MẢNG JSON, KHÔNG KÈM TEXT HAY MARKDOWN (KHÔNG \`\`\`json).
Ví dụ định dạng đầu ra của một item trong mảng:
{
  "id": "n5-taberu",
  "examples": [
     { "jp": "毎日りんごを食べる。", "reading": "まいにちりんごをたべる。", "meaning": "Hàng ngày tôi ăn táo." },
     { "jp": "一緒に晩ご飯を食べませんか？", "reading": "いっしょにばんごはんをたべませんか？", "meaning": "Cùng ăn bữa tối nhé?" }
  ],
  "synonyms": [{ "word": "食う", "reading": "くう", "meaning": "Ăn (suồng sã)" }],
  "phrases": [{ "word": "食べ放題", "reading": "たべほうだい", "meaning": "Ăn thỏa thích (buffet)" }]
}
    `.trim();

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                temperature: 0.2
            }
        });

        let aiText = response.text || '';
        // Cắt bỏ markdown nếu API vẫn cố tình nhét vào
        aiText = aiText.replace(/```json/g, '').replace(/```/g, '').trim();
        
        const enrichedData = JSON.parse(aiText);
        
        console.log(`✅ Đã nhận được dữ liệu làm giàu từ AI. Tiến hành gộp (Merge) vào source code...`);
        
        // Vòng lặp thay thế trong nội dung file Text
        for (const enriched of enrichedData) {
            const regex = new RegExp(`(\\{\\s*id:\\s*['"]${enriched.id}['"][\\s\\S]*?)(?:\\s*examples:.*?(?=\\}|synonyms|antonyms|phrases|related))?([\\s\\S]*?\\})`);
            
            // Xây dựng string chèn
            let injectStr = `\n    examples: ${JSON.stringify(enriched.examples || [])}`;
            if (enriched.synonyms && enriched.synonyms.length > 0) injectStr += `,\n    synonyms: ${JSON.stringify(enriched.synonyms)}`;
            if (enriched.antonyms && enriched.antonyms.length > 0) injectStr += `,\n    antonyms: ${JSON.stringify(enriched.antonyms)}`;
            if (enriched.phrases && enriched.phrases.length > 0) injectStr += `,\n    phrases: ${JSON.stringify(enriched.phrases)}`;
            
            // Format gọn lại các mảng cho đẹp
            injectStr = injectStr.replace(/"([^"]+)":/g, "$1:"); // Bỏ ngoặc kép xung quanh key
            injectStr = injectStr.replace(/"/g, "'"); // Đổi ngoặc kép string thành ngoặc đơn
            
            content = content.replace(regex, (match, p1) => {
                // p1 giữ nguyên đoạn trước tệp từ vựng (bao gồm id, word, reading, v.v...)
                // Lưu ý: Replace này chỉ là mã mẫu, cần fine-tune regex nếu TS bị vỡ mảng!
                return p1.replace(/(\n\s*)$/, '') + "," + injectStr + "\n  }";
            });
        }
        
        fs.writeFileSync(targetFile, content);
        console.log(`🎉 Thành công! File vocabEntriesN5.ts đã được update thêm dữ liệu mới.`);
        console.log(`💡 Lưu ý: Bạn cần cấu hình biến môi trường GEMINI_API_KEY trước khi chạy khối này (vd: set GEMINI_API_KEY=xxx) hoặc bỏ key vào .env`);

    } catch (e: any) {
        console.error("❌ Xảy ra lỗi khi gọi AI hoặc Parse dữ liệu:", e.message);
    }
}

enrichVocabularies();
