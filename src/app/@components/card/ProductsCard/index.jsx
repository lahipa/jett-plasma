import React from 'react';

const ProductCard = ({ imageSrc, code, name, description }) => {
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="border border-[#636A79] overflow-hidden aspect-square rounded-[30px]">
        <img className="w-full h-full object-cover" src={imageSrc} alt="img-treatments" />
      </div>
      <div className="flex flex-col gap-[14px]">
        <span className="text-[16px] leading-[24px] text-[#DBDDE2]">{code}</span>
        <div className="flex flex-col gap-[24px]">
          <h4 className="text-[24px] leading-[34px]">{name}</h4>
          <p className="text-[16px] leading-[24px] text-[#DBDDE2]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
