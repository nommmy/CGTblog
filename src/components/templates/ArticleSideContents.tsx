import { FC } from 'react';
import { comicsData } from 'data/comics';
import RecommendArticle from 'components/organisms/RecommendArticle';

const ArticleSideContents: FC = () => (
  <div className="ranking">
    <div className="ranking_header">Ranking</div>
    <RecommendArticle comics={comicsData.comics} />
  </div>
);

export default ArticleSideContents;
