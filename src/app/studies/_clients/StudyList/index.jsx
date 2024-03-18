"use client";

import React from 'react';
import { useGetStudiesFormatted } from '@/hooks/useStudiesQuery';
import { StudyItemCard } from '../../_components';
import Container from '@/app/_components/container';
import { SquarePlaceholder } from "@/app/_components/base";

const StudyList = () => {

    const {
        isLoading,
        data,
        title,
        description,
        lastElementRef
    } = useGetStudiesFormatted()

    return (
        <>
            <section className="relative pt-[50px] lg:pt-[150px] pb-[50px]">
                <Container className="flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[100px]">
                    <div className="relative w-full lg:w-[450px] h-[191px] lg:h-[240px] mix-blend-darken">
                        <img className="w-full h-full object-cover" src="/products/product-10.png" alt="" />
                    </div>

                    <div className="flex-1 relative flex flex-col gap-[14px]">
                        <h4 className="text-[40px] lg:text-[70px] font-medium leading-[54px] lg:leading-[88px]">
                            {/* {title} */}
                            Studies
                        </h4>
                        <p className="text-[24px] md:text-[30px] leading-[34px] md:leading-[40px]">
                            {/* {description} */}
                            Dive into the science behind this versatile technology, understanding its principles, properties, and diverse applications.
                        </p>
                    </div>
                </Container>

                <div id="pattern-1" className="hidden md:block absolute top-[50px] right-0 z-[1]">
                    <img src="/layouts/pattern-09.svg" alt="pattern-09" className="w-[344px] h-auto" />
                </div>
            </section>

            <section className="relative pt-[50px] pb-[100px] lg:pt-[100px] lg:pb-[150px]">
                <Container className="flex flex-col gap-[50px] lg:gap-[80px]">
                    <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-x-[50px] gap-y-[50px]">
                        {isLoading && [...Array(6)].map((_, x) => {
                            return (
                                <div key={x} className="flex flex-col gap-[22px]">
                                    <SquarePlaceholder width="100%" height={300} />
                                    <div className="flex-1 flex flex-col gap-[30px]">
                                        <div className="flex flex-col gap-[10px]">
                                            <SquarePlaceholder width={200} height={20} />
                                            <SquarePlaceholder width="100%" height={20} />
                                            <SquarePlaceholder width={150} height={20} />
                                        </div>

                                        <SquarePlaceholder width={150} height={50} />
                                    </div>
                                </div>
                            );
                        })}

                        {!isLoading && data.map((item, index) => (
                            <StudyItemCard
                                ref={index === data.length - 1 ? lastElementRef : undefined}
                                key={index}
                                {...item}
                            />
                        ))}
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

export default StudyList;