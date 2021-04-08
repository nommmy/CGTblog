import React, { FC } from 'react';
import { genreIconProps, genres } from 'components/atoms/GenreIcon';
import { IconButton } from '@material-ui/core';
import { articleListSlice } from 'features/articleList';
import { useDispatch } from 'react-redux';
import { MdViewList } from 'react-icons/md';

// const SearchGenreButton: FC = () => {
//   const iconList = Object.keys(genres).map((genreKey) =>
//     React.cloneElement(genres[genreKey], { key:genreKey, ...genreIconProps }),
//   );

//   return <div>{iconList}</div>;
// };

const SearchGenreButton: FC = () => {
  const genreList = Object.keys(genres);
  const { genreSearch, resetSearch } = articleListSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="button_group">
      <IconButton key="reset" onClick={() => dispatch(resetSearch())}>
        {React.cloneElement(<MdViewList data-color="gray" />, genreIconProps)}
      </IconButton>
      {genreList.map((genre) => (
        <IconButton key={genre} onClick={() => dispatch(genreSearch(genre))}>
          {React.cloneElement(genres[genre], genreIconProps)}
        </IconButton>
      ))}
    </div>
  );
};

export default SearchGenreButton;
