import React from "react";
import { SquarePlaceholder, CirclePlaceholder } from "@/app/_components/base";
import Container from "@/app/_components/container";

const ContactLoading = () => {
  return (
    <>
      <div className="h-[70px] lg:hidden" />
      <section className="relative pt-[40px] pb-[150px]">
        <Container className="flex flex-col lg:flex-row-reverse lg:items-stretch gap-[45px] lg:gap-[90px]">
          <div className="w-[200px] h-[200px] md:w-[360px] md:h-[360px] lg:w-[550px] lg:h-[550px] hidden md:flex items-center justify-center">
            <CirclePlaceholder size="100%" />
          </div>
          <div className="flex flex-col flex-1 gap-[30px]">
            <div className="relative flex flex-col items-start gap-[14px]">
              <SquarePlaceholder width={100} height={20} />
              <SquarePlaceholder width={300} height={20} />
              <SquarePlaceholder width="100%" height={20} />
              <SquarePlaceholder width={100} height={20} />
            </div>
            <div className="relative flex flex-col gap-[24px]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[24px]">
                <SquarePlaceholder width="100%" height={50} />
                <SquarePlaceholder width="100%" height={50} />
              </div>
              <SquarePlaceholder width="100%" height={50} />
              <SquarePlaceholder width="100%" height={50} />
              <SquarePlaceholder width="100%" height={200} />
            </div>
            <SquarePlaceholder width={150} height={50} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default ContactLoading;
