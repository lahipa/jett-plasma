"use client";

import Container from '@/app/_components/container';
import React from 'react'
import { BtnHeroBanner } from '..';
import { BtnVideoItemCard } from "@/app/videos/_clients";
import { VideoItemCard } from '@/app/videos/_components';
import { useGetVideosFormatted } from '@/hooks/useVideosQuery';
import { limitContentText } from '@/utils/globals';
import { SquarePlaceholder } from "@/app/_components/base";

function VideoList() {

    const {
        isLoading,
        data,
        title,
        description,
        lastElementRef
    } = useGetVideosFormatted()

    const hero = data.find((x) => x.code === "video-hero");

    return (
        <>
            <section className="relative py-[50px]">
                <Container className="flex flex-col lg:flex-row-reverse lg:items-end gap-[50px] lg:gap-[80px]">
                    <div className="relative w-full md:w-[454px] lg:w-[769px] h-[246px] md:h-[314px] lg:h-[536px] rounded-[20px] overflow-hidden">
                        {hero && <img className="w-full h-full object-cover" src={hero.cover} alt="" />}
                        {!hero && <img className="w-full h-full object-cover" src="/products/product-2.png" alt="" />}

                        {hero && <BtnVideoItemCard duration={hero.duration} slug={hero.slug} />}
                        {!hero && <BtnHeroBanner />}
                    </div>

                    <div className="flex-1 relative flex flex-col gap-[14px]">
                        <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">
                            {hero && limitContentText(hero.title, 24)}
                            {!hero && limitContentText("Introducing JETT PLASMA Laser", 24)}

                            {/* {title} */}
                        </h4>
                        <p className="text-[24px] md:text-[20px] leading-[34px] md:leading-[30px]">
                            {
                                hero && hero.description 
                                    ? hero.description
                                    : "JETT is a brand providing Innovation, Reliability and Technology. Our R&D department continuously focuses its efforts on developing the right products in cooperation with leading experts in medical fields."
                            }

                            {/* {description} */}
                        </p>
                    </div>
                </Container>

                <div id="pattern-1" className="hidden md:block absolute top-[40px] left-0 z-[1]">
                    <img src="/layouts/pattern-12.svg" alt="pattern-07" className="w-[344px] h-auto" />
                </div>
            </section>

            <section className="relative pt-[50px] pb-[100px] lg:pt-[100px] lg:pb-[150px]">
                <Container className="flex flex-col gap-[50px] lg:gap-[80px]">
                    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-x-[50px] gap-y-[50px]">
                        {isLoading && [...Array(5)].map((_, x) => {
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

                        {!isLoading && data.filter((x) => x.code !== "video-hero").map((item, index) => {
                            return (
                                <VideoItemCard
                                    ref={index === data.length - 1 ? lastElementRef : undefined}
                                    key={index} 
                                    {...item}
                                    // duration="10.12" 
                                />
                            );
                        })}
                    </div>

                    {/* <div className="flex flex-col items-center">
                        <p>Load More</p>
                        <span>...</span>
                    </div> */}
                </Container>
            </section>
        </>
    )
}

export default VideoList