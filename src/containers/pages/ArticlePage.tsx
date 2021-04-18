import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Article from 'components/templates/Article';
import Aside from 'components/templates/Aside';
import ArticleSideContents from 'components/templates/ArticleSideContents';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'features/articleList';
import { Comic } from 'data/comics';

const ArticlePage: FC = () => {
  const { code } = useParams();

  const allArticles = useSelector<typeState, Comic[]>(
    (state) => state.allArticles,
    shallowEqual,
  );

  // eslint-disable-next-line
  console.log(allArticles);

  const currentArticle = useMemo(
    () => allArticles.filter((comic) => comic.code === code),
    [code, allArticles],
  );

  // eslint-disable-next-line
  console.log(currentArticle);

  return (
    <>
      <main>
        {/* eslint-disable-next-line */}
        <Article {...currentArticle[0]} />
      </main>
      <aside>
        <ArticleSideContents />
        <Aside />
      </aside>
    </>
  );

  // return <Navigate to="/" replace />;
};

export default ArticlePage;
