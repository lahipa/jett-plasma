"use client";

import React from 'react';
import { useGetFaqs } from '@/hooks/useFaqsQuery';
import { StudyLatestCard, VideoItemCard } from '@/app/videos/_components';
import { BtnSeeMoreStudies, BtnSeeMoreVideos } from '..';
import Container from '@/app/_components/container';
import { useGetStudies } from '@/hooks/useStudiesQuery';

const StudyList = () => {

    const { data } = useGetStudies()

    return (
        <section className="relative py-[80px] lg:py-[100px] bg-black text-white rounded-[40px] lg:rounded-[80px] z-[1]">
            <Container className="flex flex-col gap-[40px] lg:gap-[100px]">
                <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">Discover Our Latest Findings</h4>
                <div className="flex flex-col gap-[80px]">
                    <div className="flex items-stretch gap-[50px]">
                        {data?.result.studies.data.slice(0, 3).map((product, index) => {
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