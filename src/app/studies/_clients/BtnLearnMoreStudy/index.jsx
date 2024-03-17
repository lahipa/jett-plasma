"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/base";

const BtnLearnMoreStudy = ({ slug }) => {
  const router = useRouter();

  const onClickMore = () => {
    router.prefetch(`/studies/${slug}`);
    router.push(`/studies/${slug}`);
  };

  return (
    <div className="flex mt-auto">
      <Button
        title="Learn More"
        outline
        onClick={onClickMore}
      />
    </div>
  );
};

export default BtnLearnMoreStudy;
