"use client";

import { useState } from "react";
import Image from "next/image";
import cx from "classnames";
import { motion, useMotionTemplate, useTransform, useSpring } from "framer-motion";
import { Icon } from "@/app/_components/base";

const BeforeAfterImage = ({scrollYProgress}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const handleMove = (e) => {
        if (!isDragging) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    const handleMouseDown = () => setIsDragging(true);

    const handleMouseUp = () => setIsDragging(false);

    const elementA = useTransform(scrollYProgress, [0, 1], [100, 30]);
    const elementB = useTransform(scrollYProgress, [0, 1], [0, 70]);

    const elementACalc = useMotionTemplate`calc(${elementA}% - 1px)`
    const elementBCalc = useMotionTemplate`inset(0 ${elementB}% 0 0)`

    return (
        <div className="w-full relative" onMouseUp={handleMouseUp}>
            <div
                className="relative w-full max-w-[700px] max-h-[400px] aspect-[70/45] m-auto overflow-hidden select-none rounded-[20px]"
                onMouseMove={handleMove}
                onMouseDown={handleMouseDown}
            >
                <div className="w-full h-full relative">
                    <div className="absolute px-[14px] h-[32px] top-[10px] right-[10px] bg-[#1C1E22]/50 rounded-full">
                        <span className="text-white text-[14px] leading-[20px] font-medium">After</span>
                    </div>
                    <img
                        alt=""
                        src="/products/l-2-months-after-2.png"
                        className="w-full h-full object-cover"
                    />
                </div>

                <motion.div
                    className="absolute top-0 left-0 right-0 w-full max-w-[700px] max-h-[400px] aspect-[70/45] m-auto overflow-hidden select-none rounded-[20px]"
                    style={{ clipPath: elementBCalc }}
                >
                    <div className="w-full h-full relative">
                        <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                            <span className="text-white text-[14px] leading-[20px] font-medium">Before</span>
                        </div>
                        <img
                            alt=""
                            src="/products/l-before-2.png"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
                <motion.div
                    className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize"
                    style={{ left: elementACalc }}
                >
                    <div className={cx("absolute rounded-full w-[50px] h-[50px] left-[calc(50%-25px)] top-[calc(50%-25px)] border-2 border-white", {
                        "cursor-grab": !isDragging,
                        "cursor-grabbing": isDragging
                    })}>
                        <div className="w-full h-full relative flex items-center">
                            <Icon icon="IconChevronLeft" color="text-white" />
                            <Icon icon="IconChevronRight" color="text-white" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default BeforeAfterImage;
