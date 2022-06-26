import { NextPage } from "next";

const Hero = () => {
  return (
    <>
      <div className="relative object-contain lg:w-full lg:h-full">
        <video
          className="object-contain"
          src="/assets/video/cover.mp4"
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 flex flex-col h-[30vh] items-center justify-center text-center text-white lg:w-full lg:h-full">
          <h1 className="lg:text-[5rem] text-[1.5rem] pb-3 font-bold ">
            Fitness Help Me Feel Better
          </h1>
          <p className="lg:text-[22px] text-[11px] w-[60%] pb-4 font-normal text-grey">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
            nisi minus perspiciatis optio, id deserunt.
          </p>
          <button className="border-[1px] text-[14px] px-5 py-0.5 transition-all rounded-md hover:bg-grey border-x-greyText lg:px-14 lg:py-2 lg:mt-8">
            Get started
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
