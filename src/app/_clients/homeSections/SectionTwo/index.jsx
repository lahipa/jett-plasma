"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Container from "@/app/_components/container";

const HomeSectionTwo = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress);

  const elementA = useTransform(scrollYProgress, [0, 1], ["-40", "100%"]);
  const elementB = useTransform(scrollYProgress, [0, 1], [-100, 120]);
  const elementCX = useTransform(scrollYProgressSpring, [0, 1], ["-10%", "15%"]);

  return (
    <section
      ref={ref}
      className="relative py-[80px] lg:py-[150px] bg-black text-white rounded-[40px] lg:rounded-[80px] overflow-hidden"
    >
      <Container className="flex flex-col gap-[60px] lg:gap-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-end gap-[14px] lg:gap-[100px]">
          <div
            className="text-[30px] lg:text-[80px] font-medium lg:w-[860px] leading-[40px] lg:leading-[94px]"
          >
            Elevate Your Aesthetics without the AC: The Unmatched Benefits of DC
            Current in Plasma Treatment
          </div>
          <div className="flex flex-col gap-[14px] lg:gap-[24px] flex-1 items-end h-auto lg:h-[450px]">
            <img
              src="/products/product-14.png"
              alt="Product Description"
              className="w-full lg:max-w-[260px] h-auto"
            />
            <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] lg:max-w-[260px]">
              Not all plasma pens are created equal! The Jett Plasma Pen Plasma
              has emerged as the gold standard for use in ophthalmology,
              aesthetics, and dermatology, thanks to its superior precision
              and ability to perform both ablative and non-ablative procedures.
            </p>
          </div>
        </div>
        <div
          className="flex items-center"
          transition={{ ease: "easeOut", duration: 0.5 }}
        >
          <motion.img
            style={{ x:  elementB}}
            src="/products/product-29.png"
            alt="Product Pen"
            className="w-full h-auto"
          />
        </div>
        <div className="relative" >
          <motion.p style={{ y :elementA}} className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] lg:max-w-[860px]">
            One of the unique features of the Jett Plasma Pen Plasma is its use
            of direct current (DC). DC offers a more stable and controlled
            energy output, which is essential for delicate procedures such as
            non-surgical blepharoplasty, dry eye/MGD/blepharitis treatment,
            skin tightening, and easy removal of benign vascular and skin
            lesions. Traditional plasma pens utilizing AC can be more
            unpredictable and less precise, leading to a higher risk of
            complications and uneven results. DC technology means less
            downtime, less risk of scarring, and more natural-looking results
            for patients. Jett Plasma Pen is the ideal choice for procedures
            such as upper and lower eyelid tightening, as well as reducing the
            appearance of crow's feet and under-eye wrinkles.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default HomeSectionTwo;
