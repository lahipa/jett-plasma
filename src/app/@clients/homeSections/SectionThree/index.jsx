"use client";

import React, { useRef, Fragment } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/app/@components/container";
import { BeforeAfterImage } from "../..";

const HomeSectionThree = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  console.log('scrollYProgress: ', scrollYProgress)

  return (
    <section ref={ref} className="relative py-[150px]">
        <Container className="flex items-stretch gap-[14px]">
          <div className="flex-1 flex flex-col gap-[71px]">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[573px] flex justify-end">
                <span className="text-[40px] leading-[54px] font-medium">See what happens</span>
              </div>
              <div className="w-full max-w-[573px] flex">
                <span className="text-[40px] leading-[54px] font-medium text-primary italic">before and after treatment</span>
              </div>
              <div className="w-full max-w-[573px] flex justify-center">
                <span className="text-[40px] leading-[54px] font-medium">using Jett Plasma</span>
              </div>
            </div>

            <div className="flex items-stretch gap-[14px]">
              <div className="relative w-[400px] h-[400px] overflow-hidden rounded-[20px]">
                <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                  <span className="text-white text-[14px] leading-[20px] font-medium">Before</span>
                </div>
                <img src="/products/product-26.png" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-[14px] flex-1">
                <div className="relative w-full h-[193px] overflow-hidden rounded-[20px]">
                  <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                    <span className="text-white text-[14px] leading-[20px] font-medium">After 10 days</span>
                  </div>
                  <img src="/products/product-27.png" className="w-full h-full" />
                </div>
                <div className="relative w-full h-[193px] overflow-hidden rounded-[20px]">
                  <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                    <span className="text-white text-[14px] leading-[20px] font-medium">After 3 months</span>
                  </div>
                  <img src="/products/product-28.png" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[10px]">

            <BeforeAfterImage scrollYProgress={scrollYProgress} />

            <div className="relative p-[30px]">
              <p className="text-[24px] leading-[34px] font-medium">Jett Plasma allows you to choose between ablative and non-ablative plasma energy to tighten skin, reduce wrinkles, and treat various imperfections, all without incisions or downtime</p>
            </div>
          </div>
        </Container>
      </section>
  );
};

export default HomeSectionThree;
