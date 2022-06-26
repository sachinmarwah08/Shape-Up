import React from "react";
import Trainer from "../trainer/Trainer";

const CoverImage = () => {
  return (
    <>
      <div className="relative bg-[url('/assets/images/cover.webp')] bg-[transparent]  bg-cover bg-center bg-no-repeat w-full mb-2 opacity-90 h-[20vh] lg:h-[65vh]">
        <div className="absolute top-0 flex flex-col items-center justify-center h-[20vh] w-full text-white lg:h-full">
          <h2 className="lg:text-[3.5rem] text-[15px] text-center mb-4 font-medium">
            Your Fitness Partner Where Ever You Are
          </h2>
          <p className="lg:text-[1.5rem] text-[11px] lg:w-[50%] w-[60%] text-center font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ut
            quisquam, distinctio illo, debitis repudiandae.
          </p>
        </div>
      </div>
    </>
  );
};

export default CoverImage;
