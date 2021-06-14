import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ArticleOptionForms from 'containers/organisms/ArticleOptionForms';
import ArticleContentForm from 'containers/organisms/ArticleContentForm';
import { API, Storage } from 'aws-amplify';
import { createComic } from 'graphql/mutations';
import ConfirmModal, { IFormInputs } from 'containers/molecules/Modal';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types';
import InsertImageButton from 'containers/atoms/InsertImageButton';
import './markdown.scss';

const MarkdownContentForms: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    watch,
  } = useForm<IFormInputs>();
  const codeWatched = watch('code', '');

  const [text, setText] = useState<string>('');
  const [header, setHeader] = useState<File>();
  const navigate = useNavigate();
  const onSubmit = async (data: IFormInputs) => {
    if (header === undefined) return;
    const s3Bucket = process.env.REACT_APP_AWS_USER_FILES_S3_BUCKET as string;
    const s3BucketRegion = process.env
      .REACT_APP_AWS_USER_FILES_S3_BUCKET_REGION as string;
    const imageUrlDefault = `https://${s3Bucket}.s3-${s3BucketRegion}.amazonaws.com/public/`;
    await Storage.put(`${codeWatched}/${header.name}`, header, {
      level: 'public',
      contentType: header.type,
    }).then((result) => {
      // eslint-disable-next-line
      console.log(result);
    });
    // // eslint-disable-next-line
    // .catch ((err) => console.log(err));

    // const headerPath = (await Storage.get(
    //   `${codeWatched}/${header.name}`,
    // )) as string;
    const imageUrl = `${imageUrlDefault}${codeWatched}/${header.name}`;

    const submitData: IFormInputs = {
      ...data,
      image: imageUrl,
      content: text,
      like: 0,
    };
    // eslint-disable-next-line
    console.log(submitData);
    await API.graphql({
      query: createComic,
      variables: { input: submitData },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    navigate('/');
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="post_container">
      <InsertImageButton text={text} setText={setText} codeWatched={codeWatched} />
      <ArticleOptionForms
        control={control}
        getValues={getValues}
        setHeader={setHeader}
      />
      <ArticleContentForm
        text={text}
        setText={setText}
        register={register}
        codeWatched={codeWatched}
      />
      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handleOpen}
      >
        Submit
      </Button>
      <ConfirmModal
        onClose={handleClose}
        open={open}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
      />
    </div>
  );
};

export default MarkdownContentForms;
