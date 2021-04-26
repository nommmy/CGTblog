import { FC } from 'react';
// 型定義ファイルが提供されてない？
// const remark2react = require('remark-react');
import { useRemark } from 'react-remark';
import emoji from 'remark-emoji';
import breaks from 'remark-breaks';
import footnotes from 'remark-footnotes';
import toc from 'remark-toc';
import frontmatter from 'remark-frontmatter';
import extract from 'remark-extract-frontmatter';
import gfm from 'remark-gfm';
import directive from 'remark-directive';
import { visit } from 'unist-util-visit';
// eslint-disable-next-line
import { Node } from 'unist';
import h from 'hastscript';
import yaml from 'yaml';
import './markdown.scss';

// eslint-disable-next-line
const hint = require('remark-hint');
// eslint-disable-next-line
const sectionize = require('remark-sectionize');

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
  /* eslint-disable */

  const [markdown, setMarkdown] = useRemark({
    remarkPlugins: [
      [emoji],
      [breaks],
      [footnotes, { inlineNotes: true }],
      [gfm],
      [directive],
      [htmlDirectives],
      [toc],
      [frontmatter],
      [extract, { yaml: yaml.parse }],
      [hint],
      [sectionize]
    ],
  });


  return (
    <div className="react-split-mde-wrap">
      <div className="react-split-mde react-split-mde-box">
        <textarea
          placeholder="---&#13;title:&#13;code:&#13;genres:&#13;  - &#13;subtitle:&#13;header image:&#13;---"
          className="react-split-mde-textarea"
          onChange={({ currentTarget }) => setMarkdown(currentTarget.value)}
        />
      </div>
      <div className="react-split-mde-box react-split-mde-preview">
        {markdown}
      </div>
    </div>
  );
};

export default MarkdownContentForms;
