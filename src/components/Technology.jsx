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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-2 lg:mx-4">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        data-index={index}
                        className={`flex flex-col items-center text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${visibleItems.has(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
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
                    className={`flex flex-col items-center text-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 max-w-sm ${visibleItems.has(8) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
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
