import React from "react";

const Contact = () => {
  return (
    <>
      <div className=" bg-[#F9FAFB] w-full justify-evenly flex flex-col items-center p-5 lg:h-auto h-auto md:h-auto overflow-hidden">
        <div className="w-[70vw] p-6 md:w-[75vw] flex items-center flex-col">
          <h6 className="text-[#FF6000] font-[600] text-[18px] lg:text-[20px] text-center">
            Get In Touch
          </h6>
          <p className="text-[#101828] text-[20px] text-center font-[500] mt-2 lg:text-[40px]">
            Contact Us
          </p>
          <p className="text-[#667085] text-center lg:w-[60%]  sm:text-center lg:mt-4 font-[700] mt-6 text-[15px] lg:text-[20px]">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <form className="w-full lg:w-[40%] p-10 mt-8 mb-10 border-[1px] border-[#EAECF0] shadow-[0_0px_44px_rgba(0,0,0,0.08)] bg-white rounded-lg lg:mt-10">
          <div className="flex flex-wrap w-full mb-6 -mx-3">
            <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
              <label
                className="block mb-2 text-sm text-[#344054] font-medium  tracking-wide text-gray-700"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="block w-full px-4 py-3 border-[1px] leading-tight text-gray-700 bg-gray-200 border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.0.5)]  rounded-[8px] appearance-none focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Sachin"
              />
              {/* <p className="text-xs italic text-red-500">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-full px-3 md:w-1/2">
              <label
                className="block mb-2 text-sm text-[#344054] font-medium  tracking-wide text-gray-700"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="block w-full px-4 py-3 border-[1px] leading-tight text-gray-700 bg-gray-200 border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.0.5)]  rounded-[8px] appearance-none focus:outline-none focus:bg-white"
                id="grid-last-name"
                type="text"
                placeholder="Marwah"
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-sm text-[#344054] font-medium  tracking-wide text-gray-700"
                htmlFor="grid-password"
              >
                Email
              </label>
              <input
                className="block w-full px-4 py-3 border-[1px] leading-tight text-gray-700 bg-gray-200 border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.0.5)]  rounded-[8px] appearance-none focus:outline-none focus:bg-white"
                type="email"
                placeholder="sachin.marwah@gmail.in"
              />
              {/* <p className="text-xs italic text-gray-600">
                Make it as long and as crazy as you'd like
              </p> */}
            </div>
          </div>
          <div className="flex flex-wrap mb-6 -mx-3">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-sm text-[#344054] font-medium  tracking-wide text-gray-700"
                htmlFor="grid-password"
              >
                Phone Number
              </label>
              <input
                className="block w-full px-4 py-3 border-[1px] leading-tight text-gray-700 bg-gray-200 border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.0.5)]  rounded-[8px] appearance-none focus:outline-none focus:bg-white"
                id="grid-password"
                type="email"
                placeholder="sachin.marwah@gmail.in"
              />
              {/* <p className="text-xs italic text-gray-600">
                Make it as long and as crazy as you'd like
              </p> */}
            </div>
          </div>
          <div className="flex flex-wrap mb-4 -mx-3">
            <div className="w-full px-3">
              <label
                className="block mb-2 text-sm text-[#344054] font-medium  tracking-wide text-gray-700"
                htmlFor="grid-password"
              >
                Message
              </label>
              <input
                type="text"
                className="block w-full px-4 py-8 border-[1px] leading-tight text-gray-700 bg-gray-200 border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.0.5)]  rounded-[8px] appearance-none focus:outline-none focus:bg-white"
                // placeholder="sachin.marwah@itday.in"
              />
              {/* <p className="text-xs italic text-gray-600">
                Make it as long and as crazy as you'd like
              </p> */}
            </div>
          </div>
          <div className="flex items-center mb-6">
            <input type="checkbox"></input>
            <p className="ml-2 font-[700] text-[#667085] items-center sm:text-[16px md:text-[16px lg:text-[16px] text-[14px]">
              You agree to our friendly privacy policy.
            </p>
          </div>
          <button className="w-full px-4 py-3 mt-4 mb-2 font-medium text-white rounded-md border-secondary bg-secondary">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
