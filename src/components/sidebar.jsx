import { NavLink } from "react-router-dom"

const Sidebar = () => {
  return (
    <nav className="absolute mt-5 md:mt-5 lg:mt-10 pb-20 h-[50%]">
      <ul className="list-none space-y-10 lg:space-y-20 backdrop-blur-md h-full w-5 lg:w-10 flex flex-col justify-evenly items-center font-semibold text-xs md:text-xs lg:text-base">
        <li className="rotate-90 w-max animate-slideInLeft">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative py-4 px-2 transition-all duration-300 ease-out
              before:transition-all before:duration-300 before:ease-out before:absolute before:bottom-2 before:left-0 before:h-[2px] before:rounded-full
              after:absolute after:bottom-2 after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-500 after:ease-out
              hover:-translate-x-1
              ${
                isActive
                  ? "text-blue-500 dark:text-blue-400 font-bold before:bg-blue-500 dark:before:bg-blue-400 before:w-full after:w-full after:bg-blue-400/50 after:blur-sm scale-105"
                  : "text-gray-700 dark:text-gray-300 before:bg-blue-500 dark:before:bg-blue-400 before:w-0 after:w-0 after:bg-blue-400/50 hover:text-blue-500 dark:hover:text-blue-400 hover:before:w-full hover:after:w-full hover:after:blur-sm"
              }`
            }
          >
            {({ isActive }) => (
              <span className="relative">
                About Me
                {isActive && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" />
                )}
              </span>
            )}
          </NavLink>
        </li>

        <li className="rotate-90 w-max animate-slideInLeft" style={{ animationDelay: "0.1s" }}>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `relative py-4 px-2 transition-all duration-300 ease-out
              before:transition-all before:duration-300 before:ease-out before:absolute before:bottom-2 before:left-0 before:h-[2px] before:rounded-full
              after:absolute after:bottom-2 after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-500 after:ease-out
              hover:-translate-x-1
              ${
                isActive
                  ? "text-blue-500 dark:text-blue-400 font-bold before:bg-blue-500 dark:before:bg-blue-400 before:w-full after:w-full after:bg-blue-400/50 after:blur-sm scale-105"
                  : "text-gray-700 dark:text-gray-300 before:bg-blue-500 dark:before:bg-blue-400 before:w-0 after:w-0 after:bg-blue-400/50 hover:text-blue-500 dark:hover:text-blue-400 hover:before:w-full hover:after:w-full hover:after:blur-sm"
              }`
            }
          >
            {({ isActive }) => (
              <span className="relative">
                My Skills
                {isActive && (
                  <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" />
                )}
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
