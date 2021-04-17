import React, { FC } from 'react';
import { genreIconProps, genres } from 'components/atoms/GenreIcon';
import { IconButton } from '@material-ui/core';
import { articleListSlice } from 'features/articleList';
import { useDispatch } from 'react-redux';
import { MdViewList } from 'react-icons/md';
import { Genre } from 'API';

const SearchGenreButton: FC = () => {
  const genreList = Object.entries(Genre);
  const { genreSearch, resetSearch } = articleListSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="button_group">
      <IconButton key="reset" onClick={() => dispatch(resetSearch())}>
        {React.cloneElement(<MdViewList data-color="gray" />, genreIconProps)}
      </IconButton>
      {genreList.map((genre) => (
        <IconButton
          key={genre[0]}
          onClick={() => dispatch(genreSearch(genre[1]))}
        >
          {React.cloneElement(genres[genre[0]], genreIconProps)}
        </IconButton>
      ))}
    </div>
  );
};

export default SearchGenreButton;
