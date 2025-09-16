import React from "react";
import Favorite from "../../../public/images/favorite.png";
function Favorites() {
  return (
    <div className="flex gap-4 my-8 w-full    mb-[80px]">
      <div>
        <div
          className="pb-2 w-200"
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
              srcset=""
              className="mr-5 mt-5"
              height={10}
              width={150}
            />
            <img
              src="/images/spotify.png"
              alt=""
              srcset=""
              className="mt-5"
              height={10}
              width={150}
            />
          </div>
        </div>
        <div>
          <div className="text-3xl font-bold text-center mb-4">Ayın</div>
          <div>Favorileri</div>
        </div>
      </div>
      <div>carousel</div>
    </div>
  );
}

export default Favorites;
