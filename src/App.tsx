import React from 'react';
import {  Linkedin, Mail, MapPin, Phone, Code, PenTool as Tool, Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skillItem = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 }
  };

  const publicisProjects = [
    {
      title: "Franklin Templeton - Portfolio Analysis Tool",
      date: "Feb 2025 - Present",
      description: "Developed key UI features enabling advisors to compare 40,000+ funds, build portfolios, and generate scenario-based reports. Empowered real-time market tracking and in-depth portfolio analysis.",
      tech: ["ReactJS", "Next JS", "React Storybook", "Redux", "AG Grid", "SASS", "Bootstrap"],
      challenges: [
        "Handling large-scale financial datasets with real-time performance requirements",
        "Aligning frontend architecture across multiple stakeholder groups",
        "Maintaining high test coverage while enabling rapid feature delivery",
        "Designing scalable UI components for complex reporting and analysis workflows",
        "Making scalable SSR and BFF decisions with Next.js"
      ],
      impact: [
        "Reduced dashboard load time by 40% through frontend and BFF optimizations",
        "Improved frontend code quality and reduced bugs by 60% via testing and code reviews",
        "Accelerated development with 30+ reusable components built in Storybook",
        "Mentored junior engineers, improving team efficiency and delivery consistency",
        "Enabled seamless collaboration and faster release cycles with streamlined CI/CD"
      ]
    },
    {
      title: "Reich & Tang Deposit Solutions",
      date: "May 2024 - Jan 2025",
      description: "Lead UI developer for a sophisticated financial platform automating cash sweep and lending processes. Developed modular components and implemented complex financial workflows.",
      tech: ["ReactJS", "Context API", "AG Grid", "SASS", "Bootstrap"],
      challenges: [
        "Implementing complex financial calculations and data visualization",
        "Building reusable components for diverse financial workflows",
        "Ensuring high performance with large datasets"
      ],
      impact: [
        "Streamlined lending process reducing processing time by 40%",
        "Led 10+ successful client demonstrations",
        "Improved code reusability by creating 20+ shared components"
      ]
    }
  ];

  const optimusProjects = [
    {
      title: "Aquatic Informatics",
      date: "2023 - 2024",
      description: "Developed a comprehensive water data management application handling real-time monitoring and analysis of water quality metrics.",
      tech: ["React", "TypeScript", "Redux Thunk", "Kendo UI", "SASS"],
      challenges: [
        "Managing real-time data streams from multiple sources",
        "Implementing complex data visualization components",
        "Optimizing performance for large datasets"
      ],
      impact: [
        "Reduced data processing time by 50%",
        "Improved system reliability to 99.9% uptime",
        "Implemented automated reporting saving 20 hours/week"
      ]
    },
    {
      title: "Lightspark Sustainability Platform",
      date: "2022 - 2023",
      description: "Created a NEXT.JS application for sustainable home improvements, featuring digital home audits and energy efficiency recommendations.",
      tech: ["Next.js", "React", "TypeScript", "Mapbox", "Material UI"],
      challenges: [
        "Implementing complex mapping functionality",
        "Building responsive design for multiple devices",
        "Integrating multiple third-party APIs"
      ],
      impact: [
        "Platform helped reduce energy costs by 30% for users",
        "Increased user engagement by 45%",
        "Streamlined audit process from 2 hours to 30 minutes"
      ]
    },
    {
      title: "Azure Cost Analyzer",
      date: "2021 - 2022",
      description: "Developed a React application for analyzing Azure service costs, featuring interactive data visualization and cost optimization recommendations.",
      tech: ["ReactJS", "Plotly", "JavaScript", "CSS", "Bootstrap"],
      challenges: [
        "Processing and visualizing large datasets",
        "Creating intuitive data exploration interface",
        "Implementing complex filtering and aggregation"
      ],
      impact: [
        "Helped identify 25% cost savings opportunities",
        "Reduced analysis time from days to hours",
        "Automated report generation saving 10 hours/week"
      ]
    }
  ];

  const ProjectCard = ({ title, date, description, tech, challenges, impact }) => (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900 hover:shadow-xl hover:shadow-indigo-200 dark:hover:shadow-gray-800 transition-all duration-300 mb-8"
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">{title}</h3>
        <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-1 rounded-full">{date}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-medium text-violet-600 dark:text-violet-400 mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-violet-50 dark:bg-violet-900 text-violet-600 dark:text-violet-300 rounded-full text-sm">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-violet-600 dark:text-violet-400 mb-2">Key Challenges</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          {challenges.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-medium text-violet-600 dark:text-violet-400 mb-2">Impact & Results</h4>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          {impact.map((i, index) => (
            <li key={index}>{i}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ThemeToggle />
      
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
            <motion.div variants={fadeIn} className="flex items-center gap-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <MapPin size={16} />
              <span>Gwalior, India</span>
            </motion.div>
            <motion.div variants={fadeIn} className="flex items-center gap-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Phone size={16} />
              <span>+91-9755466123</span>
            </motion.div>
            <motion.div variants={fadeIn} className="flex items-center gap-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Mail size={16} />
              <span>mayurarya.career@gmail.com</span>
            </motion.div>
            <motion.div variants={fadeIn} className="flex items-center gap-2 bg-white/10 dark:bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
              <Linkedin size={16} />
              <a href="https://www.linkedin.com/in/mayur-arya-046491122/" className="hover:underline">LinkedIn Profile</a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.header>

      <main className="container mx-auto px-6 py-16">
        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Code className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">Profile</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg shadow-indigo-100 dark:shadow-gray-900">
            Senior Frontend Developer with 6+ years of experience specializing in ReactJS, NextJS and modern UI technologies. 
            Dynamic professional with a passion for web design and problem-solving.
          </p>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Briefcase className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
              Project Portfolio
            </h2>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              Publicis Sapient
            </h3>
            {publicisProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              Optimus Information Inc.
            </h3>
            {optimusProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <Tool className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">Technical Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold mb-4 text-lg text-indigo-600 dark:text-indigo-400">Frontend & Languages</h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {['JavaScript', 'TypeScript', 'React.JS', 'Next.JS', 'Redux', 'HTML5', 'CSS3'].map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillItem}
                    className="px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white dark:from-violet-600 dark:to-indigo-600 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold mb-4 text-lg text-indigo-600 dark:text-indigo-400">Tools & Platforms</h3>
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {['Git', 'Azure', 'Jira', 'Figma', 'VS Code', 'Jest'].map((tool) => (
                  <motion.span
                    key={tool}
                    variants={skillItem}
                    className="px-4 py-2 bg-gradient-to-r from-violet-500 to-indigo-500 text-white dark:from-violet-600 dark:to-indigo-600 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <GraduationCap className="w-8 h-8 text-violet-600 dark:text-violet-400" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">Education</h2>
          </div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg shadow-indigo-100 dark:shadow-gray-900"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">B.Tech in Computer Science Engineering</h3>
            <p className="text-violet-500 dark:text-violet-400 font-medium">Amity University Rajasthan</p>
            <p className="text-gray-500 dark:text-gray-400 mt-2">2015 - 2019</p>
          </motion.div>
        </motion.section>
      </main>

      <footer className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-900 dark:to-indigo-900 text-white py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-indigo-100">© 2025 Mayur Arya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;