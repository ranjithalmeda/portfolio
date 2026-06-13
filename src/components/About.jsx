import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-6xl px-6 py-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <p className="mb-3 text-sm font-medium text-[#4FD1C5]">about.config</p>

      <h2 className="mb-8 text-3xl font-bold text-white">About Me</h2>

      <div className="rounded-xl border border-[#203040] bg-[#0D1B2A] p-6 md:p-8">
        <p className="mb-4 font-mono text-sm text-[#4FD1C5]">&gt; whoami</p>

        <p className="text-lg leading-8 text-gray-300">
          I’m <span className="text-[#FF7B54]">Almeda</span>, a 3rd Year IT
          Undergraduate at SLIIT with an interest in full-stack web development.
          I enjoy building practical applications that solve real problems and
          help me improve my skills in frontend, backend and database
          development.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-300">
          My current focus is building projects using React, Node.js, Express,
          MongoDB, PostgreSQL and modern UI tools. I am currently preparing for
          software engineering internship opportunities.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-[#203040] bg-[#07111F]/60 p-4">
            <p className="text-sm text-gray-400">Education</p>
            <p className="mt-1 font-medium text-white">
              3rd Year IT Undergraduate
            </p>
          </div>

          <div className="rounded-lg border border-[#203040] bg-[#07111F]/60 p-4">
            <p className="text-sm text-gray-400">Main Focus</p>
            <p className="mt-1 font-medium text-white">
              Full Stack Development
            </p>
          </div>

          <div className="rounded-lg border border-[#203040] bg-[#07111F]/60 p-4">
            <p className="text-sm text-gray-400">Currently</p>
            <p className="mt-1 font-medium text-white">
              Seeking Internship
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;