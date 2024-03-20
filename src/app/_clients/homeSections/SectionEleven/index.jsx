"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Container from '@/app/_components/container'
import { CtaLayoutContact } from '../..'

const SectionEleven = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end"],
  });

  const YTransform = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const buttonYTransform = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  return (
    <section ref={ref} className="relative py-[80px] bg-black rounded-[40px] lg:rounded-[80px] overflow-hidden">
      <Container className="flex flex-col">
        <motion.div
          initial={{ y: 30 }}
          whileInView={{ y: 0 }}
          transition={{
            duration: ".5",
            delay: .05
          }}
          className="flex flex-col lg:flex-row items-center justify-between gap-[30px]"
        >
          <h4 className="text-[30px] lg:text-[50px] text-center lg:text-left font-medium text-white leading-[40px] lg:leading-[64px] max-w-[846px]">
            Optimize Your Performance with Jett Plasma - The Latest Solution for Innovative Medical Procedures
          </h4>
          
          <CtaLayoutContact params={{ route: "/goto" }} />
        </motion.div>
      </Container>
      <div id="pattern-1" className="hidden lg:block absolute -top-[280px] left-0 z-[1]">
        <img src="/layouts/pattern-07.svg" alt="pattern-07" />
      </div>
    </section>
  )
}

export default SectionEleven;
