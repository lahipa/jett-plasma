
"use client";

import React, { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from "framer-motion";
import Markdown from 'react-markdown';
import Remark from "remark-gfm";
import { Icon } from "@/app/_components/base"; 

const CardQuestion = ({ i, expanded, setExpanded, title, answer }) => {
  const isOpen = i === expanded;

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  })

  const textTransform = useTransform(scrollYProgressSpring, [0, 1], [100, 0])
  return (
    <div className="flex flex-col pb-[12px] lg:pb-[22px] bg-background">
      <motion.hr style={{ y: textTransform }} className="border border-dark-10 w-full " />

      <motion.figure
        ref={ref}
        initial={false}
        className="pt-[12px] lg:pt-[22px] flex flex-row justify-between cursor-pointer"
        onClick={() => setExpanded(isOpen ? false : i)}
      >
        <motion.p style={{ y: textTransform }} className="font-semibold text-dark-10">{title}</motion.p>
        <motion.button style={{ y: textTransform }} className="w-[32px] h-[32px]">
          <Icon icon="IconChevronDown" />
        </motion.button>
      </motion.figure>

      {/* <motion.hr style={{ y: textTransform }} className="border border-dark-10 w-full " /> */}

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="relative pt-[12px] lg:pt-[22px] bg-background">
              <Markdown
                  className="relative w-full text-inherit !max-w-full prose text-[16px]"
                  remarkPlugins={[Remark]}
              >
                  {answer}
              </Markdown>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardQuestion;
