"use client";

import axios from 'axios'

export const getFaqs = async (params, apiKey) => {
    const { data } = await axios.get('https://jett-plasma-admin.lahipa.com/api/v1/faqs', { params });

    return data;
};
