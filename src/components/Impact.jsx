export default function Impact() {
  return (
    <section className="py-24 px-6 bg-on-background text-surface relative">
      <div className="max-w-4xl mx-auto text-center">
        <span 
          className="material-symbols-outlined text-5xl text-primary mb-6" 
          style={{ fontVariationSettings: '"FILL" 1' }}
        >
          handshake
        </span>
        <h2 className="font-headline text-4xl md:text-5xl font-black tracking-[-0.02em] uppercase mb-12">
          IMPACT BEYOND THE <span className="text-primary">GAME</span>
        </h2>
        
        <div className="bg-inverse-surface p-8 rounded border border-outline-variant/10 text-left">
          <div className="flex justify-between items-end mb-4">
            <div>
              <p className="font-label text-xs font-bold tracking-[0.2em] text-surface-variant/60 uppercase mb-1">
                The Flagg Foundation
              </p>
              <p className="font-headline text-xl font-bold uppercase tracking-tight text-surface">
                Community Support Initiative
              </p>
            </div>
            <div className="text-right">
              <p className="font-headline text-3xl font-black text-primary tracking-tighter">$248,750</p>
              <p className="font-body text-xs text-surface-variant/60">of $500,000 goal</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full h-2 bg-on-surface-variant rounded overflow-hidden mb-6">
            <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[50%] rounded"></div>
          </div>
          
          <p className="font-body text-sm text-surface-variant/80">
            Every membership contributes directly to this goal. 10% of all Inner Circle revenue is committed to rebuilding local basketball infrastructure.
          </p>
        </div>
      </div>
    </section>
  )
}
