import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import GenreIcon from 'components/atoms/GenreIcon';
import { MdUpdate } from 'react-icons/md';
import './Article.scss';
import { Comic } from 'data/comics';

// type Props = {
//   title: string;
//   genres: string[];
//   overview: string;
// };

const Article: FC<Comic> = ({ title, genres, subtitle, updatedAt }) => (
  <article className="article_container">
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <div className="genre_icon_group">
      {genres.map((genre) => (
        <GenreIcon key={genre} genre={genre} />
      ))}
    </div>
    <section className="option">
      <div>
        <Link to="/">Top</Link> / {title}
      </div>
      <div className="date_container">
        <MdUpdate style={{ color: 'gray', margin: 5 }} />
        <span className="date">{updatedAt}</span>
      </div>
    </section>
    <section className="article_header">
      <div className="header_image">
        <img
          src="./aiko.png"
          alt="Header"
          style={{ width: '100%', display: 'block' }}
        />
      </div>
      <div className="title_container">
        <div className="article_title">
          <p className="overview">{subtitle}</p>
          <p className="title">{title}</p>
        </div>
      </div>
    </section>
    <section>導入</section>
    <section>
      <div className="summary_box">
        <div className="box_title">ここがポイント</div>
        <div className="box_content">{subtitle}</div>
      </div>
    </section>
    <section className="chapter">aa</section>
  </article>
);

export default Article;
