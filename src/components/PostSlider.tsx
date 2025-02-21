'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import PostCard from './PostCard';

interface SliderProps {
  posts: { id: number; title: string; body: string; category: string }[];
}

const Slider: React.FC<SliderProps> = ({ posts }) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      navigation={true}
      pagination={{ clickable: true, type: 'fraction' }}
      breakpoints={{
        0: { slidesPerView: 4, direction: 'vertical', navigation: false, spaceBetween: 16 },
        1024: { slidesPerView: 4, direction: 'horizontal', spaceBetween: 16 }
      }}
      className='my-6 h-full'
    >
      {posts.map((post) => (
        <SwiperSlide key={post.id} className=''>
          <PostCard id={post.id} title={post.title} desc={post.body} category={post.category} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;