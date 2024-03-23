"use client"
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";
import Container from "@/app/_components/container";

const HomeSectionTwo = () => {
  const ref = useRef(null);
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress);

  const elementA = useTransform(scrollYProgress, [0, 1], ["-40", "100%"]);
  const elementB = useTransform(scrollYProgress, [0, 1], [-100, 120]);

  return (
    <section
      ref={ref}
      className="relative py-[80px] lg:py-[150px] bg-black text-white rounded-[40px] lg:rounded-[80px] overflow-hidden"
    >
      <Container className="flex flex-col gap-[60px] lg:gap-[100px]">
        <div className="flex flex-col lg:flex-row lg:items-end gap-[14px] lg:gap-[100px]">
          <motion.div
            initial={{ opacity: 0, y: 140 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: ".5",
              delay: .05
            }}
            className="text-[30px] lg:text-[80px] font-medium lg:w-[860px] leading-[40px] lg:leading-[94px]"
          >
            The unmatched benefits and precision of DC current in plasma treatment: Elevating esthetics beyond AC.
          </motion.div>
          <div className="flex flex-col gap-[14px] lg:gap-[24px] flex-1 items-end h-auto lg:h-[450px]">
            <img
              src="/products/product-14.png"
              alt="Product Description"
              className="w-full lg:max-w-[260px] h-auto"
            />
            <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] lg:max-w-[260px]">
              Not all plasma pens are created equal! The Jett Plasma Pen has emerged as the gold standard for use in ophthalmology, aesthetics, and dermatology thanks to its ergonomic and lightweight design, superior precision, and ability to perform both ablative and non-ablative procedures.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <motion.img
            // initial={{ x: -80 }}
            // whileInView={{ x: 80 }}
            // transition={{
            //     duration: ".5",
            //     delay: .05
            // }}
            style={{ x:  elementB }}
            src="/products/product-29.png"
            alt="Product Pen"
            className="w-full h-auto"
          />
        </div>
        <div>
          <motion.p style={{ y: elementB }} className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] lg:max-w-[860px]">
            The Jett Plasma Pen's unique and patented use of direct current (DC) offers a more stable and controlled energy output when compared to (AC)alternating current. DC provides the accuracy essential for delicate procedures such as non-surgical blepharoplasty, dry eye/MGD/blepharitis treatment, skin tightening, and easy removal of benign vascular and skin lesions.
            By nature of plasma dispersal, AC devices are less predictable and precise, leading to a higher risk of complications and uneven results. DC technology reduces downtime and the risk of scarring, resulting in more natural-looking results for patients.
            The Jett Plasma Pen is the ideal choice for tightening the upper and lower eyelids and reducing the appearance of crow's feet and under-eye wrinkles.
          </motion.p>
        </div>
      </Container>
    </section>
  );
};

export default HomeSectionTwo;


