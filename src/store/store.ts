import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/postsSlice';
import favoritesReducer from '../features/favoritesSlice';

export const store = configureStore({
  reducer: { posts: postsReducer, favorites: favoritesReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;