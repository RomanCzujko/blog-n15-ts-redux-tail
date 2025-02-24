'use client';
import { useState, useEffect } from 'react';

// Define Post type
interface Post {
  id: number;
  title: string;
  body: string;
  category: string;
}

const usePostFiltering = (posts: Post[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [favoritePosts, setFavoritePosts] = useState<number[]>([]);

  useEffect(() => {
    const updateFavorites = () => {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]') as number[];
      setFavoritePosts(favorites);
    };

    updateFavorites();
    window.addEventListener('storage', updateFavorites);
    return () => window.removeEventListener('storage', updateFavorites);
  }, []);

  const toggleFavorites = () => {
    const updatedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]') as number[];
    setFavoritePosts(updatedFavorites);

    if (updatedFavorites.length === 0) {
      setShowFavorites(false);
    } else {
      setShowFavorites((prev) => !prev);
      setSelectedCategory(null);
    }
  };

  const showAllPosts = () => {
    setShowFavorites(false);
    setSelectedCategory(null);
  };

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
    setShowFavorites(false);
  };

  let displayedPosts = posts;
  if (selectedCategory) {
    displayedPosts = displayedPosts.filter((post) => post.category === selectedCategory);
  }
  if (showFavorites) {
    displayedPosts = favoritePosts.length > 0 ? posts.filter((post) => favoritePosts.includes(post.id)) : [];
  }

  return {
    selectedCategory,
    showFavorites,
    favoritePosts,
    displayedPosts,
    handleCategorySelect,
    toggleFavorites,
    showAllPosts,
  };
};

export default usePostFiltering;
