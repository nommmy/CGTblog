import React, { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

type Props = {
  imageInsert: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void>;
  insertOK: boolean;
};

const InsertImageButton: FC<Props> = ({ imageInsert, insertOK }) => (
  <label htmlFor="icon-button-file">
    <input
      accept="image/*"
      disabled={insertOK}
      style={{ display: 'none' }}
      id="icon-button-file"
      type="file"
      onChange={imageInsert}
    />
    <IconButton
      disabled={insertOK}
      aria-label="upload picture"
      component="span"
    >
      <PhotoCamera />
    </IconButton>
  </label>
);

export default InsertImageButton;
