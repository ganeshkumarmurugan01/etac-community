const STATS = [
  { value: 'USD 12B',  label: 'SE Asia MICE by 2030' },
  { value: '700+',     label: 'Intl Events in SG/year' },
  { value: '8–10%',   label: 'YoY Corporate Event Growth' },
  { value: 'Free',    label: 'Community Membership' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center bg-hero pt-16 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-black/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1180px] mx-auto px-5 py-24 text-center text-white">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold mb-8 animate-fade-up">
          <span className="w-2 h-2 rounded-full bg-[#6FE7C1] animate-pulse" />
          Asia&rsquo;s First Professional Network for Events &amp; Technology
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 animate-fade-up"
          style={{ animationDelay: '.1s' }}
        >
          Where Events Meets
          <br />Technology
          <br />
          <span className="text-gradient">Across Asia</span>
        </h1>

        {/* Sub */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/75 leading-relaxed mb-10 animate-fade-up"
          style={{ animationDelay: '.2s' }}
        >
          Event Tech Asia Community (ETAC) connects the people who plan and deliver
          events with the technology providers who power them — digitally, and through
          the flagship annual conference, Event Tech Asia.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: '.3s' }}
        >
          <a
            href="#join"
            className="px-8 py-4 rounded-full bg-white text-[#004D40] font-bold text-base hover:bg-[#EAF8F4] transition-colors shadow-lg"
          >
            Join Free — No Credit Card →
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full bg-white/10 border border-white/30 text-white font-semibold text-base hover:bg-white/20 transition-colors backdrop-blur-sm"
          >
            Learn More
          </a>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-up"
          style={{ animationDelay: '.45s' }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{s.value}</div>
              <div className="text-sm text-white/60 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
