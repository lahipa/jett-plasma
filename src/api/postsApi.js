"use client";

import axios from 'axios'

export const getPosts = async (params, apiKey) => {
    const { data } = await axios.get('/api/v1/posts', { params });

    return data;
};
