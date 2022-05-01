import React, { FC } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { typeState, articleListSlice } from 'ducks/articleList';
import { MdViewList } from '@react-icons/all-files/md/MdViewList';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { genres } from 'components/atoms/GenreIcon';
import { Genre } from 'API';
import './FormGroup.scss';

const SearchGenreButton: FC = () => {
  const genreList = Object.entries(genres);
  const {
    searchGenre,
    resetShowArticle,
    setTabValue,
  } = articleListSlice.actions;
  const dispatch = useDispatch();
  const tabValue = useSelector<typeState, number>(
    (state) => state.tabValue,
    shallowEqual,
  );

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number,
  ) => {
    dispatch(setTabValue(newValue));
  };

  return (
    <div className="button_group">
      <Tabs value={tabValue} onChange={handleChange}>
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
