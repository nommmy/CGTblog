import { FC } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Article from 'containers/templates/Article';
import Aside from 'components/templates/Aside';
import ArticleSideContents from 'components/templates/ArticleSideContents';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import { Comic } from 'data/comics';
import Chip from '@material-ui/core/Chip';
import MediaQuery from 'react-responsive';
import LinearProgress from '@material-ui/core/LinearProgress';

const ArticlePage: FC = () => {
  const { code } = useParams();
  const allArticles = useSelector<typeState, Comic[]>(
    (state) => state.allArticles,
    shallowEqual,
  );

  if (allArticles.length) {
    const currentArticle = allArticles.filter(
      (comic) => comic.code === code && comic.isPublic === true,
    );

    if (currentArticle.length) {
      const relationArticles = allArticles.filter(
        (comic) =>
          currentArticle[0].relation?.includes(comic.code) &&
          comic.isPublic === true,
      );

      return (
        <>
          <div className="flex-container extend-padding">
            <main>
              <Article {...currentArticle[0]} />
            </main>
            <MediaQuery minWidth={860}>
              <aside>
                <Aside />
              </aside>
            </MediaQuery>
          </div>
          {currentArticle[0] && (
            <div className="article-footer">
              {currentArticle[0].author && (
                <div className="article-info">
                  <div className="info-header">作者</div>
                  <div className="info-data">{currentArticle[0].author}</div>
                </div>
              )}
              {currentArticle[0].volume && (
                <div className="article-info">
                  <div className="info-header">巻数</div>
                  <div className="info-data">
                    {`${currentArticle[0]?.volume}巻 (${
                      currentArticle[0].updatedAt?.split('T')[0] as string
                    })`}
                  </div>
                </div>
              )}
              {currentArticle[0].magazine && (
                <div className="article-info">
                  <div className="info-header">連載</div>
                  <div className="info-data">{currentArticle[0].magazine}</div>
                </div>
              )}
              {!!currentArticle[0]?.tags?.length && (
                <div className="article-info">
                  <div className="info-header">タグ</div>
                  <div className="info-data">
                    {currentArticle[0].tags?.map((tag) => (
                      <Chip
                        key={tag}
                        variant="outlined"
                        size="small"
                        label={`#${tag}`}
                        className="tag"
                      />
                    ))}
                  </div>
                </div>
              )}
              {!!relationArticles.length && (
                <ArticleSideContents comics={relationArticles} />
              )}
              <MediaQuery maxWidth={859}>
                <div className="relation">
                  <Aside />
                </div>
              </MediaQuery>
            </div>
          )}
        </>
      );
    }

    return <Navigate to="/" replace />;
  }

  return <LinearProgress />;
};

export default ArticlePage;
