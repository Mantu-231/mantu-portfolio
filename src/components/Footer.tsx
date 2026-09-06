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

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <p className="font-semibold text-white">
            Mantu<span className="text-cyan-400">.</span>
          </p>

          <p className="mt-1 text-xs text-gray-600">
            Software Engineer · Full Stack · Backend · AI/ML · Agentic AI
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-gray-600 transition hover:text-cyan-400"
            >
              {social.label}
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-700">
          © {new Date().getFullYear()} Mantu Kumar
        </p>
      </div>
    </footer>
  );
}
