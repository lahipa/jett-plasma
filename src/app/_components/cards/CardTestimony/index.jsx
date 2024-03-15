import React from 'react';
import { Icon } from '@/app/_components/base';

const CardTestimony = ({ name, testimonial, time, image }) => {
  return (
    <div className='h-fit w-full bg-white rounded-[25px] p-[25px] flex flex-col gap-[20px]'>
      <div className='w-fit h-fit rotate-12'>
        <Icon icon="IconQuote" size={40} />
      </div>
      <div className="whitespace-normal break-words">
        <p className="text-[16px] leading-[24px]">{testimonial}</p>
      </div> 
      <div className="flex items-center gap-[18px] mt-auto pt-[10px]">
        <img className="w-[50px] h-[50px] rounded-full" src={image} alt={name} /> 
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p> 
          <span className="text-[14px]">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default CardTestimony;
