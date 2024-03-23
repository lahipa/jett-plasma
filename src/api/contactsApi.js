"use client";

import axios from 'axios'

export const postContact = async (data, params, apiKey) => {
    const { data: responseData } = await axios.post('https://jett-plasma-admin.lahipa.com/api/v1/contact-us', data, { params });

    return responseData;
};
