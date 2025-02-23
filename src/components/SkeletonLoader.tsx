'use client';
import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(4).fill(0).map((_, index) => (
        <div key={index} className="animate-pulse bg-gray-200 rounded-lg h-48 w-full"></div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
