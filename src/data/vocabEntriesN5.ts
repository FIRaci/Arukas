// ============================================================================
// VOCAB ENTRIES N5 — All parts (merged)
// ============================================================================
import type { VocabEntry } from './vocabTypes';

// ── from: vocabN5.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB N5 — Từ vựng JLPT N5 (~180 từ, đầy đủ tag, đồng/trái nghĩa, cụm từ)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_N5: VocabEntry[] = [
  // ═══════════════ ĐỘNG TỪ (Verbs) ═══════════════
  { id: 'n5-taberu', word: '食べる', reading: 'たべる', romaji: 'taberu', meaning: 'Ăn', hanViet: 'THỰC', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Thức ăn', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '朝ご飯を食べる。', reading: 'あさごはんをたべる。', meaning: 'Ăn bữa sáng.' }],
    synonyms: [{ word: '召し上がる', reading: 'めしあがる', meaning: 'Ăn (kính ngữ)' }],
    antonyms: [{ word: '吐く', reading: 'はく', meaning: 'Nôn ra' }],
    phrases: [{ word: '食べ物', reading: 'たべもの', meaning: 'Đồ ăn' }, { word: '食べ放題', reading: 'たべほうだい', meaning: 'Ăn thỏa thích (buffet)' }],
    related: [{ word: '飲む', reading: 'のむ', meaning: 'Uống' }] },

  { id: 'n5-nomu', word: '飲む', reading: 'のむ', romaji: 'nomu', meaning: 'Uống', hanViet: 'ẨM', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Thức ăn', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '水を飲む。', reading: 'みずをのむ。', meaning: 'Uống nước.' }],
    synonyms: [{ word: 'いただく', reading: 'いただく', meaning: 'Uống (kính ngữ)' }],
    phrases: [{ word: '飲み物', reading: 'のみもの', meaning: 'Đồ uống' }, { word: '飲み会', reading: 'のみかい', meaning: 'Tiệc nhậu' }],
    related: [{ word: '食べる', reading: 'たべる', meaning: 'Ăn' }] },

  { id: 'n5-miru', word: '見る', reading: 'みる', romaji: 'miru', meaning: 'Nhìn, xem', hanViet: 'KIẾN', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Giác quan', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: 'テレビを見る。', reading: 'テレビをみる。', meaning: 'Xem tivi.' }],
    synonyms: [{ word: '眺める', reading: 'ながめる', meaning: 'Ngắm nhìn' }, { word: '観る', reading: 'みる', meaning: 'Xem (phim/kịch)' }],
    phrases: [{ word: '見物', reading: 'けんぶつ', meaning: 'Tham quan' }, { word: '花見', reading: 'はなみ', meaning: 'Ngắm hoa' }],
    related: [{ word: '聞く', reading: 'きく', meaning: 'Nghe' }] },

  { id: 'n5-kiku', word: '聞く', reading: 'きく', romaji: 'kiku', meaning: 'Nghe, hỏi', hanViet: 'VĂN', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Giác quan', 'Giao tiếp', 'Hàng ngày'],
    examples: [{ jp: '音楽を聞く。', reading: 'おんがくをきく。', meaning: 'Nghe nhạc.' }],
    synonyms: [{ word: '尋ねる', reading: 'たずねる', meaning: 'Hỏi (trang trọng)' }],
    antonyms: [{ word: '答える', reading: 'こたえる', meaning: 'Trả lời' }],
    phrases: [{ word: '聞き取り', reading: 'ききとり', meaning: 'Nghe hiểu' }],
    related: [{ word: '見る', reading: 'みる', meaning: 'Xem' }, { word: '話す', reading: 'はなす', meaning: 'Nói' }] },

  { id: 'n5-yomu', word: '読む', reading: 'よむ', romaji: 'yomu', meaning: 'Đọc', hanViet: 'ĐỌC', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Học tập', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '本を読む。', reading: 'ほんをよむ。', meaning: 'Đọc sách.' }],
    antonyms: [{ word: '書く', reading: 'かく', meaning: 'Viết' }],
    phrases: [{ word: '読書', reading: 'どくしょ', meaning: 'Đọc sách (danh từ)' }],
    related: [{ word: '書く', reading: 'かく', meaning: 'Viết' }] },

  { id: 'n5-kaku', word: '書く', reading: 'かく', romaji: 'kaku', meaning: 'Viết', hanViet: 'THƯ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Học tập', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '手紙を書く。', reading: 'てがみをかく。', meaning: 'Viết thư.' }],
    antonyms: [{ word: '読む', reading: 'よむ', meaning: 'Đọc' }],
    phrases: [{ word: '書道', reading: 'しょどう', meaning: 'Thư pháp' }],
    related: [{ word: '読む', reading: 'よむ', meaning: 'Đọc' }] },

  { id: 'n5-hanasu', word: '話す', reading: 'はなす', romaji: 'hanasu', meaning: 'Nói, kể', hanViet: 'THOẠI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Giao tiếp', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '日本語を話す。', reading: 'にほんごをはなす。', meaning: 'Nói tiếng Nhật.' }],
    synonyms: [{ word: 'しゃべる', reading: 'しゃべる', meaning: 'Nói chuyện (thân mật)' }],
    antonyms: [{ word: '黙る', reading: 'だまる', meaning: 'Im lặng' }],
    phrases: [{ word: '話し合う', reading: 'はなしあう', meaning: 'Thảo luận' }, { word: '電話', reading: 'でんわ', meaning: 'Điện thoại' }],
    related: [{ word: '聞く', reading: 'きく', meaning: 'Nghe' }] },

  { id: 'n5-iku', word: '行く', reading: 'いく', romaji: 'iku', meaning: 'Đi', hanViet: 'HÀNH', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '学校に行く。', reading: 'がっこうにいく。', meaning: 'Đi đến trường.' }],
    antonyms: [{ word: '来る', reading: 'くる', meaning: 'Đến' }],
    phrases: [{ word: '行き先', reading: 'いきさき', meaning: 'Điểm đến' }],
    related: [{ word: '来る', reading: 'くる', meaning: 'Đến' }, { word: '帰る', reading: 'かえる', meaning: 'Về nhà' }] },

  { id: 'n5-kuru', word: '来る', reading: 'くる', romaji: 'kuru', meaning: 'Đến', hanViet: 'LAI', type: 'Động từ bất quy tắc', jlpt: 'N5',
    tags: ['Di chuyển', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '友達が来る。', reading: 'ともだちがくる。', meaning: 'Bạn bè đến.' }],
    antonyms: [{ word: '行く', reading: 'いく', meaning: 'Đi' }],
    related: [{ word: '行く', reading: 'いく', meaning: 'Đi' }, { word: '帰る', reading: 'かえる', meaning: 'Về' }] },

  { id: 'n5-kaeru', word: '帰る', reading: 'かえる', romaji: 'kaeru', meaning: 'Về (nhà)', hanViet: 'QUY', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '家に帰る。', reading: 'いえにかえる。', meaning: 'Về nhà.' }],
    synonyms: [{ word: '戻る', reading: 'もどる', meaning: 'Quay lại' }],
    phrases: [{ word: '帰り道', reading: 'かえりみち', meaning: 'Đường về' }],
    related: [{ word: '行く', reading: 'いく', meaning: 'Đi' }] },

  { id: 'n5-suru', word: 'する', reading: 'する', romaji: 'suru', meaning: 'Làm', type: 'Động từ bất quy tắc', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày', 'Cơ bản'],
    examples: [{ jp: '勉強する。', reading: 'べんきょうする。', meaning: 'Học bài.' }],
    synonyms: [{ word: 'やる', reading: 'やる', meaning: 'Làm (thân mật)' }, { word: '行う', reading: 'おこなう', meaning: 'Tiến hành (trang trọng)' }],
    phrases: [{ word: '勉強する', reading: 'べんきょうする', meaning: 'Học' }, { word: '運動する', reading: 'うんどうする', meaning: 'Tập thể dục' }],
    related: [{ word: 'なる', reading: 'なる', meaning: 'Trở thành' }] },

  { id: 'n5-aru', word: 'ある', reading: 'ある', romaji: 'aru', meaning: 'Có (vật)', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Tồn tại', 'Cơ bản'],
    examples: [{ jp: '机の上に本がある。', reading: 'つくえのうえにほんがある。', meaning: 'Có quyển sách trên bàn.' }],
    antonyms: [{ word: 'ない', reading: 'ない', meaning: 'Không có' }],
    related: [{ word: 'いる', reading: 'いる', meaning: 'Có (người/động vật)' }] },

  { id: 'n5-iru', word: 'いる', reading: 'いる', romaji: 'iru', meaning: 'Có (người/động vật)', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Tồn tại', 'Cơ bản'],
    examples: [{ jp: '猫がいる。', reading: 'ねこがいる。', meaning: 'Có con mèo.' }],
    antonyms: [{ word: 'いない', reading: 'いない', meaning: 'Không có (người)' }],
    related: [{ word: 'ある', reading: 'ある', meaning: 'Có (vật)' }] },

  { id: 'n5-kau', word: '買う', reading: 'かう', romaji: 'kau', meaning: 'Mua', hanViet: 'MÃI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Mua sắm', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '本を買う。', reading: 'ほんをかう。', meaning: 'Mua sách.' }],
    antonyms: [{ word: '売る', reading: 'うる', meaning: 'Bán' }],
    phrases: [{ word: '買い物', reading: 'かいもの', meaning: 'Mua sắm' }],
    related: [{ word: '売る', reading: 'うる', meaning: 'Bán' }] },

  { id: 'n5-uru', word: '売る', reading: 'うる', romaji: 'uru', meaning: 'Bán', hanViet: 'MẠI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Mua sắm', 'Hành động'],
    examples: [{ jp: '車を売る。', reading: 'くるまをうる。', meaning: 'Bán xe.' }],
    antonyms: [{ word: '買う', reading: 'かう', meaning: 'Mua' }],
    phrases: [{ word: '売り場', reading: 'うりば', meaning: 'Quầy bán hàng' }],
    related: [{ word: '買う', reading: 'かう', meaning: 'Mua' }] },

  { id: 'n5-matsu', word: '待つ', reading: 'まつ', romaji: 'matsu', meaning: 'Chờ, đợi', hanViet: 'ĐÃI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày', 'Giao tiếp'],
    examples: [{ jp: 'バスを待つ。', reading: 'バスをまつ。', meaning: 'Chờ xe buýt.' }],
    phrases: [{ word: '待ち合わせ', reading: 'まちあわせ', meaning: 'Hẹn gặp' }],
    related: [{ word: '来る', reading: 'くる', meaning: 'Đến' }] },

  { id: 'n5-tsukau', word: '使う', reading: 'つかう', romaji: 'tsukau', meaning: 'Sử dụng', hanViet: 'SỬ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: 'パソコンを使う。', reading: 'パソコンをつかう。', meaning: 'Sử dụng máy tính.' }],
    phrases: [{ word: '使い方', reading: 'つかいかた', meaning: 'Cách sử dụng' }],
    related: [{ word: '作る', reading: 'つくる', meaning: 'Làm, tạo' }] },

  { id: 'n5-tsukuru', word: '作る', reading: 'つくる', romaji: 'tsukuru', meaning: 'Làm, tạo ra', hanViet: 'TÁC', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày', 'Sáng tạo'],
    examples: [{ jp: '料理を作る。', reading: 'りょうりをつくる。', meaning: 'Nấu ăn.' }],
    phrases: [{ word: '作り方', reading: 'つくりかた', meaning: 'Cách làm' }, { word: '手作り', reading: 'てづくり', meaning: 'Làm bằng tay' }],
    related: [{ word: '使う', reading: 'つかう', meaning: 'Sử dụng' }] },

  { id: 'n5-narau', word: '習う', reading: 'ならう', romaji: 'narau', meaning: 'Học (từ ai)', hanViet: 'TẬP', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Học tập', 'Hành động'],
    examples: [{ jp: 'ピアノを習う。', reading: 'ピアノをならう。', meaning: 'Học piano.' }],
    synonyms: [{ word: '学ぶ', reading: 'まなぶ', meaning: 'Học hỏi' }],
    antonyms: [{ word: '教える', reading: 'おしえる', meaning: 'Dạy' }],
    related: [{ word: '勉強する', reading: 'べんきょうする', meaning: 'Học bài' }] },

  { id: 'n5-oshieru', word: '教える', reading: 'おしえる', romaji: 'oshieru', meaning: 'Dạy, chỉ bảo', hanViet: 'GIÁO', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Học tập', 'Giao tiếp'],
    examples: [{ jp: '日本語を教える。', reading: 'にほんごをおしえる。', meaning: 'Dạy tiếng Nhật.' }],
    antonyms: [{ word: '習う', reading: 'ならう', meaning: 'Học' }],
    phrases: [{ word: '教室', reading: 'きょうしつ', meaning: 'Phòng học' }],
    related: [{ word: '先生', reading: 'せんせい', meaning: 'Giáo viên' }] },

  { id: 'n5-oboeru', word: '覚える', reading: 'おぼえる', romaji: 'oboeru', meaning: 'Nhớ, ghi nhớ', hanViet: 'GIÁC', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Học tập', 'Tư duy'],
    examples: [{ jp: '漢字を覚える。', reading: 'かんじをおぼえる。', meaning: 'Nhớ chữ Hán.' }],
    antonyms: [{ word: '忘れる', reading: 'わすれる', meaning: 'Quên' }],
    related: [{ word: '忘れる', reading: 'わすれる', meaning: 'Quên' }] },

  { id: 'n5-wasureru', word: '忘れる', reading: 'わすれる', romaji: 'wasureru', meaning: 'Quên', hanViet: 'VONG', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Tư duy', 'Hàng ngày'],
    examples: [{ jp: '傘を忘れる。', reading: 'かさをわすれる。', meaning: 'Quên ô.' }],
    antonyms: [{ word: '覚える', reading: 'おぼえる', meaning: 'Nhớ' }],
    phrases: [{ word: '忘れ物', reading: 'わすれもの', meaning: 'Đồ bỏ quên' }],
    related: [{ word: '覚える', reading: 'おぼえる', meaning: 'Nhớ' }] },

  { id: 'n5-wakaru', word: '分かる', reading: 'わかる', romaji: 'wakaru', meaning: 'Hiểu, biết', hanViet: 'PHÂN', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Tư duy', 'Giao tiếp', 'Cơ bản'],
    examples: [{ jp: '日本語が分かる。', reading: 'にほんごがわかる。', meaning: 'Hiểu tiếng Nhật.' }],
    synonyms: [{ word: '理解する', reading: 'りかいする', meaning: 'Lý giải' }],
    related: [{ word: '知る', reading: 'しる', meaning: 'Biết' }] },

  { id: 'n5-shiru', word: '知る', reading: 'しる', romaji: 'shiru', meaning: 'Biết', hanViet: 'TRI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Tư duy', 'Cơ bản'],
    examples: [{ jp: '彼を知っている。', reading: 'かれをしっている。', meaning: 'Biết anh ấy.' }],
    synonyms: [{ word: '分かる', reading: 'わかる', meaning: 'Hiểu' }],
    phrases: [{ word: '知り合い', reading: 'しりあい', meaning: 'Người quen' }],
    related: [{ word: '分かる', reading: 'わかる', meaning: 'Hiểu' }] },

  { id: 'n5-omou', word: '思う', reading: 'おもう', romaji: 'omou', meaning: 'Nghĩ, cho rằng', hanViet: 'TƯ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Tư duy', 'Cảm xúc', 'Giao tiếp'],
    examples: [{ jp: 'そう思う。', reading: 'そうおもう。', meaning: 'Tôi nghĩ vậy.' }],
    synonyms: [{ word: '考える', reading: 'かんがえる', meaning: 'Suy nghĩ' }],
    phrases: [{ word: '思い出', reading: 'おもいで', meaning: 'Kỷ niệm' }, { word: '思い出す', reading: 'おもいだす', meaning: 'Nhớ lại' }],
    related: [{ word: '感じる', reading: 'かんじる', meaning: 'Cảm nhận' }] },

  { id: 'n5-aruku', word: '歩く', reading: 'あるく', romaji: 'aruku', meaning: 'Đi bộ', hanViet: 'BỘ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '公園を歩く。', reading: 'こうえんをあるく。', meaning: 'Đi bộ trong công viên.' }],
    synonyms: [{ word: '散歩する', reading: 'さんぽする', meaning: 'Đi dạo' }],
    antonyms: [{ word: '走る', reading: 'はしる', meaning: 'Chạy' }],
    related: [{ word: '走る', reading: 'はしる', meaning: 'Chạy' }] },

  { id: 'n5-hashiru', word: '走る', reading: 'はしる', romaji: 'hashiru', meaning: 'Chạy', hanViet: 'TẨU', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển', 'Hành động', 'Thể thao'],
    examples: [{ jp: '速く走る。', reading: 'はやくはしる。', meaning: 'Chạy nhanh.' }],
    antonyms: [{ word: '歩く', reading: 'あるく', meaning: 'Đi bộ' }],
    related: [{ word: '歩く', reading: 'あるく', meaning: 'Đi bộ' }] },

  { id: 'n5-neru', word: '寝る', reading: 'ねる', romaji: 'neru', meaning: 'Ngủ', hanViet: 'TẨM', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hàng ngày', 'Hành động'],
    examples: [{ jp: '早く寝る。', reading: 'はやくねる。', meaning: 'Đi ngủ sớm.' }],
    antonyms: [{ word: '起きる', reading: 'おきる', meaning: 'Dậy' }],
    phrases: [{ word: '寝坊', reading: 'ねぼう', meaning: 'Ngủ quên' }],
    related: [{ word: '起きる', reading: 'おきる', meaning: 'Thức dậy' }] },

  { id: 'n5-okiru', word: '起きる', reading: 'おきる', romaji: 'okiru', meaning: 'Thức dậy', hanViet: 'KHỞI', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hàng ngày', 'Hành động'],
    examples: [{ jp: '朝六時に起きる。', reading: 'あさろくじにおきる。', meaning: 'Thức dậy lúc 6 giờ sáng.' }],
    antonyms: [{ word: '寝る', reading: 'ねる', meaning: 'Ngủ' }],
    related: [{ word: '寝る', reading: 'ねる', meaning: 'Ngủ' }] },

  { id: 'n5-dekakeru', word: '出かける', reading: 'でかける', romaji: 'dekakeru', meaning: 'Ra ngoài', hanViet: 'XUẤT', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Di chuyển', 'Hành động', 'Hàng ngày'],
    examples: [{ jp: '買い物に出かける。', reading: 'かいものにでかける。', meaning: 'Ra ngoài mua sắm.' }],
    synonyms: [{ word: '出る', reading: 'でる', meaning: 'Ra (khỏi)' }],
    related: [{ word: '帰る', reading: 'かえる', meaning: 'Về nhà' }] },

  { id: 'n5-hairu', word: '入る', reading: 'はいる', romaji: 'hairu', meaning: 'Vào', hanViet: 'NHẬP', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển', 'Hành động'],
    examples: [{ jp: '部屋に入る。', reading: 'へやにはいる。', meaning: 'Vào phòng.' }],
    antonyms: [{ word: '出る', reading: 'でる', meaning: 'Ra' }],
    phrases: [{ word: '入口', reading: 'いりぐち', meaning: 'Lối vào' }],
    related: [{ word: '出る', reading: 'でる', meaning: 'Ra' }] },

  { id: 'n5-deru', word: '出る', reading: 'でる', romaji: 'deru', meaning: 'Ra (khỏi)', hanViet: 'XUẤT', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Di chuyển', 'Hành động'],
    examples: [{ jp: '家を出る。', reading: 'いえをでる。', meaning: 'Ra khỏi nhà.' }],
    antonyms: [{ word: '入る', reading: 'はいる', meaning: 'Vào' }],
    phrases: [{ word: '出口', reading: 'でぐち', meaning: 'Lối ra' }],
    related: [{ word: '入る', reading: 'はいる', meaning: 'Vào' }] },

  { id: 'n5-au', word: '会う', reading: 'あう', romaji: 'au', meaning: 'Gặp', hanViet: 'HỘI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Giao tiếp', 'Hành động'],
    examples: [{ jp: '友達に会う。', reading: 'ともだちにあう。', meaning: 'Gặp bạn bè.' }],
    phrases: [{ word: '出会い', reading: 'であい', meaning: 'Cuộc gặp gỡ' }],
    related: [{ word: '話す', reading: 'はなす', meaning: 'Nói chuyện' }] },

  { id: 'n5-tatsu', word: '立つ', reading: 'たつ', romaji: 'tatsu', meaning: 'Đứng', hanViet: 'LẬP', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Tư thế'],
    examples: [{ jp: 'ここに立つ。', reading: 'ここにたつ。', meaning: 'Đứng ở đây.' }],
    antonyms: [{ word: '座る', reading: 'すわる', meaning: 'Ngồi' }],
    related: [{ word: '座る', reading: 'すわる', meaning: 'Ngồi' }] },

  { id: 'n5-suwaru', word: '座る', reading: 'すわる', romaji: 'suwaru', meaning: 'Ngồi', hanViet: 'TỌA', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Tư thế'],
    examples: [{ jp: '椅子に座る。', reading: 'いすにすわる。', meaning: 'Ngồi lên ghế.' }],
    antonyms: [{ word: '立つ', reading: 'たつ', meaning: 'Đứng' }],
    related: [{ word: '立つ', reading: 'たつ', meaning: 'Đứng' }] },

  { id: 'n5-akeru', word: '開ける', reading: 'あける', romaji: 'akeru', meaning: 'Mở', hanViet: 'KHAI', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: '窓を開ける。', reading: 'まどをあける。', meaning: 'Mở cửa sổ.' }],
    antonyms: [{ word: '閉める', reading: 'しめる', meaning: 'Đóng' }],
    related: [{ word: '閉める', reading: 'しめる', meaning: 'Đóng' }] },

  { id: 'n5-shimeru', word: '閉める', reading: 'しめる', romaji: 'shimeru', meaning: 'Đóng', hanViet: 'BẾ', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: 'ドアを閉める。', reading: 'ドアをしめる。', meaning: 'Đóng cửa.' }],
    antonyms: [{ word: '開ける', reading: 'あける', meaning: 'Mở' }],
    related: [{ word: '開ける', reading: 'あける', meaning: 'Mở' }] },

  { id: 'n5-tsukeru', word: 'つける', reading: 'つける', romaji: 'tsukeru', meaning: 'Bật (đèn/máy)', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: '電気をつける。', reading: 'でんきをつける。', meaning: 'Bật đèn.' }],
    antonyms: [{ word: '消す', reading: 'けす', meaning: 'Tắt' }],
    related: [{ word: '消す', reading: 'けす', meaning: 'Tắt' }] },

  { id: 'n5-kesu', word: '消す', reading: 'けす', romaji: 'kesu', meaning: 'Tắt, xóa', hanViet: 'TIÊU', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: '電気を消す。', reading: 'でんきをけす。', meaning: 'Tắt đèn.' }],
    antonyms: [{ word: 'つける', reading: 'つける', meaning: 'Bật' }],
    related: [{ word: 'つける', reading: 'つける', meaning: 'Bật' }] },

  { id: 'n5-asobu', word: '遊ぶ', reading: 'あそぶ', romaji: 'asobu', meaning: 'Chơi', hanViet: 'DU', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Giải trí', 'Hàng ngày'],
    examples: [{ jp: '公園で遊ぶ。', reading: 'こうえんであそぶ。', meaning: 'Chơi ở công viên.' }],
    phrases: [{ word: '遊び', reading: 'あそび', meaning: 'Trò chơi' }],
    related: [{ word: '休む', reading: 'やすむ', meaning: 'Nghỉ ngơi' }] },

  { id: 'n5-yasumu', word: '休む', reading: 'やすむ', romaji: 'yasumu', meaning: 'Nghỉ ngơi', hanViet: 'HƯU', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày', 'Sức khỏe'],
    examples: [{ jp: '今日は休む。', reading: 'きょうはやすむ。', meaning: 'Hôm nay nghỉ.' }],
    antonyms: [{ word: '働く', reading: 'はたらく', meaning: 'Làm việc' }],
    phrases: [{ word: '休み', reading: 'やすみ', meaning: 'Ngày nghỉ' }, { word: '昼休み', reading: 'ひるやすみ', meaning: 'Nghỉ trưa' }],
    related: [{ word: '働く', reading: 'はたらく', meaning: 'Làm việc' }] },

  { id: 'n5-hataraku', word: '働く', reading: 'はたらく', romaji: 'hataraku', meaning: 'Làm việc', hanViet: 'ĐỘNG', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Công việc'],
    examples: [{ jp: '会社で働く。', reading: 'かいしゃではたらく。', meaning: 'Làm việc ở công ty.' }],
    antonyms: [{ word: '休む', reading: 'やすむ', meaning: 'Nghỉ' }],
    related: [{ word: '仕事', reading: 'しごと', meaning: 'Công việc' }] },

  { id: 'n5-arau', word: '洗う', reading: 'あらう', romaji: 'arau', meaning: 'Rửa, giặt', hanViet: 'TẨY', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: '手を洗う。', reading: 'てをあらう。', meaning: 'Rửa tay.' }],
    phrases: [{ word: '洗濯', reading: 'せんたく', meaning: 'Giặt đồ' }],
    related: [{ word: '磨く', reading: 'みがく', meaning: 'Đánh (răng), chùi' }] },

  { id: 'n5-toru', word: '撮る', reading: 'とる', romaji: 'toru', meaning: 'Chụp (ảnh)', hanViet: 'CHỤP', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Giải trí'],
    examples: [{ jp: '写真を撮る。', reading: 'しゃしんをとる。', meaning: 'Chụp ảnh.' }],
    phrases: [{ word: '写真撮影', reading: 'しゃしんさつえい', meaning: 'Chụp ảnh (trang trọng)' }],
    related: [{ word: '見る', reading: 'みる', meaning: 'Xem' }] },

  { id: 'n5-morau', word: 'もらう', reading: 'もらう', romaji: 'morau', meaning: 'Nhận', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Giao tiếp', 'Hành động'],
    examples: [{ jp: '友達からもらう。', reading: 'ともだちからもらう。', meaning: 'Nhận từ bạn bè.' }],
    antonyms: [{ word: 'あげる', reading: 'あげる', meaning: 'Cho' }],
    related: [{ word: 'あげる', reading: 'あげる', meaning: 'Cho' }, { word: 'くれる', reading: 'くれる', meaning: 'Cho (mình)' }] },

  { id: 'n5-kureru', word: 'くれる', reading: 'くれる', romaji: 'kureru', meaning: 'Cho (mình)', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Giao tiếp', 'Hành động'],
    examples: [{ jp: '母がくれた。', reading: 'ははがくれた。', meaning: 'Mẹ cho (tôi).' }],
    related: [{ word: 'あげる', reading: 'あげる', meaning: 'Cho' }, { word: 'もらう', reading: 'もらう', meaning: 'Nhận' }] },

  { id: 'n5-naru', word: 'なる', reading: 'なる', romaji: 'naru', meaning: 'Trở thành', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Biến đổi', 'Cơ bản'],
    examples: [{ jp: '先生になる。', reading: 'せんせいになる。', meaning: 'Trở thành giáo viên.' }],
    related: [{ word: 'する', reading: 'する', meaning: 'Làm' }] },

  { id: 'n5-motsu', word: '持つ', reading: 'もつ', romaji: 'motsu', meaning: 'Cầm, giữ, có', hanViet: 'TRÌ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: 'かばんを持つ。', reading: 'かばんをもつ。', meaning: 'Cầm cặp.' }],
    phrases: [{ word: '持ち物', reading: 'もちもの', meaning: 'Đồ đạc mang theo' }, { word: '気持ち', reading: 'きもち', meaning: 'Cảm giác' }],
    related: [{ word: '取る', reading: 'とる', meaning: 'Lấy' }] },

  { id: 'n5-tomaru', word: '止まる', reading: 'とまる', romaji: 'tomaru', meaning: 'Dừng lại', hanViet: 'CHỈ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển', 'Hành động'],
    examples: [{ jp: 'バスが止まる。', reading: 'バスがとまる。', meaning: 'Xe buýt dừng lại.' }],
    antonyms: [{ word: '動く', reading: 'うごく', meaning: 'Di chuyển' }],
    related: [{ word: '走る', reading: 'はしる', meaning: 'Chạy' }] },

  // ═══════════════ DANH TỪ (Nouns) ═══════════════
  { id: 'n5-hito', word: '人', reading: 'ひと', romaji: 'hito', meaning: 'Người', hanViet: 'NHÂN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Con người', 'Cơ bản'],
    examples: [{ jp: 'あの人は先生です。', reading: 'あのひとはせんせいです。', meaning: 'Người kia là giáo viên.' }],
    phrases: [{ word: '日本人', reading: 'にほんじん', meaning: 'Người Nhật' }, { word: '大人', reading: 'おとな', meaning: 'Người lớn' }],
    related: [{ word: '人々', reading: 'ひとびと', meaning: 'Mọi người' }] },

  { id: 'n5-tomodachi', word: '友達', reading: 'ともだち', romaji: 'tomodachi', meaning: 'Bạn bè', hanViet: 'HỮU ĐẠT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Con người', 'Quan hệ', 'Hàng ngày'],
    examples: [{ jp: '友達と遊ぶ。', reading: 'ともだちとあそぶ。', meaning: 'Chơi với bạn.' }],
    phrases: [{ word: '友人', reading: 'ゆうじん', meaning: 'Bằng hữu (trang trọng)' }],
    related: [{ word: '家族', reading: 'かぞく', meaning: 'Gia đình' }] },

  { id: 'n5-gakkou', word: '学校', reading: 'がっこう', romaji: 'gakkou', meaning: 'Trường học', hanViet: 'HỌC HIỆU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Học tập', 'Địa điểm'],
    examples: [{ jp: '学校に行く。', reading: 'がっこうにいく。', meaning: 'Đi đến trường.' }],
    phrases: [{ word: '小学校', reading: 'しょうがっこう', meaning: 'Trường tiểu học' }, { word: '中学校', reading: 'ちゅうがっこう', meaning: 'Trường THCS' }],
    related: [{ word: '大学', reading: 'だいがく', meaning: 'Đại học' }] },

  { id: 'n5-ie', word: '家', reading: 'いえ', romaji: 'ie', meaning: 'Nhà', hanViet: 'GIA', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Hàng ngày'],
    examples: [{ jp: '家に帰る。', reading: 'いえにかえる。', meaning: 'Về nhà.' }],
    phrases: [{ word: '家族', reading: 'かぞく', meaning: 'Gia đình' }, { word: '家賃', reading: 'やちん', meaning: 'Tiền thuê nhà' }],
    related: [{ word: '部屋', reading: 'へや', meaning: 'Phòng' }] },

  { id: 'n5-heya', word: '部屋', reading: 'へや', romaji: 'heya', meaning: 'Phòng', hanViet: 'BỘ ỐC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Hàng ngày'],
    examples: [{ jp: '部屋を掃除する。', reading: 'へやをそうじする。', meaning: 'Dọn phòng.' }],
    related: [{ word: '家', reading: 'いえ', meaning: 'Nhà' }] },

  { id: 'n5-eki', word: '駅', reading: 'えき', romaji: 'eki', meaning: 'Ga tàu', hanViet: 'DỊCH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Di chuyển'],
    examples: [{ jp: '駅まで歩く。', reading: 'えきまであるく。', meaning: 'Đi bộ đến ga.' }],
    phrases: [{ word: '駅前', reading: 'えきまえ', meaning: 'Trước ga' }, { word: '駅員', reading: 'えきいん', meaning: 'Nhân viên ga' }],
    related: [{ word: '電車', reading: 'でんしゃ', meaning: 'Tàu điện' }] },

  { id: 'n5-densha', word: '電車', reading: 'でんしゃ', romaji: 'densha', meaning: 'Tàu điện', hanViet: 'ĐIỆN XA', type: 'Danh từ', jlpt: 'N5',
    tags: ['Di chuyển', 'Phương tiện'],
    examples: [{ jp: '電車に乗る。', reading: 'でんしゃにのる。', meaning: 'Đi tàu điện.' }],
    related: [{ word: '駅', reading: 'えき', meaning: 'Ga tàu' }, { word: 'バス', reading: 'バス', meaning: 'Xe buýt' }] },

  { id: 'n5-kuruma', word: '車', reading: 'くるま', romaji: 'kuruma', meaning: 'Xe hơi', hanViet: 'XA', type: 'Danh từ', jlpt: 'N5',
    tags: ['Di chuyển', 'Phương tiện'],
    examples: [{ jp: '車で行く。', reading: 'くるまでいく。', meaning: 'Đi bằng xe hơi.' }],
    phrases: [{ word: '自動車', reading: 'じどうしゃ', meaning: 'Ô tô' }, { word: '電車', reading: 'でんしゃ', meaning: 'Tàu điện' }],
    related: [{ word: '電車', reading: 'でんしゃ', meaning: 'Tàu điện' }] },

  { id: 'n5-mise', word: '店', reading: 'みせ', romaji: 'mise', meaning: 'Cửa hàng', hanViet: 'ĐIẾM', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Mua sắm'],
    examples: [{ jp: 'あの店は安い。', reading: 'あのみせはやすい。', meaning: 'Cửa hàng kia rẻ.' }],
    phrases: [{ word: '喫茶店', reading: 'きっさてん', meaning: 'Quán cà phê' }, { word: '本屋', reading: 'ほんや', meaning: 'Hiệu sách' }],
    related: [{ word: '買い物', reading: 'かいもの', meaning: 'Mua sắm' }] },

  { id: 'n5-hon', word: '本', reading: 'ほん', romaji: 'hon', meaning: 'Sách, quyển', hanViet: 'BẢN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Học tập', 'Đồ vật'],
    examples: [{ jp: '本を読む。', reading: 'ほんをよむ。', meaning: 'Đọc sách.' }],
    phrases: [{ word: '本棚', reading: 'ほんだな', meaning: 'Kệ sách' }, { word: '絵本', reading: 'えほん', meaning: 'Sách tranh' }],
    related: [{ word: '新聞', reading: 'しんぶん', meaning: 'Báo' }] },

  { id: 'n5-shigoto', word: '仕事', reading: 'しごと', romaji: 'shigoto', meaning: 'Công việc', hanViet: 'SỰ VIỆC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Công việc', 'Hàng ngày'],
    examples: [{ jp: '仕事をする。', reading: 'しごとをする。', meaning: 'Làm việc.' }],
    phrases: [{ word: '仕事場', reading: 'しごとば', meaning: 'Nơi làm việc' }],
    related: [{ word: '働く', reading: 'はたらく', meaning: 'Làm việc' }, { word: '会社', reading: 'かいしゃ', meaning: 'Công ty' }] },

  { id: 'n5-kaisha', word: '会社', reading: 'かいしゃ', romaji: 'kaisha', meaning: 'Công ty', hanViet: 'HỘI XÃ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Công việc', 'Địa điểm'],
    examples: [{ jp: '会社に行く。', reading: 'かいしゃにいく。', meaning: 'Đi đến công ty.' }],
    phrases: [{ word: '会社員', reading: 'かいしゃいん', meaning: 'Nhân viên công ty' }],
    related: [{ word: '仕事', reading: 'しごと', meaning: 'Công việc' }] },

  { id: 'n5-sensei', word: '先生', reading: 'せんせい', romaji: 'sensei', meaning: 'Giáo viên, thầy/cô', hanViet: 'TIÊN SINH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Con người', 'Học tập'],
    examples: [{ jp: '先生に聞く。', reading: 'せんせいにきく。', meaning: 'Hỏi thầy.' }],
    antonyms: [{ word: '学生', reading: 'がくせい', meaning: 'Học sinh' }],
    related: [{ word: '学生', reading: 'がくせい', meaning: 'Học sinh' }] },

  { id: 'n5-gakusei', word: '学生', reading: 'がくせい', romaji: 'gakusei', meaning: 'Học sinh, sinh viên', hanViet: 'HỌC SINH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Con người', 'Học tập'],
    examples: [{ jp: '私は学生です。', reading: 'わたしはがくせいです。', meaning: 'Tôi là sinh viên.' }],
    phrases: [{ word: '大学生', reading: 'だいがくせい', meaning: 'Sinh viên đại học' }, { word: '留学生', reading: 'りゅうがくせい', meaning: 'Du học sinh' }],
    related: [{ word: '先生', reading: 'せんせい', meaning: 'Giáo viên' }] },

  { id: 'n5-kazoku', word: '家族', reading: 'かぞく', romaji: 'kazoku', meaning: 'Gia đình', hanViet: 'GIA TỘC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Con người', 'Quan hệ'],
    examples: [{ jp: '家族と住んでいる。', reading: 'かぞくとすんでいる。', meaning: 'Sống với gia đình.' }],
    related: [{ word: '父', reading: 'ちち', meaning: 'Bố' }, { word: '母', reading: 'はは', meaning: 'Mẹ' }] },

  { id: 'n5-mizu', word: '水', reading: 'みず', romaji: 'mizu', meaning: 'Nước', hanViet: 'THỦY', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Tự nhiên', 'Hàng ngày'],
    examples: [{ jp: '水を飲む。', reading: 'みずをのむ。', meaning: 'Uống nước.' }],
    phrases: [{ word: '水曜日', reading: 'すいようび', meaning: 'Thứ Tư' }, { word: '水泳', reading: 'すいえい', meaning: 'Bơi lội' }],
    related: [{ word: 'お茶', reading: 'おちゃ', meaning: 'Trà' }] },

  { id: 'n5-ocha', word: 'お茶', reading: 'おちゃ', romaji: 'ocha', meaning: 'Trà', hanViet: 'TRÀ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Văn hóa'],
    examples: [{ jp: 'お茶を飲む。', reading: 'おちゃをのむ。', meaning: 'Uống trà.' }],
    phrases: [{ word: '茶道', reading: 'さどう', meaning: 'Trà đạo' }],
    related: [{ word: '水', reading: 'みず', meaning: 'Nước' }, { word: 'コーヒー', reading: 'コーヒー', meaning: 'Cà phê' }] },

  { id: 'n5-denwa', word: '電話', reading: 'でんわ', romaji: 'denwa', meaning: 'Điện thoại', hanViet: 'ĐIỆN THOẠI', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật', 'Giao tiếp'],
    examples: [{ jp: '電話をかける。', reading: 'でんわをかける。', meaning: 'Gọi điện thoại.' }],
    phrases: [{ word: '電話番号', reading: 'でんわばんごう', meaning: 'Số điện thoại' }, { word: '携帯電話', reading: 'けいたいでんわ', meaning: 'Điện thoại di động' }],
    related: [{ word: '話す', reading: 'はなす', meaning: 'Nói chuyện' }] },

  { id: 'n5-jikan', word: '時間', reading: 'じかん', romaji: 'jikan', meaning: 'Thời gian', hanViet: 'THỜI GIAN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian', 'Cơ bản'],
    examples: [{ jp: '時間がない。', reading: 'じかんがない。', meaning: 'Không có thời gian.' }],
    phrases: [{ word: '時間割', reading: 'じかんわり', meaning: 'Thời khóa biểu' }],
    related: [{ word: '今', reading: 'いま', meaning: 'Bây giờ' }] },

  { id: 'n5-ima', word: '今', reading: 'いま', romaji: 'ima', meaning: 'Bây giờ', hanViet: 'KIM', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian', 'Cơ bản'],
    examples: [{ jp: '今、何時？', reading: 'いま、なんじ？', meaning: 'Bây giờ mấy giờ?' }],
    phrases: [{ word: '今日', reading: 'きょう', meaning: 'Hôm nay' }, { word: '今朝', reading: 'けさ', meaning: 'Sáng nay' }],
    related: [{ word: '時間', reading: 'じかん', meaning: 'Thời gian' }] },

  { id: 'n5-kyou', word: '今日', reading: 'きょう', romaji: 'kyou', meaning: 'Hôm nay', hanViet: 'KIM NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian', 'Hàng ngày'],
    examples: [{ jp: '今日は暑い。', reading: 'きょうはあつい。', meaning: 'Hôm nay nóng.' }],
    related: [{ word: '明日', reading: 'あした', meaning: 'Ngày mai' }, { word: '昨日', reading: 'きのう', meaning: 'Hôm qua' }] },

  { id: 'n5-ashita', word: '明日', reading: 'あした', romaji: 'ashita', meaning: 'Ngày mai', hanViet: 'MINH NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '明日も学校。', reading: 'あしたもがっこう。', meaning: 'Ngày mai cũng đi học.' }],
    related: [{ word: '今日', reading: 'きょう', meaning: 'Hôm nay' }, { word: '昨日', reading: 'きのう', meaning: 'Hôm qua' }] },

  { id: 'n5-kinou', word: '昨日', reading: 'きのう', romaji: 'kinou', meaning: 'Hôm qua', hanViet: 'TÁC NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '昨日は楽しかった。', reading: 'きのうはたのしかった。', meaning: 'Hôm qua vui lắm.' }],
    related: [{ word: '今日', reading: 'きょう', meaning: 'Hôm nay' }, { word: '明日', reading: 'あした', meaning: 'Ngày mai' }] },

  { id: 'n5-tenki', word: '天気', reading: 'てんき', romaji: 'tenki', meaning: 'Thời tiết', hanViet: 'THIÊN KHÍ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên', 'Hàng ngày'],
    examples: [{ jp: '今日はいい天気です。', reading: 'きょうはいいてんきです。', meaning: 'Hôm nay trời đẹp.' }],
    phrases: [{ word: '天気予報', reading: 'てんきよほう', meaning: 'Dự báo thời tiết' }],
    related: [{ word: '雨', reading: 'あめ', meaning: 'Mưa' }] },

  { id: 'n5-ame', word: '雨', reading: 'あめ', romaji: 'ame', meaning: 'Mưa', hanViet: 'VŨ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên', 'Thời tiết'],
    examples: [{ jp: '雨が降る。', reading: 'あめがふる。', meaning: 'Trời mưa.' }],
    related: [{ word: '傘', reading: 'かさ', meaning: 'Ô' }, { word: '天気', reading: 'てんき', meaning: 'Thời tiết' }] },

  { id: 'n5-yama', word: '山', reading: 'やま', romaji: 'yama', meaning: 'Núi', hanViet: 'SƠN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên', 'Địa điểm'],
    examples: [{ jp: '山に登る。', reading: 'やまにのぼる。', meaning: 'Leo núi.' }],
    phrases: [{ word: '富士山', reading: 'ふじさん', meaning: 'Núi Phú Sĩ' }, { word: '山登り', reading: 'やまのぼり', meaning: 'Leo núi' }],
    related: [{ word: '川', reading: 'かわ', meaning: 'Sông' }, { word: '海', reading: 'うみ', meaning: 'Biển' }] },

  { id: 'n5-umi', word: '海', reading: 'うみ', romaji: 'umi', meaning: 'Biển', hanViet: 'HẢI', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên', 'Địa điểm'],
    examples: [{ jp: '海で泳ぐ。', reading: 'うみでおよぐ。', meaning: 'Bơi ở biển.' }],
    phrases: [{ word: '海外', reading: 'かいがい', meaning: 'Nước ngoài' }],
    related: [{ word: '山', reading: 'やま', meaning: 'Núi' }] },

  // ═══════════════ TÍNH TỪ -I (i-Adjectives) ═══════════════
  { id: 'n5-ookii', word: '大きい', reading: 'おおきい', romaji: 'ookii', meaning: 'To, lớn', hanViet: 'ĐẠI', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Kích thước', 'Miêu tả'],
    examples: [{ jp: '大きい犬がいる。', reading: 'おおきいいぬがいる。', meaning: 'Có con chó lớn.' }],
    antonyms: [{ word: '小さい', reading: 'ちいさい', meaning: 'Nhỏ' }],
    related: [{ word: '小さい', reading: 'ちいさい', meaning: 'Nhỏ' }] },

  { id: 'n5-chiisai', word: '小さい', reading: 'ちいさい', romaji: 'chiisai', meaning: 'Nhỏ', hanViet: 'TIỂU', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Kích thước', 'Miêu tả'],
    examples: [{ jp: '小さい花。', reading: 'ちいさいはな。', meaning: 'Bông hoa nhỏ.' }],
    antonyms: [{ word: '大きい', reading: 'おおきい', meaning: 'To' }],
    related: [{ word: '大きい', reading: 'おおきい', meaning: 'To' }] },

  { id: 'n5-atarashii', word: '新しい', reading: 'あたらしい', romaji: 'atarashii', meaning: 'Mới', hanViet: 'TÂN', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Trạng thái'],
    examples: [{ jp: '新しい靴を買った。', reading: 'あたらしいくつをかった。', meaning: 'Đã mua giày mới.' }],
    antonyms: [{ word: '古い', reading: 'ふるい', meaning: 'Cũ' }],
    related: [{ word: '古い', reading: 'ふるい', meaning: 'Cũ' }] },

  { id: 'n5-furui', word: '古い', reading: 'ふるい', romaji: 'furui', meaning: 'Cũ', hanViet: 'CỔ', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Trạng thái'],
    examples: [{ jp: '古い建物。', reading: 'ふるいたてもの。', meaning: 'Tòa nhà cũ.' }],
    antonyms: [{ word: '新しい', reading: 'あたらしい', meaning: 'Mới' }],
    related: [{ word: '新しい', reading: 'あたらしい', meaning: 'Mới' }] },

  { id: 'n5-takai', word: '高い', reading: 'たかい', romaji: 'takai', meaning: 'Cao, đắt', hanViet: 'CAO', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Kích thước', 'Giá cả', 'Miêu tả'],
    examples: [{ jp: 'この山は高い。', reading: 'このやまはたかい。', meaning: 'Núi này cao.' }],
    antonyms: [{ word: '低い', reading: 'ひくい', meaning: 'Thấp' }, { word: '安い', reading: 'やすい', meaning: 'Rẻ' }],
    related: [{ word: '安い', reading: 'やすい', meaning: 'Rẻ' }] },

  { id: 'n5-yasui', word: '安い', reading: 'やすい', romaji: 'yasui', meaning: 'Rẻ', hanViet: 'AN', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Giá cả', 'Mua sắm'],
    examples: [{ jp: 'この店は安い。', reading: 'このみせはやすい。', meaning: 'Cửa hàng này rẻ.' }],
    antonyms: [{ word: '高い', reading: 'たかい', meaning: 'Đắt' }],
    related: [{ word: '高い', reading: 'たかい', meaning: 'Đắt' }] },

  { id: 'n5-atsui', word: '暑い', reading: 'あつい', romaji: 'atsui', meaning: 'Nóng (thời tiết)', hanViet: 'THỬ', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Thời tiết', 'Cảm giác'],
    examples: [{ jp: '今日は暑い。', reading: 'きょうはあつい。', meaning: 'Hôm nay nóng.' }],
    antonyms: [{ word: '寒い', reading: 'さむい', meaning: 'Lạnh' }],
    related: [{ word: '寒い', reading: 'さむい', meaning: 'Lạnh' }, { word: '熱い', reading: 'あつい', meaning: 'Nóng (vật)' }],
    notes: 'Phân biệt: 暑い (thời tiết nóng) vs 熱い (vật nóng)' },

  { id: 'n5-samui', word: '寒い', reading: 'さむい', romaji: 'samui', meaning: 'Lạnh (thời tiết)', hanViet: 'HÀN', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Thời tiết', 'Cảm giác'],
    examples: [{ jp: '冬は寒い。', reading: 'ふゆはさむい。', meaning: 'Mùa đông lạnh.' }],
    antonyms: [{ word: '暑い', reading: 'あつい', meaning: 'Nóng' }],
    related: [{ word: '暑い', reading: 'あつい', meaning: 'Nóng' }, { word: '冷たい', reading: 'つめたい', meaning: 'Lạnh (vật)' }],
    notes: 'Phân biệt: 寒い (thời tiết lạnh) vs 冷たい (vật lạnh)' },

  { id: 'n5-tanoshii', word: '楽しい', reading: 'たのしい', romaji: 'tanoshii', meaning: 'Vui vẻ', hanViet: 'LẠC', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Cảm xúc', 'Miêu tả'],
    examples: [{ jp: '旅行は楽しい。', reading: 'りょこうはたのしい。', meaning: 'Du lịch thật vui.' }],
    antonyms: [{ word: 'つまらない', reading: 'つまらない', meaning: 'Nhàm chán' }],
    related: [{ word: '面白い', reading: 'おもしろい', meaning: 'Thú vị' }] },

  { id: 'n5-omoshiroi', word: '面白い', reading: 'おもしろい', romaji: 'omoshiroi', meaning: 'Thú vị, hay', hanViet: 'DIỆN BẠCH', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Cảm xúc', 'Miêu tả'],
    examples: [{ jp: 'この映画は面白い。', reading: 'このえいがはおもしろい。', meaning: 'Bộ phim này hay.' }],
    antonyms: [{ word: 'つまらない', reading: 'つまらない', meaning: 'Nhàm chán' }],
    related: [{ word: '楽しい', reading: 'たのしい', meaning: 'Vui' }] },

  { id: 'n5-isogashii', word: '忙しい', reading: 'いそがしい', romaji: 'isogashii', meaning: 'Bận rộn', hanViet: 'MANG', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Trạng thái', 'Công việc'],
    examples: [{ jp: '毎日忙しい。', reading: 'まいにちいそがしい。', meaning: 'Mỗi ngày đều bận.' }],
    antonyms: [{ word: '暇', reading: 'ひま', meaning: 'Rảnh rỗi' }],
    related: [{ word: '暇', reading: 'ひま', meaning: 'Rảnh' }] },

  { id: 'n5-hayai', word: '早い', reading: 'はやい', romaji: 'hayai', meaning: 'Sớm, nhanh', hanViet: 'TẢO', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Thời gian', 'Tốc độ'],
    examples: [{ jp: '朝早い。', reading: 'あさはやい。', meaning: 'Sáng sớm.' }],
    antonyms: [{ word: '遅い', reading: 'おそい', meaning: 'Muộn, chậm' }],
    related: [{ word: '速い', reading: 'はやい', meaning: 'Nhanh (tốc độ)' }],
    notes: 'Phân biệt: 早い (sớm) vs 速い (nhanh về tốc độ)' },

  { id: 'n5-osoi', word: '遅い', reading: 'おそい', romaji: 'osoi', meaning: 'Muộn, chậm', hanViet: 'TRÌ', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Thời gian', 'Tốc độ'],
    examples: [{ jp: '電車が遅い。', reading: 'でんしゃがおそい。', meaning: 'Tàu bị trễ.' }],
    antonyms: [{ word: '早い', reading: 'はやい', meaning: 'Sớm, nhanh' }],
    related: [{ word: '早い', reading: 'はやい', meaning: 'Sớm' }] },

  { id: 'n5-ii', word: 'いい', reading: 'いい', romaji: 'ii', meaning: 'Tốt, hay', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Cơ bản', 'Cảm xúc'],
    examples: [{ jp: 'いい天気ですね。', reading: 'いいてんきですね。', meaning: 'Thời tiết đẹp nhỉ.' }],
    antonyms: [{ word: '悪い', reading: 'わるい', meaning: 'Xấu, tệ' }],
    related: [{ word: '悪い', reading: 'わるい', meaning: 'Xấu' }],
    notes: 'Dạng biến đổi: よかった (quá khứ), よくない (phủ định)' },

  { id: 'n5-warui', word: '悪い', reading: 'わるい', romaji: 'warui', meaning: 'Xấu, tệ', hanViet: 'ÁC', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Cơ bản'],
    examples: [{ jp: '天気が悪い。', reading: 'てんきがわるい。', meaning: 'Thời tiết xấu.' }],
    antonyms: [{ word: 'いい', reading: 'いい', meaning: 'Tốt' }],
    related: [{ word: 'いい', reading: 'いい', meaning: 'Tốt' }] },

  // ═══════════════ TÍNH TỪ -NA (na-Adjectives) ═══════════════
  { id: 'n5-genki', word: '元気', reading: 'げんき', romaji: 'genki', meaning: 'Khỏe mạnh, vui vẻ', hanViet: 'NGUYÊN KHÍ', type: 'Tính từ -na', jlpt: 'N5',
    tags: ['Sức khỏe', 'Cảm xúc', 'Giao tiếp'],
    examples: [{ jp: 'お元気ですか？', reading: 'おげんきですか？', meaning: 'Bạn có khỏe không?' }],
    antonyms: [{ word: '病気', reading: 'びょうき', meaning: 'Bệnh' }],
    related: [{ word: '病気', reading: 'びょうき', meaning: 'Bệnh' }] },

  { id: 'n5-shizuka', word: '静か', reading: 'しずか', romaji: 'shizuka', meaning: 'Yên tĩnh', hanViet: 'TĨNH', type: 'Tính từ -na', jlpt: 'N5',
    tags: ['Miêu tả', 'Môi trường'],
    examples: [{ jp: '図書館は静かです。', reading: 'としょかんはしずかです。', meaning: 'Thư viện yên tĩnh.' }],
    antonyms: [{ word: 'にぎやか', reading: 'にぎやか', meaning: 'Nhộn nhịp' }],
    related: [{ word: 'にぎやか', reading: 'にぎやか', meaning: 'Nhộn nhịp' }] },

  { id: 'n5-suki', word: '好き', reading: 'すき', romaji: 'suki', meaning: 'Thích', hanViet: 'HIẾU', type: 'Tính từ -na', jlpt: 'N5',
    tags: ['Cảm xúc', 'Giao tiếp'],
    examples: [{ jp: '日本料理が好きです。', reading: 'にほんりょうりがすきです。', meaning: 'Tôi thích ẩm thực Nhật.' }],
    antonyms: [{ word: '嫌い', reading: 'きらい', meaning: 'Ghét' }],
    related: [{ word: '嫌い', reading: 'きらい', meaning: 'Ghét' }, { word: '大好き', reading: 'だいすき', meaning: 'Rất thích' }] },

  { id: 'n5-kirai', word: '嫌い', reading: 'きらい', romaji: 'kirai', meaning: 'Ghét', hanViet: 'HIỀM', type: 'Tính từ -na', jlpt: 'N5',
    tags: ['Cảm xúc', 'Giao tiếp'],
    examples: [{ jp: '野菜が嫌いです。', reading: 'やさいがきらいです。', meaning: 'Tôi ghét rau.' }],
    antonyms: [{ word: '好き', reading: 'すき', meaning: 'Thích' }],
    related: [{ word: '好き', reading: 'すき', meaning: 'Thích' }] },

  { id: 'n5-jouzu', word: '上手', reading: 'じょうず', romaji: 'jouzu', meaning: 'Giỏi, khéo', hanViet: 'THƯỢNG THỦ', type: 'Tính từ -na', jlpt: 'N5',
    tags: ['Năng lực', 'Miêu tả'],
    examples: [{ jp: '日本語が上手です。', reading: 'にほんごがじょうずです。', meaning: 'Giỏi tiếng Nhật.' }],
    antonyms: [{ word: '下手', reading: 'へた', meaning: 'Kém, dở' }],
    related: [{ word: '下手', reading: 'へた', meaning: 'Kém' }] },

  { id: 'n5-heta', word: '下手', reading: 'へた', romaji: 'heta', meaning: 'Kém, dở', hanViet: 'HẠ THỦ', type: 'Tính từ -na', jlpt: 'N5',
    tags: ['Năng lực', 'Miêu tả'],
    examples: [{ jp: '料理が下手です。', reading: 'りょうりがへたです。', meaning: 'Nấu ăn dở.' }],
    antonyms: [{ word: '上手', reading: 'じょうず', meaning: 'Giỏi' }],
    related: [{ word: '上手', reading: 'じょうず', meaning: 'Giỏi' }] },

  { id: 'n5-taihen', word: '大変', reading: 'たいへん', romaji: 'taihen', meaning: 'Vất vả, rất', hanViet: 'ĐẠI BIẾN', type: 'Tính từ -na', jlpt: 'N5',
    tags: ['Trạng thái', 'Cảm xúc'],
    examples: [{ jp: '仕事が大変です。', reading: 'しごとがたいへんです。', meaning: 'Công việc vất vả.' }],
    related: [{ word: '忙しい', reading: 'いそがしい', meaning: 'Bận rộn' }],
    notes: 'Cũng dùng như trạng từ: 大変おいしい = Rất ngon' },

  { id: 'n5-kirei', word: 'きれい', reading: 'きれい', romaji: 'kirei', meaning: 'Đẹp, sạch', type: 'Tính từ -na', jlpt: 'N5',
    tags: ['Miêu tả', 'Cảm xúc'],
    examples: [{ jp: 'この花はきれいです。', reading: 'このはなはきれいです。', meaning: 'Bông hoa này đẹp.' }],
    antonyms: [{ word: '汚い', reading: 'きたない', meaning: 'Bẩn' }],
    related: [{ word: '汚い', reading: 'きたない', meaning: 'Bẩn' }],
    notes: 'Dù kết thúc bằng い nhưng きれい là tính từ -na!' },

  { id: 'n5-benri', word: '便利', reading: 'べんり', romaji: 'benri', meaning: 'Tiện lợi', hanViet: 'TIỆN LỢI', type: 'Tính từ -na', jlpt: 'N5',
    tags: ['Miêu tả', 'Đời sống'],
    examples: [{ jp: '電車は便利です。', reading: 'でんしゃはべんりです。', meaning: 'Tàu điện tiện lợi.' }],
    antonyms: [{ word: '不便', reading: 'ふべん', meaning: 'Bất tiện' }],
    related: [{ word: '不便', reading: 'ふべん', meaning: 'Bất tiện' }] },

  { id: 'n5-hima', word: '暇', reading: 'ひま', romaji: 'hima', meaning: 'Rảnh rỗi', hanViet: 'HÀ', type: 'Tính từ -na', jlpt: 'N5',
    tags: ['Trạng thái', 'Thời gian'],
    examples: [{ jp: '今日は暇です。', reading: 'きょうはひまです。', meaning: 'Hôm nay rảnh.' }],
    antonyms: [{ word: '忙しい', reading: 'いそがしい', meaning: 'Bận' }],
    related: [{ word: '忙しい', reading: 'いそがしい', meaning: 'Bận rộn' }] },

  // ═══════════════ PHÓ TỪ & ĐẠI TỪ (Adverbs & Pronouns) ═══════════════
  { id: 'n5-totemo', word: 'とても', reading: 'とても', romaji: 'totemo', meaning: 'Rất', type: 'Phó từ', jlpt: 'N5',
    tags: ['Mức độ', 'Cơ bản'],
    examples: [{ jp: 'とても美味しい。', reading: 'とてもおいしい。', meaning: 'Rất ngon.' }],
    synonyms: [{ word: 'たいへん', reading: 'たいへん', meaning: 'Rất (trang trọng)' }, { word: 'すごく', reading: 'すごく', meaning: 'Cực kỳ' }],
    related: [{ word: 'あまり', reading: 'あまり', meaning: 'Không lắm' }] },

  { id: 'n5-sukoshi', word: '少し', reading: 'すこし', romaji: 'sukoshi', meaning: 'Một chút', hanViet: 'THIỂU', type: 'Phó từ', jlpt: 'N5',
    tags: ['Mức độ', 'Số lượng'],
    examples: [{ jp: '少し待ってください。', reading: 'すこしまってください。', meaning: 'Xin đợi một chút.' }],
    synonyms: [{ word: 'ちょっと', reading: 'ちょっと', meaning: 'Một chút (thân mật)' }],
    antonyms: [{ word: 'たくさん', reading: 'たくさん', meaning: 'Nhiều' }],
    related: [{ word: 'たくさん', reading: 'たくさん', meaning: 'Nhiều' }] },

  { id: 'n5-takusan', word: 'たくさん', reading: 'たくさん', romaji: 'takusan', meaning: 'Nhiều', type: 'Phó từ', jlpt: 'N5',
    tags: ['Số lượng', 'Cơ bản'],
    examples: [{ jp: 'たくさん食べた。', reading: 'たくさんたべた。', meaning: 'Đã ăn nhiều.' }],
    antonyms: [{ word: '少し', reading: 'すこし', meaning: 'Một chút' }],
    related: [{ word: '少し', reading: 'すこし', meaning: 'Ít' }] },

  { id: 'n5-itsumo', word: 'いつも', reading: 'いつも', romaji: 'itsumo', meaning: 'Luôn luôn', type: 'Phó từ', jlpt: 'N5',
    tags: ['Tần suất', 'Thời gian'],
    examples: [{ jp: 'いつも7時に起きる。', reading: 'いつもしちじにおきる。', meaning: 'Luôn dậy lúc 7 giờ.' }],
    antonyms: [{ word: '全然', reading: 'ぜんぜん', meaning: 'Hoàn toàn không' }],
    related: [{ word: '時々', reading: 'ときどき', meaning: 'Thỉnh thoảng' }] },

  { id: 'n5-tokidoki', word: '時々', reading: 'ときどき', romaji: 'tokidoki', meaning: 'Thỉnh thoảng', hanViet: 'THỜI THỜI', type: 'Phó từ', jlpt: 'N5',
    tags: ['Tần suất', 'Thời gian'],
    examples: [{ jp: '時々映画を見る。', reading: 'ときどきえいがをみる。', meaning: 'Thỉnh thoảng xem phim.' }],
    related: [{ word: 'いつも', reading: 'いつも', meaning: 'Luôn' }, { word: 'よく', reading: 'よく', meaning: 'Thường' }] },

  { id: 'n5-mou', word: 'もう', reading: 'もう', romaji: 'mou', meaning: 'Đã, rồi', type: 'Phó từ', jlpt: 'N5',
    tags: ['Thời gian', 'Cơ bản'],
    examples: [{ jp: 'もう食べた。', reading: 'もうたべた。', meaning: 'Đã ăn rồi.' }],
    antonyms: [{ word: 'まだ', reading: 'まだ', meaning: 'Vẫn chưa' }],
    related: [{ word: 'まだ', reading: 'まだ', meaning: 'Vẫn chưa' }] },

  { id: 'n5-mada', word: 'まだ', reading: 'まだ', romaji: 'mada', meaning: 'Vẫn, chưa', type: 'Phó từ', jlpt: 'N5',
    tags: ['Thời gian', 'Cơ bản'],
    examples: [{ jp: 'まだ来ていない。', reading: 'まだきていない。', meaning: 'Vẫn chưa đến.' }],
    antonyms: [{ word: 'もう', reading: 'もう', meaning: 'Đã rồi' }],
    related: [{ word: 'もう', reading: 'もう', meaning: 'Đã' }] },

  { id: 'n5-kore', word: 'これ', reading: 'これ', romaji: 'kore', meaning: 'Cái này', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định', 'Cơ bản'],
    examples: [{ jp: 'これは何ですか？', reading: 'これはなんですか？', meaning: 'Cái này là gì?' }],
    related: [{ word: 'それ', reading: 'それ', meaning: 'Cái đó' }, { word: 'あれ', reading: 'あれ', meaning: 'Cái kia' }] },

  { id: 'n5-sore', word: 'それ', reading: 'それ', romaji: 'sore', meaning: 'Cái đó', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định', 'Cơ bản'],
    examples: [{ jp: 'それをください。', reading: 'それをください。', meaning: 'Cho tôi cái đó.' }],
    related: [{ word: 'これ', reading: 'これ', meaning: 'Cái này' }, { word: 'あれ', reading: 'あれ', meaning: 'Cái kia' }] },

  { id: 'n5-are', word: 'あれ', reading: 'あれ', romaji: 'are', meaning: 'Cái kia', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định', 'Cơ bản'],
    examples: [{ jp: 'あれは何？', reading: 'あれはなに？', meaning: 'Cái kia là gì?' }],
    related: [{ word: 'これ', reading: 'これ', meaning: 'Cái này' }, { word: 'それ', reading: 'それ', meaning: 'Cái đó' }] },

  { id: 'n5-watashi', word: '私', reading: 'わたし', romaji: 'watashi', meaning: 'Tôi', hanViet: 'TƯ', type: 'Đại từ', jlpt: 'N5',
    tags: ['Con người', 'Cơ bản', 'Giao tiếp'],
    examples: [{ jp: '私は学生です。', reading: 'わたしはがくせいです。', meaning: 'Tôi là sinh viên.' }],
    related: [{ word: 'あなた', reading: 'あなた', meaning: 'Bạn' }, { word: '僕', reading: 'ぼく', meaning: 'Tôi (nam)' }] },

  { id: 'n5-itsu', word: 'いつ', reading: 'いつ', romaji: 'itsu', meaning: 'Khi nào', type: 'Đại từ nghi vấn', jlpt: 'N5',
    tags: ['Nghi vấn', 'Thời gian'],
    examples: [{ jp: 'いつ来ますか？', reading: 'いつきますか？', meaning: 'Khi nào đến?' }],
    related: [{ word: 'どこ', reading: 'どこ', meaning: 'Ở đâu' }, { word: 'だれ', reading: 'だれ', meaning: 'Ai' }] },

  { id: 'n5-doko', word: 'どこ', reading: 'どこ', romaji: 'doko', meaning: 'Ở đâu', type: 'Đại từ nghi vấn', jlpt: 'N5',
    tags: ['Nghi vấn', 'Địa điểm'],
    examples: [{ jp: 'どこに行きますか？', reading: 'どこにいきますか？', meaning: 'Đi đâu?' }],
    related: [{ word: 'いつ', reading: 'いつ', meaning: 'Khi nào' }, { word: '何', reading: 'なに', meaning: 'Cái gì' }] },

  { id: 'n5-nani', word: '何', reading: 'なに', romaji: 'nani', meaning: 'Cái gì', hanViet: 'HÀ', type: 'Đại từ nghi vấn', jlpt: 'N5',
    tags: ['Nghi vấn', 'Cơ bản'],
    examples: [{ jp: 'これは何ですか？', reading: 'これはなんですか？', meaning: 'Đây là cái gì?' }],
    related: [{ word: 'だれ', reading: 'だれ', meaning: 'Ai' }, { word: 'どこ', reading: 'どこ', meaning: 'Ở đâu' }],
    notes: 'Đọc là なに hoặc なん tùy ngữ cảnh' },

  { id: 'n5-mainichi', word: '毎日', reading: 'まいにち', romaji: 'mainichi', meaning: 'Mỗi ngày', hanViet: 'MỖI NHẬT', type: 'Phó từ', jlpt: 'N5',
    tags: ['Thời gian', 'Tần suất'],
    examples: [{ jp: '毎日勉強する。', reading: 'まいにちべんきょうする。', meaning: 'Mỗi ngày đều học.' }],
    related: [{ word: '毎週', reading: 'まいしゅう', meaning: 'Mỗi tuần' }, { word: '毎月', reading: 'まいつき', meaning: 'Mỗi tháng' }] },

  // ═══════════════ BỔ SUNG — ĐỘNG TỪ ═══════════════
  { id: 'n5-oyogu', word: '泳ぐ', reading: 'およぐ', romaji: 'oyogu', meaning: 'Bơi', hanViet: 'VỊNH', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Thể thao', 'Hành động'],
    examples: [{ jp: 'プールで泳ぐ。', reading: 'プールでおよぐ。', meaning: 'Bơi ở hồ bơi.' }] },
  { id: 'n5-utau', word: '歌う', reading: 'うたう', romaji: 'utau', meaning: 'Hát', hanViet: 'CA', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Giải trí', 'Hành động'],
    examples: [{ jp: '歌を歌う。', reading: 'うたをうたう。', meaning: 'Hát bài hát.' }],
    phrases: [{ word: '歌手', reading: 'かしゅ', meaning: 'Ca sĩ' }] },
  { id: 'n5-tobu', word: '飛ぶ', reading: 'とぶ', romaji: 'tobu', meaning: 'Bay, nhảy', hanViet: 'PHI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển', 'Hành động'],
    examples: [{ jp: '鳥が飛ぶ。', reading: 'とりがとぶ。', meaning: 'Chim bay.' }],
    phrases: [{ word: '飛行機', reading: 'ひこうき', meaning: 'Máy bay' }] },
  { id: 'n5-kiru', word: '切る', reading: 'きる', romaji: 'kiru', meaning: 'Cắt', hanViet: 'THIẾT', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: '紙を切る。', reading: 'かみをきる。', meaning: 'Cắt giấy.' }] },
  { id: 'n5-osu', word: '押す', reading: 'おす', romaji: 'osu', meaning: 'Đẩy, nhấn', hanViet: 'ÁP', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: 'ボタンを押す。', reading: 'ボタンをおす。', meaning: 'Nhấn nút.' }],
    antonyms: [{ word: '引く', reading: 'ひく', meaning: 'Kéo' }] },
  { id: 'n5-hiku', word: '引く', reading: 'ひく', romaji: 'hiku', meaning: 'Kéo', hanViet: 'DẪN', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: 'ドアを引く。', reading: 'ドアをひく。', meaning: 'Kéo cửa.' }],
    antonyms: [{ word: '押す', reading: 'おす', meaning: 'Đẩy' }] },
  { id: 'n5-nomu2', word: '乗る', reading: 'のる', romaji: 'noru', meaning: 'Đi, lên (phương tiện)', hanViet: 'THỪA', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển'],
    examples: [{ jp: 'バスに乗る。', reading: 'バスにのる。', meaning: 'Lên xe buýt.' }],
    antonyms: [{ word: '降りる', reading: 'おりる', meaning: 'Xuống xe' }] },
  { id: 'n5-harau', word: '払う', reading: 'はらう', romaji: 'harau', meaning: 'Trả (tiền)', hanViet: 'PHẤT', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Kinh tế', 'Hành động'],
    examples: [{ jp: 'お金を払う。', reading: 'おかねをはらう。', meaning: 'Trả tiền.' }] },
  { id: 'n5-ireru', word: '入れる', reading: 'いれる', romaji: 'ireru', meaning: 'Cho vào, bỏ vào', hanViet: 'NHẬP', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: 'かばんに入れる。', reading: 'かばんにいれる。', meaning: 'Cho vào túi xách.' }],
    antonyms: [{ word: '出す', reading: 'だす', meaning: 'Lấy ra' }] },
  { id: 'n5-dasu', word: '出す', reading: 'だす', romaji: 'dasu', meaning: 'Lấy ra, gửi', hanViet: 'XUẤT', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: '手紙を出す。', reading: 'てがみをだす。', meaning: 'Gửi thư.' }] },
  { id: 'n5-oku', word: '置く', reading: 'おく', romaji: 'oku', meaning: 'Đặt, để', hanViet: 'TRÍ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Hàng ngày'],
    examples: [{ jp: 'テーブルに置く。', reading: 'テーブルにおく。', meaning: 'Đặt lên bàn.' }] },
  { id: 'n5-tsukareru', word: '疲れる', reading: 'つかれる', romaji: 'tsukareru', meaning: 'Mệt mỏi', hanViet: 'BÌ', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Trạng thái', 'Cơ thể'],
    examples: [{ jp: '仕事で疲れた。', reading: 'しごとでつかれた。', meaning: 'Mệt vì công việc.' }] },
  { id: 'n5-narabu', word: '並ぶ', reading: 'ならぶ', romaji: 'narabu', meaning: 'Xếp hàng', hanViet: 'TỊNH', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Xã hội'],
    examples: [{ jp: '列に並ぶ。', reading: 'れつにならぶ。', meaning: 'Xếp hàng.' }] },
  { id: 'n5-kasu', word: '貸す', reading: 'かす', romaji: 'kasu', meaning: 'Cho mượn', hanViet: 'ĐẠI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động', 'Giao tiếp'],
    examples: [{ jp: '本を貸す。', reading: 'ほんをかす。', meaning: 'Cho mượn sách.' }],
    antonyms: [{ word: '借りる', reading: 'かりる', meaning: 'Mượn' }] },
  { id: 'n5-kariru', word: '借りる', reading: 'かりる', romaji: 'kariru', meaning: 'Mượn', hanViet: 'TÁ', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hành động', 'Giao tiếp'],
    examples: [{ jp: '図書館で本を借りる。', reading: 'としょかんでほんをかりる。', meaning: 'Mượn sách ở thư viện.' }] },
  { id: 'n5-kakeru', word: 'かける', reading: 'かける', romaji: 'kakeru', meaning: 'Gọi (điện thoại), đeo (kính)', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hành động', 'Giao tiếp'],
    examples: [{ jp: '電話をかける。', reading: 'でんわをかける。', meaning: 'Gọi điện thoại.' }] },
  { id: 'n5-kiru2', word: '着る', reading: 'きる', romaji: 'kiru', meaning: 'Mặc (quần áo)', hanViet: 'TRƯỚC', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hàng ngày', 'Hành động'],
    examples: [{ jp: 'コートを着る。', reading: 'コートをきる。', meaning: 'Mặc áo khoác.' }],
    antonyms: [{ word: '脱ぐ', reading: 'ぬぐ', meaning: 'Cởi' }] },
  { id: 'n5-nugu', word: '脱ぐ', reading: 'ぬぐ', romaji: 'nugu', meaning: 'Cởi (quần áo/giày)', hanViet: 'THOÁT', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hàng ngày', 'Hành động'],
    examples: [{ jp: '靴を脱ぐ。', reading: 'くつをぬぐ。', meaning: 'Cởi giày.' }] },
  { id: 'n5-haku', word: '履く', reading: 'はく', romaji: 'haku', meaning: 'Mang (giày/quần)', hanViet: 'LÝ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hàng ngày', 'Hành động'],
    examples: [{ jp: '靴を履く。', reading: 'くつをはく。', meaning: 'Mang giày.' }] },
  { id: 'n5-kaburu', word: 'かぶる', reading: 'かぶる', romaji: 'kaburu', meaning: 'Đội (mũ)', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hàng ngày', 'Hành động'],
    examples: [{ jp: '帽子をかぶる。', reading: 'ぼうしをかぶる。', meaning: 'Đội mũ.' }] },
  { id: 'n5-suwaruN', word: '吸う', reading: 'すう', romaji: 'suu', meaning: 'Hít, hút', hanViet: 'HẤP', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: 'たばこを吸う。', reading: 'たばこをすう。', meaning: 'Hút thuốc.' }] },
  { id: 'n5-furu', word: '降る', reading: 'ふる', romaji: 'furu', meaning: 'Rơi (mưa/tuyết)', hanViet: 'GIÁNG', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Thời tiết', 'Tự nhiên'],
    examples: [{ jp: '雨が降る。', reading: 'あめがふる。', meaning: 'Trời mưa.' }] },
  { id: 'n5-fuku', word: '吹く', reading: 'ふく', romaji: 'fuku', meaning: 'Thổi', hanViet: 'XUY', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Thời tiết', 'Hành động'],
    examples: [{ jp: '風が吹く。', reading: 'かぜがふく。', meaning: 'Gió thổi.' }] },
  { id: 'n5-yobu', word: '呼ぶ', reading: 'よぶ', romaji: 'yobu', meaning: 'Gọi', hanViet: 'HÔ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Giao tiếp', 'Hành động'],
    examples: [{ jp: 'タクシーを呼ぶ。', reading: 'タクシーをよぶ。', meaning: 'Gọi taxi.' }] },
  { id: 'n5-shinu', word: '死ぬ', reading: 'しぬ', romaji: 'shinu', meaning: 'Chết', hanViet: 'TỬ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Trạng thái'],
    examples: [{ jp: '魚が死んだ。', reading: 'さかながしんだ。', meaning: 'Con cá đã chết.' }],
    antonyms: [{ word: '生きる', reading: 'いきる', meaning: 'Sống' }],
    notes: 'Động từ nhóm 1 duy nhất kết thúc bằng ぬ' },
  { id: 'n5-nareru', word: '慣れる', reading: 'なれる', romaji: 'nareru', meaning: 'Quen', hanViet: 'QUÁN', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Trạng thái', 'Cảm xúc'],
    examples: [{ jp: '日本の生活に慣れた。', reading: 'にほんのせいかつになれた。', meaning: 'Đã quen với cuộc sống Nhật Bản.' }] },

  // ═══════════════ BỔ SUNG — CƠ THỂ ═══════════════
  { id: 'n5-atama', word: '頭', reading: 'あたま', romaji: 'atama', meaning: 'Đầu', hanViet: 'ĐẦU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '頭が痛い。', reading: 'あたまがいたい。', meaning: 'Đau đầu.' }],
    phrases: [{ word: '頭がいい', reading: 'あたまがいい', meaning: 'Thông minh' }] },
  { id: 'n5-me', word: '目', reading: 'め', romaji: 'me', meaning: 'Mắt', hanViet: 'MỤC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '目が大きい。', reading: 'めがおおきい。', meaning: 'Mắt to.' }] },
  { id: 'n5-mimi', word: '耳', reading: 'みみ', romaji: 'mimi', meaning: 'Tai', hanViet: 'NHĨ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '耳が聞こえない。', reading: 'みみがきこえない。', meaning: 'Không nghe thấy.' }] },
  { id: 'n5-kuchi', word: '口', reading: 'くち', romaji: 'kuchi', meaning: 'Miệng', hanViet: 'KHẨU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '口を開ける。', reading: 'くちをあける。', meaning: 'Mở miệng.' }] },
  { id: 'n5-te', word: '手', reading: 'て', romaji: 'te', meaning: 'Tay', hanViet: 'THỦ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '手を洗う。', reading: 'てをあらう。', meaning: 'Rửa tay.' }] },
  { id: 'n5-ashi', word: '足', reading: 'あし', romaji: 'ashi', meaning: 'Chân', hanViet: 'TÚC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '足が速い。', reading: 'あしがはやい。', meaning: 'Chân nhanh.' }] },
  { id: 'n5-karada', word: '体', reading: 'からだ', romaji: 'karada', meaning: 'Cơ thể', hanViet: 'THỂ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '体に気をつける。', reading: 'からだにきをつける。', meaning: 'Chú ý sức khỏe.' }] },
  { id: 'n5-kao', word: '顔', reading: 'かお', romaji: 'kao', meaning: 'Khuôn mặt', hanViet: 'NHAN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '顔を洗う。', reading: 'かおをあらう。', meaning: 'Rửa mặt.' }] },
  { id: 'n5-ha', word: '歯', reading: 'は', romaji: 'ha', meaning: 'Răng', hanViet: 'XỈ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '歯を磨く。', reading: 'はをみがく。', meaning: 'Đánh răng.' }] },
  { id: 'n5-hana', word: '鼻', reading: 'はな', romaji: 'hana', meaning: 'Mũi', hanViet: 'TỴ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '鼻が高い。', reading: 'はながたかい。', meaning: 'Mũi cao.' }] },
  { id: 'n5-onaka', word: 'お腹', reading: 'おなか', romaji: 'onaka', meaning: 'Bụng', hanViet: 'PHÚC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: 'お腹が空いた。', reading: 'おなかがすいた。', meaning: 'Đói bụng.' }] },
  { id: 'n5-senaka', word: '背中', reading: 'せなか', romaji: 'senaka', meaning: 'Lưng', hanViet: 'BỐI TRUNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '背中が痛い。', reading: 'せなかがいたい。', meaning: 'Đau lưng.' }] },

  // ═══════════════ BỔ SUNG — GIA ĐÌNH ═══════════════
  { id: 'n5-otousan', word: 'お父さん', reading: 'おとうさん', romaji: 'otousan', meaning: 'Bố (kính ngữ)', hanViet: 'PHỤ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình', 'Kính ngữ'],
    examples: [{ jp: 'お父さんは会社員です。', reading: 'おとうさんはかいしゃいんです。', meaning: 'Bố là nhân viên công ty.' }],
    related: [{ word: '父', reading: 'ちち', meaning: 'Bố (khiêm nhường)' }] },
  { id: 'n5-okaasan', word: 'お母さん', reading: 'おかあさん', romaji: 'okaasan', meaning: 'Mẹ (kính ngữ)', hanViet: 'MẪU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình', 'Kính ngữ'],
    examples: [{ jp: 'お母さんは料理が上手です。', reading: 'おかあさんはりょうりがじょうずです。', meaning: 'Mẹ nấu ăn giỏi.' }],
    related: [{ word: '母', reading: 'はは', meaning: 'Mẹ (khiêm nhường)' }] },
  { id: 'n5-chichi', word: '父', reading: 'ちち', romaji: 'chichi', meaning: 'Bố (khiêm nhường)', hanViet: 'PHỤ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình', 'Khiêm nhường'],
    examples: [{ jp: '父は医者です。', reading: 'ちちはいしゃです。', meaning: 'Bố tôi là bác sĩ.' }] },
  { id: 'n5-haha', word: '母', reading: 'はは', romaji: 'haha', meaning: 'Mẹ (khiêm nhường)', hanViet: 'MẪU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình', 'Khiêm nhường'],
    examples: [{ jp: '母は先生です。', reading: 'はははせんせいです。', meaning: 'Mẹ tôi là giáo viên.' }] },
  { id: 'n5-oniisan', word: 'お兄さん', reading: 'おにいさん', romaji: 'oniisan', meaning: 'Anh trai (kính ngữ)', hanViet: 'HUYNH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình', 'Kính ngữ'],
    examples: [{ jp: 'お兄さんは大学生です。', reading: 'おにいさんはだいがくせいです。', meaning: 'Anh trai là sinh viên đại học.' }],
    related: [{ word: '兄', reading: 'あに', meaning: 'Anh trai (khiêm nhường)' }] },
  { id: 'n5-oneesan', word: 'お姉さん', reading: 'おねえさん', romaji: 'oneesan', meaning: 'Chị gái (kính ngữ)', hanViet: 'TỶ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình', 'Kính ngữ'],
    examples: [{ jp: 'お姉さんは優しいです。', reading: 'おねえさんはやさしいです。', meaning: 'Chị gái rất hiền.' }],
    related: [{ word: '姉', reading: 'あね', meaning: 'Chị gái (khiêm nhường)' }] },
  { id: 'n5-otouto', word: '弟', reading: 'おとうと', romaji: 'otouto', meaning: 'Em trai', hanViet: 'ĐỆ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình'],
    examples: [{ jp: '弟は高校生です。', reading: 'おとうとはこうこうせいです。', meaning: 'Em trai là học sinh cấp 3.' }] },
  { id: 'n5-imouto', word: '妹', reading: 'いもうと', romaji: 'imouto', meaning: 'Em gái', hanViet: 'MUỘI', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình'],
    examples: [{ jp: '妹は中学生です。', reading: 'いもうとはちゅうがくせいです。', meaning: 'Em gái là học sinh cấp 2.' }] },
  { id: 'n5-kodomo', word: '子供', reading: 'こども', romaji: 'kodomo', meaning: 'Trẻ em, con cái', hanViet: 'TỬ CUNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình', 'Con người'],
    examples: [{ jp: '子供が三人います。', reading: 'こどもがさんにんいます。', meaning: 'Có 3 đứa con.' }] },
  { id: 'n5-musuko', word: '息子', reading: 'むすこ', romaji: 'musuko', meaning: 'Con trai', hanViet: 'TỨC TỬ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình'],
    examples: [{ jp: '息子は学生です。', reading: 'むすこはがくせいです。', meaning: 'Con trai là học sinh.' }] },
  { id: 'n5-musume', word: '娘', reading: 'むすめ', romaji: 'musume', meaning: 'Con gái', hanViet: 'NƯƠNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình'],
    examples: [{ jp: '娘が結婚した。', reading: 'むすめがけっこんした。', meaning: 'Con gái đã kết hôn.' }] },

  // ═══════════════ BỔ SUNG — THỨC ĂN & ĐỒ VẬT ═══════════════
  { id: 'n5-gohan', word: 'ご飯', reading: 'ごはん', romaji: 'gohan', meaning: 'Cơm, bữa ăn', hanViet: 'PHẠN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Hàng ngày'],
    examples: [{ jp: 'ご飯を食べましょう。', reading: 'ごはんをたべましょう。', meaning: 'Ăn cơm thôi.' }] },
  { id: 'n5-pan', word: 'パン', reading: 'パン', romaji: 'pan', meaning: 'Bánh mì', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn'],
    examples: [{ jp: '朝パンを食べる。', reading: 'あさパンをたべる。', meaning: 'Buổi sáng ăn bánh mì.' }] },
  { id: 'n5-niku', word: '肉', reading: 'にく', romaji: 'niku', meaning: 'Thịt', hanViet: 'NHỤC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn'],
    examples: [{ jp: '肉が好きです。', reading: 'にくがすきです。', meaning: 'Thích thịt.' }] },
  { id: 'n5-sakana', word: '魚', reading: 'さかな', romaji: 'sakana', meaning: 'Cá', hanViet: 'NGƯ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Động vật'],
    examples: [{ jp: '魚を釣る。', reading: 'さかなをつる。', meaning: 'Câu cá.' }] },
  { id: 'n5-yasai', word: '野菜', reading: 'やさい', romaji: 'yasai', meaning: 'Rau', hanViet: 'DÃ THÁI', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn'],
    examples: [{ jp: '野菜を食べなさい。', reading: 'やさいをたべなさい。', meaning: 'Hãy ăn rau.' }] },
  { id: 'n5-kudamono', word: '果物', reading: 'くだもの', romaji: 'kudamono', meaning: 'Trái cây', hanViet: 'QUẢ VẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn'],
    examples: [{ jp: '果物が大好きです。', reading: 'くだものがだいすきです。', meaning: 'Rất thích trái cây.' }] },
  { id: 'n5-tamago', word: '卵', reading: 'たまご', romaji: 'tamago', meaning: 'Trứng', hanViet: 'NOÃN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn'],
    examples: [{ jp: '卵を割る。', reading: 'たまごをわる。', meaning: 'Đập trứng.' }] },
  { id: 'n5-gyuunyuu', word: '牛乳', reading: 'ぎゅうにゅう', romaji: 'gyuunyuu', meaning: 'Sữa bò', hanViet: 'NGƯU NHŨ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Đồ uống'],
    examples: [{ jp: '毎朝牛乳を飲む。', reading: 'まいあさぎゅうにゅうをのむ。', meaning: 'Mỗi sáng uống sữa bò.' }] },
  { id: 'n5-ryouri', word: '料理', reading: 'りょうり', romaji: 'ryouri', meaning: 'Món ăn, nấu ăn', hanViet: 'LIỆU LÝ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Hành động'],
    examples: [{ jp: '料理を作る。', reading: 'りょうりをつくる。', meaning: 'Nấu ăn.' }] },

  // ═══════════════ BỔ SUNG — MÀU SẮC ═══════════════
  { id: 'n5-akai', word: '赤い', reading: 'あかい', romaji: 'akai', meaning: 'Đỏ', hanViet: 'XÍCH', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '赤い花。', reading: 'あかいはな。', meaning: 'Hoa đỏ.' }] },
  { id: 'n5-aoi', word: '青い', reading: 'あおい', romaji: 'aoi', meaning: 'Xanh (da trời/lá)', hanViet: 'THANH', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '青い空。', reading: 'あおいそら。', meaning: 'Bầu trời xanh.' }] },
  { id: 'n5-shiroi', word: '白い', reading: 'しろい', romaji: 'shiroi', meaning: 'Trắng', hanViet: 'BẠCH', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '白い雪。', reading: 'しろいゆき。', meaning: 'Tuyết trắng.' }],
    antonyms: [{ word: '黒い', reading: 'くろい', meaning: 'Đen' }] },
  { id: 'n5-kuroi', word: '黒い', reading: 'くろい', romaji: 'kuroi', meaning: 'Đen', hanViet: 'HẮC', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '黒い猫。', reading: 'くろいねこ。', meaning: 'Mèo đen.' }],
    antonyms: [{ word: '白い', reading: 'しろい', meaning: 'Trắng' }] },
  { id: 'n5-kiiroi', word: '黄色い', reading: 'きいろい', romaji: 'kiiroi', meaning: 'Vàng', hanViet: 'HOÀNG SẮC', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '黄色い花。', reading: 'きいろいはな。', meaning: 'Hoa vàng.' }] },
  { id: 'n5-iro', word: '色', reading: 'いろ', romaji: 'iro', meaning: 'Màu sắc', hanViet: 'SẮC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '好きな色は何ですか？', reading: 'すきないろはなんですか？', meaning: 'Màu yêu thích là gì?' }] },

  // ═══════════════ BỔ SUNG — ĐỊA ĐIỂM ═══════════════
  { id: 'n5-byouin', word: '病院', reading: 'びょういん', romaji: 'byouin', meaning: 'Bệnh viện', hanViet: 'BỆNH VIỆN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Y tế'],
    examples: [{ jp: '病院に行く。', reading: 'びょういんにいく。', meaning: 'Đi bệnh viện.' }] },
  { id: 'n5-ginkou', word: '銀行', reading: 'ぎんこう', romaji: 'ginkou', meaning: 'Ngân hàng', hanViet: 'NGÂN HÀNH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Kinh tế'],
    examples: [{ jp: '銀行でお金を下ろす。', reading: 'ぎんこうでおかねをおろす。', meaning: 'Rút tiền ở ngân hàng.' }] },
  { id: 'n5-yuubinkyoku', word: '郵便局', reading: 'ゆうびんきょく', romaji: 'yuubinkyoku', meaning: 'Bưu điện', hanViet: 'BƯU TIỆN CỤC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm'],
    examples: [{ jp: '郵便局で手紙を出す。', reading: 'ゆうびんきょくでてがみをだす。', meaning: 'Gửi thư ở bưu điện.' }] },
  { id: 'n5-toshokan', word: '図書館', reading: 'としょかん', romaji: 'toshokan', meaning: 'Thư viện', hanViet: 'ĐỒ THƯ QUÁN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Học tập'],
    examples: [{ jp: '図書館で勉強する。', reading: 'としょかんでべんきょうする。', meaning: 'Học ở thư viện.' }] },
  { id: 'n5-kouen', word: '公園', reading: 'こうえん', romaji: 'kouen', meaning: 'Công viên', hanViet: 'CÔNG VIÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Giải trí'],
    examples: [{ jp: '公園で遊ぶ。', reading: 'こうえんであそぶ。', meaning: 'Chơi ở công viên.' }] },
  { id: 'n5-depaato', word: 'デパート', reading: 'デパート', romaji: 'depaato', meaning: 'Trung tâm thương mại', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Mua sắm'],
    examples: [{ jp: 'デパートで買い物する。', reading: 'デパートでかいものする。', meaning: 'Mua sắm ở trung tâm thương mại.' }] },
  { id: 'n5-suupaa', word: 'スーパー', reading: 'スーパー', romaji: 'suupaa', meaning: 'Siêu thị', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Mua sắm'],
    examples: [{ jp: 'スーパーで野菜を買う。', reading: 'スーパーでやさいをかう。', meaning: 'Mua rau ở siêu thị.' }] },
  { id: 'n5-resutoran', word: 'レストラン', reading: 'レストラン', romaji: 'resutoran', meaning: 'Nhà hàng', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Thức ăn'],
    examples: [{ jp: 'レストランで食事する。', reading: 'レストランでしょくじする。', meaning: 'Ăn ở nhà hàng.' }] },
  { id: 'n5-hoteru', word: 'ホテル', reading: 'ホテル', romaji: 'hoteru', meaning: 'Khách sạn', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Du lịch'],
    examples: [{ jp: 'ホテルに泊まる。', reading: 'ホテルにとまる。', meaning: 'Ở khách sạn.' }] },
  { id: 'n5-kuukou', word: '空港', reading: 'くうこう', romaji: 'kuukou', meaning: 'Sân bay', hanViet: 'KHÔNG CẢNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa điểm', 'Du lịch'],
    examples: [{ jp: '空港に着いた。', reading: 'くうこうについた。', meaning: 'Đã đến sân bay.' }] },

  // ═══════════════ BỔ SUNG — ĐỒ VẬT & GIẢI TRÍ ═══════════════
  { id: 'n5-eiga', word: '映画', reading: 'えいが', romaji: 'eiga', meaning: 'Phim, điện ảnh', hanViet: 'ÁNH HỌA', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giải trí'],
    examples: [{ jp: '映画を見る。', reading: 'えいがをみる。', meaning: 'Xem phim.' }],
    phrases: [{ word: '映画館', reading: 'えいがかん', meaning: 'Rạp chiếu phim' }] },
  { id: 'n5-ongaku', word: '音楽', reading: 'おんがく', romaji: 'ongaku', meaning: 'Âm nhạc', hanViet: 'ÂM NHẠC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giải trí', 'Nghệ thuật'],
    examples: [{ jp: '音楽を聞く。', reading: 'おんがくをきく。', meaning: 'Nghe nhạc.' }] },
  { id: 'n5-shashin', word: '写真', reading: 'しゃしん', romaji: 'shashin', meaning: 'Ảnh, ảnh chụp', hanViet: 'TẢ CHÂN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giải trí', 'Đồ vật'],
    examples: [{ jp: '写真を撮る。', reading: 'しゃしんをとる。', meaning: 'Chụp ảnh.' }] },
  { id: 'n5-ryokou', word: '旅行', reading: 'りょこう', romaji: 'ryokou', meaning: 'Du lịch', hanViet: 'LỮ HÀNH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Du lịch', 'Giải trí'],
    examples: [{ jp: '日本に旅行する。', reading: 'にほんにりょこうする。', meaning: 'Du lịch Nhật Bản.' }] },
  { id: 'n5-tegami', word: '手紙', reading: 'てがみ', romaji: 'tegami', meaning: 'Thư', hanViet: 'THỦ CHỈ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giao tiếp', 'Đồ vật'],
    examples: [{ jp: '手紙を書く。', reading: 'てがみをかく。', meaning: 'Viết thư.' }] },
  { id: 'n5-kasa', word: '傘', reading: 'かさ', romaji: 'kasa', meaning: 'Ô, dù', hanViet: 'TÁN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật', 'Thời tiết'],
    examples: [{ jp: '傘を持って行く。', reading: 'かさをもっていく。', meaning: 'Mang ô đi.' }] },
  { id: 'n5-kaban', word: 'かばん', reading: 'かばん', romaji: 'kaban', meaning: 'Cặp, túi xách', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật', 'Hàng ngày'],
    examples: [{ jp: 'かばんの中に本がある。', reading: 'かばんのなかにほんがある。', meaning: 'Có sách trong túi xách.' }] },
  { id: 'n5-megane', word: '眼鏡', reading: 'めがね', romaji: 'megane', meaning: 'Kính mắt', hanViet: 'NHÃN KÍNH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật'],
    examples: [{ jp: '眼鏡をかける。', reading: 'めがねをかける。', meaning: 'Đeo kính.' }] },
  { id: 'n5-tokei', word: '時計', reading: 'とけい', romaji: 'tokei', meaning: 'Đồng hồ', hanViet: 'THỜI KẾ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật', 'Thời gian'],
    examples: [{ jp: '時計を見る。', reading: 'とけいをみる。', meaning: 'Nhìn đồng hồ.' }] },
  { id: 'n5-saifu', word: '財布', reading: 'さいふ', romaji: 'saifu', meaning: 'Ví', hanViet: 'TÀI BỐ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật', 'Kinh tế'],
    examples: [{ jp: '財布を忘れた。', reading: 'さいふをわすれた。', meaning: 'Quên ví.' }] },
    { id: 'n5-kami', word: '紙', reading: 'かみ', romaji: 'kami', meaning: 'Giấy', hanViet: 'CHỈ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật'],
    examples: [{ jp: '紙に書く。', reading: 'かみにかく。', meaning: 'Viết lên giấy.' }] },
  { id: 'n5-enpitsu', word: '鉛筆', reading: 'えんぴつ', romaji: 'enpitsu', meaning: 'Bút chì', hanViet: 'DIÊN BÚT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật', 'Học tập'],
    examples: [{ jp: '鉛筆で書く。', reading: 'えんぴつでかく。', meaning: 'Viết bằng bút chì.' }] },

  // ═══════════════ BỔ SUNG — THIÊN NHIÊN & ĐỘNG VẬT ═══════════════
  { id: 'n5-sora', word: '空', reading: 'そら', romaji: 'sora', meaning: 'Bầu trời', hanViet: 'KHÔNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên'],
    examples: [{ jp: '空がきれいだ。', reading: 'そらがきれいだ。', meaning: 'Bầu trời đẹp.' }] },
  { id: 'n5-kaze', word: '風', reading: 'かぜ', romaji: 'kaze', meaning: 'Gió', hanViet: 'PHONG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên', 'Thời tiết'],
    examples: [{ jp: '風が強い。', reading: 'かぜがつよい。', meaning: 'Gió mạnh.' }] },
  { id: 'n5-yuki', word: '雪', reading: 'ゆき', romaji: 'yuki', meaning: 'Tuyết', hanViet: 'TUYẾT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên', 'Thời tiết'],
    examples: [{ jp: '雪が降っている。', reading: 'ゆきがふっている。', meaning: 'Tuyết đang rơi.' }] },
  { id: 'n5-hana2', word: '花', reading: 'はな', romaji: 'hana', meaning: 'Hoa', hanViet: 'HOA', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên', 'Đẹp'],
    examples: [{ jp: '花がきれいだ。', reading: 'はながきれいだ。', meaning: 'Hoa đẹp.' }],
    phrases: [{ word: '花見', reading: 'はなみ', meaning: 'Ngắm hoa' }] },
  { id: 'n5-ki', word: '木', reading: 'き', romaji: 'ki', meaning: 'Cây', hanViet: 'MỘC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên'],
    examples: [{ jp: '木の下で休む。', reading: 'きのしたでやすむ。', meaning: 'Nghỉ dưới gốc cây.' }] },
  { id: 'n5-kawa', word: '川', reading: 'かわ', romaji: 'kawa', meaning: 'Sông', hanViet: 'XUYÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên', 'Địa lý'],
    examples: [{ jp: '川で泳ぐ。', reading: 'かわでおよぐ。', meaning: 'Bơi ở sông.' }] },
  { id: 'n5-inu', word: '犬', reading: 'いぬ', romaji: 'inu', meaning: 'Chó', hanViet: 'KHUYỂN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Động vật'],
    examples: [{ jp: '犬が好きです。', reading: 'いぬがすきです。', meaning: 'Thích chó.' }],
    antonyms: [{ word: '猫', reading: 'ねこ', meaning: 'Mèo' }] },
  { id: 'n5-neko', word: '猫', reading: 'ねこ', romaji: 'neko', meaning: 'Mèo', hanViet: 'MIÊU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Động vật'],
    examples: [{ jp: '猫がいます。', reading: 'ねこがいます。', meaning: 'Có mèo.' }] },
  { id: 'n5-tori', word: '鳥', reading: 'とり', romaji: 'tori', meaning: 'Chim', hanViet: 'ĐIỂU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Động vật'],
    examples: [{ jp: '鳥が飛んでいる。', reading: 'とりがとんでいる。', meaning: 'Chim đang bay.' }] },

  // ═══════════════ BỔ SUNG — THỜI GIAN & CON SỐ ═══════════════
  { id: 'n5-asa', word: '朝', reading: 'あさ', romaji: 'asa', meaning: 'Buổi sáng', hanViet: 'TRIÊU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '朝ごはんを食べる。', reading: 'あさごはんをたべる。', meaning: 'Ăn bữa sáng.' }] },
  { id: 'n5-hiru', word: '昼', reading: 'ひる', romaji: 'hiru', meaning: 'Buổi trưa', hanViet: 'TRÚ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '昼ご飯を食べる。', reading: 'ひるごはんをたべる。', meaning: 'Ăn bữa trưa.' }] },
  { id: 'n5-yoru', word: '夜', reading: 'よる', romaji: 'yoru', meaning: 'Buổi tối, đêm', hanViet: 'DẠ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '夜遅くまで起きている。', reading: 'よるおそくまでおきている。', meaning: 'Thức khuya.' }] },
  { id: 'n5-ban', word: '晩', reading: 'ばん', romaji: 'ban', meaning: 'Tối', hanViet: 'VÃN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '今晩暇ですか？', reading: 'こんばんひまですか？', meaning: 'Tối nay rảnh không?' }] },
  { id: 'n5-senshuu', word: '先週', reading: 'せんしゅう', romaji: 'senshuu', meaning: 'Tuần trước', hanViet: 'TIÊN TUẦN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '先週旅行した。', reading: 'せんしゅうりょこうした。', meaning: 'Tuần trước đã đi du lịch.' }] },
  { id: 'n5-raishuu', word: '来週', reading: 'らいしゅう', romaji: 'raishuu', meaning: 'Tuần sau', hanViet: 'LAI TUẦN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '来週テストがある。', reading: 'らいしゅうテストがある。', meaning: 'Tuần sau có bài kiểm tra.' }] },
  { id: 'n5-sengetsu', word: '先月', reading: 'せんげつ', romaji: 'sengetsu', meaning: 'Tháng trước', hanViet: 'TIÊN NGUYỆT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '先月日本に行った。', reading: 'せんげつにほんにいった。', meaning: 'Tháng trước đã đi Nhật.' }] },
  { id: 'n5-raigetsu', word: '来月', reading: 'らいげつ', romaji: 'raigetsu', meaning: 'Tháng sau', hanViet: 'LAI NGUYỆT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '来月引っ越す。', reading: 'らいげつひっこす。', meaning: 'Tháng sau sẽ chuyển nhà.' }] },
  { id: 'n5-kyonen', word: '去年', reading: 'きょねん', romaji: 'kyonen', meaning: 'Năm ngoái', hanViet: 'KHỨ NIÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '去年結婚した。', reading: 'きょねんけっこんした。', meaning: 'Năm ngoái đã kết hôn.' }] },
  { id: 'n5-rainen', word: '来年', reading: 'らいねん', romaji: 'rainen', meaning: 'Năm sau', hanViet: 'LAI NIÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '来年日本へ行きたい。', reading: 'らいねんにほんへいきたい。', meaning: 'Muốn đi Nhật năm sau.' }] },

  // ═══════════════ BỔ SUNG — TÍNH TỪ ═══════════════
  { id: 'n5-nagai', word: '長い', reading: 'ながい', romaji: 'nagai', meaning: 'Dài', hanViet: 'TRƯỜNG', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Kích thước'],
    examples: [{ jp: '長い髪。', reading: 'ながいかみ。', meaning: 'Tóc dài.' }],
    antonyms: [{ word: '短い', reading: 'みじかい', meaning: 'Ngắn' }] },
  { id: 'n5-mijikai', word: '短い', reading: 'みじかい', romaji: 'mijikai', meaning: 'Ngắn', hanViet: 'ĐOẢN', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Kích thước'],
    examples: [{ jp: '短い時間。', reading: 'みじかいじかん。', meaning: 'Thời gian ngắn.' }] },
  { id: 'n5-hiroi', word: '広い', reading: 'ひろい', romaji: 'hiroi', meaning: 'Rộng', hanViet: 'QUẢNG', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Kích thước'],
    examples: [{ jp: '広い部屋。', reading: 'ひろいへや。', meaning: 'Phòng rộng.' }],
    antonyms: [{ word: '狭い', reading: 'せまい', meaning: 'Hẹp' }] },
  { id: 'n5-semai', word: '狭い', reading: 'せまい', romaji: 'semai', meaning: 'Hẹp, chật', hanViet: 'HIỆP', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Kích thước'],
    examples: [{ jp: '道が狭い。', reading: 'みちがせまい。', meaning: 'Đường hẹp.' }] },
  { id: 'n5-tsuyoi', word: '強い', reading: 'つよい', romaji: 'tsuyoi', meaning: 'Mạnh, khỏe', hanViet: 'CƯỜNG', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Sức mạnh'],
    examples: [{ jp: '風が強い。', reading: 'かぜがつよい。', meaning: 'Gió mạnh.' }],
    antonyms: [{ word: '弱い', reading: 'よわい', meaning: 'Yếu' }] },
  { id: 'n5-yowai', word: '弱い', reading: 'よわい', romaji: 'yowai', meaning: 'Yếu', hanViet: 'NHƯỢC', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Sức mạnh'],
    examples: [{ jp: '体が弱い。', reading: 'からだがよわい。', meaning: 'Cơ thể yếu.' }] },
  { id: 'n5-futoi', word: '太い', reading: 'ふとい', romaji: 'futoi', meaning: 'Béo, to (đường kính)', hanViet: 'THÁI', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Kích thước'],
    examples: [{ jp: '太い木。', reading: 'ふといき。', meaning: 'Cây to.' }],
    antonyms: [{ word: '細い', reading: 'ほそい', meaning: 'Mảnh, gầy' }] },
  { id: 'n5-hosoi', word: '細い', reading: 'ほそい', romaji: 'hosoi', meaning: 'Mảnh, gầy', hanViet: 'TẾ', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Kích thước'],
    examples: [{ jp: '細い道。', reading: 'ほそいみち。', meaning: 'Đường nhỏ hẹp.' }] },
  { id: 'n5-omoi', word: '重い', reading: 'おもい', romaji: 'omoi', meaning: 'Nặng', hanViet: 'TRỌNG', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả'],
    examples: [{ jp: 'このかばんは重い。', reading: 'このかばんはおもい。', meaning: 'Cái túi này nặng.' }],
    antonyms: [{ word: '軽い', reading: 'かるい', meaning: 'Nhẹ' }] },
  { id: 'n5-karui', word: '軽い', reading: 'かるい', romaji: 'karui', meaning: 'Nhẹ', hanViet: 'KHINH', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả'],
    examples: [{ jp: '軽い荷物。', reading: 'かるいにもつ。', meaning: 'Hành lý nhẹ.' }] },
  { id: 'n5-amai', word: '甘い', reading: 'あまい', romaji: 'amai', meaning: 'Ngọt', hanViet: 'CAM', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Vị giác', 'Thức ăn'],
    examples: [{ jp: 'このケーキは甘い。', reading: 'このケーキはあまい。', meaning: 'Cái bánh này ngọt.' }],
    antonyms: [{ word: '辛い', reading: 'からい', meaning: 'Cay' }] },
  { id: 'n5-karai', word: '辛い', reading: 'からい', romaji: 'karai', meaning: 'Cay', hanViet: 'TÂN', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Vị giác', 'Thức ăn'],
    examples: [{ jp: 'この料理は辛い。', reading: 'このりょうりはからい。', meaning: 'Món này cay.' }] },
  { id: 'n5-itai', word: '痛い', reading: 'いたい', romaji: 'itai', meaning: 'Đau', hanViet: 'THỐNG', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Cơ thể', 'Cảm xúc'],
    examples: [{ jp: 'お腹が痛い。', reading: 'おなかがいたい。', meaning: 'Đau bụng.' }] },
  { id: 'n5-muzukashii', word: '難しい', reading: 'むずかしい', romaji: 'muzukashii', meaning: 'Khó', hanViet: 'NAN', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Học tập'],
    examples: [{ jp: '日本語は難しい。', reading: 'にほんごはむずかしい。', meaning: 'Tiếng Nhật thì khó.' }],
    antonyms: [{ word: '易しい', reading: 'やさしい', meaning: 'Dễ' }] },
  { id: 'n5-yasashii', word: '易しい', reading: 'やさしい', romaji: 'yasashii', meaning: 'Dễ', hanViet: 'DỊ', type: 'Tính từ -i', jlpt: 'N5',
    tags: ['Miêu tả', 'Học tập'],
    examples: [{ jp: '易しい問題。', reading: 'やさしいもんだい。', meaning: 'Câu hỏi dễ.' }],
    notes: 'Khác 優しい (hiền, tử tế)' },

  // ═══════════════ BỔ SUNG — PHÓ TỪ & KHÁC ═══════════════
  { id: 'n5-amari', word: 'あまり', reading: 'あまり', romaji: 'amari', meaning: 'Không ... lắm', type: 'Phó từ', jlpt: 'N5',
    tags: ['Mức độ', 'Phủ định'],
    examples: [{ jp: 'あまり好きじゃない。', reading: 'あまりすきじゃない。', meaning: 'Không thích lắm.' }],
    notes: 'Dùng với phủ định' },
  { id: 'n5-zenzen', word: '全然', reading: 'ぜんぜん', romaji: 'zenzen', meaning: 'Hoàn toàn không', hanViet: 'TOÀN NHIÊN', type: 'Phó từ', jlpt: 'N5',
    tags: ['Mức độ', 'Phủ định'],
    examples: [{ jp: '全然わからない。', reading: 'ぜんぜんわからない。', meaning: 'Hoàn toàn không hiểu.' }] },
  { id: 'n5-hajimete', word: '初めて', reading: 'はじめて', romaji: 'hajimete', meaning: 'Lần đầu tiên', hanViet: 'SƠ', type: 'Phó từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '初めて日本に来た。', reading: 'はじめてにほんにきた。', meaning: 'Lần đầu đến Nhật.' }] },
  { id: 'n5-issho', word: '一緒に', reading: 'いっしょに', romaji: 'isshoni', meaning: 'Cùng nhau', hanViet: 'NHẤT TỰ', type: 'Phó từ', jlpt: 'N5',
    tags: ['Giao tiếp', 'Hành động'],
    examples: [{ jp: '一緒に食べましょう。', reading: 'いっしょにたべましょう。', meaning: 'Cùng ăn nào.' }] },
  { id: 'n5-yukkuri', word: 'ゆっくり', reading: 'ゆっくり', romaji: 'yukkuri', meaning: 'Chậm rãi, thong thả', type: 'Phó từ', jlpt: 'N5',
    tags: ['Mức độ', 'Giao tiếp'],
    examples: [{ jp: 'ゆっくり話してください。', reading: 'ゆっくりはなしてください。', meaning: 'Xin nói chậm.' }] },
  { id: 'n5-motto', word: 'もっと', reading: 'もっと', romaji: 'motto', meaning: 'Hơn nữa', type: 'Phó từ', jlpt: 'N5',
    tags: ['Mức độ'],
    examples: [{ jp: 'もっと勉強しなさい。', reading: 'もっとべんきょうしなさい。', meaning: 'Hãy học nhiều hơn.' }] },
  { id: 'n5-dandan', word: 'だんだん', reading: 'だんだん', romaji: 'dandan', meaning: 'Dần dần', type: 'Phó từ', jlpt: 'N5',
    tags: ['Mức độ', 'Thời gian'],
    examples: [{ jp: 'だんだん暖かくなった。', reading: 'だんだんあたたかくなった。', meaning: 'Dần dần ấm lên.' }] },

  // ═══════════════ BỔ SUNG — DANH TỪ KHÁC ═══════════════
  { id: 'n5-okane', word: 'お金', reading: 'おかね', romaji: 'okane', meaning: 'Tiền', hanViet: 'KIM', type: 'Danh từ', jlpt: 'N5',
    tags: ['Kinh tế', 'Hàng ngày'],
    examples: [{ jp: 'お金がない。', reading: 'おかねがない。', meaning: 'Không có tiền.' }] },
  { id: 'n5-kotoba', word: '言葉', reading: 'ことば', romaji: 'kotoba', meaning: 'Từ ngữ, ngôn ngữ', hanViet: 'NGÔN DIỆP', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngôn ngữ', 'Giao tiếp'],
    examples: [{ jp: '日本語の言葉を覚える。', reading: 'にほんごのことばをおぼえる。', meaning: 'Nhớ từ tiếng Nhật.' }] },
  { id: 'n5-nihongo', word: '日本語', reading: 'にほんご', romaji: 'nihongo', meaning: 'Tiếng Nhật', hanViet: 'NHẬT BẢN NGỮ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngôn ngữ'],
    examples: [{ jp: '日本語を勉強する。', reading: 'にほんごをべんきょうする。', meaning: 'Học tiếng Nhật.' }] },
  { id: 'n5-benkyou', word: '勉強', reading: 'べんきょう', romaji: 'benkyou', meaning: 'Học hành', hanViet: 'MIỄN CƯỜNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Học tập', 'Hành động'],
    examples: [{ jp: '毎日勉強する。', reading: 'まいにちべんきょうする。', meaning: 'Mỗi ngày đều học.' }] },
  { id: 'n5-shukudai', word: '宿題', reading: 'しゅくだい', romaji: 'shukudai', meaning: 'Bài tập về nhà', hanViet: 'TÚC ĐỀ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Học tập'],
    examples: [{ jp: '宿題をする。', reading: 'しゅくだいをする。', meaning: 'Làm bài tập.' }] },
  { id: 'n5-kyoushitsu', word: '教室', reading: 'きょうしつ', romaji: 'kyoushitsu', meaning: 'Phòng học', hanViet: 'GIÁO THẤT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Học tập', 'Địa điểm'],
    examples: [{ jp: '教室で勉強する。', reading: 'きょうしつでべんきょうする。', meaning: 'Học trong phòng học.' }] },
  { id: 'n5-kuni', word: '国', reading: 'くに', romaji: 'kuni', meaning: 'Nước, quốc gia', hanViet: 'QUỐC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa lý', 'Xã hội'],
    examples: [{ jp: 'どこの国から来ましたか？', reading: 'どこのくにからきましたか？', meaning: 'Bạn đến từ nước nào?' }] },
  { id: 'n5-machi', word: '町', reading: 'まち', romaji: 'machi', meaning: 'Phố, thị trấn', hanViet: 'ĐINH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa lý', 'Địa điểm'],
    examples: [{ jp: 'この町はきれいだ。', reading: 'このまちはきれいだ。', meaning: 'Thị trấn này đẹp.' }] },
  { id: 'n5-michi', word: '道', reading: 'みち', romaji: 'michi', meaning: 'Đường, con đường', hanViet: 'ĐẠO', type: 'Danh từ', jlpt: 'N5',
    tags: ['Địa lý', 'Di chuyển'],
    examples: [{ jp: '道を教えてください。', reading: 'みちをおしえてください。', meaning: 'Xin chỉ đường.' }] },
  { id: 'n5-mondai2', word: '問題', reading: 'もんだい', romaji: 'mondai', meaning: 'Vấn đề, câu hỏi', hanViet: 'VẤN ĐỀ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Học tập', 'Tư duy'],
    examples: [{ jp: 'この問題は難しい。', reading: 'このもんだいはむずかしい。', meaning: 'Câu hỏi này khó.' }] },
  { id: 'n5-kotae', word: '答え', reading: 'こたえ', romaji: 'kotae', meaning: 'Câu trả lời', hanViet: 'ĐÁP', type: 'Danh từ', jlpt: 'N5',
    tags: ['Học tập', 'Giao tiếp'],
    examples: [{ jp: '答えを書く。', reading: 'こたえをかく。', meaning: 'Viết câu trả lời.' }] },
  { id: 'n5-namae', word: '名前', reading: 'なまえ', romaji: 'namae', meaning: 'Tên', hanViet: 'DANH TIỀN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Con người', 'Cơ bản'],
    examples: [{ jp: 'お名前は？', reading: 'おなまえは？', meaning: 'Tên bạn là gì?' }] },
  { id: 'n5-otoko', word: '男', reading: 'おとこ', romaji: 'otoko', meaning: 'Nam, đàn ông', hanViet: 'NAM', type: 'Danh từ', jlpt: 'N5',
    tags: ['Con người', 'Giới tính'],
    examples: [{ jp: '男の人。', reading: 'おとこのひと。', meaning: 'Người đàn ông.' }],
    antonyms: [{ word: '女', reading: 'おんな', meaning: 'Nữ' }] },
  { id: 'n5-onna', word: '女', reading: 'おんな', romaji: 'onna', meaning: 'Nữ, phụ nữ', hanViet: 'NỮ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Con người', 'Giới tính'],
    examples: [{ jp: '女の子。', reading: 'おんなのこ。', meaning: 'Cô gái, bé gái.' }] },
  { id: 'n5-obasan', word: '伯母さん', reading: 'おばさん', romaji: 'obasan', meaning: 'Bác gái, dì, cô', hanViet: 'BÁ MẪU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình', 'Con người'],
    examples: [{ jp: '伯母さんに会う。', reading: 'おばさんにあう。', meaning: 'Gặp bác gái.' }] },
  { id: 'n5-oji', word: '叔父', reading: 'おじ', romaji: 'oji', meaning: 'Chú, bác (trai)', hanViet: 'THÚC PHỤ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình', 'Con người'],
    examples: [{ jp: '叔父の家に行く。', reading: 'おじのいえにいく。', meaning: 'Đi đến nhà chú.' }] },
  { id: 'n5-kagi', word: '鍵', reading: 'かぎ', romaji: 'kagi', meaning: 'Chìa khóa, ổ khóa', hanViet: 'KIỆN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật', 'An ninh', 'Nhà cửa'],
    examples: [
      { jp: '鍵をかける。', reading: 'かぎをかける。', meaning: 'Khóa cửa / Đóng ổ khóa.' },
      { jp: '鍵を開ける。', reading: 'かぎをあける。', meaning: 'Mở khóa.' },
      { jp: '机の鍵を無くしてしまった。', reading: 'つくえのかぎをなくしてしまった。', meaning: 'Tôi đã làm mất chìa khóa ngăn kéo bàn.' }
    ],
    synonyms: [{ word: '合い鍵', reading: 'あいかぎ', meaning: 'Chìa khóa dự phòng / phụ' }],
    phrases: [
      { word: '鍵穴', reading: 'かぎあな', meaning: 'Lỗ khóa' },
      { word: '鍵束', reading: 'かぎたば', meaning: 'Chùm chìa khóa' }
    ]
  },
];

// ── from: vocabN5_Part2.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB N5 Part 2 — Hiragana words, demonstratives, adjectives, basic verbs
// ~135 entries — Fill remaining N5 gaps (batch 1/3)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_N5_PART2: VocabEntry[] = [
  // ═══════════════ CHỈ ĐỊNH TỪ / ĐẠI TỪ (Demonstratives & Pronouns) ═══════════════
  { id: 'n5-asoko', word: 'あそこ', reading: 'あそこ', romaji: 'asoko', meaning: 'Chỗ kia, nơi kia', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Vị trí'],
    examples: [{ jp: 'あそこに銀行があります。', reading: 'あそこにぎんこうがあります。', meaning: 'Ở chỗ kia có ngân hàng.' }],
    related: [{ word: 'ここ', reading: 'ここ', meaning: 'Chỗ này' }, { word: 'そこ', reading: 'そこ', meaning: 'Chỗ đó' }] },

  { id: 'n5-achira', word: 'あちら', reading: 'あちら', romaji: 'achira', meaning: 'Phía kia, hướng kia (lịch sự)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Kính ngữ'],
    examples: [{ jp: 'あちらは田中さんです。', reading: 'あちらはたなかさんです。', meaning: 'Đằng kia là anh Tanaka.' }],
    related: [{ word: 'こちら', reading: 'こちら', meaning: 'Phía này' }, { word: 'そちら', reading: 'そちら', meaning: 'Phía đó' }] },

  { id: 'n5-acchi', word: 'あっち', reading: 'あっち', romaji: 'acchi', meaning: 'Hướng kia (thân mật)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Thân mật'],
    examples: [{ jp: 'あっちに行こう。', reading: 'あっちにいこう。', meaning: 'Đi phía kia đi.' }],
    related: [{ word: 'こっち', reading: 'こっち', meaning: 'Phía này' }, { word: 'そっち', reading: 'そっち', meaning: 'Phía đó' }] },

  { id: 'n5-koko', word: 'ここ', reading: 'ここ', romaji: 'koko', meaning: 'Chỗ này, nơi này', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Vị trí'],
    examples: [{ jp: 'ここは学校です。', reading: 'ここはがっこうです。', meaning: 'Đây là trường học.' }],
    related: [{ word: 'そこ', reading: 'そこ', meaning: 'Chỗ đó' }, { word: 'あそこ', reading: 'あそこ', meaning: 'Chỗ kia' }] },

  { id: 'n5-kochira', word: 'こちら', reading: 'こちら', romaji: 'kochira', meaning: 'Phía này, bên này (lịch sự)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Kính ngữ'],
    examples: [{ jp: 'こちらへどうぞ。', reading: 'こちらへどうぞ。', meaning: 'Mời đi phía này.' }],
    related: [{ word: 'そちら', reading: 'そちら', meaning: 'Phía đó' }, { word: 'あちら', reading: 'あちら', meaning: 'Phía kia' }] },

  { id: 'n5-kocchi', word: 'こっち', reading: 'こっち', romaji: 'kocchi', meaning: 'Phía này (thân mật)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Thân mật'],
    examples: [{ jp: 'こっちに来て！', reading: 'こっちにきて！', meaning: 'Lại đây!' }],
    related: [{ word: 'そっち', reading: 'そっち', meaning: 'Phía đó' }, { word: 'あっち', reading: 'あっち', meaning: 'Phía kia' }] },

  { id: 'n5-soko', word: 'そこ', reading: 'そこ', romaji: 'soko', meaning: 'Chỗ đó, nơi đó', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Vị trí'],
    examples: [{ jp: 'そこに座ってください。', reading: 'そこにすわってください。', meaning: 'Hãy ngồi ở chỗ đó.' }],
    related: [{ word: 'ここ', reading: 'ここ', meaning: 'Chỗ này' }, { word: 'あそこ', reading: 'あそこ', meaning: 'Chỗ kia' }] },

  { id: 'n5-sochira', word: 'そちら', reading: 'そちら', romaji: 'sochira', meaning: 'Phía đó, bên đó (lịch sự)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Kính ngữ'],
    examples: [{ jp: 'そちらはどちら様ですか。', reading: 'そちらはどちらさまですか。', meaning: 'Xin hỏi bên đó là ai ạ?' }],
    related: [{ word: 'こちら', reading: 'こちら', meaning: 'Phía này' }, { word: 'あちら', reading: 'あちら', meaning: 'Phía kia' }] },

  { id: 'n5-socchi', word: 'そっち', reading: 'そっち', romaji: 'socchi', meaning: 'Phía đó (thân mật)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Thân mật'],
    examples: [{ jp: 'そっちのほうがいい。', reading: 'そっちのほうがいい。', meaning: 'Bên đó tốt hơn.' }],
    related: [{ word: 'こっち', reading: 'こっち', meaning: 'Phía này' }, { word: 'あっち', reading: 'あっち', meaning: 'Phía kia' }] },

  { id: 'n5-dochira', word: 'どちら', reading: 'どちら', romaji: 'dochira', meaning: 'Phía nào, bên nào (lịch sự)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Nghi vấn', 'Kính ngữ'],
    examples: [{ jp: 'どちらがいいですか。', reading: 'どちらがいいですか。', meaning: 'Cái nào tốt hơn ạ?' }],
    related: [{ word: 'こちら', reading: 'こちら', meaning: 'Phía này' }, { word: 'そちら', reading: 'そちら', meaning: 'Phía đó' }] },

  { id: 'n5-docchi', word: 'どっち', reading: 'どっち', romaji: 'docchi', meaning: 'Phía nào (thân mật)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Nghi vấn', 'Thân mật'],
    examples: [{ jp: 'どっちが好き？', reading: 'どっちがすき？', meaning: 'Thích cái nào?' }],
    related: [{ word: 'こっち', reading: 'こっち', meaning: 'Phía này' }, { word: 'そっち', reading: 'そっち', meaning: 'Phía đó' }] },

  { id: 'n5-dore', word: 'どれ', reading: 'どれ', romaji: 'dore', meaning: 'Cái nào (trong nhiều)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Nghi vấn'],
    examples: [{ jp: 'どれがあなたのですか。', reading: 'どれがあなたのですか。', meaning: 'Cái nào là của bạn?' }] },

  // ═══════════════ LIÊN TỪ ĐẠO (Determiners) ═══════════════
  { id: 'n5-ano', word: 'あの', reading: 'あの', romaji: 'ano', meaning: '(Cái) kia, ơ...', type: 'Liên thể từ', jlpt: 'N5',
    tags: ['Chỉ định từ'],
    examples: [{ jp: 'あの人は誰ですか。', reading: 'あのひとはだれですか。', meaning: 'Người kia là ai?' }],
    related: [{ word: 'この', reading: 'この', meaning: 'Cái này' }, { word: 'その', reading: 'その', meaning: 'Cái đó' }] },

  { id: 'n5-kono', word: 'この', reading: 'この', romaji: 'kono', meaning: '(Cái) này', type: 'Liên thể từ', jlpt: 'N5',
    tags: ['Chỉ định từ'],
    examples: [{ jp: 'この本は面白いです。', reading: 'このほんはおもしろいです。', meaning: 'Cuốn sách này thú vị.' }],
    related: [{ word: 'その', reading: 'その', meaning: 'Cái đó' }, { word: 'あの', reading: 'あの', meaning: 'Cái kia' }] },

  { id: 'n5-sono', word: 'その', reading: 'その', romaji: 'sono', meaning: '(Cái) đó', type: 'Liên thể từ', jlpt: 'N5',
    tags: ['Chỉ định từ'],
    examples: [{ jp: 'その映画を見ましたか。', reading: 'そのえいがをみましたか。', meaning: 'Bạn đã xem bộ phim đó chưa?' }],
    related: [{ word: 'この', reading: 'この', meaning: 'Cái này' }, { word: 'あの', reading: 'あの', meaning: 'Cái kia' }] },

  { id: 'n5-dono', word: 'どの', reading: 'どの', romaji: 'dono', meaning: '(Cái) nào', type: 'Liên thể từ', jlpt: 'N5',
    tags: ['Chỉ định từ', 'Nghi vấn'],
    examples: [{ jp: 'どの色が好きですか。', reading: 'どのいろがすきですか。', meaning: 'Bạn thích màu nào?' }] },

  { id: 'n5-konna', word: 'こんな', reading: 'こんな', romaji: 'konna', meaning: 'Như thế này, loại này', type: 'Liên thể từ', jlpt: 'N5',
    tags: ['Chỉ định từ'],
    examples: [{ jp: 'こんな天気は嫌いです。', reading: 'こんなてんきはきらいです。', meaning: 'Tôi không thích thời tiết thế này.' }] },

  // ═══════════════ PHÓ TỪ & LIÊN TỪ (Adverbs & Conjunctions) ═══════════════
  { id: 'n5-asatte', word: 'あさって', reading: 'あさって', romaji: 'asatte', meaning: 'Ngày kia, ngày mốt', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: 'あさって東京に行きます。', reading: 'あさってとうきょうにいきます。', meaning: 'Ngày kia tôi đi Tokyo.' }],
    related: [{ word: '明日', reading: 'あした', meaning: 'Ngày mai' }] },

  { id: 'n5-iroiro', word: 'いろいろ', reading: 'いろいろ', romaji: 'iroiro', meaning: 'Nhiều thứ, đa dạng', type: 'Tính từ -な', jlpt: 'N5',
    tags: ['Phó từ'],
    examples: [{ jp: 'いろいろありがとうございます。', reading: 'いろいろありがとうございます。', meaning: 'Cảm ơn nhiều thứ.' }] },

  { id: 'n5-shikashi', word: 'しかし', reading: 'しかし', romaji: 'shikashi', meaning: 'Tuy nhiên, nhưng mà', type: 'Liên từ', jlpt: 'N5',
    tags: ['Liên từ'],
    examples: [{ jp: '高いです。しかし、おいしいです。', reading: 'たかいです。しかし、おいしいです。', meaning: 'Đắt. Tuy nhiên, ngon.' }],
    synonyms: [{ word: 'でも', reading: 'でも', meaning: 'Nhưng mà' }] },

  { id: 'n5-suguni', word: 'すぐに', reading: 'すぐに', romaji: 'sugu ni', meaning: 'Ngay lập tức', type: 'Phó từ', jlpt: 'N5',
    tags: ['Thời gian', 'Phó từ'],
    examples: [{ jp: 'すぐに来てください。', reading: 'すぐにきてください。', meaning: 'Hãy đến ngay.' }] },

  { id: 'n5-soushite', word: 'そうして', reading: 'そうして', romaji: 'soushite', meaning: 'Rồi, sau đó, như vậy', type: 'Liên từ', jlpt: 'N5',
    tags: ['Liên từ'],
    examples: [{ jp: '勉強した。そうして、テストに受かった。', reading: 'べんきょうした。そうして、テストにうかった。', meaning: 'Đã học. Rồi đã đỗ bài kiểm tra.' }],
    synonyms: [{ word: 'そして', reading: 'そして', meaning: 'Và, rồi' }] },

  { id: 'n5-soshite', word: 'そして', reading: 'そして', romaji: 'soshite', meaning: 'Và, rồi, sau đó', type: 'Liên từ', jlpt: 'N5',
    tags: ['Liên từ'],
    examples: [{ jp: '朝ご飯を食べた。そして、学校に行った。', reading: 'あさごはんをたべた。そして、がっこうにいった。', meaning: 'Ăn bữa sáng. Rồi đi học.' }] },

  { id: 'n5-sorekara', word: 'それから', reading: 'それから', romaji: 'sorekara', meaning: 'Sau đó, rồi', type: 'Liên từ', jlpt: 'N5',
    tags: ['Liên từ', 'Thời gian'],
    examples: [{ jp: '映画を見た。それから、食事をした。', reading: 'えいがをみた。それから、しょくじをした。', meaning: 'Xem phim. Sau đó, ăn cơm.' }] },

  { id: 'n5-soredewa', word: 'それでは', reading: 'それでは', romaji: 'soredewa', meaning: 'Vậy thì, thế thì', type: 'Liên từ', jlpt: 'N5',
    tags: ['Liên từ'],
    examples: [{ jp: 'それでは、始めましょう。', reading: 'それでは、はじめましょう。', meaning: 'Vậy thì, bắt đầu thôi.' }],
    synonyms: [{ word: 'では', reading: 'では', meaning: 'Vậy thì' }, { word: 'じゃ', reading: 'じゃ', meaning: 'Vậy' }] },

  { id: 'n5-tabun', word: 'たぶん', reading: 'たぶん', romaji: 'tabun', meaning: 'Có lẽ, chắc', type: 'Phó từ', jlpt: 'N5',
    tags: ['Phó từ', 'Phỏng đoán'],
    examples: [{ jp: 'たぶん明日は雨です。', reading: 'たぶんあしたはあめです。', meaning: 'Có lẽ ngày mai mưa.' }] },

  { id: 'n5-choudo', word: 'ちょうど', reading: 'ちょうど', romaji: 'choudo', meaning: 'Vừa đúng, chính xác', type: 'Phó từ', jlpt: 'N5',
    tags: ['Phó từ'],
    examples: [{ jp: 'ちょうど三時です。', reading: 'ちょうどさんじです。', meaning: 'Đúng 3 giờ.' }] },

  { id: 'n5-dewa-conj', word: 'では', reading: 'では', romaji: 'dewa', meaning: 'Vậy thì, thế thì', type: 'Liên từ', jlpt: 'N5',
    tags: ['Liên từ'],
    examples: [{ jp: 'では、また明日。', reading: 'では、またあした。', meaning: 'Vậy, hẹn ngày mai.' }] },

  { id: 'n5-demo', word: 'でも', reading: 'でも', romaji: 'demo', meaning: 'Nhưng, nhưng mà', type: 'Liên từ', jlpt: 'N5',
    tags: ['Liên từ'],
    examples: [{ jp: '安いです。でも、おいしくないです。', reading: 'やすいです。でも、おいしくないです。', meaning: 'Rẻ. Nhưng không ngon.' }],
    synonyms: [{ word: 'しかし', reading: 'しかし', meaning: 'Tuy nhiên' }] },

  { id: 'n5-dou', word: 'どう', reading: 'どう', romaji: 'dou', meaning: 'Thế nào, ra sao', type: 'Phó từ', jlpt: 'N5',
    tags: ['Nghi vấn'],
    examples: [{ jp: 'この映画はどうでしたか。', reading: 'このえいがはどうでしたか。', meaning: 'Bộ phim này thế nào?' }],
    related: [{ word: 'いかが', reading: 'いかが', meaning: 'Thế nào (lịch sự)' }] },

  { id: 'n5-doushite', word: 'どうして', reading: 'どうして', romaji: 'doushite', meaning: 'Tại sao', type: 'Phó từ', jlpt: 'N5',
    tags: ['Nghi vấn'],
    examples: [{ jp: 'どうして遅れましたか。', reading: 'どうしておくれましたか。', meaning: 'Tại sao đến muộn?' }],
    synonyms: [{ word: 'なぜ', reading: 'なぜ', meaning: 'Tại sao' }] },

  { id: 'n5-douzo', word: 'どうぞ', reading: 'どうぞ', romaji: 'douzo', meaning: 'Mời, xin mời', type: 'Phó từ', jlpt: 'N5',
    tags: ['Lịch sự'],
    examples: [{ jp: 'どうぞお入りください。', reading: 'どうぞおはいりください。', meaning: 'Xin mời vào.' }] },

  { id: 'n5-doumo', word: 'どうも', reading: 'どうも', romaji: 'doumo', meaning: 'Cảm ơn (thân mật), dù sao', type: 'Phó từ', jlpt: 'N5',
    tags: ['Lịch sự', 'Thân mật'],
    examples: [{ jp: 'どうもありがとう。', reading: 'どうもありがとう。', meaning: 'Cảm ơn nhiều.' }] },

  { id: 'n5-naze', word: 'なぜ', reading: 'なぜ', romaji: 'naze', meaning: 'Tại sao, vì sao', type: 'Phó từ', jlpt: 'N5',
    tags: ['Nghi vấn'],
    examples: [{ jp: 'なぜ日本語を勉強していますか。', reading: 'なぜにほんごをべんきょうしていますか。', meaning: 'Tại sao bạn học tiếng Nhật?' }],
    synonyms: [{ word: 'どうして', reading: 'どうして', meaning: 'Tại sao' }] },

  { id: 'n5-nado', word: 'など', reading: 'など', romaji: 'nado', meaning: 'V.v., và các thứ khác', type: 'Trợ từ', jlpt: 'N5',
    tags: ['Trợ từ'],
    examples: [{ jp: 'りんごやバナナなどを買いました。', reading: 'りんごやバナナなどをかいました。', meaning: 'Đã mua táo, chuối v.v.' }] },

  { id: 'n5-massugu', word: 'まっすぐ', reading: 'まっすぐ', romaji: 'massugu', meaning: 'Thẳng, ngay thẳng', type: 'Phó từ', jlpt: 'N5',
    tags: ['Hướng dẫn đường'],
    examples: [{ jp: 'まっすぐ行ってください。', reading: 'まっすぐいってください。', meaning: 'Hãy đi thẳng.' }] },

  { id: 'n5-mata', word: 'また', reading: 'また', romaji: 'mata', meaning: 'Lại, lần nữa', type: 'Phó từ', jlpt: 'N5',
    tags: ['Phó từ'],
    examples: [{ jp: 'また来てください。', reading: 'またきてください。', meaning: 'Hãy đến lại nhé.' }] },

  { id: 'n5-minna', word: 'みんな', reading: 'みんな', romaji: 'minna', meaning: 'Mọi người, tất cả', type: 'Đại từ', jlpt: 'N5',
    tags: ['Đại từ'],
    examples: [{ jp: 'みんなで食べましょう。', reading: 'みんなでたべましょう。', meaning: 'Mọi người cùng ăn nào.' }],
    synonyms: [{ word: '皆さん', reading: 'みなさん', meaning: 'Mọi người (lịch sự)' }] },

  { id: 'n5-mouichido', word: 'もう一度', reading: 'もういちど', romaji: 'mou ichido', meaning: 'Một lần nữa', type: 'Phó từ', jlpt: 'N5',
    tags: ['Phó từ'],
    examples: [{ jp: 'もう一度言ってください。', reading: 'もういちどいってください。', meaning: 'Hãy nói lại một lần nữa.' }] },

  { id: 'n5-yori', word: 'より', reading: 'より', romaji: 'yori', meaning: 'Hơn (so sánh)', type: 'Trợ từ', jlpt: 'N5',
    tags: ['Trợ từ', 'So sánh'],
    examples: [{ jp: '夏より冬が好きです。', reading: 'なつよりふゆがすきです。', meaning: 'Tôi thích mùa đông hơn mùa hè.' }] },

  { id: 'n5-hoka', word: 'ほか', reading: 'ほか', romaji: 'hoka', meaning: 'Khác, ngoài ra', type: 'Danh từ', jlpt: 'N5',
    tags: ['Danh từ'],
    examples: [{ jp: 'ほかに何かありますか。', reading: 'ほかになにかありますか。', meaning: 'Còn gì khác không?' }] },

  { id: 'n5-hontou', word: 'ほんとう', reading: 'ほんとう', romaji: 'hontou', meaning: 'Thật, thật sự', type: 'Tính từ -な', jlpt: 'N5',
    tags: ['Phó từ'],
    examples: [{ jp: 'ほんとうに美味しいですね。', reading: 'ほんとうにおいしいですね。', meaning: 'Thật sự ngon nhỉ.' }] },

  { id: 'n5-ja', word: 'じゃ', reading: 'じゃ', romaji: 'ja', meaning: 'Vậy thì, nào', type: 'Liên từ', jlpt: 'N5',
    tags: ['Liên từ', 'Thân mật'],
    examples: [{ jp: 'じゃ、また。', reading: 'じゃ、また。', meaning: 'Vậy, hẹn gặp lại.' }],
    synonyms: [{ word: 'では', reading: 'では', meaning: 'Vậy thì (lịch sự)' }] },

  { id: 'n5-jaa', word: 'じゃあ', reading: 'じゃあ', romaji: 'jaa', meaning: 'Vậy thì (thân mật)', type: 'Liên từ', jlpt: 'N5',
    tags: ['Liên từ', 'Thân mật'],
    examples: [{ jp: 'じゃあ、行きましょう。', reading: 'じゃあ、いきましょう。', meaning: 'Vậy thì đi thôi.' }] },

  { id: 'n5-saa', word: 'さあ', reading: 'さあ', romaji: 'saa', meaning: 'Nào, đi nào', type: 'Thán từ', jlpt: 'N5',
    tags: ['Thán từ'],
    examples: [{ jp: 'さあ、始めましょう。', reading: 'さあ、はじめましょう。', meaning: 'Nào, bắt đầu thôi.' }] },

  // ═══════════════ THÁN TỪ / ĐÁP TỪ (Interjections) ═══════════════
  { id: 'n5-hai', word: 'はい', reading: 'はい', romaji: 'hai', meaning: 'Vâng, dạ, có', type: 'Thán từ', jlpt: 'N5',
    tags: ['Thán từ', 'Hàng ngày'],
    examples: [{ jp: 'はい、分かりました。', reading: 'はい、わかりました。', meaning: 'Vâng, tôi hiểu rồi.' }],
    antonyms: [{ word: 'いいえ', reading: 'いいえ', meaning: 'Không' }] },

  { id: 'n5-iie', word: 'いいえ', reading: 'いいえ', romaji: 'iie', meaning: 'Không, không phải', type: 'Thán từ', jlpt: 'N5',
    tags: ['Thán từ', 'Hàng ngày'],
    examples: [{ jp: 'いいえ、違います。', reading: 'いいえ、ちがいます。', meaning: 'Không, sai rồi.' }],
    antonyms: [{ word: 'はい', reading: 'はい', meaning: 'Vâng' }] },

  { id: 'n5-ee', word: 'ええ', reading: 'ええ', romaji: 'ee', meaning: 'Vâng, ừ', type: 'Thán từ', jlpt: 'N5',
    tags: ['Thán từ', 'Thân mật'],
    examples: [{ jp: 'ええ、そうです。', reading: 'ええ、そうです。', meaning: 'Vâng, đúng vậy.' }] },

  { id: 'n5-ikaga', word: 'いかが', reading: 'いかが', romaji: 'ikaga', meaning: 'Thế nào (lịch sự)', type: 'Phó từ', jlpt: 'N5',
    tags: ['Nghi vấn', 'Kính ngữ'],
    examples: [{ jp: 'お茶はいかがですか。', reading: 'おちゃはいかがですか。', meaning: 'Dùng trà không ạ?' }],
    related: [{ word: 'どう', reading: 'どう', meaning: 'Thế nào' }] },

  // ═══════════════ TÍNH TỪ (Adjectives) ═══════════════
  { id: 'n5-oishii', word: 'おいしい', reading: 'おいしい', romaji: 'oishii', meaning: 'Ngon', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Thức ăn', 'Tính từ'],
    examples: [{ jp: 'この料理はおいしいです。', reading: 'このりょうりはおいしいです。', meaning: 'Món này ngon.' }],
    antonyms: [{ word: 'まずい', reading: 'まずい', meaning: 'Dở, không ngon' }] },

  { id: 'n5-kawaii', word: 'かわいい', reading: 'かわいい', romaji: 'kawaii', meaning: 'Dễ thương, đáng yêu', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Ngoại hình', 'Tính từ'],
    examples: [{ jp: 'この猫はかわいいです。', reading: 'このねこはかわいいです。', meaning: 'Con mèo này dễ thương.' }] },

  { id: 'n5-mazui', word: 'まずい', reading: 'まずい', romaji: 'mazui', meaning: 'Dở, không ngon; tệ', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Thức ăn', 'Tính từ'],
    examples: [{ jp: 'この料理はまずい。', reading: 'このりょうりはまずい。', meaning: 'Món này dở.' }],
    antonyms: [{ word: 'おいしい', reading: 'おいしい', meaning: 'Ngon' }] },

  { id: 'n5-yoi', word: 'よい', reading: 'よい', romaji: 'yoi', meaning: 'Tốt, hay', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Tính từ'],
    examples: [{ jp: 'よい天気ですね。', reading: 'よいてんきですね。', meaning: 'Thời tiết đẹp nhỉ.' }],
    synonyms: [{ word: 'いい', reading: 'いい', meaning: 'Tốt' }] },

  { id: 'n5-rippa', word: 'りっぱ', reading: 'りっぱ', romaji: 'rippa', meaning: 'Tuyệt vời, đẹp đẽ, lập phái', type: 'Tính từ -な', jlpt: 'N5',
    tags: ['Tính từ', 'Đánh giá'],
    examples: [{ jp: 'りっぱな建物ですね。', reading: 'りっぱなたてものですね。', meaning: 'Tòa nhà tuyệt vời nhỉ.' }] },

  // ═══════════════ ĐỘNG TỪ (Verbs) ═══════════════
  { id: 'n5-abiru', word: 'あびる', reading: 'あびる', romaji: 'abiru', meaning: 'Tắm (vòi sen), dội', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Sinh hoạt', 'Hành động'],
    examples: [{ jp: 'シャワーをあびる。', reading: 'シャワーをあびる。', meaning: 'Tắm vòi sen.' }],
    related: [{ word: 'お風呂', reading: 'おふろ', meaning: 'Bồn tắm' }] },

  { id: 'n5-kakaru', word: 'かかる', reading: 'かかる', romaji: 'kakaru', meaning: 'Tốn (thời gian/tiền), mất', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Thời gian', 'Tiền'],
    examples: [{ jp: '一時間かかります。', reading: 'いちじかんかかります。', meaning: 'Mất một tiếng.' }] },

  { id: 'n5-dekiru', word: 'できる', reading: 'できる', romaji: 'dekiru', meaning: 'Có thể, làm được', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Khả năng'],
    examples: [{ jp: '日本語ができますか。', reading: 'にほんごができますか。', meaning: 'Bạn biết tiếng Nhật không?' }] },

  { id: 'n5-haku-verb', word: 'はく', reading: 'はく', romaji: 'haku', meaning: 'Mặc, đi (quần/giày)', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Quần áo', 'Hành động'],
    examples: [{ jp: 'ズボンをはく。', reading: 'ズボンをはく。', meaning: 'Mặc quần.' }],
    related: [{ word: '着る', reading: 'きる', meaning: 'Mặc (áo)' }] },

  // ═══════════════ DANH TỪ — Người & Gia đình ═══════════════
  { id: 'n5-obaasan', word: 'おばあさん', reading: 'おばあさん', romaji: 'obaasan', meaning: 'Bà (ngoại/nội)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình'],
    examples: [{ jp: 'おばあさんは元気です。', reading: 'おばあさんはげんきです。', meaning: 'Bà vẫn khỏe.' }],
    related: [{ word: 'おじいさん', reading: 'おじいさん', meaning: 'Ông' }] },

  { id: 'n5-omawarisan', word: 'おまわりさん', reading: 'おまわりさん', romaji: 'omawarisan', meaning: 'Cảnh sát (thân mật)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nghề nghiệp'],
    examples: [{ jp: 'おまわりさんに聞きました。', reading: 'おまわりさんにききました。', meaning: 'Tôi đã hỏi chú cảnh sát.' }],
    synonyms: [{ word: '警官', reading: 'けいかん', meaning: 'Cảnh sát' }] },

  { id: 'n5-ojisan', word: '伯父', reading: 'おじ', romaji: 'oji', meaning: 'Chú, bác trai', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình'],
    examples: [{ jp: '伯父は東京に住んでいます。', reading: 'おじはとうきょうにすんでいます。', meaning: 'Chú sống ở Tokyo.' }] },

  { id: 'n5-minasan', word: '皆さん', reading: 'みなさん', romaji: 'minasan', meaning: 'Mọi người (lịch sự)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Đại từ', 'Kính ngữ'],
    examples: [{ jp: '皆さん、おはようございます。', reading: 'みなさん、おはようございます。', meaning: 'Chào buổi sáng mọi người.' }] },

  // ═══════════════ DANH TỪ — Đồ ăn & Đồ dùng ═══════════════
  { id: 'n5-obentou', word: 'お弁当', reading: 'おべんとう', romaji: 'obentou', meaning: 'Cơm hộp, bento', hanViet: 'BIỆN ĐƯƠNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn'],
    examples: [{ jp: 'お弁当を作りました。', reading: 'おべんとうをつくりました。', meaning: 'Tôi đã làm cơm hộp.' }] },

  { id: 'n5-otearai', word: 'お手洗い', reading: 'おてあらい', romaji: 'otearai', meaning: 'Nhà vệ sinh (lịch sự)', hanViet: 'THỦ TẨY', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nơi chốn', 'Kính ngữ'],
    examples: [{ jp: 'お手洗いはどこですか。', reading: 'おてあらいはどこですか。', meaning: 'Nhà vệ sinh ở đâu ạ?' }],
    synonyms: [{ word: 'トイレ', reading: 'トイレ', meaning: 'Nhà vệ sinh' }] },

  { id: 'n5-osara', word: 'お皿', reading: 'おさら', romaji: 'osara', meaning: 'Đĩa', hanViet: 'MINH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng bếp'],
    examples: [{ jp: 'お皿を洗います。', reading: 'おさらをあらいます。', meaning: 'Rửa đĩa.' }] },

  { id: 'n5-okashi', word: 'お菓子', reading: 'おかし', romaji: 'okashi', meaning: 'Bánh kẹo', hanViet: 'QUẢ TỬ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn'],
    examples: [{ jp: 'お菓子を買いました。', reading: 'おかしをかいました。', meaning: 'Tôi đã mua bánh kẹo.' }] },

  { id: 'n5-osake', word: 'お酒', reading: 'おさけ', romaji: 'osake', meaning: 'Rượu', hanViet: 'TỬU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ uống'],
    examples: [{ jp: 'お酒を飲みすぎました。', reading: 'おさけをのみすぎました。', meaning: 'Uống rượu nhiều quá.' }] },

  { id: 'n5-ofuro', word: 'お風呂', reading: 'おふろ', romaji: 'ofuro', meaning: 'Bồn tắm, nhà tắm', hanViet: 'PHONG LỮ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Sinh hoạt', 'Nhà'],
    examples: [{ jp: 'お風呂に入ります。', reading: 'おふろにはいります。', meaning: 'Tắm bồn.' }] },

  { id: 'n5-kudasai', word: 'ください', reading: 'ください', romaji: 'kudasai', meaning: 'Xin hãy, cho tôi', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Lịch sự', 'Yêu cầu'],
    examples: [{ jp: '水をください。', reading: 'みずをください。', meaning: 'Cho tôi nước.' }] },

  { id: 'n5-shoyu', word: 'しょうゆ', reading: 'しょうゆ', romaji: 'shouyu', meaning: 'Nước tương, xì dầu', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Gia vị'],
    examples: [{ jp: 'しょうゆをかけてください。', reading: 'しょうゆをかけてください。', meaning: 'Hãy rưới nước tương.' }] },

  { id: 'n5-sekken', word: 'せっけん', reading: 'せっけん', romaji: 'sekken', meaning: 'Xà phòng', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng', 'Sinh hoạt'],
    examples: [{ jp: 'せっけんで手を洗います。', reading: 'せっけんでてをあらいます。', meaning: 'Rửa tay bằng xà phòng.' }] },

  { id: 'n5-soba', word: 'そば', reading: 'そば', romaji: 'soba', meaning: 'Bên cạnh, gần', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: '駅のそばに住んでいます。', reading: 'えきのそばにすんでいます。', meaning: 'Sống gần ga.' }],
    synonyms: [{ word: '近く', reading: 'ちかく', meaning: 'Gần' }] },

  { id: 'n5-tate', word: 'たて', reading: 'たて', romaji: 'tate', meaning: 'Chiều dọc, chiều đứng', type: 'Danh từ', jlpt: 'N5',
    tags: ['Hình dạng'],
    examples: [{ jp: 'たてに書いてください。', reading: 'たてにかいてください。', meaning: 'Hãy viết theo chiều dọc.' }],
    antonyms: [{ word: '横', reading: 'よこ', meaning: 'Chiều ngang' }] },

  { id: 'n5-tabako', word: 'たばこ', reading: 'たばこ', romaji: 'tabako', meaning: 'Thuốc lá', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ vật'],
    examples: [{ jp: 'たばこは体に悪い。', reading: 'たばこはからだにわるい。', meaning: 'Thuốc lá hại cho cơ thể.' }] },

  { id: 'n5-chawan', word: 'ちゃわん', reading: 'ちゃわん', romaji: 'chawan', meaning: 'Chén, bát', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng bếp'],
    examples: [{ jp: 'ちゃわんにご飯をよそう。', reading: 'ちゃわんにごはんをよそう。', meaning: 'Xới cơm vào bát.' }] },

  { id: 'n5-toriniku', word: 'とり肉', reading: 'とりにく', romaji: 'toriniku', meaning: 'Thịt gà', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Thịt'],
    examples: [{ jp: 'とり肉を焼きます。', reading: 'とりにくをやきます。', meaning: 'Nướng thịt gà.' }],
    related: [{ word: '牛肉', reading: 'ぎゅうにく', meaning: 'Thịt bò' }, { word: '豚肉', reading: 'ぶたにく', meaning: 'Thịt heo' }] },

  { id: 'n5-hashi', word: 'はし', reading: 'はし', romaji: 'hashi', meaning: 'Đũa; cầu', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng bếp'],
    examples: [{ jp: 'はしで食べます。', reading: 'はしでたべます。', meaning: 'Ăn bằng đũa.' }] },

  { id: 'n5-furo', word: 'ふろ', reading: 'ふろ', romaji: 'furo', meaning: 'Bồn tắm', type: 'Danh từ', jlpt: 'N5',
    tags: ['Sinh hoạt'],
    examples: [{ jp: 'ふろに入る。', reading: 'ふろにはいる。', meaning: 'Vào bồn tắm.' }],
    synonyms: [{ word: 'お風呂', reading: 'おふろ', meaning: 'Bồn tắm (lịch sự)' }] },

  { id: 'n5-ikutsu', word: 'いくつ', reading: 'いくつ', romaji: 'ikutsu', meaning: 'Bao nhiêu (cái), mấy tuổi', type: 'Đại từ', jlpt: 'N5',
    tags: ['Nghi vấn', 'Số lượng'],
    examples: [{ jp: 'りんごはいくつありますか。', reading: 'りんごはいくつありますか。', meaning: 'Có bao nhiêu quả táo?' }] },

  { id: 'n5-ikura', word: 'いくら', reading: 'いくら', romaji: 'ikura', meaning: 'Bao nhiêu (tiền)', type: 'Đại từ', jlpt: 'N5',
    tags: ['Nghi vấn', 'Tiền'],
    examples: [{ jp: 'これはいくらですか。', reading: 'これはいくらですか。', meaning: 'Cái này bao nhiêu tiền?' }] },

  { id: 'n5-isu', word: 'いす', reading: 'いす', romaji: 'isu', meaning: 'Ghế', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ nội thất'],
    examples: [{ jp: 'いすに座ってください。', reading: 'いすにすわってください。', meaning: 'Hãy ngồi xuống ghế.' }] },

  { id: 'n5-ichiban', word: 'いちばん', reading: 'いちばん', romaji: 'ichiban', meaning: 'Nhất, số một', type: 'Phó từ', jlpt: 'N5',
    tags: ['So sánh', 'Phó từ'],
    examples: [{ jp: '日本でいちばん高い山は富士山です。', reading: 'にほんでいちばんたかいやまはふじさんです。', meaning: 'Núi cao nhất Nhật Bản là núi Phú Sĩ.' }] },

  { id: 'n5-sarainen', word: 'さ来年', reading: 'さらいねん', romaji: 'sarainen', meaning: 'Năm kia (2 năm sau)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: 'さ来年日本に行きます。', reading: 'さらいねんにほんにいきます。', meaning: 'Năm kia tôi đi Nhật.' }] },
];

// ── from: vocabN5_Part3.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB N5 Part 3 — Katakana loanwords + Numbers + Time/Calendar
// ~135 entries — Fill remaining N5 gaps (batch 2/3)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_N5_PART3: VocabEntry[] = [
  // ═══════════════ KATAKANA — Đồ dùng / Đồ gia dụng ═══════════════
  { id: 'n5-apaato', word: 'アパート', reading: 'アパート', romaji: 'apaato', meaning: 'Căn hộ, chung cư', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nhà', 'Katakana'],
    examples: [{ jp: 'アパートに住んでいます。', reading: 'アパートにすんでいます。', meaning: 'Tôi sống trong căn hộ.' }] },

  { id: 'n5-erebeetaa', word: 'エレベーター', reading: 'エレベーター', romaji: 'erebeetaa', meaning: 'Thang máy', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tòa nhà', 'Katakana'],
    examples: [{ jp: 'エレベーターで三階に行きます。', reading: 'エレベーターでさんかいにいきます。', meaning: 'Đi thang máy lên tầng 3.' }] },

  { id: 'n5-kappu', word: 'カップ', reading: 'カップ', romaji: 'kappu', meaning: 'Cốc, ly', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng bếp', 'Katakana'],
    examples: [{ jp: 'コーヒーをカップに入れます。', reading: 'コーヒーをカップにいれます。', meaning: 'Rót cà phê vào ly.' }],
    synonyms: [{ word: 'コップ', reading: 'コップ', meaning: 'Cốc (thủy tinh)' }] },

  { id: 'n5-kamera', word: 'カメラ', reading: 'カメラ', romaji: 'kamera', meaning: 'Máy ảnh', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ điện tử', 'Katakana'],
    examples: [{ jp: 'カメラで写真を撮ります。', reading: 'カメラでしゃしんをとります。', meaning: 'Chụp ảnh bằng máy ảnh.' }] },

  { id: 'n5-karendaa', word: 'カレンダー', reading: 'カレンダー', romaji: 'karendaa', meaning: 'Lịch', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng', 'Katakana'],
    examples: [{ jp: 'カレンダーを見てください。', reading: 'カレンダーをみてください。', meaning: 'Hãy xem lịch.' }] },

  { id: 'n5-karee', word: 'カレー', reading: 'カレー', romaji: 'karee', meaning: 'Cà ri', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Katakana'],
    examples: [{ jp: 'カレーライスが好きです。', reading: 'カレーライスがすきです。', meaning: 'Tôi thích cơm cà ri.' }] },

  { id: 'n5-kiro', word: 'キロ', reading: 'キロ', romaji: 'kiro', meaning: 'Kilô', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đơn vị', 'Katakana'],
    examples: [{ jp: '五キロ走りました。', reading: 'ごキロはしりました。', meaning: 'Đã chạy 5 km.' }] },

  { id: 'n5-kiroguramu', word: 'キログラム', reading: 'キログラム', romaji: 'kiroguramu', meaning: 'Kilôgam', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đơn vị', 'Katakana'],
    examples: [{ jp: '体重は六十キログラムです。', reading: 'たいじゅうはろくじゅうキログラムです。', meaning: 'Cân nặng 60 kg.' }] },

  { id: 'n5-kiromeetoru', word: 'キロメートル', reading: 'キロメートル', romaji: 'kiromeetoru', meaning: 'Kilômét', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đơn vị', 'Katakana'],
    examples: [{ jp: '学校まで二キロメートルです。', reading: 'がっこうまでにキロメートルです。', meaning: 'Đến trường 2 km.' }] },

  { id: 'n5-gitaa', word: 'ギター', reading: 'ギター', romaji: 'gitaa', meaning: 'Ghi-ta', type: 'Danh từ', jlpt: 'N5',
    tags: ['Âm nhạc', 'Katakana'],
    examples: [{ jp: 'ギターを弾きます。', reading: 'ギターをひきます。', meaning: 'Chơi ghi-ta.' }] },

  { id: 'n5-kurasu', word: 'クラス', reading: 'クラス', romaji: 'kurasu', meaning: 'Lớp học', type: 'Danh từ', jlpt: 'N5',
    tags: ['Trường học', 'Katakana'],
    examples: [{ jp: 'クラスに二十人います。', reading: 'クラスににじゅうにんいます。', meaning: 'Trong lớp có 20 người.' }] },

  { id: 'n5-guramu', word: 'グラム', reading: 'グラム', romaji: 'guramu', meaning: 'Gam', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đơn vị', 'Katakana'],
    examples: [{ jp: '百グラムください。', reading: 'ひゃくグラムください。', meaning: 'Cho tôi 100 gam.' }] },

  { id: 'n5-koppu', word: 'コップ', reading: 'コップ', romaji: 'koppu', meaning: 'Cốc (thủy tinh)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng bếp', 'Katakana'],
    examples: [{ jp: 'コップに水を入れてください。', reading: 'コップにみずをいれてください。', meaning: 'Hãy rót nước vào cốc.' }] },

  { id: 'n5-kopii', word: 'コピー', reading: 'コピー', romaji: 'kopii', meaning: 'Sao chép, photocopy', type: 'Danh từ', jlpt: 'N5',
    tags: ['Văn phòng', 'Katakana'],
    examples: [{ jp: 'コピーを五枚お願いします。', reading: 'コピーをごまいおねがいします。', meaning: 'Làm ơn photo 5 bản.' }] },

  { id: 'n5-kooto', word: 'コート', reading: 'コート', romaji: 'kooto', meaning: 'Áo khoác', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo', 'Katakana'],
    examples: [{ jp: '寒いからコートを着ます。', reading: 'さむいからコートをきます。', meaning: 'Vì lạnh nên mặc áo khoác.' }] },

  { id: 'n5-shatsu', word: 'シャツ', reading: 'シャツ', romaji: 'shatsu', meaning: 'Áo sơ mi', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo', 'Katakana'],
    examples: [{ jp: '白いシャツを着ています。', reading: 'しろいシャツをきています。', meaning: 'Đang mặc áo sơ mi trắng.' }] },

  { id: 'n5-shawaa', word: 'シャワー', reading: 'シャワー', romaji: 'shawaa', meaning: 'Vòi sen', type: 'Danh từ', jlpt: 'N5',
    tags: ['Sinh hoạt', 'Katakana'],
    examples: [{ jp: 'シャワーを浴びます。', reading: 'シャワーをあびます。', meaning: 'Tắm vòi sen.' }] },

  { id: 'n5-sukaato', word: 'スカート', reading: 'スカート', romaji: 'sukaato', meaning: 'Váy', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo', 'Katakana'],
    examples: [{ jp: 'スカートをはいています。', reading: 'スカートをはいています。', meaning: 'Đang mặc váy.' }] },

  { id: 'n5-sutoobu', word: 'ストーブ', reading: 'ストーブ', romaji: 'sutoobu', meaning: 'Lò sưởi', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ gia dụng', 'Katakana'],
    examples: [{ jp: 'ストーブをつけてください。', reading: 'ストーブをつけてください。', meaning: 'Hãy bật lò sưởi.' }] },

  { id: 'n5-supuun', word: 'スプーン', reading: 'スプーン', romaji: 'supuun', meaning: 'Muỗng, thìa', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng bếp', 'Katakana'],
    examples: [{ jp: 'スプーンでスープを食べます。', reading: 'スプーンでスープをたべます。', meaning: 'Ăn súp bằng thìa.' }] },

  { id: 'n5-supootsu', word: 'スポーツ', reading: 'スポーツ', romaji: 'supootsu', meaning: 'Thể thao', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thể thao', 'Katakana'],
    examples: [{ jp: 'スポーツが好きです。', reading: 'スポーツがすきです。', meaning: 'Tôi thích thể thao.' }] },

  { id: 'n5-surippa', word: 'スリッパ', reading: 'スリッパ', romaji: 'surippa', meaning: 'Dép lê', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo', 'Katakana'],
    examples: [{ jp: 'スリッパをはいてください。', reading: 'スリッパをはいてください。', meaning: 'Hãy đi dép lê.' }] },

  { id: 'n5-zubon', word: 'ズボン', reading: 'ズボン', romaji: 'zubon', meaning: 'Quần (dài)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo', 'Katakana'],
    examples: [{ jp: '新しいズボンを買いました。', reading: 'あたらしいズボンをかいました。', meaning: 'Đã mua quần mới.' }] },

  { id: 'n5-seetaa', word: 'セーター', reading: 'セーター', romaji: 'seetaa', meaning: 'Áo len', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo', 'Katakana'],
    examples: [{ jp: 'セーターを着ます。', reading: 'セーターをきます。', meaning: 'Mặc áo len.' }] },

  { id: 'n5-zero', word: 'ゼロ', reading: 'ゼロ', romaji: 'zero', meaning: 'Số không', type: 'Danh từ', jlpt: 'N5',
    tags: ['Số', 'Katakana'],
    examples: [{ jp: 'ゼロから始めましょう。', reading: 'ゼロからはじめましょう。', meaning: 'Bắt đầu từ số không.' }],
    synonyms: [{ word: '零', reading: 'れい', meaning: 'Số không' }] },

  { id: 'n5-takushii', word: 'タクシー', reading: 'タクシー', romaji: 'takushii', meaning: 'Taxi', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giao thông', 'Katakana'],
    examples: [{ jp: 'タクシーで行きましょう。', reading: 'タクシーでいきましょう。', meaning: 'Đi taxi thôi.' }] },

  { id: 'n5-tesuto', word: 'テスト', reading: 'テスト', romaji: 'tesuto', meaning: 'Bài kiểm tra', type: 'Danh từ', jlpt: 'N5',
    tags: ['Trường học', 'Katakana'],
    examples: [{ jp: '明日テストがあります。', reading: 'あしたテストがあります。', meaning: 'Ngày mai có bài kiểm tra.' }] },

  { id: 'n5-terebi', word: 'テレビ', reading: 'テレビ', romaji: 'terebi', meaning: 'Tivi', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ điện tử', 'Katakana'],
    examples: [{ jp: 'テレビを見ます。', reading: 'テレビをみます。', meaning: 'Xem tivi.' }] },

  { id: 'n5-teeburu', word: 'テーブル', reading: 'テーブル', romaji: 'teeburu', meaning: 'Bàn', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ nội thất', 'Katakana'],
    examples: [{ jp: 'テーブルの上に本があります。', reading: 'テーブルのうえにほんがあります。', meaning: 'Trên bàn có sách.' }] },

  { id: 'n5-teepu', word: 'テープ', reading: 'テープ', romaji: 'teepu', meaning: 'Băng keo, băng cassette', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng', 'Katakana'],
    examples: [{ jp: 'テープで貼ってください。', reading: 'テープではってください。', meaning: 'Hãy dán bằng băng keo.' }] },

  { id: 'n5-teepurekoodaa', word: 'テープレコーダー', reading: 'テープレコーダー', romaji: 'teepurekoodaa', meaning: 'Máy ghi âm', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ điện tử', 'Katakana'],
    examples: [{ jp: 'テープレコーダーで録音する。', reading: 'テープレコーダーでろくおんする。', meaning: 'Ghi âm bằng máy ghi âm.' }] },

  { id: 'n5-toire', word: 'トイレ', reading: 'トイレ', romaji: 'toire', meaning: 'Nhà vệ sinh', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nơi chốn', 'Katakana'],
    examples: [{ jp: 'トイレはどこですか。', reading: 'トイレはどこですか。', meaning: 'Nhà vệ sinh ở đâu?' }] },

  { id: 'n5-doa', word: 'ドア', reading: 'ドア', romaji: 'doa', meaning: 'Cửa (kiểu Tây)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nhà', 'Katakana'],
    examples: [{ jp: 'ドアを閉めてください。', reading: 'ドアをしめてください。', meaning: 'Hãy đóng cửa.' }] },

  { id: 'n5-naifu', word: 'ナイフ', reading: 'ナイフ', romaji: 'naifu', meaning: 'Dao', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng bếp', 'Katakana'],
    examples: [{ jp: 'ナイフでパンを切ります。', reading: 'ナイフでパンをきります。', meaning: 'Cắt bánh mì bằng dao.' }] },

  { id: 'n5-nyuusu', word: 'ニュース', reading: 'ニュース', romaji: 'nyuusu', meaning: 'Tin tức', type: 'Danh từ', jlpt: 'N5',
    tags: ['Truyền thông', 'Katakana'],
    examples: [{ jp: 'ニュースを見ましたか。', reading: 'ニュースをみましたか。', meaning: 'Bạn đã xem tin tức chưa?' }] },

  { id: 'n5-nekutai', word: 'ネクタイ', reading: 'ネクタイ', romaji: 'nekutai', meaning: 'Cà vạt', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo', 'Katakana'],
    examples: [{ jp: 'ネクタイを締めます。', reading: 'ネクタイをしめます。', meaning: 'Thắt cà vạt.' }] },

  { id: 'n5-nooto', word: 'ノート', reading: 'ノート', romaji: 'nooto', meaning: 'Vở, sổ tay', type: 'Danh từ', jlpt: 'N5',
    tags: ['Trường học', 'Katakana'],
    examples: [{ jp: 'ノートに書いてください。', reading: 'ノートにかいてください。', meaning: 'Hãy viết vào vở.' }] },

  { id: 'n5-hankachi', word: 'ハンカチ', reading: 'ハンカチ', romaji: 'hankachi', meaning: 'Khăn tay', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng', 'Katakana'],
    examples: [{ jp: 'ハンカチを持っていますか。', reading: 'ハンカチをもっていますか。', meaning: 'Bạn có mang khăn tay không?' }] },

  { id: 'n5-bataa', word: 'バター', reading: 'バター', romaji: 'bataa', meaning: 'Bơ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Katakana'],
    examples: [{ jp: 'パンにバターを塗ります。', reading: 'パンにバターをぬります。', meaning: 'Phết bơ lên bánh mì.' }] },

  { id: 'n5-paatii', word: 'パーティー', reading: 'パーティー', romaji: 'paatii', meaning: 'Tiệc', type: 'Danh từ', jlpt: 'N5',
    tags: ['Sự kiện', 'Katakana'],
    examples: [{ jp: 'パーティーに招待されました。', reading: 'パーティーにしょうたいされました。', meaning: 'Tôi được mời đến tiệc.' }] },

  { id: 'n5-firumu', word: 'フィルム', reading: 'フィルム', romaji: 'firumu', meaning: 'Phim (cuộn)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng', 'Katakana'],
    examples: [{ jp: 'フィルムを買いたい。', reading: 'フィルムをかいたい。', meaning: 'Tôi muốn mua phim.' }] },

  { id: 'n5-fooku', word: 'フォーク', reading: 'フォーク', romaji: 'fooku', meaning: 'Nĩa', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng bếp', 'Katakana'],
    examples: [{ jp: 'フォークで食べます。', reading: 'フォークでたべます。', meaning: 'Ăn bằng nĩa.' }] },

  { id: 'n5-puuru', word: 'プール', reading: 'プール', romaji: 'puuru', meaning: 'Hồ bơi', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thể thao', 'Katakana'],
    examples: [{ jp: 'プールで泳ぎます。', reading: 'プールでおよぎます。', meaning: 'Bơi ở hồ bơi.' }] },

  { id: 'n5-beddo', word: 'ベッド', reading: 'ベッド', romaji: 'beddo', meaning: 'Giường', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ nội thất', 'Katakana'],
    examples: [{ jp: 'ベッドで寝ます。', reading: 'ベッドでねます。', meaning: 'Ngủ trên giường.' }] },

  { id: 'n5-petto', word: 'ペット', reading: 'ペット', romaji: 'petto', meaning: 'Thú cưng', type: 'Danh từ', jlpt: 'N5',
    tags: ['Động vật', 'Katakana'],
    examples: [{ jp: 'ペットを飼っていますか。', reading: 'ペットをかっていますか。', meaning: 'Bạn có nuôi thú cưng không?' }] },

  { id: 'n5-pen', word: 'ペン', reading: 'ペン', romaji: 'pen', meaning: 'Bút', type: 'Danh từ', jlpt: 'N5',
    tags: ['Văn phòng phẩm', 'Katakana'],
    examples: [{ jp: 'ペンを貸してください。', reading: 'ペンをかしてください。', meaning: 'Cho tôi mượn bút.' }] },

  { id: 'n5-peeji', word: 'ページ', reading: 'ページ', romaji: 'peeji', meaning: 'Trang', type: 'Danh từ', jlpt: 'N5',
    tags: ['Trường học', 'Katakana'],
    examples: [{ jp: '十ページを開いてください。', reading: 'じゅっページをひらいてください。', meaning: 'Hãy mở trang 10.' }] },

  { id: 'n5-botan', word: 'ボタン', reading: 'ボタン', romaji: 'botan', meaning: 'Nút, cúc áo', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo', 'Katakana'],
    examples: [{ jp: 'ボタンを押してください。', reading: 'ボタンをおしてください。', meaning: 'Hãy nhấn nút.' }] },

  { id: 'n5-boorupen', word: 'ボールペン', reading: 'ボールペン', romaji: 'boorupen', meaning: 'Bút bi', type: 'Danh từ', jlpt: 'N5',
    tags: ['Văn phòng phẩm', 'Katakana'],
    examples: [{ jp: 'ボールペンで書いてください。', reading: 'ボールペンでかいてください。', meaning: 'Hãy viết bằng bút bi.' }] },

  { id: 'n5-poketto', word: 'ポケット', reading: 'ポケット', romaji: 'poketto', meaning: 'Túi (quần áo)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo', 'Katakana'],
    examples: [{ jp: 'ポケットに鍵があります。', reading: 'ポケットにかぎがあります。', meaning: 'Chìa khóa ở trong túi.' }] },

  { id: 'n5-posuto', word: 'ポスト', reading: 'ポスト', romaji: 'posuto', meaning: 'Hòm thư', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nơi chốn', 'Katakana'],
    examples: [{ jp: 'ポストに手紙を入れました。', reading: 'ポストにてがみをいれました。', meaning: 'Bỏ thư vào hòm thư.' }] },

  { id: 'n5-macchi', word: 'マッチ', reading: 'マッチ', romaji: 'macchi', meaning: 'Que diêm', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng', 'Katakana'],
    examples: [{ jp: 'マッチで火をつける。', reading: 'マッチでひをつける。', meaning: 'Đốt lửa bằng que diêm.' }] },

  { id: 'n5-meetoru', word: 'メートル', reading: 'メートル', romaji: 'meetoru', meaning: 'Mét', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đơn vị', 'Katakana'],
    examples: [{ jp: '百メートル走りました。', reading: 'ひゃくメートルはしりました。', meaning: 'Đã chạy 100 mét.' }] },

  { id: 'n5-rajio', word: 'ラジオ', reading: 'ラジオ', romaji: 'rajio', meaning: 'Đài radio', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ điện tử', 'Katakana'],
    examples: [{ jp: 'ラジオを聞きます。', reading: 'ラジオをききます。', meaning: 'Nghe radio.' }] },

  { id: 'n5-rajiokasetto', word: 'ラジオカセット', reading: 'ラジオカセット', romaji: 'rajiokasetto', meaning: 'Radio cassette', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ điện tử', 'Katakana'],
    examples: [{ jp: 'ラジオカセットで音楽を聞く。', reading: 'ラジオカセットでおんがくをきく。', meaning: 'Nghe nhạc bằng radio cassette.' }] },

  { id: 'n5-rajikase', word: 'ラジカセ', reading: 'ラジカセ', romaji: 'rajikase', meaning: 'Radio cassette (viết tắt)', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ điện tử', 'Katakana'],
    examples: [{ jp: 'ラジカセを買いました。', reading: 'ラジカセをかいました。', meaning: 'Đã mua radio cassette.' }] },

  { id: 'n5-rekoodo', word: 'レコード', reading: 'レコード', romaji: 'rekoodo', meaning: 'Đĩa hát', type: 'Danh từ', jlpt: 'N5',
    tags: ['Âm nhạc', 'Katakana'],
    examples: [{ jp: 'レコードを聞くのが好きです。', reading: 'レコードをきくのがすきです。', meaning: 'Tôi thích nghe đĩa hát.' }] },

  { id: 'n5-waishatsu', word: 'ワイシャツ', reading: 'ワイシャツ', romaji: 'waishatsu', meaning: 'Áo sơ mi trắng', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo', 'Katakana'],
    examples: [{ jp: 'ワイシャツにアイロンをかける。', reading: 'ワイシャツにアイロンをかける。', meaning: 'Ủi áo sơ mi trắng.' }] },

  // ═══════════════ SỐ ĐẾM (Numbers) ═══════════════
  { id: 'n5-ichi', word: '一', reading: 'いち', romaji: 'ichi', meaning: 'Một, 1', hanViet: 'NHẤT', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '一から始めましょう。', reading: 'いちからはじめましょう。', meaning: 'Bắt đầu từ 1.' }] },

  { id: 'n5-hitotsu', word: '一つ', reading: 'ひとつ', romaji: 'hitotsu', meaning: 'Một (cái)', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: 'りんごを一つください。', reading: 'りんごをひとつください。', meaning: 'Cho tôi một quả táo.' }] },

  { id: 'n5-hitori', word: '一人', reading: 'ひとり', romaji: 'hitori', meaning: 'Một người', hanViet: 'NHẤT NHÂN', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: '一人で行きます。', reading: 'ひとりでいきます。', meaning: 'Đi một mình.' }] },

  { id: 'n5-tsuitachi', word: '一日', reading: 'ついたち', romaji: 'tsuitachi', meaning: 'Ngày mùng 1', hanViet: 'NHẤT NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '一月一日はお正月です。', reading: 'いちがつついたちはおしょうがつです。', meaning: 'Ngày 1 tháng 1 là Tết.' }] },

  { id: 'n5-ototoshi', word: '一昨年', reading: 'おととし', romaji: 'ototoshi', meaning: 'Năm kia (2 năm trước)', hanViet: 'NHẤT TÁC NIÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '一昨年日本に行きました。', reading: 'おととしにほんにいきました。', meaning: 'Năm kia tôi đi Nhật.' }] },

  { id: 'n5-ototoi', word: '一昨日', reading: 'おととい', romaji: 'ototoi', meaning: 'Hôm kia', hanViet: 'NHẤT TÁC NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '一昨日映画を見ました。', reading: 'おとといえいがをみました。', meaning: 'Hôm kia đã xem phim.' }] },

  { id: 'n5-ichigatsu', word: '一月', reading: 'いちがつ', romaji: 'ichigatsu', meaning: 'Tháng 1', hanViet: 'NHẤT NGUYỆT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '一月は寒いです。', reading: 'いちがつはさむいです。', meaning: 'Tháng 1 lạnh.' }] },

  { id: 'n5-ni-num', word: '二', reading: 'に', romaji: 'ni', meaning: 'Hai, 2', hanViet: 'NHỊ', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '二足す三は五です。', reading: 'にたすさんはごです。', meaning: '2 cộng 3 bằng 5.' }] },

  { id: 'n5-futatsu', word: '二つ', reading: 'ふたつ', romaji: 'futatsu', meaning: 'Hai (cái)', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: 'りんごを二つ買いました。', reading: 'りんごをふたつかいました。', meaning: 'Đã mua 2 quả táo.' }] },

  { id: 'n5-futari', word: '二人', reading: 'ふたり', romaji: 'futari', meaning: 'Hai người', hanViet: 'NHỊ NHÂN', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: '二人で食べましょう。', reading: 'ふたりでたべましょう。', meaning: 'Hai người cùng ăn nào.' }] },

  { id: 'n5-hatsuka', word: '二十日', reading: 'はつか', romaji: 'hatsuka', meaning: 'Ngày 20', hanViet: 'NHỊ THẬP NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '二十日に会いましょう。', reading: 'はつかにあいましょう。', meaning: 'Gặp nhau ngày 20 nhé.' }] },

  { id: 'n5-hatachi', word: '二十歳', reading: 'はたち', romaji: 'hatachi', meaning: '20 tuổi', hanViet: 'NHỊ THẬP TUẾ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tuổi'],
    examples: [{ jp: '二十歳になりました。', reading: 'はたちになりました。', meaning: 'Đã 20 tuổi rồi.' }] },

  { id: 'n5-futsuka', word: '二日', reading: 'ふつか', romaji: 'futsuka', meaning: 'Ngày 2; 2 ngày', hanViet: 'NHỊ NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '二月二日です。', reading: 'にがつふつかです。', meaning: 'Ngày 2 tháng 2.' }] },

  { id: 'n5-san-num', word: '三', reading: 'さん', romaji: 'san', meaning: 'Ba, 3', hanViet: 'TAM', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '三人家族です。', reading: 'さんにんかぞくです。', meaning: 'Gia đình 3 người.' }] },

  { id: 'n5-mittsu', word: '三つ', reading: 'みっつ', romaji: 'mittsu', meaning: 'Ba (cái)', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: '三つ選んでください。', reading: 'みっつえらんでください。', meaning: 'Hãy chọn 3 cái.' }] },

  { id: 'n5-mikka', word: '三日', reading: 'みっか', romaji: 'mikka', meaning: 'Ngày 3; 3 ngày', hanViet: 'TAM NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '三日間休みます。', reading: 'みっかかんやすみます。', meaning: 'Nghỉ 3 ngày.' }] },

  { id: 'n5-yon-num', word: '四', reading: 'よん', romaji: 'yon', meaning: 'Bốn, 4', hanViet: 'TỨ', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '四時に会いましょう。', reading: 'よじにあいましょう。', meaning: 'Gặp nhau lúc 4 giờ.' }] },

  { id: 'n5-yottsu', word: '四つ', reading: 'よっつ', romaji: 'yottsu', meaning: 'Bốn (cái)', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: 'りんごを四つ買った。', reading: 'りんごをよっつかった。', meaning: 'Đã mua 4 quả táo.' }] },

  { id: 'n5-yokka', word: '四日', reading: 'よっか', romaji: 'yokka', meaning: 'Ngày 4; 4 ngày', hanViet: 'TỨ NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '四月四日です。', reading: 'しがつよっかです。', meaning: 'Ngày 4 tháng 4.' }] },

  { id: 'n5-go-num', word: '五', reading: 'ご', romaji: 'go', meaning: 'Năm, 5', hanViet: 'NGŨ', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '五人来ました。', reading: 'ごにんきました。', meaning: '5 người đã đến.' }] },

  { id: 'n5-itsutsu', word: '五つ', reading: 'いつつ', romaji: 'itsutsu', meaning: 'Năm (cái)', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: '五つ全部食べた。', reading: 'いつつぜんぶたべた。', meaning: 'Ăn hết cả 5 cái.' }] },

  { id: 'n5-itsuka', word: '五日', reading: 'いつか', romaji: 'itsuka', meaning: 'Ngày 5; 5 ngày', hanViet: 'NGŨ NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '五日間旅行します。', reading: 'いつかかんりょこうします。', meaning: 'Đi du lịch 5 ngày.' }] },

  { id: 'n5-roku', word: '六', reading: 'ろく', romaji: 'roku', meaning: 'Sáu, 6', hanViet: 'LỤC', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '六時に起きます。', reading: 'ろくじにおきます。', meaning: 'Dậy lúc 6 giờ.' }] },

  { id: 'n5-muttsu', word: '六つ', reading: 'むっつ', romaji: 'muttsu', meaning: 'Sáu (cái)', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: '六つに分けてください。', reading: 'むっつにわけてください。', meaning: 'Hãy chia thành 6 phần.' }] },

  { id: 'n5-muika', word: '六日', reading: 'むいか', romaji: 'muika', meaning: 'Ngày 6; 6 ngày', hanViet: 'LỤC NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '六月六日に生まれました。', reading: 'ろくがつむいかにうまれました。', meaning: 'Sinh ngày 6 tháng 6.' }] },

  { id: 'n5-nana-shichi', word: '七', reading: 'なな', romaji: 'nana', meaning: 'Bảy, 7', hanViet: 'THẤT', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '七時に帰ります。', reading: 'しちじにかえります。', meaning: 'Về lúc 7 giờ.' }] },

  { id: 'n5-nanatsu', word: '七つ', reading: 'ななつ', romaji: 'nanatsu', meaning: 'Bảy (cái)', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: '七つの星。', reading: 'ななつのほし。', meaning: '7 ngôi sao.' }] },

  { id: 'n5-nanoka', word: '七日', reading: 'なのか', romaji: 'nanoka', meaning: 'Ngày 7; 7 ngày', hanViet: 'THẤT NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '七月七日は七夕です。', reading: 'しちがつなのかはたなばたです。', meaning: 'Ngày 7/7 là lễ Tanabata.' }] },

  { id: 'n5-hachi', word: '八', reading: 'はち', romaji: 'hachi', meaning: 'Tám, 8', hanViet: 'BÁT', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '八月は暑い。', reading: 'はちがつはあつい。', meaning: 'Tháng 8 nóng.' }] },

  { id: 'n5-yattsu', word: '八つ', reading: 'やっつ', romaji: 'yattsu', meaning: 'Tám (cái)', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: '八つの問題。', reading: 'やっつのもんだい。', meaning: '8 câu hỏi.' }] },

  { id: 'n5-youka', word: '八日', reading: 'ようか', romaji: 'youka', meaning: 'Ngày 8; 8 ngày', hanViet: 'BÁT NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '八日までに出してください。', reading: 'ようかまでにだしてください。', meaning: 'Nộp trước ngày 8.' }] },

  { id: 'n5-kyuu-ku', word: '九', reading: 'きゅう', romaji: 'kyuu', meaning: 'Chín, 9', hanViet: 'CỬU', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '九時から始まります。', reading: 'くじからはじまります。', meaning: 'Bắt đầu từ 9 giờ.' }] },

  { id: 'n5-kokonotsu', word: '九つ', reading: 'ここのつ', romaji: 'kokonotsu', meaning: 'Chín (cái)', type: 'Số', jlpt: 'N5',
    tags: ['Số', 'Trợ số'],
    examples: [{ jp: '九つの島。', reading: 'ここのつのしま。', meaning: '9 hòn đảo.' }] },

  { id: 'n5-kokonoka', word: '九日', reading: 'ここのか', romaji: 'kokonoka', meaning: 'Ngày 9; 9 ngày', hanViet: 'CỬU NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '九月九日です。', reading: 'くがつここのかです。', meaning: 'Ngày 9 tháng 9.' }] },

  { id: 'n5-juu', word: '十', reading: 'じゅう', romaji: 'juu', meaning: 'Mười, 10', hanViet: 'THẬP', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '十人います。', reading: 'じゅうにんいます。', meaning: 'Có 10 người.' }] },

  { id: 'n5-tooka', word: '十日', reading: 'とおか', romaji: 'tooka', meaning: 'Ngày 10; 10 ngày', hanViet: 'THẬP NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '十日から旅行です。', reading: 'とおかからりょこうです。', meaning: 'Đi du lịch từ ngày 10.' }] },

  { id: 'n5-hyaku', word: '百', reading: 'ひゃく', romaji: 'hyaku', meaning: 'Trăm, 100', hanViet: 'BÁCH', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '百円です。', reading: 'ひゃくえんです。', meaning: '100 yên.' }] },

  { id: 'n5-sen', word: '千', reading: 'せん', romaji: 'sen', meaning: 'Nghìn, 1000', hanViet: 'THIÊN', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '千円札をください。', reading: 'せんえんさつをください。', meaning: 'Cho tôi tờ 1000 yên.' }] },

  { id: 'n5-man', word: '万', reading: 'まん', romaji: 'man', meaning: 'Vạn, 10.000', hanViet: 'VẠN', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '一万円です。', reading: 'いちまんえんです。', meaning: '10.000 yên.' }] },

  { id: 'n5-rei-zero', word: '零', reading: 'れい', romaji: 'rei', meaning: 'Số không', hanViet: 'LINH', type: 'Số', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '零度です。', reading: 'れいどです。', meaning: '0 độ.' }],
    synonyms: [{ word: 'ゼロ', reading: 'ゼロ', meaning: 'Zero' }] },

  { id: 'n5-mannenhitsu', word: '万年筆', reading: 'まんねんひつ', romaji: 'mannenhitsu', meaning: 'Bút máy', hanViet: 'VẠN NIÊN BÚT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Văn phòng phẩm'],
    examples: [{ jp: '万年筆で手紙を書きます。', reading: 'まんねんひつでてがみをかきます。', meaning: 'Viết thư bằng bút máy.' }] },

  { id: 'n5-yaoya', word: '八百屋', reading: 'やおや', romaji: 'yaoya', meaning: 'Tiệm rau quả', hanViet: 'BÁT BÁCH ỐC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cửa hàng'],
    examples: [{ jp: '八百屋で野菜を買います。', reading: 'やおやでやさいをかいます。', meaning: 'Mua rau ở tiệm rau.' }] },
];

// ── from: vocabN5_Part4.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB N5 Part 4 — Kanji nouns, verbs, adjectives (remaining N5 words)
// ~130 entries — Fill remaining N5 gaps (batch 3/3)
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_N5_PART4: VocabEntry[] = [
  // ═══════════════ VỊ TRÍ / HƯỚNG ═══════════════
  { id: 'n5-ue', word: '上', reading: 'うえ', romaji: 'ue', meaning: 'Trên', hanViet: 'THƯỢNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: '机の上に本があります。', reading: 'つくえのうえにほんがあります。', meaning: 'Trên bàn có sách.' }],
    antonyms: [{ word: '下', reading: 'した', meaning: 'Dưới' }] },

  { id: 'n5-shita', word: '下', reading: 'した', romaji: 'shita', meaning: 'Dưới, bên dưới', hanViet: 'HẠ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: '椅子の下に猫がいます。', reading: 'いすのしたにねこがいます。', meaning: 'Dưới ghế có con mèo.' }],
    antonyms: [{ word: '上', reading: 'うえ', meaning: 'Trên' }] },

  { id: 'n5-naka', word: '中', reading: 'なか', romaji: 'naka', meaning: 'Trong, bên trong', hanViet: 'TRUNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: 'かばんの中に財布があります。', reading: 'かばんのなかにさいふがあります。', meaning: 'Trong cặp có ví.' }] },

  { id: 'n5-migi', word: '右', reading: 'みぎ', romaji: 'migi', meaning: 'Bên phải', hanViet: 'HỮU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí', 'Hướng'],
    examples: [{ jp: '右に曲がってください。', reading: 'みぎにまがってください。', meaning: 'Hãy rẽ phải.' }],
    antonyms: [{ word: '左', reading: 'ひだり', meaning: 'Bên trái' }] },

  { id: 'n5-hidari', word: '左', reading: 'ひだり', romaji: 'hidari', meaning: 'Bên trái', hanViet: 'TẢ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí', 'Hướng'],
    examples: [{ jp: '左に銀行があります。', reading: 'ひだりにぎんこうがあります。', meaning: 'Bên trái có ngân hàng.' }] },

  { id: 'n5-kita', word: '北', reading: 'きた', romaji: 'kita', meaning: 'Phía bắc', hanViet: 'BẮC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Hướng'],
    examples: [{ jp: '北は寒いです。', reading: 'きたはさむいです。', meaning: 'Phía bắc lạnh.' }] },

  { id: 'n5-minami', word: '南', reading: 'みなみ', romaji: 'minami', meaning: 'Phía nam', hanViet: 'NAM', type: 'Danh từ', jlpt: 'N5',
    tags: ['Hướng'],
    examples: [{ jp: '南に行きます。', reading: 'みなみにいきます。', meaning: 'Đi về phía nam.' }] },

  { id: 'n5-higashi', word: '東', reading: 'ひがし', romaji: 'higashi', meaning: 'Phía đông', hanViet: 'ĐÔNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Hướng'],
    examples: [{ jp: '東に山があります。', reading: 'ひがしにやまがあります。', meaning: 'Phía đông có núi.' }] },

  { id: 'n5-nishi', word: '西', reading: 'にし', romaji: 'nishi', meaning: 'Phía tây', hanViet: 'TÂY', type: 'Danh từ', jlpt: 'N5',
    tags: ['Hướng'],
    examples: [{ jp: '西に夕日が沈む。', reading: 'にしにゆうひがしずむ。', meaning: 'Mặt trời lặn ở phía tây.' }] },

  { id: 'n5-mukou', word: '向こう', reading: 'むこう', romaji: 'mukou', meaning: 'Phía bên kia, đối diện', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: '向こうに川があります。', reading: 'むこうにかわがあります。', meaning: 'Phía bên kia có con sông.' }] },

  { id: 'n5-yoko', word: '横', reading: 'よこ', romaji: 'yoko', meaning: 'Bên cạnh, chiều ngang', hanViet: 'HOÀNH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: '横に座ってください。', reading: 'よこにすわってください。', meaning: 'Hãy ngồi bên cạnh.' }] },

  { id: 'n5-saki', word: '先', reading: 'さき', romaji: 'saki', meaning: 'Phía trước, trước', hanViet: 'TIÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí', 'Thời gian'],
    examples: [{ jp: '先にどうぞ。', reading: 'さきにどうぞ。', meaning: 'Xin mời đi trước.' }] },

  { id: 'n5-mae', word: '前', reading: 'まえ', romaji: 'mae', meaning: 'Trước, phía trước', hanViet: 'TIỀN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí', 'Thời gian'],
    examples: [{ jp: '駅の前で待っています。', reading: 'えきのまえでまっています。', meaning: 'Đang đợi trước ga.' }] },

  { id: 'n5-ushiro', word: '後ろ', reading: 'うしろ', romaji: 'ushiro', meaning: 'Phía sau, đằng sau', hanViet: 'HẬU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: '後ろを見てください。', reading: 'うしろをみてください。', meaning: 'Hãy nhìn phía sau.' }] },

  { id: 'n5-tonari', word: '隣', reading: 'となり', romaji: 'tonari', meaning: 'Bên cạnh, hàng xóm', hanViet: 'LÂN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: '隣の人は親切です。', reading: 'となりのひとはしんせつです。', meaning: 'Người bên cạnh tốt bụng.' }] },

  { id: 'n5-chikaku', word: '近く', reading: 'ちかく', romaji: 'chikaku', meaning: 'Gần, lân cận', hanViet: 'CẬN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: '近くにコンビニがあります。', reading: 'ちかくにコンビニがあります。', meaning: 'Gần đây có cửa hàng tiện lợi.' }] },

  // ═══════════════ THỜI GIAN / MÙA ═══════════════
  { id: 'n5-kotoshi', word: '今年', reading: 'ことし', romaji: 'kotoshi', meaning: 'Năm nay', hanViet: 'KIM NIÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '今年は忙しいです。', reading: 'ことしはいそがしいです。', meaning: 'Năm nay bận.' }] },

  { id: 'n5-konban', word: '今晩', reading: 'こんばん', romaji: 'konban', meaning: 'Tối nay', hanViet: 'KIM VÃN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '今晩映画を見ますか。', reading: 'こんばんえいがをみますか。', meaning: 'Tối nay xem phim không?' }] },

  { id: 'n5-kongetsu', word: '今月', reading: 'こんげつ', romaji: 'kongetsu', meaning: 'Tháng này', hanViet: 'KIM NGUYỆT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '今月は試験があります。', reading: 'こんげつはしけんがあります。', meaning: 'Tháng này có kỳ thi.' }] },

  { id: 'n5-konshuu', word: '今週', reading: 'こんしゅう', romaji: 'konshuu', meaning: 'Tuần này', hanViet: 'KIM TUẦN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '今週は忙しい。', reading: 'こんしゅうはいそがしい。', meaning: 'Tuần này bận.' }] },

  { id: 'n5-haru', word: '春', reading: 'はる', romaji: 'haru', meaning: 'Mùa xuân', hanViet: 'XUÂN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Mùa', 'Thời gian'],
    examples: [{ jp: '春は桜がきれいです。', reading: 'はるはさくらがきれいです。', meaning: 'Mùa xuân hoa anh đào đẹp.' }] },

  { id: 'n5-natsu', word: '夏', reading: 'なつ', romaji: 'natsu', meaning: 'Mùa hè', hanViet: 'HẠ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Mùa', 'Thời gian'],
    examples: [{ jp: '夏は暑いです。', reading: 'なつはあついです。', meaning: 'Mùa hè nóng.' }] },

  { id: 'n5-aki', word: '秋', reading: 'あき', romaji: 'aki', meaning: 'Mùa thu', hanViet: 'THU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Mùa', 'Thời gian'],
    examples: [{ jp: '秋は紅葉がきれいです。', reading: 'あきはこうようがきれいです。', meaning: 'Mùa thu lá đỏ đẹp.' }] },

  { id: 'n5-fuyu', word: '冬', reading: 'ふゆ', romaji: 'fuyu', meaning: 'Mùa đông', hanViet: 'ĐÔNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Mùa', 'Thời gian'],
    examples: [{ jp: '冬は寒いです。', reading: 'ふゆはさむいです。', meaning: 'Mùa đông lạnh.' }] },

  { id: 'n5-natsuyasumi', word: '夏休み', reading: 'なつやすみ', romaji: 'natsuyasumi', meaning: 'Nghỉ hè', hanViet: 'HẠ HƯU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Trường học', 'Thời gian'],
    examples: [{ jp: '夏休みに海に行きます。', reading: 'なつやすみにうみにいきます。', meaning: 'Nghỉ hè đi biển.' }] },

  { id: 'n5-yuugata', word: '夕方', reading: 'ゆうがた', romaji: 'yuugata', meaning: 'Chiều tối', hanViet: 'TỊCH PHƯƠNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '夕方から雨が降ります。', reading: 'ゆうがたからあめがふります。', meaning: 'Chiều tối trời mưa.' }] },

  { id: 'n5-yuuhan', word: '夕飯', reading: 'ゆうはん', romaji: 'yuuhan', meaning: 'Bữa tối', hanViet: 'TỊCH PHẠN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Thời gian'],
    examples: [{ jp: '夕飯を食べましょう。', reading: 'ゆうはんをたべましょう。', meaning: 'Ăn tối thôi.' }] },

  { id: 'n5-gozen', word: '午前', reading: 'ごぜん', romaji: 'gozen', meaning: 'Buổi sáng, AM', hanViet: 'NGỌ TIỀN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '午前十時に来てください。', reading: 'ごぜんじゅうじにきてください。', meaning: 'Đến lúc 10 giờ sáng.' }],
    antonyms: [{ word: '午後', reading: 'ごご', meaning: 'Buổi chiều, PM' }] },

  { id: 'n5-gogo', word: '午後', reading: 'ごご', romaji: 'gogo', meaning: 'Buổi chiều, PM', hanViet: 'NGỌ HẬU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '午後三時に終わります。', reading: 'ごごさんじにおわります。', meaning: 'Kết thúc lúc 3 giờ chiều.' }] },

  { id: 'n5-han', word: '半', reading: 'はん', romaji: 'han', meaning: 'Nửa, rưỡi', hanViet: 'BÁN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian', 'Số'],
    examples: [{ jp: '七時半に起きます。', reading: 'しちじはんにおきます。', meaning: 'Dậy lúc 7 giờ rưỡi.' }] },

  { id: 'n5-hanbun', word: '半分', reading: 'はんぶん', romaji: 'hanbun', meaning: 'Một nửa', hanViet: 'BÁN PHẦN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Số lượng'],
    examples: [{ jp: '半分に分けてください。', reading: 'はんぶんにわけてください。', meaning: 'Hãy chia đôi.' }] },

  { id: 'n5-nen', word: '年', reading: 'ねん', romaji: 'nen', meaning: 'Năm', hanViet: 'NIÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '三年日本語を勉強しています。', reading: 'さんねんにほんごをべんきょうしています。', meaning: 'Học tiếng Nhật 3 năm rồi.' }] },

  // ═══════════════ THỨ TRONG TUẦN ═══════════════
  { id: 'n5-nichiyoubi', word: '日曜日', reading: 'にちようび', romaji: 'nichiyoubi', meaning: 'Chủ nhật', hanViet: 'NHẬT DIỆU NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '日曜日は休みです。', reading: 'にちようびはやすみです。', meaning: 'Chủ nhật nghỉ.' }] },

  { id: 'n5-getsuyoubi', word: '月曜日', reading: 'げつようび', romaji: 'getsuyoubi', meaning: 'Thứ hai', hanViet: 'NGUYỆT DIỆU NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '月曜日から仕事です。', reading: 'げつようびからしごとです。', meaning: 'Đi làm từ thứ hai.' }] },

  { id: 'n5-kayoubi', word: '火曜日', reading: 'かようび', romaji: 'kayoubi', meaning: 'Thứ ba', hanViet: 'HỎA DIỆU NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '火曜日にテストがあります。', reading: 'かようびにテストがあります。', meaning: 'Thứ ba có bài kiểm tra.' }] },

  { id: 'n5-mokuyoubi', word: '木曜日', reading: 'もくようび', romaji: 'mokuyoubi', meaning: 'Thứ năm', hanViet: 'MỘC DIỆU NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '木曜日に映画を見ます。', reading: 'もくようびにえいがをみます。', meaning: 'Thứ năm xem phim.' }] },

  { id: 'n5-kinyoubi', word: '金曜日', reading: 'きんようび', romaji: 'kinyoubi', meaning: 'Thứ sáu', hanViet: 'KIM DIỆU NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '金曜日の夜は楽しい。', reading: 'きんようびのよるはたのしい。', meaning: 'Tối thứ sáu vui.' }] },

  { id: 'n5-doyoubi', word: '土曜日', reading: 'どようび', romaji: 'doyoubi', meaning: 'Thứ bảy', hanViet: 'THỔ DIỆU NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngày tháng'],
    examples: [{ jp: '土曜日に買い物します。', reading: 'どようびにかいものします。', meaning: 'Thứ bảy đi mua sắm.' }] },

  // ═══════════════ ĐỘNG TỪ ═══════════════
  { id: 'n5-ageru', word: '上げる', reading: 'あげる', romaji: 'ageru', meaning: 'Nâng lên, cho, tặng', hanViet: 'THƯỢNG', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hành động', 'Trao đổi'],
    examples: [{ jp: '友達にプレゼントをあげます。', reading: 'ともだちにプレゼントをあげます。', meaning: 'Tặng quà cho bạn.' }] },

  { id: 'n5-naraberu', word: '並べる', reading: 'ならべる', romaji: 'naraberu', meaning: 'Xếp hàng, bày', hanViet: 'TỊNH', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: 'お皿を並べてください。', reading: 'おさらをならべてください。', meaning: 'Hãy bày đĩa ra.' }] },

  { id: 'n5-sumu', word: '住む', reading: 'すむ', romaji: 'sumu', meaning: 'Sống, cư trú', hanViet: 'TRÚ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Nhà', 'Sinh hoạt'],
    examples: [{ jp: '東京に住んでいます。', reading: 'とうきょうにすんでいます。', meaning: 'Sống ở Tokyo.' }] },

  { id: 'n5-saku', word: '咲く', reading: 'さく', romaji: 'saku', meaning: 'Nở (hoa)', hanViet: 'TIẾU', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Tự nhiên'],
    examples: [{ jp: '桜が咲きました。', reading: 'さくらがさきました。', meaning: 'Hoa anh đào đã nở.' }] },

  { id: 'n5-komaru', word: '困る', reading: 'こまる', romaji: 'komaru', meaning: 'Gặp khó khăn, khổ sở', hanViet: 'KHỐN', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Cảm xúc'],
    examples: [{ jp: '困りました。', reading: 'こまりました。', meaning: 'Thật khó xử.' }] },

  { id: 'n5-hajimaru', word: '始まる', reading: 'はじまる', romaji: 'hajimaru', meaning: 'Bắt đầu (tự)', hanViet: 'THỈ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '授業が始まります。', reading: 'じゅぎょうがはじまります。', meaning: 'Giờ học bắt đầu.' }] },

  { id: 'n5-tsuku', word: '着く', reading: 'つく', romaji: 'tsuku', meaning: 'Đến nơi', hanViet: 'TRƯỚC', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển'],
    examples: [{ jp: '駅に着きました。', reading: 'えきにつきました。', meaning: 'Đã đến ga.' }] },

  { id: 'n5-watasu', word: '渡す', reading: 'わたす', romaji: 'watasu', meaning: 'Đưa, giao, trao', hanViet: 'ĐỘ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: '書類を渡してください。', reading: 'しょるいをわたしてください。', meaning: 'Hãy giao tài liệu.' }] },

  { id: 'n5-wataru', word: '渡る', reading: 'わたる', romaji: 'wataru', meaning: 'Sang, băng qua', hanViet: 'ĐỘ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển'],
    examples: [{ jp: '橋を渡ります。', reading: 'はしをわたります。', meaning: 'Sang cầu.' }] },

  { id: 'n5-miseru', word: '見せる', reading: 'みせる', romaji: 'miseru', meaning: 'Cho xem, trình bày', hanViet: 'KIẾN', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: '写真を見せてください。', reading: 'しゃしんをみせてください。', meaning: 'Cho tôi xem ảnh.' }] },

  { id: 'n5-iu', word: '言う', reading: 'いう', romaji: 'iu', meaning: 'Nói, bảo', hanViet: 'NGÔN', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Giao tiếp'],
    examples: [{ jp: '何と言いましたか。', reading: 'なんといいましたか。', meaning: 'Bạn đã nói gì?' }],
    synonyms: [{ word: '話す', reading: 'はなす', meaning: 'Nói chuyện' }] },

  { id: 'n5-haru-v', word: '貼る', reading: 'はる', romaji: 'haru', meaning: 'Dán', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: '切手を貼ります。', reading: 'きってをはります。', meaning: 'Dán tem.' }] },

  { id: 'n5-kaesu', word: '返す', reading: 'かえす', romaji: 'kaesu', meaning: 'Trả lại', hanViet: 'PHẢN', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: '本を返してください。', reading: 'ほんをかえしてください。', meaning: 'Hãy trả sách.' }] },

  { id: 'n5-chigau', word: '違う', reading: 'ちがう', romaji: 'chigau', meaning: 'Khác, sai', hanViet: 'VI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['So sánh'],
    examples: [{ jp: 'それは違います。', reading: 'それはちがいます。', meaning: 'Cái đó sai rồi.' }],
    synonyms: [{ word: '同じ', reading: 'おなじ', meaning: 'Giống (trái nghĩa)' }] },

  { id: 'n5-shimaru', word: '閉まる', reading: 'しまる', romaji: 'shimaru', meaning: 'Đóng (tự)', hanViet: 'BẾ', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: 'ドアが閉まりました。', reading: 'ドアがしまりました。', meaning: 'Cửa đã đóng.' }],
    related: [{ word: '開く', reading: 'あく', meaning: 'Mở (tự)' }] },

  { id: 'n5-aku', word: '開く', reading: 'あく', romaji: 'aku', meaning: 'Mở (tự)', hanViet: 'KHAI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: '窓が開きました。', reading: 'まどがあきました。', meaning: 'Cửa sổ đã mở.' }] },

  { id: 'n5-noboru', word: '登る', reading: 'のぼる', romaji: 'noboru', meaning: 'Leo, trèo', hanViet: 'ĐĂNG', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển'],
    examples: [{ jp: '山に登ります。', reading: 'やまにのぼります。', meaning: 'Leo núi.' }] },

  { id: 'n5-naku', word: '鳴く', reading: 'なく', romaji: 'naku', meaning: 'Kêu (động vật)', hanViet: 'MINH', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Động vật'],
    examples: [{ jp: '猫が鳴いています。', reading: 'ねこがないています。', meaning: 'Mèo đang kêu.' }] },

  { id: 'n5-tanomu', word: '頼む', reading: 'たのむ', romaji: 'tanomu', meaning: 'Nhờ, yêu cầu', hanViet: 'LẠI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Giao tiếp'],
    examples: [{ jp: 'お願いを頼みます。', reading: 'おねがいをたのみます。', meaning: 'Tôi xin nhờ một việc.' }] },

  { id: 'n5-umareru', word: '生まれる', reading: 'うまれる', romaji: 'umareru', meaning: 'Được sinh ra', hanViet: 'SINH', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Cuộc sống'],
    examples: [{ jp: '東京で生まれました。', reading: 'とうきょうでうまれました。', meaning: 'Sinh ra ở Tokyo.' }] },

  { id: 'n5-kieru', word: '消える', reading: 'きえる', romaji: 'kieru', meaning: 'Tắt, biến mất', hanViet: 'TIÊU', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: '電気が消えました。', reading: 'でんきがきえました。', meaning: 'Đèn đã tắt.' }] },

  { id: 'n5-nakusu', word: '無くす', reading: 'なくす', romaji: 'nakusu', meaning: 'Mất, đánh mất', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: '鍵を無くしました。', reading: 'かぎをなくしました。', meaning: 'Tôi đã mất chìa khóa.' }] },

  { id: 'n5-tsutomeru', word: '勤める', reading: 'つとめる', romaji: 'tsutomeru', meaning: 'Làm việc (ở công ty)', hanViet: 'CẦN', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Công việc'],
    examples: [{ jp: '銀行に勤めています。', reading: 'ぎんこうにつとめています。', meaning: 'Làm việc ở ngân hàng.' }] },

  { id: 'n5-iru-exist', word: '要る', reading: 'いる', romaji: 'iru', meaning: 'Cần', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: 'お金が要ります。', reading: 'おかねがいります。', meaning: 'Cần tiền.' }] },

  // ═══════════════ TÍNH TỪ ═══════════════
  { id: 'n5-marui', word: '丸い', reading: 'まるい', romaji: 'marui', meaning: 'Tròn', hanViet: 'HOÀN', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Hình dạng'],
    examples: [{ jp: '丸い月がきれいです。', reading: 'まるいつきがきれいです。', meaning: 'Trăng tròn đẹp.' }] },

  { id: 'n5-abunai', word: '危ない', reading: 'あぶない', romaji: 'abunai', meaning: 'Nguy hiểm', hanViet: 'NGUY', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['An toàn'],
    examples: [{ jp: 'ここは危ないです。', reading: 'ここはあぶないです。', meaning: 'Chỗ này nguy hiểm.' }] },

  { id: 'n5-atsui-thick', word: '厚い', reading: 'あつい', romaji: 'atsui', meaning: 'Dày (sách, vải)', hanViet: 'HẬU', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Hình dạng'],
    examples: [{ jp: '厚い本を読みました。', reading: 'あついほんをよみました。', meaning: 'Đã đọc cuốn sách dày.' }],
    antonyms: [{ word: '薄い', reading: 'うすい', meaning: 'Mỏng' }] },

  { id: 'n5-usui', word: '薄い', reading: 'うすい', romaji: 'usui', meaning: 'Mỏng, nhạt', hanViet: 'BẠC', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Hình dạng'],
    examples: [{ jp: '薄い紙です。', reading: 'うすいかみです。', meaning: 'Giấy mỏng.' }] },

  { id: 'n5-sukunai', word: '少ない', reading: 'すくない', romaji: 'sukunai', meaning: 'Ít', hanViet: 'THIỂU', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Số lượng'],
    examples: [{ jp: '人が少ないです。', reading: 'ひとがすくないです。', meaning: 'Ít người.' }],
    antonyms: [{ word: '多い', reading: 'おおい', meaning: 'Nhiều' }] },

  { id: 'n5-ooi', word: '多い', reading: 'おおい', romaji: 'ooi', meaning: 'Nhiều', hanViet: 'ĐA', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Số lượng'],
    examples: [{ jp: '人が多いです。', reading: 'ひとがおおいです。', meaning: 'Đông người.' }] },

  { id: 'n5-chikai', word: '近い', reading: 'ちかい', romaji: 'chikai', meaning: 'Gần', hanViet: 'CẬN', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Khoảng cách'],
    examples: [{ jp: '学校は近いです。', reading: 'がっこうはちかいです。', meaning: 'Trường gần.' }],
    antonyms: [{ word: '遠い', reading: 'とおい', meaning: 'Xa' }] },

  { id: 'n5-tooi', word: '遠い', reading: 'とおい', romaji: 'tooi', meaning: 'Xa', hanViet: 'VIỄN', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Khoảng cách'],
    examples: [{ jp: '会社は遠いです。', reading: 'かいしゃはとおいです。', meaning: 'Công ty xa.' }] },

  { id: 'n5-atatakai', word: '暖かい', reading: 'あたたかい', romaji: 'atatakai', meaning: 'Ấm áp', hanViet: 'NOÃN', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Thời tiết'],
    examples: [{ jp: '今日は暖かいですね。', reading: 'きょうはあたたかいですね。', meaning: 'Hôm nay ấm nhỉ.' }] },

  { id: 'n5-kurai', word: '暗い', reading: 'くらい', romaji: 'kurai', meaning: 'Tối', hanViet: 'ÁM', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Ánh sáng'],
    examples: [{ jp: '部屋が暗い。', reading: 'へやがくらい。', meaning: 'Phòng tối.' }],
    antonyms: [{ word: '明るい', reading: 'あかるい', meaning: 'Sáng' }] },

  { id: 'n5-akarui', word: '明い', reading: 'あかるい', romaji: 'akarui', meaning: 'Sáng, tươi sáng', hanViet: 'MINH', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Ánh sáng'],
    examples: [{ jp: '部屋が明るいです。', reading: 'へやがあかるいです。', meaning: 'Phòng sáng.' }] },

  { id: 'n5-suzushii', word: '涼しい', reading: 'すずしい', romaji: 'suzushii', meaning: 'Mát mẻ', hanViet: 'LƯƠNG', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Thời tiết'],
    examples: [{ jp: '秋は涼しいです。', reading: 'あきはすずしいです。', meaning: 'Mùa thu mát mẻ.' }] },

  { id: 'n5-urusai', word: '煩い', reading: 'うるさい', romaji: 'urusai', meaning: 'Ồn ào, phiền', hanViet: 'PHIỀN', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Âm thanh'],
    examples: [{ jp: '隣がうるさいです。', reading: 'となりがうるさいです。', meaning: 'Hàng xóm ồn.' }] },

  { id: 'n5-hoshii', word: '欲しい', reading: 'ほしい', romaji: 'hoshii', meaning: 'Muốn (đồ vật)', hanViet: 'DỤC', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Cảm xúc'],
    examples: [{ jp: '新しい車が欲しいです。', reading: 'あたらしいくるまがほしいです。', meaning: 'Muốn xe mới.' }] },

  { id: 'n5-nigiyaka', word: '賑やか', reading: 'にぎやか', romaji: 'nigiyaka', meaning: 'Nhộn nhịp, sôi nổi', type: 'Tính từ -な', jlpt: 'N5',
    tags: ['Mô tả'],
    examples: [{ jp: 'この町は賑やかです。', reading: 'このまちはにぎやかです。', meaning: 'Thị trấn này nhộn nhịp.' }] },

  { id: 'n5-joobu', word: '丈夫', reading: 'じょうぶ', romaji: 'joubu', meaning: 'Chắc chắn, khỏe mạnh', hanViet: 'TRƯỢNG PHU', type: 'Tính từ -な', jlpt: 'N5',
    tags: ['Sức khỏe', 'Đặc tính'],
    examples: [{ jp: 'この靴は丈夫です。', reading: 'このくつはじょうぶです。', meaning: 'Giày này chắc.' }] },

  { id: 'n5-onaji', word: '同じ', reading: 'おなじ', romaji: 'onaji', meaning: 'Giống nhau', hanViet: 'ĐỒNG', type: 'Liên thể từ', jlpt: 'N5',
    tags: ['So sánh'],
    examples: [{ jp: '同じ学校に通っています。', reading: 'おなじがっこうにかよっています。', meaning: 'Đi cùng trường.' }] },

  { id: 'n5-ookina', word: '大きな', reading: 'おおきな', romaji: 'ookina', meaning: 'To, lớn (liên thể)', type: 'Liên thể từ', jlpt: 'N5',
    tags: ['Kích thước'],
    examples: [{ jp: '大きな木があります。', reading: 'おおきなきがあります。', meaning: 'Có cây lớn.' }] },

  { id: 'n5-chiisana', word: '小さな', reading: 'ちいさな', romaji: 'chiisana', meaning: 'Nhỏ, bé (liên thể)', type: 'Liên thể từ', jlpt: 'N5',
    tags: ['Kích thước'],
    examples: [{ jp: '小さな猫がいます。', reading: 'ちいさなねこがいます。', meaning: 'Có con mèo nhỏ.' }] },

  // ═══════════════ DANH TỪ — Nơi chốn / Tòa nhà ═══════════════
  { id: 'n5-kousaten', word: '交差点', reading: 'こうさてん', romaji: 'kousaten', meaning: 'Ngã tư', hanViet: 'GIAO SAI ĐIỂM', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giao thông'],
    examples: [{ jp: '交差点を右に曲がってください。', reading: 'こうさてんをみぎにまがってください。', meaning: 'Rẽ phải ở ngã tư.' }] },

  { id: 'n5-kouban', word: '交番', reading: 'こうばん', romaji: 'kouban', meaning: 'Đồn cảnh sát nhỏ', hanViet: 'GIAO PHIÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nơi chốn'],
    examples: [{ jp: '交番で道を聞きました。', reading: 'こうばんでみちをききました。', meaning: 'Hỏi đường ở đồn cảnh sát.' }] },

  { id: 'n5-chikatetsu', word: '地下鉄', reading: 'ちかてつ', romaji: 'chikatetsu', meaning: 'Tàu điện ngầm', hanViet: 'ĐỊA HẠ THIẾT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giao thông'],
    examples: [{ jp: '地下鉄で通勤します。', reading: 'ちかてつでつうきんします。', meaning: 'Đi làm bằng tàu điện ngầm.' }] },

  { id: 'n5-chizu', word: '地図', reading: 'ちず', romaji: 'chizu', meaning: 'Bản đồ', hanViet: 'ĐỊA ĐỒ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng'],
    examples: [{ jp: '地図を見てください。', reading: 'ちずをみてください。', meaning: 'Hãy xem bản đồ.' }] },

  { id: 'n5-tatemono', word: '建物', reading: 'たてもの', romaji: 'tatemono', meaning: 'Tòa nhà', hanViet: 'KIẾN VẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nơi chốn'],
    examples: [{ jp: 'あの建物は何ですか。', reading: 'あのたてものはなんですか。', meaning: 'Tòa nhà kia là gì?' }] },

  { id: 'n5-kaidan', word: '階段', reading: 'かいだん', romaji: 'kaidan', meaning: 'Cầu thang', hanViet: 'GIAI ĐOẠN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tòa nhà'],
    examples: [{ jp: '階段を上がります。', reading: 'かいだんをあがります。', meaning: 'Đi lên cầu thang.' }] },

  { id: 'n5-genkan', word: '玄関', reading: 'げんかん', romaji: 'genkan', meaning: 'Lối vào, tiền sảnh', hanViet: 'HUYỀN QUAN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nhà'],
    examples: [{ jp: '玄関で靴を脱ぎます。', reading: 'げんかんでくつをぬぎます。', meaning: 'Cởi giày ở lối vào.' }] },

  { id: 'n5-daidokoro', word: '台所', reading: 'だいどころ', romaji: 'daidokoro', meaning: 'Nhà bếp', hanViet: 'ĐÀI SỞ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nhà'],
    examples: [{ jp: '台所で料理します。', reading: 'だいどころでりょうりします。', meaning: 'Nấu ăn ở bếp.' }] },

  { id: 'n5-niwa', word: '庭', reading: 'にわ', romaji: 'niwa', meaning: 'Sân vườn', hanViet: 'ĐÌNH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nhà'],
    examples: [{ jp: '庭に花があります。', reading: 'にわにはながあります。', meaning: 'Trong vườn có hoa.' }] },

  { id: 'n5-rouka', word: '廊下', reading: 'ろうか', romaji: 'rouka', meaning: 'Hành lang', hanViet: 'LANG HẠ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tòa nhà'],
    examples: [{ jp: '廊下を走らないでください。', reading: 'ろうかをはしらないでください。', meaning: 'Đừng chạy ở hành lang.' }] },

  { id: 'n5-mon', word: '門', reading: 'もん', romaji: 'mon', meaning: 'Cổng', hanViet: 'MÔN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tòa nhà'],
    examples: [{ jp: '門の前で待ちます。', reading: 'もんのまえでまちます。', meaning: 'Đợi trước cổng.' }] },

  // ═══════════════ DANH TỪ — Đồ vật / Khác ═══════════════
  { id: 'n5-kitte', word: '切手', reading: 'きって', romaji: 'kitte', meaning: 'Con tem', hanViet: 'THIẾT THỦ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thư tín'],
    examples: [{ jp: '切手を貼りましたか。', reading: 'きってをはりましたか。', meaning: 'Đã dán tem chưa?' }] },

  { id: 'n5-kippu', word: '切符', reading: 'きっぷ', romaji: 'kippu', meaning: 'Vé', hanViet: 'THIẾT PHÙ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giao thông'],
    examples: [{ jp: '切符を買いました。', reading: 'きっぷをかいました。', meaning: 'Đã mua vé.' }] },

  { id: 'n5-reizouko', word: '冷蔵庫', reading: 'れいぞうこ', romaji: 'reizouko', meaning: 'Tủ lạnh', hanViet: 'LÃNH TÀNG KHỐ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ gia dụng'],
    examples: [{ jp: '冷蔵庫にビールがあります。', reading: 'れいぞうこにビールがあります。', meaning: 'Trong tủ lạnh có bia.' }] },

  { id: 'n5-shio', word: '塩', reading: 'しお', romaji: 'shio', meaning: 'Muối', hanViet: 'DIÊM', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia vị', 'Thức ăn'],
    examples: [{ jp: '塩を入れすぎました。', reading: 'しおをいれすぎました。', meaning: 'Bỏ muối nhiều quá.' }] },

  { id: 'n5-satou', word: '砂糖', reading: 'さとう', romaji: 'satou', meaning: 'Đường', hanViet: 'SA ĐƯỜNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia vị', 'Thức ăn'],
    examples: [{ jp: '砂糖を入れてください。', reading: 'さとうをいれてください。', meaning: 'Hãy cho đường.' }] },

  { id: 'n5-gyuuniku', word: '牛肉', reading: 'ぎゅうにく', romaji: 'gyuuniku', meaning: 'Thịt bò', hanViet: 'NGƯU NHỤC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Thịt'],
    examples: [{ jp: '牛肉が好きです。', reading: 'ぎゅうにくがすきです。', meaning: 'Thích thịt bò.' }] },

  { id: 'n5-butaniku', word: '豚肉', reading: 'ぶたにく', romaji: 'butaniku', meaning: 'Thịt heo', hanViet: 'ĐỒN NHỤC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Thịt'],
    examples: [{ jp: '豚肉でカレーを作ります。', reading: 'ぶたにくでカレーをつくります。', meaning: 'Nấu cà ri bằng thịt heo.' }] },

  { id: 'n5-ame-candy', word: '飴', reading: 'あめ', romaji: 'ame', meaning: 'Kẹo', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn'],
    examples: [{ jp: '飴をなめています。', reading: 'あめをなめています。', meaning: 'Đang mút kẹo.' }] },

  { id: 'n5-youfuku', word: '洋服', reading: 'ようふく', romaji: 'youfuku', meaning: 'Quần áo (kiểu Tây)', hanViet: 'DƯƠNG PHỤC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo'],
    examples: [{ jp: '洋服を買いに行きます。', reading: 'ようふくをかいにいきます。', meaning: 'Đi mua quần áo.' }] },

  { id: 'n5-boushi', word: '帽子', reading: 'ぼうし', romaji: 'boushi', meaning: 'Mũ, nón', hanViet: 'MŨ TỬ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo'],
    examples: [{ jp: '帽子をかぶります。', reading: 'ぼうしをかぶります。', meaning: 'Đội mũ.' }] },

  { id: 'n5-kutsu', word: '靴', reading: 'くつ', romaji: 'kutsu', meaning: 'Giày', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo'],
    examples: [{ jp: '新しい靴を買いました。', reading: 'あたらしいくつをかいました。', meaning: 'Đã mua giày mới.' }] },

  { id: 'n5-kutsushita', word: '靴下', reading: 'くつした', romaji: 'kutsushita', meaning: 'Tất, vớ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo'],
    examples: [{ jp: '靴下をはいてください。', reading: 'くつしたをはいてください。', meaning: 'Hãy mang tất.' }] },

  { id: 'n5-sebiro', word: '背広', reading: 'せびろ', romaji: 'sebiro', meaning: 'Bộ vest, complet', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo'],
    examples: [{ jp: '背広を着て会社に行きます。', reading: 'せびろをきてかいしゃにいきます。', meaning: 'Mặc vest đi làm.' }] },

  { id: 'n5-uwagi', word: '上着', reading: 'うわぎ', romaji: 'uwagi', meaning: 'Áo ngoài', hanViet: 'THƯỢNG TRƯỚC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quần áo'],
    examples: [{ jp: '上着を脱いでください。', reading: 'うわぎをぬいでください。', meaning: 'Hãy cởi áo ngoài.' }] },

  { id: 'n5-kabin', word: '花瓶', reading: 'かびん', romaji: 'kabin', meaning: 'Bình hoa', hanViet: 'HOA BÌNH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng', 'Trang trí'],
    examples: [{ jp: '花瓶に花を飾ります。', reading: 'かびんにはなをかざります。', meaning: 'Cắm hoa vào bình.' }] },

  { id: 'n5-fuutou', word: '封筒', reading: 'ふうとう', romaji: 'fuutou', meaning: 'Phong bì', hanViet: 'PHONG ĐỒNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thư tín'],
    examples: [{ jp: '封筒に手紙を入れます。', reading: 'ふうとうにてがみをいれます。', meaning: 'Cho thư vào phong bì.' }] },

  { id: 'n5-hagaki', word: '葉書', reading: 'はがき', romaji: 'hagaki', meaning: 'Bưu thiếp', hanViet: 'DIỆP THƯ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thư tín'],
    examples: [{ jp: '葉書を出しました。', reading: 'はがきをだしました。', meaning: 'Đã gửi bưu thiếp.' }] },

  { id: 'n5-hako', word: '箱', reading: 'はこ', romaji: 'hako', meaning: 'Hộp, thùng', hanViet: 'TƯƠNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng'],
    examples: [{ jp: '箱の中に何がありますか。', reading: 'はこのなかになにがありますか。', meaning: 'Trong hộp có gì?' }] },

  { id: 'n5-zasshi', word: '雑誌', reading: 'ざっし', romaji: 'zasshi', meaning: 'Tạp chí', hanViet: 'TẠP CHÍ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đọc'],
    examples: [{ jp: '雑誌を読んでいます。', reading: 'ざっしをよんでいます。', meaning: 'Đang đọc tạp chí.' }] },

  { id: 'n5-jibiki', word: '字引', reading: 'じびき', romaji: 'jibiki', meaning: 'Từ điển (cũ)', hanViet: 'TỰ DẪN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đọc'],
    examples: [{ jp: '字引で調べました。', reading: 'じびきでしらべました。', meaning: 'Tra từ điển.' }],
    synonyms: [{ word: '辞書', reading: 'じしょ', meaning: 'Từ điển' }] },

  // ═══════════════ DANH TỪ — Trường / Xã hội ═══════════════
  { id: 'n5-katei', word: '家庭', reading: 'かてい', romaji: 'katei', meaning: 'Gia đình (trừu tượng)', hanViet: 'GIA ĐÌNH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình'],
    examples: [{ jp: '家庭を大切にします。', reading: 'かていをたいせつにします。', meaning: 'Tôi quý trọng gia đình.' }] },

  { id: 'n5-ryoushin', word: '両親', reading: 'りょうしん', romaji: 'ryoushin', meaning: 'Bố mẹ', hanViet: 'LƯỠNG THÂN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình'],
    examples: [{ jp: '両親は元気です。', reading: 'りょうしんはげんきです。', meaning: 'Bố mẹ khỏe.' }] },

  { id: 'n5-kyoudai', word: '兄弟', reading: 'きょうだい', romaji: 'kyoudai', meaning: 'Anh em', hanViet: 'HUYNH ĐỆ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình'],
    examples: [{ jp: '兄弟は三人です。', reading: 'きょうだいはさんにんです。', meaning: 'Có 3 anh em.' }] },

  { id: 'n5-okusan', word: '奥さん', reading: 'おくさん', romaji: 'okusan', meaning: 'Vợ (của người khác)', hanViet: 'ÁO', type: 'Danh từ', jlpt: 'N5',
    tags: ['Gia đình'],
    examples: [{ jp: '奥さんはお元気ですか。', reading: 'おくさんはおげんきですか。', meaning: 'Vợ anh khỏe không?' }] },

  { id: 'n5-otokonoko', word: '男の子', reading: 'おとこのこ', romaji: 'otokonoko', meaning: 'Con trai, bé trai', type: 'Danh từ', jlpt: 'N5',
    tags: ['Người'],
    examples: [{ jp: '男の子が遊んでいます。', reading: 'おとこのこがあそんでいます。', meaning: 'Bé trai đang chơi.' }] },

  { id: 'n5-onnanoko', word: '女の子', reading: 'おんなのこ', romaji: 'onnanoko', meaning: 'Con gái, bé gái', type: 'Danh từ', jlpt: 'N5',
    tags: ['Người'],
    examples: [{ jp: '女の子が歌を歌っています。', reading: 'おんなのこがうたをうたっています。', meaning: 'Bé gái đang hát.' }] },

  { id: 'n5-seito', word: '生徒', reading: 'せいと', romaji: 'seito', meaning: 'Học sinh', hanViet: 'SINH ĐỒ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Trường học'],
    examples: [{ jp: '生徒は三十人います。', reading: 'せいとはさんじゅうにんいます。', meaning: 'Có 30 học sinh.' }] },

  { id: 'n5-taisetsuna', word: '大切', reading: 'たいせつ', romaji: 'taisetsu', meaning: 'Quan trọng, quý báu', hanViet: 'ĐẠI THIẾT', type: 'Tính từ -な', jlpt: 'N5',
    tags: ['Đánh giá'],
    examples: [{ jp: '家族は大切です。', reading: 'かぞくはたいせつです。', meaning: 'Gia đình rất quan trọng.' }] },

  { id: 'n5-daijoubu', word: '大丈夫', reading: 'だいじょうぶ', romaji: 'daijoubu', meaning: 'Không sao, ổn', hanViet: 'ĐẠI TRƯỢNG PHU', type: 'Tính từ -な', jlpt: 'N5',
    tags: ['Hàng ngày'],
    examples: [{ jp: '大丈夫ですか。', reading: 'だいじょうぶですか。', meaning: 'Bạn ổn chứ?' }] },

  { id: 'n5-yuumei', word: '有名', reading: 'ゆうめい', romaji: 'yuumei', meaning: 'Nổi tiếng', hanViet: 'HỮU DANH', type: 'Tính từ -な', jlpt: 'N5',
    tags: ['Đánh giá'],
    examples: [{ jp: 'この店は有名です。', reading: 'このみせはゆうめいです。', meaning: 'Quán này nổi tiếng.' }] },

  { id: 'n5-kekkou', word: '結構', reading: 'けっこう', romaji: 'kekkou', meaning: 'Khá, tạm được; đủ rồi', hanViet: 'KẾT CẤU', type: 'Phó từ', jlpt: 'N5',
    tags: ['Phó từ'],
    examples: [{ jp: '結構です。', reading: 'けっこうです。', meaning: 'Đủ rồi ạ.' }] },

  { id: 'n5-kekkon', word: '結婚', reading: 'けっこん', romaji: 'kekkon', meaning: 'Kết hôn', hanViet: 'KẾT HÔN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cuộc sống'],
    examples: [{ jp: '来年結婚します。', reading: 'らいねんけっこんします。', meaning: 'Năm sau kết hôn.' }] },

  { id: 'n5-tanjoubi', word: '誕生日', reading: 'たんじょうび', romaji: 'tanjoubi', meaning: 'Sinh nhật', hanViet: 'ĐẢN SINH NHẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Sự kiện'],
    examples: [{ jp: '誕生日おめでとう！', reading: 'たんじょうびおめでとう！', meaning: 'Chúc mừng sinh nhật!' }] },

  { id: 'n5-shitsumon', word: '質問', reading: 'しつもん', romaji: 'shitsumon', meaning: 'Câu hỏi', hanViet: 'CHẤT VẤN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giao tiếp', 'Trường học'],
    examples: [{ jp: '質問がありますか。', reading: 'しつもんがありますか。', meaning: 'Có câu hỏi nào không?' }] },

  { id: 'n5-imi', word: '意味', reading: 'いみ', romaji: 'imi', meaning: 'Ý nghĩa', hanViet: 'Ý VỊ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngôn ngữ'],
    examples: [{ jp: 'この言葉の意味は何ですか。', reading: 'このことばのいみはなんですか。', meaning: 'Từ này nghĩa là gì?' }] },

  { id: 'n5-bunshou', word: '文章', reading: 'ぶんしょう', romaji: 'bunshou', meaning: 'Bài văn, đoạn văn', hanViet: 'VĂN CHƯƠNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngôn ngữ'],
    examples: [{ jp: '文章を書いてください。', reading: 'ぶんしょうをかいてください。', meaning: 'Hãy viết bài văn.' }] },

  { id: 'n5-sakubun', word: '作文', reading: 'さくぶん', romaji: 'sakubun', meaning: 'Bài luận', hanViet: 'TÁC VĂN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Trường học'],
    examples: [{ jp: '作文を書きました。', reading: 'さくぶんをかきました。', meaning: 'Đã viết bài luận.' }] },

  { id: 'n5-renshuu', word: '練習', reading: 'れんしゅう', romaji: 'renshuu', meaning: 'Luyện tập', hanViet: 'LUYỆN TẬP', type: 'Danh từ', jlpt: 'N5',
    tags: ['Trường học'],
    examples: [{ jp: '毎日練習しています。', reading: 'まいにちれんしゅうしています。', meaning: 'Luyện tập mỗi ngày.' }] },

  { id: 'n5-jugyou', word: '授業', reading: 'じゅぎょう', romaji: 'jugyou', meaning: 'Giờ học, bài giảng', hanViet: 'THỤ NGHIỆP', type: 'Danh từ', jlpt: 'N5',
    tags: ['Trường học'],
    examples: [{ jp: '授業は九時に始まります。', reading: 'じゅぎょうはくじにはじまります。', meaning: 'Giờ học bắt đầu lúc 9 giờ.' }] },

  { id: 'n5-sanpo', word: '散歩', reading: 'さんぽ', romaji: 'sanpo', meaning: 'Đi dạo', hanViet: 'TÁN BỘ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Hoạt động'],
    examples: [{ jp: '公園で散歩します。', reading: 'こうえんでさんぽします。', meaning: 'Đi dạo ở công viên.' }] },

  { id: 'n5-souji', word: '掃除', reading: 'そうじ', romaji: 'souji', meaning: 'Dọn dẹp', hanViet: 'TẢO TRỪ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Sinh hoạt'],
    examples: [{ jp: '部屋を掃除します。', reading: 'へやをそうじします。', meaning: 'Dọn phòng.' }] },

  { id: 'n5-denki', word: '電気', reading: 'でんき', romaji: 'denki', meaning: 'Điện, đèn', hanViet: 'ĐIỆN KHÍ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ gia dụng'],
    examples: [{ jp: '電気をつけてください。', reading: 'でんきをつけてください。', meaning: 'Hãy bật đèn.' }] },

  { id: 'n5-kusuri', word: '薬', reading: 'くすり', romaji: 'kusuri', meaning: 'Thuốc', hanViet: 'DƯỢC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Sức khỏe'],
    examples: [{ jp: '薬を飲んでください。', reading: 'くすりをのんでください。', meaning: 'Hãy uống thuốc.' }] },

  { id: 'n5-kazeflu', word: '風邪', reading: 'かぜ', romaji: 'kaze', meaning: 'Cảm cúm', hanViet: 'PHONG TÀ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Sức khỏe'],
    examples: [{ jp: '風邪をひきました。', reading: 'かぜをひきました。', meaning: 'Bị cảm rồi.' }] },

  { id: 'n5-isha', word: '医者', reading: 'いしゃ', romaji: 'isha', meaning: 'Bác sĩ', hanViet: 'Y GIẢ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nghề nghiệp', 'Sức khỏe'],
    examples: [{ jp: '医者に行きました。', reading: 'いしゃにいきました。', meaning: 'Đã đi khám bác sĩ.' }] },

  { id: 'n5-keikan', word: '警官', reading: 'けいかん', romaji: 'keikan', meaning: 'Cảnh sát', hanViet: 'CẢNH QUAN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nghề nghiệp'],
    examples: [{ jp: '警官に道を聞きました。', reading: 'けいかんにみちをききました。', meaning: 'Hỏi đường cảnh sát.' }] },

  { id: 'n5-taishikan', word: '大使館', reading: 'たいしかん', romaji: 'taishikan', meaning: 'Đại sứ quán', hanViet: 'ĐẠI SỨ QUÁN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nơi chốn'],
    examples: [{ jp: '大使館でビザを取ります。', reading: 'たいしかんでビザをとります。', meaning: 'Lấy visa ở đại sứ quán.' }] },

  { id: 'n5-shokudou', word: '食堂', reading: 'しょくどう', romaji: 'shokudou', meaning: 'Nhà ăn, căng tin', hanViet: 'THỰC ĐƯỜNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nơi chốn', 'Thức ăn'],
    examples: [{ jp: '食堂で昼ご飯を食べます。', reading: 'しょくどうでひるごはんをたべます。', meaning: 'Ăn trưa ở nhà ăn.' }] },
];

// ── from: vocabN5_Part5.ts ──
// ═══════════════════════════════════════════════════════════════════════════
// VOCAB N5 Part 5 — Remaining N5 words (final cleanup batch)
// ~67 entries — Covers all remaining N5 gaps
// ═══════════════════════════════════════════════════════════════════════════
export const VOCAB_N5_PART5: VocabEntry[] = [
  // ═══════════════ THỜI GIAN BỔ SUNG ═══════════════
  { id: 'n5-hajime', word: '初め', reading: 'はじめ', romaji: 'hajime', meaning: 'Ban đầu, lúc đầu', hanViet: 'SƠ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '初めは難しかったです。', reading: 'はじめはむずかしかったです。', meaning: 'Lúc đầu khó lắm.' }] },

  { id: 'n5-hajime2', word: '始め', reading: 'はじめ', romaji: 'hajime', meaning: 'Bắt đầu, khởi đầu', hanViet: 'THỈ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '七月の始めに旅行します。', reading: 'しちがつのはじめにりょこうします。', meaning: 'Đi du lịch đầu tháng 7.' }] },

  { id: 'n5-sakuya', word: '昨夜', reading: 'さくや', romaji: 'sakuya', meaning: 'Đêm qua', hanViet: 'TÁC DẠ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '昨夜はよく眠れませんでした。', reading: 'さくやはよくねむれませんでした。', meaning: 'Đêm qua không ngủ ngon.' }] },

  { id: 'n5-mainen', word: '毎年', reading: 'まいねん', romaji: 'mainen', meaning: 'Mỗi năm', hanViet: 'MỖI NIÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '毎年日本に行きます。', reading: 'まいねんにほんにいきます。', meaning: 'Mỗi năm đi Nhật.' }] },

  { id: 'n5-maiban', word: '毎晩', reading: 'まいばん', romaji: 'maiban', meaning: 'Mỗi tối', hanViet: 'MỖI VÃN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '毎晩テレビを見ます。', reading: 'まいばんテレビをみます。', meaning: 'Mỗi tối xem tivi.' }] },

  { id: 'n5-maiasa', word: '毎朝', reading: 'まいあさ', romaji: 'maiasa', meaning: 'Mỗi sáng', hanViet: 'MỖI TRIÊU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '毎朝六時に起きます。', reading: 'まいあさろくじにおきます。', meaning: 'Mỗi sáng dậy 6 giờ.' }] },

  { id: 'n5-tsugi', word: '次', reading: 'つぎ', romaji: 'tsugi', meaning: 'Tiếp theo, kế tiếp', hanViet: 'THỨ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian', 'Thứ tự'],
    examples: [{ jp: '次の電車は何時ですか。', reading: 'つぎのでんしゃはなんじですか。', meaning: 'Chuyến tàu tiếp theo là mấy giờ?' }] },

  // ═══════════════ BỮA ĂN ═══════════════
  { id: 'n5-asagohan', word: '朝御飯', reading: 'あさごはん', romaji: 'asagohan', meaning: 'Bữa sáng', hanViet: 'TRIÊU NGỰ PHẠN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Thời gian'],
    examples: [{ jp: '朝御飯はパンです。', reading: 'あさごはんはパンです。', meaning: 'Bữa sáng là bánh mì.' }] },

  { id: 'n5-hirugohan', word: '昼御飯', reading: 'ひるごはん', romaji: 'hirugohan', meaning: 'Bữa trưa', hanViet: 'TRÚ NGỰ PHẠN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Thời gian'],
    examples: [{ jp: '昼御飯を一緒に食べましょう。', reading: 'ひるごはんをいっしょにたべましょう。', meaning: 'Ăn trưa cùng nhau nào.' }] },

  { id: 'n5-bangohan', word: '晩御飯', reading: 'ばんごはん', romaji: 'bangohan', meaning: 'Bữa tối', hanViet: 'VÃN NGỰ PHẠN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thức ăn', 'Thời gian'],
    examples: [{ jp: '晩御飯は何を食べますか。', reading: 'ばんごはんはなにをたべますか。', meaning: 'Bữa tối ăn gì?' }] },

  { id: 'n5-koucha', word: '紅茶', reading: 'こうちゃ', romaji: 'koucha', meaning: 'Hồng trà, trà đen', hanViet: 'HỒNG TRÀ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ uống'],
    examples: [{ jp: '紅茶を一杯ください。', reading: 'こうちゃをいっぱいください。', meaning: 'Cho một cốc trà đen.' }] },

  // ═══════════════ THỜI TIẾT ═══════════════
  { id: 'n5-hare', word: '晴れ', reading: 'はれ', romaji: 'hare', meaning: 'Trời nắng, trời quang', hanViet: 'TÌNH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời tiết'],
    examples: [{ jp: '明日は晴れです。', reading: 'あしたははれです。', meaning: 'Ngày mai trời nắng.' }] },

  { id: 'n5-hareru', word: '晴れる', reading: 'はれる', romaji: 'hareru', meaning: 'Trời nắng, hửng nắng', hanViet: 'TÌNH', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Thời tiết'],
    examples: [{ jp: '午後から晴れるでしょう。', reading: 'ごごからはれるでしょう。', meaning: 'Chắc từ chiều sẽ nắng.' }] },

  { id: 'n5-kumori', word: '曇り', reading: 'くもり', romaji: 'kumori', meaning: 'Trời âm u, mây mù', hanViet: 'ĐÀM', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời tiết'],
    examples: [{ jp: '今日は曇りです。', reading: 'きょうはくもりです。', meaning: 'Hôm nay trời u ám.' }] },

  { id: 'n5-kumoru', word: '曇る', reading: 'くもる', romaji: 'kumoru', meaning: 'Trời u ám', hanViet: 'ĐÀM', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Thời tiết'],
    examples: [{ jp: '空が曇ってきた。', reading: 'そらがくもってきた。', meaning: 'Trời bắt đầu u ám.' }] },

  // ═══════════════ DANH TỪ — Tự nhiên / Nơi chốn ═══════════════
  { id: 'n5-ike', word: '池', reading: 'いけ', romaji: 'ike', meaning: 'Ao', hanViet: 'TRÌ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên'],
    examples: [{ jp: '池にカメがいます。', reading: 'いけにカメがいます。', meaning: 'Trong ao có rùa.' }] },

  { id: 'n5-kawa-river', word: '河', reading: 'かわ', romaji: 'kawa', meaning: 'Sông lớn', hanViet: 'HÀ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Tự nhiên'],
    examples: [{ jp: '河の近くに住んでいます。', reading: 'かわのちかくにすんでいます。', meaning: 'Sống gần sông.' }],
    synonyms: [{ word: '川', reading: 'かわ', meaning: 'Sông (nhỏ)' }] },

  { id: 'n5-hashi-bridge', word: '橋', reading: 'はし', romaji: 'hashi', meaning: 'Cầu', hanViet: 'KIỀU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nơi chốn'],
    examples: [{ jp: '橋を渡ります。', reading: 'はしをわたります。', meaning: 'Đi qua cầu.' }] },

  { id: 'n5-mura', word: '村', reading: 'むら', romaji: 'mura', meaning: 'Làng', hanViet: 'THÔN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nơi chốn'],
    examples: [{ jp: '小さな村に住んでいます。', reading: 'ちいさなむらにすんでいます。', meaning: 'Sống ở một ngôi làng nhỏ.' }] },

  { id: 'n5-soto', word: '外', reading: 'そと', romaji: 'soto', meaning: 'Bên ngoài', hanViet: 'NGOẠI', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: '外で遊びましょう。', reading: 'そとであそびましょう。', meaning: 'Chơi ngoài trời nào.' }] },

  { id: 'n5-gaikoku', word: '外国', reading: 'がいこく', romaji: 'gaikoku', meaning: 'Nước ngoài', hanViet: 'NGOẠI QUỐC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Quốc gia'],
    examples: [{ jp: '外国に住みたいです。', reading: 'がいこくにすみたいです。', meaning: 'Muốn sống ở nước ngoài.' }] },

  { id: 'n5-gaikokujin', word: '外国人', reading: 'がいこくじん', romaji: 'gaikokujin', meaning: 'Người nước ngoài', hanViet: 'NGOẠI QUỐC NHÂN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Người'],
    examples: [{ jp: '外国人の友達がいます。', reading: 'がいこくじんのともだちがいます。', meaning: 'Có bạn nước ngoài.' }] },

  { id: 'n5-mado', word: '窓', reading: 'まど', romaji: 'mado', meaning: 'Cửa sổ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nhà'],
    examples: [{ jp: '窓を開けてください。', reading: 'まどをあけてください。', meaning: 'Hãy mở cửa sổ.' }] },

  { id: 'n5-to', word: '戸', reading: 'と', romaji: 'to', meaning: 'Cửa (trượt)', hanViet: 'HỘ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nhà'],
    examples: [{ jp: '戸を閉めてください。', reading: 'とをしめてください。', meaning: 'Hãy đóng cửa.' }] },

  { id: 'n5-tsukue', word: '机', reading: 'つくえ', romaji: 'tsukue', meaning: 'Bàn học, bàn làm việc', hanViet: 'KỶ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng'],
    examples: [{ jp: '机の上に本があります。', reading: 'つくえのうえにほんがあります。', meaning: 'Trên bàn có sách.' }] },

  { id: 'n5-haizara', word: '灰皿', reading: 'はいざら', romaji: 'haizara', meaning: 'Gạt tàn thuốc', hanViet: 'HỘI MÃNH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đồ dùng'],
    examples: [{ jp: '灰皿はありますか。', reading: 'はいざらはありますか。', meaning: 'Có gạt tàn không?' }] },

  // ═══════════════ DANH TỪ — Khác ═══════════════
  { id: 'n5-koe', word: '声', reading: 'こえ', romaji: 'koe', meaning: 'Giọng, tiếng', hanViet: 'THANH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Âm thanh'],
    examples: [{ jp: '大きい声で話してください。', reading: 'おおきいこえではなしてください。', meaning: 'Hãy nói to lên.' }] },

  { id: 'n5-doubutsu', word: '動物', reading: 'どうぶつ', romaji: 'doubutsu', meaning: 'Động vật', hanViet: 'ĐỘNG VẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Động vật'],
    examples: [{ jp: '動物が好きです。', reading: 'どうぶつがすきです。', meaning: 'Thích động vật.' }] },

  { id: 'n5-mono', word: '物', reading: 'もの', romaji: 'mono', meaning: 'Đồ vật, thứ', hanViet: 'VẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Hàng ngày'],
    examples: [{ jp: '甘い物が好きです。', reading: 'あまいものがすきです。', meaning: 'Thích đồ ngọt.' }] },

  { id: 'n5-nimotsu', word: '荷物', reading: 'にもつ', romaji: 'nimotsu', meaning: 'Hành lý, đồ đạc', hanViet: 'HÀ VẬT', type: 'Danh từ', jlpt: 'N5',
    tags: ['Du lịch'],
    examples: [{ jp: '荷物を持ちましょうか。', reading: 'にもつをもちましょうか。', meaning: 'Tôi xách hành lý giùm nhé?' }] },

  { id: 'n5-bangou', word: '番号', reading: 'ばんごう', romaji: 'bangou', meaning: 'Số, số hiệu', hanViet: 'PHIÊN HIỆU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Số'],
    examples: [{ jp: '電話番号は何ですか。', reading: 'でんわばんごうはなんですか。', meaning: 'Số điện thoại là bao nhiêu?' }] },

  { id: 'n5-uta', word: '歌', reading: 'うた', romaji: 'uta', meaning: 'Bài hát', hanViet: 'CA', type: 'Danh từ', jlpt: 'N5',
    tags: ['Âm nhạc'],
    examples: [{ jp: '歌を歌いましょう。', reading: 'うたをうたいましょう。', meaning: 'Hãy hát nào.' }] },

  { id: 'n5-e-picture', word: '絵', reading: 'え', romaji: 'e', meaning: 'Tranh, bức vẽ', hanViet: 'HỘI', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nghệ thuật'],
    examples: [{ jp: '絵を描くのが好きです。', reading: 'えをかくのがすきです。', meaning: 'Thích vẽ tranh.' }] },

  { id: 'n5-hanashi', word: '話', reading: 'はなし', romaji: 'hanashi', meaning: 'Câu chuyện, lời nói', hanViet: 'THOẠI', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giao tiếp'],
    examples: [{ jp: '面白い話ですね。', reading: 'おもしろいはなしですね。', meaning: 'Câu chuyện thú vị nhỉ.' }] },

  { id: 'n5-kanji', word: '漢字', reading: 'かんじ', romaji: 'kanji', meaning: 'Chữ Hán', hanViet: 'HÁN TỰ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngôn ngữ'],
    examples: [{ jp: '漢字は難しいです。', reading: 'かんじはむずかしいです。', meaning: 'Chữ Hán khó.' }] },

  { id: 'n5-eigo', word: '英語', reading: 'えいご', romaji: 'eigo', meaning: 'Tiếng Anh', hanViet: 'ANH NGỮ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Ngôn ngữ'],
    examples: [{ jp: '英語を話せますか。', reading: 'えいごをはなせますか。', meaning: 'Bạn nói được tiếng Anh không?' }] },

  { id: 'n5-jisho', word: '辞書', reading: 'じしょ', romaji: 'jisho', meaning: 'Từ điển', hanViet: 'TỪ THƯ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đọc', 'Ngôn ngữ'],
    examples: [{ jp: '辞書で調べます。', reading: 'じしょでしらべます。', meaning: 'Tra từ điển.' }] },

  { id: 'n5-jitensha', word: '自転車', reading: 'じてんしゃ', romaji: 'jitensha', meaning: 'Xe đạp', hanViet: 'TỰ CHUYỂN XA', type: 'Danh từ', jlpt: 'N5',
    tags: ['Giao thông'],
    examples: [{ jp: '自転車で学校に行きます。', reading: 'じてんしゃでがっこうにいきます。', meaning: 'Đi học bằng xe đạp.' }] },

  { id: 'n5-jibun', word: '自分', reading: 'じぶん', romaji: 'jibun', meaning: 'Bản thân, tự mình', hanViet: 'TỰ PHẬN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Đại từ'],
    examples: [{ jp: '自分でやります。', reading: 'じぶんでやります。', meaning: 'Tự mình làm.' }] },

  { id: 'n5-se', word: '背', reading: 'せ', romaji: 'se', meaning: 'Lưng, chiều cao', hanViet: 'BỐI', type: 'Danh từ', jlpt: 'N5',
    tags: ['Cơ thể'],
    examples: [{ jp: '背が高いですね。', reading: 'せがたかいですね。', meaning: 'Bạn cao nhỉ.' }] },

  // ═══════════════ MÀU SẮC ═══════════════
  { id: 'n5-shiro', word: '白', reading: 'しろ', romaji: 'shiro', meaning: 'Màu trắng', hanViet: 'BẠCH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '白い猫が好きです。', reading: 'しろいねこがすきです。', meaning: 'Thích mèo trắng.' }] },

  { id: 'n5-aka', word: '赤', reading: 'あか', romaji: 'aka', meaning: 'Màu đỏ', hanViet: 'XÍCH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '赤い花がきれいです。', reading: 'あかいはながきれいです。', meaning: 'Hoa đỏ đẹp.' }] },

  { id: 'n5-ao', word: '青', reading: 'あお', romaji: 'ao', meaning: 'Màu xanh dương', hanViet: 'THANH', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '空は青いです。', reading: 'そらはあおいです。', meaning: 'Bầu trời xanh.' }] },

  { id: 'n5-midori', word: '緑', reading: 'みどり', romaji: 'midori', meaning: 'Màu xanh lá', hanViet: 'LỤC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '緑のお茶が好きです。', reading: 'みどりのおちゃがすきです。', meaning: 'Thích trà xanh.' }] },

  { id: 'n5-kiiro', word: '黄色', reading: 'きいろ', romaji: 'kiiro', meaning: 'Màu vàng', hanViet: 'HOÀNG SẮC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '黄色い花です。', reading: 'きいろいはなです。', meaning: 'Hoa vàng.' }] },

  { id: 'n5-chairo', word: '茶色', reading: 'ちゃいろ', romaji: 'chairo', meaning: 'Màu nâu', hanViet: 'TRÀ SẮC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '茶色のかばんです。', reading: 'ちゃいろのかばんです。', meaning: 'Cái cặp màu nâu.' }] },

  { id: 'n5-kuro', word: '黒', reading: 'くろ', romaji: 'kuro', meaning: 'Màu đen', hanViet: 'HẮC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Màu sắc'],
    examples: [{ jp: '黒い車です。', reading: 'くろいくるまです。', meaning: 'Xe đen.' }] },

  // ═══════════════ ĐỘNG TỪ BỔ SUNG ═══════════════
  { id: 'n5-magaru', word: '曲る', reading: 'まがる', romaji: 'magaru', meaning: 'Rẽ, quẹo', hanViet: 'KHÚC', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Di chuyển'],
    examples: [{ jp: '次の角を右に曲がってください。', reading: 'つぎのかどをみぎにまがってください。', meaning: 'Rẽ phải ở góc tiếp theo.' }] },

  { id: 'n5-owaru', word: '終る', reading: 'おわる', romaji: 'owaru', meaning: 'Kết thúc', hanViet: 'CHUNG', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '授業が終わりました。', reading: 'じゅぎょうがおわりました。', meaning: 'Giờ học đã kết thúc.' }] },

  { id: 'n5-iru-be', word: '居る', reading: 'いる', romaji: 'iru', meaning: 'Có, ở (sinh vật)', hanViet: 'CƯ', type: 'Động từ nhóm 2', jlpt: 'N5',
    tags: ['Tồn tại'],
    examples: [{ jp: '猫が居ます。', reading: 'ねこがいます。', meaning: 'Có con mèo.' }] },

  { id: 'n5-sasu', word: '差す', reading: 'さす', romaji: 'sasu', meaning: 'Giơ (ô), rót (trà), chỉ', hanViet: 'SAI', type: 'Động từ nhóm 1', jlpt: 'N5',
    tags: ['Hành động'],
    examples: [{ jp: '傘を差します。', reading: 'かさをさします。', meaning: 'Giơ ô (che ô).' }] },

  // ═══════════════ TÍNH TỪ BỔ SUNG ═══════════════
  { id: 'n5-wakai', word: '若い', reading: 'わかい', romaji: 'wakai', meaning: 'Trẻ', hanViet: 'NHƯỢC', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Tuổi tác'],
    examples: [{ jp: '若い人が多いです。', reading: 'わかいひとがおおいです。', meaning: 'Nhiều người trẻ.' }] },

  { id: 'n5-nurui', word: '温い', reading: 'ぬるい', romaji: 'nurui', meaning: 'Ấm, hâm hẩm', hanViet: 'ÔN', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Nhiệt độ'],
    examples: [{ jp: 'お茶が温くなりました。', reading: 'おちゃがぬるくなりました。', meaning: 'Trà nguội rồi.' }] },

  // ═══════════════ TỪ KHÁC ═══════════════
  { id: 'n5-zenbu', word: '全部', reading: 'ぜんぶ', romaji: 'zenbu', meaning: 'Tất cả, toàn bộ', hanViet: 'TOÀN BỘ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Số lượng'],
    examples: [{ jp: '全部食べました。', reading: 'ぜんぶたべました。', meaning: 'Ăn hết rồi.' }] },

  { id: 'n5-oozei', word: '大勢', reading: 'おおぜい', romaji: 'oozei', meaning: 'Đông người', hanViet: 'ĐẠI THẾ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Số lượng'],
    examples: [{ jp: '大勢の人が来ました。', reading: 'おおぜいのひとがきました。', meaning: 'Rất đông người đến.' }] },

  { id: 'n5-tokoro', word: '所', reading: 'ところ', romaji: 'tokoro', meaning: 'Nơi, chỗ', hanViet: 'SỞ', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: '静かな所が好きです。', reading: 'しずかなところがすきです。', meaning: 'Thích chỗ yên tĩnh.' }] },

  { id: 'n5-hou', word: '方', reading: 'ほう', romaji: 'hou', meaning: 'Phía, phương', hanViet: 'PHƯƠNG', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí', 'So sánh'],
    examples: [{ jp: 'こちらの方がいいです。', reading: 'こちらのほうがいいです。', meaning: 'Cái này tốt hơn.' }] },

  { id: 'n5-ato', word: '後', reading: 'あと', romaji: 'ato', meaning: 'Sau, còn lại', hanViet: 'HẬU', type: 'Danh từ', jlpt: 'N5',
    tags: ['Thời gian'],
    examples: [{ jp: '後で電話します。', reading: 'あとででんわします。', meaning: 'Sẽ gọi sau.' }] },

  { id: 'n5-kado', word: '角', reading: 'かど', romaji: 'kado', meaning: 'Góc, ngã rẽ', hanViet: 'GIÁC', type: 'Danh từ', jlpt: 'N5',
    tags: ['Nơi chốn'],
    examples: [{ jp: '角を左に曲がってください。', reading: 'かどをひだりにまがってください。', meaning: 'Rẽ trái ở góc.' }] },

  { id: 'n5-hen', word: '辺', reading: 'へん', romaji: 'hen', meaning: 'Vùng, khu vực', hanViet: 'BIÊN', type: 'Danh từ', jlpt: 'N5',
    tags: ['Vị trí'],
    examples: [{ jp: 'この辺にレストランはありますか。', reading: 'このへんにレストランはありますか。', meaning: 'Khu này có nhà hàng không?' }] },

  { id: 'n5-dare', word: '誰', reading: 'だれ', romaji: 'dare', meaning: 'Ai', type: 'Đại từ', jlpt: 'N5',
    tags: ['Đại từ', 'Nghi vấn'],
    examples: [{ jp: 'あの人は誰ですか。', reading: 'あのひとはだれですか。', meaning: 'Người kia là ai?' }] },

  { id: 'n5-marui2', word: '円い', reading: 'まるい', romaji: 'marui', meaning: 'Tròn (viết bằng 円)', hanViet: 'VIÊN', type: 'Tính từ -い', jlpt: 'N5',
    tags: ['Hình dạng'],
    examples: [{ jp: '円い窓があります。', reading: 'まるいまどがあります。', meaning: 'Có cửa sổ tròn.' }],
    synonyms: [{ word: '丸い', reading: 'まるい', meaning: 'Tròn'  }] },
];
