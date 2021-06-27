import { FC } from 'react';
import { Helmet } from 'react-helmet';
import Aside from 'components/templates/Aside';

const IntroPage: FC = () => (
  <>
    <Helmet>
      <title>ぽむログとは</title>
    </Helmet>
    <main>
      <article className="article_container">
        <section className="article_header">
          <img
            src="header_logo7.png"
            alt="Header"
            style={{ width: '100%', display: 'block' }}
            onError={(e) => {
              (e.target as React.ImgHTMLAttributes<HTMLImageElement>).src =
                'IMG_0740.JPG';
            }}
          />
        </section>
        <div className="react-split-mde-preview welcome_content">
          <p>
            漫画好きの皆さん、はじめまして！
            <br />
            編集者の「ぽむ」と申します。
          </p>
          <p>
            このページでは、<strong>ぽむログ</strong>
            とはどういうサイトなんだというところをご説明したいと思います。
          </p>
          <h1 id="ぽむログとは">ぽむログとは？</h1>
          <h1 id="今後の更新予定">今後の更新予定</h1>
        </div>
      </article>
    </main>
    <aside>
      <Aside />
    </aside>
  </>
);

export default IntroPage;
