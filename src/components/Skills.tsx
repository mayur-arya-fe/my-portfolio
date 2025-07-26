import { motion } from "framer-motion";
import { PenTool as Tool } from "lucide-react";
import { feLanguages, softSkills, tools } from "../userData";
import { skillItem, staggerContainer } from "./shared";
export const Skills = () => {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <Tool className="w-8 h-8 text-violet-600 dark:text-violet-400" />
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
          Skills
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-semibold mb-4 text-lg text-indigo-600 dark:text-indigo-400">
            Frontend & Languages
          </h3>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {feLanguages.map((skill: string) => (
              <motion.span
                key={skill}
                variants={skillItem}
                className="px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white dark:from-violet-600 dark:to-indigo-600 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-semibold mb-4 text-lg text-indigo-600 dark:text-indigo-400">
            Tools & Platforms
          </h3>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {tools.map((tool: string) => (
              <motion.span
                key={tool}
                variants={skillItem}
                className="px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white dark:from-violet-600 dark:to-indigo-600 rounded-full text-sm font-medium"
              >
                {tool}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-semibold mb-4 text-lg text-indigo-600 dark:text-indigo-400">
            Soft Skills
          </h3>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {softSkills.map((skill: string) => (
              <motion.span
                key={skill}
                variants={skillItem}
                className="px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white dark:from-violet-600 dark:to-indigo-600 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
