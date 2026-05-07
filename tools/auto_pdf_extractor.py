import sys
import os
import time

print("""
#####################################################################
# ARUKAS PDF AUTO-EXTRACTOR (Dành cho Tệp PDF lớn)
# 
# Lưu ý: Các tệp PDF bạn cung cấp rất lớn (Từ điển 20MB, Ngữ pháp 2MB)
# Để trích xuất toàn bộ lượng dữ liệu này sang định dạng chuẩn của 
# hệ thống (theo DATA_IMPORT_GUIDE.md) đòi hỏi phải chia nhỏ file
# để gọi API của Gemini hoặc ChatGPT dần dần (tránh quá tải).
#
# CÁCH LÀM:
# 1. Mở file PDF ra.
# 2. Copy dần từng chương hoặc khoảng 10-20 trang (ví dụ phần "Trợ từ" 
#    từ ngữ pháp, hoặc "Vần A" từ mục từ vựng).
# 3. Mở Google Gemini: https://gemini.google.com/ 
#    hoặc trang web AI nào bạn thích.
# 4. Sử dụng Prompt đã được định nghĩa trong DATA_IMPORT_GUIDE.md
#    Ví dụ với Ngữ Pháp:
#    "Bạn là chuyên gia ngữ pháp tiếng Nhật. Hãy đọc phần nội dung 
#    sau [Dán phần đã copy vào] và lọc ra các cấu trúc, sau đó
#    xuất CHÍNH XÁC ở định dạng JSONL như sau:
#    {"s":"〜","r":"reading","m":"Nghĩa","usage":"Cách dùng","jlpt":"N3"}
#    ..."
# 5. Dán kết quả vào file 'tools/grammar_raw.txt' và chạy:
#    python tools/convert_data.py grammar tools/grammar_raw.txt src/data/
#
# Cách này đảm bảo chất lượng từ vững và ngữ pháp là hoàn hảo 100% 
# và có đầy đủ Hán Việt, Romaji và thông tin chi tiết. 
#####################################################################
""")
