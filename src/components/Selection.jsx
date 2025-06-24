import React from 'react';

const Selection = ({ figure, caption, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-80">
      <img 
        src={figure} 
        alt={caption} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-bold mb-1">{caption}</h3>
        <p className="text-gray-200 text-sm mb-4">{description}</p>
        <button className="self-start px-4 py-2 bg-[#44b50c] text-white text-sm font-medium rounded-full hover:bg-[#3a9a0a] transition-colors">
          Explore
        </button>
      </div>
    </div>
  );
};

export default Selection;