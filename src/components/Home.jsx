import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Home = () => {
    const words = ["Achmad Nazriel Pradita", "Front-end Developer"];
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [iconSize, setIconSize] = useState(100); // Set default size to 100px

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIconSize(80); // For smaller screens, set size to 70px
            } else {
                setIconSize(110); // For larger screens, set size to 100px
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check when component mounts

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleType = () => {
            const currentWord = words[loopNum % words.length];
            setText(isDeleting ? currentWord.substring(0, text.length - 1) : currentWord.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 75 : 150);

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const typingTimeout = setTimeout(handleType, typingSpeed);

        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting]);

    return (
        <div className="flex">
            {/* Main Content */}
            <div className="flex-1 p-6 lg:p-8 lg:mb-28 mb-3">
                <section className="lg:h-[85vh] lg:max-h-[500px] mb-14 lg:mb-20 mt-6 flex flex-col text-center items-center">
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <div className="text-xl lg:text-5xl font-bold">
                            <span>Hello,</span>
                            <h2 id="typewriter" className="index-module_type__E-SaG text-gray-800 dark:text-white  flex space-x-1 font-mono">
                                I'am {text}
                            </h2>
                        </div>
                        <div className="pt-2 mb-10">
                            <p className="text-lg md:text-3xl">Specialized in</p>
                            <p className="text-xl md:text-4xl font-semibold py-2 text-gray-800 dark:text-white">Websites</p>
                        </div>
                    </div>
                    <div className="flex right-32 items-center space-x-7 lg:space-x-14 social slide-in-left">
                        <a href="https://facebook.com/achmad.n.pradita" rel="noopener noreferrer" className="blue sm-item mb-20 rotate-clockwiseu ">
                            <SocialIcon url="https://facebook.com/achmad.n.pradita" style={{ width: iconSize, height: iconSize }} />
                        </a>

                        <div class="github-icon rotate-clockwiseu">
                            <a href="https://github.com/achnazriell" target="_blank" className='white sm-item mb-14 '>
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub Icon" />
                            </a>
                        </div>

                        <a href="https://instagram.com/achnazriell_" rel="noopener noreferrer" className="pink sm-item mb-20 gear rotate-clockwiseu">
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ width: iconSize, height: iconSize }} viewBox="0 0 93 92" fill="none">
                                    <rect x="1.13867" width="91.5618" height="91.5618" rx="50" fill="url(#paint0_linear_7092_54439)" />
                                    <path d="M38.3762 45.7808C38.3762 41.1786 42.1083 37.4468 46.7132 37.4468C51.3182 37.4468 55.0522 41.1786 55.0522 45.7808C55.0522 50.383 51.3182 54.1148 46.7132 54.1148C42.1083 54.1148 38.3762 50.383 38.3762 45.7808ZM33.8683 45.7808C33.8683 52.8708 39.619 58.618 46.7132 58.618C53.8075 58.618 59.5581 52.8708 59.5581 45.7808C59.5581 38.6908 53.8075 32.9436 46.7132 32.9436C39.619 32.9436 33.8683 38.6908 33.8683 45.7808ZM57.0648 32.4346C57.0646 33.0279 57.2404 33.608 57.5701 34.1015C57.8997 34.595 58.3684 34.9797 58.9168 35.2069C59.4652 35.4342 60.0688 35.4939 60.6511 35.3784C61.2334 35.2628 61.7684 34.9773 62.1884 34.5579C62.6084 34.1385 62.8945 33.6041 63.0105 33.0222C63.1266 32.4403 63.0674 31.8371 62.8404 31.2888C62.6134 30.7406 62.2289 30.2719 61.7354 29.942C61.2418 29.6122 60.6615 29.436 60.0679 29.4358H60.0667C59.2708 29.4361 58.5077 29.7522 57.9449 30.3144C57.3821 30.8767 57.0655 31.6392 57.0648 32.4346ZM36.6072 66.1302C34.1683 66.0192 32.8427 65.6132 31.9618 65.2702C30.7939 64.8158 29.9606 64.2746 29.0845 63.4002C28.2083 62.5258 27.666 61.6938 27.2133 60.5266C26.8699 59.6466 26.4637 58.3214 26.3528 55.884C26.2316 53.2488 26.2073 52.4572 26.2073 45.781C26.2073 39.1048 26.2336 38.3154 26.3528 35.678C26.4639 33.2406 26.8731 31.918 27.2133 31.0354C27.668 29.8682 28.2095 29.0354 29.0845 28.1598C29.9594 27.2842 30.7919 26.7422 31.9618 26.2898C32.8423 25.9466 34.1683 25.5406 36.6072 25.4298C39.244 25.3086 40.036 25.2844 46.7132 25.2844C53.3904 25.2844 54.1833 25.3106 56.8223 25.4298C59.2612 25.5408 60.5846 25.9498 61.4677 26.2898C62.6356 26.7422 63.4689 27.2854 64.345 28.1598C65.2211 29.0342 65.7615 29.8682 66.2161 31.0354C66.5595 31.9154 66.9658 33.2406 67.0767 35.678C67.1979 38.3154 67.2221 39.1048 67.2221 45.781C67.2221 52.4572 67.1979 53.2466 67.0767 55.884C66.9656 58.3214 66.5573 59.6462 66.2161 60.5266C65.7615 61.6938 65.2199 62.5266 64.345 63.4002C63.4701 64.2738 62.6356 64.8158 61.4677 65.2702C60.5872 65.6134 59.2612 66.0194 56.8223 66.1302C54.1855 66.2514 53.3934 66.2756 46.7132 66.2756C40.033 66.2756 39.2432 66.2514 36.6072 66.1302ZM36.4001 20.9322C33.7371 21.0534 31.9174 21.4754 30.3282 22.0934C28.6824 22.7316 27.2892 23.5878 25.897 24.977C24.5047 26.3662 23.6502 27.7608 23.0116 29.4056C22.3933 30.9948 21.971 32.8124 21.8497 35.4738C21.7265 38.1394 21.6982 38.9916 21.6982 45.7808C21.6982 52.57 21.7265 53.4222 21.8497 56.0878C21.971 58.7494 22.3933 60.5668 23.0116 62.156C23.6502 63.7998 24.5049 65.196 25.897 66.5846C27.289 67.9732 28.6824 68.8282 30.3282 69.4682C31.9204 70.0862 33.7371 70.5082 36.4001 70.6294C39.0687 70.7506 39.92 70.7808 46.7132 70.7808C53.5065 70.7808 54.3592 70.7526 57.0264 70.6294C59.6896 70.5082 61.5081 70.0862 63.0983 69.4682C64.7431 68.8282 66.1373 67.9738 67.5295 66.5846C68.9218 65.1954 69.7745 63.7998 70.4149 62.156C71.0332 60.5668 71.4575 58.7492 71.5768 56.0878C71.698 53.4202 71.7262 52.57 71.7262 45.7808C71.7262 38.9916 71.698 38.1394 71.5768 35.4738C71.4555 32.8122 71.0332 30.9938 70.4149 29.4056C69.7745 27.7618 68.9196 26.3684 67.5295 24.977C66.1395 23.5856 64.7431 22.7316 63.1003 22.0934C61.5081 21.4754 59.6894 21.0514 57.0284 20.9322C54.3612 20.811 53.5085 20.7808 46.7152 20.7808C39.922 20.7808 39.0687 20.809 36.4001 20.9322Z" fill="white" />
                                    <defs>
                                        <linearGradient id="paint0_linear_7092_54439" x1="90.9407" y1="91.5618" x2="-0.621143" y2="-2.46459e-06" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FBE18A" />
                                            <stop offset="0.21" stop-color="#FCBB45" />
                                            <stop offset="0.38" stop-color="#F75274" />
                                            <stop offset="0.52" stop-color="#D53692" />
                                            <stop offset="0.74" stop-color="#8F39CE" />
                                            <stop offset="1" stop-color="#5B4FE9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                        </a>
                    </div>
                </section>

                {/* Adjust position of the Outlet */}
                <div className="mt-10 lg:mb-40">
                    <Outlet />
                </div>
                <h2 className="text-2xl lg:text-5xl mt-10 mb-5 lg:mb-8  text-center font-semibold font-poppins text-gray-900 dark:text-white">
                    My Favorite Project
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 lg:gap-10 space-x-0  mx-2 lg:mx-40 lg:mb-60 mb-20">
                    <div className="flex flex-col items-start">
                        {/* Container gambar yang memiliki posisi relative */}
                        <div className="border-2 rounded-md border-gray-500 dark:border-gray-100 relative">
                            <img src="/project1.png" className="h-40 lg:h-48 w-80 lg:w-96 p-3" alt="React" />
                        </div>

                        {/* Container flex untuk heading dan ikon GitHub */}
                        <div className="flex items-center justify-between w-full mt-2">
                            <h4 className="font-bold text-xl">Web Comics (Pre Mini)</h4>

                            {/* Ikon GitHub di samping heading */}
                            <a href="https://github.com/achnazriel/comics.git" className="lg:mr-10 mr-2">
                                <svg style={{ width: 20 }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path fill="#00BFFF" d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" fill-rule="nonzero" />
                                    </g>
                                </svg>
                            </a>
                        </div>

                        <p className="mb-2 text-xs font-poppins lg:text-sm text-gray-500 dark:text-gray-400 text-left">
                            web comic project involves both back-end and front-end development. The back end, built with Laravel, handles comic and chapter management, including efficient creation, updating, and organization of content. The front end focuses on delivering a responsive and user-friendly layout, ensuring readers can easily navigate through comics and chapters
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin">Laravel</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin1">PHP</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin2">Tailwind</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin3">Blade</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin4">Javascript</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin5">HTML5</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin6">CSS3</div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start">
                    {/* Container gambar yang memiliki posisi relative */}
                    <div className="border-2 rounded-md border-gray-500 dark:border-gray-100 relative">
                        <img src="/project2.png" className="h-40 lg:h-48 w-80 lg:w-96 p-3" alt="React" />
                    </div>

                    {/* Container flex untuk heading dan ikon GitHub */}
                    <div className="flex items-center justify-between w-full mt-2">
                        <h4 className="font-bold text-xl">Manajemen Restoran</h4>

                        {/* Ikon GitHub di samping heading */}
                        <a href="https://github.com/achnazriell/restoran.git" className="lg:mr-10 mr-2">
                            <svg style={{ width: 20 }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path fill="#00BFFF" d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z" fill-rule="nonzero" />
                                </g>
                            </svg>
                        </a>
                    </div>
                        <p className="mb-2 text-xs font-poppins lg:text-sm text-gray-500 dark:text-gray-400 text-left ">
                            The restaurant management system is designed to streamline and optimize various aspects of restaurant operations. It includes both back-end and front-end functionalities. On the back end, the system manages reservations, menu items, staff, and orders, allowing for efficient handling of customer preferences, seating arrangements, and kitchen operations.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin" >Laravel</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin1" >PHP</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin2" >Bootstrap</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin3" >Blade</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin4" >Javascript</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin5" >HTML5</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin6" >CSS3</div>
                            <div className="bg-gray-400 lg:text-sm text-xs px-2 py-1 rounded-lg animate-zoomin7" >Admin LTE</div>
                        </div>
                    </div>
                </div>
                <h2 className="text-xl lg:text-4xl ml-2 lg:ml-0 text-center font-semibold font-poppins text-gray-900 dark:text-white">
                    Need Help ?
                </h2>
                <div className='flex justify-center text-xxs lg:text-sm mt-5'>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=acmassirau@gmail.com&su=Hello " >
                        <button className='border-blue-500 border-2 rounded-3xl px-4 py-2 font-medium hover:bg-blue-700'>Contact Me</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
