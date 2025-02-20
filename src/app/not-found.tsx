import React from 'react';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-4xl font-bold'>404 - Nie znaleziono strony</h1>
      <p className='text-gray-600 mt-2'>Przepraszamy, ale ta strona nie istnieje.</p>
    </div>
  );
};

export default NotFound;