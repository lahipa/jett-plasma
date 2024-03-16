"use client";

import React from 'react';
import { useGetTestimonialsFormatted } from '@/hooks/useTestimonialsQuery';
import { CardTestimony } from '@/app/_components/cards';

const TestimonialList = () => {

    const {
        data,
        lastElementRef
    } = useGetTestimonialsFormatted()

    return (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] items-baseline">
            {data.map((chunk, x) => {
                return (
                    <div 
                        key={x} className="grid gap-[26px]"
                        ref={x === data.length - 1 ? lastElementRef : undefined}
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