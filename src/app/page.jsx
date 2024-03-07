import Container from "@/app/@components/container";
import { CtaHomeHero } from "@/app/@clients";

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

      <section className="relative py-[150px] bg-black rounded-[80px]">
        <Container>
          <p className="text-white">Section One</p>
        </Container>
      </section>

      <section className="relative py-[150px]">
        <Container>
          <p className="">Section Two</p>
        </Container>
      </section>

      <section className="relative pt-[50px] pb-[150px]">
        <Container>
          <p className="">Section Three</p>
        </Container>
      </section>

      <section className="relative py-[150px] bg-primary rounded-[80px]">
        <Container>
          <p className="text-white">Section Four</p>
        </Container>
      </section>

      <section className="relative pt-[150px] pb-[0]">
        <Container>
          <p className="">Section Five</p>
        </Container>
      </section>

      <section className="relative pt-[150px] pb-[300px]">
        <Container>
          <p className="">Section Six</p>
        </Container>
      </section>

      <section className="relative py-[100px] bg-black rounded-[80px]">
        <Container>
          <p className="text-white">Section Seven</p>
        </Container>
      </section>

      <section className="relative pt-[150px] pb-[0]">
        <Container>
          <p className="">Section Eight</p>
        </Container>
      </section>

      <section className="relative pt-[50px] pb-[150px]">
        <Container>
          <p className="">Section Nine</p>
        </Container>
      </section>
    </>
  );
}
