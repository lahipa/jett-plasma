"use client";

import React from 'react'
import { Button } from "@/app/_components/base";

const CtaHeaderContact = ({ params }) => {
  return (
    <div className='flex flex-col w-full lg:w-fit lg:flex-row'>
        <Button
            title="Contact Us"
            outline
            onClick={() => console.log(params)}
        />
    </div>
  )
}

export default CtaHeaderContact;
