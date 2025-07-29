import { Project } from "../types";
import { Carousel } from "./Carousel";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
interface ProjectCarousel {
  projects: Project[];
}

export const ProjectCarousel = ({ projects }: ProjectCarousel) => {
  return (
    <motion.section className="mb-16">
      <Carousel count={2} tabletCount={1} tabletBreakpoint={1023}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Carousel>
    </motion.section>
  );
};
