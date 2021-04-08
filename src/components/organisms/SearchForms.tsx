import { FC } from 'react';
import SearchText from 'components/molecules/SearchText';
import SearchGenreButton from 'components/molecules/SearchGenreButton';

import './FormGroup.scss';

const SearchForms: FC = () => (
  <div className="form_container">
    <SearchText />
    <SearchGenreButton/>
  </div>
);

export default SearchForms;
