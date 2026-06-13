import { useEffect, useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-gray-200 bg-white/90 backdrop-blur dark:border-[#203040] dark:bg-[#07111F]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-widest text-[#FF7B54]">
          ALMEDA
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-700 dark:text-gray-300 md:flex">
          <a href="#about" className="transition hover:text-[#FF7B54]">About</a>
          <a href="#skills" className="transition hover:text-[#FF7B54]">Skills</a>
          <a href="#experience" className="transition hover:text-[#FF7B54]">Experience</a>
          <a href="#projects" className="transition hover:text-[#FF7B54]">Projects</a>
          <a href="#contact" className="transition hover:text-[#FF7B54]">Contact</a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-md border border-gray-300 px-4 py-2 transition hover:border-[#FF7B54] dark:border-[#203040]"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;