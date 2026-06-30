import Link from 'next/link'

export default function Contact() {
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

            <div className="max-w-2xl mx-auto px-6 py-24 text-center">
                <h1 className="text-4xl font-black mb-4">Get in touch</h1>
                <p className="text-gray-400 mb-12">
                    Questions about AuditPass, refunds, or need help with your compliance documents? We're here to help.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                    <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest mb-2">Email</p>
                    <a href="mailto:support@auditpass.akhnd.com" className="text-green-400 text-xl font-bold hover:underline">
                        support@auditpass.akhnd.com
                    </a>
                    <p className="text-gray-600 text-xs mt-4">We typically respond within 24-48 hours.</p>
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