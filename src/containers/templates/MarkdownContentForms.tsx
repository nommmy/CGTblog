import { FC } from 'react';
import { useRemark } from 'react-remark';
import { useForm } from 'react-hook-form';
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
import './markdown.scss';

// eslint-disable-next-line
const hint = require('remark-hint');
// eslint-disable-next-line
const sectionize = require('remark-sectionize');

export type IFormInputs = {
  title: string;
  code: string;
  subtitle: string;
  image: string;
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

  const { handleSubmit, control, getValues } = useForm<IFormInputs>();
  // eslint-disable-next-line
  const onSubmit = (data: IFormInputs) => console.log(data);

  return (
    <div className="post_container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ArticleOptionForms control={control} getValues={getValues} />
        <div className="react-split-mde-wrap">
          <div className="react-split-mde react-split-mde-box">
            <textarea
              className="react-split-mde-textarea"
              onChange={({ currentTarget }) => setMarkdown(currentTarget.value)}
            />
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
