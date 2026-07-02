'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent')
        if (!consent) setVisible(true)
    }, [])

    const accept = () => {
        localStorage.setItem('cookieConsent', 'accepted')
        setVisible(false)
    }

    const decline = () => {
        localStorage.setItem('cookieConsent', 'declined')
        setVisible(false)
    }

    if (!visible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
            <div className="max-w-4xl mx-auto bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
                    We use essential cookies to make AuditPass work. We don't track you or sell your data.{' '}
                    <Link href="/privacy" className="text-green-400 hover:underline">
                        Privacy Policy
                    </Link>
                </p>
                <div className="flex items-center gap-3 flex-shrink-0">
                    <button
                        onClick={decline}
                        className="text-gray-500 hover:text-white text-sm transition-all px-4 py-2"
                    >
                        Decline
                    </button>
                    <button
                        onClick={accept}
                        className="bg-green-400 text-black font-black text-sm px-6 py-2 rounded-full hover:bg-green-300 transition-all"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    )
}