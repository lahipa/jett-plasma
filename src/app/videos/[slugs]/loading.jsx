import React from "react";
import { SquarePlaceholder, CirclePlaceholder } from "@/app/_components/base";
import Container from "@/app/_components/container";

const VideosDetailLoading = () => {
  return (
    <>
        <div className="h-[70px] lg:hidden" />
        <section className="relative py-[50px]">
            <div className="relative w-full lg:max-w-[1024px] mx-auto px-[16px] flex flex-col gap-[10px]">
                <SquarePlaceholder width="100%" height={20} />
                <SquarePlaceholder width={150} height={20} />
            </div>
        </section>

        <section className="relative py-[50px]">
            <div className="relative w-full lg:max-w-[1024px] mx-auto px-[16px] flex flex-col gap-[50px] lg:gap-[80px]">
                {[...Array(5)].map((_, x) => {
                    return (
                        <div key={x} className="flex-1 flex flex-col gap-[22px]">
                            <div className="w-full h-[218px] lg:h-[232px] relative rounded-[20px] overflow-hidden">
                                <SquarePlaceholder width="100%" height="100%" />
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <SquarePlaceholder width="100%" height={20} />
                                <SquarePlaceholder width={150} height={20} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    </>
  );
};

export default VideosDetailLoading;
