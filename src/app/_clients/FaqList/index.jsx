"use client";

import React, { useState } from 'react';
import { CardQuestion } from '@/app/_components/cards';
import { useGetFaqs } from '@/hooks/useFaqsQuery';
import { SquarePlaceholder } from "@/app/_components/base";

const FaqList = () => {
    const [expanded, setExpanded] = useState(null);
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
                    i={index}
                    expanded={expanded}
                    setExpanded={setExpanded}
                    title={question.faqs_question}
                    answer={question.faqs_answer}
                />
            ))}
        </div>
    )
}

export default FaqList;