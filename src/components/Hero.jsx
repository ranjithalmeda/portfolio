import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
        className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <p className="mb-4 text-sm text-[#4FD1C5]">
        almeda@portfolio:~$
      </p>

      <h2 className="text-5xl font-bold tracking-tight text-[#FF7B54] md:text-7xl">
        ALMEDA
      </h2>

      <p className="mt-4 text-xl text-gray-300 md:text-2xl">
        IT Undergraduate | Full Stack Developer
      </p>

      <p className="mt-6 max-w-xl text-gray-400">
        Building practical web applications using React, Node.js and MongoDB.
        Currently seeking an internship opportunity.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="#projects"
        className="rounded-md bg-[#FF7B54] px-5 py-3 font-medium text-[#07111F] transition hover:bg-[#ff916f]"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="rounded-md border border-[#203040] px-5 py-3 font-medium text-white transition hover:border-[#FF7B54]"
      >
        Contact Me
      </a>
      </div>
      
    </motion.section>
  );
}

export default Hero;