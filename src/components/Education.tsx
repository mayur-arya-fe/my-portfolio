import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-6">
        <GraduationCap className="w-8 h-8 text-violet-600 dark:text-violet-400" />
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
          Education
        </h2>
      </div>

      <motion.div
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
          B.Tech in Computer Science Engineering
        </h3>
        <p className="text-violet-500 dark:text-violet-400 font-medium">
          Amity University Rajasthan
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">2015 - 2019</p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">7.8 CGPA</p>
      </motion.div>
    </motion.section>
  );
};
