import React from "react";
import farmingImg from "../../src/assets/images/animal.png";
import Button from "./Button";
import Navbar from "./Navbar";
import Nav from "./AnimalsNav";

function AnimalFarming() {
  return (
    <div>
      <Navbar />
      <Nav>
        <h2 className="text-[#A77A04] mr-[45%]"> My Courses</h2>
      </Nav>
      <div className="flex gap-10 ml-20  items-start w-[43rem] mt-20">
        <img
          src={farmingImg}
          alt="grazing sheeps"
          className="border-[11.765px] border-solid border-[#ec8b1c9e] w-[22.5rem] h-[18.8235rem] "
        />
        <div className="flex flex-col items-center">
          <div>
            <h2 className="text-[#A77A04] text-3xl font-semibold">
              Animal Farming
            </h2>
            <p className="text-[#503C22] text-2xl font-normal text-center mt-4 mb-11">
              This is the rearing of animals for their products
            </p>
          </div>
          <Button type="resume">Start</Button>
        </div>
      </div>
      <div className="w-[60%] h-[2px] ml-[20%] bg-[#EA9537]  mt-[5%]"></div>

      <div className="flex items-center flex-col">
        <h2 className="text-[#A77A04] my-10 text-3xl font-medium">
          What you will learn
        </h2>
        <p className="w-[38.25rem] h-[8.625rem] flex-shrink-0 text-xl text-center leading-normal">
          Start with essentials like animal nutrition, health care, and
          breeding. Then dive into specific topics like sustainable practices,
          disease prevention, and modern farming technologies.
        </p>
        <p className="w-[38.25rem] h-[8.625rem] flex-shrink-0 text-xl text-center leading-normal">
          Explore topics like herd management, pasture rotation, and ethical
          animal treatment. Learning about market trends and effective business
          strategies can also enhance your skills in animal farming.
        </p>
      </div>
    </div>
  );
}

export default AnimalFarming;
