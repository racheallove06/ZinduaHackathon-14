import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component
import backgroundImage from "../assets/bg.jpg"; // Replace with the path to your image
import AboutNav from "./AboutNav";
const About = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh", // Set minimum height to cover the entire viewport
  };

  return (
    <div style={appStyle}>
      <AboutNav />
      {/* Your app content goes here */}
    </div>
  );
};

export default About;
