"use client";

import axios from 'axios'

export const getStudies = async (params, apiKey) => {
    const { data } = await axios.get('https://jett-plasma-admin.lahipa.com/api/v1/studies', { params });

    return data;
};

export const getDetailStudies = async (slug, apiKey) => {
    const { data } = await axios.get(`https://jett-plasma-admin.lahipa.com/api/v1/studies/${slug}`);

    return data;
};
