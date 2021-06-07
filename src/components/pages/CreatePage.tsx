import { FC } from 'react';
import { Helmet } from 'react-helmet';
import MarkdownContentForms from 'containers/templates/MarkdownContentForms';
import { withAuthenticator } from '@aws-amplify/ui-react';

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

export default withAuthenticator(CreatePage);
