"use client";

import React, { useRef, Fragment } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Container from "@/app/_components/container";
import { BeforeAfterImage } from "@/app/_clients";

const HomeSectionThree = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  })

  const imgTransform = useTransform(scrollYProgressSpring, [0, 1], [2, 1])
  const textXTransform = useTransform(scrollYProgressSpring, [0, 1], [-70, 0])
  // const textYTransform = useTransform(scrollYProgressSpring, [0, 1], [30, 0])
  const text2XTransform = useTransform(scrollYProgressSpring, [1, 0], [0, 70])
  const text3XTransform = useTransform(scrollYProgressSpring, [1, 0], [0, 10])

  return (
    <section ref={ref} className="relative py-[80px] lg:py-[150px]">
        <Container className="flex flex-col lg:flex-row items-stretch gap-[14px]">
          <div className="flex-1 flex flex-col gap-[71px]">
            <div className="flex flex-col items-center">
              <div className="w-full lg:max-w-[573px] flex justify-end overflow-hidden">
                <motion.span style={{ x: textXTransform }} className="text-[24px] lg:text-[40px] leading-[34px] lg:leading-[54px] font-medium">See what happens</motion.span>
              </div>
              <div className="w-full lg:max-w-[573px] flex overflow-hidden">
                <motion.span style={{ x: text3XTransform }} className="text-[24px] lg:text-[40px] leading-[34px] lg:leading-[54px] font-medium text-primary italic">before and after treatment</motion.span>
              </div>
              <div className="w-full lg:max-w-[573px] flex justify-center overflow-hidden">
                <motion.span style={{ x: text2XTransform }} className="text-[24px] lg:text-[40px] leading-[34px] lg:leading-[54px] font-medium">using Jett Plasma</motion.span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-stretch gap-[14px]">
              <div className="relative w-full lg:w-[400px] h-[400px] overflow-hidden rounded-[20px]">
                <motion.img style={{ scale: imgTransform }} src="/products/product-26.png" className="w-full h-full object-cover" /> 
                <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                  <span className="text-white text-[14px] leading-[20px] font-medium">Before</span>
                </div>
              </div>
              <div className="flex flex-col gap-[14px] flex-1">
                <div className="relative w-full h-[193px] overflow-hidden rounded-[20px]">
                  <motion.img style={{ scale: imgTransform }} src="/products/product-27.png" className="w-full h-full object-cover" />
                  <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                    <span className="text-white text-[14px] leading-[20px] font-medium">After 10 days</span>
                  </div>
                </div>
                <div className="relative w-full h-[193px] overflow-hidden rounded-[20px]">
                  <motion.img style={{ scale: imgTransform }} src="/products/product-28.png" className="w-full h-full object-cover" />
                  <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                    <span className="text-white text-[14px] leading-[20px] font-medium">After 3 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[60px] lg:gap-[10px]">

            <BeforeAfterImage scrollYProgress={scrollYProgressSpring} />

            <div className="relative lg:p-[30px]">
              <p className="text-[20px] lg:text-[24px] leading-[30px] lg:leading-[34px] font-medium">Jett Plasma allows you to choose between ablative and non-ablative plasma energy to tighten skin, reduce wrinkles, and treat various imperfections, all without incisions or downtime</p>
            </div>
          </div>
        </Container>
      </section>
  );
};

export default HomeSectionThree;
