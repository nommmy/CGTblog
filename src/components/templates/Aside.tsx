import { FC } from 'react';
import { comicsData } from 'data/comics';
import RecommendArticle from 'components/organisms/RecommendArticle';
import './Aside.scss'

const Aside: FC = () => (
  <div className="ranking">
    <div className="ranking_header sub_font">
      Ranking
    </div>
    <RecommendArticle comics={comicsData.comics} />
  </div>
);

export default Aside;
