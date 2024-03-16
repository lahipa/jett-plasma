"use client";

import React from 'react';
import { useGetTestimonialsFormatted } from '@/hooks/useTestimonialsQuery';
import { CardTestimony } from '@/app/_components/cards';
import { SquarePlaceholder } from "@/app/_components/base";

const TestimonialList = () => {

    const {
        isLoading,
        data,
        lastElementRef
    } = useGetTestimonialsFormatted()

    return (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] items-baseline">
            {isLoading && [...Array(3)].map((_, x) => {
                return (
                    <div 
                        key={x}
                        className="grid gap-[26px]"
                    >
                        {[...Array(3)].map((_, i) => {
                            return (
                              <SquarePlaceholder key={i} width="100%" height={300} />
                            );
                        })}
                    </div>
                );
            })}

            {!isLoading && data.map((chunk, x) => {
                return (
                    <div 
                        key={x}
                        ref={x === data.length - 1 ? lastElementRef : undefined}
                        className="grid gap-[26px]"
                    >
                        {chunk.map((item, i) => {
                            return (
                                <CardTestimony
                                    key={i}
                                    name={item.name}
                                    testimonial={item.testimonial}
                                    time={item.time}
                                    image={item.image}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    )
}

export default TestimonialList;