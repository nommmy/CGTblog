export type Comic = {
  code: string;
  title: string;
  genre: string;
  overview: string;
};

export type ComicData = {
  comics: Comic[];
};

export const comicsData: ComicData = {
  comics: [
    {
      code: 'worldtrigger',
      title: 'WORLD TRIGGER',
      genre: 'battle',
      overview: '集団戦',
    },
    {
      code: 'akebi',
      title: '明日ちゃんのセーラー服',
      genre: 'aoharu',
      overview: 'これぞ尊い',
    },
    {
      code: 'miso',
      title: '味噌汁でカンパイ!',
      genre: 'love',
      overview: '味噌汁より二人の関係が気になる！',
    },
    {
      code: 'kageki',
      title: 'かげきしょうじょ!',
      genre: 'aoharu',
      overview: '歌劇団に通う少女たちの物語',
    },
    {
      code: 'aoashi',
      title: 'アオアシ',
      genre: 'sports',
      overview: '超・戦略的サッカー',
    },
    {
      code: 'lastgame',
      title: 'ラストゲーム',
      genre: 'love',
      overview: '鈍感な女の子 vs 一途な男の子',
    },
    {
      code: 'radiation',
      title: 'ラジエーションハウス',
      genre: 'drama',
      overview: '放射線技師',
    },
    {
      code: 'hina',
      title: 'ヒナまつり',
      genre: 'gag',
      overview: 'ヤクザ✖️サイキック少女',
    },
    {
      code: 'setoutsumi',
      title: 'セトウツミ',
      genre: 'gag',
      overview: 'だべり系漫才',
    },
    {
      code: 'millionlive',
      title: 'アイドルマスター ミリオンライブ!!',
      genre: 'aoharu',
      overview: 'トップアイドルを目指す少女の物語',
    },
    {
      code: 'gash',
      title: '金色のガッシュ!!',
      genre: 'battle',
      overview: 'パートナーと戦い抜け',
    },
    {
      code: 'ballroom',
      title: 'ボールルームへようこそ',
      genre: 'sports',
      overview: '競技ダンス',
    },
    {
      code: 'summertime',
      title: 'サマータイムレンダ',
      genre: 'battle',
      overview: '孤島タイムスリップサスペンス',
    },
    {
      code: 'unsang',
      title: 'アンサングシンデレラ',
      genre: 'drama',
      overview: '謳われない薬剤師',
    },
  ],
};
