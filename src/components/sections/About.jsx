import JsIcon from "../../assets/skills/javascript.svg";
import ReactIcon from "../../assets/skills/react.svg";
import LaravelIcon from "../../assets/skills/laravel.svg";
import PHPIcon from "../../assets/skills/php.svg";
import GitIcon from "../../assets/skills/git.svg";
import GithubIcon from "../../assets/skills/github.svg";
import HtmlIcon from "../../assets/skills/html.svg";
import CssIcon from "../../assets/skills/css.svg";
import TailwindIcon from "../../assets/skills/tailwind.svg";
import BootstrapIcon from "../../assets/skills/bootstrap.svg";
import JqueryIcon from "../../assets/skills/jquery.svg";
import ReduxIcon from "../../assets/skills/Redux.svg";
export default function About() {
   const skills = [
      { name: "HTML5", icon: HtmlIcon },
      { name: "CSS3", icon: CssIcon },
      { name: "Tailwind", icon: TailwindIcon },
      { name: "Bootstrap", icon: BootstrapIcon },
      { name: "JavaScript", icon: JsIcon },
      { name: "React", icon: ReactIcon },
      { name: "Redux", icon: ReduxIcon },
      { name: "Laravel", icon: LaravelIcon },
      { name: "PHP", icon: PHPIcon },
      { name: "jQuery", icon: JqueryIcon },
      { name: "Git", icon: GitIcon },
      { name: "Github", icon: GithubIcon },
   ];
   return (
      <section id='about' className='py-20'>
         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-16'>
               <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>About Me</h2>
               <div className='w-20 h-1 bg-primary mx-auto'></div>
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
                     I'm a full-stack web developer with a passion for building modern, user-friendly websites and web
                     applications. I specialize in both frontend and backend development, creating seamless digital
                     experiences from start to finish. Whether it's designing responsive interfaces or building powerful
                     server-side functionality, I focus on clean code, performance, and scalability.
                  </p>
                  <p className='text-gray-700 mb-6'>
                     With experience in technologies like PHP, Laravel, Javascript and React. I’ve helped bring ideas to
                     life for businesses, startups, and personal projects. I’m always eager to learn, solve problems,
                     and turn complex requirements into functional, beautiful web solutions.
                  </p>
                  <h3 className='text-2xl font-bold text-gray-900 mb-4'>My Skills</h3>
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                     {skills.map((skill, index) => (
                        <div
                           key={index}
                           className={`glass-sm rounded-sm p-2 flex items-center gap-3 uppercase font-medium`}
                        >
                           <img src={skill.icon} alt='' className='w-8' />
                           <span>{skill.name}</span>
                        </div>
                     ))}
                  </div>

                  <button className='bg-primary mt-8 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors flex items-center !rounded-button whitespace-nowrap cursor-pointer'>
                     <i className='fas fa-download mr-2'></i> Download Resume
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
