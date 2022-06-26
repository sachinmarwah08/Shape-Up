import { NextPage } from "next";
import Navbar from "../components/navigation/Navbar";
import Healthy from "../components/layouts/stay-healthy/Healthy";
import CoverImage from "../components/layouts/Cover/CoverImage";
import Trainer from "../components/layouts/trainer/Trainer";

import Footer from "../components/footer/Footer";
import Contact from "../components/layouts/Contact-Us/Contact";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Navbar />
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
