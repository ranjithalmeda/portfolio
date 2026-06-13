import { motion } from "framer-motion";

function Timeline() {
const items = [
  {
    year: "2023",
    title: "Started IT Degree",
    desc: "Began my journey as an Information Technology undergraduate at SLIIT.",
  },
  {
    year: "Nov 2023",
    title: "Started First Professional Role",
    desc: "Started working as a Data Entry Operator and gained professional workplace experience.",
  },
  {
    year: "Oct 2024",
    title: "Co-Founded Digital Spark Solution",
    desc: "Joined as Co-Founder & Secretary while continuing my university studies.",
  },
  {
    year: "2025",
    title: "Built GoSync",
    desc: "Developed a MERN stack online bus ticket booking system as part of a team project.",
  },
  {
    year: "2026",
    title: "Built Viremo",
    desc: "Developed a movie and book tracking platform with AI-powered recommendations.",
  },
  {
    year: "Now",
    title: "Growing as a Developer",
    desc: "Working on personal projects, exploring new technologies, and strengthening my full-stack development skills alongside my university studies.",
  }
];

  return (
    <section id="timeline" className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-3 text-sm text-[#4FD1C5]">journey.log</p>

      <h2 className="mb-10 text-3xl font-bold text-white">My Journey</h2>

      <div className="relative border-l border-[#203040] pl-6">
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            className="relative mb-10 last:mb-0"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-[34px] top-1 h-4 w-4 rounded-full border-4 border-[#0a1628] bg-[#e8602c]"></span>

            <p className="text-sm font-semibold text-[#e8602c]">
              {item.year}
            </p>

            <h3 className="mt-1 text-xl font-bold text-white">
              {item.title}
            </h3>

            <p className="mt-2 max-w-2xl leading-7 text-gray-400">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;