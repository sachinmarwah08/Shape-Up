import { NextPage } from "next";
import Navbar from "../components/navigation/Navbar";
import Healthy from "../components/layouts/stay-healthy/Healthy";
import CoverImage from "../components/layouts/Cover/CoverImage";
import Trainer from "../components/layouts/trainer/Trainer";

import Footer from "../components/footer/Footer";
import Contact from "../components/layouts/Contact-Us/Contact";
import Hero from "../components/layouts/Home/Hero";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Healthy />
        <CoverImage />
        <Trainer />
        <Contact />
        <Footer />
      </div>
    </>
  );
};
export default Home;
