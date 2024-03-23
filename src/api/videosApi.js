"use client";

import axios from 'axios'

export const getVideos = async (params, apiKey) => {
    const { data } = await axios.get('https://jett-plasma-admin.lahipa.com/api/v1/videos', { params });

    return data;
};

export const getDetailVideos = async (slug, apiKey) => {
    const { data } = await axios.get(`https://jett-plasma-admin.lahipa.com/api/v1/videos/${slug}`);

    return data;
};
