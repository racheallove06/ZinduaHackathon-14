import React from "react";
import Navbar from "./Navbar";
import banner from "../assets/banner.png";
import farmers from "../assets/females.jpeg";
const Organizations = () => {
  return (
    <div>
      <Navbar />
      <div className=" ">
        <img src={banner} alt="Banner" className="w-full" />
      </div>
      <div className=" flex bg-[#59a985]">
        <div>
          {" "}
          <h2 className="text-[30px] text-gray-600 mt-20 ml-3 font-bold">
            {" "}
            Empowering farmers on global markets{" "}
          </h2>{" "}
          <p className="ml-3 text-[28px] ">
            Get one-on-one mentorship from organizations that help farmers
            learn, diversify, and sell their goods on global markets.
          </p>{" "}
        </div>

        <img src={farmers} className="w-[600px]" />
      </div>

      {/* organizations*/}

      <div className="flex"></div>
    </div>
  );
};

export default Organizations;
