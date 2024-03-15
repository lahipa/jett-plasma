import Container from "@/app/_components/container";
import { CtaLayoutContact } from "@/app/_clients";

export default function StudiesLayout({ children }) {
    return (
        <>
            {children}

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