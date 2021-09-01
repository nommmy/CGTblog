import { FC } from 'react';
import { ComicData } from 'data/comics';
import RecommendArticle from 'components/organisms/RecommendArticle';
import './Aside.scss';

const ArticleSideContents: FC<ComicData> = ({ comics }) => (
  <div className="ranking relation">
    <img
      src="headline/relation.png"
      alt="Relation"
      className="ranking_header relation_header"
    />
    <RecommendArticle comics={comics} />
  </div>
);

export default ArticleSideContents;
