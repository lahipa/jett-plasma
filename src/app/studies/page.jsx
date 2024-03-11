import Container from "@/app/@components/container";
import StudiesCard from "../@components/card/StudiesCard";
import { Question, Treatments, studiesData } from "../@data";
import TreatmentCard from "../@components/card/TreatmentCard";
import { Button } from "../@components/base";
import CardQuestion from "../@components/card/CardQuestion";

export default function Studies() {
  return (
    <>
      <section className="relative">
        <img className="absolute w-[160px] md:w-auto top-[50%] lg:top-0 right-0 z-10" src="/layouts/pattern-09.svg" alt="" />
        <Container>
          <div className="flex flex-col lg:flex-row gap-[1.5rem] lg:gap-[2.5rem] py-[2rem]  lg:py-[4rem] lg:items-center">
            <div className="lg:w-[40%]">
              <img className="w-full md:w-[70%] lg:w-full mix-blend-darken" src="/products/product-10.png" alt="" />
            </div>
            <div className="lg:w-[40%] xl:w-[50%] lg:ms-[2rem]">
              <h1 className="text-dark-10 text-[2rem] mdtext-[3rem] font-semibold	">Studies</h1>
              <p className="text-dark-10 text-[1.125rem] md:text-[1.375rem] font-medium	">
                Dive into the science behind this versatile technology, understanding its principles, properties, and diverse applications.
              </p>
            </div>
          </div>
        </Container>
      </section>
      
      <section>
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2rem] md:gap-6 pt-[1rem] pb-[6rem]">
            {studiesData.map((item, index) => (
              <StudiesCard key={index} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <div className="bg-black rounded-[50px] lg:rounded-[80px]">
          <div className="flex-col relative w-full xl:max-w-[1200px] 2xl:max-w-[1280px]  mx-auto px-6 xl:px-0 flex items-start justify-between gap-[30px] py-[3rem]">
            <h2 className="text-neutral-10 text-[1.75rem] lg:text-[2.75rem] mb-[2rem] ">Check Out Our Exciting Videos on Jett plasma Applications</h2>
            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-[2rem] pb-[2rem]">
              {Treatments.map((treatment, index) => (
                <TreatmentCard key={index} imageSrc={treatment.imageSrc} title={treatment.title} className='text-gray-10 !font-normal' />
              ))}
            </div>
            <Button
                className="text-neutral-10 h-[42px] !border-2 !border-neutral-10 px-[14px] rounded-full mt-[1rem] mx-auto"
                title="SeeMore"
                outline
            />
          </div>
        </div>
      </section>

      <section>
        <Container>
          <div className="relative w-full xl:max-w-[1200px] 2xl:max-w-[1280px]  mx-auto md:px-5 xl:px-0 py-[4rem] lg:py-[6rem]">
            <div className="grid lg:grid-cols-4 gap-[2rem] lg:gap-[3rem]">
              <div className="flex flex-col items-start">
                <div className="border border-dark-10 rounded-full text-[1.25rem] px-[12px] text-dark-10 font-medium mb-[1rem] lg:mb-0">
                  Qna
                </div>
                <h3 className="text-dark-10 text-[1.75rem] lg:text-[2.8rem] leading-normal font-semibold">Quick answer to questions you may have</h3>
                <p className="text-dark-10 text-[1rem] font-medium">Can’t find what you’re looking for? Contact us here:
                  <a href="" className="text-primary underline">info@jett.com
                  </a>
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
