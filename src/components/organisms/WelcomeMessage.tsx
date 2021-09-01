import { FC } from 'react';
import { Link } from 'react-router-dom';
import 'components/templates/Aside.scss';
import MailIcon from '@material-ui/icons/Mail';
import { TwitterIcon } from 'react-share';

const WelcomeMessage: FC = () => (
  <div className="welcome">
    <img src="headline/welcome.webp" alt="Welcome" className="welcome_header" />
    <div className="welcome_message">
      <p>
        <strong>ぽむログ</strong>は今おすすめのマンガを紹介する個人ブログです。
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
  </div>
);

export default WelcomeMessage;
