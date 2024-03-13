import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "./@components/container";
import { Badge, Icon, Button } from "./@components/base";
import { CtaLayoutContact, SliderVideosHome, BeforeAfterImage, HomeSectionOne, HomeSectionTwo, HomeSectionThree } from "./@clients";
import CardQuestion from "./@components/card/CardQuestion";

// data
import { jettPlasmaPenResult, jettPlasmaPsycologyEffect, Question } from './@data';

export default function Home() {
  return (
    <>
      <HomeSectionOne />
    
      <HomeSectionTwo />
                
      <HomeSectionThree/>

      <section className="relative pt-[50px] pb-[150px]">
        <Container className="flex flex-col gap-[100px]">
          <h4 className="text-[50px] font-medium leading-[64px]">Revolutionizing Eye Care: The Unmatched Versatility of the Jett Plasma Pen</h4>
          
          <div className="flex flex-col lg:flex-row items-stretch gap-[20px]">
            <div className="relative flex-1">
              <img src="/products/product-15.png" alt="Product 15" className="w-full h-[480px] relative z-[2]" />
              <div className="absolute left-0 top-0 bottom-0 h-full w-[calc(100%-80px)] bg-black rounded-[30px] z-[1]" />
            </div>
            <div className="flex items-center flex-1">
              <p className="leading-[28px]">The Jett Plasma Pen's ability to perform both ablative and non-ablative procedures sets it apart from other plasma pens. Ablative treatments remove the outer layer of skin, stimulating the body's natural healing process and promoting collagen production. Non-ablative treatments, on the other hand, work beneath the skin's surface to tighten and rejuvenate the skin without causing damage to the outer layer. This versatility allows for a wide range of eye care procedures to be performed, all with minimal downtime and discomfort for the patient.</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-stretch gap-[20px]">
            <div className="relative flex-1">
              <img src="/products/product-16.png" alt="Product 16" className="w-full h-[480px] relative z-[2]" />
              <div className="absolute right-0 top-0 bottom-0 h-full w-[calc(100%-80px)] bg-black rounded-[30px] z-[1]" />
            </div>
            <div className="flex items-center flex-1">
              <div className="flex flex-col gap-[20px]">
                <p className="leading-[28px]">Jett Plasma Pen Medical is unique in that it can effectively treat MGD and Blepharitis. The patented non-ablative metal heads use DC micro discharges and pulsed DC microcurrents resulting in:</p>
                <div className="flex flex-col gap-[20px]">
                  {jettPlasmaPenResult.map((list, x) => {
                    return (
                      <div key={x.toString()} className="flex gap-[10px]">
                        <Icon icon={list.icon} size={30} />
                        <span className="flex-1">{list.item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-[150px] bg-primary text-white rounded-[80px]">
        <Container className="flex flex-col gap-[80px]">
          <div className="flex flex-col items-start gap-[30px]">
            <Badge title="How it Works" outline variant="secondary" />
            <h4 className="text-[30px] lg:text-[80px] font-medium leading-[40px] lg:leading-[94px]">Plasma Unveiled: <br /> Understanding the Science Behind Jett Plasma Pen Medical</h4>
          </div>
          <div className="flex justify-start">
            <p className="text-[30px] leading-[40px] max-w-[710px]">Plasma is one of the four fundamental states of matter, the others being solid, liquid, and gas.</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-[40px]">
              <div className="w-[420px] h-[162px] flex items-center justify-center rounded-full overflow-hidden bg-white">
                  <img src="/products/product-17.png" className="mix-blend-darken" />
              </div>
              <p className="leading-[28px] font-light flex-1">
                The Jett Plasma Pen Medical contains interchangeable metal heads that, when brought close to the skin, react with atmospheric gases (primarily nitrogen and oxygen) between the metal head and the skin. This interaction is facilitated by DC voltage that ionizes the atmospheric gases, creating plasma.  
              </p>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-[40px]">
              <div className="w-[420px] h-[162px] flex items-center justify-center rounded-full overflow-hidden bg-white">
                  <img src="/products/product-18.png" className="mix-blend-darken" />
              </div>
              <p className="leading-[28px] font-light flex-1">
                The device generates a tiny plasma arc. When the pen is approximately 2 mm away from the skin, this arc discharges onto the skin's surface. The plasma arc delivers focused thermal energy and micro-discharges to the skin. This energy causes a controlled superficial burn or micro-ablation to the epidermis (the outer skin layer).  
              </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-[40px]">
              <div className="w-[420px] h-[162px] flex items-center justify-center rounded-full overflow-hidden bg-white">
                  <img src="/products/product-19.png" className="mix-blend-darken" />
              </div>
              <p className="leading-[28px] font-light flex-1">
                The high energy and heat of the plasma arc cause the targeted skin tissue to sublimate, meaning it turns directly from a solid to a gas without passing through a liquid phase. This process results in immediate tissue tightening. The thermal disruption, or micro-injuries caused by the plasma arc, stimulate the skin's natural healing response. This includes the production of new collagen and elastin fibers, leading to skin tightening and improvement in skin texture and tone over time.  
              </p>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-[40px]">
              <div className="w-[420px] h-[162px] flex items-center justify-center rounded-full overflow-hidden bg-white">
                  <img src="/products/product-20.png" className="mix-blend-darken" />
              </div>
              <p className="leading-[28px] font-light flex-1">
                The Jett Plasma Lift Medical allows for precise targeting of specific skin areas, enabling treatments for fine lines, wrinkles, scarring, and sagging skin, particularly in areas where traditional treatments might be challenging, like around the eyes (non-surgical blepharoplasty).  
              </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-[40px]">
              <div className="relative flex justify-center rounded-full">
                  <div className="w-fit h-fit rounded-full overflow-hidden relative z-[3] bg-white outline-none">
                    <img src="/products/product-21a.png" className="w-[590px] h-[360px] relative z-[3]" />
                  </div>
                  <img src="/products/product-21b.png" className="absolute -top-[65px] ml-[20px] z-[1]" />
              </div>
              <p className="leading-[28px] font-light flex-1">
                Imagine being able to offer your patients a wide range of eye care treatments with just one device, with no consumables and at a fraction of the cost of typical dry eye treatment devices.  From skin tightening and rejuvenation to effective MGD and dry eye treatments, the Jett Plasma Lift Medical is the ultimate solution for all your eye care needs. Its versatility and effectiveness make it the go-to choice for eye care professionals who demand nothing but the best for their patients.
              </p>
          </div>
        </Container>

        <div id="pattern-1" className="absolute top-0 right-0 z-[1]">
          {/* img should be replace using image component */}
          <img src="/layouts/pattern-03.svg" alt="pattern-03" />
        </div>
      </section>

      <section className="relative pt-[150px] pb-[0]">
        <Container className="flex flex-col gap-[80px]">
          <h4 className="text-[50px] font-medium leading-[64px] text-center">Physiological and Therapeutic <br /> Effects of Jett Plasma Pen</h4>
          <div className="flex flex-col lg:flex-row flex-wrap lg:items-end lg:justify-center gap-[20px]">
            {jettPlasmaPsycologyEffect.map((effect, x) => {
              return (
                <div key={x.toString()} className="relative px-[20px] py-[16px] max-w-[400px] bg-black rounded-[25px]">
                  <div className="flex items-start gap-[8px]">
                      <div className="w-[6px] h-[6px] rounded-full bg-white mt-[12px]" />
                      <p className="leading-[28px] text-white flex-1">{effect}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div id="pattern-1" className="absolute -top-[150px] -right-[20px] z-[1]">
            {/* img should be replace using image component */}
            <img src="/layouts/pattern-04.svg" alt="pattern-04" />
          </div>
        </Container>
      </section>

      <section className="relative pt-[150px] pb-[300px]">
        <Container className="flex flex-col gap-[40px]">
          <h4 className="text-[50px] font-medium leading-[64px] text-center">Suitable for</h4>
          <div className="flex flex-col lg:flex-row items-end justify-center gap-[80px]">
            <div className="flex flex-col gap-[14px] max-w-[350px]">
              <Icon icon="AbiativeIcon" size={50} />
              <h4 className="text-[24px] leading-[34px] font-medium">Ablative Treatments</h4>
              <ul className="list-disc list-outside ml-[30px]">
                <li>Removal of deep and shallow wrinkles</li>
                <li>Removal of warts, pigmentations, fibromas, cuperosis, hemangiomas</li>
                <li>Scars correction</li>
                <li>Blepharoplasty</li>
                <li>Ectropion, Entropion, Xanthelasma</li>
                <li>Trichiasis, Distichiasis</li>
              </ul>
            </div>
            <div className="flex flex-col gap-[14px] max-w-[350px]">
              <Icon icon="NonAbiativeIcon" size={50} />
              <h4 className="text-[24px] leading-[34px] font-medium">Non-Ablative Treatments</h4>
              <ul className="list-disc list-outside ml-[30px]">
                <li>Face and body lifting</li>
                <li>Reduction of wrinkles</li>
                <li>Restoration of connective tissues</li>
                <li>Improvement of elasticity</li>
                <li>Blepharitis</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch gap-[50px]">
            <div className="flex flex-col gap-[14px] flex-1">
              <picture className="w-full h-[250px] flex items-center justify-center">
                <img src="/products/product-22.png" className="mix-blend-darken" />
              </picture>
              <div className="px-[20px] text-center">
                <span className="text-[20px] leading-[30px] font-medium">Applicators for JETT PLASMA LIFT MEDICAL</span>
              </div>
            </div>
            <div className="flex flex-col gap-[14px] flex-1">
              <picture className="w-full h-[250px] flex items-center justify-center">
                <img src="/products/product-23.png" className="mix-blend-darken" />
              </picture>
              <div className="px-[20px] text-center">
                <span className="text-[20px] leading-[30px] font-medium">Applicators for Plasma Pen</span>
              </div>
            </div>
            <div className="flex flex-col gap-[14px] flex-1">
              <picture className="w-full h-[250px] flex items-center justify-center">
                <img src="/products/product-24.png" className="mix-blend-darken" />
              </picture>
              <div className="px-[20px] text-center">
                <span className="text-[20px] leading-[30px] font-medium">Gold ophthalmology applicators</span>
              </div>
            </div>
          </div>
        </Container>

        <div id="pattern-1" className="absolute top-0 left-0 z-[1]">
          {/* img should be replace using image component */}
          <img src="/layouts/pattern-05.svg" alt="pattern-05" />
        </div>
      </section>

      <section className="relative py-[100px] bg-black text-white rounded-[80px] z-[1]">
        <Container className="flex flex-col lg:flex-row items-stretch gap-[100px]">
          <div className="w-[395px] relative flex items-center justify-center">
            <img src="/products/product-25.png" alt="jett pen" className="absolute" />
          </div>
          <div className="flex flex-col gap-[24px] flex-1">
            <h4 className="text-[50px] font-medium leading-[64px]">About Jett Plasma</h4>
            <p className="leading-[28px]">Jett Plasma Lift Medical is backed by years of research and development, as well as numerous clinical studies, ensuring both safety and efficacy for patients. It is Health Canada approved (unlike most Plasma devices) and provides the most advanced technology and versatile treatment options in a medical Plasma device.</p>
            <ul className="list-disc list-outside ml-[30px]">
                <li>Health Canada approved</li>
                <li>Certified medical device</li>
                <li>Patented DC technology</li>
                <li>Plasma treatment</li>
                <li>Simple handling and control</li>
                <li>8 intensities</li>
                <li>6 metal heads for ablative and non-ablative procedures</li>
                <li>Safety, efficiency and speed</li>
                <li>Lightweight and portable</li>
              </ul>
          </div>
        </Container>

        <div id="pattern-1" className="absolute bottom-[100px] right-0 z-[1]">
          {/* img should be replace using image component */}
          <img src="/layouts/pattern-06.svg" alt="pattern-06" />
        </div>
      </section>

      <section className="relative bg-background pt-[150px] pb-[0] z-[2] flex flex-col gap-[80px]">
        <Container className="">
          <h4 className="text-[50px] font-medium leading-[64px] text-center">Jett Plasma in Aesthetics</h4>
        </Container>
        
        <SliderVideosHome />
      </section>

      <section className="relative py-[150px]">
        <Container className="flex flex-col lg:flex-row items-start gap-[100px]">
          <div className="w-[290px] flex flex-col items-start gap-[24px]">
            <Badge title="QnA" outline />
            <h4 className="text-[50px] leading-[64px] font-medium">Quick answer to questions you may have</h4>
            <p className="leading-[28px]">
              Can’t find what you’re looking for? Contact us here: <br /> <a href="/" className="text-primary underline">info@jettplasmaeye.com</a>
            </p>
          </div>
          <div className="flex-1 flex flex-col">
            {Question.map((question, index) => (
              <CardQuestion
                key={index}
                title={question.title}
                imageSrc={question.imageSrc}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-[80px] bg-black rounded-[80px]">
        <Container className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
          <h4 className="text-[50px] font-medium text-white leading-[64px] max-w-[846px]">
            Optimize Your Performance with Jett Plasma - The Latest Solution for Innovative Medical Procedures
          </h4>

          <CtaLayoutContact params={{ route: "/goto" }} />
        </Container>

        <div id="pattern-1" className="absolute -top-[280px] left-0 z-[1]">
          {/* img should be replace using image component */}
          <img src="/layouts/pattern-07.svg" alt="pattern-07" />
        </div>
      </section>
    </>
  );
}
