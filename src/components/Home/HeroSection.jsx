"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import Hero1 from "../../../public/images/hero1.png";
import Hero2 from "../../../public/images/hero2.png";
import ArrowRight from "../../../public/images/arrow-right.png";
import ArrowLeft from "../../../public/images/arrow-left.png";
import ButtonBg from "../../../public/images/button-bg.png";
import Image from "next/image";

function HeroSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const heroImages = ['/images/hero1.png', '/images/hero2.png'];

  console.log(heroImages);

  return (
    <section className="relative w-full h-screen">
      <Image
        width={600}
        height={400}
        src="/images/carousel-detail.png"
        alt="Carousel Detail"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-45 md:h-80 z-20"
      />

      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 55000, disableOnInteraction: false }}
        navigation={
          swiperReady
            ? { prevEl: prevRef.current, nextEl: nextRef.current }
            : false
        }
        modules={[Autoplay, Navigation]}
        className="w-full h-full relative z-10"
        onSwiper={() => setSwiperReady(true)}
      >
        {heroImages.map((image, idx) => (
          <SwiperSlide key={idx} className="relative w-full h-full">
            <img
              src={image}
              alt={`Slide ${idx + 1}`}
              className="w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
            <div
              className={`absolute inset-y-0 right-0 flex flex-col justify-start justify-md-center items-center md:items-start  text-md-left md:max-w-[660px] mx-10  mt-[200px] px-4 md:pr-[calc(100px+40px)] ${
                idx === 0 ? "text-black" : "text-white"
              }`}
            >
              <h1 className="text-xl md:text-6xl text-center md:text-start font-saira font-bold mb-4">
                TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET
              </h1>
              <p className=" md:text-2xl  text-center md:text-start mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button
                className="relative w-[136px] py-3 font-saira font-medium rounded-md text-black overflow-hidden"
                style={{
                  backgroundImage: `url(${ButtonBg.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                Devamını Oku
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        ref={prevRef}
        className="hidden md:block absolute top-1/2 transform -translate-y-1/2 cursor-pointer z-30"
        style={{ left: "68px" }}
      >
        <img src="/images/arrow-left.png" alt="Prev" width={20} height={40} />
      </div>
      <div
        ref={nextRef}
        className="hidden md:block absolute top-1/2 transform -translate-y-1/2 cursor-pointer z-30"
        style={{ right: "100px" }}
      >
        <img src="/images/arrow-right.png" alt="Next" width={20} height={40} />
      </div>
    </section>
  );
}

export default HeroSection;
