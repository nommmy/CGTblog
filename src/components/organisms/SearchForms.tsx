import { FC } from 'react';
import SearchGenreButton from 'components/molecules/SearchGenreButton';

import './FormGroup.scss';

const SearchForms: FC = () => (
  <div className="form_container">
    <SearchGenreButton />
  </div>
);

export default SearchForms;
