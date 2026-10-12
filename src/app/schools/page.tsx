import type { Metadata } from 'next'
import Hero from '@/components/Hero'

export const metadata: Metadata = {
  title: 'For Schools — Inter Mural',
  description: 'Bring Inter Mural to your school. Premium spirit wear programs with dedicated account management.',
}

const valueProps = [
  { icon: '◈', title: 'Premium Quality', desc: 'Heavyweight materials, woven logos, and professional finishing — not your average school merch.' },
  { icon: '◇', title: 'Expert Design', desc: 'Our design team creates custom artwork built around your school identity, colors, and mascot.' },
  { icon: '◉', title: 'Dedicated Account Manager', desc: 'One person, always available. They know your school and handle everything from design to delivery.' },
  { icon: '◈', title: 'Pre-Order Model', desc: 'No risk, no leftover inventory. Students order their size, we produce exactly what\'s needed.' },
]

const steps = [
  { num: '01', title: 'Apply', desc: 'Fill out the school application. We review every school personally and follow up within 48 hours.', detail: 'We\'re selective — we work with schools who care about quality and community.' },
  { num: '02', title: 'Design', desc: 'Your dedicated account manager works with our design team to build your custom collection.', detail: 'You\'ll receive 2–3 design concepts within one week. We refine until it\'s perfect.' },
  { num: '03', title: 'Deliver', desc: 'Pre-order opens to your students. They order direct. We produce and ship within 3 weeks.', detail: 'Bulk school delivery or individual student shipping — your choice.' },
]

const testimonials = [
  { quote: 'Our students have never worn the school name this proudly. The quality is on another level.', author: 'Athletic Director', school: 'Northeast Regional High School' },
  { quote: 'The account manager knew our school by name, by mascot, by everything. A real partnership.', author: 'Student Activities Coordinator', school: 'Westside Academy' },
  { quote: 'We sold out our pre-order in 72 hours. Wish we had ordered more.', author: 'Senior Class President', school: 'Lakewood High School' },
]

export default function SchoolsPage() {
  return (
    <>
      <Hero
        eyebrow="School Programs"
        tagline="Bring Inter Mural to Your School"
        sub="Premium school spirit wear, custom-designed for your community. Zero risk, zero leftover inventory — just results."
        ctaPrimary={{ label: 'Apply Now', href: '#apply' }}
        ctaSecondary={{ label: 'How It Works', href: '#process' }}
        height="partial"
        align="center"
        imageUrl="/images/built-for-schools.png"
      />

      {/* Value Props */}
      <section className="bg-im-deep py-24 border-b border-white/10">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-im-gold text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">Why Inter Mural</p>
            <h2 className="text-im-cream font-light text-3xl md:text-4xl uppercase" style={{ letterSpacing: '0.05em' }}>
              Premium Materials. Expert Design.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((vp) => (
              <div key={vp.title} className="border-t border-white/10 pt-8">
                <span className="text-im-gold text-2xl mb-5 block">{vp.icon}</span>
                <h3 className="text-im-cream font-light text-lg uppercase mb-3" style={{ letterSpacing: '0.05em' }}>{vp.title}</h3>
                <p className="text-im-muted text-sm leading-relaxed">{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-im-black py-24 md:py-36" id="process">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-im-gold text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">The Process</p>
            <h2 className="text-im-cream font-light text-3xl md:text-4xl uppercase" style={{ letterSpacing: '0.05em' }}>How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.num}>
                <span className="text-im-gold/40 font-light text-6xl block mb-6" style={{ letterSpacing: '-0.02em' }}>{step.num}</span>
                <h3 className="text-im-cream font-light text-2xl uppercase mb-4" style={{ letterSpacing: '0.05em' }}>{step.title}</h3>
                <p className="text-im-text-light/70 text-base mb-4 leading-relaxed">{step.desc}</p>
                <p className="text-im-muted text-sm leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Order Model */}
      <section className="bg-im-deep py-20 border-t border-white/10">
        <div className="max-w-content mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-im-gold text-[10px] tracking-[0.2em] uppercase mb-5 font-medium">The Model</p>
            <h2 className="text-im-cream font-light text-3xl md:text-4xl uppercase mb-6" style={{ letterSpacing: '0.05em' }}>Zero Risk. Zero Waste.</h2>
            <p className="text-im-text-light/60 text-base leading-relaxed mb-6">
              Your school opens a pre-order window, students order their exact size and items, and we produce only what&apos;s been ordered. No overstock. No upfront cost to the school.
            </p>
            <p className="text-im-text-light/60 text-base leading-relaxed">
              Students pay directly through our platform. The school earns a revenue share on every order.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { label: 'Pre-Order Window', value: '2 Weeks' },
              { label: 'Production Time', value: '3 Weeks' },
              { label: 'Min Order Qty', value: '24 Units' },
              { label: 'School Revenue Share', value: 'Up to 15%' },
            ].map((stat) => (
              <div key={stat.label} className="bg-im-black border border-white/10 p-6">
                <p className="text-im-gold font-light text-3xl mb-2">{stat.value}</p>
                <p className="text-im-muted text-[10px] tracking-[0.15em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-im-black py-24 md:py-36" id="apply">
        <div className="max-w-content mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-im-gold text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">Get Started</p>
              <h2 className="text-im-cream font-light text-3xl md:text-4xl uppercase mb-4" style={{ letterSpacing: '0.05em' }}>Apply Now</h2>
              <p className="text-im-muted text-sm">We review every application. You&apos;ll hear back within 48 hours.</p>
            </div>
            <form className="space-y-5" action="#">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-[10px] tracking-[0.15em] uppercase text-im-muted block mb-2">Your Name</label>
                  <input type="text" className="w-full bg-im-deep border border-white/10 text-im-text-light placeholder:text-im-muted px-4 py-3 text-sm focus:outline-none focus:border-im-gold/50 transition-colors" placeholder="First Last" />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.15em] uppercase text-im-muted block mb-2">Your Role</label>
                  <input type="text" className="w-full bg-im-deep border border-white/10 text-im-text-light placeholder:text-im-muted px-4 py-3 text-sm focus:outline-none focus:border-im-gold/50 transition-colors" placeholder="Athletic Director, Student, etc." />
                </div>
              </div>
              <div>
                <label className="text-[10px] tracking-[0.15em] uppercase text-im-muted block mb-2">School Name</label>
                <input type="text" className="w-full bg-im-deep border border-white/10 text-im-text-light placeholder:text-im-muted px-4 py-3 text-sm focus:outline-none focus:border-im-gold/50 transition-colors" placeholder="Westside High School" />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.15em] uppercase text-im-muted block mb-2">Email Address</label>
                <input type="email" className="w-full bg-im-deep border border-white/10 text-im-text-light placeholder:text-im-muted px-4 py-3 text-sm focus:outline-none focus:border-im-gold/50 transition-colors" placeholder="you@school.edu" />
              </div>
              <div>
                <label className="text-[10px] tracking-[0.15em] uppercase text-im-muted block mb-2">Message</label>
                <textarea rows={4} className="w-full bg-im-deep border border-white/10 text-im-text-light placeholder:text-im-muted px-4 py-3 text-sm focus:outline-none focus:border-im-gold/50 transition-colors resize-none" placeholder="Tell us about your school and what you're looking for..." />
              </div>
              <button type="submit" className="w-full bg-im-gold text-im-black py-4 text-[10px] tracking-[0.15em] uppercase font-medium hover:bg-im-cream transition-colors duration-200">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-im-deep py-24 border-t border-white/10">
        <div className="max-w-content mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-im-gold text-[10px] tracking-[0.2em] uppercase mb-4 font-medium">From the Schools</p>
            <h2 className="text-im-cream font-light text-3xl uppercase" style={{ letterSpacing: '0.05em' }}>What They&apos;re Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.author} className="bg-im-black border border-white/10 p-8">
                <p className="text-im-text-light/80 text-base leading-relaxed mb-6 font-light italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-im-cream text-sm font-medium">{t.author}</p>
                  <p className="text-im-muted text-[10px] tracking-[0.15em] mt-1">{t.school}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
