import React from "react";
import Link from "next/link";
import { Icon } from "../base";
import Container from "../container";
import Logo from "../logo";
import { socials } from "@/app/@data";

const Footer = () => {
  return (
    <footer className="relative pt-[100px] pb-[50px]">
      <Container className="flex flex-col gap-[80px]">
        <div className="flex items-strech justify-between gap-[50px]">
          <div className="flex flex-col max-w-[626px] gap-[30px]">
            <Logo />
            <p className="leading-relaxed">Jett Plasma Lift Medical is backed by years of research and development, as well as numerous clinical studies, ensuring both safety and efficacy for patients. It is Health Canada approved (unlike most Plasma devices) and provides the most advanced technology and versatile treatment options in a medical Plasma device.</p>
            <div className="flex items-center gap-[16px]">
              {socials.map((sosmed, i) => {
                return (
                  <Link key={i.toString()} href={sosmed.url}>
                    <Icon icon={sosmed.icon} size={30} />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-[24px]">
            <h4 className="font-semibold text-[18px]">Contact</h4>
            <div className="flex flex-col gap-[20px]">
              <span>877-870-0105</span>
              <span>info@jettplasmaeye.com</span>
              <span>90 Sheppard Ave East, #100A, Toronto, ON, M2N3A1</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span>&copy; All rights reserved JETT, {new Date().getFullYear()}</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
