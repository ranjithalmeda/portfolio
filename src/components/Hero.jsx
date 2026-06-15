import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.section
      className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-24"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid items-center gap-12 md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div>
          <p className="mb-4 text-sm font-medium text-[#4FD1C5]">
            almeda@portfolio:~$
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-[#e8602c] md:text-7xl">
            ALMEDA
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
            IT Undergraduate | Full Stack Developer
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            I build modern web applications using React, Node.js, MongoDB and
            PostgreSQL. Passionate about creating practical software solutions
            and currently seeking an internship opportunity to grow as a
            developer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-md bg-[#e8602c] px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-md border border-[#203040] px-6 py-3 font-medium text-white transition hover:border-[#e8602c]"
            >
              Contact Me
            </a>

            <a
              href="/cv.pdf"
              download="Almeda_CV.pdf"
              className="rounded-md border border-[#4FD1C5] px-6 py-3 font-medium text-[#4FD1C5] transition hover:bg-[#4FD1C5] hover:text-[#07111F]"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT SIDE PHOTO */}
        <div className="flex justify-center md:justify-end">
            <div className="group relative">
              <img
                src="/profile.png"
                alt="Almeda"
                className="
                  h-[420px]
                  w-[320px]
                  rounded-3xl
                  object-cover
                  border
                  border-[#e8602c]
                  shadow-[0_0_35px_rgba(232,96,44,0.18)]
                  transition-all
                  duration-500

                  md:border-[#203040]
                  md:shadow-none

                  md:group-hover:-translate-y-1
                  md:group-hover:scale-[1.02]
                  md:group-hover:border-[#e8602c]
                  md:group-hover:shadow-[0_0_60px_rgba(232,96,44,0.25)]
                "
              />
            </div>
          </div>
      </div>

      {/* STATS */}
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-[#203040] bg-[#0B1628] p-5">
          <h3 className="text-sm text-gray-400">Education</h3>
          <p className="mt-2 font-semibold text-white">
            3rd Year IT Undergraduate
          </p>
        </div>

        <div className="rounded-xl border border-[#203040] bg-[#0B1628] p-5">
          <h3 className="text-sm text-gray-400">Focus</h3>
          <p className="mt-2 font-semibold text-white">
            Full Stack Development
          </p>
        </div>

        <div className="rounded-xl border border-[#203040] bg-[#0B1628] p-5">
          <h3 className="text-sm text-gray-400">Currently</h3>
              <p className="mt-2 font-semibold text-white">
                Building Full Stack Applications
              </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;