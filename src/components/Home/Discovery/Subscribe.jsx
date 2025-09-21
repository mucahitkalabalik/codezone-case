import React from "react";
import EmailSubscribe from "./EmailSubscribe"; // Eğer kendi componentinse import etmeyi unutma

function Subscribe() {
  const titles = [
    "HABERLER",
    "ETKİNLİKLER",
    "MÜZİKLER",
    "VİDEOLAR",
    "İLETİŞİM",
  ];

  return (
    <div>
      <div className="text-[22px] md:text-[40px] font-bold text-white mr-5 mb-10">
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
            className="cursor-pointer hover:text-amber-300 transition mb-5"
          >
            {title}
          </div>
        ))}
      </div>

      <div className="mt-10 text-[#5C5C5C]">
        © RAPKOLOGY All Rights Are Reserved 2022.
      </div>
    </div>
  );
}

export default Subscribe;
