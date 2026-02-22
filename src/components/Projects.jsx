"use client"

import { useEffect, useRef } from "react"

const ProjectCard = ({ image, title, description, tags, links, delay = 0 }) => {
  return (
    <div className="group flex flex-col w-full max-w-sm mx-auto" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative overflow-hidden rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 transition-all duration-300 group-hover:border-[#00BFFF] group-hover:shadow-lg group-hover:shadow-[#00BFFF]/20">
        <img
          src={image || "/placeholder.svg"}
          className="w-full h-44 sm:h-48 lg:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          alt={title}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-[#00BFFF] transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#00BFFF] transition-colors duration-300">
            {title}
          </h4>

        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-4">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 hover:bg-[#00BFFF] hover:text-white hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const projectsData = [
  {
    image: "/project4.webp",
    title: "Humanity-Timeline (FestikaJatim)",
    description:
      "The Humanity Timeline website showcases human history with an immersive dark theme and warm golden accents. In the 'Prehistoric Era,' a detailed 3D early-human character and floating artifact icons create a clear historical atmosphere.",
    tags: ["HTML5", "Tailwind CSS", "CSS3", "Javascript"],
    links: { live: "https://humanity-timeline.vercel.app" },
  },
  {
    image: "/project3.webp",
    title: "Smart-LAB (Mini Project & UKK)",
    description:
      "SmartLab is a Learning Management System (LMS) designed to streamline the management of educational content, facilitate communication, and enhance learning experiences for both instructors and students.",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Blade", "Javascript", "HTML5", "CSS3", "Bootstrap"],
    links: { live: "https://smartlab.up.railway.app" },
  },
  {
    image: "/project1.webp",
    title: "Web Comics (Pre Mini)",
    description:
      "Web comic project involves both back-end and front-end development. The back end, built with Laravel, handles comic and chapter management, including efficient creation, updating, and organization of content.",
    tags: ["Laravel", "PHP", "Tailwind", "Blade", "Javascript", "HTML5", "CSS3"],
  },
  {
    image: "/project2.webp",
    title: "Manajemen Restoran",
    description:
      "Restaurant Management adalah sistem manajemen restoran berbasis web yang dibangun menggunakan Laravel. Proyek ini memungkinkan pengelola restoran untuk mengatur menu, pesanan, dan laporan penjualan.",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Bootstrap", "Blade", "HTML5", "CSS3"],
  },
]

const Projects = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp")
            entry.target.style.opacity = "1"
          }
        })
      },
      { threshold: 0.1 },
    )

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="p-4 sm:p-6 lg:p-8">
      <h2 className="flex items-center justify-center text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-12 lg:mb-16">
        Projects
        <div className="flex items-end ml-2 rotate-45">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 sm:w-10 lg:w-12 animate-spinSlow gear-hover "
            style={{ animationDirection: "normal" }}
            viewBox="0 0 512 512"
          >
            <path
              fill="#00BFFF"
              d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
            />
          </svg>
          <div className="flex flex-col -ml-1 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 sm:w-5 lg:w-6 animate-spinSlow gear-hover "
              style={{ animationDirection: "reverse" }}
              viewBox="0 0 512 512"
            >
              <path
                fill="#00BFFF"
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 sm:w-6 lg:w-7 -mt-1 animate-spinSlow gear-hover "
              style={{ animationDirection: "reverse" }}
              viewBox="0 0 512 512"
            >
              <path
                fill="#00BFFF"
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
              />
            </svg>
          </div>
        </div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-center items-center lg:gap-8 max-w-7xl mx-auto px-2 sm:px-4 mb-20 lg:mb-40">
        {projectsData.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="opacity-0"
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <ProjectCard {...project} delay={index * 100} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
