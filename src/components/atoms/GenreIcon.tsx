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


export const genreIconProps = {
  className: 'genre_icon',
  color: 'white',
  size: '20',
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
  impression: <FaRegSadTear data-color="lightgreen" />
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
