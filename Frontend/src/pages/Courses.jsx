import React from "react";
<<<<<<< HEAD:Frontend/src/pages/Courses.jsx
import Navbar from "../components/Navbar";
=======
import course1 from "../../src/assets/images/course1.png";
import cattleImg from "../../src/assets/images/cattlefarming.png";
import irrigationImg from "../../src/assets/images/irrigation.png";
import erosionImg from "../../src/assets/images/soilerosion.png";
import rotationImg from "../../src/assets/images/rotation.png";
import weatherImg from "../../src/assets/images/weather.png";
import planthealthImg from "../../src/assets/images/planthealth.png";
import farmingImg from "../../src/assets/images/animal.png";
import { useNavigate } from "react-router-dom";
>>>>>>> newfiles:Frontend/src/Components/Courses.jsx

const courseItems = [
  {
    image: course1,
    title: "Bee Keeping",
  },
  {
    image: cattleImg,
    title: "Cattle Farming",
  },
  {
    image: irrigationImg,
    title: "Irrigation practices",
  },
  {
    image: erosionImg,
    title: "Soil erosion",
  },
  {
    image: rotationImg,
    title: "Crop rotation",
  },
  {
    image: weatherImg,
    title: "Weather patterns",
  },
  {
    image: planthealthImg,
    title: "Plant health",
  },
  {
    image: farmingImg,
    title: "Animal farming",
  },
];
const Courses = () => {
  const navigate = useNavigate();
  const handleCourseNavigate = (e) => {
    e.preventDefault();
    navigate("/animalfarming");
  };
  return (
    <div className="pt-24">
      {" "}
      {/* Adjust the padding-top value to create space */}
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-7xl">
        {" "}
        {/* Add mx-auto for horizontal centering */}
        {courseItems.map((item, index) => (
          <div className="relative   w-96 h-96" key={index}>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
            <button
              onClick={handleCourseNavigate}
              className="absolute bottom-4 w-96 left-1/2 transform -translate-x-1/2 text-white bg-[#1B4821AD] text-center bg-opacity-50 px-4 py-2 rounded"
            >
              {item.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
