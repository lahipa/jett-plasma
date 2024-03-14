"use client";

import React, { forwardRef } from 'react';
import Container from "@/app/@components/container";
import StudiesCard from "@/app/@components/card/StudiesCard";
import { useGetStudiesFormatted } from "@/hooks/useStudiesQuery";

const StudiesList = () => {

    const {
        data,
        lastElementRef
    } = useGetStudiesFormatted()
    
    return (
        <section className="relative pt-[100px] pb-[150px]">
            <Container className="flex flex-col gap-[50px] lg:gap-[80px]">
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-x-[50px] gap-y-[50px]">
                {data.map((item, index) => (
                    <StudiesCard 
                        ref={index === data.length - 1 ? lastElementRef : undefined}
                        key={index} 
                        {...item} 
                    />
                ))}
            </div>
            </Container>
        </section>
    )
}

export default StudiesList;