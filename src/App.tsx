import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { API } from 'aws-amplify';
import { ListComicsSortedByUpdatedAtQuery } from 'API';
import { Comic } from 'data/comics';
import { listComicsSortedByUpdatedAt } from 'graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types';
import Home from './components/pages/Home';
import IntroPage from './components/pages/IntroPage';
import ArticlePage from './containers/pages/ArticlePage';
import HotArticles from './containers/templates/HotArticles';
import { articleListSlice } from './ducks/articleList';
import './App.scss';

declare global {
  interface Window {
    gtag?: (
      key: string,
      trackingId: string,
      // eslint-disable-next-line
      config: { page_path: string },
    ) => void;
    // eslint-disable-next-line
    iframely: any;
  }
}

const App: FC = () => {
  const { hash, pathname } = useLocation();
  const { initArticle } = articleListSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  useEffect(() => {
    /* eslint-disable */
    (async () => {
      const result = await API.graphql({
        query: listComicsSortedByUpdatedAt,
        variables: { owner: 'owner', sortDirection: 'DESC' },
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      });
      if ('data' in result && result.data) {
        const articlesData = result.data as ListComicsSortedByUpdatedAtQuery;
        if (articlesData.listComicsSortedByUpdatedAt) {
          dispatch(
            initArticle(
              articlesData.listComicsSortedByUpdatedAt.items as Comic[],
            ),
          );
        }
      }
    })();
    /* eslint-enable */
  }, [dispatch, initArticle]);

  // google analytics
  const location = useLocation();
  const trackingId = process.env.REACT_APP_GA_TRACKING_ID;
  const trackingIdUA = process.env.REACT_APP_UA_TRACKING_ID;
  useEffect(() => {
    if (!window.gtag) return;
    if (!trackingId) return;
    window.gtag('config', trackingId, { page_path: location.pathname });
    if (!trackingIdUA) return;
    window.gtag('config', trackingIdUA, { page_path: location.pathname });
  }, [trackingId, trackingIdUA, location]);

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
          </nav>
        </div>
      </header>
      {pathname === '/' && <HotArticles />}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":code" element={<ArticlePage />} />
          <Route path="intro" element={<IntroPage />} />
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
