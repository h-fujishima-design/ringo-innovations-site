const projects = [
  {
    title: "Mood Journal",
    tag: "AI · Web App",
    desc: "An AI-powered mood journaling app that helps users track emotions, identify patterns, and gain personal insights through intelligent reflection.",
    url: "https://mood-journal-6g5buj02j-ringo-innovations.vercel.app/",
    gradient: "from-violet-500/20 to-pink-500/10",
    border: "hover:border-violet-500/40",
  },
  {
    title: "Habit Tracker",
    tag: "Productivity · Web App",
    desc: "A clean habit tracking app that helps users build consistency, visualize streaks, and stay accountable to their daily goals.",
    url: "https://habit-tracker-mocha-ten.vercel.app/",
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "hover:border-emerald-500/40",
  },
  {
    title: "Photo Pick AI",
    tag: "AI · Photo Tool",
    desc: "An AI-powered photo selection tool that automatically picks the best shots from a batch — saving time and delivering standout results.",
    url: "https://photo-pick-ai.vercel.app/",
    gradient: "from-sky-500/20 to-blue-500/10",
    border: "hover:border-sky-500/40",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-white/8">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3">
          Our Work
        </div>
        <h2 className="font-display font-extrabold text-4xl lg:text-[44px] text-white mb-4">
          Things we&apos;ve built.
        </h2>
        <p className="text-[17px] text-white/50 mb-12">
          Real projects. Real outcomes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-gradient-to-br ${p.gradient} border border-white/8 ${p.border} rounded-2xl p-8 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wider uppercase text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                  {p.tag}
                </span>
                <span className="text-white/20 group-hover:text-white/60 transition-colors text-lg">
                  ↗
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed flex-1">
                {p.desc}
              </p>
              <span className="text-sm text-violet-400 font-medium group-hover:underline">
                View Project →
              </span>
            </a>
          ))}

          {/* placeholder for upcoming projects */}
          <div className="border border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-3 text-center min-h-[220px]">
            <div className="text-3xl opacity-30">+</div>
            <p className="text-sm text-white/25">More coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}