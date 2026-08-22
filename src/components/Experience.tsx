const experience = [
  {
    number: "01",
    role: "Full Stack Development Intern",
    company: "InlighnX Global Pvt. Ltd.",
    period: "Jun 2025 — Jul 2025",
    type: "Internship",
    description:
      "Worked on a responsive personal expense tracker while gaining practical experience in frontend development, application logic, validation, and client-side data persistence.",
    contributions: [
      "Built a responsive expense tracking interface using HTML, CSS, and JavaScript.",
      "Implemented income and expense transaction management with real-time balance calculations.",
      "Added input validation and structured application logic for reliable user interactions.",
      "Used Local Storage to persist user data across browser sessions.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Local Storage"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-5 py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Experience
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Where I&apos;ve worked.
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            Practical development experience gained through internship and
            hands-on software projects.
          </p>
        </div>

        {/* Experience Card */}
        <div className="mt-14">
          {experience.map((item) => (
            <article
              key={item.number}
              className="group rounded-3xl border border-white/10 bg-white/2 p-7 transition duration-300 hover:border-cyan-400/20 hover:bg-white/4 sm:p-9"
            >
              <div className="grid gap-10 lg:grid-cols-[100px_1fr_220px]">
                {/* Number */}
                <div>
                  <span className="font-mono text-sm text-cyan-400">
                    {item.number}
                  </span>
                </div>

                {/* Main Content */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                      {item.role}
                    </h3>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-500">
                      {item.type}
                    </span>
                  </div>

                  <p className="mt-2 text-sm font-medium text-cyan-400">
                    {item.company}
                  </p>

                  <p className="mt-6 max-w-2xl leading-7 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {item.contributions.map((contribution) => (
                      <div
                        key={contribution}
                        className="flex gap-3 text-sm leading-6 text-gray-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400/70" />
                        <span>{contribution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="lg:border-l lg:border-white/10 lg:pl-7">
                  <p className="text-xs uppercase tracking-widest text-gray-600">
                    Duration
                  </p>

                  <p className="mt-3 text-sm text-gray-400">
                    {item.period}
                  </p>

                  <p className="mt-8 text-xs uppercase tracking-widest text-gray-600">
                    Technologies
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500 transition group-hover:border-white/15 group-hover:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
