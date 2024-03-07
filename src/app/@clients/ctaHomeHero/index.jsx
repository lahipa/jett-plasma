"use client";

import React from 'react'
import { Button } from "@/app/@components/base";

const CtaHomeHero = ({ params }) => {
  return (
    <div className='flex'>
        <Button
            title="Explore Product"
            variant="primary"
            size="lg"
            onClick={() => console.log(params)}
        />
    </div>
  )
}

export default CtaHomeHero
