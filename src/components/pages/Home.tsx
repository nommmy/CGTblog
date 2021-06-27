import { FC } from 'react';
import { Helmet } from 'react-helmet';
import ArticleCards from 'components/organisms/ArticleCards';
import SearchForms from 'components/organisms/SearchForms';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import Aside from 'components/templates/Aside';
import { Comic } from 'data/comics';
import WelcomeMessage from 'components/organisms/WelcomeMessage';

const Home: FC = () => {
  const articles = useSelector<typeState, Comic[]>(
    (state) => state.showArticles,
    shallowEqual,
  );

  return (
    <>
      <Helmet>
        <title>ぽむログ -好きなマンガを紹介-</title>
      </Helmet>
      <main>
        <SearchForms />
        <ArticleCards comics={articles} />
      </main>
      <aside>
        <WelcomeMessage />
        <Aside />
      </aside>
    </>
  );
};

export default Home;
