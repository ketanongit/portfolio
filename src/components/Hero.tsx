"use client";

import { motion, Variants } from "framer-motion";
import { schema } from "@/lib/drizzle";

export default function Hero({ hero }: { hero: typeof schema.hero.$inferSelect }) {
    if (!hero) return null;

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.section
            className="relative py-20 text-center overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            {/* Gradient overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-transparent rounded-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />

            <div className="relative z-10">
                <motion.div
                    className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
                    variants={itemVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="bg-slate-900 rounded-full px-6 py-2">
                        <span className="text-sm text-gray-300">👋 Hey there </span>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4"
                    variants={itemVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {hero.name}
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-blue-300 font-medium mb-6"
                    variants={itemVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {hero.title}
                </motion.p>

                <motion.p
                    className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-8"
                    variants={itemVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {hero.bio}
                </motion.p>

                <motion.div
                    className="flex flex-wrap justify-center gap-4"
                    variants={itemVariants}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    {hero.github && (
                        <a href={hero.github} className="group flex items-center gap-2 px-6 py-3 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600 rounded-full transition-all duration-300 hover:shadow-lg">
                            <span className="text-white">GitHub</span>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    )}
                    {hero.linkedin && (
                        <a href={hero.linkedin} className="group flex items-center gap-2 px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                            <span className="text-white">LinkedIn</span>
                            <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    )}
                    {hero.email && (
                        <a href={`mailto:${hero.email}`} className="group flex items-center gap-2 px-6 py-3 bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/30 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
                            <span className="text-white">Contact</span>
                            <svg className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
}
