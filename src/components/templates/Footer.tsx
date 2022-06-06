import { FC } from 'react';
import { Link } from 'react-router-dom';

const Footer: FC = () => (
  <div className="footer">
    <div className="footer-links">
      <div>
        <p>Memu</p>
        <ul>
          <li>
            <Link to="/">TOP</Link>
          </li>
          <li>
            <Link to="intro">ABOUT</Link>
          </li>
        </ul>
      </div>
      <div className="footer-sns">
        <p>Link</p>
        <ul>
          <li>
            <a
              href="https://twitter.com/pomme_blog"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="footer-message">
      <Link to="/">
        <img
          src="https://charlottech78897cd75f574612ace458f31b6d96a7160346-staging.s3.ap-northeast-1.amazonaws.com/logo7.webp"
          alt="logo"
          width="200"
          height="87"
          decoding="async"
        />
      </Link>
      <p>
        <strong>ぽむログ</strong>
        は今おすすめの漫画を紹介する個人ブログです。
      </p>
      <p>© 2021 Pomme Blog</p>
    </div>
  </div>
);

export default Footer;
