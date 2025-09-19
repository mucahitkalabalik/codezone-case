import React from "react";
import { Data } from "@/Data/CardData";
import Link from "next/link";

function Cards() {
  return (
    <div className="mt-10">
      {Data.map((item, index) => (
        <div key={index} className=" grid grid-cols-12 mb-10 md:px-0 px-5 ">
          <div className="md:col-span-3 col-span-12 pr-4 md:mb-10 mb-5 md:block flex flex-col items-center">
            <img src={item.bg} className="md:h-40 h-50 w-full object-cover" />
            <div className="md:mt-12 mt-5  text-[#3B3B3B] text-start w-full">
              {item.date}
            </div>
          </div>
          <div className="md:col-span-9 col-span-12">
            <div className="md:text-2xl flex items-center space-x-3 mb-5 md:mb-0">
              <img src={item.img} />
              <div className="font-bold">{item.name}</div>
            </div>
            <div className="md:text-[25px] font-bold text-white">
              {item.description}
            </div>
            <div className=" border-b border-[#3B3B3B] md:mt-10 mt-5"></div>
            <div className="md:mt-15 mt-5 mb-5 md:mb-0">
              <Link href={`/blog/${item.slug}`}>Daha Fazla Oku</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
