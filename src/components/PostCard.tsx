import React from 'react';
import Link from 'next/link';
import categories from "../../public/DUMMY_DATA";

interface PostCardProps {
  id: number;
  title: string;
  desc: string;
  category: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, desc, category }) => {
  const currentCategory = categories.find(cat => cat.name === category);
  const textColor = currentCategory ? currentCategory.color : '#000';

  return (
    <div 
      className="post-card border lg:p-10 p-8 rounded-lg shadow-md bg-white" 
      style={{ backgroundColor: '#F4F4F4', backgroundPosition: 'center', borderTopLeftRadius: 60, borderBottomRightRadius: 60 }}
    >
      <p className='text-l font-semibold underline decoration-2 italic uppercase mb-4' style={{ color: textColor }}>{category}</p>
      <h2 className='text-xl font-bold mb-10'>{title}</h2>
      <p className='mb-10'>{desc}</p>
      <div className='flex justify-between items-center '>
        <Link href={`/post/${id}`} className='text-black-800 font-bold text-s'>Zobacz więcej →</Link>
      </div>
    </div>
  );
};

export default PostCard;