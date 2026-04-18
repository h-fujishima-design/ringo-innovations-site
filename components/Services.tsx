const services = [
  {
    icon: "🎨",
    title: "Visual Content Creation",
    desc: "AI-assisted graphics, social media visuals, and brand assets — produced fast without sacrificing quality.",
  },
  {
    icon: "✍️",
    title: "AI Copywriting & Content",
    desc: "Website copy, blog posts, product descriptions, and marketing scripts crafted with AI and refined by human judgment.",
  },
  {
    icon: "🤖",
    title: "AI Workflow Automation",
    desc: "Custom AI pipelines and prompt systems that cut repetitive creative work out of your team's day.",
  },
  {
    icon: "🌐",
    title: "Web & Digital Presence",
    desc: "Landing pages, portfolios, and microsites built cleanly and quickly — designed to convert.",
  },
  {
    icon: "💡",
    title: "Brand Strategy with AI",
    desc: "From naming and positioning to tone-of-voice guides — AI-augmented thinking to sharpen your brand story.",
  },
  {
    icon: "📊",
    title: "Custom AI Consulting",
    desc: "Not sure where AI fits? We'll map the opportunities, build a plan, and help you act on it.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 border-t border-white/8 max-w-[1160px] mx-auto px-6"
    >
      <div className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3">
        What We Do
      </div>
      <h2 className="font-display font-extrabold text-4xl lg:text-[44px] text-white mb-4">
        AI-Driven Creative Services
      </h2>
      <p className="text-[17px] text-white/50 mb-12">
        Every project is custom. Here&apos;s how we typically help.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white/[0.04] border border-white/8 rounded-2xl p-8 hover:border-violet-500/35 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="text-[28px] mb-4">{s.icon}</div>
            <h3 className="text-[17px] font-semibold text-white mb-2.5">
              {s.title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}