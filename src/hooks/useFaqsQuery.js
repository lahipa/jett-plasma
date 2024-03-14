"use client";

import { useQuery } from "@tanstack/react-query"
import { getFaqs } from '../api';

export const useGetFaqs = (request, apiKey) => {
    return useQuery({
        queryKey: ['filter-faqs', request],
        queryFn: () => getFaqs(request, apiKey),
    })
};
