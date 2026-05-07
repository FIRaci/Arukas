import os
import sys
import json
import time

try:
    import PyPDF2
    from google import genai
    from google.genai import types
except ImportError:
    print("Vui lòng cài đặt thư viện trước khi chạy:")
    print("pip install PyPDF2 google-genai")
    sys.exit(1)

# Lấy API Key từ biến môi trường hoặc cấu hình ở đây
API_KEY = os.environ.get("GEMINI_API_KEY", "AIzaSyByGov330xFuAe520_qQNekMPn14noHTYY")

if not API_KEY:
    print("❌ LỖI: Bạn cần điền GEMINI_API_KEY vào script hoặc biến môi trường!")
    sys.exit(1)

# Khởi tạo client Gemini
client = genai.Client(api_key=API_KEY)

# Prompt trích xuất Từ vựng
VOCAB_PROMPT = """
Bạn là chuyên gia tiếng Nhật. Trích xuất TẤT CẢ từ vựng tiếng Nhật từ đoạn nội dung sau.
Output là định dạng JSONL (mỗi dòng 1 JSON object hoàn chỉnh, tuyệt đối không có markdown).
Format:
{"t":"Từ (Kanji)","r":"Phiên âm (Hiragana)","rm":"Romaji","m":"Nghĩa","type":"NOUN/VERB/ADJ_I/ADJ_NA/adverb/particle","jlpt":"N5-N1","ex":["câu ví dụ 1|phiên âm|nghĩa 1"]}
Nếu thiếu thông tin nào hãy tự suy luận (vd: jlpt, type).
--- NỘI DUNG PDF ---
{text}
"""

# Prompt trích xuất Ngữ pháp
GRAMMAR_PROMPT = """
Bạn là chuyên gia ngữ pháp tiếng Nhật. Trích xuất TẤT CẢ cấu trúc ngữ pháp từ đoạn nội dung sau.
Output là định dạng JSONL (mỗi dòng 1 JSON object hoàn chỉnh, không markdown).
Format:
{"s":"〜Cấu trúc","r":"reading","m":"Nghĩa","usage":"Cách dùng","cons":"Cấu tạo","jlpt":"N5-N1","ex":["câu 1|phiên âm|nghĩa 1"]}
--- NỘI DUNG PDF ---
{text}
"""

def extract_pdf_to_jsonl(pdf_path: str, mode: str, output_path: str, start_page=0, batch_size=5):
    """
    Đọc PDF từng đoạn nhỏ, gọi Gemini API để trích xuất ra JSONL, và lưu dần vào file output.
    mode: 'vocab' hoặc 'grammar'
    """
    print(f"\n🚀 Đang mở PDF: {pdf_path}")
    print(f"📄 File output: {output_path}")
    
    with open(pdf_path, 'rb') as f:
        reader = PyPDF2.PdfReader(f)
        total_pages = len(reader.pages)
        print(f"📚 Tổng số trang: {total_pages}")
        
        prompt_template = VOCAB_PROMPT if mode == 'vocab' else GRAMMAR_PROMPT
        
        # Mở file output ở chế độ append (ghi tiếp)
        with open(output_path, 'a', encoding='utf-8') as out_f:
            
            # Quét từng batch trang
            for i in range(start_page, total_pages, batch_size):
                end_page = min(i + batch_size, total_pages)
                print(f"\n⏳ Đang xử lý trang {i+1} đến {end_page}...")
                
                # Trích xuất văn bản từ cụm trang
                text_chunk = ""
                for p in range(i, end_page):
                    page = reader.pages[p]
                    text_chunk += page.extract_text() + "\n"
                
                if not text_chunk.strip():
                    print("⚠️ Trang trống, bỏ qua.")
                    continue
                
                # Retry loop cho điểm này
                retries = 0
                while retries < 5:
                    try:
                        prompt_filled = prompt_template.replace("{text}", text_chunk)
                        response = client.models.generate_content(
                            model='gemini-2.5-flash',
                            contents=prompt_filled,
                            config=types.GenerateContentConfig(
                                temperature=0.2, # Lấy output chính xác, ít sáng tạo
                            )
                        )
                        
                        # Bỏ các phần bọc markdown nếu AI lỡ thêm vào
                        content = response.text.replace("```jsonl", "").replace("```json", "").replace("```", "").strip()
                        
                        # Kiểm tra lại từng dòng có phải JSON valid không
                        valid_lines = []
                        for line in content.split('\n'):
                            line = line.strip()
                            if not line: continue
                            if line.startswith('{') and line.endswith('}'):
                                valid_lines.append(line)
                                
                        out_f.write('\n'.join(valid_lines) + '\n')
                        out_f.flush() # Lưu ngay xuống đĩa
                        
                        print(f"✅ Đã trích xuất {len(valid_lines)} mục nhập mới.")
                        time.sleep(3) # Rate limit bảo vệ API (15 RPM)
                        break # THÀNH CÔNG -> Thoát khỏi retry loop để đi sang trang tiếp theo!
                        
                    except Exception as e:
                        err_msg = str(e)
                        if "429" in err_msg or "RESOURCE_EXHAUSTED" in err_msg:
                            print(f"⚠️ Giới hạn (Rate Limit) ở trang {i+1}-{end_page}! Chờ 60 giây để API tải lại...")
                            time.sleep(60)
                            # Không tăng `retries` vì lỗi 429 là lỗi quá tải khách quan, cứ chờ rồi làm lại
                        else:
                            print(f"❌ Lỗi API ở các trang {i+1}-{end_page}: {repr(e)}")
                            print("Tạm dừng 10 giây rồi retry...")
                            time.sleep(10)
                            retries += 1
                
                if retries >= 5:
                    print(f"💀 BỎ QUA các trang {i+1}-{end_page} do lỗi liên tục quá 5 lần!")

    print("\n🎉 HOÀN TẤT TRÍCH XUẤT! Bạn có thể chạy convert_data.py để áp dụng dữ liệu vào app.")

if __name__ == "__main__":
    script_dir = os.path.dirname(os.path.abspath(__file__))
    print("Trình Trợ lý Cào Dữ Liệu Tự Động")
    print("--------------------------------")
    print("Script này sẽ tự động đọc PDF, dùng Gemini API để tạo JSONL")
    # Bạn có thể bỏ comment ở các dòng dưới để chạy nhé!
extract_pdf_to_jsonl(os.path.join(script_dir, "../../[studyjapanese.net]_Tu_Dien_Nhat-Viet_Viet-Nhat.pdf"), "vocab", os.path.join(script_dir, "vocab_new.txt"))
extract_pdf_to_jsonl(os.path.join(script_dir, "../../grammar_guide.pdf"), "grammar", os.path.join(script_dir, "grammar_new.txt"))
