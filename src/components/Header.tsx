import { fadeIn, staggerContainer } from "./shared";
import { MapPin, Phone, Mail, Linkedin, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-900 dark:to-indigo-900 text-white py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] opacity-20 bg-cover bg-center" />
      <motion.div
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.h1
          className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mayur Arya
        </motion.h1>
        <motion.h2
          className="text-2xl mb-8 text-indigo-100"
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.4 }}
        >
          Senior Experience Engineer
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-6 text-sm"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <MapPin size={16} />
            <span>Pune, Maharashtra</span>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <Phone size={16} />
            <span>+91-9755466123</span>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <Mail size={16} />
            <span>mayurarya.webdev@gmail.com</span>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <Linkedin size={16} />
            <a
              href="https://www.linkedin.com/in/mayur-arya-046491122/"
              className="hover:underline"
            >
              LinkedIn Profile
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <a
              href="/exhibits/Resume.pdf"
              download
              className="flex items-center gap-2 text-white hover:underline"
            >
              <Briefcase size={16} />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.header> 
  );
};
