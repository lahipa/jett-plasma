"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/base";

const BtnSeeMoreStudies = () => {
  const router = useRouter();

  const onClickMore = () => {
    router.prefetch("/studies");
    router.push("/studies");
  };

  return (
    <div className="flex justify-center">
        <Button
            variant="white"
            title="See More"
            onClick={onClickMore}
            size="lg"
            outline
        />
    </div>
  );
};

export default BtnSeeMoreStudies;
