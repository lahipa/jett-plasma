"use client";

import React from 'react';
import { useGetFaqs } from '@/hooks/useFaqsQuery';
import { VideoItemCard } from '@/app/videos/_components';
import { useGetVideos } from '@/hooks/useVideosQuery';
import { BtnSeeMoreVideos } from '..';
import Container from '@/app/_components/container';

const VideoList = () => {

    const { data } = useGetVideos()

    return (
        <section className="relative py-[80px] lg:py-[100px] bg-black text-white rounded-[40px] lg:rounded-[80px] z-[1]">
            <Container className="flex flex-col gap-[40px] lg:gap-[100px]">
                <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">Check Out Our Exciting Videos on Jett plasma Applications</h4>
                <div className="flex flex-col gap-[80px]">
                    <div className="flex items-stretch gap-[50px]">
                        {data?.result.videos.data.slice(0, 3).map((item, index) => {
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