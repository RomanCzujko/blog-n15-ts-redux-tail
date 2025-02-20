import React from 'react';

const categories = [
  { name: 'Wiedza', color: 'bg-blue-600', icon: '📘' },
  { name: 'Inspiracje', color: 'bg-yellow-500', icon: '💡' },
  { name: 'Interpretacje', color: 'bg-red-500', icon: '👑' },
  { name: 'Dostępne', color: 'bg-green-500', icon: '🔓' },
];

const Categories = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6'>
      {categories.map((category) => (
        <div key={category.name} className={`p-6 rounded-lg text-white ${category.color}`}>
          <span className='text-3xl'>{category.icon}</span>
          <h2 className='mt-2 font-bold text-lg'>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Categories;