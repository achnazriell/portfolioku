import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import Sidebar from './sidebar';

const About = () => {
    const paragraphRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeinleft');
                    }
                });
            },
            { threshold: 0.1 }
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
                        <span className="text-3xl lg:text-5xl animate-fadeInUp">About</span>
                        <span className="text-3xl lg:text-5xl animate-fadeInUp">Me</span>
                    </h1>

                    <div className="lg:mt-3 mt-3 ml-14 lg:ml-36 flex">
                        {/* Wrap paragraph */}
                        <div className="flex-1">
                            <p ref={paragraphRef} className="font-poppins text-xs mr-4 lg:mr-36 lg:text-xl mb-20 text-gray-600 dark:text-gray-300 animate-fadeInLeft">
                                My name is Achmad Nazriel Pradita, I'm from Mojokerto and now I'm learning React as a Front-end developer. I'm learning React by self-exploration because it feels fun for me to do this and I also do freelance projects. I'm a 2nd grade student at SMKN 1 Dlanggu majoring in Rekayasa Perangkat Lunak (Software Engineering) who has a lot of interest in development, especially in websites, and I am currently exploring React.
                            </p>
                        </div>

                        {/* Wrap image with a relative positioned container */}
                        <div className="relative">
                            <img src='me.png' className="w-0 h-0 lg:w-60 lg:h-80 lg:mb-36 lg:mt-[-50px]" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;