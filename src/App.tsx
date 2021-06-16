import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch } from 'react-redux';
import { API } from 'aws-amplify';
import { ListComicsQuery } from 'API';
import { Comic } from 'data/comics';
import { listComics } from 'graphql/queries';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types';
import Home from './components/pages/Home';
import IntroPage from './components/pages/IntroPage';
import ArticlePage from './containers/pages/ArticlePage';
import EditPage from './containers/pages/EditPage';
import CreatePage from './components/pages/CreatePage';
import AdminPage from './components/pages/AdminPage';
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
        query: listComics,
        authMode: GRAPHQL_AUTH_MODE.AWS_IAM,
      });
      if ('data' in result && result.data) {
        const articlesData = result.data as ListComicsQuery;
        if (articlesData.listComics) {
          dispatch(initArticle(articlesData.listComics.items as Comic[]));
        }
      }
    })();
  }, [dispatch, initArticle]);

  return (
    <div className="body">
      <header>
        <Link to="intro">このサイトについて</Link>
        <Link to="admin">編集＆NEW</Link>
        <Link to="/">
          <HomeIcon color="primary" />
        </Link>
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":code" element={<ArticlePage />} />
          <Route path="intro" element={<IntroPage />} />
          <Route path="admin" element={<AdminPage />}/>
          <Route path="admin/new" element={<CreatePage />} />
          <Route path="admin/:code" element={<EditPage />} />
          {/* <Route path="admin" element={<AdminPage />}>
            <Route path="new" exact element={<CreatePage />} />
            <Route path=":code" exact element={<EditPage />} />
          </Route> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
