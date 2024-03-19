"use client"
import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Badge } from '@/app/_components/base';
import { CardQuestion } from '@/app/_components/cards';
import Container from '@/app/_components/container';
import { FaqList } from "@/app/_clients";
import { ClientProvider } from "@/app/_clients";

const SectionTen = ({ Question }) => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref.current,
    offset: ["start end", "end end"],
  });

  return (
    <section ref={ref} className="relative py-[80px] lg:py-[150px] h-full">
      <Container className="flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[100px]">
        <div className="w-full lg:w-[290px] flex flex-col items-start gap-[24px]">
          <div ><Badge title="QnA" outline /></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: ".5",
              delay: .05
            }}
          >
            <h4  className="text-[30px] lg:text-[50px] leading-[40px] lg:leading-[64px] font-medium">Quick answer to questions you may have</h4>
            <p className="leading-[28px]">
              Can’t find what you’re looking for? Contact us here: <br /> <a href="/" className="text-primary underline">info@jettplasmaeye.com</a>
            </p>
          </motion.div>

        </div>

        <ClientProvider>
          <FaqList />
        </ClientProvider>
      </Container>
    </section>
  )
}

export default SectionTen;
