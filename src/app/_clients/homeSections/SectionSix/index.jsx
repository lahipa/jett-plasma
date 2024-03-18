"use client"
import Container from '@/app/_components/container';
import { useEffect, useRef } from 'react';
import { motion, useAnimation, useTransform, useSpring, useScroll} from 'framer-motion';
import Item from './Item';

const SectionSix = ({ jettPlasmaPsycologyEffect }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  })

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section ref={ref} className="relative pt-[80px] lg:pt-[150px] pb-[0]" >
      <Container className="flex flex-col gap-[30px] lg:gap-[80px] overflow-hidden lg:overflow-visible">
        <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px] lg:text-center">Physiological and Therapeutic <br /> Effects of Jett Plasma Pen</h4>
        <div className="flex flex-col lg:flex-row flex-wrap lg:items-end lg:justify-center gap-[10px] lg:gap-[20px]">
          {jettPlasmaPsycologyEffect.map((effect, x) => (
            <Item
              key={x}
              data={effect}
              index={x}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        <div id="pattern-1" className="absolute -top-[80px] lg:-top-[150px] right-[16px] lg:-right-[20px] z-[1]">
          <img src="/layouts/pattern-04.svg" alt="pattern-04" className="w-[95px] lg:w-[354px] h-[102px] lg:h-[380px]" />
        </div>
      </Container>
    </section>
  );
};

export default SectionSix;
