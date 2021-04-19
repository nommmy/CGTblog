import { FC } from 'react';
import { Helmet } from 'react-helmet';
import Aside from 'components/templates/Aside';

const IntroPage: FC = () => (
  <>
    <Helmet>
      <title>welcome</title>
    </Helmet>
    <main>
      <article className="article_container">
        <h2>ようこそ</h2>
        <p>このサイトは、何たらかんたら。</p>
      </article>
    </main>
    <aside>
      <Aside />
    </aside>
  </>
);

export default IntroPage;
