"use client"

import { useEffect, useRef, useState } from "react"

const Technology = () => {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index
            setVisibleItems((prev) => new Set([...prev, Number.parseInt(index)]))
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    )

    // Observe all technology items
    const items = document.querySelectorAll("[data-index]")
    items.forEach((item) => observerRef.current.observe(item))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const technologies = [
    {
      name: "ReactJs",
      image: "/react.png",
      description: "ReactJs is a JavaScript library used to build component-based interactive user interfaces.",
    },
    {
      name: "Laravel",
      image: "/laravel.png",
      description:
        "Laravel is an open-source web application framework based on PHP, utilizing the Model-View-Controller (MVC) architectural pattern.",
    },
    {
      name: "Tailwind CSS",
      image: "/tailwind.png",
      description:
        "Tailwind CSS is a CSS framework that includes a set of utility classes for quickly building custom interfaces.",
    },
    {
      name: "C++",
      image: "/c++.png",
      description:
        "C++ is a general-purpose programming language known for its performance, making it a popular choice for system software, game development, and real-time systems.",
    },
    {
      name: "HTML",
      image: "/html.png",
      description:
        "Hypertext Markup Language is used to create web pages. It is used to define the structure and content of a web page.",
    },
    {
      name: "CSS",
      image: "/css.png",
      description:
        "Cascading Style Sheets are rules for managing several components in a web so that it will be more structured and uniform.",
    },
    {
      name: "JavaScript",
      image: "/js.png",
      description: "Javascript is a programming language used to add interactivity and dynamic behavior to websites.",
    },
    {
      name: "PHP",
      image: "/php.png",
      description:
        "PHP Hypertext Preprocessor, or simply PHP, is a general-purpose scripting language primarily used for web development.",
    },
  ]

  return (
    <section className="p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          This is the Technology I've Used Before
        </h2>

        <div className="flex justify-center items-center mt-6">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 lg:w-12 lg:h-12 gear rotate-clockwise"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00BFFF"
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 lg:w-8 lg:h-8 gear rotate-counterclockwise"
              viewBox="0 0 512 512"
            >
              <path
                fill="#00BFFF"
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-2 lg:mx-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            data-index={index}
            className={`flex flex-col items-center text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${
              visibleItems.has(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: visibleItems.has(index) ? `${index * 0.1}s` : "0s",
            }}
          >
            <div className="mb-4 p-3 rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-300">
              <img
                src={tech.image || "/placeholder.svg"}
                className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
                alt={tech.name}
              />
            </div>
            <h4 className="font-semibold text-lg lg:text-xl mb-3 text-gray-900 dark:text-white">{tech.name}</h4>
            <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{tech.description}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12 lg:mt-16">
        <div
          data-index="8"
          className={`flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 max-w-sm ${
            visibleItems.has(8) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            transitionDelay: visibleItems.has(8) ? "0.8s" : "0s",
          }}
        >
          <div className="mb-4 p-3 rounded-full bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors duration-300">
            <img src="/bootstrap.png" className="h-12 w-12 lg:h-16 lg:w-16 object-contain" alt="Bootstrap" />
          </div>
          <h4 className="font-semibold text-lg lg:text-xl mb-3 text-gray-900 dark:text-white">Bootstrap</h4>
          <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
            Bootstrap is a popular CSS framework for developing responsive and mobile-first websites quickly and easily.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Technology
