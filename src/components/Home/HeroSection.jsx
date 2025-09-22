"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ButtonBg from "../../../public/images/button-bg.png";

function HeroSection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const heroImages = ["/images/hero1.png", "/images/hero2.png"];

  return (
    <section className="relative w-full h-screen">
      <img
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
              className="absolute w-full h-full object-cover"
              style={{ objectFit: "cover" }}
            />
            <div className="grid grid-cols-12 h-full opacity-99">
              <div className="hidden md:block md:col-span-6"></div>
              <div className="col-span-12 md:col-span-5 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-20 h-full md:mt-10">
                <h1
                  className={`text-3xl xl:text-6xl  font-bold mb-4 ${
                    idx === 0 ? "text-black" : "text-white"
                  }`}
                >
                  TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET
                </h1>
                <p
                  className={`xl:text-2xl mb-6 ${
                    idx === 0 ? "text-black" : "text-white"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button
                  className="relative w-[136px] py-3 font-medium rounded-md text-black overflow-hidden"
                  style={{
                    backgroundImage: `url(${ButtonBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  Devamını Oku
                </button>
              </div>
              <div className="col-span-6 hidden md:block"></div>
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
