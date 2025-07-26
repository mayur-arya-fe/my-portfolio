import { ProjectCardProps } from "../types";
import { motion } from "framer-motion";

export const ProjectCard = ({
  title,
  date,
  description,
  tech,
  challenges,
  impact,
}: ProjectCardProps) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900 hover:shadow-xl hover:shadow-indigo-200 dark:hover:shadow-gray-800 transition-all duration-300 mb-8"
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
        {title}
      </h3>
      <span className="inline-block whitespace-nowrap text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2.5 py-0.5 rounded-md">
        {date}
      </span>
    </div>
    <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

    <div className="mb-4">
      <h4 className="font-medium text-violet-600 dark:text-violet-400 mb-2">
        Technologies
      </h4>
      <div className="flex flex-wrap gap-2">
        {tech.map((t: string, i: number) => (
          <span
            key={i}
            className="px-3 py-1 bg-violet-50 dark:bg-violet-900 text-violet-600 dark:text-violet-300 rounded-full text-sm"
          >
            {t}
          </span>
        ))}
      </div>
    </div>

    <div className="mb-4">
      <h4 className="font-medium text-violet-600 dark:text-violet-400 mb-2">
        Key Challenges
      </h4>
      <ul className="list-disc list-outside pl-6 text-gray-700 dark:text-gray-300 mt-3 space-y-2 leading-relaxed">
        {challenges.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
    </div>

    <div>
      <h4 className="font-medium text-violet-600 dark:text-violet-400 mb-2">
        Impact & Results
      </h4>
      <ul className="list-disc list-outside pl-6 text-gray-700 dark:text-gray-300 mt-3 space-y-2 leading-relaxed">
        {impact.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>
    </div>
  </motion.div>
);
