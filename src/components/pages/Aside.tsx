import { FC } from 'react';
import { comicsData } from 'data/comics';
import RecommendArticle from 'components/organisms/RecommendArticle';

const Aside: FC = () => (
  <>
    <h3>よく読まれてる記事</h3>
    <RecommendArticle comics={comicsData.comics} />
  </>
);

export default Aside;
