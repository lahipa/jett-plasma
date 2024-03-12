"use client";

import React, { useRef, Fragment } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/app/@components/container";
import { Badge, Icon, Button } from "@/app/@components/base";

const HomeSectionOne = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const elementA = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const elementB = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section ref={ref} id="hero" className="relative h-[870px] -mt-[120px] pt-[120px]">
      <Container className="flex flex-col h-full">
        <div id="pattern-1" className="absolute -top-[120px] -right-[50px] z-[41]">
          {/* img should be replace using image component */}
          <img src="/layouts/pattern-01.svg" alt="pattern-01" />
        </div>
        <motion.div className="flex flex-col gap-[40px] pt-[15px] max-w-[900px]" style={{ y: elementB }}>
          <div id="leading-text" className="flex flex-col gap-[14px]">
            <h4 className="text-[70px] font-medium leading-[88px]">Eyes, Meet Jett Plasma Pen</h4>
            <p className="text-[30px]">The first and only plasma pen specifically designed for eye care procedures.</p>
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
        <motion.div id="leading-product" className="relative lg:absolute w-full lg:w-fit lg:top-[110px] lg:right-0" style={{ y: elementA }}>
          {/* img should be replace using image component */}
          <img src="/products/product-1.png" alt="product-1" />
        </motion.div>
        <div id="leading-product-description" className="relative lg:absolute flex flex-col lg:flex-row items-stretch lg:justify-end lg:bottom-[120px] lg:left-0 lg:right-0 gap-[30px]">
          <div className="flex items-end gap-[30px]">
            {/* img should be replace using image component */}
            <img src="/brand/certificate-health-canada-1.png" alt="certificate-health-canada-1" className="mix-blend-darken" />

            {/* img should be replace using image component */}
            <img src="/brand/ce-logo.png" alt="ce-logo" className="mix-blend-darken" />
          </div>
          <div className="relative max-w-[610px]">
            <p className="text-[18px]">A groundbreaking treatment for MGD, Blepharitis, Demodex, Chalazion, Trichiasis, Entropion, Ectropion, and Xanthelasma. Discover a breakthrough method to perform non-surgical Blepharoplasty, reduce fine lines and wrinkles, and remove benign vascular and skin lesions.</p>
          </div>
        </div>
      </Container>

      <div id="pattern-1" className="absolute -bottom-[150px] left-0 z-[1]">
        {/* img should be replace using image component */}
        <img src="/layouts/pattern-02.svg" alt="pattern-02" />
      </div>
    </section>
  );
};

export default HomeSectionOne;
