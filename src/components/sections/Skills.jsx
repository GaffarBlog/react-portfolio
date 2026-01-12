import { useRef } from "react";

export default function Skills() {
    const skillChartRef = useRef();
    return (
        <section id="skills" className={`py-20 bg-gray-900/30 dark:bg-gray-50/30 backdrop-blur-md`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">I've worked with a variety of technologies in the web development world. Here's an overview of my technical skills and expertise.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className={`bg-gray-800/50 dark:bg-white/50 backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-8 h-96`}>
                            <div ref={skillChartRef} className="w-full h-full"></div>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Frontend Development</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fab fa-react text-4xl text-blue-500 mb-2"></i>
                                    <span className="font-medium">React</span>
                                    <span className="text-sm text-gray-500">4 years</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fab fa-js-square text-4xl text-yellow-500 mb-2"></i>
                                    <span className="font-medium">JavaScript</span>
                                    <span className="text-sm text-gray-500">5 years</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fab fa-html5 text-4xl text-orange-500 mb-2"></i>
                                    <span className="font-medium">HTML5/CSS3</span>
                                    <span className="text-sm text-gray-500">6 years</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fab fa-vuejs text-4xl text-green-500 mb-2"></i>
                                    <span className="font-medium">Vue.js</span>
                                    <span className="text-sm text-gray-500">3 years</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fab fa-sass text-4xl text-pink-500 mb-2"></i>
                                    <span className="font-medium">Sass/SCSS</span>
                                    <span className="text-sm text-gray-500">4 years</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fab fa-angular text-4xl text-red-500 mb-2"></i>
                                    <span className="font-medium">Angular</span>
                                    <span className="text-sm text-gray-500">2 years</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Backend & Tools</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fab fa-node-js text-4xl text-green-600 mb-2"></i>
                                    <span className="font-medium">Node.js</span>
                                    <span className="text-sm text-gray-500">3 years</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fas fa-database text-4xl text-blue-600 mb-2"></i>
                                    <span className="font-medium">MongoDB</span>
                                    <span className="text-sm text-gray-500">3 years</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fab fa-git-alt text-4xl text-orange-600 mb-2"></i>
                                    <span className="font-medium">Git</span>
                                    <span className="text-sm text-gray-500">5 years</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fab fa-docker text-4xl text-blue-500 mb-2"></i>
                                    <span className="font-medium">Docker</span>
                                    <span className="text-sm text-gray-500">2 years</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fas fa-terminal text-4xl text-gray-700 mb-2"></i>
                                    <span className="font-medium">TypeScript</span>
                                    <span className="text-sm text-gray-500">3 years</span>
                                </div>
                                <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer">
                                    <i className="fab fa-figma text-4xl text-purple-500 mb-2"></i>
                                    <span className="font-medium">Figma</span>
                                    <span className="text-sm text-gray-500">4 years</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
