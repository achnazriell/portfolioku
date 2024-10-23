import React, { useEffect } from 'react';
// We'll use an external CSS file for the keyframes animation

const Projects = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-zoomin','animate-zoomin1','animate-zoomin2','animate-zoomin3','animate-zoomin4','animate-zoomin5','animate-zoomin6','animate-zoomin7');
                    }
                });
            },
            { threshold: 0.1 }
        );
    }, []);

    return (
        <section className="p-6 lg:p-8">
            <h2 className="flex justify-center text-center px-20 text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                Projects

                <div className="flex justify-end items-center h-9 rotate-45 ml-1 space-x-0">
                    {/* Gear container for clockwise gear */}
                    <div className="gear-container">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 lg:w-12  gear rotate-clockwise" viewBox="0 0 512 512">
                            <path fill="#00BFFF" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                        </svg>
                    </div>

                    {/* Gear container for counterclockwise gears */}
                    <div className="gear-container mb-2 space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 lg:w-6  gear rotate-counterclockwise" viewBox="0 0 512 512">
                            <path fill="#00BFFF" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 lg:w-8  gear rotate-counterclockwise" viewBox="0 0 512 512">
                            <path fill="#00BFFF" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
                        </svg>
                    </div>
                </div>
            </h2>
            <br />
            <br />
            <br />
            <br />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 space-x- mx-2 lg:mx-40  ">
                <div className="flex flex-col items-start">
                    <div className="border-2 rounded-md border-gray-500 dark:border-gray-100">
                        <img src="/project1.png" className="h-40 lg:h-48 w-80 lg:w-96 p-3" alt="React" />
                    </div>
                    <h4 className="font-bold text-xl mt-2 mb-3">Web Comics (Pre Mini)</h4>
                    <p className="mb-2 text-xs font-poppins lg:text-sm text-gray-500 dark:text-gray-400 text-left ">
                        web comic project involves both back-end and front-end development. The back end, built with Laravel, handles comic and chapter management, including efficient creation, updating, and organization of content. The front end focuses on delivering a responsive and user-friendly layout, ensuring readers can easily navigate through comics and chapters
                    </p>
                    <div className="flex flex-wrap gap-2">
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin" >Laravel</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin1" >PHP</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin2" >Bootstrap</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin3" >Blade</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin4" >Javascript</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin5" >HTML5</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin6" >CSS3</div>
                        </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="border-2 roundxs-lg border-gray-500 dark:border-gray-100">
                        <img src="/project2.png" className="h-40 lg:h-48 w-80 lg:w-96 p-3" alt="React" />
                    </div>
                    <h4 className="font-bold text-xl mt-2">Manajemen Restoran</h4>
                    <p className="mb-2 text-xs font-poppins lg:text-sm text-gray-500 dark:text-gray-400 text-left ">
                        The restaurant management system is designed to streamline and optimize various aspects of restaurant operations. It includes both back-end and front-end functionalities. On the back end, the system manages reservations, menu items, staff, and orders, allowing for efficient handling of customer preferences, seating arrangements, and kitchen operations. 
                    </p>
                    <div className="flex flex-wrap gap-2">
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin" >Laravel</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin1" >PHP</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin2" >Bootstrap</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin3" >Blade</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin4" >Javascript</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin5" >HTML5</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin6" >CSS3</div>
                            <div className="bg-gray-400 text-xs lg:text-sm px-2 py-1 rounded-lg animate-zoomin7" >Admin LTE</div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
