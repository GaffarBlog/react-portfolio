import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
export default function ButtonTab({ setActiveFilter, activeFilter }) {
    const [hoverTab, setHoverTab] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const tabRefs = useRef({});

    useEffect(() => {
        const node = tabRefs.current["All"];
        if (node) {
            const rect = node.getBoundingClientRect();
            setActiveTab({
                x: node.offsetLeft,
                y: node.offsetTop,
                width: rect.width,
                height: rect.height,
            });
        }
    }, []);
    const handleMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        setHoverTab({ x: e.target.offsetLeft, y: e.target.offsetTop, width: rect.width, height: rect.height });
    };
    const handleMouseClick = (e) => {
        const rect = e.target.getBoundingClientRect();
        setActiveTab({ x: e.target.offsetLeft, y: e.target.offsetTop, width: rect.width, height: rect.height });
    };
    const tabs = ["All", "React", "Laravel", "Vue"];
    const animatedTab = hoverTab || (activeTab && !hoverTab ? activeTab : null);
    return (
        <>
            {animatedTab && (
                <motion.div
                    layoutId="hover"
                    className="absolute top-0 left-0 bg-primary rounded-md"
                    initial={false}
                    style={{
                        width: animatedTab.width,
                        height: animatedTab.height,
                    }}
                    animate={{
                        x: animatedTab.x,
                        y: animatedTab.y,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            )}

            {tabs.map((tab) => (
                <button
                    key={tab}
                    ref={(el) => (tabRefs.current[tab] = el)}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => setHoverTab(null)}
                    onClick={(e) => {
                        setActiveFilter(tab);
                        handleMouseClick(e);
                    }}
                    className={`px-4 py-1 rounded-full font-medium transition-colors !rounded-button whitespace-nowrap cursor-pointer hover:text-white w-[100px] z-10 ${activeFilter === tab && !hoverTab && "text-white"}`}
                >
                    {tab}
                </button>
            ))}
        </>
    );
}
