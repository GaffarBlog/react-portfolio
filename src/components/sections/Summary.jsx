import Clients from "../../assets/icons/clients.svg";
import Clock from "../../assets/icons/clock.svg";
import Experience from "../../assets/icons/experience.svg";
import Projects from "../../assets/icons/projects.svg";
export default function Summary() {
    return (
        <section className="glass-md max-w-7xl mx-auto min-h-[15vh] flex justify-between items-center flex-wrap md:flex-nowrap rounded-md">
            <div className="w-full h-[15vh] flex md:justify-center items-center border-b border-b-white md:border-b-0 md:border-r md:border-r-white  p-5 md:p-0">
                <div className="glass-sm p-2 rounded-sm mr-3">
                    <img src={Experience} className="w-10" alt="" />
                </div>
                <h2 className="text-2xl font-medium text-text dark:text-gray-300">3+ Years Experience</h2>
            </div>
            <div className="w-full h-[15vh] flex md:justify-center items-center border-b border-b-white md:border-b-0 md:border-r md:border-r-white  p-5 md:p-0">
                <div className="glass-sm p-2 rounded-sm mr-3">
                    <img src={Projects} className="w-10" alt="" />
                </div>
                <h2 className="text-2xl font-medium text-text dark:text-gray-300">10+ Project</h2>
            </div>
            <div className="w-full h-[15vh] flex md:justify-center items-center border-b border-b-white md:border-b-0 md:border-r md:border-r-white  p-5 md:p-0">
                <div className="glass-sm p-2 rounded-sm mr-3">
                    <img src={Clients} className="w-10" alt="" />
                </div>
                <h2 className="text-2xl font-medium text-text dark:text-gray-300">15+ Happy Client</h2>
            </div>
            <div className="w-full h-[15vh] flex md:justify-center items-center p-5 md:p-0">
                <div className="glass-sm p-2 rounded-sm mr-3">
                    <img src={Clock} className="w-10" alt="" />
                </div>
                <h2 className="text-2xl font-medium text-text dark:text-gray-300">8000+ Hours Code</h2>
            </div>
        </section>
    );
}
