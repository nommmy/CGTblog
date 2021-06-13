import { FC } from 'react';
import { Helmet } from 'react-helmet';
import ArticleCards from 'components/organisms/ArticleCards';
import SearchForms from 'components/organisms/SearchForms';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import { Comic } from 'data/comics';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
import CreateIcon from '@material-ui/icons/Create';

const AdminPage: FC = () => {
  const articles = useSelector<typeState, Comic[]>(
    (state) => state.showArticles,
    shallowEqual,
  );

  return (
    <>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <main>
        <SearchForms />
        <ArticleCards comics={articles} />
      </main>
      <aside>
        <Link to="new">
          Create New Article
          <CreateIcon color="primary" fontSize="large" />
        </Link>
      </aside>
    </>
  );
};

export default withAuthenticator(AdminPage);
