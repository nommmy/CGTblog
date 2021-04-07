import { FC } from 'react';
import { ComicData } from 'data/comics';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import FavariteButton from 'components/molecules/FavariteButton';
import ShareButton from 'components/molecules/ShareButton';
import GenreIcon from 'components/molecules/GenreIcon';
import './Card.scss';

const ArticleCards: FC<ComicData> = ({ comics }) => (
  <div className="card_container">
    {comics.map((comic) => (
      <Card className="card_item" key={comic.code}>
        <Link to={comic.code}>
          <div style={{ height: 30 }}>
            <GenreIcon genre={comic.genre} />
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
