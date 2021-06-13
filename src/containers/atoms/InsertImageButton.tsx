import React, { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Storage } from 'aws-amplify';
import awsmobile from 'aws-exports';

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  codeWatched: string;
};

const InsertImageButton: FC<Props> = ({ text, setText, codeWatched }) => {
  const imageInsert = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files) return;
    const file = e.target.files[0];
    await Storage.put(`${codeWatched}/${file.name}`, file, {
      level: 'public',
      contentType: file.type,
    }) // eslint-disable-next-line
      .then((result) => console.log(result))
      // eslint-disable-next-line
      .catch((err) => console.log(err));
    // const image = (await Storage.get(`${codeWatched}/${file.name}`)) as string;
    setText(
      `${text}![${file.name}](https://${awsmobile.aws_user_files_s3_bucket}.s3-${awsmobile.aws_user_files_s3_bucket_region}.amazonaws.com/public/${codeWatched}/${file.name})`,
    );
  };

  return (
    <div className="image_insert_button">
      <label htmlFor="icon-button-file">
        <input
          accept="image/*"
          disabled={!codeWatched}
          style={{ display: 'none' }}
          id="icon-button-file"
          type="file"
          onChange={imageInsert}
        />
        <IconButton
          disabled={!codeWatched}
          aria-label="upload picture"
          component="span"
        >
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
};

export default InsertImageButton;
