import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Organizations from "./Components/Organizations";
import Courses from "./Components/Courses";
import Market from "./Components/Market";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/organizations" element={<Organizations />} />
      </Routes>
    </Router>
  );
};

export default App;
