"use client";

import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { getStudies } from '../api';
import { useRef, useCallback} from 'react'

export const useGetStudies = (request, apiKey) => {
    return useQuery({
        queryKey: ['studies', request],
        queryFn: () => getStudies(request, apiKey),
    })
};

export const useGetPaginateStudies = (request, apiKey) => {
    return useInfiniteQuery({
        queryKey: ["studies", request],
        queryFn: ({ pageParam = 1 }) =>
        getStudies({ ...request, page: pageParam }),
        getNextPageParam: (lastPage) => {
            const currentPage = lastPage?.result?.studies.current_page;
            const lastPageNumber = lastPage?.result?.studies.last_page;
            return currentPage < lastPageNumber ? currentPage + 1 : false;
        },
    });
};

export const useGetStudiesFormatted = () => {
    const {
        data,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isRefetching,
    } = useGetPaginateStudies({
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
                    if(item.result.studies.current_page === item.result.studies.last_page){
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
        pageData.result.studies.data.map((item) => {
            list_data.push({
                name: item.posts_title,
                description: item.posts_description,
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