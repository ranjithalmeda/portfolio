import { motion } from "framer-motion";
function About() {
  return (
    <motion.section
              id="about"
              className="mx-auto max-w-6xl px-6 py-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}>
      <p className="mb-3 text-sm text-[#4FD1C5]">about.config</p>

      <h2 className="mb-8 text-3xl font-bold text-white">About Me</h2>

      <div className="rounded-xl border border-[#203040] bg-[#0D1B2A] p-6">
        <p className="mb-4 font-mono text-sm text-[#4FD1C5]">&gt; whoami</p>

        <p className="text-lg leading-8 text-gray-300">
          I’m <span className="text-[#FF7B54]">Almeda</span>, a 3rd Year IT
          Undergraduate at SLIIT, focused on building practical full-stack web
          applications using modern technologies.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-[#203040] p-4">
            <p className="text-sm text-gray-400">Focus</p>
            <p className="mt-1 font-medium text-white">Full Stack Development</p>
          </div>

          <div className="rounded-lg border border-[#203040] p-4">
            <p className="text-sm text-gray-400">Stack</p>
            <p className="mt-1 font-medium text-white">MERN Stack</p>
          </div>

          <div className="rounded-lg border border-[#203040] p-4">
            <p className="text-sm text-gray-400">Goal</p>
            <p className="mt-1 font-medium text-white">Software Internship</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;