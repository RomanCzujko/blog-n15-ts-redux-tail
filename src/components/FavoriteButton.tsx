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
    <div>
    <button 
      className={` lg:text-3xl text-xl flex items-center`} 
      onClick={() => dispatch(toggleFavorite(postId))}
    >
      {isFavorite ? '★' : '☆'} 
      <p className='lg:text-xl text-sm  lg:pl-4 pl-2'> {isFavorite?'polubiłeś to' : 'dodaj do ulubionych'}</p>
      
    </button> 
    
    </div>
  );
};

export default FavoriteButton;
