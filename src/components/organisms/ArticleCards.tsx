import { FC } from 'react';
import { Link } from 'react-router-dom';
import { MdUpdate } from 'react-icons/md';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import GenreIcon from 'components/atoms/GenreIcon';
import { ComicData } from 'data/comics';
import FlipMove from 'react-flip-move';
import './Card.scss';

const ArticleCards: FC<ComicData> = ({ comics }) => (
  <article>
    <FlipMove className="card_container">
      {comics.map((comic) => (
        <Card className="card_item" key={comic.code}>
          <Link to={comic.code}>
            <section style={{ height: 30 }}>
              <div className="genre_icon_group">
                {comic.genres.map((genre) => (
                  <GenreIcon key={genre + comic.title} genre={genre} />
                ))}
              </div>
            </section>
            <section className="card_thumbnail">
              <CardMedia
                className="card_media"
                image={comic.image}
                title={comic.title}
              />
              <p>{comic.title}</p>
            </section>
            <CardActions disableSpacing className="card_footer">
              <MdUpdate style={{ color: 'gray', margin: 5 }} />
              <span className="date">{comic.updatedAt?.split('T')[0]}</span>
            </CardActions>
          </Link>
        </Card>
      ))}
    </FlipMove>
  </article>
);

export default ArticleCards;
