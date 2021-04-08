import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const FavariteButton: FC = () => (
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
  </IconButton>
);

export default FavariteButton;