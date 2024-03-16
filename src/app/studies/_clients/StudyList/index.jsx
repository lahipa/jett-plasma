"use client";

import React from 'react';
import { useGetStudiesFormatted } from '@/hooks/useStudiesQuery';
import { StudyItemCard } from '../../_components';

const StudyList = () => {

    const {
        data,
        lastElementRef
    } = useGetStudiesFormatted()
    
    return data.map((item, index) => (
        <StudyItemCard
            ref={index === data.length - 1 ? lastElementRef : undefined}
            key={index} 
            {...item} 
        />
    ))
}

export default StudyList;