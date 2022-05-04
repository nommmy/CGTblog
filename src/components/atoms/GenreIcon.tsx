import React, { FC } from 'react';
import { GiCrossedSwords } from '@react-icons/all-files/gi/GiCrossedSwords';
import { GiHealing } from '@react-icons/all-files/gi/GiHealing';
import { GiHeartKey } from '@react-icons/all-files/gi/GiHeartKey';
import { GiBurningRoundShot } from '@react-icons/all-files/gi/GiBurningRoundShot';
import { GiHeartInside } from '@react-icons/all-files/gi/GiHeartInside';
import { GiMusicalNotes } from '@react-icons/all-files/gi/GiMusicalNotes';
import { GiMeal } from '@react-icons/all-files/gi/GiMeal';
import { FaRegGrinSquintTears } from '@react-icons/all-files/fa/FaRegGrinSquintTears';
import { FaRegSadTear } from '@react-icons/all-files/fa/FaRegSadTear';

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
