export default function Hero() {
  return (
    <section className="relative pt-[152px] pb-24 overflow-hidden">
      {/* background glow */}
      <div className="absolute top-[-100px] right-[-200px] w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1160px] mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/25 text-violet-400 text-xs font-medium px-4 py-1.5 rounded-full mb-7">
          ✦ AI Creative Studio · Toronto, 2026
        </div>

        <h1 className="font-display font-extrabold text-5xl sm:text-6xl lg:text-[76px] leading-[1.08] text-white mb-6 max-w-[720px]">
          We build creative work{" "}
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            powered by Ringo Innovation.
          </span>
        </h1>

        <p className="text-lg text-white/50 max-w-[520px] mb-10 leading-relaxed">
          Ringo Innovations brings fresh AI-driven thinking to brand visuals,
          content, and digital experiences — so you get output that&apos;s
          faster, smarter, and uniquely yours.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold text-[15px] shadow-[0_0_32px_rgba(139,92,246,0.4)] hover:shadow-[0_0_48px_rgba(139,92,246,0.6)] hover:-translate-y-0.5 transition-all"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="inline-flex items-center px-7 py-3.5 rounded-full border border-white/10 text-white/50 font-semibold text-[15px] hover:border-white/25 hover:text-white transition-all"
          >
            See What We Do ↓
          </a>
        </div>
      </div>
    </section>
  );
}