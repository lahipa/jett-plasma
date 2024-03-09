import React from 'react';

const StudiesCard = ({ image, code, name, description }) => {
  return (
    <div className="h-full flex items-start flex-col ">
      <div className="overflow-hidden aspect-square w-full rounded-[25px] mb-[0.5rem]">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <p className="text-blue-400 mb-[0.5rem] font-normal">{code}</p>
      <h4 className="text-dark-10 mb-[0.5rem] text-[1.25rem] font-medium">{name}</h4>
      <p className="text-dark-10 font-normal mb-[1rem]">{description}</p>
      <button className="rounded-full border-dark-10 border font-medium px-[12px] py-[8px] text-dark-10 mt-auto">
        Learn More
      </button>
    </div>
  );
};

export default StudiesCard;
