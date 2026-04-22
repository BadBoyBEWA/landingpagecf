export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-200/10 bg-neutral-50 dark:bg-neutral-950 flat no-shadows opacity-80 hover:opacity-100">
      <div className="max-w-7xl mx-auto px-12 py-20 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-lg font-black text-neutral-900 dark:text-neutral-50 font-headline uppercase">
          INNER CIRCLE
        </div>
        
        <nav className="flex flex-wrap justify-center gap-6">
          <a className="font-manrope text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-500 hover:text-amber-600 transition-colors" href="#">Legacy</a>
          <a className="font-manrope text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-500 hover:text-amber-600 transition-colors" href="#">Terms</a>
          <a className="font-manrope text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-500 hover:text-amber-600 transition-colors" href="#">Privacy</a>
          <a className="font-manrope text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-500 hover:text-amber-600 transition-colors" href="#">Support</a>
        </nav>
        
        <div className="font-manrope text-[10px] tracking-[0.2em] uppercase font-semibold text-amber-700 text-center md:text-right">
          © 2024 INNER CIRCLE BY COOPER FLAGG. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  )
}
