"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper";
import FavBg from "../../../../public/images/favCarousel/fav-bg.png";

import "swiper/css";
import "swiper/css/scrollbar";

export default function FavCarousel() {
  return (
    <div className=" relative py-10 md:ml-10 flex items-end justify-end">
      <div className="swiper-scrollbar-container scale-75 absolute left-4 right-4 bottom-0 h-2"></div>

      <Swiper
        slidesPerView={1} 
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          1024: { slidesPerView: 3, spaceBetween: 10 },
          1280: { slidesPerView: 3, spaceBetween: 10 },
        }}
        modules={[Scrollbar]}
        scrollbar={{
          hide: false,
          el: ".swiper-scrollbar-container", // kendi container
          draggable: true,
        }}
        className="mySwiper"
      >
        {[1, 2, 3, 1, 2, 3, 1, 2, 3].map((num, idx) => (
          <SwiperSlide key={idx} className="auto !flex !items-center !justify-center">
            <div
              style={{
                backgroundImage: `url(${FavBg.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="grid grid-cols-12">
                <img
                  src={`/images/favCarousel/fav${num}.png`}
                  alt={`Favorite ${num}`}
                  className="col-span-4 rounded-xl  object-contain mb-10 mt-10 "
                />
                <div className="col-span-8 flex items-center justify-center flex-col pr-5">
                  <span className=" mt-2 bg-[#323232] p-2 rounded-2xl mr-5  mb-5 text-[16px]">
                    Top 10 <span className="font-bold">(2. Sıra)</span>
                  </span>
                  <p className="text-[20px]">50 CENT</p>
                  <p className="font-bold text-[20px]">CURTIS</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-scrollbar-container {
          background-color: #1f1f1f;

          overflow: hidden;
        }
        .swiper-scrollbar-container .swiper-scrollbar-drag {
          background-color: #f0e74d;
          border-radius: 4px !important;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
