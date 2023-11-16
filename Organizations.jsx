import React from "react";
import Navbar from "./Navbar";
import banner from "../assets/home.jpeg";
import farmers from "../assets/females.jpeg";
import nuru from "../assets/nurulogo.png";
import agro from "../assets/agrokenya.png";
import acre from "../assets/logo.jpg";
import Footer from "./Footer";
import OrgNavbar from "./OrgNavbar";
import backgroundImage from "../assets/tim.jpg";
const Organizations = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Set minimum height to cover the entire viewport
  };
  return (
    <div>
      <div style={appStyle}>
        {" "}
        <OrgNavbar />{" "}
      </div>

      <div className=" flex bg-[#7dd87d]">
        <div>
          {" "}
          <h2 className="text-[30px] text-black text-right mt-20 font-bold mr-3">
            {" "}
            Empowering farmers on global markets{" "}
          </h2>{" "}
          <p className=" text-[28px] text-right mr-3">
            Get one-on-one mentorship from organizations that help farmers
            learn, diversify, and sell their goods on global markets.
          </p>{" "}
        </div>

        <img src={farmers} className="w-[600px] mt-20 mr-11 mb-6" />
      </div>

      {/* organizations*/}

      <div className="flex mt-20">
        <img src={nuru} className="w-[600px] border p-4 ml-3" />
        <p className="ml-20 w-[250px] font-bold">
          Nuru Kenya, a locally-led NGO, is dedicated to alleviating extreme
          poverty by supporting farmers in transitioning from subsistence
          farming to profitable agribusiness.
        </p>
      </div>

      {/*2*/}
      <div className="flex mt-5">
        <p className="ml-20 w-[250px] font-bold mt-7">
          At Agrokenya we support and train smallholder farmers to earn a decent
          living from Agriculture. We seek to add value and make farmers produce
          more for themselves and earn more income from the sale of excess
          produce.
        </p>
        <img src={agro} className="w-[600px] border p-4 ml-[350px] mr-11 " />
      </div>

      {/*3*/}

      <div className="flex mt-5">
        <img src={acre} className="w-[600px] border p-4 ml-3" />
        <p className="ml-20 w-[250px] font-bold mt-7 tracking-wide">
          {" "}
          One Acre Fund is a social enterprise that supplies smallholder farmers
          in East Africa with asset-based financing and agriculture training
          services to reduce hunger and poverty.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Organizations;
