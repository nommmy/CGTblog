import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';

import Article from 'components/templates/Article';
import { Comic, comicsData } from 'data/comics';

const EnhancedArticle: FC = () => {
  const { code } = useParams();
  const comicCodeList: string[] = comicsData.comics.map((obj) => obj.code);

  if (comicCodeList.includes(code)) {
    // これあんまよくないよな。まあ合致するのはは必ず一つっていう前提
    const comicObj: Comic = comicsData.comics.filter(
      (comic) => comic.code === code,
    )[0];

    const { title, genre, overview } = comicObj;

    return <Article title={title} genres={genre} overview={overview} />;
  }

  return <Navigate to="/" replace />;
};

export default EnhancedArticle;
