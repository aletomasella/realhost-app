import React from "react";
import CinemaImage from "../../../assets/cinema-image.png";

const Hero = () => {
  return (
    <>
      <div className="text-center bg-white pb-10">
        <div className="w-60 mx-auto">
          <img src={CinemaImage} alt="Home Cinema" />
        </div>
        <h1 className="text-2xl text-gray-700 uppercase">
          Movies APP by Alejandro
        </h1>
        <button className="bg-gray-700 text-white py-3 px-6 rounded-md text-sm mt-4">
          <a
            href="https://portfolioalejandrotomasella.vercel.app/"
            target={"_blank"}
          >
            VISIT MY PORTOFOLIO
          </a>
        </button>
      </div>
    </>
  );
};

export default Hero;
