"use client";
import React, { useState } from "react";

function Tabs() {
  const [activeTab, setActiveTab] = useState(4);
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
    <div className="mb-30">
      <div className="flex space-x-4 flex-wrap overflow-x-auto py-4">
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
