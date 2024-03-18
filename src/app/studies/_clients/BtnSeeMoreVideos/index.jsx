"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/_components/base";

const BtnSeeMoreVideos = () => {
  const router = useRouter();

  const onClickMore = () => {
    router.prefetch("/videos");
    router.push("/videos");
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

export default BtnSeeMoreVideos;
