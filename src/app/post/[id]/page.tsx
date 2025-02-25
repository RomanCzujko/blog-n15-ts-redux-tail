'use client';
import React from 'react';
import { useParams, notFound } from 'next/navigation';
import { useFetchPosts } from '@/hooks/useFetchPosts';
import Link from 'next/link';
import FavoriteButton from '@/components/FavoriteButton';
import Header from '@/components/Header';
import Image from 'next/image';
import categories from '../../../../public/DUMMY_DATA';
import postIMg from '../../../../public/assets/img/post1.jpg'

const PostDetail = () => {
 const { posts, status } = useFetchPosts();
 const { id } = useParams();

 const postId = Number(id);
 const post = posts.find((p) => p.id === postId);

 if (status === 'loading' || !posts.length) {
  return <p className='text-center mt-10 text-gray-500'>Loading...</p>;
 }

 if (!post) {
  notFound(); 
  return null; 
}

 return (
  <div className='container mx-auto'>
    <Header />
  <div className='container mx-auto main-section lg:pt-0'>
   <div className='lg:flex justify-between lg:mb-20 lg:items-center '>
    <Link href='/' >
    <div className='flex items-center'>
    <p className='font-bold lg:text-3xl text-2xl lg:mb-0 mb-4 mr-2'>←</p>
    <h2 className='font-bold lg:text-3xl text-2xl lg:mb-0 mb-4'>Blog Edukacyjny</h2>
    </div>
    
     
    </Link>{' '}
    <FavoriteButton postId={post.id} />
   </div>

   <h1 className='lg:text-3xl text-2xl font-bold mt-6'>{post.title}</h1>
   <p className='my-6'>{post.body}</p>
   
   <Image
    src={postIMg}
    alt={categories[0].name}
    width={1900}
    style={{ borderTopLeftRadius: 60, borderBottomRightRadius: 60 }}
    />
  </div>
  </div>
 );
};

export default PostDetail;
