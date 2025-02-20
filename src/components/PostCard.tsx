import React from 'react';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';

const PostCard = ({ id, title, excerpt, category }) => {
  return (
    <div className='border p-4 rounded-lg shadow-md bg-white'>
      <span className='text-blue-500 text-sm font-semibold'>{category}</span>
      <h2 className='text-xl font-bold mt-2'>{title}</h2>
      <p className='text-gray-600 mt-2'>{excerpt}</p>
      <div className='flex justify-between items-center mt-4'>
        <Link href={`/post/${id}`} className='text-blue-500'>Zobacz więcej →</Link>
        <FavoriteButton postId={id} />
      </div>
    </div>
  );
};

export default PostCard;