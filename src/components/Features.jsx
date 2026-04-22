export default function Features() {
  const features = [
    {
      icon: 'key',
      title: 'Exclusive Access',
      desc: "Direct entry to Cooper's inner world, training methodologies, and private events.",
    },
    {
      icon: 'movie',
      title: 'Member Only Content',
      desc: 'Unseen footage, tactical breakdowns, and unfiltered interviews.',
    },
    {
      icon: 'groups',
      title: 'Inner Community',
      desc: 'Connect directly with a curated network of driven individuals.',
    },
    {
      icon: 'public',
      title: 'Real Impact',
      desc: 'Every membership directly funds community courts and youth programs.',
    },
  ]

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-surface-container-lowest p-8 rounded flex flex-col items-start hover:shadow-[0px_24px_48px_rgba(26,28,28,0.06)] transition-all"
            >
              <div className="w-12 h-12 rounded bg-surface-container-low flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
              </div>
              <h3 className="font-headline font-bold text-xl text-on-background mb-3 uppercase tracking-tight">
                {feature.title}
              </h3>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
