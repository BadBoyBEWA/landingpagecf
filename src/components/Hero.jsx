import { Link } from 'react-router-dom'

export default function Hero({ onGetAccess }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-surface-container-low">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Cooper Flagg background" 
          className="w-full h-full object-cover object-center opacity-40 mix-blend-multiply" 
          src="/cooperprofile.jpg"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
        <p className="font-label text-sm md:text-base font-bold tracking-[0.2em] uppercase text-primary mb-6">
          INNER CIRCLE
        </p>
        <h1 className="font-headline text-5xl md:text-7xl lg:text-9xl font-black tracking-[-0.04em] text-on-background leading-[0.9] mb-8 uppercase max-w-5xl">
          EARN YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">
            PLACE
          </span>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button 
            onClick={onGetAccess}
            className="inline-flex items-center justify-center px-10 py-4 font-headline font-bold text-sm md:text-base tracking-widest text-on-primary bg-gradient-to-tr from-primary to-primary-container rounded shadow-[0px_24px_48px_rgba(26,28,28,0.06)] hover:brightness-110 transition-all uppercase cursor-pointer"
          >
            GET ACCESS
          </button>
          <Link to="/about" className="inline-flex items-center justify-center px-10 py-4 font-headline font-bold text-sm md:text-base tracking-widest text-primary border border-outline-variant/15 rounded hover:bg-surface-container-high transition-all uppercase gap-2 cursor-pointer">
            <span className="material-symbols-outlined mr-2" style={{ fontVariationSettings: '"FILL" 1' }}>
              play_circle
            </span>
           ENTER PROFILE
          </Link>
        </div>
      </div>
    </section>
  )
}
