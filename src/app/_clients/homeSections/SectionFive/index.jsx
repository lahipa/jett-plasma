"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Badge } from '@/app/_components/base';
import Container from '@/app/_components/container';


const SectionFive = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  })

  const imgTransform2 = useTransform(scrollYProgressSpring, [0, 1], [2, 0.90])
  const imgTransform3 = useTransform(scrollYProgressSpring, [0, 1], [2, 1.5])
  const imgTransform1 = useTransform(scrollYProgressSpring, [0, 1], ["30%", "-5%"]);

  const textXTransform = useTransform(scrollYProgressSpring, [0, 1], ["50%", "-120%"])
  const text3XTransform = useTransform(scrollYProgressSpring, [1, 0], [0, 10])
  
  return (
    <div ref={ref} className="relative py-[80px] lg:py-[150px] h-full bg-primary text-white rounded-[40px] lg:rounded-[80px] z-50">
    <Container className="flex flex-col gap-[60px] lg:gap-[80px]">
      <motion.div 
        initial={{ y: 30 }}
        whileInView={{ y: 0 }}
        transition={{
          duration: ".5",
          delay: .05
        }}
        className="flex flex-col gap-[24px] lg:gap-[80px]"
      >
        <div className="flex flex-col items-start gap-[14px] lg:gap-[30px]">
          <Badge title="How it Works" outline variant="secondary" />
          <h4 className="text-[30px] lg:text-[80px] font-medium leading-[40px] lg:leading-[94px]">Plasma Unveiled: <br /> Understanding the Science Behind Jett Plasma Pen Medical</h4>
        </div>
        <div className="flex justify-start">
          <p className="text-[24px] lg:text-[30px] leading-[34px] lg:leading-[40px] lg:max-w-[710px]">Plasma is one of the four fundamental states of matter, the others being solid, liquid, and gas.</p>
        </div>
      </motion.div>

      <div 
        // initial={{ y: 20 }}
        // whileInView={{  y: 0 }}
        // transition={{
        //   duration: ".5",
        //   delay: .05
        // }}
        className="flex  flex-col lg:flex-row items-center gap-[40px] overflow-hidden"
      >
          <div className="w-full relative lg:w-[420px] h-[162px] flex items-end justify-center rounded-full overflow-hidden bg-white">
              <motion.img style={{ y: imgTransform1 }} src="/products/jett-plasma-dermatology-applicators.png" className="mix-blend-darken h-full rounded-full" />
          </div>
          <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] lg:font-light flex-1">
            The Jett Plasma Pen Medical contains interchangeable metal heads that, when brought close to the skin, react with atmospheric gases (primarily nitrogen and oxygen) between the metal head and the skin. This interaction is facilitated by DC voltage that ionizes the atmospheric gases, creating plasma.  
          </p>
      </div>
      
      <motion.div 
        initial={{ y: 20 }}
        whileInView={{  y: 0 }}
        transition={{
          duration: ".5",
          delay: .05
        }}
        className="flex flex-col lg:flex-row-reverse items-center gap-[40px] overflow-hidden"
      >
          <div className="w-full lg:w-[420px] h-[162px] flex items-center justify-center rounded-full overflow-hidden bg-white">
              <motion.img  style={{ scale: imgTransform2 }} src="/products/product-18.png" className="w-full  h-full object-cover" />
          </div>
          <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] lg:font-light flex-1">
            The device generates a tiny plasma arc. When the pen is approximately 2 mm away from the skin, this arc discharges onto the skin's surface. The plasma arc delivers focused thermal energy and micro-discharges to the skin. This energy causes a controlled superficial burn or micro-ablation to the epidermis (the outer skin layer).  
          </p>
      </motion.div>

      <motion.div 
        initial={{ y: 20 }}
        whileInView={{  y: 0 }}
        transition={{
          duration: ".5",
          delay: .05
        }} 
        className="flex flex-col lg:flex-row items-center gap-[40px]"
      >
          <div className="w-full lg:w-[420px] h-[162px] flex items-center justify-center rounded-full overflow-hidden bg-white">
              <motion.img style={{ scale: imgTransform3 }} src="/products/product-19.png" className="object-cover w-full h-full" />
          </div>
          <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] lg:font-light flex-1">
            The high energy and heat of the plasma arc cause the targeted skin tissue to sublimate, meaning it turns directly from a solid to a gas without passing through a liquid phase. This process results in immediate tissue tightening. The thermal disruption, or micro-injuries caused by the plasma arc, stimulate the skin's natural healing response. This includes the production of new collagen and elastin fibers, leading to skin tightening and improvement in skin texture and tone over time.  
          </p>
      </motion.div>

      <motion.div 
        initial={{ y: 20 }}
        whileInView={{  y: 0 }}
        transition={{
          duration: ".5",
          delay: .05
        }}
        className="flex flex-col lg:flex-row-reverse items-center gap-[40px]"
      >
          <div className="relative w-full lg:w-[420px] h-[162px] flex items-center justify-center rounded-full overflow-hidden bg-white">
              <motion.img style={{ scale: imgTransform3 }} src="/products/product-20.png" className="object-cover w-full h-full" />
          </div>
          <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] lg:font-light flex-1">
            The Jett Plasma Lift Medical allows for precise targeting of specific skin areas, enabling treatments for fine lines, wrinkles, scarring, and sagging skin, particularly in areas where traditional treatments might be challenging, like around the eyes (non-surgical blepharoplasty).  
          </p>
      </motion.div>

      <motion.div 
        initial={{ y: 20 }}
        whileInView={{  y: 0 }}
        transition={{
          duration: ".5",
          delay: .05
        }} 
        className="flex flex-col lg:flex-row items-center gap-[40px] mt-[60px] lg:mt-0 overflow-hidden lg:overflow-visible"
      >
          <div className="absolute lg:relative -left-[215px] lg:left-0 flex justify-center rounded-full">
              <div className="relative w-[590px] h-[360px] rounded-full overflow-hidden z-[3] bg-white outline-none">
                <img src="/products/product-21a.png" className="w-[590px] h-[360px] relative z-[3]" />
              </div>
              <img src="/products/product-21b.png" className="absolute -top-[65px] ml-[20px] z-[1]" />
          </div>
          <div className="pt-[384px] lg:pt-0 text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px] lg:font-light flex-1">
            Imagine being able to offer your patients a wide range of eye care treatments with just one device, with no consumables and at a fraction of the cost of typical dry eye treatment devices.  From skin tightening and rejuvenation to effective MGD and dry eye treatments, the Jett Plasma Lift Medical is the ultimate solution for all your eye care needs. Its versatility and effectiveness make it the go-to choice for eye care professionals who demand nothing but the best for their patients.
          </div>
      </motion.div>
    </Container>

    <div id="pattern-1" className="absolute top-0 right-0 z-[1]">
      <img src="/layouts/pattern-03.svg" alt="pattern-03" className="w-[169px] lg:w-[403px] h-[166px] lg:h-[397px]" />
    </div>
  </div>
  )
}

export default SectionFive