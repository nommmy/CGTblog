import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Article from 'components/templates/Article';
import { Comic } from 'data/comics';
import Aside from 'components/templates/Aside';
import ArticleSideContents from 'components/templates/ArticleSideContents';
import { comicByCode } from 'graphql/queries';
import { ComicByCodeQuery } from 'API';
import { API, graphqlOperation } from 'aws-amplify';

const ArticlePage: FC = () => {
  const { code } = useParams();

  // ここ違和感。resultの時点でthen, catchが自然じゃない？
  // あと単純にnullかもしれませんエラーがしつこくて汚くなってる
  // try,catch一旦削除

  // いやというか、記事の詳細って毎回API叩いて読むんか？最初に全部読み込んでstoreからとってくるんちゃう？
  const [article, setArticle] = useState<Comic>();
  useEffect(() => {
    let isMounted = true;
    const chooseComic = async () => {
      const result = await API.graphql(graphqlOperation(comicByCode, { code }));
      if ('data' in result && result.data) {
        const articleData = result.data as ComicByCodeQuery;
        const comicList = articleData?.comicByCode?.items;
        const comic =
          comicList !== undefined && comicList !== null ? comicList[0] : null;
        if (isMounted) {
          setArticle(comic as Comic);
        }
      }
    };
    // eslint-disable-next-line
    chooseComic();

    return (): void => {
      isMounted = false;
    };
  }, [code]);

  // でもこれだとないページのリンクとかを打たれた時にだめだよな。
  // トップにリダイレクトしたいのに。
  return !article ? (
    <></>
  ) : (
    <>
      <main>
        {/* eslint-disable-next-line */}
        <Article />
      </main>
      <aside>
        <ArticleSideContents />
        <Aside />
      </aside>
    </>
  );

  // return <Navigate to="/" replace />;
};

export default ArticlePage;
