import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[45vh] text-center">
      <h1 className="text-[4rem] font-bold">Unsplash</h1>
      <p className="text-[2rem] font-medium text-greyText">
        The internet’s source of freely-usable images. Powered by creators
        everywhere.
      </p>
    </div>
  );
};

export default Header;
