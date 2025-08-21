"use client";

import { motion, Variants } from "framer-motion";
import { schema } from "@/lib/drizzle";

export default function Experience({ items }: { items: typeof schema.experience.$inferSelect[] }) {
  const sortedItems = [...items].sort((a, b) => {
    const getDate = (dateString: string) => {
      if (dateString.toLowerCase() === 'present') {
        return new Date();
      }
      return new Date(dateString);
    };

    const dateA = getDate(a.endDate ?? "");
    const dateB = getDate(b.endDate ?? "");

    if (dateB.getTime() !== dateA.getTime()) {
      return dateB.getTime() - dateA.getTime();
    }

    // If end dates are the same, sort by start date
    const startDateA = new Date(a.startDate ?? "");
    const startDateB = new Date(b.startDate ?? "");

    return startDateB.getTime() - startDateA.getTime();
  });

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
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const timelineVariants: Variants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1
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
        <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">My journey through different roles and companies</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <motion.div
          className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 origin-top"
          variants={timelineVariants}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <div className="space-y-8">
          {sortedItems.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="relative flex items-start gap-8"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ x: 10, transition: { duration: 0.2 } }}
            >
              {/* Timeline dot */}
              <motion.div
                className="relative z-10 w-16 h-16 bg-slate-800 border-4 border-blue-500 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full" />
              </motion.div>

              {/* Content card */}
              <div className="flex-1 group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <p className="text-gray-300 font-medium">{exp.startDate} - {exp.endDate}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>

                  {/* Decorative gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
