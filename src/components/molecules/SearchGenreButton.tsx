import React, { FC } from 'react';
import { genreIconProps, genres } from 'components/atoms/GenreIcon';
import { IconButton } from '@material-ui/core';
import { articleListSlice, useArticles } from 'features/articleList';
import { useDispatch } from 'react-redux';
import { MdViewList } from 'react-icons/md';
import { Genre } from 'API';

// const SearchGenreButton: FC = () => {
//   const iconList = Object.keys(genres).map((genreKey) =>
//     React.cloneElement(genres[genreKey], { key:genreKey, ...genreIconProps }),
//   );

//   return <div>{iconList}</div>;
// };

const SearchGenreButton: FC = () => {
  const articles = useArticles();
  const genreList = Object.entries(Genre);
  const { genreSearch, reset } = articleListSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="button_group">
      <IconButton key="reset" onClick={() => dispatch(reset(articles))}>
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
