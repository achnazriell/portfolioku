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
                <section className="flex flex-col lg:flex-row lg:items-start lg:gap-12 lg:p-6 lg:pt-8">
                    {/* Kiri: Heading + Paragraf */}
                    <div className="flex-1 ml-12 lg:ml-36">
                        <h1 className="flex space-x-3 font-bold">
                            <span className="text-2xl lg:text-6xl animate-fadeInUp">About</span>
                            <span className="text-2xl lg:text-6xl animate-fadeInUp">Me</span>
                        </h1>

                        <p
                            ref={paragraphRef}
                            className="font-poppins text-xs lg:text-xl mt-4 mb-8 text-gray-600 dark:text-gray-300 animate-fadeInLeft leading-relaxed"
                        >
                            My name is Achmad Nazriel Pradita, I'm from Mojokerto and now
                            <br className="hidden lg:inline" />
                            I'm learning React as a Front-end developer. I'm learning React
                            <br className="hidden lg:inline" />
                            by self-exploration because it feels fun for me to do this and
                            <br className="hidden lg:inline" />
                            I also do freelance projects. I'm a 2nd grade student at
                            <br className="hidden lg:inline" />
                            SMKN 1 Dlanggu majoring in Rekayasa Perangkat Lunak
                            <br className="hidden lg:inline" />
                            (Software Engineering) who has a lot of interest in development,
                            <br className="hidden lg:inline" />
                            especially in websites, and I am currently exploring React.
                            <br className="hidden lg:inline" />
                        </p>

                    </div>

                    {/* Kanan: Foto */}
                    {/* Kanan: Foto */}
                    <div className="hidden lg:flex lg:flex-shrink-0 lg:mr-20 mt-6 lg:mt-0">
                        <div className="relative">
                            <img
                                ref={imageRef}
                                src="/ngerii.jpg"
                                alt="Achmad Nazriel Pradita"
                                className="w-72 h-72 rounded-3xl transition-all duration-300 ease-out"
                                onMouseMove={handleMouseMove}
                                onMouseLeave={handleMouseLeave}
                                style={{ transformStyle: "preserve-3d" }}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
