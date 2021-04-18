import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comic } from 'data/comics';
import { Genre } from 'API';

export type typeState = {
  allArticles: Comic[];
  showArticles: Comic[];
  currentArticle: Comic;
};
export const initialState = {
  allArticles: [] as Comic[],
  showArticles: [] as Comic[],
  currentArticle: {} as Comic,
};
export const articleListSlice = createSlice({
  name: 'articlelist',
  initialState,
  reducers: {
    initArticle: (state, action: PayloadAction<Comic[]>) => ({
      ...state,
      allArticles: action.payload,
      showArticles: action.payload,
      currentArticle: {} as Comic,
    }),
    setCurrentArticle: (state, action: PayloadAction<string>) => {
      const article = state.allArticles.find((comic) =>
        comic.code === action.payload,
      );

      return {
        ...state,
        currentArticle: article ?? {} as Comic
      };
    },
    searchGenre: (state, action: PayloadAction<Genre>) => {
      const articleList = state.allArticles.filter((comic) =>
        comic.genres.includes(action.payload),
      );

      return {
        ...state,
        showArticles: articleList,
      };
    },
    resetShowArticle: (state) => ({
      ...state,
      showArticles: state.allArticles,
    }),
  },
});
