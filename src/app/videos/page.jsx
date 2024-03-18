import Container from "@/app/_components/container";
import { Badge } from "@/app/_components/base";
import { ClientProvider, CtaLayoutContact } from "@/app/_clients";
import { StudyList, VideoList } from "@/app/videos/_clients";
import { FaqList } from "@/app/_clients";
// import { limitContentText } from "@/utils/globals";

export default function Videos() {
  return (
    <ClientProvider>
      <div className="h-[70px] lg:hidden" />
      
      <VideoList/>

      <StudyList/>

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
    </ClientProvider>
  );
}
