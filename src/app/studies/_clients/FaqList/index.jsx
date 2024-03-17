"use client";

import React from 'react';
import { CardQuestion } from '@/app/_components/cards';
import { useGetFaqs } from '@/hooks/useFaqsQuery';
import { SquarePlaceholder } from "@/app/_components/base";

const FaqList = () => {

    const { isLoading, data } = useGetFaqs({ locale_code: "en" });
    
    return (
        <div className="flex-1 flex flex-col">
            {isLoading && [...Array(4)].map((_, x) => {
                return (
                    <div key={x} className="flex flex-col mb-[15px]">
                        <SquarePlaceholder width="100%" height={50} rounded />
                    </div>
                );
            })}

            {!isLoading && data?.result.data.map((question, index) => (
                <CardQuestion
                    key={index}
                    title={question.faqs_question}
                />
            ))}
        </div>
    )
}

export default FaqList;