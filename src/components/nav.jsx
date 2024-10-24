import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

const Nav = () => {
    // Mengambil status dark mode dari localStorage, default ke true jika tidak ada
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode !== null ? JSON.parse(savedMode) : true; // default true
    });

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Menambahkan atau menghapus class dark sesuai dengan darkMode
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.add('bg-gray-900', 'text-white');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('bg-gray-900', 'text-white');
            document.body.classList.add('bg-white', 'text-gray-900');
        }

        // Menyimpan status darkMode ke localStorage
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="backdrop-blur-md sticky top-0 z-50 hidden sm:flex items-center justify-between px-10 py-5 text-gray-800 dark:text-white">
                <Link className="text-lg font-mono" to="/">
                    <h1>Achmad Nazriel Pradita</h1>
                    <div className="text-gray-500 dark:text-gray-400">Front-end Developer</div>
                </Link>
                <ul className="text-xl flex items-center fixed right-60 lg:right-96 gap-16 nav">
                    {/* Ganti <a> dengan <Link> untuk navigasi internal */}
                    <li>
                        <Link className='relative text-xl text-gray-900 dark:text-white hover:before:w-full before:transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gray-900 dark:before:bg-white' to="/technology">
                            Technology
                        </Link>
                    </li>
                    <li>
                        <Link className='relative text-xl text-gray-900 dark:text-white hover:before:w-full before:transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gray-900 dark:before:bg-white' to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        {/* Untuk link eksternal, tetap gunakan <a> */}
                        <a className='relative text-xl text-gray-900 dark:text-white hover:before:w-full before:transition-all before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-gray-900 dark:before:bg-white' href="https://mail.google.com/mail/?view=cm&fs=1&to=acmassirau@gmail.com&su=Hello ">
                            Contact
                        </a>
                    </li>
                </ul>
                <button onClick={toggleDarkMode} className="ml-4 p-2 bg-gray-200 rounded-full dark:bg-gray-700 text-gray-900 dark:text-white">
                    {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            <nav className="block sm:hidden">
                <button onClick={toggleMenu} className="fixed top-5 right-8 flex flex-col justify-center items-center gap-1 backdrop-blur-sm z-50 h-4 w-4 rounded-full">
                    <div className={`w-5 h-1 bg-black dark:bg-white transition-all ${isOpen ? 'rotate-45 translate-y-[12px]' : ''}`}></div>
                    <div className={`w-5 h-1 bg-black dark:bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-5 h-1 bg-black dark:bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-[1px]' : ''}`}></div>
                </button>

                <div className={`w-full h-full fixed right-0 top-0 backdrop-blur-xl z-40 transition-all duration-300 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <button
                        onClick={toggleDarkMode}
                        className="absolute top-6 left-9 text-5xl md:text-3xl bg-gray-200 rounded-full dark:bg-gray-700 text-gray-900 dark:text-white" >
                        {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
                    </button>
                    <ul className="flex flex-col mb-9 text-2xl gap-12 text-center font-semibold text-gray-700 dark:text-gray-200">
                        {/* Menutup menu setelah klik */}
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/technology" onClick={toggleMenu}>Technology</Link></li>
                        <li><Link to="/projects" onClick={toggleMenu}>Projects</Link></li>
                        {/* Untuk link eksternal */}
                        <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=acmassirau@gmail.com&su=Hello " onClick={toggleMenu}>Contact</a></li>
                    </ul>
                </div>
            </nav>
            <br />
            <br />
        </>
    );
};

export default Nav;
