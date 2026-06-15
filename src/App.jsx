import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import TechStack from "./components/TechMarquee";
import Timeline from "./components/Timeline";
import Experience from "./components/Experience";

function App() {
  return (
      <main className="min-h-screen bg-[#07111F] text-white">
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Experience />
      <Timeline />

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-2 text-sm font-semibold text-[#4FD1C5]">
          projects.json
        </p>

        <h2 className="mb-4 text-3xl font-bold">Featured Projects</h2>

        <p className="mb-10 max-w-2xl text-sm leading-7 text-gray-400">
          A selection of academic and personal projects I have built using
          React, Node.js, MongoDB, PostgreSQL and modern web technologies.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Viremo"
            description="A movie, book and anime tracking platform with watchlists, ratings, public profiles and AI-powered recommendations."
            tech="React • Next.js • PostgreSQL • Prisma • Gemini AI"
            demoLink="https://viremo-six.vercel.app/"
            githubLink="https://github.com/ranjithalmeda/viremo"
          />

          <ProjectCard
            title="GoSync"
            description="A MERN stack online bus ticket booking system with bus management, operators, maintenance and assignment features."
            tech="MongoDB • Express • React • Node.js"
            demoLink="https://github.com/ranjithalmeda/GoSync"
            githubLink="https://github.com/ranjithalmeda/GoSync"
          />

            <ProjectCard
              title="Expense Tracker Mobile Application"
              description="An Android application that enables users to record, categorize, and monitor daily expenses with secure local data storage and an intuitive mobile experience."
              tech="Kotlin • XML • Room Database • RecyclerView • Figma"
              demoLink="#"
              githubLink="#"
            />

           <ProjectCard
            title="EMSystem"
            description="A web-based Employee Management System developed for managing employee records, authentication, and organizational operations through a responsive interface."
            tech="Java • JSP • MySQL • HTML • CSS • JavaScript"
            demoLink="https://github.com/ranjithalmeda/EMSystem"
            githubLink="https://github.com/ranjithalmeda/EMSystem"
          />

            <ProjectCard
            title="UniWave"
            description="A student academic ecosystem concept focused on improving academic communication and student services."
            tech="React • Node.js • MongoDB"
            demoLink="https://github.com/ranjithalmeda/UniWave"
            githubLink="https://github.com/ranjithalmeda/UniWave"
          />

          <ProjectCard
            title="Smart Campus"
            description="A smart campus management concept designed to support digital services for students and university staff."
            tech="React • Node.js • Express • MongoDB"
            demoLink="https://github.com/ranjithalmeda/it3030-paf-2026-smart-campus-Y3S2-WE-54"
            githubLink="https://github.com/ranjithalmeda/it3030-paf-2026-smart-campus-Y3S2-WE-54"
          />

        </div>
      </section>

      <Contacts />
      <Footer />
    </main>
  );
}

export default App;