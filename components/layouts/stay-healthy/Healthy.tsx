import React from "react";

const list = [
  {
    image: "/assets/images/dumbbell.png",
    heading: "Care about our team",
    title:
      "Understand what matters to our employees. Give them what they need to do their best work.",
  },
  {
    image: "/assets/images/dumbbell.png",
    heading: "Be excellent to each other",
    title:
      " No games. No bullshit. We rely on our peers to improve. Be open, honest and kind.",
  },
  {
    image: "/assets/images/dumbbell.png",
    heading: "Pride in what we do",
    title:
      "Value quality and integrity in everything we do. At all times. No exceptions",
  },
  {
    image: "/assets/images/dumbbell.png",
    heading: "Don't #!&$ the customer",
    title:
      "Understand customers' stated and unstated needs. Make them wildly successful. ",
  },
  {
    image: "/assets/images/dumbbell.png",
    heading: "Do the impossible",
    title:
      "Be energized by difficult problems. Revel in unknowns. Ask Why?, but always question, Why not? ",
  },
  {
    image: "/assets/images/dumbbell.png",
    heading: "Sweat the small stuff",
    title:
      "We believe the best products come from the best attention to detail. Sweat the small stuff.",
  },
];

const Healthy = () => {
  return (
    <>
      <div className="md:bg-[transparent] w-full justify-evenly flex items-center p-5 lg:h-[44vh] h-[40vh] md:h-auto overflow-hidden">
        <div className="w-[70vw] p-6 md:w-[75vw] flex items-center flex-col">
          <h6 className="text-[#FF6000] font-[600] text-[18px] lg:text-[20px] text-center">
            Stay Healthy
          </h6>
          <p className="text-[#101828] text-[20px] text-center font-[500] mt-2 lg:text-[40px]">
            Setup Your Body With Workout
          </p>
          <p className="text-[#667085] text-center sm:text-center lg:mt-2 font-[700] mt-6 text-[15px] lg:text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consectetur, mollitia amet nihil! Separated they live in
            Bookmarksgrove right at the coast of the Semantics, a large language
            ocean.
          </p>
        </div>
      </div>
      <div className="container z-50 px-6 mx-auto my-4 lg:my-8">
        <div className="grid w-full grid-cols-1 mx-auto text-center md:grid-cols-2 xl:grid-cols-3">
          {list.map((item) => (
            <div className="w-[90%] mb-11 border-[#EAECF0] shadow-[0_0px_44px_rgba(0,0,0,0.08)] border-[1px] p-4 mx-auto rounded-[10px]">
              <img className="mx-auto mt-2 w-14 h-14" src={item.image} />
              <h1 className="text-[20px] py-2 mt-4 font-[700] text-[#101828]">
                {item.heading}
              </h1>
              <p className="text-[#667085] py-2 text-[16px] font-[700]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Healthy;
