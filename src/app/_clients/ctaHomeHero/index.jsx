"use client";

import React from 'react'
import { Button } from "@/app/_components/base";
import { useRouter } from 'next/navigation';

const CtaHomeHero = ({ params }) => {
  const router = useRouter();

  const onClickExplore = () => {
    router.prefetch("/videos");
    router.push("/videos");
  };

  return (
    <div className='flex'>
        <Button
            title="Explore Product"
            variant="primary"
            size="lg"
            onClick={onClickExplore}
        />
    </div>
  )
}

export default CtaHomeHero
