"use client";

import axios from 'axios'

export const getFaqs = async (params, apiKey) => {
    const { data } = await axios.get('https://jet-plasma.testdev.my.id/api/v1/faqs', { params });

    return data;
};
