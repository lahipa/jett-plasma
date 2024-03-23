"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { useRouter } from "next/navigation";
import { Icon, IconButton, SquarePlaceholder } from "@/app/_components/base";
import { ShowedVideoModal } from "@/app/videos/_clients";
import { limitContentText } from "@/utils/globals";
import { useGetVideos } from '@/hooks/useVideosQuery';

// data
import { Treatments } from "@/app/_data";

import "swiper/css";
import "swiper/css/free-mode";

const SliderVideosHomeBar = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center gap-[24px] relative -ml-[16%] -mr-[20px]">
      <IconButton
        variant="base"
        icon="IconChevronLeft"
        outline
        size="lg"
        onClick={() => swiper.slidePrev()}
      />
      <IconButton
        variant="base"
        icon="IconChevronRight"
        outline
        size="lg"
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};

const SliderVideosHome = () => {
  const [videoShowed, setVideoShowed] = useState({ isOpen: false, data: null });

  const refSwiper = useRef(null);
  const router = useRouter();
  const { isLoading, data } = useGetVideos({ locale_code: "en" });

  const onClickOpen = ({ item }) => {
    const slug = item.posts_slug;

    // router.push("/videos", `/videos/${slug}`, { scroll: false });
    window.history.replaceState({ ...window.history.state, as: `/videos/${slug}`, url: `/videos?slug=${slug}` }, '', `/videos/${slug}`);
    setVideoShowed({ isOpen: true, data: item });
  };

  const onClickClose = () => {
    window.history.replaceState({ ...window.history.state, as: `/videos`, url: `/videos` }, '', `/videos`);
    setVideoShowed({ isOpen: false, data: null });
  };

  const onClickOpenMobile = ({ item }) => {
    const slug = item.posts_slug;

    router.prefetch(`/videos/${slug}`);
    router.push(`/videos/${slug}`);
  };

  const { scrollYProgress } = useScroll({
    target: refSwiper,
    offset: ["start end", "end end"],
  });

  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  const imgTransform = useTransform(scrollYProgressSpring, [0, 1], [1.5,  1])
  const element1= useTransform(scrollYProgressSpring, [1, 0], [-50, 0]);

  return (
    <div className="relative" ref={refSwiper} >
      <Swiper
        slidesPerView={.7}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
        className="relative !flex flex-col gap-[40px] items-center !pl-[20%] lg:!pl-[16%] lg:!pr-[20px] !pb-[10px]"
        breakpoints={{
          1024: {
            slidesPerView: 1.7,
            spaceBetween: 50,
          },
        }}
        ref={refSwiper}
      >
        <div>
          {isLoading && [...Array(3)].map((_, x) => {
              return (
                  <div key={x} className="w-full h-[218px] lg:h-[232px] relative rounded-[20px] overflow-hidden">
                      <SquarePlaceholder width="100%" height="100%" />
                  </div>
              );
          })}

          {!isLoading && data?.result.videos.data.filter((n) => n.posts_code !== "video-hero").slice(0, 3).map((item, index) => {
            return (
              <SwiperSlide key={index.toString()}>
                <motion.div style={{ x: element1 }} className="relative rounded-2xl lg:w-full h-[230px] lg:h-[500px] overflow-hidden">
                  <motion.img style={{ scale: imgTransform }} className="w-full h-full object-cover" src={item.thumbnail} alt="" />
                  
                  <div className="absolute bottom-0 w-full p-[1rem] flex items-center lg:justify-between gap-[10px]">
                    <button
                      className="hidden pl-[6px] py-[6px] pr-[24px] lg:flex align-center items-center gap-[14px] border border-white bg-[#1C1E22]/20 rounded-full"
                      onClick={() => onClickOpen({ item })}
                    >
                      <div className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] flex items-center justify-center bg-[#1C1E22]/20 border border-white rounded-full">
                        <Icon icon="IconPlayerPlayFilled" size={20} color="text-white" />
                      </div>
                      <span className="text-white">{limitContentText(item.posts_title, 50)}</span>
                    </button>
                    <button
                      className="lg:hidden w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] flex items-center justify-center bg-[#1C1E22]/20 border border-white rounded-full"
                      onClick={() => onClickOpenMobile({ item })}
                    >
                      <Icon icon="IconPlayerPlayFilled" size={20} color="text-white" />
                    </button>
                    {/* <button className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] flex items-center justify-center bg-[#1C1E22]/20 border border-white rounded-full">
                      <Icon icon="IconDownload" size={20} color="text-white" />
                    </button> */}
                  </div>
                </motion.div>
              </SwiperSlide>
          );
        })}
        </div>

        <SliderVideosHomeBar />
      </Swiper>

      <ShowedVideoModal
          show={videoShowed?.isOpen}
          onClose={onClickClose}
          slug={videoShowed?.data?.posts_slug}
      />
    </div>
  );
};

export default SliderVideosHome;

