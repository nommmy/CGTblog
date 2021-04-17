import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comic } from 'data/comics';
import { Genre } from 'API';

export type typeState = { allArticles: Comic[]; showArticles: Comic[] };
export const initialState = {
  allArticles: [] as Comic[],
  showArticles: [] as Comic[],
};
export const articleListSlice = createSlice({
  name: 'articlelist',
  initialState,
  reducers: {
    initArticle: (state, action: PayloadAction<Comic[]>) => ({
      ...state,
      allArticles: action.payload,
      showArticles: action.payload,
    }),
    genreSearch: (state, action: PayloadAction<Genre>) => {
      const articleList = state.allArticles.filter((comic) =>
        comic.genres.includes(action.payload),
      );

      return {
        ...state,
        showArticles: articleList,
      };
    },
    resetSearch: (state) => ({
      ...state,
      showArticles: state.allArticles,
    }),
  },
});
