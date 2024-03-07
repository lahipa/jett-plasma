import React from "react";
import Link from "next/link";
import Container from "@/components/container";
import { Button } from "@/components/@base";
import LangSelector from "../langSelector";
import Navigation from "../navigation";

const Header = () => {
  return (
    <header className="relative">
      <Container className="flex items-strech h-[120px]">
        <div className="w-[200px] flex items-center justify-start">
          <Link href="/">
            <img src="/brand/main-logo.svg" alt="Logo" className="text-inherit" />
          </Link>
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
