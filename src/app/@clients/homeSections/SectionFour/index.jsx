"use client";

import React, { useRef, Fragment } from "react";
import Container from "@/app/@components/container";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Icon } from "@/app/@components/base";
import { jettPlasmaPenResult } from '@/app/@data';

const HomeSectionFour = () => {

    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"],
    });

    const imageYTransform = useTransform(scrollYProgress, [0, 1], [100, -100])
    const titleYTransform = useTransform(scrollYProgress, [0, 1], [100, -100])
    const descYTransform = useTransform(scrollYProgress, [0, 1], [100, -100])

    return (
        <section ref={ref} className="relative pt-[50px] pb-[150px]">
            <Container className="flex flex-col gap-[100px]">
                <motion.div style={{y: titleYTransform}}>
                    <h4 className="text-[50px] font-medium leading-[64px]">Revolutionizing Eye Care: The Unmatched Versatility of the Jett Plasma Pen</h4>
                </motion.div>
                
                <div className="flex flex-col lg:flex-row items-stretch gap-[20px]">
                    <div className="relative flex-1">
                    <img src="/products/product-15.png" alt="Product 15" className="w-full h-[480px] relative z-[2]" />
                    <motion.div style={{y: imageYTransform}} className="absolute left-0 top-0 bottom-0 h-full w-[calc(100%-80px)] bg-black rounded-[30px] z-[1]" />
                    </div>
                    <motion.div style={{y: descYTransform}} className="flex items-center flex-1">
                        <p className="leading-[28px]">The Jett Plasma Pen's ability to perform both ablative and non-ablative procedures sets it apart from other plasma pens. Ablative treatments remove the outer layer of skin, stimulating the body's natural healing process and promoting collagen production. Non-ablative treatments, on the other hand, work beneath the skin's surface to tighten and rejuvenate the skin without causing damage to the outer layer. This versatility allows for a wide range of eye care procedures to be performed, all with minimal downtime and discomfort for the patient.</p>
                    </motion.div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-stretch gap-[20px]">
                    <div className="relative flex-1">
                    <img src="/products/product-16.png" alt="Product 16" className="w-full h-[480px] relative z-[2]" />
                    <div className="absolute right-0 top-0 bottom-0 h-full w-[calc(100%-80px)] bg-black rounded-[30px] z-[1]" />
                    </div>
                    <div className="flex items-center flex-1">
                    <div className="flex flex-col gap-[20px]">
                        <p className="leading-[28px]">Jett Plasma Pen Medical is unique in that it can effectively treat MGD and Blepharitis. The patented non-ablative metal heads use DC micro discharges and pulsed DC microcurrents resulting in:</p>
                        <div className="flex flex-col gap-[20px]">
                        {jettPlasmaPenResult.map((list, x) => {
                            return (
                            <div key={x.toString()} className="flex gap-[10px]">
                                <Icon icon={list.icon} size={30} />
                                <span className="flex-1">{list.item}</span>
                            </div>
                            );
                        })}
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default HomeSectionFour;