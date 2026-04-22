export default function Legacy({ onGetAccess }) {
  return (
    <section className="py-32 px-6 bg-surface-container-low relative overflow-hidden flex items-center justify-center min-h-[614px]">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/80 z-10"></div>
      </div>
      <div className="relative z-20 text-center max-w-3xl mx-auto flex flex-col items-center">
        <h2 className="font-headline text-6xl md:text-8xl font-black tracking-[-0.04em] text-on-background uppercase leading-[0.9] mb-10">
          THIS IS <br />
          <span className="text-primary">LEGACY</span>
        </h2>
        <button 
          onClick={onGetAccess}
          className="inline-flex items-center justify-center px-12 py-5 font-headline font-bold text-lg tracking-widest text-on-primary bg-gradient-to-tr from-primary to-primary-container rounded shadow-[0px_24px_48px_rgba(26,28,28,0.06)] hover:brightness-110 hover:scale-[1.02] transition-all uppercase"
        >
          JOIN INNER CIRCLE
        </button>
      </div>
    </section>
  )
}
