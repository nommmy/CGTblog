import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GenreIcon from 'components/atoms/GenreIcon';
import { MdUpdate } from '@react-icons/all-files/md/MdUpdate';
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
import Chip from '@material-ui/core/Chip';
import MediaQuery from 'react-responsive';
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
  tags,
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

  document.title = `【${title}】${subtitle}`;
  /* eslint-disable */
  document.getElementsByName('description')[0].setAttribute(
    'content',
    `${content
      ?.match(/[^\x00-\x7Eｧ-ﾝﾞﾟ]+/g)
      ?.join('')
      ?.slice(0, 150)}`,
  );
  /* eslint-enable */

  return (
    <article className="article_container">
      <div className="genre_icon_group">
        {genres &&
          genres.map((genre) => (
            <GenreIcon key={genre} genre={genre} iconSize={{ size: '35' }} />
          ))}
      </div>
      <section className="option">
        <div className="location">
          <Link to="/">Top</Link> / {title}
        </div>
        <div className="date_container">
          {updatedAt && (
            <>
              <MdUpdate
                style={{ color: 'gray', margin: 5, marginBottom: 0 }}
                size="1em"
              />
              <span className="date">{updatedAt?.split('T')[0]}</span>
            </>
          )}
        </div>
      </section>
      <MediaQuery minWidth={1024}>
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
      </MediaQuery>
      <MediaQuery maxWidth={1023}>
        <section className="article_header">
          <h2 className="md-title">{title}</h2>
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
          <div className="ribbon14-wrapper">
            <span className="ribbon14">★</span>
            <p>{subtitle}</p>
          </div>
        </section>
      </MediaQuery>
      <section className="article_tags">
        {tags?.map((tag) => (
          <Chip
            key={tag}
            variant="outlined"
            size="small"
            label={`#${tag}`}
            className="tag"
          />
        ))}
      </section>
      <section className="react-split-mde-preview">{markdown}</section>
      <section className="share_button_group">
        <TwitterShareButton
          url={window.location.href}
          title={`${subtitle} 【${title}】`}
          hashtags={[title, 'ぽむログ']}
        >
          <TwitterIcon size={30} round />
        </TwitterShareButton>
        <FacebookShareButton
          url={window.location.href}
          quote={`${subtitle} 【${title}】`}
        >
          <FacebookIcon size={30} round />
        </FacebookShareButton>
      </section>
    </article>
  );
};

export default Article;
