'use client';
import React from 'react';
import Categories from '@/components/Categories';
import PostCard from '@/components/PostCard';
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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
        {posts.map((post) => (
          <PostCard key={post.id} id={post.id} title={post.title} excerpt={post.body.substring(0, 100) + '...'} category='Wiedza' />
        ))}
      </div>
    </div>
  );
};

export default HomePage;