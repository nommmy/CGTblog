import { FC } from 'react';
import { ComicData } from 'data/comics';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import FavariteButton from 'components/atoms/FavariteButton';
import ShareButton from 'components/atoms/ShareButton';
import GenreIcon from 'components/atoms/GenreIcon';
import './Card.scss';

const ArticleCards: FC<ComicData> = ({ comics }) => (
  <div className="card_container">
    {comics.map((comic) => (
      <Card className="card_item" key={comic.code}>
        <Link to={comic.code}>
          <div style={{ height: 30 }}>
            <div className="genre_icon_group">
              {comic.genres.map((genre) => (
                <GenreIcon key={genre + comic.title} genre={genre} />
              ))}
            </div>
          </div>
          <div className="card_thumbnail">
            <CardMedia className="card_media" image="./aiko.png" title="aiko" />
            <p>{comic.title}</p>
          </div>
        </Link>
        <CardActions disableSpacing>
          <FavariteButton />
          <ShareButton />
        </CardActions>
      </Card>
    ))}
  </div>
);

export default ArticleCards;
