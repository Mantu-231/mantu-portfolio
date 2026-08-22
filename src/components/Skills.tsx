const skillGroups = [
  {
    number: "01",
    title: "Languages",
    description: "Programming foundations and problem solving",
    skills: ["Python", "Java", "SQL", "JavaScript", "C"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description: "Building reliable server-side applications",
    skills: ["FastAPI", "REST APIs", "Java Servlets", "JSP", "CRUD"],
  },
  {
    number: "03",
    title: "Frontend",
    description: "Creating responsive and usable interfaces",
    skills: ["React.js", "HTML", "CSS", "JavaScript", "Streamlit"],
  },
  {
    number: "04",
    title: "Data & Databases",
    description: "Working with structured data and analytics",
    skills: ["MySQL", "SQLite", "Pandas", "Data Analysis"],
  },
  {
    number: "05",
    title: "Testing & Engineering",
    description: "Improving reliability and maintainability",
    skills: ["Pytest", "API Testing", "OOP", "DSA", "DBMS"],
  },
  {
    number: "06",
    title: "Tools & Workflow",
    description: "Development tools and project workflow",
    skills: ["Git", "GitHub", "VS Code", "Apache Tomcat"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 px-5 py-28">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Technical Stack
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Skills
          </h2>

          <p className="mt-5 leading-7 text-gray-500">
            Technologies and engineering concepts I use to build,
            test, and maintain software applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="group bg-black p-7 transition duration-300 hover:bg-white/3"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-cyan-400">
                  {group.number}
                </span>

                <span className="h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-12 group-hover:bg-cyan-400/40" />
              </div>

              <h3 className="mt-7 text-xl font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500 transition group-hover:border-white/15 group-hover:text-gray-400"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Strengths */}
        <div className="mt-8 rounded-3xl border border-white/10 p-7 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-600">
                Core Strengths
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Data Structures &amp; Algorithms · Object-Oriented Programming
                · DBMS · Problem Solving · Analytical Thinking
              </p>
            </div>

            <div className="shrink-0 rounded-full border border-cyan-400/15 bg-cyan-400/5 px-4 py-2 text-xs text-cyan-300">
              Always learning
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
