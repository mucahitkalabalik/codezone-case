import React from "react";
import LiveSectionBg from "../../../public/images/live-section-bg.png";
import Man from "../../../public/images/man.png";
// import Woman from "../../../public/images/woman.png";
import Image from "next/image";
import Twitch from "../../../public/images/twitch.png";
import Like from "../../../public/images/like.png";
import Star from "../../../public/images/star.png";

function LiveSection() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative flex flex-col items-center justify-center md:justify-between md:px-20"
      style={{ backgroundImage: `url(${LiveSectionBg.src})` }}
    >
      {/* Content */}
      <div className="flex flex-col text-center text-white mb-8 md:mb-0 md:absolute md:left-3/12 md:top-1/6 rotate-[-3deg]">
        <div className="flex mb-10">
          <Image src={Twitch} width={250} alt="Twitch" />
          <div className=" border-l border-[#3B3B3B] mr-10"></div>
          <div className="text-left">
            <div className="live-title font-light text-[68px] leading-[1]">
              HER HAFTA
            </div>
            <div className="live-yellow-title font-bold text-[68px] text-[#F0E74D] leading-[1]">
              CANLIDAYIZ
            </div>
            <div className="sub-title font-bold text-[16px] mt-1">
              Bizi Takip Edin!
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3 md:space-x-5 border border-[#3B3B3B] p-1 rounded-xl">
          <button className="bg-[#864CF6] text-white px-6 py-3 rounded-xl flex items-center space-x-2">
            <Image src={Like} alt="Like" />
            <span>Takip Et</span>
          </button>
          <button className="bg-[#222123] text-white px-6 py-3 rounded-xl flex items-center">
            Abone Ol
          </button>
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:pt-50">
        <Image
          src={Man.src}
          alt="Man"
          width={150}
          height={300}
          className="object-contain md:w-[500px] md:h-auto"
        />
        <Image
          src="/woman.png"
          alt="Woman"
          width={150}
          height={300}
          className="object-contain md:w-[400px] md:h-auto"
        />
      </div>
    </div>
  );
}

export default LiveSection;
