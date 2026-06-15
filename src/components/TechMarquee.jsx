import { TbApi, TbDatabase, TbBrandCpp  } from "react-icons/tb";
import { FaJava } from "react-icons/fa6";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiPostgresql,
  SiTailwindcss,
  SiPrisma,
  SiGithub,
  SiVercel,
  SiKotlin,
  SiSupabase,
  SiExpress,
  SiFigma,
  SiXml,
  SiSpringboot,
  SiMysql,
  SiPostman,
} from "react-icons/si";

function TechMarquee() {
const techs = [
  // Frontend
  { icon: SiReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiFigma, name: "Figma" },
  { icon: SiXml, name: "XML" },

  // Programming Languages
  { icon: SiJavascript, name: "JavaScript" },
 { icon: FaJava, name: "Java" },
  { icon: TbBrandCpp, name: "C++" },
  { icon: SiKotlin, name: "Kotlin" },

  // Backend
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiSpringboot, name: "Spring Boot" },
  { icon: TbApi, name: "REST API" },

  // Databases
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiPostgresql, name: "PostgreSQL" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiSupabase, name: "Supabase" },
  { icon: TbDatabase, name: "SQL Server" },

  // Tools
  { icon: SiPrisma, name: "Prisma" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiGithub, name: "GitHub" },
  { icon: SiVercel, name: "Vercel" },
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