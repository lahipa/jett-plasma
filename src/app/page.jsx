import Container from "./@components/container";
import { Badge, Icon, Button } from "./@components/base";
import { CtaHomeHero, SliderVideosHome } from "./@clients";
import CardQuestion from "./@components/card/CardQuestion";

// data
import { jettPlasmaPenResult, jettPlasmaPsycologyEffect, Question } from './@data';

export default function Home() {
  return (
    <>
      <section id="hero" className="relative h-[870px] -mt-[120px] pt-[120px]">
        <Container className="flex flex-col h-full">
          <div id="pattern-1" className="absolute -top-[120px] -right-[50px] z-[41]">
            {/* img should be replace using image component */}
            <img src="/layouts/pattern-01.svg" alt="pattern-01" />
          </div>
          <div className="flex flex-col gap-[40px] pt-[15px] max-w-[900px]">
            <div id="leading-text" className="flex flex-col gap-[14px]">
              <h4 className="text-[70px] font-medium leading-[88px]">Eyes, Meet Jett Plasma Pen</h4>
              <p className="text-[30px]">The first and only plasma pen specifically designed for eye care procedures.</p>
            </div>

            <CtaHomeHero params={{ route: "/goto" }} />
          </div>
          <div id="leading-product" className="relative lg:absolute w-full lg:w-fit lg:top-[110px] lg:right-0">
            {/* img should be replace using image component */}
            <img src="/products/product-1.png" alt="product-1" />
          </div>
          <div id="leading-product-description" className="relative lg:absolute flex flex-col lg:flex-row items-stretch lg:justify-end lg:bottom-[120px] lg:left-0 lg:right-0 gap-[30px]">
            <div className="flex items-end gap-[30px]">
              {/* img should be replace using image component */}
              <img src="/brand/certificate-health-canada-1.png" alt="certificate-health-canada-1" className="mix-blend-darken" />

              {/* img should be replace using image component */}
              <img src="/brand/ce-logo.png" alt="ce-logo" className="mix-blend-darken" />
            </div>
            <div className="relative max-w-[610px]">
              <p className="text-[18px]">A groundbreaking treatment for MGD, Blepharitis, Demodex, Chalazion, Trichiasis, Entropion, Ectropion, and Xanthelasma. Discover a breakthrough method to perform non-surgical Blepharoplasty, reduce fine lines and wrinkles, and remove benign vascular and skin lesions.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-[150px] bg-black text-white rounded-[80px]">
        <Container className="flex flex-col gap-[100px]">
          <div className="flex flex-col lg:flex-row lg:items-end gap-[14px] lg:gap-[100px]">
            <h4 className="text-[80px] font-medium lg:w-[860px] leading-[94px]">Elevate Your Aesthetics without the AC: The Unmatched Benefits of DC Current in Plasma Treatment</h4>
            <div className="flex flex-col gap-[24px] flex-1 items-end">
              <img src="/products/product-14.png" alt="Product Description" className="w-full max-w-[260px] h-auto" />
              <p className="leading-[28px] max-w-[260px]">Not all plasma pens are created equal! The Jett Plasma Pen Plasma has emerged as the gold standard for use in ophthalmology, aesthetics, and dermatology, thanks to its superior precision and ability to perform both ablative and non-ablative procedures.</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/products/product-13.png" alt="Product Pen" className="" />
          </div>
          <div className="flex items-center">
            <p className="leading-[28px] max-w-[860px]">One of the unique features of the Jett Plasma Pen Plasma is its use of direct current (DC). DC offers a more stable and controlled energy output, which is essential for delicate procedures such as non-surgical blepharoplasty, dry eye/MGD/blepharitis treatment, skin tightening, and easy removal of benign vascular and skin lesions. Traditional plasma pens utilizing AC can be more unpredictable and less precise, leading to a higher risk of complications and uneven results. DC technology, means less downtime, less risk of scarring, and more natural-looking results for patients. Jett Plasma Pen is the ideal choice for procedures such as upper and lower eyelid tightening, as well as reducing the appearance of crow's feet and under-eye wrinkles.</p>
          </div>
        </Container>
      </section>

      <section className="relative py-[150px]">
        <Container className="flex items-stretch gap-[14px]">
          <div className="flex-1 flex flex-col gap-[71px]">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[573px] flex justify-end">
                <span className="text-[40px] leading-[54px] font-medium">See what happens</span>
              </div>
              <div className="w-full max-w-[573px] flex">
                <span className="text-[40px] leading-[54px] font-medium text-primary italic">before and after treatment</span>
              </div>
              <div className="w-full max-w-[573px] flex justify-center">
                <span className="text-[40px] leading-[54px] font-medium">using Jett Plasma</span>
              </div>
            </div>

            <div className="flex items-stretch gap-[14px]">
              <div className="relative w-[400px] h-[400px] overflow-hidden rounded-[20px]">
                <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                  <span className="text-white text-[14px] leading-[20px] font-medium">Before</span>
                </div>
                <img src="/products/product-26.png" className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-[14px] flex-1">
                <div className="relative w-full h-[193px] overflow-hidden rounded-[20px]">
                  <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                    <span className="text-white text-[14px] leading-[20px] font-medium">After 10 days</span>
                  </div>
                  <img src="/products/product-27.png" className="w-full h-full" />
                </div>
                <div className="relative w-full h-[193px] overflow-hidden rounded-[20px]">
                  <div className="absolute px-[14px] h-[32px] top-[10px] left-[10px] bg-[#1C1E22]/50 rounded-full">
                    <span className="text-white text-[14px] leading-[20px] font-medium">After 3 months</span>
                  </div>
                  <img src="/products/product-28.png" className="w-full h-full" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-[10px]">
            <div className="w-full h-[400px] bg-neutral-50 rounded-[20px]">
              <p></p>
            </div>
            <div className="relative p-[30px]">
              <p className="text-[24px] leading-[34px] font-medium">Jett Plasma allows you to choose between ablative and non-ablative plasma energy to tighten skin, reduce wrinkles, and treat various imperfections, all without incisions or downtime</p>
            </div>
          </div>
        </Container>
      </section>

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
                      <div x={x.toString()} className="flex gap-[10px]">
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
            <h4 className="text-[80px] font-medium leading-[94px]">Plasma Unveiled: <br /> Understanding the Science Behind Jett Plasma Pen Medical</h4>
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
      </section>

      <section className="relative pt-[150px] pb-[0]">
        <Container className="flex flex-col gap-[80px]">
          <h4 className="text-[50px] font-medium leading-[64px] text-center">Physiological and Therapeutic <br /> Effects of Jett Plasma Pen</h4>
          <div className="flex flex-wrap items-end justify-center gap-[20px]">
            {jettPlasmaPsycologyEffect.map((effect, x) => {
              return (
                <div className="relative px-[20px] py-[16px] max-w-[400px] bg-black rounded-[25px]">
                  <div className="flex items-start gap-[8px]">
                      <div className="w-[6px] h-[6px] rounded-full bg-white mt-[12px]" />
                      <p className="leading-[28px] text-white flex-1">{effect}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative pt-[150px] pb-[300px]">
        <Container className="flex flex-col gap-[40px]">
          <h4 className="text-[50px] font-medium leading-[64px] text-center">Suitable for</h4>
          <div className="flex items-end justify-center gap-[80px]">
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
          <div className="flex items-stretch gap-[50px]">
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
      </section>

      <section className="relative py-[100px] bg-black text-white rounded-[80px] z-[1]">
        <Container className="flex items-stretch gap-[100px]">
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
      </section>

      <section className="relative bg-background pt-[150px] pb-[0] z-[2] flex flex-col gap-[80px]">
        <Container className="">
          <h4 className="text-[50px] font-medium leading-[64px] text-center">Jett Plasma in Aesthetics</h4>
        </Container>
        
        <SliderVideosHome />
      </section>

      <section className="relative pt-[50px] pb-[150px]">
        <Container>
          <div className="relative w-full xl:max-w-[1200px] 2xl:max-w-[1280px]  mx-auto md:px-5 xl:px-0 py-[4rem] lg:py-[6rem]">
            <div className="grid lg:grid-cols-4 gap-[2rem] lg:gap-[3rem]">
              <div className="flex flex-col items-start">
                <div className="border border-dark-10 rounded-full text-[1.25rem] px-[12px] text-dark-10 font-medium mb-[1rem] lg:mb-0">
                  Qna
                </div>
                <h3 className="text-dark-10 text-[1.75rem] lg:text-[2.8rem] leading-normal font-semibold">Quick answer to questions you may have</h3>
                <p className="text-dark-10 text-[1rem] font-medium">
                  Can’t find what you’re looking for? Contact us here:
                  <a href="#" className="text-primary underline">info@jett.com</a>
                </p>
              </div>
              <div className="md:col-span-3">
                {Question.map((question, index) => (
                  <CardQuestion
                    key={index}
                    title={question.title}
                    imageSrc={question.imageSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
