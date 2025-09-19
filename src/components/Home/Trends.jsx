import React from "react";
import TrendCard from "./Trends/TrendCard";
import btn from "../../../public/images/all-btn.png";
import { Data } from "@/Data/CardData";

function Trends() {
 
  return (
    <div className="w-full max-w-full h-auto px-4 md:px-10 lg:px-20 mb-[80px] overflow-hidden">
      <div className="trends-title text-white text-[32px] md:text-[40px] lg:text-[60px] flex items-center justify-center md:justify-start mt-20 mb-10 font-bold">
        TRENDLER
        <img src="/images/trends.png" alt="Trends" className="w-8 h-5 md:w-10 md:h-6 ml-3 md:ml-5" />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-12 md:gap-0">
        {Data.map((item) => (
          <TrendCard key={item.id} item={item} />
        ))}
      </div>
      <div className="w-full flex justify-center mt-10">
        <button
          className="relative w-[200px] h-[60px] font-saira  rounded-md text-black overflow-hidden font-bold text-[14px] md:text-[20px]"
          style={{
            backgroundImage: `url(${btn.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          Tümünü Gör
        </button>
      </div>
    </div>
  );
}

export default Trends;
