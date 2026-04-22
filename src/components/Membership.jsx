const contentItems = [
  {
    title: 'THE WORK',
    type: 'SERIES',
    desc: 'Inside the grueling 5AM training sessions.',
    img: '/cf1.jpg',
  },
  {
    title: 'GAMEDAY',
    type: 'VLOG',
    desc: 'The mental preparation and locker room access.',
    img: '/cf2.jpg',
  },
  {
    title: 'OFF THE COURT-FLAGG FOUNDATION',
    type: 'DOCUMENTARY',
    desc: 'Building the legacy beyond basketball.',
    img: '/cf3.jpg',
  },
]

export default function Membership({ onGetAccess }) {
  return (
    <>
      {/* Content Section */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl font-black tracking-[-0.02em] text-on-background uppercase">
                UNSEEN. UNFILTERED.<br />
                <span className="text-primary">EXCLUSIVE.</span>
              </h2>
            </div>
            <a className="inline-flex items-center font-label text-sm font-bold tracking-[0.1em] text-on-background uppercase hover:text-primary transition-colors" href="#">
              VIEW ALL CONTENT
              <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contentItems.map((item) => (
              <div key={item.title} className="group relative overflow-hidden rounded bg-surface-container-lowest h-[400px]">
                <img 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={item.img} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="inline-block px-3 py-1 bg-surface-container-lowest/20 backdrop-blur-md text-on-tertiary font-label text-xs font-bold tracking-widest uppercase rounded mb-4 w-fit">
                    {item.type}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-on-tertiary uppercase tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-surface-variant/80">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-6 bg-surface relative overflow-hidden">
        {/* Abstract shape background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-headline text-5xl md:text-6xl font-black tracking-[-0.04em] text-on-background uppercase mb-6">
              SECURE YOUR <span className="text-primary">SPOT</span>
            </h2>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
              Join the inner circle to access exclusive content, direct community engagement, and help build community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* VIP Card */}
            <div className="bg-surface-container-lowest rounded p-10 border border-outline-variant/15 flex flex-col shadow-sm h-full">
              <div className="mb-8">
                <h3 className="font-headline text-2xl font-bold text-on-background uppercase tracking-tight mb-2">VIP</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline text-4xl font-black text-on-background tracking-tighter">$14.99</span>
                  <span className="font-body text-sm text-on-surface-variant">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow font-body text-sm text-on-surface-variant">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Access to all premium video content</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Inner Circle community forum access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Early access to merch drops</span>
                </li>
              </ul>
              <button 
                onClick={onGetAccess}
                className="w-full py-4 font-headline font-bold text-sm tracking-widest text-primary border border-outline-variant/15 rounded hover:bg-surface-container-low transition-all uppercase"
              >
                SELECT VIP
              </button>
            </div>

            {/* ELITE Card */}
            <div className="relative rounded p-10 flex flex-col bg-surface-container-lowest/60 backdrop-blur-[20px] border border-primary/20 shadow-[0px_24px_48px_rgba(26,28,28,0.06)] transform md:-translate-y-4 h-full">
              {/* Gradient Top Bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-primary-container rounded-t"></div>
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline text-2xl font-bold text-primary uppercase tracking-tight">ELITE</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary font-label text-[10px] font-bold tracking-widest uppercase rounded">
                    MOST POPULAR
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline text-5xl font-black text-on-background tracking-tighter">$29.99</span>
                  <span className="font-body text-sm text-on-surface-variant">/mo</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow font-body text-sm text-on-surface-variant">
                <li className="flex items-start gap-3 font-semibold text-on-background">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                  <span>Everything in VIP, plus:</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Monthly live Q&A sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Exclusive physical member box (annual)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                  <span>Voting rights on community impact projects</span>
                </li>
              </ul>
              <button 
                onClick={onGetAccess}
                className="w-full py-4 font-headline font-bold text-sm tracking-widest text-on-primary bg-gradient-to-tr from-primary to-primary-container rounded shadow-[0px_24px_48px_rgba(26,28,28,0.06)] hover:brightness-110 transition-all uppercase"
              >
                SECURE ELITE ACCESS
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
