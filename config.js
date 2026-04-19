// ========================================
// 基礎問題精講III・C SRS - config.js
// 作成日時: 2026-04-19T15:00:00+09:00
// テンプレート: ネクステタイプ v2.0
// ========================================
// ★ index.html は編集不要。教材固有設定はここに集約。
// ========================================

var APP_CONFIG = {

  // ========================================
  // 1. アプリ識別（★最重要: 他教材と重複するとデータ破壊）
  // ========================================
  APP_NAME: "基礎問題精講III・C SRS",         // ホーム画面タイトル
  STORAGE_KEY: "kisomon3c-srs-v1",            // localStorageキー（一意必須）
  EXPORT_PREFIX: "kisomon3c-srs",             // JSONエクスポートファイル名
  SW_CACHE_NAME: "kisomon3c-srs-v1",          // sw.jsのCACHE_NAMEと一致させる

  // ========================================
  // 2. クラウド同期
  // ========================================
  GAS_URL: "https://script.google.com/macros/s/AKfycbyyLzvhnUD4NLCxvCyZZTMlvenObdV5-iyeuYFZUObKAuxq-P4oiAfgjGQkV7isfmkG5A/exec",  // GASデプロイURL（空文字ならローカルのみ）

  // ========================================
  // 3. 配色（基礎問題精講I・Aと同一。深緑ベース）
  // ========================================
  COLORS: {
    // ページ背景・カード
    pageBg:       "#F4F7F4",
    cardBorder:   "#C8D6C8",
    cardBg:       "#FFFFFF",

    // テキスト
    textPrimary:  "#1A2E1A",
    textSecondary:"#4A6B4A",
    textMuted:    "#7A937A",

    // ボタン
    btnPrimaryBg:    "#2D6A2D",
    btnPrimaryFg:    "#FFFFFF",
    btnSecondaryBg:  "#EDF3ED",
    btnSecondaryFg:  "#2D6A2D",
    btnSecondaryBorder: "#B8CCB8",

    // 入力フィールド
    inputBorder:  "#B8CCB8",
    inputBg:      "#FAFCFA",

    // ステータス
    statusOk:     "#2D8A2D",
    statusError:  "#C53030",
    statusMuted:  "#7A937A",

    // 判定ボタン
    judgeCorrectBg:     "#D4EDDA",
    judgeCorrectFg:     "#155724",
    judgeCorrectBorder: "#A3D9A3",
    judgeEasyBg:        "#C3E6CB",
    judgeEasyFg:        "#0B4F1A",
    judgeEasyBorder:    "#82C891",

    // バッジ
    badgeNewBg:     "#E8F5E9",
    badgeNewFg:     "#2E7D32",
    badgeGradBg:    "#C8E6C9",
    badgeGradFg:    "#1B5E20",
    badgeNeutralBg: "#E8E8E8",
    badgeNeutralFg: "#666666",
    badgePendingBg: "#FFF3E0",
    badgePendingFg: "#E65100",

    // GAS接続状態
    gasOkBg:   "#E8F5E9",
    gasOkFg:   "#2E7D32",
    gasWarnBg: "#FFF3E0",
    gasWarnFg: "#E65100",

    // コード表示・診断
    codeBg:    "#F0F4F0",
    diagBg:    "#F5F5F5",
    diagFg:    "#333333",
    diagBorder:"#CCCCCC"
  },

  // ========================================
  // 4. UI文言（数学・基礎問題精講III・Cに最適化）
  // ========================================
  LABELS: {
    unitName:          "問題",
    registerBtn:       "問題を登録する",
    registerTitle:     "問題登録",
    idLabel:           "問題番号",
    idPlaceholder:     "例: 42, 例題3, P45",
    idHint:            "基礎問題精講III・Cの問題番号や例題番号を入力（50文字以内）",
    listTitle:         "登録一覧",
    listUnit:          "問",
    csvTitle:          "まとめて取り込み",
    reviewUnit:        "問",
    cardHint:          "基礎問題精講III・Cで該当の問題を解いてください",
    searchPlaceholder: "問題番号で検索..."
  }
};
