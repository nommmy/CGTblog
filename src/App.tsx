import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import { useDispatch } from 'react-redux';
import Home from './components/pages/Home';
import IntroPage from './components/pages/IntroPage';
import ArticlePage from './containers/pages/ArticlePage';
import { articleListSlice, useArticles } from './features/articleList';
import './App.scss';

const App: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  const articles = useArticles();
  const { reset } = articleListSlice.actions;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset(articles));
  }, [reset, dispatch, articles]);

  /* eslint-disable */
  // useEffect(() => {
  //   const asyncFunc = async () => {
  //     const apiData:any = await API.graphql({ query: listComics });
  //     console.log(apiData.data.listComics.items as Comic[]);
  //     dispatch(initArticle(apiData.data.listComics.itmes as Comic[]));
  //   };
  //   asyncFunc();
  // }, []);
  /* eslint-enable */

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
