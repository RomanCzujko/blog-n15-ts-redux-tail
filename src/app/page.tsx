'use client';
import React from 'react';
import Categories from '@/components/Categories';
import PostSlider from '@/components/PostSlider';
import { useFetchPosts } from '@/hooks/useFetchPosts';
import AppProvider from '@/components/AppProvider';

const HomePage = () => {
  return (
    <AppProvider>
      <PageContent />
    </AppProvider>
  );
};

const PageContent = () => {
  const { posts, status } = useFetchPosts();

  if (status === 'loading') return <p>Ładowanie...</p>;
  if (status === 'failed') return <p>Błąd ładowania danych.</p>;

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Blog Edukacyjny</h1>
      <Categories />
      <PostSlider posts={posts} />
    </div>
  );
};

export default HomePage;