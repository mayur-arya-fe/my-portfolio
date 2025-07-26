import { Briefcase } from "lucide-react";
import { workExperience } from "../userData";

export const WorkExperience = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <Briefcase className="w-8 h-8 text-violet-600 dark:text-violet-400" />
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">
          Work Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {workExperience.map((exp, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg dark:shadow-gray-900 flex flex-col h-full"
          >
            <div className="flex justify-between flex-wrap mb-1">
              <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
                {exp.title} - {exp.company}
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                {exp.meta}
              </span>
            </div>
            <ul className="list-disc list-outside pl-6 text-gray-700 dark:text-gray-300 mt-3 space-y-2 leading-relaxed">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
