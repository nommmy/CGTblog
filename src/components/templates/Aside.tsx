import { FC } from 'react';
import { Comic } from 'data/comics';
import RecommendArticle from 'components/organisms/RecommendArticle';
import './Aside.scss';
import { typeState } from 'ducks/articleList';
import { useSelector, shallowEqual } from 'react-redux';

const Aside: FC = () => {
  const articles = useSelector<typeState, Comic[]>(
    (state) => state.showArticles,
    shallowEqual,
  );

  return (
    <div className="ranking">
      <div className="ranking_header sub_font">Ranking</div>
      <RecommendArticle comics={articles} />
    </div>
  );
};

export default Aside;
