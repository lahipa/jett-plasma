"use client";

import axios from 'axios'

export const postContact = async (data, params, apiKey) => {
    const { data: responseData } = await axios.post('/api/v1/contact-us', data, { params });

    return responseData;
};
