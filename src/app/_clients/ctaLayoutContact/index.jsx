"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/app/_components/base";

const CtaLayoutContact = ({ params }) => {
  const router = useRouter();

  const onClickContactUs = () => {
    router.prefetch("/contact");
    router.push("/contact");
  };

  return (
    <div className='flex'>
        <Button
            title="Contact us now!"
            variant="primary"
            size="lg"
            onClick={onClickContactUs}
        />
    </div>
  )
}

export default CtaLayoutContact;
