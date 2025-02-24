'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useFetchPosts } from '@/hooks/useFetchPosts';
import Link from 'next/link';
import FavoriteButton from '@/components/FavoriteButton';

const PostDetail = () => {
  const { posts, status } = useFetchPosts(); 
  const { id } = useParams();

  const postId = Number(id);
  const post = posts.find((p) => p.id === postId);

  if (status === 'loading' || !posts.length) {
    return <p className='text-center mt-10 text-gray-500'>Loading...</p>;
  }

  if (!post) return <p className='text-center mt-10 text-red-500'>Post not found</p>;

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold'>{post.title}</h1>
      <p className='mt-4'>{post.body}</p>
      <div className='mt-6 flex justify-between items-center'>
        <Link href='/' className='text-blue-500'>← Back to Home</Link>
        <FavoriteButton postId={post.id} />
      </div>
    </div>
  );
};

export default PostDetail;