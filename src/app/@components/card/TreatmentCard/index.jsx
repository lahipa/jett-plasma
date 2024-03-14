import React from 'react';
import { Button, IconButton } from '@/app/@components/base';

const TreatmentCard = ({ source, cover, title, duration = "10:12" }) => {
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="w-full h-[218px] lg:h-[232px] relative rounded-[20px] overflow-hidden">
        <img className="w-full h-full object-cover" src={cover} alt="img-treatment" />

        <div className="absolute bottom-0 w-full p-[16px] flex flex-row items-center gap-[10px]">
          <div className="flex items-center lg:gap-[14px] lg:pl-[6px] lg:pr-[24px] lg:py-[6px] lg:rounded-full text-white lg:bg-[#1C1E22]/20 lg:mr-auto">
            <IconButton
              variant="white"
              icon="IconPlayerPlayFilled"
              className="bg-[#1C1E22]/20"
              outline
            />
            <span className="hidden lg:block text-[16px] leading-[24px]">
              {duration}
            </span>
          </div>

          <IconButton
            variant="white"
            icon="IconDownload"
            className="bg-[#1C1E22]/20"
            outline
          />
        </div>
      </div>

      <p className="text-[20px] lg:text-[24px] leading-[30px] lg:leading-[34px]">{title}</p>
    </div>
  );
};

export default TreatmentCard;
