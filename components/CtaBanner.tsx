export default function CtaBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-500/15 to-purple-500/8 border-y border-violet-500/20 text-center">
      <div className="max-w-[1160px] mx-auto px-6">
        <h2 className="font-display font-extrabold text-4xl lg:text-[44px] text-white mb-3">
          Have a project in mind?
        </h2>
        <p className="text-[17px] text-white/50 mb-8">
          Let&apos;s talk about what AI can do for your creative work.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center px-7 py-3.5 rounded-full bg-white text-[#0a0a0f] font-semibold text-[15px] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)] transition-all"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}