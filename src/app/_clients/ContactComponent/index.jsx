"use client";

import React, { useState } from 'react';
import Container from '@/app/_components/container';
import { Button, Badge, TextInput, TextareaInput } from '@/app/_components/base';
import { useMutation } from '@tanstack/react-query';
import { postContact } from '@/api';
import { useForm, Controller } from 'react-hook-form';

const ContactComponent = () => {
  const [message, setMessage] = useState('')
  const { handleSubmit, control, reset, formState: { errors } } = useForm();

  const { mutate } = useMutation({
    mutationFn: (data) => postContact(data),
    onSuccess: (data) => {
      reset();
    },
    onError: (e) => {
      setMessage(e.response.data.message)
    }
  })

  const onSubmit = (data) => {
    mutate(data);
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="relative flex flex-col gap-[24px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                  <div>
                    <Controller
                      name="first_name"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextInput
                          label="First Name"
                          {...field}
                          type="text"
                          placeholder="Enter first name"
                          variant="primary"
                          size="lg"
                          fullWidth
                          onFocus={() => setMessage(prevState => ({ ...prevState, first_name: '' }))}
                        />
                      )}
                    />
                    {message.first_name && <p className="text-red-500">{message.first_name[0]}</p>}
                  </div>
                  <div>
                    <Controller
                      name="last_name"
                      control={control}
                      defaultValue=""
                      render={({ field }) => (
                        <TextInput
                          label="Last Name"
                          {...field}
                          type="text"
                          placeholder="Enter last name"
                          variant="primary"
                          size="lg"
                          fullWidth
                          onFocus={() => setMessage(prevState => ({ ...prevState, last_name: '' }))}
                        />
                      )}
                    />
                    {message.last_name && <p className="text-red-500">{message.last_name[0]}</p>}

                  </div>
                </div>
                <div>
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextInput
                        label="Email Address"
                        {...field}
                        type="text"
                        placeholder="Enter email address"
                        variant="primary"
                        size="lg"
                        fullWidth
                        onFocus={() => setMessage(prevState => ({ ...prevState, email: '' }))}
                      />
                    )}
                  />
                  {message.email && <p className="text-red-500">{message.email[0]}</p>}
                </div>
                <div>
                  <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextInput
                        label="Phone"
                        {...field}
                        type="text"
                        placeholder="Enter phone number"
                        variant="primary"
                        size="lg"
                        fullWidth
                        onFocus={() => setMessage(prevState => ({ ...prevState, phone: '' }))}
                      />
                    )}
                  />
                  {message.phone && <p className="text-red-500">{message.phone[0]}</p>}
                </div>
                <div>
                  <Controller
                    name="message"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                      <TextareaInput
                        label="Message"
                        {...field}
                        placeholder="What you want to ask?"
                        variant="primary"
                        size="lg"
                        fullWidth
                        onFocus={() => setMessage(prevState => ({ ...prevState, message: '' }))}
                      />
                    )}
                  />
                  {message.message && <p className="text-red-500">{message.message[0]}</p>}
                </div>
              </div>
              <div className="relative mt-4">
                <Button
                  title="Send"
                  variant="black"
                  type="submit"
                  icon="IconArrowRight"
                  iconPosition="right"
                  size="lg"
                />
              </div>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactComponent;

