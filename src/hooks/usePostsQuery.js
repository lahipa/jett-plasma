"use client";

import { useQuery } from "@tanstack/react-query"
import { getPosts } from '../api';

export const useGetPosts = (request, apiKey) => {
    return useQuery({
        queryKey: ['filter-posts', request],
        queryFn: () => getPosts(request, apiKey),
    })
};
