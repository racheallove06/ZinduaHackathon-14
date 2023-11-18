import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import logo from "../assets/MKULIMA.jpg";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import profile from "../assets/pro.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-[#1B4821] drop-shadow-lg ">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <img src={logo} className="mr-4 w-20 " alt="shamba logo" />
          <ul className="hidden md:flex text-white space-x-9">
            <li className="hover:border-b border-[#f2910a] hover:text-[#f2910a] ">
              <Link to="/" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:border-b border-[#f2910a] hover:text-[#f2910a]">
              <Link to="/market" smooth={true} offset={-200} duration={500}>
                Market
              </Link>
            </li>
            <li className="hover:border-b border-[#f2910a] hover:text-[#f2910a] ">
              <Link
                to="/organizations"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Organizations
              </Link>
            </li>
            <li className="hover:border-b border-[#f2910a] hover:text-[#f2910a] ">
              <Link to="/about" smooth={true} offset={-100} duration={500}>
                About
              </Link>
            </li>
            {/*<li>
              <Link to="pricing" smooth={true} offset={-50} duration={500}>
                Pricing
              </Link>
  </li>*/}
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-[#f2910a] mr-4">
            <FaBell size={30} />
          </button>
          <Link to="/profile">
            <div className="w-[52px] h-[52px] rounded-full bg-[white] flex justify-center items-center cursor-pointer mr-5">
              <img src={profile} />

              {/* <CgProfile className="w-[60%] h-[60%] object-contain" /> */}
            </div>
          </Link>
          <div className="text-[#f2910a] mt-2">
            <CiLogout size={30} />
          </div>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link onClick={handleClose} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="about"
            smooth={true}
            offset={-200}
            duration={500}
          >
            Market
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="support"
            smooth={true}
            offset={-50}
            duration={500}
          >
            Organizations
          </Link>
        </li>
        <li className="border-b-2 border-zinc-300 w-full">
          <Link
            onClick={handleClose}
            to="platforms"
            smooth={true}
            offset={-100}
            duration={500}
          >
            About
          </Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
