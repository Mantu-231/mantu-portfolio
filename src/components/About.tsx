export default function About() {
  return (
    <section id="about" className="border-t border-white/10 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          
          {/* Section Heading */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </p>

            <h2 className="mt-4 max-w-md text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Engineering with purpose.
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-3xl">
            <p className="text-xl leading-9 text-gray-300 sm:text-2xl">
              I&apos;m a Computer Science Engineering student at GITAM
              University with a strong interest in building practical,
              reliable, and scalable software.
            </p>

            <p className="mt-7 leading-8 text-gray-500">
              My experience spans Python, Java, SQL, backend development,
              REST APIs, databases, and full-stack web development. I enjoy
              taking a problem, understanding the underlying requirements,
              and turning it into a structured software solution.
            </p>

            <p className="mt-5 leading-8 text-gray-500">
              I&apos;m currently expanding my capabilities in AI/ML and
              agentic systems, with an interest in building intelligent
              applications that can work with data, automate workflows, and
              solve meaningful real-world problems.
            </p>

            {/* Focus Areas */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/2 p-5 transition hover:border-cyan-400/20">
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  01
                </p>

                <h3 className="mt-4 font-semibold text-white">
                  Software Engineering
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Building structured applications, APIs, backend systems,
                  and maintainable software.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/2 p-5 transition hover:border-cyan-400/20">
                <p className="text-xs uppercase tracking-widest text-cyan-400">
                  02
                </p>

                <h3 className="mt-4 font-semibold text-white">
                  Data &amp; Intelligence
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Working with databases, analytics, AI/ML concepts, and
                  intelligent software systems.
                </p>
              </div>
            </div>

            {/* Principles */}
            <div className="mt-10 border-l border-cyan-400/30 pl-5">
              <p className="text-sm leading-7 text-gray-500">
                I value clean architecture, practical problem-solving,
                continuous learning, and software that is genuinely useful
                to its users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
