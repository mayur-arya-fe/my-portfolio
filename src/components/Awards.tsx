import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Achievement } from "./Achivement";
import { achievements } from "../userData";
import { Carousel } from "./Carousel";

export const Awards = () => {
  const { awards } = achievements;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-6">
        <BadgeCheck className="w-8 h-8 text-violet-600 dark:text-violet-400" />
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
          Awards
        </h2>
      </div>
      <Carousel count={3} tabletCount={2}>
        {awards.map((item, idx) => (
          <Achievement key={idx} idx={idx} item={item} />
        ))}
      </Carousel>
    </motion.section>
  );
};
