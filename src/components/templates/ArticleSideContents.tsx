import { FC } from 'react';
import { ComicData } from 'data/comics';
import RecommendArticle from 'components/organisms/RecommendArticle';
import './Aside.scss';

const ArticleSideContents: FC<ComicData> = ({ comics }) => (
  <div className="ranking relation">
    <img
      src="https://charlottech78897cd75f574612ace458f31b6d96a7160346-staging.s3.ap-northeast-1.amazonaws.com/headline/relation.webp"
      alt="Relation"
      decoding="async"
      className="ranking_header relation_header"
    />
    <RecommendArticle comics={comics} />
  </div>
);

export default ArticleSideContents;
