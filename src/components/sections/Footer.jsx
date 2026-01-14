export default function Footer() {
    return (
        <footer className={`bg-gray-900/70 dark:bg-gray-900/90 backdrop-blur-md text-white py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">Gaffar Ali</h3>
                        <p className="text-gray-400 mb-4 max-w-md">Creating beautiful digital experiences with clean code and creative solutions. Let's build something amazing together!</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <i className="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                <i className="fab fa-dribbble text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#home" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#skills" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                    Skills
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <i className="fas fa-envelope text-indigo-400 mr-2"></i>
                                <a href="mailto:demo@gmail.com" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                    demo@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-phone-alt text-indigo-400 mr-2"></i>
                                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                    +1 (123) 456-7890
                                </a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-map-marker-alt text-indigo-400 mr-2"></i>
                                <span className="text-gray-400">Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400">© {new Date().getFullYear()} Gaffar Ali. All rights reserved.</p>
                    <div className="mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-white mr-4 transition-colors cursor-pointer">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
