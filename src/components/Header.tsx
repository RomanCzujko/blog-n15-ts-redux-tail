import React from 'react';
import Image from 'next/image';

const Header = () => {
 return (
  <header className='bg-white main-section'>
   <div className='container mx-auto flex justify-start'>
    <div className='flex items-center space-x-4 flex-row'>
     <Image src='/logo.png' alt='Logo' width={55} height={55} priority />
     <div className='flex flex-row items-center ml-6 pt-1'>
      <h1 className='text-3xl/6 font-semibold text-gray-800 italic'>
       <span className='text-red-800'>A</span>CME<br/>
       <span className='italic text-xl  font-medium text-black-600'>Institute</span>
      </h1>
      <div className='h-16 w-px bg-gray-400 mx-6'></div>
      <h2 className='text-sm/5 text-gray-600'>FIKCYJNA <br/>INSTYTUCJA <br/>EDUKACYJNA</h2>
     </div>
    </div>
   </div>
   <div className='border-t border-gray-300 lg:mt-20 mt-5'></div>
  </header>
 );
};

export default Header;
