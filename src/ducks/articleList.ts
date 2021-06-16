import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comic } from 'data/comics';
import { Genre } from 'API';

export type typeState = {
  allArticles: Comic[];
  showArticles: Comic[];
  recommendArticles: Comic[];
};
export const initialState = {
  allArticles: [] as Comic[],
  showArticles: [] as Comic[],
  recommendArticles: [] as Comic[],
};
export const articleListSlice = createSlice({
  name: 'articlelist',
  initialState,
  reducers: {
    initArticle: (state, action: PayloadAction<Comic[]>) => {
      const publicArticles = action.payload.filter(
        (comic) => comic.isPublic === true,
      );
      const sortArticles = publicArticles.slice().sort((n, m) => n.like < m.like ? -1 : 1);

      return {
        ...state,
        allArticles: action.payload,
        showArticles: publicArticles,
        recommendArticles: sortArticles.slice(0,5),
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
    resetShowArticle: (state) => {
      const publicArticles = state.allArticles.filter(
        (comic) => comic.isPublic === true,
      );

      return {
        ...state,
        showArticles: publicArticles,
      };
    },
  }
});
