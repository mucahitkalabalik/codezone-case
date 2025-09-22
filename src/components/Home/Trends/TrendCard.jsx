"use client";
import React from "react";
import Link from "next/link";

function TrendCard({ item }) {
  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12 flex flex-col mb-10">
      <div className="mr-5 flex">
        <div className="flex items-start mr-5 text-[50px] text-[#2A2A2A]">
          {`0${item.id}`}
        </div>
        <div className="flex items-start flex-col mb-5 text-white">
          <div className="flex items-center justify-start mb-5 mt-5">
            <img src={item.img} alt={item.name} />
            <div className="ml-5">{item.name}</div>
          </div>
          <div className="mb-10 text-[16px] md:text-[13px] xl:text-[22px] font-bold uppercase md:min-h-[150px]">
            {item.description}
          </div>
          <div className="border border-[#3B3B3B] w-full"></div>
          <div className="mt-5">
            <Link
              href={`/blog/${item.slug}`}
          
            >
              Daha Fazla Oku
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendCard;
