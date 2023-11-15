import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
