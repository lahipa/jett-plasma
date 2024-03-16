"use client";

import { useInfiniteQuery } from "@tanstack/react-query"
import { getTestimonials } from '../api';
import { useCallback, useRef } from "react";
import dayjs from "dayjs";
var relativeTime = require('dayjs/plugin/relativeTime')

dayjs.extend(relativeTime)

export const useGetPaginateTestimonials = (request, apiKey) => {
    return useInfiniteQuery({
        queryKey: ["testimonials", request],
        queryFn: ({ pageParam = 1 }) =>
            getTestimonials({ ...request, page: pageParam }),
        getNextPageParam: (lastPage) => {
            const currentPage = lastPage?.result?.current_page;
            const lastPageNumber = lastPage?.result?.last_page;
            return currentPage < lastPageNumber ? currentPage + 1 : false;
        },
    });
};

export const useGetTestimonialsFormatted = () => {
    const {
        data,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage,
        isRefetching,
    } = useGetPaginateTestimonials({
        per_page: 6
    });

    const observer = useRef(null);
    const lastElementRef = useCallback(
        (node) => {
            if (isLoading || isFetchingNextPage) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                let stopFetch = false

                for (let item of data.pages) {
                    if (item.result.current_page === item.result.last_page) {
                        stopFetch = true
                    }
                }

                if (data.pageParams.some((x) => x === false)) {
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
        pageData.result.data.map((item) => {
            list_data.push({
                name: item.title,
                testimonial: item.description,
                image: item.photo ? item.photo : "https://xsgames.co/randomusers/avatar.php?g=male",
                time: dayjs(item.created_at).fromNow()
            })
        })
    })

    const groupSize = Math.ceil(list_data.length / 3);
    const chunkedArray = chunkArray(list_data, groupSize);

    return {
        data: chunkedArray,
        isLoading,
        isFetchingNextPage,
        hasNextPage,
        isRefetching,
        lastElementRef
    };
}

const chunkArray = (array, chunkSize) => {
    const chunks = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }

    return chunks;
};