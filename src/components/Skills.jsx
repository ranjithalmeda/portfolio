import { motion } from "framer-motion";
function Skills() {
  return (
    <motion.section
            id="skills"
            className="mx-auto max-w-6xl px-6 py-20"  
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
viewport={{ once: true }}>
      <p className="mb-3 text-sm text-[#4FD1C5]">skills.json</p>

      <h2 className="mb-8 text-3xl font-bold text-white">
        Technical Skills
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-[#203040] bg-[#0D1B2A] p-6">
          <h3 className="mb-4 text-xl font-bold text-[#FF7B54]">
            Frontend
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>React</li>
            <li>JavaScript</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[#203040] bg-[#0D1B2A] p-6">
          <h3 className="mb-4 text-xl font-bold text-[#FF7B54]">
            Backend
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>

        <div className="rounded-xl border border-[#203040] bg-[#0D1B2A] p-6">
          <h3 className="mb-4 text-xl font-bold text-[#FF7B54]">
            Database
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Supabase</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;