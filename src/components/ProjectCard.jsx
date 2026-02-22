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
    image: "/project4.webp",
    title: "Humanity-Timeline (FestikaJatim)",
    description:
      "The Humanity Timeline website showcases human history with an immersive dark theme and warm golden accents. In the 'Prehistoric Era,' a detailed 3D early-human character and floating artifact icons create a clear historical atmosphere.",
    tags: ["HTML5", "Tailwind CSS", "CSS3", "Javascript"],
    links: { live: "https://humanity-timeline.vercel.app" },
  },
  {
    image: "/project3.webp",
    title: "Smart-LAB (Mini Project & UKK)",
    description:
      "SmartLab is a Learning Management System (LMS) designed to streamline the management of educational content, facilitate communication, and enhance learning experiences for both instructors and students.",
    tags: ["Laravel", "PHP", "Tailwind CSS", "Blade", "Javascript", "HTML5", "CSS3", "Bootstrap"],
    links: { live: "https://smartlab.up.railway.app" },
  },
  {
    image: "/project1.webp",
    title: "Web Comics (Pre Mini)",
    description:
      "Web comic project involves both back-end and front-end development. The back end, built with Laravel, handles comic and chapter management, including efficient creation, updating, and organization of content.",
    tags: ["Laravel", "PHP", "Tailwind", "Blade", "Javascript", "HTML5", "CSS3"],
  },
]


export default ProjectCard;
export { projectsData };
