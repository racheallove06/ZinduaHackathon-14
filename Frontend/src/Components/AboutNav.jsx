import React from "react";
import { Link } from "react-router-dom"; // Add this import
import logo from "../assets/nobackground.png";
const Navbar1 = () => {
  return (
    <div className="w-screen h-[80px] z-1 fixed drop-shadow-lg  top-0 left-0 right-0 bg-opacity-75  p-4 text-white ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          {/* Add your logo import statement and usage here */}
          <img src={logo} className="mr-4 w-20" alt="Logo" />
          <ul className="hidden md:flex text-white space-x-9">
            <li className="hover:border-b border-[#f2910a] hover:text-[#f2910a]">
              <Link to="/" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:border-b border-[#f2910a] hover:text-[#f2910a]">
              <Link to="/market" smooth={true} offset={-200} duration={500}>
                Market
              </Link>
            </li>
            <li className="hover:border-b border-[#f2910a] hover:text-[#f2910a]">
              <Link
                to="/organizations"
                smooth={true}
                offset={-50}
                duration={500}
              >
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
    </div>
  );
};

export default Navbar1;
