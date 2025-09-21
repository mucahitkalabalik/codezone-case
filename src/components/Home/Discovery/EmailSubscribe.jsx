import React from "react";

function EmailSubscribe() {
  return (
    <div className="w-full border-b border-[#3B3B3B] flex items-center mb-5">
      <input
        type="email"
        placeholder="EMAIL"
        className="flex-1 bg-transparent outline-none px-2 py-3 placeholder-white "
      />
      <button className="flex items-center gap-2 text-[#F0E74D] px-4 py-2 uppercase font-bold">
        Gönder
        <img src="/images/right-yellow.png" className="h-3" />
      </button>
    </div>
  );
}

export default EmailSubscribe;
