"use client";

import React from 'react';
import { useGetFaqs } from '@/hooks/useFaqsQuery';
import { StudyLatestCard, VideoItemCard } from '@/app/videos/_components';
import { BtnSeeMoreStudies, BtnSeeMoreVideos } from '..';
import Container from '@/app/_components/container';
import { useGetStudies } from '@/hooks/useStudiesQuery';
import { SquarePlaceholder } from "@/app/_components/base";

const StudyList = () => {

    const { isLoading, data } = useGetStudies()

    return (
        <section className="relative py-[80px] lg:py-[100px] bg-black text-white rounded-[40px] lg:rounded-[80px] z-[1]">
            <Container className="flex flex-col gap-[40px] lg:gap-[100px]">
                <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">Discover Our Latest Findings</h4>
                <div className="flex flex-col gap-[80px]">
                    <div className="flex items-stretch gap-[50px]">
                        {isLoading && [...Array(3)].map((_, x) => {
                            return (
                                <div key={x} className="flex-1 flex flex-col gap-[22px]">
                                    <SquarePlaceholder width="100%" height={300} />
                                    <div className="flex flex-col gap-[10px]">
                                        <SquarePlaceholder width={200} height={20} />
                                        <SquarePlaceholder width="100%" height={20} />
                                        <SquarePlaceholder width={150} height={20} />
                                    </div>
                                </div>
                            );
                        })}

                        {!isLoading && data?.result.studies.data.slice(0, 3).map((product, index) => {
                            return (
                                <div key={index} className="flex-1">
                                    <StudyLatestCard
                                        cover={product.thumbnail}
                                        code={"26.2-TF-JPM II"}
                                        name={product.posts_title}
                                        description={product.posts_description}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    <BtnSeeMoreStudies />
                </div>
            </Container>
        </section>
    )
}

export default StudyList;