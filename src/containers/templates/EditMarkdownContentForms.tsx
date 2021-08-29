import { FC, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ArticleOptionForms from 'containers/organisms/ArticleOptionForms';
import ArticleContentForm from 'containers/organisms/ArticleContentForm';
import { API, Storage } from 'aws-amplify';
import { updateComic } from 'graphql/mutations';
import ConfirmModal, { IFormInputs } from 'components/molecules/Modal';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql/lib/types';
import InsertImageButton from 'containers/atoms/InsertImageButton';
import { Comic } from 'data/comics';
import './markdown.scss';

const EditMarkdownContentForms: FC<Comic> = ({
  id,
  code,
  title,
  genres,
  subtitle,
  image,
  isPublic,
  content,
  isHot,
  relation,
  tags,
  author,
  volume,
  magazine,
}) => {
  type UpdateInput = {
    id: string;
    code: string;
    title: string;
    genres: string[];
    subtitle: string;
    like: number;
    image: string;
    isPublic: boolean;
    content: string;
    isHot: boolean;
    relation: string[] | null;
    tags: string[] | null;
    author: string | null;
    volume: string | null;
    magazine: string | null;
  };

  const {
    register,
    handleSubmit,
    control,
    getValues,
    watch,
  } = useForm<IFormInputs>({
    defaultValues: { genres: genres as string[] },
  });
  const codeWatched = watch('code', code);

  const [text, setText] = useState<string>(content);
  const [header, setHeader] = useState<File>();
  const navigate = useNavigate();
  const onSubmit = async (data: IFormInputs) => {
    const s3Bucket = process.env.REACT_APP_AWS_USER_FILES_S3_BUCKET as string;
    const s3BucketRegion = process.env
      .REACT_APP_AWS_USER_FILES_S3_BUCKET_REGION as string;
    const imageUrlDefault = `https://${s3Bucket}.s3-${s3BucketRegion}.amazonaws.com/public/`;
    if (header !== undefined) {
      await Storage.put(`${codeWatched}/${header.name}`, header, {
        level: 'public',
        contentType: header.type,
      });
    }

    const submitData: UpdateInput = {
      ...data,
      id,
      image: header ? `${imageUrlDefault}${codeWatched}/${header.name}` : image,
      content: text,
    };

    await API.graphql({
      query: updateComic,
      variables: { input: submitData },
      authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    });

    navigate('/', {replace:true});
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
      <Helmet>
        <title>Edit {title}</title>
      </Helmet>
      <InsertImageButton
        text={text}
        setText={setText}
        codeWatched={codeWatched}
      />
      <ArticleOptionForms
        control={control}
        getValues={getValues}
        setHeader={setHeader}
        defaultValue={{
          title,
          code,
          subtitle,
          relation,
          tags,
          author,
          volume,
          magazine,
          genres: genres as string[],
        }}
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
        defaultValue={{ isPublic, isHot }}
      />
    </div>
  );
};

export default EditMarkdownContentForms;
