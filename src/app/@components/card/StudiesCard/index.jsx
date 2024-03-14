import React, { forwardRef } from 'react';
import { Button, IconButton } from '@/app/@components/base';

const StudiesCard = forwardRef(({ image, code, name, description }, ref) => {
  return (
    <div ref={ref} className="flex flex-col gap-[22px]">
      <div className="relative bg-black overflow-hidden aspect-square rounded-[30px]">
        <img className="w-full h-full object-cover" src={image} alt="img-treatments" />
      </div>
      <div className="flex-1 flex flex-col gap-[14px]">
        <span className="text-[16px] leading-[24px] text-[#636A79]">{code}</span>
        <div className="flex-1 flex flex-col items-start gap-[24px]">
          <div className="flex flex-col gap-[10px]">
            <h4 className="text-[24px] leading-[34px]">{name}</h4>
            <p className="text-[16px] leading-[24px]">{description}</p>
          </div>

          <Button
            title="Learn More"
            className="mt-auto"
            outline
          />
        </div>
      </div>
    </div>
  );
});

export default StudiesCard;
