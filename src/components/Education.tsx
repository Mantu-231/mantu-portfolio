export default function Education() {
  return (
    <section id="education" className="border-t border-white/10 px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
          Education
        </p>

        <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Academic foundation.
        </h2>

        <div className="mt-12 rounded-3xl border border-white/10 bg-white/2 p-7">
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <div>
              <p className="text-sm text-cyan-400">B.Tech in Computer Science Engineering</p>

              <h3 className="mt-2 text-2xl font-semibold text-white">
                GITAM University
              </h3>

              <p className="mt-2 text-gray-500">
                Visakhapatnam, Andhra Pradesh
              </p>
            </div>

            <div className="text-left md:text-right">
              <p className="text-sm text-gray-400">Aug 2023 — Aug 2027</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-gray-600">
                Class of 2027
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
