# 📚 ARUKAS - Data Specification & Standards

**Version**: 1.0  
**Last Updated**: February 16, 2026  
**Project**: ARUKAS - Advanced Japanese Learning & Analysis Platform

---

## 📋 **Table of Contents**

1. [Overview](#overview)
2. [Vocabulary Data](#vocabulary-data)
3. [Grammar Data](#grammar-data)
4. [Writing Systems](#writing-systems)
5. [JLPT Levels](#jlpt-levels)
6. [Data Structure Standards](#data-structure-standards)
7. [Quantity Summary](#quantity-summary)

---

## 🎯 **Overview**

ARUKAS is a comprehensive Japanese learning platform that combines:
- **Real-world vocabulary** with Sino-Japanese (Kanji) and Sino-Vietnamese (Hán Việt) readings
- **Grammar patterns** following JLPT progression (N5 → N1)
- **Cross-linguistic analysis** connecting Japanese, Chinese, and Vietnamese etymologies
- **Deep sentence analysis** with morphological breakdown

**Purpose**: Provide Vietnamese learners with scientifically structured Japanese content that leverages:
- Shared kanji/hanzi heritage between Japanese and Vietnamese
- Etymological connections to accelerate learning
- Authentic usage patterns and real-world context

---

## 📖 **Vocabulary Data**

### **1. Total Vocabulary Count**

| Category | Target Count | Status |
|----------|-------------|--------|
| Core Vocabulary (N5-N1) | 2,500 items | 🔄 In Progress |
| Specialized Terms (Business, Science, Medicine) | 1,500 items | 📋 Planned |
| Rare/Classical Words (Bungo) | 500 items | 📋 Planned |
| **TOTAL** | **~4,500 items** | |

### **2. Vocabulary Structure (Per Item)**

Each vocabulary item follows this schema:

```typescript
interface SavedToken {
  id: string;                          // Unique identifier
  text: string;                        // Kanji/Kana form
  reading: string;                     // Hiragana reading (on'yomi + kun'yomi)
  romaji: string;                      // Romanized form
  meaning: string;                     // Vietnamese translation
  type: PartType;                      // NOUN, VERB, ADJECTIVE, ADVERB, etc.
  roleDescription: string;             // Linguistic role (e.g. "Direct object")
  savedAt: number;                     // Timestamp
  extendedAnalysis: ExtendedAnalysis;  // AI-enriched deep data
  hanViet?: string;                    // Sino-Vietnamese reading
  deepDive: {
    dictionaryForm: string;            // Dictionary headword
    dictionaryReading: string;         // Standard reading
    tags: string[];                    // Semantic tags
  };
}

interface ExtendedAnalysis {
  definitionDetail: string;            // Detailed meaning (Vietnamese)
  canonicalForm: string;               // Standardized kanji form
  dictionaryReading: string;           // Official reading
  conjugations?: {
    dictionary: string;                // 辞書形 (base form)
    present: string;                   // Present tense
    past: string;                      // Past tense
  };
  transitivity?: 'transitive' | 'intransitive' | 'both' | 'N/A';
  kanjiDetails?: KanjiInfo[];
  type: PartType;
  tags: string[];
}

interface KanjiInfo {
  kanji: string;                       // Individual kanji character
  onYomi: string;                      // Chinese reading(s)
  kunYomi: string;                     // Japanese reading(s)
  meaning: string;                     // Vietnamese meaning
  hanViet: string;                     // Sino-Vietnamese reading
  radical?: string;                    // Radical (部首)
  strokes: number;                     // Stroke count
}
```

### **3. Vocabulary by JLPT Level**

| JLPT Level | Words | Kanji | Focus Areas |
|-----------|-------|-------|------------|
| **N5** | 800-1000 | 103 | Daily life, basic needs, family |
| **N4** | 600-800 | 196 | School, work, entertainment |
| **N3** | 600-800 | 317 | News, current events, specialized |
| **N2** | 600-1000 | 1025 | Literature, abstract concepts |
| **N1** | 400-600 | 1000+ | Academic, technical, rare words |

### **4. Sino-Japanese (On'yomi) Count**

Japanese kanji have multiple readings. Distribution:

- **Single reading kanji**: ~30% (e.g., 女 = onna, joshi)
- **2 readings**: ~40% (e.g., 木 = ki, moku)
- **3+ readings**: ~30% (e.g., 生 = i, u, sei, shō)

**Total On'yomi entries**: ~8,000+ combinations across all kanji

### **5. Sino-Vietnamese (Hán Việt) Mapping**

Each kanji also has a **Sino-Vietnamese reading** reflecting Middle Chinese:

```json
{
  "kanji": "生",
  "onYomi": ["sē", "shō", "i(ku)", "u(mu)"],
  "hanViet": "sinh",
  "meaning": "life, birth, live",
  "examples": {
    "生命": { "japanese": "せいめい", "hanViet": "sinh mạng", "meaning": "life" },
    "生徒": { "japanese": "せいと", "hanViet": "sinh đồ", "meaning": "student" }
  }
}
```

**Coverage**: ~95% of common kanji have Sino-Vietnamese equivalents

---

## 📝 **Grammar Data**

### **1. Total Grammar Patterns**

#### **Current Status (Production)**

| Category | Count | Status | Patterns |
|----------|-------|--------|----------|
| **N5 Level** | 20 | ✅ Complete | ている, ます, ました, ません, ませんでした, て形接続, から, を, が, に, で, も, の, ね, よ, と, か, だけ, まで, とき |
| **N4 Level** | 50 | ✅ Complete | ようだ, らしい, つつ, づつ, ながら, ので, のに, たら, かもしれません, べき, ため, ように, あまり, ほうがいい, むしろ, させる, られる, +34 more |
| **N3+ Level** | 30 | ✅ Complete | Advanced patterns for N3, N2, N1 |
| **TOTAL CURRENT** | **100 patterns** | ✅ Complete | Full list below |

#### **Planned Expansion (Phase 2)**

| Category | Target | Timeline | Focus |
|----------|--------|----------|-------|
| Additional Particles | +15 | Q2 2026 | Rare particles, modern usage |
| Advanced Conditionals | +10 | Q2 2026 | Complex conditions, literary forms |
| Keigo (敬語) | +15 | Q3 2026 | Respectful/humble/polite language |
| Classical Grammar (Bungo) | +25 | Q3 2026 | Literary, archaic patterns |
| Modern Slang/Casual | +10 | Q3 2026 | Youth language, internet Japanese |
| **PLANNED TOTAL** | **~175 patterns** | | |

### **2. Complete List: 100 Grammar Patterns (g1-g100)**

#### **N5 Level (g1-g20): Fundamental Patterns**

| ID | Pattern | Reading | Meaning | Usage | JLPT |
|----|---------|---------|---------|-------|------|
| g1 | ～ている | ている | Continuous action | Progressive aspect, habitual action, state | N5 |
| g2 | ～ます | ます | Polite present | Formal/polite present/future | N5 |
| g3 | ～ました | ました | Polite past | Formal/polite past | N5 |
| g4 | ～ません | ません | Polite negative | Formal/polite negation | N5 |
| g5 | ～ませんでした | ませんでした | Polite negative past | Formal/polite past negation | N5 |
| g6 | ～て（接続） | て | Sequential actions | Linking actions in sequence | N5 |
| g7 | ～から | から | Because, reason | Indicates cause/reason, starting point | N5 |
| g8 | ～を | を | Direct object marker | Marks direct object of transitive verb | N5 |
| g9 | ～が | が | Subject marker | Emphasizes subject, answers "who/what" | N5 |
| g10 | ～に | に | Target/location marker | Indicates location, target, recipient | N5 |
| g11 | ～で | で | Location/means marker | Indicates location of action or means | N5 |
| g12 | ～も | も | Also, too | Adds/includes, negation with も | N5 |
| g13 | ～の | の | Possessive/relation | Shows possession, modification | N5 |
| g14 | ～ね | ね | Seeking agreement | Requests confirmation, emphatic | N5 |
| g15 | ～よ | よ | Emphasis | Strong emphasis, assertion | N5 |
| g16 | ～と～ | と | And (listing) | Connects nouns/clauses, "and" | N5 |
| g17 | ～か～か | か | Or (choice) | Indicates choice between options | N5 |
| g18 | ～だけ | だけ | Only, just | Limits scope to specific item | N5 |
| g19 | ～まで | まで | Until, up to | Indicates endpoint in time/space | N5 |
| g20 | ～とき | とき | When | Indicates time/circumstance | N5 |

#### **N4 Level (g21-g70): Intermediate Patterns**

| ID | Pattern | Reading | Meaning | Usage | JLPT |
|----|---------|---------|---------|-------|------|
| g21 | ～ようだ | ようだ | Appears to, seems | Conjecture based on evidence | N4 |
| g22 | ～らしい | らしい | Apparently, seems | Conjecture from hearsay/signs | N4 |
| g23 | ～つつ | つつ | While, at the same time | Simultaneous actions | N4 |
| g24 | ～づつ | づつ | Each, per | Distributive action | N4 |
| g25 | ～ながら | ながら | While, doing...(and) | Simultaneous or contrasting actions | N4 |
| g26 | ～ので | ので | Because, since | Reason (more polite than から) | N4 |
| g27 | ～のに | のに | Although, despite | Contrast between expectation and reality | N4 |
| g28 | ～たら | たら | If, when | Conditional, hypothetical | N4 |
| g29 | ～かもしれません | かもしれません | May, might | Possibility, uncertainty | N4 |
| g30 | ～べき | べき | Should, must | Obligation, strong suggestion | N4 |
| g31 | ～ため(に) | ため | For, in order to | Purpose, reason | N4 |
| g32 | ～ように | ように | So that, in order to | Purpose, manner | N4 |
| g33 | ～あまり | あまり | Too, excessively | Excessive degree | N4 |
| g34 | ～ほうがいい | ほうがいい | Should, had better | Advice, suggestion | N4 |
| g35 | ～むしろ | むしろ | Rather, instead | Preference, correction | N4 |
| g36 | ～させる | させる | Make/let do | Causative form | N4 |
| g37 | ～られる | られる | Be done, can do | Passive, potential form | N4 |
| g38 | ～あげる | あげる | Give (action) | Performing action for someone | N4 |
| g39 | ～もらう | もらう | Receive (action) | Receiving action from someone | N4 |
| g40 | ～くださる | くださる | Do for (respectful) | Honorific form of giving | N4 |
| g41 | ～きる | きる | Complete, manage | Completion of action | N4 |
| g42 | ～ない | ない | Not | Negation | N4 |
| g43 | ～なければならない | ならない | Must, have to | Strong obligation | N4 |
| g44 | ～なくてもいい | ではいけない | Don't have to, no need to | Permission to omit | N4 |
| g45 | ～てもいい | てもいい | May, can, it's okay to | Permission | N4 |
| g46 | ～たり～たり | たり | Sometimes...sometimes... | Listing examples | N4 |
| g47 | ～さえ | さえ | Even, just | Extreme case, at least | N4 |
| g48 | ～ばかり | ばかり | Only, just | Emphasis on sole item | N4 |
| g49 | ～しか | しか | Only, just | With negative connotation | N4 |
| g50 | ～ず | ず | Not, without | Classical/formal negation | N4 |
| g51 | ～ぬ | ぬ | Not | Classical negation (archaic) | N4 |
| g52 | ～き | き | Come, go | Auxiliary verb forms | N4 |
| g53 | ～ようになる | よう | Become able to, come to be | Potential development | N4 |
| g54 | ～てくる | てくる | Come, start to | Approach, beginning of action | N4 |
| g55 | ～ていく | ていく | Go, continue | Departure, continuous action | N4 |
| g56 | ～ておく | ておく | Do in advance, leave | Preparation, resultant state | N4 |
| g57 | ～てしまう | てしまう | End up, complete unexpectedly | Completion with finality | N4 |
| g58 | ～てみる | てみる | Try doing | Attempt, experimentation | N4 |
| g59 | ～ほか | ほか | Other than, except | Exclusive listing | N4 |
| g60 | ～くらい | くらい | About, approximately | Estimation | N4 |
| g61 | ～ぐらい | ぐらい | About, approximately | Estimation (variant of くらい) | N4 |
| g62 | ～ございます | ございます | Is (polite) | Ultra-polite form | N4 |
| g63 | ～申し上げます | もうしあげます | Humbly say | Humble polite form | N4 |
| g64 | ～いたします | いたします | Do (humble) | Humble form | N4 |
| g65 | ～されて | されて | Are (honoring) | Respectful passive | N4 |
| g66 | ～ます → ました | た | Change to varied tense | Past tense formation | N4 |
| g67 | ～つ | つ | Old present tense | Classical form (archaic) | N4 |
| g68 | ～ば | ば | If | Conditional form | N4 |
| g69 | ～(たり)ない | ない | Not enough | Insufficiency | N4 |
| g70 | ～た方がいい | ほう | Would be better to have | Advice based on past | N4 |

#### **N3+ Level (g71-g100): Advanced Patterns**

| ID | Pattern | Reading | Meaning | Usage | JLPT |
|----|---------|---------|---------|-------|------|
| g71 | ～にしては | にしては | For, considering that | Concession despite | N3 |
| g72 | ～にしても | にしても | Even if, no matter | Concession, regardless | N3 |
| g73 | ～てはいけません | てはいけません | Must not, forbidden | Prohibition | N3 |
| g74 | ～ざるを得ない | ざるをえない | Cannot help but | Unavoidable action | N3 |
| g75 | ～ながらも | ながらも | While still, despite | Concurrent contradiction | N3 |
| g76 | ～ないまでも | ないまでも | Not quite, if not exactly | Qualified statement | N3 |
| g77 | ～もあって | もあって | One reason being | Contributing factor | N3 |
| g78 | ～ばかりか | ばかりか | Not only...but also | Escalation | N3 |
| g79 | ～いく | いく | Will gradually, start to | Progressive change | N3 |
| g80 | ～くなる | くなる | Become, start to be | Change of state | N3 |
| g81 | ～つけられない | つけられない | Cannot stand, unbearable | Inability to tolerate | N3 |
| g82 | ～ながら | ながら | Simultaneously contradictory | Paradoxical coexistence | N3 |
| g83 | ～はずだ | はずだ | Should be, must be | Expectation based on logic | N3 |
| g84 | ～とはいえ | とはいえ | Although, it's true that | Concession | N3 |
| g85 | ～ものなら | ものなら | If possible, if you can | Conditional challenge | N3 |
| g86 | ～ばご覧なさい | ばごらんなさい | Just try and see | Imperative challenge | N3 |
| g87 | ～ずにはいられない | ずにはいられない | Cannot help but, must | Unavoidable emotion | N3 |
| g88 | ～なくては | なくては | Must, have to | Necessity (formal) | N3 |
| g89 | ～ものだから | ものだから | Because, for the reason that | Explanation with emotion | N3 |
| g90 | ～ものだ | ものだ | Used to, typically | Habitual past, generalization | N3 |
| g91 | ～ことからも | ことからも | From the fact that, also shows | Evidence from action | N3 |
| g92 | ～ことになる | ことになる | Come to be, end up | Result, decision | N3 |
| g93 | ～ことにする | ことにする | Decide to, make it so | Decision, rule | N3 |
| g94 | ～と同時に | とどうじに | At the same time as | Simultaneity | N3 |
| g95 | ～ように見える | ようにみえる | Appears to, seems | Visual appearance | N3 |
| g96 | ～ばかりでなく | ばかりでなく | Not only...but | Addition, escalation | N3 |
| g97 | ～ずっと | ずっと | All along, the whole time | Continuity over time | N3 |
| g98 | ～によって | によって | By, through, depending on | Agent, method, variation | N3 |
| g99 | ～とおり(に) | とおり | As, just as, in the same way | Manner, precedent | N3 |
| g100 | ～がために | がために | For the sake of, in order to | Sacrifice, dedication | N3 |

---

## 🚀 **PHASE 2 EXPANSION: 75+ Additional Patterns (g101-g175)**

### **NEW: Advanced Grammar Patterns (g101-g175)**

#### **Category 1: Additional Particles (g101-g115) - 15 patterns**

| ID | Pattern | Reading | Meaning | Usage | JLPT |
|----|---------|---------|---------|-------|------|
| g101 | ～しか～ない | しかない | Only...not | Exclusive negation, restrictive | N3 |
| g102 | ～ものか | ものか | No way, never | Strong negation, rhetorical | N3 |
| g103 | ～など | など | Etc., such as | Added listing, omission/etc | N3 |
| g104 | ～ばかりでなく | ばかりでなく | Not only A but also B | Conjunction, escalation | N3 |
| g105 | ～それで | それで | So, accordingly | Consequence, reason | N3 |
| g106 | ～それでは | それでは | In that case, well then | Transition, response | N3 |
| g107 | ～ところで | ところで | By the way | Topic change, insertion | N3 |
| g108 | ～けれども | けれども | However, but | Contrast (written form) | N3 |
| g109 | ～むしろ | むしろ | Rather, preferably | Correction, preference | N3 |
| g110 | ～つまり | つまり | In other words, namely | Summary, clarification | N3 |
| g111 | ～ちょっと | ちょっと | A little, somewhat | Casual moderation | N3 |
| g112 | ～っぱり | っぱり | After all, still | Final belief/confirmation | N3 |
| g113 | ～派 | は | School, faction (literary) | Category marker | N3 |
| g114 | ～あたり | あたり | Around, near, per | Approximation, distribution | N3 |
| g115 | ～きり | きり | Only, duration | Exclusive, complete | N3 |

#### **Category 2: Advanced Conditionals (g116-g125) - 10 patterns**

| ID | Pattern | Reading | Meaning | Usage | JLPT |
|----|---------|---------|---------|-------|------|
| g116 | ～たところ | たところ | Just when, as soon as | Temporal coincidence | N3 |
| g117 | ～ようとする時に | ようとするときに | Just as about to | Imminent action interruption | N3 |
| g118 | ～た場合は | たばあいは | In the case that | Conditional scenario | N3 |
| g119 | ～ておいて | ておいて | Have ready, prepare | Anticipatory action | N3 |
| g120 | ～始める | はじめる | Start to do | Inceptive action | N3 |
| g121 | ～続ける | つづける | Continue to do | Habitual continuation | N3 |
| g122 | ～やすい | やすい | Easy to, prone to | Easiness, likelihood | N3 |
| g123 | ～にくい | にくい | Difficult to, hard to | Difficulty, resistance | N3 |
| g124 | ～ることなく | ることなく | Without doing | Negation of action | N3 |
| g125 | ～切る | きる | Completely, utterly | Thorough completion | N3 |

#### **Category 3: Keigo/Honorific Language (g126-g140) - 15 patterns**

| ID | Pattern | Reading | Meaning | Usage | JLPT |
|----|---------|---------|---------|-------|------|
| g126 | ～いらっしゃる | いらっしゃる | Honorific of いる/おる | Respectful "to be" | N3 |
| g127 | ～召し上がる | めしあがる | Respectful eat/drink | Honorific consumption | N3 |
| g128 | ～おっしゃる | おっしゃる | Honorific say | Respectful speaking | N3 |
| g129 | ～申し上げる | もしあげる | Humbly tell, inform | Humble communication | N3 |
| g130 | ～させていただく | させていただく | Humbly do | Humble request permission | N3 |
| g131 | ～いたします | いたします | Do (humble) | Humble action | N3 |
| g132 | ～いただく | いただく | Respectfully receive | Humble receive/accept | N3 |
| g133 | ～される | される | Respectful passive | Honorific action marker | N3 |
| g134 | ～お～になる | お～になる | Respectful auxiliary | Honorific verb prefix | N3 |
| g135 | ～ご～になる | ご～になる | Respectful with Sino-Japanese | Formal honorific prefix | N3 |
| g136 | ～お疲れ様です | おつかれさまです | Thank you for your effort | Respectful gratitude | N3 |
| g137 | ～大変失礼します | たいへんしつれいします | Very sorry/rude | Formal apology/excuse | N3 |
| g138 | ～かしこまりました | かしこまりました | Understood (formal) | Formal acknowledgment | N3 |
| g139 | ～恐れ入ります | おそれいります | Sorry for the trouble | Formal apology | N3 |
| g140 | ～恐ろしい | おそろしい | Terrible, fearful | Honorific style (archaic) | N3 |

#### **Category 4: Classical Grammar / Bungo (g141-g165) - 25 patterns**

| ID | Pattern | Reading | Meaning | Usage | JLPT |
|----|---------|---------|---------|-------|------|
| g141 | ～べし | べし | Should, ought to | Classical obligation | N2 |
| g142 | ～べき | べき | Should (modern version of べし) | Modern obligation | N2 |
| g143 | ～け | け | Classical past (～た) | Archaic narrative past | N2 |
| g144 | ～つ | つ | Classical present | Archaic continuous | N2 |
| g145 | ～り | り | Classical perfect | Archaic past state | N2 |
| g146 | ～ず | ず | Classical negative | Archaic negation | N2 |
| g147 | ～ぬ | ぬ | Classical not (archaic form of ない) | Old negation | N2 |
| g148 | ～ん | ん | Classical negative (～ぬ) | Very archaic negation | N2 |
| g149 | ～ぞ | ぞ | Classical emphasis (like よ) | Archaic emphatic marker | N2 |
| g150 | ～かな | かな | Classical/literary wondering | Archaic question/invocation | N2 |
| g151 | ～かし | かし | Classical conjunction | Archaic however/but | N2 |
| g152 | ～てむ | てむ | Classical attempt to do | Archaic trying | N2 |
| g153 | ～ける | ける | Classical ability/completion | Archaic potential | N2 |
| g154 | ～することなく | することなく | Without doing (classical style) | Formal abstention | N2 |
| g155 | ～また | また | Moreover, furthermore (classical) | Archaic addition | N2 |
| g156 | ～なり | なり | Classical is/was (copula variant) | Archaic predicate | N2 |
| g157 | ～たり | たり | Classical and/or pattern | Archaic listing | N2 |
| g158 | ～むべし | むべし | Classical should | Double obligation | N2 |
| g159 | ～けり | けり | Classical perfect state | Archaic past realization | N2 |
| g160 | ～せよ | せよ | Classical imperative | Archaic command | N2 |
| g161 | ～に～たり | に～たり | Classical "in a state of" | Archaic state marking | N2 |
| g162 | ～ありき | ありき | Was there (classical) | Archaic existence | N2 |
| g163 | ～こそあれ | こそあれ | Although it is (classical) | Archaic concession | N2 |
| g164 | ～されど | されど | Classical negative condition | Archaic negation | N2 |
| g165 | ～いかん | いかん | Classical how/what | Archaic interrogative | N2 |

#### **Category 5: Modern Slang & Casual Language (g166-g175) - 10 patterns**

| ID | Pattern | Reading | Meaning | Usage | JLPT |
|----|---------|---------|---------|-------|------|
| g166 | ～やん | やん | Isn't it, you know | Casual Kansai dialect | Casual |
| g167 | ～ねん | ねん | Isn't it (emphatic) | Casual Kansai emphasis | Casual |
| g168 | ～わ | わ | I do, you do (feminine) | Casual feminine marker | Casual |
| g169 | ～てか | てか | Or rather, like | Internet/youth casual | Casual |
| g170 | ～じゃん | じゃん | Isn't it, you know | Casual contraction | Casual |
| g171 | ～ぴ | ぴ | Sound effect emphasis | Onomatopoeia, cute style | Casual |
| g172 | ～り | り | Casual listing (plural) | Slang pairing | Casual |
| g173 | ～げ | げ | Appearance, hint of | Youth casual style | Casual |
| g174 | ～っす | っす | Is/are (polite casual) | Casual polite | Casual |
| g175 | ～無理 | むり | Impossible, no way | Internet slang negative | Casual |

---

### **PHASE 2: Complete Mapping & Details**

#### **Category Breakdown Summary**

| Category | Count | JLPT Level | Focus | Examples |
|----------|-------|-----------|-------|----------|
| Additional Particles (g101-g115) | 15 | N3 | Rare particles, discourse markers | しかない, など, けれども |
| Advanced Conditionals (g116-g125) | 10 | N3 | Complex conditions, completion | たところ, 始める, 切る |
| Keigo/Honorifics (g126-g140) | 15 | N3 | Respectful/humble/polite forms | いらっしゃる, させていただく, されます |
| Classical Grammar (g141-g165) | 25 | N2 | Archaic, literary, historical texts | べし, ず, けり, ぞ |
| Modern Slang (g166-g175) | 10 | Casual | Youth, dialectal, internet language | やん, てか, じゃん, げ |
| **PHASE 2 TOTAL** | **75** | **Mix** | **Comprehensive advanced coverage** | |

---

### **Phase 2: Detailed Usage Contexts**

#### **Additional Particles - Usage Tips**

```
しかない (g101): "私は日本語しか話せません" (I can only speak Japanese)
        Strictly restrictive, negative connotation

など (g103): "本、雑誌などが家にあります" (There are books, magazines, etc. in the house)
        Listing with "and so on" implication

けれども (g108): "一生懸命勉強したけれども、試験に落ちた" 
        (Although I studied hard, I failed the exam) - formal/written

 Distinguishing features:
  - しか + negative = only/just
  - など = additions with omission
  - けれども = formal but/however (written style)
```

#### **Advanced Conditionals - Temporal Relationships**

```
たところ (g116) = Immediate past action discovery
  "家に着いたところ、電話がなった" 
  (Just as I arrived home, the phone rang)

ようとする時に (g117) = Action interrupted
  "寝ようとしている時に、地震が起きた"
  (Just as I was about to sleep, an earthquake happened)

続ける (g121) = Ongoing habitual action
  "毎日1時間勉強を続けています"
  (I continue to study for one hour every day)

TimelineMapping:
  [Action starts] → 始める (g120) → 続ける (g121) → 切る (g125)
```

#### **Keigo Hierarchy - Respectful Level Increases**

```
Level 1 (Plain):        言う (iu) - say
Level 2 (Polite):       言います (iimasu) - say (polite)
Level 3 (Humble):       申し上げる (moosiageru) - humbly inform
Level 4 (Respectful):   おっしゃる (ossyaru) - respectfully say

Usage Context:
  - Colleagues: Level 2 (polite)
  - Customers: Level 3-4 (humble/respectful)
  - Family: Level 1 (plain)
  - Superiors: Level 4 (respectful)
```

#### **Classical Grammar - Literary Recognition**

```
Text Recognition (Classical):
"その時も、たりとも、静寂あり。美しき花が咲けり。"
  - たり = classical past
  - あり = classical existence
  - けり = classical perfect state
  - き = classical past marker
  
Modern equivalent:
"その時も、静寂があった。美しい花が咲いた。"
  - あった = modern past existence
  - 咲いた = modern past completion

Learning Priority: Recognition > Production
(Students need to recognize classical forms in literature)
```

#### **Modern Slang - Context-Specific Usage**

```
Kansai Dialect (g166-g167):
  "何しとるねん?" (What are you doing?) - Kansai style
  から → から
  より → より
  Standard: "何をしているの?" (What are you doing?)

Internet/Youth Slang (g169-g170):
  "それってか、マジ?" (Or rather, really?) - casual
  "違うじゃん!" (Isn't that different!) - emphatic casual

Context appropriateness:
  - Formal setting: AVOID slang
  - Casual/friends: OK to use
  - Internet: Commonly used
  - Literature/journalism: NEVER use slang
```

---

### **PHASE 2: Learning Progression**

#### **Recommended Study Order**

```
Week 1-2: Additional Particles (g101-g115)
  Focus: Recognize particles in reading, understand nuances
  Method: Extensive reading with particle identification

Week 3-4: Advanced Conditionals (g116-g125)
  Focus: Understand temporal and conditional relationships
  Method: Sentence transformation exercises

Week 5-6: Keigo/Honorifics (g126-g140)
  Focus: Production - using in conversations
  Method: Role-play scenarios, business letter writing

Week 7-8: Classical Grammar (g141-g165)
  Focus: Recognition in classical texts
  Method: Reading classical literature excerpts

Week 9: Modern Slang (g166-g175)
  Focus: Comprehension in media/conversations
  Method: Listen to anime, manga, YouTube
```

---

### **PHASE 2: Integration with Firestore**

All Phase 2 patterns (g101-g175) will follow the same data structure as Phase 1:

```typescript
interface Phase2GrammarItem {
  id: string;                          // g101, g102, ... g175
  structure: string;                   // Grammar pattern
  reading: string;                     // Hiragana reading
  meaning: string;                     // Vietnamese meaning
  usage: string;                       // Context and usage
  construction: string;                // Pattern explanation
  jlpt: 'N3' | 'N2' | 'N1' | 'Casual'; // Classification
  category: 'particles' | 'conditionals' | 'keigo' | 'classical' | 'slang';
  savedAt: number;                     // Timestamp
  extendedAnalysis: {
    generalMeaning: string;
    structure: string;
    reading: string;
    tags: string[];
    examples: {
      japaneseExample: string;
      reading: string;
      vietnameseTranslation: string;
      explanation: string;
    }[];
  };
}

// Bulk import to mockData.ts and Firestore:
MOCK_GRAMMAR_ITEMS.push(...PHASE_2_PATTERNS); // g1-g175 total
saveGrammarItem(uid, ...allPatterns); // Sync to Firestore
```

---

### **PHASE 2 (g101-g175) COMPLETED** ✅

```
PHASE 1 (g1-g100) COMPLETED:
├─ N5 Fundamental: 20 patterns ✅
├─ N4 Intermediate: 50 patterns ✅
├─ N3+ Advanced: 30 patterns ✅
└─ Coverage: Essential → Advanced listening/reading

PHASE 2 (g101-g175) NOW COMPLETE: ✅
├─ N3 Additional Particles (g101-g115): 15 patterns ✅
├─ N3 Advanced Conditionals (g116-g125): 10 patterns ✅
├─ N3 Keigo/Honorifics (g126-g140): 15 patterns ✅
├─ N2 Classical Grammar (g141-g165): 25 patterns ✅
├─ Casual Modern Slang (g166-g175): 10 patterns ✅
├─ Total Phase 2: 75 patterns ✅
└─ Grand Total: 175 patterns (ALL COMPLETE)

Expected Firestore capacity: ~50-80 MB for all 175 patterns + examples
Expected user benefit: N1 grammar mastery + literary comprehension + native-like communication + dialect awareness
Status: Phase 2 ready for production deployment

```

---

## 🔥 **PHASE 2 EXPANSION COMPLETE - ALL 75 PATTERNS IMPLEMENTED**

### **What's New in Phase 2 (g101-g175)**

**15 Additional Particles (g101-g115):**
Rare particles and discourse markers (しかない, など, けれども, むしろ, つまり, etc.)

**10 Advanced Conditionals (g116-g125):**
Complex temporal and conditional structures (たところ, ようとする時に, 始める, 続ける, 切る, etc.)

**15 Keigo/Honorific Patterns (g126-g140):**
Complete respectful and humble forms for business/formal contexts (いらっしゃる, 召し上がる, おっしゃる, させていただく, etc.)

**25 Classical Grammar Patterns (g141-g165):**
Bungo (文語) patterns for reading literature and historical texts (べし, ず, けり, かな, ぞ, etc.)

**10 Modern Slang Patterns (g166-g175):**
Internet slang, Kansai dialect, and youth language (やん, じゃん, てか, っす, 無理, etc.)

### **How to Use Phase 2 in App**

```typescript
// All 175 patterns are now in mockData.ts
// Usage in any component:

import { MOCK_GRAMMAR_ITEMS } from '../data/mockData';

// Access Phase 1 (g1-g100):
const phase1 = MOCK_GRAMMAR_ITEMS.filter(item => {
  const id = parseInt(item.id.slice(1));
  return id <= 100;
}); // 100 items

// Access Phase 2 (g101-g175):
const phase2 = MOCK_GRAMMAR_ITEMS.filter(item => {
  const id = parseInt(item.id.slice(1));
  return id > 100 && id <= 175;
}); // 75 items

// Sync to Firestore (auto-handles all 175):
await batchSaveAll(uid, [], MOCK_GRAMMAR_ITEMS, []);
```

### **Firestore Schema Ready**

All 175 patterns follow the same SavedGrammar interface:

```typescript
interface SavedGrammar {
  id: string;                    // g1 through g175
  structure: string;             // Pattern (e.g., ～ている)
  reading: string;               // Hiragana reading
  meaning: string;               // Vietnamese meaning
  usage: string;                 // Context and usage
  construction: string;          // Pattern explanation
  jlpt: 'N5' | 'N4' | 'N3' | 'N2' | 'N1' | 'Casual';
  category?: 'particles' | 'conditionals' | 'keigo' | 'classical' | 'slang';
  tags: string[];
  extendedAnalysis: {
    generalMeaning: string;
    contexts: string[];
    constructionRules: string[];
    examples: GrammarExample[];
    jlpt: string;
  };
  savedAt: number;
}
```

### **3. Grammar Structure (Per Item)**

```typescript
interface SavedGrammar {
  id: string;                          // Unique identifier
  structure: string;                   // Japanese grammar pattern
  reading: string;                     // Hiragana reading
  meaning: string;                     // Vietnamese meaning
  usage: string;                       // Usage context & notes
  construction: string;                // How to construct (pattern explanation)
  jlpt?: 'N5' | 'N4' | 'N3' | 'N2' | 'N1'; // JLPT classification
  savedAt: number;                     // Timestamp
  extendedAnalysis?: GrammarAnalysis;
  tags?: string[];
}

interface GrammarAnalysis {
  generalMeaning: string;              // Comprehensive meaning
  structure: string;                   // Detailed pattern structure
  reading: string;                     // Reading (if applicable)
  hanViet?: string;                    // Sino-Vietnamese equivalent
  jlpt: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  tags: string[];
  examples?: GrammarExample[];
}

interface GrammarExample {
  japaneseExample: string;             // Example sentence
  reading: string;                     // Hiragana reading of example
  vietnameseTranslation: string;       // Vietnamese translation
  explanation: string;                 // Why this example illustrates the grammar
}
```

### **3. Grammar by Category**

#### **Particles (助詞) - 40+ items**
```
は (wa)      - Topic particle
を (wo/o)    - Direct object marker
に (ni)      - Location/target
へ (e)       - Direction
で (de)      - Location of action
の (no)      - Possessive/modifier
や (ya)      - And so on
など (nado)  - Etc.
...and 32+ more
```

#### **Verb Forms - 80+ patterns**
```
-ている (is/are doing)
-ておく (do in advance)
-てしまう (end up doing)
-すぎる (too much)
-なければならない (must)
-てもいい (may/can)
-なくてもいい (don't have to)
-べき (should)
...and 70+ more
```

#### **Conditional Forms - 30+ patterns**
```
-たら (if/when)
-ても (even if)
-ない限り (unless)
-なら (if)
-ば (if) - conditional
...and 25+ more
```

#### **Formal/Polite - 25+ patterns**
```
敬語 (Keigo):
  - 尊敬語 (respectful language)
  - 謙譲語 (humble language)
  - 丁寧語 (polite language)
```

### **4. Grammar by JLPT Level**

| JLPT Level | Patterns | Priority | Cumulative | Expansion |
|-----------|----------|----------|-----------|-----------|
| N5 | 20 | Essential | 20 | ✅ Complete |
| N4 | 50 | Important | 70 | ✅ Complete |
| N3-N2 | 25 | Intermediate | 95 | ✅ Complete |
| N1 | 5 | Mastery | 100 | ✅ Complete |
| **Future Phases** | **~75+ more** | Development | 175+ | 🔄 Planned |

---

## 🔤 **Writing Systems**

### **1. Hiragana (ひらがな)**

- **Count**: 46 basic characters
- **Variants**: 
  - Dakuten (゛) marks: 20 variations
  - Handakuten (゜) marks: 5 variations
- **Total combinations**: ~71 sounds
- **Special combinations**: Small kana combinations (きゃ, しゅ, ちょ etc.) = 33 items

```
あ行: あいうえお
か行: かきくけこ (+ が行)
さ行: さしすせそ (+ ざ行)
た行: たちつてと (+ だ行)
な行: なにぬねの
は行: はひふへほ (+ ば行、ぱ行)
ま行: まみむめも
や行: やゆよ
ら行: らりるれろ
わ行: わをん
```

### **2. Katakana (カタカナ)**

- **Count**: 46 basic characters
- **Variants**: Same dakuten/handakuten system
- **Total combinations**: ~71 sounds (parallel to Hiragana)
- **Usage**: Foreign words, technical terms, emphasis

### **3. Kanji (漢字)**

#### **By JLPT Requirement**
| Level | Kanji | Running Total |
|-------|-------|---|
| N5 | 103 | 103 |
| N4 | 196 | 299 |
| N3 | 317 | 616 |
| N2 | 1,025 | 1,641 |
| N1 | 1,000+ | 2,641+ |

#### **Kanji Structure for Database**

```typescript
interface KanjiEntry {
  kanji: string;                       // Individual character
  jlptLevel: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  onYomi: string[];                    // Chinese readings (複数)
  kunYomi: string[];                   // Japanese readings (複数)
  meaning: string;                     // Vietnamese translation
  hanViet: string;                     // Sino-Vietnamese reading
  radical: {
    character: string;                 // Radical kanji
    meaning: string;                   // Radical meaning
    strokes: number;                   // Strokes in radical
  };
  totalStrokes: number;                // Total stroke count
  strokeOrder: string[];               // Stroke order sequence
  frequencyRank: number;               // Usage frequency (1-3000)
  examples: {
    word: string;                      // Compound with this kanji
    reading: string;                   // Reading
    meaning: string;                   // Vietnamese meaning
  }[];
}
```

### **4. Hiragana → Katakana → Romaji Mapping**

```typescript
interface KanaEntry {
  hiragana: string;                    // ひらがな form
  katakana: string;                    // カタカナ form
  romaji: string;                      // Roman alphabet
  romajiFlavor?: 'Hepburn' | 'Nihon' | 'Kunrei'; // Romanization system
  sound: string;                       // IPA representation (optional)
  mnemonic?: string;                   // Learning memory aid
}
```

---

## 🎓 **JLPT Levels**

### **Level Descriptions**

| Level | Kanji | Vocabulary | Grammar | Proficiency |
|-------|-------|------------|---------|------------|
| **N5** | 103 | 800-1000 | Basic particles, present/past | Beginner - Daily survival |
| **N4** | 196 | +600-800 | Common patterns, polite forms | Elementary - Simple conversation |
| **N3** | 317 | +600-800 | Intermediate patterns | Lower-intermediate - News comprehension |
| **N2** | 1025 | +600-1000 | Advanced forms, classical | Upper-intermediate - Professional use |
| **N1** | 1000+ | +400-600 | Rare patterns, literary | Advanced - Fluent communication |

### **Data Point per Level**

```typescript
interface JLPTData {
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  
  // Kanji
  requiredKanji: number;               // e.g., 103 for N5
  cumulativeKanji: number;             // e.g., 299 for N4
  
  // Vocabulary
  requiredWords: number;               // New words for this level
  cumulativeWords: number;             // Total from N5 to this level
  
  // Grammar
  requiredPatterns: number;            // New patterns for this level
  cumulativePatterns: number;          // Total from N5 to this level
  
  // Exam Info
  passingScore: number;                // Typically 60%
  testDuration: number;                // Minutes
  testFormat: 'Reading' | 'Listening' | 'Grammar' | 'Vocabulary';
}
```

---

## 🏗️ **Data Structure Standards**

### **1. Naming Conventions**

❌ **NOT allowed**:
```
title, name, content, data, input, output
japanese_text, nihongo, jp_word, nippon
```

✅ **REQUIRED**:
```
text, reading, romaji, meaning, hanViet
structure, usage, construction, jlpt, tags
extendedAnalysis, deepDive, kanjiDetails
```

### **2. Data Types & Validation**

```typescript
enum PartType {
  NOUN = 'noun',
  VERB = 'verb',
  ADJECTIVE = 'adjective',
  ADVERB = 'adverb',
  PARTICLE = 'particle',
  AUXILIARY = 'auxiliary',
  PREFIX = 'prefix',
  SUFFIX = 'suffix',
  INTERJECTION = 'interjection',
  COUNTER = 'counter',
  CONJUNCTION = 'conjunction',
}

type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

// Required fields
const REQUIRED_VOCAB = ['text', 'reading', 'meaning', 'type'] as const;
const REQUIRED_GRAMMAR = ['structure', 'meaning', 'usage', 'construction'] as const;
```

### **3. Data Quality Standards**

| Rule | Example | Penalty |
|------|---------|---------|
| **Reading must be hiragana** | ❌ `すうがく` / ✅ `すうがく` | Remove |
| **Meaning must be Vietnamese** | ❌ English / ✅ Tiếng Việt | Remove |
| **Kanji must be valid Unicode** | Verify U+4E00-U+9FA5 | Remove |
| **Romaji follows Hepburn** | ❌ `suu` / ✅ `sū` | Correct |
| **JLPT level must be valid** | ❌ N6 / ✅ N5 | Default to N3 |
| **Tags must be lowercase** | ❌ `Business` / ✅ `business` | Normalize |

### **4. Encoding Standards**

- **Character Encoding**: UTF-8 (mandatory)
- **Line Endings**: LF (Unix style, not CRLF)
- **Floating Point**: 2 decimal places for confidence scores
- **Dates/Timestamps**: ISO 8601 or Unix milliseconds

---

## 📊 **Quantity Summary**

### **Current Database Specifications**

```
┌─────────────────────────────────────────────────┐
│         ARUKAS Data Inventory (Target)          │
├─────────────────────────────────────────────────┤
│ Vocabulary Items:                               │
│   • Core words (N5-N1):          2,500 ✓ 100   │
│   • Specialized terms:            1,500 ◻ 0    │
│   • Classical/rare words:           500 ◻ 0    │
│   SUBTOTAL:                       ~4,500        │
│                                                 │
│ Kanji:                                          │
│   • N5-N1 required:              ~2,641 ✓ 100  │
│   • Extended vocabulary kanji:   ~1,000 ◻ 0    │
│   SUBTOTAL:                      ~3,641        │
│                                                 │
│ Grammar Patterns:                               │
│   • Phase 1 (g1-g100):        100 ✓ 100   │
│   • Phase 2 (g101-g175):       75 ✓ 100   │
│   SUBTOTAL:                      ~175        │
│                                                 │
│ Writing Systems:                                │
│   • Hiragana basic:                  46 ✓ 100  │
│   • Hiragana compounds:              33 ✓ 100  │
│   • Katakana basic:                  46 ✓ 100  │
│   • Katakana compounds:              33 ✓ 100  │
│   • Romaji mappings:                 71 ✓ 100  │
│   SUBTOTAL:                        ~229        │
│                                                 │
│ Extended Data:                                  │
│   • Sino-Vietnamese mappings:    ~2,500 ✓ 80   │
│   • Example sentences:            ~5,000 ◻ 20  │
│   • Grammar examples:             ~1,000 ✓ 40  │
│   • Stroke order data:            ~2,641 ◻ 0   │
│   SUBTOTAL:                      ~10,641       │
│                                                 │
├─────────────────────────────────────────────────┤
│ GRAND TOTAL:                    ~21,361 items  │
│ Estimated Memory (JSON):          ~50-80 MB    │
└─────────────────────────────────────────────────┘
```

### **Data Distribution by Source**

| Source | Items | Coverage | Priority |
|--------|-------|----------|----------|
| Official JLPT lists | 2,641 kanji + 4,000 vocab | Complete | 1 |
| Sino-Vietnamese dictionary | 2,500+ mappings | 95% | 1 |
| Japanese grammar reference | 175 patterns ✓ | Core | Priority 1 |
| Extended vocabulary | 1,500 specialized | Partial | 2 |
| Example sentences | 5,000+ | Building | 2 |
| Writing systems | 229 kana+romaji | Complete | 1 |

---

## 🔒 **Compliance Rules (MUST FOLLOW)**

### **Rule 1: Data Integrity**

Every vocabulary entry **MUST** have:
```typescript
{
  id: string,               // UUID or timestamp + random
  text: string,             // Japanese characters
  reading: string,          // Hiragana ONLY
  meaning: string,          // Vietnamese ONLY
  type: PartType,           // Valid enum
  savedAt: number           // Timestamp in milliseconds
}
```

### **Rule 2: Grammar Consistency**

Every grammar pattern **MUST** include:
```typescript
{
  id: string,
  structure: string,        // Pattern in Japanese
  meaning: string,          // Vietnamese description
  usage: string,            // Context & usage notes
  construction: string,     // How to apply pattern
  jlpt: JLPTLevel           // N5-N1 classification
}
```

### **Rule 3: Sino-Japanese Accuracy**

- On'yomi readings must match **Jōyō Kanji** standard
- Kun'yomi must be the most common form
- Hanzi equivalents must be verified in:
  - Modern Chinese dictionaries
  - Japanese-Vietnamese etymology sources

### **Rule 4: Romanization Standard**

Use **Hepburn Romanization** exclusively:
- ん = n (or m before p/b/m)
- Long vowels: ā, ī, ū, ē, ō (or macron)
- Special cases: chi, tsu, fu, shi, ji

### **Rule 5: Vietnamese Translation Quality**

- Must be accurate, not literal
- Use standard Vietnamese terminology
- Include cultural context when needed
- Never use English as intermediary

### **Rule 6: JLPT Level Assignment**

Strictly follow official JLPT vocabulary/kanji lists:
- N5: Official N5 list only
- N4: Cumulative N5 + N4 list
- etc.

**No exceptions** for novel assignments.

---

## 📈 **Data Growth Roadmap**

### **Phase 1 (Now - March 2026)** ✅
- Core vocabulary: 2,500 items
- JLPT kanji: N5-N1 complete (2,641)
- Grammar patterns: 260 core patterns
- Deploy to Firebase Firestore

### **Phase 2 (March - May 2026)** 🔄
- Specialized vocabulary: +1,500 items
- Extended grammar: +100 patterns
- AI-enriched example sentences: +3,000
- Regional dialect variations: +500

### **Phase 3 (June - August 2026)** 📋
- Classical Japanese (Bungo): +500 items
- Obsolete/archaic words: +200 items
- Literary patterns: +50 patterns
- Full stroke order database: 2,641 kanji

### **Phase 4 (September 2026+)** 🚀
- Professional tech vocabulary: +800
- Medical/scientific terms: +700
- Business Japanese: +400
- Integrated speech analytics (native speaker examples)

---

## 📞 **Maintenance Guidelines**

### **Weekly Checks**
- [ ] Validate new entries against JLPT standards
- [ ] Check for duplicate entries (by text + reading)
- [ ] Verify Vietnamese translations are accurate

### **Monthly Reviews**
- [ ] Update statistics (item counts, coverage %)
- [ ] Review user-reported errors
- [ ] Audit data for consistency violations

### **Quarterly Updates**
- [ ] Add new vocabulary/grammar based on analysis
- [ ] Refine AI-enriched analysis results
- [ ] Update Sino-Vietnamese mappings if new discoveries

---

## 🎓 **Additional Language Component Overview**

### **Sino-Vietnamese System (漢越語)**

Japanese and Vietnamese share ~30% vocabulary through Chinese etymologies:

```
Japanese: 生命 (せいめい)  → seimei
Chinese:  生命 (shēngmìng) → sinh mạng
Vietnamese: 生命          → sinh mạng

All three share the SAME KANJI but different pronunciations
due to different language phonetic systems evolving from 
Middle Chinese over 1500+ years.
```

### **Sino-Japanese Readings (漢音・呉音)**

Kanji have evolved readings:
- **Kan'on** (漢音): Learned pronunciation during Tang Dynasty
- **Go'on** (呉音): Earlier Wu Dynasty pronunciation  
- **Tō'on** (唐音): Later Tang period readings
- **Kun'yomi** (訓読): Native Japanese readings

Example: 木 (ki/moku)
- kun'yomi: き
- on'yomi: もく (kan'on), **木** in 木曜日

### **Japanese Linguistic Features to Track**

1. **Honorific Language (敬語)**
   - 敬語 (keigo) = respectful/honorific
   - 謙譲語 (kenjōgo) = humble language
   - 丁寧語 (teineigo) = polite language

2. **Counters (助数詞)**
   - 本 (hon) for long thin objects
   - 個 (ko) for small objects
   - 匹 (hiki) for animals
   - ~100 different counters

3. **Particles (助詞)**
   - Never have standalone meaning
   - Indicate grammatical relationships
   - Often cannot be directly translated
   - 40+ commonly used particles

4. **Transitive/Intransitive Verb Pairs (他動詞・自動詞)**
   - 開ける (akeru) = to open (transitive)
   - 開く (aku) = to open (intransitive)
   - Must document both forms

---

## 📚 **Reference Standards**

### **Official Sources**

✅ **JLPT Official Resources**
- JLPT List of Kanji for each level
- JLPT Official vocabulary lists
- JLPT Official grammar reference

✅ **Japanese Language Standards**
- Jōyō Kanji (常用漢字) - 2,136 official characters
- Hyōgai Kanji (表外漢字) - Characters outside official list
- NHK Pronunciation Dictionary

✅ **Vietnamese-Japanese Dictionary Standards**
- Japanese → Vietnamese standard dictionary
- Sino-Vietnamese etymology references
- Modern Vietnamese terminology for technical fields

✅ **Romanization Standards**
- Hepburn Romanization System (ISO 3602)
- Japanese government romanization (Kunrei-shiki)

---

## 📄 **Data Entry Template**

All new data entries **MUST** follow this format:

### **Vocabulary Entry Template**

```json
{
  "id": "1708110000000_abc12",
  "text": "東京",
  "reading": "とうきょう",
  "romaji": "Tōkyō",
  "meaning": "Thủ đô Nhật Bản",
  "type": "noun",
  "roleDescription": "Địa danh chính, đối tượng",
  "savedAt": 1708110000000,
  "extendedAnalysis": {
    "definitionDetail": "Thủ đô và thành phố lớn nhất của Nhật Bản, nằm ở vùng Kanto trên hòn đảo Honshu",
    "canonicalForm": "東京",
    "dictionaryReading": "とうきょう",
    "conjugations": null,
    "transitivity": "N/A",
    "kanjiDetails": [
      {
        "kanji": "東",
        "onYomi": ["tō"],
        "kunYomi": ["ひがし"],
        "meaning": "Phía đông",
        "hanViet": "đông",
        "strokes": 8
      },
      {
        "kanji": "京",
        "onYomi": ["kyō"],
        "kunYomi": ["きょう"],
        "meaning": "Thủ đô",
        "hanViet": "kinh",
        "strokes": 8
      }
    ],
    "type": "noun",
    "tags": ["geography", "major_city", "capital"]
  },
  "hanViet": "Đông Kinh",
  "deepDive": {
    "dictionaryForm": "東京",
    "dictionaryReading": "とうきょう",
    "tags": ["geography", "capital", "N5_essential"]
  }
}
```

### **Grammar Entry Template**

```json
{
  "id": "grammar_001",
  "structure": "～ている",
  "reading": "〜ている",
  "meaning": "Đang làm, vừa làm hoặc đã làm xong (trạng thái hiện tại)",
  "usage": "Diễn tả hành động đang diễn ra, thói quen hoặc kết quả của hành động vừa hoàn thành",
  "construction": "Động từ dạng て + いる/おる",
  "jlpt": "N5",
  "savedAt": 1708110000000,
  "extendedAnalysis": {
    "generalMeaning": "Continuous action, habitual action, or completed state with present relevance",
    "structure": "[verb-te-form] + いる/おる",
    "reading": "いる (iru/oru)",
    "jlpt": "N5",
    "tags": ["aspect", "continuous", "present_state"],
    "examples": [
      {
        "japaneseExample": "私は本を読んでいます。",
        "reading": "わたしはほんをよんでいます。",
        "vietnameseTranslation": "Tôi đang đọc sách.",
        "explanation": "Diễn tả hành động đang diễn ra tại thời điểm nói"
      }
    ]
  },
  "tags": ["aspect_marker", "continuous", "N5_essential"]
}
```

---

## ✅ **Verification Checklist**

Before uploading any data batch, verify:

- [ ] All Japanese text is valid Unicode (U+3000-U+FFFF)
- [ ] All readings are in hiragana only
- [ ] All meanings are in Vietnamese
- [ ] All JLPT levels are N5-N1 only
- [ ] All IDs are unique
- [ ] No duplicate entries (text + reading combination)
- [ ] Kanji stroke counts match Unicode database
- [ ] Sino-Vietnamese readings match standard dictionary
- [ ] Grammar examples have correct hiragana readings
- [ ] All tags are lowercase
- [ ] No English text in meanings or descriptions
- [ ] Extended analysis fields are populated (if AI-enriched)

---

## 📞 **Questions & Support**

For data specification questions:
1. Check this document first
2. Consult official JLPT materials
3. Reference Japanese-Vietnamese dictionary standards
4. Ask AI enrichment engine for validation

---

**Document Version: 1.0**  
**Last Reviewed**: February 16, 2026  
**Next Review**: March 16, 2026

---

*This document is the SINGLE SOURCE OF TRUTH for all ARUKAS data structures and content quality standards. All future updates must reference and comply with these specifications.*
