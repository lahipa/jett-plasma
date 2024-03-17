import Container from "@/app/_components/container";
import { ClientProvider } from "@/app/_clients"
import { ContentVideoDynamic } from "@/app/videos/_clients";

export default async function VideosDetail(props) {
  const { params } = props;

  return (
    <ClientProvider>
      <div className="h-[70px] lg:hidden" />
      <ContentVideoDynamic category="video" slug={params.slugs} />

      <div className="h-[50px] lg:h-[100px]" />
    </ClientProvider>
  );
}
