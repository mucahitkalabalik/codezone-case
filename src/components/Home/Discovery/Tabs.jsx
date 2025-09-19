"use client";
import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    "Türk Rap",
    "Yabancı Rap",
    "Rap Haberleri",
    "Haftanın Klipleri",
    "Ayın Klipleri",
    "Rap Sohbetleri",
    "Rap Müsabakaları",
  ];

  return (
    <div className=" mb-10 md:mb-30">
      <div className="flex space-x-4 md:flex-wrap md:overflow-x-auto py-4 scrollbar-hide overflow-x-auto">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2   whitespace-nowrap mb-2 ${
              activeTab === index
                ? "bg-[#F0E74D] text-black border-0 "
                : " text-white border-1 border-white "
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tabs;
