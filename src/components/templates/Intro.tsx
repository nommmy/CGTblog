import { FC } from 'react';
import { Helmet } from 'react-helmet';

const Intro: FC = () => (
  <>
    <Helmet>
      <title>welcome</title>
    </Helmet>
    <h2>ようこそ</h2>
    <p>このサイトは、何たらかんたら。</p>
  </>
);

export default Intro;
