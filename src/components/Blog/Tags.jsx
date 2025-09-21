import React from "react";

function Tags({ tags }) {
  return (
    <div className="flex gap-2 mr-5">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-[10px] py-[10px] bg-[#323232] text-white  text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
