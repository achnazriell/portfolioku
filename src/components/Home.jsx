"use client"

import { useState, useEffect, useRef } from "react"
import { Outlet } from "react-router-dom"
import { SocialIcon } from "react-social-icons"
import ProjectCard, { projectsData } from "./ProjectCard"

// Custom hook untuk scroll animation
const useScrollAnimation = (threshold = 0.2) => {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold])

  return [ref, isVisible]
}

const Home = () => {
  const words = ["Achmad Nazriel Pradita", "Front-end Developer"]
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const [iconSize, setIconSize] = useState(100)
  const [isHeroVisible, setIsHeroVisible] = useState(false)

  // Scroll animation refs for each section
  const [outletRef, isOutletVisible] = useScrollAnimation(0.15)
  const [projectRef, isProjectVisible] = useScrollAnimation(0.1)
  const [contactRef, isContactVisible] = useScrollAnimation(0.3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIconSize(70)
      } else if (window.innerWidth < 768) {
        setIconSize(80)
      } else if (window.innerWidth < 1024) {
        setIconSize(90)
      } else {
        setIconSize(110)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    setTimeout(() => setIsHeroVisible(true), 300)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleType = () => {
      const currentWord = words[loopNum % words.length]
      setText(isDeleting ? currentWord.substring(0, text.length - 1) : currentWord.substring(0, text.length + 1))

      setTypingSpeed(isDeleting ? 75 : 150)

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 500)
      } else if (isDeleting && text === "") {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const typingTimeout = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(typingTimeout)
  }, [text, isDeleting])

  return (
    <div className="flex scroll-smooth">
      <div className="flex-1">
        {/* Section 1: Hero - Full viewport */}
        <section
          className={`min-h-screen mt-[-100px] flex flex-col text-center items-center justify-center px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ${
            isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="text-center text-gray-500 dark:text-gray-400 max-w-4xl mx-auto">
            {/* Floating animation for hello text */}
            <div
              className={`text-xl sm:text-xl md:text-2xl lg:text-4xl font-bold mb-4 transition-all duration-1000 delay-200 ${
                isHeroVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
              }`}
            >
              <span className="block mb-2 animate-pulse">Hello,</span>
              <h2
                id="typewriter"
                className="index-module_type__E-SaG  text-gray-800 dark:text-white font-mono min-h-[1.2em]"
              >
                I'am {text}
              </h2>
            </div>

            <div
              className={`pt-4 mb-8 lg:mb-12 transition-all duration-1000 delay-500 ${
                isHeroVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-8 opacity-0 scale-95"
              }`}
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2">Specialized in</p>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold py-2 text-gray-800 dark:text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Websites
              </p>
            </div>
          </div>

          {/* Social Icons with staggered animation */}
          <div
            className={`flex items-center justify-center space-x-6 sm:space-x-8 lg:space-x-14 transition-all duration-1000 delay-700 ${
              isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {[
              {
                href: "https://facebook.com/achmad.n.pradita",
                component: (
                  <SocialIcon
                    url="https://facebook.com/achmad.n.pradita"
                    style={{ width: iconSize, height: iconSize }}
                  />
                ),
                delay: "0.8s",
              },
              {
                href: "https://github.com/achnazriell",
                component: (
                  <div className="github-icon" style={{ width: iconSize, height: iconSize }}>
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub Icon"
                    />
                  </div>
                ),
                delay: "1.0s",
              },
              {
                href: "https://instagram.com/achnazriell_",
                component: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: iconSize, height: iconSize }}
                    viewBox="0 0 93 92"
                    fill="none"
                  >
                    <rect x="1.13867" width="91.5618" height="91.5618" rx="50" fill="url(#paint0_linear_7092_54439)" />
                    <path
                      d="M38.3762 45.7808C38.3762 41.1786 42.1083 37.4468 46.7132 37.4468C51.3182 37.4468 55.0522 41.1786 55.0522 45.7808C55.0522 50.383 51.3182 54.1148 46.7132 54.1148C42.1083 54.1148 38.3762 50.383 38.3762 45.7808ZM33.8683 45.7808C33.8683 52.8708 39.619 58.618 46.7132 58.618C53.8075 58.618 59.5581 52.8708 59.5581 45.7808C59.5581 38.6908 53.8075 32.9436 46.7132 32.9436C39.619 32.9436 33.8683 38.6908 33.8683 45.7808ZM57.0648 32.4346C57.0646 33.0279 57.2404 33.608 57.5701 34.1015C57.8997 34.595 58.3684 34.9797 58.9168 35.2069C59.4652 35.4342 60.0688 35.4939 60.6511 35.3784C61.2334 35.2628 61.7684 34.9773 62.1884 34.5579C62.6084 34.1385 62.8945 33.6041 63.0105 33.0222C63.1266 32.4403 63.0674 31.8371 62.8404 31.2888C62.6134 30.7406 62.2289 30.2719 61.7354 29.942C61.2418 29.6122 60.6615 29.436 60.0679 29.4358H60.0667C59.2708 29.4361 58.5077 29.7522 57.9449 30.3144C57.3821 30.8767 57.0655 31.6392 57.0648 32.4346ZM36.6072 66.1302C34.1683 66.0192 32.8427 65.6132 31.9618 65.2702C30.7939 64.8158 29.9606 64.2746 29.0845 63.4002C28.2083 62.5258 27.666 61.6938 27.2133 60.5266C26.8699 59.6466 26.4637 58.3214 26.3528 55.884C26.2316 53.2488 26.2073 52.4572 26.2073 45.781C26.2073 39.1048 26.2336 38.3154 26.3528 35.678C26.4639 33.2406 26.8731 31.918 27.2133 31.0354C27.668 29.8682 28.2095 29.0354 29.0845 28.1598C29.9594 27.2842 30.7919 26.7422 31.9618 26.2898C32.8423 25.9466 34.1683 25.5406 36.6072 25.4298C39.244 25.3086 40.036 25.2844 46.7132 25.2844C53.3904 25.2844 54.1833 25.3106 56.8223 25.4298C59.2612 25.5408 60.5846 25.9498 61.4677 26.2898C62.6356 26.7422 63.4689 27.2854 64.345 28.1598C65.2211 29.0342 65.7615 29.8682 66.2161 31.0354C66.5595 31.9154 66.9658 33.2406 67.0767 35.678C67.1979 38.3154 67.2221 39.1048 67.2221 45.781C67.2221 52.4572 67.1979 53.2466 67.0767 55.884C66.9656 58.3214 66.5573 59.6462 66.2161 60.5266C65.7615 61.6938 65.2199 62.5266 64.345 63.4002C63.4701 64.2738 62.6356 64.8158 61.4677 65.2702C60.5872 65.6134 59.2612 66.0194 56.8223 66.1302C54.1855 66.2514 53.3934 66.2756 46.7132 66.2756C40.033 66.2756 39.2432 66.2514 36.6072 66.1302ZM36.4001 20.9322C33.7371 21.0534 31.9174 21.4754 30.3282 22.0934C28.6824 22.7316 27.2892 23.5878 25.897 24.977C24.5047 26.3662 23.6502 27.7608 23.0116 29.4056C22.3933 30.9948 21.971 32.8124 21.8497 35.4738C21.7265 38.1394 21.6982 38.9916 21.6982 45.7808C21.6982 52.57 21.7265 53.4222 21.8497 56.0878C21.971 58.7494 22.3933 60.5668 23.0116 62.156C23.6502 63.7998 24.5049 65.196 25.897 66.5846C27.289 67.9732 28.6824 68.8282 30.3282 69.4682C31.9204 70.0862 33.7371 70.5082 36.4001 70.6294C39.0687 70.7506 39.92 70.7808 46.7132 70.7808C53.5065 70.7808 54.3592 70.7526 57.0264 70.6294C59.6896 70.5082 61.5081 70.0862 63.0983 69.4682C64.7431 68.8282 66.1373 67.9738 67.5295 66.5846C68.9218 65.1954 69.7745 63.7998 70.4149 62.156C71.0332 60.5668 71.4575 58.7492 71.5768 56.0878C71.698 53.4202 71.7262 52.57 71.7262 45.7808C71.7262 38.9916 71.698 38.1394 71.5768 35.4738C71.4555 32.8122 71.0332 30.9938 70.4149 29.4056C69.7745 27.7618 68.9196 26.3684 67.5295 24.977C66.1395 23.5856 64.7431 22.7316 63.1003 22.0934C61.5081 21.4754 59.6894 21.0514 57.0284 20.9322C54.3612 20.811 53.5085 20.7808 46.7152 20.7808C39.922 20.7808 39.0687 20.809 36.4001 20.9322Z"
                      fill="white"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_7092_54439"
                        x1="90.9407"
                        y1="91.5618"
                        x2="-0.621143"
                        y2="-2.46459e-06"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#FBE18A" />
                        <stop offset="0.21" stopColor="#FCBB45" />
                        <stop offset="0.38" stopColor="#F75274" />
                        <stop offset="0.52" stopColor="#D53692" />
                        <stop offset="0.74" stopColor="#8F39CE" />
                        <stop offset="1" stopColor="#5B4FE9" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
                delay: "1.2s",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transform transition-all duration-500 hover:scale-125 hover:-translate-y-3 hover:rotate-6 ${
                  isHeroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: isHeroVisible ? social.delay : "0s" }}
              >
                {social.component}
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div
            className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
              isHeroVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <span className="text-sm text-gray-400">Scroll</span>
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Section 2: Outlet (Skill & About) - Full viewport */}
        <section
          ref={outletRef}
          className={`min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 transition-all duration-1000 ${
            isOutletVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <Outlet />
        </section>

        {/* Section 3: My Favorite Project - Full viewport */}
        <section
          ref={projectRef}
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
        >
          <h2
            className={`text-3xl lg:text-5xl mb-12 text-center font-semibold transition-all duration-700 ${
              isProjectVisible ? "translate-y-0 opacity-100 scale-100" : "-translate-y-8 opacity-0 scale-95"
            }`}
          >
            <span className="bg-gradient-to-b from-blue-700 to-cyan-500 bg-clip-text text-transparent">
              My Favorite Project
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isProjectVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-90"
                }`}
                style={{
                  transitionDelay: isProjectVisible ? `${index * 150 + 200}ms` : "0ms",
                }}
              >
                <ProjectCard
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  links={project.links}
                  delay={0}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Need Help - Full viewport */}
        <section
          ref={contactRef}
          className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12"
        >
          <div
            className={`text-center transition-all duration-1000 ${
              isContactVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-12 opacity-0 scale-90"
            }`}
          >
            <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-poppins text-gray-900 dark:text-white mb-6">
              Need Help ?
            </h2>
            <p
              className={`text-gray-500 dark:text-gray-400 text-md mb-8 max-w-md mx-auto transition-all duration-700 delay-300 ${
                isContactVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              Let's work together and bring your ideas to life
            </p>
            <a
              href="/contact"
              className={`inline-block transition-all duration-700 delay-500 ${
                isContactVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <button className="relative overflow-hidden group border-blue-500 border-2 rounded-full px-6 py-2 font-medium text-blue-500 transition-all duration-500 hover:text-white hover:scale-110 hover:shadow-xl hover:shadow-blue-500/25">
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              </button>
            </a>
          </div>
        </section>
      </div>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  )
}

export default Home
