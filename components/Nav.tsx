"use client";

import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1160px] mx-auto px-6 flex items-center justify-between h-full">
        <a href="#" className="font-display font-extrabold text-xl text-white">
          Ringo<span className="text-violet-400">.</span>
        </a>
        <nav className="flex items-center gap-8">
          <a
            href="#services"
            className="text-sm text-white/50 hover:text-white transition-colors hidden sm:block"
          >
            Services
          </a>
          <a
            href="#work"
            className="text-sm text-white/50 hover:text-white transition-colors hidden sm:block"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-sm text-white/50 hover:text-white transition-colors hidden sm:block"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2.5 rounded-full bg-violet-500 hover:bg-violet-400 text-white transition-colors"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </header>
  );
}