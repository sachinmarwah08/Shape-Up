import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

//interface
import { IHeaderNav } from "../../Interface/INav";

//utils
import { routes } from "../../utils/routes";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Hero from "../layouts/Home/Hero";

const navData: IHeaderNav[] = [
  {
    name: "Home",
    link: routes.home,
  },
  {
    name: "Trainer",
    link: routes.home,
  },
  {
    name: "Image Gallery",
    link: routes.imageGallery,
  },
  {
    name: "Video Gallery",
    link: routes.home,
  },
  {
    name: "Contact Us",
    link: routes.contactUs,
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="absolute z-20 flex items-center justify-between w-full px-5 py-4 md:px-10">
        <div
          className={`z-30 w-full h-full absolute top-0 left-0 bg-black/50 transition-all ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setOpen(false)}
        ></div>
        <div className="w-[300px] text-white font-medium">SHAPE UP</div>
        <nav className="items-center hidden lg:flex ">
          {navData.map((el, index) => (
            <Nav key={index} item={el} />
          ))}
        </nav>

        <div
          className="z-50 inline-block text-xl cursor-pointer text-primary lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </div>
        <div
          className={`bg-white text transition-all w-60 fixed top-0 h-screen z-40 ${
            open
              ? "right-0 opacity-100 pointer-events-auto"
              : "right-[-100%] opacity-0 pointer-events-none"
          }`}
        >
          <Sidebar data={navData} />
        </div>
      </header>
      <Hero />
    </>
  );
};

export default Navbar;
