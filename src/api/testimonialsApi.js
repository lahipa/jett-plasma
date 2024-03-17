"use client";

import axios from 'axios'

export const getTestimonials = async (params, apiKey) => {
    const { data } = await axios.get('https://jet-plasma.testdev.my.id/api/v1/testimonials', { params });

    return data;
};