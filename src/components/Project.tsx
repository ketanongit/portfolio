"use client";

import { motion, Variants } from "framer-motion";
import { schema } from "@/lib/drizzle";

export default function Projects({ items }: { items: typeof schema.projects.$inferSelect[] }) {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.section
            className="py-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.div className="text-center mb-12" variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
                <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((proj, index) => (
                    <motion.div
                        key={proj.id}
                        className="group relative"
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{
                            y: -5,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl blur-xl group-hover:blur-lg transition-all duration-500" />

                        <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                            {/* Project header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                {proj.link && (
                                    <a href={proj.link} className="text-gray-400 hover:text-white transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                                {proj.name}
                            </h3>

                            <p className="text-gray-300 mb-4 leading-relaxed">{proj.description}</p>

                            {proj.techStack && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {proj.techStack.split(',').map((tech, techIndex) => (
                                        <span key={techIndex} className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600">
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {proj.link && (
                                <a href={proj.link} className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors group/link">
                                    View Project
                                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
