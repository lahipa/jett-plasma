"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CtaHeaderContact, LangSelector } from "@/app/@clients";
import Container from "@/app/@components/container";
import Logo from "@/app/@components/logo";
import Navigation from "@/app/@components/header/navigation";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);

  const onClickToggle = () => setOpen(!open);

  return (
    <header className="lg:hidden fixed w-full top-0 left-0 right-0 bg-background z-40">
      <div className="px-6 flex items-center justify-between h-[70px]">
        <div className="w-[200px] flex items-center justify-start">
          <Logo />
        </div>
        <div>
          <button onClick={onClickToggle}>X</button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 mt-[70px] bg-background">
          <div className="relative px-6 pt-[20px] flex flex-col gap-[60px]">

            <Navigation />


            <div className="flex flex-col items-center gap-[30px]">
              <LangSelector />
              <CtaHeaderContact params={{ route: "/goto" }} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderMobile;
