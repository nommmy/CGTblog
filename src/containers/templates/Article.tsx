import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import GenreIcon from 'components/atoms/GenreIcon';
import { MdUpdate } from 'react-icons/md';
import { Comic } from 'data/comics';
import { htmlDirectives } from 'containers/organisms/ArticleContentForm';
import { useRemark } from 'react-remark';
import emoji from 'remark-emoji';
import breaks from 'remark-breaks';
import footnotes from 'remark-footnotes';
import toc from 'remark-toc';
import gfm from 'remark-gfm';
import directive from 'remark-directive';
import './Article.scss';
import '_markdown_extension.scss';

/* eslint-disable */
const hint = require('remark-hint');
const sectionize = require('remark-sectionize');
const slug = require('remark-slug');
/* eslint-enable */

const Article: FC<Comic> = ({
  title,
  genres,
  subtitle,
  updatedAt,
  image,
  content,
}) => {
  const [markdown, setMarkdown] = useRemark({
    remarkPlugins: [
      [emoji],
      [breaks],
      [footnotes, { inlineNotes: true }],
      [gfm],
      [directive],
      [htmlDirectives],
      [slug],
      [toc],
      [hint],
      [sectionize],
    ],
  });
  useEffect(() => setMarkdown(content), [content, setMarkdown]);

  return (
    <article className="article_container">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className="genre_icon_group">
        {genres &&
          genres.map((genre) => <GenreIcon key={genre} genre={genre} />)}
      </div>
      <section className="option">
        <div>
          <Link to="/">Top</Link> / {title}
        </div>
        <div className="date_container">
          {updatedAt && (
            <>
              <MdUpdate style={{ color: 'gray', margin: 5 }} />
              <span className="date">{updatedAt?.split('T')[0]}</span>
            </>
          )}
        </div>
      </section>
      <section className="article_header">
        <div className="header_image">
          <img
            src={image}
            alt="Header"
            style={{ width: '100%', display: 'block' }}
            onError={(e) => {
              (e.target as React.ImgHTMLAttributes<HTMLImageElement>).src =
                'https://charlottech78897cd75f574612ace458f31b6d96a7160346-staging.s3-ap-northeast-1.amazonaws.com/public/_11I3301a.png';
            }}
          />
        </div>
        <div className="title_container">
          <div className="article_title">
            <p className="overview">{subtitle}</p>
            <p className="title">{title}</p>
          </div>
        </div>
      </section>
      <section className="react-split-mde-preview">
        {markdown}
      </section>
    </article>
  );
};

export default Article;
