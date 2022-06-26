import React from "react";
import ContactUs from "../Contact-Us/Contact";
import Cards from "./Cards";

const Trainer = () => {
  return (
    <>
      <div className="md:bg-[transparent] w-full justify-evenly flex items-center p-5 lg:h-[44vh] h-[40vh] md:h-auto overflow-hidden">
        <div className="w-[70vw] p-6 md:w-[75vw] flex items-center flex-col">
          <h6 className="text-[#FF6000] font-[600] text-[18px] lg:text-[20px] text-center">
            Trainer
          </h6>
          <p className="text-[#101828] text-[20px] text-center font-[500] mt-2 lg:text-[40px]">
            Our Trainers
          </p>
          <p className="text-[#667085] text-center sm:text-center lg:mt-2 font-[700] mt-6 text-[15px] lg:text-[20px]">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
      <Cards />
    </>
  );
};

export default Trainer;
