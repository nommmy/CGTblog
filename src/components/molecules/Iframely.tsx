import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Iframely: FC = () => {
  useEffect(() => {
    if (window && window.iframely) {
      // eslint-disable-next-line
      window.iframely.load();
    }
  }, []);

  return (
    <Helmet>
      <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" />
    </Helmet>
  );
};

export default Iframely;
