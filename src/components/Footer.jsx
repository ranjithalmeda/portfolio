function Footer() {
  return (
    <footer className="border-t border-[#203040] bg-[#0D1B2A]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">

        <div>
          <h3 className="font-bold tracking-widest text-[#e8602c]">
            ALMEDA
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            IT Undergraduate • Full Stack Developer
          </p>
        </div>

        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/ranjithalmeda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-[#e8602c]"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/almedaranjith/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition hover:text-[#e8602c]"
          >
            LinkedIn
          </a>

          <a
            href="mailto:almedaranjith@gmail.com"
            className="text-gray-400 transition hover:text-[#e8602c]"
          >
            Email
          </a>
        </div>
      </div>

      <div className="border-t border-[#203040] py-4 text-center text-sm text-gray-500">
        © 2026 Almeda. Built with React, Tailwind CSS and ☕
      </div>
    </footer>
  );
}

export default Footer;