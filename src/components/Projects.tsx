import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { ProjectCarousel } from "./ProjectCarousel";
import { optimusProjects, publicisProjects } from "../userData";

export const Projects = () => {
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
          Recent Projects
        </h2>
      </div>

      <ProjectCarousel projects={[...publicisProjects, ...optimusProjects]} />
    </motion.section>
  );
};
