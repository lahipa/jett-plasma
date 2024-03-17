import Container from "@/app/_components/container";
import { ClientProvider } from "@/app/_clients"
import { ContentStudiesDynamic } from "@/app/studies/_clients";

export default function StudiesDetail(props) {
  const { params } = props;
  
  return (
    <ClientProvider>
      <div className="h-[70px] lg:hidden" />
      <ContentStudiesDynamic category="studies" slug={params.slugs} />

      <div className="h-[50px] lg:h-[100px]" />
    </ClientProvider>
  );
}
