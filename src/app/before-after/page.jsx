import Container from "@/app/_components/container";
import { Icon, Badge } from "@/app/_components/base";
import { FaqList } from "@/app/_clients";
import { ClientProvider, CtaLayoutContact } from "@/app/_clients";
import { MultipleBeforeAfter } from "@/app/before-after/_clients";

export default function BeforeAfter() {
  return (
    <ClientProvider>
      <div className="h-[70px] lg:hidden" />
      <section className="relative py-[40px] lg:pt-[150px] lg:pb-[80px]">
        <Container className="flex flex-col text-center gap-[14px]">
            <h4 className="text-[40px] lg:text-[70px] font-medium leading-[54px] lg:leading-[88px]">Before and After</h4>
            <p className="text-[20px] leading-[30px] lg:text-[30px] lg:leading-[40px]">Explore remarkable results achieved through cutting-edge technology and skilled expertise. Discover the journey of rejuvenation, enhancement, and restoration.</p>
        </Container>
      </section>

      <section className="relative py-[40px] lg:pt-[80px] lg:pb-[100px]">
        <Container className="flex flex-col gap-[100px]">
            
            <div className="flex flex-col gap-[30px]">
                <h4 className="text-[30px] leading-[40px] lg:text-[40px] lg:leading-[54px] font-medium">Blepharoplasty</h4>
                
                <MultipleBeforeAfter
                    sliders={[
                        { title: "Before", source: "/products/before-after/bleparoplasty/1-bleparoplasty-before.png" },
                        { title: "Immediately after", source: "/products/before-after/bleparoplasty/2-bleparoplasty-immediately-after.png" },
                        { title: "3 days after", source: "/products/before-after/bleparoplasty/3-bleparoplasty-3-days-after.png" },
                        { title: "10 days after", source: "/products/before-after/bleparoplasty/4-bleparoplasty-10-days-after.png" },
                        { title: "1 month after", source: "/products/before-after/bleparoplasty/5-bleparoplasty-1-month-after.png" },
                    ]}
                    pagination={["Before", "Immediately after", "3 days after", "10 days after", "1 month after"]}
                />
            </div>

            <div className="flex flex-col gap-[30px]">
                <h4 className="text-[30px] leading-[40px] lg:text-[40px] lg:leading-[54px] font-medium">Ectoprian</h4>
                
                <MultipleBeforeAfter
                    sliders={[
                        { title: "Before", source: "/products/before-after/ectoprian/1-ectoprian-before.png" },
                        { title: "After", source: "/products/before-after/ectoprian/2-ectoprian-after.png" },
                    ]}
                    pagination={["Before", "After"]}
                />
            </div>

            <div className="flex flex-col gap-[30px]">
                <h4 className="text-[30px] leading-[40px] lg:text-[40px] lg:leading-[54px] font-medium">Eye Bags</h4>
                
                <MultipleBeforeAfter
                    sliders={[
                        { title: "Before", source: "/products/before-after/eyebags/1-eyebags-before.png" },
                        { title: "After", source: "/products/before-after/eyebags/2-eyebags-after.png" },
                    ]}
                    pagination={["Before", "After"]}
                />
            </div>
            
            <div className="flex flex-col gap-[30px]">
                <h4 className="text-[30px] leading-[40px] lg:text-[40px] lg:leading-[54px] font-medium">Verrucae</h4>
                
                <MultipleBeforeAfter
                    sliders={[
                        { title: "Before", source: "/products/before-after/verrucae/1-verrucae-before.png" },
                        { title: "Immediately after", source: "/products/before-after/verrucae/2-verrucae-immediately-after.png" },
                        { title: "1 month after", source: "/products/before-after/verrucae/3-verrucae-1-month-after.png" },
                    ]}
                    pagination={["Before", "Immediately after", "1 month after"]}
                />
            </div>

            <div className="flex flex-col gap-[30px]">
                <h4 className="text-[30px] leading-[40px] lg:text-[40px] lg:leading-[54px] font-medium">Xanthelasma</h4>
                
                <MultipleBeforeAfter
                    sliders={[
                        { title: "Before", source: "/products/before-after/xanthelasma/1-xanthelasma-before.png" },
                        { title: "Immediately after", source: "/products/before-after/xanthelasma/2-xanthelasma-immediately-after.png" },
                        { title: "1 month after", source: "/products/before-after/xanthelasma/3-xanthelasma-1-month-after.png" },
                    ]}
                    pagination={["Before", "Immediately after", "1 month after"]}
                />
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
