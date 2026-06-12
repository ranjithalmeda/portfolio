import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";


function App() {
  return (
    <main className="min-h-screen bg-[#07111F] text-white">

      <Navbar />                                      
      <Hero />
      <About />
      <Skills />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-8 text-3xl font-bold">Projects</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Viremo"
            description="Movie and Books Tracking System"
            tech="React, Node.js, MongoDB"
            demoLink="https://viremo-six.vercel.app/"
            githubLink="https://github.com/ranjithalmeda/viremo"

          />

          <ProjectCard
            title="GoSync"
            description="Bus Ticket Booking System"
            tech="MongoDB • Express • React • Node.js"
            demoLink="https://github.com/ranjithalmeda/GoSync"
            githubLink="https://github.com/ranjithalmeda/GoSync"
          />


          <ProjectCard
            title="UniWave"
            description="Student Academic Ecosystem"
            tech="MongoDB • Express • React • Node.js • TypeScript"
            demoLink="https://github.com/ranjithalmeda/GoSync"
            githubLink="https://github.com/ranjithalmeda/GoSync"
          />

          <ProjectCard
            title="Smart Campus "
            description="Student Academic Ecosystem"
            tech="MongoDB • Express • React • Node.js • TypeScript"
            demoLink="https://github.com/ranjithalmeda/GoSync"
            githubLink="https://github.com/ranjithalmeda/GoSync"
          />

        </div>
      </section>

      
      <Contacts />
      <Footer />
    

    </main>
  );
}

export default App;