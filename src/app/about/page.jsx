import Container from "@/app/_components/container";
import { Icon, Badge } from "@/app/_components/base";
import { FaqList } from "@/app/studies/_clients";
import { aboutAchievement } from "@/app/_data";
import { ClientProvider } from "@/app/_clients";
import { CtaLayoutContact } from "@/app/_clients";

export default function About() {
  return (
    <ClientProvider>
      <div className="h-[70px] lg:hidden" />
      <section className="relative pt-[150px] pb-[100px]">
        <Container className="flex flex-col lg:flex-row lg:items-stretch gap-[50px]">
          <div className="w-[320px] relative" />
          <div className="flex-1 flex flex-col gap-[26px] lg:text-right lg:justify-end">
            <h4 className="text-[40px] lg:text-[70px] font-medium leading-[54px] lg:leading-[88px] mr-[100px]">About Us</h4>
            <div className="w-full flex items-center ml-[100px] gap-[14px]">
              <p className="text-[16px] lg:text-[18px] leading-[22px] lg:leading-[27px] lg:max-w-[400px]">
                Jett Plasma is a non-invasive cosmetic procedure that utilizes plasma energy to treat various skin conditions and concerns.
              </p>
              <Icon icon="IconAffiliate" size={80} color="text-primary" />
            </div>
          </div>

          <div className="w-[150px] relative" />
        </Container>

        <div className="h-[480px] lg:w-[395px] -bottom-[420px] left-[300px] absolute flex items-center justify-center z-[1]">
          <img src="/products/product-25.png" alt="jett pen" className="" />
        </div>
      </section>

      <section className="relative z-[2] py-[80px] lg:py-[100px] bg-primary text-white rounded-[40px] lg:rounded-[80px]">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-dashed">
          {aboutAchievement.map((item, x) => {
            return (
              <div key={x} className="w-full h-fit flex justify-center">
                <div className="flex gap-[24px] items-center text-white">
                  <Icon icon={item.icon} size={50} color="text-iherit" />
                  <div className="flex-1 flex flex-col gap-[5px]">
                    <h4 className="text-[60px] font-semibold">{item.achievement}</h4>
                    <span className="text-[16px] leading-[20px] text-ligh">- {item.title}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </Container>
      </section>

      <section className="relative py-[80px] lg:pt-[150px] lg:pb-[150px]">
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-x divide-dashed">
          <div className="relative" />
          <div className="lg:col-span-2">
            <p className="text-[18px] leading-[32px]">
              {`
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae tincidunt nulla. Praesent et malesuada elit, nec mollis nibh. Sed vestibulum scelerisque lacinia. Phasellus pulvinar, massa vel suscipit finibus, quam dolor finibus dui, ac pulvinar magna orci molestie mauris. Integer ac neque in elit maximus semper. Nunc vel lorem justo. Fusce tempus vehicula ante vel ullamcorper. 
                Sed tincidunt facilisis elit, nec varius ligula tristique non. Vivamus eu dignissim quam.
              `}
            </p>
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

          <FaqList />
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
    </ClientProvider>
  );
}
