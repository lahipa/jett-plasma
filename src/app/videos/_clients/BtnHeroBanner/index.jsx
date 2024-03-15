"use client";

import React from "react";
import { IconButton } from "@/app/_components/base";

const BtnHeroBanner = () => {
  return (
    <div className="absolute bottom-0 w-full p-[20px] flex flex-row items-center gap-[10px]">
      <IconButton
        variant="white"
        icon="IconPlayerPlayFilled"
        className="bg-[#1C1E22]/20 lg:mr-auto"
        size="lg"
        outline
      />

      <IconButton
        variant="white"
        icon="IconDownload"
        className="bg-[#1C1E22]/20"
        size="lg"
        outline
      />
    </div>
  );
};

export default BtnHeroBanner;
