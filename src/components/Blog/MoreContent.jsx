import React from "react";
import Link from "next/link";
import { Data } from "@/Data/DummyData";

function MoreContent() {
  return (
    <div className="w-full">
      {Data.slice(0, 3).map((item) => (
        <Link
          key={item._id}
          href={`/blog/${item.attributes.slug}`}
          className="flex items-start gap-4 py-4 border-b border-[#3B3B3B] hover:bg-[#313131] transition-colors"
        >
          <img
            src={item.attributes.img}
            alt={item.attributes.title}
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="flex-1">
            <p className="text-white text-lg font-bold">
              {item.attributes.desc}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MoreContent;
