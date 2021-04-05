import { FC, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';

import Home from './components/pages/Home'
import './App.scss';

const App: FC = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [hash, pathname]);

  return (
    <div className="body">
      <header> </header>
      <div className="container">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />;
          </Routes>
        </main>
        <nav> </nav>
        <aside> </aside>
      </div>
      <footer> </footer>
    </div>
  );
};

export default App;
