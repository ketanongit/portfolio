"use client";

import { motion, Variants } from "framer-motion";

interface EducationItem {
    id: number;
    institution: string;
    degree: string;
    startDate: string | null;
    endDate: string | null;
    location: string | null;
}

export default function Education({ items }: { items: EducationItem[] }) {
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
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    };

    return (
        <motion.section
            id="education"
            className="py-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.h2
                className="text-2xl font-bold mb-6 text-white"
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                Education
            </motion.h2>
            <div className="space-y-6">
                {items.map((edu) => (
                    <motion.div
                        key={edu.id}
                        className="bg-slate-800 shadow-sm rounded-lg p-5 border border-slate-700 hover:shadow-md transition"
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        whileHover={{
                            x: 5,
                            transition: { duration: 0.2 }
                        }}
                    >
                        <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                        <p className="text-gray-300">{edu.institution}</p>
                        <p className="text-sm text-gray-400 mt-1">{edu.startDate} - {edu.endDate} | {edu.location}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
