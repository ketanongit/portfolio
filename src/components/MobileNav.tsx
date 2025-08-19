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

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

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
        setIsOpen(false);
    };

    return (
        <div className="lg:hidden">
            {/* Mobile Menu Button */}
            <motion.button
                className="fixed top-6 right-6 z-50 p-3 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.95 }}
            >
                <motion.div
                    animate={isOpen ? "open" : "closed"}
                    className="w-6 h-6 flex flex-col justify-center items-center"
                >
                    <motion.span
                        className="w-6 h-0.5 bg-white block"
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: 45, y: 2 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-white block mt-1"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.span
                        className="w-6 h-0.5 bg-white block mt-1"
                        variants={{
                            closed: { rotate: 0, y: 0 },
                            open: { rotate: -45, y: -2 }
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            </motion.button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            className="fixed top-20 right-6 bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 z-50"
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >

                            <ul className="space-y-2">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${activeSection === section.id
                                                    ? "bg-blue-500/20 text-blue-400"
                                                    : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                                                }`}
                                        >
                                            <div
                                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSection === section.id
                                                        ? "bg-blue-400"
                                                        : "bg-gray-500"
                                                    }`}
                                            />
                                            <span className="font-medium">{section.label}</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}