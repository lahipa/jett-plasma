"use client";

import { useQuery, useInfiniteQuery } from "@tanstack/react-query"
import { getVideos } from '../api';
import { useCallback, useRef } from "react";

export const useGetVideos = (request, apiKey) => {
    return useQuery({
        queryKey: ['videos', request],
        queryFn: () => getVideos(request, apiKey),
    })
};

export const useGetPaginateVideos = (request, apiKey) => {
    return useInfiniteQuery({
        queryKey: ["videos", request],
        queryFn: ({ pageParam = 1 }) =>
        getVideos({ ...request, page: pageParam }),
        getNextPageParam: (lastPage) => {
            const currentPage = lastPage?.result?.videos.current_page;
            const lastPageNumber = lastPage?.result?.videos.last_page;
            return currentPage < lastPageNumber ? currentPage + 1 : false;
        },
    });
};

export const useGetVideosFormatted = () => {
    const {
        data,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isRefetching,
    } = useGetPaginateVideos({
        per_page: 6
    });

    const observer = useRef(null);
    const lastElementRef = useCallback(
        (node) => {
            if (isLoading || isFetchingNextPage) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                let stopFetch = false

                for(let item of data.pages){
                    if(item.result.videos.current_page === item.result.videos.last_page){
                        stopFetch = true
                    }
                }

                if(data.pageParams.some((x) => x === false)){
                    stopFetch = true
                }

                if (entries[0].isIntersecting && hasNextPage && !stopFetch) {
                    fetchNextPage();
                }
            });
            if (node) observer.current.observe(node);
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isLoading, hasNextPage, isFetchingNextPage]
    );

    const list_data = []

    data?.pages.map((pageData) => {
        pageData.result.videos.data.map((item) => {
            list_data.push({
                title: item.posts_title,
                slug: item.posts_slug,
                cover: item.thumbnail,
                code: "26.2-TF-JPM II"
            })
        })
    })

    return {
        data: list_data,
        title: data?.pages[0].result.title,
        description: data?.pages[0].result.description,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        isRefetching,
        lastElementRef
    };
}