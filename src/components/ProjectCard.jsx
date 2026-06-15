import { motion } from "framer-motion";

function ProjectCard({ title, description, tech, demoLink, githubLink }) {
  return (
    <motion.div
      className="group flex h-full flex-col rounded-xl border border-[#203040] bg-[#0D1B2A] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF7B54]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
        {/*<div className="mb-5 flex h-36 items-center justify-center rounded-lg border border-[#203040] bg-[#07111F]"> 
        <p className="text-sm text-gray-500">Project Screenshot</p>
        </div> */}

      <h3 className="text-2xl font-bold text-[#FF7B54]">
        {title}
      </h3>

      <p className="mt-3 flex-1 leading-7 text-gray-300">
        {description}
      </p>

      <p className="mt-4 text-sm leading-6 text-[#4FD1C5]">
        {tech}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-[#FF7B54] px-4 py-2 font-medium text-[#07111F] transition hover:bg-[#ff916f]"
        >
          Live Demo
        </a>

        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-[#203040] px-4 py-2 font-medium text-white transition hover:border-[#FF7B54]"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;