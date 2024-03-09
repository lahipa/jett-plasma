import React from 'react';

const CardQuestion = ({ title }) => {
  return (
    <div className="py-[12px] lg:py-[22px] lg:px-[32px] border-b border-dark-10 flex flex-row justify-between">
      <p className="font-semibold text-dark-10">{title}</p>
      <button className="w-[32px] h-[32px]">
        <img src="/layouts/pattern-15.svg" alt="" />
      </button>
    </div>
  );
};

export default CardQuestion;
