import { FC } from 'react';
import { Helmet } from 'react-helmet';
import ArticleCards from 'components/organisms/ArticleCards';
import SearchForms from 'components/organisms/SearchForms';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import Aside from 'components/templates/Aside';
import { Comic } from 'data/comics';
import WelcomeMessage from 'components/organisms/WelcomeMessage';
import MediaQuery from 'react-responsive';

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
      <div className="flex-container">
        <main>
          <SearchForms />
          <ArticleCards comics={articles} />
        </main>
        <MediaQuery minWidth={860}>
          <aside>
            <WelcomeMessage />
            <Aside />
          </aside>
        </MediaQuery>
      </div>
      <MediaQuery maxWidth={859}>
        <div className="aside-bottom-content">
          <WelcomeMessage />
          <Aside />
        </div>
      </MediaQuery>
    </>
  );
};

export default Home;
