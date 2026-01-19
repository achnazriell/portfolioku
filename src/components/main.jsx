import Nav from "./nav"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Technology from "./Technology"
import Projects from "./Projects"
import Home from "./Home"
import About from "./About"
import Skills from "./Skills"
import Contact from "./Contact"
import Backsound from "./Backsound";

const Main = () => {
  return (
    <Router>
      <Backsound />
      <div className="min-h-screen flex flex-col">
        <Nav />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="about" element={<About />} />
              <Route path="skills" element={<Skills />} />
              <Route path="/" element={<Navigate to="about" />} />
            </Route>
            <Route path="/technology" element={<Technology />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        {/* Footer */}
        <footer className="text-center mt-10 py-4  bg-transparent text-gray-800 dark:text-white text-xxs lg:text-xs flex flex-col gap-1 lg:gap-4 font-light ml-1 lg:ml-2">
          <div className="flex justify-center items-center bg-transparent text-xxs lg:text-xs font-semibold gap-1 lg:gap-2 mt-4 lg:mt-0 ">
            Created Using
            <div className="flex gap-1">
              <img src="\react.png" className="h-3 lg:h-4" alt="React" />
              <img src="\tailwind.png" className="h-2 lg:h-3" alt="Tailwind CSS" />
            </div>
          </div>
          <p className="text-xxs lg:text-xs font-light">Created by Achmad Nazriel Pradita All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  )
}

export default Main
