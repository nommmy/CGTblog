import { FC } from 'react';
// 型定義ファイルが提供されてない？
// eslint-disable-next-line
// const remark2react = require('remark-react');
import { useRemark } from 'react-remark';
import './markdown.scss';

const MarkdownContentForms: FC = () => {
  const [markdown, setMarkdown] = useRemark();
  // const setText = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setMarkdown(e.target.value);
  // };

  return (
    <div className="react-split-mde-wrap">
      <div className="react-split-mde react-split-mde-box">
        <textarea
          placeholder="Markdownで記述"
          className="react-split-mde-textarea"
          onChange={({ currentTarget }) => setMarkdown(currentTarget.value)}
        />
      </div>
      <div className="react-split-mde-box react-split-mde-preview">{markdown}</div>
    </div>
  );
};

export default MarkdownContentForms;
