'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import PostCard from './PostCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SliderProps {
  posts: { id: number; title: string; body: string; category: string }[];
  isLoading?: boolean;
}

const PostSlider: React.FC<SliderProps> = ({ posts, isLoading }) => {
  return (
    <Swiper
      spaceBetween={15}
      modules={[Pagination, Navigation]}
      slidesPerView={4}
      navigation={true}
      pagination={{ clickable: true, type: 'fraction' }}
      breakpoints={{
        640: { slidesPerView: 1, direction: 'vertical' },
        1024: { slidesPerView: 4, direction: 'horizontal' }
      }}
      className="my-6"
    >
      {isLoading
        ? Array(4)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index} className="w-auto">
                <div className="p-4 rounded-lg shadow-md bg-white h-96">
                  <Skeleton height={20} width={80} />
                  <Skeleton height={24} width="80%" className="mt-2" />
                  <Skeleton height={60} width="100%" className="mt-2" />
                </div>
              </SwiperSlide>
            ))
        : posts.map((post) => (
            <SwiperSlide key={post.id} className="w-auto">
              <PostCard id={post.id} title={post.title} desc={post.body} category={post.category} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default PostSlider;
