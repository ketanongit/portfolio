"use client";

import { motion, Variants } from "framer-motion";
import { schema } from "@/lib/drizzle";

export default function Achievements({ items }: { items: typeof schema.achievements.$inferSelect[] }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
    }
  };

  return (
    <motion.section
      className="py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-2xl font-bold mb-6 text-white"
        variants={itemVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        Achievements & Awards
      </motion.h2>
      <ul className="space-y-4">
        {items.map((ach) => (
          <motion.li
            key={ach.id}
            className="border border-slate-700 bg-slate-800 p-4 rounded"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              borderColor: "rgb(59 130 246 / 0.5)",
              transition: { duration: 0.2 }
            }}
          >
            <h3 className="font-semibold text-white">{ach.title}</h3>
            <p className="text-sm text-gray-400">{ach.organization} — {ach.date}</p>
            <p className="text-gray-300">{ach.description}</p>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
