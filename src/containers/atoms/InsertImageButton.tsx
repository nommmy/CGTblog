import React, { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { Storage } from '@aws-amplify/storage';

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
    });
    // const image = (await Storage.get(`${codeWatched}/${file.name}`)) as string;
    const s3Bucket = process.env.REACT_APP_AWS_USER_FILES_S3_BUCKET as string;
    const s3BucketRegion = process.env
      .REACT_APP_AWS_USER_FILES_S3_BUCKET_REGION as string;
    setText(
      `${text}:img{src="/favicon.ico" data-src="https://${s3Bucket}.s3-${s3BucketRegion}.amazonaws.com/public/${codeWatched}/${file.name}" .lazyload alt="${file.name}" width=300 height=400}`,
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
