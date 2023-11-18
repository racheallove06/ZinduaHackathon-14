import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Nav = ({ children }) => {
  const navigate = useNavigate();

  const goToPreviousPage = () => {
    navigate(-1); // Navigates back to the previous page
  };
  return (
    <nav className="w-screen h-[80px]   z-10 text-center flex items-center font-semibold justify-between bg-[#93C0B6]   drop-shadow-lg ">
      <button onClick={goToPreviousPage} className="">
        <IoIosArrowRoundBack size={50} />
      </button>
      {children}
    </nav>
  );
};

export default Nav;
