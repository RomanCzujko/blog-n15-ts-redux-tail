'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Grid, Pagination, Navigation} from 'swiper/modules';
import PostCard from './PostCard';

interface SliderProps {
 posts: { id: number; title: string; body: string; category: string }[];
}

const PostSlider: React.FC<SliderProps> = ({ posts }) => {
 return (
  <Swiper
   spaceBetween={10}
   modules={[Grid, Pagination, Navigation]}
   slidesPerView={4}
   grid={{
    rows: 2,
   }}
   navigation={true}
   pagination={{ clickable: true, type: 'fraction' }}
   className='my-6'
  >
   {posts.map((post) => (
    <SwiperSlide key={post.id} className='w-auto'>
     <PostCard
      id={post.id}
      title={post.title}
      desc={post.body}
      category={post.category}
     />
    </SwiperSlide>
   ))}
  </Swiper>
 );
};

export default PostSlider;
