import { Genre, ModelCommentConnection } from 'API';

export type Comic = {
  __typename: 'Comic';
  id: string;
  code: string;
  title: string;
  genres: Array<Genre>;
  subtitle: string;
  like: number;
  image: string;
  isPublic: boolean;
  content: string;
  comments?: ModelCommentConnection;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ComicData = {
  comics: Comic[];
};

// export const comicsData: ComicData = {
//   comics: [
//     {
//       code: 'worldtrigger',
//       title: 'WORLD TRIGGER',
//       genres: ['battle'],
//       overview: '集団戦',
//     },
//     {
//       code: 'akebi',
//       title: '明日ちゃんのセーラー服',
//       genres: ['aoharu'],
//       overview: 'セーラー服に憧れる真っ直ぐな女の子',
//     },
//     {
//       code: 'miso',
//       title: '味噌汁でカンパイ!',
//       genres: ['love', 'food'],
//       overview: '味噌汁より二人の関係が気になる！',
//     },
//     {
//       code: 'kageki',
//       title: 'かげきしょうじょ!',
//       genres: ['aoharu'],
//       overview: '歌劇団に通う少女たちの物語',
//     },
//     {
//       code: 'aoashi',
//       title: 'アオアシ',
//       genres: ['sports'],
//       overview: '超・戦略的サッカー',
//     },
//     {
//       code: 'lastgame',
//       title: 'ラストゲーム',
//       genres: ['love'],
//       overview: '鈍感な女の子 vs 一途な男の子',
//     },
//     {
//       code: 'radiation',
//       title: 'ラジエーションハウス',
//       genres: ['drama', 'love'],
//       overview: '放射線技師',
//     },
//     {
//       code: 'hina',
//       title: 'ヒナまつり',
//       genres: ['gag'],
//       overview: 'ヤクザ✖️サイキック少女',
//     },
//     {
//       code: 'setoutsumi',
//       title: 'セトウツミ',
//       genres: ['gag'],
//       overview: 'だべり系漫才',
//     },
//     {
//       code: 'millionlive',
//       title: 'ミリオンライブ!!',
//       genres: ['aoharu', 'impression'],
//       overview: 'トップアイドルを目指す少女の物語',
//     },
//     {
//       code: 'gash',
//       title: '金色のガッシュ!!',
//       genres: ['battle', 'drama', 'impression'],
//       overview: 'パートナーと戦い抜け',
//     },
//     {
//       code: 'ballroom',
//       title: 'ボールルームへようこそ',
//       genres: ['sports'],
//       overview: '競技ダンス',
//     },
//     {
//       code: 'summertime',
//       title: 'サマータイムレンダ',
//       genres: ['battle'],
//       overview: '孤島タイムスリップサスペンス',
//     },
//     {
//       code: 'unsang',
//       title: 'アンサングシンデレラ',
//       genres: ['drama'],
//       overview: '謳われない薬剤師',
//     },
//   ],
// };
