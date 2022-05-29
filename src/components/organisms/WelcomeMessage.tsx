import { FC } from 'react';
import { Link } from 'react-router-dom';
import 'components/templates/Aside.scss';
import MailIcon from '@material-ui/icons/Mail';
import { TwitterIcon } from 'react-share';

const WelcomeMessage: FC = () => (
  <div className="welcome">
    <img
      src="https://charlottech78897cd75f574612ace458f31b6d96a7160346-staging.s3.ap-northeast-1.amazonaws.com/headline/welcome.webp"
      alt="Welcome"
      width="290"
      height="150"
      className="welcome_header"
      decoding="async"
    />
    <div className="welcome_message">
      <p>
        <strong>ぽむログ</strong>
        は今おすすめのマンガを紹介する個人ブログです。有名な作品から隠れた名作まで幅広くおすすめします！
      </p>
      <div className="address_container">
        <p className="address">
          <MailIcon fontSize="small" color="action" className="mail_icon" />
          pomme_blog_owner@gmail.com
        </p>
        <p className="address">
          <a
            href="https://twitter.com/pomme_blog"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <TwitterIcon size={15} round className="mail_icon" />
            @pomme_blog
          </a>
        </p>
      </div>
      <div className="welcome_link">
        <Link to="intro">もっとくわしく</Link>
      </div>
    </div>
    <div className="welcome_message" style={{ marginTop: "2rem" }}>
      <p>
        マンガ以外のことを書いた<strong>趣味ブログ</strong>もぜひぜひ
      </p>
      <div className="address_container">
        <p className="address"/>
      </div>
      <div className="welcome_link">
        <Link to="/blog/home" className="blog_link">ぽむログ - Hobby</Link>
      </div>
    </div>
  </div>
);

export default WelcomeMessage;
