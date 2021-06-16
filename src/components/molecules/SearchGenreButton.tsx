import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import { articleListSlice } from 'ducks/articleList';
import { useDispatch } from 'react-redux';
import { MdViewList } from 'react-icons/md';
import { Genre } from 'API';
import GenreIcon from 'components/atoms/GenreIcon';

const SearchGenreButton: FC = () => {
  const genreList = Object.entries(Genre);
  const { searchGenre, resetShowArticle } = articleListSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="button_group">
      <IconButton key="reset" onClick={() => dispatch(resetShowArticle())}>
        <MdViewList data-color="gray" className="genre_icon" color="white" size="30" />
      </IconButton>
      {genreList.map((genre) => (
        <IconButton
          key={genre[0]}
          onClick={() => dispatch(searchGenre(genre[1]))}
        >
          <GenreIcon genre={genre[1]} />
        </IconButton>
      ))}
    </div>
  );
};

export default SearchGenreButton;
