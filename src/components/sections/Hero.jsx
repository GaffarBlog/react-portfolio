import JsImage from "../../assets/javascript.png";
import LaravelImage from "../../assets/laravel.png";
import PHPImage from "../../assets/php.png";
import ReactImage from "../../assets/react.png";

import { motion } from "motion/react";
import Button from "../Button";
export default function Hero() {
    return (
        <section id="home" className="relative min-h-[80vh] flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="">
                        <h1 className="text-md font-bold mb-10">
                            Hello, I'm <span className="text-primary">Abdul Gaffar</span>
                        </h1>
                        <div className="text-4xl md:text-5xl font-medium mb-6">
                            <span className="text-primary">Full-Stack Developer</span> <br />
                            Turning Ideas into Reality
                        </div>
                        <p className="text-lg md:text-md mb-8 text-slate-500 max-w-lg">From clean, easy-to-use designs to strong and reliable backends — I build complete websites that work smoothly and deliver real results.</p>
                        <div className="flex flex-wrap gap-4">
                            <Button type="outline" title="Download Resume" />
                            <Button title="My Projects" />
                        </div>
                    </div>
                    <div className="grid place-items-center">
                        <div className="grid grid-cols-2 gap-2 w-2/3">
                            <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="glass-sm">
                                <img src={ReactImage} alt="Hero" className="w-full" />
                            </motion.div>
                            <motion.div animate={{ x: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="glass-sm">
                                <img src={JsImage} alt="Hero" className="w-full" />
                            </motion.div>
                            <motion.div animate={{ x: [0, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="glass-sm p-1">
                                <img src={PHPImage} alt="Hero" className="w-full" />
                            </motion.div>
                            <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} className="glass-sm p-4">
                                <img src={LaravelImage} alt="Hero" className="w-full" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
