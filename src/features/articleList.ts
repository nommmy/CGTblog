import { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comic } from 'data/comics';
import { listComics } from 'graphql/queries';
import { Genre, ListComicsQuery } from 'API';

// eslint-disable-next-line
export const useArticles = () => {
  const [articles, setArticles] = useState<Comic[]>([]);

  useEffect(() => {
    // eslint-disable-next-line
    (async () => {
      const result = await API.graphql(graphqlOperation(listComics));
      if ('data' in result && result.data) {
        const articlesData = result.data as ListComicsQuery;
        if (articlesData.listComics) {
          // eslint-disable-next-line
          console.log(articlesData.listComics.items);
          setArticles(articlesData.listComics.items as Comic[]);
        }
      }
    })();
  }, []);

  return articles;
};

export type typeState = { showArticles: Comic[] };
export const initialState = { showArticles: [] as Comic[] };
export const articleListSlice = createSlice({
  name: 'articlelist',
  initialState,
  reducers: {
    genreSearch: (state, action: PayloadAction<Genre>) => {
      const articleList = state.showArticles.filter((comic) =>
        comic.genres.includes(action.payload),
      );

      return {
        ...state,
        showArticles: articleList,
      };
    },
    reset: (state, action: PayloadAction<Comic[]>) => ({
      ...state,
      showArticles: action.payload,
    }),
    // textSearch: (state, action: PayloadAction<string>) => {
    //   if (!action.payload) {
    //     return {
    //       showArticles: comicsData.comics,
    //     };
    //   }

    //   const articleList = state.showArticles.filter(
    //     (comic) =>
    //       comic.title.toLowerCase().search(action.payload.toLowerCase()) === 0,
    //   );

    //   return {
    //     showArticles: articleList,
    //   };
    // },
  },
});
