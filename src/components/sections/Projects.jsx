import { useState } from "react";
import account from "../../../public/projects/account.png";
import aionic from "../../../public/projects/aionic.png";
import commingSoon from "../../../public/projects/comming-soon.png";
import ButtonTab from "../ButtonTab";
export default function Projects({ darkMode }) {
    const [activeFilter, setActiveFilter] = useState("All");

    const projects = [
        {
            id: 1,
            title: "Aionic",
            category: "React",
            image: aionic,
            description: "Aionic is a ai music streaming platform that leverages artificial intelligence to curate personalized music experiences for users.",
            technologies: ["React", "Redux", "Inertia", "Laravel", "PostgreSQL"],
            liveLink: "#",
            githubLink: "#",
        },
        {
            id: 2,
            title: "Account Management System",
            category: "Laravel",
            image: account,
            description: "Interactive dashboard for tracking portfolio performance with real-time data visualization.",
            technologies: ["Laravel", "Tailwind CSS", "MySql"],
            liveLink: "#",
            githubLink: "#",
        },
        {
            id: 3,
            title: "Comming Soon: School Management System",
            category: "Vue",
            image: commingSoon,
            description: "Comprehensive platform for managing student records, attendance, and grades with user-friendly interface.",
            technologies: ["React", "Laravel", "PostgreSQL", "Tailwind CSS"],
            liveLink: "#",
            githubLink: "#",
        },
        {
            id: 4,
            title: "Comming Soon: Task Management App",
            category: "Vue",
            image: commingSoon,
            description: "Organize and prioritize tasks with deadlines, reminders, and collaboration features for teams.",
            technologies: ["React", "Laravel", "PostgreSQL", "Tailwind CSS"],
            liveLink: "#",
            githubLink: "#",
        },
    ];

    const filteredProjects = activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter);
    return (
        <section id="projects" className={`py-20`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Here are some of my recent projects. Each one was built to solve a specific problem or explore new technologies.</p>
                </div>
                <div className="mb-8 flex justify-center">
                    <div className="px-5 py-1.5 bg-white shadow-primary flex gap-4 relative rounded-sm overflow-hidden">
                        <ButtonTab activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className={`glass-sm rounded-xl overflow-hidden shadow-lg border border-white/20 transition-transform hover:scale-[1.02]`}>
                            <div className="relative h-64 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                                    <div className="p-6 text-gray-100 ">
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {project.technologies.map((tech, index) => (
                                                <span key={index} className="px-2 py-1 bg-primary/70 font-medium tracking-wide rounded text-xs">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex justify-between">
                                    <a href={project.liveLink} className="text-primary hover:text-indigo-800 font-medium flex items-center cursor-pointer">
                                        <i className="fas fa-external-link-alt mr-2"></i> Live Demo
                                    </a>
                                    <a href={project.githubLink} className="text-primary hover:text-indigo-800 font-medium flex items-center cursor-pointer">
                                        <i className="fab fa-github mr-2"></i> Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <button className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                        View All Projects <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                </div>
            </div>
        </section>
    );
}
