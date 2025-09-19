import React from "react";
import Tabs from "./Discovery/Tabs";
import EmailSubscribe from "./Discovery/EmailSubscribe";
import Cards from "./Discovery/Cards";
function DiscoverSection() {
  const titles = [
    "HABERLER",
    "ETKİNLİKLER",
    "MÜZİKLER",
    "VİDEOLAR",
    "İLETİŞİM",
  ];
  return (
    <div className="md:px-20 grid grid-cols-12 text-white">
      <div className="col-span-12 md:col-span-7 grid grid-cols-12">
        <div className="flex items-center col-span-10  ">
          <div className="md:text-[40px] text-3xl font-bold text-white mr-5">
            KEŞFET
          </div>
          <img
            src="/images/discovery.png"
            className="h-8 w-8 md:h-12 md:w-12"
          />
        </div>
        <div className="col-span-2 flex items-center justify-end space-x-4">
          <img src="/images/search.png" />
          <img src="/images/dc1.png" />
          <img src="/images/dc2.png" />
        </div>
        <div className="col-span-12  mb-10">
          <Cards />
        </div>
      </div>
      <div className="md:col-span-1 md:block hidden"></div>
      <div className="md:col-span-4 col-span-12 ">
        <div className="uppercase text-[40px] font-bold">
          ne görmek istersin?
        </div>
        <Tabs />
        <div className="text-[40px] font-bold text-white mr-5 mb-10">
          GELİŞMELERDEN İLK SEN HABERDAR OL!
        </div>
        <EmailSubscribe />
        <div className="my-10">
          <img src="/images/socials.png" className="h-10" />
        </div>
        <div className="flex space-x-4 flex-wrap">
          {titles.map((title, index) => (
            <div
              key={index}
              className="cursor-pointer hover:text-amber-300 transition"
            >
              {title}
            </div>
          ))}
        </div>
        <div className="mt-10 text-[#5C5C5C]">
          © RAPKOLOGY All Rights Are Reserved 2022.
        </div>
      </div>
    </div>
  );
}

export default DiscoverSection;
