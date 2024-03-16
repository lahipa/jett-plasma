"use client";

import React, { useState } from 'react';
import Container from '@/app/_components/container';
import { Button, TextInput, TextareaInput } from '@/app/_components/base';
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
    <Container>
      <div className="flex justify-between gap-6 overflow-hidden items-end md:h-[750px] h-full">
        <div className="flex flex-col flex-1 justify-between items-start h-full w-full">
          <div>
            <Button
              title="Contact Us"
              outline
              className="w-[136px]"
            />
            <div className="text-[70px] font-bold">
              Let’s get in touch!
            </div>
            <div className="text-[20px]">
              Have questions? We’re here to help. Send us a message and we’ll respond within 24 hours.
            </div>
          </div>
          <form className='flex flex-col flex-1 justify-between items-start h-full w-full gap-3' onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-6 mt-[30px] w-full">
              <TextInput label="First Name" placeholder="Enter first name" className="w-full" type="text" name="first_name" value={formData.first_name} onChange={handleInputChange} />
              <TextInput label="Last Name" placeholder="Enter last name" className="w-full" type="text" name="last_name" value={formData.last_name} onChange={handleInputChange} />
            </div>
            <TextInput label="Email Address" placeholder="Enter email address" className="w-full " type="text" name="email" value={formData.email} onChange={handleInputChange} />
            <TextInput label="Phone" placeholder="Enter phone" className="w-full" name="phone" value={formData.phone} onChange={handleInputChange} />
            <TextareaInput label="Message" placeholder="What you want to ask?" className="w-full" type="text" name="message" value={formData.message} onChange={handleInputChange} />

            <Button
              title="Send"
              className="w-[136px] !bg-dark-10"
              type="submit"
              icon="IconArrowRight"
              iconPosition="right"
              size="lg"
            />

          </form>
        </div>
        <div className='w-1/3 hidden md:block h-full' >
          <img className="h-full object-contain" src="/products/product-13.png" alt="" />
        </div>
      </div>
    </Container>
  );
};

export default ContactComponent;
