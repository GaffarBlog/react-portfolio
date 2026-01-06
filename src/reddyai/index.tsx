// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect, useRef } from "react";
import * as echarts from "echarts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
const App: React.FC = () => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [activeFilter, setActiveFilter] = useState("All");
   const [typedText, setTypedText] = useState("");
   const [typingIndex, setTypingIndex] = useState(0);
   const [darkMode, setDarkMode] = useState(false);
   const skillChartRef = useRef < HTMLDivElement > null;
   useEffect(() => {
      if (darkMode) {
         document.documentElement.classList.add("dark");
      } else {
         document.documentElement.classList.remove("dark");
      }
   }, [darkMode]);
   const roles = ["Frontend Developer", "UI Designer", "React Specialist", "Full Stack Developer"];
   const currentRoleIndex = useRef(0);
   const currentCharIndex = useRef(0);
   const isDeleting = useRef(false);
   const typingSpeed = useRef(100);
   // Typing effect
   useEffect(() => {
      const typeWriter = () => {
         const currentRole = roles[currentRoleIndex.current];
         if (isDeleting.current) {
            setTypedText(currentRole.substring(0, currentCharIndex.current - 1));
            currentCharIndex.current -= 1;
            typingSpeed.current = 50;
         } else {
            setTypedText(currentRole.substring(0, currentCharIndex.current + 1));
            currentCharIndex.current += 1;
            typingSpeed.current = 150;
         }
         if (!isDeleting.current && currentCharIndex.current === currentRole.length) {
            isDeleting.current = true;
            typingSpeed.current = 1500; // Pause at the end
         } else if (isDeleting.current && currentCharIndex.current === 0) {
            isDeleting.current = false;
            currentRoleIndex.current = (currentRoleIndex.current + 1) % roles.length;
            typingSpeed.current = 500; // Pause before typing next word
         }
         setTimeout(typeWriter, typingSpeed.current);
      };
      const timer = setTimeout(typeWriter, 1000);
      return () => clearTimeout(timer);
   }, []);
   // Initialize skill chart
   useEffect(() => {
      if (skillChartRef.current) {
         const chart = echarts.init(skillChartRef.current);
         const option = {
            animation: false,
            radar: {
               indicator: [
                  { name: "React", max: 100 },
                  { name: "JavaScript", max: 100 },
                  { name: "HTML/CSS", max: 100 },
                  { name: "UI Design", max: 100 },
                  { name: "Node.js", max: 100 },
                  { name: "TypeScript", max: 100 },
               ],
               radius: "65%",
               splitNumber: 4,
               axisName: {
                  color: "#333",
                  fontSize: 14,
                  fontWeight: "bold",
               },
               splitLine: {
                  lineStyle: {
                     color: "rgba(238, 197, 102, 0.2)",
                  },
               },
               splitArea: {
                  show: true,
                  areaStyle: {
                     color: ["rgba(255, 255, 255, 0.1)", "rgba(238, 197, 102, 0.05)"],
                  },
               },
            },
            series: [
               {
                  name: "Skills",
                  type: "radar",
                  data: [
                     {
                        value: [90, 85, 95, 80, 75, 85],
                        name: "Skill Level",
                        areaStyle: {
                           color: "rgba(64, 158, 255, 0.6)",
                        },
                        lineStyle: {
                           color: "rgba(64, 158, 255, 0.8)",
                           width: 2,
                        },
                        itemStyle: {
                           color: "#409EFF",
                        },
                     },
                  ],
               },
            ],
         };
         chart.setOption(option);
         const handleResize = () => {
            chart.resize();
         };
         window.addEventListener("resize", handleResize);
         return () => {
            window.removeEventListener("resize", handleResize);
            chart.dispose();
         };
      }
   }, []);
   const projects = [
      {
         id: 1,
         title: "E-Commerce Platform",
         category: "React",
         image: "https://readdy.ai/api/search-image?query=modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20product%20grid%20layout%2C%20shopping%20cart%2C%20user-friendly%20navigation%2C%20responsive%20design%2C%20minimalist%20aesthetic%2C%20professional%20product%20photography%2C%20white%20background%2C%20high-end%20look&width=600&height=400&seq=1&orientation=landscape",
         description:
            "A full-featured e-commerce platform with product filtering, cart management, and payment integration.",
         technologies: ["React", "Redux", "Node.js", "MongoDB"],
         liveLink: "#",
         githubLink: "#",
      },
      {
         id: 2,
         title: "Portfolio Dashboard",
         category: "Vue",
         image: "https://readdy.ai/api/search-image?query=elegant%20dashboard%20interface%20with%20data%20visualization%2C%20analytics%20charts%2C%20user%20statistics%2C%20dark%20theme%2C%20modern%20UI%20elements%2C%20clean%20layout%2C%20professional%20design%2C%20business%20intelligence%20visualization%2C%20tech%20aesthetic&width=600&height=400&seq=2&orientation=landscape",
         description: "Interactive dashboard for tracking portfolio performance with real-time data visualization.",
         technologies: ["Vue.js", "Chart.js", "Firebase"],
         liveLink: "#",
         githubLink: "#",
      },
      {
         id: 3,
         title: "Social Media App",
         category: "React",
         image: "https://readdy.ai/api/search-image?query=social%20media%20application%20interface%20showing%20user%20profiles%2C%20post%20feed%2C%20messaging%20features%2C%20modern%20design%2C%20mobile%20responsive%20layout%2C%20engagement%20metrics%2C%20clean%20UI%2C%20professional%20look%2C%20tech%20aesthetic&width=600&height=400&seq=3&orientation=landscape",
         description: "A responsive social media application with real-time messaging and post interactions.",
         technologies: ["React", "Socket.io", "Express", "MongoDB"],
         liveLink: "#",
         githubLink: "#",
      },
      {
         id: 4,
         title: "Task Management System",
         category: "Angular",
         image: "https://readdy.ai/api/search-image?query=task%20management%20application%20with%20kanban%20board%2C%20task%20cards%2C%20progress%20tracking%2C%20team%20collaboration%20features%2C%20modern%20UI%2C%20productivity%20tool%20interface%2C%20clean%20design%2C%20professional%20look%2C%20tech%20aesthetic&width=600&height=400&seq=4&orientation=landscape",
         description: "Collaborative task management system with drag-and-drop interface and team features.",
         technologies: ["Angular", "TypeScript", "Firebase"],
         liveLink: "#",
         githubLink: "#",
      },
   ];
   const experiences = [
      {
         id: 1,
         company: "Tech Innovations Inc.",
         position: "Senior Frontend Developer",
         period: "Jan 2022 - Present",
         description:
            "Leading the frontend development team, implementing modern UI/UX designs, and optimizing application performance.",
         technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
         logo: "building",
      },
      {
         id: 2,
         company: "Digital Solutions Ltd.",
         position: "UI/UX Developer",
         period: "Mar 2020 - Dec 2021",
         description:
            "Designed and developed responsive web applications, collaborated with UX researchers to implement user-friendly interfaces.",
         technologies: ["Vue.js", "SCSS", "Figma", "JavaScript"],
         logo: "laptop-code",
      },
      {
         id: 3,
         company: "WebCraft Studio",
         position: "Frontend Developer",
         period: "Jun 2018 - Feb 2020",
         description:
            "Developed responsive websites and web applications for various clients across different industries.",
         technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
         logo: "code",
      },
   ];
   const testimonials = [
      {
         id: 1,
         name: "Sarah Johnson",
         position: "CEO at TechStart",
         quote: "One of the most talented developers I've worked with. Delivered our project on time with exceptional quality and attention to detail.",
         avatar:
            "https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%2C%20CEO%2C%20confident%2C%20smiling%2C%20modern%20office%20background%2C%20business%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=5&orientation=squarish",
      },
      {
         id: 2,
         name: "Michael Chen",
         position: "Product Manager at InnovateCorp",
         quote: "Outstanding technical skills combined with a great eye for design. Transformed our product vision into a beautiful, functional reality.",
         avatar:
            "https://readdy.ai/api/search-image?query=professional%20business%20man%20portrait%2C%20product%20manager%2C%20asian%2C%20confident%2C%20smiling%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=6&orientation=squarish",
      },
      {
         id: 3,
         name: "Emily Rodriguez",
         position: "CTO at FutureTech",
         quote: "Exceptional problem-solving abilities and technical expertise. Consistently delivered high-quality code and innovative solutions to complex challenges.",
         avatar:
            "https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%2C%20CTO%2C%20latina%2C%20tech%20leader%2C%20confident%2C%20modern%20office%20background%2C%20business%20casual%20attire%2C%20professional%20headshot%20style%2C%20neutral%20background%2C%20high%20quality%2C%20realistic&width=100&height=100&seq=7&orientation=squarish",
      },
   ];
   const filteredProjects =
      activeFilter === "All" ? projects : projects.filter(project => project.category === activeFilter);
   return (
      <div
         className={`min-h-screen ${
            darkMode
               ? "dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
               : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
         } transition-colors duration-300`}
      >
         {/* Navigation */}
         <nav
            className={`fixed w-full ${
               darkMode ? "bg-gray-800/70" : "bg-white/70"
            } backdrop-blur-lg shadow-lg z-50 transition-colors duration-300`}
         >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='flex justify-between h-16'>
                  <div className='flex items-center'>
                     <span className={`text-2xl font-bold ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}>
                        Portfolio
                     </span>
                  </div>
                  {/* Desktop Navigation */}
                  <div className='hidden md:flex items-center space-x-8'>
                     <a
                        href='#home'
                        className={`${
                           darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"
                        } font-medium cursor-pointer transition-colors`}
                     >
                        Home
                     </a>
                     <a
                        href='#about'
                        className={`${
                           darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"
                        } font-medium cursor-pointer transition-colors`}
                     >
                        About
                     </a>
                     <a
                        href='#skills'
                        className={`${
                           darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"
                        } font-medium cursor-pointer transition-colors`}
                     >
                        Skills
                     </a>
                     <a
                        href='#projects'
                        className={`${
                           darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"
                        } font-medium cursor-pointer transition-colors`}
                     >
                        Projects
                     </a>
                     <a
                        href='#experience'
                        className={`${
                           darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"
                        } font-medium cursor-pointer transition-colors`}
                     >
                        Experience
                     </a>
                     <a
                        href='#testimonials'
                        className={`${
                           darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"
                        } font-medium cursor-pointer transition-colors`}
                     >
                        Testimonials
                     </a>
                     <a
                        href='#contact'
                        className={`${
                           darkMode ? "text-gray-300 hover:text-indigo-400" : "text-gray-700 hover:text-indigo-600"
                        } font-medium cursor-pointer transition-colors`}
                     >
                        Contact
                     </a>
                     <button
                        onClick={() => setDarkMode(!darkMode)}
                        className={`p-2 rounded-full ${
                           darkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-200 text-gray-700"
                        } transition-colors !rounded-button cursor-pointer`}
                     >
                        <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
                     </button>
                     <button className='bg-indigo-600 text-white px-5 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer'>
                        Hire Me
                     </button>
                  </div>
                  {/* Mobile menu button */}
                  <div className='md:hidden flex items-center'>
                     <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer'
                     >
                        <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
                     </button>
                  </div>
               </div>
            </div>
            {/* Mobile menu */}
            {isMenuOpen && (
               <div className='md:hidden bg-white shadow-lg'>
                  <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                     <a
                        href='#home'
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer'
                     >
                        Home
                     </a>
                     <a
                        href='#about'
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer'
                     >
                        About
                     </a>
                     <a
                        href='#skills'
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer'
                     >
                        Skills
                     </a>
                     <a
                        href='#projects'
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer'
                     >
                        Projects
                     </a>
                     <a
                        href='#experience'
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer'
                     >
                        Experience
                     </a>
                     <a
                        href='#testimonials'
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer'
                     >
                        Testimonials
                     </a>
                     <a
                        href='#contact'
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 cursor-pointer'
                     >
                        Contact
                     </a>
                     <button className='w-full text-center mt-3 bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer'>
                        Hire Me
                     </button>
                  </div>
               </div>
            )}
         </nav>
         {/* Hero Section */}
         <section
            id='home'
            className='relative min-h-screen flex items-center pt-16'
            style={{
               backgroundImage: `url('https://readdy.ai/api/search-image?query=abstract%20modern%20gradient%20background%20with%20soft%20blue%20and%20purple%20colors%2C%20elegant%20design%2C%20professional%20tech%20aesthetic%2C%20subtle%20geometric%20patterns%2C%20clean%20and%20minimalist%20style%2C%20perfect%20for%20web%20hero%20section%2C%20high%20quality%20digital%20art&width=1440&height=800&seq=8&orientation=landscape')`,
               backgroundSize: "cover",
               backgroundPosition: "center",
            }}
         >
            <div className='absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-transparent'></div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                  <div className='text-white'>
                     <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
                        Hello, I'm <span className='text-indigo-300'>John Doe</span>
                     </h1>
                     <div className='text-2xl md:text-3xl font-medium mb-6 h-10'>
                        I'm a <span className='text-indigo-300'>{typedText}</span>
                        <span className='animate-pulse'>|</span>
                     </div>
                     <p className='text-lg md:text-xl mb-8 text-gray-200 max-w-lg'>
                        Crafting beautiful digital experiences with clean code and creative solutions.
                     </p>
                     <div className='flex flex-wrap gap-4'>
                        <button className='bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer'>
                           Hire Me
                        </button>
                        <button className='bg-transparent border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors !rounded-button whitespace-nowrap cursor-pointer'>
                           View My Work
                        </button>
                     </div>
                     <div className='flex mt-8 space-x-4'>
                        <a href='#' className='text-white hover:text-indigo-300 transition-colors cursor-pointer'>
                           <i className='fab fa-github text-2xl'></i>
                        </a>
                        <a href='#' className='text-white hover:text-indigo-300 transition-colors cursor-pointer'>
                           <i className='fab fa-linkedin text-2xl'></i>
                        </a>
                        <a href='#' className='text-white hover:text-indigo-300 transition-colors cursor-pointer'>
                           <i className='fab fa-twitter text-2xl'></i>
                        </a>
                        <a href='#' className='text-white hover:text-indigo-300 transition-colors cursor-pointer'>
                           <i className='fab fa-dribbble text-2xl'></i>
                        </a>
                     </div>
                  </div>
                  <div className='hidden md:block'>
                     <img
                        src='https://readdy.ai/api/search-image?query=professional%203D%20avatar%20of%20a%20young%20male%20developer%20with%20modern%20stylish%20appearance%2C%20creative%20pose%2C%20high%20quality%20render%2C%20professional%20lighting%2C%20tech%20aesthetic%2C%20transparent%20background%2C%20detailed%20facial%20features%2C%20modern%20haircut&width=600&height=600&seq=9&orientation=squarish'
                        alt='Developer Avatar'
                        className='w-full max-w-md mx-auto'
                     />
                  </div>
               </div>
            </div>
            <div className='absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer'>
               <a href='#about'>
                  <i className='fas fa-chevron-down text-2xl'></i>
               </a>
            </div>
         </section>
         {/* About Section */}
         <section id='about' className={`py-20 ${darkMode ? "bg-gray-800/30" : "bg-white/30"} backdrop-blur-md`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='text-center mb-16'>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>About Me</h2>
                  <div className='w-20 h-1 bg-indigo-600 mx-auto'></div>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                  <div className='relative'>
                     <div className='absolute -top-4 -left-4 w-24 h-24 bg-indigo-100 rounded-full z-0'></div>
                     <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-100 rounded-full z-0'></div>
                     <img
                        src='https://readdy.ai/api/search-image?query=professional%20portrait%20of%20a%20young%20male%20developer%20in%20casual%20smart%20attire%2C%20sitting%20at%20desk%20with%20computer%2C%20creative%20workspace%2C%20modern%20office%20environment%2C%20natural%20lighting%2C%20professional%20photography%2C%20high%20quality%2C%20realistic&width=600&height=700&seq=10&orientation=portrait'
                        alt='About Me'
                        className='rounded-lg shadow-xl z-10 relative object-cover w-full h-full'
                     />
                  </div>
                  <div>
                     <h3 className='text-2xl font-bold text-gray-900 mb-4'>Who am I?</h3>
                     <p className='text-gray-700 mb-6'>
                        I'm a passionate Frontend Developer and UI Designer with over 5 years of experience creating
                        beautiful, functional, and user-centered digital experiences. With a background in both design
                        and development, I bring a unique perspective to every project.
                     </p>
                     <h3 className='text-2xl font-bold text-gray-900 mb-4'>My Journey</h3>
                     <div className='space-y-4 mb-8'>
                        <div className='flex'>
                           <div className='flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center'>
                              <i className='fas fa-graduation-cap text-indigo-600'></i>
                           </div>
                           <div className='ml-4'>
                              <h4 className='text-lg font-semibold text-gray-900'>Computer Science Degree</h4>
                              <p className='text-gray-600'>Graduated with honors from Tech University</p>
                           </div>
                        </div>
                        <div className='flex'>
                           <div className='flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center'>
                              <i className='fas fa-briefcase text-indigo-600'></i>
                           </div>
                           <div className='ml-4'>
                              <h4 className='text-lg font-semibold text-gray-900'>Started Professional Career</h4>
                              <p className='text-gray-600'>Joined WebCraft Studio as Junior Developer</p>
                           </div>
                        </div>
                        <div className='flex'>
                           <div className='flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center'>
                              <i className='fas fa-award text-indigo-600'></i>
                           </div>
                           <div className='ml-4'>
                              <h4 className='text-lg font-semibold text-gray-900'>Senior Developer</h4>
                              <p className='text-gray-600'>Leading projects at Tech Innovations Inc.</p>
                           </div>
                        </div>
                     </div>
                     <h3 className='text-2xl font-bold text-gray-900 mb-4'>Personal Interests</h3>
                     <div className='flex flex-wrap gap-3 mb-8'>
                        <span className='px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium'>
                           Photography
                        </span>
                        <span className='px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium'>Hiking</span>
                        <span className='px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium'>
                           Reading
                        </span>
                        <span className='px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium'>Chess</span>
                        <span className='px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full font-medium'>
                           Cooking
                        </span>
                     </div>
                     <button className='bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center !rounded-button whitespace-nowrap cursor-pointer'>
                        <i className='fas fa-download mr-2'></i> Download Resume
                     </button>
                  </div>
               </div>
            </div>
         </section>
         {/* Skills Section */}
         <section id='skills' className={`py-20 ${darkMode ? "bg-gray-900/30" : "bg-gray-50/30"} backdrop-blur-md`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='text-center mb-16'>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>My Skills</h2>
                  <div className='w-20 h-1 bg-indigo-600 mx-auto'></div>
                  <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
                     I've worked with a variety of technologies in the web development world. Here's an overview of my
                     technical skills and expertise.
                  </p>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                  <div>
                     <div
                        className={`${
                           darkMode ? "bg-gray-800/50" : "bg-white/50"
                        } backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-8 h-96`}
                     >
                        <div ref={skillChartRef} className='w-full h-full'></div>
                     </div>
                  </div>
                  <div className='space-y-6'>
                     <div>
                        <h3 className='text-xl font-bold text-gray-900 mb-4'>Frontend Development</h3>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fab fa-react text-4xl text-blue-500 mb-2'></i>
                              <span className='font-medium'>React</span>
                              <span className='text-sm text-gray-500'>4 years</span>
                           </div>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fab fa-js-square text-4xl text-yellow-500 mb-2'></i>
                              <span className='font-medium'>JavaScript</span>
                              <span className='text-sm text-gray-500'>5 years</span>
                           </div>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fab fa-html5 text-4xl text-orange-500 mb-2'></i>
                              <span className='font-medium'>HTML5/CSS3</span>
                              <span className='text-sm text-gray-500'>6 years</span>
                           </div>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fab fa-vuejs text-4xl text-green-500 mb-2'></i>
                              <span className='font-medium'>Vue.js</span>
                              <span className='text-sm text-gray-500'>3 years</span>
                           </div>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fab fa-sass text-4xl text-pink-500 mb-2'></i>
                              <span className='font-medium'>Sass/SCSS</span>
                              <span className='text-sm text-gray-500'>4 years</span>
                           </div>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fab fa-angular text-4xl text-red-500 mb-2'></i>
                              <span className='font-medium'>Angular</span>
                              <span className='text-sm text-gray-500'>2 years</span>
                           </div>
                        </div>
                     </div>
                     <div>
                        <h3 className='text-xl font-bold text-gray-900 mb-4'>Backend & Tools</h3>
                        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fab fa-node-js text-4xl text-green-600 mb-2'></i>
                              <span className='font-medium'>Node.js</span>
                              <span className='text-sm text-gray-500'>3 years</span>
                           </div>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fas fa-database text-4xl text-blue-600 mb-2'></i>
                              <span className='font-medium'>MongoDB</span>
                              <span className='text-sm text-gray-500'>3 years</span>
                           </div>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fab fa-git-alt text-4xl text-orange-600 mb-2'></i>
                              <span className='font-medium'>Git</span>
                              <span className='text-sm text-gray-500'>5 years</span>
                           </div>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fab fa-docker text-4xl text-blue-500 mb-2'></i>
                              <span className='font-medium'>Docker</span>
                              <span className='text-sm text-gray-500'>2 years</span>
                           </div>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fas fa-terminal text-4xl text-gray-700 mb-2'></i>
                              <span className='font-medium'>TypeScript</span>
                              <span className='text-sm text-gray-500'>3 years</span>
                           </div>
                           <div className='bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center transition-transform hover:scale-105 cursor-pointer'>
                              <i className='fab fa-figma text-4xl text-purple-500 mb-2'></i>
                              <span className='font-medium'>Figma</span>
                              <span className='text-sm text-gray-500'>4 years</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Projects Section */}
         <section id='projects' className={`py-20 ${darkMode ? "bg-gray-800/30" : "bg-white/30"} backdrop-blur-md`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='text-center mb-16'>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>My Projects</h2>
                  <div className='w-20 h-1 bg-indigo-600 mx-auto'></div>
                  <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
                     Here are some of my recent projects. Each one was built to solve a specific problem or explore new
                     technologies.
                  </p>
               </div>
               <div className='flex flex-wrap justify-center mb-8 gap-2'>
                  <button
                     onClick={() => setActiveFilter("All")}
                     className={`px-4 py-2 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                        activeFilter === "All"
                           ? "bg-indigo-600 text-white"
                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     }`}
                  >
                     All
                  </button>
                  <button
                     onClick={() => setActiveFilter("React")}
                     className={`px-4 py-2 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                        activeFilter === "React"
                           ? "bg-indigo-600 text-white"
                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     }`}
                  >
                     React
                  </button>
                  <button
                     onClick={() => setActiveFilter("Vue")}
                     className={`px-4 py-2 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                        activeFilter === "Vue"
                           ? "bg-indigo-600 text-white"
                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     }`}
                  >
                     Vue
                  </button>
                  <button
                     onClick={() => setActiveFilter("Angular")}
                     className={`px-4 py-2 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer ${
                        activeFilter === "Angular"
                           ? "bg-indigo-600 text-white"
                           : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                     }`}
                  >
                     Angular
                  </button>
               </div>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                  {filteredProjects.map(project => (
                     <div
                        key={project.id}
                        className={`${
                           darkMode ? "bg-gray-800/50" : "bg-white/50"
                        } backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-white/20 transition-transform hover:scale-[1.02]`}
                     >
                        <div className='relative h-64 overflow-hidden'>
                           <img
                              src={project.image}
                              alt={project.title}
                              className='w-full h-full object-cover object-top'
                           />
                           <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end'>
                              <div className='p-6 text-white'>
                                 <h3 className='text-2xl font-bold'>{project.title}</h3>
                                 <div className='flex flex-wrap gap-2 mt-2'>
                                    {project.technologies.map((tech, index) => (
                                       <span key={index} className='px-2 py-1 bg-indigo-600/80 rounded text-xs'>
                                          {tech}
                                       </span>
                                    ))}
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className='p-6'>
                           <p className='text-gray-700 mb-4'>{project.description}</p>
                           <div className='flex justify-between'>
                              <a
                                 href={project.liveLink}
                                 className='text-indigo-600 hover:text-indigo-800 font-medium flex items-center cursor-pointer'
                              >
                                 <i className='fas fa-external-link-alt mr-2'></i> Live Demo
                              </a>
                              <a
                                 href={project.githubLink}
                                 className='text-indigo-600 hover:text-indigo-800 font-medium flex items-center cursor-pointer'
                              >
                                 <i className='fab fa-github mr-2'></i> Source Code
                              </a>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
               <div className='text-center mt-12'>
                  <button className='bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer'>
                     View All Projects <i className='fas fa-arrow-right ml-2'></i>
                  </button>
               </div>
            </div>
         </section>
         {/* Experience Section */}
         <section id='experience' className={`py-20 ${darkMode ? "bg-gray-900/30" : "bg-gray-50/30"} backdrop-blur-md`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='text-center mb-16'>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Work Experience</h2>
                  <div className='w-20 h-1 bg-indigo-600 mx-auto'></div>
                  <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
                     My professional journey through various roles and companies in the tech industry.
                  </p>
               </div>
               <div className='relative'>
                  {/* Timeline line */}
                  <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200'></div>
                  <div className='space-y-12'>
                     {experiences.map((exp, index) => (
                        <div
                           key={exp.id}
                           className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                           <div className='md:w-1/2'></div>
                           <div className='hidden md:flex items-center justify-center'>
                              <div className='w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center z-10'>
                                 <i className={`fas fa-${exp.logo} text-white`}></i>
                              </div>
                           </div>
                           <div className='md:w-1/2 bg-white p-6 rounded-lg shadow-md md:mt-0 mt-4 hover:shadow-lg transition-shadow'>
                              <div className='md:hidden w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center mb-4 mx-auto'>
                                 <i className={`fas fa-${exp.logo} text-white`}></i>
                              </div>
                              <h3 className='text-xl font-bold text-gray-900'>{exp.position}</h3>
                              <div className='flex items-center justify-between mt-1 mb-3'>
                                 <span className='text-indigo-600 font-medium'>{exp.company}</span>
                                 <span className='text-gray-500 text-sm'>{exp.period}</span>
                              </div>
                              <p className='text-gray-700 mb-4'>{exp.description}</p>
                              <div className='flex flex-wrap gap-2'>
                                 {exp.technologies.map((tech, techIndex) => (
                                    <span
                                       key={techIndex}
                                       className='px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm'
                                    >
                                       {tech}
                                    </span>
                                 ))}
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
         {/* Testimonials Section */}
         <section id='testimonials' className={`py-20 ${darkMode ? "bg-gray-800/30" : "bg-white/30"} backdrop-blur-md`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='text-center mb-16'>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Client Testimonials</h2>
                  <div className='w-20 h-1 bg-indigo-600 mx-auto'></div>
                  <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
                     What people say about working with me and my development services.
                  </p>
               </div>
               <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  breakpoints={{
                     640: {
                        slidesPerView: 1,
                     },
                     768: {
                        slidesPerView: 2,
                     },
                     1024: {
                        slidesPerView: 3,
                     },
                  }}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 5000 }}
                  className='testimonial-swiper'
               >
                  {testimonials.map(testimonial => (
                     <SwiperSlide key={testimonial.id}>
                        <div
                           className={`${
                              darkMode ? "bg-gray-800/50" : "bg-white/50"
                           } backdrop-blur-md rounded-xl p-8 h-full flex flex-col border border-white/20`}
                        >
                           <div className='mb-6'>
                              <i className='fas fa-quote-left text-4xl text-indigo-200'></i>
                           </div>
                           <p className='text-gray-700 mb-6 flex-grow'>{testimonial.quote}</p>
                           <div className='flex items-center'>
                              <img
                                 src={testimonial.avatar}
                                 alt={testimonial.name}
                                 className='w-12 h-12 rounded-full object-cover mr-4'
                              />
                              <div>
                                 <h4 className='font-bold text-gray-900'>{testimonial.name}</h4>
                                 <p className='text-indigo-600'>{testimonial.position}</p>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </section>
         {/* Contact Section */}
         <section id='contact' className={`py-20 ${darkMode ? "bg-gray-900/30" : "bg-gray-50/30"} backdrop-blur-md`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='text-center mb-16'>
                  <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Get In Touch</h2>
                  <div className='w-20 h-1 bg-indigo-600 mx-auto'></div>
                  <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
                     Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
                  </p>
               </div>
               <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
                  <div
                     className={`${
                        darkMode ? "bg-gray-800/50" : "bg-white/50"
                     } backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-8`}
                  >
                     <h3 className='text-2xl font-bold text-gray-900 mb-6'>Send Me a Message</h3>
                     <form>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
                           <div>
                              <label htmlFor='name' className='block text-gray-700 font-medium mb-2'>
                                 Name
                              </label>
                              <input
                                 type='text'
                                 id='name'
                                 className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors'
                                 placeholder='Your name'
                              />
                           </div>
                           <div>
                              <label htmlFor='email' className='block text-gray-700 font-medium mb-2'>
                                 Email
                              </label>
                              <input
                                 type='email'
                                 id='email'
                                 className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors'
                                 placeholder='Your email'
                              />
                           </div>
                        </div>
                        <div className='mb-6'>
                           <label htmlFor='subject' className='block text-gray-700 font-medium mb-2'>
                              Subject
                           </label>
                           <input
                              type='text'
                              id='subject'
                              className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors'
                              placeholder='Subject of your message'
                           />
                        </div>
                        <div className='mb-6'>
                           <label htmlFor='message' className='block text-gray-700 font-medium mb-2'>
                              Message
                           </label>
                           <textarea
                              id='message'
                              rows={5}
                              className='w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors'
                              placeholder='Your message'
                           ></textarea>
                        </div>
                        <button
                           type='submit'
                           className='w-full bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer'
                        >
                           Send Message
                        </button>
                     </form>
                  </div>
                  <div>
                     <div className='bg-white rounded-xl shadow-md p-8 mb-8'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-6'>Contact Information</h3>
                        <div className='space-y-4'>
                           <div className='flex items-start'>
                              <div className='flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center'>
                                 <i className='fas fa-envelope text-indigo-600'></i>
                              </div>
                              <div className='ml-4'>
                                 <h4 className='text-lg font-semibold text-gray-900'>Email</h4>
                                 <a
                                    href='mailto:hello@johndoe.com'
                                    className='text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer'
                                 >
                                    hello@johndoe.com
                                 </a>
                              </div>
                           </div>
                           <div className='flex items-start'>
                              <div className='flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center'>
                                 <i className='fas fa-phone-alt text-indigo-600'></i>
                              </div>
                              <div className='ml-4'>
                                 <h4 className='text-lg font-semibold text-gray-900'>Phone</h4>
                                 <a
                                    href='tel:+11234567890'
                                    className='text-indigo-600 hover:text-indigo-800 transition-colors cursor-pointer'
                                 >
                                    +1 (123) 456-7890
                                 </a>
                              </div>
                           </div>
                           <div className='flex items-start'>
                              <div className='flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center'>
                                 <i className='fas fa-map-marker-alt text-indigo-600'></i>
                              </div>
                              <div className='ml-4'>
                                 <h4 className='text-lg font-semibold text-gray-900'>Location</h4>
                                 <p className='text-gray-700'>San Francisco, California</p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div
                        className={`${
                           darkMode ? "bg-gray-800/50" : "bg-white/50"
                        } backdrop-blur-md rounded-xl shadow-lg border border-white/20 p-8`}
                     >
                        <h3 className='text-2xl font-bold text-gray-900 mb-6'>Follow Me</h3>
                        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                           <a
                              href='#'
                              className='flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer'
                           >
                              <i className='fab fa-github text-3xl text-gray-800 mb-2'></i>
                              <span className='text-gray-700 font-medium'>GitHub</span>
                           </a>
                           <a
                              href='#'
                              className='flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer'
                           >
                              <i className='fab fa-linkedin text-3xl text-blue-600 mb-2'></i>
                              <span className='text-gray-700 font-medium'>LinkedIn</span>
                           </a>
                           <a
                              href='#'
                              className='flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer'
                           >
                              <i className='fab fa-twitter text-3xl text-blue-400 mb-2'></i>
                              <span className='text-gray-700 font-medium'>Twitter</span>
                           </a>
                           <a
                              href='#'
                              className='flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer'
                           >
                              <i className='fab fa-dribbble text-3xl text-pink-500 mb-2'></i>
                              <span className='text-gray-700 font-medium'>Dribbble</span>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* Footer */}
         <footer className={`${darkMode ? "bg-gray-900/70" : "bg-gray-900/90"} backdrop-blur-md text-white py-12`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
               <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                  <div className='col-span-1 md:col-span-2'>
                     <h3 className='text-2xl font-bold mb-4'>John Doe</h3>
                     <p className='text-gray-400 mb-4 max-w-md'>
                        Creating beautiful digital experiences with clean code and creative solutions. Let's build
                        something amazing together!
                     </p>
                     <div className='flex space-x-4'>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors cursor-pointer'>
                           <i className='fab fa-github text-xl'></i>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors cursor-pointer'>
                           <i className='fab fa-linkedin text-xl'></i>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors cursor-pointer'>
                           <i className='fab fa-twitter text-xl'></i>
                        </a>
                        <a href='#' className='text-gray-400 hover:text-white transition-colors cursor-pointer'>
                           <i className='fab fa-dribbble text-xl'></i>
                        </a>
                     </div>
                  </div>
                  <div>
                     <h4 className='text-lg font-semibold mb-4'>Quick Links</h4>
                     <ul className='space-y-2'>
                        <li>
                           <a href='#home' className='text-gray-400 hover:text-white transition-colors cursor-pointer'>
                              Home
                           </a>
                        </li>
                        <li>
                           <a href='#about' className='text-gray-400 hover:text-white transition-colors cursor-pointer'>
                              About
                           </a>
                        </li>
                        <li>
                           <a
                              href='#skills'
                              className='text-gray-400 hover:text-white transition-colors cursor-pointer'
                           >
                              Skills
                           </a>
                        </li>
                        <li>
                           <a
                              href='#projects'
                              className='text-gray-400 hover:text-white transition-colors cursor-pointer'
                           >
                              Projects
                           </a>
                        </li>
                        <li>
                           <a
                              href='#contact'
                              className='text-gray-400 hover:text-white transition-colors cursor-pointer'
                           >
                              Contact
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div>
                     <h4 className='text-lg font-semibold mb-4'>Contact</h4>
                     <ul className='space-y-2'>
                        <li className='flex items-center'>
                           <i className='fas fa-envelope text-indigo-400 mr-2'></i>
                           <a
                              href='mailto:hello@johndoe.com'
                              className='text-gray-400 hover:text-white transition-colors cursor-pointer'
                           >
                              hello@johndoe.com
                           </a>
                        </li>
                        <li className='flex items-center'>
                           <i className='fas fa-phone-alt text-indigo-400 mr-2'></i>
                           <a
                              href='tel:+11234567890'
                              className='text-gray-400 hover:text-white transition-colors cursor-pointer'
                           >
                              +1 (123) 456-7890
                           </a>
                        </li>
                        <li className='flex items-center'>
                           <i className='fas fa-map-marker-alt text-indigo-400 mr-2'></i>
                           <span className='text-gray-400'>San Francisco, California</span>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
                  <p className='text-gray-400'>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
                  <div className='mt-4 md:mt-0'>
                     <a href='#' className='text-gray-400 hover:text-white mr-4 transition-colors cursor-pointer'>
                        Privacy Policy
                     </a>
                     <a href='#' className='text-gray-400 hover:text-white transition-colors cursor-pointer'>
                        Terms of Service
                     </a>
                  </div>
               </div>
            </div>
         </footer>
         {/* Scroll to Top Button */}
         <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`fixed bottom-6 right-6 w-12 h-12 ${
               darkMode ? "bg-indigo-600/80" : "bg-indigo-600/70"
            } backdrop-blur-md text-white rounded-full shadow-lg border border-white/20 flex items-center justify-center hover:bg-indigo-700/80 transition-colors cursor-pointer !rounded-button`}
         >
            <i className='fas fa-arrow-up'></i>
         </button>
      </div>
   );
};
export default App;
