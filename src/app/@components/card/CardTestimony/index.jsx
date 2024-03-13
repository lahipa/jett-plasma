import React from 'react';

export const CardTestimony = ({ name, testimonial, time, image }) => {
  return (
    <div className='h-full w-full bg-white shadow p-3 card'>
      <div className="text-lg font-semibold  whitespace-normal break-words">{testimonial}</div> 
      <div className="flex items-center mb-3">
        <img className="w-10 h-10 rounded-full mr-4" src={image} alt={name} /> 
        <div>
          <div className="font-bold">{name}</div> 
          <div className="text-gray-500 text-sm">{time}</div>
        </div>
      </div>
    </div>
  );
};
