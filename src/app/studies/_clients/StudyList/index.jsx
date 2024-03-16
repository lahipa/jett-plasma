"use client";

import React from 'react';
import { useGetStudiesFormatted } from '@/hooks/useStudiesQuery';
import { StudyItemCard } from '../../_components';
import Container from '@/app/_components/container';

const StudyList = () => {

    const {
        data,
        title,
        description,
        lastElementRef
    } = useGetStudiesFormatted()

    return (
        <>
            <section className="relative pt-[150px] pb-[50px]">
                <Container className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[100px]">
                    <div className="relative w-full lg:w-[450px] h-[191px] lg:h-[240px] mix-blend-darken">
                        <img className="w-full h-full object-cover" src="/products/product-10.png" alt="" />
                    </div>

                    <div className="flex-1 relative flex flex-col gap-[14px]">
                        <h4 className="text-[40px] lg:text-[70px] font-medium leading-[54px] lg:leading-[88px]">
                            {title}
                        </h4>
                        <p className="text-[24px] md:text-[30px] leading-[34px] md:leading-[40px]">
                            {description}
                        </p>
                    </div>
                </Container>

                <div id="pattern-1" className="hidden md:block absolute top-[50px] right-0 z-[1]">
                    <img src="/layouts/pattern-09.svg" alt="pattern-09" className="w-[344px] h-auto" />
                </div>
            </section>

            <section className="relative pt-[100px] pb-[150px]">
                <Container className="flex flex-col gap-[50px] lg:gap-[80px]">
                    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-x-[50px] gap-y-[50px]">
                        {data.map((item, index) => (
                            <StudyItemCard
                                ref={index === data.length - 1 ? lastElementRef : undefined}
                                key={index}
                                {...item}
                            />
                        ))}
                    </div>

                    <div className="flex flex-col items-center">
                        <p>Load More</p>
                        <span>...</span>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default StudyList;