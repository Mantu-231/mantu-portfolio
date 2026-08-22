const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Mantu-231",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mantu-kumar-28311a308",
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/GV2023006731/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 px-5 py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          {/* Main CTA */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Get In Touch
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Let&apos;s build something useful.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
              Open to software engineering opportunities, technology roles,
              analyst opportunities, interesting projects, and meaningful
              collaborations.
            </p>

            <a
              href="mailto:mantukumar787084@gmail.com"
              className="mt-9 inline-flex items-center rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Email Me
              <span className="ml-2">↗</span>
            </a>
          </div>

          {/* Contact Details */}
          <div className="lg:pb-1">
            <p className="text-xs uppercase tracking-widest text-gray-600">
              Connect
            </p>

            <div className="mt-5 space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4 text-sm text-gray-400 transition hover:border-cyan-400/25 hover:bg-white/4 hover:text-white"
                >
                  <span>{social.label}</span>
                  <span className="text-gray-600 transition group-hover:text-cyan-400">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <a
              href="mailto:mantukumar787084@gmail.com"
              className="mt-4 block rounded-2xl border border-white/10 px-5 py-4 text-sm text-gray-500 transition hover:border-cyan-400/25 hover:text-cyan-400"
            >
              mantukumar787084@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
