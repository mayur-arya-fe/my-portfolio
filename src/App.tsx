import { ThemeToggle } from "./components/ThemeToggle";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ThemeToggle />
      <Toaster richColors />
      <Header />
      <main className="container mx-auto px-6 py-16">
        <Summary />
        {/* <motion.section
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
            <div className="grid md:grid-cols-2 gap-8">
              {publicisProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              Optimus Information Inc.
            </h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCarousel projects={optimusProjects} />
              {optimusProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </motion.section> */}
        <Skills />
        <WorkExperience />
        <Projects />
        <Achievements />
        <Education />
        <ContactMe />
      </main>

      <Footer />
    </div>
  );
}

export default App;
