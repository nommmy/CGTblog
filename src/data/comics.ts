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
      overview: '尊い',
    },
    {
      code: 'miso',
      title: '味噌汁でカンパイ!',
      genre: 'aoharu',
      overview: '尊い2',
    },
    {
      code: 'kageki',
      title: 'かげきしょうじょ!',
      genre: 'aoharu',
      overview: '宝塚',
    },
  ],
};
