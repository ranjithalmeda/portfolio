function Navbar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-[#203040] bg-[#07111F]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-xl font-bold tracking-widest text-[#FF7B54]"
        >
          ALMEDA
        </a>

        <div className="hidden items-center gap-8 text-sm text-gray-300 md:flex">
          <a href="#about" className="transition hover:text-[#FF7B54]">
            About
          </a>

          <a href="#skills" className="transition hover:text-[#FF7B54]">
            Skills
          </a>

          <a href="#experience" className="transition hover:text-[#FF7B54]">
            Experience
          </a>

          <a href="#projects" className="transition hover:text-[#FF7B54]">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-[#FF7B54]">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;