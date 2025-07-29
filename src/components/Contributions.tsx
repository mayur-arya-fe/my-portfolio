import {  Users } from "lucide-react";
import { motion } from "framer-motion";
import { Achievement } from "./Achivement";
import { achievements } from "../userData";
import { Carousel } from "./Carousel";

export const Contributions = () => {
  const {  contributions } = achievements;
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-6">
         <Users className="h-5 w-5 text-indigo-500" />
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
          Contributions
        </h2>
      </div>
      <Carousel count={3} tabletCount={2}>
        {contributions.map((item, idx) => (
          <Achievement key={idx} idx={idx} item={item} />
        ))}
      </Carousel>
    </motion.section>
  );
};
