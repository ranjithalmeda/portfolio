import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      title: "Co-Founder & Secretary",
      company: "Digital Spark Solution",
      period: "Oct 2024 - Dec 2025",
      description:
        "Co-founded Digital Spark Solution while pursuing my IT degree. Managed administrative operations, documentation, team coordination, and organizational activities.",
    },
    {
      title: "Data Entry Operator",
      company: "Private Sector",
      period: "Nov 2023 - Sep 2024",
      description:
        "Handled data management, record maintenance, and administrative tasks while developing professional workplace experience and communication skills.",
    },
  ];

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-3 text-sm text-[#4FD1C5]">experience.log</p>

      <h2 className="mb-8 text-3xl font-bold text-white">
        Experience
      </h2>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="rounded-xl border border-[#203040] bg-[#0D1B2A] p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#e8602c]">
                  {exp.title}
                </h3>

                <p className="text-gray-300">
                  {exp.company}
                </p>
              </div>

              <span className="text-sm text-[#4FD1C5]">
                {exp.period}
              </span>
            </div>

            <p className="mt-4 leading-7 text-gray-400">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;