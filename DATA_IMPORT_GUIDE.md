# DATA IMPORT GUIDE — ArukaS Dictionary Pipeline

## Tổng quan

Pipeline chuyển đổi dữ liệu từ vựng / ngữ pháp:
```
Gemini AI → JSONL text file → convert_data.py → JSON static files → App
```

---

## 1. Định dạng JSONL

Mỗi dòng trong file `.txt` là một JSON object hoàn chỉnh. Không có dấu phẩy giữa các dòng.

### Vocab JSONL Format

```jsonl
{"t":"犬","r":"いぬ","rm":"inu","m":"Chó","type":"NOUN","jlpt":"N5","hv":"KHUYỂN","pitch":"10","pp":"ATAMADAKA","ex":["犬を飼う|いぬをかう|Nuôi chó","犬が吠える|いぬがほえる|Chó sủa"],"rel":["猫|ねこ|Mèo|NOUN"],"note":"Động vật phổ biến nhất"}
{"t":"食べる","r":"たべる","rm":"taberu","m":"Ăn","type":"VERB","jlpt":"N5","hv":"THỰC","pitch":"20","pp":"NAKADAKA","ex":["ご飯を食べる|ごはんをたべる|Ăn cơm"],"rel":["飲む|のむ|Uống|VERB"],"note":"Ichidan verb (nhóm 2)"}
```

**Các trường:**
| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| `t` | ✅ | Từ vựng (kanji/kana) |
| `r` | ✅ | Phiên âm hiragana |
| `rm` | ✅ | Romaji |
| `m` | ✅ | Nghĩa tiếng Việt |
| `type` | ✅ | Loại từ: `NOUN`, `VERB`, `ADJ_I`, `ADJ_NA`, `ADVERB`, `PARTICLE`, `EXPRESSION`, `COUNTER` |
| `jlpt` | ✅ | Level: `N5`, `N4`, `N3`, `N2`, `N1` |
| `hv` | ❌ | Hán Việt (viết HOA) |
| `pitch` | ❌ | Pattern pitch: "10" = H-L, "01" = L-H, "010" = L-H-L, v.v. |
| `pp` | ❌ | Pitch pattern name: `HEIBAN`, `ATAMADAKA`, `NAKADAKA`, `ODAKA` |
| `ex` | ❌ | Ví dụ: `["câu JP\|reading\|nghĩa VN"]` |
| `rel` | ❌ | Từ liên quan: `["từ\|reading\|nghĩa\|type"]` |
| `note` | ❌ | Ghi chú thêm |

### Grammar JSONL Format

```jsonl
{"s":"〜ている","r":"ている","m":"Đang làm gì đó (trạng thái tiếp diễn)","usage":"Diễn tả hành động đang diễn ra hoặc trạng thái kết quả","cons":"V-て + いる","jlpt":"N5","ex":["雨が降っている|あめがふっている|Trời đang mưa"],"ctx":["Dùng khi mô tả hành động đang xảy ra","Cũng dùng cho trạng thái kết quả"],"rules":["V-て form + いる","Phủ định: V-ていない"]}
```

**Các trường:**
| Trường | Bắt buộc | Mô tả |
|--------|----------|-------|
| `s` | ✅ | Cấu trúc ngữ pháp |
| `r` | ✅ | Reading |
| `m` | ✅ | Nghĩa tiếng Việt |
| `usage` | ❌ | Giải thích cách dùng |
| `cons` | ❌ | Cấu tạo (construction) |
| `jlpt` | ✅ | Level JLPT |
| `ex` | ❌ | Ví dụ: `["JP\|reading\|nghĩa"]` |
| `ctx` | ❌ | Context / ngữ cảnh sử dụng |
| `rules` | ❌ | Quy tắc / lưu ý |

---

## 2. Gemini Prompt Templates

### Prompt: Tạo Vocab N5 (100 từ)

```
Bạn là chuyên gia tiếng Nhật. Tạo CHÍNH XÁC 100 từ vựng JLPT N5 phổ biến nhất.

Output: JSONL format — mỗi dòng là một JSON object, KHÔNG có dấu phẩy giữa các dòng.

Format mỗi dòng:
{"t":"漢字","r":"ひらがな","rm":"romaji","m":"Nghĩa tiếng Việt","type":"LOẠI","jlpt":"N5","hv":"HÁN VIỆT","pitch":"pattern","pp":"TÊN_PATTERN","ex":["例文|よみ|Nghĩa VN","例文2|よみ2|Nghĩa2"],"rel":["関連|よみ|Nghĩa|TYPE"],"note":"ghi chú"}

Quy tắc:
- type: NOUN, VERB, ADJ_I, ADJ_NA, ADVERB, PARTICLE, EXPRESSION, COUNTER
- pitch: "10" = HL, "01" = LH, "010" = LHL, "0100" = LHLL v.v.
- pp: HEIBAN (平板), ATAMADAKA (頭高), NAKADAKA (中高), ODAKA (尾高)
- hv: Hán Việt viết HOA, bỏ trống nếu không có
- ex: tối thiểu 2 ví dụ mỗi từ, format "câu JP|reading|nghĩa VN"
- rel: 1-3 từ liên quan, format "từ|reading|nghĩa|type"

Bắt đầu từ các chủ đề: số đếm, thời gian, gia đình, đồ ăn, vị trí, động từ cơ bản, tính từ cơ bản.

KHÔNG thêm markdown, KHÔNG giải thích, CHỈ output JSONL.
```

### Prompt: Tạo Vocab N4 (150 từ) 

```
Bạn là chuyên gia tiếng Nhật. Tạo CHÍNH XÁC 150 từ vựng JLPT N4 phổ biến nhất (KHÔNG trùng N5).

[Giữ nguyên format và quy tắc như prompt N5 ở trên, đổi "jlpt":"N4"]

Chủ đề: công việc, du lịch, sức khỏe, cảm xúc, thời tiết, giao thông, mua sắm, trường học nâng cao.

KHÔNG thêm markdown, KHÔNG giải thích, CHỈ output JSONL.
```

### Prompt: Tạo Grammar N5 (50 mẫu)

```
Bạn là chuyên gia ngữ pháp tiếng Nhật. Tạo CHÍNH XÁC 50 mẫu ngữ pháp JLPT N5 phổ biến nhất.

Output: JSONL format — mỗi dòng là một JSON object.

Format mỗi dòng:
{"s":"〜構文","r":"reading","m":"Nghĩa tiếng Việt","usage":"Giải thích cách dùng chi tiết","cons":"Cấu tạo: V-て + いる","jlpt":"N5","ex":["例文|よみ|Nghĩa","例文2|よみ2|Nghĩa2"],"ctx":["Ngữ cảnh 1","Ngữ cảnh 2"],"rules":["Quy tắc 1","Quy tắc 2"]}

Quy tắc:
- s: dùng 〜 cho phần thay thế được
- ex: tối thiểu 2 ví dụ, format "câu JP|reading|nghĩa VN"
- ctx: 2-3 ngữ cảnh sử dụng điển hình
- rules: 2-3 quy tắc / lưu ý quan trọng
- cons: mô tả cấu tạo rõ ràng

KHÔNG thêm markdown, CHỈ output JSONL.
```

---

## 3. Quy trình sử dụng

### Bước 1: Generate data từ Gemini
1. Mở Google Gemini (gemini.google.com)
2. Paste prompt phù hợp (N5/N4/N3...)
3. Copy toàn bộ output

### Bước 2: Lưu file JSONL
1. Tạo file text, ví dụ: `vocab_n5_raw.txt`
2. Paste output vào 
3. Lưu vào thư mục `tools/` hoặc bất kỳ đâu

### Bước 3: Chuyển đổi bằng convert_data.py

```bash
# Chuyển đổi vocab
python tools/convert_data.py vocab tools/vocab_n5_raw.txt public/data/vocab.json

# Chuyển đổi grammar
python tools/convert_data.py grammar tools/grammar_n5_raw.txt public/data/grammar.json

# Chuyển đổi cả hai (cần 2 file input)
python tools/convert_data.py all tools/vocab_raw.txt tools/grammar_raw.txt
```

### Bước 4: Merge nhiều level
Khi có nhiều file (N5 + N4 + N3...), converter sẽ tự động merge (append) vào file output.
Hoặc tạo file JSONL lớn chứa tất cả rồi convert 1 lần.

### Bước 5: Build & Deploy
```bash
cd arukas-app
npm run build
firebase deploy --project arukas-fbc80
```

---

## 4. Kiểm tra dữ liệu

Converter sẽ in ra thống kê:
```
✅ Converted 100 vocab entries → public/data/vocab.json
   JLPT Distribution: N5: 100
   Types: NOUN: 35, VERB: 30, ADJ_I: 15, ADJ_NA: 10, ADVERB: 5, PARTICLE: 3, EXPRESSION: 2
   Skipped: 0 invalid lines
```

Nếu có lỗi, converter sẽ báo chi tiết dòng nào bị skip và lý do.

---

## 5. Tips

- **Chạy nhiều lần**: Gemini có thể tạo output không hoàn hảo. Chạy lại prompt nếu cần.
- **Kiểm tra trùng**: Converter sẽ cảnh báo nếu có từ trùng `t` (text).
- **Batch size**: Nên generate 100-200 từ mỗi lần để Gemini không bị quá tải.
- **Manual edit**: Có thể sửa file JSONL bằng text editor trước khi convert.
- **Backup**: Giữ file JSONL raw để có thể re-convert khi cần thay đổi format.
