import React from "react";
import { CtaHeaderContact, LangSelector } from "@/app/@clients";
import Container from "../container";
import Logo from "../logo";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header className="hidden lg:block relative w-full top-0 left-0 right-0 bg-background z-40">
      <Container className="flex items-strech h-[120px]">
        <div className="w-[200px] flex items-center justify-start">
          
          <Logo />
        
        </div>
        <div className="mx-auto flex items-center">
          
          <Navigation />

        </div>
        <div className="w-[200px] flex items-center justify-end">
          <div className="flex items-center gap-[20px] relative z-[42]">
            <LangSelector />
            <CtaHeaderContact params={{ route: "/goto" }} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
