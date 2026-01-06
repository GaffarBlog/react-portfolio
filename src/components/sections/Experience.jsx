import React from "react";

export default function Experience() {
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
   return (
      <section id='experience' className='py-20'>
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
               <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>Work Experience</h2>
               <div className='w-20 h-1 bg-primary mx-auto'></div>
               <p className='mt-4 text-xl text-gray-600 max-w-3xl mx-auto'>
                  My professional journey through various roles and companies in the tech industry.
               </p>
            </div>
            <div className='relative'>
               {/* Timeline line */}
               <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/10'></div>
               <div className='space-y-12'>
                  {experiences.map((exp, index) => (
                     <div
                        key={exp.id}
                        className={`flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                     >
                        <div className='md:w-1/2'></div>
                        <div className='hidden md:flex items-center justify-center'>
                           <div className='w-12 h-12 rounded-full bg-primary/70 flex items-center justify-center z-10'>
                              <i className={`fas fa-${exp.logo} text-white`}></i>
                           </div>
                        </div>
                        <div className='md:w-1/2 glass-md p-6 rounded-sm shadow-md md:mt-0 mt-4 hover:shadow-lg transition-shadow'>
                           <div className='md:hidden w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 mx-auto'>
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
                                    className='px-3 py-1 bg-primary/10 text-primary font-medium rounded-sm text-xs tracking-wide'
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
   );
}
