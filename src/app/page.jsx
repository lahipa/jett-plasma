import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/app/_components/container";
import { Badge, Icon, Button } from "@/app/_components/base";
import { CtaLayoutContact, SliderVideosHome, BeforeAfterImage, HomeSectionOne, HomeSectionTwo, HomeSectionThree } from "@/app/_clients";
import { CardQuestion } from "@/app/_components/cards";

// data
import { jettPlasmaPenResult, jettPlasmaPsycologyEffect, Question } from '@/app/_data';
import SectionFive from "./@clients/homeSections/SectionFive";
import SectionSix from "./_clients/homeSections/SectionSix";
import { SectionFour } from "./_clients/homeSections/SectionFour";
import SectionSeven from "./_clients/homeSections/SectionSeven";
import SectionEight from "./_clients/homeSections/SectionEight";

export default function Home() {
  return (
    <>
      <div className="pt-[70px] lg:pt-0" />
      
      <HomeSectionOne />
    
      <HomeSectionTwo />
                
      <HomeSectionThree/>

     <SectionFour />

     <SectionFive />
     <SectionSix  jettPlasmaPsycologyEffect={jettPlasmaPsycologyEffect} />

      {/* <section className="relative pt-[80px] lg:pt-[150px] pb-[0]">
        <Container className="flex flex-col gap-[30px] lg:gap-[80px]">
          <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px] lg:text-center">Physiological and Therapeutic <br /> Effects of Jett Plasma Pen</h4>
          <div className="flex flex-col lg:flex-row flex-wrap lg:items-end lg:justify-center gap-[10px] lg:gap-[20px]">
            {jettPlasmaPsycologyEffect.map((effect, x) => {
              return (
                <div key={x.toString()} className="relative px-[20px] py-[16px] max-w-[400px] bg-black rounded-[25px]">
                  <div className="flex items-start gap-[8px]">
                      <div className="w-[6px] h-[6px] rounded-full bg-white mt-[12px]" />
                      <p className="leading-[28px] text-white flex-1">{effect}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div id="pattern-1" className="absolute -top-[80px] lg:-top-[150px] right-[16px] lg:-right-[20px] z-[1]">
            <img src="/layouts/pattern-04.svg" alt="pattern-04" className="w-[95px] lg:w-[354px] h-[102px] lg:h-[380px]" />
          </div>
        </Container>
      </section> */}

     <SectionSeven />

     <SectionEight />

      <section className="relative bg-background pt-[80px] lg:pt-[150px] pb-[0] z-[2] flex flex-col gap-[30px] lg:gap-[80px]">
        <Container className="">
          <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px] text-center">Jett Plasma in Aesthetics</h4>
        </Container>
        
        <SliderVideosHome />
      </section>

      <section className="relative py-[80px] lg:py-[150px]">
        <Container className="flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[100px]">
          <div className="w-full lg:w-[290px] flex flex-col items-start gap-[24px]">
            <Badge title="QnA" outline />
            <h4 className="text-[30px] lg:text-[50px] leading-[40px] lg:leading-[64px] font-medium">Quick answer to questions you may have</h4>
            <p className="leading-[28px]">
              Can’t find what you’re looking for? Contact us here: <br /> <a href="/" className="text-primary underline">info@jettplasmaeye.com</a>
            </p>
          </div>
          <div className="flex-1 flex flex-col">
            {Question.map((question, index) => (
              <CardQuestion
                key={index}
                title={question.title}
                imageSrc={question.imageSrc}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-[80px] bg-black rounded-[40px] lg:rounded-[80px]">
        <Container className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
          <h4 className="text-[30px] lg:text-[50px] text-center lg:text-left font-medium text-white leading-[40px] lg:leading-[64px] max-w-[846px]">
            Optimize Your Performance with Jett Plasma - The Latest Solution for Innovative Medical Procedures
          </h4>

          <CtaLayoutContact params={{ route: "/goto" }} />
        </Container>

        <div id="pattern-1" className="hidden lg:block absolute -top-[280px] left-0 z-[1]">
          <img src="/layouts/pattern-07.svg" alt="pattern-07" />
        </div>
      </section>
    </>
  );
}
