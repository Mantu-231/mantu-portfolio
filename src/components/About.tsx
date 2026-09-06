export default function About() {
  return (
    <section id="about" className="border-t border-white/10 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            About Me
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Engineering with purpose.
          </h2>
        </div>

        {/* Content */}
        <div className="mt-12 max-w-3xl">
          <p className="text-xl leading-9 text-gray-300 sm:text-2xl">
            I&apos;m a Computer Science Engineering student at GITAM
            University, Class of 2027, and I build software end-to-end —
            backend, frontend, and everything that connects them.
          </p>

          <p className="mt-7 leading-8 text-gray-500">
            Most of what I&apos;ve built lately revolves around payments
            and financial systems — reconciliation pipelines, dashboards,
            anomaly detection — using Python, Java, SQL, React, and
            Next.js. I like this space because the problems are concrete:
            the numbers have to match, the data has to be trustworthy,
            and the interface has to make sense to whoever&apos;s using
            it.
          </p>

          <p className="mt-5 leading-8 text-gray-500">
            I&apos;m now looking for my first full-time role as a Software Engineer or
            Analyst, ideally somewhere I can contribute to meaningful problems and grow
            as an engineer. Alongside that, I&apos;m exploring AI/ML and agentic systems,
            with a growing interest in intelligent software that can reason over data and
            solve real-world problems.
          </p>

          {/* Focus Areas */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/2 p-5 transition hover:border-cyan-400/20">
              <p className="text-xs uppercase tracking-widest text-cyan-400">
                01
              </p>

              <h3 className="mt-4 font-semibold text-white">
                Fintech &amp; Backend Systems
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Designing APIs and backend architecture for payments,
                reconciliation, and financial data.
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
                Turning raw data into decisions through analytics,
                machine learning, and intelligent automation.
              </p>
            </div>
          </div>

          {/* Principles */}
          <div className="mt-10 border-l border-cyan-400/30 pl-5">
            <p className="text-sm leading-7 text-gray-500">
              I care about clean architecture, thinking through a
              problem before I write code, and building things that
              are actually useful to the person on the other end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}