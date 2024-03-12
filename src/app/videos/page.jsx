import Container, { FullWidthContainer } from "@/app/@components/container";
import TreatmentCard from "../@components/card/TreatmentCard";
import { Products, Question, Treatments } from "../@data";
import ProductCard from "../@components/card/ProductsCard";
import { Badge, Button } from "../@components/base";
import CardQuestion from "../@components/card/CardQuestion";

export default function Videos() {
  return (
    <>
      <section className="w-full relative">
        <img className="absolute w-[35%] hidden md:block left-0 top-0 z-10" src="/layouts/pattern-12.svg" alt="pattern-12" />
        <Container className="flex md:items-end flex-col-reverse lg:flex-row lg:items-start h-ful !w-full !static !gap-[2rem] xl:!gap-[3rem]">
          <div className="flex flex-col gap-[40px] lg:max-w-[400px] xl:mt-auto">
            <div id="leading-text" className="flex flex-col gap-[14px] lg:mt-[10rem] xl:mt-unset">
              <h4 className="text-[2.8rem] font-medium ">Introducing JETT PLASMA...</h4>
              <p className="text-[1.125rem]">JETT is a brand providing Innovation, Reliability and Technology. Our R&D department continuously focuses its efforts on developing the right products in cooperation with leading experts in medical fields..</p>
            </div>
          </div>
          <div className="h-full w-full md:w-[60%] lg:w-full lg:mt-auto xl:mt-unset">
            <div className="relative aspect-content rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover" src="/products/product-2.png" alt="" />
              <div className="absolute bottom-0 w-full p-[1rem] flex flex-row items-center">
                <button className="bg-dark-20 rounded-full flex align-center w-[48px] h-[48px] border items-center justify-center border-neutral-10">
                  <img className="w-[22px] h-[22px]" src="/layouts/pattern-13.svg" alt="" />
                </button>
                <button className="ms-[12px] lg:ms-auto bg-dark-20 rounded-full flex align-center w-[48px] h-[48px] border items-center justify-center border-neutral-10">
                  <img className="w-[22px] h-[22px]" src="/layouts/pattern-14.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-[2rem] py-[4rem] lg:py-[6rem]">
            {Treatments.map((treatment, index) => (
              <TreatmentCard key={index} imageSrc={treatment.imageSrc} title={treatment.title} />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <FullWidthContainer>
          <div className="bg-black rounded-[50px] lg:rounded-[80px]">
            <div className="flex-col relative w-full xl:max-w-[1200px] 2xl:max-w-[1280px]  mx-auto px-6 xl:px-0 flex items-start justify-between gap-[30px] py-[3rem]">
              <h2 className="text-neutral-10 text-4xl mb-[2rem]">Discover Our Latest Findings</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
              <Button
                className="text-neutral-10 h-[42px] !border-2 !border-neutral-10 px-[14px] rounded-full mt-[1rem] mx-auto"
                title="SeeMore"
                outline
              />
            </div>
          </div>
        </FullWidthContainer>
      </section>

      <section className="relative py-[150px]">
        <Container className="flex items-start gap-[100px]">
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
    </>
  );
}
