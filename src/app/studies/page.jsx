import { Fragment } from "react";
import Container from "@/app/_components/container";
import { Badge } from "@/app/_components/base";
import { CardQuestion } from "@/app/_components/cards";
import { VideoItemCard } from "@/app/videos/_components";
import { StudyItemCard } from "@/app/studies/_components";
import { BtnSeeMoreVideos } from "@/app/studies/_clients";

// data
import { studiesData, Question, Treatments } from "@/app/_data";

export default function Studies() {
  return (
    <>
      <section className="relative pt-[150px] pb-[50px]">
        <Container className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[100px]">
          <div className="relative w-full lg:w-[450px] h-[191px] lg:h-[240px] mix-blend-darken">
            <img className="w-full h-full object-cover" src="/products/product-10.png" alt="" />
          </div>

          <div className="flex-1 relative flex flex-col gap-[14px]">
            <h4 className="text-[40px] lg:text-[70px] font-medium leading-[54px] lg:leading-[88px]">
              Studies
            </h4>
            <p className="text-[24px] md:text-[30px] leading-[34px] md:leading-[40px]">
              Dive into the science behind this versatile technology, understanding its principles, properties, and diverse applications.
            </p>
          </div>
        </Container>

        <div id="pattern-1" className="hidden md:block absolute top-[50px] right-0 z-[1]">
          <img src="/layouts/pattern-09.svg" alt="pattern-09" className="w-[344px] h-auto" />
        </div>
      </section>
      
      <section className="relative pt-[100px] pb-[150px]">
        <Container className="flex flex-col gap-[50px] lg:gap-[80px]">
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-x-[50px] gap-y-[50px]">
            {studiesData.map((item, index) => {
              return (
                <Fragment key={index}>
                  <StudyItemCard cover={item.image} code={item.code} name={item.name} description={item.description} />
                </Fragment>
              )
            })}
          </div>

          <div className="flex flex-col items-center">
              <p>Load More</p>
              <span>...</span>
          </div>
        </Container>
      </section>

      <section className="relative py-[80px] lg:py-[100px] bg-black text-white rounded-[40px] lg:rounded-[80px] z-[1]">
        <Container className="flex flex-col gap-[40px] lg:gap-[100px]">
          <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">Check Out Our Exciting Videos on Jett plasma Applications</h4>
          <div className="flex flex-col gap-[80px]">
            <div className="flex items-stretch gap-[50px]">
              {Treatments.slice(0, 3).map((item, index) => {
                return (
                  <div key={index} className="flex-1">
                    <VideoItemCard cover={item.imageSrc} title={item.title} slug={item.slug} duration="10.12" />
                  </div>
                );
              })}
            </div>
            
            <BtnSeeMoreVideos />
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
    </>
  );
}
