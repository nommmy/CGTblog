export type Comic = {
  code: string;
  title: string;
  genres: string;
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
      genres: 'battle',
      overview: '集団戦',
    },
    {
      code: 'akebi',
      title: '明日ちゃんのセーラー服',
      genres: 'prime',
      overview: '尊い',
    },
    {
      code: 'miso',
      title: '味噌汁でカンパイ!',
      genres: 'prime',
      overview: '尊い2',
    },
    {
      code: 'kageki',
      title: 'かげきしょうじょ!',
      genres: 'prime',
      overview: '宝塚',
    },
  ]
}