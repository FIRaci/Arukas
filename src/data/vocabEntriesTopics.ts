// ============================================================================
// VOCAB ENTRIES TOPICS — All parts (merged)
// ============================================================================
import type { VocabEntry } from './vocabTypes';

// ── from: vocabTopic_IT.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: IT, PROGRAMMING & TECH
// Từ vựng chuyên ngành Công nghệ thông tin, Lập trình
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_IT: VocabEntry[] = [
  // ─── Phần cứng & Thiết bị (Hardware) ───
  { id: 'it-gamem', word: '画面', reading: 'がめん', romaji: 'gamen', meaning: 'Màn hình', hanViet: 'HỌA DIỆN', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Hardware'], examples: [{ jp: '画面が固まる。', reading: 'がめんがかたまる。', meaning: 'Màn hình bị đơ.' }] },
  { id: 'it-kibodo', word: 'キーボード', reading: 'キーボード', romaji: 'kiiboodo', meaning: 'Bàn phím', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Hardware'], examples: [{ jp: 'キーボードを叩く。', reading: 'キーボードをたたく。', meaning: 'Gõ bàn phím.' }] },
  { id: 'it-mausu', word: 'マウス', reading: 'マウス', romaji: 'mausu', meaning: 'Chuột (máy tính)', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Hardware'], examples: [{ jp: 'マウスをクリックする。', reading: 'マウスをクリックする。', meaning: 'Click chuột.' }] },
  { id: 'it-jyuuden', word: '充電', reading: 'じゅうでん', romaji: 'juuden', meaning: 'Sạc pin', hanViet: 'SUNG ĐIỆN', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Hardware'], examples: [{ jp: 'スマホを充電する。', reading: 'スマホをじゅうでんする。', meaning: 'Sạc điện thoại.' }] },
  { id: 'it-setsuzoku', word: '接続', reading: 'せつぞく', romaji: 'setsuzoku', meaning: 'Kết nối (Connection)', hanViet: 'TIẾP TỤC', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Network'], examples: [{ jp: 'ネットに接続する。', reading: 'ネットにせつぞくする。', meaning: 'Kết nối internet.' }] },
  { id: 'it-kiki', word: '機器', reading: 'きき', romaji: 'kiki', meaning: 'Thiết bị', hanViet: 'CƠ KHÍ', type: 'Danh từ', jlpt: 'N2', tags: ['IT', 'Hardware'], examples: [{ jp: '周辺機器。', reading: 'しゅうへんきき。', meaning: 'Thiết bị ngoại vi.' }] },
  { id: 'it-koshou', word: '故障', reading: 'こしょう', romaji: 'koshou', meaning: 'Hỏng hóc, lỗi (Hardware)', hanViet: 'CỐ CHƯỚNG', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Hardware'], examples: [{ jp: 'プリンターが故障した。', reading: 'プリンターがこしょうした。', meaning: 'Máy in bị hỏng.' }] },

  // ─── Phần mềm & Lập trình (Software & Coding) ───
  { id: 'it-kaihatsu', word: '開発', reading: 'かいはつ', romaji: 'kaihatsu', meaning: 'Phát triển (Development)', hanViet: 'KHAI PHÁT', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Coding'], examples: [{ jp: 'アプリを開発する。', reading: 'アプリをかいはつする。', meaning: 'Phát triển ứng dụng.' }] },
  { id: 'it-kankyou', word: '環境', reading: 'かんきょう', romaji: 'kankyou', meaning: 'Môi trường (Environment)', hanViet: 'HOÀN CẢNH', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Coding'], examples: [{ jp: '開発環境を整える。', reading: 'かいはつかんきょうをととのえる。', meaning: 'Thiết lập môi trường phát triển.' }] },
  { id: 'it-gengo', word: '言語', reading: 'げんご', romaji: 'gengo', meaning: 'Ngôn ngữ (Language)', hanViet: 'NGÔN NGỮ', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Coding'], examples: [{ jp: 'プログラミング言語。', reading: 'プログラミングげんご。', meaning: 'Ngôn ngữ lập trình.' }] },
  { id: 'it-koushin', word: '更新', reading: 'こうしん', romaji: 'koushin', meaning: 'Cập nhật (Update)', hanViet: 'CANH TÂN', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Software'], examples: [{ jp: 'データを更新する。', reading: 'データをこうしんする。', meaning: 'Cập nhật dữ liệu.' }] },
  { id: 'it-hozon', word: '保存', reading: 'ほぞん', romaji: 'hozon', meaning: 'Lưu (Save)', hanViet: 'BẢO TỒN', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Software'], examples: [{ jp: 'ファイルを保存する。', reading: 'ファイルをほぞんする。', meaning: 'Lưu file.' }] },
  { id: 'it-sakujo', word: '削除', reading: 'さくじょ', romaji: 'sakujo', meaning: 'Xóa (Delete)', hanViet: 'TƯỚC TRỪ', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Software'], examples: [{ jp: 'メールを削除する。', reading: 'メールをさくじょする。', meaning: 'Xóa email.' }] },
  { id: 'it-kensaku', word: '検索', reading: 'けんさく', romaji: 'kensaku', meaning: 'Tìm kiếm (Search)', hanViet: 'KIỂM TÁC', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Software'], examples: [{ jp: 'ネットで検索する。', reading: 'ネットでけんさくする。', meaning: 'Tìm kiếm trên mạng.' }] },
  { id: 'it-touroku', word: '登録', reading: 'とうろく', romaji: 'touroku', meaning: 'Đăng ký (Register)', hanViet: 'ĐĂNG LỤC', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Software'], examples: [{ jp: '会員登録。', reading: 'かいいんとうろく。', meaning: 'Đăng ký thành viên.' }] },
  { id: 'it-henshuu', word: '編集', reading: 'へんしゅう', romaji: 'henshuu', meaning: 'Chỉnh sửa (Edit)', hanViet: 'BIÊN TẬP', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Software'], examples: [{ jp: '動画を編集する。', reading: 'どうがをへんしゅうする。', meaning: 'Chỉnh sửa video.' }] },
  { id: 'it-settei', word: '設定', reading: 'せってい', romaji: 'settei', meaning: 'Cài đặt (Settings/Config)', hanViet: 'THIẾT ĐỊNH', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Software'], examples: [{ jp: '初期設定。', reading: 'しょきせってい。', meaning: 'Cài đặt ban đầu.' }] },
  { id: 'it-hyouji', word: '表示', reading: 'ひょうじ', romaji: 'hyouji', meaning: 'Hiển thị (Display)', hanViet: 'BIỂU THỊ', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'UI/UX'], examples: [{ jp: 'エラーが表示される。', reading: 'エラーがひょうじされる。', meaning: 'Lỗi được hiển thị.' }] },
  { id: 'it-nyuuryoku', word: '入力', reading: 'にゅうりょく', romaji: 'nyuuryoku', meaning: 'Nhập liệu (Input)', hanViet: 'NHẬP LỰC', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Software'], examples: [{ jp: 'パスワードを入力する。', reading: 'パスワードをにゅうりょくする。', meaning: 'Nhập mật khẩu.' }] },
  { id: 'it-shutsuryoku', word: '出力', reading: 'しゅつりょく', romaji: 'shutsuryoku', meaning: 'Xuất dữ liệu (Output)', hanViet: 'XUẤT LỰC', type: 'Danh từ', jlpt: 'N2', tags: ['IT', 'Software'], examples: [{ jp: '画面に出力する。', reading: 'がめんにしゅつりょくする。', meaning: 'Xuất ra màn hình.' }] },
  { id: 'it-kinou', word: '機能', reading: 'きのう', romaji: 'kinou', meaning: 'Chức năng (Function)', hanViet: 'CƠ NĂNG', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Software'], examples: [{ jp: '新機能を追加する。', reading: 'しんきのうをついかする。', meaning: 'Thêm chức năng mới.' }] },
  { id: 'it-sousa', word: '操作', reading: 'そうさ', romaji: 'sousa', meaning: 'Thao tác (Operation)', hanViet: 'THAO TÁC', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'User'], examples: [{ jp: 'マウスの操作。', reading: 'マウスのそうさ。', meaning: 'Thao tác chuột.' }] },
  { id: 'it-shori', word: '処理', reading: 'しょり', romaji: 'shori', meaning: 'Xử lý (Processing)', hanViet: 'XỬ LÝ', type: 'Danh từ', jlpt: 'N2', tags: ['IT', 'Coding'], examples: [{ jp: '画像処理。', reading: 'がぞうしょり。', meaning: 'Xử lý hình ảnh.' }] },
  { id: 'it-seigen', word: '制限', reading: 'せいげん', romaji: 'seigen', meaning: 'Hạn chế, giới hạn (Limit)', hanViet: 'CHẾ HẠN', type: 'Danh từ', jlpt: 'N2', tags: ['IT', 'Security'], examples: [{ jp: 'アクセス制限。', reading: 'アクセスせいげん。', meaning: 'Giới hạn truy cập.' }] },
  { id: 'it-shougai', word: '障害', reading: 'しょうがい', romaji: 'shougai', meaning: 'Lỗi, sự cố (Failure/Bug)', hanViet: 'CHƯỚNG HẠI', type: 'Danh từ', jlpt: 'N1', tags: ['IT', 'System'], examples: [{ jp: 'システム障害。', reading: 'システムしょうがい。', meaning: 'Sự cố hệ thống.' }] },
  { id: 'it-hoshu', word: '保守', reading: 'ほしゅ', romaji: 'hoshu', meaning: 'Bảo trì (Maintenance)', hanViet: 'BẢO THỦ', type: 'Danh từ', jlpt: 'N1', tags: ['IT', 'System'], examples: [{ jp: 'サーバーの保守。', reading: 'サーバーのほしゅ。', meaning: 'Bảo trì máy chủ.' }] },
  { id: 'it-ninshou', word: '認証', reading: 'にんしょう', romaji: 'ninshou', meaning: 'Xác thực (Authentication)', hanViet: 'NHẬN CHỨNG', type: 'Danh từ', jlpt: 'N1', tags: ['IT', 'Security'], examples: [{ jp: '指紋認証。', reading: 'しもんにんしょう。', meaning: 'Xác thực vân tay.' }] },
  { id: 'it-angou', word: '暗号', reading: 'あんごう', romaji: 'angou', meaning: 'Mật mã (Encryption)', hanViet: 'ÁM HIỆU', type: 'Danh từ', jlpt: 'N2', tags: ['IT', 'Security'], examples: [{ jp: 'データを暗号化する。', reading: 'データをあんごうかする。', meaning: 'Mã hóa dữ liệu.' }] },
  { id: 'it-bunseki', word: '分析', reading: 'ぶんせき', romaji: 'bunseki', meaning: 'Phân tích (Analysis)', hanViet: 'PHÂN TÍCH', type: 'Danh từ', jlpt: 'N2', tags: ['IT', 'Data'], examples: [{ jp: 'アクセス解析。', reading: 'アクセスかいせき。', meaning: 'Phân tích truy cập.' }] },
  { id: 'it-tensou', word: '転送', reading: 'てんそう', romaji: 'tensou', meaning: 'Chuyển tiếp (Forward/Transfer)', hanViet: 'CHUYỂN TỐNG', type: 'Danh từ', jlpt: 'N2', tags: ['IT', 'Network'], examples: [{ jp: 'メールを転送する。', reading: 'メールをてんそうする。', meaning: 'Chuyển tiếp mail.' }] },
  { id: 'it-fuguai', word: '不具合', reading: 'ふぐあい', romaji: 'fuguai', meaning: 'Lỗi, bug (Defect)', type: 'Danh từ', jlpt: 'N2', tags: ['IT', 'Testing'], examples: [{ jp: '不具合を修正する。', reading: 'ふぐあいをしゅうせいする。', meaning: 'Sửa lỗi.' }] },
  { id: 'it-shuusei', word: '修正', reading: 'しゅうせい', romaji: 'shuusei', meaning: 'Sửa đổi (Fix/Modify)', hanViet: 'TU CHÍNH', type: 'Danh từ', jlpt: 'N2', tags: ['IT', 'Coding'], examples: [{ jp: 'バグを修正する。', reading: 'バグをしゅうせいする。', meaning: 'Sửa bug.' }] },
  { id: 'it-kanri', word: '管理', reading: 'かんり', romaji: 'kanri', meaning: 'Quản lý (Admin/Manage)', hanViet: 'QUẢN LÝ', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'System'], examples: [{ jp: '管理者権限。', reading: 'かんりしゃけんげん。', meaning: 'Quyền quản trị viên.' }] },
  { id: 'it-sakusei', word: '作成', reading: 'さくせい', romaji: 'sakusei', meaning: 'Tạo, lập (Create)', hanViet: 'TÁC THÀNH', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Document'], examples: [{ jp: 'アカウントを作成する。', reading: 'アカウントをさくせいする。', meaning: 'Tạo tài khoản.' }] },
  { id: 'it-kaishi', word: '開始', reading: 'かいし', romaji: 'kaishi', meaning: 'Bắt đầu (Start)', hanViet: 'KHAI THỦY', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Process'], examples: [{ jp: 'ダウンロードを開始する。', reading: 'ダウンロードをかいしする。', meaning: 'Bắt đầu tải về.' }] },
  { id: 'it-kanryou', word: '完了', reading: 'かんりょう', romaji: 'kanryou', meaning: 'Hoàn tất (Complete)', hanViet: 'HOÀN LIỄU', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Process'], examples: [{ jp: 'インストールが完了した。', reading: 'インストールがかんりょうした。', meaning: 'Cài đặt đã hoàn tất.' }] },
  { id: 'it-teishi', word: '停止', reading: 'ていし', romaji: 'teishi', meaning: 'Dừng (Stop/Suspend)', hanViet: 'ĐÌNH CHỈ', type: 'Danh từ', jlpt: 'N3', tags: ['IT', 'Process'], examples: [{ jp: 'サービスを停止する。', reading: 'サービスをていしする。', meaning: 'Ngưng dịch vụ.' }] },
];

// ── from: vocabTopic_BodyHealth.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: BODY, HEALTH & MEDICINE
// Từ vựng về Cơ thể người, Triệu chứng bệnh & Y tế
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_BODY_HEALTH: VocabEntry[] = [
  // ─── Các bộ phận cơ thể (Body Parts) ───
  { id: 'body-kibi', word: '首', reading: 'くび', romaji: 'kubi', meaning: 'Cổ', hanViet: 'THỦ', type: 'Danh từ', jlpt: 'N4', tags: ['Cơ thể'], examples: [{ jp: '首が痛い。', reading: 'くびがいたい。', meaning: 'Đau cổ.' }] },
  { id: 'body-kata', word: '肩', reading: 'かた', romaji: 'kata', meaning: 'Vai', hanViet: 'KIÊN', type: 'Danh từ', jlpt: 'N4', tags: ['Cơ thể'], examples: [{ jp: '肩が凝る。', reading: 'かたがこる。', meaning: 'Mỏi vai.' }] },
  { id: 'body-mune', word: '胸', reading: 'むね', romaji: 'mune', meaning: 'Ngực', hanViet: 'HUNG', type: 'Danh từ', jlpt: 'N3', tags: ['Cơ thể'], examples: [{ jp: '胸が苦しい。', reading: 'むねがくるしい。', meaning: 'Tức ngực.' }] },
  { id: 'body-koshi', word: '腰', reading: 'こし', romaji: 'koshi', meaning: 'Eo, hông', hanViet: 'YÊU', type: 'Danh từ', jlpt: 'N3', tags: ['Cơ thể'], examples: [{ jp: '腰を痛める。', reading: 'こしをいためる。', meaning: 'Đau lưng/hông.' }] },
  { id: 'body-hiza', word: '膝', reading: 'ひざ', romaji: 'hiza', meaning: 'Đầu gối', hanViet: 'TẤT', type: 'Danh từ', jlpt: 'N3', tags: ['Cơ thể'], examples: [{ jp: '膝を曲げる。', reading: 'ひざをまげる。', meaning: 'Gập đầu gối.' }] },
  { id: 'body-hiji', word: '肘', reading: 'ひじ', romaji: 'hiji', meaning: 'Khuỷu tay', type: 'Danh từ', jlpt: 'N2', tags: ['Cơ thể'], examples: [{ jp: '肘をつく。', reading: 'ひじをつく。', meaning: 'Chống khuỷu tay.' }] },
  { id: 'body-tekubi', word: '手首', reading: 'てくび', romaji: 'tekubi', meaning: 'Cổ tay', type: 'Danh từ', jlpt: 'N3', tags: ['Cơ thể'], examples: [{ jp: '手首を回す。', reading: 'てくびをまわす。', meaning: 'Xoay cổ tay.' }] },
  { id: 'body-ashikubi', word: '足首', reading: 'あしくび', romaji: 'ashikubi', meaning: 'Cổ chân', type: 'Danh từ', jlpt: 'N3', tags: ['Cơ thể'], examples: [{ jp: '足首を捻挫した。', reading: 'あしくびをねんざした。', meaning: 'Bị bong gân cổ chân.' }] },
  { id: 'body-tsume', word: '爪', reading: 'つめ', romaji: 'tsume', meaning: 'Móng (tay/chân)', hanViet: 'TRẢO', type: 'Danh từ', jlpt: 'N3', tags: ['Cơ thể'], examples: [{ jp: '爪を切る。', reading: 'つめをきる。', meaning: 'Cắt móng tay.' }] },
  { id: 'body-hifu', word: '皮膚', reading: 'ひふ', romaji: 'hifu', meaning: 'Da', hanViet: 'BÌ PHU', type: 'Danh từ', jlpt: 'N2', tags: ['Cơ thể'], examples: [{ jp: '皮膚が乾燥する。', reading: 'ひふがかんそうする。', meaning: 'Da bị khô.' }] },
  { id: 'body-hone', word: '骨', reading: 'ほね', romaji: 'hone', meaning: 'Xương', hanViet: 'CỐT', type: 'Danh từ', jlpt: 'N3', tags: ['Cơ thể'], examples: [{ jp: '骨を折る。', reading: 'ほねをおる。', meaning: 'Gãy xương.' }] },
  { id: 'body-kinniku', word: '筋肉', reading: 'きんにく', romaji: 'kinniku', meaning: 'Cơ bắp', hanViet: 'CÂN NHỤC', type: 'Danh từ', jlpt: 'N3', tags: ['Cơ thể'], examples: [{ jp: '筋肉痛。', reading: 'きんにくつう。', meaning: 'Đau cơ.' }] },
  { id: 'body-nou', word: '脳', reading: 'のう', romaji: 'nou', meaning: 'Não', hanViet: 'NÃO', type: 'Danh từ', jlpt: 'N2', tags: ['Cơ thể', 'Nội tạng'], examples: [{ jp: '脳の働き。', reading: 'のうのはたらき。', meaning: 'Hoạt động của não.' }] },
  { id: 'body-inzou', word: '心臓', reading: 'しんぞう', romaji: 'shinzou', meaning: 'Tim', hanViet: 'TÂM TẠNG', type: 'Danh từ', jlpt: 'N2', tags: ['Cơ thể', 'Nội tạng'], examples: [{ jp: '心臓が止まる。', reading: 'しんぞうがとまる。', meaning: 'Tim ngừng đập.' }] },
  { id: 'body-i', word: '胃', reading: 'い', romaji: 'i', meaning: 'Dạ dày', hanViet: 'VỊ', type: 'Danh từ', jlpt: 'N2', tags: ['Cơ thể', 'Nội tạng'], examples: [{ jp: '胃が痛い。', reading: 'いがいたい。', meaning: 'Đau dạ dày.' }] },
  { id: 'body-hai', word: '肺', reading: 'はい', romaji: 'hai', meaning: 'Phổi', hanViet: 'PHẾ', type: 'Danh từ', jlpt: 'N2', tags: ['Cơ thể', 'Nội tạng'], examples: [{ jp: '肺の検査。', reading: 'はいのけんさ。', meaning: 'Kiểm tra phổi.' }] },
  { id: 'body-ketsueki', word: '血液', reading: 'けつえき', romaji: 'ketsueki', meaning: 'Máu', hanViet: 'HUYẾT DỊCH', type: 'Danh từ', jlpt: 'N2', tags: ['Cơ thể'], examples: [{ jp: '血液型。', reading: 'けつえきがた。', meaning: 'Nhóm máu.' }] },

  // ─── Triệu chứng & Bệnh tật (Symptoms & Diseases) ───
  { id: 'health-kaze', word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: 'Cảm cúm', hanViet: 'PHONG TÀ', type: 'Danh từ', jlpt: 'N5', tags: ['Bệnh'], examples: [{ jp: '風邪を引く。', reading: 'かぜをひく。', meaning: 'Bị cảm.' }] },
  { id: 'health-netsu', word: '熱', reading: 'ねつ', romaji: 'netsu', meaning: 'Sốt', hanViet: 'NHIỆT', type: 'Danh từ', jlpt: 'N5', tags: ['Triệu chứng'], examples: [{ jp: '熱がある。', reading: 'ねつがある。', meaning: 'Bị sốt.' }] },
  { id: 'health-seki', word: '咳', reading: 'せき', romaji: 'seki', meaning: 'Ho', hanViet: 'KHÁI', type: 'Danh từ', jlpt: 'N3', tags: ['Triệu chứng'], examples: [{ jp: '咳が出る。', reading: 'せきがでる。', meaning: 'Bị ho.' }] },
  { id: 'health-zutsuu', word: '頭痛', reading: 'ずつう', romaji: 'zutsuu', meaning: 'Đau đầu', hanViet: 'ĐẦU THỐNG', type: 'Danh từ', jlpt: 'N3', tags: ['Triệu chứng'], examples: [{ jp: '頭痛がする。', reading: 'ずつうがする。', meaning: 'Bị đau đầu.' }] },
  { id: 'health-fukutsuu', word: '腹痛', reading: 'ふくつう', romaji: 'fukutsuu', meaning: 'Đau bụng', hanViet: 'PHÚC THỐNG', type: 'Danh từ', jlpt: 'N3', tags: ['Triệu chứng'], examples: [{ jp: '腹痛薬。', reading: 'ふくつうやく。', meaning: 'Thuốc đau bụng.' }] },
  { id: 'health-geri', word: '下痢', reading: 'げり', romaji: 'geri', meaning: 'Tiêu chảy', hanViet: 'HẠ LỴ', type: 'Danh từ', jlpt: 'N3', tags: ['Triệu chứng'], examples: [{ jp: '下痢気味だ。', reading: 'げりぎみだ。', meaning: 'Có triệu chứng tiêu chảy.' }] },
  { id: 'health-benpi', word: '便秘', reading: 'べんぴ', romaji: 'benpi', meaning: 'Táo bón', hanViet: 'TIỆN BÍ', type: 'Danh từ', jlpt: 'N3', tags: ['Triệu chứng'], examples: [{ jp: '便秘に悩む。', reading: 'べんぴになやむ。', meaning: 'Khổ sở vì táo bón.' }] },
  { id: 'health-haki', word: '吐き気', reading: 'はきけ', romaji: 'hakike', meaning: 'Buồn nôn', type: 'Danh từ', jlpt: 'N3', tags: ['Triệu chứng'], examples: [{ jp: '吐き気がする。', reading: 'はきけがする。', meaning: 'Thấy buồn nôn.' }] },
  { id: 'health-memai', word: 'めまい', reading: 'めまい', romaji: 'memai', meaning: 'Chong mặt', type: 'Danh từ', jlpt: 'N3', tags: ['Triệu chứng'], examples: [{ jp: 'めまいがする。', reading: 'めまいがする。', meaning: 'Bị chóng mặt.' }] },
  { id: 'health-kayui', word: '痒い', reading: 'かゆい', romaji: 'kayui', meaning: 'Ngứa', hanViet: 'DƯƠNG', type: 'Tính từ -i', jlpt: 'N3', tags: ['Cảm giác'], examples: [{ jp: '背中が痒い。', reading: 'せなかがかゆい。', meaning: 'Ngứa lưng.' }] },
  { id: 'health-kega', word: '怪我', reading: 'けが', romaji: 'kega', meaning: 'Vết thương', hanViet: 'QUÁI NGÃ', type: 'Danh từ', jlpt: 'N4', tags: ['Chấn thương'], examples: [{ jp: '怪我をする。', reading: 'けがをする。', meaning: 'Bị thương.' }] },
  { id: 'health-kissetsu', word: '骨折', reading: 'こっせつ', romaji: 'kossetsu', meaning: 'Gãy xương', hanViet: 'CỐT CHIẾT', type: 'Danh từ', jlpt: 'N3', tags: ['Chấn thương'], examples: [{ jp: '足を骨折した。', reading: 'あしをこっせつした。', meaning: 'Bị gãy chân.' }] },
  { id: 'health-yakedo', word: '火傷', reading: 'やけど', romaji: 'yakedo', meaning: 'Bỏng', hanViet: 'HỎA THƯƠNG', type: 'Danh từ', jlpt: 'N3', tags: ['Chấn thương'], examples: [{ jp: '指を火傷した。', reading: 'ゆびをやけどした。', meaning: 'Bị bỏng ngón tay.' }] },
  { id: 'health-kansen', word: '感染', reading: 'かんせん', romaji: 'kansen', meaning: 'Lây nhiễm', hanViet: 'CẢM NHIỄM', type: 'Danh từ', jlpt: 'N2', tags: ['Bệnh', 'Y tế'], examples: [{ jp: 'ウイルスに感染する。', reading: 'ウイルスにかんせんする。', meaning: 'Nhiễm virus.' }] },
  { id: 'health-shujutsu', word: '手術', reading: 'しゅじゅつ', romaji: 'shujutsu', meaning: 'Phẫu thuật', hanViet: 'THỦ THUẬT', type: 'Danh từ', jlpt: 'N3', tags: ['Y tế'], examples: [{ jp: '手術を受ける。', reading: 'しゅじゅつをうける。', meaning: 'Phẫu thuật.' }] },
  { id: 'health-chuusha', word: '注射', reading: 'ちゅうしゃ', romaji: 'chuusha', meaning: 'Tiêm', hanViet: 'CHÚ XẠ', type: 'Danh từ', jlpt: 'N4', tags: ['Y tế'], examples: [{ jp: '注射が怖い。', reading: 'ちゅうしゃがこわい。', meaning: 'Sợ tiêm.' }] },
  { id: 'health-kenshin', word: '検診', reading: 'けんしん', romaji: 'kenshin', meaning: 'Khám sức khỏe', hanViet: 'KIỂM CHẨN', type: 'Danh từ', jlpt: 'N2', tags: ['Y tế'], examples: [{ jp: '定期検診。', reading: 'ていきけんしん。', meaning: 'Khám sức khỏe định kỳ.' }] },
  { id: 'health-kusuri', word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: 'Thuốc', hanViet: 'DƯỢC', type: 'Danh từ', jlpt: 'N5', tags: ['Y tế'], examples: [{ jp: '薬を飲む。', reading: 'くすりをのむ。', meaning: 'Uống thuốc.' }] },
  { id: 'health-jouzai', word: '錠剤', reading: 'じょうざい', romaji: 'jouzai', meaning: 'Thuốc viên', hanViet: 'ĐĨNH TỄ', type: 'Danh từ', jlpt: 'N2', tags: ['Y tế'], examples: [{ jp: '錠剤を飲む。', reading: 'じょうざいをのむ。', meaning: 'Uống thuốc viên.' }] },
  { id: 'health-hoken', word: '保険', reading: 'ほけん', romaji: 'hoken', meaning: 'Bảo hiểm', hanViet: 'BẢO HIỂM', type: 'Danh từ', jlpt: 'N3', tags: ['Y tế', 'Xã hội'], examples: [{ jp: '健康保険証。', reading: 'けんこうほけんしょう。', meaning: 'Thẻ bảo hiểm y tế.' }] },
];

// ── from: vocabTopic_Nature.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: NATURE, ANIMALS & PLANTS
// Từ vựng về Động vật, Thực vật và Hiện tượng tự nhiên (Mở rộng)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_NATURE: VocabEntry[] = [
  // ─── Động vật (Animals) ───
  { id: 'nat-doubutsu', word: '動物', reading: 'どうぶつ', romaji: 'doubutsu', meaning: 'Động vật', hanViet: 'ĐỘNG VẬT', type: 'Danh từ', jlpt: 'N5', tags: ['Động vật'], examples: [{ jp: '動物園に行く。', reading: 'どうぶつえんにいく。', meaning: 'Đi sở thú.' }] },
  { id: 'nat-saru', word: '猿', reading: 'さる', romaji: 'saru', meaning: 'Khỉ', hanViet: 'VIÊN', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: '猿も木から落ちる。', reading: 'さるもきからおちる。', meaning: 'Khỉ cũng có lúc ngã cây (Nhân vô thập toàn).' }] },
  { id: 'nat-uma', word: '馬', reading: 'うま', romaji: 'uma', meaning: 'Ngựa', hanViet: 'MÃ', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: '馬に乗る。', reading: 'うまにのる。', meaning: 'Cưỡi ngựa.' }] },
  { id: 'nat-shika', word: '鹿', reading: 'しか', romaji: 'shika', meaning: 'Hươu, nai', hanViet: 'LỘC', type: 'Danh từ', jlpt: 'N2', tags: ['Động vật'], examples: [{ jp: '奈良の鹿。', reading: 'ならのしか。', meaning: 'Hươu ở Nara.' }] },
  { id: 'nat-kuma', word: '熊', reading: 'くま', romaji: 'kuma', meaning: 'Gấu', hanViet: 'HÙNG', type: 'Danh từ', jlpt: 'N2', tags: ['Động vật'], examples: [{ jp: '冬眠する熊。', reading: 'とうみんするくま。', meaning: 'Gấu ngủ đông.' }] },
  { id: 'nat-usagi', word: '兎', reading: 'うさぎ', romaji: 'usagi', meaning: 'Thỏ', hanViet: 'THỐ', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: '兎が跳ねる。', reading: 'うさぎがはねる。', meaning: 'Thỏ nhảy.' }] },
  { id: 'nat-nezumi', word: '鼠', reading: 'ねずみ', romaji: 'nezumi', meaning: 'Chuột', hanViet: 'THỬ', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: '猫が鼠を捕る。', reading: 'ねこがねずみをとる。', meaning: 'Mèo bắt chuột.' }] },
  { id: 'nat-niwatori', word: '鶏', reading: 'にわとり', romaji: 'niwatori', meaning: 'Gà', hanViet: 'KÊ', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: '鶏が鳴く。', reading: 'にわとりがなく。', meaning: 'Gà gáy.' }] },
  { id: 'nat-kitsune', word: '狐', reading: 'きつね', romaji: 'kitsune', meaning: 'Cáo', hanViet: 'HỒ', type: 'Danh từ', jlpt: 'N2', tags: ['Động vật'], examples: [{ jp: '狐の嫁入り。', reading: 'きつねのよめいり。', meaning: 'Mưa bóng mây (Cáo lấy chồng).' }] },
  { id: 'nat-tanuki', word: '狸', reading: 'たぬき', romaji: 'tanuki', meaning: 'Lửng chó (Tanuki)', hanViet: 'LI', type: 'Danh từ', jlpt: 'N2', tags: ['Động vật'], examples: [{ jp: '狸寝入り。', reading: 'たぬきねいり。', meaning: 'Giả vờ ngủ.' }] },
  { id: 'nat-tora', word: '虎', reading: 'とら', romaji: 'tora', meaning: 'Hổ', hanViet: 'HỔ', type: 'Danh từ', jlpt: 'N2', tags: ['Động vật'], examples: [{ jp: '虎の尾を踏む。', reading: 'とらのおをふむ。', meaning: 'Giẫm đuôi hổ (Làm việc nguy hiểm).' }] },
  { id: 'nat-lion', word: 'ライオン', reading: 'ライオン', romaji: 'raion', meaning: 'Sư tử', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: '百獣の王。', reading: 'ひゃくじゅうのおう。', meaning: 'Vua của muôn loài.' }] },
  { id: 'nat-zou', word: '象', reading: 'ぞう', romaji: 'zou', meaning: 'Voi', hanViet: 'TƯỢNG', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: '象の鼻は長い。', reading: 'ぞうのはなはながい。', meaning: 'Vòi voi dài.' }] },
  { id: 'nat-kirin', word: 'キリン', reading: 'キリン', romaji: 'kirin', meaning: 'Hươu cao cổ', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: 'キリンの首。', reading: 'キリンのくび。', meaning: 'Cổ hươu cao cổ.' }] },
  { id: 'nat-mushi', word: '虫', reading: 'むし', romaji: 'mushi', meaning: 'Côn trùng, sâu bọ', hanViet: 'TRÙNG', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: '虫歯。', reading: 'むしば。', meaning: 'Sâu răng.' }] },
  { id: 'nat-ka', word: '蚊', reading: 'か', romaji: 'ka', meaning: 'Muỗi', hanViet: 'VĂN', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: '蚊に刺される。', reading: 'かにさされる。', meaning: 'Bị muỗi đốt.' }] },
  { id: 'nat-hae', word: 'ハエ', reading: 'ハエ', romaji: 'hae', meaning: 'Ruồi', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: 'ハエが飛ぶ。', reading: 'ハエがとぶ。', meaning: 'Ruồi bay.' }] },
  { id: 'nat-gokiburi', word: 'ゴキブリ', reading: 'ゴキブリ', romaji: 'gokiburi', meaning: 'Gián', type: 'Danh từ', jlpt: 'N3', tags: ['Động vật'], examples: [{ jp: 'ゴキブリ退治。', reading: 'ゴキブリたいじ。', meaning: 'Diệt gián.' }] },

  // ─── Thực vật (Plants) ───
  { id: 'nat-shokubutsu', word: '植物', reading: 'しょくぶつ', romaji: 'shokubutsu', meaning: 'Thực vật', hanViet: 'THỰC VẬT', type: 'Danh từ', jlpt: 'N3', tags: ['Thực vật'], examples: [{ jp: '植物園。', reading: 'しょくぶつえん。', meaning: 'Vườn bách thảo.' }] },
  { id: 'nat-kusa', word: '草', reading: 'くさ', romaji: 'kusa', meaning: 'Cỏ', hanViet: 'THẢO', type: 'Danh từ', jlpt: 'N3', tags: ['Thực vật'], examples: [{ jp: '草が生える。', reading: 'くさがはえる。', meaning: 'Cỏ mọc.' }] },
  { id: 'nat-eda', word: '枝', reading: 'えだ', romaji: 'eda', meaning: 'Cành cây', hanViet: 'CHI', type: 'Danh từ', jlpt: 'N3', tags: ['Thực vật'], examples: [{ jp: '木の枝。', reading: 'きのえだ。', meaning: 'Cành cây.' }] },
  { id: 'nat-ne', word: '根', reading: 'ね', romaji: 'ne', meaning: 'Rễ', hanViet: 'CĂN', type: 'Danh từ', jlpt: 'N3', tags: ['Thực vật'], examples: [{ jp: '根が深い。', reading: 'ねがふかい。', meaning: 'Rễ sâu.' }] },
  { id: 'nat-ha', word: '葉', reading: 'は', romaji: 'ha', meaning: 'Lá', hanViet: 'DIỆP', type: 'Danh từ', jlpt: 'N3', tags: ['Thực vật'], examples: [{ jp: '紅葉の葉。', reading: 'もみじのは。', meaning: 'Lá phong.' }] },
  { id: 'nat-sakura', word: '桜', reading: 'さくら', romaji: 'sakura', meaning: 'Hoa anh đào', hanViet: 'ANH', type: 'Danh từ', jlpt: 'N2', tags: ['Thực vật', 'Văn hóa'], examples: [{ jp: '桜が咲く。', reading: 'さくらがさく。', meaning: 'Hoa anh đào nở.' }] },
  { id: 'nat-ume', word: '梅', reading: 'うめ', romaji: 'ume', meaning: 'Hoa mai (mơ)', hanViet: 'MAI', type: 'Danh từ', jlpt: 'N2', tags: ['Thực vật'], examples: [{ jp: '梅酒。', reading: 'うめしゅ。', meaning: 'Rượu mơ.' }] },
  { id: 'nat-matsu', word: '松', reading: 'まつ', romaji: 'matsu', meaning: 'Cây thông', hanViet: 'TÙNG', type: 'Danh từ', jlpt: 'N2', tags: ['Thực vật'], examples: [{ jp: '松の木。', reading: 'まつのき。', meaning: 'Cây thông.' }] },
  { id: 'nat-take', word: '竹', reading: 'たけ', romaji: 'take', meaning: 'Tre', hanViet: 'TRÚC', type: 'Danh từ', jlpt: 'N2', tags: ['Thực vật'], examples: [{ jp: '竹の子。', reading: 'たけのこ。', meaning: 'Măng.' }] },
  { id: 'nat-sugi', word: '杉', reading: 'すぎ', romaji: 'sugi', meaning: 'Cây tuyết tùng', hanViet: 'SAM', type: 'Danh từ', jlpt: 'N1', tags: ['Thực vật'], examples: [{ jp: '杉花粉。', reading: 'すぎかふん。', meaning: 'Phấn hoa tuyết tùng (gây dị ứng).' }] },

  // ─── Hiện tượng tự nhiên (Natural Phenomena) ───
  { id: 'nat-taiyou', word: '太陽', reading: 'たいよう', romaji: 'taiyou', meaning: 'Mặt trời', hanViet: 'THÁI DƯƠNG', type: 'Danh từ', jlpt: 'N3', tags: ['Tự nhiên'], examples: [{ jp: '太陽が昇る。', reading: 'たいようがのぼる。', meaning: 'Mặt trời mọc.' }] },
  { id: 'nat-tsuki', word: '月', reading: 'つき', romaji: 'tsuki', meaning: 'Mặt trăng', hanViet: 'NGUYỆT', type: 'Danh từ', jlpt: 'N5', tags: ['Tự nhiên'], examples: [{ jp: '満月。', reading: 'まんげつ。', meaning: 'Trăng tròn.' }] },
  { id: 'nat-hoshi', word: '星', reading: 'ほし', romaji: 'hoshi', meaning: 'Ngôi sao', hanViet: 'TINH', type: 'Danh từ', jlpt: 'N3', tags: ['Tự nhiên'], examples: [{ jp: '流れ星。', reading: 'ながれぼし。', meaning: 'Sao băng.' }] },
  { id: 'nat-kumo', word: '雲', reading: 'くも', romaji: 'kumo', meaning: 'Mây', hanViet: 'VÂN', type: 'Danh từ', jlpt: 'N3', tags: ['Tự nhiên'], examples: [{ jp: '白い雲。', reading: 'しろいくも。', meaning: 'Mây trắng.' }] },
  { id: 'nat-kaminari', word: '雷', reading: 'かみなり', romaji: 'kaminari', meaning: 'Sấm sét', hanViet: 'LÔI', type: 'Danh từ', jlpt: 'N3', tags: ['Tự nhiên'], examples: [{ jp: '雷が鳴る。', reading: 'かみなりがなる。', meaning: 'Sấm rền.' }] },
  { id: 'nat-arashi', word: '嵐', reading: 'あらし', romaji: 'arashi', meaning: 'Bão', hanViet: 'LAM', type: 'Danh từ', jlpt: 'N2', tags: ['Tự nhiên'], examples: [{ jp: '嵐が来る。', reading: 'あらしがくる。', meaning: 'Bão đến.' }] },
  { id: 'nat-niji', word: '虹', reading: 'にじ', romaji: 'niji', meaning: 'Cầu vồng', hanViet: 'HỒNG', type: 'Danh từ', jlpt: 'N2', tags: ['Tự nhiên'], examples: [{ jp: '虹が出る。', reading: 'にじがでる。', meaning: 'Cầu vồng xuất hiện.' }] },
  { id: 'nat-kiri', word: '霧', reading: 'きり', romaji: 'kiri', meaning: 'Sương mù', hanViet: 'VỤ', type: 'Danh từ', jlpt: 'N2', tags: ['Tự nhiên'], examples: [{ jp: '霧が濃い。', reading: 'きりがこい。', meaning: 'Sương mù dày đặc.' }] },
  { id: 'nat-tsuyu', word: '梅雨', reading: 'つゆ', romaji: 'tsuyu', meaning: 'Mùa mưa', hanViet: 'MAI VŨ', type: 'Danh từ', jlpt: 'N3', tags: ['Tự nhiên', 'Thời tiết'], examples: [{ jp: '梅雨入り。', reading: 'つゆいり。', meaning: 'Vào mùa mưa.' }] },
  { id: 'nat-ondank', word: '温暖化', reading: 'おんだんか', romaji: 'ondanka', meaning: 'Sự nóng lên (toàn cầu)', hanViet: 'ÔN NOÃN HÓA', type: 'Danh từ', jlpt: 'N2', tags: ['Tự nhiên', 'Môi trường'], examples: [{ jp: '地球温暖化。', reading: 'ちきゅうおんだんか。', meaning: 'Sự nóng lên toàn cầu.' }] },
];

// ── from: vocabTopic_Slang_Casual.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: SLANG, CASUAL & INTERNET
// Từ lóng, ngôn ngữ mạng, từ vựng Anime/Manga và văn nói đời thường
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_SLANG: VocabEntry[] = [
  // ─── Từ lóng thông dụng (Common Slang) ───
  { id: 'slang-yabai', word: 'やばい', reading: 'やばい', romaji: 'yabai', meaning: 'Vãi chưởng, nguy to, tuyệt vời (tùy ngữ cảnh)', type: 'Tính từ -i', jlpt: 'N/A',
    tags: ['Slang', 'Cảm xúc'], examples: [{ jp: 'このラーメン、やばい！', reading: 'このラーメン、やばい！', meaning: 'Mì này ngon vãi!' }, { jp: '遅刻だ、やばい！', reading: 'ちこくだ、やばい！', meaning: 'Muộn rồi, toang rồi!' }] },
  { id: 'slang-maji', word: 'マジ', reading: 'まじ', romaji: 'maji', meaning: 'Thật á, nghiêm túc', type: 'Phó từ', jlpt: 'N/A',
    tags: ['Slang', 'Mức độ'], examples: [{ jp: 'マジで？', reading: 'まじで？', meaning: 'Thật á?' }, { jp: 'マジうける。', reading: 'まじうける。', meaning: 'Buồn cười vãi.' }] },
  { id: 'slang-uzai', word: 'うざい', reading: 'うざい', romaji: 'uzai', meaning: 'Phiền phức, khó chịu (viết tắt của うるさい)', type: 'Tính từ -i', jlpt: 'N/A',
    tags: ['Slang', 'Cảm xúc'], examples: [{ jp: 'あいつ、うざい。', reading: 'あいつ、うざい。', meaning: 'Thằng đó phiền vãi.' }] },
  { id: 'slang-kimoi', word: 'キモい', reading: 'きもい', romaji: 'kimoi', meaning: 'Ghê tởm (viết tắt của 気持ち悪い)', type: 'Tính từ -i', jlpt: 'N/A',
    tags: ['Slang', 'Cảm xúc'], examples: [{ jp: 'その動き、キモい。', reading: 'そのうごき、きもい。', meaning: 'Động tác đó ghê quá.' }] },
  { id: 'slang-mukatsuku', word: 'ムカつく', reading: 'むかつく', romaji: 'mukatsuku', meaning: 'Bực mình, khó chịu', type: 'Động từ', jlpt: 'N1',
    tags: ['Slang', 'Cảm xúc'], examples: [{ jp: '超ムカつく！', reading: 'ちょうむかつく！', meaning: 'Siêu bực mình!' }] },
  { id: 'slang-chou', word: '超', reading: 'ちょう', romaji: 'chou', meaning: 'Siêu, rất (Super)', hanViet: 'SIÊU', type: 'Tiền tố', jlpt: 'N/A',
    tags: ['Slang', 'Mức độ'], examples: [{ jp: '超おいしい。', reading: 'ちょうおいしい。', meaning: 'Siêu ngon.' }, { jp: '超忙しい。', reading: 'ちょういそがしい。', meaning: 'Siêu bận.' }] },
  { id: 'slang-meccha', word: 'めっちゃ', reading: 'めっちゃ', romaji: 'meccha', meaning: 'Rất, cực kỳ (vùng Kansai)', type: 'Phó từ', jlpt: 'N/A',
    tags: ['Slang', 'Mức độ'], examples: [{ jp: 'めっちゃ好き。', reading: 'めっちゃすき。', meaning: 'Cực kỳ thích.' }] },
  { id: 'slang-gachi', word: 'ガチ', reading: 'がち', romaji: 'gachi', meaning: 'Nghiêm túc, thật sự', type: 'Tính từ -na', jlpt: 'N/A',
    tags: ['Slang'], examples: [{ jp: 'ガチで戦う。', reading: 'がちでたたかう。', meaning: 'Chiến đấu nghiêm túc (khô máu).' }] },
  { id: 'slang-ikemen', word: 'イケメン', reading: 'いけめん', romaji: 'ikemen', meaning: 'Trai đẹp (Soái ca)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Slang', 'Con người'], examples: [{ jp: '彼はイケメンだ。', reading: 'かれはいけめんだ。', meaning: 'Anh ấy là soái ca.' }] },
  { id: 'slang-doya', word: 'ドヤ顔', reading: 'どやがお', romaji: 'doyagao', meaning: 'Khuôn mặt đắc ý (Vẻ mặt vênh váo)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Slang'], examples: [{ jp: 'ドヤ顔をする。', reading: 'どやがおをする。', meaning: 'Làm vẻ mặt đắc ý.' }] },
  { id: 'slang-bakkureru', word: 'バックレる', reading: 'ばっくれる', romaji: 'bakkureru', meaning: 'Chuồn, bùng (việc/học)', type: 'Động từ', jlpt: 'N/A',
    tags: ['Slang', 'Hành động'], examples: [{ jp: 'バイトをバックレる。', reading: 'バイトをばっくれる。', meaning: 'Bùng việc làm thêm.' }] },
  { id: 'slang-hamaru', word: 'ハマる', reading: 'はまる', romaji: 'hamaru', meaning: 'Nghiện, say mê (Game/Phim)', type: 'Động từ', jlpt: 'N/A',
    tags: ['Slang', 'Sở thích'], examples: [{ jp: '最近アニメにハマっている。', reading: 'さいきんアニメにはまっている。', meaning: 'Gần đây tôi nghiện anime.' }] },
  { id: 'slang-bimyuo', word: '微妙', reading: 'びみょう', romaji: 'bimyou', meaning: 'Không ngon lắm, tàm tạm, khó diễn tả', hanViet: 'VI DIỆU', type: 'Tính từ -na', jlpt: 'N/A',
    tags: ['Slang', 'Đánh giá'], examples: [{ jp: '味は微妙だ。', reading: 'あじはびみょうだ。', meaning: 'Vị thì... cũng tàm tạm (không ngon).' }] },

  // ─── Ngôn ngữ mạng & Chat (Internet Slang) ───
  { id: 'net-w', word: 'ｗ', reading: 'わら', romaji: 'wara', meaning: 'Cười (lol, haha)', type: 'Ký hiệu', jlpt: 'N/A',
    tags: ['Internet', 'Chat'], examples: [{ jp: 'うけるｗｗｗ', reading: 'うけるｗｗｗ', meaning: 'Buồn cười vãi =)))' }] },
  { id: 'net-kusa', word: '草', reading: 'くさ', romaji: 'kusa', meaning: 'Cười ỉa (biến thể của w -> cỏ)', hanViet: 'THẢO', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Internet', 'Chat'], examples: [{ jp: 'それは草。', reading: 'それはくさ。', meaning: 'Cái đó buồn cười vãi (Hài hước).' }] },
  { id: 'net-otsu', word: '乙', reading: 'おつ', romaji: 'otsu', meaning: 'Vất vả rồi (viết tắt của お疲れ様)', hanViet: 'ẤT', type: 'Cụm từ', jlpt: 'N/A',
    tags: ['Internet', 'Chat'], examples: [{ jp: 'うｐ乙', reading: 'うぷおつ', meaning: 'Cám ơn đã up bài (Up otsu).' }] },
  { id: 'net-riajuu', word: 'リア充', reading: 'りあじゅう', romaji: 'riajuu', meaning: 'Người có cuộc sống thực viên mãn (có gấu, hay đi chơi)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Internet', 'Xã hội'], examples: [{ jp: 'リア充爆発しろ。', reading: 'りあじゅうばくはつしろ。', meaning: 'Lũ có gấu nổ tung đi (GATO).' }] },
  { id: 'net-ky', word: 'KY', reading: 'ケーワイ', romaji: 'ke-wai', meaning: 'Không biết đọc bầu không khí (Vô duyên)', type: 'Từ viết tắt', jlpt: 'N/A',
    tags: ['Slang', 'Tính cách'], examples: [{ jp: '彼はKYだ。', reading: 'かれはケーワイだ。', meaning: 'Anh ta vô duyên vãi (Kuuki Yomenai).' }] },
  { id: 'net-guguru', word: 'ググる', reading: 'ぐぐる', romaji: 'guguru', meaning: 'Tra Google', type: 'Động từ', jlpt: 'N/A',
    tags: ['Internet', 'Hành động'], examples: [{ jp: '分からなかったらググれ。', reading: 'わからなかったらぐぐれ。', meaning: 'Không biết thì tra Google đi.' }] },
  { id: 'net-suru', word: 'スルー', reading: 'するー', romaji: 'suruu', meaning: 'Bơ đi, lờ đi (Through)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Slang', 'Giao tiếp'], examples: [{ jp: '既読スルー。', reading: 'きどくするー。', meaning: 'Đã xem nhưng không trả lời (Seen chùa).' }] },
  { id: 'net-disuru', word: 'ディスる', reading: 'でぃする', romaji: 'disuru', meaning: 'Chỉ trích, nói xấu (Disrespect)', type: 'Động từ', jlpt: 'N/A',
    tags: ['Slang', 'Hành động'], examples: [{ jp: '上司をディスる。', reading: 'じょうしをでぃする。', meaning: 'Nói xấu cấp trên.' }] },
  { id: 'net-buzz', word: 'バズる', reading: 'ばずる', romaji: 'bazuru', meaning: 'Gây bão mạng (Buzz)', type: 'Động từ', jlpt: 'N/A',
    tags: ['Internet', 'Marketing'], examples: [{ jp: 'ツイートがバズった。', reading: 'ツイートがばずった。', meaning: 'Tweet đã gây bão (viral).' }] },
  { id: 'net-netabare', word: 'ネタバレ', reading: 'ねたばれ', romaji: 'netabare', meaning: 'Spoiler (tiết lộ nội dung)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Internet', 'Giải trí'], examples: [{ jp: 'ネタバレ注意。', reading: 'ねたばれちゅうい。', meaning: 'Cảnh báo spoiler.' }] },
];

// ── from: vocabTopic_Business_Office.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: BUSINESS & OFFICE
// Từ vựng dùng trong công ty, email, họp hành và giao tiếp thương mại
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_BUSINESS: VocabEntry[] = [
  // ─── Giao tiếp & Kính ngữ cơ bản (Basic Business) ───
  { id: 'biz-osewa', word: 'お世話', reading: 'おせわ', romaji: 'osewa', meaning: 'Sự giúp đỡ', hanViet: 'THẾ THOẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Business', 'Kính ngữ'], examples: [{ jp: 'いつもお世話になっております。', reading: 'いつもおせわになっております。', meaning: 'Cảm ơn quý khách vẫn luôn ủng hộ/giúp đỡ.' }] },
  { id: 'biz-otsukare', word: 'お疲れ様', reading: 'おつかれさま', romaji: 'otsukaresama', meaning: 'Vất vả rồi (Chào hỏi)', type: 'Cụm từ', jlpt: 'N4',
    tags: ['Business', 'Giao tiếp'], examples: [{ jp: 'お疲れ様です。', reading: 'おつかれさまです。', meaning: 'Chào anh/chị (dùng trong cty).' }] },
  { id: 'biz-moushiwake', word: '申し訳', reading: 'もうしわけ', romaji: 'moushiwake', meaning: 'Lời xin lỗi', type: 'Danh từ', jlpt: 'N3',
    tags: ['Business', 'Kính ngữ'], examples: [{ jp: '大変申し訳ございません。', reading: 'たいへんもうしわけございません。', meaning: 'Vô cùng xin lỗi.' }] },
  { id: 'biz-shouchi', word: '承知', reading: 'しょうち', romaji: 'shouchi', meaning: 'Hiểu, chấp nhận (khiêm nhường)', hanViet: 'THỪA TRI', type: 'Danh từ', jlpt: 'N3',
    tags: ['Business', 'Kính ngữ'], examples: [{ jp: '承知いたしました。', reading: 'しょうちいたしました。', meaning: 'Tôi đã hiểu rồi ạ.' }] },
  { id: 'biz-kashikomari', word: '畏まりました', reading: 'かしこまりました', romaji: 'kashikomarimashita', meaning: 'Tôi đã hiểu (lịch sự nhất)', type: 'Cụm từ', jlpt: 'N3',
    tags: ['Business', 'Kính ngữ'], examples: [{ jp: 'はい、畏まりました。', reading: 'はい、かしこまりました。', meaning: 'Vâng, tôi đã rõ ạ (Dùng với khách hàng).' }] },

  // ─── Hoạt động văn phòng (Office Operations) ───
  { id: 'biz-kaigi', word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: 'Cuộc họp', hanViet: 'HỘI NGHỊ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Business'], examples: [{ jp: '会議室を予約する。', reading: 'かいぎしつをよやくする。', meaning: 'Đặt phòng họp.' }] },
  { id: 'biz-uchiawase', word: '打ち合わせ', reading: 'うちあわせ', romaji: 'uchiawase', meaning: 'Họp bàn, thảo luận trước', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business'], examples: [{ jp: '担当者と打ち合わせる。', reading: 'たんとうしゃとうちあわせる。', meaning: 'Thảo luận với người phụ trách.' }] },
  { id: 'biz-hourensou', word: '報連相', reading: 'ほうれんそう', romaji: 'hourensou', meaning: 'Báo cáo - Liên lạc - Thảo luận (Quy tắc vàng)', type: 'Thuật ngữ', jlpt: 'N2',
    tags: ['Business', 'Quy tắc'], examples: [{ jp: '報連相を徹底する。', reading: 'ほうれんそうをてっていする。', meaning: 'Triệt để thực hiện Hou-Ren-Sou.' }] },
  { id: 'biz-ringi', word: '稟議', reading: 'りんぎ', romaji: 'ringi', meaning: 'Trình duyệt, xin phê duyệt', type: 'Danh từ', jlpt: 'N1',
    tags: ['Business'], examples: [{ jp: '稟議書を回す。', reading: 'りんぎしょをまわす。', meaning: 'Chuyền thư trình duyệt.' }] },
  { id: 'biz-noki', word: '納期', reading: 'のうき', romaji: 'nouki', meaning: 'Hạn giao hàng, deadline', hanViet: 'NẠP KỲ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business', 'Deadline'], examples: [{ jp: '納期を守る。', reading: 'のうきをまもる。', meaning: 'Tuân thủ hạn giao hàng.' }] },
  { id: 'biz-mitsumori', word: '見積もり', reading: 'みつもり', romaji: 'mitsumori', meaning: 'Báo giá', hanViet: 'KIẾN TÍCH', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business', 'Kinh tế'], examples: [{ jp: '見積書を作成する。', reading: 'みつもりしょをさくせいする。', meaning: 'Lập bảng báo giá.' }] },
  { id: 'biz-seikyuu', word: '請求', reading: 'せいきゅう', romaji: 'seikyuu', meaning: 'Yêu cầu thanh toán', hanViet: 'THỈNH CẦU', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business', 'Kinh tế'], examples: [{ jp: '請求書を送る。', reading: 'せいきゅうしょをおくる。', meaning: 'Gửi hóa đơn yêu cầu thanh toán.' }] },
  { id: 'biz-ryoushuu', word: '領収', reading: 'りょうしゅう', romaji: 'ryoushuu', meaning: 'Nhận tiền', hanViet: 'LÃNH THU', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business'], examples: [{ jp: '領収書をください。', reading: 'りょうしゅうしょをください。', meaning: 'Cho tôi xin hóa đơn (đã thanh toán).' }] },
  { id: 'biz-zaiko', word: '在庫', reading: 'ざいこ', romaji: 'zaiko', meaning: 'Hàng tồn kho', hanViet: 'TẠI KHO', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business'], examples: [{ jp: '在庫を確認する。', reading: 'ざいこをかくにんする。', meaning: 'Kiểm tra hàng tồn.' }] },
  { id: 'biz-nouhin', word: '納品', reading: 'のうひん', romaji: 'nouhin', meaning: 'Giao hàng', hanViet: 'NẠP PHẨM', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business'], examples: [{ jp: '来週納品する。', reading: 'らいしゅうのうひんする。', meaning: 'Tuần sau giao hàng.' }] },

  // ─── Chức vụ & Nhân sự (HR & Positions) ───
  { id: 'biz-shachou', word: '社長', reading: 'しゃちょう', romaji: 'shachou', meaning: 'Giám đốc', hanViet: 'XÃ TRƯỞNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Business', 'Chức vụ'], examples: [{ jp: '社長に報告する。', reading: 'しゃちょうにほうこくする。', meaning: 'Báo cáo với giám đốc.' }] },
  { id: 'biz-buchou', word: '部長', reading: 'ぶちょう', romaji: 'buchou', meaning: 'Trưởng phòng', hanViet: 'BỘ TRƯỞNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Business', 'Chức vụ'], examples: [{ jp: '部長の許可を得る。', reading: 'ぶちょうのきょかをえる。', meaning: 'Xin phép trưởng phòng.' }] },
  { id: 'biz-kachou', word: '課長', reading: 'かちょう', romaji: 'kachou', meaning: 'Trưởng nhóm/ban', hanViet: 'KHÓA TRƯỞNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Business', 'Chức vụ'], examples: [{ jp: '課長に相談する。', reading: 'かちょうにそうだんする。', meaning: 'Thảo luận với trưởng nhóm.' }] },
  { id: 'biz-tantou', word: '担当', reading: 'たんとう', romaji: 'tantou', meaning: 'Phụ trách', hanViet: 'ĐẢM ĐƯƠNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Business'], examples: [{ jp: '担当者をお願いします。', reading: 'たんとうしゃをおねがいします。', meaning: 'Cho tôi gặp người phụ trách.' }] },
  { id: 'biz-saiyou', word: '採用', reading: 'さいよう', romaji: 'saiyou', meaning: 'Tuyển dụng', hanViet: 'THẢI DỤNG', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business', 'HR'], examples: [{ jp: '新卒を採用する。', reading: 'しんそつをさいようする。', meaning: 'Tuyển dụng sinh viên mới tốt nghiệp.' }] },
  { id: 'biz-mensetsu', word: '面接', reading: 'めんせつ', romaji: 'mensetsu', meaning: 'Phỏng vấn', hanViet: 'DIỆN TIẾP', type: 'Danh từ', jlpt: 'N3',
    tags: ['Business', 'HR'], examples: [{ jp: '面接を受ける。', reading: 'めんせつをうける。', meaning: 'Đi phỏng vấn.' }] },
  { id: 'biz-rireki', word: '履歴', reading: 'りれき', romaji: 'rireki', meaning: 'Lý lịch', hanViet: 'LÝ LỊCH', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business', 'HR'], examples: [{ jp: '履歴書を書く。', reading: 'りれきしょをかく。', meaning: 'Viết sơ yếu lý lịch.' }] },
  { id: 'biz-kyuuyo', word: '給与', reading: 'きゅうよ', romaji: 'kyuuyo', meaning: 'Tiền lương (trang trọng)', hanViet: 'CẤP DỰ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business', 'Kinh tế'], examples: [{ jp: '給与明細。', reading: 'きゅうよめいさい。', meaning: 'Bảng lương chi tiết.' }] },
  { id: 'biz-zangyou', word: '残業', reading: 'ざんぎょう', romaji: 'zangyou', meaning: 'Làm thêm giờ', hanViet: 'TÀN NGHIỆP', type: 'Danh từ', jlpt: 'N3',
    tags: ['Business'], examples: [{ jp: '毎日残業する。', reading: 'まいにちざんぎょうする。', meaning: 'Ngày nào cũng làm thêm giờ.' }] },
  { id: 'biz-shucchou', word: '出張', reading: 'しゅっちょう', romaji: 'shucchou', meaning: 'Công tác', hanViet: 'XUẤT TRƯƠNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Business'], examples: [{ jp: '大阪へ出張する。', reading: 'おおさかへしゅっちょうする。', meaning: 'Đi công tác Osaka.' }] },
  { id: 'biz-kinmu', word: '勤務', reading: 'きんむ', romaji: 'kinmu', meaning: 'Làm việc (tại đâu)', hanViet: 'CẦN VỤ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Business'], examples: [{ jp: '本社勤務。', reading: 'ほんしゃきんむ。', meaning: 'Làm việc tại trụ sở chính.' }] },
];

// ── from: vocabTopic_Katakana.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: KATAKANA & LOANWORDS
// Từ mượn tiếng Anh thông dụng trong đời sống và công việc (Gairaigo)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_KATAKANA: VocabEntry[] = [
  // ─── Business Katakana (Dân văn phòng hay dùng) ───
  { id: 'kata-ajenda', word: 'アジェンダ', reading: 'アジェンダ', romaji: 'ajenda', meaning: 'Chương trình nghị sự (Agenda)', type: 'Danh từ', jlpt: 'N1',
    tags: ['Katakana', 'Business'], examples: [{ jp: '会議のアジェンダ。', reading: 'かいぎのアジェンダ。', meaning: 'Chương trình cuộc họp.' }] },
  { id: 'kata-ebidensu', word: 'エビデンス', reading: 'エビデンス', romaji: 'ebidensu', meaning: 'Bằng chứng (Evidence)', type: 'Danh từ', jlpt: 'N1',
    tags: ['Katakana', 'Business'], examples: [{ jp: 'エビデンスを示す。', reading: 'エビデンスをしめす。', meaning: 'Đưa ra bằng chứng.' }] },
  { id: 'kata-konsensasu', word: 'コンセンサス', reading: 'コンセンサス', romaji: 'konsensasu', meaning: 'Sự đồng thuận (Consensus)', type: 'Danh từ', jlpt: 'N1',
    tags: ['Katakana', 'Business'], examples: [{ jp: 'コンセンサスを得る。', reading: 'コンセンサスをえる。', meaning: 'Đạt được sự đồng thuận.' }] },
  { id: 'kata-komitto', word: 'コミット', reading: 'コミット', romaji: 'komitto', meaning: 'Cam kết (Commitment)', type: 'Danh từ', jlpt: 'N1',
    tags: ['Katakana', 'Business'], examples: [{ jp: '結果にコミットする。', reading: 'けっかにコミットする。', meaning: 'Cam kết với kết quả.' }] },
  { id: 'kata-risukuejji', word: 'リスクヘッジ', reading: 'リスクヘッジ', romaji: 'risukuhejji', meaning: 'Phòng ngừa rủi ro (Risk hedge)', type: 'Danh từ', jlpt: 'N1',
    tags: ['Katakana', 'Business'], examples: [{ jp: 'リスクヘッジを考える。', reading: 'リスクヘッジをかんがえる。', meaning: 'Suy nghĩ cách phòng ngừa rủi ro.' }] },
  { id: 'kata-risutora', word: 'リストラ', reading: 'リストラ', romaji: 'risutora', meaning: 'Cắt giảm nhân sự (Restructuring)', type: 'Danh từ', jlpt: 'N2',
    tags: ['Katakana', 'Business'], examples: [{ jp: 'リストラされた。', reading: 'リストラされた。', meaning: 'Bị cắt giảm biên chế (đuổi việc).' }] },
  { id: 'kata-konpura', word: 'コンプラ', reading: 'コンプラ', romaji: 'konpura', meaning: 'Tuân thủ luật lệ (Compliance)', type: 'Danh từ', jlpt: 'N1',
    tags: ['Katakana', 'Business'], examples: [{ jp: 'コンプラ違反。', reading: 'コンプラいはん。', meaning: 'Vi phạm quy tắc tuân thủ.' }] },
  { id: 'kata-sukijuuru', word: 'スケジュール', reading: 'スケジュール', romaji: 'sukejuuru', meaning: 'Lịch trình (Schedule)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Katakana', 'Thời gian'], examples: [{ jp: 'スケジュールを確認する。', reading: 'スケジュールをかくにんする。', meaning: 'Kiểm tra lịch trình.' }] },
  { id: 'kata-purezen', word: 'プレゼン', reading: 'プレゼン', romaji: 'purezen', meaning: 'Thuyết trình (Presentation)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Katakana', 'Business'], examples: [{ jp: '明日はプレゼンだ。', reading: 'あしたはプレゼンだ。', meaning: 'Mai phải thuyết trình.' }] },
  { id: 'kata-mything', word: 'ミーティング', reading: 'ミーティング', romaji: 'miitingu', meaning: 'Cuộc họp (Meeting)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Katakana', 'Business'], examples: [{ jp: '朝のミーティング。', reading: 'あさのミーティング。', meaning: 'Cuộc họp buổi sáng.' }] },

  // ─── IT & Tech Katakana (Dành cho dân công nghệ) ───
  { id: 'kata-inutaafeisu', word: 'インターフェイス', reading: 'インターフェイス', romaji: 'intaafeisu', meaning: 'Giao diện (Interface)', type: 'Danh từ', jlpt: 'N2',
    tags: ['Katakana', 'IT'], examples: [{ jp: '使いやすいインターフェイス。', reading: 'つかいやすいインターフェイス。', meaning: 'Giao diện dễ sử dụng.' }] },
  { id: 'kata-insutooru', word: 'インストール', reading: 'インストール', romaji: 'insutooru', meaning: 'Cài đặt (Install)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Katakana', 'IT'], examples: [{ jp: 'アプリをインストールする。', reading: 'アプリをインストールする。', meaning: 'Cài đặt ứng dụng.' }] },
  { id: 'kata-daunroodo', word: 'ダウンロード', reading: 'ダウンロード', romaji: 'daunroodo', meaning: 'Tải về (Download)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Katakana', 'IT'], examples: [{ jp: 'ファイルをダウンロードする。', reading: 'ファイルをダウンロードする。', meaning: 'Tải tập tin về.' }] },
  { id: 'kata-akusesu', word: 'アクセス', reading: 'アクセス', romaji: 'akusesu', meaning: 'Truy cập (Access)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Katakana', 'IT'], examples: [{ jp: 'サイトにアクセスする。', reading: 'サイトにアクセスする。', meaning: 'Truy cập trang web.' }] },
  { id: 'kata-bagu', word: 'バグ', reading: 'バグ', romaji: 'bagu', meaning: 'Lỗi phần mềm (Bug)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Katakana', 'IT'], examples: [{ jp: 'バグを修正する。', reading: 'バグをしゅうせいする。', meaning: 'Sửa lỗi bug.' }] },
  { id: 'kata-sekuriti', word: 'セキュリティ', reading: 'セキュリティ', romaji: 'sekuriti', meaning: 'Bảo mật (Security)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Katakana', 'IT'], examples: [{ jp: 'セキュリティ対策。', reading: 'セキュリティたいさく。', meaning: 'Biện pháp bảo mật.' }] },
  { id: 'kata-appudeeto', word: 'アップデート', reading: 'アップデート', romaji: 'appudeeto', meaning: 'Cập nhật (Update)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Katakana', 'IT'], examples: [{ jp: 'システムをアップデートする。', reading: 'システムをアップデートする。', meaning: 'Cập nhật hệ thống.' }] },

  // ─── Đời sống & Hàng ngày (Daily Life) ───
  { id: 'kata-sutoresu', word: 'ストレス', reading: 'ストレス', romaji: 'sutoresu', meaning: 'Căng thẳng (Stress)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Katakana', 'Sức khỏe'], examples: [{ jp: 'ストレスが溜まる。', reading: 'ストレスがたまる。', meaning: 'Tích tụ căng thẳng.' }] },
  { id: 'kata-riraakusu', word: 'リラックス', reading: 'リラックス', romaji: 'rirakkusu', meaning: 'Thư giãn (Relax)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Katakana', 'Cảm xúc'], examples: [{ jp: '家でリラックスする。', reading: 'いえでリラックスする。', meaning: 'Thư giãn ở nhà.' }] },
  { id: 'kata-sabisu', word: 'サービス', reading: 'サービス', romaji: 'sabisu', meaning: 'Dịch vụ / Khuyến mãi (Service)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Katakana', 'Kinh tế'], examples: [{ jp: 'サービスがいい。', reading: 'サービスがいい。', meaning: 'Dịch vụ tốt.' }, { jp: 'これはサービスです。', reading: 'これはサービスです。', meaning: 'Cái này là khuyến mãi (miễn phí).' }] },
  { id: 'kata-arubaito', word: 'アルバイト', reading: 'アルバイト', romaji: 'arubaito', meaning: 'Việc làm thêm (Arbeit)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Katakana', 'Công việc'], examples: [{ jp: 'コンビニでアルバイトする。', reading: 'コンビニでアルバイトする。', meaning: 'Làm thêm ở cửa hàng tiện lợi.' }] },
  { id: 'kata-konbini', word: 'コンビニ', reading: 'コンビニ', romaji: 'konbini', meaning: 'Cửa hàng tiện lợi (Convenience Store)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Katakana', 'Địa điểm'], examples: [{ jp: 'コンビニに行く。', reading: 'コンビニにいく。', meaning: 'Đi cửa hàng tiện lợi.' }] },
  { id: 'kata-hoteru', word: 'ホテル', reading: 'ホテル', romaji: 'hoteru', meaning: 'Khách sạn (Hotel)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Katakana', 'Địa điểm'], examples: [{ jp: 'ホテルを予約する。', reading: 'ホテルをよやくする。', meaning: 'Đặt khách sạn.' }] },
  { id: 'kata-manshon', word: 'マンション', reading: 'マンション', romaji: 'manshon', meaning: 'Chung cư cao cấp (Mansion)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Katakana', 'Nhà cửa'], examples: [{ jp: 'マンションに住む。', reading: 'マンションにすむ。', meaning: 'Sống ở chung cư.' }] },
  { id: 'kata-apaato', word: 'アパート', reading: 'アパート', romaji: 'apaato', meaning: 'Căn hộ cho thuê (Apartment - thường gỗ/nhỏ)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Katakana', 'Nhà cửa'], examples: [{ jp: '安いアパート。', reading: 'やすいアパート。', meaning: 'Căn hộ rẻ.' }] },
  { id: 'kata-pasokon', word: 'パソコン', reading: 'パソコン', romaji: 'pasokon', meaning: 'Máy tính cá nhân (PC)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Katakana', 'Đồ vật'], examples: [{ jp: 'パソコンを使う。', reading: 'パソコンをつかう。', meaning: 'Dùng máy tính.' }] },
  { id: 'kata-sumaho', word: 'スマホ', reading: 'スマホ', romaji: 'sumaho', meaning: 'Điện thoại thông minh (Smartphone)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Katakana', 'Đồ vật'], examples: [{ jp: 'スマホを見る。', reading: 'スマホをみる。', meaning: 'Xem điện thoại.' }] },
];

// ── from: vocabTopic_Onomatopoeia.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: ONOMATOPOEIA (GIONGO & GITAIGO)
// Từ tượng thanh & Tượng hình - Giúp tiếng Nhật tự nhiên và sinh động hơn
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_ONOMATOPOEIA: VocabEntry[] = [
  // ─── Cảm xúc & Tâm trạng (Feelings) ───
  { id: 'ono-dokidoki', word: 'ドキドキ', reading: 'ドキドキ', romaji: 'dokidoki', meaning: 'Hồi hộp, tim đập thình thịch', type: 'Từ tượng thanh', jlpt: 'N4',
    tags: ['Onomatopoeia', 'Cảm xúc'], examples: [{ jp: '発表の前でドキドキする。', reading: 'はっぴょうのまえでドキドキする。', meaning: 'Hồi hộp trước buổi phát biểu.' }] },
  { id: 'ono-wakuwaku', word: 'ワクワク', reading: 'ワクワク', romaji: 'wakuwaku', meaning: 'Háo hức, phấn khích', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Cảm xúc'], examples: [{ jp: '明日が楽しみでワクワクする。', reading: 'あしたがたのしみでワクワクする。', meaning: 'Háo hức mong chờ ngày mai.' }] },
  { id: 'ono-iraira', word: 'イライラ', reading: 'イライラ', romaji: 'iraira', meaning: 'Sốt ruột, bực bội', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Cảm xúc'], examples: [{ jp: 'バスが来なくてイライラする。', reading: 'バスがこなくてイライラする。', meaning: 'Sốt ruột vì xe buýt không tới.' }] },
  { id: 'ono-hotto', word: 'ほっと', reading: 'ほっと', romaji: 'hotto', meaning: 'Nhẹ nhõm, an tâm', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Cảm xúc'], examples: [{ jp: '合格してほっとした。', reading: 'ごうかくしてほっとした。', meaning: 'Đỗ rồi nên thấy nhẹ nhõm.' }] },
  { id: 'ono-gakkari', word: 'ガッカリ', reading: 'ガッカリ', romaji: 'gakkari', meaning: 'Thất vọng, chán nản', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Cảm xúc'], examples: [{ jp: '雨で中止になってガッカリだ。', reading: 'あめでちゅうしになってガッカリだ。', meaning: 'Thất vọng vì mưa nên bị hủy.' }] },
  { id: 'ono-bikkuri', word: 'びっくり', reading: 'びっくり', romaji: 'bikkuri', meaning: 'Giật mình, ngạc nhiên', type: 'Từ tượng thanh', jlpt: 'N4',
    tags: ['Onomatopoeia', 'Cảm xúc'], examples: [{ jp: '大きな音にびっくりした。', reading: 'おおきなおとにびっくりした。', meaning: 'Giật mình vì tiếng động lớn.' }] },
  { id: 'ono-bonnyari', word: 'ぼんやり', reading: 'ぼんやり', romaji: 'bonnyari', meaning: 'Thẫn thờ, lơ đễnh / mờ ảo', type: 'Từ tượng thanh', jlpt: 'N2',
    tags: ['Onomatopoeia', 'Trạng thái'], examples: [{ jp: '窓の外をぼんやり見る。', reading: 'まどのそとをぼんやりみる。', meaning: 'Thẫn thờ nhìn ra ngoài cửa sổ.' }] },

  // ─── Trạng thái cơ thể & Hành động (Physical State) ───
  { id: 'ono-pekoeko', word: 'ペコペコ', reading: 'ペコペコ', romaji: 'pekopeko', meaning: 'Đói meo / Khúm núm', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Cơ thể'], examples: [{ jp: 'お腹がペコペコだ。', reading: 'おなかがペコペコだ。', meaning: 'Bụng đói meo.' }] },
  { id: 'ono-karakara', word: 'カラカラ', reading: 'カラカラ', romaji: 'karakara', meaning: 'Khô khốc (khát nước)', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Cơ thể'], examples: [{ jp: '喉がカラカラだ。', reading: 'のどがカラカラだ。', meaning: 'Cổ họng khô khốc.' }] },
  { id: 'ono-guguu', word: 'ぐうぐう', reading: 'ぐうぐう', romaji: 'guuguu', meaning: 'Ngủ say (ngáy) / Bụng kêu', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Cơ thể'], examples: [{ jp: 'ぐうぐう寝ている。', reading: 'ぐうぐうねている。', meaning: 'Đang ngủ say sưa.' }] },
  { id: 'ono-furufuru', word: 'フラフラ', reading: 'フラフラ', romaji: 'furafura', meaning: 'Choáng váng, lảo đảo', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Sức khỏe'], examples: [{ jp: '熱で頭がフラフラする。', reading: 'ねつであたまがフラフラする。', meaning: 'Đầu óc choáng váng vì sốt.' }] },
  { id: 'ono-kuta', word: 'くたくた', reading: 'くたくた', romaji: 'kutakuta', meaning: 'Mệt nhoài, rã rời', type: 'Từ tượng thanh', jlpt: 'N2',
    tags: ['Onomatopoeia', 'Sức khỏe'], examples: [{ jp: '仕事でくたくたになった。', reading: 'しごとでくたくたになった。', meaning: 'Mệt nhoài vì công việc.' }] },
  { id: 'ono-goro', word: 'ごろごろ', reading: 'ごろごろ', romaji: 'gorogoro', meaning: 'Thong thả (nằm ườn) / Lăn lông lốc', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Hành động'], examples: [{ jp: '休日は家でごろごろする。', reading: 'きゅうじつはいえでごろごろする。', meaning: 'Ngày nghỉ nằm ườn ở nhà.' }] },
  { id: 'ono-nikoniko', word: 'ニコニコ', reading: 'ニコニコ', romaji: 'nikoniko', meaning: 'Cười tủm tỉm, vui vẻ', type: 'Từ tượng thanh', jlpt: 'N4',
    tags: ['Onomatopoeia', 'Hành động'], examples: [{ jp: 'いつもニコニコしている。', reading: 'いつもニコニコしている。', meaning: 'Lúc nào cũng cười tủm tỉm.' }] },
  { id: 'ono-niyaniya', word: 'ニヤニヤ', reading: 'ニヤニヤ', romaji: 'niyaniya', meaning: 'Cười đểu, cười nham hiểm', type: 'Từ tượng thanh', jlpt: 'N2',
    tags: ['Onomatopoeia', 'Hành động'], examples: [{ jp: '何をニヤニヤしているの？', reading: 'なにをニヤニヤしているの？', meaning: 'Cười cái gì mà nham hiểm thế?' }] },

  // ─── Miêu tả tính chất (Description) ───
  { id: 'ono-kirakira', word: 'キラキラ', reading: 'キラキラ', romaji: 'kirakira', meaning: 'Lấp lánh', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Miêu tả'], examples: [{ jp: '星がキラキラ光る。', reading: 'ほしがキラキラひかる。', meaning: 'Ngôi sao sáng lấp lánh.' }] },
  { id: 'ono-pikapika', word: 'ピカピカ', reading: 'ピカピカ', romaji: 'pikapika', meaning: 'Bóng loáng, sáng choang', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Miêu tả'], examples: [{ jp: '靴をピカピカに磨く。', reading: 'くつをピカピカにみがく。', meaning: 'Đánh giày bóng loáng.' }] },
  { id: 'ono-fuwafuwa', word: 'フワフワ', reading: 'フワフワ', romaji: 'fuwafuwa', meaning: 'Mềm mại, bồng bềnh', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Cảm giác'], examples: [{ jp: 'フワフワのパンケーキ。', reading: 'フワフワのパンケーキ。', meaning: 'Bánh pancake mềm xốp.' }] },
  { id: 'ono-tsurutsuru', word: 'ツルツル', reading: 'ツルツル', romaji: 'tsurutsuru', meaning: 'Trơn tuột, láng mịn', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Cảm giác'], examples: [{ jp: '道が凍ってツルツル滑る。', reading: 'みちがこおってツルツルすべる。', meaning: 'Đường đóng băng trơn tuột.' }] },
  { id: 'ono-nebaneba', word: 'ネバネバ', reading: 'ネバネバ', romaji: 'nebaneba', meaning: 'Dính nhớp (như Natto)', type: 'Từ tượng thanh', jlpt: 'N2',
    tags: ['Onomatopoeia', 'Cảm giác'], examples: [{ jp: '納豆はネバネバしている。', reading: 'なっとうはネバネバしている。', meaning: 'Natto dính nhớp nháp.' }] },
  { id: 'ono-barabara', word: 'バラバラ', reading: 'バラバラ', romaji: 'barabara', meaning: 'Rải rác, rời rạc', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Trạng thái'], examples: [{ jp: '意見がバラバラだ。', reading: 'いけんがバラバラだ。', meaning: 'Ý kiến rời rạc, không thống nhất.' }] },
  { id: 'ono-mechakucha', word: 'めちゃくちゃ', reading: 'めちゃくちゃ', romaji: 'mechakucha', meaning: 'Lộn xộn, tan tành / Rất (quá mức)', type: 'Từ tượng thanh', jlpt: 'N3',
    tags: ['Onomatopoeia', 'Trạng thái'], examples: [{ jp: '部屋がめちゃくちゃだ。', reading: 'へやがめちゃくちゃだ。', meaning: 'Phòng lộn xộn.' }] },
  { id: 'ono-girigiri', word: 'ギリギリ', reading: 'ギリギリ', romaji: 'girigiri', meaning: 'Sát nút, vừa kịp', type: 'Từ tượng thanh', jlpt: 'N2',
    tags: ['Onomatopoeia', 'Thời gian'], examples: [{ jp: '時間にギリギリ間に合った。', reading: 'じかんにギリギリまにあった。', meaning: 'Vừa kịp giờ sát nút.' }] },
];

// ── from: vocabTopic_Education_Science.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: EDUCATION, SCHOOL & SCIENCE
// Từ vựng về Trường học, Thi cử và Khoa học (Dành cho du học sinh)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_EDUCATION: VocabEntry[] = [
  // ─── Trường học & Thi cử (School & Exam) ───
  { id: 'edu-juken', word: '受験', reading: 'じゅけん', romaji: 'juken', meaning: 'Dự thi', hanViet: 'THỤ NGHIỆM', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giáo dục'], examples: [{ jp: '受験勉強。', reading: 'じゅけんべんきょう。', meaning: 'Học thi.' }] },
  { id: 'edu-goukaku', word: '合格', reading: 'ごうかく', romaji: 'goukaku', meaning: 'Đỗ, trúng tuyển', hanViet: 'HỢP CÁCH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giáo dục'], examples: [{ jp: '大学に合格する。', reading: 'だいがくにごうかくする。', meaning: 'Đỗ đại học.' }] },
  { id: 'edu-furugoukaku', word: '不合格', reading: 'ふごうかく', romaji: 'fugoukaku', meaning: 'Trượt, không đạt', hanViet: 'BẤT HỢP CÁCH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giáo dục'], examples: [{ jp: '残念ながら不合格だった。', reading: 'ざんねんながらふごうかくだった。', meaning: 'Tiếc là đã trượt.' }] },
  { id: 'edu-nyuugaku', word: '入学', reading: 'にゅうがく', romaji: 'nyuugaku', meaning: 'Nhập học', hanViet: 'NHẬP HỌC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'], examples: [{ jp: '入学式。', reading: 'にゅうがくしき。', meaning: 'Lễ nhập học.' }] },
  { id: 'edu-sotsugyou', word: '卒業', reading: 'そつぎょう', romaji: 'sotsugyou', meaning: 'Tốt nghiệp', hanViet: 'TỐT NGHIỆP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'], examples: [{ jp: '大学を卒業する。', reading: 'だいがくをそつぎょうする。', meaning: 'Tốt nghiệp đại học.' }] },
  { id: 'edu-gakki', word: '学期', reading: 'がっき', romaji: 'gakki', meaning: 'Học kỳ', hanViet: 'HỌC KỲ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giáo dục'], examples: [{ jp: '新学期が始まる。', reading: 'しんがっきがはじまる。', meaning: 'Học kỳ mới bắt đầu.' }] },
  { id: 'edu-gakka', word: '学科', reading: 'がっか', romaji: 'gakka', meaning: 'Khoa, ngành học', hanViet: 'HỌC KHOA', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giáo dục'], examples: [{ jp: '情報学科。', reading: 'じょうほうがっか。', meaning: 'Khoa công nghệ thông tin.' }] },
  { id: 'edu-tanni', word: '単位', reading: 'たんい', romaji: 'tanni', meaning: 'Tín chỉ', hanViet: 'ĐƠN VỊ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Giáo dục'], examples: [{ jp: '単位を取る。', reading: 'たんいをとる。', meaning: 'Lấy tín chỉ.' }] },
  { id: 'edu-kougi', word: '講義', reading: 'こうぎ', romaji: 'kougi', meaning: 'Bài giảng (Đại học)', hanViet: 'GIẢNG NGHĨA', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giáo dục'], examples: [{ jp: '講義に出席する。', reading: 'こうぎにしゅっせきする。', meaning: 'Tham dự bài giảng.' }] },
  { id: 'edu-zemi', word: 'ゼミ', reading: 'ゼミ', romaji: 'zemi', meaning: 'Hội thảo chuyên đề (Seminar)', type: 'Danh từ', jlpt: 'N2',
    tags: ['Giáo dục', 'Katakana'], examples: [{ jp: 'ゼミの発表。', reading: 'ゼミのはっぴょう。', meaning: 'Phát biểu tại seminar.' }] },
  { id: 'edu-ronbun', word: '論文', reading: 'ろんぶん', romaji: 'ronbun', meaning: 'Luận văn', hanViet: 'LUẬN VĂN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Giáo dục', 'Nghiên cứu'], examples: [{ jp: '卒業論文を書く。', reading: 'そつぎょうろんぶんをかく。', meaning: 'Viết khóa luận tốt nghiệp.' }] },
  { id: 'edu-kenkyuu', word: '研究', reading: 'けんきゅう', romaji: 'kenkyuu', meaning: 'Nghiên cứu', hanViet: 'NGHIÊN CỨU', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giáo dục', 'Khoa học'], examples: [{ jp: '研究所で働く。', reading: 'けんきゅうじょではたらく。', meaning: 'Làm việc tại viện nghiên cứu.' }] },
  { id: 'edu-ryuugaku', word: '留学', reading: 'りゅうがく', romaji: 'ryuugaku', meaning: 'Du học', hanViet: 'LƯU HỌC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'], examples: [{ jp: '日本へ留学する。', reading: 'にほんへりゅうがくする。', meaning: 'Du học Nhật Bản.' }] },
  { id: 'edu-shougaku', word: '奨学金', reading: 'しょうがくきん', romaji: 'shougakukin', meaning: 'Học bổng', hanViet: 'TƯỞNG HỌC KIM', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giáo dục', 'Kinh tế'], examples: [{ jp: '奨学金をもらう。', reading: 'しょうがくきんをもらう。', meaning: 'Nhận học bổng.' }] },

  // ─── Khoa học & Môn học (Science & Subjects) ───
  { id: 'edu-suugaku', word: '数学', reading: 'すうがく', romaji: 'suugaku', meaning: 'Toán học', hanViet: 'SỐ HỌC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Môn học'], examples: [{ jp: '数学が苦手だ。', reading: 'すうがくがにがてだ。', meaning: 'Kém môn toán.' }] },
  { id: 'edu-kagaku', word: '科学', reading: 'かがく', romaji: 'kagaku', meaning: 'Khoa học', hanViet: 'KHOA HỌC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Khoa học'], examples: [{ jp: '科学の進歩。', reading: 'かがくのしんぽ。', meaning: 'Tiến bộ khoa học.' }] },
  { id: 'edu-kagaku2', word: '化学', reading: 'かがく', romaji: 'kagaku', meaning: 'Hóa học', hanViet: 'HÓA HỌC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Môn học'], examples: [{ jp: '化学実験。', reading: 'かがくじっけん。', meaning: 'Thí nghiệm hóa học.' }] },
  { id: 'edu-butsuri', word: '物理', reading: 'ぶつり', romaji: 'butsuri', meaning: 'Vật lý', hanViet: 'VẬT LÝ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Môn học'], examples: [{ jp: '物理学。', reading: 'ぶつりがく。', meaning: 'Vật lý học.' }] },
  { id: 'edu-rekishi', word: '歴史', reading: 'れきし', romaji: 'rekishi', meaning: 'Lịch sử', hanViet: 'LỊCH SỬ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Môn học'], examples: [{ jp: '日本の歴史。', reading: 'にほんのれきし。', meaning: 'Lịch sử Nhật Bản.' }] },
  { id: 'edu-chiri', word: '地理', reading: 'ちり', romaji: 'chiri', meaning: 'Địa lý', hanViet: 'ĐỊA LÝ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Môn học'], examples: [{ jp: '地理を勉強する。', reading: 'ちりをべんきょうする。', meaning: 'Học địa lý.' }] },
  { id: 'edu-jikken', word: '実験', reading: 'じっけん', romaji: 'jikken', meaning: 'Thực nghiệm, thí nghiệm', hanViet: 'THỰC NGHIỆM', type: 'Danh từ', jlpt: 'N3',
    tags: ['Khoa học'], examples: [{ jp: '実験を行う。', reading: 'じっけんをおこなう。', meaning: 'Tiến hành thí nghiệm.' }] },
  { id: 'edu-ronri', word: '論理', reading: 'ろんり', romaji: 'ronri', meaning: 'Logic, lý luận', hanViet: 'LUẬN LÝ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Tư duy'], examples: [{ jp: '論理的に考える。', reading: 'ろんりてきにかんがえる。', meaning: 'Suy nghĩ một cách logic.' }] },
  { id: 'edu-riron', word: '理論', reading: 'りろん', romaji: 'riron', meaning: 'Lý thuyết', hanViet: 'LÝ LUẬN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Tư duy'], examples: [{ jp: '理論と実践。', reading: 'りろんとじっせん。', meaning: 'Lý thuyết và thực hành.' }] },
  { id: 'edu-hassou', word: '発想', reading: 'はっそう', romaji: 'hassou', meaning: 'Ý tưởng, sáng tạo', hanViet: 'PHÁT TƯỞNG', type: 'Danh từ', jlpt: 'N2',
    tags: ['Tư duy'], examples: [{ jp: 'ユニークな発想。', reading: 'ユニークなはっそう。', meaning: 'Ý tưởng độc đáo.' }] },
];

// ── from: vocabTopic_Household_Daily.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: HOUSEHOLD & DAILY LIFE
// Từ vựng về Việc nhà, Đồ gia dụng và Sinh hoạt hàng ngày
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_HOUSEHOLD: VocabEntry[] = [
  // ─── Việc nhà (Chores) ───
  { id: 'house-kaji', word: '家事', reading: 'かじ', romaji: 'kaji', meaning: 'Việc nhà', hanViet: 'GIA SỰ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Việc nhà'], examples: [{ jp: '家事をする。', reading: 'かじをする。', meaning: 'Làm việc nhà.' }] },
  { id: 'house-souji', word: '掃除', reading: 'そうじ', romaji: 'souji', meaning: 'Dọn dẹp', hanViet: 'TẢO TRỪ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Việc nhà'], examples: [{ jp: '部屋を掃除する。', reading: 'へやをそうじする。', meaning: 'Dọn phòng.' }] },
  { id: 'house-sentaku', word: '洗濯', reading: 'せんたく', romaji: 'sentaku', meaning: 'Giặt giũ', hanViet: 'TẨY TRẠC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Việc nhà'], examples: [{ jp: '洗濯物を干す。', reading: 'せんたくものをほす。', meaning: 'Phơi đồ giặt.' }] },
  { id: 'house-ryouri', word: '料理', reading: 'りょうり', romaji: 'ryouri', meaning: 'Nấu ăn', hanViet: 'LIỆU LÝ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Việc nhà'], examples: [{ jp: '料理を作る。', reading: 'りょうりをつくる。', meaning: 'Nấu ăn.' }] },
  { id: 'house-katazuke', word: '片付け', reading: 'かたづけ', romaji: 'katazuke', meaning: 'Sắp xếp, dọn dẹp', type: 'Danh từ', jlpt: 'N3',
    tags: ['Việc nhà'], examples: [{ jp: '後片付けをする。', reading: 'あとかたづけをする。', meaning: 'Dọn dẹp sau khi ăn/làm xong.' }] },
  { id: 'house-gomi', word: 'ゴミ', reading: 'ごみ', romaji: 'gomi', meaning: 'Rác', type: 'Danh từ', jlpt: 'N4',
    tags: ['Việc nhà'], examples: [{ jp: 'ゴミを出す。', reading: 'ゴミをだす。', meaning: 'Vứt rác.' }] },
  { id: 'house-kaimono', word: '買い物', reading: 'かいもの', romaji: 'kaimono', meaning: 'Mua sắm', hanViet: 'MÃI VẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Việc nhà'], examples: [{ jp: 'スーパーへ買い物に行く。', reading: 'スーパーへかいものにいく。', meaning: 'Đi siêu thị mua đồ.' }] },
  { id: 'house-rusu', word: '留守', reading: 'るす', romaji: 'rusu', meaning: 'Vắng nhà', hanViet: 'LƯU THỦ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Đời sống'], examples: [{ jp: '留守番をする。', reading: 'るすばんをする。', meaning: 'Trông nhà.' }] },

  // ─── Đồ gia dụng (Appliances & Furniture) ───
  { id: 'house-kagu', word: '家具', reading: 'かぐ', romaji: 'kagu', meaning: 'Đồ nội thất', hanViet: 'GIA CỤ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Đồ vật'], examples: [{ jp: '家具を揃える。', reading: 'かぐをそろえる。', meaning: 'Sắm sửa nội thất.' }] },
  { id: 'house-kaden', word: '家電', reading: 'かでん', romaji: 'kaden', meaning: 'Đồ điện gia dụng', hanViet: 'GIA ĐIỆN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Đồ vật'], examples: [{ jp: '家電製品。', reading: 'かでんせいひん。', meaning: 'Sản phẩm điện gia dụng.' }] },
  { id: 'house-reizouko', word: '冷蔵庫', reading: 'れいぞうこ', romaji: 'reizouko', meaning: 'Tủ lạnh', hanViet: 'LÃNH TÀNG KHỐ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ vật'], examples: [{ jp: '牛乳を冷蔵庫に入れる。', reading: 'ぎゅうにゅうをれいぞうこにいれる。', meaning: 'Cho sữa vào tủ lạnh.' }] },
  { id: 'house-sentaku', word: '洗濯機', reading: 'せんたくき', romaji: 'sentakuki', meaning: 'Máy giặt', hanViet: 'TẨY TRẠC CƠ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ vật'], examples: [{ jp: '洗濯機を回す。', reading: 'せんたくきをまわす。', meaning: 'Bật máy giặt.' }] },
  { id: 'house-soujiki', word: '掃除機', reading: 'そうじき', romaji: 'soujiki', meaning: 'Máy hút bụi', hanViet: 'TẢO TRỪ CƠ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ vật'], examples: [{ jp: '掃除機をかける。', reading: 'そうじきをかける。', meaning: 'Hút bụi.' }] },
  { id: 'house-denshirenji', word: '電子レンジ', reading: 'でんしレンジ', romaji: 'denshirenji', meaning: 'Lò vi sóng', type: 'Danh từ', jlpt: 'N3',
    tags: ['Đồ vật'], examples: [{ jp: '電子レンジで温める。', reading: 'でんしレンジであたためる。', meaning: 'Hâm nóng bằng lò vi sóng.' }] },
  { id: 'house-eakon', word: 'エアコン', reading: 'エアコン', romaji: 'eakon', meaning: 'Điều hòa', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ vật'], examples: [{ jp: 'エアコンをつける。', reading: 'エアコンをつける。', meaning: 'Bật điều hòa.' }] },
  { id: 'house-suuihanki', word: '炊飯器', reading: 'すいはんき', romaji: 'suihanki', meaning: 'Nồi cơm điện', hanViet: 'XUY PHẠN CƠ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Đồ vật'], examples: [{ jp: '炊飯器でご飯を炊く。', reading: 'すいはんきでごはんをたく。', meaning: 'Nấu cơm bằng nồi cơm điện.' }] },
  { id: 'house-kagami', word: '鏡', reading: 'かがみ', romaji: 'kagami', meaning: 'Gương', hanViet: 'KÍNH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ vật'], examples: [{ jp: '鏡を見る。', reading: 'かがみをみる。', meaning: 'Soi gương.' }] },
  { id: 'house-gomibako', word: 'ゴミ箱', reading: 'ごみばこ', romaji: 'gomibako', meaning: 'Thùng rác', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ vật'], examples: [{ jp: 'ゴミ箱に捨てる。', reading: 'ごみばこにすてる。', meaning: 'Vứt vào thùng rác.' }] },

  // ─── Đời sống hàng ngày (Daily Routine) ───
  { id: 'house-okiru', word: '起きる', reading: 'おきる', romaji: 'okiru', meaning: 'Thức dậy', hanViet: 'KHỞI', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hàng ngày'], examples: [{ jp: '毎朝6時に起きる。', reading: 'まいあさ6じにおきる。', meaning: 'Mỗi sáng dậy lúc 6 giờ.' }] },
  { id: 'house-neru', word: '寝る', reading: 'ねる', romaji: 'neru', meaning: 'Ngủ', hanViet: 'TẨM', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hàng ngày'], examples: [{ jp: '早く寝る。', reading: 'はやくねる。', meaning: 'Đi ngủ sớm.' }] },
  { id: 'house-ha', word: '歯磨き', reading: 'はみがき', romaji: 'hamigaki', meaning: 'Đánh răng', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hàng ngày'], examples: [{ jp: '寝る前に歯磨きをする。', reading: 'ねるまえにはみがきをする。', meaning: 'Đánh răng trước khi ngủ.' }] },
  { id: 'house-furo', word: 'お風呂', reading: 'おふろ', romaji: 'ofuro', meaning: 'Bồn tắm', hanViet: 'PHONG LỮ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hàng ngày'], examples: [{ jp: 'お風呂に入る。', reading: 'おふろにはいる。', meaning: 'Đi tắm (bồn).' }] },
  { id: 'house-shawa', word: 'シャワー', reading: 'シャワー', romaji: 'shawaa', meaning: 'Vòi hoa sen', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hàng ngày'], examples: [{ jp: 'シャワーを浴びる。', reading: 'シャワーをあびる。', meaning: 'Tắm vòi hoa sen.' }] },
  { id: 'house-kigae', word: '着替え', reading: 'きがえ', romaji: 'kigae', meaning: 'Thay quần áo', type: 'Danh từ', jlpt: 'N3',
    tags: ['Hàng ngày'], examples: [{ jp: 'パジャマに着替える。', reading: 'パジャマにきがえる。', meaning: 'Thay đồ ngủ.' }] },
  { id: 'house-keshou', word: '化粧', reading: 'けしょう', romaji: 'keshou', meaning: 'Trang điểm', hanViet: 'HÓA TRANG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Hàng ngày'], examples: [{ jp: '化粧をする。', reading: 'けしょうをする。', meaning: 'Trang điểm.' }] },
];

// ── from: vocabTopic_Love_Romance.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: LOVE, ROMANCE & RELATIONSHIPS
// Từ vựng về Tình yêu, Hẹn hò, Hôn nhân và Cảm xúc lãng mạn
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_LOVE: VocabEntry[] = [
  // ─── Giai đoạn tán tỉnh & Hẹn hò (Dating Phase) ───
  { id: 'love-kokuhaku', word: '告白', reading: 'こくはく', romaji: 'kokuhaku', meaning: 'Tỏ tình', hanViet: 'CÁO BẠCH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Tình yêu', 'Hành động'], examples: [{ jp: '好きな人に告白する。', reading: 'すきなひとにこくはくする。', meaning: 'Tỏ tình với người mình thích.' }] },
  { id: 'love-tsukiau', word: '付き合う', reading: 'つきあう', romaji: 'tsukiau', meaning: 'Hẹn hò, quen nhau', hanViet: 'PHÓ HỢP', type: 'Động từ nhóm 1', jlpt: 'N3',
    tags: ['Tình yêu', 'Quan hệ'], examples: [{ jp: '彼と付き合っている。', reading: 'かれとつきあっている。', meaning: 'Đang hẹn hò với anh ấy.' }] },
  { id: 'love-hitomebore', word: '一目惚れ', reading: 'ひとめぼれ', romaji: 'hitomebore', meaning: 'Yêu từ cái nhìn đầu tiên (Tiếng sét ái tình)', type: 'Danh từ', jlpt: 'N1',
    tags: ['Tình yêu', 'Cảm xúc'], examples: [{ jp: '彼女に一目惚れした。', reading: 'かのじょにひとめぼれした。', meaning: 'Đã yêu cô ấy từ cái nhìn đầu tiên.' }] },
  { id: 'love-deto', word: 'デート', reading: 'デート', romaji: 'deeto', meaning: 'Hẹn hò (buổi đi chơi)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Tình yêu', 'Katakana'], examples: [{ jp: '初デートに行く。', reading: 'はつデートにいく。', meaning: 'Đi hẹn hò lần đầu.' }] },
  { id: 'love-kareshi', word: '彼氏', reading: 'かれし', romaji: 'kareshi', meaning: 'Bạn trai', type: 'Danh từ', jlpt: 'N3',
    tags: ['Tình yêu', 'Con người'], examples: [{ jp: '彼氏ができた。', reading: 'かれしができた。', meaning: 'Đã có bạn trai.' }] },
  { id: 'love-kanojo', word: '彼女', reading: 'かのじょ', romaji: 'kanojo', meaning: 'Bạn gái / Cô ấy', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tình yêu', 'Con người'], examples: [{ jp: '彼女を大切にする。', reading: 'かのじょをたいせつにする。', meaning: 'Trân trọng bạn gái.' }] },
  { id: 'love-koibito', word: '恋人', reading: 'こいびと', romaji: 'koibito', meaning: 'Người yêu', hanViet: 'LUYẾN NHÂN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Tình yêu', 'Con người'], examples: [{ jp: '恋人と過ごす。', reading: 'こいびととすごす。', meaning: 'Dành thời gian với người yêu.' }] },
  { id: 'love-kataomoi', word: '片思い', reading: 'かたおもい', romaji: 'kataomoi', meaning: 'Yêu đơn phương', hanViet: 'PHIẾN TƯ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Tình yêu', 'Cảm xúc'], examples: [{ jp: 'ずっと片思いしている。', reading: 'ずっとかたおもいしている。', meaning: 'Yêu đơn phương suốt.' }] },
  { id: 'love-ryouomoi', word: '両思い', reading: 'りょうおもい', romaji: 'ryouomoi', meaning: 'Tình yêu từ hai phía (Crush cũng thích mình)', type: 'Danh từ', jlpt: 'N2',
    tags: ['Tình yêu', 'Cảm xúc'], examples: [{ jp: 'やっと両思いになれた。', reading: 'やっとりょうおもいになれた。', meaning: 'Cuối cùng tình cảm cũng được đáp lại.' }] },
  { id: 'love-nanpa', word: 'ナンパ', reading: 'ナンパ', romaji: 'nanpa', meaning: 'Tán tỉnh, bắt chuyện (ngoài đường)', type: 'Danh từ', jlpt: 'N1',
    tags: ['Tình yêu', 'Slang'], examples: [{ jp: '海でナンパされた。', reading: 'うみでナンパされた。', meaning: 'Bị tán tỉnh ở biển.' }] },

  // ─── Cảm xúc & Hành động (Emotions & Actions) ───
  { id: 'love-furu', word: '振る', reading: 'ふる', romaji: 'furu', meaning: 'Đá (chia tay), từ chối', hanViet: 'CHẤN', type: 'Động từ nhóm 1', jlpt: 'N3',
    tags: ['Tình yêu', 'Hành động'], examples: [{ jp: '彼氏を振った。', reading: 'かれしをふった。', meaning: 'Đã đá bạn trai.' }] },
  { id: 'love-furareru', word: '振られる', reading: 'ふられる', romaji: 'furareru', meaning: 'Bị đá', type: 'Động từ', jlpt: 'N3',
    tags: ['Tình yêu', 'Cảm xúc'], examples: [{ jp: '告白して振られた。', reading: 'こくはくしてふられた。', meaning: 'Tỏ tình xong bị từ chối (bị đá).' }] },
  { id: 'love-wakare', word: '別れる', reading: 'わかれる', romaji: 'wakareru', meaning: 'Chia tay', hanViet: 'BIỆT', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Tình yêu', 'Kết thúc'], examples: [{ jp: '恋人と別れた。', reading: 'こいびととわかれた。', meaning: 'Đã chia tay người yêu.' }] },
  { id: 'love-uwaki', word: '浮気', reading: 'うわき', romaji: 'uwaki', meaning: 'Ngoại tình, bắt cá hai tay', hanViet: 'PHÙ KHÍ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Tình yêu', 'Xấu'], examples: [{ jp: '浮気がばれた。', reading: 'うわきがばれた。', meaning: 'Vụ ngoại tình bị lộ.' }] },
  { id: 'love-yakimochi', word: '焼き餅', reading: 'やきもち', romaji: 'yakimochi', meaning: 'Ghen tuông', type: 'Danh từ', jlpt: 'N2',
    tags: ['Tình yêu', 'Cảm xúc'], examples: [{ jp: '焼き餅を焼く。', reading: 'やきもちをやく。', meaning: 'Ghen tuông.' }] },
  { id: 'love-ichazuku', word: 'イチャイチャ', reading: 'イチャイチャ', romaji: 'ichaicha', meaning: 'Tình tứ, chim chuột', type: 'Từ tượng thanh', jlpt: 'N1',
    tags: ['Tình yêu', 'Hành động'], examples: [{ jp: '人前でイチャイチャするな。', reading: 'ひとまえでイチャイチャするな。', meaning: 'Đừng có chim chuột trước mặt người khác.' }] },
  { id: 'love-dakishimeru', word: '抱きしめる', reading: 'だきしめる', romaji: 'dakishimeru', meaning: 'Ôm chặt', type: 'Động từ nhóm 2', jlpt: 'N2',
    tags: ['Tình yêu', 'Hành động'], examples: [{ jp: '彼女を抱きしめる。', reading: 'かのじょをだきしめる。', meaning: 'Ôm chặt cô ấy.' }] },
  { id: 'love-kisu', word: 'キス', reading: 'キス', romaji: 'kisu', meaning: 'Hôn', type: 'Danh từ', jlpt: 'N3',
    tags: ['Tình yêu', 'Hành động'], examples: [{ jp: 'キスをする。', reading: 'キスをする。', meaning: 'Hôn.' }] },

  // ─── Hôn nhân & Gia đình (Marriage) ───
  { id: 'love-kekkon', word: '結婚', reading: 'けっこん', romaji: 'kekkon', meaning: 'Kết hôn', hanViet: 'KẾT HÔN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hôn nhân'], examples: [{ jp: '結婚してください。', reading: 'けっこんしてください。', meaning: 'Hãy kết hôn với anh nhé.' }] },
  { id: 'love-puroposu', word: 'プロポーズ', reading: 'プロポーズ', romaji: 'puropoozu', meaning: 'Cầu hôn (Propose)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Hôn nhân', 'Katakana'], examples: [{ jp: '指輪を渡してプロポーズする。', reading: 'ゆびわをわたしてプロポーズする。', meaning: 'Trao nhẫn và cầu hôn.' }] },
  { id: 'love-konyaku', word: '婚約', reading: 'こんやく', romaji: 'konyaku', meaning: 'Đính hôn', hanViet: 'HÔN ƯỚC', type: 'Danh từ', jlpt: 'N2',
    tags: ['Hôn nhân'], examples: [{ jp: '婚約指輪。', reading: 'こんやくゆびわ。', meaning: 'Nhẫn đính hôn.' }] },
  { id: 'love-shinkon', word: '新婚', reading: 'しんこん', romaji: 'shinkon', meaning: 'Tân hôn', hanViet: 'TÂN HÔN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Hôn nhân'], examples: [{ jp: '新婚旅行。', reading: 'しんこんりょこう。', meaning: 'Tuần trăng mật.' }] },
  { id: 'love-rikon', word: '離婚', reading: 'りこん', romaji: 'rikon', meaning: 'Ly hôn', hanViet: 'LY HÔN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Hôn nhân'], examples: [{ jp: '性格の不一致で離婚する。', reading: 'せいかくのふいっちでりこんする。', meaning: 'Ly hôn do không hợp tính cách.' }] },
  { id: 'love-fufu', word: '夫婦', reading: 'ふうふ', romaji: 'fuufu', meaning: 'Vợ chồng', hanViet: 'PHU PHỤ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Hôn nhân'], examples: [{ jp: '仲のいい夫婦。', reading: 'なかのいいふうふ。', meaning: 'Vợ chồng hòa thuận.' }] },
  { id: 'love-ninshin', word: '妊娠', reading: 'にんしん', romaji: 'ninshin', meaning: 'Mang thai', hanViet: 'NHÂM THẦN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Gia đình', 'Y tế'], examples: [{ jp: '妊娠三ヶ月。', reading: 'にんしんさんかげつ。', meaning: 'Mang thai 3 tháng.' }] },
];

// ── from: vocabTopic_Emergency_Safety.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: EMERGENCY, DISASTER & SAFETY
// Từ vựng về Thiên tai, Cấp cứu, Cảnh sát và Biển báo nguy hiểm
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_EMERGENCY: VocabEntry[] = [
  // ─── Khẩn cấp & Cảnh sát (Emergency Services) ───
  { id: 'emg-kyuukyuusha', word: '救急車', reading: 'きゅうきゅうしゃ', romaji: 'kyuukyuusha', meaning: 'Xe cấp cứu', hanViet: 'CỨU CẤP XA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Khẩn cấp', 'Y tế'], examples: [{ jp: '救急車を呼んでください！', reading: 'きゅうきゅうしゃをよんでください！', meaning: 'Hãy gọi xe cấp cứu!' }] },
  { id: 'emg-keisatsu', word: '警察', reading: 'けいさつ', romaji: 'keisatsu', meaning: 'Cảnh sát', hanViet: 'CẢNH SÁT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Khẩn cấp', 'An ninh'], examples: [{ jp: '警察に通報する。', reading: 'けいさつにつうほうする。', meaning: 'Báo cảnh sát.' }] },
  { id: 'emg-kouban', word: '交番', reading: 'こうばん', romaji: 'kouban', meaning: 'Đồn cảnh sát (nhỏ)', hanViet: 'GIAO PHIÊN', type: 'Danh từ', jlpt: 'N4',
    tags: ['An ninh', 'Địa điểm'], examples: [{ jp: '交番で道を聞く。', reading: 'こうばんでみちをきく。', meaning: 'Hỏi đường ở đồn cảnh sát.' }] },
  { id: 'emg-hyakutouban', word: '110番', reading: 'ひゃくとおばん', romaji: 'hyakutooban', meaning: 'Số 110 (Gọi cảnh sát)', type: 'Số', jlpt: 'N5',
    tags: ['Khẩn cấp'], examples: [{ jp: '泥棒だ！110番して！', reading: 'どろぼうだ！ひゃくとおばんして！', meaning: 'Có trộm! Gọi 110 đi!' }] },
  { id: 'emg-hyakujyuukyuuban', word: '119番', reading: 'ひゃくじゅうきゅうばん', romaji: 'hyakujuukyuuban', meaning: 'Số 119 (Cứu hỏa/Cấp cứu)', type: 'Số', jlpt: 'N5',
    tags: ['Khẩn cấp'], examples: [{ jp: '火事です、119番お願いします。', reading: 'かじです、ひゃくじゅうきゅうばんおねがいします。', meaning: 'Cháy rồi, làm ơn gọi 119.' }] },
  { id: 'emg-dorobou', word: '泥棒', reading: 'どろぼう', romaji: 'dorobou', meaning: 'Kẻ trộm', hanViet: 'NÊ BỔNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Tội phạm'], examples: [{ jp: '泥棒に入られた。', reading: 'どろぼうにはいられた。', meaning: 'Bị trộm đột nhập.' }] },
  { id: 'emg-jiken', word: '事件', reading: 'じけん', romaji: 'jiken', meaning: 'Vụ án, sự cố', hanViet: 'SỰ KIỆN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Tội phạm'], examples: [{ jp: '事件現場。', reading: 'じけんげんば。', meaning: 'Hiện trường vụ án.' }] },
  { id: 'emg-tasukete', word: '助けて', reading: 'たすけて', romaji: 'tasukete', meaning: 'Cứu tôi với!', type: 'Cụm từ', jlpt: 'N5',
    tags: ['Khẩn cấp', 'Giao tiếp'], examples: [{ jp: '誰か、助けて！', reading: 'だれか、たすけて！', meaning: 'Ai đó, cứu tôi với!' }] },

  // ─── Thiên tai & Sơ tán (Natural Disasters) ───
  { id: 'emg-jishin', word: '地震', reading: 'じしん', romaji: 'jishin', meaning: 'Động đất', hanViet: 'ĐỊA CHẤN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thiên tai'], examples: [{ jp: '地震速報。', reading: 'じしんそくほう。', meaning: 'Tin nhanh động đất.' }] },
  { id: 'emg-tsunami', word: '津波', reading: 'つなみ', romaji: 'tsunami', meaning: 'Sóng thần', hanViet: 'TÂN BA', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thiên tai'], examples: [{ jp: '津波警報。', reading: 'つなみけいほう。', meaning: 'Cảnh báo sóng thần.' }] },
  { id: 'emg-shindo', word: '震度', reading: 'しんど', romaji: 'shindo', meaning: 'Độ chấn động (Thang đo Nhật)', hanViet: 'CHẤN ĐỘ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thiên tai'], examples: [{ jp: '震度3の地震。', reading: 'しんど3のじしん。', meaning: 'Động đất 3 độ (shindo).' }] },
  { id: 'emg-hinan', word: '避難', reading: 'ひなん', romaji: 'hinan', meaning: 'Sơ tán, lánh nạn', hanViet: 'TỊ NAN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thiên tai', 'Hành động'], examples: [{ jp: '避難所へ行く。', reading: 'ひなんじょへいく。', meaning: 'Đi đến nơi sơ tán.' }] },
  { id: 'emg-hinanjo', word: '避難所', reading: 'ひなんじょ', romaji: 'hinanjo', meaning: 'Nơi sơ tán, trú ẩn', hanViet: 'TỊ NAN SỞ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thiên tai', 'Địa điểm'], examples: [{ jp: '避難所に集まる。', reading: 'ひなんじょにあつまる。', meaning: 'Tập trung ở nơi sơ tán.' }] },
  { id: 'emg-kaji', word: '火事', reading: 'かじ', romaji: 'kaji', meaning: 'Hỏa hoạn', hanViet: 'HỎA SỰ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tai nạn'], examples: [{ jp: '火事を消す。', reading: 'かじをけす。', meaning: 'Dập lửa.' }] },
  { id: 'emg-bousai', word: '防災', reading: 'ぼうさい', romaji: 'bousai', meaning: 'Phòng chống thiên tai', hanViet: 'PHÒNG TAI', type: 'Danh từ', jlpt: 'N1',
    tags: ['An toàn'], examples: [{ jp: '防災グッズ。', reading: 'ぼうさいグッズ。', meaning: 'Đồ dùng phòng chống thiên tai.' }] },
  { id: 'emg-teiden', word: '停電', reading: 'ていでん', romaji: 'teiden', meaning: 'Mất điện', hanViet: 'ĐÌNH ĐIỆN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Sự cố'], examples: [{ jp: '台風で停電した。', reading: 'たいふうでていでんした。', meaning: 'Mất điện do bão.' }] },

  // ─── Biển báo & Cảnh báo (Signs & Warnings) ───
  { id: 'emg-kinshi', word: '禁止', reading: 'きんし', romaji: 'kinshi', meaning: 'Cấm', hanViet: 'CẤM CHỈ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Biển báo'], examples: [{ jp: '立入禁止。', reading: 'たちいりきんし。', meaning: 'Cấm vào.' }] },
  { id: 'emg-kiken', word: '危険', reading: 'きけん', romaji: 'kiken', meaning: 'Nguy hiểm', hanViet: 'NGUY HIỂM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Biển báo'], examples: [{ jp: '混ぜるな危険。', reading: 'まぜるなきけん。', meaning: 'Nguy hiểm, cấm trộn lẫn (hóa chất).' }] },
  { id: 'emg-chuui', word: '注意', reading: 'ちゅうい', romaji: 'chuui', meaning: 'Chú ý', hanViet: 'CHÚ Ý', type: 'Danh từ', jlpt: 'N4',
    tags: ['Biển báo'], examples: [{ jp: '足元注意。', reading: 'あしもとちゅうい。', meaning: 'Chú ý dưới chân.' }] },
  { id: 'emg-hijouguchi', word: '非常口', reading: 'ひじょうぐち', romaji: 'hijouguchi', meaning: 'Cửa thoát hiểm', hanViet: 'PHI THƯỜNG KHẨU', type: 'Danh từ', jlpt: 'N3',
    tags: ['Biển báo', 'An toàn'], examples: [{ jp: '非常口を確認する。', reading: 'ひじょうぐちをかくにんする。', meaning: 'Kiểm tra cửa thoát hiểm.' }] },
  { id: 'emg-kosho', word: '故障中', reading: 'こしょうちゅう', romaji: 'koshouchuu', meaning: 'Đang hỏng (Out of order)', hanViet: 'CỐ CHƯỚNG TRUNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Biển báo'], examples: [{ jp: 'トイレは故障中です。', reading: 'トイレはこしょうちゅうです。', meaning: 'Nhà vệ sinh đang hỏng.' }] },
  { id: 'emg-koujichuu', word: '工事中', reading: 'こうじちゅう', romaji: 'koujichuu', meaning: 'Đang thi công', hanViet: 'CÔNG SỰ TRUNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Biển báo'], examples: [{ jp: '道路は工事中です。', reading: 'どうろはこうじちゅうです。', meaning: 'Đường đang thi công.' }] },
];

// ── from: vocabTopic_Culture_Tradition.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: JAPANESE CULTURE & TRADITION
// Từ vựng về Văn hóa, Lễ hội, Nghệ thuật và Trang phục truyền thống
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_CULTURE: VocabEntry[] = [
  // ─── Trang phục & Nghệ thuật (Clothing & Arts) ───
  { id: 'cul-kimono', word: '着物', reading: 'きもの', romaji: 'kimono', meaning: 'Kimono (Y phục Nhật)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Trang phục'], examples: [{ jp: '成人式で着物を着る。', reading: 'せいじんしきできものをきる。', meaning: 'Mặc Kimono vào lễ thành nhân.' }] },
  { id: 'cul-yukata', word: '浴衣', reading: 'ゆかた', romaji: 'yukata', meaning: 'Yukata (Kimono mùa hè)', hanViet: 'DỤC Y', type: 'Danh từ', jlpt: 'N3',
    tags: ['Văn hóa', 'Trang phục'], examples: [{ jp: '花火大会に浴衣で行く。', reading: 'はなびたいかいにゆかたでいく。', meaning: 'Mặc Yukata đi xem pháo hoa.' }] },
  { id: 'cul-sado', word: '茶道', reading: 'さどう', romaji: 'sadou', meaning: 'Trà đạo', hanViet: 'TRÀ ĐẠO', type: 'Danh từ', jlpt: 'N3',
    tags: ['Văn hóa', 'Nghệ thuật'], examples: [{ jp: '茶道を習う。', reading: 'さどうをならう。', meaning: 'Học trà đạo.' }] },
  { id: 'cul-kado', word: '華道', reading: 'かどう', romaji: 'kadou', meaning: 'Nghệ thuật cắm hoa (Ikebana)', hanViet: 'HOA ĐẠO', type: 'Danh từ', jlpt: 'N2',
    tags: ['Văn hóa', 'Nghệ thuật'], examples: [{ jp: '華道の教室。', reading: 'かどうのきょうしつ。', meaning: 'Lớp học cắm hoa.' }] },
  { id: 'cul-shodo', word: '書道', reading: 'しょどう', romaji: 'shodou', meaning: 'Thư pháp', hanViet: 'THƯ ĐẠO', type: 'Danh từ', jlpt: 'N3',
    tags: ['Văn hóa', 'Nghệ thuật'], examples: [{ jp: '筆で字を書く。', reading: 'ふででじをかく。', meaning: 'Viết chữ bằng bút lông.' }] },
  { id: 'cul-sumo', word: '相撲', reading: 'すもう', romaji: 'sumou', meaning: 'Vật Sumo', hanViet: 'TƯƠNG PHỐC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Văn hóa', 'Thể thao'], examples: [{ jp: '相撲を見る。', reading: 'すもうをみる。', meaning: 'Xem Sumo.' }] },
  { id: 'cul-kabuki', word: '歌舞伎', reading: 'かぶき', romaji: 'kabuki', meaning: 'Kịch Kabuki', hanViet: 'CA VŨ KỸ', type: 'Danh từ', jlpt: 'N1',
    tags: ['Văn hóa', 'Nghệ thuật'], examples: [{ jp: '歌舞伎役者。', reading: 'かぶきやくしゃ。', meaning: 'Diễn viên Kabuki.' }] },
  { id: 'cul-origami', word: '折り紙', reading: 'おりがみ', romaji: 'origami', meaning: 'Nghệ thuật gấp giấy', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Giải trí'], examples: [{ jp: '折り紙で鶴を折る。', reading: 'おりがみでつるをおる。', meaning: 'Gấp hạc bằng giấy.' }] },

  // ─── Tín ngưỡng & Địa điểm (Religion & Places) ───
  { id: 'cul-jinja', word: '神社', reading: 'じんじゃ', romaji: 'jinja', meaning: 'Đền Thần đạo', hanViet: 'THẦN XÃ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Tôn giáo'], examples: [{ jp: '神社にお参りする。', reading: 'じんじゃにおまいりする。', meaning: 'Đi lễ đền.' }] },
  { id: 'cul-otera', word: 'お寺', reading: 'おてら', romaji: 'otera', meaning: 'Chùa (Phật giáo)', hanViet: 'TỰ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Tôn giáo'], examples: [{ jp: '京都のお寺。', reading: 'きょうとのおてら。', meaning: 'Chùa ở Kyoto.' }] },
  { id: 'cul-omamori', word: 'お守り', reading: 'おまもり', romaji: 'omamori', meaning: 'Bùa hộ mệnh', hanViet: 'THỦ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Văn hóa', 'Vật phẩm'], examples: [{ jp: '交通安全のお守り。', reading: 'こうつうあんぜんのおまもり。', meaning: 'Bùa an toàn giao thông.' }] },
  { id: 'cul-omikuji', word: 'おみくじ', reading: 'おみくじ', romaji: 'omikuji', meaning: 'Quẻ bói', type: 'Danh từ', jlpt: 'N2',
    tags: ['Văn hóa', 'Vật phẩm'], examples: [{ jp: 'おみくじを引く。', reading: 'おみくじをひく。', meaning: 'Rút quẻ.' }] },
  { id: 'cul-zazen', word: '座禅', reading: 'ざぜん', romaji: 'zazen', meaning: 'Tọa thiền', hanViet: 'TỌA THIỀN', type: 'Danh từ', jlpt: 'N1',
    tags: ['Văn hóa', 'Tôn giáo'], examples: [{ jp: '座禅を組む。', reading: 'ざぜんをくむ。', meaning: 'Ngồi thiền.' }] },
  { id: 'cul-kamisama', word: '神様', reading: 'かみさま', romaji: 'kamisama', meaning: 'Thần linh', hanViet: 'THẦN DẠNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Tôn giáo'], examples: [{ jp: '神様に祈る。', reading: 'かみさまにいのる。', meaning: 'Cầu nguyện thần linh.' }] },

  // ─── Lễ hội & Sự kiện (Festivals & Events) ───
  { id: 'cul-matsuri', word: '祭り', reading: 'まつり', romaji: 'matsuri', meaning: 'Lễ hội', hanViet: 'TẾ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Sự kiện'], examples: [{ jp: '夏祭りに行く。', reading: 'なつまつりにいく。', meaning: 'Đi lễ hội mùa hè.' }] },
  { id: 'cul-hanabi', word: '花火', reading: 'はなび', romaji: 'hanabi', meaning: 'Pháo hoa', hanViet: 'HOA HỎA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Sự kiện'], examples: [{ jp: '花火大会。', reading: 'はなびたいかい。', meaning: 'Lễ hội pháo hoa.' }] },
  { id: 'cul-hanami', word: '花見', reading: 'はなみ', romaji: 'hanami', meaning: 'Ngắm hoa (anh đào)', hanViet: 'HOA KIẾN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Sự kiện'], examples: [{ jp: '公園で花見をする。', reading: 'こうえんではなみをする。', meaning: 'Ngắm hoa ở công viên.' }] },
  { id: 'cul-shougatsu', word: 'お正月', reading: 'おしょうがつ', romaji: 'oshougatsu', meaning: 'Tết (Dương lịch)', hanViet: 'CHÍNH NGUYỆT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Sự kiện'], examples: [{ jp: 'お正月に実家に帰る。', reading: 'おしょうがつにじっかにかえる。', meaning: 'Về quê ăn Tết.' }] },
  { id: 'cul-otoshidama', word: 'お年玉', reading: 'おとしだま', romaji: 'otoshidama', meaning: 'Tiền lì xì', hanViet: 'NIÊN NGỌC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Văn hóa', 'Vật phẩm'], examples: [{ jp: '子供にお年玉をあげる。', reading: 'こどもにおとしだまをあげる。', meaning: 'Lì xì cho trẻ con.' }] },
  { id: 'cul-obon', word: 'お盆', reading: 'おぼん', romaji: 'obon', meaning: 'Lễ Obon (Lễ Vu Lan)', hanViet: 'BỒN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Văn hóa', 'Sự kiện'], examples: [{ jp: 'お盆休み。', reading: 'おぼんやすみ。', meaning: 'Nghỉ lễ Obon.' }] },
  { id: 'cul-seijinshiki', word: '成人式', reading: 'せいじんしき', romaji: 'seijinshiki', meaning: 'Lễ thành nhân (20 tuổi)', hanViet: 'THÀNH NHÂN THỨC', type: 'Danh từ', jlpt: 'N2',
    tags: ['Văn hóa', 'Sự kiện'], examples: [{ jp: '成人式に出席する。', reading: 'せいじんしきにしゅっせきする。', meaning: 'Tham dự lễ thành nhân.' }] },

  // ─── Đời sống & Phong tục (Customs) ───
  { id: 'cul-tatami', word: '畳', reading: 'たたみ', romaji: 'tatami', meaning: 'Chiếu Tatami', hanViet: 'ĐIỆP', type: 'Danh từ', jlpt: 'N2',
    tags: ['Văn hóa', 'Nhà cửa'], examples: [{ jp: '畳の部屋。', reading: 'たたみのへや。', meaning: 'Phòng trải chiếu Tatami.' }] },
  { id: 'cul-kotatsu', word: '炬燵', reading: 'こたつ', romaji: 'kotatsu', meaning: 'Bàn sưởi', type: 'Danh từ', jlpt: 'N2',
    tags: ['Văn hóa', 'Đồ vật'], examples: [{ jp: 'こたつでみかんを食べる。', reading: 'こたつでみかんをたべる。', meaning: 'Ngồi bàn sưởi ăn quýt.' }] },
  { id: 'cul-furoshiki', word: '風呂敷', reading: 'ふろしき', romaji: 'furoshiki', meaning: 'Khăn gói đồ', type: 'Danh từ', jlpt: 'N1',
    tags: ['Văn hóa', 'Đồ vật'], examples: [{ jp: '荷物を風呂敷で包む。', reading: 'にもつをふろしきでつつむ。', meaning: 'Gói đồ bằng khăn Furoshiki.' }] },
  { id: 'cul-hashi', word: '箸', reading: 'はし', romaji: 'hashi', meaning: 'Đũa', hanViet: 'TRỮ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Đồ vật'], examples: [{ jp: 'お箸を使う。', reading: 'おはしをつかう。', meaning: 'Dùng đũa.' }] },
  { id: 'cul-seiza', word: '正座', reading: 'せいざ', romaji: 'seiza', meaning: 'Ngồi quỳ (kiểu Nhật)', hanViet: 'CHÍNH TỌA', type: 'Danh từ', jlpt: 'N3',
    tags: ['Văn hóa', 'Hành động'], examples: [{ jp: '畳の上で正座する。', reading: 'たたみのうえでせいざする。', meaning: 'Ngồi quỳ trên chiếu Tatami.' }] },
  { id: 'cul-ojigi', word: 'お辞儀', reading: 'おじぎ', romaji: 'ojigi', meaning: 'Cúi chào', type: 'Danh từ', jlpt: 'N3',
    tags: ['Văn hóa', 'Giao tiếp'], examples: [{ jp: '深くお辞儀をする。', reading: 'ふかくおじぎをする。', meaning: 'Cúi chào thật thấp.' }] },
];

// ── from: vocabTopic_Sports_General.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: SPORTS (GENERAL)
// Từ vựng chung về Thể thao, Thi đấu, Quy tắc và Dụng cụ
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_SPORTS_GENERAL: VocabEntry[] = [
  // ─── Cơ bản & Thi đấu (Match & Competition) ───
  { id: 'sport-undou', word: '運動', reading: 'うんどう', romaji: 'undou', meaning: 'Vận động, thể dục', hanViet: 'VẬN ĐỘNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao', 'Cơ bản'], examples: [{ jp: '毎日運動する。', reading: 'まいにちうんどうする。', meaning: 'Tập thể dục mỗi ngày.' }] },
  { id: 'sport-shiai', word: '試合', reading: 'しあい', romaji: 'shiai', meaning: 'Trận đấu', hanViet: 'THÍ HỢP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao'], examples: [{ jp: '試合に出る。', reading: 'しあいにでる。', meaning: 'Tham gia trận đấu.' }] },
  { id: 'sport-taikai', word: '大会', reading: 'たいかい', romaji: 'taikai', meaning: 'Đại hội, giải đấu', hanViet: 'ĐẠI HỘI', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao'], examples: [{ jp: '世界大会。', reading: 'せかいたいかい。', meaning: 'Giải đấu thế giới.' }] },
  { id: 'sport-senshu', word: '選手', reading: 'せんしゅ', romaji: 'senshu', meaning: 'Tuyển thủ, vận động viên', hanViet: 'TUYỂN THỦ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Con người'], examples: [{ jp: 'プロ選手。', reading: 'プロせんしゅ。', meaning: 'Vận động viên chuyên nghiệp.' }] },
  { id: 'sport-senshuken', word: '選手権', reading: 'せんしゅけん', romaji: 'senshuken', meaning: 'Giải vô địch', hanViet: 'TUYỂN THỦ QUYỀN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thể thao'], examples: [{ jp: '世界選手権。', reading: 'せかいせんしゅけん。', meaning: 'Giải vô địch thế giới.' }] },
  { id: 'sport-yuushou', word: '優勝', reading: 'ゆうしょう', romaji: 'yuushou', meaning: 'Vô địch', hanViet: 'ƯU THẮNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Thành tích'], examples: [{ jp: '優勝を目指す。', reading: 'ゆうしょうをめざす。', meaning: 'Nhắm tới chức vô địch.' }] },
  { id: 'sport-junyuushou', word: '準優勝', reading: 'じゅんゆうしょう', romaji: 'junyuushou', meaning: 'Á quân, về nhì', hanViet: 'CHUẨN ƯU THẮNG', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thể thao', 'Thành tích'], examples: [{ jp: '惜しくも準優勝だった。', reading: 'おしくもじゅんゆうしょうだった。', meaning: 'Tiếc quá, chỉ về nhì.' }] },
  { id: 'sport-katsu', word: '勝つ', reading: 'かつ', romaji: 'katsu', meaning: 'Thắng', hanViet: 'THẮNG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Thể thao', 'Hành động'], examples: [{ jp: '試合に勝つ。', reading: 'しあいにかつ。', meaning: 'Thắng trận đấu.' }] },
  { id: 'sport-makeru', word: '負ける', reading: 'まける', romaji: 'makeru', meaning: 'Thua', hanViet: 'PHỤ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Thể thao', 'Hành động'], examples: [{ jp: '強豪に負ける。', reading: 'きょうごうにまける。', meaning: 'Thua đối thủ mạnh.' }] },
  { id: 'sport-hikiwake', word: '引き分け', reading: 'ひきわけ', romaji: 'hikiwake', meaning: 'Hòa', hanViet: 'DẪN PHÂN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thể thao', 'Kết quả'], examples: [{ jp: '試合は引き分けに終わった。', reading: 'しあいはひきわけにおわった。', meaning: 'Trận đấu kết thúc với tỷ số hòa.' }] },
  { id: 'sport-ouen', word: '応援', reading: 'おうえん', romaji: 'ouen', meaning: 'Cổ vũ', hanViet: 'ỨNG VIỆN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Hành động'], examples: [{ jp: 'チームを応援する。', reading: 'チームをおうえんする。', meaning: 'Cổ vũ cho đội bóng.' }] },
  { id: 'sport-kankyaku', word: '観客', reading: 'かんきゃく', romaji: 'kankyaku', meaning: 'Khán giả', hanViet: 'QUAN KHÁCH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Con người'], examples: [{ jp: '観客が歓声を上げる。', reading: 'かんきゃくがかんせいをあげる。', meaning: 'Khán giả reo hò.' }] },
  { id: 'sport-shinpan', word: '審判', reading: 'しんぱん', romaji: 'shinpan', meaning: 'Trọng tài', hanViet: 'THẨM PHÁN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thể thao', 'Con người'], examples: [{ jp: '審判の判定。', reading: 'しんぱんのはんてい。', meaning: 'Phán quyết của trọng tài.' }] },
  { id: 'sport-hantei', word: '判定', reading: 'はんてい', romaji: 'hantei', meaning: 'Phán quyết, định đoạt', hanViet: 'PHÁN ĐỊNH', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thể thao', 'Quy tắc'], examples: [{ jp: '判定勝ち。', reading: 'はんていがち。', meaning: 'Thắng nhờ phán quyết (điểm số).' }] },
  { id: 'sport-hansoku', word: '反則', reading: 'はんそく', romaji: 'hansoku', meaning: 'Phạm lỗi (Foul)', hanViet: 'PHẢN TẮC', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thể thao', 'Quy tắc'], examples: [{ jp: '反則で退場になる。', reading: 'はんそくでたいじょうになる。', meaning: 'Bị đuổi khỏi sân vì phạm lỗi.' }] },
  { id: 'sport-taijou', word: '退場', reading: 'たいじょう', romaji: 'taijou', meaning: 'Rời sân, bị đuổi', hanViet: 'THOÁI TRƯỜNG', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thể thao', 'Quy tắc'], examples: [{ jp: 'レッドカードで退場。', reading: 'レッドカードでたいじょう。', meaning: 'Bị đuổi vì thẻ đỏ.' }] },
  { id: 'sport-kiroku', word: '記録', reading: 'きろく', romaji: 'kiroku', meaning: 'Kỷ lục, ghi chép', hanViet: 'KÝ LỤC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Thành tích'], examples: [{ jp: '世界記録を更新する。', reading: 'せかいきろくをこうしんする。', meaning: 'Phá kỷ lục thế giới.' }] },
  { id: 'sport-koushin', word: '更新', reading: 'こうしん', romaji: 'koushin', meaning: 'Cập nhật, phá (kỷ lục)', hanViet: 'CANH TÂN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Thành tích'], examples: [{ jp: '自己ベストを更新する。', reading: 'じこベストをこうしんする。', meaning: 'Phá kỷ lục cá nhân.' }] },
  { id: 'sport-medal', word: 'メダル', reading: 'メダル', romaji: 'medaru', meaning: 'Huy chương', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Katakana'], examples: [{ jp: '金メダルを取る。', reading: 'きんメダルをとる。', meaning: 'Giành huy chương vàng.' }] },
  { id: 'sport-hyoushoudai', word: '表彰台', reading: 'ひょうしょうだい', romaji: 'hyoushoudai', meaning: 'Bục nhận giải', hanViet: 'BIỂU CHƯƠNG ĐÀI', type: 'Danh từ', jlpt: 'N1',
    tags: ['Thể thao'], examples: [{ jp: '表彰台に立つ。', reading: 'ひょうしょうだいにたつ。', meaning: 'Đứng trên bục nhận giải.' }] },

  // ─── Địa điểm & Dụng cụ (Venue & Equipment) ───
  { id: 'sport-sutajiamu', word: 'スタジアム', reading: 'スタジアム', romaji: 'sutajiamu', meaning: 'Sân vận động', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Địa điểm'], examples: [{ jp: 'サッカースタジアム。', reading: 'サッカースタジアム。', meaning: 'Sân vận động bóng đá.' }] },
  { id: 'sport-taiikukan', word: '体育館', reading: 'たいいくかん', romaji: 'taiikukan', meaning: 'Nhà thi đấu, phòng thể chất', hanViet: 'THỂ DỤC QUÁN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao', 'Địa điểm'], examples: [{ jp: '体育館でバスケをする。', reading: 'たいいくかんでバスケをする。', meaning: 'Chơi bóng rổ trong nhà thi đấu.' }] },
  { id: 'sport-gurando', word: 'グラウンド', reading: 'グラウンド', romaji: 'guraundo', meaning: 'Sân bãi (Ground)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Địa điểm'], examples: [{ jp: 'グラウンドを走る。', reading: 'グラウンドをはしる。', meaning: 'Chạy trên sân.' }] },
  { id: 'sport-kooto', word: 'コート', reading: 'コート', romaji: 'kooto', meaning: 'Sân (Tennis, Bóng rổ)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Địa điểm'], examples: [{ jp: 'テニスコート。', reading: 'テニスコート。', meaning: 'Sân tennis.' }] },
  { id: 'sport-puuru', word: 'プール', reading: 'プール', romaji: 'puuru', meaning: 'Hồ bơi', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thể thao', 'Địa điểm'], examples: [{ jp: 'プールで泳ぐ。', reading: 'プールでおよぐ。', meaning: 'Bơi ở hồ bơi.' }] },
  { id: 'sport-dougu', word: '道具', reading: 'どうぐ', romaji: 'dougu', meaning: 'Dụng cụ', hanViet: 'ĐẠO CỤ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao', 'Đồ vật'], examples: [{ jp: 'スポーツ道具。', reading: 'スポーツどうぐ。', meaning: 'Dụng cụ thể thao.' }] },
  { id: 'sport-yunifoomu', word: 'ユニフォーム', reading: 'ユニフォーム', romaji: 'yunifoomu', meaning: 'Đồng phục thi đấu', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Trang phục'], examples: [{ jp: '新しいユニフォーム。', reading: 'あたらしいユニフォーム。', meaning: 'Đồng phục mới.' }] },
  { id: 'sport-zekken', word: 'ゼッケン', reading: 'ゼッケン', romaji: 'zekken', meaning: 'Số áo, bảng tên (trên áo)', type: 'Danh từ', jlpt: 'N1',
    tags: ['Thể thao', 'Trang phục'], examples: [{ jp: 'ゼッケンをつける。', reading: 'ゼッケンをつける。', meaning: 'Đeo số báo danh/số áo.' }] },

  // ─── Động từ chơi thể thao (Action Verbs) ───
  { id: 'sport-nageru', word: '投げる', reading: 'なげる', romaji: 'nageru', meaning: 'Ném', hanViet: 'ĐẦU', type: 'Động từ nhóm 2', jlpt: 'N3',
    tags: ['Hành động'], examples: [{ jp: 'ボールを投げる。', reading: 'ボールをなげる。', meaning: 'Ném bóng.' }] },
  { id: 'sport-keru', word: '蹴る', reading: 'ける', romaji: 'keru', meaning: 'Đá', hanViet: 'XÚC', type: 'Động từ nhóm 1', jlpt: 'N3',
    tags: ['Hành động'], examples: [{ jp: 'ボールを蹴る。', reading: 'ボールをける。', meaning: 'Đá bóng.' }] },
  { id: 'sport-utsu', word: '打つ', reading: 'うつ', romaji: 'utsu', meaning: 'Đánh (bóng)', hanViet: 'ĐẢ', type: 'Động từ nhóm 1', jlpt: 'N3',
    tags: ['Hành động'], examples: [{ jp: 'ホームランを打つ。', reading: 'ホームランをうつ。', meaning: 'Đánh bóng ghi điểm trực tiếp (Home run).' }] },
  { id: 'sport-toru', word: '捕る', reading: 'とる', romaji: 'toru', meaning: 'Bắt (bóng)', hanViet: 'BỘ', type: 'Động từ nhóm 1', jlpt: 'N3',
    tags: ['Hành động'], examples: [{ jp: 'ボールを捕る。', reading: 'ボールをとる。', meaning: 'Bắt bóng.' }] },
  { id: 'sport-hasiru', word: '走る', reading: 'はしる', romaji: 'hashiru', meaning: 'Chạy', hanViet: 'TẨU', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'], examples: [{ jp: '全力で走る。', reading: 'ぜんりょくではしる。', meaning: 'Chạy hết sức.' }] },
  { id: 'sport-tobu', word: '跳ぶ', reading: 'とぶ', romaji: 'tobu', meaning: 'Nhảy (cao/xa)', hanViet: 'KHIÊU', type: 'Động từ nhóm 1', jlpt: 'N3',
    tags: ['Hành động'], examples: [{ jp: '高く跳ぶ。', reading: 'たかくとぶ。', meaning: 'Nhảy cao.' }] },
  { id: 'sport-oyogu', word: '泳ぐ', reading: 'およぐ', romaji: 'oyogu', meaning: 'Bơi', hanViet: 'VỊNH', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'], examples: [{ jp: '速く泳ぐ。', reading: 'はやくおよぐ。', meaning: 'Bơi nhanh.' }] },
  { id: 'sport-kog', word: '漕ぐ', reading: 'こぐ', romaji: 'kogu', meaning: 'Chèo (thuyền), đạp (xe)', type: 'Động từ nhóm 1', jlpt: 'N2',
    tags: ['Hành động'], examples: [{ jp: '自転車を漕ぐ。', reading: 'じてんしゃをこぐ。', meaning: 'Đạp xe đạp.' }] },
  { id: 'sport-semeru', word: '攻める', reading: 'せめる', romaji: 'semeru', meaning: 'Tấn công', hanViet: 'CÔNG', type: 'Động từ nhóm 2', jlpt: 'N2',
    tags: ['Hành động'], examples: [{ jp: '積極的に攻める。', reading: 'せっきょくてきにせめる。', meaning: 'Tấn công tích cực.' }] },
  { id: 'sport-mamoru', word: '守る', reading: 'まもる', romaji: 'mamoru', meaning: 'Phòng thủ', hanViet: 'THỦ', type: 'Động từ nhóm 1', jlpt: 'N3',
    tags: ['Hành động'], examples: [{ jp: 'ゴールを守る。', reading: 'ゴールをまもる。', meaning: 'Bảo vệ khung thành.' }] },
  { id: 'sport-kiso', word: '競う', reading: 'きそう', romaji: 'kisou', meaning: 'Cạnh tranh, thi đấu', hanViet: 'CẠNH', type: 'Động từ nhóm 1', jlpt: 'N2',
    tags: ['Hành động'], examples: [{ jp: '技を競う。', reading: 'わざをきそう。', meaning: 'Thi đấu kỹ năng.' }] },
  { id: 'sport-kitaeru', word: '鍛える', reading: 'きたえる', romaji: 'kitaeru', meaning: 'Rèn luyện', hanViet: 'ĐOÀN', type: 'Động từ nhóm 2', jlpt: 'N2',
    tags: ['Hành động'], examples: [{ jp: '体を鍛える。', reading: 'からだをきたえる。', meaning: 'Rèn luyện cơ thể.' }] },
];

// ── from: vocabTopic_Sports_Types.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: SPORTS TYPES & TERMS
// Từ vựng về các môn thể thao cụ thể (Bóng đá, Bóng chày, Võ thuật...)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_SPORTS_TYPES: VocabEntry[] = [
  // ─── Bóng đá (Soccer/Football) - Rất phổ biến ở Nhật ───
  { id: 'sport-sakkaa', word: 'サッカー', reading: 'サッカー', romaji: 'sakkaa', meaning: 'Bóng đá', type: 'Danh từ', jlpt: 'N5',
    tags: ['Bóng đá'], examples: [{ jp: 'サッカー選手。', reading: 'サッカーせんしゅ。', meaning: 'Cầu thủ bóng đá.' }] },
  { id: 'sport-keru', word: '蹴球', reading: 'しゅうきゅう', romaji: 'shuukyuu', meaning: 'Bóng đá (Từ cũ/Hán Việt)', hanViet: 'XÚC CẦU', type: 'Danh từ', jlpt: 'N1',
    tags: ['Bóng đá', 'Ít dùng'], examples: [{ jp: '蹴球部。', reading: 'しゅうきゅうぶ。', meaning: 'Câu lạc bộ bóng đá (tên cũ).' }] },
  { id: 'sport-gooru', word: 'ゴール', reading: 'ゴール', romaji: 'gooru', meaning: 'Khung thành, Bàn thắng', type: 'Danh từ', jlpt: 'N3',
    tags: ['Bóng đá'], examples: [{ jp: 'ゴールを決める。', reading: 'ゴールをきめる。', meaning: 'Ghi bàn.' }] },
  { id: 'sport-kiipaa', word: 'キーパー', reading: 'キーパー', romaji: 'kiipaa', meaning: 'Thủ môn (GK)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Bóng đá'], examples: [{ jp: 'ゴールキーパー。', reading: 'ゴールキーパー。', meaning: 'Thủ môn.' }] },
  { id: 'sport-shuuto', word: 'シュート', reading: 'シュート', romaji: 'shuuto', meaning: 'Sút bóng', type: 'Danh từ', jlpt: 'N3',
    tags: ['Bóng đá'], examples: [{ jp: 'シュートを打つ。', reading: 'シュートをうつ。', meaning: 'Sút bóng.' }] },
  { id: 'sport-pasu', word: 'パス', reading: 'パス', romaji: 'pasu', meaning: 'Chuyền bóng', type: 'Danh từ', jlpt: 'N3',
    tags: ['Bóng đá'], examples: [{ jp: 'パスを回す。', reading: 'パスをまわす。', meaning: 'Chuyền bóng qua lại.' }] },
  { id: 'sport-ofusaido', word: 'オフサイド', reading: 'オフサイド', romaji: 'ofusaido', meaning: 'Việt vị', type: 'Danh từ', jlpt: 'N2',
    tags: ['Bóng đá'], examples: [{ jp: 'オフサイドになる。', reading: 'オフサイドになる。', meaning: 'Bị bắt việt vị.' }] },
  { id: 'sport-puk', word: 'PK', reading: 'ピーケー', romaji: 'pii-kee', meaning: 'Phạt đền (Penalty Kick)', type: 'Từ viết tắt', jlpt: 'N3',
    tags: ['Bóng đá'], examples: [{ jp: 'PK戦。', reading: 'ピーケーせん。', meaning: 'Loạt sút luân lưu.' }] },

  // ─── Bóng chày (Baseball) - Môn thể thao vua ở Nhật ───
  { id: 'sport-yakyuu', word: '野球', reading: 'やきゅう', romaji: 'yakyuu', meaning: 'Bóng chày', hanViet: 'DÃ CẦU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Bóng chày'], examples: [{ jp: 'プロ野球。', reading: 'プロやきゅう。', meaning: 'Bóng chày chuyên nghiệp.' }] },
  { id: 'sport-koushien', word: '甲子園', reading: 'こうしえん', romaji: 'koushien', meaning: 'Sân Koshien (Giải bóng chày trung học)', type: 'Danh từ', jlpt: 'N1',
    tags: ['Bóng chày', 'Văn hóa'], examples: [{ jp: '甲子園を目指す。', reading: 'こうしえんをめざす。', meaning: 'Nhắm tới Koshien (giấc mơ của học sinh cấp 3).' }] },
  { id: 'sport-pitchaa', word: 'ピッチャー', reading: 'ピッチャー', romaji: 'picchaa', meaning: 'Cầu thủ ném bóng (Pitcher)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Bóng chày'], examples: [{ jp: '投手。', reading: 'とうしゅ。', meaning: 'Cầu thủ ném bóng (Hán Việt).' }] },
  { id: 'sport-toushu', word: '投手', reading: 'とうしゅ', romaji: 'toushu', meaning: 'Cầu thủ ném bóng (Pitcher)', hanViet: 'ĐẦU THỦ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Bóng chày'], examples: [{ jp: 'エース投手。', reading: 'エースとうしゅ。', meaning: 'Cầu thủ ném bóng chủ lực.' }] },
  { id: 'sport-kyacchaa', word: 'キャッチャー', reading: 'キャッチャー', romaji: 'kyacchaa', meaning: 'Cầu thủ bắt bóng (Catcher)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Bóng chày'], examples: [{ jp: '捕手。', reading: 'ほしゅ。', meaning: 'Cầu thủ bắt bóng (Hán Việt).' }] },
  { id: 'sport-hoshu', word: '捕手', reading: 'ほしゅ', romaji: 'hoshu', meaning: 'Cầu thủ bắt bóng', hanViet: 'BỘ THỦ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Bóng chày'], examples: [{ jp: '捕手として活躍する。', reading: 'ほしゅとしてかつやくする。', meaning: 'Hoạt động với tư cách người bắt bóng.' }] },
  { id: 'sport-battaa', word: 'バッター', reading: 'バッター', romaji: 'battaa', meaning: 'Cầu thủ đánh bóng (Batter)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Bóng chày'], examples: [{ jp: '打者。', reading: 'だしゃ。', meaning: 'Cầu thủ đánh bóng (Hán Việt).' }] },
  { id: 'sport-dasha', word: '打者', reading: 'だしゃ', romaji: 'dasha', meaning: 'Cầu thủ đánh bóng', hanViet: 'ĐẢ GIẢ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Bóng chày'], examples: [{ jp: '四番打者。', reading: 'よばんだしゃ。', meaning: 'Người đánh bóng thứ 4 (chủ lực).' }] },
  { id: 'sport-houmuran', word: 'ホームラン', reading: 'ホームラン', romaji: 'houmuran', meaning: 'Ghi điểm trực tiếp (Home run)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Bóng chày'], examples: [{ jp: '逆転ホームラン。', reading: 'ぎゃくてんホームラン。', meaning: 'Cú Home run lội ngược dòng.' }] },
  { id: 'sport-sanshin', word: '三振', reading: 'さんしん', romaji: 'sanshin', meaning: 'Bị loại (Strikeout/3 lần đánh trượt)', hanViet: 'TAM CHẤN', type: 'Danh từ', jlpt: 'N1',
    tags: ['Bóng chày'], examples: [{ jp: '空振り三振。', reading: 'からぶりさんしん。', meaning: 'Đánh hụt 3 lần bị loại.' }] },

  // ─── Các môn thể thao khác (Other Sports) ───
  { id: 'sport-basuke', word: 'バスケットボール', reading: 'バスケットボール', romaji: 'basukettobooru', meaning: 'Bóng rổ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao'], examples: [{ jp: 'バスケ部。', reading: 'バスケぶ。', meaning: 'CLB bóng rổ.' }] },
  { id: 'sport-baree', word: 'バレーボール', reading: 'バレーボール', romaji: 'bareebooru', meaning: 'Bóng chuyền', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao'], examples: [{ jp: 'バレーの試合。', reading: 'バレーのしあい。', meaning: 'Trận bóng chuyền.' }] },
  { id: 'sport-tenisu', word: 'テニス', reading: 'テニス', romaji: 'tenisu', meaning: 'Quần vợt', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao'], examples: [{ jp: 'テニスラケット。', reading: 'テニスラケット。', meaning: 'Vợt tennis.' }] },
  { id: 'sport-takkyuu', word: '卓球', reading: 'たっきゅう', romaji: 'takkyuu', meaning: 'Bóng bàn', hanViet: 'TRÁC CẦU', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao'], examples: [{ jp: 'ピンポン。', reading: 'ピンポン。', meaning: 'Ping pong.' }] },
  { id: 'sport-badominton', word: 'バドミントン', reading: 'バドミントン', romaji: 'badominton', meaning: 'Cầu lông', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao'], examples: [{ jp: 'バドミントンの羽根。', reading: 'バドミントンのはね。', meaning: 'Quả cầu lông.' }] },
  { id: 'sport-suiei', word: '水泳', reading: 'すいえい', romaji: 'suiei', meaning: 'Bơi lội', hanViet: 'THỦY VỊNH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao', 'Dưới nước'], examples: [{ jp: '水泳大会。', reading: 'すいえいたいかい。', meaning: 'Đại hội bơi lội.' }] },
  { id: 'sport-rikujou', word: '陸上', reading: 'りくじょう', romaji: 'rikujou', meaning: 'Điền kinh', hanViet: 'LỤC THƯỢNG', type: 'Danh từ', jlpt: 'N2',
    tags: ['Thể thao'], examples: [{ jp: '陸上競技。', reading: 'りくじょうきょうぎ。', meaning: 'Môn điền kinh.' }] },
  { id: 'sport-marason', word: 'マラソン', reading: 'マラソン', romaji: 'marason', meaning: 'Chạy Marathon', type: 'Danh từ', jlpt: 'N3',
    tags: ['Thể thao'], examples: [{ jp: 'フルマラソンを完走する。', reading: 'フルマラソンをかんそうする。', meaning: 'Chạy hết quãng đường marathon.' }] },
  { id: 'sport-sukii', word: 'スキー', reading: 'スキー', romaji: 'sukii', meaning: 'Trượt tuyết', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao', 'Mùa đông'], examples: [{ jp: 'スキー場。', reading: 'スキーじょう。', meaning: 'Bãi trượt tuyết.' }] },
  { id: 'sport-suketo', word: 'スケート', reading: 'スケート', romaji: 'sukeeto', meaning: 'Trượt băng', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao', 'Mùa đông'], examples: [{ jp: 'フィギュアスケート。', reading: 'フィギュアスケート。', meaning: 'Trượt băng nghệ thuật.' }] },

  // ─── Võ thuật (Martial Arts) - Đặc sản Nhật Bản ───
  { id: 'sport-budou', word: '武道', reading: 'ぶどう', romaji: 'budou', meaning: 'Võ đạo', hanViet: 'VÕ ĐẠO', type: 'Danh từ', jlpt: 'N2',
    tags: ['Võ thuật'], examples: [{ jp: '武道を習う。', reading: 'ぶどうをならう。', meaning: 'Học võ.' }] },
  { id: 'sport-juudou', word: '柔道', reading: 'じゅうどう', romaji: 'juudou', meaning: 'Judo (Nhu đạo)', hanViet: 'NHU ĐẠO', type: 'Danh từ', jlpt: 'N3',
    tags: ['Võ thuật'], examples: [{ jp: '柔道の黒帯。', reading: 'じゅうどうのくろおび。', meaning: 'Đai đen Judo.' }] },
  { id: 'sport-kendo', word: '剣道', reading: 'けんどう', romaji: 'kendou', meaning: 'Kendo (Kiếm đạo)', hanViet: 'KIẾM ĐẠO', type: 'Danh từ', jlpt: 'N3',
    tags: ['Võ thuật'], examples: [{ jp: '竹刀で戦う。', reading: 'しない でたたかう。', meaning: 'Chiến đấu bằng kiếm tre.' }] },
  { id: 'sport-karate', word: '空手', reading: 'からて', romaji: 'karate', meaning: 'Karate (Không thủ đạo)', hanViet: 'KHÔNG THỦ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Võ thuật'], examples: [{ jp: '空手の型。', reading: 'からてのかた。', meaning: 'Bài quyền Karate.' }] },
  { id: 'sport-sumou', word: '相撲', reading: 'すもう', romaji: 'sumou', meaning: 'Sumo', hanViet: 'TƯƠNG PHỐC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Võ thuật', 'Văn hóa'], examples: [{ jp: '相撲取り。', reading: 'すもうとり。', meaning: 'Võ sĩ Sumo.' }] },
  { id: 'sport-aikido', word: '合気道', reading: 'あいきどう', romaji: 'aikidou', meaning: 'Aikido (Hợp khí đạo)', hanViet: 'HỢP KHÍ ĐẠO', type: 'Danh từ', jlpt: 'N2',
    tags: ['Võ thuật'], examples: [{ jp: '護身術としての合気道。', reading: 'ごしんじゅつとしてのあいきどう。', meaning: 'Aikido như một môn tự vệ.' }] },
  { id: 'sport-kyuudou', word: '弓道', reading: 'きゅうどう', romaji: 'kyuudou', meaning: 'Cung đạo (Bắn cung Nhật)', hanViet: 'CUNG ĐẠO', type: 'Danh từ', jlpt: 'N2',
    tags: ['Võ thuật'], examples: [{ jp: '的を射る。', reading: 'まとをいる。', meaning: 'Bắn trúng bia.' }] },

  // ─── Gym & Fitness (Hiện đại) ───
  { id: 'sport-jimu', word: 'ジム', reading: 'ジム', romaji: 'jimu', meaning: 'Phòng Gym', type: 'Danh từ', jlpt: 'N3',
    tags: ['Fitness'], examples: [{ jp: '週3回ジムに通う。', reading: 'しゅうさんかいジムにかよう。', meaning: 'Đi gym 3 lần 1 tuần.' }] },
  { id: 'sport-kintore', word: '筋トレ', reading: 'きんトレ', romaji: 'kintore', meaning: 'Tập thể hình (viết tắt của 筋肉トレーニング)', type: 'Danh từ', jlpt: 'N2',
    tags: ['Fitness'], examples: [{ jp: '筋トレで筋肉をつける。', reading: 'きんトレできんにくをつける。', meaning: 'Tập gym để lên cơ.' }] },
  { id: 'sport-daietto', word: 'ダイエット', reading: 'ダイエット', romaji: 'daietto', meaning: 'Ăn kiêng, giảm cân', type: 'Danh từ', jlpt: 'N3',
    tags: ['Fitness', 'Sức khỏe'], examples: [{ jp: 'ダイエット中だ。', reading: 'ダイエットちゅうだ。', meaning: 'Đang ăn kiêng.' }] },
  { id: 'sport-yoga', word: 'ヨガ', reading: 'ヨガ', romaji: 'yoga', meaning: 'Yoga', type: 'Danh từ', jlpt: 'N3',
    tags: ['Fitness'], examples: [{ jp: 'ヨガ教室。', reading: 'ヨガきょうしつ。', meaning: 'Lớp học Yoga.' }] },
  { id: 'sport-stretch', word: 'ストレッチ', reading: 'ストレッチ', romaji: 'sutorecchi', meaning: 'Giãn cơ (Stretch)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Fitness'], examples: [{ jp: '運動前のストレッチ。', reading: 'うんどうまえのストレッチ。', meaning: 'Giãn cơ trước khi vận động.' }] },
  { id: 'sport-joguingu', word: 'ジョギング', reading: 'ジョギング', romaji: 'jogingu', meaning: 'Chạy bộ (Jogging)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Fitness'], examples: [{ jp: '朝のジョギング。', reading: 'あさのジョギング。', meaning: 'Chạy bộ buổi sáng.' }] },
];

// ── from: vocabTopic_Travel_Transport.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: TRAVEL, TRANSPORT & TRAINS
// Từ vựng chuyên sâu về Tàu điện (Hệ thống giao thông phức tạp nhất Nhật Bản)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_TRAVEL: VocabEntry[] = [
  // ─── Tàu điện & Nhà ga (Trains & Stations - Survival Kit) ───
  { id: 'trav-kaisatsu', word: '改札', reading: 'かいさつ', romaji: 'kaisatsu', meaning: 'Cổng soát vé', hanViet: 'CẢI TRÁT', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Nhà ga'], examples: [{ jp: '改札を通る。', reading: 'かいさつをとおる。', meaning: 'Đi qua cổng soát vé.' }] },
  { id: 'trav-kippu', word: '切符', reading: 'きっぷ', romaji: 'kippu', meaning: 'Vé tàu', hanViet: 'THIẾT PHÙ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông', 'Vé'], examples: [{ jp: '切符売り場。', reading: 'きっぷうりば。', meaning: 'Quầy bán vé.' }] },
  { id: 'trav-kenbaiki', word: '券売機', reading: 'けんばいき', romaji: 'kenbaiki', meaning: 'Máy bán vé tự động', hanViet: 'KHOÁN MẠI CƠ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Máy móc'], examples: [{ jp: '券売機でチャージする。', reading: 'けんばいきでチャージする。', meaning: 'Nạp tiền thẻ tàu ở máy bán vé.' }] },
  { id: 'trav-iccard', word: 'ICカード', reading: 'アイシーカード', romaji: 'aishii-kaado', meaning: 'Thẻ IC (Suica/Pasmo)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Giao thông', 'Thẻ'], examples: [{ jp: 'ICカードをタッチする。', reading: 'ICカードをタッチする。', meaning: 'Chạm thẻ IC.' }] },
  { id: 'trav-norikae', word: '乗り換え', reading: 'のりかえ', romaji: 'norikae', meaning: 'Đổi tàu, chuyển xe', hanViet: 'THỪA HOÁN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông', 'Hành động'], examples: [{ jp: '新宿で乗り換える。', reading: 'しんじゅくでのりかえる。', meaning: 'Đổi tàu ở Shinjuku.' }] },
  { id: 'trav-hoomu', word: 'ホーム', reading: 'ホーム', romaji: 'hoomu', meaning: 'Sân ga (Platform)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông', 'Katakana'], examples: [{ jp: '1番ホーム。', reading: 'いちばんホーム。', meaning: 'Sân ga số 1.' }] },
  { id: 'trav-manin', word: '満員電車', reading: 'まんいんでんしゃ', romaji: 'manindensha', meaning: 'Tàu đông nghẹt người', hanViet: 'MÃN VIÊN ĐIỆN XA', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Đời sống'], examples: [{ jp: '朝の満員電車。', reading: 'あさのまんいんでんしゃ。', meaning: 'Tàu chật cứng buổi sáng.' }] },
  { id: 'trav-shuuens', word: '終電', reading: 'しゅうでん', romaji: 'shuuden', meaning: 'Chuyến tàu cuối cùng', hanViet: 'CHUNG ĐIỆN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Thời gian'], examples: [{ jp: '終電を逃す。', reading: 'しゅうでんをのがす。', meaning: 'Lỡ chuyến tàu cuối.' }] },
  { id: 'trav-shihatsu', word: '始発', reading: 'しはつ', romaji: 'shihatsu', meaning: 'Chuyến tàu đầu tiên', hanViet: 'THỦY PHÁT', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Thời gian'], examples: [{ jp: '始発で帰る。', reading: 'しはつでかえる。', meaning: 'Về bằng chuyến tàu đầu tiên (sáng sớm).' }] },

  // ─── Các loại tàu (Train Types - Cực quan trọng để không lên nhầm) ───
  { id: 'trav-futsuu', word: '普通', reading: 'ふつう', romaji: 'futsuu', meaning: 'Tàu thường (dừng mọi ga)', hanViet: 'PHỔ THÔNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông', 'Loại tàu'], examples: [{ jp: '各駅停車。', reading: 'かくえきていしゃ。', meaning: 'Tàu dừng ở mỗi ga (đồng nghĩa).' }] },
  { id: 'trav-kyuukou', word: '急行', reading: 'きゅうこう', romaji: 'kyuukou', meaning: 'Tàu tốc hành (bỏ bớt ga nhỏ)', hanViet: 'CẤP HÀNH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông', 'Loại tàu'], examples: [{ jp: '急行に乗る。', reading: 'きゅうこうにのる。', meaning: 'Lên tàu tốc hành.' }] },
  { id: 'trav-tokkyuu', word: '特急', reading: 'とっきゅう', romaji: 'tokkyuu', meaning: 'Tàu đặc cấp (siêu tốc, ít điểm dừng)', hanViet: 'ĐẶC CẤP', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Loại tàu'], examples: [{ jp: '特急券が必要です。', reading: 'とっきゅうけんがひつようです。', meaning: 'Cần vé đặc cấp (mua thêm).' }] },
  { id: 'trav-kaisoku', word: '快速', reading: 'かいそく', romaji: 'kaisoku', meaning: 'Tàu nhanh (miễn phí vé phụ)', hanViet: 'KHOÁI TỐC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Loại tàu'], examples: [{ jp: '快速電車。', reading: 'かいそくでんしゃ。', meaning: 'Tàu nhanh.' }] },
  { id: 'trav-shinkansen', word: '新幹線', reading: 'しんかんせん', romaji: 'shinkansen', meaning: 'Tàu siêu tốc Shinkansen', hanViet: 'TÂN CÁN TUYẾN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông', 'Văn hóa'], examples: [{ jp: '新幹線で京都へ行く。', reading: 'しんかんせんできょうとへいく。', meaning: 'Đi Kyoto bằng Shinkansen.' }] },

  // ─── Ghế ngồi & Vé (Seats & Reservations) ───
  { id: 'trav-shiteiseki', word: '指定席', reading: 'していせき', romaji: 'shiteiseki', meaning: 'Ghế chỉ định (phải đặt trước)', hanViet: 'CHỈ ĐỊNH TỊCH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Vé'], examples: [{ jp: '指定席を予約する。', reading: 'していせきをよやくする。', meaning: 'Đặt ghế chỉ định.' }] },
  { id: 'trav-jiyuuseki', word: '自由席', reading: 'じゆうせき', romaji: 'jiyuuseki', meaning: 'Ghế tự do (ngồi đâu cũng được)', hanViet: 'TỰ DO TỊCH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Vé'], examples: [{ jp: '自由席は満席だ。', reading: 'じゆうせきはまんせきだ。', meaning: 'Ghế tự do đã kín chỗ.' }] },
  { id: 'trav-green', word: 'グリーン車', reading: 'グリーンしゃ', romaji: 'guriinsha', meaning: 'Toa hạng nhất (Green Car)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Toa tàu'], examples: [{ jp: 'グリーン車に乗る。', reading: 'グリーンしゃにのる。', meaning: 'Đi toa hạng nhất.' }] },
  { id: 'trav-katamichi', word: '片道', reading: 'かたみち', romaji: 'katamichi', meaning: 'Một chiều (vé)', hanViet: 'PHIẾN ĐẠO', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Vé'], examples: [{ jp: '片道切符。', reading: 'かたみちきっぷ。', meaning: 'Vé một chiều.' }] },
  { id: 'trav-oufuku', word: '往復', reading: 'おうふく', romaji: 'oufuku', meaning: 'Khứ hồi', hanViet: 'VÃNG PHỤC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Vé'], examples: [{ jp: '往復割引。', reading: 'おうふくわりびき。', meaning: 'Giảm giá vé khứ hồi.' }] },

  // ─── Sân bay & Du lịch (Airport & Tourism) ───
  { id: 'trav-toujou', word: '搭乗', reading: 'とうじょう', romaji: 'toujou', meaning: 'Lên máy bay', hanViet: 'ĐÁP THỪA', type: 'Danh từ', jlpt: 'N2',
    tags: ['Sân bay', 'Hành động'], examples: [{ jp: '搭乗手続き。', reading: 'とうじょうてつづき。', meaning: 'Thủ tục lên máy bay (Check-in).' }] },
  { id: 'trav-nimotsu', word: '荷物', reading: 'にもつ', romaji: 'nimotsu', meaning: 'Hành lý', hanViet: 'HÀ VẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Du lịch', 'Đồ vật'], examples: [{ jp: '荷物を預ける。', reading: 'にもつをあずける。', meaning: 'Ký gửi hành lý.' }] },
  { id: 'trav-zeikan', word: '税関', reading: 'ぜいかん', romaji: 'zeikan', meaning: 'Hải quan', hanViet: 'THUẾ QUAN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Sân bay', 'Thủ tục'], examples: [{ jp: '税関を通る。', reading: 'ぜいかんをとおる。', meaning: 'Đi qua hải quan.' }] },
  { id: 'trav-ryogae', word: '両替', reading: 'りょうがえ', romaji: 'ryougae', meaning: 'Đổi tiền', hanViet: 'LƯỠNG THẾ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Du lịch', 'Kinh tế'], examples: [{ jp: '円をドルに両替する。', reading: 'えんをドルにりょうがえする。', meaning: 'Đổi Yên sang Đô la.' }] },
  { id: 'trav-kankou', word: '観光', reading: 'かんこう', romaji: 'kankou', meaning: 'Tham quan, du lịch', hanViet: 'QUAN QUANG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch'], examples: [{ jp: '観光スポット。', reading: 'かんこうスポット。', meaning: 'Điểm tham quan.' }] },
  { id: 'trav-omiyage', word: 'お土産', reading: 'おみやげ', romaji: 'omiyage', meaning: 'Quà lưu niệm', hanViet: 'THỔ SẢN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch', 'Văn hóa'], examples: [{ jp: 'お土産を買う。', reading: 'おみやげをかう。', meaning: 'Mua quà lưu niệm.' }] },
  { id: 'trav-yoyaku', word: '予約', reading: 'よやく', romaji: 'yoyaku', meaning: 'Đặt trước', hanViet: 'DỰ ƯỚC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch', 'Dịch vụ'], examples: [{ jp: 'ホテルを予約する。', reading: 'ホテルをよやくする。', meaning: 'Đặt khách sạn.' }] },
  { id: 'trav-cancel', word: 'キャンセル', reading: 'キャンセル', romaji: 'kyanseru', meaning: 'Hủy bỏ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch', 'Katakana'], examples: [{ jp: '予約をキャンセルする。', reading: 'よやくをキャンセルする。', meaning: 'Hủy đặt chỗ.' }] },
];

// ── from: vocabTopic_Shopping_Fashion.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: SHOPPING & FASHION
// Từ vựng về Mua sắm, Thanh toán, Quần áo và Thời trang
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_SHOPPING: VocabEntry[] = [
  // ─── Thanh toán & Cửa hàng (Payment & Shop) ───
  { id: 'shop-kaikei', word: '会計', reading: 'かいけい', romaji: 'kaikei', meaning: 'Thanh toán, tính tiền', hanViet: 'HỘI KẾ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Mua sắm', 'Tiền bạc'], examples: [{ jp: 'お会計お願いします。', reading: 'おかいけいおねがいします。', meaning: 'Làm ơn tính tiền.' }] },
  { id: 'shop-genkin', word: '現金', reading: 'げんきん', romaji: 'genkin', meaning: 'Tiền mặt', hanViet: 'HIỆN KIM', type: 'Danh từ', jlpt: 'N3',
    tags: ['Mua sắm', 'Tiền bạc'], examples: [{ jp: '現金で払う。', reading: 'げんきんではらう。', meaning: 'Trả bằng tiền mặt.' }] },
  { id: 'shop-kurejitto', word: 'クレジットカード', reading: 'クレジットカード', romaji: 'kurejittokaado', meaning: 'Thẻ tín dụng', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mua sắm', 'Katakana'], examples: [{ jp: 'カードで払えますか？', reading: 'カードではらえますか？', meaning: 'Có trả thẻ được không?' }] },
  { id: 'shop-ryoushuusho', word: '領収書', reading: 'りょうしゅうしょ', romaji: 'ryoushuusho', meaning: 'Hóa đơn (đỏ/để thanh toán cty)', hanViet: 'LÃNH THU THƯ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Mua sắm', 'Giấy tờ'], examples: [{ jp: '領収書をください。', reading: 'りょうしゅうしょをください。', meaning: 'Cho tôi xin hóa đơn.' }] },
  { id: 'shop-reshiito', word: 'レシート', reading: 'レシート', romaji: 'reshiito', meaning: 'Hóa đơn (bill nhỏ)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mua sắm', 'Katakana'], examples: [{ jp: 'レシートはいりません。', reading: 'レシートはいりません。', meaning: 'Tôi không lấy hóa đơn.' }] },
  { id: 'shop-waribiki', word: '割引', reading: 'わりびき', romaji: 'waribiki', meaning: 'Giảm giá', hanViet: 'CÁT DẪN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Mua sắm', 'Khuyến mãi'], examples: [{ jp: '学生割引。', reading: 'がくせいわりびき。', meaning: 'Giảm giá sinh viên.' }] },
  { id: 'shop-hangaku', word: '半額', reading: 'はんがく', romaji: 'hangaku', meaning: 'Nửa giá', hanViet: 'BÁN NGẠCH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Mua sắm', 'Khuyến mãi'], examples: [{ jp: '閉店セールで半額。', reading: 'へいてんセールではんがく。', meaning: 'Giảm nửa giá dịp xả hàng đóng cửa.' }] },
  { id: 'shop-muryou', word: '無料', reading: 'むりょう', romaji: 'muryou', meaning: 'Miễn phí', hanViet: 'VÔ LIỆU', type: 'Danh từ', jlpt: 'N3',
    tags: ['Mua sắm', 'Kinh tế'], examples: [{ jp: '送料無料。', reading: 'そうりょうむりょう。', meaning: 'Miễn phí vận chuyển.' }] },
  { id: 'shop-zeikomi', word: '税込', reading: 'ぜいこみ', romaji: 'zeikomi', meaning: 'Đã bao gồm thuế', hanViet: 'THUẾ NHẬP', type: 'Danh từ', jlpt: 'N3',
    tags: ['Mua sắm', 'Giá cả'], examples: [{ jp: '税込価格。', reading: 'ぜいこみかかく。', meaning: 'Giá đã gồm thuế.' }] },
  { id: 'shop-zeinuki', word: '税抜', reading: 'ぜいぬき', romaji: 'zeinuki', meaning: 'Chưa bao gồm thuế', hanViet: 'THUẾ BẠT', type: 'Danh từ', jlpt: 'N3',
    tags: ['Mua sắm', 'Giá cả'], examples: [{ jp: '税抜価格。', reading: 'ぜいぬきかかく。', meaning: 'Giá chưa thuế.' }] },

  // ─── Quần áo & Thời trang (Clothing & Fashion) ───
  { id: 'fash-fuku', word: '服', reading: 'ふく', romaji: 'fuku', meaning: 'Quần áo', hanViet: 'PHỤC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời trang'], examples: [{ jp: '服を着替える。', reading: 'ふくをきがえる。', meaning: 'Thay quần áo.' }] },
  { id: 'fash-shichaku', word: '試着', reading: 'しちゃく', romaji: 'shichaku', meaning: 'Thử đồ', hanViet: 'THÍ TRƯỚC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Mua sắm', 'Hành động'], examples: [{ jp: '試着してもいいですか？', reading: 'しちゃくしてもいいですか？', meaning: 'Tôi thử đồ được không?' }] },
  { id: 'fash-shichakushitsu', word: '試着室', reading: 'しちゃくしつ', romaji: 'shichakushitsu', meaning: 'Phòng thử đồ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Mua sắm', 'Địa điểm'], examples: [{ jp: '試着室はあちらです。', reading: 'しちゃくしつはあちらです。', meaning: 'Phòng thử đồ ở đằng kia.' }] },
  { id: 'fash-saizu', word: 'サイズ', reading: 'サイズ', romaji: 'saizu', meaning: 'Kích cỡ (Size)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mua sắm', 'Katakana'], examples: [{ jp: 'サイズが合わない。', reading: 'サイズがあわない。', meaning: 'Kích cỡ không vừa.' }] },
  { id: 'fash-kutsushita', word: '靴下', reading: 'くつした', romaji: 'kutsushita', meaning: 'Tất, vớ', hanViet: 'NGOA HẠ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời trang', 'Phụ kiện'], examples: [{ jp: '靴下を履く。', reading: 'くつしたをはく。', meaning: 'Đi tất.' }] },
  { id: 'fash-tebukuro', word: '手袋', reading: 'てぶくろ', romaji: 'tebukuro', meaning: 'Găng tay', hanViet: 'THỦ ĐẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời trang', 'Phụ kiện'], examples: [{ jp: '手袋をする。', reading: 'てぶくろをする。', meaning: 'Đeo găng tay.' }] },
  { id: 'fash-muffler', word: 'マフラー', reading: 'マフラー', romaji: 'mafuraa', meaning: 'Khăn quàng cổ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời trang', 'Mùa đông'], examples: [{ jp: 'マフラーを巻く。', reading: 'マフラーをまく。', meaning: 'Quàng khăn.' }] },
  { id: 'fash-sukaato', word: 'スカート', reading: 'スカート', romaji: 'sukaato', meaning: 'Váy', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời trang'], examples: [{ jp: 'スカートをはく。', reading: 'スカートをはく。', meaning: 'Mặc váy.' }] },
  { id: 'fash-zubon', word: 'ズボン', reading: 'ズボン', romaji: 'zubon', meaning: 'Quần dài', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời trang'], examples: [{ jp: 'ズボンをはく。', reading: 'ズボンをはく。', meaning: 'Mặc quần.' }] },
  { id: 'fash-shatsu', word: 'シャツ', reading: 'シャツ', romaji: 'shatsu', meaning: 'Áo sơ mi', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời trang'], examples: [{ jp: '白いシャツ。', reading: 'しろいシャツ。', meaning: 'Áo sơ mi trắng.' }] },
  { id: 'fash-uwagi', word: '上着', reading: 'うわぎ', romaji: 'uwagi', meaning: 'Áo khoác ngoài', hanViet: 'THƯỢNG TRƯỚC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời trang'], examples: [{ jp: '上着を脱ぐ。', reading: 'うわぎをぬぐ。', meaning: 'Cởi áo khoác.' }] },
  { id: 'fash-shitagi', word: '下着', reading: 'したぎ', romaji: 'shitagi', meaning: 'Đồ lót', hanViet: 'HẠ TRƯỚC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời trang'], examples: [{ jp: '下着を買う。', reading: 'したぎをかう。', meaning: 'Mua đồ lót.' }] },
  { id: 'fash-share', word: 'おしゃれ', reading: 'おしゃれ', romaji: 'oshare', meaning: 'Sành điệu, diện', type: 'Tính từ -na', jlpt: 'N3',
    tags: ['Thời trang', 'Tính chất'], examples: [{ jp: '今日はおしゃれですね。', reading: 'きょうはおしゃれですね。', meaning: 'Hôm nay diện thế.' }] },
  { id: 'fash-hade', word: '派手', reading: 'はで', romaji: 'hade', meaning: 'Lòe loẹt, sặc sỡ', hanViet: 'PHÁI THỦ', type: 'Tính từ -na', jlpt: 'N3',
    tags: ['Thời trang', 'Miêu tả'], examples: [{ jp: '派手な服。', reading: 'はでなふく。', meaning: 'Quần áo lòe loẹt.' }] },
  { id: 'fash-jimi', word: '地味', reading: 'じみ', romaji: 'jimi', meaning: 'Giản dị, đơn điệu', hanViet: 'ĐỊA VỊ', type: 'Tính từ -na', jlpt: 'N3',
    tags: ['Thời trang', 'Miêu tả'], examples: [{ jp: '地味な色。', reading: 'じみないろ。', meaning: 'Màu sắc giản dị (trầm).' }] },
];

// ── from: vocabTopic_Art_Music_Hobbies.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: ARTS, MUSIC & HOBBIES
// Từ vựng về Âm nhạc, Nhạc cụ, Hội họa và Các sở thích giải trí
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_ART_HOBBIES: VocabEntry[] = [
  // ─── Âm nhạc & Nhạc cụ (Music & Instruments) ───
  { id: 'art-ongaku', word: '音楽', reading: 'おんがく', romaji: 'ongaku', meaning: 'Âm nhạc', hanViet: 'ÂM NHẠC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Âm nhạc'], examples: [{ jp: '音楽を聴く。', reading: 'おんがくをきく。', meaning: 'Nghe nhạc.' }] },
  { id: 'art-gakki', word: '楽器', reading: 'がっき', romaji: 'gakki', meaning: 'Nhạc cụ', hanViet: 'NHẠC KHÍ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Âm nhạc', 'Dụng cụ'], examples: [{ jp: '楽器を演奏する。', reading: 'がっきをえんそうする。', meaning: 'Chơi nhạc cụ.' }] },
  { id: 'art-ensou', word: '演奏', reading: 'えんそう', romaji: 'ensou', meaning: 'Biểu diễn (nhạc)', hanViet: 'DIỄN TẤU', type: 'Danh từ', jlpt: 'N3',
    tags: ['Âm nhạc', 'Hành động'], examples: [{ jp: 'ピアノの演奏。', reading: 'ピアノのえんそう。', meaning: 'Biểu diễn piano.' }] },
  { id: 'art-piano', word: 'ピアノ', reading: 'ピアノ', romaji: 'piano', meaning: 'Đàn Piano', type: 'Danh từ', jlpt: 'N4',
    tags: ['Âm nhạc', 'Nhạc cụ'], examples: [{ jp: 'ピアノを弾く。', reading: 'ピアノをひく。', meaning: 'Chơi piano.' }] },
  { id: 'art-gitaa', word: 'ギター', reading: 'ギター', romaji: 'gitaa', meaning: 'Đàn Guitar', type: 'Danh từ', jlpt: 'N4',
    tags: ['Âm nhạc', 'Nhạc cụ'], examples: [{ jp: 'ギターを弾く。', reading: 'ギターをひく。', meaning: 'Chơi guitar.' }] },
  { id: 'art-kashi', word: '歌詞', reading: 'かし', romaji: 'kashi', meaning: 'Lời bài hát', hanViet: 'CA TỪ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Âm nhạc'], examples: [{ jp: '歌詞を覚える。', reading: 'かしをおぼえる。', meaning: 'Nhớ lời bài hát.' }] },
  { id: 'art-raibu', word: 'ライブ', reading: 'ライブ', romaji: 'raibu', meaning: 'Buổi hòa nhạc (Live)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Âm nhạc', 'Sự kiện'], examples: [{ jp: 'ライブに行く。', reading: 'ライブにいく。', meaning: 'Đi xem hòa nhạc.' }] },
  { id: 'art-oké', word: 'カラオケ', reading: 'カラオケ', romaji: 'karaoke', meaning: 'Karaoke', type: 'Danh từ', jlpt: 'N4',
    tags: ['Âm nhạc', 'Giải trí'], examples: [{ jp: 'カラオケで歌う。', reading: 'カラオケでうたう。', meaning: 'Hát karaoke.' }] },

  // ─── Hội họa & Nghệ thuật (Painting & Arts) ───
  { id: 'art-e', word: '絵', reading: 'え', romaji: 'e', meaning: 'Tranh, bức tranh', hanViet: 'HỘI', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nghệ thuật'], examples: [{ jp: '絵を描く。', reading: 'えをかく。', meaning: 'Vẽ tranh.' }] },
  { id: 'art-bijutsukan', word: '美術館', reading: 'びじゅつかん', romaji: 'bijutsukan', meaning: 'Bảo tàng mỹ thuật', hanViet: 'MỸ THUẬT QUÁN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Nghệ thuật', 'Địa điểm'], examples: [{ jp: '美術館を巡る。', reading: 'びじゅつかんをめぐる。', meaning: 'Đi tham quan bảo tàng mỹ thuật.' }] },
  { id: 'art-geijutsu', word: '芸術', reading: 'げいじゅつ', romaji: 'geijutsu', meaning: 'Nghệ thuật', hanViet: 'NGHỆ THUẬT', type: 'Danh từ', jlpt: 'N3',
    tags: ['Nghệ thuật'], examples: [{ jp: '芸術家。', reading: 'げいじゅつか。', meaning: 'Nghệ sĩ.' }] },
  { id: 'art-shumi', word: '趣味', reading: 'しゅみ', romaji: 'shumi', meaning: 'Sở thích', hanViet: 'THÚ VỊ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sở thích'], examples: [{ jp: '趣味は絵を描くことです。', reading: 'しゅみはえをかくことです。', meaning: 'Sở thích là vẽ tranh.' }] },
  { id: 'art-iro', word: '色', reading: 'いろ', romaji: 'iro', meaning: 'Màu sắc', hanViet: 'SẮC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nghệ thuật', 'Màu sắc'], examples: [{ jp: '鮮やかな色。', reading: 'あざやかないろ。', meaning: 'Màu sắc rực rỡ.' }] },
  { id: 'art-satsuei', word: '撮影', reading: 'さつえい', romaji: 'satsuei', meaning: 'Chụp ảnh, quay phim', hanViet: 'TOÁT ẢNH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Nghệ thuật', 'Hành động'], examples: [{ jp: '動画を撮影する。', reading: 'どうがをさつえいする。', meaning: 'Quay video.' }] },

  // ─── Sở thích khác (Other Hobbies) ───
  { id: 'hobby-dokusho', word: '読書', reading: 'どくしょ', romaji: 'dokusho', meaning: 'Đọc sách', hanViet: 'ĐỌC THƯ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Sở thích'], examples: [{ jp: '読書が趣味だ。', reading: 'どくしょがしゅみだ。', meaning: 'Sở thích là đọc sách.' }] },
  { id: 'hobby-tsuri', word: '釣り', reading: 'つり', romaji: 'tsuri', meaning: 'Câu cá', hanViet: 'ĐIẾU', type: 'Danh từ', jlpt: 'N3',
    tags: ['Sở thích', 'Tự nhiên'], examples: [{ jp: '釣に行く。', reading: 'つりにいく。', meaning: 'Đi câu cá.' }] },
  { id: 'hobby-ryouri', word: '料理', reading: 'りょうり', romaji: 'ryouri', meaning: 'Nấu ăn', hanViet: 'LIỆU LÝ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sở thích', 'Việc nhà'], examples: [{ jp: '料理教室に通う。', reading: 'りょうりきょうしつにかよう。', meaning: 'Đi học lớp nấu ăn.' }] },
  { id: 'hobby-engei', word: '園芸', reading: 'えんげい', romaji: 'engei', meaning: 'Làm vườn', hanViet: 'VIÊN NGHỆ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Sở thích', 'Tự nhiên'], examples: [{ jp: '園芸を楽しむ。', reading: 'えんげいをたのしむ。', meaning: 'Thú vui làm vườn.' }] },
  { id: 'hobby-shogi', word: '将棋', reading: 'しょうぎ', romaji: 'shougi', meaning: 'Cờ tướng Nhật Bản (Shogi)', hanViet: 'TƯỚNG KỲ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Sở thích', 'Trò chơi'], examples: [{ jp: '将棋を指す。', reading: 'しょうぎをさす。', meaning: 'Chơi cờ Shogi.' }] },
  { id: 'hobby-igo', word: '囲碁', reading: 'いご', romaji: 'igo', meaning: 'Cờ vây', hanViet: 'VI KỲ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Sở thích', 'Trò chơi'], examples: [{ jp: '囲碁を打つ。', reading: 'いごをうつ。', meaning: 'Chơi cờ vây.' }] },
];

// ── from: vocabTopic_Food_Ingredients.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: FOOD, INGREDIENTS & MENU
// Từ vựng chi tiết về Nguyên liệu, Rau củ, Gia vị và Các món ăn
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_FOOD: VocabEntry[] = [
  // ─── Gia vị & Nguyên liệu cơ bản (Seasoning & Basics) ───
  { id: 'food-choumiryou', word: '調味料', reading: 'ちょうみりょう', romaji: 'choumiryou', meaning: 'Gia vị', hanViet: 'ĐIỀU VỊ LIỆU', type: 'Danh từ', jlpt: 'N3', tags: ['Thực phẩm'], examples: [{ jp: '調味料を入れる。', reading: 'ちょうみりょうをいれる。', meaning: 'Cho gia vị vào.' }] },
  { id: 'food-shoyu', word: '醤油', reading: 'しょうゆ', romaji: 'shouyu', meaning: 'Nước tương', type: 'Danh từ', jlpt: 'N4', tags: ['Thực phẩm'], examples: [{ jp: '醤油をつける。', reading: 'しょうゆをつける。', meaning: 'Chấm nước tương.' }] },
  { id: 'food-satou', word: '砂糖', reading: 'さとう', romaji: 'satou', meaning: 'Đường', hanViet: 'SA ĐƯỜNG', type: 'Danh từ', jlpt: 'N4', tags: ['Thực phẩm'], examples: [{ jp: '砂糖控えめ。', reading: 'さとうひかえめ。', meaning: 'Giảm bớt đường.' }] },
  { id: 'food-shio', word: '塩', reading: 'しお', romaji: 'shio', meaning: 'Muối', hanViet: 'DIÊM', type: 'Danh từ', jlpt: 'N4', tags: ['Thực phẩm'], examples: [{ jp: '塩を振る。', reading: 'しおをふる。', meaning: 'Rắc muối.' }] },
  { id: 'food-su', word: '酢', reading: 'す', romaji: 'su', meaning: 'Giấm', hanViet: 'TẠC', type: 'Danh từ', jlpt: 'N3', tags: ['Thực phẩm'], examples: [{ jp: '酢の物。', reading: 'すのもの。', meaning: 'Món ngâm giấm.' }] },
  { id: 'food-miso', word: '味噌', reading: 'みそ', romaji: 'miso', meaning: 'Tương Miso', type: 'Danh từ', jlpt: 'N4', tags: ['Thực phẩm'], examples: [{ jp: '味噌汁。', reading: 'みそしる。', meaning: 'Súp Miso.' }] },
  { id: 'food-abura', word: '油', reading: 'あぶら', romaji: 'abura', meaning: 'Dầu ăn', hanViet: 'DU', type: 'Danh từ', jlpt: 'N3', tags: ['Thực phẩm'], examples: [{ jp: '油で揚げる。', reading: 'あぶらであげる。', meaning: 'Chiên bằng dầu.' }] },
  { id: 'food-koshou', word: '胡椒', reading: 'こしょう', romaji: 'koshou', meaning: 'Hạt tiêu', hanViet: 'HỒ TIÊU', type: 'Danh từ', jlpt: 'N3', tags: ['Thực phẩm'], examples: [{ jp: '塩胡椒。', reading: 'しおこしょう。', meaning: 'Muối tiêu.' }] },
  { id: 'food-mayoneezu', word: 'マヨネーズ', reading: 'マヨネーズ', romaji: 'mayoneezu', meaning: 'Sốt Mayonnaise', type: 'Danh từ', jlpt: 'N4', tags: ['Thực phẩm'], examples: [{ jp: 'マヨネーズをかける。', reading: 'マヨネーズをかける。', meaning: 'Rưới sốt mayonnaise.' }] },
  { id: 'food-wasabi', word: 'わさび', reading: 'わさび', romaji: 'wasabi', meaning: 'Mù tạt', type: 'Danh từ', jlpt: 'N3', tags: ['Thực phẩm'], examples: [{ jp: 'わさび抜き。', reading: 'わさびぬき。', meaning: 'Không bỏ mù tạt.' }] },
  { id: 'food-shouga', word: '生姜', reading: 'しょうが', romaji: 'shouga', meaning: 'Gừng', hanViet: 'SINH KHƯƠNG', type: 'Danh từ', jlpt: 'N3', tags: ['Thực phẩm'], examples: [{ jp: '生姜焼き。', reading: 'しょうがやき。', meaning: 'Thịt heo xào gừng.' }] },
  { id: 'food-ninniku', word: '大蒜', reading: 'にんにく', romaji: 'ninniku', meaning: 'Tỏi', hanViet: 'ĐẠI TOÁN', type: 'Danh từ', jlpt: 'N3', tags: ['Thực phẩm'], examples: [{ jp: 'にんにくの匂い。', reading: 'にんにくのにおい。', meaning: 'Mùi tỏi.' }] },

  // ─── Rau củ (Vegetables - Chi tiết) ───
  { id: 'food-tamanegi', word: '玉ねぎ', reading: 'たまねぎ', romaji: 'tamanegi', meaning: 'Hành tây', type: 'Danh từ', jlpt: 'N4', tags: ['Rau củ'], examples: [{ jp: '玉ねぎを切る。', reading: 'たまねぎをきる。', meaning: 'Thái hành tây.' }] },
  { id: 'food-ninjin', word: '人参', reading: 'にんじん', romaji: 'ninjin', meaning: 'Cà rốt', hanViet: 'NHÂN SÂM', type: 'Danh từ', jlpt: 'N4', tags: ['Rau củ'], examples: [{ jp: '人参嫌い。', reading: 'にんじんぎらい。', meaning: 'Ghét cà rốt.' }] },
  { id: 'food-jagaimo', word: 'ジャガイモ', reading: 'ジャガイモ', romaji: 'jagaimo', meaning: 'Khoai tây', type: 'Danh từ', jlpt: 'N4', tags: ['Rau củ'], examples: [{ jp: 'ポテトサラダ。', reading: 'ポテトサラダ。', meaning: 'Salad khoai tây.' }] },
  { id: 'food-kyuuri', word: '胡瓜', reading: 'きゅうり', romaji: 'kyuuri', meaning: 'Dưa chuột', type: 'Danh từ', jlpt: 'N3', tags: ['Rau củ'], examples: [{ jp: 'きゅうりの漬物。', reading: 'きゅうりのつけもの。', meaning: 'Dưa chuột muối.' }] },
  { id: 'food-tomato', word: 'トマト', reading: 'トマト', romaji: 'tomato', meaning: 'Cà chua', type: 'Danh từ', jlpt: 'N5', tags: ['Rau củ'], examples: [{ jp: 'トマトソース。', reading: 'トマトソース。', meaning: 'Sốt cà chua.' }] },
  { id: 'food-nasu', word: '茄子', reading: 'なす', romaji: 'nasu', meaning: 'Cà tím', type: 'Danh từ', jlpt: 'N3', tags: ['Rau củ'], examples: [{ jp: '焼きなす。', reading: 'やきなす。', meaning: 'Cà tím nướng.' }] },
  { id: 'food-daikon', word: '大根', reading: 'だいこん', romaji: 'daikon', meaning: 'Củ cải trắng', hanViet: 'ĐẠI CĂN', type: 'Danh từ', jlpt: 'N3', tags: ['Rau củ'], examples: [{ jp: '大根おろし。', reading: 'だいこんおろし。', meaning: 'Củ cải mài.' }] },
  { id: 'food-negi', word: '葱', reading: 'ねぎ', romaji: 'negi', meaning: 'Hành lá', type: 'Danh từ', jlpt: 'N3', tags: ['Rau củ'], examples: [{ jp: '刻みねぎ。', reading: 'きざみねぎ。', meaning: 'Hành lá thái nhỏ.' }] },
  { id: 'food-hourensou', word: 'ほうれん草', reading: 'ほうれんそう', romaji: 'hourensou', meaning: 'Rau chân vịt (Cải bó xôi)', type: 'Danh từ', jlpt: 'N3', tags: ['Rau củ'], examples: [{ jp: 'ほうれん草のお浸し。', reading: 'ほうれんそうのおひたし。', meaning: 'Rau chân vịt luộc (món phụ).' }] },
  { id: 'food-kaboca', word: '南瓜', reading: 'かぼちゃ', romaji: 'kabocha', meaning: 'Bí đỏ', type: 'Danh từ', jlpt: 'N3', tags: ['Rau củ'], examples: [{ jp: 'かぼちゃの煮物。', reading: 'かぼちゃのにもの。', meaning: 'Bí đỏ hầm.' }] },
  { id: 'food-renkon', word: '蓮根', reading: 'れんこん', romaji: 'renkon', meaning: 'Củ sen', hanViet: 'LIÊN CĂN', type: 'Danh từ', jlpt: 'N2', tags: ['Rau củ'], examples: [{ jp: 'れんこんチップス。', reading: 'れんこんチップス。', meaning: 'Snack củ sen.' }] },
  { id: 'food-gobou', word: '牛蒡', reading: 'ごぼう', romaji: 'gobou', meaning: 'Ngưu bàng', type: 'Danh từ', jlpt: 'N2', tags: ['Rau củ'], examples: [{ jp: 'きんぴらごぼう。', reading: 'きんぴらごぼう。', meaning: 'Món Kinpira Gobou.' }] },

  // ─── Thịt & Hải sản (Meat & Seafood) ───
  { id: 'food-gyuuniku', word: '牛肉', reading: 'ぎゅうにく', romaji: 'gyuuniku', meaning: 'Thịt bò', hanViet: 'NGƯU NHỤC', type: 'Danh từ', jlpt: 'N4', tags: ['Thực phẩm'], examples: [{ jp: '牛肉ステーキ。', reading: 'ぎゅうにくステーキ。', meaning: 'Bò bít tết.' }] },
  { id: 'food-butaniku', word: '豚肉', reading: 'ぶたにく', romaji: 'butaniku', meaning: 'Thịt heo', hanViet: 'ĐỒN NHỤC', type: 'Danh từ', jlpt: 'N4', tags: ['Thực phẩm'], examples: [{ jp: '豚肉の生姜焼き。', reading: 'ぶたにくのしょうがやき。', meaning: 'Thịt heo xào gừng.' }] },
  { id: 'food-toriniku', word: '鶏肉', reading: 'とりにく', romaji: 'toriniku', meaning: 'Thịt gà', hanViet: 'KÊ NHỤC', type: 'Danh từ', jlpt: 'N4', tags: ['Thực phẩm'], examples: [{ jp: '鶏肉の唐揚げ。', reading: 'とりにくのからあげ。', meaning: 'Gà chiên giòn (Karaage).' }] },
  { id: 'food-minchi', word: 'ミンチ', reading: 'ミンチ', romaji: 'minchi', meaning: 'Thịt xay', type: 'Danh từ', jlpt: 'N3', tags: ['Thực phẩm'], examples: [{ jp: 'ひき肉。', reading: 'ひきにく。', meaning: 'Thịt băm (đồng nghĩa).' }] },
  { id: 'food-sake', word: '鮭', reading: 'さけ', romaji: 'sake', meaning: 'Cá hồi', hanViet: 'KHUÊ', type: 'Danh từ', jlpt: 'N3', tags: ['Hải sản'], examples: [{ jp: '鮭おにぎり。', reading: 'さけおにぎり。', meaning: 'Cơm nắm cá hồi.' }] },
  { id: 'food-maguro', word: '鮪', reading: 'まぐろ', romaji: 'maguro', meaning: 'Cá ngừ', type: 'Danh từ', jlpt: 'N3', tags: ['Hải sản'], examples: [{ jp: 'マグロの刺身。', reading: 'マグロのさしみ。', meaning: 'Sashimi cá ngừ.' }] },
  { id: 'food-ebi', word: '海老', reading: 'えび', romaji: 'ebi', meaning: 'Tôm', hanViet: 'HẢI LÃO', type: 'Danh từ', jlpt: 'N3', tags: ['Hải sản'], examples: [{ jp: '海老フライ。', reading: 'えびフライ。', meaning: 'Tôm tẩm bột chiên.' }] },
  { id: 'food-kani', word: '蟹', reading: 'かに', romaji: 'kani', meaning: 'Cua', hanViet: 'GIẢI', type: 'Danh từ', jlpt: 'N3', tags: ['Hải sản'], examples: [{ jp: 'カニ鍋。', reading: 'カニなべ。', meaning: 'Lẩu cua.' }] },
  { id: 'food-ika', word: '烏賊', reading: 'いか', romaji: 'ika', meaning: 'Mực', type: 'Danh từ', jlpt: 'N3', tags: ['Hải sản'], examples: [{ jp: 'イカ焼き。', reading: 'イカやき。', meaning: 'Mực nướng.' }] },
  { id: 'food-tako', word: '蛸', reading: 'たこ', romaji: 'tako', meaning: 'Bạch tuộc', type: 'Danh từ', jlpt: 'N3', tags: ['Hải sản'], examples: [{ jp: 'たこ焼き。', reading: 'たこやき。', meaning: 'Bánh bạch tuộc Takoyaki.' }] },

  // ─── Món ăn & Đồ uống (Dishes & Drinks) ───
  { id: 'food-teishoku', word: '定食', reading: 'ていしょく', romaji: 'teishoku', meaning: 'Suất ăn (Set meal)', hanViet: 'ĐỊNH THỰC', type: 'Danh từ', jlpt: 'N3', tags: ['Món ăn'], examples: [{ jp: '焼き魚定食。', reading: 'やきざかなていしょく。', meaning: 'Suất cơm cá nướng.' }] },
  { id: 'food-donburi', word: '丼', reading: 'どんぶり', romaji: 'donburi', meaning: 'Cơm bát tô (Don)', type: 'Danh từ', jlpt: 'N3', tags: ['Món ăn'], examples: [{ jp: '牛丼。', reading: 'ぎゅうどん。', meaning: 'Cơm bò.' }, { jp: 'カツ丼。', reading: 'カツどん。', meaning: 'Cơm thịt heo chiên xù.' }] },
  { id: 'food-onigiri', word: 'おにぎり', reading: 'おにぎり', romaji: 'onigiri', meaning: 'Cơm nắm', type: 'Danh từ', jlpt: 'N4', tags: ['Món ăn'], examples: [{ jp: 'コンビニのおにぎり。', reading: 'コンビニのおにぎり。', meaning: 'Cơm nắm cửa hàng tiện lợi.' }] },
  { id: 'food-sushi', word: '寿司', reading: 'すし', romaji: 'sushi', meaning: 'Sushi', type: 'Danh từ', jlpt: 'N5', tags: ['Món ăn'], examples: [{ jp: '回転寿司。', reading: 'かいてんずし。', meaning: 'Sushi băng chuyền.' }] },
  { id: 'food-tempura', word: '天ぷら', reading: 'てんぷら', romaji: 'tenpura', meaning: 'Tempura (Tẩm bột chiên)', type: 'Danh từ', jlpt: 'N4', tags: ['Món ăn'], examples: [{ jp: '海老の天ぷら。', reading: 'えびのてんぷら。', meaning: 'Tôm tempura.' }] },
  { id: 'food-ramen', word: 'ラーメン', reading: 'ラーメン', romaji: 'raamen', meaning: 'Mì Ramen', type: 'Danh từ', jlpt: 'N4', tags: ['Món ăn'], examples: [{ jp: '豚骨ラーメン。', reading: 'とんこつラーメン。', meaning: 'Ramen xương heo.' }] },
  { id: 'food-udom', word: 'うどん', reading: 'うどん', romaji: 'udon', meaning: 'Mì Udon', type: 'Danh từ', jlpt: 'N4', tags: ['Món ăn'], examples: [{ jp: 'きつねうどん。', reading: 'きつねうどん。', meaning: 'Udon đậu phụ ngọt.' }] },
  { id: 'food-soba', word: '蕎麦', reading: 'そば', romaji: 'soba', meaning: 'Mì Soba', type: 'Danh từ', jlpt: 'N4', tags: ['Món ăn'], examples: [{ jp: 'ざるそば。', reading: 'ざるそば。', meaning: 'Mì soba lạnh.' }] },
  { id: 'food-sake2', word: 'お酒', reading: 'おさけ', romaji: 'osake', meaning: 'Rượu (nói chung) / Rượu Sake', hanViet: 'TỬU', type: 'Danh từ', jlpt: 'N4', tags: ['Đồ uống'], examples: [{ jp: 'お酒に酔う。', reading: 'おさけによう。', meaning: 'Say rượu.' }] },
  { id: 'food-biiru', word: 'ビール', reading: 'ビール', romaji: 'biiru', meaning: 'Bia', type: 'Danh từ', jlpt: 'N4', tags: ['Đồ uống'], examples: [{ jp: '生ビール。', reading: 'なまビール。', meaning: 'Bia tươi.' }] },
];

// ── from: vocabTopic_Personality_Emotions.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: PERSONALITY & EMOTIONS
// Từ vựng miêu tả Tính cách con người và Các trạng thái cảm xúc
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_PERSONALITY: VocabEntry[] = [
  // ─── Tính cách tích cực (Positive Personality) ───
  { id: 'pers-yasashii', word: '優しい', reading: 'やさしい', romaji: 'yasashii', meaning: 'Hiền lành, tốt bụng', hanViet: 'ƯU', type: 'Tính từ -i', jlpt: 'N4', tags: ['Tính cách'], examples: [{ jp: '優しい人。', reading: 'やさしいひと。', meaning: 'Người tốt bụng.' }] },
  { id: 'pers-majime', word: '真面目', reading: 'まじめ', romaji: 'majime', meaning: 'Nghiêm túc, chăm chỉ', hanViet: 'CHÂN DIỆN MỤC', type: 'Tính từ -na', jlpt: 'N4', tags: ['Tính cách'], examples: [{ jp: '真面目に働く。', reading: 'まじめにはたらく。', meaning: 'Làm việc chăm chỉ.' }] },
  { id: 'pers-akarui', word: '明るい', reading: 'あかるい', romaji: 'akarui', meaning: 'Vui vẻ, sáng sủa', hanViet: 'MINH', type: 'Tính từ -i', jlpt: 'N4', tags: ['Tính cách'], examples: [{ jp: '明るい性格。', reading: 'あかるいせいかく。', meaning: 'Tính cách vui vẻ.' }] },
  { id: 'pers-sunao', word: '素直', reading: 'すなお', romaji: 'sunao', meaning: 'Ngoan ngoãn, chân thành', hanViet: 'TỐ TRỰC', type: 'Tính từ -na', jlpt: 'N3', tags: ['Tính cách'], examples: [{ jp: '素直な子。', reading: 'すなおなこ。', meaning: 'Đứa trẻ ngoan.' }] },
  { id: 'pers-kashikoi', word: '賢い', reading: 'かしこい', romaji: 'kashikoi', meaning: 'Thông minh, khôn ngoan', hanViet: 'HIỀN', type: 'Tính từ -i', jlpt: 'N2', tags: ['Tính cách'], examples: [{ jp: '賢い選択。', reading: 'かしこいせんたく。', meaning: 'Lựa chọn khôn ngoan.' }] },
  { id: 'pers-shinsetsu', word: '親切', reading: 'しんせつ', romaji: 'shinsetsu', meaning: 'Tử tế, thân thiện', hanViet: 'THÂN THIẾT', type: 'Tính từ -na', jlpt: 'N4', tags: ['Tính cách'], examples: [{ jp: '親切にする。', reading: 'しんせつにする。', meaning: 'Đối xử tử tế.' }] },
  { id: 'pers-sekkyoku', word: '積極的', reading: 'せっきょくてき', romaji: 'sekkyokuteki', meaning: 'Tích cực, chủ động', hanViet: 'TÍCH CỰC ĐÍCH', type: 'Tính từ -na', jlpt: 'N3', tags: ['Tính cách'], examples: [{ jp: '積極的に発言する。', reading: 'せっきょくてきにはつげんする。', meaning: 'Chủ động phát biểu.' }] },
  { id: 'pers-gaman', word: '我慢強い', reading: 'がまんづよい', romaji: 'gamanzuyoi', meaning: 'Kiên nhẫn, chịu đựng giỏi', type: 'Tính từ -i', jlpt: 'N3', tags: ['Tính cách'], examples: [{ jp: '彼は我慢強い。', reading: 'かれはがまんづよい。', meaning: 'Anh ấy rất kiên nhẫn.' }] },
  { id: 'pers-yuukan', word: '勇敢', reading: 'ゆうかん', romaji: 'yuukan', meaning: 'Dũng cảm', hanViet: 'DŨNG CẢM', type: 'Tính từ -na', jlpt: 'N2', tags: ['Tính cách'], examples: [{ jp: '勇敢な兵士。', reading: 'ゆうかんなへいし。', meaning: 'Người lính dũng cảm.' }] },
  { id: 'pers-reisei', word: '冷静', reading: 'れいせい', romaji: 'reisei', meaning: 'Điềm tĩnh', hanViet: 'LÃNH TĨNH', type: 'Tính từ -na', jlpt: 'N2', tags: ['Tính cách'], examples: [{ jp: '冷静な判断。', reading: 'れいせいなはんだん。', meaning: 'Phán đoán điềm tĩnh.' }] },

  // ─── Tính cách tiêu cực (Negative Personality) ───
  { id: 'pers-wagamama', word: 'わがまま', reading: 'わがまま', romaji: 'wagamama', meaning: 'Ích kỷ, nuông chiều', type: 'Tính từ -na', jlpt: 'N3', tags: ['Tính cách'], examples: [{ jp: 'わがままを言う。', reading: 'わがままをいう。', meaning: 'Nói lời ích kỷ (đòi hỏi).' }] },
  { id: 'pers-ijiwaru', word: '意地悪', reading: 'いじわる', romaji: 'ijiwaru', meaning: 'Xấu tính, trêu chọc', hanViet: 'Ý ĐỊA ÁC', type: 'Tính từ -na', jlpt: 'N3', tags: ['Tính cách'], examples: [{ jp: '意地悪な人。', reading: 'いじわるなひと。', meaning: 'Người xấu tính.' }] },
  { id: 'pers-kibishii', word: '厳しい', reading: 'きびしい', romaji: 'kibishii', meaning: 'Nghiêm khắc, khắt khe', hanViet: 'NGHIÊM', type: 'Tính từ -i', jlpt: 'N3', tags: ['Tính cách'], examples: [{ jp: '自分に厳しい。', reading: 'じぶんにきびしい。', meaning: 'Nghiêm khắc với bản thân.' }] },
  { id: 'pers-urusa', word: 'うるさい', reading: 'うるさい', romaji: 'urusai', meaning: 'Ồn ào, lải nhải, khó tính', type: 'Tính từ -i', jlpt: 'N4', tags: ['Tính cách'], examples: [{ jp: '味がうるさい。', reading: 'あじがうるさい。', meaning: 'Khó tính về mùi vị (sành ăn).' }] },
  { id: 'pers-kechi', word: 'けち', reading: 'けち', romaji: 'kechi', meaning: 'Keo kiệt', type: 'Tính từ -na', jlpt: 'N3', tags: ['Tính cách'], examples: [{ jp: 'けちな人。', reading: 'けちなひと。', meaning: 'Người keo kiệt.' }] },
  { id: 'pers-tanki', word: '短気', reading: 'たんき', romaji: 'tanki', meaning: 'Nóng tính', hanViet: 'ĐOẢN KHÍ', type: 'Tính từ -na', jlpt: 'N2', tags: ['Tính cách'], examples: [{ jp: '短気な性格。', reading: 'たんきなせいかく。', meaning: 'Tính cách nóng nảy.' }] },
  { id: 'pers-zuzu', word: '図々しい', reading: 'ずうずうしい', romaji: 'zuuzuushii', meaning: 'Trơ trẽn, vô duyên', type: 'Tính từ -i', jlpt: 'N2', tags: ['Tính cách'], examples: [{ jp: '図々しいお願い。', reading: 'ずうずうしいおねがい。', meaning: 'Lời yêu cầu trơ trẽn.' }] },
  { id: 'pers-shoukyoku', word: '消極的', reading: 'しょうきょくてき', romaji: 'shoukyokuteki', meaning: 'Tiêu cực, thụ động', hanViet: 'TIÊU CỰC ĐÍCH', type: 'Tính từ -na', jlpt: 'N3', tags: ['Tính cách'], examples: [{ jp: '消極的な態度。', reading: 'しょうきょくてきなたいど。', meaning: 'Thái độ thụ động.' }] },
  { id: 'pers-daraku', word: 'だらしない', reading: 'だらしない', romaji: 'darashinai', meaning: 'Luộm thuộm, vô kỷ luật', type: 'Tính từ -i', jlpt: 'N2', tags: ['Tính cách'], examples: [{ jp: 'だらしない服装。', reading: 'だらしないふくそう。', meaning: 'Trang phục luộm thuộm.' }] },

  // ─── Cảm xúc & Tâm trạng (Emotions) ───
  { id: 'pers-ureshii', word: '嬉しい', reading: 'うれしい', romaji: 'ureshii', meaning: 'Vui mừng (hạnh phúc)', hanViet: 'HỈ', type: 'Tính từ -i', jlpt: 'N4', tags: ['Cảm xúc'], examples: [{ jp: '会えて嬉しい。', reading: 'あえてうれしい。', meaning: 'Vui vì được gặp.' }] },
  { id: 'pers-tanoshii', word: '楽しい', reading: 'たのしい', romaji: 'tanoshii', meaning: 'Vui vẻ (enjoy)', hanViet: 'LẠC', type: 'Tính từ -i', jlpt: 'N4', tags: ['Cảm xúc'], examples: [{ jp: '楽しいパーティー。', reading: 'たのしいパーティー。', meaning: 'Bữa tiệc vui vẻ.' }] },
  { id: 'pers-kanashii', word: '悲しい', reading: 'かなしい', romaji: 'kanashii', meaning: 'Buồn bã', hanViet: 'BI', type: 'Tính từ -i', jlpt: 'N4', tags: ['Cảm xúc'], examples: [{ jp: '悲しい映画。', reading: 'かなしいえいが。', meaning: 'Bộ phim buồn.' }] },
  { id: 'pers-sabishii', word: '寂しい', reading: 'さびしい', romaji: 'sabishii', meaning: 'Cô đơn, buồn tẻ', hanViet: 'TỊCH', type: 'Tính từ -i', jlpt: 'N4', tags: ['Cảm xúc'], examples: [{ jp: '一人で寂しい。', reading: 'ひとりでさびしい。', meaning: 'Cô đơn một mình.' }] },
  { id: 'pers-hazukashii', word: '恥ずかしい', reading: 'はずかしい', romaji: 'hazukashii', meaning: 'Xấu hổ, ngại ngùng', hanViet: 'XỈ', type: 'Tính từ -i', jlpt: 'N4', tags: ['Cảm xúc'], examples: [{ jp: '失敗して恥ずかしい。', reading: 'しっぱいしてはずかしい。', meaning: 'Xấu hổ vì thất bại.' }] },
  { id: 'pers-kowai', word: '怖い', reading: 'こわい', romaji: 'kowai', meaning: 'Sợ hãi', hanViet: 'BỐ', type: 'Tính từ -i', jlpt: 'N4', tags: ['Cảm xúc'], examples: [{ jp: 'お化けが怖い。', reading: 'おばけがこわい。', meaning: 'Sợ ma.' }] },
  { id: 'pers-odoroku', word: '驚く', reading: 'おどろく', romaji: 'odoroku', meaning: 'Ngạc nhiên', hanViet: 'KINH', type: 'Động từ nhóm 1', jlpt: 'N3', tags: ['Cảm xúc'], examples: [{ jp: 'ニュースに驚く。', reading: 'ニュースにおどろく。', meaning: 'Ngạc nhiên trước tin tức.' }] },
  { id: 'pers-shimpai', word: '心配', reading: 'しんぱい', romaji: 'shinpai', meaning: 'Lo lắng', hanViet: 'TÂM PHỐI', type: 'Danh từ', jlpt: 'N4', tags: ['Cảm xúc'], examples: [{ jp: '親に心配をかける。', reading: 'おやにしんぱいをかける。', meaning: 'Làm bố mẹ lo lắng.' }] },
  { id: 'pers-anshin', word: '安心', reading: 'あんしん', romaji: 'anshin', meaning: 'An tâm', hanViet: 'AN TÂM', type: 'Danh từ', jlpt: 'N4', tags: ['Cảm xúc'], examples: [{ jp: '声を聞いて安心した。', reading: 'こえをきいてあんしんした。', meaning: 'Nghe giọng xong thấy an tâm.' }] },
  { id: 'pers-okoru', word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: 'Tức giận', hanViet: 'NỘ', type: 'Động từ nhóm 1', jlpt: 'N4', tags: ['Cảm xúc'], examples: [{ jp: '嘘をつかれて怒る。', reading: 'うそをつかれておこる。', meaning: 'Tức giận vì bị nói dối.' }] },
];

// ── from: vocabTopic_Counters_Units.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: COUNTERS & UNITS
// Các đơn vị đếm (Lượng từ) quan trọng nhất trong tiếng Nhật
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_COUNTERS: VocabEntry[] = [
  // ─── Đếm đồ vật chung (General) ───
  { id: 'cnt-tsu', word: 'つ', reading: 'つ', romaji: 'tsu', meaning: 'Cái (đếm chung)', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '一つ、二つ、三つ。', reading: 'ひとつ、ふたつ、みっつ。', meaning: 'Một cái, hai cái, ba cái.' }] },
  { id: 'cnt-ko', word: '個', reading: 'こ', romaji: 'ko', meaning: 'Cái, chiếc (vật nhỏ, tròn)', hanViet: 'CÁ', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '卵を三個買う。', reading: 'たまごをさんこかう。', meaning: 'Mua 3 quả trứng.' }] },

  // ─── Đếm người & Con vật ───
  { id: 'cnt-nin', word: '人', reading: 'にん', romaji: 'nin', meaning: 'Người', hanViet: 'NHÂN', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '一人、二人、三人。', reading: 'ひとり、ふたり、さんにん。', meaning: '1 người, 2 người, 3 người (lưu ý biến âm).' }] },
  { id: 'cnt-mei', word: '名', reading: 'めい', romaji: 'mei', meaning: 'Người (lịch sự/khách)', hanViet: 'DANH', type: 'Lượng từ', jlpt: 'N4',
    tags: ['Đếm'], examples: [{ jp: '三名様ですか？', reading: 'さんめいさまですか？', meaning: 'Quý khách đi 3 người phải không?' }] },
  { id: 'cnt-hiki', word: '匹', reading: 'ひき', romaji: 'hiki', meaning: 'Con (vật nhỏ: chó, mèo, cá)', hanViet: 'THẤT', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '一匹、三匹、六匹。', reading: 'いっぴき、さんびき、ろっぴき。', meaning: '1 con, 3 con, 6 con (biến âm).' }] },
  { id: 'cnt-tou', word: '頭', reading: 'とう', romaji: 'tou', meaning: 'Con (vật lớn: voi, ngựa)', hanViet: 'ĐẦU', type: 'Lượng từ', jlpt: 'N3',
    tags: ['Đếm'], examples: [{ jp: '象が一頭いる。', reading: 'ぞうがいっとういる。', meaning: 'Có 1 con voi.' }] },
  { id: 'cnt-wa', word: '羽', reading: 'わ', romaji: 'wa', meaning: 'Con (chim, thỏ)', hanViet: 'VŨ', type: 'Lượng từ', jlpt: 'N4',
    tags: ['Đếm'], examples: [{ jp: '鳥が二羽飛んでいる。', reading: 'とりがにわとんでいる。', meaning: '2 con chim đang bay.' }] },

  // ─── Đếm hình dáng cụ thể ───
  { id: 'cnt-hon', word: '本', reading: 'ほん', romaji: 'hon', meaning: 'Cây, chai, chiếc (vật dài)', hanViet: 'BẢN', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '一本、三本、六本。', reading: 'いっぽん、さんぼん、ろっぽん。', meaning: '1 cây, 3 cây, 6 cây (bút/chai).' }] },
  { id: 'cnt-mai', word: '枚', reading: 'まい', romaji: 'mai', meaning: 'Tờ, tấm (vật mỏng)', hanViet: 'MAI', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '紙を一枚ください。', reading: 'かみをいちまいください。', meaning: 'Cho tôi 1 tờ giấy.' }] },
  { id: 'cnt-satsu', word: '冊', reading: 'さつ', romaji: 'satsu', meaning: 'Quyển, cuốn (sách)', hanViet: 'SÁCH', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '本を二冊買った。', reading: 'ほんをにさつかった。', meaning: 'Đã mua 2 cuốn sách.' }] },
  { id: 'cnt-dai', word: '台', reading: 'だい', romaji: 'dai', meaning: 'Cái, chiếc (máy móc, xe)', hanViet: 'ĐÀI', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '車が五台ある。', reading: 'くるまがごだいある。', meaning: 'Có 5 chiếc xe hơi.' }] },
  { id: 'cnt-hai', word: '杯', reading: 'はい', romaji: 'hai', meaning: 'Ly, cốc, bát', hanViet: 'BÔI', type: 'Lượng từ', jlpt: 'N4',
    tags: ['Đếm'], examples: [{ jp: 'ビールを一杯飲む。', reading: 'ビールをいっぱいのむ。', meaning: 'Uống 1 ly bia.' }] },
  { id: 'cnt-soku', word: '足', reading: 'そく', romaji: 'soku', meaning: 'Đôi (giày, tất)', hanViet: 'TÚC', type: 'Lượng từ', jlpt: 'N3',
    tags: ['Đếm'], examples: [{ jp: '靴を二足買う。', reading: 'くつをにそくかう。', meaning: 'Mua 2 đôi giày.' }] },
  { id: 'cnt-ken', word: '軒', reading: 'けん', romaji: 'ken', meaning: 'Căn, ngôi (nhà)', hanViet: 'HIÊN', type: 'Lượng từ', jlpt: 'N3',
    tags: ['Đếm'], examples: [{ jp: '家を三軒建てた。', reading: 'いえをさんげんたてた。', meaning: 'Xây 3 ngôi nhà.' }] },

  // ─── Đếm số lần & Thứ tự ───
  { id: 'cnt-kai', word: '回', reading: 'かい', romaji: 'kai', meaning: 'Lần', hanViet: 'HỒI', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '一回だけ。', reading: 'いっかいだけ。', meaning: 'Chỉ 1 lần thôi.' }] },
  { id: 'cnt-do', word: '度', reading: 'ど', romaji: 'do', meaning: 'Lần, độ (nhiệt độ)', hanViet: 'ĐỘ', type: 'Lượng từ', jlpt: 'N4',
    tags: ['Đếm'], examples: [{ jp: 'もう一度お願いします。', reading: 'もういちどおねがいします。', meaning: 'Xin làm lại một lần nữa.' }] },
  { id: 'cnt-ban', word: '番', reading: 'ばん', romaji: 'ban', meaning: 'Số (thứ tự)', hanViet: 'PHIÊN', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '一番好き。', reading: 'いちばんすき。', meaning: 'Thích nhất (số 1).' }] },
  { id: 'cnt-kai_floor', word: '階', reading: 'かい', romaji: 'kai', meaning: 'Tầng', hanViet: 'GIAI', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '三階に住んでいる。', reading: 'さんがいにすんでいる。', meaning: 'Sống ở tầng 3.' }] },
  { id: 'cnt-sai', word: '歳', reading: 'さい', romaji: 'sai', meaning: 'Tuổi', hanViet: 'TUẾ', type: 'Lượng từ', jlpt: 'N5',
    tags: ['Đếm'], examples: [{ jp: '二十歳。', reading: 'はたち。', meaning: '20 tuổi (đọc đặc biệt).' }] },
  { id: 'cnt-byou', word: '秒', reading: 'びょう', romaji: 'byou', meaning: 'Giây', hanViet: 'MIỂU', type: 'Lượng từ', jlpt: 'N4',
    tags: ['Thời gian'], examples: [{ jp: 'あと十秒。', reading: 'あとじゅうびょう。', meaning: 'Còn 10 giây.' }] },
  { id: 'cnt-kasho', word: 'カ所', reading: 'かしょ', romaji: 'kasho', meaning: 'Chỗ, nơi, điểm', type: 'Lượng từ', jlpt: 'N3',
    tags: ['Đếm'], examples: [{ jp: '三カ所間違えた。', reading: 'さんかしょまちがえた。', meaning: 'Sai 3 chỗ.' }] },
];

// ── from: vocabTopic_JobHunting_Work.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: JOB HUNTING (SHUUKATSU) & WORK LIFE
// Từ vựng chuyên về hoạt động Xin việc, Phỏng vấn và Môi trường công sở
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_JOB_HUNTING: VocabEntry[] = [
  // ─── Xin việc (Shuukatsu - Job Hunting) ───
  { id: 'job-shuukatsu', word: '就活', reading: 'しゅうかつ', romaji: 'shuukatsu', meaning: 'Hoạt động xin việc', hanViet: 'TỰU HOẠT', type: 'Danh từ', jlpt: 'N2',
    tags: ['Xin việc'], examples: [{ jp: '就活を始める。', reading: 'しゅうかつをはじめる。', meaning: 'Bắt đầu đi xin việc.' }] },
  { id: 'job-shinsotsu', word: '新卒', reading: 'しんそつ', romaji: 'shinsotsu', meaning: 'Sinh viên mới tốt nghiệp', hanViet: 'TÂN TỐT', type: 'Danh từ', jlpt: 'N2',
    tags: ['Xin việc'], examples: [{ jp: '新卒採用。', reading: 'しんそつさいよう。', meaning: 'Tuyển dụng sinh viên mới ra trường.' }] },
  { id: 'job-chuuto', word: '中途', reading: 'ちゅうと', romaji: 'chuuto', meaning: 'Giữa chừng (Tuyển dụng người có kinh nghiệm)', hanViet: 'TRUNG ĐỒ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Xin việc'], examples: [{ jp: '中途採用に応募する。', reading: 'ちゅうとさいようにおうぼする。', meaning: 'Ứng tuyển diện người có kinh nghiệm.' }] },
  { id: 'job-naitei', word: '内定', reading: 'ないてい', romaji: 'naitei', meaning: 'Quyết định tuyển dụng (Offer)', hanViet: 'NỘI ĐỊNH', type: 'Danh từ', jlpt: 'N2',
    tags: ['Xin việc'], examples: [{ jp: '内定をもらう。', reading: 'ないていをもらう。', meaning: 'Nhận được Offer.' }] },
  { id: 'job-oubo', word: '応募', reading: 'おうぼ', romaji: 'oubo', meaning: 'Ứng tuyển', hanViet: 'ỨNG MỘ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Xin việc'], examples: [{ jp: '求人に応募する。', reading: 'きゅうじんにおうぼする。', meaning: 'Ứng tuyển vào thông báo tuyển dụng.' }] },
  { id: 'job-mensetsu', word: '面接', reading: 'めんせつ', romaji: 'mensetsu', meaning: 'Phỏng vấn', hanViet: 'DIỆN TIẾP', type: 'Danh từ', jlpt: 'N3',
    tags: ['Xin việc'], examples: [{ jp: '面接官。', reading: 'めんせつかん。', meaning: 'Người phỏng vấn.' }] },
  { id: 'job-rirekisho', word: '履歴書', reading: 'りれきしょ', romaji: 'rirekisho', meaning: 'Sơ yếu lý lịch (CV)', hanViet: 'LÝ LỊCH THƯ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xin việc'], examples: [{ jp: '履歴書を送る。', reading: 'りれきしょをおくる。', meaning: 'Gửi CV.' }] },
  { id: 'job-es', word: 'ES', reading: 'イーエス', romaji: 'iiesu', meaning: 'Tờ khai đăng ký (Entry Sheet)', type: 'Từ viết tắt', jlpt: 'N/A',
    tags: ['Xin việc'], examples: [{ jp: 'ESを書く。', reading: 'イーエスをかく。', meaning: 'Viết Entry Sheet.' }] },
  { id: 'job-shiboudouki', word: '志望動機', reading: 'しぼうどうき', romaji: 'shiboudouki', meaning: 'Lý do ứng tuyển', hanViet: 'CHÍ VỌNG ĐỘNG CƠ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Xin việc'], examples: [{ jp: '志望動機を聞かれる。', reading: 'しぼうどうきをきかれる。', meaning: 'Bị hỏi lý do ứng tuyển.' }] },
  { id: 'job-jikopr', word: '自己PR', reading: 'じこピーアール', romaji: 'jikopiiaaru', meaning: 'Tự giới thiệu bản thân (PR)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Xin việc'], examples: [{ jp: '自己PRをお願いします。', reading: 'じこピーアールをおねがいします。', meaning: 'Xin hãy tự giới thiệu (quảng bá) bản thân.' }] },
  { id: 'job-goudo', word: '合同説明会', reading: 'ごうどうせつめいかい', romaji: 'goudousetsumeikai', meaning: 'Buổi thuyết trình chung (Job Fair)', hanViet: 'HỢP ĐỒNG THUYẾT MINH HỘI', type: 'Danh từ', jlpt: 'N2',
    tags: ['Xin việc'], examples: [{ jp: '合説に行く。', reading: 'ごうせつにいく。', meaning: 'Đi Job Fair.' }] },

  // ─── Đời sống công sở (Office Life) ───
  { id: 'work-joushi', word: '上司', reading: 'じょうし', romaji: 'joushi', meaning: 'Cấp trên, sếp', hanViet: 'THƯỢNG TY', type: 'Danh từ', jlpt: 'N3',
    tags: ['Công việc'], examples: [{ jp: '上司に相談する。', reading: 'じょうしにそうだんする。', meaning: 'Thảo luận với sếp.' }] },
  { id: 'work-buka', word: '部下', reading: 'ぶか', romaji: 'buka', meaning: 'Cấp dưới', hanViet: 'BỘ HẠ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Công việc'], examples: [{ jp: '部下を指導する。', reading: 'ぶかをしどうする。', meaning: 'Chỉ đạo cấp dưới.' }] },
  { id: 'work-douryou', word: '同僚', reading: 'どうりょう', romaji: 'douryou', meaning: 'Đồng nghiệp', hanViet: 'ĐỒNG LIÊU', type: 'Danh từ', jlpt: 'N3',
    tags: ['Công việc'], examples: [{ jp: '同僚と飲みに行く。', reading: 'どうりょうとのみにいく。', meaning: 'Đi nhậu với đồng nghiệp.' }] },
  { id: 'work-douki', word: '同期', reading: 'どうき', romaji: 'douki', meaning: 'Người cùng khóa (vào công ty cùng năm)', hanViet: 'ĐỒNG KỲ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Công việc'], examples: [{ jp: '同期の仲がいい。', reading: 'どうきのなかがいい。', meaning: 'Quan hệ với người cùng khóa rất tốt.' }] },
  { id: 'work-senpai', word: '先輩', reading: 'せんぱい', romaji: 'senpai', meaning: 'Tiền bối (người vào trước)', hanViet: 'TIÊN BỐI', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quan hệ'], examples: [{ jp: '優しい先輩。', reading: 'やさしいせんぱい。', meaning: 'Tiền bối hiền lành.' }] },
  { id: 'work-kouhai', word: '後輩', reading: 'こうはい', romaji: 'kouhai', meaning: 'Hậu bối (người vào sau)', hanViet: 'HẬU BỐI', type: 'Danh từ', jlpt: 'N3',
    tags: ['Quan hệ'], examples: [{ jp: '後輩に教える。', reading: 'こうはいにおしえる。', meaning: 'Dạy cho hậu bối.' }] },
  { id: 'work-shokuba', word: '職場', reading: 'しょくば', romaji: 'shokuba', meaning: 'Nơi làm việc', hanViet: 'CHỨC TRƯỜNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Công việc'], examples: [{ jp: '職場の雰囲気。', reading: 'しょくばのふんいき。', meaning: 'Bầu không khí nơi làm việc.' }] },
  { id: 'work-kinmu', word: '勤務', reading: 'きんむ', romaji: 'kinmu', meaning: 'Làm việc', hanViet: 'CẦN VỤ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Công việc'], examples: [{ jp: '勤務時間。', reading: 'きんむじかん。', meaning: 'Thời gian làm việc.' }] },
  { id: 'work-shukkin', word: '出勤', reading: 'しゅっきん', romaji: 'shukkin', meaning: 'Đi làm', hanViet: 'XUẤT CẦN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Công việc'], examples: [{ jp: '毎日電車で出勤する。', reading: 'まいにちでんしゃでしゅっきんする。', meaning: 'Đi làm bằng tàu điện mỗi ngày.' }] },
  { id: 'work-taikin', word: '退勤', reading: 'たいきん', romaji: 'taikin', meaning: 'Tan làm', hanViet: 'THOÁI CẦN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Công việc'], examples: [{ jp: '定時で退勤する。', reading: 'ていじでたいきんする。', meaning: 'Tan làm đúng giờ.' }] },
  { id: 'work-zangyou', word: '残業', reading: 'ざんぎょう', romaji: 'zangyou', meaning: 'Làm thêm giờ', hanViet: 'TÀN NGHIỆP', type: 'Danh từ', jlpt: 'N3',
    tags: ['Công việc'], examples: [{ jp: '残業手当。', reading: 'ざんぎょうてあて。', meaning: 'Trợ cấp làm thêm giờ.' }] },
  { id: 'work-kyuujitsu', word: '休日', reading: 'きゅうじつ', romaji: 'kyuujitsu', meaning: 'Ngày nghỉ', hanViet: 'HƯU NHẬT', type: 'Danh từ', jlpt: 'N3',
    tags: ['Công việc'], examples: [{ jp: '休日出勤。', reading: 'きゅうじつしゅっきん。', meaning: 'Đi làm ngày nghỉ.' }] },
  { id: 'work-yuukyuu', word: '有給', reading: 'ゆうきゅう', romaji: 'yuukyuu', meaning: 'Nghỉ phép có lương', hanViet: 'HỮU CẤP', type: 'Danh từ', jlpt: 'N2',
    tags: ['Công việc'], examples: [{ jp: '有給を取る。', reading: 'ゆうきゅうをとる。', meaning: 'Xin nghỉ phép.' }] },
  { id: 'work-tenshoku', word: '転職', reading: 'てんしょく', romaji: 'tenshoku', meaning: 'Chuyển việc', hanViet: 'CHUYỂN CHỨC', type: 'Danh từ', jlpt: 'N2',
    tags: ['Công việc'], examples: [{ jp: '転職サイト。', reading: 'てんしょくサイト。', meaning: 'Trang web tìm việc (chuyển việc).' }] },
  { id: 'work-taishoku', word: '退職', reading: 'たいしょく', romaji: 'taishoku', meaning: 'Nghỉ việc, từ chức', hanViet: 'THOÁI CHỨC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Công việc'], examples: [{ jp: '会社を退職する。', reading: 'かいしゃをたいしょくする。', meaning: 'Nghỉ việc ở công ty.' }] },
  { id: 'work-kubi', word: '首', reading: 'くび', romaji: 'kubi', meaning: 'Đuổi việc (nghĩa bóng: cái cổ)', hanViet: 'THỦ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Công việc', 'Slang'], examples: [{ jp: 'クビになる。', reading: 'クビになる。', meaning: 'Bị đuổi việc.' }] },

  // ─── Lương thưởng & Chế độ (Salary & Benefits) ───
  { id: 'money-kyuuryou', word: '給料', reading: 'きゅうりょう', romaji: 'kyuuryou', meaning: 'Lương', hanViet: 'CẤP LIỆU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kinh tế'], examples: [{ jp: '給料日。', reading: 'きゅうりょうび。', meaning: 'Ngày nhận lương.' }] },
  { id: 'money-bonasu', word: 'ボーナス', reading: 'ボーナス', romaji: 'boonasu', meaning: 'Tiền thưởng (Bonus)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Kinh tế'], examples: [{ jp: 'ボーナスが出る。', reading: 'ボーナスがでる。', meaning: 'Có tiền thưởng.' }] },
  { id: 'money-nenshuu', word: '年収', reading: 'ねんしゅう', romaji: 'nenshuu', meaning: 'Thu nhập hàng năm', hanViet: 'NIÊN THU', type: 'Danh từ', jlpt: 'N2',
    tags: ['Kinh tế'], examples: [{ jp: '年収1000万。', reading: 'ねんしゅういっせんまん。', meaning: 'Thu nhập 10 triệu yên/năm.' }] },
  { id: 'money-zeikin', word: '税金', reading: 'ぜいきん', romaji: 'zeikin', meaning: 'Thuế', hanViet: 'THUẾ KIM', type: 'Danh từ', jlpt: 'N3',
    tags: ['Kinh tế'], examples: [{ jp: '税金を払う。', reading: 'ぜいきんをはらう。', meaning: 'Nộp thuế.' }] },
  { id: 'money-hoken', word: '保険', reading: 'ほけん', romaji: 'hoken', meaning: 'Bảo hiểm', hanViet: 'BẢO HIỂM', type: 'Danh từ', jlpt: 'N3',
    tags: ['Kinh tế'], examples: [{ jp: '社会保険。', reading: 'しゃかいほけん。', meaning: 'Bảo hiểm xã hội.' }] },
];

// ── from: vocabTopic_Geography_Places.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: GEOGRAPHY, PLACES & DIRECTIONS
// Từ vựng về Địa lý Nhật Bản, Thế giới và Phương hướng
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_GEOGRAPHY: VocabEntry[] = [
  // ─── Địa lý Nhật Bản (Japan Geography) ───
  { id: 'geo-todoufuken', word: '都道府県', reading: 'とどうふけん', romaji: 'todoufuken', meaning: 'Các tỉnh thành (Đô Đạo Phủ Huyện)', hanViet: 'ĐÔ ĐẠO PHỦ HUYỆN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Địa lý'], examples: [{ jp: '47都道府県。', reading: 'よんじゅうななとどうふけん。', meaning: '47 tỉnh thành Nhật Bản.' }] },
  { id: 'geo-kanto', word: '関東', reading: 'かんとう', romaji: 'kantou', meaning: 'Vùng Kanto (Tokyo và lân cận)', hanViet: 'QUAN ĐÔNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Địa lý'], examples: [{ jp: '関東地方。', reading: 'かんとうちほう。', meaning: 'Khu vực Kanto.' }] },
  { id: 'geo-kansai', word: '関西', reading: 'かんさい', romaji: 'kansai', meaning: 'Vùng Kansai (Osaka, Kyoto...)', hanViet: 'QUAN TÂY', type: 'Danh từ', jlpt: 'N3',
    tags: ['Địa lý'], examples: [{ jp: '関西弁。', reading: 'かんさいべん。', meaning: 'Tiếng vùng Kansai.' }] },
  { id: 'geo-tokyo', word: '東京', reading: 'とうきょう', romaji: 'toukyo', meaning: 'Tokyo', hanViet: 'ĐÔNG KINH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa danh'], examples: [{ jp: '東京タワー。', reading: 'とうきょうタワー。', meaning: 'Tháp Tokyo.' }] },
  { id: 'geo-osaka', word: '大阪', reading: 'おおさか', romaji: 'oosaka', meaning: 'Osaka', hanViet: 'ĐẠI PHẢN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa danh'], examples: [{ jp: '大阪のお好み焼き。', reading: 'おおさかのおこのみやき。', meaning: 'Bánh xèo Osaka.' }] },
  { id: 'geo-kyoto', word: '京都', reading: 'きょうと', romaji: 'kyouto', meaning: 'Kyoto', hanViet: 'KINH ĐÔ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa danh'], examples: [{ jp: '京都の寺。', reading: 'きょうとのてら。', meaning: 'Chùa ở Kyoto.' }] },
  { id: 'geo-hokkaido', word: '北海道', reading: 'ほっかいどう', romaji: 'hokkaidou', meaning: 'Hokkaido', hanViet: 'BẮC HẢI ĐẠO', type: 'Danh từ', jlpt: 'N4',
    tags: ['Địa danh'], examples: [{ jp: '北海道は寒い。', reading: 'ほっかいどうはさむい。', meaning: 'Hokkaido lạnh.' }] },
  { id: 'geo-okinawa', word: '沖縄', reading: 'おきなわ', romaji: 'okinawa', meaning: 'Okinawa', hanViet: 'XUNG THẰNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Địa danh'], examples: [{ jp: '沖縄の海。', reading: 'おきなわのうみ。', meaning: 'Biển Okinawa.' }] },
  { id: 'geo-inak', word: '田舎', reading: 'いなか', romaji: 'inaka', meaning: 'Vùng quê', hanViet: 'ĐIỀN XÁ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Địa lý'], examples: [{ jp: '田舎に帰る。', reading: 'いなかにかえる。', meaning: 'Về quê.' }] },
  { id: 'geo-tokai', word: '都会', reading: 'とかい', romaji: 'tokai', meaning: 'Thành thị, đô thị', hanViet: 'ĐÔ HỘI', type: 'Danh từ', jlpt: 'N3',
    tags: ['Địa lý'], examples: [{ jp: '都会の生活。', reading: 'とかいのせいかつ。', meaning: 'Cuộc sống đô thị.' }] },

  // ─── Thế giới (The World) ───
  { id: 'geo-kaigai', word: '海外', reading: 'かいがい', romaji: 'kaigai', meaning: 'Nước ngoài', hanViet: 'HẢI NGOẠI', type: 'Danh từ', jlpt: 'N3',
    tags: ['Địa lý'], examples: [{ jp: '海外旅行。', reading: 'かいがいりょこう。', meaning: 'Du lịch nước ngoài.' }] },
  { id: 'geo-kokunai', word: '国内', reading: 'こくない', romaji: 'kokunai', meaning: 'Trong nước', hanViet: 'QUỐC NỘI', type: 'Danh từ', jlpt: 'N3',
    tags: ['Địa lý'], examples: [{ jp: '国内線。', reading: 'こくないせん。', meaning: 'Đường bay nội địa.' }] },
  { id: 'geo-vietnam', word: 'ベトナム', reading: 'ベトナム', romaji: 'betonamu', meaning: 'Việt Nam', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quốc gia'], examples: [{ jp: 'ベトナム料理。', reading: 'ベトナムりょうり。', meaning: 'Món ăn Việt Nam.' }] },
  { id: 'geo-america', word: 'アメリカ', reading: 'アメリカ', romaji: 'amerika', meaning: 'Mỹ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quốc gia'], examples: [{ jp: 'アメリカ人。', reading: 'アメリカじん。', meaning: 'Người Mỹ.' }] },
  { id: 'geo-china', word: '中国', reading: 'ちゅうごく', romaji: 'chuugoku', meaning: 'Trung Quốc', hanViet: 'TRUNG QUỐC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quốc gia'], examples: [{ jp: '中国語。', reading: 'ちゅうごくご。', meaning: 'Tiếng Trung.' }] },
  { id: 'geo-korea', word: '韓国', reading: 'かんこく', romaji: 'kankoku', meaning: 'Hàn Quốc', hanViet: 'HÀN QUỐC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quốc gia'], examples: [{ jp: '韓国ドラマ。', reading: 'かんこくドラマ。', meaning: 'Phim Hàn Quốc.' }] },
  { id: 'geo-taiwan', word: '台湾', reading: 'たいわん', romaji: 'taiwan', meaning: 'Đài Loan', hanViet: 'ĐÀI LOAN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Quốc gia'], examples: [{ jp: '台湾へ行く。', reading: 'たいわんへいく。', meaning: 'Đi Đài Loan.' }] },
  { id: 'geo-thai', word: 'タイ', reading: 'タイ', romaji: 'tai', meaning: 'Thái Lan', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quốc gia'], examples: [{ jp: 'タイカレー。', reading: 'タイカレー。', meaning: 'Cà ri Thái.' }] },

  // ─── Phương hướng & Bản đồ (Directions & Maps) ───
  { id: 'geo-chizu', word: '地図', reading: 'ちず', romaji: 'chizu', meaning: 'Bản đồ', hanViet: 'ĐỊA ĐỒ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật'], examples: [{ jp: '地図を見る。', reading: 'ちずをみる。', meaning: 'Xem bản đồ.' }] },
  { id: 'geo-hougaku', word: '方角', reading: 'ほうがく', romaji: 'hougaku', meaning: 'Phương hướng', hanViet: 'PHƯƠNG GIÁC', type: 'Danh từ', jlpt: 'N2',
    tags: ['Địa lý'], examples: [{ jp: '方角を調べる。', reading: 'ほうがくをしらべる。', meaning: 'Kiểm tra phương hướng.' }] },
  { id: 'geo-higashi', word: '東', reading: 'ひがし', romaji: 'higashi', meaning: 'Đông', hanViet: 'ĐÔNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Phương hướng'], examples: [{ jp: '東口。', reading: 'ひがしぐち。', meaning: 'Cửa Đông.' }] },
  { id: 'geo-nishi', word: '西', reading: 'にし', romaji: 'nishi', meaning: 'Tây', hanViet: 'TÂY', type: 'Danh từ', jlpt: 'N5',
    tags: ['Phương hướng'], examples: [{ jp: '西口。', reading: 'にしぐち。', meaning: 'Cửa Tây.' }] },
  { id: 'geo-minami', word: '南', reading: 'みなみ', romaji: 'minami', meaning: 'Nam', hanViet: 'NAM', type: 'Danh từ', jlpt: 'N5',
    tags: ['Phương hướng'], examples: [{ jp: '南口。', reading: 'みなみぐち。', meaning: 'Cửa Nam.' }] },
  { id: 'geo-kita', word: '北', reading: 'きた', romaji: 'kita', meaning: 'Bắc', hanViet: 'BẮC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Phương hướng'], examples: [{ jp: '北口。', reading: 'きたぐち。', meaning: 'Cửa Bắc.' }] },
  { id: 'geo-temae', word: '手前', reading: 'てまえ', romaji: 'temae', meaning: 'Phía trước mặt', hanViet: 'THỦ TIỀN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Vị trí'], examples: [{ jp: '駅の手前。', reading: 'えきのてまえ。', meaning: 'Ngay phía trước nhà ga.' }] },
  { id: 'geo-oku', word: '奥', reading: 'おく', romaji: 'oku', meaning: 'Bên trong cùng, sâu bên trong', hanViet: 'ÁO', type: 'Danh từ', jlpt: 'N3',
    tags: ['Vị trí'], examples: [{ jp: '部屋の奥。', reading: 'へやのおく。', meaning: 'Phía trong cùng căn phòng.' }] },
  { id: 'geo-mukai', word: '向かい', reading: 'むかい', romaji: 'mukai', meaning: 'Đối diện', hanViet: 'HƯỚNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Vị trí'], examples: [{ jp: '銀行の向かい。', reading: 'ぎんこうのむかい。', meaning: 'Đối diện ngân hàng.' }] },
  { id: 'geo-naname', word: '斜め', reading: 'ななめ', romaji: 'naname', meaning: 'Chéo, nghiêng', hanViet: 'TÀ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Vị trí'], examples: [{ jp: '斜め前。', reading: 'ななめまえ。', meaning: 'Phía trước chếch sang bên.' }] },
];

// ── from: vocabTopic_Media_Entertainment.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: MEDIA, ENTERTAINMENT & INTERNET
// Từ vựng về Truyền thông, Tin tức, Mạng xã hội và Giải trí
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_MEDIA: VocabEntry[] = [
  // ─── Truyền thông & Tin tức (Media & News) ───
  { id: 'media-nyusu', word: 'ニュース', reading: 'ニュース', romaji: 'nyuusu', meaning: 'Tin tức', type: 'Danh từ', jlpt: 'N5',
    tags: ['Media'], examples: [{ jp: 'ニュースを見る。', reading: 'ニュースをみる。', meaning: 'Xem tin tức.' }] },
  { id: 'media-kiji', word: '記事', reading: 'きじ', romaji: 'kiji', meaning: 'Bài báo, phóng sự', hanViet: 'KÝ SỰ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Media'], examples: [{ jp: '新聞記事。', reading: 'しんぶんきじ。', meaning: 'Bài báo.' }] },
  { id: 'media-bangumi', word: '番組', reading: 'ばんぐみ', romaji: 'bangumi', meaning: 'Chương trình (TV/Radio)', hanViet: 'PHIÊN TỔ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Media'], examples: [{ jp: 'テレビ番組。', reading: 'テレビばんぐみ。', meaning: 'Chương trình truyền hình.' }] },
  { id: 'media-housou', word: '放送', reading: 'ほうそう', romaji: 'housou', meaning: 'Phát sóng', hanViet: 'PHÓNG TỐNG', type: 'Danh từ', jlpt: 'N3',
    tags: ['Media'], examples: [{ jp: '生放送。', reading: 'なまほうそう。', meaning: 'Phát sóng trực tiếp (Live).' }] },
  { id: 'media-koukoku', word: '広告', reading: 'こうこく', romaji: 'koukoku', meaning: 'Quảng cáo', hanViet: 'QUẢNG CÁO', type: 'Danh từ', jlpt: 'N3',
    tags: ['Media'], examples: [{ jp: '広告を出す。', reading: 'こうこくをだす。', meaning: 'Đăng quảng cáo.' }] },
  { id: 'media-senden', word: '宣伝', reading: 'せんでん', romaji: 'senden', meaning: 'Tuyên truyền, quảng bá', hanViet: 'TUYÊN TRUYỀN', type: 'Danh từ', jlpt: 'N3',
    tags: ['Media'], examples: [{ jp: '新商品を宣伝する。', reading: 'しんしょうひんをせんでんする。', meaning: 'Quảng bá sản phẩm mới.' }] },
  { id: 'media-shuzai', word: '取材', reading: 'しゅざい', romaji: 'shuzai', meaning: 'Thu thập tin tức, phỏng vấn', hanViet: 'THỦ TÀI', type: 'Danh từ', jlpt: 'N2',
    tags: ['Media'], examples: [{ jp: '取材を受ける。', reading: 'しゅざいをうける。', meaning: 'Trả lời phỏng vấn (báo chí).' }] },
  { id: 'media-eisei', word: '衛星', reading: 'えいせい', romaji: 'eisei', meaning: 'Vệ tinh', hanViet: 'VỆ TINH', type: 'Danh từ', jlpt: 'N2',
    tags: ['Media', 'Công nghệ'], examples: [{ jp: '衛星放送。', reading: 'えいせいほうそう。', meaning: 'Truyền hình vệ tinh.' }] },

  // ─── Giải trí & Showbiz (Entertainment) ───
  { id: 'ent-geinoujin', word: '芸能人', reading: 'げいのうじん', romaji: 'geinoujin', meaning: 'Nghệ sĩ, người nổi tiếng', hanViet: 'NGHỆ NĂNG NHÂN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Showbiz'], examples: [{ jp: '芸能界。', reading: 'げいのうかい。', meaning: 'Giới giải trí.' }] },
  { id: 'ent-aidoru', word: 'アイドル', reading: 'アイドル', romaji: 'aidoru', meaning: 'Thần tượng (Idol)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Showbiz'], examples: [{ jp: 'アイドルグループ。', reading: 'アイドルグループ。', meaning: 'Nhóm nhạc thần tượng.' }] },
  { id: 'ent-fan', word: 'ファン', reading: 'ファン', romaji: 'fan', meaning: 'Người hâm mộ (Fan)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Showbiz'], examples: [{ jp: 'ファンクラブ。', reading: 'ファンクラブ。', meaning: 'Câu lạc bộ người hâm mộ (FC).' }] },
  { id: 'ent-oshi', word: '推し', reading: 'おし', romaji: 'oshi', meaning: 'Thần tượng yêu thích nhất (Bias)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Showbiz', 'Slang'], examples: [{ jp: '推し活。', reading: 'おしかつ。', meaning: 'Hoạt động ủng hộ thần tượng (đu idol).' }] },
  { id: 'ent-raibu', word: 'ライブ', reading: 'ライブ', romaji: 'raibu', meaning: 'Buổi biểu diễn trực tiếp (Live)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Âm nhạc'], examples: [{ jp: 'ライブチケット。', reading: 'ライブチケット。', meaning: 'Vé xem live.' }] },
  { id: 'ent-haishin', word: '配信', reading: 'はいしん', romaji: 'haishin', meaning: 'Phát sóng (Stream/Distribute)', hanViet: 'PHỐI TÍN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Internet'], examples: [{ jp: '動画配信。', reading: 'どうがはいしん。', meaning: 'Phát video (stream).' }] },
  { id: 'ent-douga', word: '動画', reading: 'どうが', romaji: 'douga', meaning: 'Video', hanViet: 'ĐỘNG HỌA', type: 'Danh từ', jlpt: 'N3',
    tags: ['Internet'], examples: [{ jp: '動画サイト。', reading: 'どうがサイト。', meaning: 'Trang web video.' }] },
  { id: 'ent-eiga', word: '映画', reading: 'えいが', romaji: 'eiga', meaning: 'Phim điện ảnh', hanViet: 'ÁNH HỌA', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giải trí'], examples: [{ jp: '映画館。', reading: 'えいがかん。', meaning: 'Rạp chiếu phim.' }] },
  { id: 'ent-anime', word: 'アニメ', reading: 'アニメ', romaji: 'anime', meaning: 'Phim hoạt hình', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giải trí'], examples: [{ jp: '日本のアニメ。', reading: 'にほんのアニメ。', meaning: 'Anime Nhật Bản.' }] },
  { id: 'ent-manga', word: '漫画', reading: 'まんが', romaji: 'manga', meaning: 'Truyện tranh', hanViet: 'MẠN HỌA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giải trí'], examples: [{ jp: '漫画家。', reading: 'まんがか。', meaning: 'Họa sĩ truyện tranh.' }] },

  // ─── Mạng xã hội & Internet (SNS & Web) ───
  { id: 'net-sns', word: 'SNS', reading: 'エスエヌエス', romaji: 'esuenuesu', meaning: 'Mạng xã hội', type: 'Từ viết tắt', jlpt: 'N/A',
    tags: ['Internet'], examples: [{ jp: 'SNSに投稿する。', reading: 'エスエヌエスにとうこうする。', meaning: 'Đăng bài lên mạng xã hội.' }] },
  { id: 'net-toukou', word: '投稿', reading: 'とうこう', romaji: 'toukou', meaning: 'Đăng bài (Post)', hanViet: 'ĐẦU CẢO', type: 'Danh từ', jlpt: 'N2',
    tags: ['Internet'], examples: [{ jp: '写真を投稿する。', reading: 'しゃしんをとうこうする。', meaning: 'Đăng ảnh.' }] },
  { id: 'net-kakusan', word: '拡散', reading: 'かくさん', romaji: 'kakusan', meaning: 'Lan truyền, chia sẻ (Share/Retweet)', hanViet: 'KHUẾCH TÁN', type: 'Danh từ', jlpt: 'N1',
    tags: ['Internet'], examples: [{ jp: '情報を拡散する。', reading: 'じょうほうをかくさんする。', meaning: 'Lan truyền thông tin.' }] },
  { id: 'net-enshou', word: '炎上', reading: 'えんじょう', romaji: 'enjou', meaning: 'Bị ném đá tơi tả (trên mạng)', hanViet: 'VIÊM THƯỢNG', type: 'Danh từ', jlpt: 'N1',
    tags: ['Internet', 'Slang'], examples: [{ jp: 'ブログが炎上した。', reading: 'ブログがえんじょうした。', meaning: 'Blog bị ném đá dữ dội.' }] },
  { id: 'net-follower', word: 'フォロワー', reading: 'フォロワー', romaji: 'forowaa', meaning: 'Người theo dõi (Follower)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Internet'], examples: [{ jp: 'フォロワーが増える。', reading: 'フォロワーがふえる。', meaning: 'Tăng lượng người theo dõi.' }] },
  { id: 'net-ii ne', word: 'いいね', reading: 'いいね', romaji: 'iine', meaning: 'Thích (Like)', type: 'Cụm từ', jlpt: 'N/A',
    tags: ['Internet'], examples: [{ jp: 'いいねを押す。', reading: 'いいねをおす。', meaning: 'Bấm like.' }] },
];

// ── from: vocabTopic_Idioms_Kanyouku.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: IDIOMS (KANYOUKU)
// Quán dụng ngữ liên quan đến bộ phận cơ thể (Thường gặp trong N2-N1 & Đời sống)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_IDIOMS: VocabEntry[] = [
  // ─── Đầu, Mặt, Cổ (Head, Face, Neck) ───
  { id: 'idiom-atama', word: '頭が上がらない', reading: 'あたまがあがらない', romaji: 'atama ga agaranai', meaning: 'Không ngẩng đầu lên được (vì biết ơn hoặc có lỗi)', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Cơ thể'], examples: [{ jp: '彼には頭が上がらない。', reading: 'かれにはあたまがあがらない。', meaning: 'Tôi chịu ơn anh ấy nên không thể làm trái ý.' }] },
  { id: 'idiom-atamakatai', word: '頭が固い', reading: 'あたまがかたい', romaji: 'atama ga katai', meaning: 'Cứng đầu, bảo thủ', type: 'Quán dụng ngữ', jlpt: 'N3',
    tags: ['Idiom', 'Tính cách'], examples: [{ jp: '父は頭が固い。', reading: 'ちちはあたまがかたい。', meaning: 'Bố tôi rất bảo thủ.' }] },
  { id: 'idiom-kao', word: '顔が広い', reading: 'かおがひろい', romaji: 'kao ga hiroi', meaning: 'Quen biết rộng (Mặt rộng)', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Xã hội'], examples: [{ jp: '彼は顔が広い。', reading: 'かれはかおがひろい。', meaning: 'Anh ấy quan hệ rất rộng.' }] },
  { id: 'idiom-kaodasu', word: '顔を出す', reading: 'かおをだす', romaji: 'kao wo dasu', meaning: 'Xuất hiện, ghé qua', type: 'Quán dụng ngữ', jlpt: 'N3',
    tags: ['Idiom', 'Hành động'], examples: [{ jp: 'パーティーに顔を出す。', reading: 'パーティーにかおをだす。', meaning: 'Ghé qua bữa tiệc một chút.' }] },
  { id: 'idiom-kubi', word: '首になる', reading: 'くびになる', romaji: 'kubi ni naru', meaning: 'Bị đuổi việc (Sa thải)', type: 'Quán dụng ngữ', jlpt: 'N3',
    tags: ['Idiom', 'Công việc'], examples: [{ jp: '会社を首になった。', reading: 'かいしゃをくびになった。', meaning: 'Tôi bị công ty sa thải.' }] },
  { id: 'idiom-kubinagaku', word: '首を長くする', reading: 'くびをながくする', romaji: 'kubi wo nagaku suru', meaning: 'Đợi dài cổ (Mong chờ)', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Cảm xúc'], examples: [{ jp: '返事を首を長くして待つ。', reading: 'へんじをくびをながくしてまつ。', meaning: 'Đợi hồi âm dài cả cổ.' }] },

  // ─── Mắt, Mũi, Miệng (Eye, Nose, Mouth) ───
  { id: 'idiom-me', word: '目がない', reading: 'めがない', romaji: 'me ga nai', meaning: 'Mê tít, cực thích (không còn mắt mũi gì nữa)', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Sở thích'], examples: [{ jp: '甘い物に目がない。', reading: 'あまいものにめがない。', meaning: 'Mê đồ ngọt điếu đổ.' }] },
  { id: 'idiom-mehiku', word: '目を引く', reading: 'めをひく', romaji: 'me wo hiku', meaning: 'Cuốn hút, bắt mắt', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Miêu tả'], examples: [{ jp: '彼女の服は目を引く。', reading: 'かのじょのふくはめをひく。', meaning: 'Trang phục của cô ấy rất bắt mắt.' }] },
  { id: 'idiom-hana', word: '鼻が高い', reading: 'はながたかい', romaji: 'hana ga takai', meaning: 'Phổng mũi, tự hào', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Cảm xúc'], examples: [{ jp: '息子が合格して鼻が高い。', reading: 'むすこがごうかくしてはながたかい。', meaning: 'Con trai đỗ đạt nên tôi rất tự hào.' }] },
  { id: 'idiom-kuchi', word: '口が軽い', reading: 'くちがかるい', romaji: 'kuchi ga karui', meaning: 'Nhanh mồm nhanh miệng (không giữ được bí mật)', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Tính cách'], examples: [{ jp: '彼は口が軽いから注意しろ。', reading: 'かれはくちがかるいからちゅういしろ。', meaning: 'Hắn ta hay hớt lẻo nên hãy cẩn thận.' }] },
  { id: 'idiom-kuchikatai', word: '口が堅い', reading: 'くちがかたい', romaji: 'kuchi ga katai', meaning: 'Kín miệng', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Tính cách'], examples: [{ jp: '口が堅いので信用できる。', reading: 'くちがかたいのでしんようできる。', meaning: 'Kín miệng nên có thể tin tưởng.' }] },
  { id: 'idiom-kuchidasu', word: '口を出す', reading: 'くちをだす', romaji: 'kuchi wo dasu', meaning: 'Xen vào, chen ngang', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Giao tiếp'], examples: [{ jp: '横から口を出さないで。', reading: 'よこからくちをださないで。', meaning: 'Đừng có đứng bên ngoài chen ngang vào.' }] },

  // ─── Tai, Tay, Chân (Ear, Hand, Leg) ───
  { id: 'idiom-mimi', word: '耳が痛い', reading: 'みみがいたい', romaji: 'mimi ga itai', meaning: 'Khó nghe (vì người khác nói trúng tim đen/khuyết điểm)', type: 'Quán dụng ngữ', jlpt: 'N1',
    tags: ['Idiom', 'Giao tiếp'], examples: [{ jp: '親の説教は耳が痛い。', reading: 'おやのせっきょうはみみがいたい。', meaning: 'Nghe bố mẹ giáo huấn thật là rát tai (nhưng đúng).' }] },
  { id: 'idiom-te', word: '手を貸す', reading: 'てをかす', romaji: 'te wo kasu', meaning: 'Giúp đỡ (Cho mượn một tay)', type: 'Quán dụng ngữ', jlpt: 'N3',
    tags: ['Idiom', 'Hành động'], examples: [{ jp: 'ちょっと手を貸して。', reading: 'ちょっとてをかして。', meaning: 'Giúp tôi một tay với.' }] },
  { id: 'idiom-tenuku', word: '手を抜く', reading: 'てをぬく', romaji: 'te wo nuku', meaning: 'Làm qua loa, tắc trách', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Hành động'], examples: [{ jp: '仕事で手を抜く。', reading: 'しごとでてをぬく。', meaning: 'Làm việc qua loa đại khái.' }] },
  { id: 'idiom-ashi', word: '足を引っ張る', reading: 'あしをひっぱる', romaji: 'ashi wo hipparu', meaning: 'Ngáng chân, gây trở ngại cho đồng đội', type: 'Quán dụng ngữ', jlpt: 'N1',
    tags: ['Idiom', 'Xã hội'], examples: [{ jp: 'チームの足を引っ張る。', reading: 'チームのあしをひっぱる。', meaning: 'Làm vướng chân đồng đội.' }] },
  { id: 'idiom-ashidematoi', word: '足手まとい', reading: 'あしでまとい', romaji: 'ashidematoi', meaning: 'Gánh nặng, cục nợ', type: 'Danh từ', jlpt: 'N1',
    tags: ['Idiom'], examples: [{ jp: '足手まといになりたくない。', reading: 'あしでまといになりたくない。', meaning: 'Tôi không muốn trở thành gánh nặng.' }] },

  // ─── Bụng, Hông, Ngực (Stomach, Hips, Chest) ───
  { id: 'idiom-hara', word: '腹が立つ', reading: 'はらがたつ', romaji: 'hara ga tatsu', meaning: 'Tức giận (Sôi máu bụng)', type: 'Quán dụng ngữ', jlpt: 'N3',
    tags: ['Idiom', 'Cảm xúc'], examples: [{ jp: '彼の態度に腹が立った。', reading: 'かれのたいどにはらがたった。', meaning: 'Tức điên với thái độ của hắn.' }] },
  { id: 'idiom-haraguroi', word: '腹黒い', reading: 'はらぐろい', romaji: 'haraguroi', meaning: 'Xấu bụng, tâm địa đen tối', type: 'Tính từ -i', jlpt: 'N1',
    tags: ['Idiom', 'Tính cách'], examples: [{ jp: '彼は腹黒い人だ。', reading: 'かれははらぐろいひとだ。', meaning: 'Hắn là kẻ xấu bụng.' }] },
  { id: 'idiom-koshikakeru', word: '腰を掛ける', reading: 'こしをかける', romaji: 'koshi wo kakeru', meaning: 'Ngồi xuống', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Hành động'], examples: [{ jp: 'どうぞ、腰を掛けてください。', reading: 'どうぞ、こしをかけてください。', meaning: 'Xin mời ngồi.' }] },
  { id: 'idiom-munegaitai', word: '胸が痛む', reading: 'むねがいたむ', romaji: 'mune ga itamu', meaning: 'Đau lòng, xót xa', type: 'Quán dụng ngữ', jlpt: 'N2',
    tags: ['Idiom', 'Cảm xúc'], examples: [{ jp: 'ニュースを見て胸が痛んだ。', reading: 'ニュースをみてむねがいたんだ。', meaning: 'Xem tin tức mà thấy đau lòng.' }] },
];

// ── from: vocabTopic_Yojijukugo.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: YOJIJUKUGO (FOUR-CHARACTER IDIOMS)
// Thành ngữ 4 chữ - Tinh hoa tiếng Nhật (Dùng trong văn viết & giao tiếp cao cấp)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_YOJIJUKUGO: VocabEntry[] = [
  { id: 'yoji-isseki', word: '一石二鳥', reading: 'いっせきにちょう', romaji: 'issekinichou', meaning: 'Nhất thạch nhị điểu (Một mũi tên trúng 2 đích)', hanViet: 'NHẤT THẠCH NHỊ ĐIỂU', type: 'Thành ngữ', jlpt: 'N3',
    tags: ['Yojijukugo'], examples: [{ jp: 'それは一石二鳥だ。', reading: 'それはいっせきにちょうだ。', meaning: 'Thế thì tiện cả đôi đường.' }] },
  { id: 'yoji-jigo', word: '自業自得', reading: 'じごうじとく', romaji: 'jigoujitoku', meaning: 'Tự làm tự chịu (Gieo gió gặt bão)', hanViet: 'TỰ NGHIỆP TỰ ĐẮC', type: 'Thành ngữ', jlpt: 'N2',
    tags: ['Yojijukugo'], examples: [{ jp: '失敗したのは自業自得だ。', reading: 'しっぱいしたのはじごうじとくだ。', meaning: 'Thất bại là do tự làm tự chịu.' }] },
  { id: 'yoji-issho', word: '一生懸命', reading: 'いっしょうけんめい', romaji: 'isshoukenmei', meaning: 'Cố gắng hết sức (Treo mạng sống lên để làm)', hanViet: 'NHẤT SINH HUYỀN MỆNH', type: 'Thành ngữ', jlpt: 'N4',
    tags: ['Yojijukugo'], examples: [{ jp: '一生懸命勉強する。', reading: 'いっしょうけんめいべんきょうする。', meaning: 'Học hành chăm chỉ hết sức.' }] },
  { id: 'yoji-juni', word: '十人十色', reading: 'じゅうにんといろ', romaji: 'juunintoiro', meaning: 'Mười người mười ý (Mỗi người một vẻ)', hanViet: 'THẬP NHÂN THẬP SẮC', type: 'Thành ngữ', jlpt: 'N2',
    tags: ['Yojijukugo'], examples: [{ jp: '考え方は十人十色だ。', reading: 'かんがえかたはじゅうにんといろだ。', meaning: 'Cách suy nghĩ thì mỗi người một ý.' }] },
  { id: 'yoji-ichigo', word: '一期一会', reading: 'いちごいちえ', romaji: 'ichigoichie', meaning: 'Nhất kỳ nhất hội (Cơ hội chỉ có một lần trong đời)', hanViet: 'NHẤT KỲ NHẤT HỘI', type: 'Thành ngữ', jlpt: 'N1',
    tags: ['Yojijukugo', 'Văn hóa'], examples: [{ jp: 'この出会いは一期一会だ。', reading: 'このであいはいちごいちえだ。', meaning: 'Cuộc gặp gỡ này là duyên phận chỉ có một lần.' }] },
  { id: 'yoji-yuuju', word: '優柔不断', reading: 'ゆうじゅうふだん', romaji: 'yuujuufudan', meaning: 'Thiếu quyết đoán, nhu nhược', hanViet: 'ƯU NHU BẤT ĐOẠN', type: 'Thành ngữ', jlpt: 'N1',
    tags: ['Yojijukugo', 'Tính cách'], examples: [{ jp: '彼は優柔不断だ。', reading: 'かれはゆうじゅうふだんだ。', meaning: 'Anh ta rất thiếu quyết đoán.' }] },
  { id: 'yoji-hanka', word: '半信半疑', reading: 'はんしんはんぎ', romaji: 'hanshinhangi', meaning: 'Bán tín bán nghi (Nửa tin nửa ngờ)', hanViet: 'BÁN TÍN BÁN NGHI', type: 'Thành ngữ', jlpt: 'N2',
    tags: ['Yojijukugo'], examples: [{ jp: '話を半信半疑で聞く。', reading: 'はなしをはんしんはんぎできく。', meaning: 'Nghe câu chuyện với vẻ bán tín bán nghi.' }] },
  { id: 'yoji-shinra', word: '森羅万象', reading: 'しんらばんしょう', romaji: 'shinrabanshou', meaning: 'Vạn vật trong vũ trụ', hanViet: 'SÂM LA VẠN TƯỢNG', type: 'Thành ngữ', jlpt: 'N1',
    tags: ['Yojijukugo', 'Triết học'], examples: [{ jp: '森羅万象を司る。', reading: 'しんらばんしょうをつかさどる。', meaning: 'Cai quản vạn vật trong vũ trụ.' }] },
  { id: 'yoji-kido', word: '喜怒哀楽', reading: 'きどあいらく', romaji: 'kidoairaku', meaning: 'Hỉ nộ ái ố (Cảm xúc con người)', hanViet: 'HỈ NỘ AI LẠC', type: 'Thành ngữ', jlpt: 'N2',
    tags: ['Yojijukugo', 'Cảm xúc'], examples: [{ jp: '喜怒哀楽が激しい。', reading: 'きどあいらくがはげしい。', meaning: 'Cảm xúc thay đổi thất thường.' }] },
  { id: 'yoji-mikkabouzu', word: '三日坊主', reading: 'みっかぼうず', romaji: 'mikkabouzu', meaning: 'Cả thèm chóng chán (Nhà sư 3 ngày)', hanViet: 'TAM NHẬT PHƯỜNG CHỦ', type: 'Thành ngữ', jlpt: 'N2',
    tags: ['Yojijukugo', 'Tính cách'], examples: [{ jp: '日記はいつも三日坊主だ。', reading: 'にっきはいつもみっかぼうずだ。', meaning: 'Viết nhật ký lúc nào cũng bỏ dở giữa chừng.' }] },
  { id: 'yoji-zettaizetsumei', word: '絶体絶命', reading: 'ぜったいぜつめい', romaji: 'zettaizetsumei', meaning: 'Cùng đường, bế tắc tuyệt vọng', hanViet: 'TUYỆT THỂ TUYỆT MỆNH', type: 'Thành ngữ', jlpt: 'N1',
    tags: ['Yojijukugo'], examples: [{ jp: '絶体絶命のピンチ。', reading: 'ぜったいぜつめいのピンチ。', meaning: 'Tình thế ngàn cân treo sợi tóc.' }] },
  { id: 'yoji-shimen', word: '四面楚歌', reading: 'しめんそか', romaji: 'shimensoka', meaning: 'Tứ diện Sở ca (Bị cô lập, kẻ địch bao vây)', hanViet: 'TỨ DIỆN SỞ CA', type: 'Thành ngữ', jlpt: 'N1',
    tags: ['Yojijukugo'], examples: [{ jp: '敵に囲まれ四面楚歌だ。', reading: 'てきにかこまれしめんそかだ。', meaning: 'Bị địch bao vây, cô lập hoàn toàn.' }] },
  { id: 'yoji-junpuu', word: '順風満帆', reading: 'じゅんぷうまんぱん', romaji: 'junpuumanpan', meaning: 'Thuận buồm xuôi gió', hanViet: 'THUẬN PHONG MÃN PHÀM', type: 'Thành ngữ', jlpt: 'N1',
    tags: ['Yojijukugo'], examples: [{ jp: '人生は順風満帆だ。', reading: 'じんせいはじゅんぷうまんぱんだ。', meaning: 'Cuộc đời thuận buồm xuôi gió.' }] },
  { id: 'yoji-abukyou', word: '阿鼻叫喚', reading: 'あびきょうかん', romaji: 'abikyoukan', meaning: 'A tỳ khiếu hoán (Địa ngục trần gian, thảm khốc)', hanViet: 'A TỲ KHIẾU HOÁN', type: 'Thành ngữ', jlpt: 'N1',
    tags: ['Yojijukugo'], examples: [{ jp: '事故現場は阿鼻叫喚だった。', reading: 'じこげんばはあびきょうかんだった。', meaning: 'Hiện trường vụ tai nạn như địa ngục.' }] },
];

// ── from: vocabTopic_Traffic_Driving.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: DRIVING & TRAFFIC RULES
// Từ vựng dành cho người lái xe, thi bằng lái và luật giao thông Nhật Bản
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_DRIVING: VocabEntry[] = [
  // ─── Xe cộ & Bộ phận (Vehicle & Parts) ───
  { id: 'drive-kuruma', word: '車', reading: 'くるま', romaji: 'kuruma', meaning: 'Xe ô tô', hanViet: 'XA', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giao thông'], examples: [{ jp: '車を運転する。', reading: 'くるまをうんてんする。', meaning: 'Lái xe.' }] },
  { id: 'drive-handoru', word: 'ハンドル', reading: 'ハンドル', romaji: 'handoru', meaning: 'Vô lăng (Handle)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Katakana'], examples: [{ jp: 'ハンドルを握る。', reading: 'ハンドルをにぎる。', meaning: 'Cầm vô lăng.' }] },
  { id: 'drive-bureki', word: 'ブレーキ', reading: 'ブレーキ', romaji: 'bureeki', meaning: 'Phanh (Brake)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Katakana'], examples: [{ jp: 'ブレーキをかける。', reading: 'ブレーキをかける。', meaning: 'Đạp phanh.' }] },
  { id: 'drive-akuseru', word: 'アクセル', reading: 'アクセル', romaji: 'akuseru', meaning: 'Chân ga (Accelerator)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Katakana'], examples: [{ jp: 'アクセルを踏む。', reading: 'アクセルをふむ。', meaning: 'Đạp ga.' }] },
  { id: 'drive-enjin', word: 'エンジン', reading: 'エンジン', romaji: 'enjin', meaning: 'Động cơ (Engine)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Katakana'], examples: [{ jp: 'エンジンをかける。', reading: 'エンジンをかける。', meaning: 'Nổ máy (Khởi động động cơ).' }] },
  { id: 'drive-taiya', word: 'タイヤ', reading: 'タイヤ', romaji: 'taiya', meaning: 'Lốp xe (Tire)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Katakana'], examples: [{ jp: 'タイヤがパンクした。', reading: 'タイヤがパンクした。', meaning: 'Lốp xe bị xịt (nổ).' }] },
  { id: 'drive-gasorin', word: 'ガソリン', reading: 'ガソリン', romaji: 'gasorin', meaning: 'Xăng (Gasoline)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông', 'Katakana'], examples: [{ jp: 'ガソリンスタンド。', reading: 'ガソリンスタンド。', meaning: 'Trạm xăng.' }] },
  { id: 'drive-joshuseki', word: '助手席', reading: 'じょしゅせき', romaji: 'joshuseki', meaning: 'Ghế phụ (cạnh tài xế)', hanViet: 'TRỢ THỦ TỊCH', type: 'Danh từ', jlpt: 'N2',
    tags: ['Giao thông'], examples: [{ jp: '助手席に座る。', reading: 'じょしゅせきにすわる。', meaning: 'Ngồi ghế phụ.' }] },
  { id: 'drive-untenseki', word: '運転席', reading: 'うんてんせき', romaji: 'untenseki', meaning: 'Ghế lái', hanViet: 'VẬN CHUYỂN TỊCH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông'], examples: [{ jp: '運転席に座る。', reading: 'うんてんせきにすわる。', meaning: 'Ngồi ghế lái.' }] },

  // ─── Hành động lái xe (Driving Actions) ───
  { id: 'drive-unten', word: '運転', reading: 'うんてん', romaji: 'unten', meaning: 'Lái xe', hanViet: 'VẬN CHUYỂN', type: 'Động từ', jlpt: 'N4',
    tags: ['Giao thông'], examples: [{ jp: '安全運転。', reading: 'あんぜんうんてん。', meaning: 'Lái xe an toàn.' }] },
  { id: 'drive-chuusha', word: '駐車', reading: 'ちゅうしゃ', romaji: 'chuusha', meaning: 'Đỗ xe', hanViet: 'TRÚ XA', type: 'Động từ', jlpt: 'N3',
    tags: ['Giao thông'], examples: [{ jp: '駐車場。', reading: 'ちゅうしゃじょう。', meaning: 'Bãi đỗ xe.' }] },
  { id: 'drive-teisha', word: '停車', reading: 'ていしゃ', romaji: 'teisha', meaning: 'Dừng xe (tạm thời)', hanViet: 'ĐÌNH XA', type: 'Động từ', jlpt: 'N3',
    tags: ['Giao thông'], examples: [{ jp: 'バスが停車する。', reading: 'バスがていしゃする。', meaning: 'Xe buýt dừng lại.' }] },
  { id: 'drive-usetsu', word: '右折', reading: 'うせつ', romaji: 'usetsu', meaning: 'Rẽ phải', hanViet: 'HỮU CHIẾT', type: 'Động từ', jlpt: 'N2',
    tags: ['Giao thông'], examples: [{ jp: '交差点を右折する。', reading: 'こうさてんをうせつする。', meaning: 'Rẽ phải ở ngã tư.' }] },
  { id: 'drive-sasetsu', word: '左折', reading: 'させつ', romaji: 'sasetsu', meaning: 'Rẽ trái', hanViet: 'TẢ CHIẾT', type: 'Động từ', jlpt: 'N2',
    tags: ['Giao thông'], examples: [{ jp: '信号を左折する。', reading: 'しんごうをさせつする。', meaning: 'Rẽ trái ở đèn tín hiệu.' }] },
  { id: 'drive-chokushin', word: '直進', reading: 'ちょくしん', romaji: 'chokushin', meaning: 'Đi thẳng', hanViet: 'TRỰC TIẾN', type: 'Động từ', jlpt: 'N2',
    tags: ['Giao thông'], examples: [{ jp: 'この道を直進する。', reading: 'このみちをちょくしんする。', meaning: 'Đi thẳng đường này.' }] },
  { id: 'drive-oikosu', word: '追い越す', reading: 'おいこす', romaji: 'oikosu', meaning: 'Vượt (xe khác)', hanViet: 'TRUY VIỆT', type: 'Động từ', jlpt: 'N2',
    tags: ['Giao thông'], examples: [{ jp: '前の車を追い越す。', reading: 'まえのくるまをおいこす。', meaning: 'Vượt xe phía trước.' }] },
  { id: 'drive-bakku', word: 'バック', reading: 'バック', romaji: 'bakku', meaning: 'Lùi xe (Back)', type: 'Động từ', jlpt: 'N3',
    tags: ['Giao thông'], examples: [{ jp: 'バックで駐車する。', reading: 'バックでちゅうしゃする。', meaning: 'Lùi xe vào chỗ đỗ.' }] },

  // ─── Luật & Biển báo (Rules & Signs) ───
  { id: 'drive-shingou', word: '信号', reading: 'しんごう', romaji: 'shingou', meaning: 'Đèn tín hiệu', hanViet: 'TÍN HIỆU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'], examples: [{ jp: '信号無視。', reading: 'しんごうむし。', meaning: 'Vượt đèn đỏ (phớt lờ tín hiệu).' }] },
  { id: 'drive-kousaten', word: '交差点', reading: 'こうさてん', romaji: 'kousaten', meaning: 'Ngã tư, giao lộ', hanViet: 'GIAO SAI ĐIỂM', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông'], examples: [{ jp: '交差点を渡る。', reading: 'こうさてんをわたる。', meaning: 'Băng qua ngã tư.' }] },
  { id: 'drive-menkyo', word: '免許', reading: 'めんきょ', romaji: 'menkyo', meaning: 'Bằng lái, giấy phép', hanViet: 'MIỄN HỨA', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông'], examples: [{ jp: '運転免許証。', reading: 'うんてんめんきょしょう。', meaning: 'Bằng lái xe.' }] },
  { id: 'drive-iham', word: '違反', reading: 'いはん', romaji: 'ihan', meaning: 'Vi phạm', hanViet: 'VI PHẢN', type: 'Danh từ', jlpt: 'N2',
    tags: ['Giao thông'], examples: [{ jp: 'スピード違反。', reading: 'スピードいはん。', meaning: 'Vi phạm tốc độ.' }] },
  { id: 'drive-juutai', word: '渋滞', reading: 'じゅうたい', romaji: 'juutai', meaning: 'Tắc đường', hanViet: 'SÁP TRỆ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông'], examples: [{ jp: '交通渋滞。', reading: 'こうつうじゅうたい。', meaning: 'Ùn tắc giao thông.' }] },
  { id: 'drive-tsuukoudome', word: '通行止め', reading: 'つうこうどめ', romaji: 'tsuukoudome', meaning: 'Cấm đường, đường cụt', hanViet: 'THÔNG HÀNH CHỈ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Giao thông'], examples: [{ jp: 'この先通行止め。', reading: 'このさきつうこうどめ。', meaning: 'Phía trước cấm đi.' }] },
  { id: 'drive-ippoutsuukou', word: '一方通行', reading: 'いっぽうつうこう', romaji: 'ippoutsuukou', meaning: 'Đường một chiều', hanViet: 'NHẤT PHƯƠNG THÔNG HÀNH', type: 'Danh từ', jlpt: 'N2',
    tags: ['Giao thông'], examples: [{ jp: 'ここは一方通行だ。', reading: 'ここはいっぽうつうこうだ。', meaning: 'Đây là đường một chiều.' }] },
  { id: 'drive-hodou', word: '歩道', reading: 'ほどう', romaji: 'hodou', meaning: 'Vỉa hè', hanViet: 'BỘ ĐẠO', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông'], examples: [{ jp: '歩道を歩く。', reading: 'ほどうをあるく。', meaning: 'Đi trên vỉa hè.' }] },
  { id: 'drive-oudanhodou', word: '横断歩道', reading: 'おうだんほどう', romaji: 'oudanhodou', meaning: 'Vạch kẻ đường cho người đi bộ', hanViet: 'HOÀNH ĐOẠN BỘ ĐẠO', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông'], examples: [{ jp: '横断歩道を渡る。', reading: 'おうだんほどうをわたる。', meaning: 'Qua đường ở vạch kẻ.' }] },
  { id: 'drive-kousokudouro', word: '高速道路', reading: 'こうそくどうろ', romaji: 'kousokudouro', meaning: 'Đường cao tốc', hanViet: 'CAO TỐC ĐẠO LỘ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Giao thông'], examples: [{ jp: '高速道路に乗る。', reading: 'こうそくどうろにのる。', meaning: 'Lên đường cao tốc.' }] },
];

// ── from: vocabTopic_Kansai_Dialect.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: KANSAI DIALECT (OSAKA-BEN)
// Tiếng địa phương vùng Kansai - Rất phổ biến trong Anime, Hài và Đời sống
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_KANSAI: VocabEntry[] = [
  // ─── Từ vựng cơ bản (Basic Kansai) ───
  { id: 'kansai-nandeyanen', word: 'なんでやねん', reading: 'なんでやねん', romaji: 'nandeyanen', meaning: 'Cái quái gì vậy? / Sao lại thế? (Tsukkomi kinh điển)', type: 'Cụm từ', jlpt: 'N/A',
    tags: ['Kansai', 'Hài hước'], examples: [{ jp: 'なんでやねん！', reading: 'なんでやねん！', meaning: 'Vớ vẩn nào! / Sao lại thế được!' }] },
  { id: 'kansai-akan', word: 'あかん', reading: 'あかん', romaji: 'akan', meaning: 'Không được, hỏng rồi (= だめ)', type: 'Tính từ', jlpt: 'N/A',
    tags: ['Kansai'], examples: [{ jp: 'これ、あかんやつや。', reading: 'これ、あかんやつや。', meaning: 'Cái này là cái hỏng rồi (không dùng được).' }, { jp: 'もうあかん。', reading: 'もうあかん。', meaning: 'Thôi xong rồi / Tiêu rồi.' }] },
  { id: 'kansai-honma', word: 'ほんま', reading: 'ほんま', romaji: 'honma', meaning: 'Thật sự, thật á? (= 本当)', type: 'Phó từ', jlpt: 'N/A',
    tags: ['Kansai'], examples: [{ jp: 'ほんまに？', reading: 'ほんまに？', meaning: 'Thật á?' }, { jp: 'ほんまありがとう。', reading: 'ほんまありがとう。', meaning: 'Thực sự cảm ơn.' }] },
  { id: 'kansai-ookini', word: 'おおきに', reading: 'おおきに', romaji: 'ookini', meaning: 'Cảm ơn (= ありがとう)', type: 'Cụm từ', jlpt: 'N/A',
    tags: ['Kansai', 'Giao tiếp'], examples: [{ jp: '毎度おおきに！', reading: 'まいどおおきに！', meaning: 'Cảm ơn quý khách đã luôn ủng hộ!' }] },
  { id: 'kansai-chau', word: 'ちゃう', reading: 'ちゃう', romaji: 'chau', meaning: 'Không phải, sai rồi (= 違う)', type: 'Động từ', jlpt: 'N/A',
    tags: ['Kansai'], examples: [{ jp: 'それはちゃうで。', reading: 'それはちゃうで。', meaning: 'Cái đó sai rồi nha.' }, { jp: 'ちゃうちゃう。', reading: 'ちゃうちゃう。', meaning: 'Không phải đâu.' }] },
  { id: 'kansai-seyana', word: 'せやな', reading: 'せやな', romaji: 'seyana', meaning: 'Đúng vậy, ừ nhỉ (= そうだね)', type: 'Cụm từ', jlpt: 'N/A',
    tags: ['Kansai', 'Giao tiếp'], examples: [{ jp: 'せやな、わかるわ。', reading: 'せやな、わかるわ。', meaning: 'Ừ nhỉ, tôi hiểu mà.' }] },
  { id: 'kansai-kamahen', word: 'かまへん', reading: 'かまへん', romaji: 'kamahen', meaning: 'Không sao đâu (= 構わない)', type: 'Cụm từ', jlpt: 'N/A',
    tags: ['Kansai'], examples: [{ jp: '遅れてもかまへんよ。', reading: 'おくれてもかまへんよ。', meaning: 'Muộn chút cũng không sao đâu.' }] },
  { id: 'kansai-nanbo', word: 'なんぼ', reading: 'なんぼ', romaji: 'nanbo', meaning: 'Bao nhiêu tiền (= いくら)', type: 'Nghi vấn từ', jlpt: 'N/A',
    tags: ['Kansai', 'Mua sắm'], examples: [{ jp: 'これ、なんぼ？', reading: 'これ、なんぼ？', meaning: 'Cái này bao nhiêu tiền?' }] },
  { id: 'kansai-omoro', word: 'おもろい', reading: 'おもろい', romaji: 'omoroi', meaning: 'Thú vị, hài hước (= 面白い)', type: 'Tính từ -i', jlpt: 'N/A',
    tags: ['Kansai'], examples: [{ jp: 'あいつ、おもろいな。', reading: 'あいつ、おもろいな。', meaning: 'Thằng đó hài hước thật.' }] },
  { id: 'kansai-aho', word: 'アホ', reading: 'アホ', romaji: 'aho', meaning: 'Ngốc (Mang sắc thái thân thiện hơn Baka ở Kansai)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Kansai', 'Slang'], examples: [{ jp: 'アホやなぁ。', reading: 'アホやなぁ。', meaning: 'Ngốc ghê cơ.' }] },

  // ─── Từ vựng nâng cao (Deep Kansai) ───
  { id: 'kansai-donai', word: 'どない', reading: 'どない', romaji: 'donai', meaning: 'Thế nào, làm sao (= どう)', type: 'Nghi vấn từ', jlpt: 'N/A',
    tags: ['Kansai'], examples: [{ jp: 'どないしたん？', reading: 'どないしたん？', meaning: 'Sao thế? (Có chuyện gì à?)' }] },
  { id: 'kansai-shindoi', word: 'しんどい', reading: 'しんどい', romaji: 'shindoi', meaning: 'Mệt mỏi, phiền phức (= 疲れた/面倒)', type: 'Tính từ -i', jlpt: 'N/A',
    tags: ['Kansai', 'Cảm xúc'], examples: [{ jp: '今日はしんどいわ。', reading: 'きょうはしんどいわ。', meaning: 'Hôm nay mệt quá cơ.' }] },
  { id: 'kansai-naosu', word: 'なおす', reading: 'なおす', romaji: 'naosu', meaning: 'Cất đi (nghĩa khác với sửa chữa) (= 片付ける)', type: 'Động từ', jlpt: 'N/A',
    tags: ['Kansai', 'Dễ nhầm'], examples: [{ jp: '自転車をなおす。', reading: 'じてんしゃをなおす。', meaning: 'Cất xe đạp đi (không phải sửa xe).' }] },
  { id: 'kansai-hoka', word: 'ほかす', reading: 'ほかす', romaji: 'hokasu', meaning: 'Vứt bỏ (= 捨てる)', type: 'Động từ', jlpt: 'N/A',
    tags: ['Kansai'], examples: [{ jp: 'ゴミをほかす。', reading: 'ゴミをほかす。', meaning: 'Vứt rác.' }] },
  { id: 'kansai-sarachi', word: 'さら', reading: 'さら', romaji: 'sara', meaning: 'Mới tinh (= 新品)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Kansai'], examples: [{ jp: 'さらの服。', reading: 'さらのふく。', meaning: 'Quần áo mới tinh.' }] },
  { id: 'kansai-meccha', word: 'めっちゃ', reading: 'めっちゃ', romaji: 'meccha', meaning: 'Rất, cực kỳ (= とても)', type: 'Phó từ', jlpt: 'N/A',
    tags: ['Kansai', 'Mức độ'], examples: [{ jp: 'めっちゃうまい。', reading: 'めっちゃうまい。', meaning: 'Ngon vãi.' }] },
  { id: 'kansai-gotsui', word: 'ごつい', reading: 'ごつい', romaji: 'gotsui', meaning: 'To lớn, thô kệch', type: 'Tính từ -i', jlpt: 'N/A',
    tags: ['Kansai'], examples: [{ jp: 'ごつい手。', reading: 'ごついて。', meaning: 'Bàn tay to lớn thô kệch.' }] },
  { id: 'kansai-kettan', word: 'けったい', reading: 'けったい', romaji: 'kettai', meaning: 'Kỳ lạ, quái dị (= 変な)', type: 'Tính từ -na', jlpt: 'N/A',
    tags: ['Kansai'], examples: [{ jp: 'けったいな服。', reading: 'けったいなふく。', meaning: 'Bộ đồ kỳ dị.' }] },
];

// ── from: vocabTopic_Prefix_Suffix.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: PREFIXES & SUFFIXES (SETSUJI)
// Tiền tố & Hậu tố - Chìa khóa để mở rộng vốn từ vựng theo cấp số nhân
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_PREFIX_SUFFIX: VocabEntry[] = [
  // ─── Tiền tố (Prefixes - Đứng trước) ───
  { id: 'pre-fu', word: '不～', reading: 'ふ～', romaji: 'fu', meaning: 'Bất/Không (Phủ định)', hanViet: 'BẤT', type: 'Tiền tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '不便 (Bất tiện), 不安 (Bất an), 不足 (Thiếu).', reading: 'ふべん、ふあん、ふそく。', meaning: 'Tiện -> Bất tiện, An -> Bất an...' }] },
  { id: 'pre-mu', word: '無～', reading: 'む～', romaji: 'mu', meaning: 'Vô/Không có', hanViet: 'VÔ', type: 'Tiền tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '無料 (Miễn phí), 無理 (Vô lý), 無視 (Phớt lờ).', reading: 'むりょう、むり、むし。', meaning: 'Liệu -> Vô liệu (Miễn phí)...' }] },
  { id: 'pre-hi', word: '非～', reading: 'ひ～', romaji: 'hi', meaning: 'Phi/Không phải', hanViet: 'PHI', type: 'Tiền tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '非常 (Khẩn cấp), 非公開 (Không công khai).', reading: 'ひじょう、ひこうかい。', meaning: 'Thường -> Phi thường...' }] },
  { id: 'pre-mi', word: '未～', reading: 'み～', romaji: 'mi', meaning: 'Vị/Chưa', hanViet: 'VỊ', type: 'Tiền tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '未完成 (Chưa hoàn thành), 未成年 (Vị thành niên).', reading: 'みかんせい、みせいねん。', meaning: 'Hoàn thành -> Chưa hoàn thành...' }] },
  { id: 'pre-sai', word: '再～', reading: 'さい～', romaji: 'sai', meaning: 'Tái/Lại lần nữa', hanViet: 'TÁI', type: 'Tiền tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '再利用 (Tái sử dụng), 再起動 (Khởi động lại).', reading: 'さいりよう、さいきどう。', meaning: 'Sử dụng -> Tái sử dụng...' }] },
  { id: 'pre-shin', word: '新～', reading: 'しん～', romaji: 'shin', meaning: 'Tân/Mới', hanViet: 'TÂN', type: 'Tiền tố', jlpt: 'N4',
    tags: ['Cấu tạo từ'], examples: [{ jp: '新製品 (Sản phẩm mới), 新幹線 (Tàu Shinkansen).', reading: 'しんせいひん、しんかんせん。', meaning: 'Chế phẩm -> Tân chế phẩm...' }] },
  { id: 'pre-kou', word: '高～', reading: 'こう～', romaji: 'kou', meaning: 'Cao', hanViet: 'CAO', type: 'Tiền tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '高級 (Cao cấp), 高速 (Cao tốc).', reading: 'こうきゅう、こうそく。', meaning: 'Cấp -> Cao cấp...' }] },
  { id: 'pre-te', word: '低～', reading: 'てい～', romaji: 'tei', meaning: 'Thấp', hanViet: 'ĐÊ', type: 'Tiền tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '低温 (Nhiệt độ thấp), 低価格 (Giá thấp).', reading: 'ていおん、ていかかく。', meaning: 'Ôn -> Đê ôn...' }] },
  { id: 'pre-zen', word: '全～', reading: 'ぜん～', romaji: 'zen', meaning: 'Toàn/Tất cả', hanViet: 'TOÀN', type: 'Tiền tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '全国 (Toàn quốc), 全員 (Toàn thể nhân viên).', reading: 'ぜんこく、ぜんいん。', meaning: 'Quốc -> Toàn quốc...' }] },
  { id: 'pre-kaku', word: '各～', reading: 'かく～', romaji: 'kaku', meaning: 'Các/Mỗi', hanViet: 'CÁC', type: 'Tiền tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '各国 (Các nước), 各自 (Mỗi người).', reading: 'かっこく、かくじ。', meaning: 'Quốc -> Các quốc...' }] },

  // ─── Hậu tố (Suffixes - Đứng sau) ───
  { id: 'suf-ka', word: '～化', reading: '～か', romaji: 'ka', meaning: 'Hóa (Biến đổi thành)', hanViet: 'HÓA', type: 'Hậu tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '映画化 (Chuyển thể thành phim), 近代化 (Hiện đại hóa).', reading: 'えいがか、きんだいか。', meaning: 'Phim -> Hóa thành phim...' }] },
  { id: 'suf-teki', word: '～的', reading: '～てき', romaji: 'teki', meaning: 'Đích/Mang tính chất', hanViet: 'ĐÍCH', type: 'Hậu tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '個人的 (Mang tính cá nhân), 具体的 (Cụ thể).', reading: 'こじんてき、ぐたいてき。', meaning: 'Cá nhân -> Tính cá nhân...' }] },
  { id: 'suf-sei', word: '～性', reading: '～せい', romaji: 'sei', meaning: 'Tính (Tính chất/Khả năng)', hanViet: 'TÍNH', type: 'Hậu tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '可能性 (Khả năng), 安全性 (Tính an toàn).', reading: 'かのうせい、あんぜんせい。', meaning: 'Khả năng -> Tính khả năng...' }] },
  { id: 'suf-sei2', word: '～製', reading: '～せい', romaji: 'sei', meaning: 'Chế (Sản xuất tại)', hanViet: 'CHẾ', type: 'Hậu tố', jlpt: 'N4',
    tags: ['Cấu tạo từ'], examples: [{ jp: '日本製 (Hàng Nhật), 木製 (Làm bằng gỗ).', reading: 'にほんせい、もくせい。', meaning: 'Nhật Bản -> Hàng Nhật...' }] },
  { id: 'suf-ryou', word: '～料', reading: '～りょう', romaji: 'ryou', meaning: 'Liệu (Phí)', hanViet: 'LIỆU', type: 'Hậu tố', jlpt: 'N4',
    tags: ['Cấu tạo từ'], examples: [{ jp: '使用料 (Phí sử dụng), 入場料 (Phí vào cửa).', reading: 'しようりょう、にゅうじょうりょう。', meaning: 'Sử dụng -> Phí sử dụng...' }] },
  { id: 'suf-hi', word: '～費', reading: '～ひ', romaji: 'hi', meaning: 'Phí (Chi phí)', hanViet: 'PHÍ', type: 'Hậu tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '交通費 (Phí đi lại), 生活費 (Phí sinh hoạt).', reading: 'こうつうひ、せいかつひ。', meaning: 'Giao thông -> Phí giao thông...' }] },
  { id: 'suf-dai', word: '～代', reading: '～だい', romaji: 'dai', meaning: 'Đại (Tiền/Phí dịch vụ)', hanViet: 'ĐẠI', type: 'Hậu tố', jlpt: 'N4',
    tags: ['Cấu tạo từ'], examples: [{ jp: 'バス代 (Tiền xe buýt), 電気代 (Tiền điện).', reading: 'バスだい、でんきだい。', meaning: 'Xe buýt -> Tiền xe buýt...' }] },
  { id: 'suf-kan', word: '～感', reading: '～かん', romaji: 'kan', meaning: 'Cảm (Cảm giác)', hanViet: 'CẢM', type: 'Hậu tố', jlpt: 'N3',
    tags: ['Cấu tạo từ'], examples: [{ jp: '責任感 (Tinh thần trách nhiệm), 安心感 (Cảm giác an tâm).', reading: 'せきにんかん、あんしんかん。', meaning: 'Trách nhiệm -> Tinh thần trách nhiệm...' }] },
  { id: 'suf-chuu', word: '～中', reading: '～ちゅう', romaji: 'chuu', meaning: 'Trung (Đang trong lúc)', hanViet: 'TRUNG', type: 'Hậu tố', jlpt: 'N4',
    tags: ['Cấu tạo từ'], examples: [{ jp: '勉強中 (Đang học), 営業中 (Đang mở cửa).', reading: 'べんきょうちゅう、えいぎょうちゅう。', meaning: 'Học -> Đang học...' }] },
  { id: 'suf-sha', word: '～者', reading: '～しゃ', romaji: 'sha', meaning: 'Giả (Người)', hanViet: 'GIẢ', type: 'Hậu tố', jlpt: 'N4',
    tags: ['Cấu tạo từ'], examples: [{ jp: '医者 (Bác sĩ), 学者 (Học giả).', reading: 'いしゃ、がくしゃ。', meaning: 'Y -> Y giả (Bác sĩ)...' }] },
];

// ── from: vocabTopic_Game_Fantasy.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB TOPIC: GAME RPG & FANTASY
// Từ vựng chuyên dùng trong Game nhập vai, Isekai và Anime Fantasy
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_TOPIC_GAME: VocabEntry[] = [
  // ─── Nhân vật & Nghề nghiệp (Classes & Roles) ───
  { id: 'game-yuusha', word: '勇者', reading: 'ゆうしゃ', romaji: 'yuusha', meaning: 'Dũng sĩ (Hero)', hanViet: 'DŨNG GIẢ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Role'], examples: [{ jp: '伝説の勇者。', reading: 'でんせつのゆうしゃ。', meaning: 'Dũng sĩ huyền thoại.' }] },
  { id: 'game-senshi', word: '戦士', reading: 'せんし', romaji: 'senshi', meaning: 'Chiến binh (Warrior)', hanViet: 'CHIẾN SĨ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Role'], examples: [{ jp: '最強の戦士。', reading: 'さいきょうのせんし。', meaning: 'Chiến binh mạnh nhất.' }] },
  { id: 'game-mahoutsukai', word: '魔法使い', reading: 'まほうつかい', romaji: 'mahoutsukai', meaning: 'Pháp sư (Wizard/Mage)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Role'], examples: [{ jp: '魔法使いが呪文を唱える。', reading: 'まほうつかいがじゅもんをとなえる。', meaning: 'Pháp sư niệm chú.' }] },
  { id: 'game-souryo', word: '僧侶', reading: 'そうりょ', romaji: 'souryo', meaning: 'Tăng lữ (Priest/Healer)', hanViet: 'TĂNG LỮ', type: 'Danh từ', jlpt: 'N1',
    tags: ['Game', 'Role'], examples: [{ jp: '僧侶が回復する。', reading: 'そうりょがかいふくする。', meaning: 'Thầy tu hồi máu.' }] },
  { id: 'game-maou', word: '魔王', reading: 'まおう', romaji: 'maou', meaning: 'Ma vương (Demon King)', hanViet: 'MA VƯƠNG', type: 'Danh từ', jlpt: 'N1',
    tags: ['Game', 'Boss'], examples: [{ jp: '魔王を倒す。', reading: 'まおうをたおす。', meaning: 'Đánh bại ma vương.' }] },
  { id: 'game-hime', word: '姫', reading: 'ひめ', romaji: 'hime', meaning: 'Công chúa (Princess)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Nhân vật'], examples: [{ jp: '囚われの姫。', reading: 'とらわれのひめ。', meaning: 'Công chúa bị giam cầm.' }] },
  { id: 'game-kishi', word: '騎士', reading: 'きし', romaji: 'kishi', meaning: 'Hiệp sĩ (Knight)', hanViet: 'KỴ SĨ', type: 'Danh từ', jlpt: 'N1',
    tags: ['Game', 'Role'], examples: [{ jp: '騎士団。', reading: 'きしだん。', meaning: 'Đoàn hiệp sĩ.' }] },

  // ─── Hành động & Chiến đấu (Combat & Actions) ───
  { id: 'game-kougeki', word: '攻撃', reading: 'こうげき', romaji: 'kougeki', meaning: 'Tấn công (Attack)', hanViet: 'CÔNG KÍCH', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Combat'], examples: [{ jp: '敵を攻撃する。', reading: 'てきをこうげきする。', meaning: 'Tấn công kẻ địch.' }] },
  { id: 'game-bougyo', word: '防御', reading: 'ぼうぎょ', romaji: 'bougyo', meaning: 'Phòng thủ (Defense)', hanViet: 'PHÒNG NGỰ', type: 'Danh từ', jlpt: 'N1',
    tags: ['Game', 'Combat'], examples: [{ jp: '防御力を上げる。', reading: 'ぼうぎょりょくをあげる。', meaning: 'Tăng sức phòng thủ.' }] },
  { id: 'game-kaihi', word: '回避', reading: 'かいひ', romaji: 'kaihi', meaning: 'Né tránh (Evasion)', hanViet: 'HỒI TỊ', type: 'Danh từ', jlpt: 'N1',
    tags: ['Game', 'Combat'], examples: [{ jp: '攻撃を回避する。', reading: 'こうげきをかいひする。', meaning: 'Né đòn tấn công.' }] },
  { id: 'game-shoukan', word: '召喚', reading: 'しょうかん', romaji: 'shoukan', meaning: 'Triệu hồi (Summon)', hanViet: 'TRIỆU HOÁN', type: 'Danh từ', jlpt: 'N1',
    tags: ['Game', 'Magic'], examples: [{ jp: 'モンスターを召喚する。', reading: 'モンスターをしょうかんする。', meaning: 'Triệu hồi quái vật.' }] },
  { id: 'game-fukkatsu', word: '復活', reading: 'ふっかつ', romaji: 'fukkatsu', meaning: 'Hồi sinh (Revive)', hanViet: 'PHỤC HOẠT', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Status'], examples: [{ jp: '死者が復活する。', reading: 'ししゃがふっかつする。', meaning: 'Người chết sống lại.' }] },
  { id: 'game-bouken', word: '冒険', reading: 'ぼうけん', romaji: 'bouken', meaning: 'Mạo hiểm, phiêu lưu (Adventure)', hanViet: 'MẠO HIỂM', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Genre'], examples: [{ jp: '冒険に出る。', reading: 'ぼうけんにでる。', meaning: 'Lên đường phiêu lưu.' }] },
  { id: 'game-soubi', word: '装備', reading: 'そうび', romaji: 'soubi', meaning: 'Trang bị (Equip)', hanViet: 'TRANG BỊ', type: 'Danh từ', jlpt: 'N2',
    tags: ['Game', 'Item'], examples: [{ jp: '剣を装備する。', reading: 'けんをそうびする。', meaning: 'Trang bị kiếm.' }] },

  // ─── Phép thuật & Vật phẩm (Magic & Items) ───
  { id: 'game-mahou', word: '魔法', reading: 'まほう', romaji: 'mahou', meaning: 'Phép thuật (Magic)', hanViet: 'MA PHÁP', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Magic'], examples: [{ jp: '魔法を使う。', reading: 'まほうをつかう。', meaning: 'Dùng phép thuật.' }] },
  { id: 'game-jumon', word: '呪文', reading: 'じゅもん', romaji: 'jumon', meaning: 'Câu thần chú (Spell)', hanViet: 'CHÚ VĂN', type: 'Danh từ', jlpt: 'N1',
    tags: ['Game', 'Magic'], examples: [{ jp: '呪文を唱える。', reading: 'じゅもんをとなえる。', meaning: 'Niệm thần chú.' }] },
  { id: 'game-kekkai', word: '結界', reading: 'けっかい', romaji: 'kekkai', meaning: 'Kết giới (Barrier)', hanViet: 'KẾT GIỚI', type: 'Danh từ', jlpt: 'N1',
    tags: ['Game', 'Magic'], examples: [{ jp: '結界を張る。', reading: 'けっかいをはる。', meaning: 'Giăng kết giới.' }] },
  { id: 'game-kaifuku', word: '回復', reading: 'かいふく', romaji: 'kaifuku', meaning: 'Hồi phục (Heal/Recovery)', hanViet: 'HỒI PHỤC', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Status'], examples: [{ jp: '体力が回復した。', reading: 'たいりょくがかいふくした。', meaning: 'Thể lực đã hồi phục.' }] },
  { id: 'game-takara', word: '宝箱', reading: 'たからばこ', romaji: 'takarabako', meaning: 'Rương kho báu (Treasure Chest)', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Item'], examples: [{ jp: '宝箱を開ける。', reading: 'たからばこをあける。', meaning: 'Mở rương kho báu.' }] },
  { id: 'game-buki', word: '武器', reading: 'ぶき', romaji: 'buki', meaning: 'Vũ khí (Weapon)', hanViet: 'VŨ KHÍ', type: 'Danh từ', jlpt: 'N3',
    tags: ['Game', 'Item'], examples: [{ jp: '最強の武器。', reading: 'さいきょうのぶき。', meaning: 'Vũ khí mạnh nhất.' }] },
  { id: 'game-bougu', word: '防具', reading: 'ぼうぐ', romaji: 'bougu', meaning: 'Đồ phòng thủ (Armor)', hanViet: 'PHÒNG CỤ', type: 'Danh từ', jlpt: 'N1',
    tags: ['Game', 'Item'], examples: [{ jp: '防具を強化する。', reading: 'ぼうぐをきょうかする。', meaning: 'Cường hóa đồ phòng thủ.' }] },
  { id: 'game-danjon', word: 'ダンジョン', reading: 'ダンジョン', romaji: 'danjon', meaning: 'Ngục tối (Dungeon)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Game', 'Katakana'], examples: [{ jp: 'ダンジョンを攻略する。', reading: 'ダンジョンをこうりゃくする。', meaning: 'Chinh phục hầm ngục.' }] },
  { id: 'game-kuesuto', word: 'クエスト', reading: 'クエスト', romaji: 'kuesuto', meaning: 'Nhiệm vụ (Quest)', type: 'Danh từ', jlpt: 'N/A',
    tags: ['Game', 'Katakana'], examples: [{ jp: 'クエストを受ける。', reading: 'クエストをうける。', meaning: 'Nhận nhiệm vụ.' }] },
  { id: 'game-leberu', word: 'レベル', reading: 'レベル', romaji: 'reberu', meaning: 'Cấp độ (Level)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Game', 'Status'], examples: [{ jp: 'レベルアップ。', reading: 'レベルアップ。', meaning: 'Lên cấp.' }] },
];
