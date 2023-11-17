import React from 'react'

import About from './components/About'
import Organizations from './components/Organizations'
import Courses from './components/Courses'
import Market from './components/Market'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/about" element={<About />} />

  )
}

export default App
