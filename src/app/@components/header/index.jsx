import React from "react";
import Link from "next/link";
import Container from "../container";
import { Button } from "../base";
import LangSelector from "./langSelector";
import Navigation from "./navigation";
import Logo from "../logo";

const Header = () => {
  return (
    <header className="relative">
      <Container className="flex items-strech h-[120px]">
        <div className="w-[200px] flex items-center justify-start">
          
          <Logo />
        
        </div>
        <div className="mx-auto flex items-center">
          
          <Navigation />

        </div>
        <div className="w-[200px] flex items-center justify-end">
          <div className="flex items-center gap-[20px]">
            <LangSelector />
            <Button title="Contact Us" outline />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
