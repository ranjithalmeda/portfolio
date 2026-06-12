import { motion } from "framer-motion";
function ProjectCard(props) {
  return (
    <motion.div
        className="rounded-xl border border-[#203040] bg-[#0D1B2A] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF7B54]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
      <h2 className="text-2xl font-bold text-[#FF7B54]">
        {props.title}
      </h2>

      <p className="mt-3 text-gray-300">
        {props.description}
      </p>

      <p className="mt-4 text-sm text-[#4FD1C5]">
        {props.tech}
      </p>

      <div className="mt-6 flex gap-3">
        <a
          href={props.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md bg-[#FF7B54] px-4 py-2 font-medium text-[#07111F]"
        >
          Live Demo
        </a>

        <a
          href={props.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-[#203040] px-4 py-2 font-medium text-white"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;