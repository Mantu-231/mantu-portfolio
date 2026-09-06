const profiles = [
  {
    name: "GitHub",
    description: "Code, projects, and engineering work",
    href: "https://github.com/Mantu-231",
  },
  {
    name: "LeetCode",
    description: "Data structures, algorithms, and problem solving",
    href: "https://leetcode.com/u/GV2023006731/",
  },
];

export default function ProblemSolving() {
  return (
    <section id="problem-solving" className="border-t border-white/10 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Beyond Projects
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          I keep learning by building.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {profiles.map((profile) => (
            <a
              key={profile.name}
              href={profile.href}
              target="_blank"
              rel="noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/2 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">{profile.name}</h3>

                <span className="text-gray-600 transition group-hover:text-cyan-400">
                  ↗
                </span>
              </div>

              <p className="mt-4 text-gray-500">{profile.description}</p>

              <p className="mt-8 text-sm text-cyan-400">
                Visit profile →
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
