"use client";

import axios from 'axios'

export const getFaqs = async (params, apiKey) => {
    const { data } = await axios.get('/api/v1/faqs', { params });

    return data;
};
