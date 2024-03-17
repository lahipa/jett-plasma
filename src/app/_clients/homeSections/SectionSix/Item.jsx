import React from "react";
import { motion, useAnimation, useTransform, useSpring, useScroll} from 'framer-motion';

function Item({ data, index, scrollYProgress }) {

//   const opacity = useTransform(scrollYProgress, [1, 0], [1, 0]);
  const x = useTransform(scrollYProgress, data.x.input, data.x.output);
  const y = useTransform(scrollYProgress, data.y.input, data.y.output);

  return (
    <motion.div
      style={{
        x, y
      }}
      className="relative px-[20px] py-[16px] max-w-[400px] bg-black rounded-[25px]"
    >
      <div className="flex items-start gap-[8px]">
        <div className="w-[6px] h-[6px] rounded-full bg-white mt-[12px]" />
        <p className="leading-[28px] text-white flex-1">{data.text}</p>
      </div>
    </motion.div>
  );
}

export default Item;
