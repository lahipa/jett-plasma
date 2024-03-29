import React from "react";
import Container from "@/app/_components/container";
import { ClientProvider } from "@/app/_clients";
import SectionTen from "./_clients/homeSections/SectionTen";
import SectionEleven from "./_clients/homeSections/SectionEleven";
import {
  HomeSectionEight, HomeSectionFive, HomeSectionFour, HomeSectionOne, HomeSectionSeven, HomeSectionSix, HomeSectionThree, HomeSectionTwo, SliderVideosHome,
} from "./_clients";

// data
import { jettPlasmaPenResult, jettPlasmaPsycologyEffect, Question } from '@/app/_data';

export default function Home() {
  return (
    <>
      <div className="pt-[70px] lg:pt-0" />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeSectionFour />
      <HomeSectionFive />
      <HomeSectionSix jettPlasmaPsycologyEffect={jettPlasmaPsycologyEffect} />
      <HomeSectionSeven />
      <HomeSectionEight />

      <section className="relative bg-background pt-[80px] lg:pt-[150px] pb-[0] z-[2] flex flex-col gap-[30px] lg:gap-[80px]">
        <Container className="">
          <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px] text-center">Jett Plasma in Aesthetics</h4>
        </Container>

        <ClientProvider>
          <SliderVideosHome />
        </ClientProvider>
      </section>

      <SectionTen Question={Question} />
      <SectionEleven />
    </>
  );
}
