'use client';
import React from "react";
import Tabs from "./Discovery/Tabs";
import Cards from "./Discovery/Cards";
import Subscribe from "./Discovery/Subscribe";


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
        <div className="flex items-center col-span-10 pl-5 md:pl-0   ">
          <div className="md:text-[40px] text-3xl font-bold text-white mr-5">
            KEŞFET
          </div>
          <img
            src="/images/discovery.png"
            className="h-8 w-8 md:h-12 md:w-12"
          />
        </div>
        <div className="col-span-2 flex items-center justify-end space-x-4 pr-5 md:pr-0 ">
          <img src="/images/search.png" />
          <img src="/images/dc1.png" />
          <img src="/images/dc2.png" />
        </div>
        <div className="col-span-12 md:hidden  mt-10 ml-5 ">
          <div className="uppercase text-[24px] md:text-[40px] font-bold ">
            ne görmek istersin?
          </div>

          <Tabs />
        </div>
        <div className="col-span-12  mb-10">
          <Cards />
        </div>
      </div>
      <div className="md:col-span-1 md:block hidden"></div>
      <div className="md:col-span-4 col-span-12 hidden md:block ">
        <div className="uppercase text-[40px] font-bold ">
          ne görmek istersin?
        </div>

        <Tabs />

        <Subscribe />
      </div>
      <div className="col-span-12 md:hidden  mt-10 mx-5 ">
        <Subscribe />
      </div>
    </div>
  );
}

export default DiscoverSection;
