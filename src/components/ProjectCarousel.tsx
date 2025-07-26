import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { ProjectCardProps } from "../types";
import { Ripple } from "./RippleButton";

interface CarouselProps {
  projects: ProjectCardProps[];
}

export const ProjectCarousel = ({ projects }: CarouselProps) => {
  const [current, setCurrent] = useState(0);
   const [visibleCount, setVisibleCount] = useState(2);

  const total = projects.length;
//   const visibleCount = 2;

  useEffect(() => {
    const checkScreenSize = () => {
      setVisibleCount(window.innerWidth < 1200 ? 1 : 2); // Tailwind md = 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const next = () => {
    setCurrent((prev) => (prev + visibleCount) % total);
  };

  const prev = () => {
    setCurrent((prev) => (prev - visibleCount + total) % total);
  };

  // Slice logic to wrap around
  const getVisibleProjects = () => {
    const start = current;
    const end = (current + visibleCount) % total;

    return start < end
      ? projects.slice(start, end)
      : [...projects.slice(start), ...projects.slice(0, end)];
  };

  return (
    <div className="relative w-full mx-auto px-9">
      {/* Carousel container */}
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            className={`grid md:grid-cols-${visibleCount} gap-6`}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.4 }}
          >
            {getVisibleProjects().map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute top-1/2 -left-6 translate-x-1/2 -translate-y-1/2
    bg-white/90 dark:bg-gray-800/90 w-12 h-12 flex items-center justify-center 
    rounded-full shadow-md hover:scale-105 active:scale-95 ring-2 ring-indigo-100 dark:ring-gray-600
    transition-all"
      >
        <Ripple />
        <ChevronLeft size={26} className="text-indigo-600 dark:text-gray-300" />
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 -right-6 -translate-x-1/2 -translate-y-1/2
    bg-white/90 dark:bg-gray-800/90 w-12 h-12 flex items-center justify-center 
    rounded-full shadow-md hover:scale-105 active:scale-95 ring-2 ring-indigo-100 dark:ring-gray-600
    transition-all"
      >
        <Ripple />
        <ChevronRight
          size={26}
          className="text-indigo-600 dark:text-gray-300"
        />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: Math.ceil(total / visibleCount) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => setCurrent((index * visibleCount) % total)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === Math.floor(current / visibleCount)
                  ? "bg-indigo-600 scale-110"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};
