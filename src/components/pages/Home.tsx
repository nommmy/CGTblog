import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Comic } from 'data/comics';
import ArticleCards from 'components/organisms/ArticleCards';
import SearchForms from 'components/organisms/SearchForms';
import { useSelector } from 'react-redux';
import { typeState } from 'features/articleList';
import Aside from 'components/templates/Aside';

const Home: FC = () => {
  const articles = useSelector<typeState, Comic[]>((state) => state.articles);

  return (
    <>
      <Helmet>
        <title>Articles一覧</title>
      </Helmet>
      <main>
        <SearchForms />
        <ArticleCards comics={articles} />
      </main>
      <aside>
        <Aside />
      </aside>
    </>
  );
};

export default Home;
