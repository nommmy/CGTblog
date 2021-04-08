import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';

const ShareButton: FC = () => (
  <IconButton aria-label="share">
    <ShareIcon />
  </IconButton>
);

export default ShareButton;
