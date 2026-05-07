# 🌸 ARUKAS - Ứng Dụng Học Tiếng Nhật Nâng Cao

> **Tên dự án**: ARUKAS (Sakura đọc ngược)  
> **Phiên bản**: 0.0.0 (Development)  
> **Công nghệ**: React + TypeScript + Vite + TailwindCSS + Google Gemini AI

---

## 📋 TỔNG QUAN DỰ ÁN

**ARUKAS** là một ứng dụng học tiếng Nhật toàn diện với khả năng:
- ✅ **Phân tích câu tiếng Nhật tự động** bằng AI (Google Gemini)
- ✅ **Hiển thị Pitch Accent** (cao độ) với biểu đồ trực quan theo từng mora
- ✅ **Phân tích ngữ pháp chi tiết** với công thức, JLPT level, ví dụ minh họa
- ✅ **Hán Việt đầy đủ** cho kanji và từ Hán-Nhật
- ✅ **Phân tích động từ** với bảng chia động từ, tính từ tự/tha động
- ✅ **Lưu từ vựng và ngữ pháp** vào LocalStorage
- ✅ **So sánh từ đồng nghĩa/phản nghĩa** với giải thích sự khác biệt
- ✅ **Giao diện thẩm mỹ** với hiệu ứng hoa anh đào rơi (Sakura theme)
- ✅ **Upload ảnh** để phân tích text trong ảnh

---

## 🎯 NHIỆM VỤ CHÍNH HIỆN TẠI

### 📚 **MOCK DATA TỪ ĐIỂN NHẬT-VIỆT VÀ NGỮ PHÁP**

> **Mục tiêu**: Tạo mock data đầy đủ để ứng dụng có thể hoạt động độc lập mà không cần gọi API

#### 1️⃣ **Từ Điển Nhật-Việt** (`MOCK_VOCAB_ITEMS`)
**Trạng thái**: 🔄 **Đang thực hiện** (18/200 từ hoàn thành)

**Yêu cầu**:
- [ ] Mock **toàn bộ từ điển cơ bản** (~2000-5000 từ vựng)
- [x] Cấu trúc đầy đủ cho mỗi từ:
  - **Thông tin cơ bản**: text (kanji), reading (hiragana), romaji, meaning (tiếng Việt), type (loại từ)
  - **Hán Việt**: hanViet (âm Hán Việt của kanji)
  - **Pitch Accent**: pitchAccent (chuỗi binary 0/1), pitchPattern (HEIBAN/ATAMADAKA/NAKADAKA/ODAKA)
  - **Deep Dive**: dictionaryForm, tags[], nuanceType, verbComponents[]
  - **Extended Analysis**:
    - `definitionDetail`: Giải thích chi tiết bằng tiếng Việt
    - `transitivity`: Cho động từ - tự động/tha động
    - `examples[]`: Ít nhất 3-5 ví dụ câu với dịch nghĩa
    - `synonyms[]`: Từ đồng nghĩa
    - `antonyms[]`: Từ trái nghĩa
    - `collocations[]`: Cụm từ đi kèm thường gặp
    - `kanjiDetails[]`: Chi tiết từng kanji (âm On/Kun, Hán Việt, stroke order)
    - `conjugations`: Bảng chia động từ/tính từ đầy đủ

**File**: [src/data/mockData.ts](src/data/mockData.ts) (hiện tại: 845 dòng)

**Kế hoạch**:
- ✅ Đã có 18 từ mẫu đầy đủ (chó, mèo, chim, cá, ngựa, nước, cơm, thịt, rau, trái cây, núi, sông, biển, đi, đến, ăn, uống, nhìn)
- 🔄 Cần thêm 182 từ nữa để đạt 200 từ cơ bản
- ⏳ Mở rộng lên 2000+ từ theo JLPT N5-N1

#### 2️⃣ **Ngữ Pháp Tiếng Nhật** (`MOCK_GRAMMAR_ITEMS`)
**Trạng thái**: ❌ **Chưa bắt đầu** (0 mục hoàn thành)

**Yêu cầu**:
- [ ] Mock **toàn bộ ngữ pháp** JLPT N5-N1 (~400-600 điểm ngữ pháp)
- [ ] Cấu trúc cho mỗi điểm ngữ pháp:
  - `structure`: Công thức ngữ pháp (ví dụ: `〜ている`, `〜に対して`)
  - `reading`: Cách đọc hiragana
  - `hanViet`: Hán Việt (nếu có kanji)
  - `meaning`: Nghĩa tiếng Việt
  - `usage`: Cách dùng chi tiết
  - `construction`: Công thức kết hợp (ví dụ: "Verb (Te-form) + iru")
  - `jlpt`: Level JLPT (N5, N4, N3, N2, N1)
  - `extendedAnalysis`:
    - `formationRule`: Quy tắc hình thành
    - `usageExamples[]`: 5-10 ví dụ với translation
    - `commonMistakes[]`: Lỗi thường gặp
    - `relatedGrammar[]`: Ngữ pháp liên quan
    - `nuanceExplanation`: Giải thích sắc thái

**File**: [src/data/mockData.ts](src/data/mockData.ts) → `MOCK_GRAMMAR_ITEMS`

**Kế hoạch**:
- ⏳ Bắt đầu với N5 (~80 mẫu câu)
- ⏳ Tiếp tục N4 (~150 mẫu câu)
- ⏳ Mở rộng N3-N1 (~300+ mẫu câu)

#### 3️⃣ **So Sánh Từ** (`MOCK_COMPARISONS`)
**Trạng thái**: ❌ **Chưa bắt đầu** (0 mục hoàn thành)

**Yêu cầu**:
- [ ] Mock **các cặp từ hay nhầm lẫn** (~200-500 cặp)
- [ ] Cấu trúc:
  - `type`: SYNONYM_NUANCE / SIMILAR_FORMS / FALSE_FRIENDS / FORMAL_INFORMAL
  - `comparisonItems[]`: Danh sách các từ so sánh
  - `explanation`: Giải thích sự khác biệt
  - `recommendations[]`: Gợi ý sử dụng trong ngữ cảnh cụ thể

**File**: [src/data/mockData.ts](src/data/mockData.ts) → `MOCK_COMPARISONS`

---

## 🏗️ CẤU TRÚC DỰ ÁN

```
arukas-app/
├── public/                      # Static assets
├── src/
│   ├── components/              # React components
│   │   ├── FallingPetals.tsx   # Animation hoa anh đào
│   │   ├── GrammarFormula.tsx  # Hiển thị công thức ngữ pháp
│   │   ├── PitchGraph.tsx      # Biểu đồ pitch accent
│   │   ├── SentenceBlock.tsx   # Hiển thị block câu văn
│   │   ├── UserHub.tsx         # Tab lưu trữ (vocab/grammar/comparison)
│   │   └── VerbDecomposition.tsx # Phân tích thành phần động từ
│   │
│   ├── data/
│   │   ├── mockData.ts         # 🎯 FILE CHÍNH - Mock data từ điển & ngữ pháp
│   │   ├── mockData.backup.ts  # Backup (200 từ đơn giản)
│   │   └── mockData_200vocab.ts # Template 18 từ đầy đủ (có thể xóa)
│   │
│   ├── services/
│   │   └── analysisEngine.ts   # Logic gọi Google Gemini AI
│   │
│   ├── App.tsx                 # Main app component
│   ├── types.ts                # TypeScript type definitions
│   ├── index.css               # TailwindCSS styles
│   └── main.tsx                # Entry point
│
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 🧩 CÁC COMPONENT CHÍNH

### 1. **App.tsx** - Main Application
- Quản lý state chính: `savedItems` (vocab), `savedGrammar`, `savedComparisons`
- Xử lý phân tích câu với AI
- Upload và xử lý ảnh
- LocalStorage integration

### 2. **SentenceBlock.tsx** - Hiển thị phân tích câu
- Render từng token với màu sắc theo loại từ
- Hiển thị reading, meaning khi hover
- Phân tích vai trò ngữ pháp (chủ ngữ, thuật ngữ, modifier...)
- Liên kết giữa các token

### 3. **PitchGraph.tsx** - Biểu đồ Pitch Accent
- Vẽ biểu đồ dựa trên binary string (0=thấp, 1=cao)
- Tách mora tự động (xử lý ゃ, ゅ, ょ, っ, ー)
- Hiển thị pattern: HEIBAN, ATAMADAKA, NAKADAKA, ODAKA
- Dự đoán pitch của조사 (particle) theo sau

### 4. **VerbDecomposition.tsx** - Phân tích động từ
- Tách thành phần: root + auxiliary + conjugation
- Hiển thị Hán Việt cho từng phần
- Giải thích ý nghĩa từng thành phần

### 5. **GrammarFormula.tsx** - Công thức ngữ pháp
- Render công thức với màu sắc theo thành phần (Noun, Verb, Particle...)
- Hiển thị JLPT level
- Toggle để xem usage detail

### 6. **UserHub.tsx** - Hub lưu trữ
- 3 tabs: Vocabulary, Grammar, Comparisons
- Search và filter
- Sort theo thời gian/alphabet
- Export/Import JSON
- Enrichment feature (gọi AI để làm giàu thông tin)

### 7. **FallingPetals.tsx** - Animation
- Canvas animation hoa anh đào rơi
- 20 cánh hoa với physics realistic

---

## 🔧 TECHNOLOGY STACK

### Frontend
- **React 18.2**: UI framework
- **TypeScript 5.2**: Type safety
- **Vite 5.2**: Build tool & dev server
- **TailwindCSS 3.4**: Styling

### AI Integration
- **Google Gemini API** (`@google/generative-ai`)
  - Model: `gemini-2.0-flash-001`
  - Structured output với JSON schema
  - Multi-modal support (text + image)

### Features
- **LocalStorage**: Persist saved items
- **Canvas API**: Animation effects
- **SVG**: Pitch graphs và decorations

---

## 🚀 CÀI ĐẶT VÀ CHẠY DỰ ÁN

### 1. Cài đặt dependencies
```bash
cd arukas-app
npm install
```

### 2. Cấu hình API Key
Tạo file `.env` trong thư mục `arukas-app`:
```
VITE_API_KEY=your_google_gemini_api_key_here
```

### 3. Chạy development server
```bash
npm run dev
```

Ứng dụng sẽ chạy tại: `http://localhost:5173`

### 4. Build production
```bash
npm run build
```

---

## 📖 HƯỚNG DẪN SỬ DỤNG NHANH

### 🔍 Phân tích câu
1. Nhập câu tiếng Nhật vào textarea
2. (Tùy chọn) Upload ảnh chứa text tiếng Nhật
3. Nhấn nút **Phân tích** hoặc `Ctrl+Enter`
4. Xem kết quả phân tích:
   - Từng token với màu sắc theo loại từ
   - Reading (hiragana) và romaji
   - Pitch accent graph
   - Hán Việt
   - Vai trò ngữ pháp
   - Phân tích động từ (nếu có)

### 💾 Lưu từ vựng
1. Click vào token trong kết quả phân tích
2. Từ được thêm vào **User Hub** → **Vocabulary**
3. Click **✨ Enrich** để AI làm giàu thông tin
4. Xem chi tiết: examples, synonyms, antonyms, kanji details...

### 📚 Lưu ngữ pháp
- Click vào cấu trúc ngữ pháp trong phân tích
- Tự động lưu vào **User Hub** → **Grammar**

### 🔄 So sánh từ
- Click **Compare** trong detail view của từ vựng
- Xem giải thích sự khác biệt giữa các từ tương tự

### 📤 Export/Import
```javascript
// Export all data
localStorage.getItem('yomu_saved_vocab')      // Vocabulary
localStorage.getItem('yomu_saved_grammar')    // Grammar
localStorage.getItem('yomu_saved_comparisons') // Comparisons

// Import: Paste JSON into localStorage và refresh
```

---

## 🎨 COLOR SCHEME & THEME

### Màu sắc theo loại từ
- **NOUN** (Danh từ): `text-rose-600` - Hồng đậm
- **VERB** (Động từ): `text-blue-600` - Xanh dương
- **ADJECTIVE** (Tính từ): `text-green-600` - Xanh lá
- **PARTICLE** (조사): `text-stone-400` - Xám
- **AUXILIARY** (Trợ từ): `text-purple-500` - Tím
- **CONJUNCTION** (Liên từ): `text-orange-500` - Cam

### Theme
- **Primary**: Rose (Hồng sakura) - `rose-300/400/500/600`
- **Background**: Stone (Xám đá) - `stone-50/100/200`
- **Accent**: Purple, Blue, Green
- **Decorative**: SVG sakura branches + Canvas falling petals

---

## 📊 DATA TYPES

### SavedToken (Vocabulary Item)
```typescript
{
  id: string;
  text: string;              // Kanji form
  reading: string;           // Hiragana
  romaji: string;
  meaning: string;           // Vietnamese
  type: PartType;            // NOUN/VERB/ADJECTIVE...
  hanViet: string;          // Hán Việt
  pitchAccent: string;      // Binary string "0110"
  pitchPattern: string;     // HEIBAN/ATAMADAKA/NAKADAKA/ODAKA
  deepDive: {
    dictionaryForm: string;
    tags: string[];
    verbComponents: VerbComponent[];
    ...
  };
  extendedAnalysis: {
    definitionDetail: string;
    transitivity: TransitivityPair[];
    examples: Example[];
    synonyms: RelatedWord[];
    antonyms: RelatedWord[];
    collocations: Collocation[];
    kanjiDetails: KanjiDetail[];
    conjugations: ConjugationTable;
  };
  savedAt: number;
}
```

### GrammarStructure
```typescript
{
  structure: string;         // "〜ている"
  reading: string;          // Hiragana
  hanViet: string;
  meaning: string;          // Vietnamese
  usage: string;            // Detailed explanation
  construction: string;     // "Verb (Te-form) + iru"
  jlpt: string;            // "N5"
  extendedAnalysis: {
    formationRule: string;
    usageExamples: Example[];
    commonMistakes: string[];
    relatedGrammar: RelatedWord[];
    nuanceExplanation: string;
  };
}
```

### ComparisonResult
```typescript
{
  type: ComparisonType;     // SYNONYM_NUANCE/SIMILAR_FORMS...
  comparisonItems: ComparisonItem[];
  explanation: string;
  recommendations: RecommendationItem[];
}
```

---

## 🎓 JLPT COVERAGE PLAN

### Mock Data Goals by JLPT Level

| Level | Vocab Target | Grammar Target | Status |
|-------|-------------|----------------|--------|
| N5    | 800 words   | 80 patterns    | 🔄 In Progress (18/800) |
| N4    | 1500 words  | 150 patterns   | ⏳ Planned |
| N3    | 3000 words  | 250 patterns   | ⏳ Planned |
| N2    | 6000 words  | 400 patterns   | ⏳ Planned |
| N1    | 10000 words | 600 patterns   | ⏳ Planned |

---

## 🐛 KNOWN ISSUES & FUTURE IMPROVEMENTS

### Current Issues
- [ ] File `mockData.ts` chỉ có 18 từ mẫu, cần thêm 182 từ nữa
- [ ] `MOCK_GRAMMAR_ITEMS` đang là array rỗng
- [ ] `MOCK_COMPARISONS` đang là array rỗng
- [ ] Unused import warning cho `NuanceType` (non-blocking)

### Future Features
- [ ] **Lazy loading** cho mock data lớn (split chunks)
- [ ] **Search autocomplete** với fuzzy matching
- [ ] **Kanji stroke order animation**
- [ ] **Audio pronunciation** integration
- [ ] **SRS (Spaced Repetition)** system
- [ ] **Quiz mode** từ vocabulary/grammar đã lưu
- [ ] **Export to Anki** format
- [ ] **Dark mode** support
- [ ] **PWA** (Progressive Web App) cho offline usage

---

## 📝 CODING CONVENTIONS

### File Naming
- Components: `PascalCase.tsx`
- Services: `camelCase.ts`
- Types: `types.ts`
- Data: `mockData.ts`

### Component Structure
```typescript
// 1. Imports
import React from 'react';
import { Type1, Type2 } from './types';

// 2. Interface/Type definitions
interface Props {
  // ...
}

// 3. Helper functions (outside component)
const helperFunction = () => {};

// 4. Component
const Component: React.FC<Props> = ({ prop1, prop2 }) => {
  // 4a. State
  const [state, setState] = useState();
  
  // 4b. Effects
  useEffect(() => {}, []);
  
  // 4c. Handlers
  const handleClick = () => {};
  
  // 4d. Render
  return <div>...</div>;
};

export default Component;
```

### TypeScript
- Luôn định nghĩa types/interfaces rõ ràng
- Tránh `any`, dùng `unknown` nếu cần
- Export types từ `types.ts`

### Styling
- Dùng TailwindCSS classes
- Tránh inline styles trừ khi cần dynamic values
- Responsive: mobile-first approach

---

## 🤝 CONTRIBUTION WORKFLOW

### Thêm từ vựng mới vào Mock Data
1. Mở [src/data/mockData.ts](src/data/mockData.ts)
2. Copy template từ một trong 18 từ đã có
3. Điền đầy đủ thông tin:
   - Basic info (text, reading, meaning...)
   - Pitch accent (tham khảo ojad.jp hoặc accent.u-biq.org)
   - Hán Việt
   - Extended analysis (examples, synonyms, kanji details...)
4. Thêm vào array `MOCK_VOCAB_ITEMS`
5. Test: `npm run dev` và kiểm tra User Hub

### Thêm ngữ pháp mới
1. Mở [src/data/mockData.ts](src/data/mockData.ts)
2. Thêm vào array `MOCK_GRAMMAR_ITEMS`
3. Follow structure trong `types.ts` → `SavedGrammar`
4. Bao gồm: structure, reading, meaning, usage, examples, JLPT level

### Tools hữu ích
- **Pitch Accent**: [OJAD](http://www.gavo.t.u-tokyo.ac.jp/ojad/) | [Suzuki-kun](https://accent.u-biq.org/)
- **Kanji Info**: [Jisho](https://jisho.org/) | [Kanji Alive](https://kanjialive.com/)
- **Grammar**: [Bunpro](https://bunpro.jp/) | [JLPT Sensei](https://jlptsensei.com/)
- **Hán Việt**: [Hán Nôm](http://www.hannom.org.vn/)

---

## 📞 SUPPORT & CONTACT

- **Developer**: Your Name
- **Project Start**: 2026
- **Status**: Active Development
- **License**: Private

---

## 🌸 PHILOSOPHY

> **"Học tiếng Nhật không chỉ là học từ vựng và ngữ pháp, mà là hiểu được cách người Nhật nghĩ và diễn đạt. Pitch accent, Hán Việt, và phân tích sâu giúp bạn không chỉ biết từ, mà hiểu từ."**

ARUKAS được thiết kế để:
- ✨ **Làm rõ những gì khó hiểu** trong tiếng Nhật
- 🎯 **Kết nối tri thức** giữa Kanji, Hán Việt, và ngữ pháp
- 🌸 **Học một cách thẩm mỹ** với interface đẹp mắt và trực quan
- 📚 **Tích lũy kiến thức** từng ngày với hệ thống lưu trữ

---

## ✅ QUICK REFERENCE

### Chạy dự án
```bash
npm run dev
```

### File chính để edit
- **Mock Data**: [src/data/mockData.ts](src/data/mockData.ts)
- **Types**: [src/types.ts](src/types.ts)
- **Main App**: [src/App.tsx](src/App.tsx)

### Nhiệm vụ ưu tiên
1. ✅ Hoàn thiện 200 từ vựng cơ bản trong `MOCK_VOCAB_ITEMS`
2. ⏳ Thêm 80 điểm ngữ pháp N5 vào `MOCK_GRAMMAR_ITEMS`
3. ⏳ Thêm 50 cặp so sánh từ vào `MOCK_COMPARISONS`

---

**Made with 💖 and 🌸 for Japanese learners**
