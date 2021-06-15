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
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';
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
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: subtitle },
          { name: 'twitter:card', content: 'summary_large_image' },
          { property: 'og:title', content: title },
          { property: 'og:type', content: 'article' },
          { property: 'og:site_name', content: '未定' },
          { property: 'og:url', content: window.location.href },
          { property: 'og:image', content: image },
          {
            property: 'og:description',
            content: subtitle,
          },
        ]}
      />
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
                'IMG_0740.JPG';
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
      <section className="react-split-mde-preview">{markdown}</section>
      <section className="share_button_group">
        <TwitterShareButton
          url={window.location.href}
          title={`${subtitle} 「${title}」`}
        >
          <TwitterIcon size={30} round />
        </TwitterShareButton>
        <FacebookShareButton
          url={window.location.href}
          quote={`${subtitle} 「${title}」`}
        >
          <FacebookIcon size={30} round />
        </FacebookShareButton>
      </section>
    </article>
  );
};

export default Article;
