import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comic, comicsData } from 'data/comics';

export type typeState = { articles: Comic[] };
export const initialState = { articles: comicsData.comics };
export const articleListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    genreSearch: (state, action: PayloadAction<string>) => {
      const articleList = comicsData.comics.filter(
        (comic) => comic.genres.includes(action.payload),
      );

      return {
        articles: articleList,
      };
    },
    resetSearch: () => ({
      articles: comicsData.comics,
    }),
    textSearch: (state, action: PayloadAction<string>) => {
      if (!action.payload) {
        return {
          articles: comicsData.comics,
        };
      }

      const articleList = state.articles.filter(
        (comic) =>
          comic.title.toLowerCase().search(action.payload.toLowerCase()) === 0,
      );

      return {
        articles: articleList,
      };
    },
  },
});
