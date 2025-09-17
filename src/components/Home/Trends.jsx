import React from "react";
import TrendCard from "./Trends/TrendCard";
import btn from "../../../public/images/all-btn.png";

function Trends() {
  let Data = [
    {
      id: 1,
      name: "Jonathan Stewart",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
      img: "/images/jonathon.png",
    },
    {
      id: 2,
      name: "Steve Rogerson",
      description:
        "Praesent lorem orci, mattis non efficitur id Curabitur at risus sodales Aenean at.",
      img: "/images/steve.png",
    },
    {
      id: 3,
      name: "Ismail Kor",
      description:
        "ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus ...",
      img: "/images/ismail.png",
    },
    {
      id: 4,
      name: "Jonathan Stewart",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.",
      img: "/images/jonathon.png",
    },
    {
      id: 5,
      name: "Steve Rogerson",
      description:
        "Praesent lorem orci, mattis non efficitur id Curabitur at risus sodales Aenean at.",
      img: "/images/steve.png",
    },
    {
      id: 6,
      name: "Ismail Kor",
      description:
        "ultricies dignissim nibh ut cursus. Nam et quam sit amet turpis finibus maximus ...",
      img: "/images/ismail.png",
    },
  ];

  return (
    <div className="w-full h-auto px-10 md:px-20 mb-[80px]">
      <div className="trends-title text-white text-[40px] md:text-[60px] flex items-center justify-start mt-20 mb-10 font-bold">
        TRENDLER
        <img src="/images/trends.png" alt="Trends" className="w-10 h-6 ml-5" />
      </div>
      <div className="flex  flex-wrap">
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
