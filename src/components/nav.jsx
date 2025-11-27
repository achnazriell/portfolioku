"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { SunIcon, MoonIcon } from "@heroicons/react/solid"

const Nav = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode")
    return savedMode !== null ? JSON.parse(savedMode) : true
  })

  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

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

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  const NavLinkItem = ({ to, href, children }) => {
    const isActive = to ? isActiveLink(to) : false
    const baseClasses = `
      relative px-1 py-2 font-medium
      transition-all duration-300 ease-out
      before:absolute before:bottom-0 before:left-0 before:h-[2px] before:rounded-full
      before:transition-all before:duration-300 before:ease-out
      after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full
      after:transition-all after:duration-500 after:ease-out
      hover:-translate-y-0.5
    `

    const activeClasses = isActive
      ? "text-blue-500 dark:text-blue-400 before:w-full before:bg-blue-500 dark:before:bg-blue-400 after:w-full after:bg-blue-400/50 after:blur-sm"
      : "text-gray-700 dark:text-gray-200 before:w-0 before:bg-blue-500 dark:before:bg-blue-400 after:w-0 after:bg-blue-400/50 hover:text-blue-500 dark:hover:text-blue-400 hover:before:w-full hover:after:w-full hover:after:blur-sm"

    if (href) {
      return (
        <a href={href} className={`${baseClasses} ${activeClasses}`}>
          {children}
        </a>
      )
    }

    return (
      <Link to={to} className={`${baseClasses} ${activeClasses}`}>
        {children}
      </Link>
    )
  }

  return (
    <>
      <nav
        className={`backdrop-blur-md sticky top-0 z-50 hidden sm:flex items-center justify-between px-4 md:px-6 lg:px-10 py-4 lg:py-5 transition-all duration-500 ${scrolled ? "bg-white/80 dark:bg-gray-900/80 shadow-lg shadow-black/5 dark:shadow-black/20" : "bg-transparent"
          }`}
      >
        <Link className="group relative" to="/">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
          <div className="relative">
            <h1 className="text-sm md:text-base lg:text-lg font-mono font-semibold text-gray-800 dark:text-white transition-all duration-300 group-hover:text-blue-500 dark:group-hover:text-blue-400">
              Achmad Nazriel Pradita
            </h1>
            <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:text-blue-400 dark:group-hover:text-blue-300">
              Front-end Developer
            </div>
          </div>
        </Link>

        <ul className="text-sm md:text-base lg:text-lg flex items-center justify-center gap-6 md:gap-10 lg:gap-14">
          <li>
            <NavLinkItem to="/technology">Technology</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/projects">Projects</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/contact">Contact</NavLinkItem>
          </li>
        </ul>

        <button
          onClick={toggleDarkMode}
          className="relative ml-4 p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400 
            transition-all duration-300 
            hover:scale-110 hover:rotate-12
            hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-yellow-500/25
            active:scale-95
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100"
        >
          {darkMode ? (
            <SunIcon className="w-5 h-5 md:w-6 md:h-6 relative z-10 transition-transform duration-300" />
          ) : (
            <MoonIcon className="w-5 h-5 md:w-6 md:h-6 relative z-10 transition-transform duration-300" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="block sm:hidden">
        <button
          onClick={toggleMenu}
          className={`fixed top-5 right-6 flex flex-col justify-center items-center gap-1.5 z-50 h-10 w-10 rounded-xl backdrop-blur-sm 
            transition-all duration-300 
            hover:scale-110 hover:bg-gray-100/50 dark:hover:bg-gray-800/50
            active:scale-95
            ${isOpen ? "bg-gray-100/80 dark:bg-gray-800/80" : ""}`}
        >
          <div
            className={`w-5 h-[2px] bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[8px] bg-blue-500 dark:bg-blue-400" : ""
              }`}
          />
          <div
            className={`w-5 h-[2px] bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? "opacity-0 scale-0" : ""
              }`}
          />
          <div
            className={`w-5 h-[2px] bg-gray-800 dark:bg-white rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px] bg-blue-500 dark:bg-blue-400" : ""
              }`}
          />
        </button>

        <div
          className={`w-full h-full fixed inset-0 backdrop-blur-2xl bg-white/90 dark:bg-gray-900/90 z-40 
            transition-all duration-500 ease-out
            flex justify-center items-center ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
            }`}
        >
          <button
            onClick={toggleDarkMode}
            className="absolute top-6 left-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-yellow-400 
              transition-all duration-300 
              hover:scale-110 hover:rotate-12
              hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-yellow-500/25
              active:scale-95"
          >
            {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>

          <ul className="flex flex-col text-3xl gap-6 text-center space-y-8 font-semibold">
            {[
              { to: "/", label: "Home", delay: "0.1s" },
              { to: "/technology", label: "Technology", delay: "0.15s" },
              { to: "/projects", label: "Projects", delay: "0.2s" },
              { to: "/contact", label: "Contact", delay: "0.2s" },
            ].map((item, index) => {
              const isActive = item.to ? isActiveLink(item.to) : false
              return (
                <li
                  key={index}
                  className={`transform transition-all duration-500 ease-out ${isOpen ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                    }`}
                  style={{ transitionDelay: isOpen ? item.delay : "0s" }}
                >
                  {item.to ? (
                    <Link
                      to={item.to}
                      onClick={toggleMenu}
                      className={`relative inline-block py-2 px-4 rounded-xl transition-all duration-300
                        hover:bg-blue-500/10 hover:text-blue-500 dark:hover:text-blue-400
                        active:scale-95
                        ${isActive
                          ? "text-blue-500 dark:text-blue-400 bg-blue-500/10"
                          : "text-gray-700 dark:text-gray-200"
                        }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-500 dark:bg-blue-400 rounded-full" />
                      )}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      onClick={toggleMenu}
                      className="relative inline-block py-2 px-4 rounded-xl text-gray-700 dark:text-gray-200 
                        transition-all duration-300
                        hover:bg-blue-500/10 hover:text-blue-500 dark:hover:text-blue-400
                        active:scale-95"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
      <br />
      <br />
    </>
  )
}

export default Nav
