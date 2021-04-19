import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import { ListComicsQuery } from 'API';
import { Comic } from 'data/comics';
import { listComics } from 'graphql/queries';
import Home from './components/pages/Home';
import IntroPage from './components/pages/IntroPage';
import ArticlePage from './containers/pages/ArticlePage';
import { articleListSlice } from './features/articleList';
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
      const result = await API.graphql(graphqlOperation(listComics));
      if ('data' in result && result.data) {
        const articlesData = result.data as ListComicsQuery;
        dispatch(initArticle(articlesData?.listComics?.items as Comic[]));
      }
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="body">
      <header>
        <Link to="intro">このサイトについて</Link>
        <Link to="/">
          <HomeIcon color="primary" />
        </Link>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":code" element={<ArticlePage />} />
          <Route path="intro" element={<IntroPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
