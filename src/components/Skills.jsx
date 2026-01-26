"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "./sidebar"

const skills = [
  {
    name: "ReactJs",
    icon: "/react.webp",
    description: "ReactJs is a JavaScript library used to build component-based interactive user interfaces.",
  },
  {
    name: "Laravel",
    icon: "/laravel.webp",
    description:
      "Laravel is an open-source web application framework based on PHP, utilizing the MVC architectural pattern.",
  },
  {
    name: "Tailwind CSS",
    icon: "/tailwind.webp",
    description:
      "Tailwind CSS is a CSS framework that includes a set of utility classes for quickly building custom interfaces.",
  },
]

const Skills = () => {
  const [displayedText, setDisplayedText] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const fullText = "These are some of the technologies I regularly work with"
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = (y / rect.height - 0.5) * 20
    const rotateY = (x / rect.width - 0.5) * -20
    imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`
  }

  const handleMouseLeave = () => {
    if (!imageRef.current) return
    imageRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let index = 0
    setDisplayedText("")

    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 40)

    return () => clearInterval(typingInterval)
  }, [isVisible])

  return (
    <>
      
      <section
        ref={sectionRef}
        className="min-h-screen w-full flex items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16"
      >
        <Sidebar />
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
            {/* Avatar - Hidden on mobile, shown on lg+ */}
            <div className="hidden lg:block flex-shrink-0">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />
                <img
                  ref={imageRef}
                  src="avatar.webp"
                  alt="Achmad Nazriel Pradita"
                  className="relative w-56 h-56 xl:w-64 xl:h-64 object-cover rounded-2xl transition-all duration-300 ease-out "
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ transformStyle: "preserve-3d" }}
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6 sm:space-y-8 ml-10">
              {/* Heading with typewriter */}
              <div className="min-h-[3rem] sm:min-h-[4rem]">
                <h2
                  className={`text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-foreground transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
                >
                  {displayedText}

                </h2>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 ">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`group p-4 sm:p-5 lg:p-6 rounded-xl bg-card border border-border hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Icon */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 rounded-xl bg-muted group-hover:bg-blue-500/10 transition-colors duration-300">
                      <img
                        src={skill.icon || `/placeholder.svg?height=40&width=40&query=${skill.name} logo`}
                        alt={skill.name}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-2 group-hover:text-blue-500 transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* View More Button */}
              <div
                className={`flex justify-center sm:justify-start pt-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                style={{ transitionDelay: "450ms" }}
              >
                <Link to="/technology">
                  <button className="relative overflow-hidden px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base font-medium text-blue-500 border-2 border-blue-500 rounded-full hover:text-white transition-colors duration-300 group">
                    <span className="relative z-10">View More</span>
                    <span className="absolute inset-0 bg-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
