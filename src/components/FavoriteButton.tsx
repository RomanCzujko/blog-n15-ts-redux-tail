'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '@/features/favoritesSlice';
import { RootState } from '@/store/store';

const FavoriteButton = ({ postId }: { postId: number }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.favorites);
  const isFavorite = favorites.includes(postId);

  return (
    <button 
      className={`p-2 rounded ${isFavorite ? 'bg-red-500' : 'bg-gray-300'}`} 
      onClick={() => dispatch(toggleFavorite(postId))}
    >
      {isFavorite ? '★' : '☆'}
    </button>
  );
};

export default FavoriteButton;
