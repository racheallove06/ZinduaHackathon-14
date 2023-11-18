import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/nobackground.png";

const Navbar1 = () => {
  return (
    <div className="px-2 flex justify-between items-center w-full h-full">
      <div className="flex items-center">
        {/* Add your logo import statement and usage here */}
        <img src={logo} className="mr-4 w-20" alt="shamba logo" />
        <ul className="flex space-x-9">
          <li className="hover:border-b border-[#f2910a] hover:text-[#f2910a]">
            <Link to="/" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li
            style={{ marginRight: "2rem" }}
            className="hover:border-b border-[#f2910a] hover:text-[#f2910a] mr-3"
          >
            <Link to="/market" smooth={true} offset={-200} duration={500}>
              Marketttttttt
            </Link>
          </li>
          <li
            style={{ marginRight: "2rem" }}
            className="hover:border-b border-[#f2910a] hover:text-[#f2910a]"
          >
            <Link to="/organizations" smooth={true} offset={-50} duration={500}>
              Organizations
            </Link>
          </li>
          <li className="hover:border-b border-[#f2910a] hover:text-[#f2910a]">
            <Link to="/about" smooth={true} offset={-100} duration={500}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar1;
