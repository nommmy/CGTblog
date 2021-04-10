import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Article from 'components/templates/Article';
import { Comic, comicsData } from 'data/comics';
import Aside from 'components/templates/Aside';
import ArticleSideContents from 'components/templates/ArticleSideContents';

const ArticlePage: FC = () => {
  const { code } = useParams();
  const comicCodeList: string[] = comicsData.comics.map((obj) => obj.code);

  if (comicCodeList.includes(code)) {
    // これあんまよくないよな。まあ合致するのはは必ず一つっていう前提
    const comicObj: Comic = comicsData.comics.filter(
      (comic) => comic.code === code,
    )[0];

    const { title, genres, overview } = comicObj;

    return (
      <>
        <main>
          <Article title={title} genres={genres} overview={overview} />
        </main>
        <aside>
          <ArticleSideContents/>
          <Aside />
        </aside>
      </>
    );
  }

  return <Navigate to="/" replace />;
};

export default ArticlePage;
