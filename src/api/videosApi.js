"use client";

import axios from 'axios'

export const getVideos = async (params, apiKey) => {
    const { data } = await axios.get('https://jet-plasma.testdev.my.id/api/v1/videos', { params });

    return data;
};

export const getDetailVideos = async (slug, apiKey) => {
    const { data } = await axios.get(`https://jet-plasma.testdev.my.id/api/v1/videos/${slug}`);

    return data;
};
