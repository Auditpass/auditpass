import Link from 'next/link'

export default function Terms() {
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
                <h1 className="text-4xl font-black mb-2">Terms of Service</h1>
                <p className="text-gray-500 text-sm mb-12">Last updated: June 2026</p>

                <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">1. What AuditPass Provides</h2>
                        <p>AuditPass generates template compliance policy documents based on information you provide. These documents are starting templates intended to accelerate your compliance preparation, not a guarantee of passing any audit or certification.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">2. Not Legal Advice</h2>
                        <p>AuditPass is not a law firm and does not provide legal advice. The documents generated should be reviewed by qualified legal or compliance professionals before submission to any auditor or regulatory body.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">3. No Guarantee of Audit Success</h2>
                        <p>While our documents are designed to align with common SOC 2, ISO 27001, GDPR, and HIPAA requirements, AuditPass makes no guarantee that use of our templates will result in a successful audit, certification, or regulatory approval.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">4. Payment and Access</h2>
                        <p>Upon successful payment, you receive access to download the generated policy documents. Payments are one-time and grant you a perpetual license to use, modify, and adapt the generated documents for your own organization.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">5. Acceptable Use</h2>
                        <p>You may not resell, redistribute, or repackage AuditPass-generated templates as a standalone product or service to third parties without modification.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">6. Limitation of Liability</h2>
                        <p>AuditPass and its operators are not liable for any direct, indirect, incidental, or consequential damages arising from the use of generated documents, including but not limited to failed audits, regulatory penalties, or business losses.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">7. Changes to These Terms</h2>
                        <p>We may update these Terms from time to time. Continued use of AuditPass after changes constitutes acceptance of the updated Terms.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">8. Contact</h2>
                        <p>For questions about these Terms, contact us at <span className="text-green-400">support@auditpass.akhnd.com</span></p>
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