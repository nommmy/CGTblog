import { FC } from 'react';
import Article from 'components/templates/Article';
import Aside from 'components/templates/Aside';
import ArticleSideContents from 'components/templates/ArticleSideContents';

const ArticlePage: FC = () => (
  <>
    <main>
      {/* eslint-disable-next-line */}
      <Article />
    </main>
    <aside>
      <ArticleSideContents />
      <Aside />
    </aside>
  </>

  // return <Navigate to="/" replace />;
);

export default ArticlePage;
