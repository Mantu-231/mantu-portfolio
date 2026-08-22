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

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-150 w-150 -translate-x-1/2 rounded-full bg-cyan-500/8 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-size-[70px_70px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-5xl">

          {/* Availability */}
          <div className="animate-fade-up mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Open to Software Engineering &amp; Analyst Opportunities
          </div>

          {/* Role */}
          <p className="animate-fade-up animate-delay-1 mb-5 text-sm font-medium uppercase tracking-[0.28em] text-gray-500">
            Full Stack Developer · Backend · AI/ML · Agentic AI
          </p>

          {/* Main Heading */}
          <h1 className="animate-fade-up animate-delay-1 text-5xl font-bold leading-[1.03] tracking-[-0.04em] text-white sm:text-7xl lg:text-8xl">
            Building software
            <br />
            <span className="bg-linear-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
              that solves real problems.
            </span>
          </h1>

          {/* Description */}
          <p className="animate-fade-up animate-delay-2 mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            I&apos;m{" "}
            <span className="font-medium text-white">Mantu Kumar</span>, a
            Computer Science Engineering student at GITAM University building
            full-stack applications, backend systems, APIs, and data-driven
            software.
          </p>

          <p className="animate-fade-up animate-delay-2 mt-4 max-w-3xl text-base leading-8 text-gray-500 sm:text-lg">
            I&apos;m also exploring AI/ML and agentic systems to build
            intelligent software that can automate workflows and solve
            practical real-world problems.
          </p>

          {/* CTA */}
          <div className="animate-fade-up animate-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Explore My Work
              <span className="ml-2">↗</span>
            </a>

            <a
              href="/Mantu-Kumar-Resume.pdf"
              download
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/5"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="animate-fade-up animate-delay-4 mt-12 flex flex-wrap items-center gap-5">
            <span className="text-xs uppercase tracking-widest text-gray-600">
              Connect
            </span>

            <div className="h-px w-10 bg-white/10" />

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-gray-500 transition hover:text-cyan-400"
              >
                {social.label}
                <span className="ml-1">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="animate-fade-up animate-delay-4 mt-20 grid max-w-3xl grid-cols-2 border-y border-white/10 sm:grid-cols-4">
          <Stat value="2027" label="Graduation" />
          <Stat value="2" label="Featured Projects" />
          <Stat value="Python" label="Primary Language" />
          <Stat value="DSA" label="Problem Solving" />
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="border-white/10 px-4 py-6 sm:border-r last:border-r-0">
      <p className="text-xl font-semibold text-white">{value}</p>

      <p className="mt-1 text-xs text-gray-600">
        {label}
      </p>
    </div>
  );
}
