import { FC } from 'react';
import MarkdownContentForms from 'containers/templates/MarkdownContentForms';
import { withAuthenticator } from '@aws-amplify/ui-react';

const CreatePage: FC = () => {
  document.title = 'Creat New Article';

  return (
    <>
      <div className="flex-container">
        <main>
          <MarkdownContentForms />
        </main>
      </div>
    </>
  );
};

export default withAuthenticator(CreatePage);
