"use client";

import { useEffect, useState, Fragment } from "react";
import Image from "next/image";
import cx from "classnames";
import { motion, useMotionTemplate, useTransform, transform, AnimatePresence, useMotionValue } from "framer-motion";
import { Icon } from "@/app/_components/base";

const Slider = ({ slide, index, currentIndex, indexing }) => {

    const active = index === currentIndex
    const next = index === (currentIndex + 1)
    const increase = index > currentIndex
    const decrease = index < currentIndex

    const zIndexNext = next ? indexing * (currentIndex + 2) : indexing

    const clipPathInitial = active ? {
        clipPath: 'inset(0 100% 0 0%)'
    } : decrease ? {
        clipPath: 'inset(0 0% 0 100%)'
    } : increase ? {
        clipPath: 'inset(0 0% 0 100%)'
    } : {
        clipPath: 'inset(0 0% 0 100%)'
    };

    const clipPathAnimate = active ? {
        clipPath: 'inset(0 0 0 0)' 
    } : decrease ? {
        clipPath: 'inset(0 0% 0 100%)'
    } : increase ? {
        clipPath: 'inset(0 100% 0 0%)'
    } : {
        clipPath: 'inset(0 % 0 100%)'
    };

    const clipPathExit = active ? {
        clipPath: 'inset(0 0% 0 0)' 
    } : decrease ? {
        clipPath: 'inset(0 0% 0 100%)'
    } : increase ? {
        clipPath: 'inset(0 100% 0 0%)'
    } : {
        clipPath: 'inset(0 0% 0 100%)'
    };


    const handleButtonClick = async (item, index) => {
        if (item !== page) {
            setPage(item);
            setCurrentIndex(index);
            // await controls.start({ y: 0, transition: { duration: 0.9 } });
        }
    };


    return (
        <AnimatePresence
            key={slide.title}
        >
            <motion.div
                key={slide.title}
                className={cx("absolute top-0 bottom-0 right-0 h-[500px] aspect-[70/45] border-x border-x-white")}
                style={{
                    width: "100%"
                }}
                initial={{
                    ...clipPathInitial,
                    transition: { duration: .9 },
                    zIndex: active ? indexing * (currentIndex + 3) : zIndexNext
                }}
                animate={{
                    ...clipPathAnimate,
                    transition: { duration: .9, },
                    zIndex: active ? indexing * (currentIndex + 3) : zIndexNext
                }}
                exit={{
                    ...clipPathExit,
                    transition: { duration: .9 },
                    zIndex: active ? indexing * (currentIndex + 3) : zIndexNext
                }}
            >
                <div className="w-full h-full relative right-0">
                    <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                        <span className="text-white text-[14px] leading-[20px] font-medium">{slide.title}</span>
                    </div>
                    <img
                        alt=""
                        src={slide.source}
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

const MultipleBeforeAfter = (props) => {
    const { sliders, pagination = ["Before", "After"] } = props;

    const [page, setPage] = useState("Before");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(false);

    const handleMove = (e) => {
        if (!isDragging) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

    // const yOffset = 380;
    // const variants = {
    //     enter: direction => ({
    //         y: direction > 0 ? yOffset : -yOffset,
    //         opacity: 0
    //     }),
    //     active: {
    //         y: 0,
    //         opacity: 1,
    //         transition: { delay: 0.2 }
    //     },
    //     exit: direction => ({
    //         y: direction > 0 ? -yOffset : yOffset,
    //         opacity: 0
    //     })
    // };

    return (

        <div className="flex items-stretch gap-[90px]">
            <div className="relative w-[766px] h-[500px] aspect-[70/45] overflow-hidden rounded-[20px]">
                {/* <div className="w-full h-full relative">
                        <div className="absolute px-[14px] h-[32px] top-[10px] right-[10px] bg-[#1C1E22]/50 rounded-full">
                            <span className="text-white text-[14px] leading-[20px] font-medium">After</span>
                        </div>
                        <img
                            alt=""
                            src="/products/l-2-months-after-2.png"
                            className="w-full h-full object-cover"
                        />
                    </div> */}

                {sliders.map((slide, x) => {
                    const indexing = sliders.length - x;

                    return (
                        <Slider
                            slide={slide}
                            key={x}
                            index={x}
                            indexing={indexing}
                            currentIndex={currentIndex}
                        />
                    );
                })}

                {/* <div
                        className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize"
                        style={{ left: `calc(${20}% - 1px)` }}
                    /> */}
            </div>
            <div className="flex-1 flex items-center">
                <div className="flex items-stretch gap-[8px]">
                    <div className="h-[380px] flex flex-col justify-between">
                        {[...Array(66)].map((_, i) => {
                            return <div key={i.toString()} className="w-[10px] h-[1px] bg-[#1C1E22] rounded-full" />
                        })}
                    </div>
                    <div className="h-[380px] relative flex flex-col justify-between">

                        {pagination.map((item, x) => {
                            return (
                                <Fragment key={x.toString()} >
                                    <div className="flex items-center gap-[10px]">
                                        {item === page && (
                                            <motion.div
                                                initial={{ y: -20, opacity: 0 }} // Initial position and opacity
                                                animate={{ y: item === page ? 0 : -20, opacity: 1 }} // Animate position and opacity when active
                                                transition={{ duration: 0.9 }}
                                            >
                                                <Icon icon={"IconPlayerPlayFilled"} size={24} />
                                            </motion.div>
                                        )}
                                        <button
                                            type="button"
                                            className={cx("outline-none focus:outline-none", {
                                                "font-medium": item === page,
                                                "opacity-50 ml-[34px]": item !== page
                                            })}
                                            onClick={() => {
                                                setPage(item)
                                                setCurrentIndex(x)
                                            }}
                                        >
                                            {item}
                                        </button>
                                    </div>
                                </Fragment>
                            );
                        })}

                        {/* <AnimatePresence
                                key={currentIndex.toString()}
                                initial={false}
                                custom={currentIndex}
                            >
                                <motion.div 
                                    className="absolute left-0 top-0"
                                    variants={variants}
                                    initial="enter"
                                    animate="active"
                                    exit="exit"
                                    custom={currentIndex}
                                >
                                    <Icon icon="IconPlayerPlayFilled" size={24} />
                                </motion.div>
                            </AnimatePresence> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MultipleBeforeAfter;