import React, { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

type Props = {
  imageInsert: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
};

const InsertImageButton: FC<Props> = ({ imageInsert }) => (
  <label htmlFor="icon-button-file">
    <input
      accept="image/*"
      style={{ display: 'none' }}
      id="icon-button-file"
      type="file"
      onChange={imageInsert}
    />
    <IconButton color="primary" aria-label="upload picture" component="span">
      <PhotoCamera />
    </IconButton>
  </label>
);

export default InsertImageButton;
