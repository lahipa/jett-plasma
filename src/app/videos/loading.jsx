import React from "react";
import { SquarePlaceholder, CirclePlaceholder } from "@/app/_components/base";
import Container from "@/app/_components/container";

const VideosLoading = () => {
  return (
    <>
      <div className="h-[70px] lg:hidden" />
      <section className="relative py-[50px]">
        <Container className="flex flex-col lg:flex-row-reverse lg:items-end gap-[50px] lg:gap-[80px]">
            <div className="relative w-full md:w-[454px] lg:w-[769px] h-[246px] md:h-[314px] lg:h-[536px] rounded-[20px] overflow-hidden">
              <SquarePlaceholder width="100%" height="100%" />
            </div>

            <div className="flex-1 relative flex flex-col gap-[14px]">
                <SquarePlaceholder width={150} height={30} />
                <SquarePlaceholder width="100%" height={20} />
                <SquarePlaceholder width={150} height={20} />
            </div>
        </Container>
    </section>

    <section className="relative pt-[100px] pb-[150px]">
        <Container className="flex flex-col gap-[50px] lg:gap-[80px]">
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-x-[50px] gap-y-[50px]">
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
        </Container>
    </section>
    </>
  );
};

export default VideosLoading;
