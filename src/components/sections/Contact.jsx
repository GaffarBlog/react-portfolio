import Github from "../../assets/social/github.svg";
import Linkedin from "../../assets/social/linkedin2.svg";
import Twitter from "../../assets/social/twitter2.svg";
import SocialButton from "../social-button/SocialButton";
export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-300 mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto"></div>
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className={`rounded-xl p-8 glass-md shadow-primary`}>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-6">Send Me a Message</h3>
                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                        Name
                                    </label>
                                    <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:placeholder:text-gray-500" placeholder="Your name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                        Email
                                    </label>
                                    <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:placeholder:text-gray-500" placeholder="Your email" />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                    Subject
                                </label>
                                <input type="text" id="subject" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:placeholder:text-gray-500" placeholder="Subject of your message" />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                                    Message
                                </label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors dark:placeholder:text-gray-500" placeholder="Your message"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div>
                        <div className="glass-md shadow-primary p-8 mb-8">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-300 mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                        <i className="fas fa-envelope text-indigo-600"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">Email</h4>
                                        <a href="mailto:demo@gmail.com" className="text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer">
                                            demo@gmail.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                        <i className="fas fa-phone-alt text-indigo-600"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">Phone</h4>
                                        <a href="tel:+11234567890" className="text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer">
                                            +1 (123) 456-7890
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                                        <i className="fas fa-map-marker-alt text-indigo-600"></i>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-300">Location</h4>
                                        <p className="text-gray-700 dark:text-gray-400">Dhaka Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`backdrop-blur-md rounded-sm shadow-primary glass-md border border-white/20 p-8`}>
                            <h3 className="text-2xl font-bold text-text dark:text-gray-300 mb-6">Follow Me</h3>
                            <div className="flex gap-5">
                                <SocialButton src={Github} title="Github" />
                                <SocialButton src={Linkedin} title="Linkedin" />
                                <SocialButton src={Twitter} title="Twitter" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
