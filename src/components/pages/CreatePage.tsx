import { FC } from 'react';
import { Helmet } from 'react-helmet';
import ArticleOptionForms from 'containers/templates/ArticleOptionForms';
import MarkdownContentForms from 'containers/templates/MarkdownContentForms';

// formとsubmitはここに書く
const CreatePage: FC = () => (
  <>
    <Helmet>
      <title>Creat New Article</title>
    </Helmet>
    <main>
      <div className="post_container">
        <ArticleOptionForms />
        <MarkdownContentForms />
      </div>
    </main>
  </>
);

export default CreatePage;
