import React from "react";
import { Data } from "@/Data/CardData";
function Cards() {
  return (
    <div className="mt-10">
      {Data.map((item, index) => (
        <div key={index} className=" grid grid-cols-12 mb-10">
          <div className="md:col-span-3 col-span-12 pr-4 mb-10">
            <img src={item.bg} className="md:h-40 h-30 object-cover" />
            <div className="md:mt-15  text-[#3B3B3B]">{item.date} </div>
          </div>
          <div className="md:col-span-9 col-span-12">
            <div className="text-2xl flex items-center space-x-3">
              <img src={item.img} />
              <div>{item.name}</div>
            </div>
            <div className="text-[25px] font-bold text-white">
              {item.description}
            </div>
            <div className=" border-b border-[#3B3B3B] md:mt-10 mt-5"></div>
            <div className="md:mt-15 mt-5">Daha Fazla Oku</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
