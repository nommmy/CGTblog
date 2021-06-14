import { FC, useMemo } from 'react';
import EditMarkdownContentForms from 'containers/templates/EditMarkdownContentForms';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { useParams } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import { Comic } from 'data/comics';

const EditPage: FC = () => {
  const { code } = useParams();
  const allArticles = useSelector<typeState, Comic[]>(
    (state) => state.allArticles,
    shallowEqual,
  );
  const currentArticle = useMemo(
    () => allArticles.filter((comic) => comic.code === code),
    [code, allArticles],
  );

  return (
    <>
      <main>
        {currentArticle[0] && <EditMarkdownContentForms {...currentArticle[0]} />}
      </main>
    </>
  );
};

export default withAuthenticator(EditPage);
