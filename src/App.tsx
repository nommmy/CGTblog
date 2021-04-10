import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import Home from './components/pages/Home';
import IntroPage from './components/pages/IntroPage';
import ArticlePage from './containers/pages/ArticlePage';

import './App.scss';

const App: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

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
