import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      
      {/* Header */}
      <header className="sticky top-0 z-50 flex w-full items-center border-b border-outline-variant/15 bg-surface/80 px-6 py-4 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-5xl items-center gap-4">
          <Link
            to="/"
            className="flex items-center justify-center text-on-surface-variant transition-colors hover:text-primary cursor-pointer"
            aria-label="Go back"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Back to Home
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden bg-surface-container-lowest">
        <img
          src="/cfkicks.jpg"
          alt="Cooper Flagg"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%] opacity-60 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 lg:p-24">
          <div className="mx-auto max-w-5xl">
            <p className="font-label text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4 drop-shadow-sm">
              THE STORY SO FAR
            </p>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-[-0.02em] text-on-background leading-[0.9]">
              COOPER <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">FLAGG</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Content Body */}
      <main className="mx-auto max-w-5xl px-6 py-16 md:py-24 space-y-24">
        
        {/* Intro */}
        <section className="prose prose-lg prose-headings:font-headline prose-p:font-body max-w-none text-on-surface-variant">
          <p className="text-xl md:text-2xl font-medium leading-relaxed text-on-background">
            Here is a detailed history of Cooper Flagg, the Maine phenom who became one of the most hyped basketball prospects in a generation.
          </p>
        </section>

        {/* Quick Facts */}
        <section>
          <div className="flex items-center gap-4 mb-8 border-b border-outline-variant/20 pb-4">
            <span className="material-symbols-outlined text-primary text-3xl">info</span>
            <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background">
              Quick Facts
            </h2>
          </div>
          <div className="overflow-hidden rounded border border-outline-variant/15 bg-surface-container-lowest shadow-sm">
            <table className="w-full text-left font-body text-sm">
              <tbody className="divide-y divide-outline-variant/15">
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <th className="px-6 py-4 font-bold text-on-background uppercase tracking-widest text-[10px] w-1/3">Full Name</th>
                  <td className="px-6 py-4 text-on-surface-variant font-medium">Cooper Flagg</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <th className="px-6 py-4 font-bold text-on-background uppercase tracking-widest text-[10px]">Born</th>
                  <td className="px-6 py-4 text-on-surface-variant font-medium">December 21, 2006 in Newport, Maine</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <th className="px-6 py-4 font-bold text-on-background uppercase tracking-widest text-[10px]">Height/Weight</th>
                  <td className="px-6 py-4 text-on-surface-variant font-medium">6'9" (2.06 m) / 205 lbs (93 kg)</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <th className="px-6 py-4 font-bold text-on-background uppercase tracking-widest text-[10px]">Position</th>
                  <td className="px-6 py-4 text-on-surface-variant font-medium">Small Forward / Power Forward</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <th className="px-6 py-4 font-bold text-on-background uppercase tracking-widest text-[10px]">High School</th>
                  <td className="px-6 py-4 text-on-surface-variant font-medium">Nokomis Regional High (ME) &rarr; Montverde Academy (FL)</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <th className="px-6 py-4 font-bold text-on-background uppercase tracking-widest text-[10px]">College</th>
                  <td className="px-6 py-4 text-on-surface-variant font-medium">Duke University (2024–2025)</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <th className="px-6 py-4 font-bold text-on-background uppercase tracking-widest text-[10px]">NBA Draft</th>
                  <td className="px-6 py-4 text-on-surface-variant font-medium">2025, Round 1, Pick 1 (1st overall) by Dallas Mavericks</td>
                </tr>
                <tr className="hover:bg-surface-container-low/50 transition-colors">
                  <th className="px-6 py-4 font-bold text-on-background uppercase tracking-widest text-[10px]">Current Team</th>
                  <td className="px-6 py-4 text-on-surface-variant font-medium">Dallas Mavericks (#32)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-16">
            
            {/* Early Life */}
            <section className="space-y-6">
              <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background">
                Early Life & Basketball Roots
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed text-base">
                <p>
                  Cooper Flagg was born in Newport, Maine—a small town with a population of just over 3,000 people. Basketball is in his blood. His mother, <strong className="text-on-background">Kelly Flagg</strong>, played at the University of Maine and is a member of the school's Athletics Hall of Fame. She finished her college career with over 1,500 points and 1,000 rebounds. His father, <strong className="text-on-background">Ralph Flagg</strong>, played basketball at the community college level.
                </p>
                <p>
                  Cooper has a twin brother, <strong className="text-on-background">Ace Flagg</strong>, who also plays basketball and committed to the University of Maine. The two grew up playing together in their backyard, pushing each other every single day. Their mother once told a story about Cooper crying after losing a one-on-one game to Ace when they were kids—because he hated losing that much.
                </p>
                <p>
                  From an early age, Cooper was different. He wasn't just tall; he had a motor that never stopped. By the time he was in middle school, people in Maine were already talking about "that Flagg kid."
                </p>
              </div>
            </section>

            {/* High School Career */}
            <section className="space-y-8">
              <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background">
                High School Career
              </h2>
              
              <div className="space-y-4">
                <h3 className="font-headline text-xl font-bold text-primary">Nokomis Regional High School (Freshman Year)</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Cooper burst onto the national scene as a <strong>freshman</strong> at Nokomis Regional High School in Newport, Maine. He averaged <strong>20.5 points, 10.0 rebounds, 6.2 assists, 3.7 steals, and 3.7 blocks</strong> per game. Those numbers alone were absurd, but what made it historic was this: he became the <strong>first freshman ever</strong> to be named <strong>Maine Gatorade Player of the Year</strong>.
                </p>
                <p className="text-on-surface-variant leading-relaxed">
                  Think about that. A 14-year-old, playing against kids sometimes three years older, was the best player in the entire state. He led Nokomis to the Class A state championship game, where they lost. But Cooper had announced himself to the world. College coaches started calling. Recruiting services took notice. And then came the decision that would change everything.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-headline text-xl font-bold text-primary">Transfer to Montverde Academy (Sophomore through Senior Year)</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  To chase a national championship and play against the best competition in the country, Cooper and his twin brother Ace transferred to <strong>Montverde Academy</strong> in Florida—the same program that produced Cade Cunningham, Scottie Barnes, and D'Angelo Russell.
                </p>
                <ul className="space-y-4 text-on-surface-variant leading-relaxed mt-4 list-disc pl-5">
                  <li>
                    <strong className="text-on-background">Sophomore Year (2022–23):</strong> Cooper averaged 16.2 points, 7.7 rebounds, and 3.7 assists. He helped Montverde go 27-3 and win the GEICO Nationals championship. By the end of the season, he was already being called the best prospect in his class.
                  </li>
                  <li>
                    <strong className="text-on-background">Junior Year (2023–24):</strong> This was the year Cooper became a household name. He averaged <strong>19.3 points, 11.1 rebounds, 5.2 assists, 2.9 blocks, and 2.1 steals</strong>. Montverde went a perfect <strong>34-0</strong> and won another GEICO Nationals title. Cooper was named <strong>Gatorade National Player of the Year</strong> and <strong>Naismith Prep Player of the Year</strong>.
                  </li>
                </ul>
                <p className="text-on-surface-variant leading-relaxed mt-4">
                  But the moment that truly put him on the map? The <strong>2024 McDonald's All-American Game</strong>. Cooper scored 26 points, grabbed 12 rebounds, and blocked 3 shots, winning co-MVP honors. He also won the dunk contest, throwing down a between-the-legs jam that had NBA scouts texting each other immediately.
                </p>
                <p className="text-on-surface-variant leading-relaxed mt-4">
                  <strong>Senior Year (2024–25):</strong> Cooper reclassified, moving up to the Class of 2024, meaning he would skip his senior season of high school to enroll early at Duke. But before that, he did something unprecedented.
                </p>
              </div>
            </section>

            {/* USA Basketball */}
            <section className="space-y-6">
              <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background">
                The USA Basketball Select Team (Summer 2024)
              </h2>
              <div className="space-y-4 text-on-surface-variant leading-relaxed">
                <p>
                  In July 2024, Cooper Flagg was invited to practice with the <strong>USA Basketball Men's National Team</strong> as a member of the Select Team—the group of young players who scrimmage against the actual Olympic team to prepare them for the Paris Games.
                </p>
                <div className="border-l-2 border-primary pl-6 py-2 my-6 bg-surface-container-low rounded-r">
                  <p className="font-medium text-on-background">
                    Here's what made this insane: <strong>He was the first college player invited to the Select Team in over a decade.</strong> The last one? Anthony Davis in 2012, before he had played a single NBA game.
                  </p>
                </div>
                <p>
                  During those practices, Cooper more than held his own against LeBron James, Kevin Durant, Stephen Curry, and Joel Embiid. Reports leaked out of Las Vegas that Flagg had blocked Durant's jumpshot—twice. That he had driven baseline and finished over Bam Adebayo. That he had trash-talked Jrue Holiday.
                </p>
                <blockquote className="italic border-l-2 border-outline-variant/30 pl-4 py-1">
                  Kevin Durant was asked about him and said, "He's a problem. A real problem. That kid is going to be special."
                </blockquote>
                <blockquote className="italic border-l-2 border-outline-variant/30 pl-4 py-1 mt-2">
                  LeBron James added: "He's 17? No, he's not. No way."
                </blockquote>
                <p className="pt-2">
                  That week in Vegas turned Cooper Flagg from a great prospect into a legendary one before he had ever played a single college game.
                </p>
              </div>
            </section>

          </div>
          
          <div className="lg:col-span-4 space-y-8">
            <div className="sticky top-24 space-y-8">
              <img src="/cf1.jpg" alt="Cooper Flagg High School" className="rounded border border-outline-variant/15 shadow-sm w-full object-cover aspect-square" />
              
              <div className="bg-surface-container-lowest border border-outline-variant/15 rounded p-6 shadow-sm">
                <h3 className="font-headline font-bold text-on-background uppercase tracking-tight mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">sports_basketball</span>
                  Playing Style
                </h3>
                <ul className="space-y-4 text-sm text-on-surface-variant font-medium">
                  <li><strong className="text-on-background block mb-1">Defense</strong>Arguably the best defensive prospect since Anthony Davis. Blocks shots like a center, steals passes like a PG.</li>
                  <li><strong className="text-on-background block mb-1">Competitiveness</strong>"Psychotically competitive." Hates losing more than he likes winning.</li>
                  <li><strong className="text-on-background block mb-1">Versatility</strong>Initiates offense, posts up, shoots off the catch, crashes glass, runs transition.</li>
                  <li><strong className="text-on-background block mb-1">Motor</strong>Never stops moving. Energy is contagious.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* College Career */}
        <section className="bg-surface-container-lowest border border-outline-variant/15 rounded p-8 md:p-12 shadow-sm">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
            <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background">
              College Career (Duke, 2024–2025)
            </h2>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-primary bg-primary px-3 py-1 rounded">One And Done</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-on-surface-variant leading-relaxed">
                Cooper committed to Duke University in October 2023, choosing the Blue Devils over UConn, Kansas, and hometown Maine. When he stepped on campus, the hype was deafening. Some called him the best Duke recruit since Zion Williamson. Others said he was better. He did not disappoint.
              </p>
              
              <h3 className="font-headline text-xl font-bold text-on-background">Notable Performances</h3>
              <ul className="space-y-3 text-sm text-on-surface-variant list-disc pl-5">
                <li><strong>Debut vs. Maine (Nov 2024):</strong> 22 points, 9 rebounds, 6 blocks in a win over his home state's university. He cried during the national anthem.</li>
                <li><strong>vs. North Carolina (Feb 2025):</strong> 31 points, 14 rebounds, 5 steals in a 15-point win at Cameron Indoor.</li>
                <li><strong>ACC Tournament Final:</strong> 27 points, 11 rebounds, 4 blocks, tournament MVP.</li>
              </ul>
              
              <h3 className="font-headline text-xl font-bold text-on-background mt-6">NCAA Tournament Run</h3>
              <p className="text-sm text-on-surface-variant">
                Carried Duke as a #1 seed to the Final Four with absurd stat lines, including an Elite Eight game-winning buzzer block. In the Final Four, he fouled out with 6 minutes left, and Duke fell by 11. Three weeks later, he declared for the NBA draft.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-surface border border-outline-variant/15 rounded p-6">
                <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-on-background mb-4">Freshman Season Stats</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-surface-container-lowest border border-outline-variant/10 rounded">
                    <div className="font-headline text-2xl font-black text-primary">19.2</div>
                    <div className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase mt-1">Points</div>
                  </div>
                  <div className="text-center p-3 bg-surface-container-lowest border border-outline-variant/10 rounded">
                    <div className="font-headline text-2xl font-black text-primary">7.5</div>
                    <div className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase mt-1">Rebounds</div>
                  </div>
                  <div className="text-center p-3 bg-surface-container-lowest border border-outline-variant/10 rounded">
                    <div className="font-headline text-2xl font-black text-primary">4.2</div>
                    <div className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase mt-1">Assists</div>
                  </div>
                  <div className="text-center p-3 bg-surface-container-lowest border border-outline-variant/10 rounded">
                    <div className="font-headline text-2xl font-black text-primary">2.1</div>
                    <div className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase mt-1">Blocks</div>
                  </div>
                  <div className="text-center p-3 bg-surface-container-lowest border border-outline-variant/10 rounded">
                    <div className="font-headline text-2xl font-black text-primary">1.7</div>
                    <div className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase mt-1">Steals</div>
                  </div>
                  <div className="text-center p-3 bg-surface-container-lowest border border-outline-variant/10 rounded">
                    <div className="font-headline text-2xl font-black text-primary">53.8%</div>
                    <div className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase mt-1">FG%</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 rounded p-6">
                <h3 className="font-headline text-sm font-bold uppercase tracking-widest text-primary mb-4">College Awards</h3>
                <ul className="space-y-2 text-xs font-bold text-on-background">
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[14px]">emoji_events</span> Naismith College Player of the Year</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[14px]">emoji_events</span> John R. Wooden Award</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[14px]">emoji_events</span> ACC Player of the Year</li>
                  <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-[14px]">emoji_events</span> ACC Defensive Player of the Year</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NBA & Off Court */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <section className="space-y-6">
            <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background">
              NBA Draft & Rookie Season
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                On June 26, 2025, <strong>Cooper Flagg was selected 1st overall</strong> by the Dallas Mavericks. At 18 years and 187 days old, he became the second-youngest #1 pick in NBA history. At his press conference, he wore a navy suit with "NEWPORT" stitched inside the collar. He said: <em>"I'm not here to be the next anybody. I'm here to be the first me."</em>
              </p>
              <h3 className="font-headline text-lg font-bold text-on-background pt-2">Rookie Season (2025–26)</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Averaging 21.0 pts, 6.7 reb, 4.5 ast, 1.8 blk, 1.5 stl.</li>
                <li><strong>Nov 15 vs. Spurs:</strong> 34 pts, 8 reb, 4 stl vs Wembanyama.</li>
                <li><strong>Dec 9 vs. Hornets:</strong> 49 pts, 9 reb, 5 ast. Most points ever by a teenager in NBA history.</li>
                <li><strong>Jan 19 vs. Thunder:</strong> Triple-double (22 pts, 12 reb, 11 ast, 3 blk).</li>
                <li><strong>All-Star Weekend:</strong> Rising Stars MVP.</li>
              </ul>
            </div>
          </section>
          
          <section className="space-y-6">
            <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background">
              Off the Court
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Despite the hype, Cooper remains grounded. He still calls his mom after every game. He still texts his twin brother Ace daily. He still goes fishing in Maine every summer—waders, fly rod, the whole thing.
              </p>
              <p>
                He has a <strong>NIL deal with Gatorade</strong> and a <strong>signature shoe with New Balance</strong> set to release in Fall 2026.
              </p>
              <p>
                He also started the <strong>"Flaggship Foundation"</strong> in 2025, which provides basketball equipment and court renovations to rural schools in Maine. He has personally funded new gym floors at three elementary schools in his home county.
              </p>
              <blockquote className="italic border-l-2 border-primary pl-4 py-1 text-on-background font-medium">
                "Kids in cities get everything. Kids in small towns deserve the same chance I got."
              </blockquote>
            </div>
            
            <img src="/cf2.jpg" alt="Cooper Flagg off court" className="w-full aspect-[2/1] object-cover rounded border border-outline-variant/15 mt-6 shadow-sm" />
          </section>
        </div>

        {/* Accolades Table */}
        <section className="pb-12">
          <h2 className="font-headline text-3xl font-black uppercase tracking-tight text-on-background mb-8 text-center">
            Key Accolades
          </h2>
          <div className="max-w-3xl mx-auto overflow-hidden rounded border border-outline-variant/15 bg-surface-container-lowest shadow-sm">
            <table className="w-full text-left font-body text-sm">
              <thead className="bg-surface-container-low border-b border-outline-variant/15">
                <tr>
                  <th className="px-6 py-4 font-bold text-on-background uppercase tracking-widest text-[10px]">Year</th>
                  <th className="px-6 py-4 font-bold text-on-background uppercase tracking-widest text-[10px]">Accomplishment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/15">
                {[
                  { y: '2023', a: 'Maine Gatorade Player of the Year (as a freshman)' },
                  { y: '2024', a: 'Gatorade National Player of the Year (junior)' },
                  { y: '2024', a: 'Naismith Prep Player of the Year' },
                  { y: '2024', a: "McDonald's All-American (co-MVP)" },
                  { y: '2025', a: 'Naismith College Player of the Year' },
                  { y: '2025', a: 'Wooden Award winner' },
                  { y: '2025', a: 'ACC Player & Defensive Player of the Year' },
                  { y: '2025', a: '#1 overall NBA draft pick' },
                  { y: '2026', a: 'NBA Rising Stars MVP' },
                  { y: '2026', a: 'Likely NBA Rookie of the Year' },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-surface-container-low/50 transition-colors">
                    <td className="px-6 py-4 text-primary font-headline font-bold">{item.y}</td>
                    <td className="px-6 py-4 text-on-surface-variant font-medium">{item.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>

    </div>
  )
}
