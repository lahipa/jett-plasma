"use client";

import React from 'react';
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/base";

const CtaHeaderContact = ({ params }) => {
  const router = useRouter();

  const onClickContact = () => {
    router.prefetch("/contact");
    router.push("/contact");
  };

  return (
    <div className='flex flex-col w-full lg:w-fit lg:flex-row'>
        <Button
            title="Contact Us"
            outline
            onClick={onClickContact}
        />
    </div>
  )
}

export default CtaHeaderContact;
