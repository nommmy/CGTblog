import { FC } from 'react';
import { Link } from 'react-router-dom';
import 'components/templates/Aside.scss';

const WelcomeMessage: FC = () => (
  <div className="welcome">
    <img src="headline/welcome.png" alt="Welcome" className="welcome_header" />
    <div className="welcome_message">
      <p>
        <strong>ぽむログ</strong>は今おすすめの漫画を紹介する個人ブログです。
      </p>
      <div className="welcome_link">
        <Link to="intro">もっとくわしく</Link>
      </div>
    </div>
  </div>
);

export default WelcomeMessage;
