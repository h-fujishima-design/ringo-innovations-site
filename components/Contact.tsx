export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/8">
      <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
        <div>
          <div className="text-xs font-semibold tracking-widest uppercase text-violet-400 mb-3">
            Contact
          </div>
          <h2 className="font-display font-extrabold text-4xl lg:text-[44px] text-white mb-4">
            Let&apos;s start something.
          </h2>
          <p className="text-[16px] text-white/50 leading-relaxed mb-8">
            Tell me about your project and I&apos;ll get back to you within 24
            hours.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-[15px] text-white/50">
              <span>📍</span> Toronto, Canada
            </div>
            <div className="flex items-center gap-3 text-[15px] text-white/50">
              <span>📧</span>
              <a
                href="mailto:ringo144516@gmail.com"
                className="text-violet-400 hover:underline"
              >
                h-fujishima@ringo-innovations.com
              </a>
            </div>
          </div>
        </div>

        <form
          action="mailto:ringo144516@gmail.com"
          method="get"
          encType="text/plain"
          className="space-y-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-white/40 tracking-wide">
                Your name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                required
                className="bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-medium text-white/40 tracking-wide">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="jane@company.com"
                required
                className="bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-white/40 tracking-wide">
              Service Interest
            </label>
            <select
              name="service"
              className="bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3.5 text-[15px] text-white/70 focus:outline-none focus:border-violet-500/50 transition-colors"
            >
              <option value="" className="bg-[#16161f]">
                Select a service...
              </option>
              {[
                "Visual Content Creation",
                "AI Copywriting & Content",
                "AI Workflow Automation",
                "Web & Digital Presence",
                "Brand Strategy with AI",
                "Custom AI Consulting",
                "Something else",
              ].map((opt) => (
                <option key={opt} value={opt} className="bg-[#16161f]">
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-white/40 tracking-wide">
              Tell me about your project
            </label>
            <textarea
              name="body"
              rows={4}
              placeholder="What are you working on? What's the goal?"
              required
              className="bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3.5 text-[15px] text-white placeholder:text-white/20 focus:outline-none focus:border-violet-500/50 transition-colors resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold text-[15px] shadow-[0_0_32px_rgba(139,92,246,0.35)] hover:shadow-[0_0_48px_rgba(139,92,246,0.5)] hover:-translate-y-0.5 transition-all"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}