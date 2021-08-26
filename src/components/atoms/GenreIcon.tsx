import React, { FC } from 'react';
import {
  GiCrossedSwords,
  GiHealing,
  GiHeartKey,
  GiBurningRoundShot,
  GiHeartInside,
  GiMusicalNotes,
  GiMeal,
} from 'react-icons/gi';
import { FaRegGrinSquintTears, FaRegSadTear } from 'react-icons/fa';

const genreIconProps = {
  className: 'genre_icon',
  color: 'white',
  size: '30',
};

type sizeProps = {
  size: string;
};

type genresData = {
  [genreCode: string]: JSX.Element;
};

export const genres: genresData = {
  aoharu: <GiHealing data-color="aoharu" />,
  battle: <GiCrossedSwords data-color="battle" />,
  music: <GiMusicalNotes data-color="music" />,
  love: <GiHeartKey data-color="love" />,
  sports: <GiBurningRoundShot data-color="sports" />,
  food: <GiMeal data-color="food" />,
  gag: <FaRegGrinSquintTears data-color="gag" />,
  tears: <FaRegSadTear data-color="tears" />,
  drama: <GiHeartInside data-color="drama" />,
};

const GenreIcon: FC<{ genre: string; iconSize?: sizeProps }> = ({
  genre,
  iconSize = { size: '30' },
}) => {
  const genreList = Object.keys(genres);
  if (genreList.includes(genre)) {
    return React.cloneElement(
      genres[genre],
      Object.assign(genreIconProps, iconSize),
    );
  }

  return null;
};

export default GenreIcon;
