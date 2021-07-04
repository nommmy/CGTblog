import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Article from 'containers/templates/Article';
import Aside from 'components/templates/Aside';
import ArticleSideContents from 'components/templates/ArticleSideContents';
import { useSelector, shallowEqual } from 'react-redux';
import { typeState } from 'ducks/articleList';
import { Comic } from 'data/comics';
import Chip from '@material-ui/core/Chip';

const ArticlePage: FC = () => {
  const { code } = useParams();

  const showArticles = useSelector<typeState, Comic[]>(
    (state) => state.showArticles,
    shallowEqual,
  );

  const currentArticle = useMemo(
    () => showArticles.filter((comic) => comic.code === code),
    [code, showArticles],
  );

  const relationArticles = useMemo(
    () =>
      showArticles.filter((comic) =>
        currentArticle[0].relation?.includes(comic.code),
      ),
    [showArticles, currentArticle],
  );

  return (
    <>
      <div className="flex-container">
        <main>
          <Article {...currentArticle[0]} />
        </main>
        <aside>
          <Aside />
        </aside>
      </div>
      {currentArticle[0] && (
        <div className="article-footer">
          <div className="article-info">
            <div className="info-header">作者</div>
            <div className="info-data">葦原大輔</div>
          </div>
          <div className="article-info">
            <div className="info-header">巻数</div>
            <div className="info-data">
              {`23巻 ${
                currentArticle[0].updatedAt?.split('T')[0] as string
              } 現在`}
            </div>
          </div>

          <div className="article-info">
            <div className="info-header">連載</div>
            <div className="info-data">週刊少年ジャンプ</div>
          </div>
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
          {!!relationArticles.length && (
            <div>
              <ArticleSideContents comics={relationArticles} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ArticlePage;
