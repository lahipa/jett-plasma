import React, { forwardRef } from 'react';
import { BtnVideoItemCard } from "@/app/videos/_clients";
import Link from 'next/link';

const VideoItemCard = forwardRef((props, ref) => {
  const { slug, cover, title, duration } = props;
    
  return (
    <div key={ref} className="flex flex-col gap-[22px]">
      <div className="w-full h-[218px] lg:h-[232px] relative rounded-[20px] overflow-hidden">
        <img className="w-full h-full object-cover" src={cover} alt="img-treatment" />

        <BtnVideoItemCard duration={duration} slug={slug} />
      </div>

      <Link href={`/videos/${slug}`}>
        <span className="text-[20px] lg:text-[24px] leading-[30px] lg:leading-[34px]">{title}</span>
      </Link>
    </div>
  );
});

export default VideoItemCard;
