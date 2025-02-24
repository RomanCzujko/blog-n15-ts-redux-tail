import React, { useEffect, useState } from 'react';
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
  isLoading: boolean;
}

const PostSlider: React.FC<SliderProps> = ({ posts, isLoading }) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)'); 
    setIsMobile(mediaQuery.matches); 

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (isMobile === null) {
    return <div className="text-center text-gray-500">Checking screen size...</div>; // Prevent flickering
  }

  if (isMobile) {
    return (
      <div className="flex flex-col space-y-5">
        {isLoading
          ? Array(4)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="p-4 rounded-lg shadow-md bg-white h-96">
                  <Skeleton height={20} width={80} />
                  <Skeleton height={24} width="80%" className="mt-2" />
                  <Skeleton height={60} width="100%" className="mt-2" />
                </div>
              ))
          : posts.map((post) => (
              <PostCard key={post.id} id={post.id} title={post.title} desc={post.body} category={post.category} />
            ))}
      </div>
    );
  }

  return (
    <Swiper
      spaceBetween={40}
      modules={[Pagination, Navigation]}
      slidesPerView={4}
      loop={true}
      pagination={{ clickable: true, type: 'fraction' }}
      id="post-slider"
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
