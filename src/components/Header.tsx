import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-white p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-800'>Blog Edukacyjny</h1>
        <nav className='flex space-x-4'>
          <Link href='/'>Wszystkie</Link>
          <Link href='/favorites'>Ulubione</Link>
          <span className='text-gray-400'>|</span>
          <span className='font-semibold'>Najnowsze wpisy</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;