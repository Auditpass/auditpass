import Link from 'next/link'

export default function RefundPolicy() {
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
                <h1 className="text-4xl font-black mb-2">Refund Policy</h1>
                <p className="text-gray-500 text-sm mb-12">Last updated: June 2026</p>

                <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">1. Digital Product Nature</h2>
                        <p>AuditPass delivers digital documents that are generated and made available for download immediately upon payment. Due to the instant, digital nature of this product, all sales are generally final.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">2. Refund Eligibility</h2>
                        <p>We may issue a refund if: the document generation tool fails to function and the issue cannot be resolved by our support team, you were charged in error or duplicate, or you request a refund within 24 hours of purchase and have not yet downloaded the generated documents.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">3. Non-Refundable Circumstances</h2>
                        <p>Refunds will not be issued if you have already downloaded the document pack, if you are dissatisfied with the content quality after review (we encourage previewing documents before purchase where possible), or if your organization fails an audit despite using AuditPass documents, since we do not guarantee audit outcomes.</p>
                    </section>

                    <section>
                        <h2 className="text-white font-bold text-lg mb-3">4. How to Request a Refund</h2>
                        <p>To request a refund, contact us at <span className="text-green-400">support@auditpass.akhnd.com</span> with your order details within the eligible window. Refunds, when approved, are processed within 5-10 business days.</p>
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