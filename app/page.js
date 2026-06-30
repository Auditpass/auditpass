import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/5">
        <Link href="/" className="text-white font-bold text-xl tracking-tight">
          Audit<span className="text-green-400">Pass</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/generate" className="text-gray-400 hover:text-white text-sm transition-all">
            Generate Policies
          </Link>
          <Link href="/generate" className="bg-green-400 text-black text-sm font-bold px-5 py-2 rounded-full hover:bg-green-300 transition-all">
            Get Started →
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-20">

        {/* Badge */}
        <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <span>Vanta charges $12,000/year. We charge $299. One time.</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white max-w-4xl leading-none tracking-tight mb-6">
          SOC 2 policies that
          <br />
          <span className="text-green-400">don't cost $40,000.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          You're about to lose a $50k enterprise deal because they want SOC 2.
          Lawyers want $15k. Vanta wants $12k/year.
          <span className="text-white font-semibold"> We give you audit-ready policies in 60 seconds for $299.</span>
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Link href="/generate">
            <button className="bg-green-400 text-black font-black text-lg px-10 py-4 rounded-full hover:bg-green-300 transition-all hover:scale-105">
              Generate My Policies →
            </button>
          </Link>
          <span className="text-gray-600 text-sm">No subscription. No lawyer. No BS.</span>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold">✓</span>
            <span>SOC 2 Type I & II ready</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold">✓</span>
            <span>ISO 27001 compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold">✓</span>
            <span>GDPR & HIPAA included</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold">✓</span>
            <span>Auditor approved format</span>
          </div>
        </div>

      </section>

      {/* PAIN SECTION */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">

          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase text-center mb-4">
            Sound familiar?
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
            The SOC 2 trap every founder falls into
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-green-400 font-black text-4xl mb-4">01</div>
              <h3 className="font-bold text-lg mb-3 text-white">The $40k Catch-22</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enterprise client wants SOC 2. Certification costs $40k.
                The deal is worth $40k. The math makes zero sense but
                you can't say no.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-green-400 font-black text-4xl mb-4">02</div>
              <h3 className="font-bold text-lg mb-3 text-white">Vanta's Dirty Secret</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                They say "automated compliance" but you still spend
                20 hours a week writing policies manually. You paid
                $12,000 for a dashboard. Congrats.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-green-400 font-black text-4xl mb-4">03</div>
              <h3 className="font-bold text-lg mb-3 text-white">The Hidden Bill</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                GRC Platform: $12k. Auditor: $15k. Pen test: $5k.
                Background checks: $2k. You needed one document.
                You got a $34,000 invoice.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">

          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase text-center mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
            Three steps. Sixty seconds.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="relative">
              <div className="text-green-400 font-black text-6xl mb-6 opacity-20">1</div>
              <h3 className="font-bold text-xl mb-3 text-white">Tell us about your company</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Company name, what you build, how many employees,
                where your servers live. Takes 2 minutes.
              </p>
            </div>

            <div className="relative">
              <div className="text-green-400 font-black text-6xl mb-6 opacity-20">2</div>
              <h3 className="font-bold text-xl mb-3 text-white">Pick your frameworks</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                SOC 2, ISO 27001, GDPR, HIPAA — select what
                your enterprise client is asking for. We handle
                the overlap automatically.
              </p>
            </div>

            <div className="relative">
              <div className="text-green-400 font-black text-6xl mb-6 opacity-20">3</div>
              <h3 className="font-bold text-xl mb-3 text-white">Download & submit</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Get a fully formatted Word document with your
                company name, control references, and audit-ready
                language. Ready to hand to your auditor.
              </p>
            </div>

          </div>

          {/* Arrow CTA */}
          <div className="text-center mt-16">
            <Link href="/generate">
              <button className="bg-white text-black font-black text-lg px-10 py-4 rounded-full hover:bg-gray-100 transition-all">
                Start Now — It's $299 →
              </button>
            </Link>
          </div>

        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">

          <p className="text-green-400 text-sm font-semibold tracking-widest uppercase text-center mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">
            Simple. No tricks.
          </h2>
          <p className="text-gray-400 text-center mb-16">
            One time payment. Download instantly. Keep forever.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* SOC 2 Only */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Starter</p>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-black text-white">$299</span>
                <span className="text-gray-500 mb-2">one time</span>
              </div>
              <p className="text-gray-400 text-sm mb-8">Perfect for SOC 2 or ISO 27001</p>

              <ul className="space-y-3 mb-8">
                {[
                  '5 core compliance policies',
                  'One framework (SOC 2 or ISO 27001)',
                  'Your company name & details',
                  'Control reference numbers included',
                  'Instant Word doc download',
                  'Lifetime access to your document',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="text-green-400 font-bold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/generate">
                <button className="w-full border border-white/20 text-white font-bold py-3 rounded-full hover:bg-white/5 transition-all">
                  Get Started →
                </button>
              </Link>
            </div>

            {/* Bundle — highlighted */}
            <div className="bg-green-400 rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-green-400 text-xs font-black px-4 py-1 rounded-full border border-green-400">
                MOST POPULAR
              </div>
              <p className="text-black/60 text-sm font-semibold uppercase tracking-widest mb-4">Bundle</p>
              <div className="flex items-end gap-2 mb-2">
                <span className="text-5xl font-black text-black">$799</span>
                <span className="text-black/50 mb-2">one time</span>
              </div>
              <p className="text-black/60 text-sm mb-8">All 4 frameworks. All 15 policies.</p>

              <ul className="space-y-3 mb-8">
                {[
                  'All 15 compliance policies',
                  'SOC 2 + ISO 27001 + GDPR + HIPAA',
                  'Your company name & details',
                  'All control reference numbers',
                  'Instant Word doc download',
                  'Lifetime access to your documents',
                  'Free updates when frameworks change',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3 text-sm text-black">
                    <span className="font-black mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/generate">
                <button className="w-full bg-black text-green-400 font-black py-3 rounded-full hover:bg-gray-900 transition-all">
                  Get the Bundle →
                </button>
              </Link>
            </div>

          </div>

          {/* vs competitors */}
          <p className="text-center text-gray-600 text-sm mt-10">
            Vanta: $12,000/year. Drata: $7,500/year. AuditPass: $299 forever.
          </p>

        </div>

      </section>
      {/* FINAL CTA */}
      <section className="px-6 py-24 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            Your enterprise deal is waiting.
          </h2>
          <p className="text-gray-400 mb-10">
            Stop losing contracts over missing compliance docs.
            Get yours in 60 seconds.
          </p>
          <Link href="/generate">
            <button className="bg-green-400 text-black font-black text-lg px-12 py-4 rounded-full hover:bg-green-300 transition-all hover:scale-105">
              Generate My Policies — $299 →
            </button>
          </Link>
          <p className="text-gray-600 text-xs mt-6">
            One time payment. Instant download. No subscription ever.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-8 py-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white font-bold">
          Audit<span className="text-green-400">Pass</span>
        </span>
        <p className="text-gray-600 text-xs text-center">
          Not legal advice. AuditPass generates policy templates to accelerate your compliance journey.
        </p>
        <p className="text-gray-600 text-xs">
          © 2026 AuditPass
        </p>
      </footer>
    </main>
  )
}