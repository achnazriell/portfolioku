"use client"

import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom" // Ensure this import is present
import Sidebar from "./sidebar"

const About = () => {
    const [isVisible, setIsVisible] = useState(false)
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

    return (
        <section ref={sectionRef} className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            {/* Ensure Sidebar is clickable by giving it a higher z-index and fixed position */}
            {(location.pathname === "/about" || location.pathname === "/skills") && (
                <div className="z-10 left-0 ">
                    <Sidebar />
                </div>
            )}
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
                    {/* Content */}
                    <div className="flex-1 space-y-4 sm:space-y-6 ml-10">
                        {/* Heading */}
                        <div
                            className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                        >
                            <h1 className="flex flex-wrap gap-2 sm:gap-3 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                                <span className="text-foreground">About</span>
                                <span className="text-blue-500">Me</span>
                            </h1>
                        </div>

                        {/* Paragraph */}
                        <div
                            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                        >
                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                My name is <span className="text-foreground font-medium">Achmad Nazriel Pradita</span>, I'm from
                                Mojokerto and now I'm learning React as a Front-end developer. I'm learning React by self-exploration
                                because it feels fun for me to do this and I also do freelance projects.
                            </p>

                            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-2xl mt-4">
                                I'm a 3rd grade student at <span className="text-foreground font-medium">SMKN 1 Dlanggu</span> majoring
                                in Rekayasa Perangkat Lunak (Software Engineering) who has a lot of interest in development, especially
                                in websites, and I am currently exploring React.
                            </p>
                        </div>
                    </div>

                    {/* Image - shown on lg+ */}
                    <div
                        className={`hidden lg:block flex-shrink-0 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                    >
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent rounded-3xl blur-2xl" />

                            {/* Image container */}
                            <div className="relative">
                                <img
                                    ref={imageRef}
                                    src="aku.jpg"
                                    alt="Achmad Nazriel Pradita"
                                    className="w-56 h-64 xl:w-72 xl:h-80 object-cover rounded-2xl transition-all duration-300 ease-out border-2 border-border"
                                    onMouseMove={handleMouseMove}
                                    onMouseLeave={handleMouseLeave}
                                    style={{ transformStyle: "preserve-3d" }}
                                />

                                {/* Decorative elements */}
                                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-xl -z-10" />
                                <div className="absolute -top-4 -left-4 w-16 h-16 bg-cyan-500/10 rounded-lg -z-10" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
