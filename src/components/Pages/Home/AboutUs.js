import React from "react";
import { GiChefToque } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div className="text-center my-36 shadow-lg rounded-xl text-justify md:p-20 bg-zinc-700 text-white">
      <div className="flex items-center justify-center">
        <GiChefToque className="w-32 h-32 rounded-full text-red-400"></GiChefToque>

        <h2 className="text-5xl font-bold">About Us</h2>
      </div>
      <div className="lg:w-1/2 md:mx-auto px-4 py-6 md:text-justify">
        <p className="text-xl font-medium ">
          This is the best website to have homemade foods in a good quality and
          quantity.My principal purpose is to make your food habit and health
          sound and prepare a family or friends gathering .That's why I always
          provide food packages.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
