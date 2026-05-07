import type { GrammarExample } from './grammarTypes';

// ============================================================================
// GRAMMAR DICT-REF EXAMPLES — Ví dụ cho 168 mẫu ngữ pháp DOJG/HJGP/DOJP
// ============================================================================

export const GRAMMAR_DICTREF_EXAMPLES: Record<string, GrammarExample[]> = {

  // ── g23-001: ～あまり — Không... lắm ──
  'g23-001': [
    { jp: 'この映画はあまり面白くない。', reading: 'このえいがはあまりおもしろくない。', meaning: 'Bộ phim này không thú vị lắm.' },
    { jp: 'あまり食べすぎないでください。', reading: 'あまりたべすぎないでください。', meaning: 'Xin đừng ăn quá nhiều.' },
  ],

  // ── g23-002: ～だい — Trợ từ cuối câu hỏi (nam giới) ──
  'g23-002': [
    { jp: '何をしているんだい？', reading: 'なにをしているんだい？', meaning: 'Cậu đang làm gì thế?' },
    { jp: '元気だい？', reading: 'げんきだい？', meaning: 'Khỏe không?' },
  ],

  // ── g23-003: ～出す (だす) — Bắt đầu ~ ──
  'g23-003': [
    { jp: '急に雨が降り出した。', reading: 'きゅうにあめがふりだした。', meaning: 'Trời bỗng bắt đầu mưa.' },
    { jp: '彼女は泣き出した。', reading: 'かのじょはなきだした。', meaning: 'Cô ấy bắt đầu khóc.' },
  ],

  // ── g23-004: どう — Thế nào ──
  'g23-004': [
    { jp: 'この料理はどうですか。', reading: 'このりょうりはどうですか。', meaning: 'Món ăn này thế nào?' },
    { jp: 'どうやって行きますか。', reading: 'どうやっていきますか。', meaning: 'Đi bằng cách nào?' },
  ],

  // ── g23-005: ～ごろ — Khoảng ──
  'g23-005': [
    { jp: '三時ごろに来てください。', reading: 'さんじごろにきてください。', meaning: 'Hãy đến vào khoảng 3 giờ.' },
    { jp: '昼ごろ電話します。', reading: 'ひるごろでんわします。', meaning: 'Tôi sẽ gọi điện vào khoảng trưa.' },
  ],

  // ── g23-006: ～行く (いく) — Tiếp tục ~ ──
  'g23-006': [
    { jp: 'これから日本語を勉強していく。', reading: 'これからにほんごをべんきょうしていく。', meaning: 'Từ giờ tôi sẽ tiếp tục học tiếng Nhật.' },
    { jp: '気温が上がっていく。', reading: 'きおんがあがっていく。', meaning: 'Nhiệt độ tiếp tục tăng lên.' },
  ],

  // ── g23-007: 要る (いる) — Cần ──
  'g23-007': [
    { jp: 'お金が要る。', reading: 'おかねがいる。', meaning: 'Cần tiền.' },
    { jp: 'パスポートが要りますか。', reading: 'パスポートがいりますか。', meaning: 'Có cần hộ chiếu không?' },
  ],

  // ── g23-008: 自分 (じぶん) — Bản thân ──
  'g23-008': [
    { jp: '自分のことは自分でやりなさい。', reading: 'じぶんのことはじぶんでやりなさい。', meaning: 'Việc của mình thì tự mình làm.' },
    { jp: '自分で決めたい。', reading: 'じぶんできめたい。', meaning: 'Tôi muốn tự mình quyết định.' },
  ],

  // ── g23-009: ～か(どうか) — Có hay không ──
  'g23-009': [
    { jp: '明日来るかどうか分からない。', reading: 'あしたくるかどうかわからない。', meaning: 'Không biết ngày mai có đến hay không.' },
    { jp: '正しいか確認してください。', reading: 'ただしいかかくにんしてください。', meaning: 'Hãy xác nhận xem có đúng không.' },
  ],

  // ── g23-010: ～かい — Câu hỏi thân mật ──
  'g23-010': [
    { jp: '大丈夫かい？', reading: 'だいじょうぶかい？', meaning: 'Ổn chứ?' },
    { jp: 'もう食べたかい？', reading: 'もうたべたかい？', meaning: 'Ăn rồi chứ?' },
  ],

  // ── g23-011: 聞こえる (きこえる) — Nghe thấy ──
  'g23-011': [
    { jp: '音楽が聞こえる。', reading: 'おんがくがきこえる。', meaning: 'Nghe thấy tiếng nhạc.' },
    { jp: 'ここからは何も聞こえない。', reading: 'ここからはなにもきこえない。', meaning: 'Từ đây không nghe thấy gì cả.' },
  ],

  // ── g23-012: 嫌いだ (きらいだ) — Ghét ──
  'g23-012': [
    { jp: '嘘をつく人が嫌いだ。', reading: 'うそをつくひとがきらいだ。', meaning: 'Ghét người nói dối.' },
    { jp: '野菜が嫌いな子供が多い。', reading: 'やさいがきらいなこどもがおおい。', meaning: 'Nhiều trẻ em ghét rau.' },
  ],

  // ── g23-013: ～下さい (ください) — Xin hãy ──
  'g23-013': [
    { jp: '少々お待ちください。', reading: 'しょうしょうおまちください。', meaning: 'Xin hãy chờ một chút.' },
    { jp: 'ここに名前を書いてください。', reading: 'ここになまえをかいてください。', meaning: 'Hãy viết tên vào đây.' },
  ],

  // ── g23-014: ～君 (くん) — Hậu tố kính ngữ thân mật ──
  'g23-014': [
    { jp: '田中君、ちょっと来て。', reading: 'たなかくん、ちょっときて。', meaning: 'Tanaka, lại đây một chút.' },
    { jp: '山田君は優秀な学生だ。', reading: 'やまだくんはゆうしゅうながくせいだ。', meaning: 'Yamada là học sinh giỏi.' },
  ],

  // ── g23-015: ～来る (くる) — Bắt đầu ~ ──
  'g23-015': [
    { jp: 'だんだん寒くなってきた。', reading: 'だんだんさむくなってきた。', meaning: 'Trời dần dần trở nên lạnh.' },
    { jp: '日本語が分かるようになってきた。', reading: 'にほんごがわかるようになってきた。', meaning: 'Tôi đã bắt đầu hiểu được tiếng Nhật.' },
  ],

  // ── g23-016: まだ — Vẫn; chưa ──
  'g23-016': [
    { jp: 'まだ食べていません。', reading: 'まだたべていません。', meaning: 'Tôi vẫn chưa ăn.' },
    { jp: 'まだ時間がある。', reading: 'まだじかんがある。', meaning: 'Vẫn còn thời gian.' },
  ],

  // ── g23-017: ～まま — Nguyên trạng ──
  'g23-017': [
    { jp: '窓を開けたまま寝た。', reading: 'まどをあけたままねた。', meaning: 'Tôi ngủ trong khi cửa sổ để mở.' },
    { jp: '靴のまま家に入らないで。', reading: 'くつのままいえにはいらないで。', meaning: 'Đừng vào nhà nguyên giày.' },
  ],

  // ── g23-018: 見える (みえる) — Nhìn thấy ──
  'g23-018': [
    { jp: '富士山が見える。', reading: 'ふじさんがみえる。', meaning: 'Nhìn thấy núi Phú Sĩ.' },
    { jp: '彼は若く見える。', reading: 'かれはわかくみえる。', meaning: 'Anh ấy trông trẻ.' },
  ],

  // ── g23-019: ～ね — Nhỉ ──
  'g23-019': [
    { jp: 'いい天気ですね。', reading: 'いいてんきですね。', meaning: 'Thời tiết đẹp nhỉ.' },
    { jp: 'おいしいですね。', reading: 'おいしいですね。', meaning: 'Ngon nhỉ.' },
  ],

  // ── g23-020: 多い (おおい) — Nhiều ──
  'g23-020': [
    { jp: '東京は人が多い。', reading: 'とうきょうはひとがおおい。', meaning: 'Tokyo đông người.' },
    { jp: '最近、外国人観光客が多い。', reading: 'さいきん、がいこくじんかんこうきゃくがおおい。', meaning: 'Gần đây có nhiều du khách nước ngoài.' },
  ],

  // ── g23-021: お～する — Khiêm nhường ──
  'g23-021': [
    { jp: '先生をお待ちします。', reading: 'せんせいをおまちします。', meaning: 'Tôi sẽ chờ thầy/cô.' },
    { jp: 'お荷物をお持ちします。', reading: 'おにもつをおもちします。', meaning: 'Tôi xin mang hành lý cho bạn.' },
  ],

  // ── g23-022: ～終わる (おわる) — Xong ──
  'g23-022': [
    { jp: '宿題を書き終わった。', reading: 'しゅくだいをかきおわった。', meaning: 'Tôi đã viết xong bài tập.' },
    { jp: '本を読み終わりました。', reading: 'ほんをよみおわりました。', meaning: 'Tôi đã đọc xong sách.' },
  ],

  // ── g23-023: Relative Clause — Mệnh đề quan hệ ──
  'g23-023': [
    { jp: '昨日買った本はおもしろい。', reading: 'きのうかったほんはおもしろい。', meaning: 'Cuốn sách mà tôi mua hôm qua rất thú vị.' },
    { jp: '日本に住んでいる友達がいる。', reading: 'にほんにすんでいるともだちがいる。', meaning: 'Tôi có bạn sống ở Nhật.' },
  ],

  // ── g23-024: ～様 (さま) — Ông/bà/ngài ──
  'g23-024': [
    { jp: 'お客様、こちらへどうぞ。', reading: 'おきゃくさま、こちらへどうぞ。', meaning: 'Quý khách, xin mời đi phía này.' },
    { jp: '田中様にお伝えください。', reading: 'たなかさまにおつたえください。', meaning: 'Xin chuyển lời đến ngài Tanaka.' },
  ],

  // ── g23-025: せっかく — Đã cố gắng ──
  'g23-025': [
    { jp: 'せっかく来たのに、店が閉まっていた。', reading: 'せっかくきたのに、みせがしまっていた。', meaning: 'Đã cất công đến mà cửa hàng đóng cửa rồi.' },
    { jp: 'せっかくの休みだから旅行しよう。', reading: 'せっかくのやすみだからりょこうしよう。', meaning: 'Nhân ngày nghỉ hiếm hoi, hãy đi du lịch.' },
  ],

  // ── g23-026: ～そうだ — Nghe nói ──
  'g23-026': [
    { jp: '明日は雨が降るそうだ。', reading: 'あしたはあめがふるそうだ。', meaning: 'Nghe nói ngày mai trời mưa.' },
    { jp: 'この料理はおいしそうだ。', reading: 'このりょうりはおいしそうだ。', meaning: 'Món ăn này trông có vẻ ngon.' },
  ],

  // ── g23-027: 好きだ (すきだ) — Thích ──
  'g23-027': [
    { jp: '音楽を聴くのが好きだ。', reading: 'おんがくをきくのがすきだ。', meaning: 'Tôi thích nghe nhạc.' },
    { jp: '日本料理が大好きです。', reading: 'にほんりょうりがだいすきです。', meaning: 'Tôi rất thích đồ ăn Nhật.' },
  ],

  // ── g23-028: ～たり～たりする — Làm những việc như ──
  'g23-028': [
    { jp: '週末は映画を見たり、買い物をしたりします。', reading: 'しゅうまつはえいがをみたり、かいものをしたりします。', meaning: 'Cuối tuần tôi xem phim rồi đi mua sắm.' },
    { jp: '天気が良かったり悪かったりする。', reading: 'てんきがよかったりわるかったりする。', meaning: 'Thời tiết lúc tốt lúc xấu.' },
  ],

  // ── g23-029: 分かる (わかる) — Hiểu ──
  'g23-029': [
    { jp: '日本語が分かりますか。', reading: 'にほんごがわかりますか。', meaning: 'Bạn hiểu tiếng Nhật không?' },
    { jp: '理由が分かった。', reading: 'りゆうがわかった。', meaning: 'Tôi đã hiểu lý do rồi.' },
  ],

  // ── g23-030: ～ずつ — Mỗi ──
  'g23-030': [
    { jp: '少しずつ上手になった。', reading: 'すこしずつじょうずになった。', meaning: 'Giỏi lên dần dần từng chút.' },
    { jp: '一人ずつ名前を言ってください。', reading: 'ひとりずつなまえをいってください。', meaning: 'Hãy nói tên từng người một.' },
  ],

  // ── g23-031: ～あいだ — Trong lúc ──
  'g23-031': [
    { jp: '母が寝ている間に掃除した。', reading: 'ははがねているあいだにそうじした。', meaning: 'Tôi dọn dẹp trong lúc mẹ ngủ.' },
    { jp: '日本にいる間に富士山に登りたい。', reading: 'にほんにいるあいだにふじさんにのぼりたい。', meaning: 'Muốn leo núi Phú Sĩ trong lúc còn ở Nhật.' },
  ],

  // ── g23-032: あえて — Dám; cố tình ──
  'g23-032': [
    { jp: 'あえて言わせてもらえば、反対です。', reading: 'あえていわせてもらえば、はんたいです。', meaning: 'Nếu cho phép tôi dám nói, tôi phản đối.' },
    { jp: '彼はあえて危険な道を選んだ。', reading: 'かれはあえてきけんなみちをえらんだ。', meaning: 'Anh ấy cố tình chọn con đường nguy hiểm.' },
  ],

  // ── g23-033: ～あるまじき — Không xứng đáng ──
  'g23-033': [
    { jp: '教師にあるまじき行為だ。', reading: 'きょうしにあるまじきこういだ。', meaning: 'Đó là hành vi không xứng với giáo viên.' },
    { jp: '社会人にあるまじき態度である。', reading: 'しゃかいじんにあるまじきたいどである。', meaning: 'Đó là thái độ không thể chấp nhận đối với người đi làm.' },
  ],

  // ── g23-034: ～あんまり — Không lắm (khẩu ngữ) ──
  'g23-034': [
    { jp: 'あんまり心配しないで。', reading: 'あんまりしんぱいしないで。', meaning: 'Đừng lo lắng quá.' },
    { jp: 'あんまりおいしくなかった。', reading: 'あんまりおいしくなかった。', meaning: 'Không ngon lắm.' },
  ],

  // ── g23-035: ～いかん — Tùy thuộc vào ──
  'g23-035': [
    { jp: '結果のいかんにかかわらず努力は必要だ。', reading: 'けっかのいかんにかかわらずどりょくはひつようだ。', meaning: 'Dù kết quả thế nào thì nỗ lực vẫn cần thiết.' },
    { jp: '成績いかんでは留年もありうる。', reading: 'せいせきいかんではりゅうねんもありうる。', meaning: 'Tùy thành tích mà có thể bị lưu ban.' },
  ],

  // ── g23-036: いくら～ても — Dù bao nhiêu ──
  'g23-036': [
    { jp: 'いくら説明しても分かってくれない。', reading: 'いくらせつめいしてもわかってくれない。', meaning: 'Dù giải thích bao nhiêu cũng không hiểu.' },
    { jp: 'いくら食べてもまだお腹がすく。', reading: 'いくらたべてもまだおなかがすく。', meaning: 'Dù ăn bao nhiêu vẫn còn đói.' },
  ],

  // ── g23-037: ～いご — Sau; từ... trở đi ──
  'g23-037': [
    { jp: '三月以後は暖かくなる。', reading: 'さんがついごはあたたかくなる。', meaning: 'Từ tháng 3 trở đi sẽ ấm lên.' },
    { jp: '卒業以後、会っていない。', reading: 'そつぎょういご、あっていない。', meaning: 'Sau khi tốt nghiệp, chưa gặp nhau.' },
  ],

  // ── g23-038: いささか — Một chút ──
  'g23-038': [
    { jp: 'いささか困惑している。', reading: 'いささかこんわくしている。', meaning: 'Tôi hơi bối rối.' },
    { jp: 'その意見にはいささか疑問がある。', reading: 'そのいけんにはいささかぎもんがある。', meaning: 'Tôi có chút nghi ngờ về ý kiến đó.' },
  ],

  // ── g23-039: ～いじょう — Hơn; vì đã ──
  'g23-039': [
    { jp: '約束した以上、守らなければならない。', reading: 'やくそくしたいじょう、まもらなければならない。', meaning: 'Đã hứa rồi thì phải giữ lời.' },
    { jp: '百人以上の参加者がいた。', reading: 'ひゃくにんいじょうのさんかしゃがいた。', meaning: 'Có hơn 100 người tham gia.' },
  ],

  // ── g23-040: いずれ — Rồi sẽ ──
  'g23-040': [
    { jp: 'いずれ真実は明らかになる。', reading: 'いずれしんじつはあきらかになる。', meaning: 'Rồi sẽ đến lúc sự thật được sáng tỏ.' },
    { jp: 'いずれにしても決断しなければならない。', reading: 'いずれにしてもけつだんしなければならない。', meaning: 'Dù sao đi nữa cũng phải quyết định.' },
  ],

  // ── g23-041: いぜん — Trước đây; vẫn còn ──
  'g23-041': [
    { jp: '以前、東京に住んでいた。', reading: 'いぜん、とうきょうにすんでいた。', meaning: 'Trước đây tôi sống ở Tokyo.' },
    { jp: '問題は依然として解決されていない。', reading: 'もんだいはいぜんとしてかいけつされていない。', meaning: 'Vấn đề vẫn chưa được giải quyết.' },
  ],

  // ── g23-042: ～いたり — Đến mức ──
  'g23-042': [
    { jp: '事態は最悪の状態に至った。', reading: 'じたいはさいあくのじょうたいにいたった。', meaning: 'Tình hình đã đến mức tệ nhất.' },
    { jp: '合意に至るまで議論を続けた。', reading: 'ごういにいたるまでぎろんをつづけた。', meaning: 'Đã tiếp tục thảo luận cho đến khi đạt được đồng thuận.' },
  ],

  // ── g23-043: いちど — Một lần ──
  'g23-043': [
    { jp: '一度日本に行ってみたい。', reading: 'いちどにほんにいってみたい。', meaning: 'Muốn thử đi Nhật một lần.' },
    { jp: '一度決めたらやめない。', reading: 'いちどきめたらやめない。', meaning: 'Đã quyết định một lần thì không bỏ.' },
  ],

  // ── g23-044: いつか — Lúc nào đó ──
  'g23-044': [
    { jp: 'いつか必ず夢を叶える。', reading: 'いつかかならずゆめをかなえる。', meaning: 'Nhất định một ngày nào đó sẽ thực hiện ước mơ.' },
    { jp: 'いつか会えるといいですね。', reading: 'いつかあえるといいですね。', meaning: 'Mong rằng lúc nào đó sẽ gặp nhau.' },
  ],

  // ── g23-045: いっさい — Toàn bộ ──
  'g23-045': [
    { jp: '一切の責任を負います。', reading: 'いっさいのせきにんをおいます。', meaning: 'Tôi chịu toàn bộ trách nhiệm.' },
    { jp: 'お酒は一切飲みません。', reading: 'おさけはいっさいのみません。', meaning: 'Tôi hoàn toàn không uống rượu.' },
  ],

  // ── g23-046: いっそ — Thà; chi bằng ──
  'g23-046': [
    { jp: 'こんなに大変なら、いっそやめたい。', reading: 'こんなにたいへんなら、いっそやめたい。', meaning: 'Nếu vất vả đến thế thì thà nghỉ đi.' },
    { jp: 'いっそのこと海外に行こうか。', reading: 'いっそのことかいがいにいこうか。', meaning: 'Chi bằng đi nước ngoài luôn đi.' },
  ],

  // ── g23-047: ～いっぽう — Một mặt ──
  'g23-047': [
    { jp: '経済は成長する一方、格差も広がっている。', reading: 'けいざいはせいちょうするいっぽう、かくさもひろがっている。', meaning: 'Kinh tế phát triển, nhưng mặt khác khoảng cách giàu nghèo cũng tăng.' },
    { jp: '人口が減る一方だ。', reading: 'じんこうがへるいっぽうだ。', meaning: 'Dân số cứ giảm mãi.' },
  ],

  // ── g23-048: いまごろ — Giờ này ──
  'g23-048': [
    { jp: '彼は今頃もう寝ているだろう。', reading: 'かれはいまごろもうねているだろう。', meaning: 'Giờ này anh ấy chắc đã ngủ rồi.' },
    { jp: '今頃言っても遅い。', reading: 'いまごろいってもおそい。', meaning: 'Giờ mới nói thì đã muộn rồi.' },
  ],

  // ── g23-049: いまさら — Bây giờ mới ──
  'g23-049': [
    { jp: '今さら謝っても遅い。', reading: 'いまさらあやまってもおそい。', meaning: 'Bây giờ mới xin lỗi thì đã muộn.' },
    { jp: '今さら何を言っているんだ。', reading: 'いまさらなにをいっているんだ。', meaning: 'Giờ còn nói gì nữa.' },
  ],

  // ── g23-050: いまだ — Vẫn chưa ──
  'g23-050': [
    { jp: '犯人は未だに捕まっていない。', reading: 'はんにんはいまだにつかまっていない。', meaning: 'Thủ phạm vẫn chưa bị bắt.' },
    { jp: '未だかつてない大雪だ。', reading: 'いまだかつてないおおゆきだ。', meaning: 'Tuyết lớn chưa từng thấy.' },
  ],

  // ── g23-051: ～いらい — Kể từ ──
  'g23-051': [
    { jp: '卒業以来、彼には会っていない。', reading: 'そつぎょういらい、かれにはあっていない。', meaning: 'Kể từ khi tốt nghiệp, tôi chưa gặp anh ấy.' },
    { jp: '来日以来、ずっと東京に住んでいる。', reading: 'らいにちいらい、ずっととうきょうにすんでいる。', meaning: 'Kể từ khi đến Nhật, tôi sống ở Tokyo suốt.' },
  ],

  // ── g23-052: いわゆる～ — Cái gọi là ──
  'g23-052': [
    { jp: 'これがいわゆる「おもてなし」だ。', reading: 'これがいわゆる「おもてなし」だ。', meaning: 'Đây chính là cái gọi là "omotenashi".' },
    { jp: 'いわゆるブラック企業で働いている。', reading: 'いわゆるブラックきぎょうではたらいている。', meaning: 'Tôi đang làm việc ở công ty được gọi là "đen" (bóc lột).' },
  ],

  // ── g23-053: ～うえ — Hơn nữa; sau khi ──
  'g23-053': [
    { jp: 'よく考えた上で決めます。', reading: 'よくかんがえたうえできめます。', meaning: 'Tôi sẽ quyết định sau khi suy nghĩ kỹ.' },
    { jp: '彼は頭がいい上に、性格もいい。', reading: 'かれはあたまがいいうえに、せいかくもいい。', meaning: 'Anh ấy thông minh, hơn nữa tính cách cũng tốt.' },
  ],

  // ── g23-054: ～うる — Có thể ──
  'g23-054': [
    { jp: 'そんなことはありうる。', reading: 'そんなことはありうる。', meaning: 'Chuyện đó có thể xảy ra.' },
    { jp: '考えうる最善の方法だ。', reading: 'かんがえうるさいぜんのほうほうだ。', meaning: 'Đây là phương pháp tốt nhất có thể nghĩ ra.' },
  ],

  // ── g23-055: お...いたす — Kính ngữ khiêm nhường (trang trọng) ──
  'g23-055': [
    { jp: 'ご案内いたします。', reading: 'ごあんないいたします。', meaning: 'Tôi xin hướng dẫn.' },
    { jp: 'お荷物をお預かりいたします。', reading: 'おにもつをおあずかりいたします。', meaning: 'Tôi xin giữ hành lý cho quý khách.' },
  ],

  // ── g23-056: お...する — Kính ngữ khiêm nhường ──
  'g23-056': [
    { jp: '先生に本をお返しする。', reading: 'せんせいにほんをおかえしする。', meaning: 'Tôi trả sách cho thầy giáo.' },
    { jp: 'お客様をお見送りします。', reading: 'おきゃくさまをおみおくりします。', meaning: 'Tôi xin tiễn quý khách.' },
  ],

  // ── g23-057: おそらく — Có lẽ ──
  'g23-057': [
    { jp: 'おそらく明日は雨だろう。', reading: 'おそらくあしたはあめだろう。', meaning: 'Có lẽ ngày mai trời mưa.' },
    { jp: 'おそらく彼は来ないと思う。', reading: 'おそらくかれはこないとおもう。', meaning: 'Có lẽ anh ấy sẽ không đến.' },
  ],

  // ── g23-058: ～および — Và (trang trọng) ──
  'g23-058': [
    { jp: '学生および教職員は参加してください。', reading: 'がくせいおよびきょうしょくいんはさんかしてください。', meaning: 'Học sinh và giáo viên xin hãy tham gia.' },
    { jp: '名前および住所を記入してください。', reading: 'なまえおよびじゅうしょをきにゅうしてください。', meaning: 'Hãy điền tên và địa chỉ.' },
  ],

  // ── g23-059: ～おり — Khi; dịp ──
  'g23-059': [
    { jp: 'お会いした折にお話しします。', reading: 'おあいしたおりにおはなしします。', meaning: 'Tôi sẽ nói khi gặp mặt.' },
    { jp: 'その折はお世話になりました。', reading: 'そのおりはおせわになりました。', meaning: 'Lần đó đã được anh giúp đỡ.' },
  ],

  // ── g23-060: かえって — Ngược lại ──
  'g23-060': [
    { jp: '薬を飲んだらかえって悪くなった。', reading: 'くすりをのんだらかえってわるくなった。', meaning: 'Uống thuốc xong ngược lại còn tệ hơn.' },
    { jp: '手伝おうとしたらかえって邪魔になった。', reading: 'てつだおうとしたらかえってじゃまになった。', meaning: 'Định giúp mà ngược lại còn gây cản trở.' },
  ],

  // ── g23-061: ～かえる — Thay đổi ──
  'g23-061': [
    { jp: '計画を立て替える。', reading: 'けいかくをたてかえる。', meaning: 'Lập lại kế hoạch.' },
    { jp: '言い換えれば、問題は予算だ。', reading: 'いいかえれば、もんだいはよさんだ。', meaning: 'Nói cách khác, vấn đề là ngân sách.' },
  ],

  // ── g23-062: ～かぎり — Miễn là ──
  'g23-062': [
    { jp: '知っている限り教えます。', reading: 'しっているかぎりおしえます。', meaning: 'Tôi sẽ dạy trong phạm vi tôi biết.' },
    { jp: '命ある限り戦う。', reading: 'いのちあるかぎりたたかう。', meaning: 'Chừng nào còn sống thì còn chiến đấu.' },
  ],

  // ── g23-063: ～にかぎる — Nhất; chỉ có ──
  'g23-063': [
    { jp: '夏はビールに限る。', reading: 'なつはビールにかぎる。', meaning: 'Mùa hè thì nhất phải uống bia.' },
    { jp: '会員に限り入場できます。', reading: 'かいいんにかぎりにゅうじょうできます。', meaning: 'Chỉ hội viên mới được vào.' },
  ],

  // ── g23-064: ～かける — Bắt đầu; đang dở ──
  'g23-064': [
    { jp: '何か言いかけてやめた。', reading: 'なにかいいかけてやめた。', meaning: 'Định nói gì đó rồi thôi.' },
    { jp: '読みかけの本がある。', reading: 'よみかけのほんがある。', meaning: 'Có cuốn sách đang đọc dở.' },
  ],

  // ── g23-065: ～かたわら — Bên cạnh; một mặt ──
  'g23-065': [
    { jp: '仕事のかたわら、小説を書いている。', reading: 'しごとのかたわら、しょうせつをかいている。', meaning: 'Bên cạnh công việc, tôi còn viết tiểu thuyết.' },
    { jp: '勉強のかたわらアルバイトもしている。', reading: 'べんきょうのかたわらアルバイトもしている。', meaning: 'Bên cạnh việc học, tôi còn làm thêm.' },
  ],

  // ── g23-066: ～かつ — Đồng thời ──
  'g23-066': [
    { jp: '簡単かつ便利な方法だ。', reading: 'かんたんかつべんりなほうほうだ。', meaning: 'Đây là phương pháp đơn giản đồng thời tiện lợi.' },
    { jp: '彼は厳しくかつ優しい先生だ。', reading: 'かれはきびしくかつやさしいせんせいだ。', meaning: 'Anh ấy là thầy giáo vừa nghiêm khắc vừa dịu dàng.' },
  ],

  // ── g23-067: かつて — Từng ──
  'g23-067': [
    { jp: 'ここにはかつて城があった。', reading: 'ここにはかつてしろがあった。', meaning: 'Nơi đây từng có lâu đài.' },
    { jp: 'かつてない大災害だ。', reading: 'かつてないだいさいがいだ。', meaning: 'Đây là thảm họa chưa từng có.' },
  ],

  // ── g23-068: ～かねる — Khó mà ──
  'g23-068': [
    { jp: 'その要求にはお応えしかねます。', reading: 'そのようきゅうにはおこたえしかねます。', meaning: 'Tôi khó mà đáp ứng yêu cầu đó.' },
    { jp: '彼の行動は理解しかねる。', reading: 'かれのこうどうはりかいしかねる。', meaning: 'Không thể hiểu nổi hành vi của anh ấy.' },
  ],

  // ── g23-069: ～かれ～かれ — Dù... hay... ──
  'g23-069': [
    { jp: '遅かれ早かれ真実は明らかになる。', reading: 'おそかれはやかれしんじつはあきらかになる。', meaning: 'Sớm hay muộn thì sự thật cũng sáng tỏ.' },
    { jp: '多かれ少なかれ影響を受ける。', reading: 'おおかれすくなかれえいきょうをうける。', meaning: 'Ít nhiều cũng bị ảnh hưởng.' },
  ],

  // ── g23-070: ～かろう — Có lẽ (cổ ngữ) ──
  'g23-070': [
    { jp: '彼なら大丈夫であろう。', reading: 'かれならだいじょうぶであろう。', meaning: 'Nếu là anh ấy thì chắc không sao.' },
    { jp: '困難であろうとも諦めない。', reading: 'こんなんであろうともあきらめない。', meaning: 'Dù khó khăn cũng không từ bỏ.' },
  ],

  // ── g23-071: かろうじて — Một cách khó khăn ──
  'g23-071': [
    { jp: 'かろうじて試験に合格した。', reading: 'かろうじてしけんにごうかくした。', meaning: 'Đã đỗ kỳ thi một cách khó khăn.' },
    { jp: 'かろうじて電車に間に合った。', reading: 'かろうじてでんしゃにまにあった。', meaning: 'Vừa vặn kịp tàu.' },
  ],

  // ── g23-072: ～きっかけ — Cơ hội; dịp ──
  'g23-072': [
    { jp: '留学がきっかけで日本語を学び始めた。', reading: 'りゅうがくがきっかけでにほんごをまなびはじめた。', meaning: 'Nhân dịp du học mà bắt đầu học tiếng Nhật.' },
    { jp: '何がきっかけで転職しましたか。', reading: 'なにがきっかけでてんしょくしましたか。', meaning: 'Lý do gì khiến bạn đổi việc?' },
  ],

  // ── g23-073: ～ぎみ — Hơi; có dấu hiệu ──
  'g23-073': [
    { jp: '最近、疲れ気味だ。', reading: 'さいきん、つかれぎみだ。', meaning: 'Gần đây hơi mệt mỏi.' },
    { jp: '風邪気味なので早く寝ます。', reading: 'かぜぎみなのではやくねます。', meaning: 'Có dấu hiệu cảm nên sẽ ngủ sớm.' },
  ],

  // ── g23-074: ～きり — Chỉ; kể từ... mà ──
  'g23-074': [
    { jp: '彼とは一度会ったきり会っていない。', reading: 'かれとはいちどあったきりあっていない。', meaning: 'Chỉ gặp anh ta một lần rồi không gặp lại.' },
    { jp: '二人きりで話したい。', reading: 'ふたりきりではなしたい。', meaning: 'Muốn nói chuyện chỉ hai người thôi.' },
  ],

  // ── g23-075: ～のきわみ — Cực độ ──
  'g23-075': [
    { jp: '光栄の極みです。', reading: 'こうえいのきわみです。', meaning: 'Vinh hạnh vô cùng.' },
    { jp: '贅沢の極みだ。', reading: 'ぜいたくのきわみだ。', meaning: 'Xa hoa tột đỉnh.' },
  ],

  // ── g23-076: ～くさい — Có vẻ ──
  'g23-076': [
    { jp: 'あの話は嘘くさい。', reading: 'あのはなしはうそくさい。', meaning: 'Câu chuyện đó có vẻ giả.' },
    { jp: '面倒くさいけどやるしかない。', reading: 'めんどうくさいけどやるしかない。', meaning: 'Có vẻ phiền phức nhưng phải làm thôi.' },
  ],

  // ── g23-077: くわえて — Thêm vào đó ──
  'g23-077': [
    { jp: '給料が低い。加えて残業も多い。', reading: 'きゅうりょうがひくい。くわえてざんぎょうもおおい。', meaning: 'Lương thấp. Thêm vào đó, tăng ca cũng nhiều.' },
    { jp: '雨に加えて風も強くなった。', reading: 'あめにくわえてかぜもつよくなった。', meaning: 'Ngoài mưa, gió cũng mạnh thêm.' },
  ],

  // ── g23-078: ～けっか — Kết quả ──
  'g23-078': [
    { jp: '調査の結果、原因が分かった。', reading: 'ちょうさのけっか、げんいんがわかった。', meaning: 'Kết quả điều tra, đã tìm ra nguyên nhân.' },
    { jp: '努力した結果、合格できた。', reading: 'どりょくしたけっか、ごうかくできた。', meaning: 'Kết quả của sự nỗ lực, đã đỗ được.' },
  ],

  // ── g23-079: けっきょく — Rốt cuộc ──
  'g23-079': [
    { jp: '結局、何も変わらなかった。', reading: 'けっきょく、なにもかわらなかった。', meaning: 'Rốt cuộc, chẳng có gì thay đổi.' },
    { jp: '結局、自分でやるしかない。', reading: 'けっきょく、じぶんでやるしかない。', meaning: 'Cuối cùng chỉ có thể tự mình làm.' },
  ],

  // ── g23-080: げんざい — Hiện tại ──
  'g23-080': [
    { jp: '現在、調査中です。', reading: 'げんざい、ちょうさちゅうです。', meaning: 'Hiện tại đang trong quá trình điều tra.' },
    { jp: '現在の日本の人口は約1億2千万だ。', reading: 'げんざいのにほんのじんこうはやくいちおくにせんまんだ。', meaning: 'Dân số Nhật hiện tại khoảng 120 triệu.' },
  ],

  // ── g23-081: ～こそ — Chính; mới là ──
  'g23-081': [
    { jp: 'こちらこそよろしくお願いします。', reading: 'こちらこそよろしくおねがいします。', meaning: 'Chính tôi mới phải nhờ anh giúp đỡ.' },
    { jp: '今度こそ成功する。', reading: 'こんどこそせいこうする。', meaning: 'Lần này chính là lần sẽ thành công.' },
  ],

  // ── g23-082: ～こむ — Vào trong; kỹ ──
  'g23-082': [
    { jp: '電車に乗り込んだ。', reading: 'でんしゃにのりこんだ。', meaning: 'Đã lên tàu.' },
    { jp: '彼女は考え込んでいる。', reading: 'かのじょはかんがえこんでいる。', meaning: 'Cô ấy đang suy nghĩ sâu.' },
  ],

  // ── g23-083: ごらん — Hãy xem ──
  'g23-083': [
    { jp: 'ごらんください、きれいな景色ですよ。', reading: 'ごらんください、きれいなけしきですよ。', meaning: 'Hãy nhìn xem, phong cảnh đẹp lắm.' },
    { jp: 'やってごらん。', reading: 'やってごらん。', meaning: 'Hãy thử làm xem.' },
  ],

  // ── g23-084: さあ — Nào ──
  'g23-084': [
    { jp: 'さあ、始めましょう。', reading: 'さあ、はじめましょう。', meaning: 'Nào, bắt đầu thôi.' },
    { jp: 'さあ、分かりません。', reading: 'さあ、わかりません。', meaning: 'Hmm, tôi không biết.' },
  ],

  // ── g23-085: ～さいちゅう — Đang giữa lúc ──
  'g23-085': [
    { jp: '会議の最中に電話が鳴った。', reading: 'かいぎのさいちゅうにでんわがなった。', meaning: 'Điện thoại reo giữa cuộc họp.' },
    { jp: '食事の最中に話しかけないで。', reading: 'しょくじのさいちゅうにはなしかけないで。', meaning: 'Đừng nói chuyện giữa bữa ăn.' },
  ],

  // ── g23-086: さっぱり — Hoàn toàn (không) ──
  'g23-086': [
    { jp: 'さっぱり分からない。', reading: 'さっぱりわからない。', meaning: 'Hoàn toàn không hiểu.' },
    { jp: 'シャワーを浴びてさっぱりした。', reading: 'シャワーをあびてさっぱりした。', meaning: 'Tắm xong cảm thấy sảng khoái.' },
  ],

  // ── g23-087: さて — Vậy thì ──
  'g23-087': [
    { jp: 'さて、次の話題に入りましょう。', reading: 'さて、つぎのわだいにはいりましょう。', meaning: 'Vậy, hãy chuyển sang chủ đề tiếp theo.' },
    { jp: 'さて、どうしようか。', reading: 'さて、どうしようか。', meaning: 'Nào, giờ sẽ làm gì đây?' },
  ],

  // ── g23-088: じゃあ — Vậy thì ──
  'g23-088': [
    { jp: 'じゃあ、また明日。', reading: 'じゃあ、またあした。', meaning: 'Vậy thì, ngày mai gặp lại.' },
    { jp: 'じゃあ、行こうか。', reading: 'じゃあ、いこうか。', meaning: 'Thế thì đi thôi.' },
  ],

  // ── g23-089: ～じゅう — Suốt; khắp ──
  'g23-089': [
    { jp: '一日中雨が降っていた。', reading: 'いちにちじゅうあめがふっていた。', meaning: 'Mưa suốt cả ngày.' },
    { jp: '世界中で有名だ。', reading: 'せかいじゅうでゆうめいだ。', meaning: 'Nổi tiếng khắp thế giới.' },
  ],

  // ── g23-090: ～じょう — Về mặt ──
  'g23-090': [
    { jp: '法律上は問題ない。', reading: 'ほうりつじょうはもんだいない。', meaning: 'Về mặt pháp luật thì không có vấn đề.' },
    { jp: '歴史上最も偉大な発明だ。', reading: 'れきしじょうもっともいだいなはつめいだ。', meaning: 'Phát minh vĩ đại nhất trong lịch sử.' },
  ],

  // ── g23-091: すぐ — Ngay lập tức ──
  'g23-091': [
    { jp: 'すぐに来てください。', reading: 'すぐにきてください。', meaning: 'Hãy đến ngay.' },
    { jp: '駅はすぐそこです。', reading: 'えきはすぐそこです。', meaning: 'Nhà ga ở ngay đây thôi.' },
  ],

  // ── g23-092: ～ずくめ — Toàn là ──
  'g23-092': [
    { jp: '今年はいいことずくめだ。', reading: 'ことしはいいことずくめだ。', meaning: 'Năm nay toàn chuyện tốt.' },
    { jp: '黒ずくめの服を着ている。', reading: 'くろずくめのふくをきている。', meaning: 'Mặc toàn đồ đen.' },
  ],

  // ── g23-093: ～ですむ — Xong; chỉ cần ──
  'g23-093': [
    { jp: '謝るだけで済む問題ではない。', reading: 'あやまるだけですむもんだいではない。', meaning: 'Đây không phải vấn đề mà chỉ xin lỗi là xong.' },
    { jp: '千円で済んだ。', reading: 'せんえんですんだ。', meaning: 'Chỉ tốn một nghìn yên thôi.' },
  ],

  // ── g23-094: ～すら — Ngay cả ──
  'g23-094': [
    { jp: '名前すら知らない。', reading: 'なまえすらしらない。', meaning: 'Ngay cả tên cũng không biết.' },
    { jp: '子供ですら分かることだ。', reading: 'こどもですらわかることだ。', meaning: 'Ngay cả trẻ con cũng biết.' },
  ],

  // ── g23-095: せいぜい — Nhiều lắm ──
  'g23-095': [
    { jp: 'せいぜい頑張ってください。', reading: 'せいぜいがんばってください。', meaning: 'Hãy cố gắng hết sức.' },
    { jp: '参加者はせいぜい二十人だろう。', reading: 'さんかしゃはせいぜいにじゅうにんだろう。', meaning: 'Người tham gia nhiều lắm là 20 người.' },
  ],

  // ── g23-096: ぜひ — Nhất định ──
  'g23-096': [
    { jp: 'ぜひ遊びに来てください。', reading: 'ぜひあそびにきてください。', meaning: 'Nhất định hãy đến chơi nhé.' },
    { jp: 'ぜひ一度食べてみてください。', reading: 'ぜひいちどたべてみてください。', meaning: 'Nhất định hãy thử ăn một lần.' },
  ],

  // ── g23-097: せめて — Ít nhất ──
  'g23-097': [
    { jp: 'せめて電話くらいしてほしい。', reading: 'せめてでんわくらいしてほしい。', meaning: 'Ít nhất thì cũng gọi điện một cái chứ.' },
    { jp: 'せめてあと一日あれば。', reading: 'せめてあといちにちあれば。', meaning: 'Giá mà ít nhất có thêm một ngày.' },
  ],

  // ── g23-098: それこそ — Đúng là ──
  'g23-098': [
    { jp: 'それこそ本末転倒だ。', reading: 'それこそほんまつてんとうだ。', meaning: 'Đúng là đặt cái xe trước con ngựa.' },
    { jp: '失敗したらそれこそ大変だ。', reading: 'しっぱいしたらそれこそたいへんだ。', meaning: 'Nếu thất bại thì đúng là gay go.' },
  ],

  // ── g23-099: それゆえ — Vì vậy ──
  'g23-099': [
    { jp: '彼は努力した。それゆえ成功したのだ。', reading: 'かれはどりょくした。それゆえせいこうしたのだ。', meaning: 'Anh ấy đã nỗ lực. Vì vậy mà thành công.' },
    { jp: '我思う、それゆえ我あり。', reading: 'われおもう、それゆえわれあり。', meaning: 'Tôi nghĩ, vì vậy tôi tồn tại.' },
  ],

  // ── g23-100: たかだか — Nhiều lắm ──
  'g23-100': [
    { jp: 'たかだか千円のことで怒るな。', reading: 'たかだかせんえんのことでおこるな。', meaning: 'Đừng giận vì chuyện chẳng qua chỉ có 1000 yên.' },
    { jp: 'たかだか一時間の遅れだ。', reading: 'たかだかいちじかんのおくれだ。', meaning: 'Chỉ trễ có một tiếng thôi.' },
  ],

  // ── g23-101: ～たっけ — ... nhỉ (hồi tưởng) ──
  'g23-101': [
    { jp: '明日は何曜日だったっけ？', reading: 'あしたはなんようびだったっけ？', meaning: 'Ngày mai là thứ mấy nhỉ?' },
    { jp: '彼の名前は何だったっけ。', reading: 'かれのなまえはなんだったっけ。', meaning: 'Tên anh ấy là gì nhỉ?' },
  ],

  // ── g23-102: だって — Nhưng; tại vì ──
  'g23-102': [
    { jp: 'だって、仕方がないでしょう。', reading: 'だって、しかたがないでしょう。', meaning: 'Tại vì, biết làm sao được chứ.' },
    { jp: '子供だって分かるよ。', reading: 'こどもだってわかるよ。', meaning: 'Ngay cả trẻ con cũng hiểu.' },
  ],

  // ── g23-103: ～たて — Vừa mới xong ──
  'g23-103': [
    { jp: '焼きたてのパンはおいしい。', reading: 'やきたてのパンはおいしい。', meaning: 'Bánh mì vừa nướng xong rất ngon.' },
    { jp: '生まれたての赤ちゃん。', reading: 'うまれたてのあかちゃん。', meaning: 'Em bé vừa mới sinh.' },
  ],

  // ── g23-104: たぶん — Có lẽ ──
  'g23-104': [
    { jp: 'たぶん大丈夫だと思います。', reading: 'たぶんだいじょうぶだとおもいます。', meaning: 'Có lẽ không sao đâu.' },
    { jp: '彼はたぶん来ないだろう。', reading: 'かれはたぶんこないだろう。', meaning: 'Anh ấy có lẽ sẽ không đến.' },
  ],

  // ── g23-105: ～だらけ — Đầy (tiêu cực) ──
  'g23-105': [
    { jp: '部屋はゴミだらけだ。', reading: 'へやはゴミだらけだ。', meaning: 'Phòng toàn rác.' },
    { jp: '間違いだらけの報告書。', reading: 'まちがいだらけのほうこくしょ。', meaning: 'Bản báo cáo toàn lỗi.' },
  ],

  // ── g23-106: ～たる — Với tư cách là ──
  'g23-106': [
    { jp: '教師たる者、模範を示すべきだ。', reading: 'きょうしたるもの、もはんをしめすべきだ。', meaning: 'Với tư cách là giáo viên, phải làm gương.' },
    { jp: '国民たる義務を果たす。', reading: 'こくみんたるぎむをはたす。', meaning: 'Thực hiện nghĩa vụ với tư cách công dân.' },
  ],

  // ── g23-107: ～たろう — Có lẽ đã (cổ ngữ) ──
  'g23-107': [
    { jp: '彼も苦しかったろう。', reading: 'かれもくるしかったろう。', meaning: 'Chắc anh ấy cũng đã khổ sở.' },
    { jp: '寂しかったろうに。', reading: 'さびしかったろうに。', meaning: 'Chắc đã rất cô đơn.' },
  ],

  // ── g23-108: ～ちゅう — Trong; đang ──
  'g23-108': [
    { jp: '工事中です。', reading: 'こうじちゅうです。', meaning: 'Đang thi công.' },
    { jp: '営業時間中にお電話ください。', reading: 'えいぎょうじかんちゅうにおでんわください。', meaning: 'Hãy gọi điện trong giờ làm việc.' },
  ],

  // ── g23-109: ～つ...～つ — Vừa... vừa (luân phiên) ──
  'g23-109': [
    { jp: '持ちつ持たれつの関係だ。', reading: 'もちつもたれつのかんけいだ。', meaning: 'Mối quan hệ giúp đỡ lẫn nhau.' },
    { jp: '行きつ戻りつしている。', reading: 'いきつもどりつしている。', meaning: 'Cứ đi rồi lại quay lại.' },
  ],

  // ── g23-110: ～っきり — Kể từ; chỉ ──
  'g23-110': [
    { jp: '出かけたっきり帰ってこない。', reading: 'でかけたっきりかえってこない。', meaning: 'Đi rồi không quay về.' },
    { jp: '二人っきりになりたい。', reading: 'ふたりっきりになりたい。', meaning: 'Muốn ở riêng hai người.' },
  ],

  // ── g23-111: ～っけ — ... nhỉ (nhớ lại) ──
  'g23-111': [
    { jp: '今日は何日だっけ？', reading: 'きょうはなんにちだっけ？', meaning: 'Hôm nay là ngày mấy nhỉ?' },
    { jp: 'あの店、どこにあったっけ？', reading: 'あのみせ、どこにあったっけ？', meaning: 'Cửa hàng đó ở đâu nhỉ?' },
  ],

  // ── g23-112: ～っぽい — Có vẻ; hay ──
  'g23-112': [
    { jp: '彼は怒りっぽい人だ。', reading: 'かれはおこりっぽいひとだ。', meaning: 'Anh ấy là người hay nóng giận.' },
    { jp: '最近忘れっぽくなった。', reading: 'さいきんわすれっぽくなった。', meaning: 'Gần đây hay quên.' },
  ],

  // ── g23-113: つまり — Tức là ──
  'g23-113': [
    { jp: 'つまり、賛成ということですね。', reading: 'つまり、さんせいということですね。', meaning: 'Tức là bạn đồng ý phải không?' },
    { jp: 'つまりこういうことだ。', reading: 'つまりこういうことだ。', meaning: 'Nói tóm lại là thế này.' },
  ],

  // ── g23-114: ～て...～て — Cứ... mãi ──
  'g23-114': [
    { jp: '暑くて暑くてたまらない。', reading: 'あつくてあつくてたまらない。', meaning: 'Nóng quá nóng quá chịu không nổi.' },
    { jp: 'おかしくておかしくて笑いが止まらない。', reading: 'おかしくておかしくてわらいがとまらない。', meaning: 'Buồn cười quá không ngừng cười được.' },
  ],

  // ── g23-115: ～ていい — Được; cho phép ──
  'g23-115': [
    { jp: 'ここに座っていいですか。', reading: 'ここにすわっていいですか。', meaning: 'Có thể ngồi đây được không?' },
    { jp: '帰ってもいいですよ。', reading: 'かえってもいいですよ。', meaning: 'Bạn có thể về được rồi.' },
  ],

  // ── g23-116: ～てくれ — Hãy làm cho tôi ──
  'g23-116': [
    { jp: 'ちょっと手伝ってくれ。', reading: 'ちょってつだってくれ。', meaning: 'Giúp tôi một chút.' },
    { jp: '静かにしてくれ。', reading: 'しずかにしてくれ。', meaning: 'Im lặng đi.' },
  ],

  // ── g23-117: ～てこそ — Chính nhờ... mới ──
  'g23-117': [
    { jp: '失敗してこそ成長できる。', reading: 'しっぱいしてこそせいちょうできる。', meaning: 'Chính nhờ thất bại mới có thể trưởng thành.' },
    { jp: '努力してこそ結果が出る。', reading: 'どりょくしてこそけっかがでる。', meaning: 'Chính nhờ nỗ lực mới có kết quả.' },
  ],

  // ── g23-118: ～てちょうだい — Hãy... (nữ, thân mật) ──
  'g23-118': [
    { jp: 'ちょっと待ってちょうだい。', reading: 'ちょっとまってちょうだい。', meaning: 'Đợi một chút đi.' },
    { jp: '手伝ってちょうだい。', reading: 'てつだってちょうだい。', meaning: 'Giúp mình đi.' },
  ],

  // ── g23-119: ～てん — Về mặt; điểm ──
  'g23-119': [
    { jp: 'その点については同意します。', reading: 'そのてんについてはどういします。', meaning: 'Về điểm đó, tôi đồng ý.' },
    { jp: '安全性の点で問題がある。', reading: 'あんぜんせいのてんでもんだいがある。', meaning: 'Có vấn đề về mặt an toàn.' },
  ],

  // ── g23-120: どうせ — Dù sao ──
  'g23-120': [
    { jp: 'どうせ行くなら早く行こう。', reading: 'どうせいくならはやくいこう。', meaning: 'Dù sao cũng đi thì đi sớm đi.' },
    { jp: 'どうせ無理だろう。', reading: 'どうせむりだろう。', meaning: 'Dù sao cũng không được đâu.' },
  ],

  // ── g23-121: ～どうぜん — Cũng giống ──
  'g23-121': [
    { jp: '彼はまだ子供同然だ。', reading: 'かれはまだこどもどうぜんだ。', meaning: 'Anh ấy vẫn cũng giống trẻ con.' },
    { jp: '死んだも同然だ。', reading: 'しんだもどうぜんだ。', meaning: 'Coi như đã chết rồi.' },
  ],

  // ── g23-122: どうりで — Thảo nào ──
  'g23-122': [
    { jp: 'どうりで寒いわけだ。雪が降っている。', reading: 'どうりでさむいわけだ。ゆきがふっている。', meaning: 'Thảo nào lạnh thế. Trời đang có tuyết.' },
    { jp: 'どうりで電話に出ないと思った。', reading: 'どうりででんわにでないとおもった。', meaning: 'Thảo nào không nghe điện thoại.' },
  ],

  // ── g23-123: ～どき — Lúc; khi ──
  'g23-123': [
    { jp: 'お花見時は公園が混む。', reading: 'おはなみどきはこうえんがこむ。', meaning: 'Lúc ngắm hoa thì công viên đông.' },
    { jp: '食べ時を逃した。', reading: 'たべどきをのがした。', meaning: 'Đã lỡ mất lúc ăn ngon nhất.' },
  ],

  // ── g23-124: どこか — Đâu đó ──
  'g23-124': [
    { jp: 'どこか静かな所で話しましょう。', reading: 'どこかしずかなところではなしましょう。', meaning: 'Hãy nói chuyện ở đâu đó yên tĩnh.' },
    { jp: '今日はどこかへ行きたい。', reading: 'きょうはどこかへいきたい。', meaning: 'Hôm nay muốn đi đâu đó.' },
  ],

  // ── g23-125: ～ぬ — Phủ định cổ ngữ ──
  'g23-125': [
    { jp: '知らぬ間に時間が過ぎた。', reading: 'しらぬまにじかんがすぎた。', meaning: 'Thời gian trôi lúc không hay biết.' },
    { jp: '見ぬが花。', reading: 'みぬがはな。', meaning: 'Không thấy mới là hoa. (Tưởng tượng đẹp hơn thực tế)' },
  ],

  // ── g23-126: ～ぬき — Không có; bỏ qua ──
  'g23-126': [
    { jp: '朝ごはん抜きで出かけた。', reading: 'あさごはんぬきででかけた。', meaning: 'Đi ra ngoài mà không ăn sáng.' },
    { jp: '冗談抜きで言っている。', reading: 'じょうだんぬきでいっている。', meaning: 'Tôi nói nghiêm túc, không đùa.' },
  ],

  // ── g23-127: ～ぬく — Làm đến cùng ──
  'g23-127': [
    { jp: '最後まで走り抜いた。', reading: 'さいごまではしりぬいた。', meaning: 'Đã chạy đến tận cùng.' },
    { jp: '困難を乗り越えて生き抜いた。', reading: 'こんなんをのりこえていきぬいた。', meaning: 'Đã vượt qua khó khăn và sống sót.' },
  ],

  // ── g23-128: ～をひかえて — Sắp đến; trước thềm ──
  'g23-128': [
    { jp: '試験を控えて緊張している。', reading: 'しけんをひかえてきんちょうしている。', meaning: 'Sắp thi nên đang căng thẳng.' },
    { jp: '出発を控えて準備を進めている。', reading: 'しゅっぱつをひかえてじゅんびをすすめている。', meaning: 'Đang chuẩn bị trước thềm khởi hành.' },
  ],

  // ── g23-129: ～ふう — Kiểu; dạng ──
  'g23-129': [
    { jp: '日本風の庭園だ。', reading: 'にほんふうのていえんだ。', meaning: 'Khu vườn kiểu Nhật.' },
    { jp: 'こんなふうにやってください。', reading: 'こんなふうにやってください。', meaning: 'Hãy làm theo kiểu này.' },
  ],

  // ── g23-130: ～ぶり — Lần đầu sau; phong cách ──
  'g23-130': [
    { jp: '三年ぶりに日本に来た。', reading: 'さんねんぶりににほんにきた。', meaning: 'Lần đầu sau 3 năm đến Nhật.' },
    { jp: '彼の食べっぷりはすごい。', reading: 'かれのたべっぷりはすごい。', meaning: 'Cách ăn của anh ấy thật ấn tượng.' },
  ],

  // ── g23-131: ～ぶる — Giả vờ ──
  'g23-131': [
    { jp: '彼は知ったかぶりをする。', reading: 'かれはしったかぶりをする。', meaning: 'Anh ấy hay giả vờ biết tuốt.' },
    { jp: '大人ぶるな。', reading: 'おとなぶるな。', meaning: 'Đừng giả vờ người lớn.' },
  ],

  // ── g23-132: ～ぶん — Phần; cho ──
  'g23-132': [
    { jp: '三人分の料理を注文した。', reading: 'さんにんぶんのりょうりをちゅうもんした。', meaning: 'Đã gọi đồ ăn cho 3 người.' },
    { jp: '遅れた分、頑張ろう。', reading: 'おくれたぶん、がんばろう。', meaning: 'Trễ bao nhiêu thì cố gắng bù lại bấy nhiêu.' },
  ],

  // ── g23-133: べつだん — Không đặc biệt ──
  'g23-133': [
    { jp: 'べつだん問題はない。', reading: 'べつだんもんだいはない。', meaning: 'Không có vấn đề gì đặc biệt.' },
    { jp: 'べつだん急いでいるわけではない。', reading: 'べつだんいそいでいるわけではない。', meaning: 'Không phải là đang vội đặc biệt gì.' },
  ],

  // ── g23-134: ～ぽい — Có vẻ (khẩu ngữ) ──
  'g23-134': [
    { jp: '子供っぽい行動はやめて。', reading: 'こどもっぽいこうどうはやめて。', meaning: 'Đừng hành động trẻ con nữa.' },
    { jp: '安っぽいものに見える。', reading: 'やすっぽいものにみえる。', meaning: 'Trông có vẻ rẻ tiền.' },
  ],

  // ── g23-135: ～ほうだい — Thoải mái ──
  'g23-135': [
    { jp: '食べ放題のレストランに行った。', reading: 'たべほうだいのレストランにいった。', meaning: 'Tôi đã đi nhà hàng buffet ăn thả ga.' },
    { jp: '飲み放題で三千円です。', reading: 'のみほうだいでさんぜんえんです。', meaning: 'Uống thoải mái giá 3000 yên.' },
  ],

  // ── g23-136: まさか — Không lẽ ──
  'g23-136': [
    { jp: 'まさか合格するとは思わなかった。', reading: 'まさかごうかくするとはおもわなかった。', meaning: 'Không ngờ lại đỗ.' },
    { jp: 'まさか嘘でしょう？', reading: 'まさかうそでしょう？', meaning: 'Không lẽ nói dối chứ?' },
  ],

  // ── g23-137: まず — Trước hết ──
  'g23-137': [
    { jp: 'まず自己紹介をします。', reading: 'まずじこしょうかいをします。', meaning: 'Trước hết, tôi xin tự giới thiệu.' },
    { jp: 'まずは健康が大事だ。', reading: 'まずはけんこうがだいじだ。', meaning: 'Trước tiên, sức khỏe là quan trọng.' },
  ],

  // ── g23-138: また — Lại; cũng ──
  'g23-138': [
    { jp: 'また会いましょう。', reading: 'またあいましょう。', meaning: 'Hẹn gặp lại.' },
    { jp: 'また同じミスをした。', reading: 'またおなじミスをした。', meaning: 'Lại phạm cùng một lỗi.' },
  ],

  // ── g23-139: まったく — Hoàn toàn ──
  'g23-139': [
    { jp: 'まったく分からない。', reading: 'まったくわからない。', meaning: 'Hoàn toàn không hiểu.' },
    { jp: 'まったく困ったものだ。', reading: 'まったくこまったものだ。', meaning: 'Thật là phiền phức.' },
  ],

  // ── g23-140: ～まみれ — Phủ đầy (bẩn) ──
  'g23-140': [
    { jp: '泥まみれになって遊んだ。', reading: 'どろまみれになってあそんだ。', meaning: 'Chơi đến phủ đầy bùn.' },
    { jp: '借金まみれの生活だ。', reading: 'しゃっきんまみれのせいかつだ。', meaning: 'Cuộc sống ngập trong nợ.' },
  ],

  // ── g23-141: ～まわる — Khắp; quanh ──
  'g23-141': [
    { jp: '噂が広まわっている。', reading: 'うわさがひろまわっている。', meaning: 'Tin đồn lan khắp.' },
    { jp: '町を歩き回った。', reading: 'まちをあるきまわった。', meaning: 'Đã đi bộ khắp thị trấn.' },
  ],

  // ── g23-142: まんざら～ない — Không hẳn ──
  'g23-142': [
    { jp: '彼の提案もまんざら悪くない。', reading: 'かれのていあんもまんざらわるくない。', meaning: 'Đề xuất của anh ấy cũng không hẳn là xấu.' },
    { jp: 'まんざら嘘でもないようだ。', reading: 'まんざらうそでもないようだ。', meaning: 'Có vẻ không hẳn là nói dối.' },
  ],

  // ── g23-143: ～みえる — Trông có vẻ ──
  'g23-143': [
    { jp: '彼女は幸せに見える。', reading: 'かのじょはしあわせにみえる。', meaning: 'Cô ấy trông có vẻ hạnh phúc.' },
    { jp: 'この建物は新しく見える。', reading: 'このたてものはあたらしくみえる。', meaning: 'Tòa nhà này trông có vẻ mới.' },
  ],

  // ── g23-144: ～みこみ — Triển vọng ──
  'g23-144': [
    { jp: '回復の見込みがある。', reading: 'かいふくのみこみがある。', meaning: 'Có triển vọng hồi phục.' },
    { jp: '合格の見込みは低い。', reading: 'ごうかくのみこみはひくい。', meaning: 'Khả năng đỗ thấp.' },
  ],

  // ── g23-145: ～むき — Dành cho ──
  'g23-145': [
    { jp: '初心者向きの本です。', reading: 'しょしんしゃむきのほんです。', meaning: 'Đây là sách dành cho người mới.' },
    { jp: '子供向きの映画だ。', reading: 'こどもむきのえいがだ。', meaning: 'Phim dành cho trẻ em.' },
  ],

  // ── g23-146: ～にむく — Phù hợp ──
  'g23-146': [
    { jp: 'この仕事は彼に向いている。', reading: 'このしごとはかれにむいている。', meaning: 'Công việc này phù hợp với anh ấy.' },
    { jp: '教師に向いていると思う。', reading: 'きょうしにむいているとおもう。', meaning: 'Tôi nghĩ phù hợp làm giáo viên.' },
  ],

  // ── g23-147: ～むけ — Hướng đến ──
  'g23-147': [
    { jp: '外国人向けのガイドブックだ。', reading: 'がいこくじんむけのガイドブックだ。', meaning: 'Sách hướng dẫn dành cho người nước ngoài.' },
    { jp: '大人向けの内容です。', reading: 'おとなむけのないようです。', meaning: 'Nội dung dành cho người lớn.' },
  ],

  // ── g23-148: むり — Miễn cưỡng ──
  'g23-148': [
    { jp: '無理をしないでください。', reading: 'むりをしないでください。', meaning: 'Đừng cố quá sức.' },
    { jp: 'それは無理だよ。', reading: 'それはむりだよ。', meaning: 'Cái đó không thể đâu.' },
  ],

  // ── g23-149: ～めく — Có vẻ ──
  'g23-149': [
    { jp: '春めいてきた。', reading: 'はるめいてきた。', meaning: 'Đã bắt đầu có vẻ mùa xuân.' },
    { jp: '謎めいた笑みを浮かべた。', reading: 'なぞめいたえみをうかべた。', meaning: 'Nở nụ cười bí ẩn.' },
  ],

  // ── g23-150: ～ゆえ — Vì; bởi ──
  'g23-150': [
    { jp: '若さゆえの過ちだ。', reading: 'わかさゆえのあやまちだ。', meaning: 'Lỗi lầm vì tuổi trẻ.' },
    { jp: '愛するがゆえに苦しむ。', reading: 'あいするがゆえにくるしむ。', meaning: 'Đau khổ vì yêu.' },
  ],

  // ── g23-151: よかった — May quá ──
  'g23-151': [
    { jp: '間に合ってよかった。', reading: 'まにあってよかった。', meaning: 'May quá, kịp rồi.' },
    { jp: '無事でよかった。', reading: 'ぶじでよかった。', meaning: 'May quá, bình an vô sự.' },
  ],

  // ── g23-152: ～よかろう — Có lẽ tốt (cổ ngữ) ──
  'g23-152': [
    { jp: 'それでよかろう。', reading: 'それでよかろう。', meaning: 'Vậy cũng được.' },
    { jp: '明日でもよかろう。', reading: 'あしたでもよかろう。', meaning: 'Ngày mai cũng được chứ.' },
  ],

  // ── g23-153: よく — Thường; giỏi ──
  'g23-153': [
    { jp: 'よく日本料理を食べます。', reading: 'よくにほんりょうりをたべます。', meaning: 'Tôi thường ăn đồ ăn Nhật.' },
    { jp: 'よくできました。', reading: 'よくできました。', meaning: 'Làm tốt lắm.' },
  ],

  // ── g23-154: ろく～ない — Không ra gì ──
  'g23-154': [
    { jp: 'ろくに勉強していない。', reading: 'ろくにべんきょうしていない。', meaning: 'Không học hành gì ra trò.' },
    { jp: 'ろくな結果にならない。', reading: 'ろくなけっかにならない。', meaning: 'Kết quả chẳng ra gì.' },
  ],

  // ── g23-155: ろくろく～ない — Chả ra sao ──
  'g23-155': [
    { jp: 'ろくろく食べていない。', reading: 'ろくろくたべていない。', meaning: 'Chả ăn uống gì cả.' },
    { jp: 'ろくろく寝ていない。', reading: 'ろくろくねていない。', meaning: 'Không được ngủ tử tế.' },
  ],

  // ── g23-156: ～わ...～わ — Vừa... vừa... ──
  'g23-156': [
    { jp: '雨は降るわ風は吹くわで大変だった。', reading: 'あめはふるわかぜはふくわでたいへんだった。', meaning: 'Vừa mưa vừa gió, thật vất vả.' },
    { jp: '食べるわ飲むわで、すごい量だった。', reading: 'たべるわのむわで、すごいりょうだった。', meaning: 'Vừa ăn vừa uống, lượng kinh khủng.' },
  ],

  // ── g23-157: わざわざ — Cố tình; nhọc công ──
  'g23-157': [
    { jp: 'わざわざ来てくれてありがとう。', reading: 'わざわざきてくれてありがとう。', meaning: 'Cảm ơn đã cất công đến.' },
    { jp: 'わざわざ言う必要はない。', reading: 'わざわざいうひつようはない。', meaning: 'Không cần phải cố tình nói.' },
  ],

  // ── g23-158: わずか — Chỉ; ít ỏi ──
  'g23-158': [
    { jp: 'わずか三日で完成した。', reading: 'わずかみっかでかんせいした。', meaning: 'Chỉ 3 ngày là hoàn thành.' },
    { jp: 'わずかな差で負けた。', reading: 'わずかなさでまけた。', meaning: 'Thua với khoảng cách rất nhỏ.' },
  ],

  // ── g23-159: んじゃ — Vậy thì (khẩu ngữ) ──
  'g23-159': [
    { jp: 'んじゃ、そろそろ行こうか。', reading: 'んじゃ、そろそろいこうか。', meaning: 'Vậy thì sắp đi thôi.' },
    { jp: 'んじゃ、また今度ね。', reading: 'んじゃ、またこんどね。', meaning: 'Vậy thì lần sau nhé.' },
  ],

  // ── g23-160: ～んだ — Giải thích ──
  'g23-160': [
    { jp: '実は体調が悪いんだ。', reading: 'じつはたいちょうがわるいんだ。', meaning: 'Thực ra là tôi không khỏe.' },
    { jp: 'どうしたんですか。', reading: 'どうしたんですか。', meaning: 'Có chuyện gì vậy?' },
  ],

  // ── g23-161: ～んだった — Đáng lẽ phải ──
  'g23-161': [
    { jp: 'もっと早く起きるんだった。', reading: 'もっとはやくおきるんだった。', meaning: 'Đáng lẽ phải dậy sớm hơn.' },
    { jp: '傘を持っていくんだった。', reading: 'かさをもっていくんだった。', meaning: 'Đáng lẽ phải mang ô theo.' },
  ],

  // ── g23-162: ～んだって — Nghe nói (khẩu ngữ) ──
  'g23-162': [
    { jp: '彼、来月結婚するんだって。', reading: 'かれ、らいげつけっこんするんだって。', meaning: 'Nghe nói anh ấy tháng sau cưới.' },
    { jp: '明日は休みなんだって。', reading: 'あしたはやすみなんだって。', meaning: 'Nghe nói ngày mai nghỉ.' },
  ],

  // ── g23-163: ～んだろう — Chắc là ──
  'g23-163': [
    { jp: '彼は何を考えているんだろう。', reading: 'かれはなにをかんがえているんだろう。', meaning: 'Anh ấy đang nghĩ gì nhỉ?' },
    { jp: 'どうして遅れたんだろう。', reading: 'どうしておくれたんだろう。', meaning: 'Sao lại trễ nhỉ?' },
  ],

  // ── g23-164: ～くらい / ～ぐらい — Khoảng ──
  'g23-164': [
    { jp: '十分くらいで着きます。', reading: 'じゅっぷんくらいでつきます。', meaning: 'Khoảng 10 phút là đến.' },
    { jp: '泣きたいぐらいつらい。', reading: 'なきたいぐらいつらい。', meaning: 'Đau đến mức muốn khóc.' },
  ],

  // ── g23-165: ～ね / ～ねえ — Nhỉ; nhé ──
  'g23-165': [
    { jp: '暑いねえ。', reading: 'あついねえ。', meaning: 'Nóng quá nhỉ.' },
    { jp: 'きれいですねえ。', reading: 'きれいですねえ。', meaning: 'Đẹp nhỉ.' },
  ],

  // ── g23-166: ～てね — Nhé; đấy nhé ──
  'g23-166': [
    { jp: '気をつけてね。', reading: 'きをつけてね。', meaning: 'Cẩn thận nhé.' },
    { jp: 'また連絡してね。', reading: 'またれんらくしてね。', meaning: 'Liên lạc lại nhé.' },
  ],

  // ── g23-167: ～ぜ — Nhấn mạnh (nam) ──
  'g23-167': [
    { jp: '行くぜ！', reading: 'いくぜ！', meaning: 'Đi thôi!' },
    { jp: '勝つぜ！', reading: 'かつぜ！', meaning: 'Sẽ thắng đấy!' },
  ],

  // ── g23-168: ～ぞ — Quả quyết (nam) ──
  'g23-168': [
    { jp: '覚えていろぞ！', reading: 'おぼえていろぞ！', meaning: 'Nhớ lấy đấy!' },
    { jp: '今日こそ頑張るぞ。', reading: 'きょうこそがんばるぞ。', meaning: 'Hôm nay nhất định sẽ cố gắng.' },
  ],
};
