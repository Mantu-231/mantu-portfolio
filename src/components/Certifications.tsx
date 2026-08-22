const certifications = [
  {
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    date: "April 2025",
  },
  {
    title: "Full Stack Development Internship",
    issuer: "InlighnX Global Pvt. Ltd.",
    date: "June 2025",
  },
  {
    title: "Summer Training",
    issuer: "Anindita Steels Limited",
    date: "June 2026",
  },
];

export default function Certifications() {
  return (
    <section className="border-t border-white/10 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Certifications
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Continuous learning.
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {certifications.map((certificate, index) => (
            <div
              key={certificate.title}
              className="rounded-3xl border border-white/10 bg-white/2 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <span className="font-mono text-xs text-cyan-400">
                0{index + 1}
              </span>

              <h3 className="mt-8 text-lg font-semibold">
                {certificate.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {certificate.issuer}
              </p>

              <p className="mt-5 text-xs uppercase tracking-widest text-gray-600">
                {certificate.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
