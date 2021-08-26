import { FC } from 'react';
import { Helmet } from 'react-helmet';
import MarkdownContentForms from 'containers/templates/MarkdownContentForms';
import { withAuthenticator } from '@aws-amplify/ui-react';

const CreatePage: FC = () => (
  <>
    <Helmet>
      <title>Creat New Article</title>
    </Helmet>
    <div className="flex-container">
      <main>
        <MarkdownContentForms />
      </main>
    </div>
  </>
);

export default withAuthenticator(CreatePage);
