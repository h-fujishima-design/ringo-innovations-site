export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/8">
      <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 items-center">
        <div className="max-w-[280px] mx-auto lg:mx-0 w-full">
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet-500/20 to-purple-500/10 border border-violet-500/25 flex items-center justify-center font-display font-extrabold text-5xl text-violet-400">
            RI
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3">
            About
          </div>
          <h2 className="font-display font-extrabold text-4xl lg:text-[44px] text-white mb-6">
            Built by a founder
            <br />
            who actually builds.
          </h2>
          <p className="text-[16px] text-white/50 leading-[1.8] mb-4">
            Ringo Innovations was founded in Toronto in April 2026 with a simple
            belief: AI should make creative work more human, not less. I started
            this company fresh — no corporate background, no huge team — just a
            strong drive to help businesses unlock what AI can really do for
            their creative output.
          </p>
          <p className="text-[16px] text-white/50 leading-[1.8] mb-8">
            I&apos;m still early in the journey, which means you get someone who
            is hungry, attentive, and genuinely invested in making your project
            succeed. Every client right now matters enormously to me — and that
            shows in the work.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold text-[15px] shadow-[0_0_32px_rgba(139,92,246,0.35)] hover:shadow-[0_0_48px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 transition-all"
          >
            Work With Me
          </a>
        </div>
      </div>
    </section>
  );
}