import { FC } from 'react';
import { ComicData } from 'data/comics';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import GenreIcon from 'components/atoms/GenreIcon';
import './Card.scss';

const RecommendArticle: FC<ComicData> = ({ comics }) => (
  <div className="reco_container">
    {comics.map((comic) => (
      <Link to={comic.code} key={comic.code}>
        <Card className="reco_item">
          <div className="reco_thumbnail">
            <CardMedia className="reco_media" image="./aiko.png" title="aiko">
              <div>
                <GenreIcon genre={comic.genre} />
              </div>
            </CardMedia>
            <p>{comic.title}</p>
          </div>
          <CardActions disableSpacing />
        </Card>
      </Link>
    ))}
  </div>
);

export default RecommendArticle;
