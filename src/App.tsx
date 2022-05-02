import React, { Suspense, FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { API } from 'aws-amplify';
import { ListComicsSortedByUpdatedAtQuery } from 'API';
import { Comic } from 'data/comics';
import { listComicsSortedByUpdatedAt } from 'graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types';
import { articleListSlice } from './ducks/articleList';
import './App.scss';
// code splittingの関係で先読み
import './containers/templates/Article.scss';

const Home = React.lazy(() => import('./components/pages/Home'));
const IntroPage = React.lazy(() => import('./components/pages/IntroPage'));
const ArticlePage = React.lazy(() => import('./containers/pages/ArticlePage'));
const HotArticles = React.lazy(
  () => import('./containers/templates/HotArticles'),
);
const Footer = React.lazy(() => import('./components/templates/Footer'));

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
      <Suspense
        fallback={
          <div className="suspense">
            <img src="pommeblog.png" alt="icon" />
          </div>
        }
      >
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
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
};

export default App;
