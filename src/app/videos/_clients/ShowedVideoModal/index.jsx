"use client";

import React, { useEffect, useRef } from "react";
import { IconButton } from "@/app/_components/base";
import { ContentVideoDynamic } from "@/app/videos/_clients";

const ShowedVideoModal = ({ show, onClose, slug }) => {

  const dialogRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dialogRef.current && !dialogRef.current.contains(e.target) && onClose) onClose();
      return;
    };

    if (show) {
      document.addEventListener("mouseup", handleClickOutside);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
      document.body.style.overflow = "visible";
    }
  }, [dialogRef, show, onClose]);
  
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-start z-[9999] backdrop-filter backdrop-blur-md">
      <div className="relative w-full h-screen overflow-x-auto">
        <h4 className="hidden">Modal</h4>
        <div className="fixed top-[30px] right-[40px]">
          <IconButton
            variant="black"
            icon="IconX"
            // outline
            size="lg"
          />
        </div>

        <div ref={dialogRef} className="w-full max-w-screen-xl relative flex flex-col md:ml-10">
          <div className="relative min-h-screen bg-background p-[30px] text-[#1C1E22] shadow-xl">
            
            <ContentVideoDynamic category="video" slug={slug} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowedVideoModal;
