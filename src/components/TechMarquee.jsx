import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiPrisma,
  SiGithub,
  SiVercel,
  SiKotlin,
} from "react-icons/si";

function TechMarquee() {
  const techs = [
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiPrisma, name: "Prisma" },
    { icon: SiGithub, name: "GitHub" },
    { icon: SiVercel, name: "Vercel" },
    { icon: SiKotlin, name: "Kotlin" },

  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-wrap justify-center gap-8">
        {techs.map((tech) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 transition-all duration-300"
            >
              <Icon className="text-4xl text-gray-400 transition-all duration-300 group-hover:text-[#e8602c] group-hover:scale-110" />

              <span className="text-sm text-gray-400 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TechMarquee;