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
  battle: <GiCrossedSwords data-color="blue" />,
  love: <GiHeartKey data-color="pink" />,
  aoharu: <GiHealing data-color="skyblue" />,
  sports: <GiBurningRoundShot data-color="red" />,
  drama: <GiHeartInside data-color="green" />,
  music: <GiMusicalNotes data-color="purple" />,
  food: <GiMeal data-color="orange" />,
  gag: <FaRegGrinSquintTears data-color="yellow" />,
  impression: <FaRegSadTear data-color="lightgreen" />,
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
