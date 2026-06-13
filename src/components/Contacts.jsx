import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_79w5e7f",
        "template_76jcueg",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "2uoyDO8dNRslYaOV0"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
      <p className="mb-3 text-sm text-[#4FD1C5]">contact.json</p>

      <h2 className="mb-4 text-4xl font-bold text-white">Say Hello.</h2>

      <p className="mb-10 max-w-2xl text-gray-400">
        Interested in collaborating, discussing technology, or connecting with
        me? Feel free to reach out through the contact form or any of my social
        platforms.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <a
            href="mailto:almedaranjith@gmail.com"
            className="block rounded-xl border border-[#203040] bg-[#0D1B2A] p-5 transition hover:border-[#e8602c]"
          >
            <p className="text-sm text-gray-400">Email</p>
            <p className="mt-1 font-medium text-white">
              almedaranjith@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/ranjithalmeda"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-[#203040] bg-[#0D1B2A] p-5 transition hover:border-[#e8602c]"
          >
            <p className="text-sm text-gray-400">GitHub</p>
            <p className="mt-1 font-medium text-white">
              github.com/ranjithalmeda
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/almedaranjith/"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl border border-[#203040] bg-[#0D1B2A] p-5 transition hover:border-[#e8602c]"
          >
            <p className="text-sm text-gray-400">LinkedIn</p>
            <p className="mt-1 font-medium text-white">
              linkedin.com/in/almedaranjith
            </p>
          </a>
        </div>

        <div className="rounded-xl border border-[#203040] bg-[#0D1B2A] p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-[#203040] bg-[#07111F] p-3 text-white outline-none focus:border-[#e8602c]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-[#203040] bg-[#07111F] p-3 text-white outline-none focus:border-[#e8602c]"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-[#203040] bg-[#07111F] p-3 text-white outline-none focus:border-[#e8602c]"
            ></textarea>

            <button
              type="submit"
              className="rounded-lg bg-[#e8602c] px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Send Message
            </button>

            {status && (
              <p className="text-sm text-[#4FD1C5]">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;