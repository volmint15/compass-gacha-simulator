const COLLAB_CARD_NAMES = {
  // ==========================================
  // 【3種コラボ】
  // ==========================================
  // メイドインアビス
  "abyss_ur1": "【メイドインアビス】火葬砲",
  "abyss_ur2": "【メイドインアビス】黎明卿",
  "abyss_ur3": "【メイドインアビス】ナナチ＆ミーティ",
  "abyss_sr1": "レグ",
  "abyss_sr2": "リコ",
  "abyss_sr3": "ナナチ",

  // ダンガンロンパ
  "danron_ur1": "【超高校級の希望】苗木 誠",
  "danron_ur2": "【超高校級の幸運】狛枝 凪斗",
  "danron_ur3": "【超高校級のゲーマー】七海 千秋",
  "danron_sr1": "日向 創",
  "danron_sr2": "田中 眼蛇夢",
  "danron_sr3": "江ノ島 盾子",

  // ロックマンエグゼ
  "exe_ur1": "【ロックマンエグゼ】ショックウェーブ",
  "exe_ur2": "【ロックマンエグゼ】ダブルストリーム",
  "exe_ur3": "【ロックマンエグゼ】アースブレイカー",
  "exe_sr1": "ガッツマン.EXE & 大山デカオ",
  "exe_sr2": "ロール.EXE & 桜井メイル",
  "exe_sr3": "Dr.ワイリー",

  // 鋼の錬金術師
  "fa_ur1": "【鋼の錬金術師FA】エルリック兄弟",
  "fa_ur2": "【鋼の錬金術師FA】賢者の石",
  "fa_ur3": "【鋼の錬金術師FA】お父様と人造人間",
  "fa_sr1": "アルフォンス・エルリック",
  "fa_sr2": "ロイ・マスタング",
  "fa_sr3": "グリード",

  // FFXV
  "ff_ur1": "【FFXV】輝かしき未来へ",
  "ff_ur2": "【FFXV】彼の者の物語",
  "ff_ur3": "【FFXV】父子の絆",
  "ff_sr1": "グラディオラス",
  "ff_sr2": "シドニー",
  "ff_sr3": "アラネア",

  // 超歌舞伎
  "kabuki_ur1": "【千本桜】初音未來",
  "kabuki_ur2": "【超歌舞伎】転生なしたる白狐",
  "kabuki_ur3": "【超歌舞伎】今昔饗宴千本桜",
  "kabuki_sr1": "【千本桜】鏡音鈴＆鏡音錬",
  "kabuki_sr2": "【超歌舞伎】青龍の精",
  "kabuki_sr3": "【超歌舞伎】母と娘の絆",

  // 陰の実力者になりたくて！
  "kagejitsu_ur1": "【陰実】HIGHEST",
  "kagejitsu_ur2": "【陰実】偽りの中の戯れ",
  "kagejitsu_ur3": "【陰実】七陰の頭脳",
  "kagejitsu_sr1": "ベータ",
  "kagejitsu_sr2": "イプシロン",
  "kagejitsu_sr3": "イータ",

  // 進撃の巨人
  "kyojin_ur1": "【進撃の巨人】 小さな刃",
  "kyojin_ur2": "【進撃の巨人】 超大型巨人襲来",
  "kyojin_ur3": "【進撃の巨人】 娘々ストレッチ",
  "kyojin_sr1": "【進撃の巨人】 エレン",
  "kyojin_sr2": "【進撃の巨人】 ミカサ",
  "kyojin_sr3": "【進撃の巨人】 アルミン",

  // 雀魂
  "mahjongsoul_ur1": "【雀魂】金と緋に浮かぶ",
  "mahjongsoul_ur2": "【雀魂】一姫当千",
  "mahjongsoul_ur3": "【雀魂】夏の誘い",
  "mahjongsoul_sr1": "八木唯",
  "mahjongsoul_sr2": "ワン次郎",
  "mahjongsoul_sr3": "琳琅(りんらん)",

  // 無職転生
  "musyoku_ur1": "【無職転生】夕暮れのひと時",
  "musyoku_ur2": "【無職転生】すれ違う物語",
  "musyoku_ur3": "【無職転生】無慈悲なる邂逅",
  "musyoku_sr1": "ロキシーの人形",
  "musyoku_sr2": "シルフィエット",
  "musyoku_sr3": "ルイジェルド・スペルディア",

  // ニーア オートマタ
  "na_ur1": "【NieR:Automata】戦いの始まり",
  "na_ur2": "【NieR:Automata】静寂の時",
  "na_ur3": "【NieR:Automata】交錯する運命",
  "na_sr1": "ヨルハ部隊司令官",
  "na_sr2": "オペレーター 60／210",
  "na_sr3": "パスカル",

  // 猫宮ひなた
  "nekomiya_ur1": "【最高にハイ!!!エナドリ】猫宮ひなた",
  "nekomiya_ur2": "【ワンショットワンキル】猫宮ひなた",
  "nekomiya_ur3": "【火遊びフラッシュバン】猫宮ひなた",
  "nekomiya_sr1": "【ニヒヒ対人地雷】猫宮ひなた",
  "nekomiya_sr2": "【ぶっぱ短機関銃】猫宮ひなた",
  "nekomiya_sr3": "【パルクール2丁拳銃】猫宮ひなた",

  // オーバーロード
  "ol_ur1": "【オーバーロード】不死者の王 アインズ",
  "ol_ur2": "【オーバーロード】守護者統括 アルベド",
  "ol_ur3": "【オーバーロード】英雄モモン&美姫ナーベ",
  "ol_sr1": "シャルティア・ブラッドフォールン",
  "ol_sr2": "セバス・チャン",
  "ol_sr3": "アウラ・ベラ・フィオーラ",

  // ペルソナ5
  "p5_ur1": "【ペルソナ5】TAKE YOUR HEART",
  "p5_ur2": "【ペルソナ5】運命の囚われ",
  "p5_ur3": "【ペルソナ5】心の怪盗団",
  "p5_sr1": "フォックス",
  "p5_sr2": "クイーン",
  "p5_sr3": "ノワール",

  // ポプテピピック
  "popte_ur1": "【ポプテピピック】POP TEAM EPIC",
  "popte_ur2": "【ポプテピピック】万全のポプ子",
  "popte_ur3": "【ポプテピピック】たたかないで…",
  "popte_sr1": "ポプ子",
  "popte_sr2": "ピピ美",
  "popte_sr3": "ポプ子＆ピピ美",

  // ライザのアトリエ
  "ryza_ur1": "【ライザのアトリエ2】いざ！冒険の旅へ！",
  "ryza_ur2": "【ライザのアトリエ2】夏だ！海だ！水着だ！",
  "ryza_ur3": "【ライザのアトリエ2】ひと夏の思い出",
  "ryza_sr1": "レント・マルスリンク",
  "ryza_sr2": "パトリツィア・アーベルハイム",
  "ryza_sr3": "セリ・グロース",

  // 殺戮の天使
  "satsuten_ur1": "【愉悦の一閃】アイザック",
  "satsuten_ur2": "【ルナティック・アイズ】レイチェル",
  "satsuten_ur3": "【イカれた約束】ザック＆レイ",
  "satsuten_sr1": "アイザック・フォスター",
  "satsuten_sr2": "レイチェル・ガードナー",
  "satsuten_sr3": "ピザック",

  // シュタインズ・ゲート
  "sg_ur1": "【STEINS;GATE】黄昏の憩い",
  "sg_ur2": "【STEINS;GATE】未来を司る女神作戦",
  "sg_ur3": "【STEINS;GATE】時間跳躍の協力者",
  "sg_sr1": "フェイリス・ニャンニャン",
  "sg_sr2": "橋田 至",
  "sg_sr3": "阿万音 鈴羽",

  // 転スラ
  "tensura_ur1": "【転スラ】転生したらスライムだった件",
  "tensura_ur2": "【転スラ】集う者達",
  "tensura_ur3": "【転スラ】受け継がれる想い",
  "tensura_sr1": "ヴェルドラ",
  "tensura_sr2": "ミリム",
  "tensura_sr3": "クレイマン",

  // 幼女戦記
  "youjo_ur1": "【幼女戦記】ラインの悪魔",
  "youjo_ur2": "【幼女戦記】反撃の狼煙",
  "youjo_ur3": "【幼女戦記】神の恩寵",
  "youjo_sr1": "ターニャ・デグレチャフ",
  "youjo_sr2": "ヴィーシャ",
  "youjo_sr3": "メアリー",


  // ==========================================
  // 【2種コラボ】 (※画像ファイル番号に合わせて ur5, ur6 となっています)
  // ==========================================
  // チェンソーマン2
  "csm_2type_ur5": "【チェンソーマン】チェンソーマン",
  "csm_2type_ur6": "【チェンソーマン】レゼ",
  "csm_2type_sr5": "ビーム",
  "csm_2type_sr6": "天使の悪魔",

  // とある科学の超電磁砲2
  "toaru_2type_ur5": "【禁書目録】聖人と天才",
  "toaru_2type_ur6": "【禁書目録】未元物質（ダークマター）",
  "toaru_2type_sr5": "インデックス",
  "toaru_2type_sr6": "ラストオーダー",


  // ==========================================
  // 【4種コラボ】
  // ==========================================
  // チェンソーマン
  "csm_ur1": "【チェンソーマン】マキマ",
  "csm_ur2": "【チェンソーマン】早川アキ",
  "csm_ur3": "【チェンソーマン】公安対魔特異4課",
  "csm_ur4": "【チェンソーマン】犬とチェンソー",
  "csm_sr1": "サムライソード",
  "csm_sr2": "岸辺",
  "csm_sr3": "姫野",
  "csm_sr4": "東山コベニ",

  // とある科学の超電磁砲
  "toaru_ur1": "【超電磁砲】常盤台の超電磁砲(レールガン)",
  "toaru_ur2": "【超電磁砲】超能力者(レベル5)の第一位",
  "toaru_ur3": "【超電磁砲】とある少女たちの物語",
  "toaru_ur4": "【超電磁砲】幻想殺し(イマジンブレイカー)",
  "toaru_sr1": "白井黒子",
  "toaru_sr2": "初春飾利",
  "toaru_sr3": "佐天涙子",
  "toaru_sr4": "フレンダ=セイヴェルン",

  // 文豪ストレイドッグス
  "bunsuto_ur1": "【文スト】武装探偵社",
  "bunsuto_ur2": "【文スト】ありふれた日常の幸せ",
  "bunsuto_ur3": "【文スト】理想という病を愛す",
  "bunsuto_ur4": "【文スト】双つの黒",
  "bunsuto_sr1": "宮沢賢治",
  "bunsuto_sr2": "江戸川乱歩",
  "bunsuto_sr3": "与謝野晶子",
  "bunsuto_sr4": "福沢諭吉",

  // Fate/strange Fake
  "fake_ur1": "【Fate/strange Fake】To The City",
  "fake_ur2": "【Fate/strange Fake】慢心無き戦",
  "fake_ur3": "【Fate/strange Fake】造られし命達",
  "fake_ur4": "【Fate/strange Fake】時計塔の師弟",
  "fake_sr1": "フランチェスカ・プレラーティ",
  "fake_sr2": "オーランド・リーヴ",
  "fake_sr3": "アサシン",
  "fake_sr4": "ジェスター・カルトゥーレ",

  // Fate/stay night [HF]
  "fate_ur1": "【Fate/stay night [HF]】舞い散る桜",
  "fate_ur2": "【Fate/stay night [HF]】lost butterfly",
  "fate_ur3": "【Fate/stay night [HF]】狂戦士の咆哮",
  "fate_ur4": "【Fate/stay night [HF]】激辛麻婆豆腐",
  "fate_sr1": "衛宮士郎",
  "fate_sr2": "ライダー",
  "fate_sr3": "間桐桜 -マキリの杯-",
  "fate_sr4": "遠坂凛",

  // HUNTER×HUNTER
  "hh_ur1": "【HUNTER×HUNTER】旅立ちと仲間たち",
  "hh_ur2": "【HUNTER×HUNTER】ゾルディック家",
  "hh_ur3": "【HUNTER×HUNTER】奇術師 ヒソカ",
  "hh_ur4": "【HUNTER×HUNTER】決意と覚悟の拳",
  "hh_sr1": "レオリオ",
  "hh_sr2": "クラピカ",
  "hh_sr3": "カイト",
  "hh_sr4": "ネフェルピトー",

  // この素晴らしい世界に祝福を！
  "konosuba_ur1": "【爆裂アークウィザード】めぐみん",
  "konosuba_ur2": "【慈愛の貧乏リッチー】ウィズ",
  "konosuba_ur3": "【駄女神’s】アクア＆めぐみん＆ダクネス",
  "konosuba_ur4": "【風呂上がりの休息】アクア＆めぐみん",
  "konosuba_sr1": "カズマ",
  "konosuba_sr2": "ダクネス",
  "konosuba_sr3": "ウィズ",
  "konosuba_sr4": "ゆんゆん",

  // Re:ゼロから始める異世界生活
  "rezero_ur1": "【リゼロ】ゼロから始まる異世界生活",
  "rezero_ur2": "【リゼロ】絶望という病",
  "rezero_ur3": "【リゼロ】ひとときの団欒",
  "rezero_ur4": "【リゼロ】間断なき結束",
  "rezero_sr1": "スバル",
  "rezero_sr2": "ラム",
  "rezero_sr3": "ベアトリス",
  "rezero_sr4": "フェリス",

  // ソードアート・オンライン
  "sao_ur1": "【SAO】朝露の少女と",
  "sao_ur2": "【SAO】氷の狙撃手",
  "sao_ur3": "【SAO】妖精たちの国にて",
  "sao_ur4": "【SAO】旅路の果て",
  "sao_sr1": "シリカ&ピナ",
  "sao_sr2": "リズベット",
  "sao_sr3": "エギル",
  "sao_sr4": "ヒースクリフ",

  // ストリートファイター
  "sf_ur1": "【ラッシュ＆ブレイズ】ケン",
  "sf_ur2": "【魂屠る闇】ネカリ",
  "sf_ur3": "【拳を極めし者】豪鬼",
  "sf_ur4": "【最終最凶】ベガ",
  "sf_sr1": "F.A.N.G",
  "sf_sr2": "M.バイソン",
  "sf_sr3": "バルログ",
  "sf_sr4": "ダルシム"
};