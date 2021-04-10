import { FC } from 'react';
import { Helmet } from 'react-helmet';

const Intro: FC = () => (
  <>
    <Helmet>
      <title>welcome</title>
    </Helmet>
    <article className="article_container">
      <h2>ようこそ</h2>
      <p>このサイトは、何たらかんたら。</p>
    </article>
  </>
);

export default Intro;
