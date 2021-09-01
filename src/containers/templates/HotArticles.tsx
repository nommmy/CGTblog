import { FC } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import { useNavigate } from 'react-router-dom';
import { Comic } from 'data/comics';
import Slider from 'react-slick';
import Hammer from 'react-hammerjs';
import MediaQuery, { useMediaQuery } from 'react-responsive';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.scss';

const HotArticles: FC = () => {
  const hotArticles = useSelector<typeState, Comic[]>(
    (state) => state.hotArticles,
    shallowEqual,
  );

  const isSmallScreen = useMediaQuery({ query: '(min-width: 577px)' });

  const settings = {
    slidesToShow: isSmallScreen && hotArticles.length >= 2 ? 2 : 1,
    dots: true,
    speed: 800,
    autoplay: true,
    pauseOnHover: true,
    swipeToSlide: true,
    centerMode: isSmallScreen,
    autoplaySpeed: 6000,
  };

  const navigate = useNavigate();
  const onTapAndMove = (path: string) => {
    navigate(path);
  };

  return (
    <>
      {!!hotArticles.length && (
        <>
          <img
            src="headline/hot-topics.webp"
            alt="Hot Topics"
            className="headline"
          />
          <Slider {...settings} className="article_container">
            {hotArticles.map((comic) => (
              <Hammer onTap={() => onTapAndMove(comic.code)} key={comic.code}>
                <div className="hot_header">
                  <MediaQuery minWidth={860}>
                    <section className="article_header">
                      <div className="header_image">
                        <img
                          src={comic.image}
                          alt="Header"
                          onError={(e) => {
                            (e.target as React.ImgHTMLAttributes<HTMLImageElement>).src =
                              'IMG_0740.JPG';
                          }}
                        />
                      </div>
                      <div className="title_container">
                        <div className="article_title">
                          <p className="overview text-overflow">
                            {comic.subtitle}
                          </p>
                          <p className="title">{comic.title}</p>
                        </div>
                      </div>
                    </section>
                  </MediaQuery>
                  <MediaQuery maxWidth={859}>
                    <section className="article_header">
                      <div className="header_image card_thumbnail">
                        <img
                          src={comic.image}
                          alt="Header"
                          onError={(e) => {
                            (e.target as React.ImgHTMLAttributes<HTMLImageElement>).src =
                              'IMG_0740.JPG';
                          }}
                        />
                        <p>{comic.title}</p>
                      </div>
                    </section>
                  </MediaQuery>
                </div>
              </Hammer>
            ))}
          </Slider>
        </>
      )}
    </>
  );
};

export default HotArticles;
