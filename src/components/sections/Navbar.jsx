export default function Navbar({ darkMode, setDarkMode, isMenuOpen, setIsMenuOpen }) {
    return (
        <nav className={`fixed w-full  backdrop-blur-lg shadow-sm z-50 transition-colors duration-300 py-2`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-3xl font-bold text-primary">Gaffar Ali</span>
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className={`text-gray-300 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-primary font-medium cursor-pointer transition-colors`}>
                            Home
                        </a>
                        <a href="#about" className={`text-gray-300 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-primary font-medium cursor-pointer transition-colors`}>
                            About
                        </a>
                        <a href="#skills" className={`text-gray-300 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-primary font-medium cursor-pointer transition-colors`}>
                            Skills
                        </a>
                        <a href="#projects" className={`text-gray-300 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-primary font-medium cursor-pointer transition-colors`}>
                            Projects
                        </a>
                        <a href="#experience" className={`text-gray-300 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-primary font-medium cursor-pointer transition-colors`}>
                            Experience
                        </a>
                        <a href="#testimonials" className={`text-gray-300 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-primary font-medium cursor-pointer transition-colors`}>
                            Testimonials
                        </a>
                        <a href="#contact" className={`text-gray-300 hover:text-indigo-400 dark:text-gray-300 dark:hover:text-primary font-medium cursor-pointer transition-colors`}>
                            Contact
                        </a>
                        <button onClick={() => setDarkMode(!darkMode)} className={`p-2 rounded-full bg-gray-700 text-yellow-400" : "bg-gray-200 text-gray-700"} transition-colors !rounded-button cursor-pointer`}>
                            <i className={`fas fa-sun" : "fa-moon"}`}></i>
                        </button>
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounddark:text-gray-700 dark:hover:text-primary hover:bg-gray-100 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer">
                            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-700 dark:hover:text-primary hover:bg-gray-50 cursor-pointer">
                            Home
                        </a>
                        <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-700 dark:hover:text-primary hover:bg-gray-50 cursor-pointer">
                            About
                        </a>
                        <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-700 dark:hover:text-primary hover:bg-gray-50 cursor-pointer">
                            Skills
                        </a>
                        <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-700 dark:hover:text-primary hover:bg-gray-50 cursor-pointer">
                            Projects
                        </a>
                        <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-700 dark:hover:text-primary hover:bg-gray-50 cursor-pointer">
                            Experience
                        </a>
                        <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-700 dark:hover:text-primary hover:bg-gray-50 cursor-pointer">
                            Testimonials
                        </a>
                        <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium dark:text-gray-700 dark:hover:text-primary hover:bg-gray-50 cursor-pointer">
                            Contact
                        </a>
                        <button className="w-full text-center mt-3 bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">Hire Me</button>
                    </div>
                </div>
            )}
        </nav>
    );
}
