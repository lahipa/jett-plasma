"use client";

import React, { useEffect, useRef } from "react";

const ShowedVideoModal = ({ show, onClose, data }) => {

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
    <div className="fixed inset-0 flex justify-start z-[500] backdrop-filter backdrop-blur-md">
      <div className="w-full h-screen overflow-x-auto">
        <h4 className="hidden">Modal</h4>

        <div ref={dialogRef} className="w-full max-w-screen-xl relative flex flex-col md:ml-10">
          <div className="relative min-h-screen bg-background p-[30px] shadow-xl">
            <p>Container</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowedVideoModal;
