'use client';
import React, { useState, useEffect } from 'react';
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritePosts, setFavoritePosts] = useState<number[]>([]);

  // Sync favorites state with localStorage dynamically
  useEffect(() => {
    const updateFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setFavoritePosts(favorites);
    };

    updateFavorites();
    window.addEventListener('storage', updateFavorites);
    return () => window.removeEventListener('storage', updateFavorites);
  }, []);

  const toggleFavorites = () => {
    const updatedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavoritePosts(updatedFavorites);

    // If no favorites exist, disable favorites mode
    if (updatedFavorites.length === 0) {
      setShowFavorites(false);
    } else {
      setShowFavorites((prev) => !prev);
      setSelectedCategory(null); // Reset category when showing favorites
    }
  };

  const showAllPosts = () => {
    setShowFavorites(false);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setShowFavorites(false); // Ensure favorites mode is turned off when switching categories
  };

  
  if (status === 'failed') return <p>Błąd ładowania danych.</p>;

  let displayedPosts = posts;
  if (selectedCategory) {
    displayedPosts = displayedPosts.filter((post) => post.category === selectedCategory);
  }
  if (showFavorites) {
    displayedPosts = favoritePosts.length > 0 
      ? posts.filter((post) => favoritePosts.includes(post.id))
      : [];
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>Blog Edukacyjny</h1>
      <Categories onCategorySelect={handleCategorySelect} />

      <div className='flex justify-between'>
        <div className='flex justify-between'>
          <h2 className='text-2xl font-bold mb-6'>Wpisy</h2>
          <h3 className='text-xl font-bold mb-6 cursor-pointer' onClick={showAllPosts}>{selectedCategory} {selectedCategory&&'x'}</h3>
        </div>
        
        <div className='flex justify-between'>
          <a
            className={`text-xl font-bold mb-6 cursor-pointer transition-opacity ${!showFavorites && !selectedCategory ? 'opacity-100 text-blue-600' : 'opacity-50 text-gray-600'}`}
            onClick={showAllPosts}
          >
            Wszystkie
          </a>
          <span>/</span>
          <a
            className={`text-xl font-bold mb-6 cursor-pointer transition-opacity ${showFavorites ? 'opacity-100 text-blue-600' : 'opacity-50 text-gray-600'}`}
            onClick={toggleFavorites}
          >
            Ulubione
          </a>
        </div>
      </div>
      <PostSlider posts={displayedPosts} isLoading={status === 'loading'} />
    </div>
  );
};

export default HomePage;
