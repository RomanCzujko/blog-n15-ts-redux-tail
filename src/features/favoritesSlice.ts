import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  favorites: number[];
}

const loadFavoritesFromStorage = (): number[] => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }
  return [];
};

const initialState: FavoritesState = {
  favorites: loadFavoritesFromStorage(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(id => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
      localStorage.setItem('favorites', JSON.stringify(state.favorites)); // Save to localStorage
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const selectFavorites = (state: { favorites: FavoritesState }) => state.favorites.favorites;
export default favoritesSlice.reducer;
