"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Icon } from "@/app/@components/base";
import { limitContentText } from "@/utils/globals";

// data
import { Treatments } from '@/app/@data';

import "swiper/css";
import "swiper/css/free-mode";

const SliderVideosHomeBar = () => {
    const swiper = useSwiper();

    return (
        <div className="flex items-center gap-[24px] relative -ml-[16%] -mr-[20px]">
            <span onClick={() => swiper.slidePrev()}>Left</span>
            <span onClick={() => swiper.slideNext()}>Right</span>
        </div>
    );
};

const SliderVideosHome = () => {

    return (
        <div className="relative">
            <Swiper
                slidesPerView={1.6}
                spaceBetween={50}
                freeMode={true}
                modules={[FreeMode]}
                className="relative !flex flex-col gap-[40px] items-center !pl-[16%] !pr-[20px]"
            >
                <div>
                    {Treatments.map((treatment, index) => {
                        return (
                            <SwiperSlide key={index.toString()}>
                                <div className="relative rounded-2xl w-full h-[500px] overflow-hidden">
                                    <img className="w-full h-full object-cover" src={treatment.imageSrc} alt="" />
                                    <div className="absolute bottom-0 w-full p-[1rem] flex items-center justify-between">
                                        <button className="pl-[6px] py-[6px] pr-[24px] flex align-center items-center gap-[14px] border border-white bg-[#1C1E22]/20 rounded-full">
                                            <div className="w-[50px] h-[50px] flex items-center justify-center bg-[#1C1E22]/20 border border-white rounded-full">
                                                <Icon icon="IconPlayerPlayFilled" size={20} color="text-white" />
                                            </div>
                                            <span className="text-white">
                                                {limitContentText("Jett Plasma Lift Medical - blepharoplasty (noninvasive)", 50)}
                                            </span>
                                        </button>
                                        <button className="w-[50px] h-[50px] flex items-center justify-center bg-[#1C1E22]/20 border border-white rounded-full">
                                            <Icon icon="IconDownload" size={20} color="text-white" />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </div>
                
                <SliderVideosHomeBar />
            </Swiper>
        </div>
    );
};

export default SliderVideosHome;
