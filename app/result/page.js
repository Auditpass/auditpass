'use client'
import { useEffect, useState } from 'react'
import { generatePolicyDoc } from '../../lib/generateDoc'
import { generatePolicyPDF } from '../../lib/generatePdf'
import policyData from '../../data/policies.json'

export default function Result() {
    const [formData, setFormData] = useState(null)
    const [activePolicy, setActivePolicy] = useState(null)
    const [downloading, setDownloading] = useState(false)

    useEffect(() => {
        const data = localStorage.getItem('auditFormData')
        if (data) {
            const parsed = JSON.parse(data)
            setFormData(parsed)
            const firstPolicy = parsed.policies.length > 0 ? parsed.policies[0] : null
            setActivePolicy(firstPolicy)
        }
    }, [])

    const handleDownloadDocx = async () => {
        if (!formData) return
        setDownloading(true)
        await generatePolicyDoc(formData)
        setDownloading(false)
    }

    const handleDownloadPDF = async () => {
        if (!formData) return
        setDownloading(true)
        await generatePolicyPDF(formData)
        setDownloading(false)
    }

    if (!formData) return (
        <main className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
            <p className="text-gray-500 text-sm">Loading your policies...</p>
        </main>
    )

    const price = formData.frameworks.length > 1 ? '$799' : '$299'
    const activeData = activePolicy ? policyData[activePolicy] : null

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">

            {/* Top bar */}
            <div className="border-b border-white/5 px-8 py-6 flex items-center justify-between">
                <span className="text-white font-bold text-xl">
                    Audit<span className="text-green-400">Pass</span>
                </span>
                <span className="text-gray-500 text-sm">
                    Generated for <span className="text-white font-semibold">{formData.companyName}</span>
                </span>
            </div>

            <div className="grid md:grid-cols-[280px_1fr] min-h-[calc(100vh-77px)]">

                {/* Sidebar — policy list */}
                <div className="border-r border-white/5 p-6">
                    <p className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-4">
                        {formData.policies.length} Policies Included
                    </p>
                    <div className="space-y-1">
                        {formData.policies.map(policy => (
                            <button
                                key={policy}
                                onClick={() => setActivePolicy(policy)}
                                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${activePolicy === policy
                                        ? 'bg-green-400/10 text-green-400 font-semibold'
                                        : 'text-gray-400 hover:bg-white/5'
                                    }`}
                            >
                                {policy}
                            </button>
                        ))}
                    </div>

                    <div className="mt-10 pt-6 border-t border-white/5">
                        <button
                            onClick={handleDownloadDocx}
                            disabled={downloading}
                            className="w-full bg-green-400 text-black font-black py-3 rounded-full hover:bg-green-300 transition-all disabled:opacity-50 mb-2"
                        >
                            {downloading ? 'Generating...' : `Download .docx — ${price}`}
                        </button>
                        <button
                            onClick={handleDownloadPDF}
                            disabled={downloading}
                            className="w-full border border-white/20 text-white font-bold py-3 rounded-full hover:bg-white/5 transition-all disabled:opacity-50"
                        >
                            {downloading ? 'Generating...' : 'Download .pdf'}
                        </button>
                        <p className="text-gray-600 text-xs text-center mt-3">
                            One time payment. Instant download.
                        </p>
                    </div>
                </div>

                {/* Document preview */}
                <div className="p-10 overflow-y-auto">
                    {activeData ? (
                        <div className="max-w-2xl">

                            <div className="mb-8 pb-8 border-b border-white/10">
                                <h1 className="text-3xl font-black text-white mb-3">{activePolicy}</h1>
                                <div className="flex flex-wrap gap-2">
                                    {formData.frameworks
                                        .filter(fw => activeData.controls[fw])
                                        .map(fw => (
                                            <span key={fw} className="text-xs bg-white/5 border border-white/10 text-gray-400 px-3 py-1 rounded-full">
                                                {fw} {activeData.controls[fw]}
                                            </span>
                                        ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-green-400 text-sm font-bold uppercase tracking-widest mb-3">Purpose</h3>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {activeData.purpose.replaceAll('{{companyName}}', formData.companyName).replaceAll('{{serverLocation}}', formData.serverLocation || 'cloud infrastructure')}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-green-400 text-sm font-bold uppercase tracking-widest mb-3">Scope</h3>
                                <p className="text-gray-300 leading-relaxed text-sm">
                                    {activeData.scope.replaceAll('{{companyName}}', formData.companyName)}
                                </p>
                            </div>

                            {activeData.sections.map((s, i) => (
                                <div key={i} className="mb-8">
                                    <h3 className="text-white text-base font-bold mb-2">{i + 1}. {s.heading}</h3>
                                    <p className="text-gray-400 leading-relaxed text-sm">
                                        {s.body.replaceAll('{{companyName}}', formData.companyName).replaceAll('{{serverLocation}}', formData.serverLocation || 'cloud infrastructure')}
                                    </p>
                                </div>
                            ))}

                            <div className="mt-10 p-6 bg-white/5 border border-white/10 rounded-xl text-center">
                                <p className="text-gray-400 text-sm mb-4">
                                    This is a preview. Download the full formatted document to get this and all {formData.policies.length} policies.
                                </p>
                                <div className="flex gap-3 justify-center">
                                    <button
                                        onClick={handleDownloadDocx}
                                        disabled={downloading}
                                        className="bg-green-400 text-black font-black px-6 py-3 rounded-full hover:bg-green-300 transition-all disabled:opacity-50"
                                    >
                                        {downloading ? 'Generating...' : `Download .docx — ${price}`}
                                    </button>
                                    <button
                                        onClick={handleDownloadPDF}
                                        disabled={downloading}
                                        className="border border-white/20 text-white font-black px-6 py-3 rounded-full hover:bg-white/5 transition-all disabled:opacity-50"
                                    >
                                        {downloading ? 'Generating...' : 'Download .pdf'}
                                    </button>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div className="text-gray-500 text-sm">
                            Select a policy from the sidebar to preview it.
                        </div>
                    )}
                </div>

            </div>
        </main>
    )
}