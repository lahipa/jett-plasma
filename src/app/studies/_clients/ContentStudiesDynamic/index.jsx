"use client";

import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import Container from "@/app/_components/container";
import { Icon, SquarePlaceholder, CirclePlaceholder } from "@/app/_components/base";
import { useGetDetailStudies } from "@/hooks/useStudiesQuery";
import dayjs from "dayjs";

// data
import { columns } from "../../_data";

// styles
import "swiper/css";
import 'swiper/css/pagination';


const ContentStudiesDynamic = (props) => {
    const { category, slug } = props;

    const { isLoading, data } = useGetDetailStudies(slug);

    return (
        <>
            {isLoading && (
                <>
                    <section className="relative py-[50px]">
                        <Container className="">
                            <div className="flex flex-col gap-[10px]">
                                <SquarePlaceholder width="100%" height={20} />
                                <SquarePlaceholder width={150} height={20} />
                            </div>
                        </Container>
                    </section>

                    <section className="relative pt-[100px] pb-[150px]">
                        <Container className="flex flex-col gap-[50px] lg:gap-[80px]">
                            <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] lg:gap-x-[50px] gap-y-[50px]">
                                {[...Array(5)].map((_, x) => {
                                    return (
                                        <div key={x} className="flex-1 flex flex-col gap-[22px]">
                                            <div className="w-full h-[218px] lg:h-[232px] relative rounded-[20px] overflow-hidden">
                                                <SquarePlaceholder width="100%" height="100%" />
                                            </div>
                                            <div className="flex flex-col gap-[10px]">
                                                <SquarePlaceholder width="100%" height={20} />
                                                <SquarePlaceholder width={150} height={20} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </Container>
                    </section>
                </>
            )}

            {!isLoading && data.result && (
                <section className="relative pt-[60px] pb-0">
                    <Container className="flex items-stretch justify-between gap-[50px]">
                        <div className="flex flex-col gap-[15px]">
                            <h4 className="text-[30px] lg:text-[50px] font-medium leading-[40px] lg:leading-[64px]">
                                {data.result.posts_title}
                            </h4>
                            <div className="flex items-center gap-[10px]">
                                <Icon icon="IconCalendar" color="text-primary" />
                                <span className="text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28px]">{dayjs(data.result.created_at).format("DD/MM/YYYY, HH:mm")}</span>
                            </div>
                        </div>
                    </Container>
                </section>
            )}

            {!isLoading && data.result && data.result.sections.map((section, x) => {
                return (
                    <section key={x.toString()} className="relative py-[100px]">
                        <Container>
                            {columns[section.pcs_identifier].map((column, i) => {
                                return (
                                    <div key={i.toString()} className="" style={{ width: column }}>
                                        {section.columns[i].elements.map((element, y) => {
                                            const block = element.pce_element_type;
                                            const content = element.pcc_element_contents;

                                            if (block === "heading") {
                                                return (<Heading key={y} variant={content.headingSize}>{content.headingText}</Heading>);
                                            }

                                            if (block === "paragraph") {
                                                return (<p key={y} className="text-md leading-relaxed max-w-[90%]">{content.paragraph}</p>);
                                            }

                                            if (block === "preformatted") {
                                                return (
                                                    <Markdown
                                                        key={y}
                                                        className="relative w-full text-inherit !max-w-full prose text-[14px] xl:text-[18px] 3xl:prose-xl font-normal curriculum-description"
                                                        remarkPlugins={[Remark]}
                                                    >
                                                        {content.preformatted}
                                                    </Markdown>
                                                );
                                            }

                                            if (block === "image") {
                                                return (
                                                    <div key={y} className='w-full h-full max-h-[650px] relative'>
                                                        <img src={content.imageSource[0].url} className='w-full h-full object-cover' />
                                                    </div>
                                                );
                                            }

                                            if (block === 'gallery') {
                                                return (
                                                    <div key={y} className=''>
                                                        <Swiper
                                                            // spaceBetween={30}
                                                            slidesPerView={1}
                                                            pagination={{
                                                                dynamicBullets: true,
                                                                clickable: true,
                                                            }}
                                                            modules={[Pagination]}
                                                        >
                                                            {content.imageSource.map((item, i) => {
                                                                return (
                                                                    <SwiperSlide
                                                                        key={`${i+1}-id:swiper-slider`}
                                                                    >
                                                                        <div className="relative w-full h-[486px] xl:h-[650px]">
                                                                            {item.mime.split("/")[0] === "video" && (
                                                                                <video
                                                                                    disablePictureInPicture
                                                                                    controlsList="nodownload"
                                                                                    autoPlay
                                                                                    // controls
                                                                                    className="min-w-[100%] min-h-[100%]"
                                                                                    loop
                                                                                    muted
                                                                                >
                                                                                    <source src={item.url} type="video/mp4" />
                                                                                    <source src={item.url} type="video/webm" />
                                                                                    Your browser does not support the video tag.
                                                                                </video>
                                                                            )}

                                                                            {item.mime.split("/")[0] === "image" && (
                                                                                <img
                                                                                    alt={item.title || 'Default Image'}
                                                                                    src={item.url}
                                                                                    loading="lazy"
                                                                                    className="w-full h-full object-cover"
                                                                                />
                                                                            )}
                                                                        </div>
                                                                    </SwiperSlide>
                                                                );
                                                            })}
                                                        </Swiper>
                                                    </div>
                                                );
                                            }

                                            if (block === "video") {
                                                const searchParams = new URLSearchParams(content.videoUrl.substring(content.videoUrl.indexOf('?')));
                                                const youtubePlayId = searchParams.get('v');

                                                return (
                                                    <div key={y} className="relative h-[680px] bg-black overflow-hidden">
                                                        <iframe
                                                            type="text/html"
                                                            src={`https://www.youtube.com/embed/${youtubePlayId}?autoplay=0`}
                                                            frameBorder="0"
                                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                            allowFullScreen
                                                            title="Embedded youtube"
                                                            className="h-full w-full absolute inset-0"
                                                        />
                                                    </div>
                                                );
                                            }

                                            if (block === "button-groups") {
                                                return (
                                                    <div key={y} className="relative mt-[10px] flex items-center gap-[20px]">

                                                        {content.buttonGroups.map((item, i) => {
                                                            return (
                                                                <Fragment key={`${i+1}-id:button-groups`}>
                                                                    <Button
                                                                        title={item.title}
                                                                        variant={item.variant}
                                                                        outlined={item.outlined}
                                                                        //   onClick={() => router.visit(item.url)}
                                                                    />
                                                                </Fragment>
                                                            );
                                                        })}

                                                    </div>
                                                );
                                            }

                                            return (<p key={y}>Sorry element not available yet!</p>);
                                        })}
                                    </div>
                                );
                            })}
                        </Container>
                    </section>
                );
            })}
        </>
    );
};

export default ContentStudiesDynamic;