import React from "react";
import { SquarePlaceholder, CirclePlaceholder } from "@/app/_components/base";
import Container from "@/app/_components/container";

const StudiesLoading = () => {
  return (
    <>
      <div className="h-[70px] lg:hidden" />
      <section className="relative pt-[50px] lg:pt-[150px] pb-[50px]">
        <Container className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[100px]">
            <div className="relative w-full lg:w-[450px] h-[191px] lg:h-[240px] mix-blend-darken">
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
                {[...Array(6)].map((_, x) => {
                    return (
                        <div key={x} className="flex flex-col gap-[22px]">
                            <SquarePlaceholder width="100%" height={300} />
                            <div className="flex-1 flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <SquarePlaceholder width={200} height={20} />
                                    <SquarePlaceholder width="100%" height={20} />
                                    <SquarePlaceholder width={150} height={20} />
                                </div>

                                <SquarePlaceholder width={150} height={50} />
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

export default StudiesLoading;
