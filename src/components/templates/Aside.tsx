import { FC } from 'react';
import { Comic } from 'data/comics';
import RecommendArticle from 'components/organisms/RecommendArticle';
import './Aside.scss';
import { typeState } from 'ducks/articleList';
import { useSelector, shallowEqual } from 'react-redux';

const Aside: FC = () => {
  const articles = useSelector<typeState, Comic[]>(
    (state) => state.recommendArticles,
    shallowEqual,
  );

  return (
    <div className="ranking">
      <img
        src="https://charlottech78897cd75f574612ace458f31b6d96a7160346-staging.s3.ap-northeast-1.amazonaws.com/headline/ranking.webp"
        alt="Ranking"
        className="ranking_header"
      />
      <RecommendArticle comics={articles} />
    </div>
  );
};

export default Aside;
