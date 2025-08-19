"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
    { id: "hero", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "achievements", label: "Achievements" }
];

export default function ExpandableScrollNav() {
    const [activeSection, setActiveSection] = useState("hero");
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <motion.nav
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            onHoverStart={() => setIsExpanded(true)}
            onHoverEnd={() => setIsExpanded(false)}
        >
            <motion.div
                className="bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl overflow-hidden"
                animate={{
                    width: isExpanded ? "auto" : "60px",
                    paddingLeft: isExpanded ? "16px" : "12px",
                    paddingRight: isExpanded ? "16px" : "12px"
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                <div className="py-4">
                    {/* Brand/Logo when expanded */}


                    <ul className="space-y-3">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <button
                                    onClick={() => scrollToSection(section.id)}
                                    className={`group relative flex items-center transition-all duration-300 rounded-lg ${isExpanded ? "gap-3 px-3 py-2 w-full" : "justify-center p-2"
                                        } ${activeSection === section.id
                                            ? "bg-blue-500/20 text-blue-400"
                                            : "text-gray-400 hover:text-white hover:bg-slate-700/50"
                                        }`}
                                >
                                    <motion.div
                                        className={`rounded-full transition-all duration-300 ${activeSection === section.id
                                            ? "bg-blue-400"
                                            : "bg-gray-500 group-hover:bg-gray-300"
                                            }`}
                                        animate={{
                                            width: isExpanded ? "8px" : "12px",
                                            height: isExpanded ? "8px" : "12px",
                                            scale: activeSection === section.id ? 1.25 : 1
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.span
                                                className="text-sm font-medium whitespace-nowrap"
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: "auto" }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.2, delay: 0.1 }}
                                            >
                                                {section.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Expand hint when collapsed */}
                    <AnimatePresence>
                        {!isExpanded && (
                            <motion.div
                                className="mt-4 pt-4 border-t border-slate-700/50 text-center"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="text-xs text-gray-500">
                                    <svg className="w-4 h-4 mx-auto animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.nav>
    );
}