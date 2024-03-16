import React from 'react'
import Container from '@/app/_components/container';
import { CardTestimony } from '@/app/_components/cards';
import { ClientProvider, CtaLayoutContact } from "@/app/_clients";

// data
import { TestimonialList } from './_clients';

const Testimonials = () => {
  return (
    <ClientProvider>
      <section className="relative py-[100px]">
        <Container className="flex flex-col lg:flex-row lg:items-stretch gap-[26px] lg:gap-[60px]">
          <div className="w-[360px] flex items-start mt-[200px] gap-[26px]">
            <div className='relative flex flex-col gap-[26px]'>
              <h4 className="text-[20px] lg:text-[40px] font-medium leading-[30px] lg:leading-[54px]">
                What <b>People</b> Say, <b>About</b> Us
              </h4>
              <p className="">Jett Plasma Lift Medical is the ultimate solution for all your eye care needs. Its versatility and effectiveness make it the go-to choice for eye care professionals who demand nothing but the best for their patients.</p>
            </div>
          </div>

          <TestimonialList />
        </Container>

        <div id="pattern-1" className="absolute top-0 lg:top-[80px] left-0 z-[1]">
          <img src="/layouts/pattern-05.svg" alt="pattern-05" className="w-[198px] lg:w-[437px] h-[146px] lg:h-[320px]" />
        </div>
      </section>

      {/* <section className="relative py-[80px] bg-black rounded-[40px] lg:rounded-[80px]">
          <Container className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
              <h4 className="text-[30px] lg:text-[50px] text-center lg:text-left font-medium text-white leading-[40px] lg:leading-[64px] max-w-[846px]">
                  Optimize Your Performance with Jett Plasma - The Latest Solution for Innovative Medical Procedures
              </h4>

              <CtaLayoutContact params={{ route: "/goto" }} />
          </Container>

          <div id="pattern-1" className="hidden lg:block absolute -top-[280px] left-0 z-[1]">
              <img src="/layouts/pattern-07.svg" alt="pattern-07" />
          </div>
      </section> */}
    </ClientProvider>
  )
}

export default Testimonials