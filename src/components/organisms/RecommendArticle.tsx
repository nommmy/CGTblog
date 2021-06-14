import { FC } from 'react';
import { ComicData } from 'data/comics';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import GenreIcon from 'components/atoms/GenreIcon';
import './Card.scss';

const RecommendArticle: FC<ComicData> = ({ comics }) => (
  <article className="reco_container">
    {comics.map((comic) => (
      // eslint-disable-next-line
      <Link to={'/' + comic.code} key={comic.code}>
        <Card className="reco_item">
          <section className="reco_thumbnail">
            <CardMedia
              className="reco_media"
              image={comic.image}
              title={comic.title}
            >
              <div className="genre_icon_group">
                {comic.genres.map((genre) => (
                  <GenreIcon key={genre + comic.title} genre={genre} iconSize={{ size: '25' }} />
                ))}
              </div>
            </CardMedia>
            <p>{comic.title}</p>
          </section>
          <CardActions disableSpacing />
        </Card>
      </Link>
    ))}
  </article>
);

export default RecommendArticle;
