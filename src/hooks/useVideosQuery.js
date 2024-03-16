"use client";

import { useQuery } from "@tanstack/react-query"
import { getVideos } from '../api';

export const useGetVideos = (request, apiKey) => {
    return useQuery({
        queryKey: ['videos', request],
        queryFn: () => getVideos(request, apiKey),
    })
};
