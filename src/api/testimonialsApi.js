"use client";

import axios from 'axios'

export const getTestimonials = async (params, apiKey) => {
    const { data } = await axios.get('https://jett-plasma-admin.lahipa.com/api/v1/testimonials', { params });

    return data;
};