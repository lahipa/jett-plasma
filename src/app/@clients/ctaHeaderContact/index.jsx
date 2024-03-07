"use client";

import React from 'react'
import { Button } from "@/app/@components/base";

const CtaHeaderContact = ({ params }) => {
  return (
    <div className='flex'>
        <Button
            title="Contact Us"
            outline
            onClick={() => console.log(params)}
        />
    </div>
  )
}

export default CtaHeaderContact;
