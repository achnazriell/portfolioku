"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { SunIcon, MoonIcon } from "@heroicons/react/solid"

const Nav = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode")
    return savedMode !== null ? JSON.parse(savedMode) : true
  })

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      document.body.classList.add("bg-gray-900", "text-white")
    } else {
      document.documentElement.classList.remove("dark")
      document.body.classList.remove("bg-gray-900", "text-white")
      document.body.classList.add("bg-white", "text-gray-900")
    }

    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav
        className={`backdrop-blur-md sticky top-0 z-50 hidden sm:flex items-center justify-between px-4 md:px-6 lg:px-10 py-4 lg:py-5 text-gray-800 dark:text-white transition-all duration-300 ${
          scrolled ? "bg-white/80 dark:bg-gray-900/80 shadow-lg" : "bg-transparent"
        }`}
      >
        <Link className="text-sm md:text-base lg:text-lg font-mono group" to="/">
          <h1 className="transition-colors duration-300 group-hover:text-blue-500">Achmad Nazriel Pradita</h1>
          <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300 group-hover:text-blue-400">
            Front-end Developer
          </div>
        </Link>

        <ul className="text-sm md:text-base lg:text-xl flex items-center justify-center gap-6 md:gap-10 lg:gap-16 nav">
          <li>
            <Link
              className="relative text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:before:w-full before:transition-all before:duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-500 dark:before:bg-blue-400"
              to="/technology"
            >
              Technology
            </Link>
          </li>
          <li>
            <Link
              className="relative text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:before:w-full before:transition-all before:duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-500 dark:before:bg-blue-400"
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <a
              className="relative text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 hover:before:w-full before:transition-all before:duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-blue-500 dark:before:bg-blue-400"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=acmassirau@gmail.com&su=Hello "
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 bg-gray-200 rounded-full dark:bg-gray-700 text-gray-900 dark:text-white hover:scale-110 transition-all duration-300 hover:shadow-lg"
        >
          {darkMode ? <SunIcon className="w-5 h-5 md:w-6 md:h-6" /> : <MoonIcon className="w-5 h-5 md:w-6 md:h-6" />}
        </button>
      </nav>

      <nav className="block sm:hidden">
        <button
          onClick={toggleMenu}
          className="fixed top-5 right-6 flex flex-col justify-center items-center gap-1 backdrop-blur-sm z-50 h-8 w-8 rounded-md transition-all duration-300 hover:scale-110"
        >
          <div
            className={`w-5 h-[2px] bg-black dark:bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[6px]" : ""}`}
          ></div>
          <div
            className={`w-5 h-[2px] bg-black dark:bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-5 h-[2px] bg-black dark:bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
          ></div>
        </button>

        <div
          className={`w-full h-full fixed right-0 top-0 backdrop-blur-xl z-40 transition-all duration-500 flex justify-center items-center ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <button
            onClick={toggleDarkMode}
            className="absolute top-6 left-6 p-2 bg-gray-200 rounded-full dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 hover:scale-110"
          >
            {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>

          <ul className="flex flex-col text-2xl gap-8 text-center font-poppins font-semibold text-gray-700 dark:text-gray-200">
            {[
              { to: "/", label: "Home", delay: "0.1s" },
              { to: "/technology", label: "Technology", delay: "0.2s" },
              { to: "/projects", label: "Projects", delay: "0.3s" },
              {
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=acmassirau@gmail.com&su=Hello ",
                label: "Contact",
                delay: "0.4s",
              },
            ].map((item, index) => (
              <li
                key={index}
                className={`transform transition-all duration-500 ${
                  isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: isOpen ? item.delay : "0s" }}
              >
                {item.to ? (
                  <Link
                    to={item.to}
                    onClick={toggleMenu}
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={toggleMenu}
                    className="hover:text-blue-500 transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <br />
      <br />
    </>
  )
}

export default Nav
