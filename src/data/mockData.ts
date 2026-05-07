import { AnalysisResult, SavedToken, SavedGrammar, SavedComparison, PartType, GrammaticalRole, NuanceType } from '../types';

// ============================================================================
// MOCK ANALYSIS RESULT - Demo sentence for showcase
// Sentence: 雨が降っていたのに、彼は傘を持たずに出かけた。その結果、風邪を引いてしまった。
// ============================================================================
export const MOCK_ANALYSIS_RESULT: AnalysisResult = {
  blocks: [
    {
      id: "block-1",
      connectionInfo: undefined,
      translation: {
        text: "Mặc dù trời đang mưa, anh ấy vẫn ra ngoài mà không mang theo dù.",
        mappings: [
          { id: "m1", text: "Mặc dù trời đang mưa" },
          { id: "m2", text: "anh ấy vẫn ra ngoài" },
          { id: "m3", text: "không mang theo dù" }
        ]
      },
      grammarStructures: [
        {
          structure: "〜のに (Noni)",
          reading: "のに",
          meaning: "Mặc dù... vậy mà... (Thể hiện sự ngạc nhiên/bất mãn)",
          usage: "Dùng để nối hai mệnh đề có kết quả trái ngược với dự đoán thông thường. Vế sau thường mang sắc thái tiêu cực hoặc bất ngờ.",
          construction: "V-Plain / Adj / Noun + na + noni",
          jlpt: "N3"
        },
        {
          structure: "〜ずに (Zu ni)",
          reading: "ずに",
          meaning: "Làm B mà không làm A",
          usage: "Hình thức trang trọng hoặc văn viết của 'Naide' (Không làm gì đó). Diễn tả trạng thái đi kèm.",
          construction: "V-Nai (bỏ Nai) + zu ni",
          jlpt: "N3"
        }
      ],
      tokens: [
        {
          id: "t1",
          text: "雨",
          reading: "あめ",
          romaji: "ame",
          type: PartType.NOUN,
          grammaticalRole: GrammaticalRole.MAIN_SUBJECT,
          meaning: "Mưa",
          roleDescription: "Chủ ngữ (Mệnh đề phụ)",
          pitchAccent: "10",
          pitchPattern: "ATAMADAKA",
          mappingId: "m1",
          hanViet: "VŨ",
          deepDive: {
            dictionaryForm: "雨",
            dictionaryReading: "あめ",
            dictionaryPitchAccent: "10",
            tags: ["Weather", "Nature", "JLPT N5"]
          }
        },
        {
          id: "t2",
          text: "が",
          reading: "が",
          romaji: "ga",
          type: PartType.PARTICLE,
          meaning: "trợ từ chủ ngữ",
          roleDescription: "Đánh dấu chủ ngữ",
          pitchAccent: "0",
          deepDive: {
            nuanceType: NuanceType.NONE,
            usageNote: "Đánh dấu 'Ame' là chủ thể của hành động rơi."
          }
        },
        {
          id: "t3",
          text: "降って",
          reading: "ふって",
          romaji: "futte",
          type: PartType.VERB,
          meaning: "đang rơi",
          roleDescription: "Động từ (Te-form)",
          pitchAccent: "100",
          pitchPattern: "ATAMADAKA",
          mappingId: "m1",
          hanViet: "GIÁNG",
          deepDive: {
            dictionaryForm: "降る",
            dictionaryReading: "ふる",
            dictionaryPitchAccent: "10",
            grammaticalRule: "Động từ nhóm 1 (U-Verb): Ru -> tte",
            verbComponents: [
              { part: "降", type: "root", reading: "ふ", meaning: "Rơi (mưa/tuyết)" },
              { part: "って", type: "conjugation", meaning: "Thể Te (Nối/Tiếp diễn)" }
            ]
          }
        },
        {
          id: "t4",
          text: "いた",
          reading: "いた",
          romaji: "ita",
          type: PartType.AUXILIARY,
          meaning: "trạng thái (quá khứ)",
          roleDescription: "Trợ động từ",
          pitchAccent: "01",
          deepDive: {
            nuanceType: NuanceType.TENSE_ASPECT,
            dictionaryForm: "いる",
            usageNote: "Te-iru (đang) -> Te-ita (đã đang). Chỉ trạng thái kéo dài trong quá khứ."
          }
        },
        {
          id: "t5",
          text: "のに",
          reading: "のに",
          romaji: "noni",
          type: PartType.CONJUNCTION,
          meaning: "vậy mà / mặc dù",
          roleDescription: "Liên từ tương phản",
          pitchAccent: "10",
          mappingId: "m1",
          deepDive: {
            nuanceType: NuanceType.CONTRAST,
            usageNote: "Biểu thị sự ngạc nhiên hoặc phàn nàn của người nói."
          }
        },
        {
          id: "t6",
          text: "、",
          reading: "",
          romaji: "",
          type: PartType.PUNCTUATION,
          meaning: ""
        },
        {
          id: "t7",
          text: "彼",
          reading: "かれ",
          romaji: "kare",
          type: PartType.NOUN,
          grammaticalRole: GrammaticalRole.MAIN_SUBJECT,
          meaning: "Anh ấy",
          roleDescription: "Chủ ngữ chính",
          pitchAccent: "10",
          pitchPattern: "ATAMADAKA",
          mappingId: "m2",
          hanViet: "BỈ",
          deepDive: {
            dictionaryForm: "彼",
            tags: ["Person", "Pronoun"]
          }
        },
        {
          id: "t8",
          text: "は",
          reading: "は",
          romaji: "wa",
          type: PartType.PARTICLE,
          meaning: "thì/là",
          roleDescription: "Đánh dấu chủ đề",
          pitchAccent: "0"
        },
        {
          id: "t9",
          text: "傘",
          reading: "かさ",
          romaji: "kasa",
          type: PartType.NOUN,
          grammaticalRole: GrammaticalRole.OBJECT,
          meaning: "Cái ô/dù",
          roleDescription: "Tân ngữ",
          pitchAccent: "10",
          pitchPattern: "ATAMADAKA",
          mappingId: "m3",
          hanViet: "TẢN"
        },
        {
          id: "t10",
          text: "を",
          reading: "を",
          romaji: "wo",
          type: PartType.PARTICLE,
          meaning: "",
          roleDescription: "Trợ từ tân ngữ",
          pitchAccent: "0"
        },
        {
          id: "t11",
          text: "持たずに",
          reading: "もたずに",
          romaji: "motazuni",
          type: PartType.VERB,
          grammaticalRole: GrammaticalRole.MODIFIER,
          meaning: "không mang theo",
          roleDescription: "Trạng từ bổ nghĩa",
          pitchAccent: "0100",
          mappingId: "m3",
          hanViet: "TRÌ",
          deepDive: {
            dictionaryForm: "持つ",
            dictionaryReading: "もつ",
            dictionaryPitchAccent: "10",
            grammaticalRule: "Mots(u) -> Mota-nai -> Mota-zu ni",
            nuanceType: NuanceType.NEGATION,
            verbComponents: [
              { part: "持", type: "root", reading: "も", meaning: "Cầm/Mang" },
              { part: "た", type: "root", reading: "た", meaning: "(biến âm)" },
              { part: "ずに", type: "conjugation", meaning: "Không làm... mà..." }
            ]
          }
        },
        {
          id: "t12",
          text: "出かけた",
          reading: "でかけた",
          romaji: "dekaketa",
          type: PartType.VERB,
          grammaticalRole: GrammaticalRole.MAIN_PREDICATE,
          meaning: "đã ra ngoài",
          roleDescription: "Động từ chính",
          pitchAccent: "0100",
          pitchPattern: "NAKADAKA",
          mappingId: "m2",
          hanViet: "XUẤT",
          deepDive: {
            dictionaryForm: "出かける",
            dictionaryReading: "でかける",
            dictionaryPitchAccent: "01000",
            conjugation: "Quá khứ ngắn (Ta-form)",
            verbComponents: [
              { part: "出", type: "root", reading: "で", meaning: "Xuất" },
              { part: "かけ", type: "root", reading: "かけ", meaning: "Treo/Bắt đầu" },
              { part: "た", type: "conjugation", meaning: "Đã (Quá khứ)" }
            ]
          }
        },
        {
          id: "t13",
          text: "。",
          reading: "",
          romaji: "",
          type: PartType.PUNCTUATION,
          meaning: ""
        }
      ]
    },
    {
      id: "block-2",
      connectionInfo: {
        type: "CAUSE_AND_RESULT",
        description: "Hệ quả trực tiếp của việc ra ngoài mưa không mang dù."
      },
      translation: {
        text: "Kết quả là, (anh ấy) đã bị cảm lạnh mất rồi.",
        mappings: [
          { id: "m4", text: "Kết quả là" },
          { id: "m5", text: "bị cảm lạnh mất rồi" }
        ]
      },
      grammarStructures: [
        {
          structure: "〜てしまう (Te shimau)",
          reading: "てしまう",
          meaning: "Lỡ làm... / Hoàn thành... (Hối tiếc)",
          usage: "Diễn tả hành động đã hoàn tất, thường mang sắc thái hối tiếc hoặc không mong muốn.",
          construction: "V-Te + shimau",
          jlpt: "N4"
        }
      ],
      tokens: [
        {
          id: "t14",
          text: "その",
          reading: "その",
          romaji: "sono",
          type: PartType.ADJECTIVE,
          meaning: "Đó / Ấy",
          roleDescription: "Định từ",
          pitchAccent: "00",
          mappingId: "m4"
        },
        {
          id: "t15",
          text: "結果",
          reading: "けっか",
          romaji: "kekka",
          type: PartType.NOUN,
          meaning: "kết quả",
          roleDescription: "Danh từ chỉ thời gian/kết nối",
          pitchAccent: "100",
          mappingId: "m4",
          hanViet: "KẾT QUẢ"
        },
        {
          id: "t16",
          text: "、",
          reading: "",
          romaji: "",
          type: PartType.PUNCTUATION,
          meaning: ""
        },
        {
          id: "t17_ghost",
          text: "(彼)",
          reading: "かれ",
          romaji: "kare",
          type: PartType.NOUN,
          grammaticalRole: GrammaticalRole.MAIN_SUBJECT,
          meaning: "Anh ấy",
          roleDescription: "Chủ ngữ (Ẩn)",
          isGhost: true,
          pitchAccent: "10"
        },
        {
          id: "t17",
          text: "風邪",
          reading: "かぜ",
          romaji: "kaze",
          type: PartType.NOUN,
          grammaticalRole: GrammaticalRole.OBJECT,
          meaning: "Cảm lạnh",
          roleDescription: "Tân ngữ",
          pitchAccent: "00",
          mappingId: "m5",
          hanViet: "PHONG TÀ"
        },
        {
          id: "t18",
          text: "を",
          reading: "を",
          romaji: "wo",
          type: PartType.PARTICLE,
          meaning: "",
          roleDescription: "Trợ từ tân ngữ",
          pitchAccent: "0"
        },
        {
          id: "t19",
          text: "引いて",
          reading: "ひいて",
          romaji: "hiite",
          type: PartType.VERB,
          meaning: "bị (cảm)",
          roleDescription: "Động từ chính (phần 1)",
          pitchAccent: "010",
          mappingId: "m5",
          hanViet: "DẪN",
          deepDive: {
            dictionaryForm: "引く",
            verbComponents: [
              { part: "引", type: "root", reading: "ひ", meaning: "Kéo/Dẫn" },
              { part: "いて", type: "conjugation", meaning: "Te-form" }
            ]
          }
        },
        {
          id: "t20",
          text: "しまった",
          reading: "しまった",
          romaji: "shimatta",
          type: PartType.AUXILIARY,
          grammaticalRole: GrammaticalRole.MAIN_PREDICATE,
          meaning: "lỡ... mất rồi",
          roleDescription: "Trợ động từ (Hối tiếc)",
          pitchAccent: "1000",
          mappingId: "m5",
          deepDive: {
            nuanceType: NuanceType.REGRET_UNINTENDED,
            dictionaryForm: "しまう",
            usageNote: "Thể hiện kết quả tiêu cực không mong muốn (bị ốm)."
          }
        },
        {
          id: "t21",
          text: "。",
          reading: "",
          romaji: "",
          type: PartType.PUNCTUATION,
          meaning: ""
        }
      ]
    }
  ],
  summary: {
    title: "Bài học đắt giá",
    translation: "Mặc dù trời mưa nhưng anh ấy vẫn ra ngoài không mang dù. Kết quả là anh ấy đã bị cảm lạnh mất rồi.",
    nuance: "Đoạn văn thể hiện sự trách móc nhẹ nhàng về sự bất cẩn (noni) và sự hối tiếc về kết quả không mong muốn (shimatta).",
    flow: "Nguyên nhân (Mưa + Chủ quan) -> Hành động (Không mang dù) -> Kết quả tiêu cực (Bị ốm)"
  }
};

// ============================================================================
// MOCK VOCABULARY - core items + legacy IDs for backward compatibility
// ============================================================================
export const MOCK_VOCAB_ITEMS: SavedToken[] = [
  // ─── 1. DANH TỪ (Nouns) ───
  {
    id: "v1",
    text: "犬",
    reading: "いぬ",
    romaji: "inu",
    meaning: "Chó",
    type: PartType.NOUN,
    savedAt: Date.now(),
    hanViet: "KHUYỂN",
    pitchAccent: "10",
    pitchPattern: "ATAMADAKA",
    deepDive: {
      dictionaryForm: "犬",
      dictionaryReading: "いぬ",
      dictionaryPitchAccent: "10",
      tags: ["Animal", "Pet", "JLPT N5"]
    },
    extendedAnalysis: {
      definitionDetail: "Động vật có vú thuộc họ chó, được thuần hóa từ lâu đời, là bạn đồng hành trung thành của con người.",
      transitivity: "N/A",
      dictionaryPitchAccent: "10",
      dictionaryPitchPattern: "ATAMADAKA",
      dictionaryReading: "いぬ",
      examples: [
        { japanese: "うちの犬はとても賢い。", reading: "うちのいぬはとてもかしこい。", vietnamese: "Chó nhà tôi rất thông minh." },
        { japanese: "犬を飼っています。", reading: "いぬをかっています。", vietnamese: "Tôi đang nuôi chó." }
      ],
      synonyms: [
        { text: "ワンちゃん", reading: "わんちゃん", meaning: "Cún cưng (dễ thương)" }
      ],
      collocations: [
        { text: "犬小屋", reading: "いぬごや", meaning: "Chuồng chó" },
        { text: "愛犬", reading: "あいけん", meaning: "Chó cưng" }
      ],
      kanjiDetails: [
        { char: "犬", hanViet: "KHUYỂN", onyomi: ["ケン"], kunyomi: ["いぬ"], meaning: "Chó" }
      ]
    }
  },
  {
    id: "v2",
    text: "先生",
    reading: "せんせい",
    romaji: "sensei",
    meaning: "Giáo viên, thầy/cô, tiên sinh",
    type: PartType.NOUN,
    savedAt: Date.now(),
    hanViet: "TIÊN SINH",
    pitchAccent: "0110",
    pitchPattern: "NAKADAKA",
    deepDive: {
      dictionaryForm: "先生",
      dictionaryReading: "せんせい",
      dictionaryPitchAccent: "0110",
      tags: ["Person", "Education", "Honorific", "JLPT N5"]
    },
    extendedAnalysis: {
      definitionDetail: "Người dạy học, bác sĩ, luật sư hoặc người được kính trọng. Cũng dùng như kính xưng cho chuyên gia.",
      transitivity: "N/A",
      dictionaryPitchAccent: "0110",
      dictionaryPitchPattern: "NAKADAKA",
      dictionaryReading: "せんせい",
      examples: [
        { japanese: "先生に質問があります。", reading: "せんせいにしつもんがあります。", vietnamese: "Tôi có câu hỏi cho thầy/cô." },
        { japanese: "田中先生は優しい。", reading: "たなかせんせいはやさしい。", vietnamese: "Thầy Tanaka rất hiền." }
      ],
      synonyms: [
        { text: "教師", reading: "きょうし", meaning: "Giáo viên (trang trọng)" },
        { text: "教員", reading: "きょういん", meaning: "Nhân viên giáo dục" }
      ],
      collocations: [
        { text: "先生方", reading: "せんせいがた", meaning: "Các thầy/cô (số nhiều kính trọng)" },
        { text: "担任の先生", reading: "たんにんのせんせい", meaning: "Giáo viên chủ nhiệm" }
      ],
      kanjiDetails: [
        { char: "先", hanViet: "TIÊN", onyomi: ["セン"], kunyomi: ["さき"], meaning: "Trước" },
        { char: "生", hanViet: "SINH", onyomi: ["セイ", "ショウ"], kunyomi: ["い.きる", "う.まれる"], meaning: "Sống, sinh" }
      ]
    }
  },
  {
    id: "v3",
    text: "山",
    reading: "やま",
    romaji: "yama",
    meaning: "Núi",
    type: PartType.NOUN,
    savedAt: Date.now(),
    hanViet: "SƠN",
    pitchAccent: "10",
    pitchPattern: "ATAMADAKA",
    deepDive: {
      dictionaryForm: "山",
      dictionaryReading: "やま",
      dictionaryPitchAccent: "10",
      tags: ["Nature", "Geography", "JLPT N5"]
    },
    extendedAnalysis: {
      definitionDetail: "Địa hình nhô cao lên so với mặt đất xung quanh, thường phủ cây xanh hoặc tuyết.",
      transitivity: "N/A",
      dictionaryPitchAccent: "10",
      dictionaryPitchPattern: "ATAMADAKA",
      dictionaryReading: "やま",
      examples: [
        { japanese: "山に登る。", reading: "やまにのぼる。", vietnamese: "Leo núi." },
        { japanese: "富士山は日本一高い山です。", reading: "ふじさんはにほんいちたかいやまです。", vietnamese: "Núi Phú Sĩ là ngọn núi cao nhất Nhật Bản." }
      ],
      collocations: [
        { text: "登山", reading: "とざん", meaning: "Leo núi" },
        { text: "山頂", reading: "さんちょう", meaning: "Đỉnh núi" },
        { text: "火山", reading: "かざん", meaning: "Núi lửa" }
      ],
      kanjiDetails: [
        { char: "山", hanViet: "SƠN", onyomi: ["サン"], kunyomi: ["やま"], meaning: "Núi" }
      ]
    }
  },

  // ─── 2. ĐỘNG TỪ (Verbs) ───
  {
    id: "v4",
    text: "行く",
    reading: "いく",
    romaji: "iku",
    meaning: "Đi",
    type: PartType.VERB,
    savedAt: Date.now(),
    hanViet: "HÀNH",
    pitchAccent: "01",
    pitchPattern: "ODAKA",
    deepDive: {
      dictionaryForm: "行く",
      dictionaryReading: "いく",
      dictionaryPitchAccent: "01",
      tags: ["Movement", "Godan", "Intransitive", "JLPT N5"],
      verbComponents: [
        { part: "行", type: "root", reading: "い", meaning: "Đi" },
        { part: "く", type: "conjugation", meaning: "Đuôi Godan" }
      ]
    },
    extendedAnalysis: {
      definitionDetail: "Di chuyển từ nơi hiện tại đến nơi khác, rời khỏi vị trí người nói.",
      transitivity: "INTRANSITIVE",
      dictionaryPitchAccent: "01",
      dictionaryPitchPattern: "ODAKA",
      dictionaryReading: "いく",
      conjugations: {
        dictionary: "行く",
        polite: "行きます",
        negative: "行かない",
        past: "行った",
        teForm: "行って",
        potential: "行ける",
        passive: "行かれる",
        causative: "行かせる",
        volitional: "行こう",
        imperative: "行け"
      },
      examples: [
        { japanese: "学校に行く。", reading: "がっこうにいく。", vietnamese: "Đi học." },
        { japanese: "明日、東京に行きます。", reading: "あした、とうきょうにいきます。", vietnamese: "Ngày mai tôi sẽ đi Tokyo." },
        { japanese: "一緒に行きませんか。", reading: "いっしょにいきませんか。", vietnamese: "Cùng đi nhé?" }
      ],
      synonyms: [
        { text: "向かう", reading: "むかう", meaning: "Hướng tới" },
        { text: "参る", reading: "まいる", meaning: "Đi (khiêm tốn)" }
      ],
      antonyms: [
        { text: "来る", reading: "くる", meaning: "Đến" },
        { text: "帰る", reading: "かえる", meaning: "Trở về" }
      ],
      collocations: [
        { text: "行き先", reading: "いきさき", meaning: "Điểm đến" },
        { text: "行き帰り", reading: "いきかえり", meaning: "Đi và về" }
      ],
      kanjiDetails: [
        { char: "行", hanViet: "HÀNH", onyomi: ["コウ", "ギョウ"], kunyomi: ["い.く", "ゆ.く", "おこな.う"], meaning: "Đi, thực hiện" }
      ]
    }
  },
  {
    id: "v5",
    text: "食べる",
    reading: "たべる",
    romaji: "taberu",
    meaning: "Ăn",
    type: PartType.VERB,
    savedAt: Date.now(),
    hanViet: "THỰC",
    pitchAccent: "010",
    pitchPattern: "NAKADAKA",
    deepDive: {
      dictionaryForm: "食べる",
      dictionaryReading: "たべる",
      dictionaryPitchAccent: "010",
      tags: ["Daily", "Ichidan", "Transitive", "JLPT N5"],
      verbComponents: [
        { part: "食", type: "root", reading: "た", meaning: "Ăn" },
        { part: "べる", type: "conjugation", meaning: "Đuôi Ichidan" }
      ]
    },
    extendedAnalysis: {
      definitionDetail: "Đưa thức ăn vào miệng, nhai và nuốt. Hành động ăn uống hàng ngày.",
      transitivity: "TRANSITIVE",
      dictionaryPitchAccent: "010",
      dictionaryPitchPattern: "NAKADAKA",
      dictionaryReading: "たべる",
      conjugations: {
        dictionary: "食べる",
        polite: "食べます",
        negative: "食べない",
        past: "食べた",
        teForm: "食べて",
        potential: "食べられる",
        passive: "食べられる",
        causative: "食べさせる",
        volitional: "食べよう",
        imperative: "食べろ"
      },
      examples: [
        { japanese: "ご飯を食べる。", reading: "ごはんをたべる。", vietnamese: "Ăn cơm." },
        { japanese: "朝ご飯をもう食べましたか。", reading: "あさごはんをもうたべましたか。", vietnamese: "Bạn ăn sáng chưa?" }
      ],
      synonyms: [
        { text: "召し上がる", reading: "めしあがる", meaning: "Dùng bữa (kính ngữ)" },
        { text: "いただく", reading: "いただく", meaning: "Ăn/uống (khiêm tốn)" }
      ],
      collocations: [
        { text: "食べ物", reading: "たべもの", meaning: "Thức ăn" },
        { text: "食べ放題", reading: "たべほうだい", meaning: "Buffet (ăn thoải mái)" }
      ],
      kanjiDetails: [
        { char: "食", hanViet: "THỰC", onyomi: ["ショク", "ジキ"], kunyomi: ["た.べる", "く.う"], meaning: "Ăn" }
      ]
    }
  },
  {
    id: "v6",
    text: "書く",
    reading: "かく",
    romaji: "kaku",
    meaning: "Viết",
    type: PartType.VERB,
    savedAt: Date.now(),
    hanViet: "THƯ",
    pitchAccent: "01",
    pitchPattern: "ODAKA",
    deepDive: {
      dictionaryForm: "書く",
      dictionaryReading: "かく",
      dictionaryPitchAccent: "01",
      tags: ["Daily", "Godan", "Transitive", "JLPT N5"],
      verbComponents: [
        { part: "書", type: "root", reading: "か", meaning: "Viết" },
        { part: "く", type: "conjugation", meaning: "Đuôi Godan" }
      ]
    },
    extendedAnalysis: {
      definitionDetail: "Dùng bút hoặc công cụ để ghi chữ, vẽ ký hiệu lên giấy hoặc bề mặt.",
      transitivity: "TRANSITIVE",
      dictionaryPitchAccent: "01",
      dictionaryPitchPattern: "ODAKA",
      dictionaryReading: "かく",
      conjugations: {
        dictionary: "書く",
        polite: "書きます",
        negative: "書かない",
        past: "書いた",
        teForm: "書いて",
        potential: "書ける",
        passive: "書かれる",
        causative: "書かせる",
        volitional: "書こう",
        imperative: "書け"
      },
      examples: [
        { japanese: "手紙を書く。", reading: "てがみをかく。", vietnamese: "Viết thư." },
        { japanese: "日記を毎日書いています。", reading: "にっきをまいにちかいています。", vietnamese: "Tôi đang viết nhật ký mỗi ngày." }
      ],
      synonyms: [
        { text: "記す", reading: "しるす", meaning: "Ghi chép (trang trọng)" }
      ],
      collocations: [
        { text: "書類", reading: "しょるい", meaning: "Tài liệu" },
        { text: "書道", reading: "しょどう", meaning: "Thư pháp" }
      ],
      kanjiDetails: [
        { char: "書", hanViet: "THƯ", onyomi: ["ショ"], kunyomi: ["か.く"], meaning: "Viết, sách" }
      ]
    }
  },
  {
    id: "v7",
    text: "勉強する",
    reading: "べんきょうする",
    romaji: "benkyou suru",
    meaning: "Học tập",
    type: PartType.VERB,
    savedAt: Date.now(),
    hanViet: "MIỄN CƯỜNG",
    pitchAccent: "0000",
    pitchPattern: "HEIBAN",
    deepDive: {
      dictionaryForm: "勉強する",
      dictionaryReading: "べんきょうする",
      dictionaryPitchAccent: "0000",
      tags: ["Education", "Suru-verb", "JLPT N5"]
    },
    extendedAnalysis: {
      definitionDetail: "Nỗ lực tiếp thu kiến thức hoặc kỹ năng thông qua học hỏi và luyện tập. Động từ する gốc Hán.",
      transitivity: "BOTH",
      dictionaryPitchAccent: "0000",
      dictionaryPitchPattern: "HEIBAN",
      dictionaryReading: "べんきょうする",
      examples: [
        { japanese: "毎日日本語を勉強しています。", reading: "まいにちにほんごをべんきょうしています。", vietnamese: "Tôi đang học tiếng Nhật mỗi ngày." },
        { japanese: "試験のために勉強する。", reading: "しけんのためにべんきょうする。", vietnamese: "Học để chuẩn bị cho kỳ thi." }
      ],
      synonyms: [
        { text: "学ぶ", reading: "まなぶ", meaning: "Học (nghiêm túc hơn)" },
        { text: "学習する", reading: "がくしゅうする", meaning: "Học tập (trang trọng)" }
      ],
      collocations: [
        { text: "勉強家", reading: "べんきょうか", meaning: "Người chăm học" },
        { text: "勉強部屋", reading: "べんきょうべや", meaning: "Phòng học" }
      ],
      kanjiDetails: [
        { char: "勉", hanViet: "MIỄN", onyomi: ["ベン"], kunyomi: ["つと.める"], meaning: "Gắng sức" },
        { char: "強", hanViet: "CƯỜNG", onyomi: ["キョウ", "ゴウ"], kunyomi: ["つよ.い"], meaning: "Mạnh" }
      ]
    }
  },

  // ─── 3. TÍNH TỪ (Adjectives) ───
  {
    id: "v8",
    text: "美しい",
    reading: "うつくしい",
    romaji: "utsukushii",
    meaning: "Đẹp, xinh đẹp",
    type: PartType.ADJECTIVE,
    savedAt: Date.now(),
    hanViet: "MỸ",
    pitchAccent: "01110",
    pitchPattern: "NAKADAKA",
    deepDive: {
      dictionaryForm: "美しい",
      dictionaryReading: "うつくしい",
      dictionaryPitchAccent: "01110",
      tags: ["i-Adjective", "Beauty", "JLPT N4"]
    },
    extendedAnalysis: {
      definitionDetail: "Có vẻ đẹp khiến người ta cảm động — dùng cho cảnh thiên nhiên, nghệ thuật, lời văn. Trang trọng hơn きれい.",
      transitivity: "N/A",
      dictionaryPitchAccent: "01110",
      dictionaryPitchPattern: "NAKADAKA",
      dictionaryReading: "うつくしい",
      examples: [
        { japanese: "桜が美しい。", reading: "さくらがうつくしい。", vietnamese: "Hoa anh đào rất đẹp." },
        { japanese: "美しい景色に感動した。", reading: "うつくしいけしきにかんどうした。", vietnamese: "Tôi xúc động trước cảnh đẹp." }
      ],
      synonyms: [
        { text: "きれい", reading: "きれい", meaning: "Đẹp, sạch (na-adj, thông dụng hơn)" },
        { text: "綺麗", reading: "きれい", meaning: "Đẹp (Kanji form)" }
      ],
      antonyms: [
        { text: "醜い", reading: "みにくい", meaning: "Xấu xí" }
      ],
      collocations: [
        { text: "美しさ", reading: "うつくしさ", meaning: "Vẻ đẹp (danh từ)" },
        { text: "美人", reading: "びじん", meaning: "Người đẹp" }
      ],
      kanjiDetails: [
        { char: "美", hanViet: "MỸ", onyomi: ["ビ"], kunyomi: ["うつく.しい"], meaning: "Đẹp" }
      ]
    }
  },
  {
    id: "v9",
    text: "静か",
    reading: "しずか",
    romaji: "shizuka",
    meaning: "Yên tĩnh, im lặng",
    type: PartType.ADJECTIVE,
    savedAt: Date.now(),
    hanViet: "TĨNH",
    pitchAccent: "010",
    pitchPattern: "NAKADAKA",
    deepDive: {
      dictionaryForm: "静か",
      dictionaryReading: "しずか",
      dictionaryPitchAccent: "010",
      tags: ["na-Adjective", "Sound", "JLPT N4"]
    },
    extendedAnalysis: {
      definitionDetail: "Trạng thái không có tiếng ồn, không sôi nổi. Tĩnh lặng, bình yên. Tính từ đuôi な.",
      transitivity: "N/A",
      dictionaryPitchAccent: "010",
      dictionaryPitchPattern: "NAKADAKA",
      dictionaryReading: "しずか",
      examples: [
        { japanese: "図書館は静かです。", reading: "としょかんはしずかです。", vietnamese: "Thư viện rất yên tĩnh." },
        { japanese: "静かにしてください。", reading: "しずかにしてください。", vietnamese: "Xin hãy giữ yên lặng." }
      ],
      synonyms: [
        { text: "穏やか", reading: "おだやか", meaning: "Yên bình, ôn hòa" }
      ],
      antonyms: [
        { text: "うるさい", reading: "うるさい", meaning: "Ồn ào" },
        { text: "賑やか", reading: "にぎやか", meaning: "Nhộn nhịp" }
      ],
      collocations: [
        { text: "静寂", reading: "せいじゃく", meaning: "Sự tĩnh lặng" },
        { text: "静止", reading: "せいし", meaning: "Tĩnh chỉ, dừng lại" }
      ],
      kanjiDetails: [
        { char: "静", hanViet: "TĨNH", onyomi: ["セイ", "ジョウ"], kunyomi: ["しず.か"], meaning: "Yên tĩnh" }
      ]
    }
  },

  // ─── 4. PHÓ TỪ (Adverb) ───
  {
    id: "v10",
    text: "とても",
    reading: "とても",
    romaji: "totemo",
    meaning: "Rất, vô cùng",
    type: PartType.OTHER,
    savedAt: Date.now(),
    pitchAccent: "010",
    pitchPattern: "NAKADAKA",
    deepDive: {
      dictionaryForm: "とても",
      dictionaryReading: "とても",
      dictionaryPitchAccent: "010",
      tags: ["Adverb", "Degree", "JLPT N5"]
    },
    extendedAnalysis: {
      definitionDetail: "Phó từ chỉ mức độ cao, dùng để nhấn mạnh tính chất hoặc trạng thái. Thông dụng trong cả văn nói và viết.",
      transitivity: "N/A",
      dictionaryPitchAccent: "010",
      dictionaryPitchPattern: "NAKADAKA",
      dictionaryReading: "とても",
      examples: [
        { japanese: "今日はとても暑い。", reading: "きょうはとてもあつい。", vietnamese: "Hôm nay rất nóng." },
        { japanese: "この本はとても面白い。", reading: "このほんはとてもおもしろい。", vietnamese: "Cuốn sách này rất thú vị." }
      ],
      synonyms: [
        { text: "非常に", reading: "ひじょうに", meaning: "Vô cùng (trang trọng)" },
        { text: "すごく", reading: "すごく", meaning: "Cực kỳ (khẩu ngữ)" },
        { text: "大変", reading: "たいへん", meaning: "Rất, vất vả" }
      ],
      collocations: [
        { text: "とても良い", reading: "とてもよい", meaning: "Rất tốt" },
        { text: "とても大切", reading: "とてもたいせつ", meaning: "Rất quan trọng" }
      ]
    }
  },

  // Legacy IDs kept to preserve compatibility with older seeded mock snapshots.
  {
    id: "v11",
    text: "山",
    reading: "やま",
    romaji: "yama",
    meaning: "Núi",
    type: PartType.NOUN,
    savedAt: Date.now(),
    hanViet: "SƠN"
  },
  {
    id: "v12",
    text: "川",
    reading: "かわ",
    romaji: "kawa",
    meaning: "Sông",
    type: PartType.NOUN,
    savedAt: Date.now(),
    hanViet: "XUYÊN"
  },
  {
    id: "v13",
    text: "海",
    reading: "うみ",
    romaji: "umi",
    meaning: "Biển",
    type: PartType.NOUN,
    savedAt: Date.now(),
    hanViet: "HẢI"
  },
  {
    id: "v14",
    text: "行く",
    reading: "いく",
    romaji: "iku",
    meaning: "Đi",
    type: PartType.VERB,
    savedAt: Date.now(),
    hanViet: "HÀNH"
  },
  {
    id: "v15",
    text: "来る",
    reading: "くる",
    romaji: "kuru",
    meaning: "Đến",
    type: PartType.VERB,
    savedAt: Date.now(),
    hanViet: "LAI"
  },
  {
    id: "v16",
    text: "食べる",
    reading: "たべる",
    romaji: "taberu",
    meaning: "Ăn",
    type: PartType.VERB,
    savedAt: Date.now(),
    hanViet: "THỰC"
  },
  {
    id: "v17",
    text: "飲む",
    reading: "のむ",
    romaji: "nomu",
    meaning: "Uống",
    type: PartType.VERB,
    savedAt: Date.now(),
    hanViet: "ẨM"
  },
  {
    id: "v18",
    text: "見る",
    reading: "みる",
    romaji: "miru",
    meaning: "Xem, nhìn",
    type: PartType.VERB,
    savedAt: Date.now(),
    hanViet: "KIẾN"
  }
];

// ============================================================================
// MOCK GRAMMAR - 20 patterns tương tưng, đầy đủ chiều sâu cho mỗi level
// N5: 5 | N4: 5 | N3: 5 | N2: 3 | Keigo: 2
// ============================================================================
export const MOCK_GRAMMAR_ITEMS: SavedGrammar[] = [
  // ─── N5 LEVEL ───
  {
    id: "g1",
    structure: "〜ている",
    reading: "ている",
    meaning: "Đang [làm gì], trạng thái kết quả",
    usage: "Biểu thị hành động đang tiến hành hoặc trạng thái kết quả của hành động đã xảy ra",
    construction: "V-Te + いる",
    jlpt: "N5",
    tags: ["Tense", "Progressive", "State"],
    extendedAnalysis: {
      generalMeaning: "Hành động đang diễn ra (progressive) HOẶC trạng thái kết quả (resultative).",
      contexts: [
        "Hành động đang xảy ra: 食べている (đang ăn)",
        "Trạng thái kết quả: 結婚している (đã kết hôn — trạng thái)",
        "Thói quen: 毎日走っている (chạy mỗi ngày)"
      ],
      constructionRules: [
        "V-te + いる → progressive/state",
        "V-te + いた → trạng thái trong quá khứ",
        "V-te + います → dạng lịch sự"
      ],
      commonMistakes: [
        { incorrect: "彼は結婚した。(khi muốn nói trạng thái)", correct: "彼は結婚している。", explanation: "した = đã kết hôn (sự kiện). している = đang ở trạng thái kết hôn." }
      ],
      examples: [
        { japanese: "雨が降っています。", reading: "あめがふっています。", vietnamese: "Trời đang mưa." },
        { japanese: "彼は東京に住んでいる。", reading: "かれはとうきょうにすんでいる。", vietnamese: "Anh ấy đang sống ở Tokyo." },
        { japanese: "ドアが開いている。", reading: "ドアがあいている。", vietnamese: "Cửa đang mở (trạng thái)." }
      ],
      jlpt: "N5",
      tags: ["Progressive", "Resultative", "Habitual"]
    },
    savedAt: Date.now()
  },
  {
    id: "g2",
    structure: "〜から",
    reading: "から",
    meaning: "Vì, bởi vì / Từ (khởi điểm)",
    usage: "①Nêu lý do/nguyên nhân. ②Chỉ điểm xuất phát thời gian/không gian.",
    construction: "①Clause + から (lý do) ②N + から (khởi điểm)",
    jlpt: "N5",
    tags: ["Reason", "Origin", "Particle"],
    extendedAnalysis: {
      generalMeaning: "Hai nghĩa chính: (1) Nguyên nhân/lý do, (2) Điểm xuất phát.",
      contexts: [
        "Lý do: 暑いから窓を開けた (vì nóng nên mở cửa sổ)",
        "Thời gian: 9時から始まる (bắt đầu từ 9 giờ)",
        "Nơi chốn: 東京から来た (đến từ Tokyo)"
      ],
      constructionRules: [
        "Plain form + から → lý do",
        "N + から + N + まで → từ...đến..."
      ],
      detailedComparison: [
        { similarStructure: "ので", nuance: "ので khách quan, lịch sự hơn", difference: "から chủ quan, trực tiếp; ので nhẹ nhàng, trang trọng" }
      ],
      examples: [
        { japanese: "疲れたから、寝ます。", reading: "つかれたから、ねます。", vietnamese: "Vì mệt nên tôi đi ngủ." },
        { japanese: "朝9時から夕方6時まで働く。", reading: "あさくじからゆうがたろくじまではたらく。", vietnamese: "Làm việc từ 9 giờ sáng đến 6 giờ chiều." }
      ],
      jlpt: "N5",
      tags: ["Reason", "Starting-point"]
    },
    savedAt: Date.now()
  },
  {
    id: "g3",
    structure: "〜を",
    reading: "を",
    meaning: "Trợ từ tân ngữ trực tiếp",
    usage: "Đánh dấu tân ngữ trực tiếp của động từ ngoại, hoặc nơi di chuyển qua",
    construction: "N + を + V (ngoại động)",
    jlpt: "N5",
    tags: ["Particle", "Object", "Fundamental"],
    extendedAnalysis: {
      generalMeaning: "Trợ từ đánh dấu tân ngữ trực tiếp hoặc không gian di chuyển.",
      contexts: [
        "Tân ngữ: 本を読む (đọc sách)",
        "Nơi di chuyển: 公園を散歩する (đi dạo trong công viên)",
        "Nơi rời khỏi: 家を出る (rời khỏi nhà)"
      ],
      constructionRules: [
        "Noun + を + Transitive Verb",
        "Place + を + Movement Verb (通る, 歩く, 散歩する, 出る...)"
      ],
      commonMistakes: [
        { incorrect: "テレビが見る", correct: "テレビを見る", explanation: "見る là ngoại động từ, tân ngữ phải dùng を (không phải が)." }
      ],
      examples: [
        { japanese: "水を飲む。", reading: "みずをのむ。", vietnamese: "Uống nước." },
        { japanese: "橋を渡る。", reading: "はしをわたる。", vietnamese: "Đi qua cầu." }
      ],
      jlpt: "N5",
      tags: ["Particle", "Object-marker"]
    },
    savedAt: Date.now()
  },
  {
    id: "g4",
    structure: "〜に",
    reading: "に",
    meaning: "Trợ từ đích/thời gian/nơi tồn tại",
    usage: "Chỉ đích đến, thời điểm, vị trí tồn tại, hoặc người nhận",
    construction: "N + に + V / Adj",
    jlpt: "N5",
    tags: ["Particle", "Direction", "Time", "Location"],
    extendedAnalysis: {
      generalMeaning: "Trợ từ đa năng nhất: đích đến, thời điểm, nơi tồn tại, đối tượng.",
      contexts: [
        "Đích đến: 学校に行く (đi đến trường)",
        "Thời gian: 7時に起きる (dậy lúc 7 giờ)",
        "Tồn tại: 机の上に本がある (trên bàn có sách)",
        "Người nhận: 友達にあげる (cho bạn)"
      ],
      constructionRules: [
        "Place + に + 行く/来る/帰る (đích đến)",
        "Time + に + V (thời điểm cụ thể)",
        "Place + に + ある/いる (nơi tồn tại)",
        "Person + に + あげる/もらう (người nhận/cho)"
      ],
      detailedComparison: [
        { similarStructure: "で", nuance: "で = nơi hành động diễn ra; に = nơi tồn tại/đích đến", difference: "レストランで食べる (ăn TẠI nhà hàng) vs レストランに行く (đi ĐẾN nhà hàng)" },
        { similarStructure: "へ", nuance: "へ chỉ hướng di chuyển; に chỉ đích đến cụ thể", difference: "東へ行く (hướng về phía đông) vs 東京に行く (đi đến Tokyo)" }
      ],
      examples: [
        { japanese: "毎朝7時に起きます。", reading: "まいあさしちじにおきます。", vietnamese: "Mỗi sáng dậy lúc 7 giờ." },
        { japanese: "日本に行きたい。", reading: "にほんにいきたい。", vietnamese: "Tôi muốn đi Nhật." },
        { japanese: "部屋に猫がいる。", reading: "へやにねこがいる。", vietnamese: "Trong phòng có con mèo." }
      ],
      jlpt: "N5",
      tags: ["Particle", "Multi-function"]
    },
    savedAt: Date.now()
  },
  {
    id: "g5",
    structure: "〜ほうがいい",
    reading: "ほうがいい",
    meaning: "Nên [làm gì], tốt hơn nên",
    usage: "Dùng để đưa ra lời khuyên hoặc đề xuất cho ai đó",
    construction: "V-た + ほうがいい / V-ない + ほうがいい",
    jlpt: "N5",
    tags: ["Advice", "Suggestion", "Comparison"],
    extendedAnalysis: {
      generalMeaning: "Đưa ra lời khuyên: nên/không nên làm gì.",
      contexts: [
        "Khuyên làm: 薬を飲んだほうがいい (nên uống thuốc)",
        "Khuyên không làm: 食べないほうがいい (không nên ăn)"
      ],
      constructionRules: [
        "V-た + ほうがいい → nên làm (quá khứ + ほうがいい)",
        "V-ない + ほうがいい → không nên làm"
      ],
      commonMistakes: [
        { incorrect: "薬を飲むほうがいい", correct: "薬を飲んだほうがいい", explanation: "Khi khuyên nên LÀM, dùng V-た (quá khứ), không phải V-る." }
      ],
      examples: [
        { japanese: "早く寝たほうがいいですよ。", reading: "はやくねたほうがいいですよ。", vietnamese: "Bạn nên ngủ sớm." },
        { japanese: "あまり食べないほうがいい。", reading: "あまりたべないほうがいい。", vietnamese: "Không nên ăn quá nhiều." }
      ],
      jlpt: "N5",
      tags: ["Advice", "ta-form"]
    },
    savedAt: Date.now()
  },

  // ─── N4 LEVEL ───
  {
    id: "g6",
    structure: "〜ので",
    reading: "ので",
    meaning: "Vì, bởi vì (lịch sự, khách quan)",
    usage: "Biểu thị nguyên nhân/lý do, nhẹ nhàng và lịch sự hơn から",
    construction: "Plain form / な-Adj + な + ので / Noun + な + ので",
    jlpt: "N4",
    tags: ["Reason", "Polite", "Conjunction"],
    extendedAnalysis: {
      generalMeaning: "Nêu lý do/nguyên nhân một cách khách quan và lịch sự.",
      contexts: [
        "Lịch sự: 用事があるので、失礼します (vì có việc nên xin phép)",
        "Khách quan: 雨が降っているので、中止です (vì mưa nên hủy)"
      ],
      constructionRules: [
        "V-plain + ので",
        "い-adj + ので",
        "な-adj + な + ので",
        "N + な + ので"
      ],
      detailedComparison: [
        { similarStructure: "から", nuance: "から chủ quan, trực tiếp hơn", difference: "ので lịch sự hơn, dùng trong formal. から thoải mái hơn, dùng trong casual." }
      ],
      examples: [
        { japanese: "風邪を引いたので、学校を休みました。", reading: "かぜをひいたので、がっこうをやすみました。", vietnamese: "Vì bị cảm nên tôi nghỉ học." },
        { japanese: "電車が遅れたので、遅刻しました。", reading: "でんしゃがおくれたので、ちこくしました。", vietnamese: "Vì tàu trễ nên tôi đến muộn." }
      ],
      jlpt: "N4",
      tags: ["Reason", "Formal"]
    },
    savedAt: Date.now()
  },
  {
    id: "g7",
    structure: "〜のに",
    reading: "のに",
    meaning: "Mặc dù, tuy nhiên, nhưng mà",
    usage: "Biểu thị sự tương phản giữa kỳ vọng và thực tế, thường kèm cảm xúc bất mãn/ngạc nhiên",
    construction: "V-plain / い-Adj / な-Adj + な + のに / N + な + のに",
    jlpt: "N4",
    tags: ["Contrast", "Concession", "Emotion"],
    extendedAnalysis: {
      generalMeaning: "Mệnh đề trước là sự thật → kỳ vọng kết quả X → nhưng thực tế lại Y (bất ngờ/bất mãn).",
      contexts: [
        "Bất mãn: 約束したのに来なかった (đã hẹn mà không đến)",
        "Ngạc nhiên: こんなに食べたのに太らない (ăn nhiều thế mà không béo)",
        "Tiếc nuối: せっかく作ったのに食べてくれない (đã bỏ công nấu mà không ăn)"
      ],
      constructionRules: [
        "V-plain + のに",
        "い-adj + のに",
        "な-adj/N + な + のに"
      ],
      detailedComparison: [
        { similarStructure: "けど/けれども", nuance: "けど trung tính. のに kèm cảm xúc bất mãn", difference: "のに nhấn mạnh kết quả trái ngược KỲ VỌNG, luôn mang sắc thái cảm xúc." }
      ],
      examples: [
        { japanese: "雨が降っているのに、傘を持っていない。", reading: "あめがふっているのに、かさをもっていない。", vietnamese: "Mặc dù trời mưa nhưng không mang dù." },
        { japanese: "薬を飲んだのに、まだ熱がある。", reading: "くすりをのんだのに、まだねつがある。", vietnamese: "Mặc dù đã uống thuốc nhưng vẫn còn sốt." }
      ],
      jlpt: "N4",
      tags: ["Contrast", "Dissatisfaction"]
    },
    savedAt: Date.now()
  },
  {
    id: "g8",
    structure: "〜たら",
    reading: "たら",
    meaning: "Nếu, khi, sau khi",
    usage: "Biểu thị điều kiện giả định hoặc thời điểm sau khi hành động hoàn thành",
    construction: "V-た + ら / い-Adj → かったら / な-Adj/N + だったら",
    jlpt: "N4",
    tags: ["Conditional", "Temporal", "Hypothetical"],
    extendedAnalysis: {
      generalMeaning: "Hình thức điều kiện tổng quát nhất: nếu/khi A xảy ra thì B.",
      contexts: [
        "Giả định: もし宝くじに当たったら (nếu trúng xổ số)",
        "Thời gian: 家に着いたら電話して (khi về đến nhà thì gọi điện)",
        "Phát hiện: ドアを開けたら猫がいた (mở cửa ra thì thấy mèo)"
      ],
      constructionRules: [
        "V-ta + ら",
        "い-adj: 高い → 高かったら",
        "な-adj/N: 静か → 静かだったら"
      ],
      detailedComparison: [
        { similarStructure: "ば", nuance: "ば = điều kiện chung, logic. たら = điều kiện cụ thể, một lần.", difference: "たら linh hoạt nhất, dùng được mọi trường hợp. ば thiên về quy luật." },
        { similarStructure: "と", nuance: "と = kết quả tất yếu, tự nhiên", difference: "と: mỗi khi A thì luôn B. たら: nếu A xảy ra thì B." }
      ],
      examples: [
        { japanese: "明日雨が降ったら、家にいます。", reading: "あしたあめがふったら、いえにいます。", vietnamese: "Nếu ngày mai trời mưa, tôi sẽ ở nhà." },
        { japanese: "安かったら、買います。", reading: "やすかったら、かいます。", vietnamese: "Nếu rẻ thì tôi mua." }
      ],
      jlpt: "N4",
      tags: ["Conditional", "Versatile"]
    },
    savedAt: Date.now()
  },
  {
    id: "g9",
    structure: "〜てしまう",
    reading: "てしまう",
    meaning: "Đã [làm] mất rồi / Hoàn thành (tiếc nuối / dứt khoát)",
    usage: "Biểu thị hành động hoàn tất với sắc thái tiếc nuối, hối hận, hoặc hoàn thành dứt khoát",
    construction: "V-te + しまう (khẩu ngữ: V-te + ちゃう)",
    jlpt: "N4",
    tags: ["Completion", "Regret", "Emphasis"],
    extendedAnalysis: {
      generalMeaning: "Hai sắc thái chính: (1) Tiếc nuối/ngoài ý muốn, (2) Hoàn thành triệt để.",
      contexts: [
        "Tiếc nuối: 財布をなくしてしまった (mất ví rồi)",
        "Ngoài ý muốn: 寝てしまった (lỡ ngủ mất)",
        "Hoàn thành: 本を全部読んでしまった (đọc hết sách rồi)"
      ],
      constructionRules: [
        "V-te + しまう = てしまう (formal)",
        "V-te + ちゃう = ちゃう (casual, khẩu ngữ)",
        "〜でしまう → 〜じゃう (casual)"
      ],
      commonMistakes: [
        { incorrect: "忘れてしまいます = trung tính", correct: "忘れてしまいます = có sắc thái tiếc nuối", explanation: "てしまう luôn mang sắc thái cảm xúc, không trung tính." }
      ],
      examples: [
        { japanese: "ケーキを全部食べてしまった。", reading: "ケーキをぜんぶたべてしまった。", vietnamese: "Tôi đã ăn hết bánh mất rồi." },
        { japanese: "電車で寝ちゃった。", reading: "でんしゃでねちゃった。", vietnamese: "Lỡ ngủ trên tàu mất rồi." }
      ],
      jlpt: "N4",
      tags: ["Completion", "Regret", "Casual-ちゃう"]
    },
    savedAt: Date.now()
  },
  {
    id: "g10",
    structure: "〜ながら",
    reading: "ながら",
    meaning: "Vừa... vừa..., trong khi",
    usage: "Biểu thị hai hành động diễn ra đồng thời bởi cùng một chủ thể",
    construction: "V-stem + ながら + V (main)",
    jlpt: "N4",
    tags: ["Simultaneous", "Conjunction", "Dual-action"],
    extendedAnalysis: {
      generalMeaning: "Hai hành động xảy ra cùng lúc. Hành động sau ながら là hành động phụ.",
      contexts: [
        "Đồng thời: 音楽を聞きながら勉強する (vừa nghe nhạc vừa học)",
        "Tương phản: 知っていながら言わなかった (biết mà không nói)"
      ],
      constructionRules: [
        "V-masu stem + ながら + Main Verb",
        "Hành động trước ながら = phụ. Sau ながら = chính."
      ],
      commonMistakes: [
        { incorrect: "兄は食べながら、弟は読む", correct: "兄は食べながら本を読む", explanation: "Hai hành động ながら phải cùng CHỦ THỂ." }
      ],
      examples: [
        { japanese: "テレビを見ながら食べる。", reading: "テレビをみながらたべる。", vietnamese: "Vừa xem tivi vừa ăn." },
        { japanese: "歩きながら電話する。", reading: "あるきながらでんわする。", vietnamese: "Vừa đi bộ vừa nói điện thoại." }
      ],
      jlpt: "N4",
      tags: ["Simultaneous", "Same-subject"]
    },
    savedAt: Date.now()
  },

  // ─── N3 LEVEL ───
  {
    id: "g11",
    structure: "〜はずだ",
    reading: "はずだ",
    meaning: "Chắc hẳn là, đáng lẽ phải",
    usage: "Biểu thị kỳ vọng dựa trên logic hoặc thông tin đã biết",
    construction: "V-plain / い-Adj / な-Adj + な + はず / N + の + はず",
    jlpt: "N3",
    tags: ["Expectation", "Logic", "Certainty"],
    extendedAnalysis: {
      generalMeaning: "Điều mà người nói cho là chắc chắn dựa trên lý luận hoặc bằng chứng.",
      contexts: [
        "Kỳ vọng: 彼は来るはずだ (chắc hẳn anh ấy sẽ đến)",
        "Phủ định: そんなはずはない (không thể nào lại thế)"
      ],
      constructionRules: [
        "V-plain + はずだ",
        "い-adj + はずだ",
        "な-adj + な + はずだ",
        "N + の + はずだ"
      ],
      detailedComparison: [
        { similarStructure: "べき", nuance: "べき = nên làm (đạo đức). はず = chắc hẳn (logic)", difference: "はず: suy đoán logic. べき: nghĩa vụ đạo đức." }
      ],
      examples: [
        { japanese: "もう届いているはずです。", reading: "もうとどいているはずです。", vietnamese: "Chắc hẳn đã đến rồi." },
        { japanese: "彼女は知っているはずがない。", reading: "かのじょはしっているはずがない。", vietnamese: "Cô ấy không thể biết được." }
      ],
      jlpt: "N3",
      tags: ["Expectation", "Logical-deduction"]
    },
    savedAt: Date.now()
  },
  {
    id: "g12",
    structure: "〜ことになる",
    reading: "ことになる",
    meaning: "Sẽ trở thành, kết quả là, được quyết định",
    usage: "Biểu thị kết quả được quyết định (thường bởi nhóm/tổ chức, không phải cá nhân)",
    construction: "V-dictionary + ことになる / V-ない + ことになる",
    jlpt: "N3",
    tags: ["Result", "Decision", "Passive-decision"],
    extendedAnalysis: {
      generalMeaning: "Kết quả, quyết định — thường là từ bên ngoài (công ty, hoàn cảnh) chứ không phải ý chí cá nhân.",
      contexts: [
        "Quyết định tổ chức: 来月転勤することになった (bị chuyển công tác tháng sau)",
        "Kết quả tự nhiên: つまり、彼が犯人ということになる (vậy thì kẻ phạm tội là anh ta)"
      ],
      constructionRules: [
        "V-dict + ことになる = quyết định/kết quả",
        "V-dict + ことにする = TỰ MÌNH quyết định"
      ],
      detailedComparison: [
        { similarStructure: "ことにする", nuance: "ことにする = TỰ quyết định. ことになる = ĐƯỢC quyết định (bị động)", difference: "にする: chủ động. になる: bị động/kết quả." }
      ],
      examples: [
        { japanese: "来年日本に行くことになりました。", reading: "らいねんにほんにいくことになりました。", vietnamese: "Đã được quyết định là năm sau tôi sẽ đi Nhật." },
        { japanese: "会議は中止することになった。", reading: "かいぎはちゅうしすることになった。", vietnamese: "Cuộc họp đã bị hủy." }
      ],
      jlpt: "N3",
      tags: ["Decision", "Result", "Organizational"]
    },
    savedAt: Date.now()
  },
  {
    id: "g13",
    structure: "〜によって",
    reading: "によって",
    meaning: "Bởi, tùy theo, thông qua",
    usage: "Biểu thị tác nhân, phương tiện, hoặc sự khác biệt tùy theo điều kiện",
    construction: "N + によって / N + による + N",
    jlpt: "N3",
    tags: ["Agent", "Method", "Variation"],
    extendedAnalysis: {
      generalMeaning: "Ba nghĩa chính: (1) Tác nhân (bị động), (2) Phương tiện, (3) Tùy theo.",
      contexts: [
        "Tác nhân: この本は夏目漱石によって書かれた (sách này được viết bởi Natsume Soseki)",
        "Phương tiện: インターネットによって情報を得る (có thông tin thông qua internet)",
        "Tùy theo: 人によって意見が違う (tùy người mà ý kiến khác nhau)"
      ],
      constructionRules: [
        "N + によって + Passive Verb (tác nhân)",
        "N + によって + V (phương tiện)",
        "N + によって + 違う/異なる (tùy theo)"
      ],
      examples: [
        { japanese: "この絵はピカソによって描かれた。", reading: "このえはピカソによってえがかれた。", vietnamese: "Bức tranh này được vẽ bởi Picasso." },
        { japanese: "国によって文化が違う。", reading: "くにによってぶんかがちがう。", vietnamese: "Tùy theo quốc gia mà văn hóa khác nhau." }
      ],
      jlpt: "N3",
      tags: ["Agent", "Means", "Depends-on"]
    },
    savedAt: Date.now()
  },
  {
    id: "g14",
    structure: "〜ざるを得ない",
    reading: "ざるをえない",
    meaning: "Không thể không, buộc phải",
    usage: "Biểu thị tình huống bắt buộc phải làm dù không muốn",
    construction: "V-ない stem + ざるを得ない (する → せざるを得ない)",
    jlpt: "N3",
    tags: ["Obligation", "Unavoidable", "Formal"],
    extendedAnalysis: {
      generalMeaning: "Không có lựa chọn nào khác, buộc phải làm — dù bản thân không muốn.",
      contexts: [
        "Bắt buộc: 仕事だから行かざるを得ない (vì công việc nên buộc phải đi)",
        "Thừa nhận: 彼の言うことを認めざるを得ない (buộc phải thừa nhận lời anh ấy)"
      ],
      constructionRules: [
        "V-nai stem + ざるを得ない",
        "する → せざるを得ない (ngoại lệ)",
        "Dạng trang trọng, thường dùng trong văn viết"
      ],
      commonMistakes: [
        { incorrect: "しざるを得ない", correct: "せざるを得ない", explanation: "する biến thành せ (không phải し) trước ざる." }
      ],
      examples: [
        { japanese: "社長の命令なので、従わざるを得ない。", reading: "しゃちょうのめいれいなので、したがわざるをえない。", vietnamese: "Vì là lệnh giám đốc nên buộc phải tuân theo." },
        { japanese: "証拠がある以上、認めざるを得ない。", reading: "しょうこがあるいじょう、みとめざるをえない。", vietnamese: "Vì có bằng chứng nên buộc phải thừa nhận." }
      ],
      jlpt: "N3",
      tags: ["Compulsion", "Formal", "Written"]
    },
    savedAt: Date.now()
  },
  {
    id: "g15",
    structure: "〜ばかりでなく",
    reading: "ばかりでなく",
    meaning: "Không chỉ... mà còn...",
    usage: "Biểu thị sự mở rộng: ngoài A ra còn có B (thường tăng cấp)",
    construction: "N/V/Adj + ばかりでなく + (も/さえ)",
    jlpt: "N3",
    tags: ["Addition", "Escalation", "Conjunction"],
    extendedAnalysis: {
      generalMeaning: "Mở rộng từ điều này sang điều khác, thường theo hướng tăng cấp hoặc mở rộng phạm vi.",
      contexts: [
        "Tăng cấp: 彼は頭がいいばかりでなく、スポーツも得意だ",
        "Mở rộng: 日本ばかりでなく、韓国でも人気がある"
      ],
      constructionRules: [
        "N + ばかりでなく",
        "V-plain + ばかりでなく",
        "い-adj + ばかりでなく",
        "な-adj + な/である + ばかりでなく"
      ],
      examples: [
        { japanese: "彼は英語ばかりでなく、フランス語も話せる。", reading: "かれはえいごばかりでなく、フランスごもはなせる。", vietnamese: "Anh ấy không chỉ nói tiếng Anh mà còn nói cả tiếng Pháp." },
        { japanese: "値段が高いばかりでなく、品質も悪い。", reading: "ねだんがたかいばかりでなく、ひんしつもわるい。", vietnamese: "Không chỉ giá cao mà chất lượng còn kém." }
      ],
      jlpt: "N3",
      tags: ["Not-only", "But-also", "Escalation"]
    },
    savedAt: Date.now()
  },

  // ─── N2 LEVEL ───
  {
    id: "g16",
    structure: "〜べき",
    reading: "べき",
    meaning: "Nên, phải (nghĩa vụ đạo đức)",
    usage: "Biểu thị điều nên làm vì đạo đức, luật lệ hoặc lý do chính đáng",
    construction: "V-dictionary + べき(だ) (する → すべき)",
    jlpt: "N2",
    tags: ["Obligation", "Moral", "Should"],
    extendedAnalysis: {
      generalMeaning: "Biểu thị nghĩa vụ hoặc điều đương nhiên phải làm, mạnh hơn ほうがいい.",
      contexts: [
        "Đạo đức: 約束は守るべきだ (nên giữ lời hứa)",
        "Luật lệ: 法律を守るべきだ (phải tuân thủ pháp luật)",
        "Phủ định: そんなことを言うべきではない (không nên nói như vậy)"
      ],
      constructionRules: [
        "V-dict + べき(だ)",
        "する → すべき(だ)",
        "Phủ định: V-dict + べきではない"
      ],
      detailedComparison: [
        { similarStructure: "ほうがいい", nuance: "ほうがいい = lời khuyên nhẹ nhàng", difference: "べき mang tính NGHĨA VỤ, mạnh hơn. ほうがいい chỉ là gợi ý." },
        { similarStructure: "なければならない", nuance: "なければならない = bắt buộc phải", difference: "べき: nên (đạo đức). なければならない: phải (quy tắc)." }
      ],
      examples: [
        { japanese: "学生は勉強すべきだ。", reading: "がくせいはべんきょうすべきだ。", vietnamese: "Học sinh nên học bài." },
        { japanese: "嘘をつくべきではない。", reading: "うそをつくべきではない。", vietnamese: "Không nên nói dối." }
      ],
      jlpt: "N2",
      tags: ["Obligation", "Moral-duty"]
    },
    savedAt: Date.now()
  },
  {
    id: "g17",
    structure: "〜わけがない",
    reading: "わけがない",
    meaning: "Không có lý do nào, không thể nào",
    usage: "Biểu thị sự phủ định mạnh mẽ dựa trên logic — điều đó không thể xảy ra",
    construction: "V-plain / い-Adj / な-Adj + な + わけがない",
    jlpt: "N2",
    tags: ["Negation", "Logic", "Impossibility"],
    extendedAnalysis: {
      generalMeaning: "Phủ định mạnh dựa trên logic: xét mọi yếu tố thì điều đó KHÔNG THỂ xảy ra.",
      contexts: [
        "Phủ định logic: 彼が犯人なわけがない (không thể nào anh ấy là thủ phạm)",
        "Phủ định khả năng: こんな難しい問題が解けるわけがない (không thể giải bài khó thế)"
      ],
      constructionRules: [
        "V-plain + わけがない",
        "い-adj + わけがない",
        "な-adj + な + わけがない",
        "N + な/の + わけがない"
      ],
      detailedComparison: [
        { similarStructure: "はずがない", nuance: "はずがない = không chắc (kỳ vọng)", difference: "わけがない phủ định MẠNH hơn (logic). はずがない phủ định kỳ vọng." }
      ],
      examples: [
        { japanese: "そんな簡単なわけがない。", reading: "そんなかんたんなわけがない。", vietnamese: "Không thể nào đơn giản vậy." },
        { japanese: "彼が嘘をつくわけがない。", reading: "かれがうそをつくわけがない。", vietnamese: "Không có lý do nào anh ấy nói dối." }
      ],
      jlpt: "N2",
      tags: ["Negation", "Strong-denial"]
    },
    savedAt: Date.now()
  },
  {
    id: "g18",
    structure: "〜ものの",
    reading: "ものの",
    meaning: "Mặc dù, tuy nhưng",
    usage: "Biểu thị sự tương phản ở mức chính thức — thừa nhận điều trước nhưng kết quả trái ngược",
    construction: "V-plain / い-Adj / な-Adj + である + ものの / V-た + ものの",
    jlpt: "N2",
    tags: ["Contrast", "Concession", "Formal"],
    extendedAnalysis: {
      generalMeaning: "Thừa nhận sự thật A, nhưng kết quả/tình trạng lại trái ngược (trang trọng hơn のに).",
      contexts: [
        "Trang trọng: 買ったものの使っていない (mua rồi nhưng không dùng)",
        "Văn viết: 理解したものの実践できない (hiểu nhưng không thực hành được)"
      ],
      constructionRules: [
        "V-ta/plain + ものの",
        "い-adj + ものの",
        "な-adj + である + ものの"
      ],
      detailedComparison: [
        { similarStructure: "のに", nuance: "のに có cảm xúc bất mãn. ものの trang trọng, trung tính hơn", difference: "ものの: văn viết, formal. のに: văn nói, cảm xúc." },
        { similarStructure: "けれども", nuance: "けれども trung tính hoàn toàn. ものの nhấn mạnh sự thừa nhận", difference: "ものの: thừa nhận rồi tương phản. けれども: đơn giản tương phản." }
      ],
      examples: [
        { japanese: "日本語を勉強しているものの、まだ上手に話せない。", reading: "にほんごをべんきょうしているものの、まだじょうずにはなせない。", vietnamese: "Mặc dù đang học tiếng Nhật nhưng vẫn chưa nói giỏi." },
        { japanese: "計画を立てたものの、実行に移せていない。", reading: "けいかくをたてたものの、じっこうにうつせていない。", vietnamese: "Mặc dù đã lên kế hoạch nhưng chưa thực hiện được." }
      ],
      jlpt: "N2",
      tags: ["Concession", "Written", "Formal"]
    },
    savedAt: Date.now()
  },

  // ─── KEIGO (敬語) ───
  {
    id: "g19",
    structure: "〜いらっしゃる",
    reading: "いらっしゃる",
    meaning: "Ở, đi, đến (kính ngữ)",
    usage: "Dạng tôn kính của いる/行く/来る, dùng khi nói về hành động của người trên",
    construction: "Pronoun/Subject + いらっしゃる",
    jlpt: "N3",
    tags: ["Keigo", "Sonkeigo", "Respectful"],
    extendedAnalysis: {
      generalMeaning: "Kính ngữ (尊敬語) thay thế cho いる/行く/来る khi nói về người được tôn trọng.",
      contexts: [
        "いる → いらっしゃる: 先生はいらっしゃいますか？",
        "行く → いらっしゃる: 社長はどちらへいらっしゃいますか？",
        "来る → いらっしゃる: お客様がいらっしゃいました"
      ],
      constructionRules: [
        "Subject (người trên) + いらっしゃる",
        "Chia: いらっしゃいます (polite), いらっしゃった (past)"
      ],
      detailedComparison: [
        { similarStructure: "おる", nuance: "おる = khiêm tốn語 của いる (nói về bản thân)", difference: "いらっしゃる: tôn kính (người khác). おる: khiêm tốn (bản thân)." }
      ],
      examples: [
        { japanese: "先生はいらっしゃいますか。", reading: "せんせいはいらっしゃいますか。", vietnamese: "Thầy/cô có ở đây không?" },
        { japanese: "お客様がいらっしゃいました。", reading: "おきゃくさまがいらっしゃいました。", vietnamese: "Khách đã đến." }
      ],
      jlpt: "N3",
      tags: ["Honorific", "尊敬語", "いる-行く-来る"]
    },
    savedAt: Date.now()
  },
  {
    id: "g20",
    structure: "〜させていただく",
    reading: "させていただく",
    meaning: "Xin phép được [làm gì] (khiêm tốn)",
    usage: "Dạng khiêm tốn nhất để xin phép, tôn trọng đối phương khi muốn thực hiện hành động",
    construction: "V-させて + いただく",
    jlpt: "N3",
    tags: ["Keigo", "Kenjougo", "Humble", "Permission"],
    extendedAnalysis: {
      generalMeaning: "Xin phép một cách khiêm tốn nhất — ngụ ý: \"nhờ ân huệ của anh/chị mà tôi được phép làm...\"",
      contexts: [
        "Xin phép: 質問させていただきます (xin phép hỏi)",
        "Tuyên bố lịch sự: 説明させていただきます (xin phép giải thích)",
        "Từ chối lịch sự: 辞退させていただきます (xin phép từ chối)"
      ],
      constructionRules: [
        "V-causative (させ) + て + いただく",
        "Formal: させていただきます",
        "Past: させていただきました"
      ],
      commonMistakes: [
        { incorrect: "休みをいただきます (muốn nói xin phép nghỉ)", correct: "休ませていただきます", explanation: "Khi XIN PHÉP hành động, cần dùng V-させて + いただく." }
      ],
      detailedComparison: [
        { similarStructure: "てもいいですか", nuance: "てもいいですか = xin phép thông thường", difference: "させていただく trang trọng hơn rất nhiều, dùng trong business." }
      ],
      examples: [
        { japanese: "一つ質問させていただいてもよろしいですか。", reading: "ひとつしつもんさせていただいてもよろしいですか。", vietnamese: "Tôi có thể xin phép hỏi một câu không ạ?" },
        { japanese: "本日は司会を務めさせていただきます。", reading: "ほんじつはしかいをつとめさせていただきます。", vietnamese: "Hôm nay tôi xin phép đảm nhận vai trò MC." }
      ],
      jlpt: "N3",
      tags: ["Humble", "謙譲語", "Business-Japanese"]
    },
    savedAt: Date.now()
  }
];

// ============================================================================
// MOCK COMPARISONS - 2 examples to demo so sánh feature
// ============================================================================
export const MOCK_COMPARISONS: SavedComparison[] = [
  {
    id: "comp-1",
    query: "は vs が",
    title: "は vs が — Trợ từ chủ đề vs Trợ từ chủ ngữ",
    type: "PARTICLE",
    commonMeaning: "Cả hai đều liên quan đến chủ ngữ trong câu tiếng Nhật",
    keyDistinction: "は đánh dấu CHỦ ĐỀ (thông tin đã biết), が đánh dấu CHỦ NGỮ (thông tin mới/nhấn mạnh)",
    items: [
      {
        term: "は",
        reading: "は",
        meaning: "Trợ từ chủ đề — đánh dấu chủ đề, thông tin đã biết",
        nuance: "Nói về điều đã biết, đưa ra bình luận. Chức năng: topicalization.",
        usageContext: "Giới thiệu chủ đề, tương phản, ngữ cảnh rộng",
        tags: ["Topic", "Known-info", "Contrast"],
        example: "私は学生です。",
        exampleMeaning: "Tôi là học sinh. (nói về tôi — chủ đề)"
      },
      {
        term: "が",
        reading: "が",
        meaning: "Trợ từ chủ ngữ — đánh dấu chủ ngữ, thông tin mới",
        nuance: "Nhấn mạnh chủ ngữ, thông tin mới, trả lời câu hỏi 'ai/cái gì'.",
        usageContext: "Thông tin mới, tồn tại, cảm xúc, mệnh đề phụ",
        tags: ["Subject", "New-info", "Emphasis"],
        example: "誰が来ましたか。田中さんが来ました。",
        exampleMeaning: "Ai đã đến? — Tanaka đã đến. (nhấn mạnh AI)"
      }
    ],
    scenarios: [
      {
        scenario: "Giới thiệu bản thân",
        examples: [
          { term: "は", sentence: "私は田中です。", sentenceMeaning: "Tôi là Tanaka.", explanation: "は: Nói VỀ tôi (chủ đề đã biết)" },
          { term: "が", sentence: "田中が私です。", sentenceMeaning: "Tanaka chính là tôi.", explanation: "が: Nhấn mạnh AI là Tanaka (trả lời câu hỏi)" }
        ]
      },
      {
        scenario: "Mô tả tồn tại",
        examples: [
          { term: "が", sentence: "部屋に猫がいる。", sentenceMeaning: "Trong phòng có con mèo.", explanation: "が: Giới thiệu sự tồn tại mới — con mèo. Với ある/いる luôn dùng が" },
          { term: "は", sentence: "猫は部屋にいる。", sentenceMeaning: "Con mèo thì ở trong phòng.", explanation: "は: Con mèo (đã biết) → nó Ở ĐÂU — nói về vị trí" }
        ]
      },
      {
        scenario: "Tương phản",
        examples: [
          { term: "は", sentence: "肉は好きですが、魚は嫌いです。", sentenceMeaning: "Thịt thì thích, nhưng cá thì ghét.", explanation: "は: Dùng để TƯƠNG PHẢN hai thứ — thịt vs cá" },
          { term: "が", sentence: "肉が好きです。", sentenceMeaning: "Tôi thích thịt.", explanation: "が: Với 好き/嫌い/ほしい — luôn dùng が cho đối tượng cảm xúc" }
        ]
      }
    ],
    scales: [
      {
        label: "Thông tin",
        leftLabel: "Đã biết (old info)",
        rightLabel: "Mới (new info)",
        values: [
          { term: "は", value: 20 },
          { term: "が", value: 80 }
        ]
      },
      {
        label: "Nhấn mạnh",
        leftLabel: "Trung tính",
        rightLabel: "Nhấn mạnh",
        values: [
          { term: "は", value: 30 },
          { term: "が", value: 90 }
        ]
      }
    ],
    savedAt: Date.now()
  },
  {
    id: "comp-2",
    query: "聞く vs 聴く",
    title: "聞く vs 聴く — Nghe (tự nhiên) vs Lắng nghe (chủ ý)",
    type: "VOCABULARY",
    commonMeaning: "Cả hai đều có nghĩa 'nghe' bằng tai, đọc là きく",
    keyDistinction: "聞く = nghe tự nhiên, thụ động. 聴く = lắng nghe chủ ý, tập trung.",
    items: [
      {
        term: "聞く",
        reading: "きく",
        meaning: "Nghe (tự nhiên), hỏi",
        nuance: "Nghe tự nhiên không chủ ý, hoặc hỏi thông tin. Thông dụng nhất.",
        hanViet: "VĂN",
        usageContext: "Nghe âm thanh tự nhiên, hỏi ai đó, nghe tin tức",
        tags: ["Hearing", "Asking", "Natural"],
        example: "鳥の声が聞こえる。",
        exampleMeaning: "Nghe thấy tiếng chim. (tự nhiên, thụ động)"
      },
      {
        term: "聴く",
        reading: "きく",
        meaning: "Lắng nghe (chủ ý, tập trung)",
        nuance: "Nghe với sự tập trung, chú ý — nghe nhạc, nghe bài giảng.",
        hanViet: "THÍNH",
        usageContext: "Nghe nhạc, nghe giảng, lắng nghe tâm sự",
        tags: ["Listening", "Intentional", "Focused"],
        example: "音楽を聴く。",
        exampleMeaning: "Nghe nhạc. (chủ ý, thưởng thức)"
      }
    ],
    scenarios: [
      {
        scenario: "Nghe nhạc",
        examples: [
          { term: "聴く", sentence: "毎日クラシック音楽を聴いている。", sentenceMeaning: "Mỗi ngày tôi nghe nhạc cổ điển.", explanation: "聴く: Nghe nhạc = hành động CHỦ Ý, tập trung thưởng thức" },
          { term: "聞く", sentence: "隣の部屋から音楽が聞こえる。", sentenceMeaning: "Nghe thấy nhạc từ phòng bên cạnh.", explanation: "聞く: Âm thanh tự nhiên lọt vào tai, không chủ ý" }
        ]
      },
      {
        scenario: "Hỏi/Tìm thông tin",
        examples: [
          { term: "聞く", sentence: "道を聞く。", sentenceMeaning: "Hỏi đường.", explanation: "聞く mang nghĩa HỎI — chỉ聞く có nghĩa này, 聴く không có" },
          { term: "聴く", sentence: "講演を聴く。", sentenceMeaning: "Nghe bài diễn thuyết.", explanation: "聴く: Lắng nghe nghiêm túc, tập trung vào nội dung" }
        ]
      }
    ],
    scales: [
      {
        label: "Mức độ chủ ý",
        leftLabel: "Thụ động (passive)",
        rightLabel: "Chủ ý (active)",
        values: [
          { term: "聞く", value: 25 },
          { term: "聴く", value: 85 }
        ]
      },
      {
        label: "Tần suất sử dụng",
        leftLabel: "Ít dùng",
        rightLabel: "Rất thường dùng",
        values: [
          { term: "聞く", value: 90 },
          { term: "聴く", value: 50 }
        ]
      }
    ],
    savedAt: Date.now()
  }
];
