import React from 'react';
import { BtnVideoItemCard } from "@/app/videos/_clients";

const VideoItemCard = (props) => {
  const { slug, cover, title, duration = "10:12" } = props;
    
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="w-full h-[218px] lg:h-[232px] relative rounded-[20px] overflow-hidden">
        <img className="w-full h-full object-cover" src={cover} alt="img-treatment" />

        <BtnVideoItemCard duration={duration} slug={slug} />
      </div>

      <p className="text-[20px] lg:text-[24px] leading-[30px] lg:leading-[34px]">{title}</p>
    </div>
  );
};

export default VideoItemCard;
