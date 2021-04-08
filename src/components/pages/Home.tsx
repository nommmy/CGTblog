import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { comicsData } from 'data/comics';
import ArticleCards from 'components/organisms/ArticleCards';
import SearchForms from 'components/organisms/SearchForms';

const Home: FC = () => (
  <>
    <Helmet>
      <title>Articles一覧</title>
    </Helmet>
    <SearchForms />
    <ArticleCards comics={comicsData.comics} />
  </>
);

export default Home;
