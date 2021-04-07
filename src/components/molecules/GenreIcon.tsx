import React, { FC } from 'react';
import {
  GiCrossedSwords,
  GiHealing,
  GiCharm,
  GiBurningRoundShot,
  GiHeartInside,
  GiGavel,
  GiMusicalNotes,
  GiMeal,
} from 'react-icons/gi';

const genreIconProps = {
  className: 'genre_icon',
  color: 'white',
  size: '20',
};

type genresData = {
  [genreCode: string]: JSX.Element;
};

const genres: genresData = {
  battle: <GiCrossedSwords data-color="blue"/>,
  love: <GiCharm data-color="pink"/>,
  aoharu: <GiHealing data-color="skyblue"/>,
  sports: <GiBurningRoundShot data-color="red"/>,
  drama: <GiHeartInside data-color="green"/>,
  job: <GiGavel data-color="orange"/>,
  music: <GiMusicalNotes data-color="purple"/>,
  food: <GiMeal data-color="yellow"/>,
};

const GenreIcon: FC<{ genre: string }> = ({ genre }) => {
  const genreList = Object.keys(genres);
  if (genreList.includes(genre)) {
    // return genres[genre];
    return React.cloneElement(genres[genre], genreIconProps);
  }

  return null;
};

export default GenreIcon;
