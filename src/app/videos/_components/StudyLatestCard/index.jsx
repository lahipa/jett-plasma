import React from "react";
import Link from "next/link";

const StudyLatestCard = ({ slug, cover, code, name, description }) => {
  return (
    <div className="flex flex-col gap-[22px]">
      <div className="border border-[#636A79] overflow-hidden aspect-square rounded-[30px]">
        <img className="w-full h-full object-cover" src={cover} alt="img-treatments" />
      </div>
      <div className="flex flex-col gap-[14px]">
        <span className="text-[16px] leading-[24px] text-[#DBDDE2]">{code}</span>
        <div className="flex flex-col gap-[24px]">
          <Link href={`/studies/${slug}`}>
            <h4 className="text-[24px] leading-[34px]">{name}</h4>
          </Link>
          <p className="text-[16px] leading-[24px] text-[#DBDDE2]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default StudyLatestCard;
