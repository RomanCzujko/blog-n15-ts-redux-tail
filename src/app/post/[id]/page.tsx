'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useFetchPosts } from '@/hooks/useFetchPosts';
import Link from 'next/link';
import FavoriteButton from '@/components/FavoriteButton';
import Header from '@/components/Header';
import Image from 'next/image';
import categories from '../../../../public/DUMMY_DATA';

const PostDetail = () => {
 const { posts, status } = useFetchPosts();
 const { id } = useParams();

 const postId = Number(id);
 const post = posts.find((p) => p.id === postId);

 if (status === 'loading' || !posts.length) {
  return <p className='text-center mt-10 text-gray-500'>Loading...</p>;
 }

 if (!post)
  return <p className='text-center mt-10 text-red-500'>Post not found</p>;

 return (
  <div className='container mx-auto'>
    <Header />
  <div className='container mx-auto main-section lg:pt-0'>
   <div className='flex justify-between lg:mb-20'>
    <Link href='/' >
    <h2 className='font-bold lg:text-3xl'>← Blog Edukacyjny</h2>
     
    </Link>{' '}
    <FavoriteButton postId={post.id} />
   </div>

   <h1 className='lg:text-3xl text-2xl font-bold mt-6'>{post.title}</h1>
   <p className='mt-6'>{post.body}</p>
   <div className='mt-6 flex justify-between items-center'></div>
   <Image
    src={categories[0].image}
    alt={categories[0].name}
    width={500}
    height={500}
    />
  </div>
  </div>
 );
};

export default PostDetail;
