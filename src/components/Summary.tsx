import { Code } from "lucide-react";
import { motion } from "framer-motion";

export const Summary = () => {
  return (
    <motion.section
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-4 mb-6">
        <Code className="w-8 h-8 text-violet-600 dark:text-violet-400" />
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
          Profile
        </h2>
      </div>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg shadow-indigo-100 dark:shadow-gray-900">
        Frontend Engineer with 6.5 years of experience building scalable,
        high-performance web apps using React & Next.js. Experienced in leading
        teams, enhancing performance, and delivering results that drive business
        growth. Passionate about clean architecture, modern development
        practices, and engineering excellence in product-driven environments
      </p>
    </motion.section>
  );
};
