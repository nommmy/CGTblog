import { FC } from 'react';
import SearchGenreButton from 'components/molecules/SearchGenreButton';

import './FormGroup.scss';

const SearchForms: FC = () => (
  <section className="form_container">
    <SearchGenreButton />
  </section>
);

export default SearchForms;
