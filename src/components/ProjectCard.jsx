const ProjectCard = ({ image, title, description, tags, links, delay = 0 }) => {
  return (
    <div className="group flex flex-col w-full max-w-sm mx-auto" style={{ animationDelay: `${delay}ms` }}>
      <div className="relative overflow-hidden rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 transition-all duration-300 group-hover:border-[#00BFFF] group-hover:shadow-lg group-hover:shadow-[#00BFFF]/20">
        <img
          src={image || "/placeholder.svg"}
          className="w-full h-44 sm:h-48 lg:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
          alt={title}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-[#00BFFF] transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3v2H5v14h14v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6zm7.586 2H13V3h8v8h-2V6.414l-7 7L10.586 12l7-7z" />
              </svg>
            </a>
          )}
          {links?.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-[#00BFFF] transition-all duration-300 hover:scale-110"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-[#00BFFF] transition-colors duration-300">
            {title}
          </h4>
        </div>

        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-4">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg transition-all duration-300 hover:bg-[#00BFFF] hover:text-white hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const projectsData = [
  {
    image: "/project4.png",
    title: "Humanity-Timeline (FestikaJatim)",
    description:
      "The Humanity Timeline website showcases human history with an immersive dark theme and warm golden accents. In the 'Prehistoric Era,' a detailed 3D early-human character and floating artifact icons create a clear historical atmosphere.",
    tags: ["HTML5", "Tailwind CSS", "CSS3", "Javascript"],
    links: { live: "https://humanity-timeline.vercel.app", github: "https://github.com/achnazriel/comics.git" },
  },
  {
    image: "/project3.png",
    title: "Smart-LAB (Mini Project)",
    description:
      "SmartLab is a Learning Management System (LMS) designed to streamline the management of educational content, facilitate communication, and enhance learning experiences for both instructors and students.",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Blade", "Javascript", "HTML5", "CSS3", "Bootstrap"],
    links: { github: "https://github.com/Alter-Lexcy/Smart-Lab" },
  },
  {
    image: "/project1.png",
    title: "Web Comics (Pre Mini)",
    description:
      "Web comic project involves both back-end and front-end development. The back end, built with Laravel, handles comic and chapter management, including efficient creation, updating, and organization of content.",
    tags: ["Laravel", "PHP", "Tailwind", "Blade", "Javascript", "HTML5", "CSS3"],
    links: { github: "https://github.com/achnazriel/comics.git" },
  },
]


export default ProjectCard;
export { projectsData };
