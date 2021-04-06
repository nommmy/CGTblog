import { FC } from 'react';

type Props = {
  title: string;
  genres: string;
  overview: string;
}

const Article: FC<Props> = ({ title, genres, overview }) => (
  <div className="">
    {title}{genres}{ overview}
  </div>
);

export default Article;
