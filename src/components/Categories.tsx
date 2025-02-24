'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import categories from '../../public/DUMMY_DATA';

interface CategoriesProps {
 onCategorySelect: (category: string | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({ onCategorySelect }) => {
 return (
  <div className='bg-gray-100 main-section p-6 '>
   <h2 className='text-2xl font-bold mb-20'>Kategorie</h2>
   <Swiper
    spaceBetween={40}
    modules={[Pagination, Navigation]}
    slidesPerView={4}
    loop={true}
    pagination={{ clickable: true }}
    navigation={true}
    breakpoints={{
     100: { slidesPerView: 1, direction: 'horizontal' },
     1024: { slidesPerView: 4, direction: 'horizontal' },
    }}
    id='category-slider'
   >
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
     {categories.map((category) => (
      <SwiperSlide key={category.name}>
       <div
        
        onClick={() => onCategorySelect(category.name)}
        className={`relative overflow-hidden cursor-pointer flex flex-col items-center text-white `}
        style={{
         backgroundImage: `url(${category.image})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         borderTopLeftRadius: 60,
         borderBottomRightRadius: 60,
        }}
       >
        <div className='relative w-full h-52'>
         <Image
          src={category.image}
          alt={category.name}
          layout='fill'
          objectFit='cover'
         />
        </div>
        <div
         className={`p-4 flex flex-col items-center bg-opacity-60  w-full h-52 justify-center`}
         style={{ backgroundColor: category.color }}
        >
         <Image
          src={category.icon}
          alt={category.name}
          width={47}
          height={47}
          className='mb-2'
         />
         <h3
          className='mt-2 font-bold text-sm uppercase'
          style={{ color: category.textColor }}
         >
          {category.name}
         </h3>
        </div>
       </div>
      </SwiperSlide>
     ))}
    </div>
   </Swiper>
  </div>
 );
};

export default Categories;
