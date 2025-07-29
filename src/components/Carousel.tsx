import { useEffect, useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Ripple } from "./RippleButton";

interface CarouselProps {
  children: ReactNode[];
  count?: number;
  mobileCount?: number;
  tabletCount?: number;
  tabletBreakpoint?: number;
}

export const Carousel = ({ children, count, tabletCount }: CarouselProps) => {
  const total = children.length;
  const countDefault = count || 2;
  const tabletCountDefault = tabletCount || 2;
  const tabletBreakpoint = tabletCount || 2;
  const tabletBreakpointDefault = tabletBreakpoint || 768;
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(countDefault);

  useEffect(() => {
    const checkScreenSize = () => {
      setVisibleCount(
        window.innerWidth < tabletBreakpointDefault
          ? 1
          : window.innerWidth < 1200
          ? tabletCountDefault
          : countDefault
      );
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

  const getVisibleItems = () => {
    const start = current;
    const end = (current + visibleCount) % total;

    return start < end
      ? children.slice(start, end)
      : [...children.slice(start), ...children.slice(0, end)];
  };

  return (
    <>
      <div className="relative w-full mx-auto md:px-9">
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
              {getVisibleItems()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrows */}
        <button
  disabled={total === visibleCount}
  onClick={prev}
  className={`absolute top-1/2 -left-10 md:-left-6 translate-x-1/2 -translate-y-1/2
  w-12 h-12 flex items-center justify-center 
  rounded-full shadow-md transition-all
  ring-2 ${
    total === visibleCount
      ? "bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-50 ring-gray-300 dark:ring-gray-700"
      : "bg-white/90 dark:bg-gray-800/90 hover:scale-105 active:scale-95 ring-indigo-100 dark:ring-gray-600"
  }`}
>
  <Ripple />
  <ChevronLeft
    size={26}
    className="text-indigo-600 dark:text-gray-300"
  />
</button>

<button
  disabled={total === visibleCount}
  onClick={next}
  className={`absolute top-1/2 -right-10 md:-right-6 -translate-x-1/2 -translate-y-1/2
  w-12 h-12 flex items-center justify-center 
  rounded-full shadow-md transition-all
  ring-2 ${
    total === visibleCount
      ? "bg-gray-200 dark:bg-gray-700 cursor-not-allowed opacity-50 ring-gray-300 dark:ring-gray-700"
      : "bg-white/90 dark:bg-gray-800/90 hover:scale-105 active:scale-95 ring-indigo-100 dark:ring-gray-600"
  }`}
>
  <Ripple />
  <ChevronRight
    size={26}
    className="text-indigo-600 dark:text-gray-300"
  />
</button>

        {/* Dots */}
      </div>
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
    </>
  );
};
