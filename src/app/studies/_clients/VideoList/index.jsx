"use client";

import React from 'react';
import { useGetFaqs } from '@/hooks/useFaqsQuery';
import { VideoItemCard } from '@/app/videos/_components';
import { useGetVideos } from '@/hooks/useVideosQuery';
import { BtnSeeMoreVideos } from '..';
import Container from '@/app/_components/container';
import { SquarePlaceholder } from "@/app/_components/base";

const VideoList = () => {

    const { isLoading, data } = useGetVideos()

    return (
        <section className="relative py-[80px] lg:py-[100px] bg-black text-white rounded-[40px] lg:rounded-[80px] z-[1]">
            <Container className="flex flex-col gap-[40px] lg:gap-[100px]">
                <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">Check Out Our Exciting Videos on Jett plasma Applications</h4>
                <div className="flex flex-col gap-[80px]">
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
                                        duration="10.12"
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <BtnSeeMoreVideos />
                </div>
            </Container>
        </section>
    )
}

export default VideoList;