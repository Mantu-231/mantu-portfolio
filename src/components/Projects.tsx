import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "FinOps Autopilot",
    type: "Fintech · Backend · ML",
    description:
      "An agentic financial reconciliation platform that matches payments against settlements, classifies exceptions by severity, flags anomalies with a machine learning model, and routes them through an automated resolution agent.",
    stack: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "scikit-learn",
      "React",
    ],
    github: "https://github.com/Mantu-231/FinOps-Autopilot",
    image: "/projects/finops-autopilot.png",
  },
  {
    number: "02",
    title: "PayFlow — Payment Dashboard",
    type: "Full Stack · Fintech UI",
    description:
      "A payment operations dashboard for monitoring revenue, transactions, and customers — searching and filtering by status the way real fintech product dashboards do.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Mantu-231/PayFlow",
    image: "/projects/payflow.png",
  },
  {
    number: "03",
    title: "Finance Analytics System",
    type: "Backend · Data Analytics",
    description:
      "A Python-based finance platform for managing transactions and turning financial data into useful analytics.",
    stack: [
      "Python",
      "FastAPI",
      "SQLite",
      "Pandas",
      "Streamlit",
      "Pytest",
    ],
    github: "https://github.com/Mantu-231/Finance-Analytics-System",
    image: "/projects/finance-analytics.png",
  },
  {
    number: "04",
    title: "Complaint Portal System",
    type: "Full Stack · Java",
    description:
      "A Java web application for registering, tracking, and managing complaints with authentication and administrator workflows.",
    stack: ["Java", "JSP", "Servlets", "MySQL", "Tomcat"],
    github: "https://github.com/Mantu-231/ComplaintPortal",
    image: "/projects/complaint-portal.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 px-5 py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Projects
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
              A selection of software projects spanning frontend and 
              backend development, full-stack engineering, APIs, databases, 
              and data analytics.
            </p>
          </div>

          <a
            href="https://github.com/Mantu-231"
            target="_blank"
            rel="noreferrer"
            className="w-fit text-sm text-gray-500 transition hover:text-cyan-400"
          >
            View all on GitHub ↗
          </a>
        </div>

        {/* Project Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.number}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/2 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/4"
            >
              {/* Screenshot */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-white/5">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7">

                {/* Top */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-cyan-400">
                    {project.number}
                  </span>

                  <span className="text-gray-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-400">
                    ↗
                  </span>
                </div>

                <div className="mt-auto">

                  <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gray-600">
                    {project.type}
                  </p>

                  <h3 className="text-2xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-500 transition group-hover:border-white/15 group-hover:text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="mt-8 flex items-center text-sm font-medium text-cyan-400">
                    View project
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
