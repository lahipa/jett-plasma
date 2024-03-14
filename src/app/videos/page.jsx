import Container, { FullWidthContainer } from "@/app/@components/container";
import { Badge, Button, IconButton } from "../@components/base";
import { CtaLayoutContact } from "../@clients";
import ProductCard from "../@components/card/ProductsCard";
import TreatmentCard from "../@components/card/TreatmentCard";
import CardQuestion from "../@components/card/CardQuestion";

// data
import { Products, Question, Treatments } from "../@data";
// import { limitContentText } from "@/utils/globals";

export default function Videos() {
  return (
    <>
      <section className="relative py-[50px]">
        <Container className="flex flex-col lg:flex-row-reverse lg:items-end gap-[50px] lg:gap-[80px]">
          <div className="relative w-full md:w-[454px] lg:w-[769px] h-[246px] md:h-[314px] lg:h-[536px] rounded-[20px] overflow-hidden">
            <img className="w-full h-full object-cover" src="/products/product-2.png" alt="" />

            <div className="absolute bottom-0 w-full p-[20px] flex flex-row items-center gap-[10px]">
              <IconButton
                variant="white"
                icon="IconPlayerPlayFilled"
                className="bg-[#1C1E22]/20 lg:mr-auto"
                size="lg"
                outline
              />

              <IconButton
                variant="white"
                icon="IconDownload"
                className="bg-[#1C1E22]/20"
                size="lg"
                outline
              />
            </div>
          </div>

          <div className="flex-1 relative flex flex-col gap-[14px]">
            <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">
              {/* {limitContentText("Introducing JETT PLASMA Laser", 24)} */}
              Introducing <br /> JETT PLASMA...
            </h4>
            <p className="text-[24px] md:text-[20px] leading-[34px] md:leading-[30px]">
              JETT is a brand providing Innovation, Reliability and Technology. Our R&D department continuously focuses its efforts on developing the right products in cooperation with leading experts in medical fields.
            </p>
          </div>
        </Container>

        <div id="pattern-1" className="hidden md:block absolute top-[40px] left-0 z-[1]">
          <img src="/layouts/pattern-12.svg" alt="pattern-07" className="w-[344px] h-auto" />
        </div>
      </section>

      <section className="relative pt-[100px] pb-[150px]">
        <Container className="flex flex-col gap-[50px] lg:gap-[80px]">
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-x-[50px] gap-y-[50px]">
            {Treatments.map((treatment, index) => (
              <TreatmentCard key={index} cover={treatment.imageSrc} title={treatment.title} />
            ))}
          </div>
          
          <div className="flex justify-center">
              <p>Pagination</p>
          </div>
        </Container>
      </section>

      <section className="relative py-[80px] lg:py-[100px] bg-black text-white rounded-[40px] lg:rounded-[80px] z-[1]">
        <Container className="flex flex-col gap-[40px] lg:gap-[100px]">
          <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">Discover Our Latest Findings</h4>
          <div className="flex flex-col gap-[80px]">
            <div className="flex items-stretch gap-[50px]">
              {Products.slice(0, 3).map((product, index) => {
                return (
                  <div key={index} className="flex-1">
                    <ProductCard {...product} />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              <Button
                variant="white"
                title="See More"
                size="lg"
                outline
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative py-[80px] lg:py-[150px]">
        <Container className="flex flex-col lg:flex-row items-start gap-[30px] lg:gap-[100px]">
          <div className="w-full lg:w-[290px] flex flex-col items-start gap-[24px]">
            <Badge title="QnA" outline />
            <h4 className="text-[30px] lg:text-[50px] leading-[40px] lg:leading-[64px] font-medium">Quick answer to questions you may have</h4>
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

      <section className="relative py-[80px] bg-black rounded-[40px] lg:rounded-[80px]">
        <Container className="flex flex-col lg:flex-row items-center justify-between gap-[30px]">
          <h4 className="text-[30px] lg:text-[50px] text-center lg:text-left font-medium text-white leading-[40px] lg:leading-[64px] max-w-[846px]">
            Optimize Your Performance with Jett Plasma - The Latest Solution for Innovative Medical Procedures
          </h4>

          <CtaLayoutContact params={{ route: "/goto" }} />
        </Container>

        <div id="pattern-1" className="hidden lg:block absolute -top-[280px] left-0 z-[1]">
          <img src="/layouts/pattern-07.svg" alt="pattern-07" />
        </div>
      </section>
    </>
  );
}
