"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode } from "swiper/modules";

// data
import { Treatments } from '@/app/@data';

import "swiper/css";
import "swiper/css/free-mode";

const SliderVideosHome = () => {
  return (
    <div className="relative">
        <Swiper
            slidesPerView={1.6}
            spaceBetween={50}
            freeMode={true}
            modules={[FreeMode]}
            className="relative !flex flex-col gap-[40px] items-center !pl-[16%]"
        >
            <div>
                {Treatments.map((treatment, index) => {
                    return (
                        <SwiperSlide key={index.toString()}>
                            <div className="relative rounded-2xl w-full h-[500px] overflow-hidden">
                                <img className="w-full h-full object-cover" src={treatment.imageSrc} alt="" />
                                <div className="absolute bottom-0 w-full p-[1rem] flex flex-row items-center">
                                    <button className="border bg-dark-20 rounded-full flex align-center w-[48px]  lg:w-[120px] h-[48px] items-center justify-center lg:justify-start p-[8px]">
                                        <div className="lg:border items-center justify-center rounded-full lg:p-[4px] lg:mr-[8px]">
                                        <img className="lg:w-[22px] lg:h-[22px]" src="/layouts/pattern-13.svg" alt="" />
                                        </div>
                                        <span className="text-neutral-10 hidden lg:block">10.12</span>
                                    </button>
                                    <button className="ms-[12px] lg:ms-auto bg-dark-20 rounded-full flex align-center w-[48px] h-[48px] border items-center justify-center border-neutral-10">
                                        <img className="w-[22px] h-[22px]" src="/layouts/pattern-14.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </div>
            <div className="flex items-center gap-[24px]">
                <span>Left</span>
                <span>Right</span>
            </div>
        </Swiper>
    </div>
  );
};

export default SliderVideosHome;
