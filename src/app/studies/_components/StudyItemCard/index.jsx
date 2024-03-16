import React, { forwardRef } from 'react';
import { BtnLearnMoreStudy } from '@/app/studies/_clients';

const StudyItemCard = forwardRef((props, ref) => {
  const { cover, code, name, description } = props;

  return (
    <div ref={ref} className="flex flex-col gap-[22px]">
      <div className="relative bg-black overflow-hidden aspect-square rounded-[30px]">
        <img className="w-full h-full object-cover" src={cover} alt="img-treatments" />
      </div>
      <div className="flex-1 flex flex-col gap-[14px]">
        <span className="text-[16px] leading-[24px] text-[#636A79]">{code}</span>
        <div className="flex-1 flex flex-col items-start gap-[24px]">
          <div className="flex flex-col gap-[10px]">
            <h4 className="text-[24px] leading-[34px]">{name}</h4>
            <p className="text-[16px] leading-[24px]">{description}</p>
          </div>

          <BtnLearnMoreStudy />
        </div>
      </div>
    </div>
  );
});

export default StudyItemCard;
