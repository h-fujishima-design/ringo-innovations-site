const reasons = [
  {
    title: "Speed without compromise",
    desc: "AI lets us move faster than traditional agencies — without cutting corners on craft.",
  },
  {
    title: "Direct founder involvement",
    desc: "You work with me directly. No account managers, no hand-offs, no lost context.",
  },
  {
    title: "Honest pricing",
    desc: "Startup-friendly rates. Transparent scope. No surprise invoices.",
  },
  {
    title: "Flexible engagement",
    desc: "One-off projects, monthly retainers, or ongoing partnerships — whatever fits your needs.",
  },
];

const stats = [
  { num: "3×", label: "Faster delivery\nvs. traditional agencies" },
  { num: "AI", label: "First approach on\nevery project" },
  { num: "1:1", label: "Direct access to\nthe founder" },
];

export default function Why() {
  return (
    <section className="py-24 bg-white/[0.02] border-y border-white/8">
      <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3">
            Why Ringo
          </div>
          <h2 className="font-display font-extrabold text-4xl lg:text-[44px] text-white mb-8">
            Fresh thinking.
            <br />
            Real results.
          </h2>
          <ul className="space-y-7">
            {reasons.map((r) => (
              <li key={r.title} className="flex gap-4 items-start">
                <span className="shrink-0 w-7 h-7 rounded-full bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-[11px] text-violet-400 mt-0.5">
                  ✓
                </span>
                <div>
                  <strong className="block text-[15px] text-white mb-1">
                    {r.title}
                  </strong>
                  <p className="text-sm text-white/50">{r.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          {stats.map((s, i) => (
            <div
              key={s.num}
              className={`bg-white/[0.04] border border-white/8 rounded-2xl p-7 flex items-center gap-6 ${
                i === 1 ? "lg:ml-8" : ""
              }`}
            >
              <div className="font-display font-extrabold text-[42px] bg-gradient-to-br from-violet-400 to-purple-400 bg-clip-text text-transparent shrink-0">
                {s.num}
              </div>
              <div className="text-sm text-white/50 leading-relaxed whitespace-pre-line">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}