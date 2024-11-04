import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AboutMe from './AboutMe';
import Skills from './Skills';

const navMenu = [
    {
        name: "About Me",
        href: "#About",
    },
    {
        name: "My Skills",
        href: "#Skills",
    },
];

const About = () => {
    const [scrollY, setScrollY] = useState(0);
    const [active, setActive] = useState(0);
    const [isNavVisible, setNavVisible] = useState(true);
    const width = window.innerWidth;

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setNavVisible(window.scrollY > 100 && window.scrollY < 800);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="about" className="h-[60vh] xl:h-[80vh] 2xl:h-[85vh] max-h-[800px] w-full flex items-center">
            {/* Conditional Motion Nav */}
            {width > 1000 ? (
                <motion.nav
                    initial={{ x: -100, opacity: 0 }}
                    animate={{
                        x: isNavVisible ? 0 : -100,
                        opacity: isNavVisible ? 1 : 0
                    }}
                    transition={{ duration: 0.5 }}
                    className="fixed top-0 left-0 bottom-0 h-full w-24 backdrop-blur-md flex flex-col justify-evenly items-center font-semibold about z-10"
                >
                    <ul className="list-none h-full w-full flex flex-col justify-evenly items-center">
                        {navMenu.map((menu, index) => (
                            <li
                                key={index}
                                className={`rotate-90 ${active === index ? "text-blue-500 font-bold" : "text-gray-600"} w-max`}
                            >
                                <a
                                    href={menu.href}
                                    className="py-4"
                                    onClick={() => setActive(index)}
                                >
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.nav>
            ) : (
                <nav className="absolute my-auto pb-20 h-[50%]">
                    <ul className="list-none backdrop-blur-md h-full w-24 flex flex-col justify-evenly items-center font-semibold about text-xl md:text-base">
                        {navMenu.map((menu, index) => (
                            <li key={index} className={`rotate-90 ${active === index ? "text-blue-500 font-bold" : "text-gray-600"} w-max`}>
                                <a
                                    href={menu.href}
                                    className="py-4"
                                    onClick={() => setActive(index)}
                                >
                                    {menu.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            
            {/* Main Content Section */}
            <section className="ml-32 text-gray-800 dark:text-white my-auto">
                {active === 0 && <AboutMe setVisible={(a) => setNavVisible(a)} />}
                {active === 1 && <Skills setVisible={(a) => setNavVisible(a)} />}
            </section>
        </div>
    );
};

export default About;
