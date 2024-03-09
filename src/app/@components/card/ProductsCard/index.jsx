import React from 'react';

const ProductCard = ({ imageSrc, code, name, description }) => {
  return (
    <div className="">
      <div className="border-2 border-blue-400 overflow-hidden aspect-square rounded-[25px] mb-[0.5rem]">
        <img className="w-full h-full" src={imageSrc} alt="" />
      </div>
      <p className="text-gray-10 mb-[0.5rem] font-normal ">{code}</p>
      <h4 className="text-neutral-10 mb-[0.5rem] text-[1.25rem] font-medium ">{name}</h4>
      <p className="text-gray-10 font-normal ">{description}</p>
    </div>
  );
};

export default ProductCard;
