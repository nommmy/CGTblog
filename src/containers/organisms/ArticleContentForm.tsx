import { FC} from 'react';
import {UseFormRegister} from 'react-hook-form';
import { IFormInputs } from 'components/molecules/Modal';
import { useRemark } from 'react-remark';
import emoji from 'remark-emoji';
import breaks from 'remark-breaks';
import footnotes from 'remark-footnotes';
import toc from 'remark-toc';
import gfm from 'remark-gfm';
import directive from 'remark-directive';
// eslint-disable-next-line
import { Node } from 'unist';
import h from 'hastscript';
import { visit } from 'unist-util-visit';

/* eslint-disable */
const hint = require('remark-hint');
const sectionize = require('remark-sectionize');
const slug = require('remark-slug');
/* eslint-enable */

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  register: UseFormRegister<IFormInputs>;
  codeWatched: string;
};
// めちゃくちゃ無理矢理ts対応
/* eslint-disable */
export const htmlDirectives = () => {
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

const ArticleContentForm: FC<Props> = ({ text, setText, register, codeWatched }) => {
  const [markdown, setMarkdown] = useRemark({
    remarkPlugins: [
      [emoji],
      [breaks],
      [footnotes, { inlineNotes: true }],
      [gfm],
      [directive],
      [htmlDirectives],
      [slug],
      [toc],
      [hint],
      [sectionize],
    ],
  });

  return (
    <div className="react-split-mde-wrap">
      <div className="react-split-mde react-split-mde-box">
        <textarea
          value={text}
          placeholder="「Code」を先に入力してください"
          disabled={!codeWatched}
          {...register('content')}
          className="react-split-mde-textarea"
          onChange={({ currentTarget }) => {
            setText(currentTarget.value);
            setMarkdown(currentTarget.value);
          }}
        />
      </div>
      <div className="react-split-mde-box react-split-mde-preview">
        {markdown}
      </div>
    </div>
  );
};

export default ArticleContentForm;
