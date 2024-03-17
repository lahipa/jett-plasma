"use client"
import Container from '@/app/_components/container'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import React, { useRef } from 'react'

const SectionEight = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  })

  const imgTransform = useTransform(scrollYProgressSpring, [0, 1], ["20%", "-40%"])
  const text2XTransform = useTransform(scrollYProgressSpring, [0, 1], ["-20%", "0%"])

  return (
    <section ref={ref} className="relative py-[80px] lg:py-[100px] bg-black text-white rounded-[40px] lg:rounded-[80px] z-[1] ">
    <Container className="flex flex-col lg:flex-row-reverse items-stretch gap-[420px] lg:gap-[100px]">
      <motion.div style={{y: text2XTransform}}  className="flex flex-col gap-[24px] flex-1 ">
        <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">About Jett Plasma</h4>
        <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">Jett Plasma Lift Medical is backed by years of research and development, as well as numerous clinical studies, ensuring both safety and efficacy for patients. It is Health Canada approved (unlike most Plasma devices) and provides the most advanced technology and versatile treatment options in a medical Plasma device.</p>
        <ul className="list-disc list-outside ml-[30px] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">
            <li>Health Canada approved</li>
            <li>Certified medical device</li>
            <li>Patented DC technology</li>
            <li>Plasma treatment</li>
            <li>Simple handling and control</li>
            <li>8 intensities</li>
            <li>6 metal heads for ablative and non-ablative procedures</li>
            <li>Safety, efficiency and speed</li>
            <li>Lightweight and portable</li>
          </ul>
      </motion.div>
      <motion.div style={{y: imgTransform}} className="h-[480px] lg:w-[395px] relative flex items-center justify-center z-50">
        <img src="/products/product-25.png" alt="jett pen" className="absolute z-[2]" />
      </motion.div>
    </Container>

    <div id="pattern-1" className="absolute bottom-[calc(50%-30px)] lg:bottom-[100px] right-0 z-[1]">
      <img src="/layouts/pattern-06.svg" alt="pattern-06" className="w-[245px] lg:w-[303px] h-[200px] lg:h-[247px]" />
    </div>
  </section>
  )
}

export default SectionEight