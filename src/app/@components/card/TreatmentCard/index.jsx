import React from 'react';

const TreatmentCard = ({ imageSrc, title, className }) => {
  return (
    <div className="">
      <div className="relative rounded-2xl overflow-hidden">
        <img className="w-full h-full object-cover" src={imageSrc} alt="" />
        <div className="absolute bottom-0 w-full p-[1rem] flex flex-row items-center">
          <button className="border bg-dark-20 rounded-full flex align-center w-[48px]  lg:w-[120px] h-[48px] items-center justify-center lg:justify-start p-[8px]">
            <div className="lg:border items-center justify-center rounded-full lg:p-[4px] lg:mr-[8px]">
              <img className="lg:w-[22px] lg:h-[22px]" src="/layouts/pattern-13.svg" alt="" />
            </div>
            <span className="text-neutral-10 hidden lg:block">
              10.12</span>
          </button>
          <button className="ms-[12px] lg:ms-auto bg-dark-20 rounded-full flex align-center w-[48px] h-[48px] border items-center justify-center border-neutral-10">
            <img className="w-[22px] h-[22px]" src="/layouts/pattern-14.svg" alt="" />
          </button>
        </div>
      </div>
      <p className={`mt-[1rem] text-[1.25rem] font-medium ${className}`}>{title}</p>
    </div>
  );
};

export default TreatmentCard;
