import React from "react";
import FavCarousel from "@/components/Home/Favorites/FavCarousel";
import Favorite from "../../../public/images/favorite.png";
function Favorites() {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full mb-[80px] text-white">
      <div>
        <div
          className="pb-2 w-90 md:w-150"
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
        <div className="pl-20 pt-20">
          <div className="text-5xl font-bold text-start mb-1 uppercase text-white ">
            Ayın
          </div>
          <div className="text-5xl font-bold text-start mb-4 uppercase text-white">
            Favorileri
          </div>
        </div>
      </div>
      <div>
        <FavCarousel />
      </div>
    </div>
  );
}

export default Favorites;
