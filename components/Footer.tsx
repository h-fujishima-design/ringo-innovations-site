export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/8">
      <div className="max-w-[1160px] mx-auto px-6 flex flex-col items-center gap-2 text-center">
        <div className="font-display font-extrabold text-xl text-white mb-1">
          Ringo<span className="text-violet-400">.</span>
        </div>
        <p className="text-sm text-white/30">
          © 2026 Ringo Innovations. Toronto, Canada.
        </p>
        <p className="text-xs text-white/20">
          AI Creative Services — Built with care.
        </p>
      </div>
    </footer>
  );
}