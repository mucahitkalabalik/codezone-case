import React from "react";
import FavCarousel from "@/components/Home/Favorites/FavCarousel";
import Favorite from "../../../public/images/favorite.png";
function Favorites() {
  return (
    <div className="grid grid-cols-12 mb-[120px] text-white">
      <div className="col-span-12 lg:col-span-4 flex flex-col justify-center md:items-start">
        <div
          className="pb-2 w-90 lg:w-150"
          style={{
            backgroundImage: `url(${Favorite.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-center items-center mb-4 p-5 pb-5 ">
            <img
              src="/images/youtube.png"
              alt=""
              className="mr-5 mt-5"
              height={10}
              width={150}
            />
            <img
              src="/images/spotify.png"
              alt=""
              className="mt-5"
              height={10}
              width={150}
            />
          </div>
        </div>
        <div className="md:pl-20 md:pt-20">
          <div className="text-4xl md:text-5xl font-bold text-center md:text-start mb-1 uppercase text-white ">
            Ayın
          </div>
          <div className="text-4xl md:text-5xl font-bold text-center md:text-start  uppercase text-white">
            Favorileri
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8 overflow-hidden ">
        <FavCarousel />
      </div>
    </div>
  );
}

export default Favorites;
