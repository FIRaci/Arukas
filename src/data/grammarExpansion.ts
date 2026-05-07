// ============================================================================
// GRAMMAR EXPANSION PACKS — N5→N1 (merged)
// ============================================================================
import type { GrammarEntry } from './grammarTypes';

// ── from: grammarExp_N5.ts ──
export const GRAMMAR_EXP_N5: GrammarEntry[] = [
  {
    id: 'gex5-01',
    pattern: '～です (desu)',
    meaning: 'Thể lịch sự "là"',
    category: 'Cấu trúc cơ bản',
    jlpt: 'N5',
    examples: [
      { jp: 'これは本です。', reading: 'これはほんです。', meaning: 'Đây là quyển sách.' },
      { jp: '田中さんは先生です。', reading: 'たなかさんはせんせいです。', meaning: 'Anh Tanaka là giáo viên.' },
    ],
  },
  {
    id: 'gex5-02',
    pattern: '～じゃない/ではない (ja nai / de wa nai)',
    meaning: 'Phủ định "không phải là"',
    category: 'Cấu trúc cơ bản',
    jlpt: 'N5',
    examples: [
      { jp: 'これはペンじゃないです。', reading: 'これはぺんじゃないです。', meaning: 'Đây không phải là cây bút.' },
      { jp: '私は学生ではありません。', reading: 'わたしはがくせいではありません。', meaning: 'Tôi không phải là học sinh.' },
    ],
  },
  {
    id: 'gex5-03',
    pattern: '～でした (deshita)',
    meaning: 'Quá khứ lịch sự "đã là"',
    category: 'Cấu trúc cơ bản',
    jlpt: 'N5',
    examples: [
      { jp: '昨日は日曜日でした。', reading: 'きのうはにちようびでした。', meaning: 'Hôm qua là chủ nhật.' },
      { jp: 'テストは簡単でした。', reading: 'てすとはかんたんでした。', meaning: 'Bài kiểm tra đã dễ.' },
    ],
  },
  {
    id: 'gex5-04',
    pattern: '～じゃなかった (ja nakatta)',
    meaning: 'Quá khứ phủ định "đã không phải là"',
    category: 'Cấu trúc cơ bản',
    jlpt: 'N5',
    examples: [
      { jp: 'あの映画はおもしろくなかった。', reading: 'あのえいがはおもしろくなかった。', meaning: 'Bộ phim đó đã không hay.' },
      { jp: '昨日は休みじゃなかった。', reading: 'きのうはやすみじゃなかった。', meaning: 'Hôm qua đã không phải ngày nghỉ.' },
    ],
  },
  {
    id: 'gex5-05',
    pattern: '～い-adj (i-adj basic)',
    meaning: 'Tính từ đuôi い - dùng để mô tả tính chất',
    category: 'Tính từ',
    jlpt: 'N5',
    examples: [
      { jp: 'この本はおもしろいです。', reading: 'このほんはおもしろいです。', meaning: 'Quyển sách này hay.' },
      { jp: '今日は暑いです。', reading: 'きょうはあついです。', meaning: 'Hôm nay nóng.' },
    ],
  },
  {
    id: 'gex5-06',
    pattern: '～くない (kunai)',
    meaning: 'Phủ định tính từ đuôi い',
    category: 'Tính từ',
    jlpt: 'N5',
    examples: [
      { jp: 'このスープは熱くないです。', reading: 'このすーぷはあつくないです。', meaning: 'Súp này không nóng.' },
      { jp: 'あの店は高くない。', reading: 'あのみせはたかくない。', meaning: 'Cửa hàng đó không đắt.' },
    ],
  },
  {
    id: 'gex5-07',
    pattern: '～かった (katta)',
    meaning: 'Quá khứ tính từ đuôi い',
    category: 'Tính từ',
    jlpt: 'N5',
    examples: [
      { jp: '昨日の天気はよかったです。', reading: 'きのうのてんきはよかったです。', meaning: 'Thời tiết hôm qua đã tốt.' },
      { jp: '旅行は楽しかったです。', reading: 'りょこうはたのしかったです。', meaning: 'Chuyến du lịch đã vui.' },
    ],
  },
  {
    id: 'gex5-08',
    pattern: '～くなかった (kunakatta)',
    meaning: 'Quá khứ phủ định tính từ đuôi い',
    category: 'Tính từ',
    jlpt: 'N5',
    examples: [
      { jp: 'テストは難しくなかったです。', reading: 'てすとはむずかしくなかったです。', meaning: 'Bài kiểm tra đã không khó.' },
      { jp: '昨日は寒くなかったです。', reading: 'きのうはさむくなかったです。', meaning: 'Hôm qua đã không lạnh.' },
    ],
  },
  {
    id: 'gex5-09',
    pattern: '～な-adj (na-adj basic)',
    meaning: 'Tính từ đuôi な - dùng để mô tả tính chất',
    category: 'Tính từ',
    jlpt: 'N5',
    examples: [
      { jp: 'この公園は静かです。', reading: 'このこうえんはしずかです。', meaning: 'Công viên này yên tĩnh.' },
      { jp: '彼女は元気な人です。', reading: 'かのじょはげんきなひとです。', meaning: 'Cô ấy là người khỏe mạnh/vui vẻ.' },
    ],
  },
  {
    id: 'gex5-10',
    pattern: '～ないでください (naide kudasai)',
    meaning: 'Xin đừng làm gì',
    category: 'Yêu cầu & Đề nghị',
    jlpt: 'N5',
    examples: [
      { jp: 'ここで写真を撮らないでください。', reading: 'ここでしゃしんをとらないでください。', meaning: 'Xin đừng chụp ảnh ở đây.' },
      { jp: '遅れないでください。', reading: 'おくれないでください。', meaning: 'Xin đừng đến muộn.' },
    ],
  },
  {
    id: 'gex5-11',
    pattern: '～ましょう (mashou)',
    meaning: 'Cùng làm nhé (rủ rê)',
    category: 'Yêu cầu & Đề nghị',
    jlpt: 'N5',
    examples: [
      { jp: '一緒に昼ごはんを食べましょう。', reading: 'いっしょにひるごはんをたべましょう。', meaning: 'Cùng ăn trưa nhé.' },
      { jp: '公園で遊びましょう。', reading: 'こうえんであそびましょう。', meaning: 'Cùng chơi ở công viên nhé.' },
    ],
  },
  {
    id: 'gex5-12',
    pattern: '～ましょうか (mashou ka)',
    meaning: 'Để tôi... cho nhé? (đề nghị giúp đỡ)',
    category: 'Yêu cầu & Đề nghị',
    jlpt: 'N5',
    examples: [
      { jp: '窓を開けましょうか。', reading: 'まどをあけましょうか。', meaning: 'Để tôi mở cửa sổ cho nhé?' },
      { jp: '荷物を持ちましょうか。', reading: 'にもつをもちましょうか。', meaning: 'Để tôi xách hành lý cho nhé?' },
    ],
  },
  {
    id: 'gex5-13',
    pattern: '～ませんか (masen ka)',
    meaning: 'Mời làm gì, có muốn không?',
    category: 'Yêu cầu & Đề nghị',
    jlpt: 'N5',
    examples: [
      { jp: '映画を見ませんか。', reading: 'えいがをみませんか。', meaning: 'Bạn có muốn xem phim không?' },
      { jp: '一緒にコーヒーを飲みませんか。', reading: 'いっしょにこーひーをのみませんか。', meaning: 'Bạn có muốn cùng uống cà phê không?' },
    ],
  },
  {
    id: 'gex5-14',
    pattern: '～てもいい (temo ii)',
    meaning: 'Được phép làm gì',
    category: 'Cho phép & Nghĩa vụ',
    jlpt: 'N5',
    examples: [
      { jp: 'ここに座ってもいいですか。', reading: 'ここにすわってもいいですか。', meaning: 'Tôi ngồi đây được không?' },
      { jp: '写真を撮ってもいいです。', reading: 'しゃしんをとってもいいです。', meaning: 'Bạn được phép chụp ảnh.' },
    ],
  },
  {
    id: 'gex5-15',
    pattern: '～なくてはいけない (nakute wa ikenai)',
    meaning: 'Phải làm gì',
    category: 'Cho phép & Nghĩa vụ',
    jlpt: 'N5',
    examples: [
      { jp: '毎日勉強しなくてはいけません。', reading: 'まいにちべんきょうしなくてはいけません。', meaning: 'Phải học bài mỗi ngày.' },
      { jp: '薬を飲まなくてはいけない。', reading: 'くすりをのまなくてはいけない。', meaning: 'Phải uống thuốc.' },
    ],
  },
  {
    id: 'gex5-16',
    pattern: '～ている (te iru)',
    meaning: 'Đang làm gì / Trạng thái kết quả',
    category: 'Thể tiếp diễn',
    jlpt: 'N5',
    examples: [
      { jp: '今、本を読んでいます。', reading: 'いま、ほんをよんでいます。', meaning: 'Bây giờ tôi đang đọc sách.' },
      { jp: '姉は東京に住んでいます。', reading: 'あねはとうきょうにすんでいます。', meaning: 'Chị tôi đang sống ở Tokyo.' },
    ],
  },
  {
    id: 'gex5-17',
    pattern: '～ないで (naide)',
    meaning: 'Không làm mà... (trạng thái kèm theo)',
    category: 'Liên kết hành động',
    jlpt: 'N5',
    examples: [
      { jp: '朝ごはんを食べないで学校に行った。', reading: 'あさごはんをたべないでがっこうにいった。', meaning: 'Tôi đi học mà không ăn sáng.' },
      { jp: '傘を持たないで出かけた。', reading: 'かさをもたないででかけた。', meaning: 'Tôi ra ngoài mà không mang ô.' },
    ],
  },
  {
    id: 'gex5-18',
    pattern: '～てから (te kara)',
    meaning: 'Sau khi làm gì',
    category: 'Liên kết hành động',
    jlpt: 'N5',
    examples: [
      { jp: '手を洗ってから食べてください。', reading: 'てをあらってからたべてください。', meaning: 'Hãy rửa tay rồi hãy ăn.' },
      { jp: '宿題をしてから遊びます。', reading: 'しゅくだいをしてからあそびます。', meaning: 'Sau khi làm bài tập xong tôi sẽ chơi.' },
    ],
  },
  {
    id: 'gex5-19',
    pattern: '～たことがある (ta koto ga aru)',
    meaning: 'Đã từng làm gì',
    category: 'Kinh nghiệm',
    jlpt: 'N5',
    examples: [
      { jp: '日本に行ったことがあります。', reading: 'にほんにいったことがあります。', meaning: 'Tôi đã từng đi Nhật.' },
      { jp: '富士山を見たことがありますか。', reading: 'ふじさんをみたことがありますか。', meaning: 'Bạn đã từng nhìn thấy núi Phú Sĩ chưa?' },
    ],
  },
  {
    id: 'gex5-20',
    pattern: '～たり～たりする (tari...tari suru)',
    meaning: 'Vừa...vừa... (liệt kê hành động)',
    category: 'Liên kết hành động',
    jlpt: 'N5',
    examples: [
      { jp: '週末は映画を見たり、買い物をしたりします。', reading: 'しゅうまつはえいがをみたり、かいものをしたりします。', meaning: 'Cuối tuần tôi xem phim, đi mua sắm.' },
      { jp: '公園で走ったり、遊んだりしました。', reading: 'こうえんではしったり、あそんだりしました。', meaning: 'Tôi đã chạy, chơi ở công viên.' },
    ],
  },
  {
    id: 'gex5-21',
    pattern: '～ながら (nagara)',
    meaning: 'Vừa...vừa (làm đồng thời)',
    category: 'Liên kết hành động',
    jlpt: 'N5',
    examples: [
      { jp: '音楽を聞きながら勉強します。', reading: 'おんがくをききながらべんきょうします。', meaning: 'Tôi vừa nghe nhạc vừa học bài.' },
      { jp: 'テレビを見ながらご飯を食べます。', reading: 'てれびをみながらごはんをたべます。', meaning: 'Tôi vừa xem tivi vừa ăn cơm.' },
    ],
  },
  {
    id: 'gex5-22',
    pattern: '～前に (mae ni)',
    meaning: 'Trước khi làm gì',
    category: 'Thời gian',
    jlpt: 'N5',
    examples: [
      { jp: '寝る前に歯を磨きます。', reading: 'ねるまえにはをみがきます。', meaning: 'Tôi đánh răng trước khi ngủ.' },
      { jp: '食べる前に手を洗います。', reading: 'たべるまえにてをあらいます。', meaning: 'Tôi rửa tay trước khi ăn.' },
    ],
  },
  {
    id: 'gex5-23',
    pattern: '～後で (ato de)',
    meaning: 'Sau khi làm gì',
    category: 'Thời gian',
    jlpt: 'N5',
    examples: [
      { jp: '授業の後で図書館に行きます。', reading: 'じゅぎょうのあとでとしょかんにいきます。', meaning: 'Sau giờ học tôi đi thư viện.' },
      { jp: 'ご飯を食べた後で散歩します。', reading: 'ごはんをたべたあとでさんぽします。', meaning: 'Sau khi ăn cơm xong tôi đi dạo.' },
    ],
  },
  {
    id: 'gex5-24',
    pattern: '～つもり (tsumori)',
    meaning: 'Định làm gì, có ý định',
    category: 'Ý định & Quyết định',
    jlpt: 'N5',
    examples: [
      { jp: '来年日本に行くつもりです。', reading: 'らいねんにほんにいくつもりです。', meaning: 'Tôi định đi Nhật năm sau.' },
      { jp: '大学で日本語を勉強するつもりです。', reading: 'だいがくでにほんごをべんきょうするつもりです。', meaning: 'Tôi định học tiếng Nhật ở đại học.' },
    ],
  },
  {
    id: 'gex5-25',
    pattern: '～にする (ni suru)',
    meaning: 'Quyết định chọn',
    category: 'Ý định & Quyết định',
    jlpt: 'N5',
    examples: [
      { jp: 'コーヒーにします。', reading: 'こーひーにします。', meaning: 'Tôi chọn cà phê.' },
      { jp: '旅行先は京都にしました。', reading: 'りょこうさきはきょうとにしました。', meaning: 'Tôi đã quyết định địa điểm du lịch là Kyoto.' },
    ],
  },
  {
    id: 'gex5-26',
    pattern: '～になる (ni naru)',
    meaning: 'Trở thành',
    category: 'Biến đổi',
    jlpt: 'N5',
    examples: [
      { jp: '医者になりたいです。', reading: 'いしゃになりたいです。', meaning: 'Tôi muốn trở thành bác sĩ.' },
      { jp: '春になりました。', reading: 'はるになりました。', meaning: 'Đã sang mùa xuân rồi.' },
    ],
  },
  {
    id: 'gex5-27',
    pattern: '～がほしい (ga hoshii)',
    meaning: 'Muốn có (vật)',
    category: 'Mong muốn',
    jlpt: 'N5',
    examples: [
      { jp: '新しいかばんがほしいです。', reading: 'あたらしいかばんがほしいです。', meaning: 'Tôi muốn có cái cặp mới.' },
      { jp: '車がほしいですか。', reading: 'くるまがほしいですか。', meaning: 'Bạn có muốn xe ô tô không?' },
    ],
  },
  {
    id: 'gex5-28',
    pattern: '～てほしい (te hoshii)',
    meaning: 'Muốn ai đó làm gì',
    category: 'Mong muốn',
    jlpt: 'N5',
    examples: [
      { jp: '母に料理を作ってほしい。', reading: 'ははにりょうりをつくってほしい。', meaning: 'Tôi muốn mẹ nấu ăn.' },
      { jp: '先生に説明してほしいです。', reading: 'せんせいにせつめいしてほしいです。', meaning: 'Tôi muốn thầy giải thích.' },
    ],
  },
  {
    id: 'gex5-29',
    pattern: '～でしょう (deshou)',
    meaning: 'Có lẽ, chắc là (phỏng đoán)',
    category: 'Phỏng đoán',
    jlpt: 'N5',
    examples: [
      { jp: '明日は雨でしょう。', reading: 'あしたはあめでしょう。', meaning: 'Ngày mai chắc là mưa.' },
      { jp: 'このケーキはおいしいでしょう。', reading: 'このけーきはおいしいでしょう。', meaning: 'Cái bánh này chắc là ngon.' },
    ],
  },
  {
    id: 'gex5-30',
    pattern: '～そうだ (sou da)',
    meaning: 'Nghe nói (truyền đạt thông tin)',
    category: 'Phỏng đoán',
    jlpt: 'N5',
    examples: [
      { jp: '明日は寒いそうです。', reading: 'あしたはさむいそうです。', meaning: 'Nghe nói ngày mai lạnh.' },
      { jp: 'あの店はおいしいそうです。', reading: 'あのみせはおいしいそうです。', meaning: 'Nghe nói cửa hàng đó ngon.' },
    ],
  },
  {
    id: 'gex5-31',
    pattern: '～と思う (to omou)',
    meaning: 'Tôi nghĩ rằng',
    category: 'Ý kiến',
    jlpt: 'N5',
    examples: [
      { jp: '日本語は難しいと思います。', reading: 'にほんごはむずかしいとおもいます。', meaning: 'Tôi nghĩ tiếng Nhật khó.' },
      { jp: '彼は来ないと思う。', reading: 'かれはこないとおもう。', meaning: 'Tôi nghĩ anh ấy không đến.' },
    ],
  },
  {
    id: 'gex5-32',
    pattern: '～かどうか (ka dou ka)',
    meaning: 'Có hay không (nghi vấn gián tiếp)',
    category: 'Ý kiến',
    jlpt: 'N5',
    examples: [
      { jp: '明日来るかどうかわかりません。', reading: 'あしたくるかどうかわかりません。', meaning: 'Tôi không biết ngày mai có đến không.' },
      { jp: 'これが正しいかどうか教えてください。', reading: 'これがただしいかどうかおしえてください。', meaning: 'Hãy cho tôi biết cái này đúng hay không.' },
    ],
  },
  {
    id: 'gex5-33',
    pattern: '～て (te)',
    meaning: 'Liệt kê / Nối các hành động, tính chất',
    category: 'Liên kết hành động',
    jlpt: 'N5',
    examples: [
      { jp: '朝起きて、顔を洗って、学校に行きます。', reading: 'あさおきて、かおをあらって、がっこうにいきます。', meaning: 'Sáng dậy, rửa mặt rồi đi học.' },
      { jp: 'この部屋は広くて明るいです。', reading: 'このへやはひろくてあかるいです。', meaning: 'Căn phòng này rộng và sáng.' },
    ],
  },
  {
    id: 'gex5-34',
    pattern: '～に行く (ni iku)',
    meaning: 'Đi để làm gì',
    category: 'Di chuyển & Mục đích',
    jlpt: 'N5',
    examples: [
      { jp: '買い物に行きます。', reading: 'かいものにいきます。', meaning: 'Tôi đi mua sắm.' },
      { jp: '友達に会いに行きました。', reading: 'ともだちにあいにいきました。', meaning: 'Tôi đã đi gặp bạn.' },
    ],
  },
  {
    id: 'gex5-35',
    pattern: '～に来る (ni kuru)',
    meaning: 'Đến để làm gì',
    category: 'Di chuyển & Mục đích',
    jlpt: 'N5',
    examples: [
      { jp: '日本語を勉強しに来ました。', reading: 'にほんごをべんきょうしにきました。', meaning: 'Tôi đã đến để học tiếng Nhật.' },
      { jp: '友達が遊びに来ます。', reading: 'ともだちがあそびにきます。', meaning: 'Bạn tôi đến chơi.' },
    ],
  },
  {
    id: 'gex5-36',
    pattern: '～方 (kata)',
    meaning: 'Cách làm gì',
    category: 'Phương thức',
    jlpt: 'N5',
    examples: [
      { jp: 'この漢字の読み方を教えてください。', reading: 'このかんじのよみかたをおしえてください。', meaning: 'Hãy chỉ cho tôi cách đọc chữ Hán này.' },
      { jp: '箸の使い方がわかりません。', reading: 'はしのつかいかたがわかりません。', meaning: 'Tôi không biết cách dùng đũa.' },
    ],
  },
  {
    id: 'gex5-37',
    pattern: '～やすい (yasui)',
    meaning: 'Dễ làm gì',
    category: 'Phương thức',
    jlpt: 'N5',
    examples: [
      { jp: 'この本は読みやすいです。', reading: 'このほんはよみやすいです。', meaning: 'Quyển sách này dễ đọc.' },
      { jp: 'この道は歩きやすい。', reading: 'このみちはあるきやすい。', meaning: 'Con đường này dễ đi bộ.' },
    ],
  },
  {
    id: 'gex5-38',
    pattern: '～にくい (nikui)',
    meaning: 'Khó làm gì',
    category: 'Phương thức',
    jlpt: 'N5',
    examples: [
      { jp: 'この字は読みにくいです。', reading: 'このじはよみにくいです。', meaning: 'Chữ này khó đọc.' },
      { jp: 'この靴は歩きにくい。', reading: 'このくつはあるきにくい。', meaning: 'Đôi giày này khó đi.' },
    ],
  },
  {
    id: 'gex5-39',
    pattern: '～すぎる (sugiru)',
    meaning: 'Quá, làm quá mức',
    category: 'Mức độ',
    jlpt: 'N5',
    examples: [
      { jp: '食べすぎました。', reading: 'たべすぎました。', meaning: 'Tôi đã ăn quá nhiều.' },
      { jp: 'この問題は難しすぎます。', reading: 'このもんだいはむずかしすぎます。', meaning: 'Bài này quá khó.' },
    ],
  },
  {
    id: 'gex5-40',
    pattern: '～ので (node)',
    meaning: 'Vì, bởi vì (nguyên nhân)',
    category: 'Nguyên nhân & Lý do',
    jlpt: 'N5',
    examples: [
      { jp: '雨が降っているので、傘を持っていきます。', reading: 'あめがふっているので、かさをもっていきます。', meaning: 'Vì trời đang mưa nên tôi mang ô đi.' },
      { jp: '疲れたので、早く寝ます。', reading: 'つかれたので、はやくねます。', meaning: 'Vì mệt nên tôi đi ngủ sớm.' },
    ],
  },
  {
    id: 'gex5-41',
    pattern: '～のに (noni)',
    meaning: 'Mặc dù, tuy... mà',
    category: 'Nghịch ý',
    jlpt: 'N5',
    examples: [
      { jp: '勉強したのに、テストに落ちました。', reading: 'べんきょうしたのに、てすとにおちました。', meaning: 'Mặc dù đã học mà vẫn trượt bài kiểm tra.' },
      { jp: '約束したのに、来なかった。', reading: 'やくそくしたのに、こなかった。', meaning: 'Mặc dù đã hẹn mà không đến.' },
    ],
  },
  {
    id: 'gex5-42',
    pattern: '～てあげる (te ageru)',
    meaning: 'Làm cho ai đó (ân huệ đi)',
    category: 'Cho & Nhận',
    jlpt: 'N5',
    examples: [
      { jp: '友達に日本語を教えてあげました。', reading: 'ともだちににほんごをおしえてあげました。', meaning: 'Tôi đã dạy tiếng Nhật cho bạn.' },
      { jp: '母に花を買ってあげました。', reading: 'ははにはなをかってあげました。', meaning: 'Tôi đã mua hoa cho mẹ.' },
    ],
  },
  {
    id: 'gex5-43',
    pattern: '～てもらう (te morau)',
    meaning: 'Nhờ ai đó làm gì / Được ai đó làm cho',
    category: 'Cho & Nhận',
    jlpt: 'N5',
    examples: [
      { jp: '友達に手伝ってもらいました。', reading: 'ともだちにてつだってもらいました。', meaning: 'Tôi đã nhờ bạn giúp.' },
      { jp: '先生に漢字を教えてもらいました。', reading: 'せんせいにかんじをおしえてもらいました。', meaning: 'Tôi được thầy dạy chữ Hán.' },
    ],
  },
  {
    id: 'gex5-44',
    pattern: '～てくれる (te kureru)',
    meaning: 'Ai đó làm cho mình (ân huệ đến)',
    category: 'Cho & Nhận',
    jlpt: 'N5',
    examples: [
      { jp: '母が弁当を作ってくれました。', reading: 'ははがべんとうをつくってくれました。', meaning: 'Mẹ đã làm cơm hộp cho tôi.' },
      { jp: '友達が駅まで送ってくれた。', reading: 'ともだちがえきまでおくってくれた。', meaning: 'Bạn đã tiễn tôi đến nhà ga.' },
    ],
  },
  {
    id: 'gex5-45',
    pattern: '～たら (tara)',
    meaning: 'Nếu / Khi (điều kiện)',
    category: 'Điều kiện',
    jlpt: 'N5',
    examples: [
      { jp: '雨が降ったら、家にいます。', reading: 'あめがふったら、いえにいます。', meaning: 'Nếu trời mưa thì tôi ở nhà.' },
      { jp: '安かったら買います。', reading: 'やすかったらかいます。', meaning: 'Nếu rẻ thì tôi mua.' },
    ],
  },
  {
    id: 'gex5-46',
    pattern: '～ば (ba)',
    meaning: 'Nếu (điều kiện giả định)',
    category: 'Điều kiện',
    jlpt: 'N5',
    examples: [
      { jp: '時間があれば、行きます。', reading: 'じかんがあれば、いきます。', meaning: 'Nếu có thời gian thì tôi đi.' },
      { jp: '安ければ買います。', reading: 'やすければかいます。', meaning: 'Nếu rẻ thì tôi mua.' },
    ],
  },
  {
    id: 'gex5-47',
    pattern: '～まだ (mada)',
    meaning: 'Vẫn / Vẫn chưa',
    category: 'Trạng thái thời gian',
    jlpt: 'N5',
    examples: [
      { jp: 'まだ宿題をしていません。', reading: 'まだしゅくだいをしていません。', meaning: 'Tôi vẫn chưa làm bài tập.' },
      { jp: 'まだ若いです。', reading: 'まだわかいです。', meaning: 'Vẫn còn trẻ.' },
    ],
  },
  {
    id: 'gex5-48',
    pattern: '～もう (mou)',
    meaning: 'Đã rồi',
    category: 'Trạng thái thời gian',
    jlpt: 'N5',
    examples: [
      { jp: 'もう食べました。', reading: 'もうたべました。', meaning: 'Tôi đã ăn rồi.' },
      { jp: 'もう宿題は終わりましたか。', reading: 'もうしゅくだいはおわりましたか。', meaning: 'Bạn đã làm xong bài tập chưa?' },
    ],
  },
  {
    id: 'gex5-49',
    pattern: '～なる (naru)',
    meaning: 'Trở nên (biến đổi trạng thái)',
    category: 'Biến đổi',
    jlpt: 'N5',
    examples: [
      { jp: '日本語が上手になりました。', reading: 'にほんごがじょうずになりました。', meaning: 'Tiếng Nhật của tôi đã khá lên.' },
      { jp: '暖かくなりました。', reading: 'あたたかくなりました。', meaning: 'Trời đã trở nên ấm hơn.' },
    ],
  },
  {
    id: 'gex5-50',
    pattern: '～く/にする (ku/ni suru)',
    meaning: 'Làm cho trở nên (thay đổi tính chất)',
    category: 'Biến đổi',
    jlpt: 'N5',
    examples: [
      { jp: '部屋をきれいにしてください。', reading: 'へやをきれいにしてください。', meaning: 'Hãy dọn phòng cho sạch.' },
      { jp: 'テレビの音を小さくしてください。', reading: 'てれびのおとをちいさくしてください。', meaning: 'Hãy vặn nhỏ âm lượng tivi.' },
    ],
  },
];

// ── from: grammarExp_N4.ts ──
// ============================================================================
// GRAMMAR EXPANSION — N4 (35 new entries)
// ============================================================================

export const GRAMMAR_EXP_N4: GrammarEntry[] = [
  // ── Quyết định & Thay đổi ──────────────────────────────────────────────
  {
    id: 'gex4-01',
    pattern: '～ことにする (koto ni suru)',
    meaning: 'Quyết định làm gì đó (do bản thân)',
    category: 'Quyết định & Thay đổi',
    jlpt: 'N4',
    examples: [
      { jp: '来月から毎朝走ることにした。', reading: 'らいげつからまいあさはしることにした。', meaning: 'Tôi đã quyết định chạy bộ mỗi sáng từ tháng sau.' },
      { jp: '甘いものを食べないことにする。', reading: 'あまいものをたべないことにする。', meaning: 'Tôi quyết định không ăn đồ ngọt.' },
    ],
  },
  {
    id: 'gex4-02',
    pattern: '～ことになる (koto ni naru)',
    meaning: 'Được quyết định / Kết quả là (ngoài ý muốn)',
    category: 'Quyết định & Thay đổi',
    jlpt: 'N4',
    examples: [
      { jp: '来年、大阪に転勤することになった。', reading: 'らいねん、おおさかにてんきんすることになった。', meaning: 'Tôi được điều chuyển đến Osaka vào năm sau.' },
      { jp: '会議は金曜日に行うことになった。', reading: 'かいぎはきんようびにおこなうことになった。', meaning: 'Cuộc họp được quyết định tổ chức vào thứ Sáu.' },
    ],
  },
  {
    id: 'gex4-03',
    pattern: '～ようにする (you ni suru)',
    meaning: 'Cố gắng làm gì / Chú ý để',
    category: 'Quyết định & Thay đổi',
    jlpt: 'N4',
    examples: [
      { jp: '毎日野菜を食べるようにしている。', reading: 'まいにちやさいをたべるようにしている。', meaning: 'Tôi cố gắng ăn rau mỗi ngày.' },
      { jp: '遅刻しないようにしてください。', reading: 'ちこくしないようにしてください。', meaning: 'Hãy cố gắng đừng đi trễ.' },
    ],
  },
  {
    id: 'gex4-04',
    pattern: '～ようになる (you ni naru)',
    meaning: 'Trở nên có thể / Bắt đầu có thể',
    category: 'Quyết định & Thay đổi',
    jlpt: 'N4',
    examples: [
      { jp: '日本語が話せるようになった。', reading: 'にほんごがはなせるようになった。', meaning: 'Tôi đã trở nên có thể nói tiếng Nhật.' },
      { jp: '子供が一人で歩けるようになった。', reading: 'こどもがひとりであるけるようになった。', meaning: 'Đứa trẻ đã bắt đầu có thể tự đi một mình.' },
    ],
  },

  // ── Phỏng đoán & Nhận định ─────────────────────────────────────────────
  {
    id: 'gex4-05',
    pattern: '～はずだ (hazu da)',
    meaning: 'Lẽ ra phải / Chắc hẳn là',
    category: 'Phỏng đoán & Nhận định',
    jlpt: 'N4',
    examples: [
      { jp: '彼はもう着いたはずだ。', reading: 'かれはもうついたはずだ。', meaning: 'Anh ấy chắc hẳn đã đến rồi.' },
      { jp: 'この店は安いはずだよ。', reading: 'このみせはやすいはずだよ。', meaning: 'Quán này lẽ ra phải rẻ mà.' },
    ],
  },
  {
    id: 'gex4-06',
    pattern: '～ところだ (tokoro da)',
    meaning: 'Sắp / Đang / Vừa mới (tùy thể)',
    category: 'Phỏng đoán & Nhận định',
    jlpt: 'N4',
    examples: [
      { jp: '今から出かけるところです。', reading: 'いまからでかけるところです。', meaning: 'Tôi sắp đi ra ngoài bây giờ.' },
      { jp: 'ちょうどご飯を食べたところです。', reading: 'ちょうどごはんをたべたところです。', meaning: 'Tôi vừa mới ăn cơm xong.' },
    ],
  },
  {
    id: 'gex4-07',
    pattern: '～ことがある (koto ga aru)',
    meaning: 'Đôi khi xảy ra / Có lúc',
    category: 'Phỏng đoán & Nhận định',
    jlpt: 'N4',
    examples: [
      { jp: '朝ご飯を食べないことがある。', reading: 'あさごはんをたべないことがある。', meaning: 'Đôi khi tôi không ăn sáng.' },
      { jp: 'バスが遅れることがある。', reading: 'ばすがおくれることがある。', meaning: 'Có lúc xe buýt bị trễ.' },
    ],
  },

  // ── Mệnh đề & Liên kết ─────────────────────────────────────────────────
  {
    id: 'gex4-08',
    pattern: '～かどうか (ka dou ka)',
    meaning: 'Có hay không (mệnh đề nghi vấn gián tiếp)',
    category: 'Mệnh đề & Liên kết',
    jlpt: 'N4',
    examples: [
      { jp: '明日雨が降るかどうか分からない。', reading: 'あしたあめがふるかどうかわからない。', meaning: 'Tôi không biết ngày mai có mưa hay không.' },
      { jp: '彼が来るかどうか聞いてください。', reading: 'かれがくるかどうかきいてください。', meaning: 'Hãy hỏi xem anh ấy có đến hay không.' },
    ],
  },
  {
    id: 'gex4-09',
    pattern: '～て初めて (te hajimete)',
    meaning: 'Chỉ khi...mới / Sau khi...lần đầu mới',
    category: 'Mệnh đề & Liên kết',
    jlpt: 'N4',
    examples: [
      { jp: '日本に来て初めて桜を見た。', reading: 'にほんにきてはじめてさくらをみた。', meaning: 'Đến Nhật rồi tôi mới lần đầu nhìn thấy hoa anh đào.' },
      { jp: '病気になって初めて健康の大切さが分かった。', reading: 'びょうきになってはじめてけんこうのたいせつさがわかった。', meaning: 'Chỉ khi bị bệnh tôi mới hiểu tầm quan trọng của sức khỏe.' },
    ],
  },
  {
    id: 'gex4-10',
    pattern: '～ように (you ni)',
    meaning: 'Để mà / Sao cho',
    category: 'Mệnh đề & Liên kết',
    jlpt: 'N4',
    examples: [
      { jp: '忘れないように手帳に書いた。', reading: 'わすれないようにてちょうにかいた。', meaning: 'Tôi đã ghi vào sổ tay để không quên.' },
      { jp: '聞こえるように大きい声で話した。', reading: 'きこえるようにおおきいこえではなした。', meaning: 'Tôi đã nói to để người ta nghe thấy.' },
    ],
  },

  // ── So sánh & Ví dụ ────────────────────────────────────────────────────
  {
    id: 'gex4-11',
    pattern: '～のような / ～のように (no you na / no you ni)',
    meaning: 'Giống như / Như là',
    category: 'So sánh & Ví dụ',
    jlpt: 'N4',
    examples: [
      { jp: '彼女は花のようにきれいだ。', reading: 'かのじょははなのようにきれいだ。', meaning: 'Cô ấy đẹp như hoa.' },
      { jp: '夢のような一日だった。', reading: 'ゆめのようないちにちだった。', meaning: 'Đó là một ngày như trong mơ.' },
    ],
  },
  {
    id: 'gex4-24',
    pattern: '～かのようだ (ka no you da)',
    meaning: 'Như thể là / Cứ như',
    category: 'So sánh & Ví dụ',
    jlpt: 'N4',
    examples: [
      { jp: '彼は何も知らないかのように笑った。', reading: 'かれはなにもしらないかのようにわらった。', meaning: 'Anh ấy cười như thể không biết gì.' },
      { jp: 'まるで夏が来たかのように暑い。', reading: 'まるでなつがきたかのようにあつい。', meaning: 'Nóng cứ như thể mùa hè đã đến.' },
    ],
  },

  // ── Thể bị động & Sai khiến ────────────────────────────────────────────
  {
    id: 'gex4-12',
    pattern: '～させてください (sasete kudasai)',
    meaning: 'Xin cho phép tôi / Hãy để tôi',
    category: 'Thể bị động & Sai khiến',
    jlpt: 'N4',
    examples: [
      { jp: 'その仕事をやらせてください。', reading: 'そのしごとをやらせてください。', meaning: 'Xin hãy cho phép tôi làm công việc đó.' },
      { jp: '少し考えさせてください。', reading: 'すこしかんがえさせてください。', meaning: 'Xin hãy cho tôi suy nghĩ một chút.' },
    ],
  },
  {
    id: 'gex4-18',
    pattern: '～(ら)れる (potential) ((ra)reru)',
    meaning: 'Thể khả năng — có thể làm',
    category: 'Thể bị động & Sai khiến',
    jlpt: 'N4',
    examples: [
      { jp: 'この漢字が読めますか。', reading: 'このかんじがよめますか。', meaning: 'Bạn có thể đọc được chữ Hán này không?' },
      { jp: '明日は早く来られます。', reading: 'あしたははやくこられます。', meaning: 'Ngày mai tôi có thể đến sớm.' },
    ],
  },

  // ── Thói quen & Quy định ───────────────────────────────────────────────
  {
    id: 'gex4-13',
    pattern: '～ことにしている (koto ni shite iru)',
    meaning: 'Thường xuyên làm (thói quen tự chọn)',
    category: 'Thói quen & Quy định',
    jlpt: 'N4',
    examples: [
      { jp: '毎朝六時に起きることにしている。', reading: 'まいあさろくじにおきることにしている。', meaning: 'Tôi giữ thói quen dậy lúc 6 giờ mỗi sáng.' },
      { jp: '寝る前に本を読むことにしている。', reading: 'ねるまえにほんをよむことにしている。', meaning: 'Tôi giữ thói quen đọc sách trước khi ngủ.' },
    ],
  },
  {
    id: 'gex4-14',
    pattern: '～ことになっている (koto ni natte iru)',
    meaning: 'Được quy định là / Theo quy tắc thì',
    category: 'Thói quen & Quy định',
    jlpt: 'N4',
    examples: [
      { jp: 'この学校では制服を着ることになっている。', reading: 'このがっこうではせいふくをきることになっている。', meaning: 'Ở trường này, học sinh phải mặc đồng phục theo quy định.' },
      { jp: '会議は毎週月曜日に行うことになっている。', reading: 'かいぎはまいしゅうげつようびにおこなうことになっている。', meaning: 'Cuộc họp được quy định tổ chức vào thứ Hai hàng tuần.' },
    ],
  },

  // ── Ý chí & Nguyện vọng ────────────────────────────────────────────────
  {
    id: 'gex4-15',
    pattern: '～ようとしない (you to shinai)',
    meaning: 'Không chịu / Không thèm (cố ý)',
    category: 'Ý chí & Nguyện vọng',
    jlpt: 'N4',
    examples: [
      { jp: '子供が薬を飲もうとしない。', reading: 'こどもがくすりをのもうとしない。', meaning: 'Đứa trẻ không chịu uống thuốc.' },
      { jp: '彼は自分の間違いを認めようとしない。', reading: 'かれはじぶんのまちがいをみとめようとしない。', meaning: 'Anh ấy không chịu thừa nhận lỗi của mình.' },
    ],
  },
  {
    id: 'gex4-16',
    pattern: '～てほしい (te hoshii)',
    meaning: 'Muốn ai đó làm gì (nhờ vả, mong muốn)',
    category: 'Ý chí & Nguyện vọng',
    jlpt: 'N4',
    examples: [
      { jp: '静かにしてほしい。', reading: 'しずかにしてほしい。', meaning: 'Tôi muốn bạn giữ yên lặng.' },
      { jp: '母に元気でいてほしい。', reading: 'ははにげんきでいてほしい。', meaning: 'Tôi mong mẹ luôn khỏe mạnh.' },
    ],
  },
  {
    id: 'gex4-20',
    pattern: '～たがる (tagaru)',
    meaning: 'Muốn (người thứ ba biểu lộ)',
    category: 'Ý chí & Nguyện vọng',
    jlpt: 'N4',
    examples: [
      { jp: '弟はいつもお菓子を食べたがる。', reading: 'おとうとはいつもおかしをたべたがる。', meaning: 'Em trai tôi lúc nào cũng muốn ăn bánh kẹo.' },
      { jp: '子供たちは外で遊びたがっている。', reading: 'こどもたちはそとであそびたがっている。', meaning: 'Bọn trẻ đang muốn ra ngoài chơi.' },
    ],
  },

  // ── Kính ngữ & Lịch sự ─────────────────────────────────────────────────
  {
    id: 'gex4-17',
    pattern: '～ていただけませんか (te itadakemasen ka)',
    meaning: 'Phiền anh/chị có thể...không? (lịch sự)',
    category: 'Kính ngữ & Lịch sự',
    jlpt: 'N4',
    examples: [
      { jp: 'もう一度説明していただけませんか。', reading: 'もういちどせつめいしていただけませんか。', meaning: 'Phiền anh/chị giải thích lại một lần nữa được không?' },
      { jp: '写真を撮っていただけませんか。', reading: 'しゃしんをとっていただけませんか。', meaning: 'Phiền anh/chị chụp ảnh giúp tôi được không?' },
    ],
  },
  {
    id: 'gex4-25',
    pattern: '～てすみません (te sumimasen)',
    meaning: 'Xin lỗi vì đã (làm gì)',
    category: 'Kính ngữ & Lịch sự',
    jlpt: 'N4',
    examples: [
      { jp: '遅れてすみません。', reading: 'おくれてすみません。', meaning: 'Xin lỗi vì đã đến trễ.' },
      { jp: 'ご迷惑をかけてすみませんでした。', reading: 'ごめいわくをかけてすみませんでした。', meaning: 'Xin lỗi vì đã gây phiền phức.' },
    ],
  },

  // ── Trạng thái & Mức độ ────────────────────────────────────────────────
  {
    id: 'gex4-19',
    pattern: '～そうもない (sou mo nai)',
    meaning: 'Có vẻ không thể / Khó mà',
    category: 'Trạng thái & Mức độ',
    jlpt: 'N4',
    examples: [
      { jp: '今日中に終わりそうもない。', reading: 'きょうじゅうにおわりそうもない。', meaning: 'Có vẻ không thể xong trong hôm nay.' },
      { jp: '雨はやみそうもない。', reading: 'あめはやみそうもない。', meaning: 'Mưa có vẻ chưa dứt được.' },
    ],
  },
  {
    id: 'gex4-21',
    pattern: '～にくい (nikui)',
    meaning: 'Khó làm / Khó để',
    category: 'Trạng thái & Mức độ',
    jlpt: 'N4',
    examples: [
      { jp: 'この字は読みにくい。', reading: 'このじはよみにくい。', meaning: 'Chữ này khó đọc.' },
      { jp: 'この靴は歩きにくい。', reading: 'このくつはあるきにくい。', meaning: 'Đôi giày này khó đi.' },
    ],
  },
  {
    id: 'gex4-22',
    pattern: '～やすい (yasui)',
    meaning: 'Dễ làm / Dễ để',
    category: 'Trạng thái & Mức độ',
    jlpt: 'N4',
    examples: [
      { jp: 'この本は分かりやすい。', reading: 'このほんはわかりやすい。', meaning: 'Cuốn sách này dễ hiểu.' },
      { jp: '冬は風邪を引きやすい。', reading: 'ふゆはかぜをひきやすい。', meaning: 'Mùa đông dễ bị cảm.' },
    ],
  },
  {
    id: 'gex4-23',
    pattern: '～がる (garu)',
    meaning: 'Biểu lộ cảm xúc / Tỏ ra (người khác)',
    category: 'Trạng thái & Mức độ',
    jlpt: 'N4',
    examples: [
      { jp: '妹は暗い所を怖がる。', reading: 'いもうとはくらいところをこわがる。', meaning: 'Em gái tôi tỏ ra sợ chỗ tối.' },
      { jp: '猫が外に出たがっている。', reading: 'ねこがそとにでたがっている。', meaning: 'Con mèo đang muốn ra ngoài.' },
    ],
  },

  // ── Nhấn mạnh ──────────────────────────────────────────────────────────
  {
    id: 'gex4-26',
    pattern: '～のは〜だ (no wa ~ da)',
    meaning: 'Nhấn mạnh thông tin (cấu trúc đảo)',
    category: 'Nhấn mạnh',
    jlpt: 'N4',
    examples: [
      { jp: '私が好きなのは日本料理だ。', reading: 'わたしがすきなのはにほんりょうりだ。', meaning: 'Cái mà tôi thích là ẩm thực Nhật.' },
      { jp: '彼が怒ったのは昨日のことだ。', reading: 'かれがおこったのはきのうのことだ。', meaning: 'Việc anh ấy tức giận là chuyện ngày hôm qua.' },
    ],
  },

  // ── Thời gian & Phạm vi ────────────────────────────────────────────────
  {
    id: 'gex4-27',
    pattern: '～中 (chuu / juu)',
    meaning: 'Trong suốt / Giữa lúc / Toàn bộ',
    category: 'Thời gian & Phạm vi',
    jlpt: 'N4',
    examples: [
      { jp: '午前中に届けます。', reading: 'ごぜんちゅうにとどけます。', meaning: 'Tôi sẽ giao trong buổi sáng.' },
      { jp: '世界中の人がそのニュースを知っている。', reading: 'せかいじゅうのひとがそのにゅーすをしっている。', meaning: 'Mọi người trên toàn thế giới đều biết tin đó.' },
    ],
  },

  // ── Động từ kết hợp ────────────────────────────────────────────────────
  {
    id: 'gex4-28',
    pattern: '～始める (hajimeru)',
    meaning: 'Bắt đầu làm gì',
    category: 'Động từ kết hợp',
    jlpt: 'N4',
    examples: [
      { jp: '雨が降り始めた。', reading: 'あめがふりはじめた。', meaning: 'Trời bắt đầu mưa.' },
      { jp: '子供たちが歌い始めた。', reading: 'こどもたちがうたいはじめた。', meaning: 'Bọn trẻ bắt đầu hát.' },
    ],
  },
  {
    id: 'gex4-29',
    pattern: '～続ける (tsuzukeru)',
    meaning: 'Tiếp tục làm gì',
    category: 'Động từ kết hợp',
    jlpt: 'N4',
    examples: [
      { jp: '彼は三時間走り続けた。', reading: 'かれはさんじかんはしりつづけた。', meaning: 'Anh ấy đã chạy liên tục ba tiếng.' },
      { jp: '雨が降り続けている。', reading: 'あめがふりつづけている。', meaning: 'Trời vẫn đang tiếp tục mưa.' },
    ],
  },
  {
    id: 'gex4-30',
    pattern: '～直す (naosu)',
    meaning: 'Làm lại / Sửa lại',
    category: 'Động từ kết hợp',
    jlpt: 'N4',
    examples: [
      { jp: 'レポートを書き直した。', reading: 'れぽーとをかきなおした。', meaning: 'Tôi đã viết lại bài báo cáo.' },
      { jp: 'もう一度やり直しましょう。', reading: 'もういちどやりなおしましょう。', meaning: 'Hãy làm lại lần nữa nào.' },
    ],
  },
  {
    id: 'gex4-31',
    pattern: '～合う (au)',
    meaning: 'Cùng nhau / Lẫn nhau',
    category: 'Động từ kết hợp',
    jlpt: 'N4',
    examples: [
      { jp: '友達と助け合うことが大切だ。', reading: 'ともだちとたすけあうことがたいせつだ。', meaning: 'Việc giúp đỡ lẫn nhau với bạn bè là quan trọng.' },
      { jp: '二人で話し合った。', reading: 'ふたりではなしあった。', meaning: 'Hai người đã cùng nhau bàn bạc.' },
    ],
  },
  {
    id: 'gex4-32',
    pattern: '～かける (kakeru)',
    meaning: 'Làm dở / Làm giữa chừng',
    category: 'Động từ kết hợp',
    jlpt: 'N4',
    examples: [
      { jp: 'ご飯を食べかけたまま出かけた。', reading: 'ごはんをたべかけたままでかけた。', meaning: 'Tôi đã ra ngoài trong khi đang ăn dở cơm.' },
      { jp: '読みかけの本がテーブルに置いてある。', reading: 'よみかけのほんがてーぶるにおいてある。', meaning: 'Cuốn sách đang đọc dở được đặt trên bàn.' },
    ],
  },
  {
    id: 'gex4-33',
    pattern: '～きる (kiru)',
    meaning: 'Làm hết / Hoàn toàn',
    category: 'Động từ kết hợp',
    jlpt: 'N4',
    examples: [
      { jp: 'マラソンを走りきった。', reading: 'まらそんをはしりきった。', meaning: 'Tôi đã chạy hết quãng đường marathon.' },
      { jp: 'このケーキは大きすぎて食べきれない。', reading: 'このけーきはおおきすぎてたべきれない。', meaning: 'Cái bánh này to quá, ăn không hết.' },
    ],
  },

  // ── Tình huống & Điều kiện ─────────────────────────────────────────────
  {
    id: 'gex4-34',
    pattern: '～場合 (baai)',
    meaning: 'Trường hợp / Trong trường hợp',
    category: 'Tình huống & Điều kiện',
    jlpt: 'N4',
    examples: [
      { jp: '雨の場合は中止します。', reading: 'あめのばあいはちゅうしします。', meaning: 'Trường hợp trời mưa sẽ hủy bỏ.' },
      { jp: '分からない場合は先生に聞いてください。', reading: 'わからないばあいはせんせいにきいてください。', meaning: 'Trường hợp không hiểu, hãy hỏi thầy cô.' },
    ],
  },
  {
    id: 'gex4-35',
    pattern: '～通り (toori)',
    meaning: 'Theo đúng / Giống như',
    category: 'Tình huống & Điều kiện',
    jlpt: 'N4',
    examples: [
      { jp: '説明書の通りに作ってください。', reading: 'せつめいしょのとおりにつくってください。', meaning: 'Hãy làm theo đúng hướng dẫn sử dụng.' },
      { jp: '思った通りの結果が出た。', reading: 'おもったとおりのけっかがでた。', meaning: 'Kết quả đúng như tôi đã nghĩ.' },
    ],
  },
];

// ── from: grammarExp_N3_Part1.ts ──
export const GRAMMAR_EXP_N3_P1: GrammarEntry[] = [
  {
    id: 'gex3a-01',
    pattern: '～ことにする (koto ni suru)',
    meaning: 'Quyết định làm gì đó (do bản thân quyết định)',
    category: 'Quyết định & Ý chí',
    jlpt: 'N3',
    examples: [
      { jp: '来月から毎日運動することにした。', reading: 'らいげつからまいにちうんどうすることにした。', meaning: 'Tôi đã quyết định tập thể dục mỗi ngày từ tháng sau.' },
      { jp: '今日は早く寝ることにする。', reading: 'きょうははやくねることにする。', meaning: 'Hôm nay tôi quyết định đi ngủ sớm.' },
    ],
  },
  {
    id: 'gex3a-02',
    pattern: '～ことになる (koto ni naru)',
    meaning: 'Được quyết định (do hoàn cảnh hoặc người khác quyết định)',
    category: 'Quyết định & Ý chí',
    jlpt: 'N3',
    examples: [
      { jp: '来年、大阪に転勤することになった。', reading: 'らいねん、おおさかにてんきんすることになった。', meaning: 'Năm sau tôi được chuyển công tác đến Osaka.' },
      { jp: '会議は来週の月曜日に行うことになりました。', reading: 'かいぎはらいしゅうのげつようびにおこなうことになりました。', meaning: 'Cuộc họp đã được quyết định tổ chức vào thứ Hai tuần sau.' },
    ],
  },
  {
    id: 'gex3a-03',
    pattern: '～ようにする (you ni suru)',
    meaning: 'Cố gắng sao cho, chú ý làm sao để',
    category: 'Nỗ lực & Thay đổi',
    jlpt: 'N3',
    examples: [
      { jp: '野菜をたくさん食べるようにしている。', reading: 'やさいをたくさんたべるようにしている。', meaning: 'Tôi đang cố gắng ăn nhiều rau.' },
      { jp: '遅刻しないようにしてください。', reading: 'ちこくしないようにしてください。', meaning: 'Hãy cố gắng đừng đi trễ.' },
    ],
  },
  {
    id: 'gex3a-04',
    pattern: '～ようになる (you ni naru)',
    meaning: 'Trở nên (thay đổi trạng thái)',
    category: 'Nỗ lực & Thay đổi',
    jlpt: 'N3',
    examples: [
      { jp: '日本に来てから、刺身が食べられるようになった。', reading: 'にほんにきてから、さしみがたべられるようになった。', meaning: 'Kể từ khi đến Nhật, tôi đã có thể ăn được sashimi.' },
      { jp: '毎日練習したら、漢字が読めるようになりました。', reading: 'まいにちれんしゅうしたら、かんじがよめるようになりました。', meaning: 'Nhờ luyện tập mỗi ngày, tôi đã đọc được kanji.' },
    ],
  },
  {
    id: 'gex3a-05',
    pattern: '～ことはない (koto wa nai)',
    meaning: 'Không cần phải, không việc gì phải',
    category: 'Phủ định & Không cần thiết',
    jlpt: 'N3',
    examples: [
      { jp: 'そんなに心配することはないよ。', reading: 'そんなにしんぱいすることはないよ。', meaning: 'Không cần phải lo lắng như vậy đâu.' },
      { jp: '急ぐことはない。まだ時間はたっぷりある。', reading: 'いそぐことはない。まだじかんはたっぷりある。', meaning: 'Không cần phải vội. Vẫn còn rất nhiều thời gian.' },
    ],
  },
  {
    id: 'gex3a-06',
    pattern: '～ということだ (to iu koto da)',
    meaning: 'Nghĩa là, có nghĩa là; nghe nói rằng',
    category: 'Giải thích & Truyền đạt',
    jlpt: 'N3',
    examples: [
      { jp: '彼が来ないということは、忙しいということだ。', reading: 'かれがこないということは、いそがしいということだ。', meaning: 'Việc anh ấy không đến có nghĩa là anh ấy bận.' },
      { jp: '天気予報によると、明日は雨だということだ。', reading: 'てんきよほうによると、あしたはあめだということだ。', meaning: 'Theo dự báo thời tiết thì nghe nói ngày mai trời mưa.' },
    ],
  },
  {
    id: 'gex3a-07',
    pattern: '～というのは (to iu no wa)',
    meaning: 'Cái gọi là, nghĩa của ~ là',
    category: 'Giải thích & Truyền đạt',
    jlpt: 'N3',
    examples: [
      { jp: '「花見」というのは、桜を見ながら楽しむことです。', reading: '「はなみ」というのは、さくらをみながらたのしむことです。', meaning: '「Hanami」là việc ngắm và thưởng thức hoa anh đào.' },
      { jp: '敬語というのは、相手を尊重する言葉遣いのことだ。', reading: 'けいごというのは、あいてをそんちょうすることばづかいのことだ。', meaning: 'Kính ngữ là cách dùng từ để tôn trọng đối phương.' },
    ],
  },
  {
    id: 'gex3a-08',
    pattern: '～ようとしている (you to shite iru)',
    meaning: 'Sắp sửa, đang chuẩn bị',
    category: 'Thời điểm & Trạng thái',
    jlpt: 'N3',
    examples: [
      { jp: '太陽が沈もうとしている。', reading: 'たいようがしずもうとしている。', meaning: 'Mặt trời đang sắp lặn.' },
      { jp: '電車が出発しようとしている。急いで！', reading: 'でんしゃがしゅっぱつしようとしている。いそいで！', meaning: 'Tàu sắp khởi hành rồi. Nhanh lên!' },
    ],
  },
  {
    id: 'gex3a-09',
    pattern: '～てばかりいる (te bakari iru)',
    meaning: 'Cứ toàn, suốt ngày chỉ',
    category: 'Phê bình & Thói quen',
    jlpt: 'N3',
    examples: [
      { jp: '弟はゲームをしてばかりいる。', reading: 'おとうとはげーむをしてばかりいる。', meaning: 'Em trai tôi suốt ngày cứ chơi game.' },
      { jp: '文句を言ってばかりいないで、自分でやりなさい。', reading: 'もんくをいってばかりいないで、じぶんでやりなさい。', meaning: 'Đừng có suốt ngày phàn nàn, hãy tự mình làm đi.' },
    ],
  },
  {
    id: 'gex3a-10',
    pattern: '～っこない (kko nai)',
    meaning: 'Không thể nào, chắc chắn không thể',
    category: 'Phủ định & Không cần thiết',
    jlpt: 'N3',
    examples: [
      { jp: 'こんな難しい試験、受かりっこない。', reading: 'こんなむずかしいしけん、うかりっこない。', meaning: 'Kỳ thi khó thế này, không thể nào đậu được.' },
      { jp: 'あの人に勝てっこないよ。', reading: 'あのひとにかてっこないよ。', meaning: 'Không thể nào thắng được người đó đâu.' },
    ],
  },
  {
    id: 'gex3a-11',
    pattern: '～ないことには (nai koto ni wa)',
    meaning: 'Nếu không...thì không thể',
    category: 'Điều kiện & Giả định',
    jlpt: 'N3',
    examples: [
      { jp: '実際に行ってみないことには、わからない。', reading: 'じっさいにいってみないことには、わからない。', meaning: 'Nếu không thực sự đi thử thì không thể biết được.' },
      { jp: '自分で食べてみないことには、おいしいかどうか判断できない。', reading: 'じぶんでたべてみないことには、おいしいかどうかはんだんできない。', meaning: 'Nếu không tự mình ăn thử thì không thể đánh giá có ngon hay không.' },
    ],
  },
  {
    id: 'gex3a-12',
    pattern: '～ようがない (you ga nai)',
    meaning: 'Không có cách nào, không thể nào',
    category: 'Phủ định & Không cần thiết',
    jlpt: 'N3',
    examples: [
      { jp: '住所がわからなければ、手紙の送りようがない。', reading: 'じゅうしょがわからなければ、てがみのおくりようがない。', meaning: 'Nếu không biết địa chỉ thì không có cách nào gửi thư được.' },
      { jp: 'あの事故は防ぎようがなかった。', reading: 'あのじこはふせぎようがなかった。', meaning: 'Vụ tai nạn đó không có cách nào ngăn chặn được.' },
    ],
  },
  {
    id: 'gex3a-13',
    pattern: '～てたまらない (te tamaranai)',
    meaning: 'Không chịu nổi, vô cùng',
    category: 'Cảm xúc & Mức độ',
    jlpt: 'N3',
    examples: [
      { jp: '暑くてたまらない。エアコンをつけてください。', reading: 'あつくてたまらない。えあこんをつけてください。', meaning: 'Nóng không chịu nổi. Hãy bật điều hòa đi.' },
      { jp: '合格の知らせを聞いて、嬉しくてたまらなかった。', reading: 'ごうかくのしらせをきいて、うれしくてたまらなかった。', meaning: 'Nghe tin đậu, tôi vui mừng không chịu nổi.' },
    ],
  },
  {
    id: 'gex3a-14',
    pattern: '～にかけて (ni kakete)',
    meaning: 'Từ...đến (khoảng thời gian hoặc không gian)',
    category: 'Phạm vi & Thời gian',
    jlpt: 'N3',
    examples: [
      { jp: '三月から五月にかけて、桜が咲く。', reading: 'さんがつからごがつにかけて、さくらがさく。', meaning: 'Từ tháng 3 đến tháng 5, hoa anh đào nở.' },
      { jp: '関東から東北にかけて大雪が降った。', reading: 'かんとうからとうほくにかけておおゆきがふった。', meaning: 'Từ vùng Kanto đến Tohoku đã có tuyết lớn.' },
    ],
  },
  {
    id: 'gex3a-15',
    pattern: '～にわたって (ni watatte)',
    meaning: 'Suốt, trải dài qua (thời gian hoặc phạm vi)',
    category: 'Phạm vi & Thời gian',
    jlpt: 'N3',
    examples: [
      { jp: '三日間にわたって会議が行われた。', reading: 'みっかかんにわたってかいぎがおこなわれた。', meaning: 'Cuộc họp đã được tổ chức suốt 3 ngày.' },
      { jp: '広い範囲にわたって被害が出た。', reading: 'ひろいはんいにわたってひがいがでた。', meaning: 'Thiệt hại trải dài trên phạm vi rộng.' },
    ],
  },
  {
    id: 'gex3a-16',
    pattern: '～に伴って (ni tomonatte)',
    meaning: 'Đi kèm với, cùng với',
    category: 'Quan hệ & Liên kết',
    jlpt: 'N3',
    examples: [
      { jp: '人口の増加に伴って、住宅問題が深刻になっている。', reading: 'じんこうのぞうかにともなって、じゅうたくもんだいがしんこくになっている。', meaning: 'Đi kèm với sự gia tăng dân số, vấn đề nhà ở trở nên nghiêm trọng.' },
      { jp: '経済の発展に伴って、環境問題も増えてきた。', reading: 'けいざいのはってんにともなって、かんきょうもんだいもふえてきた。', meaning: 'Cùng với sự phát triển kinh tế, vấn đề môi trường cũng tăng lên.' },
    ],
  },
  {
    id: 'gex3a-17',
    pattern: '～に従って (ni shitagatte)',
    meaning: 'Theo, tuân theo; càng...càng',
    category: 'Quan hệ & Liên kết',
    jlpt: 'N3',
    examples: [
      { jp: '説明書に従って、組み立ててください。', reading: 'せつめいしょにしたがって、くみたててください。', meaning: 'Hãy lắp ráp theo hướng dẫn sử dụng.' },
      { jp: '高くなるに従って、気温が下がる。', reading: 'たかくなるにしたがって、きおんがさがる。', meaning: 'Càng lên cao, nhiệt độ càng giảm.' },
    ],
  },
  {
    id: 'gex3a-18',
    pattern: '～に応じて (ni oujite)',
    meaning: 'Tùy theo, phù hợp với',
    category: 'Quan hệ & Liên kết',
    jlpt: 'N3',
    examples: [
      { jp: '能力に応じて、給料が決まる。', reading: 'のうりょくにおうじて、きゅうりょうがきまる。', meaning: 'Lương được quyết định tùy theo năng lực.' },
      { jp: '季節に応じて、メニューを変える。', reading: 'きせつにおうじて、めにゅーをかえる。', meaning: 'Thay đổi thực đơn tùy theo mùa.' },
    ],
  },
  {
    id: 'gex3a-19',
    pattern: '～に比べて (ni kurabete)',
    meaning: 'So với',
    category: 'So sánh & Đối chiếu',
    jlpt: 'N3',
    examples: [
      { jp: '去年に比べて、今年の夏は涼しい。', reading: 'きょねんにくらべて、ことしのなつはすずしい。', meaning: 'So với năm ngoái, mùa hè năm nay mát hơn.' },
      { jp: '日本に比べて、ベトナムの物価は安い。', reading: 'にほんにくらべて、べとなむのぶっかはやすい。', meaning: 'So với Nhật Bản, vật giá ở Việt Nam rẻ hơn.' },
    ],
  },
  {
    id: 'gex3a-20',
    pattern: '～に反して (ni hanshite)',
    meaning: 'Trái với, ngược lại với',
    category: 'So sánh & Đối chiếu',
    jlpt: 'N3',
    examples: [
      { jp: '予想に反して、試合に勝った。', reading: 'よそうにはんして、しあいにかった。', meaning: 'Trái với dự đoán, chúng tôi đã thắng trận đấu.' },
      { jp: '親の期待に反して、彼は大学を辞めた。', reading: 'おやのきたいにはんして、かれはだいがくをやめた。', meaning: 'Trái với kỳ vọng của bố mẹ, anh ấy đã bỏ đại học.' },
    ],
  },
  {
    id: 'gex3a-21',
    pattern: '～に加えて (ni kuwaete)',
    meaning: 'Thêm vào đó, ngoài...ra còn',
    category: 'Bổ sung & Mở rộng',
    jlpt: 'N3',
    examples: [
      { jp: '英語に加えて、中国語も話せる。', reading: 'えいごにくわえて、ちゅうごくごもはなせる。', meaning: 'Ngoài tiếng Anh ra, còn nói được tiếng Trung.' },
      { jp: '雨に加えて、風も強くなってきた。', reading: 'あめにくわえて、かぜもつよくなってきた。', meaning: 'Ngoài mưa ra, gió cũng mạnh lên.' },
    ],
  },
  {
    id: 'gex3a-22',
    pattern: '～にかわって (ni kawatte)',
    meaning: 'Thay thế cho, thay mặt cho',
    category: 'Thay thế & Đại diện',
    jlpt: 'N3',
    examples: [
      { jp: '病気の母にかわって、私が料理をした。', reading: 'びょうきのははにかわって、わたしがりょうりをした。', meaning: 'Tôi đã nấu ăn thay cho mẹ đang bị bệnh.' },
      { jp: '社長にかわって、副社長が挨拶をした。', reading: 'しゃちょうにかわって、ふくしゃちょうがあいさつをした。', meaning: 'Phó giám đốc đã phát biểu thay mặt giám đốc.' },
    ],
  },
  {
    id: 'gex3a-23',
    pattern: '～に先立って (ni sakidatte)',
    meaning: 'Trước khi, trước thềm',
    category: 'Trình tự & Thời điểm',
    jlpt: 'N3',
    examples: [
      { jp: '開会に先立って、会長が挨拶をした。', reading: 'かいかいにさきだって、かいちょうがあいさつをした。', meaning: 'Trước khi khai mạc, chủ tịch đã phát biểu.' },
      { jp: '出発に先立って、荷物を確認してください。', reading: 'しゅっぱつにさきだって、にもつをかくにんしてください。', meaning: 'Trước khi khởi hành, hãy kiểm tra hành lý.' },
    ],
  },
  {
    id: 'gex3a-24',
    pattern: '～をきっかけに (wo kikkake ni)',
    meaning: 'Nhân dịp, lấy cơ hội',
    category: 'Nguyên nhân & Cơ hội',
    jlpt: 'N3',
    examples: [
      { jp: '留学をきっかけに、日本語を勉強し始めた。', reading: 'りゅうがくをきっかけに、にほんごをべんきょうしはじめた。', meaning: 'Nhân dịp du học, tôi bắt đầu học tiếng Nhật.' },
      { jp: '結婚をきっかけに、タバコをやめた。', reading: 'けっこんをきっかけに、たばこをやめた。', meaning: 'Nhân dịp kết hôn, tôi đã bỏ thuốc lá.' },
    ],
  },
  {
    id: 'gex3a-25',
    pattern: '～を通じて (wo tsuujite)',
    meaning: 'Thông qua, qua',
    category: 'Phương tiện & Cách thức',
    jlpt: 'N3',
    examples: [
      { jp: 'インターネットを通じて、世界中の情報が手に入る。', reading: 'いんたーねっとをつうじて、せかいじゅうのじょうほうがてにはいる。', meaning: 'Thông qua internet, có thể lấy được thông tin khắp thế giới.' },
      { jp: 'ボランティア活動を通じて、多くのことを学んだ。', reading: 'ぼらんてぃあかつどうをつうじて、おおくのことをまなんだ。', meaning: 'Thông qua hoạt động tình nguyện, tôi đã học được nhiều điều.' },
    ],
  },
  {
    id: 'gex3a-26',
    pattern: '～を含めて (wo fukumete)',
    meaning: 'Bao gồm cả, tính cả',
    category: 'Phạm vi & Thời gian',
    jlpt: 'N3',
    examples: [
      { jp: '私を含めて、参加者は十人です。', reading: 'わたしをふくめて、さんかしゃはじゅうにんです。', meaning: 'Bao gồm cả tôi, có mười người tham gia.' },
      { jp: '送料を含めて、三千円になります。', reading: 'そうりょうをふくめて、さんぜんえんになります。', meaning: 'Tính cả phí vận chuyển, tổng cộng là ba nghìn yên.' },
    ],
  },
  {
    id: 'gex3a-27',
    pattern: '～をもとに (wo moto ni)',
    meaning: 'Dựa trên, lấy làm cơ sở',
    category: 'Phương tiện & Cách thức',
    jlpt: 'N3',
    examples: [
      { jp: 'この映画は実話をもとに作られた。', reading: 'このえいがはじつわをもとにつくられた。', meaning: 'Bộ phim này được làm dựa trên câu chuyện có thật.' },
      { jp: 'アンケートの結果をもとに、計画を立てた。', reading: 'あんけーとのけっかをもとに、けいかくをたてた。', meaning: 'Dựa trên kết quả khảo sát, chúng tôi đã lập kế hoạch.' },
    ],
  },
  {
    id: 'gex3a-28',
    pattern: '～向け (muke)',
    meaning: 'Dành cho (đối tượng)',
    category: 'Đối tượng & Phù hợp',
    jlpt: 'N3',
    examples: [
      { jp: 'この本は初心者向けに書かれている。', reading: 'このほんはしょしんしゃむけにかかれている。', meaning: 'Cuốn sách này được viết dành cho người mới bắt đầu.' },
      { jp: '子供向けのアニメが人気だ。', reading: 'こどもむけのあにめがにんきだ。', meaning: 'Anime dành cho trẻ em rất được yêu thích.' },
    ],
  },
  {
    id: 'gex3a-29',
    pattern: '～向き (muki)',
    meaning: 'Phù hợp với, thích hợp cho',
    category: 'Đối tượng & Phù hợp',
    jlpt: 'N3',
    examples: [
      { jp: 'この料理は辛い物が好きな人向きだ。', reading: 'このりょうりはからいものがすきなひとむきだ。', meaning: 'Món ăn này phù hợp với người thích đồ cay.' },
      { jp: 'あの仕事は体力のある人向きです。', reading: 'あのしごとはたいりょくのあるひとむきです。', meaning: 'Công việc đó thích hợp cho người có sức khỏe tốt.' },
    ],
  },
  {
    id: 'gex3a-30',
    pattern: '～気味 (gimi)',
    meaning: 'Hơi có vẻ, có khuynh hướng',
    category: 'Khuynh hướng & Trạng thái',
    jlpt: 'N3',
    examples: [
      { jp: '最近、風邪気味で体がだるい。', reading: 'さいきん、かぜぎみでからだがだるい。', meaning: 'Gần đây, hơi có vẻ bị cảm nên người mệt mỏi.' },
      { jp: '仕事が多くて、疲れ気味だ。', reading: 'しごとがおおくて、つかれぎみだ。', meaning: 'Công việc nhiều nên hơi có vẻ mệt.' },
    ],
  },
  {
    id: 'gex3a-31',
    pattern: '～がち (gachi)',
    meaning: 'Hay, thường hay (mang nghĩa tiêu cực)',
    category: 'Khuynh hướng & Trạng thái',
    jlpt: 'N3',
    examples: [
      { jp: '冬は風邪を引きがちだ。', reading: 'ふゆはかぜをひきがちだ。', meaning: 'Mùa đông hay bị cảm.' },
      { jp: '彼女は遠慮がちに話す。', reading: 'かのじょはえんりょがちにはなす。', meaning: 'Cô ấy nói chuyện với vẻ e dè.' },
    ],
  },
  {
    id: 'gex3a-32',
    pattern: '～たびに (tabi ni)',
    meaning: 'Mỗi lần, mỗi khi',
    category: 'Tần suất & Lặp lại',
    jlpt: 'N3',
    examples: [
      { jp: '日本に行くたびに、お土産をたくさん買う。', reading: 'にほんにいくたびに、おみやげをたくさんかう。', meaning: 'Mỗi lần đi Nhật, tôi đều mua nhiều quà.' },
      { jp: 'この曲を聞くたびに、学生時代を思い出す。', reading: 'このきょくをきくたびに、がくせいじだいをおもいだす。', meaning: 'Mỗi khi nghe bài hát này, tôi lại nhớ thời sinh viên.' },
    ],
  },
  {
    id: 'gex3a-33',
    pattern: '～ついでに (tsuide ni)',
    meaning: 'Nhân tiện, tiện thể',
    category: 'Tần suất & Lặp lại',
    jlpt: 'N3',
    examples: [
      { jp: '買い物のついでに、郵便局に寄った。', reading: 'かいもののついでに、ゆうびんきょくによった。', meaning: 'Nhân tiện đi mua sắm, tôi ghé qua bưu điện.' },
      { jp: '散歩のついでに、コンビニでジュースを買った。', reading: 'さんぽのついでに、こんびにでじゅーすをかった。', meaning: 'Nhân tiện đi dạo, tôi mua nước ở cửa hàng tiện lợi.' },
    ],
  },
  {
    id: 'gex3a-34',
    pattern: '～最中に (saichuu ni)',
    meaning: 'Giữa lúc đang, đang trong lúc',
    category: 'Trình tự & Thời điểm',
    jlpt: 'N3',
    examples: [
      { jp: '食事の最中に電話が鳴った。', reading: 'しょくじのさいちゅうにでんわがなった。', meaning: 'Giữa lúc đang ăn thì điện thoại reo.' },
      { jp: '会議の最中に地震が起きた。', reading: 'かいぎのさいちゅうにじしんがおきた。', meaning: 'Giữa lúc đang họp thì xảy ra động đất.' },
    ],
  },
  {
    id: 'gex3a-35',
    pattern: '～途中で (tochuu de)',
    meaning: 'Giữa chừng, trên đường',
    category: 'Trình tự & Thời điểm',
    jlpt: 'N3',
    examples: [
      { jp: '学校へ行く途中で、友達に会った。', reading: 'がっこうへいくとちゅうで、ともだちにあった。', meaning: 'Trên đường đến trường, tôi gặp bạn.' },
      { jp: '映画の途中で寝てしまった。', reading: 'えいがのとちゅうでねてしまった。', meaning: 'Tôi đã ngủ mất giữa chừng bộ phim.' },
    ],
  },
  {
    id: 'gex3a-36',
    pattern: '～次第 (shidai)',
    meaning: 'Ngay khi, tùy thuộc vào',
    category: 'Trình tự & Thời điểm',
    jlpt: 'N3',
    examples: [
      { jp: '届き次第、ご連絡いたします。', reading: 'とどきしだい、ごれんらくいたします。', meaning: 'Ngay khi hàng đến, tôi sẽ liên lạc cho bạn.' },
      { jp: '結果は努力次第だ。', reading: 'けっかはどりょくしだいだ。', meaning: 'Kết quả tùy thuộc vào sự nỗ lực.' },
    ],
  },
  {
    id: 'gex3a-37',
    pattern: '～たところ (ta tokoro)',
    meaning: 'Khi thử làm...thì (phát hiện ra)',
    category: 'Phát hiện & Kết quả',
    jlpt: 'N3',
    examples: [
      { jp: '友達に聞いたところ、彼はもう引っ越したそうだ。', reading: 'ともだちにきいたところ、かれはもうひっこしたそうだ。', meaning: 'Khi hỏi bạn bè thì nghe nói anh ấy đã chuyển nhà rồi.' },
      { jp: '調べたところ、原因がわかった。', reading: 'しらべたところ、げんいんがわかった。', meaning: 'Khi điều tra thì đã tìm ra nguyên nhân.' },
    ],
  },
  {
    id: 'gex3a-38',
    pattern: '～ところに (tokoro ni)',
    meaning: 'Đúng lúc đang (thì xảy ra)',
    category: 'Phát hiện & Kết quả',
    jlpt: 'N3',
    examples: [
      { jp: '出かけようとしたところに、電話がかかってきた。', reading: 'でかけようとしたところに、でんわがかかってきた。', meaning: 'Đúng lúc định ra ngoài thì có điện thoại gọi đến.' },
      { jp: 'ちょうど寝ようとしていたところに、友達が来た。', reading: 'ちょうどねようとしていたところに、ともだちがきた。', meaning: 'Đúng lúc đang định ngủ thì bạn đến.' },
    ],
  },
  {
    id: 'gex3a-39',
    pattern: '～ところで (tokoro de)',
    meaning: 'Cho dù có...cũng (vô ích)',
    category: 'Nhượng bộ & Nghịch ý',
    jlpt: 'N3',
    examples: [
      { jp: '今さら後悔したところで、もう遅い。', reading: 'いまさらこうかいしたところで、もうおそい。', meaning: 'Cho dù bây giờ có hối hận thì cũng đã muộn rồi.' },
      { jp: 'いくら説明したところで、彼は聞かないだろう。', reading: 'いくらせつめいしたところで、かれはきかないだろう。', meaning: 'Cho dù có giải thích bao nhiêu thì anh ấy cũng không nghe đâu.' },
    ],
  },
  {
    id: 'gex3a-40',
    pattern: '～ところが (tokoro ga)',
    meaning: 'Nhưng mà, ai ngờ (kết quả ngoài dự kiến)',
    category: 'Phát hiện & Kết quả',
    jlpt: 'N3',
    examples: [
      { jp: '難しいと思った。ところが、意外と簡単だった。', reading: 'むずかしいとおもった。ところが、いがいとかんたんだった。', meaning: 'Tôi tưởng là khó. Nhưng ai ngờ lại khá dễ.' },
      { jp: '晴れると思って出かけた。ところが、急に雨が降ってきた。', reading: 'はれるとおもってでかけた。ところが、きゅうにあめがふってきた。', meaning: 'Tôi ra ngoài vì nghĩ trời sẽ nắng. Nhưng ai ngờ trời đột nhiên mưa.' },
    ],
  },
  {
    id: 'gex3a-41',
    pattern: '～にしては (ni shite wa)',
    meaning: 'Xét về mặt, so với tiêu chuẩn thì',
    category: 'So sánh & Đối chiếu',
    jlpt: 'N3',
    examples: [
      { jp: '初めてにしては、上手に作れたね。', reading: 'はじめてにしては、じょうずにつくれたね。', meaning: 'So với lần đầu thì bạn đã làm khá giỏi đấy.' },
      { jp: '子供にしては、難しい言葉をよく知っている。', reading: 'こどもにしては、むずかしいことばをよくしっている。', meaning: 'Xét việc còn nhỏ thì biết nhiều từ khó ghê.' },
    ],
  },
  {
    id: 'gex3a-42',
    pattern: '～にしても (ni shite mo)',
    meaning: 'Cho dù, ngay cả khi',
    category: 'Nhượng bộ & Nghịch ý',
    jlpt: 'N3',
    examples: [
      { jp: '忙しいにしても、食事はちゃんと取るべきだ。', reading: 'いそがしいにしても、しょくじはちゃんととるべきだ。', meaning: 'Cho dù bận thì cũng nên ăn uống đàng hoàng.' },
      { jp: '冗談にしても、ひどすぎる。', reading: 'じょうだんにしても、ひどすぎる。', meaning: 'Cho dù là đùa thì cũng quá đáng.' },
    ],
  },
  {
    id: 'gex3a-43',
    pattern: '～にかかわらず (ni kakawarazu)',
    meaning: 'Bất kể, không phân biệt',
    category: 'Nhượng bộ & Nghịch ý',
    jlpt: 'N3',
    examples: [
      { jp: '天気にかかわらず、試合は行われる。', reading: 'てんきにかかわらず、しあいはおこなわれる。', meaning: 'Bất kể thời tiết thế nào, trận đấu vẫn diễn ra.' },
      { jp: '年齢にかかわらず、誰でも参加できる。', reading: 'ねんれいにかかわらず、だれでもさんかできる。', meaning: 'Bất kể tuổi tác, ai cũng có thể tham gia.' },
    ],
  },
  {
    id: 'gex3a-44',
    pattern: '～割に (wari ni)',
    meaning: 'So với thì, mặc dù...nhưng',
    category: 'So sánh & Đối chiếu',
    jlpt: 'N3',
    examples: [
      { jp: 'このレストランは値段の割に、おいしい。', reading: 'このれすとらんはねだんのわりに、おいしい。', meaning: 'Nhà hàng này so với giá thì khá ngon.' },
      { jp: '勉強した割に、テストの点が悪かった。', reading: 'べんきょうしたわりに、てすとのてんがわるかった。', meaning: 'Mặc dù đã học nhưng điểm kiểm tra vẫn kém.' },
    ],
  },
  {
    id: 'gex3a-45',
    pattern: '～つつ (tsutsu)',
    meaning: 'Trong khi, mặc dù (nghịch ý)',
    category: 'Nhượng bộ & Nghịch ý',
    jlpt: 'N3',
    examples: [
      { jp: '体に悪いと知りつつ、タバコを吸ってしまう。', reading: 'からだにわるいとしりつつ、たばこをすってしまう。', meaning: 'Mặc dù biết có hại cho sức khỏe nhưng vẫn hút thuốc.' },
      { jp: 'ダイエット中だと思いつつ、ケーキを食べた。', reading: 'だいえっとちゅうだとおもいつつ、けーきをたべた。', meaning: 'Mặc dù nghĩ đang ăn kiêng nhưng vẫn ăn bánh.' },
    ],
  },
  {
    id: 'gex3a-46',
    pattern: '～からには (kara ni wa)',
    meaning: 'Đã...thì phải, vì đã...thì',
    category: 'Quyết tâm & Nghĩa vụ',
    jlpt: 'N3',
    examples: [
      { jp: '約束したからには、必ず守らなければならない。', reading: 'やくそくしたからには、かならずまもらなければならない。', meaning: 'Đã hứa rồi thì phải giữ lời.' },
      { jp: '日本に来たからには、日本語を上手になりたい。', reading: 'にほんにきたからには、にほんごをじょうずになりたい。', meaning: 'Đã đến Nhật rồi thì tôi muốn giỏi tiếng Nhật.' },
    ],
  },
  {
    id: 'gex3a-47',
    pattern: '～上で (ue de)',
    meaning: 'Sau khi; trong việc, khi',
    category: 'Trình tự & Thời điểm',
    jlpt: 'N3',
    examples: [
      { jp: 'よく考えた上で、決めてください。', reading: 'よくかんがえたうえで、きめてください。', meaning: 'Hãy suy nghĩ kỹ rồi hãy quyết định.' },
      { jp: '日本で生活する上で、敬語は大切だ。', reading: 'にほんでせいかつするうえで、けいごはたいせつだ。', meaning: 'Trong việc sống ở Nhật, kính ngữ rất quan trọng.' },
    ],
  },
  {
    id: 'gex3a-48',
    pattern: '～上に (ue ni)',
    meaning: 'Hơn nữa, thêm vào đó',
    category: 'Bổ sung & Mở rộng',
    jlpt: 'N3',
    examples: [
      { jp: '彼は頭がいい上に、スポーツも得意だ。', reading: 'かれはあたまがいいうえに、すぽーつもとくいだ。', meaning: 'Anh ấy thông minh, hơn nữa còn giỏi thể thao.' },
      { jp: '雨が降っている上に、風も強い。', reading: 'あめがふっているうえに、かぜもつよい。', meaning: 'Trời mưa, hơn nữa gió cũng mạnh.' },
    ],
  },
  {
    id: 'gex3a-49',
    pattern: '～際に (sai ni)',
    meaning: 'Khi, nhân dịp, trong trường hợp',
    category: 'Trình tự & Thời điểm',
    jlpt: 'N3',
    examples: [
      { jp: 'お帰りの際に、忘れ物がないかご確認ください。', reading: 'おかえりのさいに、わすれものがないかごかくにんください。', meaning: 'Khi về, xin hãy kiểm tra xem có quên gì không.' },
      { jp: '申し込みの際に、身分証明書が必要です。', reading: 'もうしこみのさいに、みぶんしょうめいしょがひつようです。', meaning: 'Khi đăng ký, cần có giấy chứng minh nhân dân.' },
    ],
  },
  {
    id: 'gex3a-50',
    pattern: '～以上は (ijou wa)',
    meaning: 'Đã...thì, một khi đã',
    category: 'Quyết tâm & Nghĩa vụ',
    jlpt: 'N3',
    examples: [
      { jp: '引き受けた以上は、最後までやり遂げたい。', reading: 'ひきうけたいじょうは、さいごまでやりとげたい。', meaning: 'Đã nhận lời rồi thì tôi muốn hoàn thành đến cùng.' },
      { jp: '学生である以上は、勉強を第一にすべきだ。', reading: 'がくせいであるいじょうは、べんきょうをだいいちにすべきだ。', meaning: 'Đã là sinh viên thì nên đặt việc học lên hàng đầu.' },
    ],
  },
];

// ── from: grammarExp_N3_Part2.ts ──
export const GRAMMAR_EXP_N3_P2: GrammarEntry[] = [
  {
    id: 'gex3b-01',
    pattern: '～げ (ge)',
    meaning: 'Có vẻ, trông...',
    category: 'Trạng thái・Biểu hiện',
    jlpt: 'N3',
    examples: [
      { jp: '彼女は寂しげな表情をしていた。', reading: 'かのじょはさびしげなひょうじょうをしていた。', meaning: 'Cô ấy có vẻ mặt trông buồn.' },
      { jp: '子供が楽しげに遊んでいる。', reading: 'こどもがたのしげにあそんでいる。', meaning: 'Bọn trẻ đang chơi trông vui vẻ.' },
    ],
  },
  {
    id: 'gex3b-02',
    pattern: '～がたい (gatai)',
    meaning: 'Khó mà',
    category: 'Khả năng・Khó khăn',
    jlpt: 'N3',
    examples: [
      { jp: 'あの事故は信じがたい出来事だった。', reading: 'あのじこはしんじがたいできごとだった。', meaning: 'Tai nạn đó là sự kiện khó mà tin được.' },
      { jp: '彼の行動は理解しがたい。', reading: 'かれのこうどうはりかいしがたい。', meaning: 'Hành động của anh ấy khó mà hiểu được.' },
    ],
  },
  {
    id: 'gex3b-03',
    pattern: '～得る (uru/eru)',
    meaning: 'Có thể',
    category: 'Khả năng・Khó khăn',
    jlpt: 'N3',
    examples: [
      { jp: 'そんなことはあり得ると思う。', reading: 'そんなことはありえるとおもう。', meaning: 'Tôi nghĩ chuyện đó có thể xảy ra.' },
      { jp: '彼が犯人であり得る可能性は低い。', reading: 'かれがはんにんでありうるかのうせいはひくい。', meaning: 'Khả năng anh ấy là thủ phạm là thấp.' },
    ],
  },
  {
    id: 'gex3b-04',
    pattern: '～かねない (kanenai)',
    meaning: 'Có khả năng (xấu)',
    category: 'Khả năng・Khó khăn',
    jlpt: 'N3',
    examples: [
      { jp: 'この問題を放置すると、大変なことになりかねない。', reading: 'このもんだいをほうちすると、たいへんなことになりかねない。', meaning: 'Nếu bỏ mặc vấn đề này, có khả năng sẽ thành chuyện nghiêm trọng.' },
      { jp: '無理をすると、体を壊しかねない。', reading: 'むりをすると、からだをこわしかねない。', meaning: 'Nếu cố quá, có khả năng sẽ hỏng người.' },
    ],
  },
  {
    id: 'gex3b-05',
    pattern: '～かねる (kaneru)',
    meaning: 'Khó mà, không thể',
    category: 'Khả năng・Khó khăn',
    jlpt: 'N3',
    examples: [
      { jp: 'その提案には賛成しかねます。', reading: 'そのていあんにはさんせいしかねます。', meaning: 'Tôi khó mà đồng ý với đề xuất đó.' },
      { jp: '申し訳ありませんが、お答えしかねます。', reading: 'もうしわけありませんが、おこたえしかねます。', meaning: 'Xin lỗi, tôi không thể trả lời được.' },
    ],
  },
  {
    id: 'gex3b-06',
    pattern: '～てならない (te naranai)',
    meaning: 'Không thể không',
    category: 'Cảm xúc・Tự phát',
    jlpt: 'N3',
    examples: [
      { jp: '故郷のことが懐かしくてならない。', reading: 'こきょうのことがなつかしくてならない。', meaning: 'Không thể không nhớ quê hương.' },
      { jp: '試験の結果が気になってならない。', reading: 'しけんのけっかがきになってならない。', meaning: 'Không thể không lo lắng về kết quả kỳ thi.' },
    ],
  },
  {
    id: 'gex3b-07',
    pattern: '～に限って (ni kagitte)',
    meaning: 'Hễ khi...thì lại',
    category: 'Phạm vi・Giới hạn',
    jlpt: 'N3',
    examples: [
      { jp: '傘を持っていない日に限って雨が降る。', reading: 'かさをもっていないひにかぎってあめがふる。', meaning: 'Hễ ngày nào không mang ô thì lại mưa.' },
      { jp: '急いでいる時に限って電車が遅れる。', reading: 'いそいでいるときにかぎってでんしゃがおくれる。', meaning: 'Hễ lúc vội thì tàu lại trễ.' },
    ],
  },
  {
    id: 'gex3b-08',
    pattern: '～に関して (ni kanshite)',
    meaning: 'Liên quan đến',
    category: 'Chủ đề・Đối tượng',
    jlpt: 'N3',
    examples: [
      { jp: 'この件に関して、何か質問はありますか。', reading: 'このけんにかんして、なにかしつもんはありますか。', meaning: 'Liên quan đến vấn đề này, có câu hỏi nào không?' },
      { jp: '環境問題に関して議論が行われた。', reading: 'かんきょうもんだいにかんしてぎろんがおこなわれた。', meaning: 'Cuộc thảo luận đã được tiến hành liên quan đến vấn đề môi trường.' },
    ],
  },
  {
    id: 'gex3b-09',
    pattern: '～に基づいて (ni motozuite)',
    meaning: 'Dựa trên',
    category: 'Căn cứ・Cơ sở',
    jlpt: 'N3',
    examples: [
      { jp: '調査結果に基づいて報告書を作成した。', reading: 'ちょうさけっかにもとづいてほうこくしょをさくせいした。', meaning: 'Đã lập báo cáo dựa trên kết quả điều tra.' },
      { jp: '法律に基づいて判断する必要がある。', reading: 'ほうりつにもとづいてはんだんするひつようがある。', meaning: 'Cần phải phán đoán dựa trên pháp luật.' },
    ],
  },
  {
    id: 'gex3b-10',
    pattern: '～に沿って (ni sotte)',
    meaning: 'Theo, dọc theo',
    category: 'Phương hướng・Cơ sở',
    jlpt: 'N3',
    examples: [
      { jp: '川に沿って歩いた。', reading: 'かわにそってあるいた。', meaning: 'Tôi đi bộ dọc theo con sông.' },
      { jp: '計画に沿って進めてください。', reading: 'けいかくにそってすすめてください。', meaning: 'Hãy tiến hành theo kế hoạch.' },
    ],
  },
  {
    id: 'gex3b-11',
    pattern: '～にかけては (ni kakete wa)',
    meaning: 'Về mặt...thì',
    category: 'Phạm vi・Giới hạn',
    jlpt: 'N3',
    examples: [
      { jp: '料理にかけては、母にかなう人はいない。', reading: 'りょうりにかけては、ははにかなうひとはいない。', meaning: 'Về mặt nấu ăn, không ai sánh được với mẹ tôi.' },
      { jp: '数学にかけては彼が一番だ。', reading: 'すうがくにかけてはかれがいちばんだ。', meaning: 'Về mặt toán học thì anh ấy giỏi nhất.' },
    ],
  },
  {
    id: 'gex3b-12',
    pattern: '～において (ni oite)',
    meaning: 'Tại, trong',
    category: 'Chủ đề・Đối tượng',
    jlpt: 'N3',
    examples: [
      { jp: '会議は東京において行われた。', reading: 'かいぎはとうきょうにおいておこなわれた。', meaning: 'Hội nghị đã được tổ chức tại Tokyo.' },
      { jp: '現代社会において、技術の発展は不可欠だ。', reading: 'げんだいしゃかいにおいて、ぎじゅつのはってんはふかけつだ。', meaning: 'Trong xã hội hiện đại, sự phát triển công nghệ là không thể thiếu.' },
    ],
  },
  {
    id: 'gex3b-13',
    pattern: '～における (ni okeru)',
    meaning: 'Tại (trước danh từ)',
    category: 'Chủ đề・Đối tượng',
    jlpt: 'N3',
    examples: [
      { jp: '日本における外国人労働者の数が増えている。', reading: 'にほんにおけるがいこくじんろうどうしゃのかずがふえている。', meaning: 'Số lượng lao động nước ngoài tại Nhật Bản đang tăng.' },
      { jp: '教育における問題点を指摘した。', reading: 'きょういくにおけるもんだいてんをしてきした。', meaning: 'Đã chỉ ra những vấn đề trong giáo dục.' },
    ],
  },
  {
    id: 'gex3b-14',
    pattern: '～に限らず (ni kagirazu)',
    meaning: 'Không chỉ',
    category: 'Phạm vi・Giới hạn',
    jlpt: 'N3',
    examples: [
      { jp: '日本に限らず、世界中で環境問題が深刻だ。', reading: 'にほんにかぎらず、せかいじゅうでかんきょうもんだいがしんこくだ。', meaning: 'Không chỉ Nhật Bản, vấn đề môi trường nghiêm trọng trên toàn thế giới.' },
      { jp: '若者に限らず、お年寄りもスマホを使う。', reading: 'わかものにかぎらず、おとしよりもすまほをつかう。', meaning: 'Không chỉ giới trẻ, người già cũng dùng điện thoại thông minh.' },
    ],
  },
  {
    id: 'gex3b-15',
    pattern: '～を問わず (wo towazu)',
    meaning: 'Bất kể',
    category: 'Phạm vi・Giới hạn',
    jlpt: 'N3',
    examples: [
      { jp: '年齢を問わず、誰でも参加できます。', reading: 'ねんれいをとわず、だれでもさんかできます。', meaning: 'Bất kể tuổi tác, ai cũng có thể tham gia.' },
      { jp: '経験の有無を問わず応募できます。', reading: 'けいけんのうむをとわずおうぼできます。', meaning: 'Bất kể có kinh nghiệm hay không đều có thể ứng tuyển.' },
    ],
  },
  {
    id: 'gex3b-16',
    pattern: '～をはじめ (wo hajime)',
    meaning: 'Bắt đầu từ, trước hết',
    category: 'Liệt kê・Ví dụ',
    jlpt: 'N3',
    examples: [
      { jp: '東京をはじめ、大阪や名古屋にも支店がある。', reading: 'とうきょうをはじめ、おおさかやなごやにもしてんがある。', meaning: 'Bắt đầu từ Tokyo, ở Osaka và Nagoya cũng có chi nhánh.' },
      { jp: '社長をはじめ、社員全員が出席した。', reading: 'しゃちょうをはじめ、しゃいんぜんいんがしゅっせきした。', meaning: 'Bắt đầu từ giám đốc, toàn bộ nhân viên đều tham dự.' },
    ],
  },
  {
    id: 'gex3b-17',
    pattern: '～を込めて (wo komete)',
    meaning: 'Với (tấm lòng)',
    category: 'Cảm xúc・Tự phát',
    jlpt: 'N3',
    examples: [
      { jp: '感謝の気持ちを込めて手紙を書いた。', reading: 'かんしゃのきもちをこめててがみをかいた。', meaning: 'Tôi đã viết thư với tấm lòng biết ơn.' },
      { jp: '心を込めて料理を作った。', reading: 'こころをこめてりょうりをつくった。', meaning: 'Tôi đã nấu ăn với cả tấm lòng.' },
    ],
  },
  {
    id: 'gex3b-18',
    pattern: '～は別として (wa betsu to shite)',
    meaning: 'Ngoại trừ',
    category: 'Phạm vi・Giới hạn',
    jlpt: 'N3',
    examples: [
      { jp: '値段は別として、このレストランの料理はおいしい。', reading: 'ねだんはべつとして、このれすとらんのりょうりはおいしい。', meaning: 'Ngoại trừ giá cả, đồ ăn ở nhà hàng này ngon.' },
      { jp: '冗談は別として、本当の話をしよう。', reading: 'じょうだんはべつとして、ほんとうのはなしをしよう。', meaning: 'Ngoại trừ đùa, hãy nói chuyện thật đi.' },
    ],
  },
  {
    id: 'gex3b-19',
    pattern: '～はもちろん (wa mochiron)',
    meaning: 'Đương nhiên, không chỉ',
    category: 'Liệt kê・Ví dụ',
    jlpt: 'N3',
    examples: [
      { jp: '英語はもちろん、フランス語も話せる。', reading: 'えいごはもちろん、ふらんすごもはなせる。', meaning: 'Không chỉ tiếng Anh, cô ấy còn nói được tiếng Pháp.' },
      { jp: '日本語はもちろん、漢字も上手に書ける。', reading: 'にほんごはもちろん、かんじもじょうずにかける。', meaning: 'Đương nhiên tiếng Nhật, chữ Hán cũng viết giỏi.' },
    ],
  },
  {
    id: 'gex3b-20',
    pattern: '～どころではない (dokoro de wa nai)',
    meaning: 'Không phải lúc',
    category: 'Phủ định・Phản bác',
    jlpt: 'N3',
    examples: [
      { jp: '忙しくて旅行どころではない。', reading: 'いそがしくてりょこうどころではない。', meaning: 'Bận đến mức không phải lúc đi du lịch.' },
      { jp: '風邪を引いて、遊びどころではなかった。', reading: 'かぜをひいて、あそびどころではなかった。', meaning: 'Bị cảm nên không phải lúc đi chơi.' },
    ],
  },
  {
    id: 'gex3b-21',
    pattern: '～からすると (kara suru to)',
    meaning: 'Xét từ góc độ',
    category: 'Quan điểm・Lập trường',
    jlpt: 'N3',
    examples: [
      { jp: '彼の態度からすると、賛成しないだろう。', reading: 'かれのたいどからすると、さんせいしないだろう。', meaning: 'Xét từ thái độ của anh ấy, chắc sẽ không đồng ý.' },
      { jp: '親の立場からすると、心配するのは当然だ。', reading: 'おやのたちばからすると、しんぱいするのはとうぜんだ。', meaning: 'Xét từ góc độ cha mẹ, lo lắng là đương nhiên.' },
    ],
  },
  {
    id: 'gex3b-22',
    pattern: '～からして (kara shite)',
    meaning: 'Ngay từ...đã',
    category: 'Quan điểm・Lập trường',
    jlpt: 'N3',
    examples: [
      { jp: 'あの店は外観からして高そうだ。', reading: 'あのみせはがいかんからしてたかそうだ。', meaning: 'Cửa hàng đó ngay từ bề ngoài đã trông đắt rồi.' },
      { jp: '名前からして日本人ではなさそうだ。', reading: 'なまえからしてにほんじんではなさそうだ。', meaning: 'Ngay từ cái tên đã trông không phải người Nhật.' },
    ],
  },
  {
    id: 'gex3b-23',
    pattern: '～とは限らない (to wa kagiranai)',
    meaning: 'Không hẳn là',
    category: 'Phủ định・Phản bác',
    jlpt: 'N3',
    examples: [
      { jp: '高いものがいいとは限らない。', reading: 'たかいものがいいとはかぎらない。', meaning: 'Đồ đắt không hẳn là tốt.' },
      { jp: '有名な大学を出たからといって、成功するとは限らない。', reading: 'ゆうめいなだいがくをでたからといって、せいこうするとはかぎらない。', meaning: 'Tốt nghiệp trường đại học nổi tiếng không hẳn là sẽ thành công.' },
    ],
  },
  {
    id: 'gex3b-24',
    pattern: '～って (tte)',
    meaning: 'Nghe nói, cái gọi là',
    category: 'Trích dẫn・Nghe nói',
    jlpt: 'N3',
    examples: [
      { jp: '明日は休みだって。', reading: 'あしたはやすみだって。', meaning: 'Nghe nói mai được nghỉ.' },
      { jp: '幸せって何だろう。', reading: 'しあわせってなんだろう。', meaning: 'Hạnh phúc là gì nhỉ?' },
    ],
  },
  {
    id: 'gex3b-25',
    pattern: '～ったら (ttara)',
    meaning: 'Nói đến...thì',
    category: 'Trích dẫn・Nghe nói',
    jlpt: 'N3',
    examples: [
      { jp: 'うちの子ったら、また忘れ物をした。', reading: 'うちのこったら、またわすれものをした。', meaning: 'Nói đến con tôi, lại quên đồ nữa rồi.' },
      { jp: 'あなたったら、いつも遅刻するんだから。', reading: 'あなたったら、いつもちこくするんだから。', meaning: 'Nói đến anh, lúc nào cũng đi trễ.' },
    ],
  },
  {
    id: 'gex3b-26',
    pattern: '～もの/もん (mono/mon)',
    meaning: 'Vì, tại vì (biện minh)',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N3',
    examples: [
      { jp: '食べたくないもん、お腹いっぱいだもん。', reading: 'たべたくないもん、おなかいっぱいだもん。', meaning: 'Không muốn ăn, vì no rồi mà.' },
      { jp: '行きたくないもの、つまらないんだもの。', reading: 'いきたくないもの、つまらないんだもの。', meaning: 'Không muốn đi, tại vì chán mà.' },
    ],
  },
  {
    id: 'gex3b-27',
    pattern: '～ものか (mono ka)',
    meaning: 'Làm sao mà...được',
    category: 'Phủ định・Phản bác',
    jlpt: 'N3',
    examples: [
      { jp: 'あんな人に負けるものか。', reading: 'あんなひとにまけるものか。', meaning: 'Làm sao mà thua người đó được.' },
      { jp: '二度とあんな所に行くものか。', reading: 'にどとあんなところにいくものか。', meaning: 'Làm sao mà đi chỗ đó lần nữa được.' },
    ],
  },
  {
    id: 'gex3b-28',
    pattern: '～ことから (koto kara)',
    meaning: 'Từ việc',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N3',
    examples: [
      { jp: '形が富士山に似ていることから、この名前がついた。', reading: 'かたちがふじさんににていることから、このなまえがついた。', meaning: 'Từ việc hình dáng giống núi Phú Sĩ mà có tên này.' },
      { jp: '彼が毎日練習していることから、本気だとわかった。', reading: 'かれがまいにちれんしゅうしていることから、ほんきだとわかった。', meaning: 'Từ việc anh ấy luyện tập mỗi ngày, tôi hiểu anh ấy nghiêm túc.' },
    ],
  },
  {
    id: 'gex3b-29',
    pattern: '～くらい/ぐらい (kurai/gurai)',
    meaning: 'Đến mức',
    category: 'Mức độ・Trình độ',
    jlpt: 'N3',
    examples: [
      { jp: '泣きたいくらい嬉しかった。', reading: 'なきたいくらいうれしかった。', meaning: 'Vui đến mức muốn khóc.' },
      { jp: '死ぬぐらい疲れた。', reading: 'しぬぐらいつかれた。', meaning: 'Mệt đến mức muốn chết.' },
    ],
  },
  {
    id: 'gex3b-30',
    pattern: '～だけに (dake ni)',
    meaning: 'Chính vì',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N3',
    examples: [
      { jp: '人気がある店だけに、いつも混んでいる。', reading: 'にんきがあるみせだけに、いつもこんでいる。', meaning: 'Chính vì là quán nổi tiếng nên lúc nào cũng đông.' },
      { jp: '期待していただけに、がっかりした。', reading: 'きたいしていただけに、がっかりした。', meaning: 'Chính vì đã kỳ vọng nên thất vọng.' },
    ],
  },
  {
    id: 'gex3b-31',
    pattern: '～だけあって (dake atte)',
    meaning: 'Xứng đáng, quả đúng',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N3',
    examples: [
      { jp: 'プロだけあって、さすがに上手だ。', reading: 'ぷろだけあって、さすがにじょうずだ。', meaning: 'Quả đúng là dân chuyên nghiệp, giỏi thật.' },
      { jp: '10年も住んでいただけあって、この町に詳しい。', reading: 'じゅうねんもすんでいただけあって、このまちにくわしい。', meaning: 'Xứng đáng đã sống 10 năm, rất rành về thành phố này.' },
    ],
  },
  {
    id: 'gex3b-32',
    pattern: '～に過ぎない (ni suginai)',
    meaning: 'Chỉ là',
    category: 'Phủ định・Phản bác',
    jlpt: 'N3',
    examples: [
      { jp: 'これは私の意見に過ぎない。', reading: 'これはわたしのいけんにすぎない。', meaning: 'Đây chỉ là ý kiến của tôi thôi.' },
      { jp: '彼はまだ学生に過ぎない。', reading: 'かれはまだがくせいにすぎない。', meaning: 'Anh ấy chỉ là sinh viên thôi.' },
    ],
  },
  {
    id: 'gex3b-33',
    pattern: '～にすぎない (ni suginai) alt',
    meaning: 'Chỉ không hơn',
    category: 'Phủ định・Phản bác',
    jlpt: 'N3',
    examples: [
      { jp: 'それは噂にすぎない。', reading: 'それはうわさにすぎない。', meaning: 'Đó chỉ là tin đồn, không hơn.' },
      { jp: '彼の話は言い訳にすぎない。', reading: 'かれのはなしはいいわけにすぎない。', meaning: 'Lời anh ấy nói chỉ là cái cớ, không hơn.' },
    ],
  },
  {
    id: 'gex3b-34',
    pattern: '～ずに (zu ni)',
    meaning: 'Không...mà',
    category: 'Phủ định・Phản bác',
    jlpt: 'N3',
    examples: [
      { jp: '朝ごはんを食べずに学校に行った。', reading: 'あさごはんをたべずにがっこうにいった。', meaning: 'Không ăn sáng mà đi học.' },
      { jp: '誰にも相談せずに決めた。', reading: 'だれにもそうだんせずにきめた。', meaning: 'Không bàn với ai mà tự quyết định.' },
    ],
  },
  {
    id: 'gex3b-35',
    pattern: '～ずにはいられない (zu ni wa irarenai)',
    meaning: 'Không thể không',
    category: 'Cảm xúc・Tự phát',
    jlpt: 'N3',
    examples: [
      { jp: 'あの映画を見たら、泣かずにはいられない。', reading: 'あのえいがをみたら、なかずにはいられない。', meaning: 'Nếu xem bộ phim đó, không thể không khóc.' },
      { jp: '彼の冗談を聞くと、笑わずにはいられない。', reading: 'かれのじょうだんをきくと、わらわずにはいられない。', meaning: 'Nghe chuyện cười của anh ấy, không thể không cười.' },
    ],
  },
  {
    id: 'gex3b-36',
    pattern: '～からこそ (kara koso)',
    meaning: 'Chính vì...nên',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N3',
    examples: [
      { jp: '好きだからこそ、厳しいことも言う。', reading: 'すきだからこそ、きびしいこともいう。', meaning: 'Chính vì thích nên mới nói những điều nghiêm khắc.' },
      { jp: '努力したからこそ、合格できた。', reading: 'どりょくしたからこそ、ごうかくできた。', meaning: 'Chính vì đã nỗ lực nên mới đỗ được.' },
    ],
  },
  {
    id: 'gex3b-37',
    pattern: '～さえ～ば (sae...ba)',
    meaning: 'Chỉ cần...thì',
    category: 'Điều kiện',
    jlpt: 'N3',
    examples: [
      { jp: '薬さえ飲めば、すぐ治る。', reading: 'くすりさえのめば、すぐなおる。', meaning: 'Chỉ cần uống thuốc thì sẽ khỏi ngay.' },
      { jp: 'お金さえあれば、何でも買える。', reading: 'おかねさえあれば、なんでもかえる。', meaning: 'Chỉ cần có tiền thì mua gì cũng được.' },
    ],
  },
  {
    id: 'gex3b-38',
    pattern: '～さえも (sae mo)',
    meaning: 'Thậm chí cả',
    category: 'Nhấn mạnh',
    jlpt: 'N3',
    examples: [
      { jp: '簡単な問題さえも解けなかった。', reading: 'かんたんなもんだいさえもとけなかった。', meaning: 'Thậm chí cả câu hỏi dễ cũng không giải được.' },
      { jp: '親友さえも彼を信じなかった。', reading: 'しんゆうさえもかれをしんじなかった。', meaning: 'Thậm chí cả bạn thân cũng không tin anh ấy.' },
    ],
  },
  {
    id: 'gex3b-39',
    pattern: '～思いきや (omoikiya)',
    meaning: 'Tưởng là...ai ngờ',
    category: 'Ngạc nhiên・Bất ngờ',
    jlpt: 'N3',
    examples: [
      { jp: '合格したと思いきや、不合格だった。', reading: 'ごうかくしたとおもいきや、ふごうかくだった。', meaning: 'Tưởng là đỗ rồi, ai ngờ lại trượt.' },
      { jp: '晴れると思いきや、急に雨が降ってきた。', reading: 'はれるとおもいきや、きゅうにあめがふってきた。', meaning: 'Tưởng trời sẽ nắng, ai ngờ bỗng mưa.' },
    ],
  },
  {
    id: 'gex3b-40',
    pattern: '～にしろ (ni shiro)',
    meaning: 'Cho dù',
    category: 'Nhượng bộ',
    jlpt: 'N3',
    examples: [
      { jp: '賛成にしろ反対にしろ、意見を言ってください。', reading: 'さんせいにしろはんたいにしろ、いけんをいってください。', meaning: 'Cho dù đồng ý hay phản đối, hãy nói ý kiến.' },
      { jp: '冗談にしろ、あんなことを言うべきではない。', reading: 'じょうだんにしろ、あんなことをいうべきではない。', meaning: 'Cho dù là đùa, cũng không nên nói như vậy.' },
    ],
  },
  {
    id: 'gex3b-41',
    pattern: '～にせよ (ni seyo)',
    meaning: 'Cho dù (trang trọng)',
    category: 'Nhượng bộ',
    jlpt: 'N3',
    examples: [
      { jp: 'いかなる理由にせよ、暴力は許されない。', reading: 'いかなるりゆうにせよ、ぼうりょくはゆるされない。', meaning: 'Cho dù lý do gì, bạo lực cũng không được chấp nhận.' },
      { jp: '成功するにせよ失敗するにせよ、やってみよう。', reading: 'せいこうするにせよしっぱいするにせよ、やってみよう。', meaning: 'Cho dù thành công hay thất bại, hãy thử xem.' },
    ],
  },
  {
    id: 'gex3b-42',
    pattern: '～たって (tatte)',
    meaning: 'Cho dù',
    category: 'Nhượng bộ',
    jlpt: 'N3',
    examples: [
      { jp: '泣いたって、どうにもならない。', reading: 'ないたって、どうにもならない。', meaning: 'Cho dù có khóc cũng chẳng giải quyết được gì.' },
      { jp: '急いだって、間に合わないよ。', reading: 'いそいだって、まにあわないよ。', meaning: 'Cho dù có vội cũng không kịp đâu.' },
    ],
  },
  {
    id: 'gex3b-43',
    pattern: '～としても (to shite mo)',
    meaning: 'Ngay cả khi',
    category: 'Nhượng bộ',
    jlpt: 'N3',
    examples: [
      { jp: 'たとえ失敗したとしても、後悔しない。', reading: 'たとえしっぱいしたとしても、こうかいしない。', meaning: 'Ngay cả khi thất bại, tôi cũng không hối hận.' },
      { jp: '彼が来たとしても、何も変わらない。', reading: 'かれがきたとしても、なにもかわらない。', meaning: 'Ngay cả khi anh ấy đến, cũng chẳng thay đổi gì.' },
    ],
  },
  {
    id: 'gex3b-44',
    pattern: '～に関する (ni kansuru)',
    meaning: 'Liên quan đến (trước N)',
    category: 'Chủ đề・Đối tượng',
    jlpt: 'N3',
    examples: [
      { jp: '環境に関する本を読んだ。', reading: 'かんきょうにかんするほんをよんだ。', meaning: 'Tôi đã đọc sách liên quan đến môi trường.' },
      { jp: '健康に関する情報を集めている。', reading: 'けんこうにかんするじょうほうをあつめている。', meaning: 'Tôi đang thu thập thông tin liên quan đến sức khỏe.' },
    ],
  },
  {
    id: 'gex3b-45',
    pattern: '～に対する (ni taisuru)',
    meaning: 'Đối với (trước N)',
    category: 'Chủ đề・Đối tượng',
    jlpt: 'N3',
    examples: [
      { jp: '仕事に対する態度が変わった。', reading: 'しごとにたいするたいどがかわった。', meaning: 'Thái độ đối với công việc đã thay đổi.' },
      { jp: '外国人に対する偏見をなくすべきだ。', reading: 'がいこくじんにたいするへんけんをなくすべきだ。', meaning: 'Nên xóa bỏ định kiến đối với người nước ngoài.' },
    ],
  },
  {
    id: 'gex3b-46',
    pattern: '～に基づく (ni motozuku)',
    meaning: 'Dựa trên (trước N)',
    category: 'Căn cứ・Cơ sở',
    jlpt: 'N3',
    examples: [
      { jp: '事実に基づく映画が好きだ。', reading: 'じじつにもとづくえいががすきだ。', meaning: 'Tôi thích phim dựa trên sự thật.' },
      { jp: '経験に基づく判断は信頼できる。', reading: 'けいけんにもとづくはんだんはしんらいできる。', meaning: 'Phán đoán dựa trên kinh nghiệm đáng tin cậy.' },
    ],
  },
  {
    id: 'gex3b-47',
    pattern: '～に伴う (ni tomonau)',
    meaning: 'Đi kèm (trước N)',
    category: 'Quan hệ・Kèm theo',
    jlpt: 'N3',
    examples: [
      { jp: '都市化に伴う問題が増えている。', reading: 'としかにともなうもんだいがふえている。', meaning: 'Các vấn đề đi kèm đô thị hóa đang tăng.' },
      { jp: '高齢化に伴う医療費の増加が問題だ。', reading: 'こうれいかにともなういりょうひのぞうかがもんだいだ。', meaning: 'Sự gia tăng chi phí y tế đi kèm già hóa là vấn đề.' },
    ],
  },
  {
    id: 'gex3b-48',
    pattern: '～はもとより (wa motoyori)',
    meaning: 'Không chỉ...mà còn',
    category: 'Liệt kê・Ví dụ',
    jlpt: 'N3',
    examples: [
      { jp: '国内はもとより、海外でも人気がある。', reading: 'こくないはもとより、かいがいでもにんきがある。', meaning: 'Không chỉ trong nước mà còn được yêu thích ở nước ngoài.' },
      { jp: '大人はもとより、子供にも人気だ。', reading: 'おとなはもとより、こどもにもにんきだ。', meaning: 'Không chỉ người lớn mà trẻ em cũng thích.' },
    ],
  },
  {
    id: 'gex3b-49',
    pattern: '～にほかならない (ni hoka naranai)',
    meaning: 'Không gì khác ngoài',
    category: 'Nhấn mạnh',
    jlpt: 'N3',
    examples: [
      { jp: '彼の成功は努力の結果にほかならない。', reading: 'かれのせいこうはどりょくのけっかにほかならない。', meaning: 'Thành công của anh ấy không gì khác ngoài kết quả của nỗ lực.' },
      { jp: 'それは彼女の愛情にほかならない。', reading: 'それはかのじょのあいじょうにほかならない。', meaning: 'Đó không gì khác ngoài tình yêu của cô ấy.' },
    ],
  },
  {
    id: 'gex3b-50',
    pattern: '～に決まっている (ni kimatte iru) alt',
    meaning: 'Chắc chắn là',
    category: 'Phỏng đoán・Xác định',
    jlpt: 'N3',
    examples: [
      { jp: 'あんなに勉強したんだから、受かるに決まっている。', reading: 'あんなにべんきょうしたんだから、うかるにきまっている。', meaning: 'Đã học nhiều như vậy, chắc chắn là đỗ.' },
      { jp: '彼が遅れるに決まっている。いつものことだ。', reading: 'かれがおくれるにきまっている。いつものことだ。', meaning: 'Chắc chắn là anh ấy sẽ trễ. Chuyện thường ngày mà.' },
    ],
  },
];

// ── from: grammarExp_N2_Part1.ts ──
export const GRAMMAR_EXP_N2_P1: GrammarEntry[] = [
  {
    id: 'gex2a-01',
    pattern: '～に先立って (ni sakidatte)',
    meaning: 'Trước khi (trang trọng)',
    category: 'Thời gian・Trình tự',
    jlpt: 'N2',
    examples: [
      { jp: '開会に先立って、会長からご挨拶があります。', reading: 'かいかいにさきだって、かいちょうからごあいさつがあります。', meaning: 'Trước khi khai mạc, sẽ có lời chào từ hội trưởng.' },
      { jp: '出発に先立って、安全確認を行います。', reading: 'しゅっぱつにさきだって、あんぜんかくにんをおこないます。', meaning: 'Trước khi khởi hành, chúng tôi sẽ tiến hành kiểm tra an toàn.' },
    ],
  },
  {
    id: 'gex2a-02',
    pattern: '～にかけては (ni kakete wa)',
    meaning: 'Về mặt...thì giỏi',
    category: 'Đánh giá・Năng lực',
    jlpt: 'N2',
    examples: [
      { jp: '料理にかけては、母の右に出る者はいない。', reading: 'りょうりにかけては、ははのみぎにでるものはいない。', meaning: 'Về mặt nấu ăn, không ai giỏi hơn mẹ tôi.' },
      { jp: '数学にかけては、彼はクラスで一番だ。', reading: 'すうがくにかけては、かれはくらすでいちばんだ。', meaning: 'Về mặt toán học, anh ấy giỏi nhất lớp.' },
    ],
  },
  {
    id: 'gex2a-03',
    pattern: '～に至るまで (ni itaru made)',
    meaning: 'Cho đến tận',
    category: 'Phạm vi・Mức độ',
    jlpt: 'N2',
    examples: [
      { jp: '子供から大人に至るまで、誰でも楽しめるイベントです。', reading: 'こどもからおとなにいたるまで、だれでもたのしめるいべんとです。', meaning: 'Đây là sự kiện mà ai cũng có thể vui, từ trẻ em cho đến tận người lớn.' },
      { jp: '細かい点に至るまで、丁寧に説明してくれた。', reading: 'こまかいてんにいたるまで、ていねいにせつめいしてくれた。', meaning: 'Anh ấy đã giải thích tỉ mỉ cho đến tận những điểm nhỏ nhất.' },
    ],
  },
  {
    id: 'gex2a-04',
    pattern: '～に至っては (ni itatte wa)',
    meaning: 'Đến mức, khi đã đến',
    category: 'Phạm vi・Mức độ',
    jlpt: 'N2',
    examples: [
      { jp: '兄弟はみんな成績が悪い。末っ子に至っては、毎回赤点だ。', reading: 'きょうだいはみんなせいせきがわるい。すえっこにいたっては、まいかいあかてんだ。', meaning: 'Anh em ai cũng điểm kém. Đến đứa út thì lần nào cũng điểm liệt.' },
      { jp: '社員の不満は大きい。管理職に至っては、退職を考えている人もいる。', reading: 'しゃいんのふまんはおおきい。かんりしょくにいたっては、たいしょくをかんがえているひともいる。', meaning: 'Sự bất mãn của nhân viên rất lớn. Đến cả quản lý cũng có người nghĩ đến việc nghỉ.' },
    ],
  },
  {
    id: 'gex2a-05',
    pattern: '～たところで (ta tokoro de)',
    meaning: 'Cho dù...cũng (vô ích)',
    category: 'Nghịch tiếp・Nhượng bộ',
    jlpt: 'N2',
    examples: [
      { jp: '今さら謝ったところで、許してもらえないだろう。', reading: 'いまさらあやまったところで、ゆるしてもらえないだろう。', meaning: 'Cho dù bây giờ có xin lỗi thì chắc cũng không được tha.' },
      { jp: '急いだところで、もう間に合わない。', reading: 'いそいだところで、もうまにあわない。', meaning: 'Cho dù có vội cũng không kịp nữa rồi.' },
    ],
  },
  {
    id: 'gex2a-06',
    pattern: '～からといって (kara to itte)',
    meaning: 'Không phải vì...mà',
    category: 'Nghịch tiếp・Nhượng bộ',
    jlpt: 'N2',
    examples: [
      { jp: '安いからといって、買いすぎてはいけない。', reading: 'やすいからといって、かいすぎてはいけない。', meaning: 'Không phải vì rẻ mà mua quá nhiều.' },
      { jp: '日本人だからといって、全員が寿司を好きなわけではない。', reading: 'にほんじんだからといって、ぜんいんがすしをすきなわけではない。', meaning: 'Không phải vì là người Nhật mà ai cũng thích sushi.' },
    ],
  },
  {
    id: 'gex2a-07',
    pattern: '～からすると/からすれば (kara suru to)',
    meaning: 'Xét từ góc độ',
    category: 'Quan điểm・Phán đoán',
    jlpt: 'N2',
    examples: [
      { jp: '表情からすると、彼は怒っているようだ。', reading: 'ひょうじょうからすると、かれはおこっているようだ。', meaning: 'Xét từ biểu cảm, có vẻ anh ấy đang giận.' },
      { jp: '親の立場からすれば、子供の安全が一番大事だ。', reading: 'おやのたちばからすれば、こどものあんぜんがいちばんだいじだ。', meaning: 'Xét từ góc độ phụ huynh, an toàn của con là quan trọng nhất.' },
    ],
  },
  {
    id: 'gex2a-08',
    pattern: '～からには (kara ni wa)',
    meaning: 'Đã...thì phải',
    category: 'Điều kiện・Quyết tâm',
    jlpt: 'N2',
    examples: [
      { jp: '約束したからには、必ず守らなければならない。', reading: 'やくそくしたからには、かならずまもらなければならない。', meaning: 'Đã hứa thì phải giữ lời.' },
      { jp: '試験を受けるからには、全力で頑張りたい。', reading: 'しけんをうけるからには、ぜんりょくでがんばりたい。', meaning: 'Đã thi thì muốn cố gắng hết sức.' },
    ],
  },
  {
    id: 'gex2a-09',
    pattern: '～以上は (ijou wa)',
    meaning: 'Một khi đã',
    category: 'Điều kiện・Quyết tâm',
    jlpt: 'N2',
    examples: [
      { jp: '引き受けた以上は、最後まで責任を持つ。', reading: 'ひきうけたいじょうは、さいごまでせきにんをもつ。', meaning: 'Một khi đã nhận thì chịu trách nhiệm đến cùng.' },
      { jp: 'プロである以上は、結果を出さなければならない。', reading: 'ぷろであるいじょうは、けっかをださなければならない。', meaning: 'Một khi đã là chuyên nghiệp thì phải cho ra kết quả.' },
    ],
  },
  {
    id: 'gex2a-10',
    pattern: '～上は (ue wa)',
    meaning: 'Đã...thì',
    category: 'Điều kiện・Quyết tâm',
    jlpt: 'N2',
    examples: [
      { jp: 'こうなった上は、やるしかない。', reading: 'こうなったうえは、やるしかない。', meaning: 'Đã đến nước này thì chỉ còn cách làm thôi.' },
      { jp: '決めた上は、迷わず進もう。', reading: 'きめたうえは、まよわずすすもう。', meaning: 'Đã quyết rồi thì tiến lên không do dự.' },
    ],
  },
  {
    id: 'gex2a-11',
    pattern: '～上で (ue de)',
    meaning: 'Sau khi / Trong việc',
    category: 'Thời gian・Trình tự',
    jlpt: 'N2',
    examples: [
      { jp: 'よく考えた上で、決断を下した。', reading: 'よくかんがえたうえで、けつだんをくだした。', meaning: 'Sau khi suy nghĩ kỹ, tôi đã đưa ra quyết định.' },
      { jp: '契約する上で、注意すべき点がいくつかある。', reading: 'けいやくするうえで、ちゅういすべきてんがいくつかある。', meaning: 'Trong việc ký hợp đồng, có vài điểm cần chú ý.' },
    ],
  },
  {
    id: 'gex2a-12',
    pattern: '～上に (ue ni)',
    meaning: 'Hơn nữa, thêm vào đó',
    category: 'Bổ sung・Liệt kê',
    jlpt: 'N2',
    examples: [
      { jp: 'この店は安い上に、料理もおいしい。', reading: 'このみせはやすいうえに、りょうりもおいしい。', meaning: 'Quán này rẻ, hơn nữa đồ ăn cũng ngon.' },
      { jp: '彼は頭がいい上に、スポーツも得意だ。', reading: 'かれはあたまがいいうえに、すぽーつもとくいだ。', meaning: 'Anh ấy thông minh, thêm vào đó còn giỏi thể thao.' },
    ],
  },
  {
    id: 'gex2a-13',
    pattern: '～ことから (koto kara)',
    meaning: 'Từ việc, bởi vì',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N2',
    examples: [
      { jp: '形が星に似ていることから、「星の花」と呼ばれている。', reading: 'かたちがほしににていることから、「ほしのはな」とよばれている。', meaning: 'Từ việc hình dạng giống ngôi sao nên được gọi là "hoa sao".' },
      { jp: '人口が多いことから、交通渋滞が深刻だ。', reading: 'じんこうがおおいことから、こうつうじゅうたいがしんこくだ。', meaning: 'Từ việc dân số đông nên tắc đường nghiêm trọng.' },
    ],
  },
  {
    id: 'gex2a-14',
    pattern: '～ことなく (koto naku)',
    meaning: 'Mà không',
    category: 'Phủ định・Trạng thái',
    jlpt: 'N2',
    examples: [
      { jp: '彼は諦めることなく、挑戦し続けた。', reading: 'かれはあきらめることなく、ちょうせんしつづけた。', meaning: 'Anh ấy không bỏ cuộc mà tiếp tục thử thách.' },
      { jp: '一度も休むことなく、毎日練習した。', reading: 'いちどもやすむことなく、まいにちれんしゅうした。', meaning: 'Không nghỉ một ngày nào mà luyện tập mỗi ngày.' },
    ],
  },
  {
    id: 'gex2a-15',
    pattern: '～ことに (koto ni)',
    meaning: 'Đáng...là',
    category: 'Cảm xúc・Nhận xét',
    jlpt: 'N2',
    examples: [
      { jp: '驚いたことに、彼女は一人で山を登った。', reading: 'おどろいたことに、かのじょはひとりでやまをのぼった。', meaning: 'Đáng ngạc nhiên là, cô ấy đã leo núi một mình.' },
      { jp: '嬉しいことに、全員が合格した。', reading: 'うれしいことに、ぜんいんがごうかくした。', meaning: 'Đáng mừng là, tất cả đều đã đậu.' },
    ],
  },
  {
    id: 'gex2a-16',
    pattern: '～たものだ (ta mono da)',
    meaning: 'Đã từng (hồi tưởng)',
    category: 'Hồi tưởng・Quá khứ',
    jlpt: 'N2',
    examples: [
      { jp: '子供の頃、よくこの川で遊んだものだ。', reading: 'こどものころ、よくこのかわであそんだものだ。', meaning: 'Hồi nhỏ, tôi đã từng hay chơi ở con sông này.' },
      { jp: '学生時代は毎晩遅くまで勉強したものだ。', reading: 'がくせいじだいはまいばんおそくまでべんきょうしたものだ。', meaning: 'Thời sinh viên đã từng học khuya mỗi tối.' },
    ],
  },
  {
    id: 'gex2a-17',
    pattern: '～ものがある (mono ga aru)',
    meaning: 'Có điều gì đó (đáng...)',
    category: 'Cảm xúc・Nhận xét',
    jlpt: 'N2',
    examples: [
      { jp: '彼の努力には感心させられるものがある。', reading: 'かれのどりょくにはかんしんさせられるものがある。', meaning: 'Sự nỗ lực của anh ấy có điều gì đó đáng khâm phục.' },
      { jp: 'この映画には考えさせられるものがある。', reading: 'このえいがにはかんがえさせられるものがある。', meaning: 'Bộ phim này có điều gì đó khiến người ta phải suy nghĩ.' },
    ],
  },
  {
    id: 'gex2a-18',
    pattern: '～ないものか (nai mono ka)',
    meaning: 'Không thể...sao?',
    category: 'Mong muốn・Nguyện vọng',
    jlpt: 'N2',
    examples: [
      { jp: 'もう少し安くならないものか。', reading: 'もうすこしやすくならないものか。', meaning: 'Không thể rẻ hơn chút nữa sao?' },
      { jp: 'この問題を解決できないものか。', reading: 'このもんだいをかいけつできないものか。', meaning: 'Không thể giải quyết vấn đề này sao?' },
    ],
  },
  {
    id: 'gex2a-19',
    pattern: '～ないものだろうか (nai mono darou ka)',
    meaning: 'Liệu có thể không nhỉ?',
    category: 'Mong muốn・Nguyện vọng',
    jlpt: 'N2',
    examples: [
      { jp: 'もっと簡単な方法はないものだろうか。', reading: 'もっとかんたんなほうほうはないものだろうか。', meaning: 'Liệu không có cách nào đơn giản hơn nhỉ?' },
      { jp: '世界が平和にならないものだろうか。', reading: 'せかいがへいわにならないものだろうか。', meaning: 'Liệu thế giới có thể hòa bình không nhỉ?' },
    ],
  },
  {
    id: 'gex2a-20',
    pattern: '～ようとも (you tomo)',
    meaning: 'Dù cho có...đi nữa',
    category: 'Nghịch tiếp・Nhượng bộ',
    jlpt: 'N2',
    examples: [
      { jp: 'どんなに辛かろうとも、最後までやり遂げる。', reading: 'どんなにつらかろうとも、さいごまでやりとげる。', meaning: 'Dù cho có khổ đến đâu, tôi cũng hoàn thành đến cùng.' },
      { jp: '誰に反対されようとも、自分の道を進む。', reading: 'だれにはんたいされようとも、じぶんのみちをすすむ。', meaning: 'Dù cho ai phản đối, tôi cũng đi con đường của mình.' },
    ],
  },
  {
    id: 'gex2a-21',
    pattern: '～ようものなら (you mono nara)',
    meaning: 'Nếu mà dám (hậu quả xấu)',
    category: 'Điều kiện・Cảnh báo',
    jlpt: 'N2',
    examples: [
      { jp: '遅刻しようものなら、先生にひどく怒られる。', reading: 'ちこくしようものなら、せんせいにひどくおこられる。', meaning: 'Nếu mà dám đi trễ thì bị thầy mắng thậm tệ.' },
      { jp: 'そんなことを言おうものなら、大変なことになる。', reading: 'そんなことをいおうものなら、たいへんなことになる。', meaning: 'Nếu mà dám nói điều đó thì sẽ to chuyện.' },
    ],
  },
  {
    id: 'gex2a-22',
    pattern: '～をきっかけに (wo kikkake ni)',
    meaning: 'Nhân dịp, lấy cơ hội',
    category: 'Nguyên nhân・Khởi đầu',
    jlpt: 'N2',
    examples: [
      { jp: '留学をきっかけに、日本語を勉強し始めた。', reading: 'りゅうがくをきっかけに、にほんごをべんきょうしはじめた。', meaning: 'Nhân dịp du học, tôi bắt đầu học tiếng Nhật.' },
      { jp: '病気をきっかけに、健康に気をつけるようになった。', reading: 'びょうきをきっかけに、けんこうにきをつけるようになった。', meaning: 'Nhân lần bệnh, tôi bắt đầu chú ý đến sức khỏe.' },
    ],
  },
  {
    id: 'gex2a-23',
    pattern: '～を契機に (wo keiki ni)',
    meaning: 'Lấy cơ hội, nhân dịp (trang trọng)',
    category: 'Nguyên nhân・Khởi đầu',
    jlpt: 'N2',
    examples: [
      { jp: '震災を契機に、防災意識が高まった。', reading: 'しんさいをけいきに、ぼうさいいしきがたかまった。', meaning: 'Nhân dịp trận động đất, ý thức phòng chống thiên tai đã tăng lên.' },
      { jp: '結婚を契機に、新しい生活を始めた。', reading: 'けっこんをけいきに、あたらしいせいかつをはじめた。', meaning: 'Lấy dịp kết hôn, tôi bắt đầu cuộc sống mới.' },
    ],
  },
  {
    id: 'gex2a-24',
    pattern: '～を境に (wo sakai ni)',
    meaning: 'Lấy mốc, kể từ',
    category: 'Thời gian・Biến đổi',
    jlpt: 'N2',
    examples: [
      { jp: 'あの事件を境に、彼の性格が変わった。', reading: 'あのじけんをさかいに、かれのせいかくがかわった。', meaning: 'Lấy mốc từ vụ việc đó, tính cách anh ấy đã thay đổi.' },
      { jp: '三十歳を境に、体力が落ちてきた。', reading: 'さんじゅっさいをさかいに、たいりょくがおちてきた。', meaning: 'Lấy mốc 30 tuổi, thể lực bắt đầu suy giảm.' },
    ],
  },
  {
    id: 'gex2a-25',
    pattern: '～を頼りに (wo tayori ni)',
    meaning: 'Dựa vào, nhờ vào',
    category: 'Phương tiện・Dựa vào',
    jlpt: 'N2',
    examples: [
      { jp: '地図を頼りに、目的地を探した。', reading: 'ちずをたよりに、もくてきちをさがした。', meaning: 'Dựa vào bản đồ, tôi tìm đến điểm đích.' },
      { jp: '星の光を頼りに、夜道を歩いた。', reading: 'ほしのひかりをたよりに、よみちをあるいた。', meaning: 'Dựa vào ánh sao, tôi đi trên đường đêm.' },
    ],
  },
  {
    id: 'gex2a-26',
    pattern: '～をよそに (wo yoso ni)',
    meaning: 'Bất chấp, mặc kệ',
    category: 'Nghịch tiếp・Nhượng bộ',
    jlpt: 'N2',
    examples: [
      { jp: '親の心配をよそに、息子は一人で海外に行った。', reading: 'おやのしんぱいをよそに、むすこはひとりでかいがいにいった。', meaning: 'Bất chấp sự lo lắng của bố mẹ, con trai đi nước ngoài một mình.' },
      { jp: '周囲の反対をよそに、彼女は夢を追い続けた。', reading: 'しゅういのはんたいをよそに、かのじょはゆめをおいつづけた。', meaning: 'Mặc kệ sự phản đối xung quanh, cô ấy tiếp tục theo đuổi ước mơ.' },
    ],
  },
  {
    id: 'gex2a-27',
    pattern: '～に即して (ni sokushite)',
    meaning: 'Phù hợp với, theo sát',
    category: 'Cơ sở・Tiêu chuẩn',
    jlpt: 'N2',
    examples: [
      { jp: '現実に即して、計画を立て直す必要がある。', reading: 'げんじつにそくして、けいかくをたてなおすひつようがある。', meaning: 'Cần phải lập lại kế hoạch phù hợp với thực tế.' },
      { jp: '法律に即して、判断を下した。', reading: 'ほうりつにそくして、はんだんをくだした。', meaning: 'Đã đưa ra phán quyết theo đúng luật pháp.' },
    ],
  },
  {
    id: 'gex2a-28',
    pattern: '～にとどまらず (ni todomarazu)',
    meaning: 'Không chỉ dừng ở',
    category: 'Phạm vi・Mức độ',
    jlpt: 'N2',
    examples: [
      { jp: '被害は日本にとどまらず、世界中に広がった。', reading: 'ひがいはにほんにとどまらず、せかいじゅうにひろがった。', meaning: 'Thiệt hại không chỉ dừng ở Nhật mà lan ra toàn thế giới.' },
      { jp: '彼の活躍は国内にとどまらず、海外でも知られている。', reading: 'かれのかつやくはこくないにとどまらず、かいがいでもしられている。', meaning: 'Hoạt động của anh ấy không chỉ trong nước mà còn được biết đến ở nước ngoài.' },
    ],
  },
  {
    id: 'gex2a-29',
    pattern: '～に至る (ni itaru)',
    meaning: 'Đến mức, dẫn đến',
    category: 'Kết quả・Quá trình',
    jlpt: 'N2',
    examples: [
      { jp: '長い話し合いの結果、合意に至った。', reading: 'ながいはなしあいのけっか、ごういにいたった。', meaning: 'Kết quả cuộc thảo luận dài, đã đi đến thỏa thuận.' },
      { jp: '事態は最悪の状況に至った。', reading: 'じたいはさいあくのじょうきょうにいたった。', meaning: 'Tình hình đã dẫn đến trạng thái tồi tệ nhất.' },
    ],
  },
  {
    id: 'gex2a-30',
    pattern: '～にかかわる (ni kakawaru)',
    meaning: 'Liên quan đến',
    category: 'Quan hệ・Ảnh hưởng',
    jlpt: 'N2',
    examples: [
      { jp: 'これは命にかかわる問題だ。', reading: 'これはいのちにかかわるもんだいだ。', meaning: 'Đây là vấn đề liên quan đến tính mạng.' },
      { jp: '会社の信用にかかわることだから、慎重に対応してください。', reading: 'かいしゃのしんようにかかわることだから、しんちょうにたいおうしてください。', meaning: 'Vì liên quan đến uy tín công ty nên hãy xử lý cẩn thận.' },
    ],
  },
  {
    id: 'gex2a-31',
    pattern: '～にこたえて (ni kotaete)',
    meaning: 'Đáp ứng, đáp lại',
    category: 'Quan hệ・Đối ứng',
    jlpt: 'N2',
    examples: [
      { jp: 'お客様の要望にこたえて、新商品を開発した。', reading: 'おきゃくさまのようぼうにこたえて、しんしょうひんをかいはつした。', meaning: 'Đáp ứng yêu cầu của khách hàng, chúng tôi đã phát triển sản phẩm mới.' },
      { jp: '国民の期待にこたえて、政策を見直した。', reading: 'こくみんのきたいにこたえて、せいさくをみなおした。', meaning: 'Đáp lại kỳ vọng của người dân, đã xem xét lại chính sách.' },
    ],
  },
  {
    id: 'gex2a-32',
    pattern: '～に越したことはない (ni koshita koto wa nai)',
    meaning: 'Tốt nhất là, không gì bằng',
    category: 'Đánh giá・Khuyên nhủ',
    jlpt: 'N2',
    examples: [
      { jp: '健康に越したことはない。', reading: 'けんこうにこしたことはない。', meaning: 'Không gì bằng khỏe mạnh.' },
      { jp: '早めに準備するに越したことはない。', reading: 'はやめにじゅんびするにこしたことはない。', meaning: 'Tốt nhất là chuẩn bị sớm.' },
    ],
  },
  {
    id: 'gex2a-33',
    pattern: '～を余儀なくされる (wo yogi naku sareru)',
    meaning: 'Bị buộc phải',
    category: 'Bắt buộc・Bị động',
    jlpt: 'N2',
    examples: [
      { jp: '台風で、イベントの中止を余儀なくされた。', reading: 'たいふうで、いべんとのちゅうしをよぎなくされた。', meaning: 'Do bão, đã bị buộc phải hủy sự kiện.' },
      { jp: '経済危機により、多くの企業がリストラを余儀なくされた。', reading: 'けいざいききにより、おおくのきぎょうがりすとらをよぎなくされた。', meaning: 'Do khủng hoảng kinh tế, nhiều doanh nghiệp bị buộc phải tái cơ cấu.' },
    ],
  },
  {
    id: 'gex2a-34',
    pattern: '～つまり (tsumari)',
    meaning: 'Tức là, nói cách khác',
    category: 'Giải thích・Tóm tắt',
    jlpt: 'N2',
    examples: [
      { jp: '彼は私の母の兄、つまり叔父です。', reading: 'かれはわたしのははのあに、つまりおじです。', meaning: 'Anh ấy là anh trai của mẹ tôi, tức là cậu tôi.' },
      { jp: '明日は祝日、つまり休みだ。', reading: 'あしたはしゅくじつ、つまりやすみだ。', meaning: 'Ngày mai là ngày lễ, tức là nghỉ.' },
    ],
  },
  {
    id: 'gex2a-35',
    pattern: '～っぱなし (ppanashi)',
    meaning: 'Cứ để nguyên, bỏ mặc',
    category: 'Trạng thái・Thói quen',
    jlpt: 'N2',
    examples: [
      { jp: 'テレビをつけっぱなしで寝てしまった。', reading: 'てれびをつけっぱなしでねてしまった。', meaning: 'Bật TV để nguyên rồi ngủ mất.' },
      { jp: '窓を開けっぱなしにしないでください。', reading: 'まどをあけっぱなしにしないでください。', meaning: 'Đừng để cửa sổ mở nguyên như vậy.' },
    ],
  },
  {
    id: 'gex2a-36',
    pattern: '～かと思うと/かと思ったら (ka to omou to)',
    meaning: 'Vừa nghĩ là...thì đã',
    category: 'Thời gian・Biến đổi',
    jlpt: 'N2',
    examples: [
      { jp: '晴れたかと思うと、すぐ雨が降り出した。', reading: 'はれたかとおもうと、すぐあめがふりだした。', meaning: 'Vừa tưởng trời tạnh thì mưa lại rơi ngay.' },
      { jp: '子供が泣いたかと思ったら、もう笑っている。', reading: 'こどもがないたかとおもったら、もうわらっている。', meaning: 'Vừa tưởng đứa bé khóc thì đã cười rồi.' },
    ],
  },
  {
    id: 'gex2a-37',
    pattern: '～ようでは/ようじゃ (you de wa)',
    meaning: 'Nếu cứ thế thì (không tốt)',
    category: 'Điều kiện・Cảnh báo',
    jlpt: 'N2',
    examples: [
      { jp: 'こんな簡単な問題もできないようでは、試験に受からない。', reading: 'こんなかんたんなもんだいもできないようでは、しけんにうからない。', meaning: 'Nếu cứ không làm được bài dễ thế này thì không đậu được.' },
      { jp: '毎日遅刻するようでは、信頼を失うよ。', reading: 'まいにちちこくするようでは、しんらいをうしなうよ。', meaning: 'Nếu cứ trễ mỗi ngày thì sẽ mất lòng tin đấy.' },
    ],
  },
  {
    id: 'gex2a-38',
    pattern: '～としたら/とすると (to shitara/to suru to)',
    meaning: 'Giả sử, nếu mà',
    category: 'Giả định・Điều kiện',
    jlpt: 'N2',
    examples: [
      { jp: '宝くじが当たったとしたら、何をしたい？', reading: 'たからくじがあたったとしたら、なにをしたい？', meaning: 'Giả sử trúng xổ số thì muốn làm gì?' },
      { jp: '彼が来ないとすると、計画を変更しなければならない。', reading: 'かれがこないとすると、けいかくをへんこうしなければならない。', meaning: 'Nếu anh ấy không đến thì phải thay đổi kế hoạch.' },
    ],
  },
  {
    id: 'gex2a-39',
    pattern: '～にしたって (ni shitatte)',
    meaning: 'Cho dù, ngay cả',
    category: 'Nghịch tiếp・Nhượng bộ',
    jlpt: 'N2',
    examples: [
      { jp: '忙しいにしたって、連絡ぐらいはできるだろう。', reading: 'いそがしいにしたって、れんらくぐらいはできるだろう。', meaning: 'Cho dù bận thì ít nhất cũng liên lạc được chứ.' },
      { jp: '冗談にしたって、言っていいことと悪いことがある。', reading: 'じょうだんにしたって、いっていいこととわるいことがある。', meaning: 'Cho dù là đùa thì cũng có điều nên nói và không nên nói.' },
    ],
  },
  {
    id: 'gex2a-40',
    pattern: '～ともなると/ともなれば (tomo naru to)',
    meaning: 'Khi đã đến mức',
    category: 'Phạm vi・Mức độ',
    jlpt: 'N2',
    examples: [
      { jp: '社長ともなると、責任も大きくなる。', reading: 'しゃちょうともなると、せきにんもおおきくなる。', meaning: 'Khi đã lên đến giám đốc thì trách nhiệm cũng lớn.' },
      { jp: '大学生ともなれば、自分のことは自分でやるべきだ。', reading: 'だいがくせいともなれば、じぶんのことはじぶんでやるべきだ。', meaning: 'Đã là sinh viên đại học thì nên tự lo cho mình.' },
    ],
  },
  {
    id: 'gex2a-41',
    pattern: '～だけましだ (dake mashi da)',
    meaning: 'Còn đỡ là, may là',
    category: 'Đánh giá・So sánh',
    jlpt: 'N2',
    examples: [
      { jp: '怪我をしなかっただけましだ。', reading: 'けがをしなかっただけましだ。', meaning: 'Còn đỡ là không bị thương.' },
      { jp: '雨は降ったが、風がなかっただけましだ。', reading: 'あめはふったが、かぜがなかっただけましだ。', meaning: 'Tuy mưa nhưng may là không có gió.' },
    ],
  },
  {
    id: 'gex2a-42',
    pattern: '～だけのことだ (dake no koto da)',
    meaning: 'Chỉ việc, chỉ cần',
    category: 'Quyết tâm・Hành động',
    jlpt: 'N2',
    examples: [
      { jp: 'やるだけのことだ。結果は後から考えよう。', reading: 'やるだけのことだ。けっかはあとからかんがえよう。', meaning: 'Chỉ việc làm thôi. Kết quả tính sau.' },
      { jp: 'ダメなら、もう一度挑戦するだけのことだ。', reading: 'だめなら、もういちどちょうせんするだけのことだ。', meaning: 'Nếu không được thì chỉ việc thử lại lần nữa thôi.' },
    ],
  },
  {
    id: 'gex2a-43',
    pattern: '～だけのことはある (dake no koto wa aru)',
    meaning: 'Quả xứng đáng, đúng là',
    category: 'Đánh giá・Khen ngợi',
    jlpt: 'N2',
    examples: [
      { jp: 'さすが十年修業しただけのことはある。腕が素晴らしい。', reading: 'さすがじゅうねんしゅぎょうしただけのことはある。うでがすばらしい。', meaning: 'Quả xứng đáng 10 năm tu luyện. Tay nghề tuyệt vời.' },
      { jp: '有名なだけのことはある。料理が本当においしい。', reading: 'ゆうめいなだけのことはある。りょうりがほんとうにおいしい。', meaning: 'Đúng là nổi tiếng có lý do. Đồ ăn thật sự ngon.' },
    ],
  },
  {
    id: 'gex2a-44',
    pattern: '～ないまでも (nai made mo)',
    meaning: 'Dù không...nhưng ít ra',
    category: 'Nghịch tiếp・Nhượng bộ',
    jlpt: 'N2',
    examples: [
      { jp: '完璧とは言えないまでも、かなり良い出来だ。', reading: 'かんぺきとはいえないまでも、かなりよいできだ。', meaning: 'Dù không nói là hoàn hảo nhưng kết quả khá tốt.' },
      { jp: '毎日でないまでも、週に三回は運動したい。', reading: 'まいにちでないまでも、しゅうにさんかいはうんどうしたい。', meaning: 'Dù không phải mỗi ngày nhưng ít ra muốn tập 3 lần/tuần.' },
    ],
  },
  {
    id: 'gex2a-45',
    pattern: '～なしに/なくして (nashi ni/nakushite)',
    meaning: 'Không có...thì không thể',
    category: 'Điều kiện・Tiền đề',
    jlpt: 'N2',
    examples: [
      { jp: '努力なしに成功はありえない。', reading: 'どりょくなしにせいこうはありえない。', meaning: 'Không có nỗ lực thì không thể thành công.' },
      { jp: '皆の協力なくして、このプロジェクトは完成しなかった。', reading: 'みなのきょうりょくなくして、このぷろじぇくとはかんせいしなかった。', meaning: 'Không có sự hợp tác của mọi người thì dự án này không hoàn thành được.' },
    ],
  },
  {
    id: 'gex2a-46',
    pattern: '～ぬきで/ぬきに (nuki de/nuki ni)',
    meaning: 'Bỏ qua, không có',
    category: 'Loại trừ・Bỏ sót',
    jlpt: 'N2',
    examples: [
      { jp: '冗談ぬきで、真剣に話し合おう。', reading: 'じょうだんぬきで、しんけんにはなしあおう。', meaning: 'Bỏ đùa sang một bên, hãy nói chuyện nghiêm túc.' },
      { jp: '朝ご飯ぬきで学校に行った。', reading: 'あさごはんぬきでがっこうにいった。', meaning: 'Đi học mà không ăn sáng.' },
    ],
  },
  {
    id: 'gex2a-47',
    pattern: '～抜きで/抜きに (nuki de/nuki ni)',
    meaning: 'Không có, bỏ qua (kanji)',
    category: 'Loại trừ・Bỏ sót',
    jlpt: 'N2',
    examples: [
      { jp: 'お世辞抜きで、本当に上手ですね。', reading: 'おせじぬきで、ほんとうにじょうずですね。', meaning: 'Không phải nịnh đâu, thật sự giỏi lắm.' },
      { jp: '前置き抜きにして、本題に入りましょう。', reading: 'まえおきぬきにして、ほんだいにはいりましょう。', meaning: 'Bỏ phần mở đầu, hãy vào chủ đề chính.' },
    ],
  },
  {
    id: 'gex2a-48',
    pattern: '～を前提として (wo zentei to shite)',
    meaning: 'Lấy...làm tiền đề',
    category: 'Điều kiện・Tiền đề',
    jlpt: 'N2',
    examples: [
      { jp: '結婚を前提として、お付き合いしています。', reading: 'けっこんをぜんていとして、おつきあいしています。', meaning: 'Chúng tôi hẹn hò với tiền đề là kết hôn.' },
      { jp: '参加を前提として、準備を進めてください。', reading: 'さんかをぜんていとして、じゅんびをすすめてください。', meaning: 'Hãy chuẩn bị với tiền đề là sẽ tham gia.' },
    ],
  },
  {
    id: 'gex2a-49',
    pattern: '～ごとに (goto ni)',
    meaning: 'Mỗi, mỗi khi',
    category: 'Tần suất・Lặp lại',
    jlpt: 'N2',
    examples: [
      { jp: '会うごとに、彼女はきれいになっている。', reading: 'あうごとに、かのじょはきれいになっている。', meaning: 'Mỗi lần gặp, cô ấy lại đẹp hơn.' },
      { jp: '一年ごとに、健康診断を受けている。', reading: 'いちねんごとに、けんこうしんだんをうけている。', meaning: 'Mỗi năm tôi đi khám sức khỏe.' },
    ],
  },
  {
    id: 'gex2a-50',
    pattern: '～とおり/どおり (toori/doori)',
    meaning: 'Đúng như, theo như',
    category: 'So sánh・Đối chiếu',
    jlpt: 'N2',
    examples: [
      { jp: '説明書のとおりに組み立ててください。', reading: 'せつめいしょのとおりにくみたててください。', meaning: 'Hãy lắp ráp đúng như hướng dẫn.' },
      { jp: '予想どおり、彼が一位になった。', reading: 'よそうどおり、かれがいちいになった。', meaning: 'Đúng như dự đoán, anh ấy đứng nhất.' },
    ],
  },
  {
    id: 'gex2a-51',
    pattern: '～結果 (kekka)',
    meaning: 'Kết quả là',
    category: 'Kết quả・Hệ quả',
    jlpt: 'N2',
    examples: [
      { jp: '調査した結果、原因が分かった。', reading: 'ちょうさしたけっか、げんいんがわかった。', meaning: 'Kết quả điều tra, đã tìm ra nguyên nhân.' },
      { jp: '話し合った結果、計画を延期することにした。', reading: 'はなしあったけっか、けいかくをえんきすることにした。', meaning: 'Kết quả bàn bạc, đã quyết định hoãn kế hoạch.' },
    ],
  },
  {
    id: 'gex2a-52',
    pattern: '～代わりに (kawari ni)',
    meaning: 'Thay vào đó, đổi lại',
    category: 'Thay thế・Đổi chác',
    jlpt: 'N2',
    examples: [
      { jp: '電車の代わりに、バスで行った。', reading: 'でんしゃのかわりに、ばすでいった。', meaning: 'Thay vì đi tàu, tôi đã đi xe buýt.' },
      { jp: '手伝ってあげる代わりに、お菓子を買ってね。', reading: 'てつだってあげるかわりに、おかしをかってね。', meaning: 'Đổi lại việc giúp đỡ, hãy mua bánh cho tôi nhé.' },
    ],
  },
  {
    id: 'gex2a-53',
    pattern: '～に反して (ni hanshite)',
    meaning: 'Trái ngược với',
    category: 'Nghịch tiếp・Đối lập',
    jlpt: 'N2',
    examples: [
      { jp: '予想に反して、試験はとても簡単だった。', reading: 'よそうにはんして、しけんはとてもかんたんだった。', meaning: 'Trái ngược với dự đoán, bài thi rất dễ.' },
      { jp: '親の期待に反して、彼は芸術家になった。', reading: 'おやのきたいにはんして、かれはげいじゅつかになった。', meaning: 'Trái ngược với kỳ vọng của bố mẹ, anh ấy thành nghệ sĩ.' },
    ],
  },
  {
    id: 'gex2a-54',
    pattern: '～にもとづいて (ni motozuite)',
    meaning: 'Dựa trên, căn cứ vào (phiên bản hiragana)',
    category: 'Cơ sở・Tiêu chuẩn',
    jlpt: 'N2',
    examples: [
      { jp: 'データにもとづいて、レポートを作成した。', reading: 'でーたにもとづいて、れぽーとをさくせいした。', meaning: 'Dựa trên dữ liệu, đã viết báo cáo.' },
      { jp: '事実にもとづいて、判断してください。', reading: 'じじつにもとづいて、はんだんしてください。', meaning: 'Hãy phán đoán dựa trên sự thật.' },
    ],
  },
  {
    id: 'gex2a-55',
    pattern: '～はともかく (wa tomokaku)',
    meaning: 'Bỏ qua chuyện..., không bàn đến',
    category: 'Loại trừ・Nhượng bộ',
    jlpt: 'N2',
    examples: [
      { jp: '味はともかく、見た目はきれいだ。', reading: 'あじはともかく、みためはきれいだ。', meaning: 'Bỏ qua chuyện vị, hình thức thì đẹp.' },
      { jp: '値段はともかく、品質が良ければ買う。', reading: 'ねだんはともかく、ひんしつがよければかう。', meaning: 'Không bàn đến giá, nếu chất lượng tốt thì mua.' },
    ],
  },
];

// ── from: grammarExp_N2_Part2.ts ──
export const GRAMMAR_EXP_N2_P2: GrammarEntry[] = [
  {
    id: 'gex2b-01',
    pattern: '～てからでないと (te kara de nai to)',
    meaning: 'Nếu không...trước thì không thể',
    category: 'Điều kiện・Thứ tự',
    jlpt: 'N2',
    examples: [
      { jp: '説明書を読んでからでないと、この機械は使えません。', reading: 'せつめいしょをよんでからでないと、このきかいはつかえません。', meaning: 'Nếu không đọc hướng dẫn trước thì không thể sử dụng máy này.' },
      { jp: '予約してからでないと、入れないレストランです。', reading: 'よやくしてからでないと、はいれないれすとらんです。', meaning: 'Đây là nhà hàng nếu không đặt trước thì không vào được.' },
    ],
  },
  {
    id: 'gex2b-02',
    pattern: '～て以来 (te irai)',
    meaning: 'Kể từ khi',
    category: 'Thời gian',
    jlpt: 'N2',
    examples: [
      { jp: '日本に来て以来、毎日日本語を勉強しています。', reading: 'にほんにきていらい、まいにちにほんごをべんきょうしています。', meaning: 'Kể từ khi đến Nhật, tôi học tiếng Nhật mỗi ngày.' },
      { jp: '彼女と別れて以来、恋愛に興味がなくなった。', reading: 'かのじょとわかれていらい、れんあいにきょうみがなくなった。', meaning: 'Kể từ khi chia tay cô ấy, tôi không còn hứng thú với tình yêu.' },
    ],
  },
  {
    id: 'gex2b-03',
    pattern: '～てはじめて (te hajimete)',
    meaning: 'Chỉ khi...mới',
    category: 'Điều kiện・Phát hiện',
    jlpt: 'N2',
    examples: [
      { jp: '親になってはじめて、親の気持ちがわかった。', reading: 'おやになってはじめて、おやのきもちがわかった。', meaning: 'Chỉ khi làm cha mẹ mới hiểu được tâm trạng của cha mẹ.' },
      { jp: '病気になってはじめて、健康のありがたさに気づいた。', reading: 'びょうきになってはじめて、けんこうのありがたさにきづいた。', meaning: 'Chỉ khi bị bệnh mới nhận ra giá trị của sức khỏe.' },
    ],
  },
  {
    id: 'gex2b-04',
    pattern: '～たかと思うと (ta ka to omou to)',
    meaning: 'Vừa...thì đã',
    category: 'Thời gian・Liên tiếp',
    jlpt: 'N2',
    examples: [
      { jp: '空が暗くなったかと思うと、急に雨が降り出した。', reading: 'そらがくらくなったかとおもうと、きゅうにあめがふりだした。', meaning: 'Vừa thấy trời tối thì đã đổ mưa ngay.' },
      { jp: '子供が帰ってきたかと思うと、すぐにまた出かけた。', reading: 'こどもがかえってきたかとおもうと、すぐにまたでかけた。', meaning: 'Đứa trẻ vừa về đến nhà thì đã lại ra ngoài ngay.' },
    ],
  },
  {
    id: 'gex2b-05',
    pattern: '～たとたん (ta totan)',
    meaning: 'Ngay khi...thì',
    category: 'Thời gian・Tức thì',
    jlpt: 'N2',
    examples: [
      { jp: 'ドアを開けたとたん、猫が飛び出してきた。', reading: 'どあをあけたとたん、ねこがとびだしてきた。', meaning: 'Ngay khi mở cửa thì con mèo nhảy ra.' },
      { jp: '立ち上がったとたん、めまいがした。', reading: 'たちあがったとたん、めまいがした。', meaning: 'Ngay khi đứng dậy thì bị chóng mặt.' },
    ],
  },
  {
    id: 'gex2b-06',
    pattern: '～がたい (gatai)',
    meaning: 'Khó mà',
    category: 'Khả năng・Khó khăn',
    jlpt: 'N2',
    examples: [
      { jp: '彼の行動は理解しがたい。', reading: 'かれのこうどうはりかいしがたい。', meaning: 'Hành động của anh ấy thật khó mà hiểu được.' },
      { jp: 'あの事故は忘れがたい記憶だ。', reading: 'あのじこはわすれがたいきおくだ。', meaning: 'Vụ tai nạn đó là ký ức khó mà quên được.' },
    ],
  },
  {
    id: 'gex2b-07',
    pattern: '～得る/得ない (uru/enai)',
    meaning: 'Có thể/không thể',
    category: 'Khả năng',
    jlpt: 'N2',
    examples: [
      { jp: 'そんなことはあり得ないと思う。', reading: 'そんなことはありえないとおもう。', meaning: 'Tôi nghĩ chuyện đó không thể xảy ra được.' },
      { jp: '努力すれば、成功し得る。', reading: 'どりょくすれば、せいこうしうる。', meaning: 'Nếu cố gắng thì có thể thành công.' },
    ],
  },
  {
    id: 'gex2b-08',
    pattern: '～かねない (kanenai)',
    meaning: 'Có khả năng (tiêu cực)',
    category: 'Khả năng・Cảnh báo',
    jlpt: 'N2',
    examples: [
      { jp: 'この問題を放置すると、大事故になりかねない。', reading: 'このもんだいをほうちすると、だいじこになりかねない。', meaning: 'Nếu bỏ mặc vấn đề này, có khả năng sẽ thành tai nạn lớn.' },
      { jp: '無理をすると、体を壊しかねない。', reading: 'むりをすると、からだをこわしかねない。', meaning: 'Nếu cố quá sức, có khả năng sẽ hỏng sức khỏe.' },
    ],
  },
  {
    id: 'gex2b-09',
    pattern: '～を問わず (wo towazu)',
    meaning: 'Bất kể',
    category: 'Phạm vi・Không phân biệt',
    jlpt: 'N2',
    examples: [
      { jp: 'この仕事は経験を問わず、誰でも応募できます。', reading: 'このしごとはけいけんをとわず、だれでもおうぼできます。', meaning: 'Công việc này bất kể kinh nghiệm, ai cũng có thể ứng tuyển.' },
      { jp: '年齢を問わず、参加できるイベントです。', reading: 'ねんれいをとわず、さんかできるいべんとです。', meaning: 'Đây là sự kiện bất kể tuổi tác đều có thể tham gia.' },
    ],
  },
  {
    id: 'gex2b-10',
    pattern: '～はもとより (wa motoyori)',
    meaning: 'Không chỉ...mà còn',
    category: 'Phạm vi・Bao gồm',
    jlpt: 'N2',
    examples: [
      { jp: '彼は英語はもとより、フランス語も話せる。', reading: 'かれはえいごはもとより、ふらんすごもはなせる。', meaning: 'Anh ấy không chỉ tiếng Anh mà còn nói được cả tiếng Pháp.' },
      { jp: 'この店は味はもとより、サービスも素晴らしい。', reading: 'このみせはあじはもとより、さーびすもすばらしい。', meaning: 'Quán này không chỉ hương vị mà dịch vụ cũng tuyệt vời.' },
    ],
  },
  {
    id: 'gex2b-11',
    pattern: '～はもちろん (wa mochiron)',
    meaning: 'Đương nhiên là...mà còn',
    category: 'Phạm vi・Bao gồm',
    jlpt: 'N2',
    examples: [
      { jp: '日本語はもちろん、中国語もできます。', reading: 'にほんごはもちろん、ちゅうごくごもできます。', meaning: 'Đương nhiên tiếng Nhật, mà tiếng Trung cũng biết.' },
      { jp: '平日はもちろん、休日も働いている。', reading: 'へいじつはもちろん、きゅうじつもはたらいている。', meaning: 'Đương nhiên ngày thường, mà ngày nghỉ cũng làm việc.' },
    ],
  },
  {
    id: 'gex2b-12',
    pattern: '～のみならず (nomi narazu)',
    meaning: 'Không chỉ',
    category: 'Phạm vi・Mở rộng',
    jlpt: 'N2',
    examples: [
      { jp: 'この問題は日本のみならず、世界中で起きている。', reading: 'このもんだいはにほんのみならず、せかいじゅうでおきている。', meaning: 'Vấn đề này không chỉ ở Nhật mà xảy ra trên toàn thế giới.' },
      { jp: '彼は学業のみならず、スポーツでも優れている。', reading: 'かれはがくぎょうのみならず、すぽーつでもすぐれている。', meaning: 'Anh ấy không chỉ giỏi học mà thể thao cũng xuất sắc.' },
    ],
  },
  {
    id: 'gex2b-13',
    pattern: '～に限ったことではない (ni kagitta koto dewa nai)',
    meaning: 'Không chỉ riêng',
    category: 'Phạm vi・Tổng quát',
    jlpt: 'N2',
    examples: [
      { jp: 'ストレスは大人に限ったことではない。子供も感じる。', reading: 'すとれすはおとなにかぎったことではない。こどももかんじる。', meaning: 'Stress không chỉ riêng người lớn. Trẻ em cũng cảm thấy.' },
      { jp: 'この問題は都市部に限ったことではない。', reading: 'このもんだいはとしぶにかぎったことではない。', meaning: 'Vấn đề này không chỉ riêng ở khu vực thành thị.' },
    ],
  },
  {
    id: 'gex2b-14',
    pattern: '～にほかならない (ni hoka naranai)',
    meaning: 'Chính là',
    category: 'Nhấn mạnh・Khẳng định',
    jlpt: 'N2',
    examples: [
      { jp: '成功したのは、努力の結果にほかならない。', reading: 'せいこうしたのは、どりょくのけっかにほかならない。', meaning: 'Việc thành công chính là kết quả của sự nỗ lực.' },
      { jp: '彼が怒ったのは、心配しているからにほかならない。', reading: 'かれがおこったのは、しんぱいしているからにほかならない。', meaning: 'Việc anh ấy giận chính là vì lo lắng.' },
    ],
  },
  {
    id: 'gex2b-15',
    pattern: '～に相違ない (ni soui nai)',
    meaning: 'Chắc chắn là',
    category: 'Nhấn mạnh・Đoán chắc',
    jlpt: 'N2',
    examples: [
      { jp: 'あの足跡は犯人のものに相違ない。', reading: 'あのあしあとははんにんのものにそういない。', meaning: 'Dấu chân đó chắc chắn là của thủ phạm.' },
      { jp: '彼女の実力なら合格するに相違ない。', reading: 'かのじょのじつりょくならごうかくするにそういない。', meaning: 'Với thực lực của cô ấy thì chắc chắn đỗ.' },
    ],
  },
  {
    id: 'gex2b-16',
    pattern: '～といえば (to ieba)',
    meaning: 'Nói đến...thì',
    category: 'Chủ đề・Liên tưởng',
    jlpt: 'N2',
    examples: [
      { jp: '日本といえば、桜が有名ですね。', reading: 'にほんといえば、さくらがゆうめいですね。', meaning: 'Nói đến Nhật Bản thì hoa anh đào nổi tiếng nhỉ.' },
      { jp: '夏といえば、花火大会を思い出す。', reading: 'なつといえば、はなびたいかいをおもいだす。', meaning: 'Nói đến mùa hè thì tôi nhớ đến lễ hội pháo hoa.' },
    ],
  },
  {
    id: 'gex2b-17',
    pattern: '～といったら (to ittara)',
    meaning: 'Nói về...thì (nhấn mạnh cảm xúc)',
    category: 'Nhấn mạnh・Cảm thán',
    jlpt: 'N2',
    examples: [
      { jp: '彼の料理の腕前といったら、プロ並みだ。', reading: 'かれのりょうりのうでまえといったら、ぷろなみだ。', meaning: 'Nói về tay nghề nấu ăn của anh ấy thì ngang tầm chuyên nghiệp.' },
      { jp: 'あの映画の感動といったら、言葉にできない。', reading: 'あのえいがのかんどうといったら、ことばにできない。', meaning: 'Nói về sự xúc động của bộ phim đó thì không thể diễn tả bằng lời.' },
    ],
  },
  {
    id: 'gex2b-18',
    pattern: '～というと (to iu to)',
    meaning: 'Khi nhắc đến',
    category: 'Chủ đề・Liên tưởng',
    jlpt: 'N2',
    examples: [
      { jp: '京都というと、お寺が多いイメージがある。', reading: 'きょうとというと、おてらがおおいいめーじがある。', meaning: 'Khi nhắc đến Kyoto, có hình ảnh nhiều chùa.' },
      { jp: '冬というと、こたつでみかんを食べるのが楽しみだ。', reading: 'ふゆというと、こたつでみかんをたべるのがたのしみだ。', meaning: 'Khi nhắc đến mùa đông, tôi thích ăn quýt ở kotatsu.' },
    ],
  },
  {
    id: 'gex2b-19',
    pattern: '～とたん (totan)',
    meaning: 'Ngay lúc',
    category: 'Thời gian・Tức thì',
    jlpt: 'N2',
    examples: [
      { jp: '外に出たとたん、冷たい風が吹いた。', reading: 'そとにでたとたん、つめたいかぜがふいた。', meaning: 'Ngay lúc ra ngoài, gió lạnh thổi đến.' },
      { jp: '電話を切ったとたん、また鳴り出した。', reading: 'でんわをきったとたん、またなりだした。', meaning: 'Ngay lúc cúp điện thoại, nó lại reo.' },
    ],
  },
  {
    id: 'gex2b-20',
    pattern: '～ともすると (tomo suru to)',
    meaning: 'Dễ có xu hướng',
    category: 'Khuynh hướng',
    jlpt: 'N2',
    examples: [
      { jp: '彼はともすると悲観的に考えがちだ。', reading: 'かれはともするとひかんてきにかんがえがちだ。', meaning: 'Anh ấy dễ có xu hướng suy nghĩ bi quan.' },
      { jp: '忙しいと、ともすると健康管理を怠ってしまう。', reading: 'いそがしいと、ともするとけんこうかんりをおこたってしまう。', meaning: 'Khi bận rộn, dễ có xu hướng lơ là quản lý sức khỏe.' },
    ],
  },
  {
    id: 'gex2b-21',
    pattern: '～とは (to wa)',
    meaning: 'Thật không ngờ',
    category: 'Ngạc nhiên・Cảm thán',
    jlpt: 'N2',
    examples: [
      { jp: 'まさか彼が辞めるとは、驚いた。', reading: 'まさかかれがやめるとは、おどろいた。', meaning: 'Thật không ngờ anh ấy lại nghỉ việc, tôi ngạc nhiên.' },
      { jp: 'こんなところで会えるとは思わなかった。', reading: 'こんなところであえるとはおもわなかった。', meaning: 'Không ngờ lại gặp được ở nơi như thế này.' },
    ],
  },
  {
    id: 'gex2b-22',
    pattern: '～とはいえ (to wa ie)',
    meaning: 'Tuy nói vậy nhưng',
    category: 'Nhượng bộ',
    jlpt: 'N2',
    examples: [
      { jp: '春とはいえ、まだ寒い日が続いている。', reading: 'はるとはいえ、まださむいひがつづいている。', meaning: 'Tuy nói là mùa xuân nhưng những ngày lạnh vẫn tiếp tục.' },
      { jp: '合格したとはいえ、まだ安心できない。', reading: 'ごうかくしたとはいえ、まだあんしんできない。', meaning: 'Tuy đã đỗ nhưng vẫn chưa thể yên tâm.' },
    ],
  },
  {
    id: 'gex2b-23',
    pattern: '～というわけではない (to iu wake dewa nai)',
    meaning: 'Không hẳn là',
    category: 'Phủ định một phần',
    jlpt: 'N2',
    examples: [
      { jp: '嫌いだというわけではないが、あまり食べない。', reading: 'きらいだというわけではないが、あまりたべない。', meaning: 'Không hẳn là ghét nhưng không ăn nhiều.' },
      { jp: '日本語が上手だというわけではないが、日常会話はできる。', reading: 'にほんごがじょうずだというわけではないが、にちじょうかいわはできる。', meaning: 'Không hẳn là giỏi tiếng Nhật nhưng giao tiếp hàng ngày thì được.' },
    ],
  },
  {
    id: 'gex2b-24',
    pattern: '～ないことには (nai koto ni wa)',
    meaning: 'Nếu không...thì không thể',
    category: 'Điều kiện・Tiên quyết',
    jlpt: 'N2',
    examples: [
      { jp: '実際に見ないことには、判断できない。', reading: 'じっさいにみないことには、はんだんできない。', meaning: 'Nếu không tận mắt nhìn thì không thể phán đoán.' },
      { jp: '試してみないことには、結果はわからない。', reading: 'ためしてみないことには、けっかはわからない。', meaning: 'Nếu không thử thì không biết kết quả.' },
    ],
  },
  {
    id: 'gex2b-25',
    pattern: '～ないまま (nai mama)',
    meaning: 'Trong trạng thái chưa',
    category: 'Trạng thái',
    jlpt: 'N2',
    examples: [
      { jp: '朝ごはんを食べないまま、学校に行った。', reading: 'あさごはんをたべないまま、がっこうにいった。', meaning: 'Đi học trong trạng thái chưa ăn sáng.' },
      { jp: '問題が解決しないまま、会議が終わった。', reading: 'もんだいがかいけつしないまま、かいぎがおわった。', meaning: 'Cuộc họp kết thúc trong trạng thái vấn đề chưa được giải quyết.' },
    ],
  },
  {
    id: 'gex2b-26',
    pattern: '～ぬ (nu)',
    meaning: 'Không (dạng cổ)',
    category: 'Phủ định・Văn viết',
    jlpt: 'N2',
    examples: [
      { jp: '思わぬ出来事に驚いた。', reading: 'おもわぬできごとにおどろいた。', meaning: 'Tôi ngạc nhiên trước sự việc không ngờ tới.' },
      { jp: '知らぬ間に時間が過ぎていた。', reading: 'しらぬまにじかんがすぎていた。', meaning: 'Thời gian đã trôi qua lúc không hay biết.' },
    ],
  },
  {
    id: 'gex2b-27',
    pattern: '～ずじまい (zu jimai)',
    meaning: 'Rốt cuộc không làm',
    category: 'Kết quả・Tiếc nuối',
    jlpt: 'N2',
    examples: [
      { jp: '結局、彼に本当のことを言わずじまいだった。', reading: 'けっきょく、かれにほんとうのことをいわずじまいだった。', meaning: 'Rốt cuộc tôi đã không nói sự thật với anh ấy.' },
      { jp: '買おうと思っていた本を買わずじまいだった。', reading: 'かおうとおもっていたほんをかわずじまいだった。', meaning: 'Cuốn sách định mua rốt cuộc tôi đã không mua.' },
    ],
  },
  {
    id: 'gex2b-28',
    pattern: '～ところ (tokoro)',
    meaning: 'Vừa lúc, thực ra',
    category: 'Thời gian・Phát hiện',
    jlpt: 'N2',
    examples: [
      { jp: '先生に聞いたところ、明日は休みだそうだ。', reading: 'せんせいにきいたところ、あしたはやすみだそうだ。', meaning: 'Hỏi thầy giáo thì được biết ngày mai nghỉ.' },
      { jp: '調べたところ、原因は単純なミスだった。', reading: 'しらべたところ、げんいんはたんじゅんなみすだった。', meaning: 'Khi điều tra thì phát hiện nguyên nhân là lỗi đơn giản.' },
    ],
  },
  {
    id: 'gex2b-29',
    pattern: '～どころか (dokoro ka)',
    meaning: 'Huống chi',
    category: 'Nhấn mạnh・Phủ nhận',
    jlpt: 'N2',
    examples: [
      { jp: '漢字どころか、ひらがなも読めない。', reading: 'かんじどころか、ひらがなもよめない。', meaning: 'Huống chi kanji, ngay cả hiragana cũng không đọc được.' },
      { jp: '旅行どころか、週末も休めない。', reading: 'りょこうどころか、しゅうまつもやすめない。', meaning: 'Huống chi đi du lịch, cuối tuần cũng không được nghỉ.' },
    ],
  },
  {
    id: 'gex2b-30',
    pattern: '～どころではなく (dokoro de wa naku)',
    meaning: 'Không phải lúc...mà',
    category: 'Nhấn mạnh・Phủ nhận',
    jlpt: 'N2',
    examples: [
      { jp: '遊びどころではなく、今は試験勉強で忙しい。', reading: 'あそびどころではなく、いまはしけんべんきょうでいそがしい。', meaning: 'Không phải lúc để chơi, bây giờ bận ôn thi.' },
      { jp: '花見どころではなく、仕事の締め切りに追われている。', reading: 'はなみどころではなく、しごとのしめきりにおわれている。', meaning: 'Không phải lúc ngắm hoa, đang bị deadline công việc dồn ép.' },
    ],
  },
  {
    id: 'gex2b-31',
    pattern: '～かのように (ka no you ni)',
    meaning: 'Như thể',
    category: 'So sánh・Ví von',
    jlpt: 'N2',
    examples: [
      { jp: '彼女は何も知らないかのように振る舞った。', reading: 'かのじょはなにもしらないかのようにふるまった。', meaning: 'Cô ấy cư xử như thể không biết gì.' },
      { jp: '子供たちは空を飛べるかのように走り回っていた。', reading: 'こどもたちはそらをとべるかのようにはしりまわっていた。', meaning: 'Bọn trẻ chạy khắp nơi như thể có thể bay trên trời.' },
    ],
  },
  {
    id: 'gex2b-32',
    pattern: '～にかかわることなく (ni kakawaru koto naku)',
    meaning: 'Bất kể',
    category: 'Phạm vi・Không phân biệt',
    jlpt: 'N2',
    examples: [
      { jp: '性別にかかわることなく、平等に扱われるべきだ。', reading: 'せいべつにかかわることなく、びょうどうにあつかわれるべきだ。', meaning: 'Bất kể giới tính, nên được đối xử bình đẳng.' },
      { jp: '結果にかかわることなく、全力を尽くしたい。', reading: 'けっかにかかわることなく、ぜんりょくをつくしたい。', meaning: 'Bất kể kết quả, tôi muốn cố gắng hết sức.' },
    ],
  },
  {
    id: 'gex2b-33',
    pattern: '～に関わらず (ni kakawarazu)',
    meaning: 'Bất kể',
    category: 'Phạm vi・Không phân biệt',
    jlpt: 'N2',
    examples: [
      { jp: '天候に関わらず、イベントは開催されます。', reading: 'てんこうにかかわらず、いべんとはかいさいされます。', meaning: 'Bất kể thời tiết, sự kiện vẫn được tổ chức.' },
      { jp: '国籍に関わらず、応募できます。', reading: 'こくせきにかかわらず、おうぼできます。', meaning: 'Bất kể quốc tịch, đều có thể ứng tuyển.' },
    ],
  },
  {
    id: 'gex2b-34',
    pattern: '～もかまわず (mo kamawazu)',
    meaning: 'Bất chấp',
    category: 'Bất chấp',
    jlpt: 'N2',
    examples: [
      { jp: '人目もかまわず、大声で泣いた。', reading: 'ひとめもかまわず、おおごえでないた。', meaning: 'Bất chấp ánh mắt người khác, khóc to.' },
      { jp: '服が汚れるのもかまわず、子供と泥遊びをした。', reading: 'ふくがよごれるのもかまわず、こどもとどろあそびをした。', meaning: 'Bất chấp quần áo bị bẩn, chơi bùn với con.' },
    ],
  },
  {
    id: 'gex2b-35',
    pattern: '～をものともせず (wo mono to mo sezu)',
    meaning: 'Bất chấp (nghịch cảnh)',
    category: 'Bất chấp・Dũng cảm',
    jlpt: 'N2',
    examples: [
      { jp: '彼は困難をものともせず、挑戦し続けた。', reading: 'かれはこんなんをものともせず、ちょうせんしつづけた。', meaning: 'Anh ấy bất chấp khó khăn, tiếp tục thách thức.' },
      { jp: '強風をものともせず、登山を続けた。', reading: 'きょうふうをものともせず、とざんをつづけた。', meaning: 'Bất chấp gió mạnh, tiếp tục leo núi.' },
    ],
  },
  {
    id: 'gex2b-36',
    pattern: '～を余儀なくする (wo yogi naku suru)',
    meaning: 'Buộc phải',
    category: 'Bắt buộc',
    jlpt: 'N2',
    examples: [
      { jp: '台風が試合の延期を余儀なくした。', reading: 'たいふうがしあいのえんきをよぎなくした。', meaning: 'Bão đã buộc phải hoãn trận đấu.' },
      { jp: '財政難が計画の変更を余儀なくした。', reading: 'ざいせいなんがけいかくのへんこうをよぎなくした。', meaning: 'Khó khăn tài chính đã buộc phải thay đổi kế hoạch.' },
    ],
  },
  {
    id: 'gex2b-37',
    pattern: '～まじき (majiki)',
    meaning: 'Không nên, không xứng',
    category: 'Đạo đức・Phê phán',
    jlpt: 'N2',
    examples: [
      { jp: 'それは教師にあるまじき行為だ。', reading: 'それはきょうしにあるまじきこういだ。', meaning: 'Đó là hành vi không xứng là giáo viên.' },
      { jp: '社会人としてあるまじき態度を取った。', reading: 'しゃかいじんとしてあるまじきたいどをとった。', meaning: 'Đã có thái độ không xứng là người đi làm.' },
    ],
  },
  {
    id: 'gex2b-38',
    pattern: '～ながらも (nagara mo)',
    meaning: 'Dù...nhưng',
    category: 'Nhượng bộ',
    jlpt: 'N2',
    examples: [
      { jp: '小さいながらも、居心地のいい家だ。', reading: 'ちいさいながらも、いごこちのいいいえだ。', meaning: 'Dù nhỏ nhưng là ngôi nhà ấm cúng.' },
      { jp: '残念ながらも、結果を受け入れるしかない。', reading: 'ざんねんながらも、けっかをうけいれるしかない。', meaning: 'Dù đáng tiếc nhưng chỉ có thể chấp nhận kết quả.' },
    ],
  },
  {
    id: 'gex2b-39',
    pattern: '～つつも (tsutsu mo)',
    meaning: 'Dù biết...nhưng vẫn',
    category: 'Nhượng bộ・Mâu thuẫn',
    jlpt: 'N2',
    examples: [
      { jp: '体に悪いと知りつつも、タバコを吸ってしまう。', reading: 'からだにわるいとしりつつも、たばこをすってしまう。', meaning: 'Dù biết hại sức khỏe nhưng vẫn hút thuốc.' },
      { jp: '悪いと思いつつも、つい嘘をついてしまった。', reading: 'わるいとおもいつつも、ついうそをついてしまった。', meaning: 'Dù nghĩ là xấu nhưng vẫn lỡ nói dối.' },
    ],
  },
  {
    id: 'gex2b-40',
    pattern: '～ものの (mono no)',
    meaning: 'Tuy...nhưng',
    category: 'Nhượng bộ',
    jlpt: 'N2',
    examples: [
      { jp: '買ったものの、一度も使っていない。', reading: 'かったものの、いちどもつかっていない。', meaning: 'Tuy đã mua nhưng chưa dùng lần nào.' },
      { jp: '申し込んだものの、参加できるかどうかわからない。', reading: 'もうしこんだものの、さんかできるかどうかわからない。', meaning: 'Tuy đã đăng ký nhưng không biết có tham gia được không.' },
    ],
  },
  {
    id: 'gex2b-41',
    pattern: '～にしては (ni shite wa)',
    meaning: 'Đối với...thì',
    category: 'So sánh・Đánh giá',
    jlpt: 'N2',
    examples: [
      { jp: '初心者にしては、上手だね。', reading: 'しょしんしゃにしては、じょうずだね。', meaning: 'Đối với người mới bắt đầu thì giỏi đấy nhỉ.' },
      { jp: '冬にしては、暖かい日だ。', reading: 'ふゆにしては、あたたかいひだ。', meaning: 'Đối với mùa đông thì hôm nay ấm.' },
    ],
  },
  {
    id: 'gex2b-42',
    pattern: '～割には (wari ni wa)',
    meaning: 'So với...thì',
    category: 'So sánh・Bất ngờ',
    jlpt: 'N2',
    examples: [
      { jp: '勉強した割には、成績が上がらなかった。', reading: 'べんきょうしたわりには、せいせきがあがらなかった。', meaning: 'So với mức đã học thì điểm không tăng.' },
      { jp: 'このレストランは値段の割には、おいしい。', reading: 'このれすとらんはねだんのわりには、おいしい。', meaning: 'So với giá thì nhà hàng này ngon.' },
    ],
  },
  {
    id: 'gex2b-43',
    pattern: '～末に (sue ni)',
    meaning: 'Cuối cùng sau khi',
    category: 'Kết quả・Quá trình',
    jlpt: 'N2',
    examples: [
      { jp: '長い議論の末に、結論が出た。', reading: 'ながいぎろんのすえに、けつろんがでた。', meaning: 'Cuối cùng sau cuộc thảo luận dài, đã có kết luận.' },
      { jp: '悩んだ末に、転職することにした。', reading: 'なやんだすえに、てんしょくすることにした。', meaning: 'Cuối cùng sau khi trăn trở, đã quyết định đổi việc.' },
    ],
  },
  {
    id: 'gex2b-44',
    pattern: '～あげくに (ageku ni)',
    meaning: 'Sau cùng lại (tiêu cực)',
    category: 'Kết quả・Tiêu cực',
    jlpt: 'N2',
    examples: [
      { jp: '散々迷ったあげくに、何も買わなかった。', reading: 'さんざんまよったあげくに、なにもかわなかった。', meaning: 'Sau khi phân vân mãi, cuối cùng lại chẳng mua gì.' },
      { jp: '長時間待ったあげくに、中止と言われた。', reading: 'ちょうじかんまったあげくに、ちゅうしといわれた。', meaning: 'Sau khi đợi rất lâu, cuối cùng lại được bảo hủy.' },
    ],
  },
  {
    id: 'gex2b-45',
    pattern: '～た挙げ句 (ta ageku)',
    meaning: 'Cuối cùng lại',
    category: 'Kết quả・Tiêu cực',
    jlpt: 'N2',
    examples: [
      { jp: '考えた挙げ句、断ることにした。', reading: 'かんがえたあげく、ことわることにした。', meaning: 'Sau khi suy nghĩ, cuối cùng quyết định từ chối.' },
      { jp: '喧嘩した挙げ句、二人は別れてしまった。', reading: 'けんかしたあげく、ふたりはわかれてしまった。', meaning: 'Sau khi cãi nhau, cuối cùng hai người chia tay.' },
    ],
  },
  {
    id: 'gex2b-46',
    pattern: '～を踏まえて (wo fumaete)',
    meaning: 'Dựa trên',
    category: 'Cơ sở・Căn cứ',
    jlpt: 'N2',
    examples: [
      { jp: '調査結果を踏まえて、対策を立てる。', reading: 'ちょうさけっかをふまえて、たいさくをたてる。', meaning: 'Dựa trên kết quả điều tra, lập đối sách.' },
      { jp: '過去の経験を踏まえて、計画を見直した。', reading: 'かこのけいけんをふまえて、けいかくをみなおした。', meaning: 'Dựa trên kinh nghiệm quá khứ, đã xem lại kế hoạch.' },
    ],
  },
  {
    id: 'gex2b-47',
    pattern: '～に先駆けて (ni sakigakete)',
    meaning: 'Đi đầu, trước khi',
    category: 'Thời gian・Tiên phong',
    jlpt: 'N2',
    examples: [
      { jp: '世界に先駆けて、日本がこの技術を開発した。', reading: 'せかいにさきがけて、にほんがこのぎじゅつをかいはつした。', meaning: 'Đi đầu thế giới, Nhật Bản đã phát triển công nghệ này.' },
      { jp: '発売に先駆けて、試食会が行われた。', reading: 'はつばいにさきがけて、ししょくかいがおこなわれた。', meaning: 'Trước khi mở bán, buổi dùng thử đã được tổ chức.' },
    ],
  },
  {
    id: 'gex2b-48',
    pattern: '～に準じて (ni junjite)',
    meaning: 'Tương ứng với, theo',
    category: 'Tiêu chuẩn・Quy tắc',
    jlpt: 'N2',
    examples: [
      { jp: '正社員に準じて、待遇が決まります。', reading: 'せいしゃいんにじゅんじて、たいぐうがきまります。', meaning: 'Đãi ngộ được quyết định tương ứng với nhân viên chính thức.' },
      { jp: '法律に準じて、手続きを行ってください。', reading: 'ほうりつにじゅんじて、てつづきをおこなってください。', meaning: 'Xin hãy tiến hành thủ tục theo luật pháp.' },
    ],
  },
  {
    id: 'gex2b-49',
    pattern: '～に照らして (ni terashite)',
    meaning: 'Chiếu theo',
    category: 'Tiêu chuẩn・Đánh giá',
    jlpt: 'N2',
    examples: [
      { jp: '法律に照らして、この行為は違法だ。', reading: 'ほうりつにてらして、このこういはいほうだ。', meaning: 'Chiếu theo luật pháp, hành vi này là bất hợp pháp.' },
      { jp: '過去の事例に照らして、判断を下した。', reading: 'かこのじれいにてらして、はんだんをくだした。', meaning: 'Chiếu theo các trường hợp trước, đã đưa ra phán đoán.' },
    ],
  },
  {
    id: 'gex2b-50',
    pattern: '～に際して (ni saishite)',
    meaning: 'Nhân dịp, khi',
    category: 'Thời điểm・Trang trọng',
    jlpt: 'N2',
    examples: [
      { jp: '卒業に際して、先生にお礼を言いたい。', reading: 'そつぎょうにさいして、せんせいにおれいをいいたい。', meaning: 'Nhân dịp tốt nghiệp, tôi muốn cảm ơn thầy cô.' },
      { jp: '開会に際して、社長が挨拶をした。', reading: 'かいかいにさいして、しゃちょうがあいさつをした。', meaning: 'Nhân dịp khai mạc, giám đốc đã phát biểu.' },
    ],
  },
  {
    id: 'gex2b-51',
    pattern: '～てはいられない (te wa irarenai)',
    meaning: 'Không thể cứ mãi',
    category: 'Cấp bách・Hành động',
    jlpt: 'N2',
    examples: [
      { jp: '締め切りが近いので、のんびりしてはいられない。', reading: 'しめきりがちかいので、のんびりしてはいられない。', meaning: 'Deadline gần rồi nên không thể cứ thong thả mãi.' },
      { jp: '泣いてはいられない。前に進まなければ。', reading: 'ないてはいられない。まえにすすまなければ。', meaning: 'Không thể cứ khóc mãi. Phải tiến lên phía trước.' },
    ],
  },
  {
    id: 'gex2b-52',
    pattern: '～ぶり (buri)',
    meaning: 'Cách thức, lần đầu sau (khoảng thời gian)',
    category: 'Cách thức・Thời gian',
    jlpt: 'N2',
    examples: [
      { jp: '３年ぶりに故郷に帰った。', reading: 'さんねんぶりにこきょうにかえった。', meaning: 'Lần đầu sau 3 năm tôi về quê.' },
      { jp: '彼の食べっぷりを見て、驚いた。', reading: 'かれのたべっぷりをみて、おどろいた。', meaning: 'Nhìn cách ăn của anh ấy, tôi ngạc nhiên.' },
    ],
  },
  {
    id: 'gex2b-53',
    pattern: '～をおいて (wo oite)',
    meaning: 'Ngoài...ra không ai/không gì',
    category: 'Nhấn mạnh・Duy nhất',
    jlpt: 'N2',
    examples: [
      { jp: 'この仕事を任せられるのは、彼をおいてほかにいない。', reading: 'このしごとをまかせられるのは、かれをおいてほかにいない。', meaning: 'Người có thể giao việc này, ngoài anh ấy ra không ai khác.' },
      { jp: 'リーダーにふさわしいのは、田中さんをおいていない。', reading: 'りーだーにふさわしいのは、たなかさんをおいていない。', meaning: 'Người xứng đáng làm lãnh đạo, ngoài anh Tanaka ra không có ai.' },
    ],
  },
  {
    id: 'gex2b-54',
    pattern: '～抜きにして (nuki ni shite)',
    meaning: 'Bỏ qua, không kể',
    category: 'Loại trừ',
    jlpt: 'N2',
    examples: [
      { jp: '冗談は抜きにして、真剣に話しましょう。', reading: 'じょうだんはぬきにして、しんけんにはなしましょう。', meaning: 'Bỏ qua đùa giỡn, hãy nói chuyện nghiêm túc.' },
      { jp: 'お世辞抜きにして、本当に上手ですね。', reading: 'おせじぬきにして、ほんとうにじょうずですね。', meaning: 'Không phải nịnh đâu, bạn thực sự giỏi đấy.' },
    ],
  },
  {
    id: 'gex2b-55',
    pattern: '～ならでは (nara de wa)',
    meaning: 'Chỉ có...mới có thể',
    category: 'Nhấn mạnh・Đặc trưng',
    jlpt: 'N2',
    examples: [
      { jp: 'これは京都ならではの景色だ。', reading: 'これはきょうとならではのけしきだ。', meaning: 'Đây là phong cảnh chỉ có ở Kyoto.' },
      { jp: '手作りならではの温かみがある。', reading: 'てづくりならではのあたたかみがある。', meaning: 'Có sự ấm áp mà chỉ đồ thủ công mới có.' },
    ],
  },
];

// ── from: grammarExp_N1_Part1.ts ──
export const GRAMMAR_EXP_N1_P1: GrammarEntry[] = [
  // 1
  {
    id: 'gex1a-01',
    pattern: '～からある (kara aru)',
    meaning: 'Tới, có tận (nhấn mạnh số lượng lớn)',
    category: 'Nhấn mạnh mức độ',
    jlpt: 'N1',
    examples: [
      { jp: '彼は体重100キロからある巨漢だ。', reading: 'かれはたいじゅうひゃっきろからあるきょかんだ。', meaning: 'Anh ấy là người khổng lồ nặng tới 100 kg.' },
      { jp: 'この橋は長さ500メートルからある。', reading: 'このはしはながさごひゃくめーとるからある。', meaning: 'Cây cầu này dài tới 500 mét.' },
    ],
  },
  // 2
  {
    id: 'gex1a-02',
    pattern: '～ともなく (tomo naku)',
    meaning: 'Vô tình, không chủ ý',
    category: 'Trạng thái vô ý',
    jlpt: 'N1',
    examples: [
      { jp: '見るともなくテレビを見ていたら、友人が映っていた。', reading: 'みるともなくてれびをみていたら、ゆうじんがうつっていた。', meaning: 'Vô tình nhìn tivi thì thấy bạn mình trên đó.' },
      { jp: '聞くともなく隣の会話が耳に入った。', reading: 'きくともなくとなりのかいわがみみにはいった。', meaning: 'Vô tình nghe được cuộc nói chuyện bên cạnh.' },
    ],
  },
  // 3
  {
    id: 'gex1a-03',
    pattern: '～ともなると (tomo naru to)',
    meaning: 'Khi đã đến mức',
    category: 'Điều kiện・Mức độ',
    jlpt: 'N1',
    examples: [
      { jp: '社長ともなると、責任が非常に重い。', reading: 'しゃちょうともなると、せきにんがひじょうにおもい。', meaning: 'Khi đã đến mức giám đốc thì trách nhiệm rất nặng nề.' },
      { jp: '大学生ともなると、自分で生活費を稼ぐ人もいる。', reading: 'だいがくせいともなると、じぶんでせいかつひをかせぐひともいる。', meaning: 'Khi đã là sinh viên đại học, có người tự kiếm tiền sinh hoạt.' },
    ],
  },
  // 4
  {
    id: 'gex1a-04',
    pattern: '～たるもの (taru mono)',
    meaning: 'Với tư cách là',
    category: 'Vai trò・Tư cách',
    jlpt: 'N1',
    examples: [
      { jp: '教師たるもの、学生の模範でなければならない。', reading: 'きょうしたるもの、がくせいのもはんでなければならない。', meaning: 'Với tư cách là giáo viên, phải là tấm gương cho học sinh.' },
      { jp: '医者たるもの、患者の命を最優先すべきだ。', reading: 'いしゃたるもの、かんじゃのいのちをさいゆうせんすべきだ。', meaning: 'Với tư cách là bác sĩ, phải ưu tiên tính mạng bệnh nhân.' },
    ],
  },
  // 5
  {
    id: 'gex1a-05',
    pattern: '～にたえる (ni taeru)',
    meaning: 'Đáng, xứng đáng',
    category: 'Đánh giá giá trị',
    jlpt: 'N1',
    examples: [
      { jp: 'この作品は鑑賞にたえる名画だ。', reading: 'このさくひんはかんしょうにたえるめいがだ。', meaning: 'Tác phẩm này là bức tranh đáng thưởng thức.' },
      { jp: '彼の演説は傾聴にたえるものだった。', reading: 'かれのえんぜつはけいちょうにたえるものだった。', meaning: 'Bài diễn thuyết của anh ấy đáng để lắng nghe.' },
    ],
  },
  // 6
  {
    id: 'gex1a-06',
    pattern: '～にたえない (ni taenai)',
    meaning: 'Không thể chịu nổi',
    category: 'Đánh giá giá trị',
    jlpt: 'N1',
    examples: [
      { jp: 'あの映画はひどすぎて見るにたえない。', reading: 'あのえいがはひどすぎてみるにたえない。', meaning: 'Bộ phim đó tệ đến mức không thể xem nổi.' },
      { jp: '感謝の念にたえない。', reading: 'かんしゃのねんにたえない。', meaning: 'Không thể nào diễn tả hết lòng biết ơn.' },
    ],
  },
  // 7
  {
    id: 'gex1a-07',
    pattern: '～に足る (ni taru)',
    meaning: 'Đáng, đủ để',
    category: 'Đánh giá giá trị',
    jlpt: 'N1',
    examples: [
      { jp: '彼は信頼に足る人物だ。', reading: 'かれはしんらいにたるじんぶつだ。', meaning: 'Anh ấy là người đáng tin cậy.' },
      { jp: 'この証拠は注目に足るものだ。', reading: 'このしょうこはちゅうもくにたるものだ。', meaning: 'Bằng chứng này đáng chú ý.' },
    ],
  },
  // 8
  {
    id: 'gex1a-08',
    pattern: '～に足りない (ni tarinai)',
    meaning: 'Không đáng',
    category: 'Đánh giá giá trị',
    jlpt: 'N1',
    examples: [
      { jp: 'そんな小さなことは取るに足りない問題だ。', reading: 'そんなちいさなことはとるにたりないもんだいだ。', meaning: 'Chuyện nhỏ như thế không đáng bận tâm.' },
      { jp: '彼の意見は論ずるに足りない。', reading: 'かれのいけんはろんずるにたりない。', meaning: 'Ý kiến của anh ta không đáng để bàn luận.' },
    ],
  },
  // 9
  {
    id: 'gex1a-09',
    pattern: '～てはかなわない (te wa kanawanai)',
    meaning: 'Không chịu nổi',
    category: 'Bất mãn・Phàn nàn',
    jlpt: 'N1',
    examples: [
      { jp: 'こう暑くてはかなわない。', reading: 'こうあつくてはかなわない。', meaning: 'Nóng thế này thì không chịu nổi.' },
      { jp: '毎日残業させられてはかなわない。', reading: 'まいにちざんぎょうさせられてはかなわない。', meaning: 'Bị bắt tăng ca mỗi ngày thì không chịu nổi.' },
    ],
  },
  // 10
  {
    id: 'gex1a-10',
    pattern: '～ではあるまいし (de wa aru mai shi)',
    meaning: 'Đâu phải là...mà',
    category: 'Phủ định・Phản bác',
    jlpt: 'N1',
    examples: [
      { jp: '子供ではあるまいし、そんなことで泣くな。', reading: 'こどもではあるまいし、そんなことでなくな。', meaning: 'Đâu phải trẻ con mà khóc vì chuyện như thế.' },
      { jp: 'ロボットではあるまいし、休まず働けるわけがない。', reading: 'ろぼっとではあるまいし、やすまずはたらけるわけがない。', meaning: 'Đâu phải robot mà có thể làm việc không nghỉ.' },
    ],
  },
  // 11
  {
    id: 'gex1a-11',
    pattern: '～であろうと (de arou to)',
    meaning: 'Dù có là',
    category: 'Nhượng bộ',
    jlpt: 'N1',
    examples: [
      { jp: 'どんな困難であろうと、諦めない。', reading: 'どんなこんなんであろうと、あきらめない。', meaning: 'Dù có khó khăn đến đâu cũng không từ bỏ.' },
      { jp: '誰であろうと、法律は守らなければならない。', reading: 'だれであろうと、ほうりつはまもらなければならない。', meaning: 'Dù là ai cũng phải tuân thủ pháp luật.' },
    ],
  },
  // 12
  {
    id: 'gex1a-12',
    pattern: '～てまで (te made)',
    meaning: 'Đến mức phải',
    category: 'Nhấn mạnh mức độ',
    jlpt: 'N1',
    examples: [
      { jp: '借金してまで旅行に行く必要はない。', reading: 'しゃっきんしてまでりょこうにいくひつようはない。', meaning: 'Không cần phải đi vay nợ để đi du lịch.' },
      { jp: '体を壊してまで働きたくない。', reading: 'からだをこわしてまではたらきたくない。', meaning: 'Không muốn làm việc đến mức hủy hoại sức khỏe.' },
    ],
  },
  // 13
  {
    id: 'gex1a-13',
    pattern: '～とあって (to atte)',
    meaning: 'Vì là, do',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N1',
    examples: [
      { jp: '連休とあって、どこも混んでいる。', reading: 'れんきゅうとあって、どこもこんでいる。', meaning: 'Do là kỳ nghỉ dài nên đâu cũng đông.' },
      { jp: '有名な歌手が来るとあって、大勢のファンが集まった。', reading: 'ゆうめいなかしゅがくるとあって、おおぜいのふぁんがあつまった。', meaning: 'Vì ca sĩ nổi tiếng đến nên rất đông fan tập trung.' },
    ],
  },
  // 14
  {
    id: 'gex1a-14',
    pattern: '～とあれば (to areba)',
    meaning: 'Nếu mà là',
    category: 'Điều kiện・Mức độ',
    jlpt: 'N1',
    examples: [
      { jp: '子供のためとあれば、何でもする。', reading: 'こどものためとあれば、なんでもする。', meaning: 'Nếu là vì con thì làm bất cứ điều gì.' },
      { jp: '彼女の頼みとあれば、断れない。', reading: 'かのじょのたのみとあれば、ことわれない。', meaning: 'Nếu là yêu cầu của cô ấy thì không thể từ chối.' },
    ],
  },
  // 15
  {
    id: 'gex1a-15',
    pattern: '～ときたら (to kitara)',
    meaning: 'Nói đến...thì',
    category: 'Bất mãn・Phàn nàn',
    jlpt: 'N1',
    examples: [
      { jp: 'うちの息子ときたら、毎日ゲームばかりしている。', reading: 'うちのむすこときたら、まいにちげーむばかりしている。', meaning: 'Nói đến con trai tôi thì, suốt ngày chỉ chơi game.' },
      { jp: 'あの店ときたら、サービスが最悪だ。', reading: 'あのみせときたら、さーびすがさいあくだ。', meaning: 'Nói đến quán đó thì, dịch vụ tệ nhất.' },
    ],
  },
  // 16
  {
    id: 'gex1a-16',
    pattern: '～ときている (to kite iru)',
    meaning: 'Lại còn',
    category: 'Bất mãn・Phàn nàn',
    jlpt: 'N1',
    examples: [
      { jp: '彼は怠け者で、おまけに嘘つきときている。', reading: 'かれはなまけもので、おまけにうそつきときている。', meaning: 'Anh ta lười biếng, lại còn hay nói dối nữa.' },
      { jp: 'この部屋は狭い上に、日当たりが悪いときている。', reading: 'このへやはせまいうえに、ひあたりがわるいときている。', meaning: 'Phòng này đã chật, lại còn thiếu ánh sáng nữa.' },
    ],
  },
  // 17
  {
    id: 'gex1a-17',
    pattern: '～となると (to naru to)',
    meaning: 'Khi nói đến',
    category: 'Điều kiện・Mức độ',
    jlpt: 'N1',
    examples: [
      { jp: '留学となると、費用がかなりかかる。', reading: 'りゅうがくとなると、ひようがかなりかかる。', meaning: 'Khi nói đến du học thì chi phí khá tốn.' },
      { jp: '実際に引っ越すとなると、準備が大変だ。', reading: 'じっさいにひっこすとなると、じゅんびがたいへんだ。', meaning: 'Khi thực sự chuyển nhà thì việc chuẩn bị rất vất vả.' },
    ],
  },
  // 18
  {
    id: 'gex1a-18',
    pattern: '～となれば (to nareba)',
    meaning: 'Nếu trở thành',
    category: 'Điều kiện・Mức độ',
    jlpt: 'N1',
    examples: [
      { jp: '転職となれば、家族の理解が必要だ。', reading: 'てんしょくとなれば、かぞくのりかいがひつようだ。', meaning: 'Nếu chuyển việc thì cần sự thông cảm của gia đình.' },
      { jp: '優勝となれば、賞金も出るだろう。', reading: 'ゆうしょうとなれば、しょうきんもでるだろう。', meaning: 'Nếu vô địch thì chắc cũng có tiền thưởng.' },
    ],
  },
  // 19
  {
    id: 'gex1a-19',
    pattern: '～ないまでも (nai made mo)',
    meaning: 'Dù không...thì ít ra',
    category: 'Nhượng bộ',
    jlpt: 'N1',
    examples: [
      { jp: '賛成しないまでも、反対はしないでほしい。', reading: 'さんせいしないまでも、はんたいはしないでほしい。', meaning: 'Dù không đồng ý thì ít ra cũng đừng phản đối.' },
      { jp: '毎日でないまでも、週に一度は運動すべきだ。', reading: 'まいにちでないまでも、しゅうにいちどはうんどうすべきだ。', meaning: 'Dù không phải mỗi ngày thì ít ra mỗi tuần cũng nên tập thể dục một lần.' },
    ],
  },
  // 20
  {
    id: 'gex1a-20',
    pattern: '～ないものでもない (nai mono de mo nai)',
    meaning: 'Không phải là không',
    category: 'Khả năng・Phỏng đoán',
    jlpt: 'N1',
    examples: [
      { jp: '条件次第では、引き受けないものでもない。', reading: 'じょうけんしだいでは、ひきうけないものでもない。', meaning: 'Tùy điều kiện, không phải là không nhận.' },
      { jp: '頼み方によっては、協力しないものでもない。', reading: 'たのみかたによっては、きょうりょくしないものでもない。', meaning: 'Tùy cách nhờ, không phải là không hợp tác.' },
    ],
  },
  // 21
  {
    id: 'gex1a-21',
    pattern: '～ならでは (nara de wa)',
    meaning: 'Chỉ có...mới',
    category: 'Đặc trưng・Giới hạn',
    jlpt: 'N1',
    examples: [
      { jp: 'これは京都ならではの風景だ。', reading: 'これはきょうとならではのふうけいだ。', meaning: 'Đây là phong cảnh chỉ có ở Kyoto.' },
      { jp: '手作りならではの温かみがある。', reading: 'てづくりならではのあたたかみがある。', meaning: 'Có sự ấm áp mà chỉ đồ thủ công mới có.' },
    ],
  },
  // 22
  {
    id: 'gex1a-22',
    pattern: '～なり (nari)',
    meaning: 'Ngay khi...liền',
    category: 'Thời gian・Tức thì',
    jlpt: 'N1',
    examples: [
      { jp: '彼は家に帰るなり、ベッドに倒れ込んだ。', reading: 'かれはいえにかえるなり、べっどにたおれこんだ。', meaning: 'Anh ấy vừa về đến nhà liền đổ sụp xuống giường.' },
      { jp: '電話を受けるなり、彼女は泣き出した。', reading: 'でんわをうけるなり、かのじょはなきだした。', meaning: 'Vừa nhận điện thoại, cô ấy liền khóc.' },
    ],
  },
  // 23
  {
    id: 'gex1a-23',
    pattern: '～なりに (nari ni)',
    meaning: 'Theo cách riêng',
    category: 'Phương thức',
    jlpt: 'N1',
    examples: [
      { jp: '子供は子供なりに、一生懸命考えている。', reading: 'こどもはこどもなりに、いっしょうけんめいかんがえている。', meaning: 'Trẻ con cũng theo cách riêng của chúng mà suy nghĩ hết sức.' },
      { jp: '私なりに努力したつもりだ。', reading: 'わたしなりにどりょくしたつもりだ。', meaning: 'Tôi đã cố gắng theo cách riêng của mình.' },
    ],
  },
  // 24
  {
    id: 'gex1a-24',
    pattern: '～にあって (ni atte)',
    meaning: 'Trong tình huống',
    category: 'Hoàn cảnh・Tình huống',
    jlpt: 'N1',
    examples: [
      { jp: '戦時下にあって、人々は助け合って生きた。', reading: 'せんじかにあって、ひとびとはたすけあっていきた。', meaning: 'Trong thời chiến, mọi người đã giúp đỡ nhau mà sống.' },
      { jp: '困難な状況にあっても、彼は冷静だった。', reading: 'こんなんなじょうきょうにあっても、かれはれいせいだった。', meaning: 'Dù trong tình huống khó khăn, anh ấy vẫn bình tĩnh.' },
    ],
  },
  // 25
  {
    id: 'gex1a-25',
    pattern: '～にかこつけて (ni kakotsukete)',
    meaning: 'Lấy cớ',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N1',
    examples: [
      { jp: '出張にかこつけて、旧友に会いに行った。', reading: 'しゅっちょうにかこつけて、きゅうゆうにあいにいった。', meaning: 'Lấy cớ đi công tác để đi gặp bạn cũ.' },
      { jp: '病気にかこつけて、会議を欠席した。', reading: 'びょうきにかこつけて、かいぎをけっせきした。', meaning: 'Lấy cớ bệnh để vắng mặt cuộc họp.' },
    ],
  },
  // 26
  {
    id: 'gex1a-26',
    pattern: '～にかたくない (ni kataku nai)',
    meaning: 'Không khó để',
    category: 'Khả năng・Phỏng đoán',
    jlpt: 'N1',
    examples: [
      { jp: '彼の悲しみは想像にかたくない。', reading: 'かれのかなしみはそうぞうにかたくない。', meaning: 'Nỗi buồn của anh ấy không khó để tưởng tượng.' },
      { jp: '結果は予想にかたくない。', reading: 'けっかはよそうにかたくない。', meaning: 'Kết quả không khó để dự đoán.' },
    ],
  },
  // 27
  {
    id: 'gex1a-27',
    pattern: '～にして (ni shite)',
    meaning: 'Chỉ khi đã...mới',
    category: 'Điều kiện・Mức độ',
    jlpt: 'N1',
    examples: [
      { jp: '彼にしてこの程度なら、他の人には無理だろう。', reading: 'かれにしてこのていどなら、ほかのひとにはむりだろう。', meaning: 'Nếu ngay cả anh ấy mà chỉ được mức này thì người khác chắc không làm nổi.' },
      { jp: '50歳にして初めて親の気持ちが分かった。', reading: 'ごじゅっさいにしてはじめておやのきもちがわかった。', meaning: 'Đến 50 tuổi mới hiểu được tấm lòng của cha mẹ.' },
    ],
  },
  // 28
  {
    id: 'gex1a-28',
    pattern: '～にひきかえ (ni hikikae)',
    meaning: 'Ngược lại với',
    category: 'Đối lập・So sánh',
    jlpt: 'N1',
    examples: [
      { jp: '兄の勤勉さにひきかえ、弟は怠け者だ。', reading: 'あにのきんべんさにひきかえ、おとうとはなまけものだ。', meaning: 'Ngược lại với sự chăm chỉ của anh, em trai lại lười biếng.' },
      { jp: '去年の好景気にひきかえ、今年は不況だ。', reading: 'きょねんのこうけいきにひきかえ、ことしはふきょうだ。', meaning: 'Ngược lại với kinh tế tốt năm ngoái, năm nay là suy thoái.' },
    ],
  },
  // 29
  {
    id: 'gex1a-29',
    pattern: '～にもまして (ni mo mashite)',
    meaning: 'Hơn cả',
    category: 'Đối lập・So sánh',
    jlpt: 'N1',
    examples: [
      { jp: '今年は去年にもまして暑い夏だ。', reading: 'ことしはきょねんにもましてあついなつだ。', meaning: 'Năm nay là mùa hè nóng hơn cả năm ngoái.' },
      { jp: '何にもまして健康が大切だ。', reading: 'なににもましてけんこうがたいせつだ。', meaning: 'Sức khỏe quan trọng hơn cả bất cứ điều gì.' },
    ],
  },
  // 30
  {
    id: 'gex1a-30',
    pattern: '～の至り (no itari)',
    meaning: 'Hết sức, vô cùng',
    category: 'Cảm xúc・Biểu cảm',
    jlpt: 'N1',
    examples: [
      { jp: '若気の至りで、無茶な冒険をした。', reading: 'わかげのいたりで、むちゃなぼうけんをした。', meaning: 'Do sự bồng bột của tuổi trẻ mà đã liều lĩnh phiêu lưu.' },
      { jp: 'お目にかかれて光栄の至りです。', reading: 'おめにかかれてこうえいのいたりです。', meaning: 'Được gặp mặt, tôi vô cùng vinh hạnh.' },
    ],
  },
  // 31
  {
    id: 'gex1a-31',
    pattern: '～はさておき (wa sateoki)',
    meaning: 'Gác lại chuyện',
    category: 'Chủ đề・Chuyển hướng',
    jlpt: 'N1',
    examples: [
      { jp: '冗談はさておき、本題に入ろう。', reading: 'じょうだんはさておき、ほんだいにはいろう。', meaning: 'Gác lại chuyện đùa, hãy vào chủ đề chính.' },
      { jp: '結果はさておき、過程が大事だ。', reading: 'けっかはさておき、かていがだいじだ。', meaning: 'Gác lại kết quả, quá trình mới quan trọng.' },
    ],
  },
  // 32
  {
    id: 'gex1a-32',
    pattern: '～まだしも (mada shimo)',
    meaning: 'Còn chấp nhận được',
    category: 'Đối lập・So sánh',
    jlpt: 'N1',
    examples: [
      { jp: '電車の遅延はまだしも、運休は困る。', reading: 'でんしゃのちえんはまだしも、うんきゅうはこまる。', meaning: 'Tàu trễ còn chấp nhận được, nhưng ngừng chạy thì khó.' },
      { jp: '一度ならまだしも、何度もミスするのは問題だ。', reading: 'いちどならまだしも、なんどもみすするのはもんだいだ。', meaning: 'Một lần còn chấp nhận được, nhưng mắc lỗi nhiều lần thì có vấn đề.' },
    ],
  },
  // 33
  {
    id: 'gex1a-33',
    pattern: '～までもない (made mo nai)',
    meaning: 'Không cần phải',
    category: 'Phủ định・Không cần thiết',
    jlpt: 'N1',
    examples: [
      { jp: 'こんな簡単な問題は説明するまでもない。', reading: 'こんなかんたんなもんだいはせつめいするまでもない。', meaning: 'Bài toán đơn giản thế này không cần phải giải thích.' },
      { jp: '言うまでもなく、健康は大切だ。', reading: 'いうまでもなく、けんこうはたいせつだ。', meaning: 'Không cần nói cũng biết, sức khỏe là quan trọng.' },
    ],
  },
  // 34
  {
    id: 'gex1a-34',
    pattern: '～までだ (made da)',
    meaning: 'Chỉ việc là',
    category: 'Quyết tâm・Thái độ',
    jlpt: 'N1',
    examples: [
      { jp: '不合格なら、もう一度受けるまでだ。', reading: 'ふごうかくなら、もういちどうけるまでだ。', meaning: 'Nếu trượt thì chỉ việc thi lại thôi.' },
      { jp: '電車がないなら、歩いて帰るまでだ。', reading: 'でんしゃがないなら、あるいてかえるまでだ。', meaning: 'Nếu không có tàu thì chỉ việc đi bộ về thôi.' },
    ],
  },
  // 35
  {
    id: 'gex1a-35',
    pattern: '～もかまわず (mo kamawazu)',
    meaning: 'Bất chấp',
    category: 'Bất chấp・Bỏ qua',
    jlpt: 'N1',
    examples: [
      { jp: '人目もかまわず、彼女は泣いた。', reading: 'ひとめもかまわず、かのじょはないた。', meaning: 'Bất chấp ánh mắt người khác, cô ấy đã khóc.' },
      { jp: '雨に濡れるのもかまわず、走り続けた。', reading: 'あめにぬれるのもかまわず、はしりつづけた。', meaning: 'Bất chấp bị ướt mưa, vẫn tiếp tục chạy.' },
    ],
  },
  // 36
  {
    id: 'gex1a-36',
    pattern: '～も顧みず (mo kaerimizu)',
    meaning: 'Bất chấp',
    category: 'Bất chấp・Bỏ qua',
    jlpt: 'N1',
    examples: [
      { jp: '危険も顧みず、彼は燃える家に飛び込んだ。', reading: 'きけんもかえりみず、かれはもえるいえにとびこんだ。', meaning: 'Bất chấp nguy hiểm, anh ấy lao vào ngôi nhà đang cháy.' },
      { jp: '周囲の反対も顧みず、彼女は夢を追い続けた。', reading: 'しゅういのはんたいもかえりみず、かのじょはゆめをおいつづけた。', meaning: 'Bất chấp sự phản đối xung quanh, cô ấy tiếp tục theo đuổi giấc mơ.' },
    ],
  },
  // 37
  {
    id: 'gex1a-37',
    pattern: '～ようが～まいが (you ga...mai ga)',
    meaning: 'Dù...hay không',
    category: 'Nhượng bộ',
    jlpt: 'N1',
    examples: [
      { jp: '雨が降ろうが降るまいが、試合は行われる。', reading: 'あめがふろうがふるまいが、しあいはおこなわれる。', meaning: 'Dù mưa hay không, trận đấu vẫn diễn ra.' },
      { jp: '信じようが信じまいが、これは事実だ。', reading: 'しんじようがしんじまいが、これはじじつだ。', meaning: 'Dù tin hay không, đây là sự thật.' },
    ],
  },
  // 38
  {
    id: 'gex1a-38',
    pattern: '～ようにも～ない (you ni mo...nai)',
    meaning: 'Muốn...cũng không được',
    category: 'Bất khả năng',
    jlpt: 'N1',
    examples: [
      { jp: '泳ごうにも泳げない深さだった。', reading: 'およごうにもおよげないふかさだった。', meaning: 'Muốn bơi cũng không bơi được vì quá sâu.' },
      { jp: '逃げようにも逃げられない状況だった。', reading: 'にげようにもにげられないじょうきょうだった。', meaning: 'Muốn trốn cũng không trốn được trong tình huống đó.' },
    ],
  },
  // 39
  {
    id: 'gex1a-39',
    pattern: '～に即して (ni sokushite)',
    meaning: 'Phù hợp với',
    category: 'Cơ sở・Tiêu chuẩn',
    jlpt: 'N1',
    examples: [
      { jp: '現実に即した対策を立てるべきだ。', reading: 'げんじつにそくしたたいさくをたてるべきだ。', meaning: 'Nên đưa ra biện pháp phù hợp với thực tế.' },
      { jp: '法律に即して判断する。', reading: 'ほうりつにそくしてはんだんする。', meaning: 'Phán đoán phù hợp với pháp luật.' },
    ],
  },
  // 40
  {
    id: 'gex1a-40',
    pattern: '～に則って (ni nottotte)',
    meaning: 'Tuân theo',
    category: 'Cơ sở・Tiêu chuẩn',
    jlpt: 'N1',
    examples: [
      { jp: '規則に則って行動してください。', reading: 'きそくにのっとってこうどうしてください。', meaning: 'Hãy hành động tuân theo quy tắc.' },
      { jp: '伝統に則った式が行われた。', reading: 'でんとうにのっとったしきがおこなわれた。', meaning: 'Buổi lễ được tổ chức tuân theo truyền thống.' },
    ],
  },
  // 41
  {
    id: 'gex1a-41',
    pattern: '～に準ずる (ni junzuru)',
    meaning: 'Tương đương với',
    category: 'Cơ sở・Tiêu chuẩn',
    jlpt: 'N1',
    examples: [
      { jp: '正社員に準ずる待遇を受けている。', reading: 'せいしゃいんにじゅんずるたいぐうをうけている。', meaning: 'Được đối xử tương đương với nhân viên chính thức.' },
      { jp: '災害に準ずる緊急事態が発生した。', reading: 'さいがいにじゅんずるきんきゅうじたいがはっせいした。', meaning: 'Đã xảy ra tình huống khẩn cấp tương đương với thiên tai.' },
    ],
  },
  // 42
  {
    id: 'gex1a-42',
    pattern: '～のもとに/のもとで (no moto ni/de)',
    meaning: 'Dưới (sự...)',
    category: 'Hoàn cảnh・Tình huống',
    jlpt: 'N1',
    examples: [
      { jp: '先生の指導のもとで、研究を進めた。', reading: 'せんせいのしどうのもとで、けんきゅうをすすめた。', meaning: 'Dưới sự hướng dẫn của thầy, đã tiến hành nghiên cứu.' },
      { jp: '厳しい条件のもとに、契約が結ばれた。', reading: 'きびしいじょうけんのもとに、けいやくがむすばれた。', meaning: 'Dưới điều kiện khắt khe, hợp đồng đã được ký kết.' },
    ],
  },
  // 43
  {
    id: 'gex1a-43',
    pattern: '～を禁じえない (wo kinji enai)',
    meaning: 'Không thể kìm được',
    category: 'Cảm xúc・Biểu cảm',
    jlpt: 'N1',
    examples: [
      { jp: 'そのニュースを聞いて、驚きを禁じえなかった。', reading: 'そのにゅーすをきいて、おどろきをきんじえなかった。', meaning: 'Nghe tin đó, không thể kìm được sự ngạc nhiên.' },
      { jp: '彼の行動に怒りを禁じえない。', reading: 'かれのこうどうにいかりをきんじえない。', meaning: 'Không thể kìm nén sự tức giận trước hành động của anh ta.' },
    ],
  },
  // 44
  {
    id: 'gex1a-44',
    pattern: '～を余儀なくする (wo yogi naku suru)',
    meaning: 'Buộc phải',
    category: 'Bắt buộc・Bất đắc dĩ',
    jlpt: 'N1',
    examples: [
      { jp: '台風が住民の避難を余儀なくした。', reading: 'たいふうがじゅうみんのひなんをよぎなくした。', meaning: 'Bão buộc cư dân phải sơ tán.' },
      { jp: '不況が多くの企業にリストラを余儀なくさせた。', reading: 'ふきょうがおおくのきぎょうにりすとらをよぎなくさせた。', meaning: 'Suy thoái buộc nhiều doanh nghiệp phải tái cơ cấu.' },
    ],
  },
  // 45
  {
    id: 'gex1a-45',
    pattern: '～かたがた (katagata)',
    meaning: 'Nhân tiện, kiêm',
    category: 'Mục đích kép',
    jlpt: 'N1',
    examples: [
      { jp: 'お礼かたがた、先生のお宅を訪問した。', reading: 'おれいかたがた、せんせいのおたくをほうもんした。', meaning: 'Nhân tiện cảm ơn, đã đến thăm nhà thầy.' },
      { jp: '散歩かたがた、買い物に行った。', reading: 'さんぽかたがた、かいものにいった。', meaning: 'Nhân tiện đi dạo, đi mua sắm luôn.' },
    ],
  },
  // 46
  {
    id: 'gex1a-46',
    pattern: '～かたわら (katawara)',
    meaning: 'Bên cạnh việc',
    category: 'Mục đích kép',
    jlpt: 'N1',
    examples: [
      { jp: '彼は会社員をするかたわら、小説を書いている。', reading: 'かれはかいしゃいんをするかたわら、しょうせつをかいている。', meaning: 'Bên cạnh việc làm nhân viên công ty, anh ấy còn viết tiểu thuyết.' },
      { jp: '大学で教えるかたわら、研究も続けている。', reading: 'だいがくでおしえるかたわら、けんきゅうもつづけている。', meaning: 'Bên cạnh việc dạy ở đại học, cũng tiếp tục nghiên cứu.' },
    ],
  },
  // 47
  {
    id: 'gex1a-47',
    pattern: '～がてら (gatera)',
    meaning: 'Nhân tiện khi',
    category: 'Mục đích kép',
    jlpt: 'N1',
    examples: [
      { jp: '散歩がてら、コンビニに寄った。', reading: 'さんぽがてら、こんびににょった。', meaning: 'Nhân tiện đi dạo, ghé cửa hàng tiện lợi.' },
      { jp: '買い物がてら、友達の家に立ち寄った。', reading: 'かいものがてら、ともだちのいえにたちよった。', meaning: 'Nhân tiện đi mua sắm, ghé thăm nhà bạn.' },
    ],
  },
  // 48
  {
    id: 'gex1a-48',
    pattern: '～ずにはすまない (zu ni wa sumanai)',
    meaning: 'Không thể không',
    category: 'Bắt buộc・Bất đắc dĩ',
    jlpt: 'N1',
    examples: [
      { jp: '壊したからには、弁償せずにはすまない。', reading: 'こわしたからには、べんしょうせずにはすまない。', meaning: 'Đã làm hỏng thì không thể không bồi thường.' },
      { jp: 'あれだけの失敗をしたら、謝らずにはすまない。', reading: 'あれだけのしっぱいをしたら、あやまらずにはすまない。', meaning: 'Đã thất bại nhiều như thế thì không thể không xin lỗi.' },
    ],
  },
  // 49
  {
    id: 'gex1a-49',
    pattern: '～をものともせず (wo mono to mo sezu)',
    meaning: 'Bất chấp',
    category: 'Bất chấp・Bỏ qua',
    jlpt: 'N1',
    examples: [
      { jp: '怪我をものともせず、彼は試合を続けた。', reading: 'けがをものともせず、かれはしあいをつづけた。', meaning: 'Bất chấp chấn thương, anh ấy tiếp tục thi đấu.' },
      { jp: '批判をものともせず、彼女は自分の道を進んだ。', reading: 'ひはんをものともせず、かのじょはじぶんのみちをすすんだ。', meaning: 'Bất chấp chỉ trích, cô ấy đi theo con đường riêng.' },
    ],
  },
  // 50
  {
    id: 'gex1a-50',
    pattern: '～ないではおかない (nai de wa okanai)',
    meaning: 'Nhất định sẽ',
    category: 'Tất yếu・Chắc chắn',
    jlpt: 'N1',
    examples: [
      { jp: 'あの映画は見る人を感動させないではおかない。', reading: 'あのえいがはみるひとをかんどうさせないではおかない。', meaning: 'Bộ phim đó nhất định sẽ khiến người xem cảm động.' },
      { jp: '彼の演技は観客を驚かせないではおかない。', reading: 'かれのえんぎはかんきゃくをおどろかせないではおかない。', meaning: 'Diễn xuất của anh ấy nhất định sẽ khiến khán giả ngạc nhiên.' },
    ],
  },
  // 51
  {
    id: 'gex1a-51',
    pattern: '～ないではすまない (nai de wa sumanai)',
    meaning: 'Không thể không',
    category: 'Bắt buộc・Bất đắc dĩ',
    jlpt: 'N1',
    examples: [
      { jp: '約束した以上、行かないではすまない。', reading: 'やくそくしたいじょう、いかないではすまない。', meaning: 'Đã hứa rồi thì không thể không đi.' },
      { jp: '借りたものは返さないではすまない。', reading: 'かりたものはかえさないではすまない。', meaning: 'Đồ đã mượn thì không thể không trả.' },
    ],
  },
  // 52
  {
    id: 'gex1a-52',
    pattern: '～てはばからない (te wa habakaranai)',
    meaning: 'Không ngần ngại',
    category: 'Quyết tâm・Thái độ',
    jlpt: 'N1',
    examples: [
      { jp: '彼は自分が天才だと言ってはばからない。', reading: 'かれはじぶんがてんさいだといってはばからない。', meaning: 'Anh ta không ngần ngại nói mình là thiên tài.' },
      { jp: '彼女はその政策を批判してはばからない。', reading: 'かのじょはそのせいさくをひはんしてはばからない。', meaning: 'Cô ấy không ngần ngại phê phán chính sách đó.' },
    ],
  },
  // 53
  {
    id: 'gex1a-53',
    pattern: '～に堪える (ni taeru)',
    meaning: 'Có thể chịu đựng',
    category: 'Đánh giá giá trị',
    jlpt: 'N1',
    examples: [
      { jp: 'この建物は大地震にも堪える設計だ。', reading: 'このたてものはおおじしんにもたえるせっけいだ。', meaning: 'Tòa nhà này được thiết kế có thể chịu được động đất lớn.' },
      { jp: '読むに堪える文章を書くのは難しい。', reading: 'よむにたえるぶんしょうをかくのはむずかしい。', meaning: 'Viết bài văn đáng đọc là điều khó.' },
    ],
  },
  // 54
  {
    id: 'gex1a-54',
    pattern: '～を経て (wo hete)',
    meaning: 'Trải qua',
    category: 'Quá trình・Kinh nghiệm',
    jlpt: 'N1',
    examples: [
      { jp: '長い議論を経て、ようやく結論が出た。', reading: 'ながいぎろんをへて、ようやくけつろんがでた。', meaning: 'Trải qua cuộc tranh luận dài, cuối cùng cũng có kết luận.' },
      { jp: '数々の困難を経て、彼は成功を手にした。', reading: 'かずかずのこんなんをへて、かれはせいこうをてにした。', meaning: 'Trải qua bao nhiêu khó khăn, anh ấy đã đạt được thành công.' },
    ],
  },
  // 55
  {
    id: 'gex1a-55',
    pattern: '～をもってすれば (wo motte sureba)',
    meaning: 'Với, bằng...thì',
    category: 'Điều kiện・Mức độ',
    jlpt: 'N1',
    examples: [
      { jp: '彼の実力をもってすれば、合格は間違いない。', reading: 'かれのじつりょくをもってすれば、ごうかくはまちがいない。', meaning: 'Với thực lực của anh ấy thì đỗ là chắc chắn.' },
      { jp: '現代の技術をもってすれば、不可能ではない。', reading: 'げんだいのぎじゅつをもってすれば、ふかのうではない。', meaning: 'Với công nghệ hiện đại thì không phải là không thể.' },
    ],
  },
];

// ── from: grammarExp_N1_Part2.ts ──
export const GRAMMAR_EXP_N1_P2: GrammarEntry[] = [
  {
    id: 'gex1b-01',
    pattern: '～如何 (いかん・ikan)',
    meaning: 'Tùy thuộc vào',
    category: 'Điều kiện・Phạm vi',
    jlpt: 'N1',
    examples: [
      { jp: '結果如何では、計画を変更する必要がある。', reading: 'けっかいかんでは、けいかくをへんこうするひつようがある。', meaning: 'Tùy thuộc vào kết quả, có thể cần thay đổi kế hoạch.' },
      { jp: '成績如何によって奨学金が決まる。', reading: 'せいせきいかんによってしょうがくきんがきまる。', meaning: 'Tùy thuộc vào thành tích mà học bổng được quyết định.' },
    ],
  },
  {
    id: 'gex1b-02',
    pattern: '～如何によっては (ikan ni yotte wa)',
    meaning: 'Tùy theo...mà',
    category: 'Điều kiện・Phạm vi',
    jlpt: 'N1',
    examples: [
      { jp: '天候如何によっては、試合が中止になるかもしれない。', reading: 'てんこういかんによっては、しあいがちゅうしになるかもしれない。', meaning: 'Tùy theo thời tiết mà trận đấu có thể bị hủy.' },
      { jp: '対応如何によっては、契約を解除することもある。', reading: 'たいおういかんによっては、けいやくをかいじょすることもある。', meaning: 'Tùy theo cách ứng phó mà có thể hủy hợp đồng.' },
    ],
  },
  {
    id: 'gex1b-03',
    pattern: '～如何にかかわらず (ikan ni kakawarazu)',
    meaning: 'Bất kể...thế nào',
    category: 'Điều kiện・Phạm vi',
    jlpt: 'N1',
    examples: [
      { jp: '理由如何にかかわらず、遅刻は認められない。', reading: 'りゆういかんにかかわらず、ちこくはみとめられない。', meaning: 'Bất kể lý do thế nào, đi muộn không được chấp nhận.' },
      { jp: '結果如何にかかわらず、全力を尽くします。', reading: 'けっかいかんにかかわらず、ぜんりょくをつくします。', meaning: 'Bất kể kết quả thế nào, tôi sẽ cố gắng hết sức.' },
    ],
  },
  {
    id: 'gex1b-04',
    pattern: '～めく (meku)',
    meaning: 'Có vẻ, trông giống',
    category: 'Trạng thái・Biểu hiện',
    jlpt: 'N1',
    examples: [
      { jp: '春めいた風が吹いてきた。', reading: 'はるめいたかぜがふいてきた。', meaning: 'Gió có vẻ xuân đã thổi tới.' },
      { jp: '彼の言葉は皮肉めいていた。', reading: 'かれのことばはひにくめいていた。', meaning: 'Lời anh ấy có vẻ mỉa mai.' },
    ],
  },
  {
    id: 'gex1b-05',
    pattern: '～ぶる (buru)',
    meaning: 'Ra vẻ, giả vờ',
    category: 'Trạng thái・Biểu hiện',
    jlpt: 'N1',
    examples: [
      { jp: '彼はいつも知ったかぶりをする。', reading: 'かれはいつもしったかぶりをする。', meaning: 'Anh ấy lúc nào cũng ra vẻ biết tuốt.' },
      { jp: '偉ぶった態度は嫌われる。', reading: 'えらぶったたいどはきらわれる。', meaning: 'Thái độ ra vẻ ta đây bị ghét.' },
    ],
  },
  {
    id: 'gex1b-06',
    pattern: '～かぎりだ (kagiri da)',
    meaning: 'Vô cùng, hết sức',
    category: 'Mức độ・Cảm xúc',
    jlpt: 'N1',
    examples: [
      { jp: '合格できて嬉しいかぎりだ。', reading: 'ごうかくできてうれしいかぎりだ。', meaning: 'Đỗ được thì vui vô cùng.' },
      { jp: '彼女の回復は喜ばしいかぎりです。', reading: 'かのじょのかいふくはよろこばしいかぎりです。', meaning: 'Sự hồi phục của cô ấy đáng mừng hết sức.' },
    ],
  },
  {
    id: 'gex1b-07',
    pattern: '～極まる (きわまる・kiwamaru)',
    meaning: 'Cực kỳ',
    category: 'Mức độ・Cảm xúc',
    jlpt: 'N1',
    examples: [
      { jp: '彼の態度は失礼極まるものだった。', reading: 'かれのたいどはしつれいきわまるものだった。', meaning: 'Thái độ của anh ấy cực kỳ vô lễ.' },
      { jp: '危険極まりない行為だ。', reading: 'きけんきわまりないこういだ。', meaning: 'Đó là hành vi cực kỳ nguy hiểm.' },
    ],
  },
  {
    id: 'gex1b-08',
    pattern: '～限りで (かぎりで・kagiri de)',
    meaning: 'Trong phạm vi',
    category: 'Điều kiện・Phạm vi',
    jlpt: 'N1',
    examples: [
      { jp: '今日限りでこの店は閉店します。', reading: 'きょうかぎりでこのみせはへいてんします。', meaning: 'Trong phạm vi hôm nay, cửa hàng này sẽ đóng cửa.' },
      { jp: '今回限りで特別に許可します。', reading: 'こんかいかぎりでとくべつにきょかします。', meaning: 'Chỉ trong phạm vi lần này, đặc biệt cho phép.' },
    ],
  },
  {
    id: 'gex1b-09',
    pattern: '～限りでは (かぎりでは・kagiri de wa)',
    meaning: 'Theo như tôi biết',
    category: 'Điều kiện・Phạm vi',
    jlpt: 'N1',
    examples: [
      { jp: '私が知っている限りでは、彼は無実です。', reading: 'わたしがしっているかぎりでは、かれはむじつです。', meaning: 'Theo như tôi biết, anh ấy vô tội.' },
      { jp: '調べた限りでは、問題はなさそうだ。', reading: 'しらべたかぎりでは、もんだいはなさそうだ。', meaning: 'Theo như đã điều tra, có vẻ không có vấn đề gì.' },
    ],
  },
  {
    id: 'gex1b-10',
    pattern: '～限りを尽くす (かぎりをつくす・kagiri wo tsukusu)',
    meaning: 'Làm hết sức',
    category: 'Mức độ・Cảm xúc',
    jlpt: 'N1',
    examples: [
      { jp: '声の限りを尽くして応援した。', reading: 'こえのかぎりをつくしておうえんした。', meaning: 'Đã cổ vũ hết sức bằng giọng nói.' },
      { jp: '力の限りを尽くして戦った。', reading: 'ちからのかぎりをつくしてたたかった。', meaning: 'Đã chiến đấu hết sức lực.' },
    ],
  },
  {
    id: 'gex1b-11',
    pattern: '～からすると (kara suru to)',
    meaning: 'Xét từ quan điểm',
    category: 'Quan điểm・Lập luận',
    jlpt: 'N1',
    examples: [
      { jp: '専門家からすると、この問題は簡単だろう。', reading: 'せんもんかからすると、このもんだいはかんたんだろう。', meaning: 'Xét từ quan điểm chuyên gia, vấn đề này chắc đơn giản.' },
      { jp: '親からすると、子供はいつまでも心配だ。', reading: 'おやからすると、こどもはいつまでもしんぱいだ。', meaning: 'Xét từ quan điểm cha mẹ, con cái lúc nào cũng lo lắng.' },
    ],
  },
  {
    id: 'gex1b-12',
    pattern: '～からして (kara shite)',
    meaning: 'Ngay từ...đã',
    category: 'Quan điểm・Lập luận',
    jlpt: 'N1',
    examples: [
      { jp: '彼は名前からして変わっている。', reading: 'かれはなまえからしてかわっている。', meaning: 'Anh ấy ngay từ cái tên đã lạ rồi.' },
      { jp: 'この料理は見た目からしておいしそうだ。', reading: 'このりょうりはみためからしておいしそうだ。', meaning: 'Món ăn này ngay từ vẻ ngoài đã có vẻ ngon.' },
    ],
  },
  {
    id: 'gex1b-13',
    pattern: '～からある (kara aru)',
    meaning: 'Tận, đến tận',
    category: 'Mức độ・Cảm xúc',
    jlpt: 'N1',
    examples: [
      { jp: '百キロからある荷物を一人で運んだ。', reading: 'ひゃっきろからあるにもつをひとりではこんだ。', meaning: 'Đã một mình vận chuyển hành lý nặng tận trăm ký.' },
      { jp: '三メートルからある壁を乗り越えた。', reading: 'さんめーとるからあるかべをのりこえた。', meaning: 'Đã vượt qua bức tường cao tận ba mét.' },
    ],
  },
  {
    id: 'gex1b-14',
    pattern: '～こととて (koto tote)',
    meaning: 'Vì (lý do)',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N1',
    examples: [
      { jp: '不慣れなこととて、ご迷惑をおかけしました。', reading: 'ふなれなこととて、ごめいわくをおかけしました。', meaning: 'Vì chưa quen nên đã gây phiền cho quý vị.' },
      { jp: '知らぬこととて、失礼なことを言ってしまった。', reading: 'しらぬこととて、しつれいなことをいってしまった。', meaning: 'Vì không biết nên đã nói lời thất lễ.' },
    ],
  },
  {
    id: 'gex1b-15',
    pattern: '～ことのないよう (koto no nai you)',
    meaning: 'Để không',
    category: 'Mục đích・Cảnh báo',
    jlpt: 'N1',
    examples: [
      { jp: '忘れることのないよう、メモしておいてください。', reading: 'わすれることのないよう、めもしておいてください。', meaning: 'Để không quên, hãy ghi chú lại.' },
      { jp: '遅刻することのないよう、早めに出発しましょう。', reading: 'ちこくすることのないよう、はやめにしゅっぱつしましょう。', meaning: 'Để không bị muộn, hãy xuất phát sớm.' },
    ],
  },
  {
    id: 'gex1b-16',
    pattern: '～ことゆえ (koto yue)',
    meaning: 'Vì chuyện',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N1',
    examples: [
      { jp: '初めてのことゆえ、何卒ご容赦ください。', reading: 'はじめてのことゆえ、なにとぞごようしゃください。', meaning: 'Vì là lần đầu, xin hãy thông cảm.' },
      { jp: '急なことゆえ、十分な準備ができなかった。', reading: 'きゅうなことゆえ、じゅうぶんなじゅんびができなかった。', meaning: 'Vì chuyện gấp nên không chuẩn bị đủ được.' },
    ],
  },
  {
    id: 'gex1b-17',
    pattern: '～だに (dani)',
    meaning: 'Chỉ riêng...đã',
    category: 'Nhấn mạnh・Đặc biệt',
    jlpt: 'N1',
    examples: [
      { jp: '想像するだに恐ろしい。', reading: 'そうぞうするだにおそろしい。', meaning: 'Chỉ riêng tưởng tượng thôi đã kinh khủng.' },
      { jp: '思い出すだに悲しくなる。', reading: 'おもいだすだにかなしくなる。', meaning: 'Chỉ nhớ lại thôi đã buồn rồi.' },
    ],
  },
  {
    id: 'gex1b-18',
    pattern: '～すら (sura)',
    meaning: 'Ngay cả',
    category: 'Nhấn mạnh・Đặc biệt',
    jlpt: 'N1',
    examples: [
      { jp: '名前すら知らない人に助けられた。', reading: 'なまえすらしらないひとにたすけられた。', meaning: 'Được giúp đỡ bởi người mà ngay cả tên cũng không biết.' },
      { jp: '水すら飲めない状態だった。', reading: 'みずすらのめないじょうたいだった。', meaning: 'Ở trong trạng thái ngay cả nước cũng không uống được.' },
    ],
  },
  {
    id: 'gex1b-19',
    pattern: '～なりとも (nari tomo)',
    meaning: 'Dù chỉ',
    category: 'Nhấn mạnh・Đặc biệt',
    jlpt: 'N1',
    examples: [
      { jp: '一口なりとも食べてみてください。', reading: 'ひとくちなりともたべてみてください。', meaning: 'Dù chỉ một miếng, hãy thử ăn xem.' },
      { jp: '少しなりともお役に立てれば幸いです。', reading: 'すこしなりともおやくにたてればさいわいです。', meaning: 'Dù chỉ một chút, nếu giúp được thì hạnh phúc.' },
    ],
  },
  {
    id: 'gex1b-20',
    pattern: '～にあらず (ni arazu)',
    meaning: 'Không phải là',
    category: 'Phủ định・Phản bác',
    jlpt: 'N1',
    examples: [
      { jp: '人生は遊びにあらず。', reading: 'じんせいはあそびにあらず。', meaning: 'Cuộc đời không phải là trò chơi.' },
      { jp: '学問は一日にして成るにあらず。', reading: 'がくもんはいちにちにしてなるにあらず。', meaning: 'Học vấn không phải là thứ thành trong một ngày.' },
    ],
  },
  {
    id: 'gex1b-21',
    pattern: '～にいたっては (ni itatte wa)',
    meaning: 'Khi đã đến',
    category: 'Nhấn mạnh・Đặc biệt',
    jlpt: 'N1',
    examples: [
      { jp: '兄も成績が悪いが、弟にいたってはさらにひどい。', reading: 'あにもせいせきがわるいが、おとうとにいたってはさらにひどい。', meaning: 'Anh cũng điểm kém, nhưng khi đã đến em trai thì còn tệ hơn.' },
      { jp: '都市部は混雑しているが、東京にいたっては異常だ。', reading: 'としぶはこんざつしているが、とうきょうにいたってはいじょうだ。', meaning: 'Khu đô thị đông đúc, nhưng khi đã đến Tokyo thì bất thường.' },
    ],
  },
  {
    id: 'gex1b-22',
    pattern: '～に代わって (にかわって・ni kawatte)',
    meaning: 'Thay mặt cho',
    category: 'Quan hệ・Thay thế',
    jlpt: 'N1',
    examples: [
      { jp: '社長に代わって、副社長が挨拶を述べた。', reading: 'しゃちょうにかわって、ふくしゃちょうがあいさつをのべた。', meaning: 'Thay mặt cho giám đốc, phó giám đốc đã phát biểu.' },
      { jp: '母に代わって、料理を作った。', reading: 'ははにかわって、りょうりをつくった。', meaning: 'Thay mặt cho mẹ, tôi đã nấu ăn.' },
    ],
  },
  {
    id: 'gex1b-23',
    pattern: '～のやら (no yara)',
    meaning: 'Không biết...',
    category: 'Nghi vấn・Không chắc',
    jlpt: 'N1',
    examples: [
      { jp: '嬉しいのやら悲しいのやら、複雑な気持ちだ。', reading: 'うれしいのやらかなしいのやら、ふくざつなきもちだ。', meaning: 'Không biết vui hay buồn, tâm trạng phức tạp.' },
      { jp: 'どこへ行ったのやら、連絡がつかない。', reading: 'どこへいったのやら、れんらくがつかない。', meaning: 'Không biết đi đâu, không liên lạc được.' },
    ],
  },
  {
    id: 'gex1b-24',
    pattern: '～ばこそ (ba koso)',
    meaning: 'Chính vì...mới',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N1',
    examples: [
      { jp: '愛していればこそ、厳しく言うのだ。', reading: 'あいしていればこそ、きびしくいうのだ。', meaning: 'Chính vì yêu thương mới nói nghiêm khắc.' },
      { jp: '信じればこそ、待ち続けている。', reading: 'しんじればこそ、まちつづけている。', meaning: 'Chính vì tin tưởng mới tiếp tục chờ đợi.' },
    ],
  },
  {
    id: 'gex1b-25',
    pattern: '～ばそれまでだ (ba sore made da)',
    meaning: 'Nếu...thì thế là hết',
    category: 'Điều kiện・Phạm vi',
    jlpt: 'N1',
    examples: [
      { jp: '本人がやる気がなければそれまでだ。', reading: 'ほんにんがやるきがなければそれまでだ。', meaning: 'Nếu bản thân không có động lực thì thế là hết.' },
      { jp: '嘘だと言われればそれまでだが、本当のことだ。', reading: 'うそだといわれればそれまでだが、ほんとうのことだ。', meaning: 'Nếu bị nói là nói dối thì thế là hết, nhưng đó là sự thật.' },
    ],
  },
  {
    id: 'gex1b-26',
    pattern: '～ひとり～だけでなく (hitori...dake de naku)',
    meaning: 'Không chỉ riêng',
    category: 'Phạm vi・Mở rộng',
    jlpt: 'N1',
    examples: [
      { jp: 'ひとり日本だけでなく、世界中が注目している。', reading: 'ひとりにほんだけでなく、せかいじゅうがちゅうもくしている。', meaning: 'Không chỉ riêng Nhật Bản, cả thế giới đang chú ý.' },
      { jp: 'ひとり彼だけでなく、チーム全体の責任だ。', reading: 'ひとりかれだけでなく、ちーむぜんたいのせきにんだ。', meaning: 'Không chỉ riêng anh ấy, đó là trách nhiệm của cả đội.' },
    ],
  },
  {
    id: 'gex1b-27',
    pattern: '～まくる (makuru)',
    meaning: 'Liên tục, điên cuồng',
    category: 'Trạng thái・Biểu hiện',
    jlpt: 'N1',
    examples: [
      { jp: '週末はゲームをやりまくった。', reading: 'しゅうまつはげーむをやりまくった。', meaning: 'Cuối tuần đã chơi game điên cuồng.' },
      { jp: '試験前は勉強しまくった。', reading: 'しけんまえはべんきょうしまくった。', meaning: 'Trước kỳ thi đã học liên tục.' },
    ],
  },
  {
    id: 'gex1b-28',
    pattern: '～まじ (maji)',
    meaning: 'Sẽ không, không nên',
    category: 'Phủ định・Phản bác',
    jlpt: 'N1',
    examples: [
      { jp: 'あのような過ちは二度と繰り返すまじ。', reading: 'あのようなあやまちはにどとくりかえすまじ。', meaning: 'Sai lầm như vậy sẽ không lặp lại lần hai.' },
      { jp: '秘密は誰にも言うまじ。', reading: 'ひみつはだれにもいうまじ。', meaning: 'Bí mật sẽ không nói với ai.' },
    ],
  },
  {
    id: 'gex1b-29',
    pattern: '～ようが/まいが (you ga/mai ga)',
    meaning: 'Dù...hay không',
    category: 'Điều kiện・Phạm vi',
    jlpt: 'N1',
    examples: [
      { jp: '雨が降ろうが降るまいが、出かけます。', reading: 'あめがふろうがふるまいが、でかけます。', meaning: 'Dù mưa hay không mưa, tôi vẫn đi ra ngoài.' },
      { jp: '彼が来ようが来まいが、会議は始めます。', reading: 'かれがこようがこまいが、かいぎははじめます。', meaning: 'Dù anh ấy đến hay không, cuộc họp vẫn bắt đầu.' },
    ],
  },
  {
    id: 'gex1b-30',
    pattern: '～をいいことに (wo ii koto ni)',
    meaning: 'Lợi dụng',
    category: 'Nhấn mạnh・Đặc biệt',
    jlpt: 'N1',
    examples: [
      { jp: '先生がいないのをいいことに、生徒たちは騒いでいた。', reading: 'せんせいがいないのをいいことに、せいとたちはさわいでいた。', meaning: 'Lợi dụng việc giáo viên không có mặt, học sinh đã làm ồn.' },
      { jp: '親切をいいことに、何度も頼み事をする。', reading: 'しんせつをいいことに、なんどもたのみごとをする。', meaning: 'Lợi dụng lòng tốt, nhờ vả nhiều lần.' },
    ],
  },
  {
    id: 'gex1b-31',
    pattern: '～を限りに (をかぎりに・wo kagiri ni)',
    meaning: 'Kể từ, cuối cùng',
    category: 'Thời gian・Giới hạn',
    jlpt: 'N1',
    examples: [
      { jp: '今日を限りに、タバコをやめます。', reading: 'きょうをかぎりに、たばこをやめます。', meaning: 'Kể từ hôm nay, tôi sẽ bỏ thuốc lá.' },
      { jp: '今回を限りに、この仕事から手を引く。', reading: 'こんかいをかぎりに、このしごとからてをひく。', meaning: 'Kể từ lần này, tôi sẽ rút khỏi công việc này.' },
    ],
  },
  {
    id: 'gex1b-32',
    pattern: '～を皮切りとして (をかわきりとして・wo kawakiri to shite)',
    meaning: 'Bắt đầu từ',
    category: 'Thời gian・Giới hạn',
    jlpt: 'N1',
    examples: [
      { jp: '東京公演を皮切りとして、全国ツアーが始まる。', reading: 'とうきょうこうえんをかわきりとして、ぜんこくつあーがはじまる。', meaning: 'Bắt đầu từ buổi công diễn Tokyo, tour toàn quốc khởi động.' },
      { jp: '第一号店を皮切りとして、全国に展開した。', reading: 'だいいちごうてんをかわきりとして、ぜんこくにてんかいした。', meaning: 'Bắt đầu từ cửa hàng số 1, đã mở rộng toàn quốc.' },
    ],
  },
  {
    id: 'gex1b-33',
    pattern: '～をもって (wo motte)',
    meaning: 'Bằng, với',
    category: 'Phương tiện・Cách thức',
    jlpt: 'N1',
    examples: [
      { jp: '本日をもって、営業を終了いたします。', reading: 'ほんじつをもって、えいぎょうをしゅうりょういたします。', meaning: 'Với ngày hôm nay, chúng tôi kết thúc kinh doanh.' },
      { jp: '誠意をもって対応させていただきます。', reading: 'せいいをもってたいおうさせていただきます。', meaning: 'Chúng tôi sẽ ứng phó bằng sự chân thành.' },
    ],
  },
  {
    id: 'gex1b-34',
    pattern: '～然り (しかり・shikari)',
    meaning: 'Cũng vậy',
    category: 'Quan điểm・Lập luận',
    jlpt: 'N1',
    examples: [
      { jp: '兄は優秀だ。弟もまた然り。', reading: 'あにはゆうしゅうだ。おとうともまたしかり。', meaning: 'Anh trai giỏi. Em trai cũng vậy.' },
      { jp: '経済もさることながら、教育も然り。', reading: 'けいざいもさることながら、きょういくもしかり。', meaning: 'Kinh tế đã đành, giáo dục cũng vậy.' },
    ],
  },
  {
    id: 'gex1b-35',
    pattern: '～手前 (てまえ・temae)',
    meaning: 'Vì thể diện',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N1',
    examples: [
      { jp: '約束した手前、断るわけにはいかない。', reading: 'やくそくしたてまえ、ことわるわけにはいかない。', meaning: 'Vì đã hứa (thể diện), không thể từ chối.' },
      { jp: '皆の手前、泣くわけにはいかなかった。', reading: 'みなのてまえ、なくわけにはいかなかった。', meaning: 'Vì thể diện trước mọi người, không thể khóc được.' },
    ],
  },
  {
    id: 'gex1b-36',
    pattern: '～たが最後 (た が さいご・ta ga saigo)',
    meaning: 'Một khi đã thì',
    category: 'Điều kiện・Phạm vi',
    jlpt: 'N1',
    examples: [
      { jp: '彼に秘密を話したが最後、全員に知られてしまう。', reading: 'かれにひみつをはなしたがさいご、ぜんいんにしられてしまう。', meaning: 'Một khi đã nói bí mật cho anh ấy thì mọi người đều biết hết.' },
      { jp: 'あのゲームを始めたが最後、やめられなくなる。', reading: 'あのげーむをはじめたがさいご、やめられなくなる。', meaning: 'Một khi đã bắt đầu trò chơi đó thì không dừng lại được.' },
    ],
  },
  {
    id: 'gex1b-37',
    pattern: '～ただでさえ (tada de sae)',
    meaning: 'Vốn đã...rồi',
    category: 'Nhấn mạnh・Đặc biệt',
    jlpt: 'N1',
    examples: [
      { jp: 'ただでさえ忙しいのに、新しい仕事が入った。', reading: 'ただでさえいそがしいのに、あたらしいしごとがはいった。', meaning: 'Vốn đã bận rồi, lại thêm công việc mới.' },
      { jp: 'ただでさえ狭い部屋に、家具が増えた。', reading: 'ただでさえせまいへやに、かぐがふえた。', meaning: 'Vốn đã chật rồi, phòng lại thêm đồ nội thất.' },
    ],
  },
  {
    id: 'gex1b-38',
    pattern: '～てもさしつかえない (te mo sashitsukaenai)',
    meaning: 'Không sao nếu',
    category: 'Cho phép・Chấp thuận',
    jlpt: 'N1',
    examples: [
      { jp: 'ここで写真を撮ってもさしつかえないでしょうか。', reading: 'ここでしゃしんをとってもさしつかえないでしょうか。', meaning: 'Chụp ảnh ở đây không sao chứ?' },
      { jp: '少し遅れてもさしつかえありません。', reading: 'すこしおくれてもさしつかえありません。', meaning: 'Đến muộn một chút cũng không sao.' },
    ],
  },
  {
    id: 'gex1b-39',
    pattern: '～でなくてなんだろう (de nakute nan darou)',
    meaning: 'Không phải...thì là gì?',
    category: 'Nhấn mạnh・Đặc biệt',
    jlpt: 'N1',
    examples: [
      { jp: 'これが奇跡でなくてなんだろう。', reading: 'これがきせきでなくてなんだろう。', meaning: 'Đây không phải phép màu thì là gì?' },
      { jp: '彼の行動が愛でなくてなんだろう。', reading: 'かれのこうどうがあいでなくてなんだろう。', meaning: 'Hành động của anh ấy không phải tình yêu thì là gì?' },
    ],
  },
  {
    id: 'gex1b-40',
    pattern: '～ともあろう (tomo arou)',
    meaning: 'Là...mà lại',
    category: 'Nhấn mạnh・Đặc biệt',
    jlpt: 'N1',
    examples: [
      { jp: '教師ともあろう者が、そんなことを言うとは。', reading: 'きょうしともあろうものが、そんなことをいうとは。', meaning: 'Là giáo viên mà lại nói điều như vậy.' },
      { jp: '大人ともあろう者が、子供の前で喧嘩するとは。', reading: 'おとなともあろうものが、こどものまえでけんかするとは。', meaning: 'Là người lớn mà lại cãi nhau trước mặt trẻ con.' },
    ],
  },
  {
    id: 'gex1b-41',
    pattern: '～ながらに (nagara ni)',
    meaning: 'Từ khi...đã',
    category: 'Trạng thái・Biểu hiện',
    jlpt: 'N1',
    examples: [
      { jp: '生まれながらにして才能がある。', reading: 'うまれながらにしてさいのうがある。', meaning: 'Từ khi sinh ra đã có tài năng.' },
      { jp: '涙ながらに事情を語った。', reading: 'なみだながらにじじょうをかたった。', meaning: 'Vừa khóc vừa kể sự tình.' },
    ],
  },
  {
    id: 'gex1b-42',
    pattern: '～ながらにして (nagara ni shite)',
    meaning: 'Vẫn...mà',
    category: 'Trạng thái・Biểu hiện',
    jlpt: 'N1',
    examples: [
      { jp: '居ながらにして世界中の情報を得られる。', reading: 'いながらにしてせかいじゅうのじょうほうをえられる。', meaning: 'Vẫn ở nhà mà có thể nhận thông tin cả thế giới.' },
      { jp: '子供ながらにして、親の苦労を理解していた。', reading: 'こどもながらにして、おやのくろうをりかいしていた。', meaning: 'Vẫn còn là trẻ con mà đã hiểu nỗi khổ của cha mẹ.' },
    ],
  },
  {
    id: 'gex1b-43',
    pattern: '～に言わせれば (にいわせれば・ni iwasareba)',
    meaning: 'Theo ý kiến của',
    category: 'Quan điểm・Lập luận',
    jlpt: 'N1',
    examples: [
      { jp: '私に言わせれば、あの計画は無謀だ。', reading: 'わたしにいわせれば、あのけいかくはむぼうだ。', meaning: 'Theo ý kiến của tôi, kế hoạch đó là liều lĩnh.' },
      { jp: '専門家に言わせれば、まだ改善の余地がある。', reading: 'せんもんかにいわせれば、まだかいぜんのよちがある。', meaning: 'Theo ý kiến chuyên gia, vẫn còn chỗ cải thiện.' },
    ],
  },
  {
    id: 'gex1b-44',
    pattern: '～の名に恥じない (のなにはじない・no na ni hajinai)',
    meaning: 'Xứng đáng với danh',
    category: 'Đánh giá・Nhận xét',
    jlpt: 'N1',
    examples: [
      { jp: 'チャンピオンの名に恥じない戦いを見せた。', reading: 'ちゃんぴおんのなにはじないたたかいをみせた。', meaning: 'Đã cho thấy trận đấu xứng đáng với danh hiệu nhà vô địch.' },
      { jp: '一流企業の名に恥じないサービスを提供する。', reading: 'いちりゅうきぎょうのなにはじないさーびすをていきょうする。', meaning: 'Cung cấp dịch vụ xứng đáng với danh doanh nghiệp hàng đầu.' },
    ],
  },
  {
    id: 'gex1b-45',
    pattern: '～引き換え (ひきかえ・hikikae)',
    meaning: 'Ngược lại',
    category: 'Đối lập・So sánh',
    jlpt: 'N1',
    examples: [
      { jp: '兄が真面目なのに引き換え、弟は怠け者だ。', reading: 'あにがまじめなのにひきかえ、おとうとはなまけものだ。', meaning: 'Ngược lại với anh trai chăm chỉ, em trai lười biếng.' },
      { jp: '去年の好景気に引き換え、今年は不況だ。', reading: 'きょねんのこうけいきにひきかえ、ことしはふきょうだ。', meaning: 'Ngược lại với kinh tế tốt năm ngoái, năm nay suy thoái.' },
    ],
  },
  {
    id: 'gex1b-46',
    pattern: '～ほかに～ない (hoka ni...nai)',
    meaning: 'Không còn cách nào khác',
    category: 'Phủ định・Phản bác',
    jlpt: 'N1',
    examples: [
      { jp: '自分でやるほかに方法がない。', reading: 'じぶんでやるほかにほうほうがない。', meaning: 'Không còn cách nào khác ngoài tự mình làm.' },
      { jp: '待つほかにどうしようもない。', reading: 'まつほかにどうしようもない。', meaning: 'Không còn cách nào khác ngoài chờ đợi.' },
    ],
  },
  {
    id: 'gex1b-47',
    pattern: '～までには至らない (までにはいたらない・made ni wa itaranai)',
    meaning: 'Chưa đến mức',
    category: 'Mức độ・Cảm xúc',
    jlpt: 'N1',
    examples: [
      { jp: '怪我はしたが、入院するまでには至らなかった。', reading: 'けがはしたが、にゅういんするまでにはいたらなかった。', meaning: 'Bị thương nhưng chưa đến mức phải nhập viện.' },
      { jp: '不満はあるが、辞めるまでには至らない。', reading: 'ふまんはあるが、やめるまでにはいたらない。', meaning: 'Có bất mãn nhưng chưa đến mức nghỉ việc.' },
    ],
  },
  {
    id: 'gex1b-48',
    pattern: '～もさるものながら (mo saru mono nagara)',
    meaning: 'Đã...lại còn',
    category: 'Nhấn mạnh・Đặc biệt',
    jlpt: 'N1',
    examples: [
      { jp: '味もさることながら、見た目も素晴らしい。', reading: 'あじもさることながら、みためもすばらしい。', meaning: 'Vị đã ngon, lại còn trông đẹp nữa.' },
      { jp: '才能もさることながら、努力も欠かせない。', reading: 'さいのうもさることながら、どりょくもかかせない。', meaning: 'Tài năng đã đành, nỗ lực cũng không thể thiếu.' },
    ],
  },
  {
    id: 'gex1b-49',
    pattern: '～や否や (やいなや・ya ina ya)',
    meaning: 'Ngay khi...liền',
    category: 'Thời gian・Giới hạn',
    jlpt: 'N1',
    examples: [
      { jp: 'ベルが鳴るや否や、生徒たちは教室を飛び出した。', reading: 'べるがなるやいなや、せいとたちはきょうしつをとびだした。', meaning: 'Chuông vừa reo, học sinh liền chạy ra khỏi lớp.' },
      { jp: '彼は帰宅するや否や、ソファに倒れ込んだ。', reading: 'かれはきたくするやいなや、そふぁにたおれこんだ。', meaning: 'Anh ấy vừa về đến nhà liền ngã vào sofa.' },
    ],
  },
  {
    id: 'gex1b-50',
    pattern: '～と思いきや (とおもいきや・to omoikiya)',
    meaning: 'Tưởng...ai ngờ',
    category: 'Đối lập・So sánh',
    jlpt: 'N1',
    examples: [
      { jp: '晴れると思いきや、急に雨が降り出した。', reading: 'はれるとおもいきや、きゅうにあめがふりだした。', meaning: 'Tưởng trời nắng, ai ngờ mưa đột ngột.' },
      { jp: '簡単だと思いきや、意外に難しかった。', reading: 'かんたんだとおもいきや、いがいにむずかしかった。', meaning: 'Tưởng dễ, ai ngờ khó bất ngờ.' },
    ],
  },
  {
    id: 'gex1b-51',
    pattern: '～ゆえに (yue ni)',
    meaning: 'Vì (lý do trang trọng)',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N1',
    examples: [
      { jp: '若さゆえに、失敗することもある。', reading: 'わかさゆえに、しっぱいすることもある。', meaning: 'Vì còn trẻ nên cũng có lúc thất bại.' },
      { jp: '貧しさゆえに、進学を諦めた。', reading: 'まずしさゆえに、しんがくをあきらめた。', meaning: 'Vì nghèo nên đã từ bỏ việc học lên.' },
    ],
  },
  {
    id: 'gex1b-52',
    pattern: '～をおいてほかならない (wo oite hoka naranai)',
    meaning: 'Ngoài...không ai',
    category: 'Nhấn mạnh・Đặc biệt',
    jlpt: 'N1',
    examples: [
      { jp: 'このプロジェクトを任せられるのは彼をおいてほかにいない。', reading: 'このぷろじぇくとをまかせられるのはかれをおいてほかにいない。', meaning: 'Người có thể giao dự án này ngoài anh ấy không còn ai.' },
      { jp: 'この問題を解決できるのは君をおいてほかにいない。', reading: 'このもんだいをかいけつできるのはきみをおいてほかにいない。', meaning: 'Người có thể giải quyết vấn đề này ngoài cậu không còn ai.' },
    ],
  },
  {
    id: 'gex1b-53',
    pattern: '～であるからこそ (de aru kara koso)',
    meaning: 'Chính vì là',
    category: 'Nguyên nhân・Lý do',
    jlpt: 'N1',
    examples: [
      { jp: '友人であるからこそ、正直に言わなければならない。', reading: 'ゆうじんであるからこそ、しょうじきにいわなければならない。', meaning: 'Chính vì là bạn bè nên phải nói thật.' },
      { jp: 'プロであるからこそ、妥協は許されない。', reading: 'ぷろであるからこそ、だきょうはゆるされない。', meaning: 'Chính vì là chuyên gia nên không được phép thỏa hiệp.' },
    ],
  },
  {
    id: 'gex1b-54',
    pattern: '～なくもない (naku mo nai)',
    meaning: 'Không phải là không',
    category: 'Phủ định・Phản bác',
    jlpt: 'N1',
    examples: [
      { jp: '彼の言い分も分からなくもない。', reading: 'かれのいいぶんもわからなくもない。', meaning: 'Lập luận của anh ấy không phải là không hiểu được.' },
      { jp: '行けなくもないが、あまり気が進まない。', reading: 'いけなくもないが、あまりきがすすまない。', meaning: 'Không phải là không đi được, nhưng không mấy hứng thú.' },
    ],
  },
  {
    id: 'gex1b-55',
    pattern: '～に忍びない (にしのびない・ni shinobinai)',
    meaning: 'Không đành lòng',
    category: 'Mức độ・Cảm xúc',
    jlpt: 'N1',
    examples: [
      { jp: '彼の姿を見るに忍びない。', reading: 'かれのすがたをみるにしのびない。', meaning: 'Không đành lòng nhìn dáng vẻ anh ấy.' },
      { jp: 'この美しい建物を壊すに忍びない。', reading: 'このうつくしいたてものをこわすにしのびない。', meaning: 'Không đành lòng phá hủy tòa nhà đẹp này.' },
    ],
  },
];

// ── from: grammarExp_N1_Part3.ts ──
export const GRAMMAR_EXP_N1_P3: GrammarEntry[] = [
  {
    id: 'gex1c-01',
    pattern: '～てから〜になる (te kara...ni naru)',
    meaning: 'Kể từ khi...đã qua',
    category: 'Thời gian・Biến đổi',
    jlpt: 'N1',
    examples: [
      { jp: '日本に来てから三年になる。', reading: 'にほんにきてからさんねんになる。', meaning: 'Kể từ khi đến Nhật đã được ba năm.' },
      { jp: '結婚してから十年になるが、毎日幸せだ。', reading: 'けっこんしてからじゅうねんになるが、まいにちしあわせだ。', meaning: 'Kể từ khi kết hôn đã mười năm, nhưng mỗi ngày đều hạnh phúc.' },
    ],
  },
  {
    id: 'gex1c-02',
    pattern: '～ともすれば (tomo sureba)',
    meaning: 'Dễ có nguy cơ',
    category: 'Khuynh hướng・Nguy cơ',
    jlpt: 'N1',
    examples: [
      { jp: 'ともすれば忘れがちな基本を見直すべきだ。', reading: 'ともすればわすれがちなきほんをみなおすべきだ。', meaning: 'Nên xem lại những điều cơ bản mà dễ có nguy cơ quên mất.' },
      { jp: '現代人はともすれば健康を軽視しがちだ。', reading: 'げんだいじんはともすればけんこうをけいししがちだ。', meaning: 'Người hiện đại dễ có nguy cơ coi nhẹ sức khỏe.' },
    ],
  },
  {
    id: 'gex1c-03',
    pattern: '～たところが (ta tokoro ga)',
    meaning: 'Thử...thì ai ngờ',
    category: 'Kết quả bất ngờ',
    jlpt: 'N1',
    examples: [
      { jp: '電話をかけたところが、もう引っ越していた。', reading: 'でんわをかけたところが、もうひっこしていた。', meaning: 'Thử gọi điện thì ai ngờ đã chuyển nhà rồi.' },
      { jp: '薬を飲んだところが、かえって悪くなった。', reading: 'くすりをのんだところが、かえってわるくなった。', meaning: 'Thử uống thuốc thì ai ngờ lại tệ hơn.' },
    ],
  },
  {
    id: 'gex1c-04',
    pattern: '～というところだ (to iu tokoro da)',
    meaning: 'Đại loại là, tầm',
    category: 'Ước lượng・Đánh giá',
    jlpt: 'N1',
    examples: [
      { jp: '完成度は七割というところだ。', reading: 'かんせいどはななわりというところだ。', meaning: 'Mức hoàn thành tầm bảy phần.' },
      { jp: '参加者はせいぜい百人というところだろう。', reading: 'さんかしゃはせいぜいひゃくにんというところだろう。', meaning: 'Người tham gia đại loại khoảng trăm người.' },
    ],
  },
  {
    id: 'gex1c-05',
    pattern: '～ということは (to iu koto wa)',
    meaning: 'Có nghĩa là',
    category: 'Suy luận・Giải thích',
    jlpt: 'N1',
    examples: [
      { jp: '返事がないということは、承諾したということだ。', reading: 'へんじがないということは、しょうだくしたということだ。', meaning: 'Không trả lời có nghĩa là đã đồng ý.' },
      { jp: '彼が来ないということは、計画が中止になるかもしれない。', reading: 'かれがこないということは、けいかくがちゅうしになるかもしれない。', meaning: 'Anh ấy không đến có nghĩa là kế hoạch có thể bị hủy.' },
    ],
  },
  {
    id: 'gex1c-06',
    pattern: '～と見える (to mieru)',
    meaning: 'Có vẻ là',
    category: 'Phỏng đoán・Nhận xét',
    jlpt: 'N1',
    examples: [
      { jp: '彼は疲れていると見えて、すぐ寝てしまった。', reading: 'かれはつかれているとみえて、すぐねてしまった。', meaning: 'Có vẻ anh ấy mệt nên đã ngủ ngay.' },
      { jp: '雨が降ると見えて、空が暗くなってきた。', reading: 'あめがふるとみえて、そらがくらくなってきた。', meaning: 'Có vẻ sắp mưa, bầu trời đã tối dần.' },
    ],
  },
  {
    id: 'gex1c-07',
    pattern: '～ないとも限らない (nai tomo kagiranai)',
    meaning: 'Không phải là không thể',
    category: 'Khả năng・Suy đoán',
    jlpt: 'N1',
    examples: [
      { jp: '地震が起きないとも限らないので、備えが必要だ。', reading: 'じしんがおきないともかぎらないので、そなえがひつようだ。', meaning: 'Không phải là không có khả năng xảy ra động đất nên cần chuẩn bị.' },
      { jp: '彼が反対しないとも限らない。', reading: 'かれがはんたいしないともかぎらない。', meaning: 'Không phải là anh ấy không thể phản đối.' },
    ],
  },
  {
    id: 'gex1c-08',
    pattern: '～ならまだしも (nara mada shimo)',
    meaning: 'Nếu...thì còn được',
    category: 'So sánh・Nhượng bộ',
    jlpt: 'N1',
    examples: [
      { jp: '冗談ならまだしも、本気で言っているなら問題だ。', reading: 'じょうだんならまだしも、ほんきでいっているならもんだいだ。', meaning: 'Nếu đùa thì còn được, nhưng nói thật thì có vấn đề.' },
      { jp: '子供ならまだしも、大人がそんなことをするとは。', reading: 'こどもならまだしも、おとながそんなことをするとは。', meaning: 'Nếu trẻ con thì còn được, nhưng người lớn lại làm chuyện như vậy.' },
    ],
  },
  {
    id: 'gex1c-09',
    pattern: '～にかまけて (ni kamakete)',
    meaning: 'Vì mải lo',
    category: 'Nguyên nhân・Bận rộn',
    jlpt: 'N1',
    examples: [
      { jp: '仕事にかまけて、家族との時間を忘れていた。', reading: 'しごとにかまけて、かぞくとのじかんをわすれていた。', meaning: 'Vì mải lo công việc mà quên mất thời gian bên gia đình.' },
      { jp: '遊びにかまけて勉強を怠った。', reading: 'あそびにかまけてべんきょうをおこたった。', meaning: 'Vì mải lo chơi mà lơ là việc học.' },
    ],
  },
  {
    id: 'gex1c-10',
    pattern: '～にしたがって (ni shitagatte) N1',
    meaning: 'Theo, tuỳ theo',
    category: 'Tỷ lệ・Biến đổi',
    jlpt: 'N1',
    examples: [
      { jp: '経済が発展するにしたがって、環境問題も深刻化した。', reading: 'けいざいがはってんするにしたがって、かんきょうもんだいもしんこくかした。', meaning: 'Theo sự phát triển kinh tế, vấn đề môi trường cũng trầm trọng hơn.' },
      { jp: '高度が上がるにしたがって、気温が下がる。', reading: 'こうどがあがるにしたがって、きおんがさがる。', meaning: 'Tuỳ theo độ cao tăng lên, nhiệt độ giảm xuống.' },
    ],
  },
  {
    id: 'gex1c-11',
    pattern: '～にしたところで (ni shita tokoro de) alt',
    meaning: 'Ngay cả...cũng',
    category: 'Nhượng bộ・Giới hạn',
    jlpt: 'N1',
    examples: [
      { jp: '専門家にしたところで、完璧な予測は不可能だ。', reading: 'せんもんかにしたところで、かんぺきなよそくはふかのうだ。', meaning: 'Ngay cả chuyên gia cũng không thể dự đoán hoàn hảo.' },
      { jp: '社長にしたところで、すべてを知っているわけではない。', reading: 'しゃちょうにしたところで、すべてをしっているわけではない。', meaning: 'Ngay cả giám đốc cũng không phải biết hết mọi thứ.' },
    ],
  },
  {
    id: 'gex1c-12',
    pattern: '～にそくして (ni sokushite) alt',
    meaning: 'Phù hợp thực tế',
    category: 'Cơ sở・Phù hợp',
    jlpt: 'N1',
    examples: [
      { jp: '現実にそくした対策を立てるべきだ。', reading: 'げんじつにそくしたたいさくをたてるべきだ。', meaning: 'Nên lập kế hoạch phù hợp với thực tế.' },
      { jp: '法律にそくして処理しなければならない。', reading: 'ほうりつにそくしてしょりしなければならない。', meaning: 'Phải xử lý phù hợp với pháp luật.' },
    ],
  },
  {
    id: 'gex1c-13',
    pattern: '～にとどまらず (ni todomarazu) N1',
    meaning: 'Không chỉ dừng ở',
    category: 'Phạm vi・Mở rộng',
    jlpt: 'N1',
    examples: [
      { jp: '被害は国内にとどまらず、世界中に広がった。', reading: 'ひがいはこくないにとどまらず、せかいじゅうにひろがった。', meaning: 'Thiệt hại không chỉ dừng ở trong nước mà lan ra toàn thế giới.' },
      { jp: '彼の影響力は学術界にとどまらず、産業界にも及んでいる。', reading: 'かれのえいきょうりょくはがくじゅつかいにとどまらず、さんぎょうかいにもおよんでいる。', meaning: 'Ảnh hưởng của ông ấy không chỉ dừng ở giới học thuật mà còn tới giới công nghiệp.' },
    ],
  },
  {
    id: 'gex1c-14',
    pattern: '～にはあたらない (ni wa ataranai)',
    meaning: 'Không đáng phải',
    category: 'Đánh giá・Phủ định',
    jlpt: 'N1',
    examples: [
      { jp: '彼の行動は非難にはあたらない。', reading: 'かれのこうどうはひなんにはあたらない。', meaning: 'Hành động của anh ấy không đáng phải chỉ trích.' },
      { jp: 'そのことに驚くにはあたらない。', reading: 'そのことにおどろくにはあたらない。', meaning: 'Chuyện đó không đáng phải ngạc nhiên.' },
    ],
  },
  {
    id: 'gex1c-15',
    pattern: '～に越したことはない (ni koshita koto wa nai) N1',
    meaning: 'Tốt nhất là',
    category: 'Khuyên nhủ・Lý tưởng',
    jlpt: 'N1',
    examples: [
      { jp: '健康のためには、早寝早起きに越したことはない。', reading: 'けんこうのためには、はやねはやおきにこしたことはない。', meaning: 'Vì sức khỏe, tốt nhất là ngủ sớm dậy sớm.' },
      { jp: '備えは多いに越したことはない。', reading: 'そなえはおおいにこしたことはない。', meaning: 'Chuẩn bị nhiều là tốt nhất.' },
    ],
  },
  {
    id: 'gex1c-16',
    pattern: '～のいかんにかかわらず (no ikan ni kakawarazu)',
    meaning: 'Bất kể',
    category: 'Điều kiện・Bất kể',
    jlpt: 'N1',
    examples: [
      { jp: '理由のいかんにかかわらず、遅刻は許されない。', reading: 'りゆうのいかんにかかわらず、ちこくはゆるされない。', meaning: 'Bất kể lý do gì, đi trễ không được phép.' },
      { jp: '結果のいかんにかかわらず、全力を尽くすべきだ。', reading: 'けっかのいかんにかかわらず、ぜんりょくをつくすべきだ。', meaning: 'Bất kể kết quả thế nào, nên cố gắng hết sức.' },
    ],
  },
  {
    id: 'gex1c-17',
    pattern: '～のことだから (no koto dakara)',
    meaning: 'Vì tính cách của',
    category: 'Suy đoán・Tính cách',
    jlpt: 'N1',
    examples: [
      { jp: '真面目な彼のことだから、きっと約束を守るだろう。', reading: 'まじめなかれのことだから、きっとやくそくをまもるだろう。', meaning: 'Vì tính cách nghiêm túc của anh ấy, chắc chắn sẽ giữ lời hứa.' },
      { jp: '優しい彼女のことだから、許してくれるに違いない。', reading: 'やさしいかのじょのことだから、ゆるしてくれるにちがいない。', meaning: 'Vì cô ấy tốt bụng, chắc chắn sẽ tha thứ cho.' },
    ],
  },
  {
    id: 'gex1c-18',
    pattern: '～のことで (no koto de)',
    meaning: 'Về chuyện',
    category: 'Chủ đề・Đề cập',
    jlpt: 'N1',
    examples: [
      { jp: '息子の進学のことでご相談があります。', reading: 'むすこのしんがくのことでごそうだんがあります。', meaning: 'Tôi muốn hỏi về chuyện con trai học lên.' },
      { jp: '先日のことでお詫び申し上げます。', reading: 'せんじつのことでおわびもうしあげます。', meaning: 'Tôi xin lỗi về chuyện hôm trước.' },
    ],
  },
  {
    id: 'gex1c-19',
    pattern: '～のなんのと (no nan no to)',
    meaning: 'Cái này cái kia',
    category: 'Liệt kê・Phàn nàn',
    jlpt: 'N1',
    examples: [
      { jp: '忙しいのなんのと言い訳ばかりしている。', reading: 'いそがしいのなんのといいわけばかりしている。', meaning: 'Cứ viện cớ bận rộn cái này cái kia.' },
      { jp: '痛いのなんのと騒いでいたが、大したことはなかった。', reading: 'いたいのなんのとさわいでいたが、たいしたことはなかった。', meaning: 'Cứ kêu đau cái này cái kia nhưng không có gì nghiêm trọng.' },
    ],
  },
  {
    id: 'gex1c-20',
    pattern: '～の方が (no hou ga) N1 literary',
    meaning: 'Thà...còn hơn',
    category: 'So sánh・Lựa chọn',
    jlpt: 'N1',
    examples: [
      { jp: 'こんな生活を続けるくらいなら、やめた方がましだ。', reading: 'こんなせいかつをつづけるくらいなら、やめたほうがましだ。', meaning: 'Thà bỏ còn hơn tiếp tục cuộc sống như thế này.' },
      { jp: '嘘をつくより、正直に言った方がいい。', reading: 'うそをつくより、しょうじきにいったほうがいい。', meaning: 'Thà nói thật còn hơn nói dối.' },
    ],
  },
  {
    id: 'gex1c-21',
    pattern: '～はいざ知らず (wa iza shirazu) alt',
    meaning: 'Không biết thế nào',
    category: 'Nhượng bộ・Ngoại lệ',
    jlpt: 'N1',
    examples: [
      { jp: '昔はいざ知らず、今の時代にそれは通用しない。', reading: 'むかしはいざしらず、いまのじだいにそれはつうようしない。', meaning: 'Ngày xưa không biết thế nào, nhưng thời nay điều đó không có tác dụng.' },
      { jp: '都会はいざ知らず、田舎では車がないと不便だ。', reading: 'とかいはいざしらず、いなかではくるまがないとふべんだ。', meaning: 'Thành phố không biết thế nào, nhưng ở nông thôn không có xe thì bất tiện.' },
    ],
  },
  {
    id: 'gex1c-22',
    pattern: '～ぶり (buri) N1',
    meaning: 'Phong cách, kiểu',
    category: 'Phong cách・Thái độ',
    jlpt: 'N1',
    examples: [
      { jp: '彼の仕事ぶりには感心させられる。', reading: 'かれのしごとぶりにはかんしんさせられる。', meaning: 'Phong cách làm việc của anh ấy thật đáng khâm phục.' },
      { jp: '彼女の話しぶりから、相当怒っているようだ。', reading: 'かのじょのはなしぶりから、そうとうおこっているようだ。', meaning: 'Từ kiểu nói chuyện của cô ấy, có vẻ rất giận.' },
    ],
  },
  {
    id: 'gex1c-23',
    pattern: '～べくして (beku shite)',
    meaning: 'Đúng như đã định',
    category: 'Tất nhiên・Số phận',
    jlpt: 'N1',
    examples: [
      { jp: '彼らは出会うべくして出会った。', reading: 'かれらはであうべくしてであった。', meaning: 'Họ gặp nhau đúng như đã định.' },
      { jp: 'あの事故は起こるべくして起こった。', reading: 'あのじこはおこるべくしておこった。', meaning: 'Tai nạn đó xảy ra đúng như đã được định sẵn.' },
    ],
  },
  {
    id: 'gex1c-24',
    pattern: '～べくもない (beku mo nai)',
    meaning: 'Không thể nào',
    category: 'Bất khả năng',
    jlpt: 'N1',
    examples: [
      { jp: '彼の才能は比べるべくもない。', reading: 'かれのさいのうはくらべるべくもない。', meaning: 'Không thể nào so sánh được tài năng của anh ấy.' },
      { jp: '当時の苦労は想像するべくもない。', reading: 'とうじのくろうはそうぞうするべくもない。', meaning: 'Không thể nào tưởng tượng được nỗi khổ lúc ấy.' },
    ],
  },
  {
    id: 'gex1c-25',
    pattern: '～ほどのことはない (hodo no koto wa nai)',
    meaning: 'Không đáng phải',
    category: 'Đánh giá・Giảm nhẹ',
    jlpt: 'N1',
    examples: [
      { jp: '心配するほどのことはない。', reading: 'しんぱいするほどのことはない。', meaning: 'Không đáng phải lo lắng.' },
      { jp: 'わざわざ行くほどのことはないよ。', reading: 'わざわざいくほどのことはないよ。', meaning: 'Không đáng phải cất công đi đâu.' },
    ],
  },
  {
    id: 'gex1c-26',
    pattern: '～まいと (mai to)',
    meaning: 'Cố gắng không',
    category: 'Ý chí・Quyết tâm',
    jlpt: 'N1',
    examples: [
      { jp: '泣くまいと必死にこらえた。', reading: 'なくまいとひっしにこらえた。', meaning: 'Cố gắng không khóc, nén chịu hết sức.' },
      { jp: '二度と失敗するまいと心に誓った。', reading: 'にどとしっぱいするまいとこころにちかった。', meaning: 'Thề trong lòng cố gắng không thất bại lần nữa.' },
    ],
  },
  {
    id: 'gex1c-27',
    pattern: '～までに (made ni) N1 formal',
    meaning: 'Đến mức, thậm chí',
    category: 'Mức độ・Nhấn mạnh',
    jlpt: 'N1',
    examples: [
      { jp: '念のために申し上げるまでですが、締切は明日です。', reading: 'ねんのためにもうしあげるまでですが、しめきりはあしたです。', meaning: 'Chỉ xin nói thêm rằng hạn chót là ngày mai.' },
      { jp: '驚くまでに彼の日本語は上達した。', reading: 'おどろくまでにかれのにほんごはじょうたつした。', meaning: 'Tiếng Nhật của anh ấy tiến bộ đến mức đáng ngạc nhiên.' },
    ],
  },
  {
    id: 'gex1c-28',
    pattern: '～みるからに (miru kara ni)',
    meaning: 'Nhìn là biết ngay',
    category: 'Ấn tượng・Ngoại hình',
    jlpt: 'N1',
    examples: [
      { jp: '彼はみるからに疲れている様子だった。', reading: 'かれはみるからにつかれているようすだった。', meaning: 'Nhìn anh ấy là biết ngay đang mệt.' },
      { jp: 'みるからに高そうな時計をしていた。', reading: 'みるからにたかそうなとけいをしていた。', meaning: 'Đeo chiếc đồng hồ nhìn là biết ngay đắt tiền.' },
    ],
  },
  {
    id: 'gex1c-29',
    pattern: '～むけに (muke ni) N1',
    meaning: 'Hướng đến, dành cho',
    category: 'Đối tượng・Mục đích',
    jlpt: 'N1',
    examples: [
      { jp: 'この教材は上級者むけに作られている。', reading: 'このきょうざいはじょうきゅうしゃむけにつくられている。', meaning: 'Giáo trình này được làm dành cho người trình độ cao.' },
      { jp: '子供むけの番組が増えてきた。', reading: 'こどもむけのばんぐみがふえてきた。', meaning: 'Chương trình dành cho trẻ em đã tăng lên.' },
    ],
  },
  {
    id: 'gex1c-30',
    pattern: '～とはうらはらに (to wa urahara ni)',
    meaning: 'Trái ngược hoàn toàn',
    category: 'Tương phản・Nghịch lý',
    jlpt: 'N1',
    examples: [
      { jp: '期待とはうらはらに、結果は散々だった。', reading: 'きたいとはうらはらに、けっかはさんざんだった。', meaning: 'Trái ngược hoàn toàn với kỳ vọng, kết quả rất tệ.' },
      { jp: '明るい表情とはうらはらに、心の中は不安でいっぱいだった。', reading: 'あかるいひょうじょうとはうらはらに、こころのなかはふあんでいっぱいだった。', meaning: 'Trái ngược hoàn toàn với vẻ mặt tươi sáng, trong lòng đầy lo lắng.' },
    ],
  },
  {
    id: 'gex1c-31',
    pattern: '～もはや (mohaya)',
    meaning: 'Giờ đã...rồi',
    category: 'Thời gian・Trạng thái',
    jlpt: 'N1',
    examples: [
      { jp: 'もはや引き返すことはできない。', reading: 'もはやひきかえすことはできない。', meaning: 'Giờ đã không thể quay lại rồi.' },
      { jp: 'この技術はもはや時代遅れだ。', reading: 'このぎじゅつはもはやじだいおくれだ。', meaning: 'Công nghệ này giờ đã lỗi thời rồi.' },
    ],
  },
  {
    id: 'gex1c-32',
    pattern: '～ともなく (tomo naku) alt',
    meaning: 'Vô tình',
    category: 'Vô ý thức・Tự nhiên',
    jlpt: 'N1',
    examples: [
      { jp: '見るともなくテレビを見ていたら、面白いニュースが流れた。', reading: 'みるともなくテレビをみていたら、おもしろいニュースがながれた。', meaning: 'Vô tình xem tivi thì thấy tin tức thú vị.' },
      { jp: '聞くともなく隣の会話が耳に入った。', reading: 'きくともなくとなりのかいわがみみにはいった。', meaning: 'Vô tình nghe lọt cuộc nói chuyện bên cạnh.' },
    ],
  },
  {
    id: 'gex1c-33',
    pattern: '～はずもない (hazu mo nai)',
    meaning: 'Không thể nào',
    category: 'Phủ định mạnh',
    jlpt: 'N1',
    examples: [
      { jp: 'そんな簡単に成功するはずもない。', reading: 'そんなかんたんにせいこうするはずもない。', meaning: 'Không thể nào thành công dễ dàng như vậy.' },
      { jp: '彼女がそんなことを言うはずもない。', reading: 'かのじょがそんなことをいうはずもない。', meaning: 'Không thể nào cô ấy nói điều như vậy.' },
    ],
  },
  {
    id: 'gex1c-34',
    pattern: '～を体して (wo taishite)',
    meaning: 'Thể hiện',
    category: 'Thể hiện・Đại diện',
    jlpt: 'N1',
    examples: [
      { jp: '社長の意向を体して、新方針を発表した。', reading: 'しゃちょうのいこうをたいして、しんほうしんをはっぴょうした。', meaning: 'Thể hiện ý chí của giám đốc, đã công bố phương châm mới.' },
      { jp: '国民の声を体して、政策を見直した。', reading: 'こくみんのこえをたいして、せいさくをみなおした。', meaning: 'Thể hiện tiếng nói của nhân dân, đã xem xét lại chính sách.' },
    ],
  },
  {
    id: 'gex1c-35',
    pattern: '～ように (you ni) N1 prayer',
    meaning: 'Mong sao',
    category: 'Nguyện vọng・Cầu nguyện',
    jlpt: 'N1',
    examples: [
      { jp: '試験に合格しますように。', reading: 'しけんにごうかくしますように。', meaning: 'Mong sao đỗ kỳ thi.' },
      { jp: '世界が平和でありますように。', reading: 'せかいがへいわでありますように。', meaning: 'Mong sao thế giới hòa bình.' },
    ],
  },
  {
    id: 'gex1c-36',
    pattern: '～かぎりのことをする (kagiri no koto wo suru)',
    meaning: 'Làm mọi thứ có thể',
    category: 'Nỗ lực・Quyết tâm',
    jlpt: 'N1',
    examples: [
      { jp: '患者を助けるために、できるかぎりのことをした。', reading: 'かんじゃをたすけるために、できるかぎりのことをした。', meaning: 'Đã làm mọi thứ có thể để cứu bệnh nhân.' },
      { jp: '力のかぎりのことをして、後は結果を待つだけだ。', reading: 'ちからのかぎりのことをして、あとはけっかをまつだけだ。', meaning: 'Đã làm mọi thứ có thể, giờ chỉ đợi kết quả.' },
    ],
  },
  {
    id: 'gex1c-37',
    pattern: '～折（おり） (ori)',
    meaning: 'Dịp, khi',
    category: 'Thời điểm・Cơ hội',
    jlpt: 'N1',
    examples: [
      { jp: 'お会いした折に、改めてご挨拶いたします。', reading: 'おあいしたおりに、あらためてごあいさついたします。', meaning: 'Khi có dịp gặp, tôi sẽ chào hỏi lại.' },
      { jp: 'お近くにお越しの折は、ぜひお立ち寄りください。', reading: 'おちかくにおこしのおりは、ぜひおたちよりください。', meaning: 'Khi có dịp đến gần đây, nhất định hãy ghé qua.' },
    ],
  },
  {
    id: 'gex1c-38',
    pattern: '～節 (setsu)',
    meaning: 'Dịp, lúc',
    category: 'Thời điểm・Kính ngữ',
    jlpt: 'N1',
    examples: [
      { jp: 'お会いできた節は、よろしくお願いいたします。', reading: 'おあいできたせつは、よろしくおねがいいたします。', meaning: 'Khi có dịp gặp nhau, mong được giúp đỡ.' },
      { jp: 'ご来店の節は、受付にお申し付けください。', reading: 'ごらいてんのせつは、うけつけにおもうしつけください。', meaning: 'Khi đến cửa hàng, xin hãy nói với quầy lễ tân.' },
    ],
  },
  {
    id: 'gex1c-39',
    pattern: '～極み (kiwami) alt',
    meaning: 'Đỉnh điểm',
    category: 'Cực độ・Cảm xúc',
    jlpt: 'N1',
    examples: [
      { jp: '感激の極みです。', reading: 'かんげきのきわみです。', meaning: 'Đó là đỉnh điểm của sự cảm kích.' },
      { jp: '贅沢の極みを尽くした料理だ。', reading: 'ぜいたくのきわみをつくしたりょうりだ。', meaning: 'Món ăn xa hoa đến đỉnh điểm.' },
    ],
  },
  {
    id: 'gex1c-40',
    pattern: '～思い (omoi)',
    meaning: 'Cảm giác, tâm trạng',
    category: 'Cảm xúc・Nội tâm',
    jlpt: 'N1',
    examples: [
      { jp: '故郷を離れる思いは複雑だった。', reading: 'こきょうをはなれるおもいはふくざつだった。', meaning: 'Tâm trạng khi xa quê hương thật phức tạp.' },
      { jp: '断腸の思いで決断した。', reading: 'だんちょうのおもいでけつだんした。', meaning: 'Đã quyết định với tâm trạng đau xé lòng.' },
    ],
  },
  {
    id: 'gex1c-41',
    pattern: '～がゆえに (ga yue ni)',
    meaning: 'Chính vì',
    category: 'Nguyên nhân・Nhấn mạnh',
    jlpt: 'N1',
    examples: [
      { jp: '愛するがゆえに、厳しくする。', reading: 'あいするがゆえに、きびしくする。', meaning: 'Chính vì yêu thương nên mới nghiêm khắc.' },
      { jp: '真面目であるがゆえに、悩みが多い。', reading: 'まじめであるがゆえに、なやみがおおい。', meaning: 'Chính vì nghiêm túc nên nhiều phiền muộn.' },
    ],
  },
  {
    id: 'gex1c-42',
    pattern: '～ごとく (gotoku)',
    meaning: 'Giống như',
    category: 'Ví von・Văn viết',
    jlpt: 'N1',
    examples: [
      { jp: '光陰矢のごとし。', reading: 'こういんやのごとし。', meaning: 'Thời gian nhanh giống như tên bay.' },
      { jp: '彼は水を得た魚のごとく活躍した。', reading: 'かれはみずをえたうおのごとくかつやくした。', meaning: 'Anh ấy hoạt động giống như cá gặp nước.' },
    ],
  },
  {
    id: 'gex1c-43',
    pattern: '～しまつだ (shimatsu da) alt',
    meaning: 'Rốt cuộc lại',
    category: 'Kết quả xấu',
    jlpt: 'N1',
    examples: [
      { jp: '遅刻した上に、書類を忘れるしまつだ。', reading: 'ちこくしたうえに、しょるいをわすれるしまつだ。', meaning: 'Đã đến muộn, rốt cuộc lại còn quên tài liệu.' },
      { jp: '散々飲んだ挙句、電車で寝過ごすしまつだ。', reading: 'さんざんのんだあげく、でんしゃでねすごすしまつだ。', meaning: 'Uống bia lia lịa, rốt cuộc lại ngủ quên trên tàu.' },
    ],
  },
  {
    id: 'gex1c-44',
    pattern: '～ずとも (zu tomo)',
    meaning: 'Ngay cả không...cũng',
    category: 'Nhượng bộ・Điều kiện',
    jlpt: 'N1',
    examples: [
      { jp: '言わずとも、彼にはわかっているはずだ。', reading: 'いわずとも、かれにはわかっているはずだ。', meaning: 'Ngay cả không nói, anh ấy cũng hiểu.' },
      { jp: '聞かずとも、結果は明らかだ。', reading: 'きかずとも、けっかはあきらかだ。', meaning: 'Ngay cả không hỏi, kết quả cũng rõ ràng.' },
    ],
  },
  {
    id: 'gex1c-45',
    pattern: '～そばから (soba kara)',
    meaning: 'Vừa...thì liền',
    category: 'Thời gian・Lặp lại',
    jlpt: 'N1',
    examples: [
      { jp: '教えたそばから忘れてしまう。', reading: 'おしえたそばからわすれてしまう。', meaning: 'Vừa dạy xong thì liền quên ngay.' },
      { jp: '片付けたそばから子供が散らかす。', reading: 'かたづけたそばからこどもがちらかす。', meaning: 'Vừa dọn xong thì liền bị trẻ con bày bừa.' },
    ],
  },
  {
    id: 'gex1c-46',
    pattern: '～ただそれだけで (tada sore dake de)',
    meaning: 'Chỉ riêng điều đó',
    category: 'Nhấn mạnh・Giới hạn',
    jlpt: 'N1',
    examples: [
      { jp: '彼女が笑ってくれた。ただそれだけで幸せだった。', reading: 'かのじょがわらってくれた。ただそれだけでしあわせだった。', meaning: 'Cô ấy cười. Chỉ riêng điều đó đã hạnh phúc rồi.' },
      { jp: '合格したという知らせを聞いた。ただそれだけで涙が出た。', reading: 'ごうかくしたというしらせをきいた。ただそれだけでなみだがでた。', meaning: 'Nghe tin đỗ. Chỉ riêng điều đó đã rơi nước mắt.' },
    ],
  },
  {
    id: 'gex1c-47',
    pattern: '～たまでだ (ta made da)',
    meaning: 'Chỉ là đã',
    category: 'Giải thích・Khiêm tốn',
    jlpt: 'N1',
    examples: [
      { jp: '本当のことを言ったまでだ。', reading: 'ほんとうのことをいったまでだ。', meaning: 'Chỉ là đã nói sự thật thôi.' },
      { jp: '自分の仕事をしたまでです。', reading: 'じぶんのしごとをしたまでです。', meaning: 'Chỉ là đã làm công việc của mình thôi.' },
    ],
  },
  {
    id: 'gex1c-48',
    pattern: '～であればこそ (de areba koso)',
    meaning: 'Chính vì là',
    category: 'Nguyên nhân・Khẳng định',
    jlpt: 'N1',
    examples: [
      { jp: '彼であればこそ、この仕事を任せられる。', reading: 'かれであればこそ、このしごとをまかせられる。', meaning: 'Chính vì là anh ấy nên mới giao được việc này.' },
      { jp: '若さであればこそ、挑戦できるのだ。', reading: 'わかさであればこそ、ちょうせんできるのだ。', meaning: 'Chính vì là tuổi trẻ nên mới dám thử thách.' },
    ],
  },
  {
    id: 'gex1c-49',
    pattern: '～てからというもの (te kara to iu mono)',
    meaning: 'Kể từ khi',
    category: 'Thời gian・Thay đổi',
    jlpt: 'N1',
    examples: [
      { jp: '子供が生まれてからというもの、生活が一変した。', reading: 'こどもがうまれてからというもの、せいかつがいっぺんした。', meaning: 'Kể từ khi con sinh ra, cuộc sống thay đổi hoàn toàn.' },
      { jp: 'あの事件があってからというもの、外出が怖くなった。', reading: 'あのじけんがあってからというもの、がいしゅつがこわくなった。', meaning: 'Kể từ khi xảy ra sự kiện đó, trở nên sợ ra ngoài.' },
    ],
  },
  {
    id: 'gex1c-50',
    pattern: '～てしかるべき (te shikaru beki)',
    meaning: 'Đáng lẽ phải',
    category: 'Đánh giá・Nên',
    jlpt: 'N1',
    examples: [
      { jp: '彼の功績は評価されてしかるべきだ。', reading: 'かれのこうせきはひょうかされてしかるべきだ。', meaning: 'Công lao của anh ấy đáng lẽ phải được đánh giá.' },
      { jp: 'この問題はもっと議論されてしかるべきだ。', reading: 'このもんだいはもっとぎろんされてしかるべきだ。', meaning: 'Vấn đề này đáng lẽ phải được thảo luận nhiều hơn.' },
    ],
  },
  {
    id: 'gex1c-51',
    pattern: '～てすむ (te sumu) N1 formal',
    meaning: 'Xong bằng',
    category: 'Hoàn thành・Giải quyết',
    jlpt: 'N1',
    examples: [
      { jp: '謝って済む問題ではない。', reading: 'あやまってすむもんだいではない。', meaning: 'Không phải là vấn đề xin lỗi là xong.' },
      { jp: 'お金を払って済むなら、払います。', reading: 'おかねをはらってすむなら、はらいます。', meaning: 'Nếu trả tiền là xong thì tôi trả.' },
    ],
  },
  {
    id: 'gex1c-52',
    pattern: '～てはならない (te wa naranai) N1 formal',
    meaning: 'Không được phép',
    category: 'Cấm đoán・Nghĩa vụ',
    jlpt: 'N1',
    examples: [
      { jp: '過去の過ちを繰り返してはならない。', reading: 'かこのあやまちをくりかえしてはならない。', meaning: 'Không được phép lặp lại sai lầm trong quá khứ.' },
      { jp: '人の尊厳を傷つけてはならない。', reading: 'ひとのそんげんをきずつけてはならない。', meaning: 'Không được phép xúc phạm nhân phẩm con người.' },
    ],
  },
  {
    id: 'gex1c-53',
    pattern: '～とでもいうべき (to demo iu beki)',
    meaning: 'Có thể gọi là',
    category: 'Mô tả・Ví von',
    jlpt: 'N1',
    examples: [
      { jp: '奇跡とでもいうべき回復を見せた。', reading: 'きせきとでもいうべきかいふくをみせた。', meaning: 'Đã thể hiện sự hồi phục có thể gọi là kỳ tích.' },
      { jp: '革命とでもいうべき大きな変化が起きた。', reading: 'かくめいとでもいうべきおおきなへんかがおきた。', meaning: 'Đã xảy ra thay đổi lớn có thể gọi là cuộc cách mạng.' },
    ],
  },
  {
    id: 'gex1c-54',
    pattern: '～ともに (tomo ni) N1 formal',
    meaning: 'Cùng với',
    category: 'Đồng thời・Song hành',
    jlpt: 'N1',
    examples: [
      { jp: '時代とともに、価値観も変わっていく。', reading: 'じだいとともに、かちかんもかわっていく。', meaning: 'Cùng với thời đại, giá trị quan cũng thay đổi.' },
      { jp: '卒業するとともに、社会人としての生活が始まる。', reading: 'そつぎょうするとともに、しゃかいじんとしてのせいかつがはじまる。', meaning: 'Cùng với việc tốt nghiệp, cuộc sống người đi làm bắt đầu.' },
    ],
  },
  {
    id: 'gex1c-55',
    pattern: '～にたがわず (ni tagawazu)',
    meaning: 'Đúng như, không sai',
    category: 'Phù hợp・Xác nhận',
    jlpt: 'N1',
    examples: [
      { jp: '評判にたがわず、その店の料理は素晴らしかった。', reading: 'ひょうばんにたがわず、そのみせのりょうりはすばらしかった。', meaning: 'Đúng như đánh giá, món ăn của quán đó tuyệt vời.' },
      { jp: '期待にたがわず、彼は見事に優勝した。', reading: 'きたいにたがわず、かれはみごとにゆうしょうした。', meaning: 'Không sai với kỳ vọng, anh ấy đã vô địch xuất sắc.' },
    ],
  },
];
