import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Projects from "./components/sections/Projects";
import Summary from "./components/sections/Summary";
import Testimonials from "./components/sections/Testimonials";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <main className={`min-h-screen bg-body dark:bg-gray-900 transition-colors duration-300 relative`}>
            <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('../../src/assets/bg-pattern3.png')",
                    }}
                ></div>
            </div>

            <Navbar setDarkMode={setDarkMode} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <Hero />
            <Summary />
            <About />
            {/* <Skills  /> */}
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />

            <Footer />
            <ScrollToTop />
        </main>
    );
}

export default App;
