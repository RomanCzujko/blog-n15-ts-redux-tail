'use client';

import React, { useState, useEffect } from 'react';
import Categories from '@/components/Categories';
import PostSlider from '@/components/PostSlider';
import { useFetchPosts } from '@/hooks/useFetchPosts';
import ErrorPage from '@/components/ErrorPage';
import Header from '@/components/Header';

const HomePage = () => {
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
  const updatedFavorites = JSON.parse(
   localStorage.getItem('favorites') || '[]'
  );
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

 if (status === 'failed')
  return <ErrorPage message='Błąd ładowania danych. Spróbuj ponownie.' />;

 let displayedPosts = posts;
 if (selectedCategory) {
  displayedPosts = displayedPosts.filter(
   (post) => post.category === selectedCategory
  );
 }
 if (showFavorites) {
  displayedPosts =
   favoritePosts.length > 0
    ? posts.filter((post) => favoritePosts.includes(post.id))
    : [];
 }

 return (
  <div className='container mx-auto'>
   <Header />
   <h1 className='text-3xl font-bold lg:mb-20 lg:ml-20 ml-5 mb-5'>Blog Edukacyjny</h1>
   
   <Categories onCategorySelect={handleCategorySelect} />

   <div className='lg:flex lg:justify-between lg:px-20 lg:mt-20 px-5 mt-5 grid grid-cols-1 '>
    <div className='flex lg:justify-between items-center'>
     <h2 className='lg:text-2xl text-xl font-bold pr-6 '>Wpisy</h2>
     <h3 className='lg:text-l text-s  cursor-pointer opacity-100 text-red-800 underline decoration-2 font-bold pr-4'>
      {selectedCategory}{' '}
     </h3>
     <span className='text-l  cursor-pointer' onClick={showAllPosts}>
      {selectedCategory && '✕'}
     </span>
    </div>

    <div className='flex lg:justify-between lg:mt-0 mt-4'>
     <a
      className={`lg:text-xl text-sm  cursor-pointer transition-opacity ${
       !showFavorites && !selectedCategory
        ? 'opacity-100 text-red-800 underline font-bold'
        : 'opacity-50 text-black-800'
      }`}
      onClick={showAllPosts}
     >
      Wszystkie
     </a>
     <span className='px-4 opacity-50 text-black-800'>/</span>
     <a
      className={`lg:text-xl text-sm  cursor-pointer transition-opacity ${
       showFavorites
        ? 'opacity-100 text-red-800 underline decoration-2 font-bold'
        : 'opacity-50 text-black-800'
      }`}
      onClick={toggleFavorites}
     >
      Ulubione
     </a>
    </div>
   </div>
   <section className='main-section'>
    <PostSlider posts={displayedPosts} isLoading={status === 'loading'} />
   </section>
  </div>
 );
};

export default HomePage;
