"use client"

import { Icon } from '@/app/_components/base';
import Container from '@/app/_components/container';
import { jettPlasmaPenResult } from '@/app/_data';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import React, { useRef } from 'react'

const SectionFour = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  })

  const imgX1Transform = useTransform(scrollYProgressSpring, [1, 0], [-90, 0])
  const text3XTransform = useTransform(scrollYProgressSpring, [1, 0], ["0%", "40%"])

  return (
    <section ref={ref} className="relative !mb-[150px]">
      <Container className="flex flex-col gap-[60px] lg:gap-[100px]">
        <h4  className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">Revolutionizing Eye Care: The Unmatched Versatility of the Jett Plasma Pen</h4>

        <div className="flex flex-col lg:flex-row gap-[20px] justify-center">
          <div className="relative flex-1">
            <img src="/products/product-15.png" alt="Product 15" className="w-full h-[247px] lg:h-[480px] relative z-[2]" />
            <motion.div style={{ y: imgX1Transform }} className="absolute left-0 top-0 bottom-0 h-full w-[calc(100%-80px)] bg-black rounded-[30px] z-[1]" />
          </div>
          <motion.div style={{ y: text3XTransform }} className="flex  flex-1">
            <div className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">
              The Jett Plasma Pen's ability to perform both ablative and non-ablative procedures sets it apart from other plasma pens. Ablative treatments remove the outer layer of skin, stimulating the body's natural healing process and promoting collagen production. Non-ablative treatments, on the other hand, work beneath the skin's surface to tighten and rejuvenate the skin without causing damage to the outer layer. This versatility allows for a wide range of eye care procedures to be performed, all with minimal downtime and discomfort for the patient.
            </div>
          </motion.div>
        </div>

        <section  className="flex flex-col lg:flex-row-reverse items-stretch gap-[20px]">
          <div className="relative flex-1">
            <img src="/products/product-16.png" alt="Product 16" className="w-full h-[247px] lg:h-[480px] relative z-[2]" />
            <motion.div style={{ y: text3XTransform }} className="absolute right-0 top-0 bottom-0 h-full w-[calc(100%-80px)] bg-black rounded-[30px] z-[1]" />
          </div>
          <div className="flex items-center flex-1">
            <motion.div style={{ y: text3XTransform }}  className="flex flex-col gap-[20px]">
              <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">
                Jett Plasma Pen Medical is unique in that it can effectively treat MGD and Blepharitis. The patented non-ablative metal heads use DC micro discharges and pulsed DC microcurrents resulting in:
              </p>
              <div className="flex flex-col gap-[20px] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">
                {jettPlasmaPenResult.map((list, x) => {
                  return (
                    <div key={x.toString()} className="flex gap-[10px]">
                      <Icon icon={list.icon} size={30} />
                      <span className="flex-1">{list.item}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </section>
      </Container>
    </section>
  )
}

export  default SectionFour