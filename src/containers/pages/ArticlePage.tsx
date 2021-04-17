import { FC, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Article from 'components/templates/Article';
import { Comic } from 'data/comics';
import Aside from 'components/templates/Aside';
import ArticleSideContents from 'components/templates/ArticleSideContents';
import { comicsByCode } from 'graphql/queries';
import { ComicsByCodeQuery } from 'API';
import { API, graphqlOperation } from 'aws-amplify';

const ArticlePage: FC = () => {
  const { code } = useParams();
  const [article, setArticle] = useState<Comic>();

  // ここ違和感。resultの時点でthen, catchが自然じゃない？
  useEffect(() => {
    const chooseComic = async () => {
      try {
        const result = await API.graphql(
          graphqlOperation(comicsByCode, { code }),
        );
        if ('data' in result && result.data) {
          const articleData = result.data as ComicsByCodeQuery;
          if (articleData.comicsByCode) {
            setArticle((articleData.comicsByCode.items as unknown) as Comic);
          }
        }
      } catch (e) {
        setArticle(undefined);
      }
    };
    // eslint-disable-next-line
    chooseComic();
  }, [code]);


  if (article) {
    return (
      <>
        <main>
          {/* eslint-disable-next-line */}
          <Article {...article } />
        </main>
        <aside>
          <ArticleSideContents />
          <Aside />
        </aside>
      </>
    );
  }

  return <Navigate to="/" replace />;
};

export default ArticlePage;
