function Contacts() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <p className="mb-3 text-sm text-[#4FD1C5]">
        contact.json
      </p>

      <h2 className="mb-8 text-3xl font-bold text-white">
        Contact
      </h2>

      <div className="rounded-xl border border-[#203040] bg-[#0D1B2A] p-6">
        <p className="text-gray-300">
          Feel free to reach out through any of the platforms below.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=almedaranjith@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[#203040] px-4 py-2 font-medium text-white transition hover:border-[#FF7B54]"
          >
            Email
          </a>

          <a
            href="https://github.com/ranjithalmeda"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[#203040] px-4 py-2 font-medium text-white transition hover:border-[#FF7B54]"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/almedaranjith/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-[#203040] px-4 py-2 font-medium text-white transition hover:border-[#FF7B54]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacts;