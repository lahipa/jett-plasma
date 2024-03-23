"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import cx from "classnames";
import { motion, useMotionTemplate, useTransform, useSpring } from "framer-motion";
import { Icon } from "@/app/_components/base";

const MultipleBeforeAfter = (props) => {
    const { sliders, pagination = ["Before", "After"] } = props;

    const [page, setPage] = useState("Before");
    const [isDragging, setIsDragging] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(false);

    const handleMove = (e) => {
        if (!isDragging) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = Math.max(0, Math.min(event.clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));

        setSliderPosition(percent);
    };

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
                    const clipPath = indexing === 5 ? `inset(0 ${100 - 10}% 0 0)` : null;

                    return (
                        <div
                            key={x.toString()}
                            className={cx("absolute top-0 bottom-0 right-0 h-[500px] aspect-[70/45] border-x border-x-white")}
                            style={{
                                zIndex: indexing,
                                // clipPath: clipPath,
                                width: indexing === 5 ? "20%" : "100%"

                            }}
                        >
                            <div className="w-[766px] h-full relative right-0">
                                <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                                    <span className="text-white text-[14px] leading-[20px] font-medium">{slide.title}</span>
                                </div>
                                <img
                                    alt=""
                                    src={slide.source}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
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
                    <div className="h-[380px] flex flex-col justify-between">
                        
                        {pagination.map((item, x) => {
                            return (
                                <div key={x.toString()} className="flex items-center gap-[10px]">
                                    {item === page && <Icon icon="IconPlayerPlayFilled" size={24} />}
                                    <button
                                        type="button"
                                        className={cx("outline-none focus:outline-none", {
                                            "font-medium": item === page,
                                            "opacity-50 ml-[34px]": item !== page 
                                        })}
                                    >
                                        {item}
                                    </button>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultipleBeforeAfter;
