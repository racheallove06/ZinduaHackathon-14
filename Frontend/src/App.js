import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import Navbar from './components/Navbar'
import Home from './components/Home'
// import Footer from './components/Footer'
import About from './components/About'
import Organizations from './components/Organizations'
import Market from './components/Market'
import SignUp from './components/SignUp'
import LogIn from './components/Login'
import CoursesHome from './components/CoursesHome'
import AnimalFarming from './components/AnimalFarming'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/courses" element={<CoursesHome />} />
        <Route path="/animalfarming" element={<AnimalFarming />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
