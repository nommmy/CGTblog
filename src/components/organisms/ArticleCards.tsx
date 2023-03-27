import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdUpdate } from '@react-icons/all-files/md/MdUpdate';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import GenreIcon from 'components/atoms/GenreIcon';
import { ComicData } from 'data/comics';
import FlipMove from 'react-flip-move';
import Chip from '@material-ui/core/Chip';
import './Card.scss';

const ArticleCards: FC<ComicData> = ({ comics }) => (
  <article>
    <FlipMove className="card_container">
      {comics.map((comic) => (
        <Card className="card_item" key={comic.code}>
          <Link to={comic.code}>
            <section>
              <div className="genre_icon_group">
                {comic.genres.map((genre) => (
                  <GenreIcon key={genre + comic.title} genre={genre} />
                ))}
              </div>
            </section>
            <section className="card_thumbnail">
              <CardMedia
                className="card_media lazyload"
                image="/pommeblog.webp"
                title={comic.title}
                data-bg={comic.image}
              />
              <p>{comic.title}</p>
            </section>
            <section className="card_subtitle">
              <h3>{comic.subtitle}</h3>
            </section>
            <section className="article_tags">
              {comic.tags?.slice(0, 3).map((tag) => (
                <Chip
                  key={tag}
                  variant="outlined"
                  size="small"
                  label={`#${tag}`}
                  className="tag"
                />
              ))}
            </section>
            <CardActions disableSpacing className="card_footer">
              <MdUpdate style={{ color: 'gray', margin: 5 }} />
              <span className="date">{comic.createdAt?.split('T')[0]}</span>
            </CardActions>
          </Link>
        </Card>
      ))}
    </FlipMove>
  </article>
);

export default ArticleCards;
