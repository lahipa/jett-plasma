"use client";

import React from 'react';
import { CardQuestion } from '@/app/_components/cards';
import { useGetFaqs } from '@/hooks/useFaqsQuery';

const FaqList = () => {

    const { data } = useGetFaqs()
    
    return (
        <div className="flex-1 flex flex-col">
            {data?.result.data.map((question, index) => (
                <CardQuestion
                    key={index}
                    title={question.faqs_question}
                />
            ))}
        </div>
    )
}

export default FaqList;