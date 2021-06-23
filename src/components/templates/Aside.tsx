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
      <img src="headline/ranking.png" alt="Ranking" className="ranking_header" />
      <RecommendArticle comics={articles} />
    </div>
  );
};

export default Aside;
