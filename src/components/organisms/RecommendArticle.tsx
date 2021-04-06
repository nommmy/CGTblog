import { FC } from 'react';
import { ComicData } from 'data/comics';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import './Card.scss';

const RecommendArticle: FC<ComicData> = ({ comics }) => (
  <div className="reco_container">
    {comics.map((comic) => (
      <Link to={comic.code}>
        <Card className="reco_item" key={comic.code}>
          <div className="reco_thumbnail">
            <CardMedia className="reco_media" image="./aiko.png" title="aiko" />
            <p>{comic.title}</p>
          </div>
        </Card>
      </Link>
    ))}
  </div>
);

export default RecommendArticle;
