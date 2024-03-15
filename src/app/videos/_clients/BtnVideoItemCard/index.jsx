"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IconButton } from "@/app/_components/base";

const BtnVideoItemCard = ({ slug, duration }) => {
    const [open, setOpen] = useState(false);

    const router = useRouter();

    const onClickOpen = () => {
        router.replace(`/videos/${slug}`, { scroll: false });
    };

    return (
        <div className="absolute bottom-0 w-full p-[16px] flex flex-row items-center gap-[10px]">
            <div className="flex items-center lg:gap-[14px] lg:pl-[6px] lg:pr-[24px] lg:py-[6px] lg:rounded-full text-white lg:bg-[#1C1E22]/20 lg:mr-auto">
                <IconButton
                    variant="white"
                    icon="IconPlayerPlayFilled"
                    className="bg-[#1C1E22]/20"
                    onClick={onClickOpen}
                    outline
                />
                <span className="hidden lg:block text-[16px] leading-[24px]">
                    {duration}
                </span>
            </div>

            <IconButton
                variant="white"
                icon="IconDownload"
                className="bg-[#1C1E22]/20"
                outline
            />
        </div>
    );
}

export default BtnVideoItemCard;
