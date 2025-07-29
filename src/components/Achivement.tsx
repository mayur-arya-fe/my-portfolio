import { Award, BadgeCheck, Users, X } from "lucide-react";
import { AchievementItem } from "../types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface AchievementProps {
  item: AchievementItem;
  idx: number;
}

export const Achievement = ({ item, idx }: AchievementProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        key={idx}
        className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900 hover:shadow-xl hover:shadow-indigo-200 dark:hover:shadow-gray-800 transition-all duration-300 my-4"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center gap-2 mb-2">
          {item.type === "Award" && (
            <Award className="h-5 w-5 text-violet-500" />
          )}
          {item.type === "Certification" && (
            <BadgeCheck className="h-5 w-5 text-green-500" />
          )}
          {item.type === "Contribution" && (
            <Users className="h-5 w-5 text-indigo-500" />
          )}
          <span className="font-semibold text-lg text-indigo-700 dark:text-indigo-300">
            {item.title}
          </span>
        </div>
        <div className="text-gray-700 dark:text-gray-300">{item.issuer}</div>
        {item.description && (
          <div className="text-gray-500 dark:text-gray-400">
            {item.description}
          </div>
        )}
        <div className="text-gray-400 dark:text-gray-500 text-sm mt-1">
          {item.year}
        </div>

        {item.image && (
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition font-medium"
          >
            View Proof
          </button>
        )}
      </motion.div>
      {/* Modal / Centered Popover */}
      <AnimatePresence>
        {showModal && item.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-3xl w-full mx-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 bg-white dark:bg-gray-700 rounded-full p-1 shadow hover:scale-105 transition"
              >
                <X size={20} className="text-gray-800 dark:text-gray-100" />
              </button>
              <img
                src={item.image}
                alt={item.title}
                className="max-h-[80vh] w-full object-contain rounded"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
