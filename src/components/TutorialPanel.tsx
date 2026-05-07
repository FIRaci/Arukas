import React, { useState } from 'react';

// ============================================================
//  TUTORIAL PANEL — slide-out from right
// ============================================================

interface TutorialPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TutorialSection {
  id: string;
  title: string;
  content: React.ReactNode;
}

const TutorialPanel: React.FC<TutorialPanelProps> = ({ isOpen, onClose }) => {
  const [expandedId, setExpandedId] = useState<string | null>('overview');

  const toggle = (id: string) => setExpandedId(prev => (prev === id ? null : id));

  const sections: TutorialSection[] = [
    {
      id: 'overview',
      title: 'Tổng quan',
      content: (
        <div className="space-y-3 text-[13px] leading-relaxed text-stone-600">
          <p>
            <strong className="text-stone-800">Arukas</strong> là công cụ phân tích cú pháp tiếng Nhật chuyên sâu, 
            hỗ trợ người học hiểu rõ cấu trúc ngữ pháp, từ vựng và ngữ cảnh của câu.
          </p>
          <p>
            Ứng dụng sử dụng AI (Gemini) kết hợp với bộ phân tích local để đưa ra kết quả 
            chính xác và nhanh chóng. Với các câu ngắn và đơn giản, hệ thống local sẽ xử lý 
            ngay lập tức mà không cần gọi AI.
          </p>
        </div>
      ),
    },
    {
      id: 'text',
      title: 'Phân tích văn bản',
      content: (
        <div className="space-y-3 text-[13px] leading-relaxed text-stone-600">
          <p>Nhập hoặc dán câu tiếng Nhật vào ô nhập liệu, sau đó nhấn nút phân tích.</p>
          <div className="bg-stone-50 rounded-lg p-3 border border-stone-200 space-y-2">
            <Row label="Ô nhập liệu" desc="Hỗ trợ văn bản thuần hoặc dán ảnh trực tiếp (Ctrl+V)" />
            <Row label="Khối 1.0" desc="Cú pháp tổng quan -- hiển thị cấu trúc câu, chủ ngữ, vị ngữ, trợ từ" />
            <Row label="Khối 2.0" desc="Giải phẫu từ vựng -- phân tích chi tiết từng token, vai trò ngữ pháp, cách chia động từ" />
            <Row label="Khối 3.0" desc="Ánh xạ ngữ cảnh -- bản dịch tự nhiên với mapping từ gốc" />
          </div>
          <p>
            Bạn có thể kéo thả để sắp xếp lại thứ tự các khối phân tích theo ý thích.
          </p>
        </div>
      ),
    },
    {
      id: 'image',
      title: 'Phân tích hình ảnh',
      content: (
        <div className="space-y-3 text-[13px] leading-relaxed text-stone-600">
          <p>Hỗ trợ hai cách đưa hình ảnh vào:</p>
          <div className="bg-stone-50 rounded-lg p-3 border border-stone-200 space-y-2">
            <Row label="Ctrl + V" desc="Dán ảnh từ clipboard trực tiếp vào ô nhập liệu" />
            <Row label="Nút tải lên" desc="Chọn file ảnh từ máy tính" />
          </div>
          <p>
            AI sẽ nhận diện chữ tiếng Nhật trong ảnh (OCR) và phân tích cú pháp tương tự như văn bản thuần.
          </p>
        </div>
      ),
    },
    {
      id: 'manga',
      title: 'Chế độ Manga',
      content: (
        <div className="space-y-3 text-[13px] leading-relaxed text-stone-600">
          <p>Chuyển sang tab <strong className="text-stone-800">Manga</strong> để phân tích truyện tranh.</p>
          <div className="bg-stone-50 rounded-lg p-3 border border-stone-200 space-y-2">
            <Row label="Tải trang" desc="Tải lên nhiều trang manga cùng lúc (tối đa 30 trang)" />
            <Row label="Xử lý hàng loạt" desc="AI phân tích từng trang, trích xuất hội thoại và phân tích ngữ pháp" />
            <Row label="Gán tên nhân vật" desc="Nhấn nút gán tên trên mỗi bong bóng thoại để đặt tên nhân vật" />
            <Row label="Bộ nhớ nhân vật" desc="Tên nhân vật được lưu theo tựa manga, tự động nhận diện ở các chương sau" />
          </div>
        </div>
      ),
    },
    {
      id: 'anime',
      title: 'Chế độ Anime',
      content: (
        <div className="space-y-3 text-[13px] leading-relaxed text-stone-600">
          <p>Chuyển sang tab <strong className="text-stone-800">Anime</strong> để phân tích phụ đề từ video.</p>
          <div className="bg-stone-50 rounded-lg p-3 border border-stone-200 space-y-2">
            <Row label="Tải video" desc="Hỗ trợ file video (giới hạn 100MB)" />
            <Row label="Trích xuất frame" desc="AI tự động trích xuất các frame có text, loại bỏ frame trùng lặp" />
            <Row label="Gán tên" desc="Tương tự Manga, hỗ trợ đổi tên nhân vật ngay trên giao diện" />
          </div>
        </div>
      ),
    },
    {
      id: 'sessions',
      title: 'Quản lý phiên',
      content: (
        <div className="space-y-3 text-[13px] leading-relaxed text-stone-600">
          <p>Kết quả phân tích có thể được lưu lại để xem sau.</p>
          <div className="bg-stone-50 rounded-lg p-3 border border-stone-200 space-y-2">
            <Row label="Nút Phiên" desc="Nằm ở thanh công cụ phía dưới, nhấn để mở danh sách phiên đã lưu" />
            <Row label="Lưu tự động" desc="Mỗi lần phân tích, kết quả được tự động lưu vào phiên hiện tại" />
            <Row label="Phiên mới" desc="Nhấn '+ Phiên mới' để tạo phiên trống, bắt đầu phân tích mới" />
            <Row label="Manga / Anime" desc="Phiên Manga và Anime được đồng bộ lên Firestore khi đăng nhập" />
          </div>
        </div>
      ),
    },
    {
      id: 'vocab',
      title: 'Lưu từ vựng & Ngữ pháp',
      content: (
        <div className="space-y-3 text-[13px] leading-relaxed text-stone-600">
          <p>Trong kết quả phân tích, bạn có thể lưu lại từ vựng và mẫu ngữ pháp.</p>
          <div className="bg-stone-50 rounded-lg p-3 border border-stone-200 space-y-2">
            <Row label="Lưu từ vựng" desc="Nhấn vào token bất kỳ trong khối 2.0 để lưu vào kho từ vựng cá nhân" />
            <Row label="Lưu ngữ pháp" desc="Nhấn vào nút ngữ pháp trong khối 2.0 để xem chi tiết và lưu lại" />
            <Row label="Kho lưu trữ" desc="Nhấn vào biểu tượng kho trên thanh điều hướng để xem tất cả mục đã lưu" />
            <Row label="Đồng bộ" desc="Dữ liệu được đồng bộ qua Firestore khi đăng nhập tài khoản" />
          </div>
        </div>
      ),
    },
    {
      id: 'tts',
      title: 'Đọc văn bản (TTS)',
      content: (
        <div className="space-y-3 text-[13px] leading-relaxed text-stone-600">
          <p>Ứng dụng hỗ trợ đọc to văn bản tiếng Nhật bằng Google TTS.</p>
          <div className="bg-stone-50 rounded-lg p-3 border border-stone-200 space-y-2">
            <Row label="Nút loa" desc="Nhấn biểu tượng loa trên thanh công cụ hoặc cạnh mỗi token" />
            <Row label="Chọn vùng đọc" desc="Kéo thanh phạm vi để chọn đoạn cần đọc" />
            <Row label="Đọc từng từ" desc="Mỗi token có nút loa riêng để nghe phát âm từng từ" />
          </div>
        </div>
      ),
    },
    {
      id: 'settings',
      title: 'Cài đặt',
      content: (
        <div className="space-y-3 text-[13px] leading-relaxed text-stone-600">
          <p>Nhấn biểu tượng bánh răng trên thanh điều hướng để mở bảng cài đặt.</p>
          <div className="bg-stone-50 rounded-lg p-3 border border-stone-200 space-y-2">
            <Row label="Giao diện" desc="Ba chủ đề: Sakura (hồng), Sáng, Tối" />
            <Row label="Cỡ chữ" desc="Bốn mức: Nhỏ, Vừa, Lớn, Rất lớn" />
            <Row label="Font chữ" desc="Tùy chỉnh font tiếng Việt và tiếng Nhật riêng biệt" />
            <Row label="Hiệu ứng" desc="Bật/tắt hiệu ứng cánh hoa sakura rơi" />
            <Row label="Ẩn khối phân tích" desc="Tùy chọn ẩn phần token chi tiết trong khối 2.0" />
          </div>
        </div>
      ),
    },
    {
      id: 'shortcuts',
      title: 'Phím tắt & Mẹo',
      content: (
        <div className="space-y-3 text-[13px] leading-relaxed text-stone-600">
          <div className="bg-stone-50 rounded-lg p-3 border border-stone-200 space-y-2">
            <Row label="Ctrl + V" desc="Dán ảnh từ clipboard vào ô phân tích" />
            <Row label="Ctrl + Enter" desc="Gửi phân tích nhanh" />
            <Row label="Ẩn thanh điều hướng" desc="Nhấn mũi tên lên ở góc phải thanh điều hướng" />
            <Row label="Ẩn tiêu đề" desc="Nhấn 'Ẩn tiêu đề' phía trên ô nhập liệu" />
            <Row label="Sắp xếp khối" desc="Dùng nút mũi tên trên mỗi khối phân tích để di chuyển lên/xuống" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60]"
          onClick={onClose}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[440px] z-[70] transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
        style={{
          backgroundColor: 'var(--sp-bg)',
          borderLeft: '1px solid var(--sp-border)',
          boxShadow: isOpen ? '-10px 0 40px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: 'var(--sp-border)' }}>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" style={{ color: 'var(--sp-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16v-4M12 8h.01" />
              </svg>
              <h2 className="text-lg font-bold" style={{ color: 'var(--sp-text)' }}>Hướng dẫn sử dụng</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full transition-colors"
              style={{ color: 'var(--sp-text-muted)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--sp-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              aria-label="Đóng hướng dẫn"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Accordion content */}
          <div className="flex-1 px-4 py-4 space-y-1">
            {sections.map((s) => (
              <div key={s.id} className="rounded-xl overflow-hidden border transition-colors" style={{ borderColor: expandedId === s.id ? 'var(--sp-accent)' : 'var(--sp-border)' }}>
                <button
                  onClick={() => toggle(s.id)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left transition-colors"
                  style={{
                    backgroundColor: expandedId === s.id ? 'var(--sp-hover)' : 'var(--sp-card)',
                    color: 'var(--sp-text)',
                  }}
                  onMouseEnter={(e) => { if (expandedId !== s.id) e.currentTarget.style.backgroundColor = 'var(--sp-hover)'; }}
                  onMouseLeave={(e) => { if (expandedId !== s.id) e.currentTarget.style.backgroundColor = 'var(--sp-card)'; }}
                >
                  <span className="text-sm font-semibold">{s.title}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${expandedId === s.id ? 'rotate-180' : ''}`}
                    style={{ color: 'var(--sp-text-muted)' }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${expandedId === s.id ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}
                  style={{ backgroundColor: 'var(--sp-bg)' }}
                >
                  <div className="px-4 py-3">
                    {s.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t text-center" style={{ borderColor: 'var(--sp-border)' }}>
            <p className="text-[11px]" style={{ color: 'var(--sp-text-muted)' }}>
              Arukas v2.0 — Phân tích cú pháp tiếng Nhật
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

// ── Helper row ──
const Row: React.FC<{ label: string; desc: string }> = ({ label, desc }) => (
  <div className="flex gap-2">
    <span className="text-[12px] font-bold text-stone-700 min-w-[110px] shrink-0">{label}</span>
    <span className="text-[12px] text-stone-500">{desc}</span>
  </div>
);

export default TutorialPanel;
