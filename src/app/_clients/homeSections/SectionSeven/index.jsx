"use client"
import { Icon } from '@/app/_components/base'
import Container from '@/app/_components/container'
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SectionSeven = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const textXTransform = useTransform(scrollYProgress, [0, 1], [-70, 0])
  const textY3Transform = useTransform(scrollYProgress, [0, 1], [170, 0])

  return (
    <section ref={ref} className="relative pt-[150px] pb-[80px] lg:pb-[300px]">
      <Container className="flex flex-col gap-[30px] lg:gap-[40px]">
        <motion.div style={{y: textY3Transform}} className="mix-blend-darken">
          <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px] text-center">Suitable for</h4>
          <div className="flex flex-col lg:flex-row lg:items-end justify-center gap-[50px] lg:gap-[80px]">
            <div className="flex flex-col gap-[14px] lg:max-w-[350px]">
              <Icon icon="AbiativeIcon" size={50} />
              <h4 className="text-[20px] lg:text-[24px] leading-[30px] lg:leading-[34px] font-medium">Ablative Treatments</h4>
              <ul className="list-disc list-outside ml-[30px] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">
                <li>Removal of deep and shallow wrinkles</li>
                <li>Removal of warts, pigmentations, fibromas, cuperosis, hemangiomas</li>
                <li>Scars correction</li>
                <li>Blepharoplasty</li>
                <li>Ectropion, Entropion, Xanthelasma</li>
                <li>Trichiasis, Distichiasis</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[14px] lg:max-w-[350px]">
              <Icon icon="NonAbiativeIcon" size={50} />
              <h4 className="text-[20px] lg:text-[24px] leading-[30px] lg:leading-[34px] font-medium">Non-Ablative Treatments</h4>
              <ul className="list-disc list-outside ml-[30px] text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">
                <li>Face and body lifting</li>
                <li>Reduction of wrinkles</li>
                <li>Restoration of connective tissues</li>
                <li>Improvement of elasticity</li>
                <li>Blepharitis</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-[50px]">
            <div className="flex flex-col gap-[14px] flex-1">
              <picture className="w-full h-[250px] flex items-center justify-center">
                <img src="/products/product-22.png" className="mix-blend-darken" />
              </picture>
              <div className="px-[20px] text-center">
                <span className="text-[20px] leading-[30px] font-medium">Applicators for JETT PLASMA LIFT MEDICAL</span>
              </div>
            </div>
            <div className="flex flex-col gap-[14px] flex-1">
              <picture className="w-full h-[250px] flex items-center justify-center">
                <img src="/products/product-23.png" className="mix-blend-darken" />
              </picture>
              <div className="px-[20px] text-center">
                <span className="text-[20px] leading-[30px] font-medium">Applicators for Plasma Pen</span>
              </div>
            </div>
            <div className="flex flex-col gap-[14px] flex-1">
              <picture className="w-full h-[250px] flex items-center justify-center">
                <img src="/products/product-24.png" className="mix-blend-darken" />
              </picture>
              <div className="px-[20px] text-center">
                <span className="text-[20px] leading-[30px] font-medium">Gold ophthalmology applicators</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>

      <motion.div style={{ x: textXTransform }} id="pattern-1" className="absolute top-[35px] lg:top-0 left-0 z-[1]">
        <img src="/layouts/pattern-05.svg" alt="pattern-05" className="w-[198px] lg:w-[437px] h-[146px] lg:h-[320px]" />
      </motion.div>
    </section>
  )
}

export default SectionSeven