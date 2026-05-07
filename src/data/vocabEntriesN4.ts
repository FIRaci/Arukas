// ============================================================================
// VOCAB ENTRIES N4 — All parts (merged)
// ============================================================================
import type { VocabEntry } from './vocabTypes';

// ── from: vocabN4.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB N4 — Từ vựng JLPT N4 (~160 từ, đầy đủ tag, đồng/trái nghĩa, cụm từ)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_N4: VocabEntry[] = [
  // ═══════════════ ĐỘNG TỪ (Verbs) ═══════════════
  { id: 'n4-kangaeru', word: '考える', reading: 'かんがえる', romaji: 'kangaeru', meaning: 'Suy nghĩ', hanViet: 'KHẢO', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Tư duy', 'Hành động'],
    examples: [{ jp: 'よく考えてから答える。', reading: 'よくかんがえてからこたえる。', meaning: 'Suy nghĩ kỹ rồi trả lời.' }],
    synonyms: [{ word: '思う', reading: 'おもう', meaning: 'Nghĩ, cho rằng' }],
    phrases: [{ word: '考え方', reading: 'かんがえかた', meaning: 'Cách suy nghĩ' }] },

  { id: 'n4-kaeru', word: '変える', reading: 'かえる', romaji: 'kaeru', meaning: 'Thay đổi (ngoại)', hanViet: 'BIẾN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động', 'Biến đổi'],
    examples: [{ jp: '予定を変える。', reading: 'よていをかえる。', meaning: 'Thay đổi kế hoạch.' }],
    synonyms: [{ word: '変更する', reading: 'へんこうする', meaning: 'Biến đổi' }],
    antonyms: [{ word: '変わる', reading: 'かわる', meaning: 'Thay đổi (nội)' }],
    related: [{ word: '変わる', reading: 'かわる', meaning: 'Thay đổi (tự)' }] },

  { id: 'n4-tsuzukeru', word: '続ける', reading: 'つづける', romaji: 'tsuzukeru', meaning: 'Tiếp tục (ngoại)', hanViet: 'TỤC', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động', 'Thời gian'],
    examples: [{ jp: '勉強を続ける。', reading: 'べんきょうをつづける。', meaning: 'Tiếp tục học.' }],
    antonyms: [{ word: '止める', reading: 'やめる', meaning: 'Dừng lại' }],
    related: [{ word: '続く', reading: 'つづく', meaning: 'Tiếp tục (tự)' }] },

  { id: 'n4-kimeru', word: '決める', reading: 'きめる', romaji: 'kimeru', meaning: 'Quyết định', hanViet: 'QUYẾT', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Tư duy', 'Hành động'],
    examples: [{ jp: '旅行の日程を決める。', reading: 'りょこうのにっていをきめる。', meaning: 'Quyết định lịch trình du lịch.' }],
    phrases: [{ word: '決心', reading: 'けっしん', meaning: 'Quyết tâm' }] },

  { id: 'n4-komaru', word: '困る', reading: 'こまる', romaji: 'komaru', meaning: 'Gặp khó khăn, bối rối', hanViet: 'KHỐN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Cảm xúc', 'Trạng thái'],
    examples: [{ jp: 'お金がなくて困る。', reading: 'おかねがなくてこまる。', meaning: 'Không có tiền nên khó khăn.' }],
    phrases: [{ word: '困難', reading: 'こんなん', meaning: 'Khó khăn' }] },

  { id: 'n4-tasukeru', word: '助ける', reading: 'たすける', romaji: 'tasukeru', meaning: 'Giúp đỡ, cứu', hanViet: 'TRỢ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Giao tiếp', 'Hành động'],
    examples: [{ jp: '友達を助ける。', reading: 'ともだちをたすける。', meaning: 'Giúp đỡ bạn bè.' }],
    synonyms: [{ word: '手伝う', reading: 'てつだう', meaning: 'Phụ giúp' }],
    related: [{ word: '手伝う', reading: 'てつだう', meaning: 'Phụ giúp' }] },

  { id: 'n4-okuru', word: '送る', reading: 'おくる', romaji: 'okuru', meaning: 'Gửi, tiễn', hanViet: 'TỐNG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động', 'Giao tiếp'],
    examples: [{ jp: '手紙を送る。', reading: 'てがみをおくる。', meaning: 'Gửi thư.' }],
    antonyms: [{ word: '受け取る', reading: 'うけとる', meaning: 'Nhận' }],
    phrases: [{ word: '送料', reading: 'そうりょう', meaning: 'Phí vận chuyển' }] },

  { id: 'n4-uketoru', word: '受け取る', reading: 'うけとる', romaji: 'uketoru', meaning: 'Nhận lấy', hanViet: 'THỤ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động', 'Giao tiếp'],
    examples: [{ jp: '荷物を受け取る。', reading: 'にもつをうけとる。', meaning: 'Nhận hành lý.' }],
    antonyms: [{ word: '送る', reading: 'おくる', meaning: 'Gửi' }] },

  { id: 'n4-narabu', word: '並ぶ', reading: 'ならぶ', romaji: 'narabu', meaning: 'Xếp hàng, đứng hàng', hanViet: 'TỊNH', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động', 'Xã hội'],
    examples: [{ jp: '店の前に並ぶ。', reading: 'みせのまえにならぶ。', meaning: 'Xếp hàng trước cửa hàng.' }],
    related: [{ word: '並べる', reading: 'ならべる', meaning: 'Sắp xếp (ngoại)' }] },

  { id: 'n4-naraberu', word: '並べる', reading: 'ならべる', romaji: 'naraberu', meaning: 'Sắp xếp, bày ra', hanViet: 'TỊNH', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: '料理を並べる。', reading: 'りょうりをならべる。', meaning: 'Bày biện đồ ăn.' }],
    related: [{ word: '並ぶ', reading: 'ならぶ', meaning: 'Xếp hàng (tự)' }] },

  { id: 'n4-noru', word: '乗る', reading: 'のる', romaji: 'noru', meaning: 'Lên (xe/tàu)', hanViet: 'THỪA', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển', 'Hành động'],
    examples: [{ jp: 'バスに乗る。', reading: 'バスにのる。', meaning: 'Lên xe buýt.' }],
    antonyms: [{ word: '降りる', reading: 'おりる', meaning: 'Xuống (xe)' }],
    phrases: [{ word: '乗り物', reading: 'のりもの', meaning: 'Phương tiện' }] },

  { id: 'n4-oriru', word: '降りる', reading: 'おりる', romaji: 'oriru', meaning: 'Xuống (xe)', hanViet: 'GIÁNG', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Di chuyển', 'Hành động'],
    examples: [{ jp: '次の駅で降りる。', reading: 'つぎのえきでおりる。', meaning: 'Xuống ở ga tiếp theo.' }],
    antonyms: [{ word: '乗る', reading: 'のる', meaning: 'Lên xe' }] },

  { id: 'n4-tsuku', word: '着く', reading: 'つく', romaji: 'tsuku', meaning: 'Đến nơi', hanViet: 'TRƯỚC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển', 'Hành động'],
    examples: [{ jp: '空港に着く。', reading: 'くうこうにつく。', meaning: 'Đến sân bay.' }],
    antonyms: [{ word: '出発する', reading: 'しゅっぱつする', meaning: 'Khởi hành' }],
    phrases: [{ word: '到着', reading: 'とうちゃく', meaning: 'Đến nơi' }] },

  { id: 'n4-wasureru', word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: 'Quên', hanViet: 'VONG', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Tư duy', 'Hàng ngày'],
    examples: [{ jp: '約束を忘れる。', reading: 'やくそくをわすれる。', meaning: 'Quên lời hứa.' }],
    antonyms: [{ word: '覚える', reading: 'おぼえる', meaning: 'Nhớ' }],
    phrases: [{ word: '忘年会', reading: 'ぼうねんかい', meaning: 'Tiệc cuối năm' }] },

  { id: 'n4-yameru', word: '止める', reading: 'やめる', romaji: 'yameru', meaning: 'Dừng, bỏ', hanViet: 'CHỈ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động', 'Quyết định'],
    examples: [{ jp: 'タバコを止める。', reading: 'タバコをやめる。', meaning: 'Bỏ thuốc lá.' }],
    antonyms: [{ word: '始める', reading: 'はじめる', meaning: 'Bắt đầu' }],
    related: [{ word: '始める', reading: 'はじめる', meaning: 'Bắt đầu' }] },

  { id: 'n4-warau', word: '笑う', reading: 'わらう', romaji: 'warau', meaning: 'Cười', hanViet: 'TIẾU', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Cảm xúc', 'Giao tiếp'],
    examples: [{ jp: 'みんなで笑う。', reading: 'みんなでわらう。', meaning: 'Mọi người cùng cười.' }],
    antonyms: [{ word: '泣く', reading: 'なく', meaning: 'Khóc' }],
    phrases: [{ word: '笑顔', reading: 'えがお', meaning: 'Nụ cười' }] },

  { id: 'n4-naku', word: '泣く', reading: 'なく', romaji: 'naku', meaning: 'Khóc', hanViet: 'KHẤP', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '映画を見て泣く。', reading: 'えいがをみてなく。', meaning: 'Xem phim mà khóc.' }],
    antonyms: [{ word: '笑う', reading: 'わらう', meaning: 'Cười' }] },

  { id: 'n4-okoru', word: '怒る', reading: 'おこる', romaji: 'okoru', meaning: 'Giận, tức giận', hanViet: 'NỘ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '先生が怒る。', reading: 'せんせいがおこる。', meaning: 'Thầy giáo nổi giận.' }],
    related: [{ word: '叱る', reading: 'しかる', meaning: 'Mắng' }] },

  { id: 'n4-shiraberu', word: '調べる', reading: 'しらべる', romaji: 'shiraberu', meaning: 'Tra cứu, điều tra', hanViet: 'ĐIỀU', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Tư duy', 'Học tập'],
    examples: [{ jp: '辞書で調べる。', reading: 'じしょでしらべる。', meaning: 'Tra cứu trong từ điển.' }],
    related: [{ word: '研究する', reading: 'けんきゅうする', meaning: 'Nghiên cứu' }] },

  { id: 'n4-hajimeru', word: '始める', reading: 'はじめる', romaji: 'hajimeru', meaning: 'Bắt đầu (ngoại)', hanViet: 'THỈ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động', 'Thời gian'],
    examples: [{ jp: '仕事を始める。', reading: 'しごとをはじめる。', meaning: 'Bắt đầu công việc.' }],
    antonyms: [{ word: '終わる', reading: 'おわる', meaning: 'Kết thúc' }],
    related: [{ word: '始まる', reading: 'はじまる', meaning: 'Bắt đầu (tự)' }] },

  { id: 'n4-owaru', word: '終わる', reading: 'おわる', romaji: 'owaru', meaning: 'Kết thúc', hanViet: 'CHUNG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động', 'Thời gian'],
    examples: [{ jp: '授業が終わる。', reading: 'じゅぎょうがおわる。', meaning: 'Tiết học kết thúc.' }],
    antonyms: [{ word: '始まる', reading: 'はじまる', meaning: 'Bắt đầu' }] },

  { id: 'n4-komu', word: '込む', reading: 'こむ', romaji: 'komu', meaning: 'Đông đúc', hanViet: 'NHẬP', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Trạng thái', 'Xã hội'],
    examples: [{ jp: '電車が込んでいる。', reading: 'でんしゃがこんでいる。', meaning: 'Tàu đông đúc.' }],
    antonyms: [{ word: '空く', reading: 'すく', meaning: 'Vắng, trống' }] },

  { id: 'n4-suku', word: '空く', reading: 'すく', romaji: 'suku', meaning: 'Trống, vắng', hanViet: 'KHÔNG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Trạng thái'],
    examples: [{ jp: 'お腹が空いた。', reading: 'おなかがすいた。', meaning: 'Đói bụng.' }],
    antonyms: [{ word: '込む', reading: 'こむ', meaning: 'Đông' }] },

  { id: 'n4-nureru', word: '濡れる', reading: 'ぬれる', romaji: 'nureru', meaning: 'Bị ướt', hanViet: 'NHU', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Trạng thái', 'Thời tiết'],
    examples: [{ jp: '雨で濡れる。', reading: 'あめでぬれる。', meaning: 'Bị ướt vì mưa.' }],
    antonyms: [{ word: '乾く', reading: 'かわく', meaning: 'Khô' }] },

  { id: 'n4-kawaku', word: '乾く', reading: 'かわく', romaji: 'kawaku', meaning: 'Khô', hanViet: 'CAN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Trạng thái'],
    examples: [{ jp: '洗濯物が乾く。', reading: 'せんたくものがかわく。', meaning: 'Đồ giặt khô.' }],
    antonyms: [{ word: '濡れる', reading: 'ぬれる', meaning: 'Ướt' }] },

  { id: 'n4-kowareru', word: '壊れる', reading: 'こわれる', romaji: 'kowareru', meaning: 'Bị hỏng', hanViet: 'HOẠI', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Trạng thái', 'Đồ vật'],
    examples: [{ jp: 'パソコンが壊れた。', reading: 'パソコンがこわれた。', meaning: 'Máy tính bị hỏng.' }],
    related: [{ word: '壊す', reading: 'こわす', meaning: 'Làm hỏng (ngoại)' }, { word: '直す', reading: 'なおす', meaning: 'Sửa chữa' }] },

  { id: 'n4-naosu', word: '直す', reading: 'なおす', romaji: 'naosu', meaning: 'Sửa chữa, chữa', hanViet: 'TRỰC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động', 'Đồ vật'],
    examples: [{ jp: '間違いを直す。', reading: 'まちがいをなおす。', meaning: 'Sửa lỗi sai.' }],
    related: [{ word: '壊れる', reading: 'こわれる', meaning: 'Bị hỏng' }] },

  { id: 'n4-suteru', word: '捨てる', reading: 'すてる', romaji: 'suteru', meaning: 'Vứt đi', hanViet: 'XẢ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: 'ゴミを捨てる。', reading: 'ゴミをすてる。', meaning: 'Vứt rác.' }],
    antonyms: [{ word: '拾う', reading: 'ひろう', meaning: 'Nhặt' }] },

  { id: 'n4-hirou', word: '拾う', reading: 'ひろう', romaji: 'hirou', meaning: 'Nhặt', hanViet: 'THẬP', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '財布を拾う。', reading: 'さいふをひろう。', meaning: 'Nhặt được ví.' }],
    antonyms: [{ word: '捨てる', reading: 'すてる', meaning: 'Vứt' }] },

  // ═══════════════ DANH TỪ (Nouns) ═══════════════
  { id: 'n4-keizai', word: '経済', reading: 'けいざい', romaji: 'keizai', meaning: 'Kinh tế', hanViet: 'KINH TẾ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội', 'Kinh tế'],
    examples: [{ jp: '経済が発展する。', reading: 'けいざいがはってんする。', meaning: 'Kinh tế phát triển.' }],
    phrases: [{ word: '経済学', reading: 'けいざいがく', meaning: 'Kinh tế học' }],
    related: [{ word: '社会', reading: 'しゃかい', meaning: 'Xã hội' }] },

  { id: 'n4-bunka', word: '文化', reading: 'ぶんか', romaji: 'bunka', meaning: 'Văn hóa', hanViet: 'VĂN HÓA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội', 'Văn hóa'],
    examples: [{ jp: '日本の文化を学ぶ。', reading: 'にほんのぶんかをまなぶ。', meaning: 'Học văn hóa Nhật.' }],
    phrases: [{ word: '文化祭', reading: 'ぶんかさい', meaning: 'Lễ hội văn hóa' }] },

  { id: 'n4-rekishi', word: '歴史', reading: 'れきし', romaji: 'rekishi', meaning: 'Lịch sử', hanViet: 'LỊCH SỬ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Học tập', 'Xã hội'],
    examples: [{ jp: '歴史を勉強する。', reading: 'れきしをべんきょうする。', meaning: 'Học lịch sử.' }] },

  { id: 'n4-keiken', word: '経験', reading: 'けいけん', romaji: 'keiken', meaning: 'Kinh nghiệm', hanViet: 'KINH NGHIỆM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc', 'Tư duy'],
    examples: [{ jp: 'いい経験になった。', reading: 'いいけいけんになった。', meaning: 'Đã trở thành kinh nghiệm tốt.' }],
    related: [{ word: '体験', reading: 'たいけん', meaning: 'Trải nghiệm' }] },

  { id: 'n4-seikatsu', word: '生活', reading: 'せいかつ', romaji: 'seikatsu', meaning: 'Đời sống, cuộc sống', hanViet: 'SINH HOẠT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hàng ngày', 'Xã hội'],
    examples: [{ jp: '生活が変わる。', reading: 'せいかつがかわる。', meaning: 'Cuộc sống thay đổi.' }],
    phrases: [{ word: '生活費', reading: 'せいかつひ', meaning: 'Chi phí sinh hoạt' }] },

  { id: 'n4-shakai', word: '社会', reading: 'しゃかい', romaji: 'shakai', meaning: 'Xã hội', hanViet: 'XÃ HỘI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội'],
    examples: [{ jp: '社会に出る。', reading: 'しゃかいにでる。', meaning: 'Ra xã hội (đi làm).' }],
    phrases: [{ word: '社会人', reading: 'しゃかいじん', meaning: 'Người đi làm' }] },

  { id: 'n4-kankei', word: '関係', reading: 'かんけい', romaji: 'kankei', meaning: 'Quan hệ, mối quan hệ', hanViet: 'QUAN HỆ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội', 'Giao tiếp'],
    examples: [{ jp: '友達との関係。', reading: 'ともだちとのかんけい。', meaning: 'Mối quan hệ với bạn bè.' }] },

  { id: 'n4-iken', word: '意見', reading: 'いけん', romaji: 'iken', meaning: 'Ý kiến', hanViet: 'Ý KIẾN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp', 'Tư duy'],
    examples: [{ jp: '意見を言う。', reading: 'いけんをいう。', meaning: 'Phát biểu ý kiến.' }] },

  { id: 'n4-shiken', word: '試験', reading: 'しけん', romaji: 'shiken', meaning: 'Kỳ thi', hanViet: 'THI NGHIỆM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Học tập'],
    examples: [{ jp: '試験に合格する。', reading: 'しけんにごうかくする。', meaning: 'Đỗ kỳ thi.' }],
    phrases: [{ word: '入学試験', reading: 'にゅうがくしけん', meaning: 'Kỳ thi tuyển sinh' }] },

  { id: 'n4-mondai', word: '問題', reading: 'もんだい', romaji: 'mondai', meaning: 'Vấn đề, câu hỏi', hanViet: 'VẤN ĐỀ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Học tập', 'Xã hội'],
    examples: [{ jp: '問題を解く。', reading: 'もんだいをとく。', meaning: 'Giải bài.' }] },

  { id: 'n4-setsumei', word: '説明', reading: 'せつめい', romaji: 'setsumei', meaning: 'Giải thích', hanViet: 'THUYẾT MINH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp', 'Học tập'],
    examples: [{ jp: '説明をする。', reading: 'せつめいをする。', meaning: 'Giải thích.' }],
    phrases: [{ word: '説明書', reading: 'せつめいしょ', meaning: 'Hướng dẫn sử dụng' }] },

  { id: 'n4-jiko', word: '事故', reading: 'じこ', romaji: 'jiko', meaning: 'Tai nạn', hanViet: 'SỰ CỐ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội', 'An toàn'],
    examples: [{ jp: '交通事故が起きた。', reading: 'こうつうじこがおきた。', meaning: 'Xảy ra tai nạn giao thông.' }],
    phrases: [{ word: '交通事故', reading: 'こうつうじこ', meaning: 'Tai nạn giao thông' }] },

  { id: 'n4-kikai', word: '機会', reading: 'きかい', romaji: 'kikai', meaning: 'Cơ hội', hanViet: 'CƠ HỘI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội', 'Công việc'],
    examples: [{ jp: 'いい機会があれば。', reading: 'いいきかいがあれば。', meaning: 'Nếu có cơ hội tốt.' }],
    synonyms: [{ word: 'チャンス', reading: 'チャンス', meaning: 'Cơ hội (chance)' }] },

  { id: 'n4-yakusoku', word: '約束', reading: 'やくそく', romaji: 'yakusoku', meaning: 'Lời hứa, cuộc hẹn', hanViet: 'ƯỚC THÚC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp', 'Quan hệ'],
    examples: [{ jp: '約束を守る。', reading: 'やくそくをまもる。', meaning: 'Giữ lời hứa.' }] },

  { id: 'n4-junbi', word: '準備', reading: 'じゅんび', romaji: 'junbi', meaning: 'Chuẩn bị', hanViet: 'CHUẨN BỊ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: '準備ができた。', reading: 'じゅんびができた。', meaning: 'Đã chuẩn bị xong.' }] },

  { id: 'n4-yotei', word: '予定', reading: 'よてい', romaji: 'yotei', meaning: 'Kế hoạch, dự định', hanViet: 'DỰ ĐỊNH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian', 'Công việc'],
    examples: [{ jp: '明日の予定は？', reading: 'あしたのよていは？', meaning: 'Kế hoạch ngày mai là gì?' }] },

  { id: 'n4-nyuuin', word: '入院', reading: 'にゅういん', romaji: 'nyuuin', meaning: 'Nhập viện', hanViet: 'NHẬP VIỆN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sức khỏe', 'Y tế'],
    examples: [{ jp: '入院する。', reading: 'にゅういんする。', meaning: 'Nhập viện.' }],
    antonyms: [{ word: '退院', reading: 'たいいん', meaning: 'Xuất viện' }] },

  { id: 'n4-taiin', word: '退院', reading: 'たいいん', romaji: 'taiin', meaning: 'Xuất viện', hanViet: 'THOÁI VIỆN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sức khỏe', 'Y tế'],
    examples: [{ jp: '来週退院する。', reading: 'らいしゅうたいいんする。', meaning: 'Tuần sau xuất viện.' }],
    antonyms: [{ word: '入院', reading: 'にゅういん', meaning: 'Nhập viện' }] },

  // ═══════════════ TÍNH TỪ (Adjectives) ═══════════════
  { id: 'n4-kanashii', word: '悲しい', reading: 'かなしい', romaji: 'kanashii', meaning: 'Buồn', hanViet: 'BI', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '悲しいニュースを聞いた。', reading: 'かなしいニュースをきいた。', meaning: 'Nghe tin buồn.' }],
    antonyms: [{ word: '嬉しい', reading: 'うれしい', meaning: 'Vui' }],
    related: [{ word: '寂しい', reading: 'さびしい', meaning: 'Cô đơn' }] },

  { id: 'n4-ureshii', word: '嬉しい', reading: 'うれしい', romaji: 'ureshii', meaning: 'Vui mừng', hanViet: 'HỈ', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: 'プレゼントをもらって嬉しい。', reading: 'プレゼントをもらってうれしい。', meaning: 'Nhận quà mà vui.' }],
    antonyms: [{ word: '悲しい', reading: 'かなしい', meaning: 'Buồn' }] },

  { id: 'n4-sabishii', word: '寂しい', reading: 'さびしい', romaji: 'sabishii', meaning: 'Cô đơn', hanViet: 'TỊCH', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '一人で寂しい。', reading: 'ひとりでさびしい。', meaning: 'Một mình cô đơn.' }],
    related: [{ word: '悲しい', reading: 'かなしい', meaning: 'Buồn' }] },

  { id: 'n4-hazukashii', word: '恥ずかしい', reading: 'はずかしい', romaji: 'hazukashii', meaning: 'Xấu hổ', hanViet: 'XỈ', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '間違えて恥ずかしい。', reading: 'まちがえてはずかしい。', meaning: 'Nhầm lẫn nên xấu hổ.' }] },

  { id: 'n4-kowai', word: '怖い', reading: 'こわい', romaji: 'kowai', meaning: 'Sợ, đáng sợ', hanViet: 'BỐ', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: 'この映画は怖い。', reading: 'このえいがはこわい。', meaning: 'Bộ phim này đáng sợ.' }] },

  { id: 'n4-kitanai', word: '汚い', reading: 'きたない', romaji: 'kitanai', meaning: 'Bẩn', hanViet: 'Ô', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Miêu tả', 'Trạng thái'],
    examples: [{ jp: '部屋が汚い。', reading: 'へやがきたない。', meaning: 'Phòng bẩn.' }],
    antonyms: [{ word: 'きれい', reading: 'きれい', meaning: 'Sạch, đẹp' }] },

  { id: 'n4-subarashii', word: '素晴らしい', reading: 'すばらしい', romaji: 'subarashii', meaning: 'Tuyệt vời', hanViet: 'TỐ TÌNH', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Cảm xúc', 'Miêu tả'],
    examples: [{ jp: '素晴らしい景色。', reading: 'すばらしいけしき。', meaning: 'Phong cảnh tuyệt vời.' }],
    synonyms: [{ word: '最高', reading: 'さいこう', meaning: 'Tuyệt nhất' }] },

  { id: 'n4-fukuzatsu', word: '複雑', reading: 'ふくざつ', romaji: 'fukuzatsu', meaning: 'Phức tạp', hanViet: 'PHỨC TẠP', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Miêu tả', 'Trạng thái'],
    examples: [{ jp: '問題が複雑だ。', reading: 'もんだいがふくざつだ。', meaning: 'Vấn đề phức tạp.' }],
    antonyms: [{ word: '簡単', reading: 'かんたん', meaning: 'Đơn giản' }] },

  { id: 'n4-kantan', word: '簡単', reading: 'かんたん', romaji: 'kantan', meaning: 'Đơn giản', hanViet: 'GIẢN ĐƠN', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Miêu tả', 'Trạng thái'],
    examples: [{ jp: '簡単な問題。', reading: 'かんたんなもんだい。', meaning: 'Bài dễ.' }],
    antonyms: [{ word: '複雑', reading: 'ふくざつ', meaning: 'Phức tạp' }],
    synonyms: [{ word: '易しい', reading: 'やさしい', meaning: 'Dễ' }] },

  { id: 'n4-hitsuyou', word: '必要', reading: 'ひつよう', romaji: 'hitsuyou', meaning: 'Cần thiết', hanViet: 'TẤT YẾU', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Trạng thái', 'Quan trọng'],
    examples: [{ jp: 'パスポートが必要だ。', reading: 'パスポートがひつようだ。', meaning: 'Cần hộ chiếu.' }],
    antonyms: [{ word: '不要', reading: 'ふよう', meaning: 'Không cần' }] },

  { id: 'n4-tokubestu', word: '特別', reading: 'とくべつ', romaji: 'tokubetsu', meaning: 'Đặc biệt', hanViet: 'ĐẶC BIỆT', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Miêu tả'],
    examples: [{ jp: '特別な日。', reading: 'とくべつなひ。', meaning: 'Ngày đặc biệt.' }],
    antonyms: [{ word: '普通', reading: 'ふつう', meaning: 'Bình thường' }] },

  { id: 'n4-futsuu', word: '普通', reading: 'ふつう', romaji: 'futsuu', meaning: 'Bình thường', hanViet: 'PHỔ THÔNG', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Miêu tả', 'Trạng thái'],
    examples: [{ jp: '普通の生活。', reading: 'ふつうのせいかつ。', meaning: 'Cuộc sống bình thường.' }],
    antonyms: [{ word: '特別', reading: 'とくべつ', meaning: 'Đặc biệt' }] },

  { id: 'n4-shinsetsu', word: '親切', reading: 'しんせつ', romaji: 'shinsetsu', meaning: 'Tử tế, tốt bụng', hanViet: 'THÂN THIẾT', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Tính cách', 'Giao tiếp'],
    examples: [{ jp: '親切な人。', reading: 'しんせつなひと。', meaning: 'Người tử tế.' }],
    antonyms: [{ word: '意地悪', reading: 'いじわる', meaning: 'Ác ý' }] },

  { id: 'n4-joubu', word: '丈夫', reading: 'じょうぶ', romaji: 'joubu', meaning: 'Chắc chắn, khỏe mạnh', hanViet: 'TRƯỢNG PHU', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Trạng thái', 'Sức khỏe'],
    examples: [{ jp: 'この靴は丈夫だ。', reading: 'このくつはじょうぶだ。', meaning: 'Đôi giày này bền.' }] },

  { id: 'n4-anzen', word: '安全', reading: 'あんぜん', romaji: 'anzen', meaning: 'An toàn', hanViet: 'AN TOÀN', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Trạng thái', 'An toàn'],
    examples: [{ jp: 'この道は安全だ。', reading: 'このみちはあんぜんだ。', meaning: 'Con đường này an toàn.' }],
    antonyms: [{ word: '危険', reading: 'きけん', meaning: 'Nguy hiểm' }] },

  { id: 'n4-kiken', word: '危険', reading: 'きけん', romaji: 'kiken', meaning: 'Nguy hiểm', hanViet: 'NGUY HIỂM', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Trạng thái', 'An toàn'],
    examples: [{ jp: 'ここは危険だ。', reading: 'ここはきけんだ。', meaning: 'Chỗ này nguy hiểm.' }],
    antonyms: [{ word: '安全', reading: 'あんぜん', meaning: 'An toàn' }] },

  // ═══════════════ PHÓ TỪ (Adverbs) ═══════════════
  { id: 'n4-zehi', word: 'ぜひ', reading: 'ぜひ', romaji: 'zehi', meaning: 'Nhất định, bằng mọi giá', type: 'Phó từ', jlpt: 'N4',
    tags: ['Mức độ', 'Giao tiếp'],
    examples: [{ jp: 'ぜひ来てください。', reading: 'ぜひきてください。', meaning: 'Nhất định hãy đến nhé.' }] },

  { id: 'n4-yappari', word: 'やっぱり', reading: 'やっぱり', romaji: 'yappari', meaning: 'Quả nhiên, đúng như dự đoán', type: 'Phó từ', jlpt: 'N4',
    tags: ['Giao tiếp', 'Tư duy'],
    examples: [{ jp: 'やっぱり日本語は難しい。', reading: 'やっぱりにほんごはむずかしい。', meaning: 'Quả nhiên tiếng Nhật khó.' }],
    synonyms: [{ word: 'やはり', reading: 'やはり', meaning: 'Quả nhiên (trang trọng)' }] },

  { id: 'n4-tashika', word: '確か', reading: 'たしか', romaji: 'tashika', meaning: 'Chắc chắn, nếu tôi nhớ không nhầm', hanViet: 'XÁC', type: 'Phó từ', jlpt: 'N4',
    tags: ['Tư duy', 'Giao tiếp'],
    examples: [{ jp: '確か明日だった。', reading: 'たしかあしただった。', meaning: 'Nếu tôi nhớ không nhầm thì là ngày mai.' }] },

  { id: 'n4-hakkiri', word: 'はっきり', reading: 'はっきり', romaji: 'hakkiri', meaning: 'Rõ ràng', type: 'Phó từ', jlpt: 'N4',
    tags: ['Giao tiếp', 'Miêu tả'],
    examples: [{ jp: 'はっきり言ってください。', reading: 'はっきりいってください。', meaning: 'Xin nói rõ ràng.' }] },

  { id: 'n4-zuibun', word: 'ずいぶん', reading: 'ずいぶん', romaji: 'zuibun', meaning: 'Khá nhiều, rất', type: 'Phó từ', jlpt: 'N4',
    tags: ['Mức độ'],
    examples: [{ jp: 'ずいぶん大きくなった。', reading: 'ずいぶんおおきくなった。', meaning: 'Đã lớn lên đáng kể.' }] },

  { id: 'n4-toutou', word: 'とうとう', reading: 'とうとう', romaji: 'toutou', meaning: 'Cuối cùng', type: 'Phó từ', jlpt: 'N4',
    tags: ['Thời gian', 'Kết quả'],
    examples: [{ jp: 'とうとう卒業した。', reading: 'とうとうそつぎょうした。', meaning: 'Cuối cùng cũng tốt nghiệp.' }],
    synonyms: [{ word: 'ついに', reading: 'ついに', meaning: 'Cuối cùng (trang trọng)' }] },

  { id: 'n4-moshi', word: 'もし', reading: 'もし', romaji: 'moshi', meaning: 'Nếu', type: 'Phó từ', jlpt: 'N4',
    tags: ['Ngữ pháp', 'Giả định'],
    examples: [{ jp: 'もし時間があれば。', reading: 'もしじかんがあれば。', meaning: 'Nếu có thời gian.' }] },

  // ═══════════════ BỔ SUNG — ĐỘNG TỪ N4 ═══════════════
  { id: 'n4-todokeru', word: '届ける', reading: 'とどける', romaji: 'todokeru', meaning: 'Giao, chuyển đến', hanViet: 'GIỚI', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '荷物を届ける。', reading: 'にもつをとどける。', meaning: 'Giao hàng.' }],
    related: [{ word: '届く', reading: 'とどく', meaning: 'Đến nơi (tự)' }] },
  { id: 'n4-atsumeru', word: '集める', reading: 'あつめる', romaji: 'atsumeru', meaning: 'Thu thập, tập hợp', hanViet: 'TẬP', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: 'データを集める。', reading: 'データをあつめる。', meaning: 'Thu thập dữ liệu.' }],
    related: [{ word: '集まる', reading: 'あつまる', meaning: 'Tập hợp (tự)' }] },
  { id: 'n4-mitsukeru', word: '見つける', reading: 'みつける', romaji: 'mitsukeru', meaning: 'Tìm thấy', hanViet: 'KIẾN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động', 'Tư duy'],
    examples: [{ jp: '仕事を見つける。', reading: 'しごとをみつける。', meaning: 'Tìm được việc làm.' }],
    related: [{ word: '見つかる', reading: 'みつかる', meaning: 'Được tìm thấy (tự)' }] },
  { id: 'n4-katazukeru', word: '片付ける', reading: 'かたづける', romaji: 'katazukeru', meaning: 'Dọn dẹp', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hàng ngày', 'Hành động'],
    examples: [{ jp: '部屋を片付ける。', reading: 'へやをかたづける。', meaning: 'Dọn phòng.' }] },
  { id: 'n4-tsutomeru', word: '勤める', reading: 'つとめる', romaji: 'tsutomeru', meaning: 'Làm việc tại', hanViet: 'CẦN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: '銀行に勤めている。', reading: 'ぎんこうにつとめている。', meaning: 'Đang làm việc ở ngân hàng.' }] },
  { id: 'n4-tsutawaru', word: '伝わる', reading: 'つたわる', romaji: 'tsutawaru', meaning: 'Được truyền đạt', hanViet: 'TRUYỀN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '気持ちが伝わる。', reading: 'きもちがつたわる。', meaning: 'Cảm xúc được truyền tải.' }] },
  { id: 'n4-nakunaru', word: '亡くなる', reading: 'なくなる', romaji: 'nakunaru', meaning: 'Qua đời (kính ngữ)', hanViet: 'VONG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Con người', 'Kính ngữ'],
    examples: [{ jp: '祖父が亡くなった。', reading: 'そふがなくなった。', meaning: 'Ông nội đã qua đời.' }] },
  { id: 'n4-tetsudau', word: '手伝う', reading: 'てつだう', romaji: 'tetsudau', meaning: 'Giúp đỡ', hanViet: 'THỦ TRUYỀN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động', 'Giao tiếp'],
    examples: [{ jp: '料理を手伝う。', reading: 'りょうりをてつだう。', meaning: 'Giúp nấu ăn.' }],
    synonyms: [{ word: '助ける', reading: 'たすける', meaning: 'Cứu giúp' }] },
  { id: 'n4-kawaru', word: '変わる', reading: 'かわる', romaji: 'kawaru', meaning: 'Thay đổi (tự)', hanViet: 'BIẾN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Trạng thái'],
    examples: [{ jp: '季節が変わる。', reading: 'きせつがかわる。', meaning: 'Mùa thay đổi.' }],
    related: [{ word: '変える', reading: 'かえる', meaning: 'Thay đổi (ngoại)' }] },
  { id: 'n4-fueru', word: '増える', reading: 'ふえる', romaji: 'fueru', meaning: 'Tăng lên (tự)', hanViet: 'TĂNG', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Thay đổi', 'Kinh tế'],
    examples: [{ jp: '人口が増える。', reading: 'じんこうがふえる。', meaning: 'Dân số tăng.' }],
    antonyms: [{ word: '減る', reading: 'へる', meaning: 'Giảm' }] },
  { id: 'n4-heru', word: '減る', reading: 'へる', romaji: 'heru', meaning: 'Giảm (tự)', hanViet: 'GIẢM', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Thay đổi', 'Kinh tế'],
    examples: [{ jp: '給料が減った。', reading: 'きゅうりょうがへった。', meaning: 'Lương giảm.' }] },
  { id: 'n4-tasukaru2', word: '足りる', reading: 'たりる', romaji: 'tariru', meaning: 'Đủ', hanViet: 'TÚC', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Trạng thái'],
    examples: [{ jp: 'お金が足りない。', reading: 'おかねがたりない。', meaning: 'Không đủ tiền.' }] },
  { id: 'n4-tsuzuku', word: '続く', reading: 'つづく', romaji: 'tsuzuku', meaning: 'Tiếp tục (tự)', hanViet: 'TỤC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Trạng thái', 'Thời gian'],
    examples: [{ jp: '雨が続く。', reading: 'あめがつづく。', meaning: 'Mưa kéo dài.' }] },
  { id: 'n4-kaeru2', word: '換える', reading: 'かえる', romaji: 'kaeru', meaning: 'Đổi, trao đổi', hanViet: 'HOÁN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: 'お金を換える。', reading: 'おかねをかえる。', meaning: 'Đổi tiền.' }] },
  { id: 'n4-okureru', word: '遅れる', reading: 'おくれる', romaji: 'okureru', meaning: 'Muộn, trễ', hanViet: 'TRÌ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '電車が遅れる。', reading: 'でんしゃがおくれる。', meaning: 'Tàu bị trễ.' }] },
  { id: 'n4-nigeru', word: '逃げる', reading: 'にげる', romaji: 'nigeru', meaning: 'Trốn, chạy trốn', hanViet: 'ĐÀO', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Di chuyển', 'Hành động'],
    examples: [{ jp: '犯人が逃げた。', reading: 'はんにんがにげた。', meaning: 'Tội phạm đã chạy trốn.' }] },
  { id: 'n4-okosu', word: '起こす', reading: 'おこす', romaji: 'okosu', meaning: 'Đánh thức, gây ra', hanViet: 'KHỞI', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '朝早く起こす。', reading: 'あさはやくおこす。', meaning: 'Đánh thức sớm.' }] },
  { id: 'n4-nakusu', word: '無くす', reading: 'なくす', romaji: 'nakusu', meaning: 'Làm mất', hanViet: 'VÔ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '財布を無くした。', reading: 'さいふをなくした。', meaning: 'Đã làm mất ví.' }] },
  { id: 'n4-kizuku2', word: '築く', reading: 'きずく', romaji: 'kizuku', meaning: 'Xây dựng', hanViet: 'TRÚC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động', 'Xã hội'],
    examples: [{ jp: '信頼を築く。', reading: 'しんらいをきずく。', meaning: 'Xây dựng niềm tin.' }] },
  { id: 'n4-kanjiru', word: '感じる', reading: 'かんじる', romaji: 'kanjiru', meaning: 'Cảm thấy', hanViet: 'CẢM', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Cảm xúc', 'Tư duy'],
    examples: [{ jp: '寒さを感じる。', reading: 'さむさをかんじる。', meaning: 'Cảm thấy lạnh.' }] },
  { id: 'n4-shinjiru', word: '信じる', reading: 'しんじる', romaji: 'shinjiru', meaning: 'Tin tưởng', hanViet: 'TÍN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Tư duy', 'Cảm xúc'],
    examples: [{ jp: '友達を信じる。', reading: 'ともだちをしんじる。', meaning: 'Tin tưởng bạn bè.' }],
    antonyms: [{ word: '疑う', reading: 'うたがう', meaning: 'Nghi ngờ' }] },
  { id: 'n4-magaru', word: '曲がる', reading: 'まがる', romaji: 'magaru', meaning: 'Rẽ, quẹo', hanViet: 'KHÚC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: '右に曲がる。', reading: 'みぎにまがる。', meaning: 'Rẽ phải.' }] },
  { id: 'n4-hikkosu', word: '引っ越す', reading: 'ひっこす', romaji: 'hikkosu', meaning: 'Chuyển nhà', hanViet: 'DẪN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Cuộc sống', 'Di chuyển'],
    examples: [{ jp: '来月引っ越す。', reading: 'らいげつひっこす。', meaning: 'Tháng sau chuyển nhà.' }] },
  { id: 'n4-tateru', word: '建てる', reading: 'たてる', romaji: 'tateru', meaning: 'Xây, xây dựng', hanViet: 'KIẾN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '家を建てる。', reading: 'いえをたてる。', meaning: 'Xây nhà.' }] },
  { id: 'n4-naoru', word: '治る', reading: 'なおる', romaji: 'naoru', meaning: 'Khỏi (bệnh)', hanViet: 'TRỊ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Y tế', 'Trạng thái'],
    examples: [{ jp: '病気が治った。', reading: 'びょうきがなおった。', meaning: 'Bệnh đã khỏi.' }] },
  { id: 'n4-azukeru', word: '預ける', reading: 'あずける', romaji: 'azukeru', meaning: 'Gửi, ký gửi', hanViet: 'DỰ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động', 'Kinh tế'],
    examples: [{ jp: '銀行にお金を預ける。', reading: 'ぎんこうにおかねをあずける。', meaning: 'Gửi tiền ngân hàng.' }],
    related: [{ word: '預かる', reading: 'あずかる', meaning: 'Giữ hộ' }] },
  { id: 'n4-tassu', word: '達する', reading: 'たっする', romaji: 'tassuru', meaning: 'Đạt đến', hanViet: 'ĐẠT', type: 'Động từ する', jlpt: 'N4',
    tags: ['Thành tựu'],
    examples: [{ jp: '目標に達する。', reading: 'もくひょうにたっする。', meaning: 'Đạt đến mục tiêu.' }] },

  // ═══════════════ BỔ SUNG — DANH TỪ N4 ═══════════════
  { id: 'n4-seiji', word: '政治', reading: 'せいじ', romaji: 'seiji', meaning: 'Chính trị', hanViet: 'CHÍNH TRỊ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội'],
    examples: [{ jp: '政治に興味がある。', reading: 'せいじにきょうみがある。', meaning: 'Có hứng thú với chính trị.' }],
    phrases: [{ word: '政治家', reading: 'せいじか', meaning: 'Chính trị gia' }] },
  { id: 'n4-kyouiku', word: '教育', reading: 'きょういく', romaji: 'kyouiku', meaning: 'Giáo dục', hanViet: 'GIÁO DỤC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội', 'Học tập'],
    examples: [{ jp: '教育が大切だ。', reading: 'きょういくがたいせつだ。', meaning: 'Giáo dục rất quan trọng.' }] },
  { id: 'n4-koutsuu', word: '交通', reading: 'こうつう', romaji: 'koutsuu', meaning: 'Giao thông', hanViet: 'GIAO THÔNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Di chuyển', 'Xã hội'],
    examples: [{ jp: '交通が便利だ。', reading: 'こうつうがべんりだ。', meaning: 'Giao thông thuận tiện.' }],
    phrases: [{ word: '交通事故', reading: 'こうつうじこ', meaning: 'Tai nạn giao thông' }] },
  { id: 'n4-sangyou', word: '産業', reading: 'さんぎょう', romaji: 'sangyou', meaning: 'Công nghiệp, ngành', hanViet: 'SẢN NGHIỆP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kinh tế', 'Xã hội'],
    examples: [{ jp: '産業が発展する。', reading: 'さんぎょうがはってんする。', meaning: 'Công nghiệp phát triển.' }] },
  { id: 'n4-jinkou', word: '人口', reading: 'じんこう', romaji: 'jinkou', meaning: 'Dân số', hanViet: 'NHÂN KHẨU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội'],
    examples: [{ jp: '日本の人口は減っている。', reading: 'にほんのじんこうはへっている。', meaning: 'Dân số Nhật đang giảm.' }] },
  { id: 'n4-heiwa', word: '平和', reading: 'へいわ', romaji: 'heiwa', meaning: 'Hòa bình', hanViet: 'BÌNH HÒA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội', 'Thế giới'],
    examples: [{ jp: '世界平和を願う。', reading: 'せかいへいわをねがう。', meaning: 'Cầu mong hòa bình thế giới.' }],
    antonyms: [{ word: '戦争', reading: 'せんそう', meaning: 'Chiến tranh' }] },
  { id: 'n4-sensou', word: '戦争', reading: 'せんそう', romaji: 'sensou', meaning: 'Chiến tranh', hanViet: 'CHIẾN TRANH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội', 'Thế giới'],
    examples: [{ jp: '戦争が起きた。', reading: 'せんそうがおきた。', meaning: 'Chiến tranh nổ ra.' }] },
  { id: 'n4-houritsu', word: '法律', reading: 'ほうりつ', romaji: 'houritsu', meaning: 'Pháp luật', hanViet: 'PHÁP LUẬT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội', 'Pháp luật'],
    examples: [{ jp: '法律を守る。', reading: 'ほうりつをまもる。', meaning: 'Tuân thủ pháp luật.' }] },
  { id: 'n4-kenkou', word: '健康', reading: 'けんこう', romaji: 'kenkou', meaning: 'Sức khỏe', hanViet: 'KIỆN KHANG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Y tế', 'Cuộc sống'],
    examples: [{ jp: '健康が一番大切だ。', reading: 'けんこうがいちばんたいせつだ。', meaning: 'Sức khỏe là quan trọng nhất.' }] },
  { id: 'n4-shumi', word: '趣味', reading: 'しゅみ', romaji: 'shumi', meaning: 'Sở thích', hanViet: 'THÚ VỊ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giải trí', 'Cuộc sống'],
    examples: [{ jp: '趣味は読書です。', reading: 'しゅみはどくしょです。', meaning: 'Sở thích là đọc sách.' }] },
  { id: 'n4-kankoukyaku', word: '観光', reading: 'かんこう', romaji: 'kankou', meaning: 'Du lịch, tham quan', hanViet: 'QUAN QUANG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch'],
    examples: [{ jp: '観光地を訪れる。', reading: 'かんこうちをおとずれる。', meaning: 'Thăm địa điểm du lịch.' }],
    phrases: [{ word: '観光客', reading: 'かんこうきゃく', meaning: 'Khách du lịch' }] },
  { id: 'n4-shousetsu', word: '小説', reading: 'しょうせつ', romaji: 'shousetsu', meaning: 'Tiểu thuyết', hanViet: 'TIỂU THUYẾT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giải trí', 'Văn hóa'],
    examples: [{ jp: '小説を読む。', reading: 'しょうせつをよむ。', meaning: 'Đọc tiểu thuyết.' }] },
  { id: 'n4-shokugyou', word: '職業', reading: 'しょくぎょう', romaji: 'shokugyou', meaning: 'Nghề nghiệp', hanViet: 'CHỨC NGHIỆP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: 'ご職業は何ですか？', reading: 'ごしょくぎょうはなんですか？', meaning: 'Nghề nghiệp của bạn là gì?' }] },
  { id: 'n4-kyuuryou', word: '給料', reading: 'きゅうりょう', romaji: 'kyuuryou', meaning: 'Lương', hanViet: 'CẤP LIỆU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc', 'Kinh tế'],
    examples: [{ jp: '給料が上がった。', reading: 'きゅうりょうがあがった。', meaning: 'Lương tăng.' }] },
  { id: 'n4-kaigi', word: '会議', reading: 'かいぎ', romaji: 'kaigi', meaning: 'Cuộc họp', hanViet: 'HỘI NGHỊ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc', 'Giao tiếp'],
    examples: [{ jp: '会議に出る。', reading: 'かいぎにでる。', meaning: 'Tham dự cuộc họp.' }] },
  { id: 'n4-seifu', word: '政府', reading: 'せいふ', romaji: 'seifu', meaning: 'Chính phủ', hanViet: 'CHÍNH PHỦ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội', 'Chính trị'],
    examples: [{ jp: '政府が決める。', reading: 'せいふがきめる。', meaning: 'Chính phủ quyết định.' }] },
  { id: 'n4-shizen2', word: '自然', reading: 'しぜん', romaji: 'shizen', meaning: 'Thiên nhiên', hanViet: 'TỰ NHIÊN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '自然を楽しむ。', reading: 'しぜんをたのしむ。', meaning: 'Tận hưởng thiên nhiên.' }] },
  { id: 'n4-jishin', word: '地震', reading: 'じしん', romaji: 'jishin', meaning: 'Động đất', hanViet: 'ĐỊA CHẤN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên', 'Thiên tai'],
    examples: [{ jp: '地震が起きた。', reading: 'じしんがおきた。', meaning: 'Xảy ra động đất.' }] },
  { id: 'n4-kaji', word: '火事', reading: 'かじ', romaji: 'kaji', meaning: 'Hỏa hoạn', hanViet: 'HỎA SỰ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thiên tai', 'Nguy hiểm'],
    examples: [{ jp: '火事が起きた。', reading: 'かじがおきた。', meaning: 'Xảy ra hỏa hoạn.' }] },
  { id: 'n4-kinou2', word: '機能', reading: 'きのう', romaji: 'kinou', meaning: 'Chức năng', hanViet: 'CƠ NĂNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công nghệ'],
    examples: [{ jp: 'この機能は便利だ。', reading: 'このきのうはべんりだ。', meaning: 'Chức năng này tiện lợi.' }] },

  // ═══════════════ BỔ SUNG — TÍNH TỪ N4 ═══════════════
  { id: 'n4-tadashii', word: '正しい', reading: 'ただしい', romaji: 'tadashii', meaning: 'Đúng, chính xác', hanViet: 'CHÍNH', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Miêu tả', 'Tư duy'],
    examples: [{ jp: '正しい答え。', reading: 'ただしいこたえ。', meaning: 'Câu trả lời đúng.' }],
    antonyms: [{ word: '間違い', reading: 'まちがい', meaning: 'Sai' }] },
  { id: 'n4-kudaranai', word: 'くだらない', reading: 'くだらない', romaji: 'kudaranai', meaning: 'Vô vị, nhảm nhí', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Cảm xúc', 'Miêu tả'],
    examples: [{ jp: 'くだらない話。', reading: 'くだらないはなし。', meaning: 'Câu chuyện nhảm nhí.' }] },
  { id: 'n4-uzushii', word: 'まぶしい', reading: 'まぶしい', romaji: 'mabushii', meaning: 'Chói', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Giác quan'],
    examples: [{ jp: '日差しがまぶしい。', reading: 'ひざしがまぶしい。', meaning: 'Ánh nắng chói.' }] },
  { id: 'n4-sukunai', word: '少ない', reading: 'すくない', romaji: 'sukunai', meaning: 'Ít', hanViet: 'THIỂU', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Số lượng'],
    examples: [{ jp: '人が少ない。', reading: 'ひとがすくない。', meaning: 'Ít người.' }],
    antonyms: [{ word: '多い', reading: 'おおい', meaning: 'Nhiều' }] },
  { id: 'n4-ooi', word: '多い', reading: 'おおい', romaji: 'ooi', meaning: 'Nhiều', hanViet: 'ĐA', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Số lượng'],
    examples: [{ jp: '日本は人が多い。', reading: 'にほんはひとがおおい。', meaning: 'Nhật Bản đông người.' }] },
  { id: 'n4-fukái', word: '深い', reading: 'ふかい', romaji: 'fukai', meaning: 'Sâu', hanViet: 'THÂM', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Miêu tả', 'Kích thước'],
    examples: [{ jp: '深い川。', reading: 'ふかいかわ。', meaning: 'Sông sâu.' }],
    antonyms: [{ word: '浅い', reading: 'あさい', meaning: 'Nông, cạn' }] },
  { id: 'n4-asai', word: '浅い', reading: 'あさい', romaji: 'asai', meaning: 'Nông, cạn', hanViet: 'THIỂN', type: 'Tính từ -i', jlpt: 'N4',
    tags: ['Miêu tả', 'Kích thước'],
    examples: [{ jp: '浅い海。', reading: 'あさいうみ。', meaning: 'Biển nông.' }] },
  { id: 'n4-majime', word: '真面目', reading: 'まじめ', romaji: 'majime', meaning: 'Nghiêm túc, chăm chỉ', hanViet: 'CHÂN DIỆN MỤC', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Tính cách'],
    examples: [{ jp: '真面目な学生。', reading: 'まじめながくせい。', meaning: 'Học sinh chăm chỉ.' }] },
  { id: 'n4-rippa', word: '立派', reading: 'りっぱ', romaji: 'rippa', meaning: 'Tuyệt vời, đẹp đẽ', hanViet: 'LẬP PHÁI', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Miêu tả', 'Khen ngợi'],
    examples: [{ jp: '立派な建物。', reading: 'りっぱなたてもの。', meaning: 'Tòa nhà đẹp đẽ.' }] },
  { id: 'n4-teinei', word: '丁寧', reading: 'ていねい', romaji: 'teinei', meaning: 'Lịch sự, cẩn thận', hanViet: 'ĐINH NINH', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Giao tiếp', 'Tính cách'],
    examples: [{ jp: '丁寧に話す。', reading: 'ていねいにはなす。', meaning: 'Nói lịch sự.' }] },
  { id: 'n4-bimyou', word: '微妙', reading: 'びみょう', romaji: 'bimyou', meaning: 'Tế nhị, đáng ngờ', hanViet: 'VI DIỆU', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Miêu tả', 'Cảm xúc'],
    examples: [{ jp: '微妙な問題。', reading: 'びみょうなもんだい。', meaning: 'Vấn đề tế nhị.' }] },
  { id: 'n4-yutaka', word: '豊か', reading: 'ゆたか', romaji: 'yutaka', meaning: 'Phong phú, giàu có', hanViet: 'PHONG', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Miêu tả', 'Kinh tế'],
    examples: [{ jp: '豊かな国。', reading: 'ゆたかなくに。', meaning: 'Đất nước giàu có.' }] },
  { id: 'n4-sawayaka', word: '爽やか', reading: 'さわやか', romaji: 'sawayaka', meaning: 'Sảng khoái, mát mẻ', hanViet: 'SẢNG', type: 'Tính từ -na', jlpt: 'N4',
    tags: ['Cảm xúc', 'Thời tiết'],
    examples: [{ jp: '爽やかな朝。', reading: 'さわやかなあさ。', meaning: 'Buổi sáng mát mẻ.' }] },

  // ═══════════════ BỔ SUNG — PHÓ TỪ & KHÁC N4 ═══════════════
  { id: 'n4-daitai', word: '大体', reading: 'だいたい', romaji: 'daitai', meaning: 'Đại khái, khoảng', hanViet: 'ĐẠI THỂ', type: 'Phó từ', jlpt: 'N4',
    tags: ['Mức độ'],
    examples: [{ jp: '大体分かった。', reading: 'だいたいわかった。', meaning: 'Hiểu đại khái rồi.' }] },
  { id: 'n4-sukkari', word: 'すっかり', reading: 'すっかり', romaji: 'sukkari', meaning: 'Hoàn toàn', type: 'Phó từ', jlpt: 'N4',
    tags: ['Mức độ'],
    examples: [{ jp: 'すっかり忘れた。', reading: 'すっかりわすれた。', meaning: 'Quên sạch.' }] },
  { id: 'n4-nantoka', word: 'なんとか', reading: 'なんとか', romaji: 'nantoka', meaning: 'Bằng cách nào đó', type: 'Phó từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: 'なんとか間に合った。', reading: 'なんとかまにあった。', meaning: 'Bằng cách nào đó đã kịp.' }] },
  { id: 'n4-tokuni', word: '特に', reading: 'とくに', romaji: 'tokuni', meaning: 'Đặc biệt', hanViet: 'ĐẶC', type: 'Phó từ', jlpt: 'N4',
    tags: ['Mức độ'],
    examples: [{ jp: '特に好きな食べ物。', reading: 'とくにすきなたべもの。', meaning: 'Thức ăn đặc biệt thích.' }] },
  { id: 'n4-chanto', word: 'ちゃんと', reading: 'ちゃんと', romaji: 'chanto', meaning: 'Đàng hoàng, đúng cách', type: 'Phó từ', jlpt: 'N4',
    tags: ['Giao tiếp', 'Miêu tả'],
    examples: [{ jp: 'ちゃんと勉強しなさい。', reading: 'ちゃんとべんきょうしなさい。', meaning: 'Hãy học cho đàng hoàng.' }] },
  { id: 'n4-sugu', word: 'すぐ', reading: 'すぐ', romaji: 'sugu', meaning: 'Ngay lập tức', type: 'Phó từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: 'すぐ来てください。', reading: 'すぐきてください。', meaning: 'Xin đến ngay.' }] },
  { id: 'n4-sorosoro', word: 'そろそろ', reading: 'そろそろ', romaji: 'sorosoro', meaning: 'Sắp, gần đến lúc', type: 'Phó từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: 'そろそろ帰りましょう。', reading: 'そろそろかえりましょう。', meaning: 'Sắp đến lúc về rồi.' }] },
  { id: 'n4-naruhodo', word: 'なるほど', reading: 'なるほど', romaji: 'naruhodo', meaning: 'À ra vậy, quả thật', type: 'Cảm thán từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: 'なるほど、わかりました。', reading: 'なるほど、わかりました。', meaning: 'À ra vậy, hiểu rồi.' }] },
];

// ── from: vocabN4_Part2.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB N4 Part 2 — Hiragana + Katakana words (N4 expansion batch 1/4)
// ~135 entries — Greetings, adverbs, loanwords, basic expressions
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_N4_PART2: VocabEntry[] = [
  // ═══════════════ THÁN TỪ / PHÓ TỪ ═══════════════
  { id: 'n4-a', word: 'あ', reading: 'あ', romaji: 'a', meaning: 'À, ồ (thán từ ngạc nhiên)', type: 'Thán từ', jlpt: 'N4',
    tags: ['Thán từ'],
    examples: [{ jp: 'あ、忘れてた！', reading: 'あ、わすれてた！', meaning: 'À, tôi quên mất!' }] },

  { id: 'n4-aa', word: 'ああ', reading: 'ああ', romaji: 'aa', meaning: 'Ồ, à (đồng ý/hiểu)', type: 'Thán từ', jlpt: 'N4',
    tags: ['Thán từ'],
    examples: [{ jp: 'ああ、そうですか。', reading: 'ああ、そうですか。', meaning: 'Ồ, vậy à.' }] },

  { id: 'n4-un', word: 'うん', reading: 'うん', romaji: 'un', meaning: 'Ừ, ờ (đồng ý thân mật)', type: 'Thán từ', jlpt: 'N4',
    tags: ['Thán từ', 'Thân mật'],
    examples: [{ jp: 'うん、分かった。', reading: 'うん、わかった。', meaning: 'Ừ, hiểu rồi.' }] },

  { id: 'n4-kou', word: 'こう', reading: 'こう', romaji: 'kou', meaning: 'Như thế này', type: 'Phó từ', jlpt: 'N4',
    tags: ['Chỉ thị'],
    examples: [{ jp: 'こうすればいい。', reading: 'こうすればいい。', meaning: 'Làm thế này là được.' }] },

  { id: 'n4-sou-adv', word: 'そう', reading: 'そう', romaji: 'sou', meaning: 'Như vậy, đúng thế', type: 'Phó từ', jlpt: 'N4',
    tags: ['Chỉ thị'],
    examples: [{ jp: 'そう思います。', reading: 'そうおもいます。', meaning: 'Tôi nghĩ vậy.' }] },

  { id: 'n4-anna', word: 'あんな', reading: 'あんな', romaji: 'anna', meaning: 'Như thế kia (xa)', type: 'Liên thể từ', jlpt: 'N4',
    tags: ['Chỉ thị'],
    examples: [{ jp: 'あんな所に行きたくない。', reading: 'あんなところにいきたくない。', meaning: 'Không muốn đi chỗ như thế kia.' }] },

  { id: 'n4-sonnani', word: 'そんなに', reading: 'そんなに', romaji: 'sonnani', meaning: 'Đến mức ấy, không đến nỗi', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'そんなに難しくないです。', reading: 'そんなにむずかしくないです。', meaning: 'Không khó đến thế đâu.' }] },

  { id: 'n4-sonna', word: 'そんな', reading: 'そんな', romaji: 'sonna', meaning: 'Như thế, loại đó', type: 'Liên thể từ', jlpt: 'N4',
    tags: ['Chỉ thị'],
    examples: [{ jp: 'そんなことは言わないで。', reading: 'そんなことはいわないで。', meaning: 'Đừng nói những chuyện như thế.' }] },

  { id: 'n4-kitto', word: 'きっと', reading: 'きっと', romaji: 'kitto', meaning: 'Chắc chắn, nhất định', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'きっと成功します。', reading: 'きっとせいこうします。', meaning: 'Nhất định sẽ thành công.' }] },

  { id: 'n4-shikkari', word: 'しっかり', reading: 'しっかり', romaji: 'shikkari', meaning: 'Chắc chắn, vững vàng', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'しっかり勉強してください。', reading: 'しっかりべんきょうしてください。', meaning: 'Hãy học hành chắc chắn.' }] },

  { id: 'n4-shibaraku', word: 'しばらく', reading: 'しばらく', romaji: 'shibaraku', meaning: 'Một lúc, lâu lắm', type: 'Phó từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: 'しばらくお待ちください。', reading: 'しばらくおまちください。', meaning: 'Xin đợi một lúc.' }] },

  { id: 'n4-zenzen', word: 'ぜんぜん', reading: 'ぜんぜん', romaji: 'zenzen', meaning: 'Hoàn toàn (không)', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'ぜんぜん分かりません。', reading: 'ぜんぜんわかりません。', meaning: 'Hoàn toàn không hiểu.' }] },

  { id: 'n4-taitei', word: 'たいてい', reading: 'たいてい', romaji: 'taitei', meaning: 'Thường, đại khái', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'たいてい七時に起きます。', reading: 'たいていしちじにおきます。', meaning: 'Thường dậy lúc 7 giờ.' }] },

  { id: 'n4-tamani', word: 'たまに', reading: 'たまに', romaji: 'tamani', meaning: 'Thỉnh thoảng', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ', 'Tần suất'],
    examples: [{ jp: 'たまに映画を見ます。', reading: 'たまにえいがをみます。', meaning: 'Thỉnh thoảng xem phim.' }] },

  { id: 'n4-chittomo', word: 'ちっとも', reading: 'ちっとも', romaji: 'chittomo', meaning: 'Chẳng chút nào', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'ちっとも面白くない。', reading: 'ちっともおもしろくない。', meaning: 'Chẳng thú vị chút nào.' }] },

  { id: 'n4-dondon', word: 'どんどん', reading: 'どんどん', romaji: 'dondon', meaning: 'Liên tục, ào ào', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ', 'Tượng thanh'],
    examples: [{ jp: 'どんどん上手になっている。', reading: 'どんどんじょうずになっている。', meaning: 'Giỏi lên liên tục.' }] },

  { id: 'n4-narubeku', word: 'なるべく', reading: 'なるべく', romaji: 'narubeku', meaning: 'Cố gắng hết sức, càng… càng', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'なるべく早く来てください。', reading: 'なるべくはやくきてください。', meaning: 'Hãy cố đến sớm nhất.' }] },

  { id: 'n4-hotondo', word: 'ほとんど', reading: 'ほとんど', romaji: 'hotondo', meaning: 'Hầu hết, gần như', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'ほとんど終わりました。', reading: 'ほとんどおわりました。', meaning: 'Gần xong rồi.' }] },

  { id: 'n4-hodo', word: 'ほど', reading: 'ほど', romaji: 'hodo', meaning: 'Khoảng, mức, chừng', type: 'Trợ từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: '死ぬほど疲れた。', reading: 'しぬほどつかれた。', meaning: 'Mệt muốn chết.' }] },

  { id: 'n4-mousugu', word: 'もうすぐ', reading: 'もうすぐ', romaji: 'mousugu', meaning: 'Sắp, gần tới', type: 'Phó từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: 'もうすぐ春ですね。', reading: 'もうすぐはるですね。', meaning: 'Sắp xuân rồi nhỉ.' }] },

  { id: 'n4-mochiron', word: 'もちろん', reading: 'もちろん', romaji: 'mochiron', meaning: 'Tất nhiên, đương nhiên', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'もちろん行きます。', reading: 'もちろんいきます。', meaning: 'Tất nhiên sẽ đi.' }] },

  { id: 'n4-mottomo', word: 'もっとも', reading: 'もっとも', romaji: 'mottomo', meaning: 'Nhất, hợp lý; tuy nhiên', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'もっとも大切なことです。', reading: 'もっともたいせつなことです。', meaning: 'Điều quan trọng nhất.' }] },

  { id: 'n4-yatto', word: 'やっと', reading: 'やっと', romaji: 'yatto', meaning: 'Cuối cùng cũng, rốt cuộc', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'やっと終わった！', reading: 'やっとおわった！', meaning: 'Cuối cùng cũng xong!' }] },

  { id: 'n4-dekirudake', word: 'できるだけ', reading: 'できるだけ', romaji: 'dekirudake', meaning: 'Hết khả năng, càng… càng tốt', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'できるだけ早く来てください。', reading: 'できるだけはやくきてください。', meaning: 'Hãy đến sớm nhất có thể.' }] },

  { id: 'n4-sorehodo', word: 'それほど', reading: 'それほど', romaji: 'sorehodo', meaning: 'Không đến mức ấy', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'それほど難しくないです。', reading: 'それほどむずかしくないです。', meaning: 'Không khó đến thế.' }] },

  { id: 'n4-dakara', word: 'だから', reading: 'だから', romaji: 'dakara', meaning: 'Vì vậy, cho nên', type: 'Liên từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: 'だから言ったでしょう。', reading: 'だからいったでしょう。', meaning: 'Thế nên tôi đã nói rồi mà.' }] },

  { id: 'n4-sorede', word: 'それで', reading: 'それで', romaji: 'sorede', meaning: 'Rồi sau đó, vì vậy', type: 'Liên từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: 'それでどうしましたか。', reading: 'それでどうしましたか。', meaning: 'Rồi sau đó thế nào?' }] },

  { id: 'n4-soreni', word: 'それに', reading: 'それに', romaji: 'soreni', meaning: 'Hơn nữa, ngoài ra', type: 'Liên từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: 'それに彼は優しいです。', reading: 'それにかれはやさしいです。', meaning: 'Hơn nữa anh ấy tốt bụng.' }] },

  { id: 'n4-korekara', word: 'これから', reading: 'これから', romaji: 'korekara', meaning: 'Từ bây giờ, sắp tới', type: 'Phó từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: 'これから頑張ります。', reading: 'これからがんばります。', meaning: 'Từ giờ sẽ cố gắng.' }] },

  { id: 'n4-konoaida', word: 'このあいだ', reading: 'このあいだ', romaji: 'konoaida', meaning: 'Hôm nọ, mới đây', type: 'Phó từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: 'このあいだ映画を見ました。', reading: 'このあいだえいがをみました。', meaning: 'Hôm nọ đã xem phim.' }] },

  { id: 'n4-konogoro', word: 'このごろ', reading: 'このごろ', romaji: 'konogoro', meaning: 'Gần đây, dạo này', type: 'Phó từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: 'このごろ忙しいです。', reading: 'このごろいそがしいです。', meaning: 'Dạo này bận.' }] },

  { id: 'n4-sakki', word: 'さっき', reading: 'さっき', romaji: 'sakki', meaning: 'Vừa nãy, lúc nãy', type: 'Phó từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: 'さっき電話がありました。', reading: 'さっきでんわがありました。', meaning: 'Lúc nãy có điện thoại.' }] },

  { id: 'n4-suruto', word: 'すると', reading: 'すると', romaji: 'suruto', meaning: 'Rồi thì, thế rồi', type: 'Liên từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: 'ドアを開けた。するとネコが入ってきた。', reading: 'ドアをあけた。するとネコがはいってきた。', meaning: 'Mở cửa ra. Thế rồi mèo chạy vào.' }] },

  { id: 'n4-keredo', word: 'けれど', reading: 'けれど', romaji: 'keredo', meaning: 'Nhưng mà, tuy nhiên', type: 'Liên từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: '行きたいけれど、時間がない。', reading: 'いきたいけれど、じかんがない。', meaning: 'Muốn đi nhưng không có thời gian.' }] },

  { id: 'n4-keredomo', word: 'けれども', reading: 'けれども', romaji: 'keredomo', meaning: 'Nhưng mà, tuy nhiên (lịch sự)', type: 'Liên từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: '難しいけれども、面白いです。', reading: 'むずかしいけれども、おもしろいです。', meaning: 'Tuy khó nhưng thú vị.' }] },

  { id: 'n4-matawa', word: 'または', reading: 'または', romaji: 'matawa', meaning: 'Hoặc, hay là', type: 'Liên từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: 'メールまたは電話で連絡してください。', reading: 'メールまたはでんわでれんらくしてください。', meaning: 'Liên lạc bằng mail hoặc điện thoại.' }] },

  // ═══════════════ DANH TỪ HIRAGANA ═══════════════
  { id: 'n4-aisatsu', word: 'あいさつ', reading: 'あいさつ', romaji: 'aisatsu', meaning: 'Chào hỏi', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: 'あいさつは大切です。', reading: 'あいさつはたいせつです。', meaning: 'Chào hỏi rất quan trọng.' }] },

  { id: 'n4-uso', word: 'うそ', reading: 'うそ', romaji: 'uso', meaning: 'Nói dối, lời nói dối', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hàng ngày'],
    examples: [{ jp: 'うそをつかないで。', reading: 'うそをつかないで。', meaning: 'Đừng nói dối.' }] },

  { id: 'n4-uchi', word: 'うち', reading: 'うち', romaji: 'uchi', meaning: 'Nhà tôi, trong khi', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nhà'],
    examples: [{ jp: 'うちに帰りましょう。', reading: 'うちにかえりましょう。', meaning: 'Về nhà thôi.' }] },

  { id: 'n4-okage', word: 'おかげ', reading: 'おかげ', romaji: 'okage', meaning: 'Nhờ có, ơn', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: 'あなたのおかげで合格しました。', reading: 'あなたのおかげでごうかくしました。', meaning: 'Nhờ bạn mà tôi đỗ.' }] },

  { id: 'n4-otsuri', word: 'おつり', reading: 'おつり', romaji: 'otsuri', meaning: 'Tiền thối', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mua sắm'],
    examples: [{ jp: 'おつりはいりません。', reading: 'おつりはいりません。', meaning: 'Không cần tiền thối.' }] },

  { id: 'n4-omocha', word: 'おもちゃ', reading: 'おもちゃ', romaji: 'omocha', meaning: 'Đồ chơi', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trẻ em'],
    examples: [{ jp: 'おもちゃを買ってあげた。', reading: 'おもちゃをかってあげた。', meaning: 'Đã mua đồ chơi cho.' }] },

  { id: 'n4-odori', word: '踊り', reading: 'おどり', romaji: 'odori', meaning: 'Điệu nhảy, múa', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nghệ thuật'],
    examples: [{ jp: '踊りが上手です。', reading: 'おどりがじょうずです。', meaning: 'Nhảy giỏi.' }] },

  { id: 'n4-kakkou', word: 'かっこう', reading: 'かっこう', romaji: 'kakkou', meaning: 'Hình dáng, vẻ ngoài', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mô tả'],
    examples: [{ jp: 'かっこうがいいですね。', reading: 'かっこうがいいですね。', meaning: 'Trông ngầu nhỉ.' }] },

  { id: 'n4-kega', word: 'けが', reading: 'けが', romaji: 'kega', meaning: 'Vết thương, bị thương', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sức khỏe'],
    examples: [{ jp: 'けがをしました。', reading: 'けがをしました。', meaning: 'Bị thương rồi.' }] },

  { id: 'n4-kenka', word: 'けんか', reading: 'けんか', romaji: 'kenka', meaning: 'Cãi nhau, đánh nhau', type: 'Danh từ', jlpt: 'N4',
    tags: ['Quan hệ'],
    examples: [{ jp: '友達とけんかした。', reading: 'ともだちとけんかした。', meaning: 'Cãi nhau với bạn.' }] },

  { id: 'n4-koto', word: 'こと', reading: 'こと', romaji: 'koto', meaning: 'Việc, điều, sự', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: '大切なことがあります。', reading: 'たいせつなことがあります。', meaning: 'Có chuyện quan trọng.' }] },

  { id: 'n4-gochisou', word: 'ごちそう', reading: 'ごちそう', romaji: 'gochisou', meaning: 'Bữa tiệc, đãi', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: 'ごちそうさまでした。', reading: 'ごちそうさまでした。', meaning: 'Cảm ơn bữa ăn.' }] },

  { id: 'n4-gomi', word: 'ごみ', reading: 'ごみ', romaji: 'gomi', meaning: 'Rác', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sinh hoạt'],
    examples: [{ jp: 'ごみを捨ててください。', reading: 'ごみをすててください。', meaning: 'Hãy đổ rác.' }] },

  { id: 'n4-jama', word: 'じゃま', reading: 'じゃま', romaji: 'jama', meaning: 'Cản trở, phiền', hanViet: 'TÀ MA', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Mô tả'],
    examples: [{ jp: 'お邪魔します。', reading: 'おじゃまします。', meaning: 'Xin phép vào (nhà).' }] },

  { id: 'n4-suri', word: 'すり', reading: 'すり', romaji: 'suri', meaning: 'Móc túi', type: 'Danh từ', jlpt: 'N4',
    tags: ['An toàn'],
    examples: [{ jp: 'すりに気をつけてください。', reading: 'すりにきをつけてください。', meaning: 'Hãy cẩn thận móc túi.' }] },

  { id: 'n4-tsuki', word: 'つき', reading: 'つき', romaji: 'tsuki', meaning: 'Trăng, mặt trăng', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '今夜の月はきれいです。', reading: 'こんやのつきはきれいです。', meaning: 'Trăng đêm nay đẹp.' }] },

  { id: 'n4-tsumori', word: 'つもり', reading: 'つもり', romaji: 'tsumori', meaning: 'Dự định, ý định', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: '来年日本に行くつもりです。', reading: 'らいねんにほんにいくつもりです。', meaning: 'Dự định năm sau đi Nhật.' }] },

  { id: 'n4-tokoya', word: 'とこや', reading: 'とこや', romaji: 'tokoya', meaning: 'Tiệm cắt tóc', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: 'とこやに行ってきます。', reading: 'とこやにいってきます。', meaning: 'Tôi đi cắt tóc.' }] },

  { id: 'n4-nioi', word: 'におい', reading: 'におい', romaji: 'nioi', meaning: 'Mùi, hương', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giác quan'],
    examples: [{ jp: 'いいにおいがする。', reading: 'いいにおいがする。', meaning: 'Có mùi thơm.' }] },

  { id: 'n4-nedan', word: 'ねだん', reading: 'ねだん', romaji: 'nedan', meaning: 'Giá cả', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mua sắm'],
    examples: [{ jp: 'このねだんは高いです。', reading: 'このねだんはたかいです。', meaning: 'Giá này đắt.' }] },

  { id: 'n4-nodo', word: 'のど', reading: 'のど', romaji: 'nodo', meaning: 'Cổ họng', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cơ thể'],
    examples: [{ jp: 'のどが渇いた。', reading: 'のどがかわいた。', meaning: 'Khát nước quá.' }] },

  { id: 'n4-hazu', word: 'はず', reading: 'はず', romaji: 'hazu', meaning: 'Lẽ ra phải, chắc là', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: '彼は来るはずです。', reading: 'かれはくるはずです。', meaning: 'Lẽ ra anh ấy phải đến.' }] },

  { id: 'n4-hige', word: 'ひげ', reading: 'ひげ', romaji: 'hige', meaning: 'Râu', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cơ thể'],
    examples: [{ jp: 'ひげを剃ります。', reading: 'ひげをそります。', meaning: 'Cạo râu.' }] },

  { id: 'n4-budou', word: 'ぶどう', reading: 'ぶどう', romaji: 'budou', meaning: 'Nho', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trái cây'],
    examples: [{ jp: 'ぶどうが好きです。', reading: 'ぶどうがすきです。', meaning: 'Thích nho.' }] },

  // ═══════════════ TÍNH TỪ / TRẠNG THÁI ═══════════════
  { id: 'n4-umai', word: 'うまい', reading: 'うまい', romaji: 'umai', meaning: 'Ngon, giỏi', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Thức ăn', 'Mô tả'],
    examples: [{ jp: 'このラーメンはうまい。', reading: 'このラーメンはうまい。', meaning: 'Mì ramen này ngon.' }] },

  { id: 'n4-okashii', word: 'おかしい', reading: 'おかしい', romaji: 'okashii', meaning: 'Kỳ lạ, buồn cười', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Mô tả'],
    examples: [{ jp: 'おかしいですね。', reading: 'おかしいですね。', meaning: 'Kỳ lạ nhỉ.' }] },

  { id: 'n4-hidoi', word: 'ひどい', reading: 'ひどい', romaji: 'hidoi', meaning: 'Tệ, khủng khiếp', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: 'ひどい雨ですね。', reading: 'ひどいあめですね。', meaning: 'Mưa to quá nhỉ.' }] },

  { id: 'n4-yoroshii', word: 'よろしい', reading: 'よろしい', romaji: 'yoroshii', meaning: 'Được, tốt (kính ngữ)', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: 'よろしいですか。', reading: 'よろしいですか。', meaning: 'Được chứ ạ?' }] },

  { id: 'n4-dame', word: 'だめ', reading: 'だめ', romaji: 'dame', meaning: 'Không được, vô ích', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: 'ここは写真はだめです。', reading: 'ここはしゃしんはだめです。', meaning: 'Ở đây không được chụp ảnh.' }] },

  { id: 'n4-nesshin', word: 'ねっしん', reading: 'ねっしん', romaji: 'nesshin', meaning: 'Nhiệt tình, chuyên cần', hanViet: 'NHIỆT TÂM', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Tính cách'],
    examples: [{ jp: 'ねっしんに働いています。', reading: 'ねっしんにはたらいています。', meaning: 'Làm việc nhiệt tình.' }] },

  // ═══════════════ KÍNH NGỮ ═══════════════
  { id: 'n4-irassharu', word: 'いらっしゃる', reading: 'いらっしゃる', romaji: 'irassharu', meaning: 'Ở, đi, đến (kính ngữ)', type: 'Động từ nhóm đặc biệt', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: '先生はいらっしゃいますか。', reading: 'せんせいはいらっしゃいますか。', meaning: 'Thầy/cô có ở đây không?' }] },

  { id: 'n4-ukagau', word: 'うかがう', reading: 'うかがう', romaji: 'ukagau', meaning: 'Thăm, hỏi (khiêm nhường)', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: 'お宅にうかがいます。', reading: 'おたくにうかがいます。', meaning: 'Tôi sẽ đến thăm nhà bạn.' }] },

  { id: 'n4-ossharu', word: 'おっしゃる', reading: 'おっしゃる', romaji: 'ossharu', meaning: 'Nói (kính ngữ)', type: 'Động từ nhóm đặc biệt', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: '先生がおっしゃったとおりです。', reading: 'せんせいがおっしゃったとおりです。', meaning: 'Đúng như thầy/cô đã nói.' }] },

  { id: 'n4-oideninaru', word: 'おいでになる', reading: 'おいでになる', romaji: 'oideninaru', meaning: 'Đi, đến, ở (kính ngữ)', type: 'Động từ nhóm đặc biệt', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: '社長はおいでになりますか。', reading: 'しゃちょうはおいでになりますか。', meaning: 'Giám đốc có ở không ạ?' }] },

  { id: 'n4-kudasaru', word: 'くださる', reading: 'くださる', romaji: 'kudasaru', meaning: 'Cho (kính ngữ)', type: 'Động từ nhóm đặc biệt', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: '先生が本をくださいました。', reading: 'せんせいがほんをくださいました。', meaning: 'Thầy cho sách.' }] },

  { id: 'n4-goranninaru', word: 'ごらんになる', reading: 'ごらんになる', romaji: 'goranninaru', meaning: 'Xem (kính ngữ)', type: 'Động từ nhóm đặc biệt', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: 'この写真をごらんになりましたか。', reading: 'このしゃしんをごらんになりましたか。', meaning: 'Ngài đã xem ảnh này chưa?' }] },

  { id: 'n4-gozonji', word: 'ご存じ', reading: 'ごぞんじ', romaji: 'gozonji', meaning: 'Biết (kính ngữ)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: 'ご存じですか。', reading: 'ごぞんじですか。', meaning: 'Ngài có biết không?' }] },

  { id: 'n4-nasaru', word: 'なさる', reading: 'なさる', romaji: 'nasaru', meaning: 'Làm (kính ngữ)', type: 'Động từ nhóm đặc biệt', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: '何をなさいますか。', reading: 'なにをなさいますか。', meaning: 'Ngài sẽ làm gì?' }] },

  { id: 'n4-itadaku', word: 'いただく', reading: 'いただく', romaji: 'itadaku', meaning: 'Nhận, ăn (khiêm nhường)', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: 'いただきます。', reading: 'いただきます。', meaning: 'Tôi xin ăn (trước bữa ăn).' }] },

  // ═══════════════ ĐỘNG TỪ CƠ BẢN ═══════════════
  { id: 'n4-ageru-v', word: 'あげる', reading: 'あげる', romaji: 'ageru', meaning: 'Cho, tặng', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Trao đổi'],
    examples: [{ jp: '友達にプレゼントをあげる。', reading: 'ともだちにプレゼントをあげる。', meaning: 'Tặng quà cho bạn.' }] },

  { id: 'n4-kureru', word: 'くれる', reading: 'くれる', romaji: 'kureru', meaning: 'Cho (tôi), tặng (tôi)', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Trao đổi'],
    examples: [{ jp: '友達が本をくれた。', reading: 'ともだちがほんをくれた。', meaning: 'Bạn cho tôi sách.' }] },

  { id: 'n4-morau', word: 'もらう', reading: 'もらう', romaji: 'morau', meaning: 'Nhận, được cho', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Trao đổi'],
    examples: [{ jp: '友達に本をもらった。', reading: 'ともだちにほんをもらった。', meaning: 'Nhận sách từ bạn.' }] },

  { id: 'n4-ijimeru', word: 'いじめる', reading: 'いじめる', romaji: 'ijimeru', meaning: 'Bắt nạt, quấy rầy', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Quan hệ'],
    examples: [{ jp: 'いじめてはいけません。', reading: 'いじめてはいけません。', meaning: 'Không được bắt nạt.' }] },

  { id: 'n4-kamau', word: 'かまう', reading: 'かまう', romaji: 'kamau', meaning: 'Quan tâm, để ý', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: 'かまいませんよ。', reading: 'かまいませんよ。', meaning: 'Không sao đâu.' }] },

  { id: 'n4-shikaru', word: 'しかる', reading: 'しかる', romaji: 'shikaru', meaning: 'Mắng, la', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '子供を叱りました。', reading: 'こどもをしかりました。', meaning: 'Đã mắng trẻ con.' }] },

  { id: 'n4-homeru', word: 'ほめる', reading: 'ほめる', romaji: 'homeru', meaning: 'Khen', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '先生にほめられました。', reading: 'せんせいにほめられました。', meaning: 'Được thầy khen.' }] },

  { id: 'n4-bikkuri', word: 'びっくり', reading: 'びっくり', romaji: 'bikkuri', meaning: 'Ngạc nhiên, giật mình', type: 'Phó từ', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: 'びっくりしました。', reading: 'びっくりしました。', meaning: 'Tôi bị giật mình.' }] },

  { id: 'n4-mazu', word: 'まず', reading: 'まず', romaji: 'mazu', meaning: 'Trước hết, đầu tiên', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'まず自己紹介をしましょう。', reading: 'まずじこしょうかいをしましょう。', meaning: 'Trước hết hãy tự giới thiệu.' }] },

  { id: 'n4-ippai', word: 'いっぱい', reading: 'いっぱい', romaji: 'ippai', meaning: 'Đầy, nhiều', type: 'Phó từ', jlpt: 'N4',
    tags: ['Số lượng'],
    examples: [{ jp: '人がいっぱいいます。', reading: 'ひとがいっぱいいます。', meaning: 'Đông người quá.' }] },

  { id: 'n4-chan', word: 'ちゃん', reading: 'ちゃん', romaji: 'chan', meaning: 'Hậu tố thân mật (trẻ em/bạn gái)', type: 'Tiếp vĩ từ', jlpt: 'N4',
    tags: ['Xưng hô'],
    examples: [{ jp: 'ゆきちゃん、おはよう！', reading: 'ゆきちゃん、おはよう！', meaning: 'Yuki ơi, chào buổi sáng!' }] },

  // ═══════════════ KATAKANA LOANWORDS ═══════════════
  { id: 'n4-accessory', word: 'アクセサリー', reading: 'アクセサリー', romaji: 'akusesarii', meaning: 'Phụ kiện, trang sức', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mua sắm'],
    examples: [{ jp: 'アクセサリーを買いたい。', reading: 'アクセサリーをかいたい。', meaning: 'Muốn mua phụ kiện.' }] },

  { id: 'n4-asia', word: 'アジア', reading: 'アジア', romaji: 'ajia', meaning: 'Châu Á', type: 'Danh từ', jlpt: 'N4',
    tags: ['Địa lý'],
    examples: [{ jp: 'アジアの国が好きです。', reading: 'アジアのくにがすきです。', meaning: 'Thích các nước châu Á.' }] },

  { id: 'n4-announcer', word: 'アナウンサー', reading: 'アナウンサー', romaji: 'anaunsaa', meaning: 'Phát thanh viên', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nghề nghiệp'],
    examples: [{ jp: 'アナウンサーになりたい。', reading: 'アナウンサーになりたい。', meaning: 'Muốn làm phát thanh viên.' }] },

  { id: 'n4-africa', word: 'アフリカ', reading: 'アフリカ', romaji: 'afurika', meaning: 'Châu Phi', type: 'Danh từ', jlpt: 'N4',
    tags: ['Địa lý'],
    examples: [{ jp: 'アフリカに行きたいです。', reading: 'アフリカにいきたいです。', meaning: 'Muốn đi châu Phi.' }] },

  { id: 'n4-america', word: 'アメリカ', reading: 'アメリカ', romaji: 'amerika', meaning: 'Mỹ, nước Mỹ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Quốc gia'],
    examples: [{ jp: 'アメリカに留学したい。', reading: 'アメリカにりゅうがくしたい。', meaning: 'Muốn du học Mỹ.' }] },

  { id: 'n4-alcohol', word: 'アルコール', reading: 'アルコール', romaji: 'arukooru', meaning: 'Rượu, cồn', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ uống'],
    examples: [{ jp: 'アルコールは飲みません。', reading: 'アルコールはのみません。', meaning: 'Không uống rượu.' }] },

  { id: 'n4-arubaito', word: 'アルバイト', reading: 'アルバイト', romaji: 'arubaito', meaning: 'Làm thêm, part-time', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: 'アルバイトを始めました。', reading: 'アルバイトをはじめました。', meaning: 'Đã bắt đầu làm thêm.' }] },

  { id: 'n4-escalator', word: 'エスカレーター', reading: 'エスカレーター', romaji: 'esukareetaa', meaning: 'Thang cuốn', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tòa nhà'],
    examples: [{ jp: 'エスカレーターで上がります。', reading: 'エスカレーターであがります。', meaning: 'Đi lên bằng thang cuốn.' }] },

  { id: 'n4-ootobai', word: 'オートバイ', reading: 'オートバイ', romaji: 'ootobai', meaning: 'Xe máy', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: 'オートバイで通勤します。', reading: 'オートバイでつうきんします。', meaning: 'Đi làm bằng xe máy.' }] },

  { id: 'n4-curtain', word: 'カーテン', reading: 'カーテン', romaji: 'kaaten', meaning: 'Rèm cửa', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nhà'],
    examples: [{ jp: 'カーテンを閉めてください。', reading: 'カーテンをしめてください。', meaning: 'Hãy kéo rèm.' }] },

  { id: 'n4-gas', word: 'ガス', reading: 'ガス', romaji: 'gasu', meaning: 'Gas, khí đốt', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sinh hoạt'],
    examples: [{ jp: 'ガスを止めてください。', reading: 'ガスをとめてください。', meaning: 'Hãy tắt gas.' }] },

  { id: 'n4-gasoline', word: 'ガソリン', reading: 'ガソリン', romaji: 'gasorin', meaning: 'Xăng', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: 'ガソリンが足りない。', reading: 'ガソリンがたりない。', meaning: 'Thiếu xăng.' }] },

  { id: 'n4-gasstand', word: 'ガソリンスタンド', reading: 'ガソリンスタンド', romaji: 'gasorin sutando', meaning: 'Trạm xăng', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: 'ガソリンスタンドに寄りましょう。', reading: 'ガソリンスタンドによりましょう。', meaning: 'Ghé trạm xăng nào.' }] },

  { id: 'n4-glass', word: 'ガラス', reading: 'ガラス', romaji: 'garasu', meaning: 'Kính, thủy tinh', type: 'Danh từ', jlpt: 'N4',
    tags: ['Vật liệu'],
    examples: [{ jp: 'ガラスが割れました。', reading: 'ガラスがわれました。', meaning: 'Kính bị vỡ.' }] },

  { id: 'n4-cake', word: 'ケーキ', reading: 'ケーキ', romaji: 'keeki', meaning: 'Bánh ngọt', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: 'ケーキを食べましょう。', reading: 'ケーキをたべましょう。', meaning: 'Ăn bánh thôi.' }] },

  { id: 'n4-concert', word: 'コンサート', reading: 'コンサート', romaji: 'konsaato', meaning: 'Buổi hòa nhạc', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giải trí'],
    examples: [{ jp: 'コンサートに行きました。', reading: 'コンサートにいきました。', meaning: 'Đã đi xem hòa nhạc.' }] },

  { id: 'n4-computer', word: 'コンピューター', reading: 'コンピューター', romaji: 'konpyuutaa', meaning: 'Máy tính', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công nghệ'],
    examples: [{ jp: 'コンピューターを使います。', reading: 'コンピューターをつかいます。', meaning: 'Sử dụng máy tính.' }] },

  { id: 'n4-salad', word: 'サラダ', reading: 'サラダ', romaji: 'sarada', meaning: 'Salad', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: 'サラダを食べます。', reading: 'サラダをたべます。', meaning: 'Ăn salad.' }] },

  { id: 'n4-sandal', word: 'サンダル', reading: 'サンダル', romaji: 'sandaru', meaning: 'Dép sandal', type: 'Danh từ', jlpt: 'N4',
    tags: ['Quần áo'],
    examples: [{ jp: 'サンダルを履いています。', reading: 'サンダルをはいています。', meaning: 'Đang mang sandal.' }] },

  { id: 'n4-sandwich', word: 'サンドイッチ', reading: 'サンドイッチ', romaji: 'sandoicchi', meaning: 'Bánh sandwich', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: 'サンドイッチを作りました。', reading: 'サンドイッチをつくりました。', meaning: 'Đã làm sandwich.' }] },

  { id: 'n4-jam', word: 'ジャム', reading: 'ジャム', romaji: 'jamu', meaning: 'Mứt', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: 'パンにジャムを塗ります。', reading: 'パンにジャムをぬります。', meaning: 'Phết mứt lên bánh mì.' }] },

  { id: 'n4-screen', word: 'スクリーン', reading: 'スクリーン', romaji: 'sukuriin', meaning: 'Màn hình', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công nghệ'],
    examples: [{ jp: 'スクリーンを見てください。', reading: 'スクリーンをみてください。', meaning: 'Hãy nhìn màn hình.' }] },

  { id: 'n4-stereo', word: 'ステレオ', reading: 'ステレオ', romaji: 'sutereo', meaning: 'Dàn âm thanh', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ dùng'],
    examples: [{ jp: 'ステレオで音楽を聞きます。', reading: 'ステレオでおんがくをききます。', meaning: 'Nghe nhạc bằng dàn âm thanh.' }] },

  { id: 'n4-steak', word: 'ステーキ', reading: 'ステーキ', romaji: 'suteeki', meaning: 'Bít tết', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: 'ステーキを注文しました。', reading: 'ステーキをちゅうもんしました。', meaning: 'Đã gọi bít tết.' }] },

  { id: 'n4-suit', word: 'スーツ', reading: 'スーツ', romaji: 'suutsu', meaning: 'Bộ vest', type: 'Danh từ', jlpt: 'N4',
    tags: ['Quần áo'],
    examples: [{ jp: 'スーツを着て出かけます。', reading: 'スーツをきてでかけます。', meaning: 'Mặc vest đi ra ngoài.' }] },

  { id: 'n4-suitcase', word: 'スーツケース', reading: 'スーツケース', romaji: 'suutsukeesu', meaning: 'Vali', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch'],
    examples: [{ jp: 'スーツケースを持ってきました。', reading: 'スーツケースをもってきました。', meaning: 'Đã mang vali đến.' }] },

  { id: 'n4-soft', word: 'ソフト', reading: 'ソフト', romaji: 'sofuto', meaning: 'Phần mềm; mềm', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công nghệ'],
    examples: [{ jp: 'ソフトをインストールします。', reading: 'ソフトをインストールします。', meaning: 'Cài phần mềm.' }] },

  { id: 'n4-type', word: 'タイプ', reading: 'タイプ', romaji: 'taipu', meaning: 'Loại, kiểu; đánh máy', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mô tả'],
    examples: [{ jp: 'どんなタイプが好きですか。', reading: 'どんなタイプがすきですか。', meaning: 'Bạn thích kiểu nào?' }] },

  { id: 'n4-check', word: 'チェック', reading: 'チェック', romaji: 'chekku', meaning: 'Kiểm tra, check', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: 'チェックしてください。', reading: 'チェックしてください。', meaning: 'Hãy kiểm tra.' }] },

  { id: 'n4-text', word: 'テキスト', reading: 'テキスト', romaji: 'tekisuto', meaning: 'Giáo trình, sách giáo khoa', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trường học'],
    examples: [{ jp: 'テキストを開いてください。', reading: 'テキストをひらいてください。', meaning: 'Mở giáo trình ra.' }] },

  { id: 'n4-tennis', word: 'テニス', reading: 'テニス', romaji: 'tenisu', meaning: 'Quần vợt, tennis', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao'],
    examples: [{ jp: 'テニスをしましょう。', reading: 'テニスをしましょう。', meaning: 'Chơi tennis nào.' }] },

  { id: 'n4-handbag', word: 'ハンドバッグ', reading: 'ハンドバッグ', romaji: 'handobaggu', meaning: 'Túi xách tay', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ dùng'],
    examples: [{ jp: 'ハンドバッグを買いました。', reading: 'ハンドバッグをかいました。', meaning: 'Đã mua túi xách.' }] },

  { id: 'n4-pasokon', word: 'パソコン', reading: 'パソコン', romaji: 'pasokon', meaning: 'Máy tính cá nhân', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công nghệ'],
    examples: [{ jp: 'パソコンで仕事をします。', reading: 'パソコンでしごとをします。', meaning: 'Làm việc bằng máy tính.' }] },

  { id: 'n4-part', word: 'パート', reading: 'パート', romaji: 'paato', meaning: 'Part-time, làm thêm', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: 'パートで働いています。', reading: 'パートではたらいています。', meaning: 'Đang làm part-time.' }] },

  { id: 'n4-building', word: 'ビル', reading: 'ビル', romaji: 'biru', meaning: 'Tòa nhà cao tầng', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tòa nhà'],
    examples: [{ jp: 'あのビルは高いですね。', reading: 'あのビルはたかいですね。', meaning: 'Tòa nhà kia cao nhỉ.' }] },

  { id: 'n4-piano', word: 'ピアノ', reading: 'ピアノ', romaji: 'piano', meaning: 'Đàn piano', type: 'Danh từ', jlpt: 'N4',
    tags: ['Âm nhạc'],
    examples: [{ jp: 'ピアノを弾けますか。', reading: 'ピアノをひけますか。', meaning: 'Bạn chơi piano được không?' }] },

  { id: 'n4-fax', word: 'ファックス', reading: 'ファックス', romaji: 'fakkusu', meaning: 'Fax', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn phòng'],
    examples: [{ jp: 'ファックスを送りました。', reading: 'ファックスをおくりました。', meaning: 'Đã gửi fax.' }] },

  { id: 'n4-present', word: 'プレゼント', reading: 'プレゼント', romaji: 'purezento', meaning: 'Quà tặng', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sự kiện'],
    examples: [{ jp: 'プレゼントをもらいました。', reading: 'プレゼントをもらいました。', meaning: 'Đã nhận quà.' }] },

  { id: 'n4-bell', word: 'ベル', reading: 'ベル', romaji: 'beru', meaning: 'Chuông', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ dùng'],
    examples: [{ jp: 'ベルが鳴りました。', reading: 'ベルがなりました。', meaning: 'Chuông reo rồi.' }] },

  { id: 'n4-report', word: 'レポート', reading: 'レポート', romaji: 'repooto', meaning: 'Báo cáo, bản tường trình', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trường học', 'Công việc'],
    examples: [{ jp: 'レポートを出してください。', reading: 'レポートをだしてください。', meaning: 'Hãy nộp báo cáo.' }] },

  { id: 'n4-register', word: 'レジ', reading: 'レジ', romaji: 'reji', meaning: 'Quầy thu ngân', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mua sắm'],
    examples: [{ jp: 'レジで払います。', reading: 'レジではらいます。', meaning: 'Thanh toán ở quầy.' }] },

  { id: 'n4-wordprocessor', word: 'ワープロ', reading: 'ワープロ', romaji: 'waapuro', meaning: 'Máy xử lý văn bản', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công nghệ'],
    examples: [{ jp: 'ワープロで文章を書きます。', reading: 'ワープロでぶんしょうをかきます。', meaning: 'Viết văn bản bằng máy.' }] },

  // ═══════════════ DANH TỪ LỊCH SỰ ═══════════════
  { id: 'n4-akachan', word: 'あかちゃん', reading: 'あかちゃん', romaji: 'akachan', meaning: 'Em bé', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: 'あかちゃんが生まれました。', reading: 'あかちゃんがうまれました。', meaning: 'Em bé đã chào đời.' }] },

  { id: 'n4-omiyage', word: 'お土産', reading: 'おみやげ', romaji: 'omiyage', meaning: 'Quà lưu niệm', hanViet: 'THỔ SẢN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch'],
    examples: [{ jp: 'お土産を買いました。', reading: 'おみやげをかいました。', meaning: 'Đã mua quà lưu niệm.' }] },

  { id: 'n4-ojousan', word: 'お嬢さん', reading: 'おじょうさん', romaji: 'ojousan', meaning: 'Tiểu thư, cô con gái', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xưng hô'],
    examples: [{ jp: 'お嬢さんはおいくつですか。', reading: 'おじょうさんはおいくつですか。', meaning: 'Con gái bạn mấy tuổi?' }] },

  { id: 'n4-otaku', word: 'お宅', reading: 'おたく', romaji: 'otaku', meaning: 'Nhà bạn (kính ngữ)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: 'お宅はどちらですか。', reading: 'おたくはどちらですか。', meaning: 'Nhà bạn ở đâu?' }] },

  { id: 'n4-orei', word: 'お礼', reading: 'おれい', romaji: 'orei', meaning: 'Lời cảm ơn', hanViet: 'LỄ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: 'お礼を言います。', reading: 'おれいをいいます。', meaning: 'Nói lời cảm ơn.' }] },

  { id: 'n4-oiwai', word: 'お祝い', reading: 'おいわい', romaji: 'oiwai', meaning: 'Chúc mừng, kỷ niệm', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sự kiện'],
    examples: [{ jp: 'お祝いのパーティーをします。', reading: 'おいわいのパーティーをします。', meaning: 'Tổ chức tiệc chúc mừng.' }] },

  { id: 'n4-omatsuri', word: 'お祭り', reading: 'おまつり', romaji: 'omatsuri', meaning: 'Lễ hội', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa'],
    examples: [{ jp: 'お祭りに行きましょう。', reading: 'おまつりにいきましょう。', meaning: 'Đi lễ hội nào.' }] },

  { id: 'n4-omimai', word: 'お見舞い', reading: 'おみまい', romaji: 'omimai', meaning: 'Thăm bệnh, thăm hỏi', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sức khỏe', 'Giao tiếp'],
    examples: [{ jp: 'お見舞いに行きます。', reading: 'おみまいにいきます。', meaning: 'Đi thăm bệnh.' }] },

  { id: 'n4-saraigetsu', word: 'さ来月', reading: 'さらいげつ', romaji: 'saraigetsu', meaning: 'Tháng sau nữa', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: 'さ来月は試験があります。', reading: 'さらいげつはしけんがあります。', meaning: 'Tháng sau nữa có thi.' }] },

  { id: 'n4-saraishuu', word: 'さ来週', reading: 'さらいしゅう', romaji: 'saraishuu', meaning: 'Tuần sau nữa', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: 'さ来週の火曜日に会いましょう。', reading: 'さらいしゅうのかようびにあいましょう。', meaning: 'Gặp nhau thứ ba tuần sau nữa nhé.' }] },
];

// ── from: vocabN4_Part3.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB N4 Part 3 — Kanji words batch 1 (N4 expansion batch 2/4)
// ~150 entries — Nouns, verbs, adjectives with kanji
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_N4_PART3: VocabEntry[] = [
  // ═══════════════ ĐỘNG TỪ ═══════════════
  { id: 'n4-noboru', word: '上る', reading: 'のぼる', romaji: 'noboru', meaning: 'Leo lên, đi lên', hanViet: 'THƯỢNG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: '坂を上りました。', reading: 'さかをのぼりました。', meaning: 'Đã leo dốc.' }] },

  { id: 'n4-sageru', word: '下げる', reading: 'さげる', romaji: 'sageru', meaning: 'Hạ xuống, giảm', hanViet: 'HẠ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '値段を下げてください。', reading: 'ねだんをさげてください。', meaning: 'Hãy giảm giá.' }] },

  { id: 'n4-kudaru', word: '下る', reading: 'くだる', romaji: 'kudaru', meaning: 'Đi xuống', hanViet: 'HẠ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: '山を下ります。', reading: 'やまをくだります。', meaning: 'Đi xuống núi.' }] },

  { id: 'n4-norikae', word: '乗り換える', reading: 'のりかえる', romaji: 'norikaeru', meaning: 'Chuyển tàu/xe', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '東京駅で乗り換えます。', reading: 'とうきょうえきでのりかえます。', meaning: 'Chuyển tàu ở ga Tokyo.' }] },

  { id: 'n4-tsutaeru', word: '伝える', reading: 'つたえる', romaji: 'tsutaeru', meaning: 'Truyền đạt, nhắn', hanViet: 'TRUYỀN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '彼に伝えてください。', reading: 'かれにつたえてください。', meaning: 'Hãy nhắn anh ấy.' }] },

  { id: 'n4-niru', word: '似る', reading: 'にる', romaji: 'niru', meaning: 'Giống, tương tự', hanViet: 'TỰ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['So sánh'],
    examples: [{ jp: '母に似ています。', reading: 'ははににています。', meaning: 'Giống mẹ.' }] },

  { id: 'n4-taoreru', word: '倒れる', reading: 'たおれる', romaji: 'taoreru', meaning: 'Ngã, đổ', hanViet: 'ĐẢO', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '木が倒れました。', reading: 'きがたおれました。', meaning: 'Cây đổ rồi.' }] },

  { id: 'n4-hieru', word: '冷える', reading: 'ひえる', romaji: 'hieru', meaning: 'Lạnh, nguội', hanViet: 'LÃNH', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Thời tiết'],
    examples: [{ jp: '体が冷えました。', reading: 'からだがひえました。', meaning: 'Cơ thể bị lạnh.' }] },

  { id: 'n4-wakeru', word: '別れる', reading: 'わかれる', romaji: 'wakareru', meaning: 'Chia tay, chia ra', hanViet: 'BIỆT', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Quan hệ'],
    examples: [{ jp: '彼女と別れました。', reading: 'かのじょとわかれました。', meaning: 'Chia tay bạn gái rồi.' }] },

  { id: 'n4-riyou', word: '利用', reading: 'りよう', romaji: 'riyou', meaning: 'Sử dụng, lợi dụng', hanViet: 'LỢI DỤNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: 'バスを利用します。', reading: 'バスをりようします。', meaning: 'Sử dụng xe buýt.' }] },

  { id: 'n4-wareru', word: '割れる', reading: 'われる', romaji: 'wareru', meaning: 'Vỡ, nứt', hanViet: 'CÁT', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: 'ガラスが割れました。', reading: 'ガラスがわれました。', meaning: 'Kính bị vỡ.' }] },

  { id: 'n4-ugoku', word: '動く', reading: 'うごく', romaji: 'ugoku', meaning: 'Di chuyển, cử động', hanViet: 'ĐỘNG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '動かないでください。', reading: 'うごかないでください。', meaning: 'Đừng cử động.' }] },

  { id: 'n4-katsu', word: '勝つ', reading: 'かつ', romaji: 'katsu', meaning: 'Thắng, chiến thắng', hanViet: 'THẮNG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Thể thao'],
    examples: [{ jp: '試合に勝ちました。', reading: 'しあいにかちました。', meaning: 'Đã thắng trận.' }],
    antonyms: [{ word: '負ける', reading: 'まける', meaning: 'Thua' }] },

  { id: 'n4-tsutsumu', word: '包む', reading: 'つつむ', romaji: 'tsutsumu', meaning: 'Gói, bao bọc', hanViet: 'BAO', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: 'プレゼントを包みます。', reading: 'プレゼントをつつみます。', meaning: 'Gói quà.' }] },

  { id: 'n4-ukeru', word: '受ける', reading: 'うける', romaji: 'ukeru', meaning: 'Nhận, thi, chịu', hanViet: 'THỤ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '試験を受けます。', reading: 'しけんをうけます。', meaning: 'Đi thi.' }] },

  { id: 'n4-meshiagaru', word: '召し上がる', reading: 'めしあがる', romaji: 'meshiagaru', meaning: 'Ăn, uống (kính ngữ)', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Kính ngữ', 'Thức ăn'],
    examples: [{ jp: 'どうぞ召し上がってください。', reading: 'どうぞめしあがってください。', meaning: 'Xin mời dùng.' }] },

  { id: 'n4-au', word: '合う', reading: 'あう', romaji: 'au', meaning: 'Hợp, phù hợp', hanViet: 'HỢP', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Mô tả'],
    examples: [{ jp: 'このサイズは合います。', reading: 'このサイズはあいます。', meaning: 'Size này hợp.' }] },

  { id: 'n4-mukau', word: '向かう', reading: 'むかう', romaji: 'mukau', meaning: 'Hướng tới, đi về phía', hanViet: 'HƯỚNG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: '駅に向かっています。', reading: 'えきにむかっています。', meaning: 'Đang hướng đến ga.' }] },

  { id: 'n4-mawaru', word: '回る', reading: 'まわる', romaji: 'mawaru', meaning: 'Quay, đi vòng', hanViet: 'HỒI', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '地球は回っています。', reading: 'ちきゅうはまわっています。', meaning: 'Trái đất đang quay.' }] },

  { id: 'n4-yorokobu', word: '喜ぶ', reading: 'よろこぶ', romaji: 'yorokobu', meaning: 'Vui mừng', hanViet: 'HỈ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '母が喜びました。', reading: 'ははがよろこびました。', meaning: 'Mẹ vui mừng.' }] },

  { id: 'n4-kamu', word: '噛む', reading: 'かむ', romaji: 'kamu', meaning: 'Nhai, cắn', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: 'よく噛んで食べてください。', reading: 'よくかんでたべてください。', meaning: 'Hãy nhai kỹ.' }] },

  { id: 'n4-nuru', word: '塗る', reading: 'ぬる', romaji: 'nuru', meaning: 'Sơn, bôi, phết', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: 'バターを塗ります。', reading: 'バターをぬります。', meaning: 'Phết bơ.' }] },

  { id: 'n4-utsu', word: '打つ', reading: 'うつ', romaji: 'utsu', meaning: 'Đánh, gõ', hanViet: 'ĐẢ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: 'キーボードを打ちます。', reading: 'キーボードをうちます。', meaning: 'Gõ bàn phím.' }] },

  { id: 'n4-harau', word: '払う', reading: 'はらう', romaji: 'harau', meaning: 'Trả tiền, thanh toán', hanViet: 'PHẤT', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Mua sắm'],
    examples: [{ jp: 'カードで払います。', reading: 'カードではらいます。', meaning: 'Trả bằng thẻ.' }] },

  { id: 'n4-nageru', word: '投げる', reading: 'なげる', romaji: 'nageru', meaning: 'Ném, quăng', hanViet: 'ĐẦU', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: 'ボールを投げてください。', reading: 'ボールをなげてください。', meaning: 'Hãy ném bóng.' }] },

  { id: 'n4-oru', word: '折る', reading: 'おる', romaji: 'oru', meaning: 'Gấp, bẻ gãy', hanViet: 'CHIẾT', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '紙を折ります。', reading: 'かみをおります。', meaning: 'Gấp giấy.' }] },

  { id: 'n4-oreru', word: '折れる', reading: 'おれる', romaji: 'oreru', meaning: 'Gãy, bị gấp', hanViet: 'CHIẾT', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '木の枝が折れました。', reading: 'きのえだがおれました。', meaning: 'Cành cây bị gãy.' }] },

  { id: 'n4-sagasu', word: '探す', reading: 'さがす', romaji: 'sagasu', meaning: 'Tìm kiếm', hanViet: 'THÁM', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '鍵を探しています。', reading: 'かぎをさがしています。', meaning: 'Đang tìm chìa khóa.' }] },

  { id: 'n4-yureru', word: '揺れる', reading: 'ゆれる', romaji: 'yureru', meaning: 'Rung lắc, lay', hanViet: 'DAO', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '地震で揺れました。', reading: 'じしんでゆれました。', meaning: 'Bị rung vì động đất.' }] },

  { id: 'n4-ueru', word: '植える', reading: 'うえる', romaji: 'ueru', meaning: 'Trồng', hanViet: 'THỰC', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '花を植えました。', reading: 'はなをうえました。', meaning: 'Đã trồng hoa.' }] },

  { id: 'n4-yamu', word: '止む', reading: 'やむ', romaji: 'yamu', meaning: 'Ngừng, tạnh (mưa)', hanViet: 'CHỈ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Thời tiết'],
    examples: [{ jp: '雨が止みました。', reading: 'あめがやみました。', meaning: 'Mưa đã tạnh.' }] },

  { id: 'n4-nokoru', word: '残る', reading: 'のこる', romaji: 'nokoru', meaning: 'Còn lại, ở lại', hanViet: 'TÀN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '少し残っています。', reading: 'すこしのこっています。', meaning: 'Còn lại một ít.' }] },

  { id: 'n4-kuraberu', word: '比べる', reading: 'くらべる', romaji: 'kuraberu', meaning: 'So sánh', hanViet: 'TỈ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['So sánh'],
    examples: [{ jp: '値段を比べましょう。', reading: 'ねだんをくらべましょう。', meaning: 'So sánh giá nào.' }] },

  { id: 'n4-wakasu', word: '沸かす', reading: 'わかす', romaji: 'wakasu', meaning: 'Đun sôi', hanViet: 'PHẤT', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Sinh hoạt'],
    examples: [{ jp: 'お湯を沸かします。', reading: 'おゆをわかします。', meaning: 'Đun nước sôi.' }] },

  { id: 'n4-waku', word: '沸く', reading: 'わく', romaji: 'waku', meaning: 'Sôi', hanViet: 'PHẤT', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Sinh hoạt'],
    examples: [{ jp: 'お湯が沸きました。', reading: 'おゆがわきました。', meaning: 'Nước đã sôi rồi.' }] },

  { id: 'n4-tomaru', word: '泊まる', reading: 'とまる', romaji: 'tomaru', meaning: 'Ở lại, trọ', hanViet: 'BẠC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Du lịch'],
    examples: [{ jp: 'ホテルに泊まります。', reading: 'ホテルにとまります。', meaning: 'Ở khách sạn.' }] },

  { id: 'n4-suberu', word: '滑る', reading: 'すべる', romaji: 'suberu', meaning: 'Trượt, trơn', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '道が滑ります。', reading: 'みちがすべります。', meaning: 'Đường trơn.' }] },

  { id: 'n4-tsukeru', word: '漬ける', reading: 'つける', romaji: 'tsukeru', meaning: 'Ngâm, muối', hanViet: 'TỰ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: '野菜を漬けます。', reading: 'やさいをつけます。', meaning: 'Ngâm rau.' }] },

  { id: 'n4-yaku', word: '焼く', reading: 'やく', romaji: 'yaku', meaning: 'Nướng, đốt', hanViet: 'THIÊU', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: 'パンを焼きます。', reading: 'パンをやきます。', meaning: 'Nướng bánh mì.' }] },

  { id: 'n4-yakeru', word: '焼ける', reading: 'やける', romaji: 'yakeru', meaning: 'Bị cháy, chín', hanViet: 'THIÊU', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: 'ケーキが焼けました。', reading: 'ケーキがやけました。', meaning: 'Bánh đã chín rồi.' }] },

  { id: 'n4-ikiru', word: '生きる', reading: 'いきる', romaji: 'ikiru', meaning: 'Sống', hanViet: 'SINH', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Cuộc sống'],
    examples: [{ jp: '一生懸命生きています。', reading: 'いっしょうけんめいいきています。', meaning: 'Đang sống hết mình.' }] },

  { id: 'n4-nusumu', word: '盗む', reading: 'ぬすむ', romaji: 'nusumu', meaning: 'Ăn cắp, trộm', hanViet: 'ĐẠO', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['An toàn'],
    examples: [{ jp: '財布を盗まれました。', reading: 'さいふをぬすまれました。', meaning: 'Bị trộm ví.' }] },

  { id: 'n4-nemuru', word: '眠る', reading: 'ねむる', romaji: 'nemuru', meaning: 'Ngủ', hanViet: 'MIÊN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Sinh hoạt'],
    examples: [{ jp: 'ぐっすり眠りました。', reading: 'ぐっすりねむりました。', meaning: 'Ngủ say.' }] },

  { id: 'n4-shiraseru', word: '知らせる', reading: 'しらせる', romaji: 'shiraseru', meaning: 'Thông báo, báo tin', hanViet: 'TRI', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '結果を知らせてください。', reading: 'けっかをしらせてください。', meaning: 'Hãy thông báo kết quả.' }] },

  { id: 'n4-inoru', word: '祈る', reading: 'いのる', romaji: 'inoru', meaning: 'Cầu nguyện', hanViet: 'KỲ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Văn hóa'],
    examples: [{ jp: '幸せを祈ります。', reading: 'しあわせをいのります。', meaning: 'Cầu nguyện hạnh phúc.' }] },

  { id: 'n4-utsuru', word: '移る', reading: 'うつる', romaji: 'utsuru', meaning: 'Chuyển, dời', hanViet: 'DI', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: '新しいアパートに移りました。', reading: 'あたらしいアパートにうつりました。', meaning: 'Đã chuyển nhà mới.' }] },

  { id: 'n4-sodateru', word: '育てる', reading: 'そだてる', romaji: 'sodateru', meaning: 'Nuôi dưỡng, trồng', hanViet: 'DỤC', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: '子供を育てています。', reading: 'こどもをそだてています。', meaning: 'Đang nuôi con.' }] },

  { id: 'n4-kikoeru', word: '聞こえる', reading: 'きこえる', romaji: 'kikoeru', meaning: 'Nghe thấy', hanViet: 'VĂN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Giác quan'],
    examples: [{ jp: '音楽が聞こえます。', reading: 'おんがくがきこえます。', meaning: 'Nghe thấy nhạc.' }] },

  { id: 'n4-mieru', word: '見える', reading: 'みえる', romaji: 'mieru', meaning: 'Nhìn thấy, trông', hanViet: 'KIẾN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Giác quan'],
    examples: [{ jp: '富士山が見えます。', reading: 'ふじさんがみえます。', meaning: 'Nhìn thấy núi Phú Sĩ.' }] },

  { id: 'n4-sawaru', word: '触る', reading: 'さわる', romaji: 'sawaru', meaning: 'Chạm, sờ', hanViet: 'XÚÚC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '触らないでください。', reading: 'さわらないでください。', meaning: 'Đừng chạm vào.' }] },

  { id: 'n4-tazuneru', word: '訪ねる', reading: 'たずねる', romaji: 'tazuneru', meaning: 'Thăm, viếng thăm', hanViet: 'PHỎNG', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '友達の家を訪ねました。', reading: 'ともだちのいえをたずねました。', meaning: 'Đã thăm nhà bạn.' }] },

  { id: 'n4-ayamaru', word: '謝る', reading: 'あやまる', romaji: 'ayamaru', meaning: 'Xin lỗi', hanViet: 'TẠ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: 'すぐに謝りなさい。', reading: 'すぐにあやまりなさい。', meaning: 'Xin lỗi ngay đi.' }] },

  { id: 'n4-makeru', word: '負ける', reading: 'まける', romaji: 'makeru', meaning: 'Thua', hanViet: 'PHỤ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Thể thao'],
    examples: [{ jp: '試合に負けました。', reading: 'しあいにまけました。', meaning: 'Đã thua trận.' }] },

  { id: 'n4-tasu', word: '足す', reading: 'たす', romaji: 'tasu', meaning: 'Cộng thêm', hanViet: 'TÚC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Toán'],
    examples: [{ jp: '二と三を足すと五です。', reading: 'にとさんをたすとごです。', meaning: '2 cộng 3 bằng 5.' }] },

  { id: 'n4-odoru', word: '踊る', reading: 'おどる', romaji: 'odoru', meaning: 'Nhảy, múa', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hoạt động'],
    examples: [{ jp: '一緒に踊りましょう。', reading: 'いっしょにおどりましょう。', meaning: 'Nhảy cùng nhau nào.' }] },

  { id: 'n4-fumu', word: '踏む', reading: 'ふむ', romaji: 'fumu', meaning: 'Giẫm, đạp', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '足を踏まないでください。', reading: 'あしをふまないでください。', meaning: 'Đừng giẫm lên chân.' }] },

  { id: 'n4-mukaeru', word: '迎える', reading: 'むかえる', romaji: 'mukaeru', meaning: 'Đón, đón tiếp', hanViet: 'NGHINH', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '空港で迎えます。', reading: 'くうこうでむかえます。', meaning: 'Đón ở sân bay.' }] },

  { id: 'n4-kayou', word: '通う', reading: 'かよう', romaji: 'kayou', meaning: 'Đi lại (hàng ngày)', hanViet: 'THÔNG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: '学校に通っています。', reading: 'がっこうにかよっています。', meaning: 'Đi học hàng ngày.' }] },

  { id: 'n4-tooru', word: '通る', reading: 'とおる', romaji: 'tooru', meaning: 'Đi qua, thông qua', hanViet: 'THÔNG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: 'この道を通ります。', reading: 'このみちをとおります。', meaning: 'Đi qua con đường này.' }] },

  { id: 'n4-tsureru', word: '連れる', reading: 'つれる', romaji: 'tsureru', meaning: 'Dẫn, mang theo', hanViet: 'LIÊN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '子供を連れて行きます。', reading: 'こどもをつれていきます。', meaning: 'Dẫn trẻ con đi.' }] },

  { id: 'n4-susumu', word: '進む', reading: 'すすむ', romaji: 'susumu', meaning: 'Tiến lên, tiến bộ', hanViet: 'TIẾN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: '前に進んでください。', reading: 'まえにすすんでください。', meaning: 'Hãy tiến lên phía trước.' }] },

  { id: 'n4-hakobu', word: '運ぶ', reading: 'はこぶ', romaji: 'hakobu', meaning: 'Mang, vận chuyển', hanViet: 'VẬN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '荷物を運びます。', reading: 'にもつをはこびます。', meaning: 'Vận chuyển hành lý.' }] },

  { id: 'n4-sugiru', word: '過ぎる', reading: 'すぎる', romaji: 'sugiru', meaning: 'Quá, vượt quá', hanViet: 'QUÁ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: '食べ過ぎました。', reading: 'たべすぎました。', meaning: 'Ăn quá nhiều rồi.' }] },

  { id: 'n4-erabu', word: '選ぶ', reading: 'えらぶ', romaji: 'erabu', meaning: 'Chọn, lựa chọn', hanViet: 'TUYỂN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '好きなものを選んでください。', reading: 'すきなものをえらんでください。', meaning: 'Hãy chọn cái bạn thích.' }] },

  { id: 'n4-tsuru', word: '釣る', reading: 'つる', romaji: 'tsuru', meaning: 'Câu (cá)', hanViet: 'ĐIẾU', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hoạt động'],
    examples: [{ jp: '魚を釣りに行きます。', reading: 'さかなをつりにいきます。', meaning: 'Đi câu cá.' }] },

  { id: 'n4-atsumaru', word: '集る', reading: 'あつまる', romaji: 'atsumaru', meaning: 'Tập trung, tụ họp', hanViet: 'TẬP', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '人が集まりました。', reading: 'ひとがあつまりました。', meaning: 'Mọi người đã tập trung.' }] },

  { id: 'n4-sawagu', word: '騒ぐ', reading: 'さわぐ', romaji: 'sawagu', meaning: 'Ồn ào, làm ầm', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '騒がないでください。', reading: 'さわがないでください。', meaning: 'Đừng ồn ào.' }] },

  { id: 'n4-odoroku', word: '驚く', reading: 'おどろく', romaji: 'odoroku', meaning: 'Ngạc nhiên, kinh ngạc', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '驚きました！', reading: 'おどろきました！', meaning: 'Ngạc nhiên quá!' }] },

  { id: 'n4-naru-v', word: '鳴る', reading: 'なる', romaji: 'naru', meaning: 'Reo, kêu (chuông)', hanViet: 'MINH', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Âm thanh'],
    examples: [{ jp: '電話が鳴っています。', reading: 'でんわがなっています。', meaning: 'Điện thoại đang reo.' }] },

  { id: 'n4-torikaeru', word: '取り替える', reading: 'とりかえる', romaji: 'torikaeru', meaning: 'Đổi, thay thế', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '電球を取り替えます。', reading: 'でんきゅうをとりかえます。', meaning: 'Thay bóng đèn.' }] },

  { id: 'n4-sashiageru', word: '差し上げる', reading: 'さしあげる', romaji: 'sashiageru', meaning: 'Cho, dâng (khiêm nhường)', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: 'お花を差し上げます。', reading: 'おはなをさしあげます。', meaning: 'Tôi xin dâng hoa.' }] },

  { id: 'n4-haiken', word: '拝見', reading: 'はいけん', romaji: 'haiken', meaning: 'Xem (khiêm nhường)', hanViet: 'BÁI KIẾN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: '拝見してもよろしいですか。', reading: 'はいけんしてもよろしいですか。', meaning: 'Tôi có thể xem được không?' }] },

  { id: 'n4-moushiageru', word: '申し上げる', reading: 'もうしあげる', romaji: 'moushiageru', meaning: 'Nói, thưa (khiêm nhường)', hanViet: 'THÂN THƯỢNG', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: '一言申し上げます。', reading: 'ひとこともうしあげます。', meaning: 'Cho phép tôi nói một lời.' }] },

  { id: 'n4-mousu', word: '申す', reading: 'もうす', romaji: 'mousu', meaning: 'Nói (khiêm nhường)', hanViet: 'THÂN', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: '田中と申します。', reading: 'たなかともうします。', meaning: 'Tôi tên là Tanaka.' }] },

  { id: 'n4-itasu', word: '致す', reading: 'いたす', romaji: 'itasu', meaning: 'Làm (khiêm nhường)', hanViet: 'TRÍ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: '私がいたします。', reading: 'わたしがいたします。', meaning: 'Tôi sẽ làm ạ.' }] },

  { id: 'n4-mairu', word: '参る', reading: 'まいる', romaji: 'mairu', meaning: 'Đi, đến (khiêm nhường)', hanViet: 'THAM', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Kính ngữ'],
    examples: [{ jp: '今から参ります。', reading: 'いまからまいります。', meaning: 'Tôi sẽ đến ngay ạ.' }] },

  { id: 'n4-modoru', word: '戻る', reading: 'もどる', romaji: 'modoru', meaning: 'Quay lại, trở về', hanViet: 'LÊ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: 'すぐ戻ります。', reading: 'すぐもどります。', meaning: 'Sẽ quay lại ngay.' }] },

  { id: 'n4-otonau', word: '行う', reading: 'おこなう', romaji: 'okonau', meaning: 'Tiến hành, tổ chức', hanViet: 'HÀNH', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '会議を行います。', reading: 'かいぎをおこないます。', meaning: 'Tiến hành cuộc họp.' }] },

  { id: 'n4-utsuru-photo', word: '写す', reading: 'うつす', romaji: 'utsusu', meaning: 'Chụp ảnh, sao chép', hanViet: 'TẢ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '写真を写しました。', reading: 'しゃしんをうつしました。', meaning: 'Đã chụp ảnh.' }] },

  { id: 'n4-isogu', word: '急ぐ', reading: 'いそぐ', romaji: 'isogu', meaning: 'Vội, gấp', hanViet: 'CẤP', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '急ぎましょう！', reading: 'いそぎましょう！', meaning: 'Nhanh lên nào!' }] },

  { id: 'n4-narerur', word: '慣れる', reading: 'なれる', romaji: 'narerur', meaning: 'Quen, thích nghi', hanViet: 'QUÁN', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Cuộc sống'],
    examples: [{ jp: '日本の生活に慣れました。', reading: 'にほんのせいかつになれました。', meaning: 'Đã quen với cuộc sống Nhật.' }] },

  { id: 'n4-omoidasu', word: '思い出す', reading: 'おもいだす', romaji: 'omoidasu', meaning: 'Nhớ lại, hồi tưởng', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Tư duy'],
    examples: [{ jp: 'いい思い出を思い出しました。', reading: 'いいおもいでをおもいだしました。', meaning: 'Đã nhớ lại kỷ niệm đẹp.' }] },

  { id: 'n4-hikidasu', word: '引き出す', reading: 'ひきだす', romaji: 'hikidasu', meaning: 'Rút ra, kéo ra', hanViet: 'DẪN XUẤT', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: 'お金を引き出します。', reading: 'おかねをひきだします。', meaning: 'Rút tiền.' }] },

  { id: 'n4-yaseru', word: '痩せる', reading: 'やせる', romaji: 'yaseru', meaning: 'Gầy, giảm cân', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Sức khỏe'],
    examples: [{ jp: '最近痩せましたね。', reading: 'さいきんやせましたね。', meaning: 'Dạo này gầy đi nhỉ.' }] },

  { id: 'n4-tsukameru', word: '捕まえる', reading: 'つかまえる', romaji: 'tsukamaeru', meaning: 'Bắt, tóm', hanViet: 'BỘ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '泥棒を捕まえました。', reading: 'どろぼうをつかまえました。', meaning: 'Đã bắt được tên trộm.' }] },

  { id: 'n4-kakeru-v', word: '掛ける', reading: 'かける', romaji: 'kakeru', meaning: 'Treo, gọi (điện thoại)', hanViet: 'QUẢI', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '電話を掛けます。', reading: 'でんわをかけます。', meaning: 'Gọi điện thoại.' }] },

  { id: 'n4-tazuneru-ask', word: '尋ねる', reading: 'たずねる', romaji: 'tazuneru', meaning: 'Hỏi, thăm dò', hanViet: 'TẦM', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '道を尋ねました。', reading: 'みちをたずねました。', meaning: 'Đã hỏi đường.' }] },

  { id: 'n4-futoru', word: '太る', reading: 'ふとる', romaji: 'futoru', meaning: 'Béo, tăng cân', hanViet: 'THÁI', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Sức khỏe'],
    examples: [{ jp: '最近太りました。', reading: 'さいきんふとりました。', meaning: 'Dạo này béo lên.' }],
    antonyms: [{ word: '痩せる', reading: 'やせる', meaning: 'Gầy' }] },

  { id: 'n4-kureru-dark', word: '暮れる', reading: 'くれる', romaji: 'kureru', meaning: 'Tối, ngày tàn', hanViet: 'MỘ', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '日が暮れました。', reading: 'ひがくれました。', meaning: 'Trời tối rồi.' }] },

  { id: 'n4-otsu', word: '落す', reading: 'おとす', romaji: 'otosu', meaning: 'Đánh rơi, làm rơi', hanViet: 'LẠC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '財布を落としました。', reading: 'さいふをおとしました。', meaning: 'Đánh rơi ví.' }] },

  { id: 'n4-ochiru', word: '落る', reading: 'おちる', romaji: 'ochiru', meaning: 'Rơi, rụng', hanViet: 'LẠC', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '葉が落ちました。', reading: 'はがおちました。', meaning: 'Lá rụng rồi.' }] },

  { id: 'n4-kazaru', word: '飾る', reading: 'かざる', romaji: 'kazaru', meaning: 'Trang trí', hanViet: 'SỨC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '部屋を飾りました。', reading: 'へやをかざりました。', meaning: 'Đã trang trí phòng.' }] },

  { id: 'n4-tsuku-belong', word: '付く', reading: 'つく', romaji: 'tsuku', meaning: 'Dính, bật (sáng)', hanViet: 'PHỤ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '電気がつきました。', reading: 'でんきがつきました。', meaning: 'Đèn đã bật sáng.' }] },

  { id: 'n4-shoutai', word: '招待', reading: 'しょうたい', romaji: 'shoutai', meaning: 'Mời, lời mời', hanViet: 'CHIÊU ĐÃI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: 'パーティーに招待されました。', reading: 'パーティーにしょうたいされました。', meaning: 'Được mời đến tiệc.' }] },

  { id: 'n4-oridasu', word: '降り出す', reading: 'ふりだす', romaji: 'furidasu', meaning: 'Bắt đầu mưa', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Thời tiết'],
    examples: [{ jp: '雨が降り出しました。', reading: 'あめがふりだしました。', meaning: 'Bắt đầu mưa rồi.' }] },

  { id: 'n4-machigae', word: '間違える', reading: 'まちがえる', romaji: 'machigaeru', meaning: 'Nhầm, sai lầm', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '答えを間違えました。', reading: 'こたえをまちがえました。', meaning: 'Trả lời sai rồi.' }] },

  { id: 'n4-maniau', word: '間に合う', reading: 'まにあう', romaji: 'maniau', meaning: 'Kịp giờ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '電車に間に合いました。', reading: 'でんしゃにまにあいました。', meaning: 'Kịp tàu rồi.' }] },

  { id: 'n4-yogoreru', word: '汚れる', reading: 'よごれる', romaji: 'yogoreru', meaning: 'Bẩn, bị dơ', hanViet: 'Ô', type: 'Động từ nhóm 2', jlpt: 'N4',
    tags: ['Sinh hoạt'],
    examples: [{ jp: '服が汚れました。', reading: 'ふくがよごれました。', meaning: 'Áo bị bẩn rồi.' }] },

  { id: 'n4-hikidashi', word: '引き出し', reading: 'ひきだし', romaji: 'hikidashi', meaning: 'Ngăn kéo', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ dùng'],
    examples: [{ jp: '引き出しの中を見てください。', reading: 'ひきだしのなかをみてください。', meaning: 'Hãy nhìn trong ngăn kéo.' }] },

  { id: 'n4-shitaku', word: '支度', reading: 'したく', romaji: 'shitaku', meaning: 'Chuẩn bị', hanViet: 'CHI ĐỘ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sinh hoạt'],
    examples: [{ jp: '支度はできましたか。', reading: 'したくはできましたか。', meaning: 'Chuẩn bị xong chưa?' }] },

  { id: 'n4-oboeru-wake', word: '寝坊', reading: 'ねぼう', romaji: 'nebou', meaning: 'Ngủ nướng', hanViet: 'TẨMPHƯỜNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sinh hoạt'],
    examples: [{ jp: '今朝寝坊しました。', reading: 'けさねぼうしました。', meaning: 'Sáng nay ngủ nướng.' }] },
];

// ── from: vocabN4_Part4.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB N4 Part 4 — Kanji nouns & adjectives batch (N4 expansion batch 3/4)
// ~150 entries — Places, people, abstract concepts, descriptors
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_N4_PART4: VocabEntry[] = [
  // ═══════════════ NƠI CHỐN / ĐỊA ĐIỂM ═══════════════
  { id: 'n4-geshuku', word: '下宿', reading: 'げしゅく', romaji: 'geshuku', meaning: 'Nhà trọ, chỗ trọ', hanViet: 'HẠ TÚC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '下宿を探しています。', reading: 'げしゅくをさがしています。', meaning: 'Đang tìm nhà trọ.' }] },

  { id: 'n4-jimusho', word: '事務所', reading: 'じむしょ', romaji: 'jimusho', meaning: 'Văn phòng', hanViet: 'SỰ VỤ SỞ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn', 'Công việc'],
    examples: [{ jp: '事務所で働いています。', reading: 'じむしょではたらいています。', meaning: 'Làm việc ở văn phòng.' }] },

  { id: 'n4-chugakkou', word: '中学校', reading: 'ちゅうがっこう', romaji: 'chuugakkou', meaning: 'Trường trung học cơ sở', hanViet: 'TRUNG HỌC HIỆU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '中学校の先生です。', reading: 'ちゅうがっこうのせんせいです。', meaning: 'Là giáo viên trung học cơ sở.' }] },

  { id: 'n4-kaijou', word: '会場', reading: 'かいじょう', romaji: 'kaijou', meaning: 'Hội trường', hanViet: 'HỘI TRƯỜNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '会場はどこですか。', reading: 'かいじょうはどこですか。', meaning: 'Hội trường ở đâu?' }] },

  { id: 'n4-kaigishitsu', word: '会議室', reading: 'かいぎしつ', romaji: 'kaigishitsu', meaning: 'Phòng họp', hanViet: 'HỘI NGHỊ THẤT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn', 'Công việc'],
    examples: [{ jp: '会議室に入ってください。', reading: 'かいぎしつにはいってください。', meaning: 'Hãy vào phòng họp.' }] },

  { id: 'n4-uriba', word: '売り場', reading: 'うりば', romaji: 'uriba', meaning: 'Quầy bán hàng', hanViet: 'MẠI TRƯỜNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mua sắm'],
    examples: [{ jp: '靴の売り場はどこですか。', reading: 'くつのうりばはどこですか。', meaning: 'Quầy giày ở đâu?' }] },

  { id: 'n4-okujou', word: '屋上', reading: 'おくじょう', romaji: 'okujou', meaning: 'Sân thượng', hanViet: 'ỐC THƯỢNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '屋上に行きましょう。', reading: 'おくじょうにいきましょう。', meaning: 'Lên sân thượng nào.' }] },

  { id: 'n4-tenrankai', word: '展覧会', reading: 'てんらんかい', romaji: 'tenrankai', meaning: 'Triển lãm', hanViet: 'TRIỂN LÃM HỘI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa'],
    examples: [{ jp: '展覧会を見に行きます。', reading: 'てんらんかいをみにいきます。', meaning: 'Đi xem triển lãm.' }] },

  { id: 'n4-shima', word: '島', reading: 'しま', romaji: 'shima', meaning: 'Đảo', hanViet: 'ĐẢO', type: 'Danh từ', jlpt: 'N4',
    tags: ['Địa lý'],
    examples: [{ jp: '日本は島国です。', reading: 'にほんはしまぐにです。', meaning: 'Nhật Bản là đảo quốc.' }] },

  { id: 'n4-koujou', word: '工場', reading: 'こうじょう', romaji: 'koujou', meaning: 'Nhà máy, công xưởng', hanViet: 'CÔNG TRƯỜNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn', 'Công việc'],
    examples: [{ jp: '工場で働いています。', reading: 'こうじょうではたらいています。', meaning: 'Làm việc ở nhà máy.' }] },

  { id: 'n4-tera', word: '寺', reading: 'てら', romaji: 'tera', meaning: 'Chùa', hanViet: 'TỰ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa'],
    examples: [{ jp: '古いお寺を見学しました。', reading: 'ふるいおてらをけんがくしました。', meaning: 'Đã tham quan chùa cổ.' }] },

  { id: 'n4-jinja', word: '神社', reading: 'じんじゃ', romaji: 'jinja', meaning: 'Đền thần', hanViet: 'THẦN XÃ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa'],
    examples: [{ jp: '神社にお参りしました。', reading: 'じんじゃにおまいりしました。', meaning: 'Đã đến đền cầu nguyện.' }] },

  { id: 'n4-kyoukai', word: '教会', reading: 'きょうかい', romaji: 'kyoukai', meaning: 'Nhà thờ', hanViet: 'GIÁO HỘI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa'],
    examples: [{ jp: '教会で結婚式をします。', reading: 'きょうかいでけっこんしきをします。', meaning: 'Tổ chức đám cưới ở nhà thờ.' }] },

  { id: 'n4-kaigan', word: '海岸', reading: 'かいがん', romaji: 'kaigan', meaning: 'Bờ biển', hanViet: 'HẢI NGẠN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Địa lý'],
    examples: [{ jp: '海岸を散歩しました。', reading: 'かいがんをさんぽしました。', meaning: 'Đã đi dạo bờ biển.' }] },

  { id: 'n4-mizuumi', word: '湖', reading: 'みずうみ', romaji: 'mizuumi', meaning: 'Hồ', hanViet: 'HỒ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Địa lý'],
    examples: [{ jp: '湖のそばに住んでいます。', reading: 'みずうみのそばにすんでいます。', meaning: 'Sống gần hồ.' }] },

  { id: 'n4-minato', word: '港', reading: 'みなと', romaji: 'minato', meaning: 'Cảng', hanViet: 'CẢNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '港に船が着きました。', reading: 'みなとにふねがつきました。', meaning: 'Tàu đã cập cảng.' }] },

  { id: 'n4-hikoujou', word: '飛行場', reading: 'ひこうじょう', romaji: 'hikoujou', meaning: 'Sân bay', hanViet: 'PHI HÀNH TRƯỜNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '飛行場まで遠いです。', reading: 'ひこうじょうまでとおいです。', meaning: 'Sân bay xa.' }] },

  { id: 'n4-kuukou', word: '空港', reading: 'くうこう', romaji: 'kuukou', meaning: 'Sân bay', hanViet: 'KHÔNG CẢNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '空港で待っています。', reading: 'くうこうでまっています。', meaning: 'Đang đợi ở sân bay.' }] },

  { id: 'n4-chuushajou', word: '駐車場', reading: 'ちゅうしゃじょう', romaji: 'chuushajou', meaning: 'Bãi đậu xe', hanViet: 'TRÚ XA TRƯỜNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '駐車場がいっぱいです。', reading: 'ちゅうしゃじょうがいっぱいです。', meaning: 'Bãi đậu xe đầy rồi.' }] },

  { id: 'n4-kougai', word: '郊外', reading: 'こうがい', romaji: 'kougai', meaning: 'Ngoại ô', hanViet: 'GIAO NGOẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '郊外に引っ越しました。', reading: 'こうがいにひっこしました。', meaning: 'Đã chuyển ra ngoại ô.' }] },

  { id: 'n4-kinjo', word: '近所', reading: 'きんじょ', romaji: 'kinjo', meaning: 'Hàng xóm, lân cận', hanViet: 'CẬN SỞ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '近所の人は親切です。', reading: 'きんじょのひとはしんせつです。', meaning: 'Hàng xóm tốt bụng.' }] },

  { id: 'n4-inaka', word: '田舎', reading: 'いなか', romaji: 'inaka', meaning: 'Quê, nông thôn', hanViet: 'ĐIỀN XỨ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '田舎の空気はきれいです。', reading: 'いなかのくうきはきれいです。', meaning: 'Không khí quê trong lành.' }] },

  { id: 'n4-sumi', word: '隅', reading: 'すみ', romaji: 'sumi', meaning: 'Góc (phòng)', hanViet: 'NGÔ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '部屋の隅に置いてください。', reading: 'へやのすみにおいてください。', meaning: 'Đặt ở góc phòng.' }] },

  { id: 'n4-tochuu', word: '途中', reading: 'とちゅう', romaji: 'tochuu', meaning: 'Giữa đường, trên đường', hanViet: 'ĐỒ TRUNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: '途中で休みましょう。', reading: 'とちゅうでやすみましょう。', meaning: 'Nghỉ giữa đường nào.' }] },

  { id: 'n4-miyako', word: '都', reading: 'みやこ', romaji: 'miyako', meaning: 'Thủ đô, kinh đô', hanViet: 'ĐÔ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Địa lý'],
    examples: [{ jp: '京都は古い都です。', reading: 'きょうとはふるいみやこです。', meaning: 'Kyoto là kinh đô cổ.' }] },

  { id: 'n4-bijutsukan', word: '美術館', reading: 'びじゅつかん', romaji: 'bijutsukan', meaning: 'Bảo tàng mỹ thuật', hanViet: 'MỸ THUẬT QUÁN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa'],
    examples: [{ jp: '美術館に行きました。', reading: 'びじゅつかんにいきました。', meaning: 'Đã đi bảo tàng mỹ thuật.' }] },

  { id: 'n4-koudou', word: '講堂', reading: 'こうどう', romaji: 'koudou', meaning: 'Giảng đường', hanViet: 'GIẢNG ĐƯỜNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '講堂で講義があります。', reading: 'こうどうでこうぎがあります。', meaning: 'Có bài giảng ở giảng đường.' }] },

  { id: 'n4-saka', word: '坂', reading: 'さか', romaji: 'saka', meaning: 'Dốc', hanViet: 'PHẢN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '坂を上ります。', reading: 'さかをのぼります。', meaning: 'Leo dốc.' }] },

  { id: 'n4-kabe', word: '壁', reading: 'かべ', romaji: 'kabe', meaning: 'Tường', hanViet: 'BÍCH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nhà ở'],
    examples: [{ jp: '壁に絵を掛けました。', reading: 'かべにえをかけました。', meaning: 'Treo tranh lên tường.' }] },

  { id: 'n4-oshiire', word: '押し入れ', reading: 'おしいれ', romaji: 'oshiire', meaning: 'Tủ đựng đồ (kiểu Nhật)', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nhà ở'],
    examples: [{ jp: '布団を押し入れに入れます。', reading: 'ふとんをおしいれにいれます。', meaning: 'Cất chăn vào tủ.' }] },

  { id: 'n4-tana', word: '棚', reading: 'たな', romaji: 'tana', meaning: 'Kệ, giá', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ dùng'],
    examples: [{ jp: '棚に本を並べます。', reading: 'たなにほんをならべます。', meaning: 'Xếp sách lên kệ.' }] },

  { id: 'n4-shinbunsha', word: '新聞社', reading: 'しんぶんしゃ', romaji: 'shinbunsha', meaning: 'Tòa soạn báo', hanViet: 'TÂN VĂN XÃ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: '新聞社で働いています。', reading: 'しんぶんしゃではたらいています。', meaning: 'Làm việc ở tòa soạn.' }] },

  { id: 'n4-doubutsuen', word: '動物園', reading: 'どうぶつえん', romaji: 'doubutsuen', meaning: 'Sở thú', hanViet: 'ĐỘNG VẬT VIÊN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '動物園に行きました。', reading: 'どうぶつえんにいきました。', meaning: 'Đã đi sở thú.' }] },

  { id: 'n4-ryokan', word: '旅館', reading: 'りょかん', romaji: 'ryokan', meaning: 'Nhà trọ kiểu Nhật', hanViet: 'LỮ QUÁN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch'],
    examples: [{ jp: '旅館に泊まりました。', reading: 'りょかんにとまりました。', meaning: 'Đã ở nhà trọ Nhật.' }] },

  { id: 'n4-mori', word: '森', reading: 'もり', romaji: 'mori', meaning: 'Rừng', hanViet: 'SÂM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '森を散歩します。', reading: 'もりをさんぽします。', meaning: 'Đi dạo trong rừng.' }] },

  { id: 'n4-kouchou', word: '校長', reading: 'こうちょう', romaji: 'kouchou', meaning: 'Hiệu trưởng', hanViet: 'HIỆU TRƯỞNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '校長先生のお話です。', reading: 'こうちょうせんせいのおはなしです。', meaning: 'Bài nói chuyện của hiệu trưởng.' }] },

  { id: 'n4-shougakkou', word: '小学校', reading: 'しょうがっこう', romaji: 'shougakkou', meaning: 'Trường tiểu học', hanViet: 'TIỂU HỌC HIỆU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '小学校に入りました。', reading: 'しょうがっこうにはいりました。', meaning: 'Đã vào trường tiểu học.' }] },

  { id: 'n4-koukou', word: '高校', reading: 'こうこう', romaji: 'koukou', meaning: 'Trường cấp 3', hanViet: 'CAO HIỆU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '高校を卒業しました。', reading: 'こうこうをそつぎょうしました。', meaning: 'Đã tốt nghiệp cấp 3.' }] },

  { id: 'n4-koutougakkou', word: '高等学校', reading: 'こうとうがっこう', romaji: 'koutougakkou', meaning: 'Trường trung học phổ thông', hanViet: 'CAO ĐẲNG HỌC HIỆU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '高等学校で勉強しています。', reading: 'こうとうがっこうでべんきょうしています。', meaning: 'Đang học ở trường THPT.' }] },

  // ═══════════════ CON NGƯỜI / QUAN HỆ ═══════════════
  { id: 'n4-senpai', word: '先輩', reading: 'せんぱい', romaji: 'senpai', meaning: 'Tiền bối, đàn anh', hanViet: 'TIÊN BỐI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Quan hệ'],
    examples: [{ jp: '先輩に相談します。', reading: 'せんぱいにそうだんします。', meaning: 'Tham khảo ý kiến tiền bối.' }] },

  { id: 'n4-otto', word: '夫', reading: 'おっと', romaji: 'otto', meaning: 'Chồng', hanViet: 'PHU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: '夫は会社員です。', reading: 'おっとはかいしゃいんです。', meaning: 'Chồng tôi là nhân viên công ty.' }],
    antonyms: [{ word: '妻', reading: 'つま', meaning: 'Vợ' }] },

  { id: 'n4-tsuma', word: '妻', reading: 'つま', romaji: 'tsuma', meaning: 'Vợ', hanViet: 'THÊ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: '妻は教師です。', reading: 'つまはきょうしです。', meaning: 'Vợ tôi là giáo viên.' }] },

  { id: 'n4-musume', word: '娘', reading: 'むすめ', romaji: 'musume', meaning: 'Con gái', hanViet: 'NƯƠNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: '娘は五歳です。', reading: 'むすめはごさいです。', meaning: 'Con gái 5 tuổi.' }] },

  { id: 'n4-musuko', word: '息子', reading: 'むすこ', romaji: 'musuko', meaning: 'Con trai', hanViet: 'TỨC TỬ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: '息子は大学生です。', reading: 'むすこはだいがくせいです。', meaning: 'Con trai là sinh viên.' }] },

  { id: 'n4-kanai', word: '家内', reading: 'かない', romaji: 'kanai', meaning: 'Vợ (khiêm nhường)', hanViet: 'GIA NỘI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình', 'Kính ngữ'],
    examples: [{ jp: '家内は買い物に行きました。', reading: 'かないはかいものにいきました。', meaning: 'Nhà tôi đi mua sắm rồi.' }] },

  { id: 'n4-goshujin', word: '御主人', reading: 'ごしゅじん', romaji: 'goshujin', meaning: 'Chồng (kính ngữ)', hanViet: 'NGỰ CHỦ NHÂN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình', 'Kính ngữ'],
    examples: [{ jp: '御主人はお元気ですか。', reading: 'ごしゅじんはおげんきですか。', meaning: 'Chồng chị có khỏe không?' }] },

  { id: 'n4-boku', word: '僕', reading: 'ぼく', romaji: 'boku', meaning: 'Tôi (nam, thân mật)', hanViet: 'BỘC', type: 'Đại từ', jlpt: 'N4',
    tags: ['Đại từ'],
    examples: [{ jp: '僕は学生です。', reading: 'ぼくはがくせいです。', meaning: 'Tôi là học sinh.' }] },

  { id: 'n4-kimi', word: '君', reading: 'きみ', romaji: 'kimi', meaning: 'Bạn (thân mật, suồng sã)', hanViet: 'QUÂN', type: 'Đại từ', jlpt: 'N4',
    tags: ['Đại từ'],
    examples: [{ jp: '君は強いね。', reading: 'きみはつよいね。', meaning: 'Bạn mạnh thật nhỉ.' }] },

  { id: 'n4-kare', word: '彼', reading: 'かれ', romaji: 'kare', meaning: 'Anh ấy, bạn trai', hanViet: 'BỈ', type: 'Đại từ', jlpt: 'N4',
    tags: ['Đại từ'],
    examples: [{ jp: '彼は優しい人です。', reading: 'かれはやさしいひとです。', meaning: 'Anh ấy là người tốt bụng.' }] },

  { id: 'n4-karera', word: '彼ら', reading: 'かれら', romaji: 'karera', meaning: 'Họ', type: 'Đại từ', jlpt: 'N4',
    tags: ['Đại từ'],
    examples: [{ jp: '彼らは友達です。', reading: 'かれらはともだちです。', meaning: 'Họ là bạn bè.' }] },

  { id: 'n4-kanojo', word: '彼女', reading: 'かのじょ', romaji: 'kanojo', meaning: 'Cô ấy, bạn gái', hanViet: 'BỈ NỮ', type: 'Đại từ', jlpt: 'N4',
    tags: ['Đại từ'],
    examples: [{ jp: '彼女はきれいです。', reading: 'かのじょはきれいです。', meaning: 'Cô ấy đẹp.' }] },

  { id: 'n4-josei', word: '女性', reading: 'じょせい', romaji: 'josei', meaning: 'Phụ nữ, nữ giới', hanViet: 'NỮ TÍNH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Con người'],
    examples: [{ jp: '女性の客が多いです。', reading: 'じょせいのきゃくがおおいです。', meaning: 'Khách nữ nhiều.' }],
    antonyms: [{ word: '男性', reading: 'だんせい', meaning: 'Nam giới' }] },

  { id: 'n4-dansei', word: '男性', reading: 'だんせい', romaji: 'dansei', meaning: 'Nam giới', hanViet: 'NAM TÍNH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Con người'],
    examples: [{ jp: '男性の先生です。', reading: 'だんせいのせんせいです。', meaning: 'Là giáo viên nam.' }] },

  { id: 'n4-daigakusei', word: '大学生', reading: 'だいがくせい', romaji: 'daigakusei', meaning: 'Sinh viên đại học', hanViet: 'ĐẠI HỌC SINH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '大学生になりました。', reading: 'だいがくせいになりました。', meaning: 'Đã trở thành sinh viên.' }] },

  { id: 'n4-koukousei', word: '高校生', reading: 'こうこうせい', romaji: 'koukousei', meaning: 'Học sinh cấp 3', hanViet: 'CAO HIỆU SINH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '高校生の息子がいます。', reading: 'こうこうせいのむすこがいます。', meaning: 'Có con trai học cấp 3.' }] },

  { id: 'n4-koumuin', word: '公務員', reading: 'こうむいん', romaji: 'koumuin', meaning: 'Công chức', hanViet: 'CÔNG VỤ VIÊN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: '公務員になりたいです。', reading: 'こうむいんになりたいです。', meaning: 'Muốn làm công chức.' }] },

  { id: 'n4-teminuri', word: '店員', reading: 'てんいん', romaji: 'tenin', meaning: 'Nhân viên cửa hàng', hanViet: 'ĐIỂM VIÊN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: '店員さんに聞きましょう。', reading: 'てんいんさんにききましょう。', meaning: 'Hỏi nhân viên nào.' }] },

  { id: 'n4-shachou', word: '社長', reading: 'しゃちょう', romaji: 'shachou', meaning: 'Giám đốc công ty', hanViet: 'XÃ TRƯỞNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: '社長に会いました。', reading: 'しゃちょうにあいました。', meaning: 'Đã gặp giám đốc.' }] },

  { id: 'n4-kachou', word: '課長', reading: 'かちょう', romaji: 'kachou', meaning: 'Trưởng phòng', hanViet: 'KHÓA TRƯỞNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: '課長に報告します。', reading: 'かちょうにほうこくします。', meaning: 'Báo cáo trưởng phòng.' }] },

  { id: 'n4-buchou', word: '部長', reading: 'ぶちょう', romaji: 'buchou', meaning: 'Trưởng ban', hanViet: 'BỘ TRƯỞNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: '部長の承認が必要です。', reading: 'ぶちょうのしょうにんがひつようです。', meaning: 'Cần sự phê duyệt của trưởng ban.' }] },

  { id: 'n4-kangofutsu', word: '看護婦', reading: 'かんごふ', romaji: 'kangofu', meaning: 'Y tá', hanViet: 'KHÁN HỘ PHỤ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sức khỏe'],
    examples: [{ jp: '看護婦さんが来ました。', reading: 'かんごふさんがきました。', meaning: 'Y tá đã đến.' }] },

  { id: 'n4-haisha', word: '歯医者', reading: 'はいしゃ', romaji: 'haisha', meaning: 'Nha sĩ', hanViet: 'XỈ Y GIẢ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sức khỏe'],
    examples: [{ jp: '歯医者に行かなければなりません。', reading: 'はいしゃにいかなければなりません。', meaning: 'Phải đi nha sĩ.' }] },

  { id: 'n4-keisatsu', word: '警察', reading: 'けいさつ', romaji: 'keisatsu', meaning: 'Cảnh sát', hanViet: 'CẢNH SÁT', type: 'Danh từ', jlpt: 'N4',
    tags: ['An toàn'],
    examples: [{ jp: '警察に連絡してください。', reading: 'けいさつにれんらくしてください。', meaning: 'Hãy liên lạc cảnh sát.' }] },

  { id: 'n4-dorobou', word: '泥棒', reading: 'どろぼう', romaji: 'dorobou', meaning: 'Tên trộm', type: 'Danh từ', jlpt: 'N4',
    tags: ['An toàn'],
    examples: [{ jp: '泥棒が入りました。', reading: 'どろぼうがはいりました。', meaning: 'Trộm đã đột nhập.' }] },

  { id: 'n4-akanbo', word: '赤ん坊', reading: 'あかんぼう', romaji: 'akanbou', meaning: 'Em bé', hanViet: 'XÍCH PHƯỜNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: '赤ん坊が泣いています。', reading: 'あかんぼうがないています。', meaning: 'Em bé đang khóc.' }] },

  { id: 'n4-kyaku', word: '客', reading: 'きゃく', romaji: 'kyaku', meaning: 'Khách', hanViet: 'KHÁCH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Con người'],
    examples: [{ jp: '客が来ました。', reading: 'きゃくがきました。', meaning: 'Khách đã đến.' }] },

  { id: 'n4-ko', word: '子', reading: 'こ', romaji: 'ko', meaning: 'Con, trẻ em', hanViet: 'TỬ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: 'いい子ですね。', reading: 'いいこですね。', meaning: 'Ngoan nhỉ.' }] },

  // ═══════════════ KHÁI NIỆM TRỪU TƯỢNG ═══════════════
  { id: 'n4-sekai', word: '世界', reading: 'せかい', romaji: 'sekai', meaning: 'Thế giới', hanViet: 'THẾ GIỚI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội'],
    examples: [{ jp: '世界は広いです。', reading: 'せかいはひろいです。', meaning: 'Thế giới rộng lớn.' }] },

  { id: 'n4-sewa', word: '世話', reading: 'せわ', romaji: 'sewa', meaning: 'Chăm sóc', hanViet: 'THẾ THOẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Quan hệ'],
    examples: [{ jp: 'お世話になりました。', reading: 'おせわになりました。', meaning: 'Cảm ơn đã chăm sóc.' }] },

  { id: 'n4-kaiwa', word: '会話', reading: 'かいわ', romaji: 'kaiwa', meaning: 'Hội thoại', hanViet: 'HỘI THOẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '日本語の会話を練習します。', reading: 'にほんごのかいわをれんしゅうします。', meaning: 'Luyện hội thoại tiếng Nhật.' }] },

  { id: 'n4-genin', word: '原因', reading: 'げんいん', romaji: 'genin', meaning: 'Nguyên nhân', hanViet: 'NGUYÊN NHÂN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tư duy'],
    examples: [{ jp: '原因を調べます。', reading: 'げんいんをしらべます。', meaning: 'Điều tra nguyên nhân.' }] },

  { id: 'n4-hantai', word: '反対', reading: 'はんたい', romaji: 'hantai', meaning: 'Phản đối, ngược lại', hanViet: 'PHẢN ĐỐI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ý kiến'],
    examples: [{ jp: '反対します。', reading: 'はんたいします。', meaning: 'Tôi phản đối.' }] },

  { id: 'n4-baai', word: '場合', reading: 'ばあい', romaji: 'baai', meaning: 'Trường hợp', hanViet: 'TRƯỜNG HỢP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: 'この場合、どうしますか。', reading: 'このばあい、どうしますか。', meaning: 'Trường hợp này, làm sao?' }] },

  { id: 'n4-kawari', word: '代わり', reading: 'かわり', romaji: 'kawari', meaning: 'Thay thế, thay mặt', hanViet: 'ĐẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '私の代わりに行ってください。', reading: 'わたしのかわりにいってください。', meaning: 'Đi thay tôi.' }] },

  { id: 'n4-ijou', word: '以上', reading: 'いじょう', romaji: 'ijou', meaning: 'Trên, trở lên', hanViet: 'DĨ THƯỢNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Số lượng'],
    examples: [{ jp: '十人以上来ました。', reading: 'じゅうにんいじょうきました。', meaning: 'Hơn 10 người đã đến.' }],
    antonyms: [{ word: '以下', reading: 'いか', meaning: 'Dưới' }] },

  { id: 'n4-ika', word: '以下', reading: 'いか', romaji: 'ika', meaning: 'Dưới, trở xuống', hanViet: 'DĨ HẠ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Số lượng'],
    examples: [{ jp: '百円以下のものを買います。', reading: 'ひゃくえんいかのものをかいます。', meaning: 'Mua đồ dưới 100 yên.' }] },

  { id: 'n4-inai', word: '以内', reading: 'いない', romaji: 'inai', meaning: 'Trong vòng', hanViet: 'DĨ NỘI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Số lượng'],
    examples: [{ jp: '三日以内に届きます。', reading: 'みっかいないにとどきます。', meaning: 'Giao trong vòng 3 ngày.' }] },

  { id: 'n4-igai', word: '以外', reading: 'いがい', romaji: 'igai', meaning: 'Ngoài, ngoại trừ', hanViet: 'DĨ NGOẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: '日曜日以外は働きます。', reading: 'にちようびいがいははたらきます。', meaning: 'Làm việc trừ Chủ nhật.' }] },

  { id: 'n4-shikata', word: '仕方', reading: 'しかた', romaji: 'shikata', meaning: 'Cách làm', hanViet: 'SỰ PHƯƠNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '仕方がありません。', reading: 'しかたがありません。', meaning: 'Không có cách nào khác.' }] },

  { id: 'n4-yoyaku', word: '予約', reading: 'よやく', romaji: 'yoyaku', meaning: 'Đặt trước, đặt chỗ', hanViet: 'DỰ ƯỚC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch'],
    examples: [{ jp: 'ホテルを予約しました。', reading: 'ホテルをよやくしました。', meaning: 'Đã đặt khách sạn.' }] },

  { id: 'n4-yoshuu', word: '予習', reading: 'よしゅう', romaji: 'yoshuu', meaning: 'Học trước, chuẩn bị bài', hanViet: 'DỰ TẬP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '明日の予習をします。', reading: 'あしたのよしゅうをします。', meaning: 'Chuẩn bị bài ngày mai.' }],
    antonyms: [{ word: '復習', reading: 'ふくしゅう', meaning: 'Ôn tập' }] },

  { id: 'n4-fukushuu', word: '復習', reading: 'ふくしゅう', romaji: 'fukushuu', meaning: 'Ôn tập, ôn bài', hanViet: 'PHỤC TẬP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '復習を忘れないでください。', reading: 'ふくしゅうをわすれないでください。', meaning: 'Đừng quên ôn bài nhé.' }] },

  { id: 'n4-sotsugyou', word: '卒業', reading: 'そつぎょう', romaji: 'sotsugyou', meaning: 'Tốt nghiệp', hanViet: 'TỐT NGHIỆP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '来年卒業します。', reading: 'らいねんそつぎょうします。', meaning: 'Năm sau tốt nghiệp.' }] },

  { id: 'n4-nyuugaku', word: '入学', reading: 'にゅうがく', romaji: 'nyuugaku', meaning: 'Nhập học', hanViet: 'NHẬP HỌC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '大学に入学しました。', reading: 'だいがくににゅうがくしました。', meaning: 'Đã nhập học đại học.' }] },

  { id: 'n4-shuppatsu', word: '出発', reading: 'しゅっぱつ', romaji: 'shuppatsu', meaning: 'Khởi hành', hanViet: 'XUẤT PHÁT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch'],
    examples: [{ jp: '出発は八時です。', reading: 'しゅっぱつははちじです。', meaning: 'Khởi hành lúc 8 giờ.' }] },

  { id: 'n4-shusseki', word: '出席', reading: 'しゅっせき', romaji: 'shusseki', meaning: 'Có mặt, tham dự', hanViet: 'XUẤT TỊCH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '会議に出席します。', reading: 'かいぎにしゅっせきします。', meaning: 'Tham dự cuộc họp.' }] },

  { id: 'n4-shippai', word: '失敗', reading: 'しっぱい', romaji: 'shippai', meaning: 'Thất bại', hanViet: 'THẤT BẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kết quả'],
    examples: [{ jp: '失敗しても大丈夫です。', reading: 'しっぱいしてもだいじょうぶです。', meaning: 'Thất bại cũng không sao.' }] },

  { id: 'n4-keikaku', word: '計画', reading: 'けいかく', romaji: 'keikaku', meaning: 'Kế hoạch', hanViet: 'KẾ HOẠCH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: '旅行の計画を立てます。', reading: 'りょこうのけいかくをたてます。', meaning: 'Lập kế hoạch du lịch.' }] },

  { id: 'n4-renraku', word: '連絡', reading: 'れんらく', romaji: 'renraku', meaning: 'Liên lạc', hanViet: 'LIÊN LẠC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '連絡してください。', reading: 'れんらくしてください。', meaning: 'Hãy liên lạc nhé.' }] },

  { id: 'n4-soudan', word: '相談', reading: 'そうだん', romaji: 'soudan', meaning: 'Thảo luận, tham khảo', hanViet: 'TƯƠNG ĐÀM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '先生に相談します。', reading: 'せんせいにそうだんします。', meaning: 'Tham khảo ý kiến giáo viên.' }] },

  { id: 'n4-kisoku', word: '規則', reading: 'きそく', romaji: 'kisoku', meaning: 'Quy tắc', hanViet: 'QUY TẮC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội'],
    examples: [{ jp: '規則を守ってください。', reading: 'きそくをまもってください。', meaning: 'Hãy tuân thủ quy tắc.' }] },

  { id: 'n4-undou', word: '運動', reading: 'うんどう', romaji: 'undou', meaning: 'Vận động, thể dục', hanViet: 'VẬN ĐỘNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sức khỏe'],
    examples: [{ jp: '毎日運動しています。', reading: 'まいにちうんどうしています。', meaning: 'Tập thể dục hàng ngày.' }] },

  { id: 'n4-unten', word: '運転', reading: 'うんてん', romaji: 'unten', meaning: 'Lái xe', hanViet: 'VẬN CHUYỂN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '運転が上手です。', reading: 'うんてんがじょうずです。', meaning: 'Lái xe giỏi.' }] },

  { id: 'n4-untenshu', word: '運転手', reading: 'うんてんしゅ', romaji: 'untenshu', meaning: 'Tài xế', hanViet: 'VẬN CHUYỂN THỦ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '運転手に聞いてください。', reading: 'うんてんしゅにきいてください。', meaning: 'Hỏi tài xế.' }] },

  { id: 'n4-kyousou', word: '競争', reading: 'きょうそう', romaji: 'kyousou', meaning: 'Cạnh tranh', hanViet: 'CẠNH TRANH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội'],
    examples: [{ jp: '激しい競争です。', reading: 'はげしいきょうそうです。', meaning: 'Cạnh tranh khốc liệt.' }] },

  { id: 'n4-annai', word: '案内', reading: 'あんない', romaji: 'annai', meaning: 'Hướng dẫn', hanViet: 'ÁN NỘI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch'],
    examples: [{ jp: '案内してもらえますか。', reading: 'あんないしてもらえますか。', meaning: 'Có thể hướng dẫn cho tôi không?' }] },

  { id: 'n4-shoukai', word: '紹介', reading: 'しょうかい', romaji: 'shoukai', meaning: 'Giới thiệu', hanViet: 'THIỆU GIỚI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '友達を紹介します。', reading: 'ともだちをしょうかいします。', meaning: 'Giới thiệu bạn bè.' }] },

  { id: 'n4-honyaku', word: '翻訳', reading: 'ほんやく', romaji: 'honyaku', meaning: 'Phiên dịch, dịch', hanViet: 'PHIÊN DỊCH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngôn ngữ'],
    examples: [{ jp: '翻訳の仕事をしています。', reading: 'ほんやくのしごとをしています。', meaning: 'Làm nghề phiên dịch.' }] },

  { id: 'n4-hatsuon', word: '発音', reading: 'はつおん', romaji: 'hatsuon', meaning: 'Phát âm', hanViet: 'PHÁT ÂM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngôn ngữ'],
    examples: [{ jp: '発音が上手ですね。', reading: 'はつおんがじょうずですね。', meaning: 'Phát âm giỏi nhỉ.' }] },

  { id: 'n4-bunpou', word: '文法', reading: 'ぶんぽう', romaji: 'bunpou', meaning: 'Ngữ pháp', hanViet: 'VĂN PHÁP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngôn ngữ'],
    examples: [{ jp: '文法を勉強しています。', reading: 'ぶんぽうをべんきょうしています。', meaning: 'Đang học ngữ pháp.' }] },

  { id: 'n4-bungaku', word: '文学', reading: 'ぶんがく', romaji: 'bungaku', meaning: 'Văn học', hanViet: 'VĂN HỌC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '日本文学が好きです。', reading: 'にほんぶんがくがすきです。', meaning: 'Thích văn học Nhật.' }] },

  { id: 'n4-suugaku', word: '数学', reading: 'すうがく', romaji: 'suugaku', meaning: 'Toán học', hanViet: 'SỐ HỌC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '数学が得意です。', reading: 'すうがくがとくいです。', meaning: 'Giỏi toán.' }] },

  { id: 'n4-igaku', word: '医学', reading: 'いがく', romaji: 'igaku', meaning: 'Y học', hanViet: 'Y HỌC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '医学を勉強しています。', reading: 'いがくをべんきょうしています。', meaning: 'Đang học y.' }] },

  { id: 'n4-kagaku', word: '科学', reading: 'かがく', romaji: 'kagaku', meaning: 'Khoa học', hanViet: 'KHOA HỌC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '科学の進歩はすごいです。', reading: 'かがくのしんぽはすごいです。', meaning: 'Sự tiến bộ của khoa học thật tuyệt.' }] },

  { id: 'n4-kenkyuu', word: '研究', reading: 'けんきゅう', romaji: 'kenkyuu', meaning: 'Nghiên cứu', hanViet: 'NGHIÊN CỨU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '研究を続けています。', reading: 'けんきゅうをつづけています。', meaning: 'Tiếp tục nghiên cứu.' }] },

  { id: 'n4-kougi', word: '講義', reading: 'こうぎ', romaji: 'kougi', meaning: 'Bài giảng', hanViet: 'GIẢNG NGHĨA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giáo dục'],
    examples: [{ jp: '講義に出ます。', reading: 'こうぎにでます。', meaning: 'Tham dự bài giảng.' }] },

  { id: 'n4-shiai', word: '試合', reading: 'しあい', romaji: 'shiai', meaning: 'Trận đấu', hanViet: 'THÍ HỢP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao'],
    examples: [{ jp: '試合を見に行きます。', reading: 'しあいをみにいきます。', meaning: 'Đi xem trận đấu.' }] },

  { id: 'n4-juudou', word: '柔道', reading: 'じゅうどう', romaji: 'juudou', meaning: 'Nhu đạo', hanViet: 'NHU ĐẠO', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao'],
    examples: [{ jp: '柔道をしています。', reading: 'じゅうどうをしています。', meaning: 'Đang tập nhu đạo.' }] },

  { id: 'n4-suiei', word: '水泳', reading: 'すいえい', romaji: 'suiei', meaning: 'Bơi lội', hanViet: 'THỦY VỊNH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao'],
    examples: [{ jp: '水泳が好きです。', reading: 'すいえいがすきです。', meaning: 'Thích bơi lội.' }] },

  { id: 'n4-hanami', word: '花見', reading: 'はなみ', romaji: 'hanami', meaning: 'Ngắm hoa anh đào', hanViet: 'HOA KIẾN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa', 'Mùa'],
    examples: [{ jp: '花見に行きましょう。', reading: 'はなみにいきましょう。', meaning: 'Đi ngắm hoa nào.' }] },

  { id: 'n4-kenbutsu', word: '見物', reading: 'けんぶつ', romaji: 'kenbutsu', meaning: 'Ngắm cảnh, tham quan', hanViet: 'KIẾN VẬT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Du lịch'],
    examples: [{ jp: '京都を見物しました。', reading: 'きょうとをけんぶつしました。', meaning: 'Đã tham quan Kyoto.' }] },

  { id: 'n4-asobi', word: '遊び', reading: 'あそび', romaji: 'asobi', meaning: 'Trò chơi, sự vui chơi', hanViet: 'DU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hoạt động'],
    examples: [{ jp: '遊びに来てください。', reading: 'あそびにきてください。', meaning: 'Đến chơi nhé.' }] },

  { id: 'n4-okurimono', word: '贈り物', reading: 'おくりもの', romaji: 'okurimono', meaning: 'Món quà', hanViet: 'TẶNG VẬT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa'],
    examples: [{ jp: '贈り物を選びます。', reading: 'おくりものをえらびます。', meaning: 'Chọn quà tặng.' }] },

  { id: 'n4-jiyuu', word: '自由', reading: 'じゆう', romaji: 'jiyuu', meaning: 'Tự do', hanViet: 'TỰ DO', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội'],
    examples: [{ jp: '自由な時間が欲しい。', reading: 'じゆうなじかんがほしい。', meaning: 'Muốn có thời gian tự do.' }] },

  { id: 'n4-kokusai', word: '国際', reading: 'こくさい', romaji: 'kokusai', meaning: 'Quốc tế', hanViet: 'QUỐC TẾ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội'],
    examples: [{ jp: '国際交流に興味があります。', reading: 'こくさいこうりゅうにきょうみがあります。', meaning: 'Quan tâm đến giao lưu quốc tế.' }] },

  { id: 'n4-seisan', word: '生産', reading: 'せいさん', romaji: 'seisan', meaning: 'Sản xuất', hanViet: 'SINH SẢN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kinh tế'],
    examples: [{ jp: '生産量が増えました。', reading: 'せいさんりょうがふえました。', meaning: 'Sản lượng đã tăng.' }] },

  { id: 'n4-boueki', word: '貿易', reading: 'ぼうえき', romaji: 'boueki', meaning: 'Thương mại, buôn bán', hanViet: 'MẬU DỊCH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kinh tế'],
    examples: [{ jp: '貿易の仕事をしています。', reading: 'ぼうえきのしごとをしています。', meaning: 'Làm nghề thương mại.' }] },

  { id: 'n4-yunyuu', word: '輸入', reading: 'ゆにゅう', romaji: 'yunyuu', meaning: 'Nhập khẩu', hanViet: 'THÂU NHẬP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kinh tế'],
    examples: [{ jp: '外国から輸入します。', reading: 'がいこくからゆにゅうします。', meaning: 'Nhập khẩu từ nước ngoài.' }],
    antonyms: [{ word: '輸出', reading: 'ゆしゅつ', meaning: 'Xuất khẩu' }] },

  { id: 'n4-yushutsu', word: '輸出', reading: 'ゆしゅつ', romaji: 'yushutsu', meaning: 'Xuất khẩu', hanViet: 'THÂU XUẤT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kinh tế'],
    examples: [{ jp: '車を輸出しています。', reading: 'くるまをゆしゅつしています。', meaning: 'Xuất khẩu ô tô.' }] },

  { id: 'n4-gijutsu', word: '技術', reading: 'ぎじゅつ', romaji: 'gijutsu', meaning: 'Kỹ thuật', hanViet: 'KỸ THUẬT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công việc'],
    examples: [{ jp: '技術が進歩しました。', reading: 'ぎじゅつがしんぽしました。', meaning: 'Kỹ thuật đã tiến bộ.' }] },

  { id: 'n4-riyuu', word: '理由', reading: 'りゆう', romaji: 'riyuu', meaning: 'Lý do', hanViet: 'LÝ DO', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tư duy'],
    examples: [{ jp: '理由を教えてください。', reading: 'りゆうをおしえてください。', meaning: 'Cho tôi biết lý do.' }] },

  { id: 'n4-wake', word: '訳', reading: 'わけ', romaji: 'wake', meaning: 'Lý do, ý nghĩa', hanViet: 'DỊCH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: 'そういうわけです。', reading: 'そういうわけです。', meaning: 'Vì lý do đó.' }] },

  { id: 'n4-kyoumi', word: '興味', reading: 'きょうみ', romaji: 'kyoumi', meaning: 'Hứng thú, quan tâm', hanViet: 'HƯNG VỊ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '日本文化に興味があります。', reading: 'にほんぶんかにきょうみがあります。', meaning: 'Quan tâm đến văn hóa Nhật.' }] },

  { id: 'n4-anshin', word: '安心', reading: 'あんしん', romaji: 'anshin', meaning: 'Yên tâm, an tâm', hanViet: 'AN TÂM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '安心しました。', reading: 'あんしんしました。', meaning: 'Yên tâm rồi.' }] },

  { id: 'n4-shinpai', word: '心配', reading: 'しんぱい', romaji: 'shinpai', meaning: 'Lo lắng', hanViet: 'TÂM PHỐI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '心配しないでください。', reading: 'しんぱいしないでください。', meaning: 'Đừng lo lắng.' }] },

  { id: 'n4-kokoro', word: '心', reading: 'こころ', romaji: 'kokoro', meaning: 'Trái tim, tâm hồn', hanViet: 'TÂM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '心が温かくなりました。', reading: 'こころがあたたかくなりました。', meaning: 'Trái tim ấm lên.' }] },

  { id: 'n4-yume', word: '夢', reading: 'ゆめ', romaji: 'yume', meaning: 'Giấc mơ, ước mơ', hanViet: 'MỘNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cuộc sống'],
    examples: [{ jp: '夢を追いかけています。', reading: 'ゆめをおいかけています。', meaning: 'Đang theo đuổi ước mơ.' }] },

  { id: 'n4-shourai', word: '将来', reading: 'しょうらい', romaji: 'shourai', meaning: 'Tương lai', hanViet: 'TƯƠNG LAI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '将来の夢は何ですか。', reading: 'しょうらいのゆめはなんですか。', meaning: 'Ước mơ tương lai là gì?' }] },

  { id: 'n4-jidai', word: '時代', reading: 'じだい', romaji: 'jidai', meaning: 'Thời đại', hanViet: 'THỜI ĐẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Lịch sử'],
    examples: [{ jp: '江戸時代が好きです。', reading: 'えどじだいがすきです。', meaning: 'Thích thời đại Edo.' }] },

  { id: 'n4-mukashi', word: '昔', reading: 'むかし', romaji: 'mukashi', meaning: 'Ngày xưa, xa xưa', hanViet: 'TÍCH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '昔ここに住んでいました。', reading: 'むかしここにすんでいました。', meaning: 'Ngày xưa sống ở đây.' }] },

  { id: 'n4-saikin', word: '最近', reading: 'さいきん', romaji: 'saikin', meaning: 'Gần đây, dạo này', hanViet: 'TỐI CẬN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '最近忙しいです。', reading: 'さいきんいそがしいです。', meaning: 'Dạo này bận.' }] },

  { id: 'n4-saisho', word: '最初', reading: 'さいしょ', romaji: 'saisho', meaning: 'Đầu tiên', hanViet: 'TỐI SƠ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '最初に自己紹介をします。', reading: 'さいしょにじこしょうかいをします。', meaning: 'Đầu tiên, tự giới thiệu.' }],
    antonyms: [{ word: '最後', reading: 'さいご', meaning: 'Cuối cùng' }] },

  { id: 'n4-saigo', word: '最後', reading: 'さいご', romaji: 'saigo', meaning: 'Cuối cùng', hanViet: 'TỐI HẬU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '最後まで頑張ります。', reading: 'さいごまでがんばります。', meaning: 'Cố gắng đến cuối cùng.' }] },

  { id: 'n4-hirayasumi', word: '昼休み', reading: 'ひるやすみ', romaji: 'hiruyasumi', meaning: 'Giờ nghỉ trưa', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '昼休みに食べます。', reading: 'ひるやすみにたべます。', meaning: 'Ăn vào giờ nghỉ trưa.' }] },

  { id: 'n4-konya', word: '今夜', reading: 'こんや', romaji: 'konya', meaning: 'Tối nay', hanViet: 'KIM DẠ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '今夜は暇ですか。', reading: 'こんやはひまですか。', meaning: 'Tối nay rảnh không?' }] },

  { id: 'n4-kondo', word: '今度', reading: 'こんど', romaji: 'kondo', meaning: 'Lần tới, lần này', hanViet: 'KIM ĐỘ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '今度遊びに行きましょう。', reading: 'こんどあそびにいきましょう。', meaning: 'Lần tới đi chơi nào.' }] },

  { id: 'n4-kisetsu', word: '季節', reading: 'きせつ', romaji: 'kisetsu', meaning: 'Mùa, thời tiết', hanViet: 'QUÝ TIẾT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời tiết'],
    examples: [{ jp: '好きな季節は春です。', reading: 'すきなきせつははるです。', meaning: 'Mùa yêu thích là mùa xuân.' }] },

  { id: 'n4-taifuu', word: '台風', reading: 'たいふう', romaji: 'taifuu', meaning: 'Bão', hanViet: 'ĐÀI PHONG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời tiết'],
    examples: [{ jp: '台風が来ています。', reading: 'たいふうがきています。', meaning: 'Bão đang đến.' }] },

  { id: 'n4-kuuki', word: '空気', reading: 'くうき', romaji: 'kuuki', meaning: 'Không khí', hanViet: 'KHÔNG KHÍ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '空気がきれいです。', reading: 'くうきがきれいです。', meaning: 'Không khí sạch.' }] },

  { id: 'n4-kumo', word: '雲', reading: 'くも', romaji: 'kumo', meaning: 'Mây', hanViet: 'VÂN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '雲がきれいです。', reading: 'くもがきれいです。', meaning: 'Mây đẹp quá.' }] },

  { id: 'n4-hoshi', word: '星', reading: 'ほし', romaji: 'hoshi', meaning: 'Ngôi sao', hanViet: 'TINH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '星がきれいに見えます。', reading: 'ほしがきれいにみえます。', meaning: 'Nhìn thấy sao rất đẹp.' }] },

  { id: 'n4-suna', word: '砂', reading: 'すな', romaji: 'suna', meaning: 'Cát', hanViet: 'SA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '砂の上を歩きます。', reading: 'すなのうえをあるきます。', meaning: 'Đi trên cát.' }] },

  { id: 'n4-ishi', word: '石', reading: 'いし', romaji: 'ishi', meaning: 'Đá', hanViet: 'THẠCH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '大きな石がありました。', reading: 'おおきないしがありました。', meaning: 'Có một hòn đá lớn.' }] },

  { id: 'n4-kusa', word: '草', reading: 'くさ', romaji: 'kusa', meaning: 'Cỏ', hanViet: 'THẢO', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '草の上に座りました。', reading: 'くさのうえにすわりました。', meaning: 'Ngồi trên cỏ.' }] },

  { id: 'n4-ha', word: '葉', reading: 'は', romaji: 'ha', meaning: 'Lá', hanViet: 'DIỆP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '葉が落ちました。', reading: 'はがおちました。', meaning: 'Lá rụng rồi.' }] },

  { id: 'n4-mushi', word: '虫', reading: 'むし', romaji: 'mushi', meaning: 'Côn trùng', hanViet: 'TRÙNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '虫が怖いです。', reading: 'むしがこわいです。', meaning: 'Sợ côn trùng.' }] },

  { id: 'n4-kotori', word: '小鳥', reading: 'ことり', romaji: 'kotori', meaning: 'Chim nhỏ', hanViet: 'TIỂU ĐIỂU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '小鳥が歌っています。', reading: 'ことりがうたっています。', meaning: 'Chim nhỏ đang hót.' }] },

  { id: 'n4-hi', word: '火', reading: 'ひ', romaji: 'hi', meaning: 'Lửa', hanViet: 'HỎA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '火をつけてください。', reading: 'ひをつけてください。', meaning: 'Hãy bật lửa.' }] },
];

// ── from: vocabN4_Part5.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB N4 Part 5 — Remaining N4 words (~144 entries)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_N4_PART5: VocabEntry[] = [
  // ═══════════════ PHÓ TỪ / LIÊN TỪ ═══════════════
  { id: 'n4-sutto', word: 'すっと', reading: 'すっと', romaji: 'sutto', meaning: 'Nhanh nhẹn, lướt qua', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'すっと立ち上がった。', reading: 'すっとたちあがった。', meaning: 'Đứng dậy nhanh nhẹn.' }] },

  { id: 'n4-ichido', word: '一度', reading: 'いちど', romaji: 'ichido', meaning: 'Một lần', hanViet: 'NHẤT ĐỘ', type: 'Phó từ', jlpt: 'N4',
    tags: ['Số lần'],
    examples: [{ jp: '一度日本に行きたい。', reading: 'いちどにほんにいきたい。', meaning: 'Muốn đi Nhật một lần.' }] },

  { id: 'n4-isshoukenmei', word: '一生懸命', reading: 'いっしょうけんめい', romaji: 'isshoukenmei', meaning: 'Hết sức, cố gắng hết mình', hanViet: 'NHẤT SINH HUYỀN MỆNH', type: 'Phó từ', jlpt: 'N4',
    tags: ['Thái độ'],
    examples: [{ jp: '一生懸命勉強しています。', reading: 'いっしょうけんめいべんきょうしています。', meaning: 'Đang học hành hết sức.' }] },

  { id: 'n4-nakanaka', word: '中々', reading: 'なかなか', romaji: 'nakanaka', meaning: 'Mãi mà (không), khá', hanViet: 'TRUNG TRUNG', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: 'なかなか上手ですね。', reading: 'なかなかじょうずですね。', meaning: 'Khá giỏi nhỉ.' }] },

  { id: 'n4-hisashiburi', word: '久しぶり', reading: 'ひさしぶり', romaji: 'hisashiburi', meaning: 'Lâu rồi mới gặp', hanViet: 'CỬU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Chào hỏi'],
    examples: [{ jp: 'お久しぶりです！', reading: 'おひさしぶりです！', meaning: 'Lâu quá mới gặp!' }] },

  { id: 'n4-tatoeba', word: '例えば', reading: 'たとえば', romaji: 'tatoeba', meaning: 'Ví dụ như', hanViet: 'LỆ', type: 'Phó từ', jlpt: 'N4',
    tags: ['Liên từ'],
    examples: [{ jp: '例えば、日本語の本を読みます。', reading: 'たとえば、にほんごのほんをよみます。', meaning: 'Ví dụ, đọc sách tiếng Nhật.' }] },

  { id: 'n4-juubun', word: '十分', reading: 'じゅうぶん', romaji: 'juubun', meaning: 'Đủ, đầy đủ', hanViet: 'THẬP PHẦN', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Mức độ'],
    examples: [{ jp: '十分です、ありがとう。', reading: 'じゅうぶんです、ありがとう。', meaning: 'Đủ rồi, cảm ơn.' }] },

  { id: 'n4-kesshite', word: '決して', reading: 'けっして', romaji: 'kesshite', meaning: 'Tuyệt đối không', hanViet: 'QUYẾT', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phủ định'],
    examples: [{ jp: '決して忘れません。', reading: 'けっしてわすれません。', meaning: 'Tuyệt đối không quên.' }] },

  { id: 'n4-hijou', word: '非常に', reading: 'ひじょうに', romaji: 'hijou ni', meaning: 'Vô cùng, cực kỳ', hanViet: 'PHI THƯỜNG', type: 'Phó từ', jlpt: 'N4',
    tags: ['Mức độ'],
    examples: [{ jp: '非常に大切です。', reading: 'ひじょうにたいせつです。', meaning: 'Vô cùng quan trọng.' }] },

  { id: 'n4-kanarazu', word: '必ず', reading: 'かならず', romaji: 'kanarazu', meaning: 'Chắc chắn, nhất định', hanViet: 'TẤT', type: 'Phó từ', jlpt: 'N4',
    tags: ['Phó từ'],
    examples: [{ jp: '必ず来てください。', reading: 'かならずきてください。', meaning: 'Nhất định phải đến nhé.' }] },

  { id: 'n4-daibun', word: '大分', reading: 'だいぶ', romaji: 'daibu', meaning: 'Khá, đáng kể', hanViet: 'ĐẠI PHẦN', type: 'Phó từ', jlpt: 'N4',
    tags: ['Mức độ'],
    examples: [{ jp: '大分暖かくなりました。', reading: 'だいぶあたたかくなりました。', meaning: 'Đã ấm lên khá nhiều.' }] },

  // ═══════════════ TÍNH TỪ ═══════════════
  { id: 'n4-fuben', word: '不便', reading: 'ふべん', romaji: 'fuben', meaning: 'Bất tiện', hanViet: 'BẤT TIỆN', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: '交通が不便です。', reading: 'こうつうがふべんです。', meaning: 'Giao thông bất tiện.' }] },

  { id: 'n4-yasashii-kind', word: '優しい', reading: 'やさしい', romaji: 'yasashii', meaning: 'Hiền lành, dịu dàng', hanViet: 'ƯU', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Tính cách'],
    examples: [{ jp: '彼女は優しい人です。', reading: 'かのじょはやさしいひとです。', meaning: 'Cô ấy là người hiền.' }] },

  { id: 'n4-sugoi', word: '凄い', reading: 'すごい', romaji: 'sugoi', meaning: 'Ghê, kinh khủng, tuyệt', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: 'すごい！上手ですね。', reading: 'すごい！じょうずですね。', meaning: 'Tuyệt vời! Giỏi quá.' }] },

  { id: 'n4-kibishii', word: '厳しい', reading: 'きびしい', romaji: 'kibishii', meaning: 'Nghiêm khắc, khắt khe', hanViet: 'NGHIÊM', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Tính cách'],
    examples: [{ jp: '先生は厳しいです。', reading: 'せんせいはきびしいです。', meaning: 'Thầy giáo nghiêm khắc.' }] },

  { id: 'n4-katai', word: '固い', reading: 'かたい', romaji: 'katai', meaning: 'Cứng, chắc', hanViet: 'CỐ', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Đặc tính'],
    examples: [{ jp: 'このパンは固いです。', reading: 'このパンはかたいです。', meaning: 'Bánh mì này cứng.' }] },

  { id: 'n4-katai2', word: '硬', reading: 'かたい', romaji: 'katai', meaning: 'Cứng (chất liệu)', hanViet: 'NGẠNH', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Đặc tính'],
    examples: [{ jp: '硬い石です。', reading: 'かたいいしです。', meaning: 'Đá cứng.' }] },

  { id: 'n4-katai3', word: '堅', reading: 'かたい', romaji: 'katai', meaning: 'Cứng rắn, kiên cố', hanViet: 'KIÊN', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Đặc tính'],
    examples: [{ jp: '堅い決意です。', reading: 'かたいけついです。', meaning: 'Quyết tâm vững chắc.' }] },

  { id: 'n4-yawarakai', word: '柔らかい', reading: 'やわらかい', romaji: 'yawarakai', meaning: 'Mềm', hanViet: 'NHU', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Đặc tính'],
    examples: [{ jp: '柔らかい布団です。', reading: 'やわらかいふとんです。', meaning: 'Nệm mềm.' }] },

  { id: 'n4-mezurashii', word: '珍しい', reading: 'めずらしい', romaji: 'mezurashii', meaning: 'Hiếm, lạ', hanViet: 'TRÂN', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: '珍しい花ですね。', reading: 'めずらしいはなですね。', meaning: 'Hoa hiếm nhỉ.' }] },

  { id: 'n4-nemui', word: '眠い', reading: 'ねむい', romaji: 'nemui', meaning: 'Buồn ngủ', hanViet: 'MIÊN', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Cảm giác'],
    examples: [{ jp: '眠いので寝ます。', reading: 'ねむいのでねます。', meaning: 'Buồn ngủ nên đi ngủ.' }] },

  { id: 'n4-komakai', word: '細かい', reading: 'こまかい', romaji: 'komakai', meaning: 'Nhỏ, chi tiết, tỉ mỉ', hanViet: 'TẾ', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Đặc tính'],
    examples: [{ jp: '細かいお金はありますか。', reading: 'こまかいおかねはありますか。', meaning: 'Có tiền lẻ không?' }] },

  { id: 'n4-utsukushii', word: '美しい', reading: 'うつくしい', romaji: 'utsukushii', meaning: 'Đẹp, xinh đẹp', hanViet: 'MỸ', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: '美しい景色ですね。', reading: 'うつくしいけしきですね。', meaning: 'Phong cảnh đẹp nhỉ.' }] },

  { id: 'n4-nigai', word: '苦い', reading: 'にがい', romaji: 'nigai', meaning: 'Đắng', hanViet: 'KHỔ', type: 'Tính từ -い', jlpt: 'N4',
    tags: ['Vị giác'],
    examples: [{ jp: 'この薬は苦いです。', reading: 'このくすりはにがいです。', meaning: 'Thuốc này đắng.' }] },

  { id: 'n4-zannen', word: '残念', reading: 'ざんねん', romaji: 'zannen', meaning: 'Đáng tiếc, tiếc', hanViet: 'TÀN NIỆM', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '残念ですが、行けません。', reading: 'ざんねんですが、いけません。', meaning: 'Tiếc quá, không đi được.' }] },

  { id: 'n4-hen', word: '変', reading: 'へん', romaji: 'hen', meaning: 'Lạ, kỳ quặc', hanViet: 'BIẾN', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: '変な音がします。', reading: 'へんなおとがします。', meaning: 'Có tiếng lạ.' }] },

  { id: 'n4-tekitou', word: '適当', reading: 'てきとう', romaji: 'tekitou', meaning: 'Thích hợp; qua loa', hanViet: 'THÍCH ĐƯƠNG', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: '適当に選んでください。', reading: 'てきとうにえらんでください。', meaning: 'Chọn đại đi.' }] },

  { id: 'n4-muri', word: '無理', reading: 'むり', romaji: 'muri', meaning: 'Miễn cưỡng, không thể', hanViet: 'VÔ LÝ', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: '無理しないでください。', reading: 'むりしないでください。', meaning: 'Đừng cố quá sức.' }] },

  { id: 'n4-sakann', word: '盛ん', reading: 'さかん', romaji: 'sakan', meaning: 'Thịnh hành, sôi nổi', hanViet: 'THỊNH', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: 'この地方はお茶が盛んです。', reading: 'このちほうはおちゃがさかんです。', meaning: 'Vùng này trà thịnh hành.' }] },

  { id: 'n4-daiji', word: '大事', reading: 'だいじ', romaji: 'daiji', meaning: 'Quan trọng', hanViet: 'ĐẠI SỰ', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: '健康は大事です。', reading: 'けんこうはだいじです。', meaning: 'Sức khỏe quan trọng.' }] },

  // ═══════════════ ĐỘNG TỪ ═══════════════
  { id: 'n4-hikaru', word: '光る', reading: 'ひかる', romaji: 'hikaru', meaning: 'Sáng, tỏa sáng', hanViet: 'QUANG', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '星が光っている。', reading: 'ほしがひかっている。', meaning: 'Sao đang tỏa sáng.' }] },

  { id: 'n4-yoru', word: '寄る', reading: 'よる', romaji: 'yoru', meaning: 'Ghé, tạt vào', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: 'コンビニに寄ります。', reading: 'コンビニによります。', meaning: 'Ghé cửa hàng tiện lợi.' }] },

  { id: 'n4-sumu-finish', word: '済む', reading: 'すむ', romaji: 'sumu', meaning: 'Xong, hoàn tất', hanViet: 'TẾ', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Hành động'],
    examples: [{ jp: '仕事が済みました。', reading: 'しごとがすみました。', meaning: 'Việc đã xong.' }] },

  { id: 'n4-tanoshimu', word: '楽む', reading: 'たのしむ', romaji: 'tanoshimu', meaning: 'Vui thích, tận hưởng', hanViet: 'LẠC', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '旅行を楽しんでください。', reading: 'りょこうをたのしんでください。', meaning: 'Hãy tận hưởng chuyến đi.' }] },

  // ═══════════════ DANH TỪ — Thời gian / Tần suất ═══════════════
  { id: 'n4-hiruma', word: '昼間', reading: 'ひるま', romaji: 'hiruma', meaning: 'Ban ngày', hanViet: 'TRÚ GIAN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '昼間は暑いです。', reading: 'ひるまはあついです。', meaning: 'Ban ngày nóng.' }] },

  // ═══════════════ DANH TỪ — Người / Gia đình ═══════════════
  { id: 'n4-mina', word: '皆', reading: 'みな', romaji: 'mina', meaning: 'Mọi người', hanViet: 'GIAI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Người'],
    examples: [{ jp: '皆元気ですか。', reading: 'みなげんきですか。', meaning: 'Mọi người khỏe không?' }] },

  { id: 'n4-sobo', word: '祖母', reading: 'そぼ', romaji: 'sobo', meaning: 'Bà ngoại/nội (khiêm nhường)', hanViet: 'TỔ MẪU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: '祖母は八十歳です。', reading: 'そぼははちじゅっさいです。', meaning: 'Bà tôi 80 tuổi.' }] },

  { id: 'n4-sofu', word: '祖父', reading: 'そふ', romaji: 'sofu', meaning: 'Ông ngoại/nội (khiêm nhường)', hanViet: 'TỔ PHỤ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: '祖父は元気です。', reading: 'そふはげんきです。', meaning: 'Ông tôi khỏe.' }] },

  { id: 'n4-oya', word: '親', reading: 'おや', romaji: 'oya', meaning: 'Bố mẹ, cha mẹ', hanViet: 'THÂN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Gia đình'],
    examples: [{ jp: '親に感謝しています。', reading: 'おやにかんしゃしています。', meaning: 'Biết ơn bố mẹ.' }] },

  // ═══════════════ DANH TỪ — Đồ vật / Quần áo ═══════════════
  { id: 'n4-shitagi', word: '下着', reading: 'したぎ', romaji: 'shitagi', meaning: 'Đồ lót', hanViet: 'HẠ TRƯỚC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Quần áo'],
    examples: [{ jp: '下着を洗濯しました。', reading: 'したぎをせんたくしました。', meaning: 'Đã giặt đồ lót.' }] },

  { id: 'n4-ningyou', word: '人形', reading: 'にんぎょう', romaji: 'ningyou', meaning: 'Búp bê, hình nhân', hanViet: 'NHÂN HÌNH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ vật'],
    examples: [{ jp: '日本の人形はきれいです。', reading: 'にほんのにんぎょうはきれいです。', meaning: 'Búp bê Nhật đẹp.' }] },

  { id: 'n4-futon', word: '布団', reading: 'ふとん', romaji: 'futon', meaning: 'Nệm, chăn (kiểu Nhật)', hanViet: 'BỐ ĐOÀN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ dùng', 'Nhà'],
    examples: [{ jp: '布団を敷きました。', reading: 'ふとんをしきました。', meaning: 'Đã trải nệm.' }] },

  { id: 'n4-tebukuro', word: '手袋', reading: 'てぶくろ', romaji: 'tebukuro', meaning: 'Găng tay', hanViet: 'THỦ ĐẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Quần áo'],
    examples: [{ jp: '手袋をしてください。', reading: 'てぶくろをしてください。', meaning: 'Hãy đeo găng tay.' }] },

  { id: 'n4-yubiwa', word: '指輪', reading: 'ゆびわ', romaji: 'yubiwa', meaning: 'Nhẫn', hanViet: 'CHỈ LUÂN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Phụ kiện'],
    examples: [{ jp: '指輪をもらいました。', reading: 'ゆびわをもらいました。', meaning: 'Nhận được nhẫn.' }] },

  { id: 'n4-kimono', word: '着物', reading: 'きもの', romaji: 'kimono', meaning: 'Kimono, quần áo Nhật', hanViet: 'TRƯỚC VẬT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Quần áo', 'Văn hóa'],
    examples: [{ jp: '着物を着てみたい。', reading: 'きものをきてみたい。', meaning: 'Muốn thử mặc kimono.' }] },

  { id: 'n4-kagami', word: '鏡', reading: 'かがみ', romaji: 'kagami', meaning: 'Gương', hanViet: 'KÍNH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ dùng'],
    examples: [{ jp: '鏡を見てください。', reading: 'かがみをみてください。', meaning: 'Hãy nhìn vào gương.' }] },

  { id: 'n4-dougu', word: '道具', reading: 'どうぐ', romaji: 'dougu', meaning: 'Dụng cụ, đồ dùng', hanViet: 'ĐẠO CỤ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ vật'],
    examples: [{ jp: '道具を準備してください。', reading: 'どうぐをじゅんびしてください。', meaning: 'Hãy chuẩn bị dụng cụ.' }] },

  { id: 'n4-keshigomu', word: '消しゴム', reading: 'けしゴム', romaji: 'keshigomu', meaning: 'Cục tẩy', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn phòng phẩm'],
    examples: [{ jp: '消しゴムを貸してください。', reading: 'けしゴムをかしてください。', meaning: 'Cho mượn cục tẩy.' }] },

  { id: 'n4-shinamono', word: '品物', reading: 'しなもの', romaji: 'shinamono', meaning: 'Hàng hóa, đồ vật', hanViet: 'PHẨM VẬT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mua sắm'],
    examples: [{ jp: 'この品物は高いです。', reading: 'このしなものはたかいです。', meaning: 'Hàng này đắt.' }] },

  { id: 'n4-tatami', word: '畳', reading: 'たたみ', romaji: 'tatami', meaning: 'Chiếu tatami', hanViet: 'ĐIỆP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nhà', 'Văn hóa'],
    examples: [{ jp: '畳の部屋が好きです。', reading: 'たたみのへやがすきです。', meaning: 'Thích phòng tatami.' }] },

  // ═══════════════ DANH TỪ — Nơi chốn / Giao thông ═══════════════
  { id: 'n4-juusho', word: '住所', reading: 'じゅうしょ', romaji: 'juusho', meaning: 'Địa chỉ', hanViet: 'TRÚ SỞ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thông tin cá nhân'],
    examples: [{ jp: '住所を書いてください。', reading: 'じゅうしょをかいてください。', meaning: 'Hãy viết địa chỉ.' }] },

  { id: 'n4-basho', word: '場所', reading: 'ばしょ', romaji: 'basho', meaning: 'Nơi, địa điểm', hanViet: 'TRƯỜNG SỞ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '場所を教えてください。', reading: 'ばしょをおしえてください。', meaning: 'Cho tôi biết địa điểm.' }] },

  { id: 'n4-mawari', word: '周り', reading: 'まわり', romaji: 'mawari', meaning: 'Xung quanh', hanViet: 'CHU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Vị trí'],
    examples: [{ jp: '周りを見てください。', reading: 'まわりをみてください。', meaning: 'Hãy nhìn xung quanh.' }] },

  { id: 'n4-mannaka', word: '真中', reading: 'まんなか', romaji: 'mannaka', meaning: 'Chính giữa', hanViet: 'CHÂN TRUNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Vị trí'],
    examples: [{ jp: '真ん中に座ってください。', reading: 'まんなかにすわってください。', meaning: 'Hãy ngồi chính giữa.' }] },

  { id: 'n4-tooku', word: '遠く', reading: 'とおく', romaji: 'tooku', meaning: 'Nơi xa', hanViet: 'VIỄN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Vị trí'],
    examples: [{ jp: '遠くに山が見えます。', reading: 'とおくにやまがみえます。', meaning: 'Thấy núi ở xa.' }] },

  { id: 'n4-kisha', word: '汽車', reading: 'きしゃ', romaji: 'kisha', meaning: 'Tàu hỏa (chạy hơi nước)', hanViet: 'KHÍ XA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '汽車に乗りました。', reading: 'きしゃにのりました。', meaning: 'Đã lên tàu hỏa.' }] },

  { id: 'n4-tokkyuu', word: '特急', reading: 'とっきゅう', romaji: 'tokkyuu', meaning: 'Tàu tốc hành đặc biệt', hanViet: 'ĐẶC CẤP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '特急で大阪に行きます。', reading: 'とっきゅうでおおさかにいきます。', meaning: 'Đi Osaka bằng tàu tốc hành.' }] },

  { id: 'n4-kyuukou', word: '急行', reading: 'きゅうこう', romaji: 'kyuukou', meaning: 'Tàu nhanh', hanViet: 'CẤP HÀNH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '急行に乗ります。', reading: 'きゅうこうにのります。', meaning: 'Đi tàu nhanh.' }] },

  // ═══════════════ DANH TỪ — Cơ thể ═══════════════
  { id: 'n4-yubi', word: '指', reading: 'ゆび', romaji: 'yubi', meaning: 'Ngón tay', hanViet: 'CHỈ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cơ thể'],
    examples: [{ jp: '指を切りました。', reading: 'ゆびをきりました。', meaning: 'Bị đứt tay.' }] },

  { id: 'n4-ude', word: '腕', reading: 'うで', romaji: 'ude', meaning: 'Cánh tay', hanViet: 'OẢN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cơ thể'],
    examples: [{ jp: '腕が痛いです。', reading: 'うでがいたいです。', meaning: 'Đau cánh tay.' }] },

  { id: 'n4-senaka', word: '背中', reading: 'せなか', romaji: 'senaka', meaning: 'Lưng', hanViet: 'BỘI TRUNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cơ thể'],
    examples: [{ jp: '背中が痛い。', reading: 'せなかがいたい。', meaning: 'Đau lưng.' }] },

  { id: 'n4-chi', word: '血', reading: 'ち', romaji: 'chi', meaning: 'Máu', hanViet: 'HUYẾT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cơ thể'],
    examples: [{ jp: '血が出ています。', reading: 'ちがでています。', meaning: 'Đang chảy máu.' }] },

  { id: 'n4-kami-hair', word: '髪', reading: 'かみ', romaji: 'kami', meaning: 'Tóc', hanViet: 'PHÁT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cơ thể'],
    examples: [{ jp: '髪を切りました。', reading: 'かみをきりました。', meaning: 'Đã cắt tóc.' }] },

  { id: 'n4-kubi', word: '首', reading: 'くび', romaji: 'kubi', meaning: 'Cổ', hanViet: 'THỦ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cơ thể'],
    examples: [{ jp: '首が痛い。', reading: 'くびがいたい。', meaning: 'Đau cổ.' }] },

  { id: 'n4-ke', word: '毛', reading: 'け', romaji: 'ke', meaning: 'Lông, tóc', hanViet: 'MAO', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cơ thể'],
    examples: [{ jp: '猫の毛が白い。', reading: 'ねこのけがしろい。', meaning: 'Lông mèo trắng.' }] },

  // ═══════════════ DANH TỪ — Thức ăn / Gia dụng ═══════════════
  { id: 'n4-aji', word: '味', reading: 'あじ', romaji: 'aji', meaning: 'Vị, hương vị', hanViet: 'VỊ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: 'この味が好きです。', reading: 'このあじがすきです。', meaning: 'Thích vị này.' }] },

  { id: 'n4-miso', word: '味噌', reading: 'みそ', romaji: 'miso', meaning: 'Tương miso', hanViet: 'VỊ TẠNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thức ăn', 'Gia vị'],
    examples: [{ jp: '味噌汁を飲みます。', reading: 'みそしるをのみます。', meaning: 'Uống canh miso.' }] },

  { id: 'n4-kome', word: '米', reading: 'こめ', romaji: 'kome', meaning: 'Gạo', hanViet: 'MỄ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: '米を洗います。', reading: 'こめをあらいます。', meaning: 'Vo gạo.' }] },

  { id: 'n4-shokuryouhin', word: '食料品', reading: 'しょくりょうひん', romaji: 'shokuryouhin', meaning: 'Thực phẩm', hanViet: 'THỰC LIỆU PHẨM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Mua sắm', 'Thức ăn'],
    examples: [{ jp: '食料品を買いに行きます。', reading: 'しょくりょうひんをかいにいきます。', meaning: 'Đi mua thực phẩm.' }] },

  { id: 'n4-shokuji', word: '食事', reading: 'しょくじ', romaji: 'shokuji', meaning: 'Bữa ăn', hanViet: 'THỰC SỰ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thức ăn'],
    examples: [{ jp: '食事をしましょう。', reading: 'しょくじをしましょう。', meaning: 'Ăn thôi.' }] },

  { id: 'n4-yu', word: '湯', reading: 'ゆ', romaji: 'yu', meaning: 'Nước nóng', hanViet: 'THANG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ uống'],
    examples: [{ jp: 'お湯を沸かします。', reading: 'おゆをわかします。', meaning: 'Đun nước nóng.' }] },

  { id: 'n4-suidou', word: '水道', reading: 'すいどう', romaji: 'suidou', meaning: 'Nước máy, ống nước', hanViet: 'THỦY ĐẠO', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nhà'],
    examples: [{ jp: '水道が壊れました。', reading: 'すいどうがこわれました。', meaning: 'Ống nước bị hỏng.' }] },

  { id: 'n4-reibou', word: '冷房', reading: 'れいぼう', romaji: 'reibou', meaning: 'Máy lạnh, điều hòa mát', hanViet: 'LÃNH PHÒNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ gia dụng'],
    examples: [{ jp: '冷房をつけてください。', reading: 'れいぼうをつけてください。', meaning: 'Bật máy lạnh đi.' }],
    antonyms: [{ word: '暖房', reading: 'だんぼう', meaning: 'Máy sưởi' }] },

  { id: 'n4-danbou', word: '暖房', reading: 'だんぼう', romaji: 'danbou', meaning: 'Máy sưởi, hệ thống sưởi', hanViet: 'NOÃN PHÒNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ gia dụng'],
    examples: [{ jp: '暖房をつけましょう。', reading: 'だんぼうをつけましょう。', meaning: 'Bật máy sưởi thôi.' }] },

  { id: 'n4-denpou', word: '電報', reading: 'でんぽう', romaji: 'denpou', meaning: 'Điện báo', hanViet: 'ĐIỆN BÁO', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thư tín'],
    examples: [{ jp: '電報を送りました。', reading: 'でんぽうをおくりました。', meaning: 'Đã gửi điện báo.' }] },

  { id: 'n4-dentou', word: '電灯', reading: 'でんとう', romaji: 'dentou', meaning: 'Đèn điện', hanViet: 'ĐIỆN ĐĂNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ gia dụng'],
    examples: [{ jp: '電灯をつけてください。', reading: 'でんとうをつけてください。', meaning: 'Bật đèn đi.' }] },

  // ═══════════════ DANH TỪ — Trường / Công việc / Xã hội  ═══════════════
  { id: 'n4-seki', word: '席', reading: 'せき', romaji: 'seki', meaning: 'Chỗ ngồi', hanViet: 'TỊCH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '席を予約しました。', reading: 'せきをよやくしました。', meaning: 'Đã đặt chỗ.' }] },

  { id: 'n4-uketsuke', word: '受付', reading: 'うけつけ', romaji: 'uketsuke', meaning: 'Quầy lễ tân', hanViet: 'THỤ PHÓ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '受付で聞いてください。', reading: 'うけつけできいてください。', meaning: 'Hỏi ở quầy lễ tân.' }] },

  { id: 'n4-kenkyuushitsu', word: '研究室', reading: 'けんきゅうしつ', romaji: 'kenkyuushitsu', meaning: 'Phòng nghiên cứu', hanViet: 'NGHIÊN CỨU THẤT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trường học'],
    examples: [{ jp: '研究室で勉強します。', reading: 'けんきゅうしつでべんきょうします。', meaning: 'Học trong phòng nghiên cứu.' }] },

  { id: 'n4-shimin', word: '市民', reading: 'しみん', romaji: 'shimin', meaning: 'Công dân thành phố', hanViet: 'THỊ DÂN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Xã hội'],
    examples: [{ jp: '市民の義務です。', reading: 'しみんのぎむです。', meaning: 'Nghĩa vụ của công dân.' }] },

  { id: 'n4-shi', word: '市', reading: 'し', romaji: 'shi', meaning: 'Thành phố (đơn vị hành chính)', hanViet: 'THỊ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Địa lý'],
    examples: [{ jp: '東京市に住んでいます。', reading: 'とうきょうしにすんでいます。', meaning: 'Sống ở thành phố Tokyo.' }] },

  { id: 'n4-kougyou', word: '工業', reading: 'こうぎょう', romaji: 'kougyou', meaning: 'Công nghiệp', hanViet: 'CÔNG NGHIỆP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Kinh tế'],
    examples: [{ jp: '工業が発展しています。', reading: 'こうぎょうがはってんしています。', meaning: 'Công nghiệp đang phát triển.' }] },

  { id: 'n4-housou', word: '放送', reading: 'ほうそう', romaji: 'housou', meaning: 'Phát sóng', hanViet: 'PHÓNG TỐNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Truyền thông'],
    examples: [{ jp: 'テレビで放送します。', reading: 'テレビでほうそうします。', meaning: 'Phát sóng trên TV.' }] },

  { id: 'n4-manga', word: '漫画', reading: 'まんが', romaji: 'manga', meaning: 'Truyện tranh', hanViet: 'MẠN HỌA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giải trí'],
    examples: [{ jp: '漫画を読むのが好きです。', reading: 'まんがをよむのがすきです。', meaning: 'Thích đọc truyện tranh.' }] },

  { id: 'n4-bangumi', word: '番組', reading: 'ばんぐみ', romaji: 'bangumi', meaning: 'Chương trình (TV/radio)', hanViet: 'PHIÊN TỔ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giải trí'],
    examples: [{ jp: 'この番組は面白い。', reading: 'このばんぐみはおもしろい。', meaning: 'Chương trình này thú vị.' }] },

  { id: 'n4-nikki', word: '日記', reading: 'にっき', romaji: 'nikki', meaning: 'Nhật ký', hanViet: 'NHẬT KÝ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Viết'],
    examples: [{ jp: '毎日日記を書きます。', reading: 'まいにちにっきをかきます。', meaning: 'Mỗi ngày viết nhật ký.' }] },

  { id: 'n4-koshyou', word: '故障', reading: 'こしょう', romaji: 'koshou', meaning: 'Hỏng, trục trặc', hanViet: 'CỐ CHƯỚNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sửa chữa'],
    examples: [{ jp: 'エレベーターが故障しました。', reading: 'エレベーターがこしょうしました。', meaning: 'Thang máy bị hỏng.' }] },

  { id: 'n4-rusu', word: '留守', reading: 'るす', romaji: 'rusu', meaning: 'Vắng nhà', hanViet: 'LƯU THỦ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nhà'],
    examples: [{ jp: '留守にしていました。', reading: 'るすにしていました。', meaning: 'Đã vắng nhà.' }] },

  { id: 'n4-chuusha', word: '注射', reading: 'ちゅうしゃ', romaji: 'chuusha', meaning: 'Tiêm, chích', hanViet: 'CHÚ XẠ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Y tế'],
    examples: [{ jp: '注射は痛いです。', reading: 'ちゅうしゃはいたいです。', meaning: 'Tiêm đau.' }] },

  { id: 'n4-netsu', word: '熱', reading: 'ねつ', romaji: 'netsu', meaning: 'Sốt, nhiệt', hanViet: 'NHIỆT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Y tế'],
    examples: [{ jp: '熱が出ました。', reading: 'ねつがでました。', meaning: 'Bị sốt.' }] },

  // ═══════════════ DANH TỪ — Trừu tượng / Khác ═══════════════
  { id: 'n4-ki', word: '気', reading: 'き', romaji: 'ki', meaning: 'Khí, tinh thần', hanViet: 'KHÍ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trừu tượng'],
    examples: [{ jp: '気をつけてください。', reading: 'きをつけてください。', meaning: 'Hãy cẩn thận.' }] },

  { id: 'n4-kibun', word: '気分', reading: 'きぶん', romaji: 'kibun', meaning: 'Tâm trạng', hanViet: 'KHÍ PHẦN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '気分が良いです。', reading: 'きぶんがいいです。', meaning: 'Tâm trạng tốt.' }] },

  { id: 'n4-kimochi', word: '気持ち', reading: 'きもち', romaji: 'kimochi', meaning: 'Cảm giác, tâm trạng', hanViet: 'KHÍ TRÌ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '気持ちいいですね。', reading: 'きもちいいですね。', meaning: 'Dễ chịu nhỉ.' }] },

  { id: 'n4-guai', word: '具合', reading: 'ぐあい', romaji: 'guai', meaning: 'Tình trạng, điều kiện', hanViet: 'CỤ HỢP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Sức khỏe'],
    examples: [{ jp: '具合はどうですか。', reading: 'ぐあいはどうですか。', meaning: 'Tình trạng thế nào?' }] },

  { id: 'n4-wariai', word: '割合', reading: 'わりあい', romaji: 'wariai', meaning: 'Tỷ lệ, phần trăm', hanViet: 'CÁT HỢP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Toán'],
    examples: [{ jp: '合格の割合は高い。', reading: 'ごうかくのわりあいはたかい。', meaning: 'Tỷ lệ đỗ cao.' }] },

  { id: 'n4-chikara', word: '力', reading: 'ちから', romaji: 'chikara', meaning: 'Sức mạnh, lực', hanViet: 'LỰC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trừu tượng'],
    examples: [{ jp: '力が必要です。', reading: 'ちからがひつようです。', meaning: 'Cần sức mạnh.' }] },

  { id: 'n4-hikari', word: '光', reading: 'ひかり', romaji: 'hikari', meaning: 'Ánh sáng', hanViet: 'QUANG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '光が見えます。', reading: 'ひかりがみえます。', meaning: 'Thấy ánh sáng.' }] },

  { id: 'n4-ten', word: '点', reading: 'てん', romaji: 'ten', meaning: 'Điểm', hanViet: 'ĐIỂM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trường học'],
    examples: [{ jp: '百点を取りました。', reading: 'ひゃくてんをとりました。', meaning: 'Được 100 điểm.' }] },

  { id: 'n4-oto', word: '音', reading: 'おと', romaji: 'oto', meaning: 'Âm thanh, tiếng', hanViet: 'ÂM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Âm thanh'],
    examples: [{ jp: '変な音がします。', reading: 'へんなおとがします。', meaning: 'Có tiếng lạ.' }] },

  { id: 'n4-katachi', word: '形', reading: 'かたち', romaji: 'katachi', meaning: 'Hình dạng', hanViet: 'HÌNH', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hình dạng'],
    examples: [{ jp: '丸い形です。', reading: 'まるいかたちです。', meaning: 'Hình tròn.' }] },

  { id: 'n4-ji', word: '字', reading: 'じ', romaji: 'ji', meaning: 'Chữ', hanViet: 'TỰ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngôn ngữ'],
    examples: [{ jp: '字がきれいですね。', reading: 'じがきれいですね。', meaning: 'Chữ đẹp nhỉ.' }] },

  { id: 'n4-kotae', word: '答', reading: 'こたえ', romaji: 'kotae', meaning: 'Câu trả lời', hanViet: 'ĐÁP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trường học'],
    examples: [{ jp: '答を書いてください。', reading: 'こたえをかいてください。', meaning: 'Hãy viết đáp án.' }] },

  { id: 'n4-henji', word: '返事', reading: 'へんじ', romaji: 'henji', meaning: 'Trả lời, hồi đáp', hanViet: 'PHẢN SỰ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '返事をしてください。', reading: 'へんじをしてください。', meaning: 'Hãy trả lời.' }] },

  { id: 'n4-chuui', word: '注意', reading: 'ちゅうい', romaji: 'chuui', meaning: 'Chú ý, cẩn thận', hanViet: 'CHÚ Ý', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hành vi'],
    examples: [{ jp: '注意してください。', reading: 'ちゅういしてください。', meaning: 'Hãy chú ý.' }] },

  { id: 'n4-oyogikata', word: '泳ぎ方', reading: 'およぎかた', romaji: 'oyogikata', meaning: 'Cách bơi', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thể thao'],
    examples: [{ jp: '泳ぎ方を教えてください。', reading: 'およぎかたをおしえてください。', meaning: 'Dạy cách bơi đi.' }] },

  { id: 'n4-wasuremo', word: '忘れ物', reading: 'わすれもの', romaji: 'wasuremono', meaning: 'Đồ quên, đồ thất lạc', hanViet: 'VONG VẬT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Đồ vật'],
    examples: [{ jp: '忘れ物はありませんか。', reading: 'わすれものはありませんか。', meaning: 'Không quên gì chứ?' }] },

  { id: 'n4-tanoshimi', word: '楽しみ', reading: 'たのしみ', romaji: 'tanoshimi', meaning: 'Niềm vui, sự mong chờ', hanViet: 'LẠC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Cảm xúc'],
    examples: [{ jp: '楽しみにしています。', reading: 'たのしみにしています。', meaning: 'Rất mong chờ.' }] },

  { id: 'n4-youji', word: '用事', reading: 'ようじ', romaji: 'youji', meaning: 'Việc, công chuyện', hanViet: 'DỤNG SỰ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hàng ngày'],
    examples: [{ jp: '用事があります。', reading: 'ようじがあります。', meaning: 'Có việc.' }] },

  { id: 'n4-youi', word: '用意', reading: 'ようい', romaji: 'youi', meaning: 'Chuẩn bị', hanViet: 'DỤNG Ý', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hành vi'],
    examples: [{ jp: '用意はいいですか。', reading: 'よういはいいですか。', meaning: 'Chuẩn bị xong chưa?' }] },

  { id: 'n4-you', word: '用', reading: 'よう', romaji: 'you', meaning: 'Việc, sự dùng', hanViet: 'DỤNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trừu tượng'],
    examples: [{ jp: 'ご用はありますか。', reading: 'ごようはありますか。', meaning: 'Có việc gì không?' }] },

  { id: 'n4-tame', word: '為', reading: 'ため', romaji: 'tame', meaning: 'Vì, để, cho', hanViet: 'VI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngữ pháp'],
    examples: [{ jp: '健康のために運動します。', reading: 'けんこうのためにうんどうします。', meaning: 'Vận động vì sức khỏe.' }] },

  { id: 'n4-kaeri', word: '帰り', reading: 'かえり', romaji: 'kaeri', meaning: 'Đường về, lúc về', hanViet: 'QUY', type: 'Danh từ', jlpt: 'N4',
    tags: ['Di chuyển'],
    examples: [{ jp: '帰りに買い物します。', reading: 'かえりにかいものします。', meaning: 'Mua sắm lúc về.' }] },

  { id: 'n4-owari', word: '終わり', reading: 'おわり', romaji: 'owari', meaning: 'Kết thúc', hanViet: 'CHUNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '映画の終わりは悲しい。', reading: 'えいがのおわりはかなしい。', meaning: 'Phần kết phim buồn.' }] },

  { id: 'n4-enryo', word: '遠慮', reading: 'えんりょ', romaji: 'enryo', meaning: 'Dè dặt, khách sáo', hanViet: 'VIỄN LỰ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '遠慮しないでください。', reading: 'えんりょしないでください。', meaning: 'Đừng khách sáo.' }] },

  { id: 'n4-shouchi', word: '承知', reading: 'しょうち', romaji: 'shouchi', meaning: 'Biết, hiểu, đồng ý', hanViet: 'THỪA TRI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '承知しました。', reading: 'しょうちしました。', meaning: 'Tôi hiểu rồi ạ.' }] },

  { id: 'n4-tsugou', word: '都合', reading: 'つごう', romaji: 'tsugou', meaning: 'Sự thuận tiện, hoàn cảnh', hanViet: 'ĐÔ HỢP', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hàng ngày'],
    examples: [{ jp: '都合が悪いです。', reading: 'つごうがわるいです。', meaning: 'Không tiện.' }] },

  { id: 'n4-shuukan', word: '習慣', reading: 'しゅうかん', romaji: 'shuukan', meaning: 'Thói quen, tập quán', hanViet: 'TẬP QUÁN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hàng ngày'],
    examples: [{ jp: '早起きの習慣があります。', reading: 'はやおきのしゅうかんがあります。', meaning: 'Có thói quen dậy sớm.' }] },

  { id: 'n4-kanemochi', word: '金持ち', reading: 'かねもち', romaji: 'kanemochi', meaning: 'Người giàu', hanViet: 'KIM TRÌ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Người'],
    examples: [{ jp: '金持ちになりたい。', reading: 'かねもちになりたい。', meaning: 'Muốn giàu.' }] },

  { id: 'n4-yakunitatsu', word: '役に立つ', reading: 'やくにたつ', romaji: 'yakunitatsu', meaning: 'Có ích, hữu dụng', hanViet: 'DỊCH LẬP', type: 'Động từ nhóm 1', jlpt: 'N4',
    tags: ['Đánh giá'],
    examples: [{ jp: 'この本は役に立ちます。', reading: 'このほんはやくにたちます。', meaning: 'Cuốn sách này có ích.' }] },

  { id: 'n4-kyuu', word: '急', reading: 'きゅう', romaji: 'kyuu', meaning: 'Gấp, đột ngột', hanViet: 'CẤP', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['Thời gian'],
    examples: [{ jp: '急な用事ができました。', reading: 'きゅうなようじができました。', meaning: 'Có việc gấp.' }] },

  { id: 'n4-betsu', word: '別', reading: 'べつ', romaji: 'betsu', meaning: 'Khác, riêng', hanViet: 'BIỆT', type: 'Tính từ -な', jlpt: 'N4',
    tags: ['So sánh'],
    examples: [{ jp: '別の方法があります。', reading: 'べつのほうほうがあります。', meaning: 'Có cách khác.' }] },

  { id: 'n4-ryouhou', word: '両方', reading: 'りょうほう', romaji: 'ryouhou', meaning: 'Cả hai (bên)', hanViet: 'LƯỠNG PHƯƠNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Số lượng'],
    examples: [{ jp: '両方ください。', reading: 'りょうほうください。', meaning: 'Cho cả hai.' }] },

  { id: 'n4-bai', word: '倍', reading: 'ばい', romaji: 'bai', meaning: 'Lần (gấp đôi)', hanViet: 'BỘI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Số'],
    examples: [{ jp: '二倍の量です。', reading: 'にばいのりょうです。', meaning: 'Gấp đôi lượng.' }] },

  { id: 'n4-oku', word: '億', reading: 'おく', romaji: 'oku', meaning: '100 triệu', hanViet: 'ỨC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Số'],
    examples: [{ jp: '一億円です。', reading: 'いちおくえんです。', meaning: '100 triệu yên.' }] },

  { id: 'n4-aida', word: '間', reading: 'あいだ', romaji: 'aida', meaning: 'Giữa, khoảng', hanViet: 'GIAN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Vị trí', 'Thời gian'],
    examples: [{ jp: '学校と駅の間にあります。', reading: 'がっこうとえきのあいだにあります。', meaning: 'Ở giữa trường và ga.' }] },

  // ═══════════════ DANH TỪ — Tự nhiên / Cảnh vật ═══════════════
  { id: 'n4-keshiki', word: '景色', reading: 'けしき', romaji: 'keshiki', meaning: 'Phong cảnh', hanViet: 'CẢNH SẮC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '景色がきれいです。', reading: 'けしきがきれいです。', meaning: 'Phong cảnh đẹp.' }] },

  { id: 'n4-hayashi', word: '林', reading: 'はやし', romaji: 'hayashi', meaning: 'Rừng nhỏ', hanViet: 'LÂM', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '林を散歩しました。', reading: 'はやしをさんぽしました。', meaning: 'Đi dạo trong rừng nhỏ.' }] },

  { id: 'n4-eda', word: '枝', reading: 'えだ', romaji: 'eda', meaning: 'Cành cây', hanViet: 'CHI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Tự nhiên'],
    examples: [{ jp: '枝が折れました。', reading: 'えだがおれました。', meaning: 'Cành cây gãy rồi.' }] },

  { id: 'n4-momen', word: '木綿', reading: 'もめん', romaji: 'momen', meaning: 'Vải bông', hanViet: 'MỘC MIÊN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Vật liệu'],
    examples: [{ jp: '木綿のシャツです。', reading: 'もめんのシャツです。', meaning: 'Áo vải bông.' }] },

  { id: 'n4-ito', word: '糸', reading: 'いと', romaji: 'ito', meaning: 'Sợi chỉ', hanViet: 'TY', type: 'Danh từ', jlpt: 'N4',
    tags: ['Vật liệu'],
    examples: [{ jp: '糸を切ります。', reading: 'いとをきります。', meaning: 'Cắt chỉ.' }] },

  { id: 'n4-kinu', word: '絹', reading: 'きぬ', romaji: 'kinu', meaning: 'Lụa', hanViet: 'QUYÊN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Vật liệu'],
    examples: [{ jp: '絹のスカーフです。', reading: 'きぬのスカーフです。', meaning: 'Khăn lụa.' }] },

  { id: 'n4-sen', word: '線', reading: 'せん', romaji: 'sen', meaning: 'Đường, tuyến', hanViet: 'TUYẾN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Hình dạng', 'Giao thông'],
    examples: [{ jp: '山手線に乗ります。', reading: 'やまのてせんにのります。', meaning: 'Đi tuyến Yamanote.' }] },

  { id: 'n4-chiri', word: '地理', reading: 'ちり', romaji: 'chiri', meaning: 'Địa lý', hanViet: 'ĐỊA LÝ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trường học'],
    examples: [{ jp: '地理を勉強します。', reading: 'ちりをべんきょうします。', meaning: 'Học địa lý.' }] },

  { id: 'n4-seiyo', word: '西洋', reading: 'せいよう', romaji: 'seiyou', meaning: 'Phương Tây', hanViet: 'TÂY DƯƠNG', type: 'Danh từ', jlpt: 'N4',
    tags: ['Văn hóa'],
    examples: [{ jp: '西洋の文化に興味があります。', reading: 'せいようのぶんかにきょうみがあります。', meaning: 'Quan tâm đến văn hóa phương Tây.' }] },

  { id: 'n4-tenkiyohou', word: '天気予報', reading: 'てんきよほう', romaji: 'tenkiyohou', meaning: 'Dự báo thời tiết', hanViet: 'THIÊN KHÍ DỰ BÁO', type: 'Danh từ', jlpt: 'N4',
    tags: ['Thời tiết'],
    examples: [{ jp: '天気予報を見ます。', reading: 'てんきよほうをみます。', meaning: 'Xem dự báo thời tiết.' }] },

  { id: 'n4-fune', word: '舟', reading: 'ふね', romaji: 'fune', meaning: 'Thuyền', hanViet: 'CHU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao thông'],
    examples: [{ jp: '舟で川を渡ります。', reading: 'ふねでかわをわたります。', meaning: 'Qua sông bằng thuyền.' }] },

  { id: 'n4-omote', word: '表', reading: 'おもて', romaji: 'omote', meaning: 'Bên ngoài, mặt trước', hanViet: 'BIỂU', type: 'Danh từ', jlpt: 'N4',
    tags: ['Vị trí'],
    examples: [{ jp: '表に出てください。', reading: 'おもてにでてください。', meaning: 'Hãy ra ngoài.' }],
    antonyms: [{ word: '裏', reading: 'うら', meaning: 'Mặt sau' }] },

  { id: 'n4-ura', word: '裏', reading: 'うら', romaji: 'ura', meaning: 'Mặt sau, bên trong', hanViet: 'LÝ', type: 'Danh từ', jlpt: 'N4',
    tags: ['Vị trí'],
    examples: [{ jp: '裏に庭があります。', reading: 'うらににわがあります。', meaning: 'Sau nhà có vườn.' }] },

  { id: 'n4-jiten', word: '辞典', reading: 'じてん', romaji: 'jiten', meaning: 'Từ điển', hanViet: 'TỪ ĐIỂN', type: 'Danh từ', jlpt: 'N4',
    tags: ['Ngôn ngữ'],
    examples: [{ jp: '辞典で調べます。', reading: 'じてんでしらべます。', meaning: 'Tra từ điển.' }] },

  { id: 'n4-nikaidatte', word: '二階建て', reading: 'にかいだて', romaji: 'nikaidate', meaning: 'Nhà hai tầng', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nhà'],
    examples: [{ jp: '二階建ての家です。', reading: 'にかいだてのいえです。', meaning: 'Nhà hai tầng.' }] },

  { id: 'n4-konpyuuta', word: 'コンピュータ', reading: 'コンピュータ', romaji: 'konpyuuta', meaning: 'Máy tính', type: 'Danh từ', jlpt: 'N4',
    tags: ['Công nghệ'],
    examples: [{ jp: 'コンピュータで仕事します。', reading: 'コンピュータでしごとします。', meaning: 'Làm việc bằng máy tính.' }] },

  { id: 'n4-ripooto', word: 'リポート', reading: 'リポート', romaji: 'ripooto', meaning: 'Báo cáo', type: 'Danh từ', jlpt: 'N4',
    tags: ['Trường học', 'Công việc'],
    examples: [{ jp: 'リポートを書きます。', reading: 'リポートをかきます。', meaning: 'Viết báo cáo.' }] },

  { id: 'n4-mono', word: '物', reading: 'もの', romaji: 'mono', meaning: 'Vật, đồ vật', hanViet: 'VẬT', type: 'Danh từ', jlpt: 'N4',
    tags: ['Chung'],
    examples: [{ jp: '大切な物です。', reading: 'たいせつなものです。', meaning: 'Đồ quan trọng.' }] },

  { id: 'n4-kado', word: '角', reading: 'かど', romaji: 'kado', meaning: 'Góc (đường)', hanViet: 'GIÁC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nơi chốn'],
    examples: [{ jp: '角を曲がります。', reading: 'かどをまがります。', meaning: 'Rẽ ở góc đường.' }] },

  { id: 'n4-hanashi', word: '話', reading: 'はなし', romaji: 'hanashi', meaning: 'Câu chuyện, lời nói', hanViet: 'THOẠI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Giao tiếp'],
    examples: [{ jp: '面白い話ですね。', reading: 'おもしろいはなしですね。', meaning: 'Câu chuyện thú vị nhỉ.' }] },

  { id: 'n4-e', word: '絵', reading: 'え', romaji: 'e', meaning: 'Tranh, bức vẽ', hanViet: 'HỘI', type: 'Danh từ', jlpt: 'N4',
    tags: ['Nghệ thuật'],
    examples: [{ jp: '絵を描くのが好きです。', reading: 'えをかくのがすきです。', meaning: 'Thích vẽ tranh.' }] },

  { id: 'n4-midori', word: '緑', reading: 'みどり', romaji: 'midori', meaning: 'Màu xanh lá', hanViet: 'LỤC', type: 'Danh từ', jlpt: 'N4',
    tags: ['Màu sắc'],
    examples: [{ jp: '緑がきれいです。', reading: 'みどりがきれいです。', meaning: 'Xanh đẹp.' }] },

  { id: 'n4-uta', word: '歌', reading: 'うた', romaji: 'uta', meaning: 'Bài hát', hanViet: 'CA', type: 'Danh từ', jlpt: 'N4',
    tags: ['Âm nhạc'],
    examples: [{ jp: '歌を歌います。', reading: 'うたをうたいます。', meaning: 'Hát bài hát.' }] },
];
