import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Organizations from './components/Organizations'
import Courses from './components/Courses'
import Market from './components/Market'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/organizations" element={<Organizations />} />
      </Routes>
    </Router>
  )
}

export default App
