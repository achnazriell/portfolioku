import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className="absolute mt-5 md:mt-5 lg:mt-12 pb-20 h-[50%]">
            <ul className="list-none lg:space-y-14 md:space-y-5 space-y-5 backdrop-blur-md h-full w-5 lg:w-10 flex flex-col justify-evenly items-center font-semibold text-xs md:text-xs lg:text-base">
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
    );
}

export default Sidebar;
