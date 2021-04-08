import { FC } from 'react';
import { Helmet } from 'react-helmet'

type Props = {
  title: string;
  genres: string[];
  overview: string;
}

const Article: FC<Props> = ({ title, genres, overview }) => (
  <div className="">
    <Helmet>
      <title>{ title }</title>
    </Helmet>
    {title}
    {genres}
    {overview}
  </div>
);

export default Article;
