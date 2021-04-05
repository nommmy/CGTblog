import { FC } from 'react';
import { ComicData } from 'data/comics';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import FavariteButton from 'components/molecules/FavariteButton';
import ShareButton from 'components/molecules/ShareButton';

import './Card.scss';

const ArticleCards: FC<ComicData> = ({ comics }) => (
  <div className="card_container">
    {comics.map((comic) => (
      <Card className="card_item" key={comic.id}>
        <CardMedia className="card_media" image="./aiko.png" title="aiko" />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {comic.title}: {comic.overview}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <FavariteButton />
          <ShareButton />
        </CardActions>
      </Card>
    ))}
  </div>
);

export default ArticleCards;
