"use client";

import React from 'react'
import { Button } from "@/app/@components/base";

const CtaLayoutContact = ({ params }) => {
  return (
    <div className='flex'>
        <Button
            title="Contact us now!"
            variant="primary"
            size="lg"
            onClick={() => console.log(params)}
        />
    </div>
  )
}

export default CtaLayoutContact;
