"use client";

import Container from "@/app/@components/container";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const HomeSectionTwo = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const elementA = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const elementB = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  const elementC = useTransform(scrollYProgress, [0, 1], ["5%", "6%"]);

  return (
    <section ref={ref} className="relative py-[150px] bg-black text-white rounded-[80px]">
      <Container className="flex flex-col gap-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-end gap-[14px] lg:gap-[100px]">
          <motion.div className="text-[80px] font-medium lg:w-[860px] leading-[94px]" style={{ y: elementB }} >Elevate Your Aesthetics without the AC: The Unmatched Benefits of DC Current in Plasma Treatment</motion.div>
          <div className="flex flex-col gap-[24px] flex-1 items-end"  >
            <img src="/products/product-14.png" alt="Product Description" className="w-full max-w-[260px] h-auto" />
            <p className="leading-[28px] max-w-[260px]">Not all plasma pens are created equal! The Jett Plasma Pen Plasma has emerged as the gold standard for use in ophthalmology, aesthetics, and dermatology, thanks to its superior precision and ability to perform both ablative and non-ablative procedures.</p>
          </div>
        </div>
        <motion.div className="flex items-center justify-center" style={{ x: elementC }}>
          <img src="/products/product-29.png" alt="Product Pen" className="" />
        </motion.div>
        <motion.div className="flex items-center"   style={{ y: elementA }}>
          <p className="leading-[28px] max-w-[860px]">One of the unique features of the Jett Plasma Pen Plasma is its use of direct current (DC). DC offers a more stable and controlled energy output, which is essential for delicate procedures such as non-surgical blepharoplasty, dry eye/MGD/blepharitis treatment, skin tightening, and easy removal of benign vascular and skin lesions. Traditional plasma pens utilizing AC can be more unpredictable and less precise, leading to a higher risk of complications and uneven results. DC technology, means less downtime, less risk of scarring, and more natural-looking results for patients. Jett Plasma Pen is the ideal choice for procedures such as upper and lower eyelid tightening, as well as reducing the appearance of crow's feet and under-eye wrinkles.</p>
        </motion.div>
      </Container>
    </section>
  );
};

export default HomeSectionTwo;
