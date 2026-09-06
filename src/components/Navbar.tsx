"use client";

import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "ProblemSolving", href: "#problem-solving" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/75 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">

        {/* Logo */}
        <a
          href="#"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-sm font-bold text-black transition duration-300 group-hover:rotate-3 group-hover:bg-cyan-300">
            M
          </span>

          <span className="text-lg font-semibold tracking-tight text-white">
            Mantu Kumar<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden shrink-0 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 lg:block"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-400 lg:hidden"
        >
          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`h-px w-full bg-current transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`mx-auto max-w-6xl overflow-hidden transition-all duration-300 lg:hidden ${
          open
            ? "mt-2 max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-white/10 bg-black/95 p-3 shadow-2xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3.5 text-sm text-gray-400 transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-cyan-400 px-4 py-3.5 text-center text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </header>
  );
}
