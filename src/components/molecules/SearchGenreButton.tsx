import React, { FC, useState } from 'react';
import { articleListSlice } from 'ducks/articleList';
import { useDispatch } from 'react-redux';
import { MdViewList } from 'react-icons/md';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { genres } from 'components/atoms/GenreIcon';
import { Genre } from 'API';

const SearchGenreButton: FC = () => {
  const genreList = Object.entries(genres);
  const { searchGenre, resetShowArticle } = articleListSlice.actions;
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  
  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number,
  ) => {
    setValue(newValue);
  };

  return (
    <div className="button_group">
      <Tabs
        value={value}
        onChange={handleChange}
      >
        <Tab
          key="reset"
          label="List"
          disableRipple
          data-color="gray"
          onClick={() => dispatch(resetShowArticle())}
          icon={<MdViewList size="1.5rem" />}
        />
        {genreList.map((genre: [string, JSX.Element]) => (
          <Tab
            key={genre[0]}
            disableRipple
            label={genre[0]}
            data-color={genre[0]}
            onClick={() => dispatch(searchGenre(genre[0] as Genre))}
            icon={React.cloneElement(genre[1], { size: '1.5rem' })}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default SearchGenreButton;
