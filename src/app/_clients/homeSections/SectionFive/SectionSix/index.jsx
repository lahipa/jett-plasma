"use client"
import Container from '@/app/_components/container';
import { motion, useAnimation, useTransform, useSpring, useScroll} from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SectionSix = ({ jettPlasmaPsycologyEffect }) => {
  const { ref, inView } = useInView();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  })

  const controls = useAnimation();


  const elementB = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]); 


  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section ref={ref} className="relative pt-[80px] lg:pt-[150px] pb-[0]" >
      <Container className="flex flex-col gap-[30px] lg:gap-[80px]">
        <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px] lg:text-center">Physiological and Therapeutic <br /> Effects of Jett Plasma Pen</h4>
        <div className="flex flex-col lg:flex-row flex-wrap lg:items-end lg:justify-center gap-[10px] lg:gap-[20px]">
          {jettPlasmaPsycologyEffect.map((effect, x) => (
            <motion.div
              key={x.toString()}
              // ref={ref}
              initial={{ opacity: 0, y: -20, x: (x % 2 === 0) ? -20 : 20 }} // Jika index genap, elemen akan mulai dari kiri (-20), jika ganjil, elemen akan mulai dari kanan (20)
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ duration: 0.5, delay: x * 0.1 }}
              className="relative px-[20px] py-[16px] max-w-[400px] bg-black rounded-[25px]"
            >
              <div className="flex items-start gap-[8px]">
                <div className="w-[6px] h-[6px] rounded-full bg-white mt-[12px]" />
                <p className="leading-[28px] text-white flex-1">{effect}</p>
              </div>
            </motion.div>
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
