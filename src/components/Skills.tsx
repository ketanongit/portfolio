"use client";

import { motion, Variants } from "framer-motion";
import { schema } from "@/lib/drizzle";

export default function Skills({ items }: { items: typeof schema.skills.$inferSelect[] }) {
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
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
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
      <motion.div className="text-center mb-12" variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }}>
        <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I work with to bring ideas to life</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((skill, index) => (
          <motion.div
            key={skill.id}
            className="group relative"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:blur-lg transition-all duration-300" />
            <div className="relative border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                  {skill.category.charAt(0)}
                </div>
                <h3 className="font-semibold text-white text-lg">{skill.category}</h3>
              </div>

              <div className="space-y-2">
                {skill.items.split(',').map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{item.trim()}</span>
                  </div>
                ))}
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
