import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Article from 'containers/templates/Article';
import Aside from 'components/templates/Aside';
import ArticleSideContents from 'components/templates/ArticleSideContents';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import { Comic } from 'data/comics';

const ArticlePage: FC = () => {
  const { code } = useParams();

  const showArticles = useSelector<typeState, Comic[]>(
    (state) => state.showArticles,
    shallowEqual,
  );

  const currentArticle = useMemo(
    () => showArticles.filter((comic) => comic.code === code),
    [code, showArticles],
  );

  const relationArticles = useMemo(
    () =>
      showArticles.filter((comic) =>
        currentArticle[0].relation?.includes(comic.code),
      ),
    [showArticles, currentArticle],
  );

  return (
    <>
      <main>
        <Article {...currentArticle[0]} />
      </main>
      <aside>
        {!!relationArticles.length && <ArticleSideContents comics={relationArticles} />}
        <Aside />
      </aside>
    </>
  );
};

export default ArticlePage;
