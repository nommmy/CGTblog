import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { API } from 'aws-amplify';
import { ListComicsSortedByCreatedAtQuery } from 'API';
import { Comic } from 'data/comics';
import { listComicsSortedByCreatedAt } from 'graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types';
import Button from '@material-ui/core/Button';
import MediaQuery from 'react-responsive';
import Home from './components/pages/Home';
import IntroPage from './components/pages/IntroPage';
import ArticlePage from './containers/pages/ArticlePage';
import EditPage from './containers/pages/EditPage';
import CreatePage from './components/pages/CreatePage';
import AdminPage from './components/pages/AdminPage';
import HotArticles from './containers/templates/HotArticles';
import { articleListSlice } from './ducks/articleList';
import './App.scss';

const App: FC = () => {
  const { hash, pathname } = useLocation();
  const { initArticle } = articleListSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  useEffect(() => {
    // eslint-disable-next-line
    (async () => {
      const result = await API.graphql({
        query: listComicsSortedByCreatedAt,
        variables: { owner: 'owner', sortDirection: 'DESC' },
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      });
      if ('data' in result && result.data) {
        const articlesData = result.data as ListComicsSortedByCreatedAtQuery;
        if (articlesData.listComicsSortedByCreatedAt) {
          dispatch(
            initArticle(
              articlesData.listComicsSortedByCreatedAt.items as Comic[],
            ),
          );
        }
      }
    })();
  }, [dispatch, initArticle]);

  return (
    <div className="body">
      <header>
        <div className="header">
          <Link to="/">
            <img src="logo7.png" alt="logo" />
          </Link>
          <nav className="header_nav">
            <Link to="intro" className="nav">
              ぽむログとは？
            </Link>
            <MediaQuery minWidth={567}>
              <Link to="admin">
                <Button className="nav" disableElevation variant="contained">
                  Admin
                </Button>
              </Link>
            </MediaQuery>
          </nav>
        </div>
      </header>
      {pathname === '/' && <HotArticles />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":code" element={<ArticlePage />} />
          <Route path="intro" element={<IntroPage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="admin/new" element={<CreatePage />} />
          <Route path="admin/:code" element={<EditPage />} />
          {/* <Route path="admin" element={<AdminPage />}>
            <Route path="new" exact element={<CreatePage />} />
            <Route path=":code" exact element={<EditPage />} />
          </Route> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <footer>
        <div className="footer">
          <div className="footer-links">
            <div>
              <p>Memu</p>
              <ul>
                <li>
                  <Link to="/">TOP</Link>
                </li>
                <li>
                  <Link to="intro">ABOUT</Link>
                </li>
              </ul>
            </div>
            <div className="footer-sns">
              <p>Link</p>
              <ul>
                <li>
                  <a
                    href="https://twitter.com/pomme_blog"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-message">
            <Link to="/">
              <img src="logo7.png" alt="logo" />
            </Link>
            <p>
              <strong>ぽむログ</strong>
              は今おすすめの漫画を紹介する個人ブログです。
            </p>
            <p>© 2021 Pomme Blog</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
