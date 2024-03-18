
"use client"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef } from 'react';

const CardQuestion = ({ title }) => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  })

  const textTransform = useTransform(scrollYProgressSpring, [0, 1], [100, 0])
  return (
    <div className="flex flex-col justify-between ">
      <div ref={ref} className="py-[12px] lg:py-[22px] flex flex-row justify-between">
      <motion.p style={{ y: textTransform }} className="font-semibold text-dark-10">{title}</motion.p>
      <motion.button style={{ y: textTransform }} className="w-[32px] h-[32px]">
        <img src="/layouts/pattern-15.svg" alt="" />
      </motion.button>
    </div>
      <motion.hr style={{ y: textTransform }} className="border border-dark-10 w-full " />

    </div>
  );
};

export default CardQuestion;
