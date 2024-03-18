"use client";

import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { VideoItemCard } from '@/app/videos/_components';
import { useGetVideos } from '@/hooks/useVideosQuery';
import { BtnSeeMoreVideos } from '..';
import Container from '@/app/_components/container';
import { SquarePlaceholder, IconButton } from "@/app/_components/base";

import "swiper/css";
import "swiper/css/free-mode";

const SliderMoreNavigationBar = () => {
    const swiper = useSwiper();
  
    return (
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-[24px] relative">
                <IconButton
                    variant="white"
                    icon="IconChevronLeft"
                    outline
                    size="lg"
                    onClick={() => swiper.slidePrev()}
                />
                <IconButton
                    variant="white"
                    icon="IconChevronRight"
                    outline
                    size="lg"
                    onClick={() => swiper.slideNext()}
                />
            </div>

            <BtnSeeMoreVideos />
        </div>
    );
};

const VideoList = () => {
    const { isLoading, data } = useGetVideos({ locale_code: "en" });

    return (
        <section className="relative py-[80px] lg:py-[100px] bg-black text-white rounded-[40px] lg:rounded-[80px] z-[1]">
            <Container className="flex flex-col gap-[40px] lg:gap-[100px]">
                <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">Check Out Our Exciting Videos on Jett plasma Applications</h4>
                <div className="hidden lg:flex flex-col gap-[80px]">
                    <div className="flex items-stretch gap-[50px]">
                        {isLoading && [...Array(3)].map((_, x) => {
                            return (
                                <div key={x} className="flex-1 flex flex-col gap-[22px]">
                                    <div className="w-full h-[218px] lg:h-[232px] relative rounded-[20px] overflow-hidden">
                                        <SquarePlaceholder width="100%" height="100%" />
                                    </div>
                                    <div className="flex flex-col gap-[10px]">
                                        <SquarePlaceholder width="100%" height={20} />
                                        <SquarePlaceholder width={150} height={20} />
                                    </div>
                                </div>
                            );
                        })}

                        {!isLoading && data?.result.videos.data.slice(0, 3).map((item, index) => {
                            return (
                                <div key={index} className="flex-1">
                                    <VideoItemCard
                                        cover={item.thumbnail}
                                        title={item.posts_title}
                                        slug={item.posts_slug}
                                        duration={item.posts_misc}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <BtnSeeMoreVideos />
                </div>

                <div className="relative lg:hidden">
                    <Swiper
                        slidesPerView={1.2}
                        spaceBetween={30}
                        freeMode={true}
                        modules={[FreeMode]}
                        className="relative !flex flex-col gap-[40px] items-center"
                        breakpoints={{
                            1024: {
                                slidesPerView: 2.2,
                                spaceBetween: 30,
                            },
                        }}
                    >
                        <SliderMoreNavigationBar />

                        <div className="">
                            {isLoading && [...Array(3)].map((_, x) => {
                                return (
                                    <SwiperSlide key={x}>
                                        <div className="flex-1 flex flex-col gap-[22px]">
                                            <div className="w-full h-[218px] lg:h-[232px] relative rounded-[20px] overflow-hidden">
                                                <SquarePlaceholder width="100%" height="100%" />
                                            </div>
                                            <div className="flex flex-col gap-[10px]">
                                                <SquarePlaceholder width="100%" height={20} />
                                                <SquarePlaceholder width={150} height={20} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            {!isLoading && data?.result.videos.data.slice(0, 3).map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <VideoItemCard
                                            cover={item.thumbnail}
                                            title={item.posts_title}
                                            slug={item.posts_slug}
                                            duration={item.posts_misc}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </div>
                    </Swiper>
                </div>
            </Container>
        </section>
    )
}

export default VideoList;