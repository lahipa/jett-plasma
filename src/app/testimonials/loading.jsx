import React from "react";
import { SquarePlaceholder, CirclePlaceholder } from "@/app/_components/base";
import Container from "@/app/_components/container";

const TestimonialsLoading = () => {
  return (
    <>
      <div className="h-[70px] lg:hidden" />
      <section className="relative py-[100px]">
        <Container className="flex flex-col lg:flex-row lg:items-stretch gap-[26px] lg:gap-[60px]">
          <div className="w-[360px] flex items-start mt-[200px] gap-[26px]">
            <div className='relative flex flex-col gap-[26px]'>
              <SquarePlaceholder width={300} height={20} />
              <SquarePlaceholder width="100%" height={20} />
              <SquarePlaceholder width={100} height={20} />
            </div>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[26px] items-baseline">
            {[...Array(3)].map((_, x) => {
                return (
                    <div 
                        key={x}
                        className="grid gap-[26px]"
                    >
                        {[...Array(3)].map((_, i) => {
                            return (
                              <SquarePlaceholder key={i} width="100%" height={300} />
                            );
                        })}
                    </div>
                );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default TestimonialsLoading;
