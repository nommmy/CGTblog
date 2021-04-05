import { FC } from 'react';
import { Helmet } from 'react-helmet';
// import { Icon, Item } from 'semantic-ui-react';
import { comicsData } from 'data/comics';
import ArticleCards from 'components/organisms/ArticleCards'

const Home: FC = () => (
  <>
    <Helmet>
      <title>Articles一覧</title>
    </Helmet>
    <ArticleCards comics={comicsData.comics} />
  </>
);

export default Home;
