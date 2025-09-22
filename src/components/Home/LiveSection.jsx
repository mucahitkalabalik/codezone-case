import React from "react";
import LiveSectionBg from "../../../public/images/live-section-bg.png";

function LiveSection() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex flex-col  items-center justify-center md:justify-between overflow-hidden "
      style={{ backgroundImage: `url(${LiveSectionBg.src})` }}
    >
      <img
        src="/images/dark.png"
        alt="Carousel Detail"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto h-45 md:h-80 z-20"
      />
      <div className="flex flex-col text-center text-white mb-8 md:mb-0 md:absolute md:top-1/12 lg:top-0   lg:left-3/14 xl:left-4/14   rotate-[-3deg]">
        <div className="flex mb-10 md:mt-6">
          <img
            src="images/twitch.png"
            alt="Twitch"
            className="w-32 md:w-40 lg:w-60"
          />
          <div className=" border-l border-[#3B3B3B] mr-10"></div>
          <div className="text-left">
            <div className="live-title font-light text-[36px] md:text-[36px] lg:text-[68px]  leading-[1]">
              HER HAFTA
            </div>
            <div className="live-yellow-title font-bold text-[36px] md:text-[48px] lg:text-[68px] text-[#F0E74D] leading-[1]">
              CANLIDAYIZ
            </div>
            <div className="sub-title font-bold md:text-[16px] mt-1">
              Bizi Takip Edin!
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3 md:space-x-5">
          <span className="flex items-center space-x-2  border border-[#3B3B3B] p-3 rounded-3xl">
            <button className="bg-[#864CF6] text-white px-3 md:-px-6 py-2 md:py-3 rounded-xl flex items-center space-x-2">
              <img src="/images/like.png" alt="Like" />
              <span>Takip Et</span>
            </button>
            <button className="bg-[#222123] text-white px-3 md:-px-6 py-2 md:py-3 rounded-xl flex items-center space-x-2">
              <img src="/images/star.png" alt="Like" className="mr-2" />
              Abone Ol
            </button>
          </span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:pt-30">
        <img
          src="/images/man.png"
          alt="Man"
          className="object-contain w-[200px] md:w-[650px] md:h-auto md:mr-10"
        />
        <img
          src="/images/woman.png"
          alt="Woman"
          className="object-contain w-[150px] md:w-[450px] md:h-auto"
        />
      </div>
    </div>
  );
}

export default LiveSection;
