import { FC } from 'react';
import ArticleCards from 'components/organisms/ArticleCards';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import { Comic } from 'data/comics';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Link } from 'react-router-dom';
import LaunchIcon from '@material-ui/icons/Launch';

const AdminPage: FC = () => {
  document.title = 'Admin';

  const articles = useSelector<typeState, Comic[]>(
    (state) => state.allArticles,
    shallowEqual,
  );

  return (
    <>
      <div className="flex-container">
        <main>
          <ArticleCards comics={articles} />
        </main>
        <Link to="new">
          <LaunchIcon style={{ color: '#75deb9' }} fontSize="large" />
        </Link>
      </div>
    </>
  );
};

export default withAuthenticator(AdminPage);
