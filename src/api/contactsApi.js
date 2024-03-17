"use client";

import axios from 'axios'

export const postContact = async (data, params, apiKey) => {
    const { data: responseData } = await axios.post('https://jet-plasma.testdev.my.id/api/v1/contact-us', data, { params });

    return responseData;
};
