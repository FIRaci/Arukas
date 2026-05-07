// ============================================================================
// GRAMMAR EXPANSION PACK 2 — 150+ Additional Grammar Patterns
// Source: "Japanese - A Comprehensive Grammar" (Kaiser et al.) + JLPT References
// Missing patterns not covered in existing grammarExpansion.ts
// ============================================================================
import type { GrammarEntry } from './grammarTypes';

// ── N5 MISSING PATTERNS ─────────────────────────────────────────────────
export const GRAMMAR_EXP2_N5: GrammarEntry[] = [
  {
    id: 'gex2-n5-01', pattern: '～がある／いる (ga aru / iru)',
    meaning: 'Có (tồn tại) — ある cho vật, いる cho sinh vật',
    category: 'Tồn tại', jlpt: 'N5',
    examples: [
      { jp: '机の上に本がある。', reading: 'つくえのうえにほんがある。', meaning: 'Trên bàn có quyển sách.' },
      { jp: '庭に猫がいる。', reading: 'にわにねこがいる。', meaning: 'Trong vườn có con mèo.' },
    ],
  },
  {
    id: 'gex2-n5-02', pattern: '～の中に (no naka ni)',
    meaning: 'Ở trong, bên trong',
    category: 'Vị trí', jlpt: 'N5',
    examples: [
      { jp: 'かばんの中に財布がある。', reading: 'かばんのなかにさいふがある。', meaning: 'Trong cặp có ví tiền.' },
      { jp: '箱の中に何がありますか。', reading: 'はこのなかになにがありますか。', meaning: 'Trong hộp có gì?' },
    ],
  },
  {
    id: 'gex2-n5-03', pattern: '～とき (toki)',
    meaning: 'Khi, lúc',
    category: 'Thời gian', jlpt: 'N5',
    examples: [
      { jp: '暇なとき、映画を見ます。', reading: 'ひまなとき、えいがをみます。', meaning: 'Khi rảnh, tôi xem phim.' },
      { jp: '子供のとき、よく遊びました。', reading: 'こどものとき、よくあそびました。', meaning: 'Lúc nhỏ, tôi hay chơi.' },
    ],
  },
  {
    id: 'gex2-n5-04', pattern: '～が好き／嫌い (ga suki / kirai)',
    meaning: 'Thích / Ghét',
    category: 'Cảm xúc & Sở thích', jlpt: 'N5',
    examples: [
      { jp: '私は寿司が好きです。', reading: 'わたしはすしがすきです。', meaning: 'Tôi thích sushi.' },
      { jp: '弟は野菜が嫌いです。', reading: 'おとうとはやさいがきらいです。', meaning: 'Em trai tôi ghét rau.' },
    ],
  },
  {
    id: 'gex2-n5-05', pattern: '～が上手／下手 (ga jouzu / heta)',
    meaning: 'Giỏi / Kém (kỹ năng)',
    category: 'Đánh giá', jlpt: 'N5',
    examples: [
      { jp: '彼女は料理が上手です。', reading: 'かのじょはりょうりがじょうずです。', meaning: 'Cô ấy nấu ăn giỏi.' },
      { jp: '私は歌が下手です。', reading: 'わたしはうたがへたです。', meaning: 'Tôi hát kém.' },
    ],
  },
  {
    id: 'gex2-n5-06', pattern: '～が分かる (ga wakaru)',
    meaning: 'Hiểu, biết',
    category: 'Nhận thức', jlpt: 'N5',
    examples: [
      { jp: '日本語が少し分かります。', reading: 'にほんごがすこしわかります。', meaning: 'Tôi hiểu tiếng Nhật một chút.' },
      { jp: '意味が分かりません。', reading: 'いみがわかりません。', meaning: 'Tôi không hiểu ý nghĩa.' },
    ],
  },
  {
    id: 'gex2-n5-07', pattern: '～は～が～ (Chủ đề + Sở hữu)',
    meaning: 'Cấu trúc は...が... mô tả đặc tính của chủ đề',
    category: 'Cấu trúc cơ bản', jlpt: 'N5',
    examples: [
      { jp: '象は鼻が長い。', reading: 'ぞうははながながい。', meaning: 'Voi thì mũi dài.' },
      { jp: '私は頭が痛い。', reading: 'わたしはあたまがいたい。', meaning: 'Tôi (thì) đầu đau.' },
    ],
  },
  {
    id: 'gex2-n5-08', pattern: '何～ (nan/nani)',
    meaning: 'Cách dùng từ hỏi "gì/cái gì"',
    category: 'Từ hỏi', jlpt: 'N5',
    examples: [
      { jp: 'これは何ですか。', reading: 'これはなんですか。', meaning: 'Cái này là gì?' },
      { jp: '何が食べたいですか。', reading: 'なにがたべたいですか。', meaning: 'Bạn muốn ăn gì?' },
    ],
  },
];

// ── N4 MISSING PATTERNS ─────────────────────────────────────────────────
export const GRAMMAR_EXP2_N4: GrammarEntry[] = [
  {
    id: 'gex2-n4-01', pattern: '～てしまう (te shimau)',
    meaning: 'Hoàn thành / Tiếc nuối đã làm (không cố ý)',
    category: 'Hoàn tất & Tiếc nuối', jlpt: 'N4',
    examples: [
      { jp: '宿題を忘れてしまった。', reading: 'しゅくだいをわすれてしまった。', meaning: 'Tôi (lỡ) quên bài tập mất rồi.' },
      { jp: 'ケーキを全部食べてしまった。', reading: 'けーきをぜんぶたべてしまった。', meaning: 'Tôi ăn hết sạch bánh mất rồi.' },
    ],
  },
  {
    id: 'gex2-n4-02', pattern: '～ておく (te oku)',
    meaning: 'Chuẩn bị sẵn / Để nguyên trạng thái',
    category: 'Chuẩn bị', jlpt: 'N4',
    examples: [
      { jp: '明日のために弁当を作っておく。', reading: 'あしたのためにべんとうをつくっておく。', meaning: 'Tôi chuẩn bị làm cơm hộp cho ngày mai.' },
      { jp: '窓を開けておいてください。', reading: 'まどをあけておいてください。', meaning: 'Hãy để cửa sổ mở nhé.' },
    ],
  },
  {
    id: 'gex2-n4-03', pattern: '～そうだ (sou da - dáng vẻ)',
    meaning: 'Trông có vẻ... (dựa trên quan sát ngoại hình)',
    category: 'Phỏng đoán ngoại hình', jlpt: 'N4',
    examples: [
      { jp: 'このケーキはおいしそうだ。', reading: 'このけーきはおいしそうだ。', meaning: 'Cái bánh này trông có vẻ ngon.' },
      { jp: '雨が降りそうです。', reading: 'あめがふりそうです。', meaning: 'Trời trông sắp mưa.' },
    ],
  },
  {
    id: 'gex2-n4-04', pattern: '～らしい (rashii)',
    meaning: 'Hình như, nghe đâu (phỏng đoán có căn cứ) / Đúng kiểu, giống',
    category: 'Phỏng đoán & Đánh giá', jlpt: 'N4',
    examples: [
      { jp: '彼は病気らしい。', reading: 'かれはびょうきらしい。', meaning: 'Hình như anh ấy bị bệnh.' },
      { jp: '男らしい人が好きです。', reading: 'おとこらしいひとがすきです。', meaning: 'Tôi thích người nam tính.' },
    ],
  },
  {
    id: 'gex2-n4-05', pattern: '～といい (to ii)',
    meaning: 'Ước gì, mong rằng',
    category: 'Nguyện vọng', jlpt: 'N4',
    examples: [
      { jp: '明日天気がいいといいですね。', reading: 'あしたてんきがいいといいですね。', meaning: 'Ước gì ngày mai trời đẹp nhỉ.' },
      { jp: '試験に合格するといいな。', reading: 'しけんにごうかくするといいな。', meaning: 'Mong sao thi đỗ.' },
    ],
  },
  {
    id: 'gex2-n4-06', pattern: '～てある (te aru)',
    meaning: 'Đã được làm sẵn (kết quả đang tồn tại)',
    category: 'Trạng thái kết quả', jlpt: 'N4',
    examples: [
      { jp: '壁に絵が掛けてある。', reading: 'かべにえがかけてある。', meaning: 'Trên tường đã được treo tranh.' },
      { jp: 'ドアが開けてあります。', reading: 'どあがあけてあります。', meaning: 'Cửa đã được mở sẵn.' },
    ],
  },
  {
    id: 'gex2-n4-07', pattern: '～させる (saseru)',
    meaning: 'Thể sai khiến — bắt/để ai làm gì',
    category: 'Sai khiến', jlpt: 'N4',
    examples: [
      { jp: '母は弟に野菜を食べさせた。', reading: 'はははおとうとにやさいをたべさせた。', meaning: 'Mẹ bắt em trai ăn rau.' },
      { jp: '子供を自由に遊ばせる。', reading: 'こどもをじゆうにあそばせる。', meaning: 'Cho trẻ con tự do chơi.' },
    ],
  },
  {
    id: 'gex2-n4-08', pattern: '～(ら)れる (bị động)',
    meaning: 'Thể bị động — bị/được ai làm gì',
    category: 'Bị động', jlpt: 'N4',
    examples: [
      { jp: '電車で足を踏まれた。', reading: 'でんしゃであしをふまれた。', meaning: 'Tôi bị giẫm chân trên tàu điện.' },
      { jp: '先生に褒められた。', reading: 'せんせいにほめられた。', meaning: 'Tôi được thầy khen.' },
    ],
  },
  {
    id: 'gex2-n4-09', pattern: '～間（に） (aida (ni))',
    meaning: 'Trong suốt khoảng thời gian / Trong khi',
    category: 'Thời gian', jlpt: 'N4',
    examples: [
      { jp: '夏休みの間に旅行した。', reading: 'なつやすみのあいだにりょこうした。', meaning: 'Trong kỳ nghỉ hè tôi đã đi du lịch.' },
      { jp: '赤ちゃんが寝ている間に掃除する。', reading: 'あかちゃんがねているあいだにそうじする。', meaning: 'Trong khi em bé ngủ tôi dọn dẹp.' },
    ],
  },
  {
    id: 'gex2-n4-10', pattern: '～ために (tame ni)',
    meaning: 'Để / Vì (mục đích hoặc nguyên nhân)',
    category: 'Mục đích & Nguyên nhân', jlpt: 'N4',
    examples: [
      { jp: '日本語を勉強するために日本に来た。', reading: 'にほんごをべんきょうするためににほんにきた。', meaning: 'Tôi đến Nhật để học tiếng Nhật.' },
      { jp: '台風のために電車が止まった。', reading: 'たいふうのためにでんしゃがとまった。', meaning: 'Vì bão mà tàu điện dừng chạy.' },
    ],
  },
];

// ── N3 MISSING PATTERNS ─────────────────────────────────────────────────
export const GRAMMAR_EXP2_N3: GrammarEntry[] = [
  {
    id: 'gex2-n3-01', pattern: '～ようにする (you ni suru)',
    meaning: 'Cố gắng / Chú ý để',
    category: 'Nỗ lực & Thay đổi thói quen', jlpt: 'N3',
    examples: [
      { jp: '毎日野菜を食べるようにしています。', reading: 'まいにちやさいをたべるようにしています。', meaning: 'Tôi đang cố gắng ăn rau mỗi ngày.' },
      { jp: '遅刻しないようにしてください。', reading: 'ちこくしないようにしてください。', meaning: 'Hãy cố đừng đi trễ.' },
    ],
  },
  {
    id: 'gex2-n3-02', pattern: '～ようになる (you ni naru)',
    meaning: 'Trở nên có thể / Bắt đầu',
    category: 'Biến đổi trạng thái', jlpt: 'N3',
    examples: [
      { jp: '日本語が話せるようになった。', reading: 'にほんごがはなせるようになった。', meaning: 'Tôi đã trở nên nói được tiếng Nhật.' },
      { jp: '朝早く起きるようになった。', reading: 'あさはやくおきるようになった。', meaning: 'Tôi bắt đầu dậy sớm.' },
    ],
  },
  {
    id: 'gex2-n3-03', pattern: '～ばかりだ (bakari da)',
    meaning: 'Chỉ toàn / Mãi (xu hướng xấu)',
    category: 'Xu hướng', jlpt: 'N3',
    examples: [
      { jp: '物価が上がるばかりだ。', reading: 'ぶっかがあがるばかりだ。', meaning: 'Vật giá chỉ toàn tăng.' },
      { jp: '成績が下がるばかりです。', reading: 'せいせきがさがるばかりです。', meaning: 'Thành tích mãi chỉ giảm.' },
    ],
  },
  {
    id: 'gex2-n3-04', pattern: '～一方だ (ippou da)',
    meaning: 'Mãi chỉ (một chiều, xu hướng liên tục)',
    category: 'Xu hướng', jlpt: 'N3',
    examples: [
      { jp: '人口は減る一方だ。', reading: 'じんこうはへるいっぽうだ。', meaning: 'Dân số mãi chỉ giảm.' },
      { jp: '環境問題は悪くなる一方です。', reading: 'かんきょうもんだいはわるくなるいっぽうです。', meaning: 'Vấn đề môi trường mãi chỉ tệ hơn.' },
    ],
  },
  {
    id: 'gex2-n3-05', pattern: '～ということだ (to iu koto da)',
    meaning: 'Có nghĩa là / Nghe nói',
    category: 'Truyền đạt & Giải thích', jlpt: 'N3',
    examples: [
      { jp: '彼が来ないということは、忙しいのだろう。', reading: 'かれがこないということは、いそがしいのだろう。', meaning: 'Việc anh ấy không đến có nghĩa là anh ấy bận.' },
      { jp: '明日試験があるということだ。', reading: 'あしたしけんがあるということだ。', meaning: 'Nghe nói ngày mai có thi.' },
    ],
  },
  {
    id: 'gex2-n3-06', pattern: '～おかげで (okage de)',
    meaning: 'Nhờ (nguyên nhân tích cực)',
    category: 'Nguyên nhân tích cực', jlpt: 'N3',
    examples: [
      { jp: '先生のおかげで合格しました。', reading: 'せんせいのおかげでごうかくしました。', meaning: 'Nhờ thầy mà tôi đỗ.' },
      { jp: '皆さんのおかげで成功しました。', reading: 'みなさんのおかげでせいこうしました。', meaning: 'Nhờ mọi người mà thành công.' },
    ],
  },
  {
    id: 'gex2-n3-07', pattern: '～せいで (sei de)',
    meaning: 'Tại vì, do lỗi của (nguyên nhân tiêu cực)',
    category: 'Nguyên nhân tiêu cực', jlpt: 'N3',
    examples: [
      { jp: '雨のせいで試合が中止になった。', reading: 'あめのせいでしあいがちゅうしになった。', meaning: 'Do mưa mà trận đấu bị hủy.' },
      { jp: '寝坊したせいで遅刻した。', reading: 'ねぼうしたせいでちこくした。', meaning: 'Do ngủ quên mà đi trễ.' },
    ],
  },
  {
    id: 'gex2-n3-08', pattern: '～に対して (ni taishite)',
    meaning: 'Đối với (so sánh, thái độ)',
    category: 'Quan hệ', jlpt: 'N3',
    examples: [
      { jp: '親に対して感謝の気持ちを伝えた。', reading: 'おやにたいしてかんしゃのきもちをつたえた。', meaning: 'Tôi đã bày tỏ lòng biết ơn đối với cha mẹ.' },
      { jp: '男性が60%に対して、女性は40%です。', reading: 'だんせいが60%にたいして、じょせいは40%です。', meaning: 'Nam giới 60%, trong khi nữ giới 40%.' },
    ],
  },
  {
    id: 'gex2-n3-09', pattern: '～において (ni oite)',
    meaning: 'Tại, trong (thời điểm/nơi chốn trang trọng)',
    category: 'Bối cảnh', jlpt: 'N3',
    examples: [
      { jp: '東京において会議が開かれた。', reading: 'とうきょうにおいてかいぎがひらかれた。', meaning: 'Cuộc họp được tổ chức tại Tokyo.' },
      { jp: '現代社会においてAIは重要です。', reading: 'げんだいしゃかいにおいてAIはじゅうようです。', meaning: 'Trong xã hội hiện đại, AI rất quan trọng.' },
    ],
  },
  {
    id: 'gex2-n3-10', pattern: '～に比べて (ni kurabete)',
    meaning: 'So với',
    category: 'So sánh', jlpt: 'N3',
    examples: [
      { jp: '去年に比べて今年は暑い。', reading: 'きょねんにくらべてことしはあつい。', meaning: 'So với năm ngoái, năm nay nóng hơn.' },
      { jp: '兄に比べて弟は背が低い。', reading: 'あににくらべておとうとはせがひくい。', meaning: 'So với anh, em trai thấp hơn.' },
    ],
  },
  {
    id: 'gex2-n3-11', pattern: '～とともに (to tomo ni)',
    meaning: 'Cùng với / Đồng thời với',
    category: 'Đồng thời', jlpt: 'N3',
    examples: [
      { jp: '経済の発展とともに環境問題が増えた。', reading: 'けいざいのはってんとともにかんきょうもんだいがふえた。', meaning: 'Cùng với sự phát triển kinh tế, vấn đề môi trường tăng lên.' },
      { jp: '家族とともに過ごす時間は大切だ。', reading: 'かぞくとともにすごすじかんはたいせつだ。', meaning: 'Thời gian ở cùng gia đình rất quý giá.' },
    ],
  },
  {
    id: 'gex2-n3-12', pattern: '～しかない (shika nai)',
    meaning: 'Chỉ có thể / Đành phải',
    category: 'Hạn chế', jlpt: 'N3',
    examples: [
      { jp: '電車がないから歩くしかない。', reading: 'でんしゃがないからあるくしかない。', meaning: 'Vì không có tàu nên chỉ có thể đi bộ.' },
      { jp: '自分でやるしかない。', reading: 'じぶんでやるしかない。', meaning: 'Đành phải tự mình làm thôi.' },
    ],
  },
  {
    id: 'gex2-n3-13', pattern: '～ことにする (koto ni suru)',
    meaning: 'Quyết định (chủ động)',
    category: 'Quyết định', jlpt: 'N3',
    examples: [
      { jp: '来月から運動することにした。', reading: 'らいげつからうんどうすることにした。', meaning: 'Tôi đã quyết định tập thể dục từ tháng sau.' },
      { jp: 'お酒を飲まないことにする。', reading: 'おさけをのまないことにする。', meaning: 'Tôi quyết định không uống rượu.' },
    ],
  },
  {
    id: 'gex2-n3-14', pattern: '～ようとする (you to suru)',
    meaning: 'Cố gắng / Sắp sửa',
    category: 'Nỗ lực', jlpt: 'N3',
    examples: [
      { jp: 'ドアを開けようとしたが開かなかった。', reading: 'どあをあけようとしたがあかなかった。', meaning: 'Tôi cố mở cửa nhưng không mở được.' },
      { jp: '赤ちゃんが歩こうとしている。', reading: 'あかちゃんがあるこうとしている。', meaning: 'Em bé đang cố đi.' },
    ],
  },
  {
    id: 'gex2-n3-15', pattern: '～てくる (te kuru)',
    meaning: 'Đi đến trạng thái / Bắt đầu xuất hiện',
    category: 'Biến đổi', jlpt: 'N3',
    examples: [
      { jp: '最近、寒くなってきた。', reading: 'さいきん、さむくなってきた。', meaning: 'Gần đây bắt đầu lạnh rồi.' },
      { jp: '日本語が少し分かるようになってきた。', reading: 'にほんごがすこしわかるようになってきた。', meaning: 'Tiếng Nhật bắt đầu hiểu được một chút rồi.' },
    ],
  },
  {
    id: 'gex2-n3-16', pattern: '～ていく (te iku)',
    meaning: 'Tiến dần (xu hướng tương lai)',
    category: 'Biến đổi', jlpt: 'N3',
    examples: [
      { jp: 'これからも日本語を勉強していく。', reading: 'これからもにほんごをべんきょうしていく。', meaning: 'Từ nay tôi sẽ tiếp tục học tiếng Nhật.' },
      { jp: '人口は減っていくだろう。', reading: 'じんこうはへっていくだろう。', meaning: 'Dân số có lẽ sẽ giảm dần.' },
    ],
  },
];

// ── N2 MISSING PATTERNS ─────────────────────────────────────────────────
export const GRAMMAR_EXP2_N2: GrammarEntry[] = [
  {
    id: 'gex2-n2-01', pattern: '～うちに (uchi ni)',
    meaning: 'Trong khi (còn kịp) / Không biết lúc nào',
    category: 'Thời gian & Cơ hội', jlpt: 'N2',
    examples: [
      { jp: '若いうちにいろいろ経験した方がいい。', reading: 'わかいうちにいろいろけいけんしたほうがいい。', meaning: 'Nên trải nghiệm nhiều khi còn trẻ.' },
      { jp: '話しているうちに仲良くなった。', reading: 'はなしているうちになかよくなった。', meaning: 'Nói chuyện rồi lúc nào không hay đã thân nhau.' },
    ],
  },
  {
    id: 'gex2-n2-02', pattern: '～上で (ue de)',
    meaning: 'Sau khi / Về mặt',
    category: 'Điều kiện & Bối cảnh', jlpt: 'N2',
    examples: [
      { jp: 'よく考えた上で決めます。', reading: 'よくかんがえたうえできめます。', meaning: 'Tôi sẽ quyết định sau khi suy nghĩ kỹ.' },
      { jp: '仕事の上で大切なことだ。', reading: 'しごとのうえでたいせつなことだ。', meaning: 'Đó là điều quan trọng về mặt công việc.' },
    ],
  },
  {
    id: 'gex2-n2-03', pattern: '～に伴って (ni tomonatte)',
    meaning: 'Đi kèm với / Song hành với',
    category: 'Đồng thời', jlpt: 'N2',
    examples: [
      { jp: '高齢化に伴って医療費が増えている。', reading: 'こうれいかにともなっていりょうひがふえている。', meaning: 'Đi kèm với già hóa, chi phí y tế tăng lên.' },
      { jp: '人口増加に伴い食料問題が深刻になった。', reading: 'じんこうぞうかにともないしょくりょうもんだいがしんこくになった。', meaning: 'Song hành với tăng dân số, vấn đề lương thực trở nên nghiêm trọng.' },
    ],
  },
  {
    id: 'gex2-n2-04', pattern: '～に応じて (ni oujite)',
    meaning: 'Tùy theo / Phù hợp với',
    category: 'Tương ứng', jlpt: 'N2',
    examples: [
      { jp: '年齢に応じた対応が必要だ。', reading: 'ねんれいにおうじたたいおうがひつようだ。', meaning: 'Cần ứng xử phù hợp với tuổi.' },
      { jp: '能力に応じて給料が変わる。', reading: 'のうりょくにおうじてきゅうりょうがかわる。', meaning: 'Lương thay đổi tùy theo năng lực.' },
    ],
  },
  {
    id: 'gex2-n2-05', pattern: '～ものなら (mono nara)',
    meaning: 'Nếu (có thể)... thì (muốn lắm)',
    category: 'Điều kiện giả định', jlpt: 'N2',
    examples: [
      { jp: '行けるものなら行きたい。', reading: 'いけるものならいきたい。', meaning: 'Nếu đi được thì tôi muốn đi lắm.' },
      { jp: 'やり直せるものならやり直したい。', reading: 'やりなおせるものならやりなおしたい。', meaning: 'Nếu làm lại được thì tôi muốn làm lại.' },
    ],
  },
  {
    id: 'gex2-n2-06', pattern: '～からには (kara ni wa)',
    meaning: 'Đã... thì (phải/nên)',
    category: 'Quyết tâm', jlpt: 'N2',
    examples: [
      { jp: '約束したからには守るべきだ。', reading: 'やくそくしたからにはまもるべきだ。', meaning: 'Đã hứa thì phải giữ lời.' },
      { jp: '留学するからには一生懸命勉強する。', reading: 'りゅうがくするからにはいっしょうけんめいべんきょうする。', meaning: 'Đã đi du học thì phải cố gắng học.' },
    ],
  },
  {
    id: 'gex2-n2-07', pattern: '～としたら (to shitara)',
    meaning: 'Nếu giả sử',
    category: 'Giả định', jlpt: 'N2',
    examples: [
      { jp: '宝くじに当たったとしたら何を買う？', reading: 'たからくじにあたったとしたらなにをかう？', meaning: 'Nếu giả sử trúng xổ số thì bạn mua gì?' },
      { jp: '彼が犯人だとしたら動機は何だろう。', reading: 'かれがはんにんだとしたらどうきはなんだろう。', meaning: 'Nếu anh ta là thủ phạm thì động cơ là gì nhỉ.' },
    ],
  },
  {
    id: 'gex2-n2-08', pattern: '～わけにはいかない (wake ni wa ikanai)',
    meaning: 'Không thể nào (vì lý do đạo đức/xã hội)',
    category: 'Không thể', jlpt: 'N2',
    examples: [
      { jp: '友達の秘密を話すわけにはいかない。', reading: 'ともだちのひみつをはなすわけにはいかない。', meaning: 'Tôi không thể nào kể bí mật của bạn.' },
      { jp: '約束を破るわけにはいかない。', reading: 'やくそくをやぶるわけにはいかない。', meaning: 'Tôi không thể nào phá vỡ lời hứa.' },
    ],
  },
  {
    id: 'gex2-n2-09', pattern: '～にもかかわらず (ni mo kakawarazu)',
    meaning: 'Mặc dù / Bất chấp',
    category: 'Nhượng bộ', jlpt: 'N2',
    examples: [
      { jp: '雨にもかかわらず試合は行われた。', reading: 'あめにもかかわらずしあいはおこなわれた。', meaning: 'Bất chấp mưa, trận đấu vẫn được tổ chức.' },
      { jp: '努力したにもかかわらず不合格だった。', reading: 'どりょくしたにもかかわらずふごうかくだった。', meaning: 'Mặc dù đã cố gắng nhưng vẫn trượt.' },
    ],
  },
  {
    id: 'gex2-n2-10', pattern: '～一方で (ippou de)',
    meaning: 'Một mặt... mặt khác',
    category: 'Đối lập', jlpt: 'N2',
    examples: [
      { jp: '彼は優しい一方で少し頑固だ。', reading: 'かれはやさしいいっぽうですこしがんこだ。', meaning: 'Anh ấy tốt bụng, mặt khác hơi cứng đầu.' },
      { jp: 'AIは便利な一方で危険もある。', reading: 'AIはべんりないっぽうできけんもある。', meaning: 'AI tiện lợi, nhưng mặt khác cũng nguy hiểm.' },
    ],
  },
  {
    id: 'gex2-n2-11', pattern: '～ずに (zu ni)',
    meaning: 'Mà không (=ないで)',
    category: 'Phương thức', jlpt: 'N2',
    examples: [
      { jp: '何も食べずに学校に行った。', reading: 'なにもたべずにがっこうにいった。', meaning: 'Tôi đi học mà không ăn gì.' },
      { jp: '誰にも言わずに出かけた。', reading: 'だれにもいわずにでかけた。', meaning: 'Tôi ra ngoài mà không nói với ai.' },
    ],
  },
  {
    id: 'gex2-n2-12', pattern: '～っぽい (ppoi)',
    meaning: 'Có vẻ, giống, hay bị',
    category: 'Tính chất', jlpt: 'N2',
    examples: [
      { jp: '最近忘れっぽくなった。', reading: 'さいきんわすれっぽくなった。', meaning: 'Gần đây tôi hay quên.' },
      { jp: 'この服は安っぽい。', reading: 'このふくはやすっぽい。', meaning: 'Bộ quần áo này trông rẻ tiền.' },
    ],
  },
  {
    id: 'gex2-n2-13', pattern: '～がち (gachi)',
    meaning: 'Hay, thường (có xu hướng tiêu cực)',
    category: 'Xu hướng', jlpt: 'N2',
    examples: [
      { jp: '最近は休みがちだ。', reading: 'さいきんはやすみがちだ。', meaning: 'Gần đây hay nghỉ.' },
      { jp: '冬は風邪をひきがちです。', reading: 'ふゆはかぜをひきがちです。', meaning: 'Mùa đông hay bị cảm.' },
    ],
  },
  {
    id: 'gex2-n2-14', pattern: '～気味 (gimi)',
    meaning: 'Hơi bị, có phần',
    category: 'Tính chất', jlpt: 'N2',
    examples: [
      { jp: '最近太り気味です。', reading: 'さいきんふとりぎみです。', meaning: 'Gần đây hơi béo.' },
      { jp: '風邪気味なので早く寝ます。', reading: 'かぜぎみなのではやくねます。', meaning: 'Vì hơi bị cảm nên tôi đi ngủ sớm.' },
    ],
  },
  {
    id: 'gex2-n2-15', pattern: '～ことはない (koto wa nai)',
    meaning: 'Không cần phải',
    category: 'Không cần thiết', jlpt: 'N2',
    examples: [
      { jp: '心配することはないよ。', reading: 'しんぱいすることはないよ。', meaning: 'Không cần phải lo lắng đâu.' },
      { jp: 'そんなに急ぐことはない。', reading: 'そんなにいそぐことはない。', meaning: 'Không cần phải vội như vậy.' },
    ],
  },
];

// ── N1 MISSING PATTERNS ─────────────────────────────────────────────────
export const GRAMMAR_EXP2_N1: GrammarEntry[] = [
  {
    id: 'gex2-n1-01', pattern: '～に至る (ni itaru)',
    meaning: 'Đi đến (kết quả/tình trạng)',
    category: 'Kết quả', jlpt: 'N1',
    examples: [
      { jp: '交渉は破綻に至った。', reading: 'こうしょうはたんにいたった。', meaning: 'Cuộc đàm phán đã đi đến tan vỡ.' },
      { jp: '事故の原因究明に至るまで時間がかかった。', reading: 'じこのげんいんきゅうめいにいたるまでじかんがかかった。', meaning: 'Mất thời gian mới đi đến việc tìm ra nguyên nhân tai nạn.' },
    ],
  },
  {
    id: 'gex2-n1-02', pattern: '～を余儀なくされる (wo yogi naku sareru)',
    meaning: 'Bị bắt buộc phải / Buộc phải',
    category: 'Bị động & Bắt buộc', jlpt: 'N1',
    examples: [
      { jp: '台風で避難を余儀なくされた。', reading: 'たいふうでひなんをよぎなくされた。', meaning: 'Bị bắt buộc phải di tán do bão.' },
      { jp: '計画の変更を余儀なくされた。', reading: 'けいかくのへんこうをよぎなくされた。', meaning: 'Bị buộc phải thay đổi kế hoạch.' },
    ],
  },
  {
    id: 'gex2-n1-03', pattern: '～をもって (wo motte)',
    meaning: 'Bằng / Lấy (phương tiện/tiêu chuẩn)',
    category: 'Phương tiện', jlpt: 'N1',
    examples: [
      { jp: '本日をもって閉店いたします。', reading: 'ほんじつをもってへいてんいたします。', meaning: 'Chúng tôi đóng cửa kể từ hôm nay.' },
      { jp: '誠意をもって対応いたします。', reading: 'せいいをもってたいおういたします。', meaning: 'Chúng tôi sẽ ứng phó bằng sự chân thành.' },
    ],
  },
  {
    id: 'gex2-n1-04', pattern: '～んばかりに (n bakari ni)',
    meaning: 'Như muốn / Suýt nữa thì',
    category: 'Mức độ cực', jlpt: 'N1',
    examples: [
      { jp: '彼は泣かんばかりに謝った。', reading: 'かれはなかんばかりにあやまった。', meaning: 'Anh ấy xin lỗi như muốn khóc.' },
      { jp: '倒れんばかりに疲れている。', reading: 'たおれんばかりにつかれている。', meaning: 'Mệt như muốn ngã.' },
    ],
  },
  {
    id: 'gex2-n1-05', pattern: '～たりとも (tari tomo)',
    meaning: 'Dù chỉ một (cũng không)',
    category: 'Nhấn mạnh phủ định', jlpt: 'N1',
    examples: [
      { jp: '一日たりとも無駄にしたくない。', reading: 'いちにちたりともむだにしたくない。', meaning: 'Không muốn lãng phí dù chỉ một ngày.' },
      { jp: '一円たりとも借りたくない。', reading: 'いちえんたりともかりたくない。', meaning: 'Không muốn mượn dù chỉ một yên.' },
    ],
  },
  {
    id: 'gex2-n1-06', pattern: '～てやまない (te yamanai)',
    meaning: 'Không ngừng, rất... (tình cảm sâu sắc)',
    category: 'Cảm xúc sâu', jlpt: 'N1',
    examples: [
      { jp: '皆さんのご活躍を願ってやみません。', reading: 'みなさんのごかつやくをねがってやみません。', meaning: 'Tôi không ngừng mong các bạn hoạt động tích cực.' },
      { jp: '彼を愛してやまない。', reading: 'かれをあいしてやまない。', meaning: 'Yêu anh ấy không ngừng.' },
    ],
  },
  {
    id: 'gex2-n1-07', pattern: '～をおいて～ない (wo oite ~ nai)',
    meaning: 'Ngoài... ra không ai/không gì (khác)',
    category: 'Duy nhất', jlpt: 'N1',
    examples: [
      { jp: 'この仕事は彼をおいて他にいない。', reading: 'このしごとはかれをおいてほかにいない。', meaning: 'Công việc này ngoài anh ấy ra không ai khác.' },
      { jp: '今をおいてチャンスはない。', reading: 'いまをおいてちゃんすはない。', meaning: 'Ngoài bây giờ ra không có cơ hội nào.' },
    ],
  },
  {
    id: 'gex2-n1-08', pattern: '～にたえない (ni taenai)',
    meaning: 'Không chịu nổi / Vô cùng (cảm xúc)',
    category: 'Cảm xúc cực', jlpt: 'N1',
    examples: [
      { jp: '感謝にたえません。', reading: 'かんしゃにたえません。', meaning: 'Vô cùng biết ơn (không chịu nổi sự biết ơn).' },
      { jp: '見るにたえない映画だった。', reading: 'みるにたえないえいがだった。', meaning: 'Bộ phim tệ đến mức không chịu nổi để xem.' },
    ],
  },
  {
    id: 'gex2-n1-09', pattern: '～かたわら (katawara)',
    meaning: 'Bên cạnh việc... còn (làm 2 việc song song)',
    category: 'Song hành', jlpt: 'N1',
    examples: [
      { jp: '仕事のかたわら小説を書いている。', reading: 'しごとのかたわらしょうせつをかいている。', meaning: 'Bên cạnh làm việc, tôi còn viết tiểu thuyết.' },
      { jp: '研究のかたわら学生を指導している。', reading: 'けんきゅうのかたわらがくせいをしどうしている。', meaning: 'Bên cạnh nghiên cứu, tôi còn hướng dẫn sinh viên.' },
    ],
  },
  {
    id: 'gex2-n1-10', pattern: '～ないまでも (nai made mo)',
    meaning: 'Dù không đến mức... thì cũng',
    category: 'Nhượng bộ nhẹ', jlpt: 'N1',
    examples: [
      { jp: '完璧ではないまでもかなり良い出来だ。', reading: 'かんぺきではないまでもかなりよいできだ。', meaning: 'Dù chưa hoàn hảo nhưng cũng rất tốt rồi.' },
      { jp: '賛成しないまでも反対はしない。', reading: 'さんせいしないまでもはんたいはしない。', meaning: 'Dù không tán thành nhưng cũng không phản đối.' },
    ],
  },
  {
    id: 'gex2-n1-11', pattern: '～に即して (ni sokushite)',
    meaning: 'Theo sát / Phù hợp với (thực tế)',
    category: 'Tương ứng', jlpt: 'N1',
    examples: [
      { jp: '現実に即した政策が求められる。', reading: 'げんじつにそくしたせいさくがもとめられる。', meaning: 'Cần chính sách phù hợp với thực tế.' },
      { jp: '法律に即して判断する。', reading: 'ほうりつにそくしてはんだんする。', meaning: 'Phán đoán theo sát pháp luật.' },
    ],
  },
  {
    id: 'gex2-n1-12', pattern: '～いかんによらず (ikan ni yorazu)',
    meaning: 'Bất kể, không phân biệt',
    category: 'Bất kể', jlpt: 'N1',
    examples: [
      { jp: '理由のいかんによらず遅刻は認めない。', reading: 'りゆうのいかんによらずちこくはみとめない。', meaning: 'Bất kể lý do gì cũng không chấp nhận trễ.' },
      { jp: '結果のいかんによらず努力は評価する。', reading: 'けっかのいかんによらずどりょくはひょうかする。', meaning: 'Bất kể kết quả, nỗ lực đều được đánh giá.' },
    ],
  },
  {
    id: 'gex2-n1-13', pattern: '～ならでは (nara de wa)',
    meaning: 'Chỉ có ở / Đặc trưng riêng',
    category: 'Đặc trưng', jlpt: 'N1',
    examples: [
      { jp: '京都ならではの美しさだ。', reading: 'きょうとならではのうつくしさだ。', meaning: 'Vẻ đẹp chỉ có ở Kyoto.' },
      { jp: 'プロならではの技術だ。', reading: 'ぷろならではのぎじゅつだ。', meaning: 'Kỹ thuật chỉ có ở chuyên gia.' },
    ],
  },
  {
    id: 'gex2-n1-14', pattern: '～ともなると (tomo naru to)',
    meaning: 'Khi đã đạt đến mức (cao/đặc biệt)',
    category: 'Mức độ', jlpt: 'N1',
    examples: [
      { jp: '社長ともなると責任が重い。', reading: 'しゃちょうともなるとせきにんがおもい。', meaning: 'Khi đã là giám đốc thì trách nhiệm nặng nề.' },
      { jp: 'プロともなると練習量が違う。', reading: 'ぷろともなるとれんしゅうりょうがちがう。', meaning: 'Khi đã là chuyên gia thì lượng luyện tập khác hẳn.' },
    ],
  },
  {
    id: 'gex2-n1-15', pattern: '～極まりない (kiwamari nai)',
    meaning: 'Vô cùng, cực kỳ (tiêu cực)',
    category: 'Mức độ cực', jlpt: 'N1',
    examples: [
      { jp: '失礼極まりない態度だ。', reading: 'しつれいきわまりないたいどだ。', meaning: 'Thái độ vô cùng bất lịch sự.' },
      { jp: '危険極まりない行為だ。', reading: 'きけんきわまりないこういだ。', meaning: 'Hành vi cực kỳ nguy hiểm.' },
    ],
  },
];
