import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import GenreIcon from 'components/atoms/GenreIcon';
import { MdUpdate } from 'react-icons/md';
import './Article.scss';
import { typeState } from 'features/articleList';
import { Comic } from 'data/comics';
import { useSelector, shallowEqual } from 'react-redux';
import { Navigate } from 'react-router';

const Article: FC = () => {
  const currentArticle = useSelector<typeState, Comic>(
    (state) => state.currentArticle,
    shallowEqual,
  );

  return (
    !Object.keys(currentArticle).length ? (
      <Navigate to="/" replace />
    ) : (
      <article className="article_container">
        <Helmet>
          <title>{currentArticle.title}</title>
        </Helmet>
        <div className="genre_icon_group">
          {currentArticle.genres.map((genre) => (
            <GenreIcon key={genre} genre={genre} />
          ))}
        </div>
        <section className="option">
          <div>
            <Link to="/">Top</Link> / {currentArticle.title}
          </div>
          <div className="date_container">
            <MdUpdate style={{ color: 'gray', margin: 5 }} />
            <span className="date">{currentArticle.updatedAt}</span>
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
              <p className="overview">{currentArticle.subtitle}</p>
              <p className="title">{currentArticle.title}</p>
            </div>
          </div>
        </section>
        <section>導入</section>
        <section>
          <div className="summary_box">
            <div className="box_title">ここがポイント</div>
            <div className="box_content">{currentArticle.subtitle}</div>
          </div>
        </section>
        <section className="chapter">aa</section>
      </article>
    ));
};

export default Article;
