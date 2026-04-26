export default function Navbar({ onGetAccess }) {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-2xl no-line tonal-shift-boundary shadow-[0px_24px_48px_rgba(26,28,28,0.06)] scale-95 active:scale-90 duration-200">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-2xl mx-auto">
        <div className="text-xl md:text-2xl font-black tracking-tighter text-neutral-900 font-headline uppercase">JOIN FLAGG</div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a className="font-epilogue font-bold tracking-tight uppercase text-amber-700 border-b-2 border-amber-700 pb-1 hover:opacity-90 hover:scale-[1.02] transition-all" href="#"><br /></a>
          <a className="font-epilogue font-bold tracking-tight uppercase text-neutral-600 hover:text-neutral-900 transition-colors hover:opacity-90 hover:scale-[1.02] transition-all" href="#"><br /></a>
          <a className="font-epilogue font-bold tracking-tight uppercase text-neutral-600 hover:text-neutral-900 transition-colors hover:opacity-90 hover:scale-[1.02] transition-all" href="#"><br /></a>
          <a className="font-epilogue font-bold tracking-tight uppercase text-neutral-600 hover:text-neutral-900 transition-colors hover:opacity-90 hover:scale-[1.02] transition-all" href="#"><br /></a>
        </nav>

        <button 
          onClick={onGetAccess}
          className="inline-flex items-center justify-center px-5 md:px-6 py-2 md:py-2.5 font-headline font-bold text-[11px] md:text-sm tracking-widest text-on-primary bg-gradient-to-tr from-primary to-primary-container rounded shadow-[0px_24px_48px_rgba(26,28,28,0.06)] hover:brightness-110 transition-all uppercase"
        >
          JOIN NOW
        </button>
      </div>
    </header>
  )
}
