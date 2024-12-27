import React, { useEffect } from 'react';

const Technology = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                    }
                });
            },
            { threshold: 1  }
        );    }, []);
    return (
        <section className="p-6 lg:p-8">
            <h2 className="flex justify-center  text-center text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                This is the Technology I've Used Before
            </h2>
            <br />
            <br />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 mx-2 animate-fadeIn">
                <div className="flex flex-col items-start">
                    <img src="\react.png" className="h-9 lg:h-14 mt-6 lg:mt-10" alt="React" />
                    <h4 className="font-semibold text-lg mt-2">ReactJs</h4>
                    <p className="h-2 lg:h-0 mb-16 text-xs lg:text-base text-gray-500 dark:text-gray-400 text-left ">
                    ReactJs is a JavaScript library used to build component-based interactive user interfaces.
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <img src="\laravel.png" className="h-9 lg:h-14 mt-6 lg:mt-10" alt="Laravel" />
                    <h4 className="font-semibold text-lg mt-2">Laravel</h4>
                    <p className="h-2 lg:h-0 mb-16 text-xs lg:text-base text-gray-500 dark:text-gray-400 text-left">
                    Laravel is an open-source web application framework based on PHP, utilizing the Model-View-Controller (MVC) architectural pattern.
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <img src="\tailwind.png" className="h-8 lg:h-11 mt-9 lg:mt-14" alt="Tailwind CSS" />
                    <h4 className="font-semibold text-lg mt-2">Tailwind CSS</h4>
                    <p className="h-2 lg:h-0 mb-16 text-xs lg:text-base text-gray-500 dark:text-gray-400 text-left ">
                    Tailwind CSS is a CSS framework that includes a set of utility classes for quickly building custom interfaces.
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <img src="\c++.png" className="h-9 lg:h-14 mt-6 lg:mt-9" alt="C++" />
                    <h4 className="font-semibold text-lg mt-2">C++</h4>
                    <p className="h-2 lg:h-0 mb-16 text-xs lg:text-base text-gray-500 dark:text-gray-400 text-left ">
                        C++ is a general-purpose programming language known for its performance, making it a popular choice for system software, game development, and real-time systems.
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <img src="\html.png" className="h-9 lg:h-14 mt-6 lg:mt-8" alt="HTML" />
                    <h4 className="font-semibold text-lg mt-2">HTML</h4>
                    <p className="h-2 lg:h-0 mb-16 text-xs lg:text-base text-gray-500 dark:text-gray-400 text-left ">
                    Hypertext Markup Language is used to create web pages. It is used to define the structure and content of a web page.    
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <img src="\css.png" className="h-9 lg:h-14 mt-6 lg:mt-8" alt="CSS" />
                    <h4 className="font-semibold text-lg mt-2">CSS</h4>
                    <p className="h-2 lg:h-0 mb-16 text-xs lg:text-base text-gray-500 dark:text-gray-400 text-left ">
                    Cascading Style Sheets are rules for managing several components in a web so that it will be more structured and uniform.
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <img src="\js.png" className="h-9 lg:h-14 mt-6 lg:mt-8" alt="JavaScript" />
                    <h4 className="font-semibold text-lg mt-2">JavaScript</h4>
                    <p className="h-2 lg:h-0 mb-16 text-xs lg:text-base text-gray-500 dark:text-gray-400 text-left ">
                    Javascript is a programming language used to add interactivity and dynamic behavior to websites.
                    </p>
                </div>
                <div className="flex flex-col items-start">
                    <img src="\php.png" className="h-9 lg:h-14 mt-6 lg:mt-8" alt="PHP" />
                    <h4 className="font-semibold text-lg mt-2">PHP</h4>
                    <p className="h-2 lg:h-0 mb-16 text-xs lg:text-base text-gray-500 dark:text-gray-400 text-left ">
                    PHP Hypertext Preprocessor, or simply PHP, is a general-purpose scripting language primarily used for web development.
                    </p>
                </div>
            </div>
            <div className="flex justify-center mt-8 animate-fadeIn">
                <div className="flex flex-col items-center ">
                    <img src="\bootstrap.png" className="h-9 lg:h-14 mt-6 lg:mt-12" alt="Bootstrap" />
                    <h4 className="font-semibold text-lg mt-2">Bootstrap</h4>
                    <p className="h-2 lg:h-0 mb-16 text-xs lg:text-base text-gray-500 dark:text-gray-400 text-left">
                        Bootstrap is a popular CSS framework for <br /> developing responsive and mobile-first <br /> websites quickly and easily.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Technology;
