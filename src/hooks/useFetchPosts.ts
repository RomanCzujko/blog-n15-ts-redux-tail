'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '@/features/postsSlice';
import { RootState, AppDispatch } from '@/store/store';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const useFetchPosts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, status } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return { posts: posts as Post[], status };
};