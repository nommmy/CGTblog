import React, { FC } from 'react';
import { genreIconProps, genres } from 'components/atoms/GenreIcon';
import { IconButton } from '@material-ui/core';

// const SearchGenreButton: FC = () => {
//   const iconList = Object.keys(genres).map((genreKey) =>
//     React.cloneElement(genres[genreKey], { key:genreKey, ...genreIconProps }),
//   );

//   return <div>{iconList}</div>;
// };

const SearchGenreButton: FC = () => {
  const genreList = Object.keys(genres);

  return (
    <div className="button_group">
      {genreList.map((genre) => (
        <IconButton key={genre}>
          {React.cloneElement(genres[genre], genreIconProps)}
        </IconButton>
      ))}
    </div>
  );
};

export default SearchGenreButton;
