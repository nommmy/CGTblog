import { FC, useState } from 'react';
import { useRemark } from 'react-remark';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import emoji from 'remark-emoji';
import breaks from 'remark-breaks';
import footnotes from 'remark-footnotes';
import toc from 'remark-toc';
import gfm from 'remark-gfm';
import directive from 'remark-directive';
import { visit } from 'unist-util-visit';
// eslint-disable-next-line
import { Node } from 'unist';
import h from 'hastscript';
import { Button } from '@material-ui/core';
import ArticleOptionForms from 'containers/organisms/ArticleOptionForms';
import { API, Storage, graphqlOperation } from 'aws-amplify';
import { createComic } from 'graphql/mutations';
import InsertImageButton from 'components/atoms/InsertImageButton';
import './markdown.scss';

// eslint-disable-next-line
const hint = require('remark-hint');
// eslint-disable-next-line
const sectionize = require('remark-sectionize');

export type IFormInputs = {
  title: string;
  code: string;
  subtitle: string;
  content: string;
  image: string;
  like: number;
  genres: string[];
};

const MarkdownContentForms: FC = () => {
  // めちゃくちゃ無理矢理ts対応
  /* eslint-disable */
  const htmlDirectives = () => {
    const ondirective = (node: Node) => {
      const data = node.data || (node.data = {});
      const hast = h(node.name as string, node.attributes as string);

      data.hName = hast.tagName;
      data.hProperties = hast.properties;
    };
    const transform = (tree: Node) => {
      visit(
        tree,
        ['textDirective', 'leafDirective', 'containerDirective'],
        ondirective,
      );
    };

    return transform;
  };
  /* eslint-enable */

  const [markdown, setMarkdown] = useRemark({
    remarkPlugins: [
      [emoji],
      [breaks],
      [footnotes, { inlineNotes: true }],
      [gfm],
      [directive],
      [htmlDirectives],
      [toc],
      [hint],
      [sectionize],
    ],
  });

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
    await Storage.put(`${codeWatched}/${header.name}`, header, {
      level: 'public',
      contentType: header.type,
    }) // eslint-disable-next-line
      .then((result) => console.log(result))
      // eslint-disable-next-line
      .catch((err) => console.log(err));
    const headerPath = (await Storage.get(
      `${codeWatched}/${header.name}`,
    )) as string;

    const submitData: IFormInputs = {
      ...data,
      image: headerPath,
      content: text,
      like: 0,
    };

    await API.graphql(graphqlOperation(createComic, { input: submitData }));

    navigate('/');
  };

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
    const image = (await Storage.get(`${codeWatched}/${file.name}`)) as string;
    setText(
      `${text}![${file.name}](${image})`,
      // `${text}![${file.name}](https://charlottech78897cd75f574612ace458f31b6d96a7160346-staging.s3-ap-northeast-1.amazonaws.com/public/${codeWatched}/${file.name})`,
    );
  };

  return (
    <div className="post_container">
      <div className="image_insert_button">
        <InsertImageButton imageInsert={imageInsert} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ArticleOptionForms
          control={control}
          getValues={getValues}
          setHeader={setHeader}
        />
        <div className="react-split-mde-wrap">
          <div className="react-split-mde react-split-mde-box">
            {codeWatched ? (
              <textarea
                value={text}
                {...register('content')}
                className="react-split-mde-textarea"
                onChange={({ currentTarget }) => {
                  setText(currentTarget.value);
                  setMarkdown(currentTarget.value);
                }}
              />
            ) : (
              <textarea
                value={text}
                disabled
                {...register('content')}
                className="react-split-mde-textarea"
                onChange={({ currentTarget }) => {
                  setText(currentTarget.value);
                  setMarkdown(currentTarget.value);
                }}
              />
            )}
          </div>
          <div className="react-split-mde-box react-split-mde-preview">
            {markdown}
          </div>
        </div>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MarkdownContentForms;
