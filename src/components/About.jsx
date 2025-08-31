"use client"

import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import Sidebar from "./sidebar"

const About = () => {
    const paragraphRef = useRef(null)
    const imageRef = useRef(null)
    const location = useLocation()

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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-fadeinleft")
                    }
                })
            },
            { threshold: 0.1 },
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

    return (
        <div className="flex">
            {(location.pathname === "/about" || location.pathname === "/skills") && (
                <div className="z-10 left-0 ">
                    <Sidebar />
                </div>
            )}
            <div className="relative flex-1">
                <section className="flex-1 lg:p-6 lg:pt-8">
                    <h1 className="flex ml-14 lg:ml-36 space-x-3 font-bold">
                        <span className="text-3xl lg:text-6xl animate-fadeInUp">About</span>
                        <span className="text-3xl lg:text-6xl animate-fadeInUp">Me</span>
                    </h1>

                    <div className="lg:mt-3 mt-3 ml-14 lg:ml-36">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                            <div className="flex-1 lg:max-w-2xl">
                                <p
                                    ref={paragraphRef}
                                    className="font-poppins text-xs lg:text-xl mb-8 lg:mb-20 text-gray-600 dark:text-gray-300 animate-fadeInLeft leading-relaxed"
                                >
                                    My name is Achmad Nazriel Pradita, I'm from Mojokerto and now I'm learning React as a Front-end
                                    developer. I'm learning React by self-exploration because it feels fun for me to do this and I also do
                                    freelance projects. I'm a 2nd grade student at SMKN 1 Dlanggu majoring in Rekayasa Perangkat Lunak
                                    (Software Engineering) who has a lot of interest in development, especially in websites, and I am
                                    currently exploring React.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block lg:flex-shrink-0">
                        <div className="relative">
                            <img
                                ref={imageRef}
                                src="/ngerii.jpg"
                                alt="Achmad Nazriel Pradita"
                                className="w-64 h-80 object-cover rounded-lg shadow-lg transition-all duration-300 ease-out hover:shadow-2xl"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ transformStyle: "preserve-3d" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg pointer-events-none"></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
