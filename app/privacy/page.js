import Link from 'next/link'

export default function Privacy() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">
            <nav className="flex items-center justify-between px-8 py-6 border-b border-white/5">
                <Link href="/" className="text-white font-bold text-xl tracking-tight hover:opacity-80 transition-all">
                    Audit<span className="text-green-400">Pass</span>
                </Link>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-all">
                    ← Back to home
                </Link>
            </nav>

            <div className="max-w-3xl mx-auto px-6 py-16">
                <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
                <p className="text-gray-500 text-sm mb-12">Last updated: June 2026</p>

                <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">1. Information We Collect</h2>
                        <p>When you use AuditPass, we collect the information you provide directly, such as your company name, product description, employee count, and server hosting details. This information is used solely to generate your compliance policy documents and is processed in your browser.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">2. How We Use Your Information</h2>
                        <p>The information you provide is used exclusively to generate the policy documents you request. We do not sell, rent, or share your information with third parties for marketing purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">3. Data Storage</h2>
                        <p>Form data you enter is temporarily stored in your browser's local storage to generate your documents and is not transmitted to or stored on our servers unless explicitly stated otherwise during checkout.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">4. Payment Information</h2>
                        <p>Payments are processed through a third-party payment provider. AuditPass does not store your credit card or payment information directly.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">5. Cookies</h2>
                        <p>We may use essential cookies required for the website to function properly. We do not use tracking cookies for advertising purposes.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">6. Your Rights</h2>
                        <p>You may request access to, correction of, or deletion of any personal information we hold about you by contacting us at the email below.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">7. Contact</h2>
                        <p>For privacy-related questions, contact us at <span className="text-green-400">support@auditpass.akhnd.com</span></p>
                    </section>
                </div>
            </div>
            {/* FOOTER */}
            <footer className="px-8 py-10 border-t border-white/5 flex flex-col items-center gap-6">
                <span className="text-white font-bold">
                    Audit<span className="text-green-400">Pass</span>
                </span>

                <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-500">
                    <Link href="/privacy" className="hover:text-white transition-all">Privacy</Link>
                    <Link href="/terms" className="hover:text-white transition-all">Terms</Link>
                    <Link href="/refund-policy" className="hover:text-white transition-all">Refunds</Link>
                    <Link href="/contact" className="hover:text-white transition-all">Contact</Link>
                </div>

                <p className="text-gray-600 text-xs text-center max-w-md">
                    Not legal advice. AuditPass generates policy templates to accelerate your compliance journey.
                </p>

                <p className="text-gray-600 text-xs">
                    © 2026 AuditPass
                </p>
            </footer>
        </main>
    )
}