"use client";

import React, { useRef, Fragment } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/app/_components/container";
import { Badge, Icon, Button } from "@/app/_components/base";

const HomeSectionOne = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const elementA = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const elementB = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section ref={ref} id="hero" className="relative h-[960px] lg:h-[870px] lg:-mt-[120px] lg:pt-[120px] overflow-hidden lg:overflow-visible">
      <Container className="flex flex-col h-full">
        <div id="pattern-1" className="absolute top-[210px] lg:-top-[120px] -right-[10px] lg:-right-[50px] z-[20]">
          <img src="/layouts/pattern-01.svg" alt="pattern-01" className="w-[175px] lg:w-[366px] h-[121px] lg:h-[253px]" />
        </div>
        
        <motion.div className="flex flex-col gap-[40px] pt-[15px] lg:max-w-[900px]" style={{ y: elementB }}>
          <div id="leading-text" className="flex flex-col gap-[14px]">
            <h4 className="text-[40px] lg:text-[70px] font-medium leading-[54px] lg:leading-[88px]">Eyes, Meet Jett Plasma Pen</h4>
            <p className="text-[24px] lg:text-[30px] leading-[34px] lg:leading-[40px]">The first and only plasma pen specifically designed for eye care procedures.</p>
          </div>

          <div className='flex'>
            <Button
                title="Explore Product"
                variant="primary"
                size="lg"
                onClick={() => console.log("/goto")}
            />
          </div>
        </motion.div>

        <motion.div id="leading-product" className="flex flex-col h-full mix-blend-darken relative" style={{ y: elementA }}>
          <div className="relative lg:absolute w-[588px] lg:w-[1004px] h-[224px] lg:h-[382px] -top-[30px] lg:-top-[180px] lg:right-0">
            {/* img should be replace using image component */}
            <img src="/products/product-1.png" alt="product-1" className="w-full h-full" />
          </div>

          <div className="relative mt-[20px] lg:mt-0 lg:absolute flex flex-col lg:flex-row items-stretch lg:justify-end lg:bottom-[130px] lg:left-0 lg:right-0 gap-[30px]">
            <div className="flex items-end gap-[30px]">
              {/* img should be replace using image component */}
              <img src="/brand/certificate-health-canada-1.png" alt="certificate-health-canada-1" className="w-[140px] lg:w-[232px] h-[36px] lg:h-[60px] !mix-blend-darken" />

              {/* img should be replace using image component */}
              <img src="/brand/ce-logo.png" alt="ce-logo" className="w-[51px] lg:w-[85px] h-[36px] lg:h-[60px] mix-blend-darken" />
            </div>
            <div className="relative max-w-[610px]">
              <p className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">A groundbreaking treatment for MGD, Blepharitis, Demodex, Chalazion, Trichiasis, Entropion, Ectropion, and Xanthelasma. Discover a breakthrough method to perform non-surgical Blepharoplasty, reduce fine lines and wrinkles, and remove benign vascular and skin lesions.</p>
            </div>
          </div>
        </motion.div>
      </Container>

      <div id="pattern-1" className="absolute -bottom-[55px] lg:-bottom-[150px] left-0 z-[1]">
        <img src="/layouts/pattern-02.svg" alt="pattern-02" className="w-[205px] lg:w-[571px] h-[154px] lg:h-[437px]" />
      </div>
    </section>
  );
};

export default HomeSectionOne;
