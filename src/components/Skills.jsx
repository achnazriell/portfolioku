import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Ensure this import is present

const Skills = () => {
    const paragraphRef = useRef(null);
    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'These are some of the technologies I regularly work with';
    const location = useLocation();
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const { offsetWidth: width, offsetHeight: height } = imageRef.current;
        const { offsetX: x, offsetY: y } = e.nativeEvent;

        const rotateX = ((y / height) - 0.5) * 50; // Sesuaikan angka untuk intensitas
        const rotateY = ((x / width) - 0.5) * -50; // Sesuaikan angka untuk intensitas

        imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
        imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'; // Kembali ke posisi semula
    };

    useEffect(() => {
        setDisplayedText('');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadein', 'animate-zoomin');
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (paragraphRef.current) {
            observer.observe(paragraphRef.current);
        }

        return () => {
            if (paragraphRef.current) {
                observer.unobserve(paragraphRef.current);
            }
        };
    }, []);

    useEffect(() => {
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText[index]);
                index += 1;
            } else {
                clearInterval(typingInterval);
            }
        }, 50);

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="flex">
            {/* Ensure Sidebar is clickable by giving it a higher z-index and fixed position */}
                <div className="z-10 left-0 ">
                    <nav className="fixed absolute mt-5 md:mt-5 lg:mt-20 pb-20 h-[50%]">
                        <ul className="list-none lg:space-y-20 md:space-y-5 space-y-5 backdrop-blur-md h-full w-5 lg:w-10 flex flex-col justify-evenly items-center font-semibold text-xs md:text-xs lg:text-base">
                            <li className="rotate-90 w-max animate-slideInLeft">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `relative py-4 before:transition-all before:absolute before:bottom-2 before:left-0 before:h-0.5 ${isActive ? "text-blue-600 before:bg-blue-600 before:w-full" : "before:bg-gray-900 dark:before:bg-white before:w-0"
                                        }`
                                    }
                                >
                                    About Me
                                </NavLink>
                            </li>
                            <li className="rotate-90 w-max animate-slideInLeft">
                                <NavLink
                                    to="/skills"
                                    className={({ isActive }) =>
                                        `relative py-4 before:transition-all before:absolute before:bottom-2 before:left-0 before:h-0.5 ${isActive ? "text-blue-600 before:bg-blue-600 before:w-full" : "before:bg-gray-900 dark:before:bg-white before:w-0"
                                        }`
                                    }
                                >
                                    My Skills
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>

            <div className="flex flex-col lg:flex-row lg:ml-20 p-4 lg:p-6">
                <img ref={imageRef} src="/avatar.png" alt="React" className="hover-image h-0 w-0 lg:h-96 lg:w-96 mt-10 lg:mt-[-70px] lg:mr-4 animate-zoomin" onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave} />
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
                                Laravel is an open-source web application framework based on PHP, utilizing the Model-View-Controller (MVC) architectural pattern.
                            </p>
                        </div>
                        <div className="ml-7 lg:ml-0 flex flex-col items-start ">
                            <img src="/tailwind.png" className="h-5 lg:h-10 mt-7 lg:mt-12" alt="Tailwind CSS" />
                            <h4 className="font-semibold text-xs lg:text-lg mt-2">Tailwind CSS</h4>
                            <p className="font-poppins text-xxs lg:text-sm text-gray-500 dark:text-gray-400 text-left">
                                Tailwind CSS is a CSS framework that includes a set of utility classes for quickly building custom interfaces.
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center text-xxs lg:text-base mt-7 animate-fadein'>
                        <Link to="/technology">
                            <button className='border-blue-500 border-2 rounded-3xl px-4 py-2 font-medium hover:bg-blue-700'>View More</button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Skills;
