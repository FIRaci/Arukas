// ============================================================================
// GRAMMAR IMPORT BATCH 2 — Generated from tools/grammar_new.txt
// Scope: remaining N2/N1 (+ range labels mapped to N2/N1), deduped by pattern
// ============================================================================
import type { GrammarEntry } from './grammarTypes';

export const GRAMMAR_IMPORT_BATCH2_N2: GrammarEntry[] = [
  {
    id: 'gimp2-n2-001',
    pattern: '〜の / 〜のだ / 〜んだ / 〜なのだ / 〜なんだ / 〜んじゃない？',
    meaning: 'Là vì ~; Chuyện là ~ (giọng điệu giải thích)',
    category: 'advanced', jlpt: 'N2',
    examples: [
      { jp: '今は忙しいの。', reading: 'いまはいそがしいの。', meaning: 'Chuyện là bây giờ tôi bận.' },
      { jp: '今は忙しいのだ。', reading: 'いまはいそがしいのだ。', meaning: 'Chuyện là bây giờ tôi bận.' },
      { jp: '今は忙しいの？', reading: 'いまはいそがしいの？', meaning: 'Có phải là bạn đang bận bây giờ không?' },
      { jp: 'ジムなのだ。', reading: 'ジムなのだ。', meaning: 'Chuyện là Jim đó.' },
    ],
    note: 'Usage: Được đặt ở cuối mệnh đề cuối cùng của câu để truyền đạt giọng điệu giải thích, ngụ ý lý do cho điều gì đó. 「の」 nghe mềm mại, nữ tính trong câu khẳng định, nhưng trung tính trong câu hỏi. 「のだ」 là dạng trang trọng hơn, 「んだ」 là dạng rút gọn phổ biến của 「のだ」. Dùng 「な」 trước 「の/のだ/んだ」 khi đi với danh từ hoặc tính từ -na để chỉ trạng thái tồn tại. Cũng dùng để tìm kiếm lời giải thích trong câu hỏi (thường là 〜んじゃない？). | Construction: Verb (thể thường) + の / のだ / んだ\nI-adj (thể thường) + の / のだ / んだ\nNa-adj (dạng な) + の / のだ / んだ\nNoun (dạng な) + の / のだ / んだ\n\n*Các dạng chia động từ/tính từ/danh từ + んだ/のだ (Bảng 1):\n  - Noun/Na-Adj (thể thường, đã chia) + んだ: 学生なんだ, 学生じゃないんだ, 学生だったんだ, 学生じゃなかったんだ\n  - Verb/I-Adj (thể thường, đã chia) + んだ: 飲むんだ, 飲まないんだ, 飲んだんだ, 飲まなかったんだ\n\n*Các dạng chia ん + だ (Bảng 2):\n  - Noun/Na-Adj (thể thường) + ん + (chia だ): 学生なんだ, 学生なんじゃない, 学生なんだった, 学生なんじゃなかった\n  - Verb/I-Adj (thể thường) + ん + (chia だ): 飲むんだ, 飲むんじゃない, 飲むんだった, 飲むんじゃなかった',
  },
  {
    id: 'gimp2-n2-002',
    pattern: '〜語幹 (名詞化)',
    meaning: 'Thân động từ (danh từ hóa)',
    category: 'advanced', jlpt: 'N2',
    examples: [
      { jp: '怒る (いかる) → 怒り (いかり) trong 「怒りの鉄拳」', reading: 'いかる → いかり の てっけん', meaning: 'Giận dữ → Sự giận dữ trong "Nắm đấm của sự giận dữ"' },
      { jp: '休み', reading: 'やすみ', meaning: 'Nghỉ ngơi (danh từ từ 休む)' },
      { jp: '飲みをする。(Câu này có nghĩa nhưng không ai nói như vậy)', reading: 'のみをする。', meaning: 'Làm việc uống (câu này có nghĩa nhưng không ai nói như vậy)' },
    ],
    note: 'Usage: Tạo danh từ từ động từ. Cách dùng này chuyên biệt và hạn chế, trong một số trường hợp hiếm gặp, thân động từ được dùng phổ biến hơn bản thân động từ. | Construction: Động từ thể thân',
  },
  {
    id: 'gimp2-n2-003',
    pattern: '〜複合動詞 (語幹＋動詞)',
    meaning: 'Động từ ghép',
    category: 'advanced', jlpt: 'N2',
    examples: [
      { jp: '走り出す', reading: 'はしりだす', meaning: 'Bắt đầu chạy (走る + 出す)' },
      { jp: '切り替える', reading: 'きりかえる', meaning: 'Chuyển đổi (切る + 替える)' },
      { jp: '付け加える', reading: 'つけくわえる', meaning: 'Thêm vào (付ける + 加える)' },
      { jp: '言い出す', reading: 'いいだす', meaning: 'Bắt đầu nói (言う + 出す)' },
    ],
    note: 'Usage: Ghép thân động từ với một động từ khác để tạo ra một động từ mới với ý nghĩa kết hợp. Không có quy tắc chung, cần ghi nhớ từng động từ ghép như một từ riêng biệt. | Construction: Động từ thể thân + Động từ khác',
  },
  {
    id: 'gimp2-n2-004',
    pattern: '〜と⾔えば',
    meaning: 'Nếu nói là/Nếu nói về',
    category: 'advanced', jlpt: 'N2',
    examples: [
      { jp: '「 Hello」を⽇本語で 何と⾔えば いいですか。', reading: '「Hello」をにほんごでなんと⾔えばいいですか。', meaning: 'Nếu nói "Hello" bằng tiếng Nhật thì nói thế nào?' },
    ],
    note: 'Usage: Dùng để hỏi cách nói một từ/cụm từ, hoặc để đưa ra một điều kiện liên quan đến việc nói. | Construction: Mệnh đề/Danh từ + と⾔えば',
  },
  {
    id: 'gimp2-n2-005',
    pattern: 'Thể sai khiến-bị động rút gọn',
    meaning: 'Bị/Được (ai đó) bắt/cho phép làm gì (dạng rút gọn)',
    category: 'advanced', jlpt: 'N2',
    examples: [
      { jp: '学⽣が廊下に ⽴たされた 。', reading: 'がくせいがろうかにたたされた。', meaning: 'Học sinh bị bắt đứng ở hành lang.' },
      { jp: '⽇本では、お酒を 飲まされる ことが多い。', reading: 'にほんでは、おさけをのまされることがおおい。', meaning: 'Ở Nhật, việc bị bắt uống rượu là khá nhiều.' },
      { jp: 'あいつに⼆時間も 待たされた 。', reading: 'あいつににじかんもまたされた。', meaning: 'Tôi bị thằng cha đó bắt đợi hai tiếng đồng hồ.' },
    ],
    note: 'Usage: Diễn tả việc bị ai đó bắt buộc hoặc cho phép làm một hành động, sử dụng dạng rút gọn của thể sai khiến-bị động. Không dùng được khi thể sai khiến rút gọn kết thúc bằng 「さす」 (tức là không có 「さされる」). | Construction: Động từ (thể sai khiến rút gọn) + られる/される. \n- Đối với động từ nhóm 1 (u-verb): Chuyển sang thể sai khiến rút gọn (VD: 行く→行かす, 立つ→立たす) rồi thêm される.\n- Đối với động từ nhóm 2 (ru-verb): Chuyển sang thể sai khiến rút gọn (VD: 食べる→食べさす) rồi thêm される.',
  },
  {
    id: 'gimp2-n2-006',
    pattern: 'Động từ kính ngữ/khiêm nhường ngữ đặc biệt (Set Expressions)',
    meaning: 'Các động từ có dạng kính ngữ hoặc khiêm nhường ngữ riêng biệt, thay thế hoàn toàn cho động từ thông thường.',
    category: 'advanced', jlpt: 'N2',
    examples: [
      { jp: 'アリスさん、もう 召し上がりました か。', reading: 'アリスさん、もうめしあがりましたか。', meaning: 'Chị Alice, chị đã ăn chưa ạ?' },
      { jp: '仕事で何を なさっている んですか。', reading: 'しごとでなにをなさっているんですか。', meaning: 'Anh/chị đang làm gì trong công việc vậy?' },
      { jp: '推薦状を書いて くださるんです か。', reading: 'すいせんじょうをかいてくださるんですか。', meaning: 'Anh/chị sẽ giúp tôi viết thư giới thiệu chứ ạ?' },
      { jp: 'どちらから いらっしゃいました か。', reading: 'どちらからいらっしゃいましたか。', meaning: 'Anh/chị đến từ đâu ạ?' },
    ],
    note: 'Usage: Dùng để thể hiện sự tôn kính đối với người khác (kính ngữ) hoặc sự khiêm tốn của bản thân (khiêm nhường ngữ) trong các tình huống trang trọng, lịch sự. | Construction: Đây là các động từ thay thế hoàn toàn cho động từ thông thường:\n- する: Kính ngữ: なさる, Khiêm nhường ngữ: 致す\n- ⾏く/来る: Kính ngữ: いらっしゃる／おいでになる, Khiêm nhường ngữ: 参る\n- いる: Kính ngữ: いらっしゃる／おいでになる, Khiêm nhường ngữ: おる\n- ⾒る: Kính ngữ: ご覧になる, Khiêm nhường ngữ: 拝⾒する\n- 聞く: Khiêm nhường ngữ: 伺う\n- ⾔う: Kính ngữ: おっしゃる, Khiêm nhường ngữ: 申す／申し上げる\n- あげる: Khiêm nhường ngữ: 差し上げる\n- くれる: Kính ngữ: 下さる\n- もらう: Khiêm nhường ngữ: いただく\n- ⾷べる/飲む: Kính ngữ: 召し上がる, Khiêm nhường ngữ: いただく\n- 知っている: Kính ngữ: ご存知 (です), Khiêm nhường ngữ: 存じる',
  },
  {
    id: 'gimp2-n2-007',
    pattern: 'Chia thể ます đặc biệt cho một số động từ kính ngữ nhóm 1',
    meaning: 'Quy tắc chia thể ます đặc biệt cho các động từ kính ngữ nhóm 1 như なさる, いらっしゃる, おっしゃる, 下さる, ござる.',
    category: 'advanced', jlpt: 'N2',
    examples: [
      { jp: '推薦状を書いて くださるんです か。', reading: 'すいせんじょうをかいてくださるんですか。', meaning: 'Anh/chị sẽ giúp tôi viết thư giới thiệu chứ ạ?' },
      { jp: 'どちらから いらっしゃいました か。', reading: 'どちらからいらっしゃいましたか。', meaning: 'Anh/chị đến từ đâu ạ?' },
      { jp: '今⽇は、どちらへ いらっしゃいます か。', reading: 'きょうは、どちらへいらっしゃいますか。', meaning: 'Hôm nay anh/chị đi đâu ạ?' },
    ],
    note: 'Usage: Áp dụng khi chia các động từ kính ngữ đặc biệt này sang thể ます, thể ます quá khứ, thể ます phủ định và thể ます quá khứ phủ định. | Construction: Thay vì 「る」 thành 「り」 như động từ nhóm 1 thông thường, 「る」 sẽ thành 「い」.\n- なさる: なさいます, なさいました, なさいません, なさいませんでした\n- いらっしゃる: いらっしゃいます, いらっしゃいました, いらっしゃいません, いらっしゃいませんでした\n- おっしゃる: おっしゃいます, おっしゃいました, おっしゃいません, おっしゃいませんでした\n- 下さる: 下さいます, 下さいました, 下さいません, 下さいませんでした\n- ござる: ございます, ございました, ございません, ございませんでした',
  },
  {
    id: 'gimp2-n2-008',
    pattern: 'Thay thế tính từ trang trọng: よろしい',
    meaning: 'Dạng trang trọng của tính từ 「いい」 (tốt).',
    category: 'advanced', jlpt: 'N2',
    note: 'Usage: Sử dụng trong các tình huống cần sự trang trọng, lịch sự hơn khi muốn nói \'tốt\' hoặc \'được\'. | Construction: いい (thông thường) → よろしい (trang trọng)',
  },
  {
    id: 'gimp2-n2-009',
    pattern: '〜Âm ghép nhỏ (Small Vowels) trong Katakana',
    meaning: 'Các nguyên âm nhỏ (ア、イ、ウ、エ、オ) được dùng để tạo ra các âm không có sẵn trong bảng âm tiết tiếng Nhật truyền thống, đặc biệt là cho các từ mượn, nhằm tái tạo gần đúng phát âm gốc.',
    category: 'advanced', jlpt: 'N2',
    examples: [
      { jp: 'ボリューム', reading: 'boryūmu', meaning: 'volume (thay vì ヴォリューム, vì /v/ khó phát âm)' },
      { jp: 'ウォッカ', reading: 'wokka', meaning: 'vodka (thay vì ヴォッカ)' },
      { jp: 'バイオリン', reading: 'baiorin', meaning: 'violin (phát âm /b/)' },
      { jp: 'ヴァイオリン', reading: 'vaiorin', meaning: 'violin (cố gắng phát âm /v/, nhưng ít dùng)' },
    ],
    note: 'Usage: Dùng để biểu thị các âm không có trong Hiragana, như /ti/, /di/, /tu/, /du/, /f/, /v/, /w/, /sh/, /j/, /ch/ khi kết hợp với nguyên âm /e/, và các âm khác. | Construction: Ký tự Katakana (thường là hàng イ, ウ, エ) + ア/イ/ウ/エ/オ (nhỏ)\nVí dụ: ティ (ti), ディ (di), トゥ (tu), ドゥ (du), ファ (fa), フィ (fi), フェ (fe), フォ (fo), ヴァ (va), ヴィ (vi), ヴ (vu), ヴェ (ve), ヴォ (vo), ウィ (wi), ウェ (we), ウォ (wo), チェ (che), ジェ (je), シェ (she)',
  },
];

export const GRAMMAR_IMPORT_BATCH2_N1: GrammarEntry[] = [
  {
    id: 'gimp2-n1-001',
    pattern: 'Conjugation rules (活用規則)',
    meaning: 'Quy tắc chia động từ/tính từ',
    category: 'advanced', jlpt: 'N1',
    note: 'Usage: Các quy tắc để thay đổi hình thái của động từ, tính từ để phù hợp với thì, thể, ý nghĩa. | Construction: Không được đề cập cụ thể trong đoạn văn.',
  },
  {
    id: 'gimp2-n1-002',
    pattern: 'Particles (助詞)',
    meaning: 'Trợ từ',
    category: 'advanced', jlpt: 'N1',
    note: 'Usage: Dùng để chỉ rõ chức năng ngữ pháp của từ đứng trước nó trong câu, thể hiện mối quan hệ giữa các từ. | Construction: Không được đề cập cụ thể trong đoạn văn.',
  },
  {
    id: 'gimp2-n1-003',
    pattern: 'Đại từ nhân xưng "tôi"',
    meaning: 'Tôi',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: '私の名前はキムです。', reading: 'わたしのなまえはキムです。', meaning: 'Tên tôi là Kim.' },
      { jp: '僕の名前はキムです。', reading: 'ぼくのなまえはキムです。', meaning: 'Tên tôi là Kim.' },
      { jp: '俺の名前はボブだ。', reading: 'おれのなまえはボブだ。', meaning: 'Tên tao là Bob.' },
      { jp: 'あたしの名前はアリス。', reading: 'あたしのなまえはアリス。', meaning: 'Tên tớ là Alice.' },
    ],
    note: 'Usage: Các cách khác nhau để nói "tôi" trong tiếng Nhật, phụ thuộc vào giới tính, mức độ lịch sự và ngữ cảnh xã hội. | Construction: Các đại từ nhân xưng',
  },
  {
    id: 'gimp2-n1-004',
    pattern: 'Đại từ nhân xưng "bạn"',
    meaning: 'Bạn, anh, chị, mày',
    category: 'advanced', jlpt: 'N1',
    note: 'Usage: Các cách khác nhau để nói "bạn" trong tiếng Nhật, thường nên tránh dùng trực tiếp. | Construction: Các đại từ nhân xưng',
  },
  {
    id: 'gimp2-n1-005',
    pattern: 'Cách dùng chức danh để gọi người khác',
    meaning: 'Giám đốc, Trưởng phòng, Giáo viên/Bác sĩ',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: '田中先生', reading: 'たなかせんせい', meaning: 'Thầy/Cô Tanaka' },
    ],
    note: 'Usage: Dùng chức danh để gọi người khác, thường kèm theo họ (ví dụ: 田中先生). 「先生」 dùng cho người có kiến thức và chuyên môn đáng kể (giáo viên, bác sĩ). | Construction: (Họ) + Chức danh',
  },
  {
    id: 'gimp2-n1-006',
    pattern: '活用規則 (Quy tắc chia động từ/tính từ)',
    meaning: 'Quy tắc biến đổi hình thái của động từ, tính từ',
    category: 'advanced', jlpt: 'N1',
    note: 'Usage: Áp dụng để thay đổi dạng của động từ, tính từ tùy theo thì, thể, ý nghĩa (ví dụ: quá khứ, phủ định, khả năng, mệnh lệnh, v.v.). | Construction: Không có cấu tạo cụ thể, là một tập hợp các quy tắc.',
  },
  {
    id: 'gimp2-n1-007',
    pattern: '助詞 (Trợ từ)',
    meaning: 'Trợ từ',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: '私は学生です。', reading: 'Watashi wa gakusei desu.', meaning: 'Tôi là học sinh.' },
      { jp: '本を読みます。', reading: 'Hon o yomimasu.', meaning: 'Đọc sách.' },
      { jp: '学校へ行きます。', reading: 'Gakkō e ikimasu.', meaning: 'Đi đến trường.' },
    ],
    note: 'Usage: Các từ nhỏ đứng sau danh từ, động từ, tính từ để chỉ rõ chức năng ngữ pháp của từ đó trong câu (chủ ngữ, tân ngữ, địa điểm, phương tiện, v.v.) hoặc bổ sung ý nghĩa. | Construction: Danh từ/Động từ/Tính từ + Trợ từ (ví dụ: は, が, を, に, で, と, へ, から, まで, よ, ね, か)',
  },
  {
    id: 'gimp2-n1-008',
    pattern: 'Noun の Noun',
    meaning: 'của, thuộc về, bổ nghĩa cho danh từ',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: 'ボブの本。', reading: 'ボブのほん。', meaning: 'Sách của Bob.' },
      { jp: '本のボブ。', reading: 'ほんのボブ。', meaning: 'Bob của cuốn sách.' },
      { jp: 'アメリカの⼤学の学⽣だ。', reading: 'アメリカのだいがくのがくせいだ。', meaning: 'Bob là sinh viên của trường đại học của Mỹ.' },
    ],
    note: 'Usage: Dùng để nối hai danh từ, trong đó danh từ thứ nhất bổ nghĩa cho danh từ thứ hai. Có thể biểu thị sự sở hữu hoặc mối quan hệ khác. | Construction: Danh từ 1 + の + Danh từ 2',
  },
  {
    id: 'gimp2-n1-009',
    pattern: 'Noun の',
    meaning: 'của [danh từ bị lược bỏ], cái của [danh từ]',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: 'そのシャツは誰の？', reading: 'そのシャツはだれの？', meaning: 'Cái áo đó là của ai?' },
      { jp: 'ボブのだ。', reading: 'ボブのだ。', meaning: 'Đó là của Bob.' },
    ],
    note: 'Usage: Thay thế một danh từ đã được nhắc đến hoặc rõ ràng trong ngữ cảnh, tránh lặp từ. Hạt の lúc này đóng vai trò như một danh từ. | Construction: Danh từ + の',
  },
  {
    id: 'gimp2-n1-010',
    pattern: 'Verb/I-Adjective の',
    meaning: 'việc/sự việc/cái mà...',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: '⽩いのは、かわいい。', reading: 'しろいのは、かわいい。', meaning: 'Cái màu trắng thì dễ thương.' },
      { jp: '授業に⾏くのを忘れた。', reading: 'じゅぎょうにいくのをわすれた。', meaning: 'Quên việc đi học.' },
    ],
    note: 'Usage: Biến một động từ hoặc tính từ thành một cụm danh từ (danh từ hóa), cho phép nó được đối xử như một danh từ thông thường. | Construction: Động từ (thể thường) + の; Tính từ -i (thể thường) + の',
  },
  {
    id: 'gimp2-n1-011',
    pattern: 'Na-Adjective な の',
    meaning: 'cái mà [tính từ -na], người mà [tính từ -na]',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: '静かなのが、アリスの部屋だ。', reading: 'しずかなのが、アリスのへやだ。', meaning: 'Cái yên tĩnh là phòng của Alice.' },
    ],
    note: 'Usage: Dùng để danh từ hóa một tính từ -na. Cần thêm 「な」 trước 「の」. | Construction: Tính từ -na (thân) + な + の',
  },
  {
    id: 'gimp2-n1-012',
    pattern: '〜の',
    meaning: 'Thực ra là..., Chuyện là... (giải thích, giọng điệu mềm mại/nữ tính)',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: '今は忙しいの。', reading: 'いまはいそがしいの。', meaning: 'Chuyện là bây giờ tôi bận.' },
      { jp: 'どこに⾏くの？', reading: 'どこにいくの？', meaning: 'Bạn đi đâu vậy? (Tìm kiếm lời giải thích)' },
    ],
    note: 'Usage: Đặt ở cuối câu để truyền đạt một giọng điệu giải thích, thường ngụ ý lý do hoặc thông tin nền. Thường mang sắc thái mềm mại, nữ tính. | Construction: Động từ (thể thường) + の; Tính từ -i (thể thường) + の; Tính từ -na (thân) + な + の; Danh từ + な + の',
  },
  {
    id: 'gimp2-n1-013',
    pattern: '〜のだ',
    meaning: 'Thực ra là..., Chuyện là... (giải thích, giọng điệu trang trọng/nam tính)',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: '今は忙しいのだ。', reading: 'いまはいそがしいのだ。', meaning: 'Chuyện là bây giờ tôi bận.' },
    ],
    note: 'Usage: Tương tự như 〜の nhưng thêm 「だ」, làm cho câu trở nên trang trọng hoặc nam tính hơn. | Construction: Động từ (thể thường) + のだ; Tính từ -i (thể thường) + のだ; Tính từ -na (thân) + な + のだ; Danh từ + な + のだ',
  },
  {
    id: 'gimp2-n1-014',
    pattern: 'Noun/Na-Adjective なのだ',
    meaning: 'Là [danh từ/tính từ -na] (với giọng điệu giải thích)',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: 'ジムなのだ。', reading: 'ジムなのだ。', meaning: 'Đó là Jim (với giọng điệu giải thích).' },
    ],
    note: 'Usage: Dùng với danh từ và tính từ -na để truyền đạt giọng điệu giải thích, yêu cầu thêm 「な」 trước 「のだ」 để phân biệt với 「の」 nghĩa sở hữu. | Construction: Danh từ + な + のだ; Tính từ -na (thân) + な + のだ',
  },
  {
    id: 'gimp2-n1-015',
    pattern: '〜んだ / 〜なんだ',
    meaning: 'Thực ra là..., Chuyện là... (giải thích, dạng rút gọn thân mật)',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: '授業に⾏くんだ。', reading: 'じゅぎょうにいくんだ。', meaning: 'Chuyện là tôi đi học.' },
      { jp: '今は、ないんだ。', reading: 'いまは、ないんだ。', meaning: 'Bây giờ thì không có (lớp).' },
      { jp: '学⽣なんだ', reading: 'がくせいなんだ', meaning: 'Chuyện là tôi là học sinh.' },
      { jp: '飲むんだ', reading: 'のむんだ', meaning: 'Chuyện là tôi uống.' },
    ],
    note: 'Usage: Dạng rút gọn thân mật của 〜のだ / 〜なのだ, dùng để truyền đạt giọng điệu giải thích. Có thể kết hợp với các dạng chia của động từ, tính từ, danh từ. | Construction: Động từ (thể thường) + んだ; Tính từ -i (thể thường) + んだ; Danh từ + なんだ; Tính từ -na (thân) + なんだ (áp dụng cho các dạng khẳng định, phủ định, quá khứ, quá khứ phủ định của từ đứng trước)',
  },
  {
    id: 'gimp2-n1-016',
    pattern: '〜んじゃない？ / 〜なんじゃない？',
    meaning: 'Không phải là... sao?, Chẳng phải là... sao? (tìm kiếm lời giải thích/xác nhận)',
    category: 'advanced', jlpt: 'N1',
    examples: [
      { jp: '今、授業があるんじゃない？', reading: 'いま、じゅぎょうがあるんじゃない？', meaning: 'Chẳng phải bây giờ có lớp sao?' },
      { jp: '遅いんじゃない？', reading: 'おそいんじゃない？', meaning: 'Chẳng phải là muộn rồi sao?' },
    ],
    note: 'Usage: Dùng trong câu hỏi để tìm kiếm lời giải thích hoặc xác nhận, thường ngụ ý người nói có một sự kỳ vọng hoặc giả định. | Construction: Động từ (thể thường) + んじゃない？; Tính từ -i (thể thường) + んじゃない？; Danh từ + なんじゃない？; Tính từ -na (thân) + なんじゃない？ (áp dụng cho cả dạng phủ định của từ đứng trước)',
  },
];

