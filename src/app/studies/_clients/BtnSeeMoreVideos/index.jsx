"use client";

import React from "react";
import { Button } from "@/app/_components/base";

const BtnSeeMoreVideos = () => {
  return (
    <div className="flex justify-center">
        <Button
            variant="white"
            title="See More"
            size="lg"
            outline
        />
    </div>
  );
};

export default BtnSeeMoreVideos;
