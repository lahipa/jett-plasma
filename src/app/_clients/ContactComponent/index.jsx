"use client";

import React, { useState } from 'react';
import Container from '@/app/_components/container';
import { Button, Badge, TextInput, TextareaInput } from '@/app/_components/base';
import { useMutation } from '@tanstack/react-query';
import { postContact } from '@/api';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { mutate } = useMutation({
    mutationFn: (data) => postContact(data),
    onSuccess: (data) => {
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        message: ''
      })
    },
    onError: (e) => {
      console.log('error: ', e)
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
    mutate(formData)
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <div className="h-[70px] lg:hidden" />

      <section className="relative pt-[40px] pb-[150px]">
        <Container className="flex flex-col lg:flex-row-reverse lg:items-stretch gap-[45px] lg:gap-[90px]">
          <div className="w-full md:w-fit hidden md:flex items-center justify-center">
            <img src="/brand/jett_emblem_color_basic.png" className="w-[200px] h-[200px] md:w-[360px] md:h-[360px] lg:w-[550px] lg:h-[550px]" />
          </div>
          <div className="flex flex-col flex-1 gap-[30px]">
            <div className="relative flex flex-col items-start gap-[14px]">
              <Badge title="Contact Us" outline />
              <h4 className="text-[40px] lg:text-[70px] leading-[50px] lg:leading-[88px] font-medium">Let’s get in touch!</h4>
              <p className="text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">Have questions? We’re here to help. Send us a message and we’ll respond within 24 hours.</p>
            </div>
            <div className="relative flex flex-col gap-[24px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                <TextInput
                  label="First Name"
                  name="first_name" 
                  placeholder="Enter first name"
                  variant="primary"
                  size="lg"
                  fullWidth
                />
                <TextInput
                  label="Last Name"
                  name="last_name" 
                  placeholder="Enter last name"
                  variant="primary"
                  size="lg"
                  fullWidth
                />
              </div>
              <TextInput
                label="Email Address" 
                name="email"
                placeholder="Enter email address"
                variant="primary"
                size="lg"
                fullWidth
              />
              <TextInput
                label="Phone" 
                name="phone"
                placeholder="Enter phone number"
                variant="primary"
                size="lg"
                fullWidth
              />
              <TextareaInput
                label="Message"
                name="message"
                placeholder="What you want to ask?"
                variant="primary"
                size="lg"
                fullWidth
              />
            </div>
            <div className="relative">
              <Button
                title="Send"
                variant="black"
                // type="submit"
                icon="IconArrowRight"
                iconPosition="right"
                size="lg"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactComponent;
