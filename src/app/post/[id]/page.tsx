'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Link from 'next/link';
import AppProvider from '@/components/AppProvider';

const PostDetail = () => {
  return (
    <AppProvider>
      <PostContent />
    </AppProvider>
  );
};

const PostContent = () => {
  const { id } = useParams();
  const post = useSelector((state: RootState) => state.posts.posts.find((p) => p.id === Number(id)));

  if (!post) {
    return <p className='text-center mt-10 text-red-500'>Post not found</p>;
  }

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold'>{post.title}</h1>
      <p className='mt-4'>{post.body}</p>
      <Link href='/' className='block mt-6 text-blue-500'>← Back to Home</Link>
    </div>
  );
};

export default PostDetail;