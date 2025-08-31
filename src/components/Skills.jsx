"use client"

import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom" // Ensure this import is present
import Sidebar from "./sidebar"

const Skills = () => {
    const paragraphRef = useRef(null)
    const [displayedText, setDisplayedText] = useState("")
    const fullText = "These are some of the technologies I regularly work with"
    const location = useLocation()
    const imageRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!imageRef.current) return
        const { offsetWidth: width, offsetHeight: height } = imageRef.current
        const { offsetX: x, offsetY: y } = e.nativeEvent

        const rotateX = (y / height - 0.5) * 20
        const rotateY = (x / width - 0.5) * -20

        imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    const handleMouseLeave = () => {
        if (!imageRef.current) return
        imageRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }

    useEffect(() => {
        setDisplayedText("")

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fadein", "animate-zoomin")
                    }
                })
            },
            { threshold: 0.5 },
        )

        if (paragraphRef.current) {
            observer.observe(paragraphRef.current)
        }

        return () => {
            if (paragraphRef.current) {
                observer.unobserve(paragraphRef.current)
            }
        }
    }, [])

    useEffect(() => {
        let index = 0

        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText[index])
                index += 1
            } else {
                clearInterval(typingInterval)
            }
        }, 50)

        return () => clearInterval(typingInterval)
    }, [])

    return (
        <div className="flex">
            {/* Ensure Sidebar is clickable by giving it a higher z-index and fixed position */}
            {(location.pathname === "/about" || location.pathname === "/skills") && (
                <div className="z-10 left-0 ">
                    <Sidebar />
                </div>
            )}
            <div className="flex flex-col lg:flex-row lg:ml-20 p-4 lg:p-6">
                <div className="hidden lg:flex lg:flex-shrink-0 lg:mr-20 mt-6 lg:mt-0">
                    <div className="relative">
                        <img
                            ref={imageRef}
                            src="/avatar.png"
                            alt="Achmad Nazriel Pradita"
                            className="w-32 h-32 rounded-3xl transition-all duration-300 ease-out"
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{ transformStyle: "preserve-3d" }}
                        />
                    </div>
                </div>
                <section className="flex-1 lg:p-6 lg:pt-8">
                    {/* Adjust the margin-top to bring the text higher */}
                    <h2 className="text-xl lg:text-3xl ml-7 lg:ml-0 mt-[-70px] font-bold text-gray-900 dark:text-white">
                        {displayedText}
                    </h2>
                    <div className="flex flex-row lg:flex-row lg:space-x-12 space-x-4 animate-fadein">
                        <div className="ml-7 lg:ml-0 flex flex-col items-start">
                            <img src="/react.png" className="h-6 lg:h-14 mt-6 lg:mt-10" alt="React" />
                            <h4 className="font-semibold text-xs lg:text-lg mt-2">ReactJs</h4>
                            <p className=" text-xxs lg:text-sm text-gray-500 dark:text-gray-400 text-start lg:text-left">
                                ReactJs is a JavaScript library used to build component-based interactive user interfaces.
                            </p>
                        </div>
                        <div className="ml-7 lg:ml-0 flex flex-col items-start ">
                            <img src="/laravel.png" className="h-6 lg:h-14 mt-6 lg:mt-10" alt="Laravel" />
                            <h4 className="font-semibold text-xs lg:text-lg mt-2">Laravel</h4>
                            <p className="font-poppins text-xxs lg:text-sm text-gray-500 dark:text-gray-400 text-left">
                                Laravel is an open-source web application framework based on PHP, utilizing the Model-View-Controller
                                (MVC) architectural pattern.
                            </p>
                        </div>
                        <div className="ml-7 lg:ml-0 flex flex-col items-start ">
                            <img src="/tailwind.png" className="h-5 lg:h-10 mt-7 lg:mt-12" alt="Tailwind CSS" />
                            <h4 className="font-semibold text-xs lg:text-lg mt-2">Tailwind CSS</h4>
                            <p className="font-poppins text-xxs lg:text-sm text-gray-500 dark:text-gray-400 text-left">
                                Tailwind CSS is a CSS framework that includes a set of utility classes for quickly building custom
                                interfaces.
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center text-xxs lg:text-base mt-7 animate-fadein">
                        <Link to="/technology">
                            <button className="border-blue-500 border-2 rounded-3xl px-4 py-2 font-medium hover:bg-blue-700">
                                View More
                            </button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills
