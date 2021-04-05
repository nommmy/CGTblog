export type Comic = {
  id: number;
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
      id: 1,
      title: 'WORLD TRIGGER',
      genres: 'battle',
      overview: '集団戦',
    },
    {
      id: 2,
      title: '明日ちゃんのセーラー服',
      genres: 'prime',
      overview: '尊い',
    },
    {
      id: 3,
      title: '味噌汁でカンパイ!',
      genres: 'prime',
      overview: '尊い2',
    },
    {
      id: 4,
      title: 'かげきしょうじょ!',
      genres: 'prime',
      overview: '宝塚',
    },
  ]
}