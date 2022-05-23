import { FC } from 'react';
import ArticleCards from 'components/organisms/ArticleCards';
import SearchGenreButton from 'components/molecules/SearchGenreButton';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import Aside from 'components/templates/Aside';
import { Comic } from 'data/comics';
import WelcomeMessage from 'components/organisms/WelcomeMessage';
import MediaQuery from 'react-responsive';

const Home: FC = () => {
  document.title = 'ぽむログ - お気に入りのマンガを紹介！';

  const articles = useSelector<typeState, Comic[]>(
    (state) => state.showArticles,
    shallowEqual,
  );

  return (
    <>
      <div className="flex-container">
        <main>
          <SearchGenreButton />
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
