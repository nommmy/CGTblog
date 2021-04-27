import { FC } from 'react';
import { Helmet } from 'react-helmet';
import MarkdownContentForms from 'containers/templates/MarkdownContentForms';

// formとsubmitはここに書く
const CreatePage: FC = () => (
  <>
    <Helmet>
      <title>Creat New Article</title>
    </Helmet>
    <main>
      <MarkdownContentForms />
    </main>
  </>
);

export default CreatePage;
