'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const steps = [
    { id: 1, title: 'Pick your framework' },
    { id: 2, title: 'About your company' },
    { id: 3, title: 'Pick your policies' },
    { id: 4, title: 'Review & confirm' },
]

const allPolicies = {
    'SOC 2': [
        'Access Control Policy',
        'Incident Response Plan',
        'Risk Assessment Policy',
        'Data Backup Policy',
        'Information Security Policy',
        'Change Management Policy',
        'Vulnerability Management Policy',
        'Audit Logging Policy',
        'Encryption Policy',
        'Business Continuity Plan',
    ],
    'ISO 27001': [
        'Access Control Policy',
        'Information Security Policy',
        'Risk Assessment Policy',
        'Incident Response Plan',
        'Data Backup Policy',
        'Vendor Management Policy',
        'Data Classification Policy',
        'Employee Security Training Policy',
        'Physical Security Policy',
        'Acceptable Use Policy',
    ],
    'GDPR': [
        'Privacy Policy',
        'Data Retention Policy',
        'Data Subject Rights Policy',
        'Cookie Policy',
        'Data Breach Notification Policy',
    ],
    'HIPAA': [
        'Privacy Policy',
        'Security Risk Assessment',
        'Data Backup Policy',
        'Incident Response Plan',
        'Employee Security Training Policy',
    ],
}

export default function Generate() {
    const router = useRouter()
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        frameworks: [],
        companyName: '',
        productDescription: '',
        employeeCount: '',
        serverLocation: '',
        policies: [],
    })

    const availablePolicies = [...new Set(
        formData.frameworks.flatMap(fw => allPolicies[fw] || [])
    )]

    const handleFramework = (fw) => {
        setFormData(prev => ({
            ...prev,
            frameworks: prev.frameworks.includes(fw)
                ? prev.frameworks.filter(f => f !== fw)
                : [...prev.frameworks, fw],
            policies: [],
        }))
    }

    const handlePolicy = (policy) => {
        setFormData(prev => ({
            ...prev,
            policies: prev.policies.includes(policy)
                ? prev.policies.filter(p => p !== policy)
                : [...prev.policies, policy],
        }))
    }

    const handleNext = () => {
        if (currentStep === 1 && formData.frameworks.length === 0) {
            alert('Please select at least one framework')
            return
        }
        if (currentStep === 2 && !formData.companyName) {
            alert('Please enter your company name')
            return
        }
        setCurrentStep(prev => prev + 1)
    }

    const handleBack = () => setCurrentStep(prev => prev - 1)

    const handleSubmit = () => {
        localStorage.setItem('auditFormData', JSON.stringify(formData))
        router.push('/result')
    }

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white px-6 py-12">
            <div className="max-w-2xl mx-auto">

                {/* Logo */}
                <div className="mb-10">
                    <Link href="/" className="text-white font-bold text-xl hover:opacity-80 transition-all">
                        Audit<span className="text-green-400">Pass</span>
                    </Link>
                </div>

                {/* Progress bar */}
                <div className="flex items-center gap-2 mb-10">
                    {steps.map((step, i) => (
                        <div key={step.id} className="flex items-center gap-2 flex-1">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all ${currentStep === step.id
                                ? 'bg-green-400 text-black'
                                : currentStep > step.id
                                    ? 'bg-green-400/30 text-green-400'
                                    : 'bg-white/10 text-gray-500'
                                }`}>
                                {currentStep > step.id ? '✓' : step.id}
                            </div>
                            {i < steps.length - 1 && (
                                <div className={`flex-1 h-0.5 transition-all ${currentStep > step.id ? 'bg-green-400/30' : 'bg-white/10'
                                    }`} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step title */}
                <div className="mb-8">
                    <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-2">
                        Step {currentStep} of {steps.length}
                    </p>
                    <h1 className="text-2xl font-black">
                        {steps[currentStep - 1].title}
                    </h1>
                </div>

                {/* STEP 1 — Framework */}
                {currentStep === 1 && (
                    <div className="space-y-4">
                        <p className="text-gray-400 text-sm mb-6">
                            Select the frameworks your enterprise client is asking for. Not sure? Pick SOC 2 — it's the most common.
                        </p>
                        {['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA'].map(fw => (
                            <button
                                key={fw}
                                onClick={() => handleFramework(fw)}
                                className={`w-full p-5 rounded-xl border text-left transition-all ${formData.frameworks.includes(fw)
                                    ? 'border-green-400 bg-green-400/10'
                                    : 'border-white/10 hover:border-white/30'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className={`font-bold mb-1 ${formData.frameworks.includes(fw) ? 'text-green-400' : 'text-white'}`}>
                                            {fw}
                                        </p>
                                        <p className="text-gray-500 text-xs">
                                            {fw === 'SOC 2' && 'Most common for US enterprise deals'}
                                            {fw === 'ISO 27001' && 'Required for European & global clients'}
                                            {fw === 'GDPR' && 'Required if you have EU users'}
                                            {fw === 'HIPAA' && 'Required for health data in the US'}
                                        </p>
                                    </div>
                                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${formData.frameworks.includes(fw)
                                        ? 'border-green-400 bg-green-400'
                                        : 'border-white/20'
                                        }`}>
                                        {formData.frameworks.includes(fw) && (
                                            <span className="text-black text-xs font-black">✓</span>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {/* STEP 2 — Company info */}
                {currentStep === 2 && (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Company Name *
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Acme Inc."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400 transition-all"
                                value={formData.companyName}
                                onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                What does your product do?
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Cloud-based HR software for small businesses"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-green-400 transition-all"
                                value={formData.productDescription}
                                onChange={e => setFormData({ ...formData, productDescription: e.target.value })}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                How many employees?
                            </label>
                            <div className="grid grid-cols-4 gap-3">
                                {['1-10', '11-50', '51-200', '200+'].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setFormData({ ...formData, employeeCount: size })}
                                        className={`py-3 rounded-xl border text-sm font-bold transition-all ${formData.employeeCount === size
                                            ? 'border-green-400 bg-green-400/10 text-green-400'
                                            : 'border-white/10 text-gray-400 hover:border-white/30'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Where are your servers hosted?
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {['AWS', 'Google Cloud', 'Azure', 'Other'].map(server => (
                                    <button
                                        key={server}
                                        onClick={() => setFormData({ ...formData, serverLocation: server })}
                                        className={`py-3 rounded-xl border text-sm font-bold transition-all ${formData.serverLocation === server
                                            ? 'border-green-400 bg-green-400/10 text-green-400'
                                            : 'border-white/10 text-gray-400 hover:border-white/30'
                                            }`}
                                    >
                                        {server}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* STEP 3 — Policies */}
                {currentStep === 3 && (
                    <div className="space-y-3">
                        <p className="text-gray-400 text-sm mb-6">
                            We pre-selected the most important ones. Deselect any you don't need.
                        </p>
                        {availablePolicies.map(policy => (
                            <button
                                key={policy}
                                onClick={() => handlePolicy(policy)}
                                className={`w-full p-4 rounded-xl border text-left transition-all ${formData.policies.includes(policy)
                                    ? 'border-green-400 bg-green-400/10'
                                    : 'border-white/10 hover:border-white/30'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span className={`text-sm font-medium ${formData.policies.includes(policy) ? 'text-green-400' : 'text-gray-300'
                                        }`}>
                                        {policy}
                                    </span>
                                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all ${formData.policies.includes(policy)
                                        ? 'border-green-400 bg-green-400'
                                        : 'border-white/20'
                                        }`}>
                                        {formData.policies.includes(policy) && (
                                            <span className="text-black text-xs font-black">✓</span>
                                        )}
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}

                {/* STEP 4 — Review */}
                {currentStep === 4 && (
                    <div className="space-y-4">
                        <p className="text-gray-400 text-sm mb-6">
                            Review your order before checkout.
                        </p>

                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Company</span>
                                <span className="text-white font-bold">{formData.companyName}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Frameworks</span>
                                <span className="text-white font-bold">{formData.frameworks.join(', ')}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Employees</span>
                                <span className="text-white font-bold">{formData.employeeCount}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-400">Servers</span>
                                <span className="text-white font-bold">{formData.serverLocation}</span>
                            </div>
                            <div className="border-t border-white/10 pt-4">
                                <p className="text-gray-400 text-sm mb-3">Policies included:</p>
                                <div className="space-y-1">
                                    {formData.policies.map(p => (
                                        <p key={p} className="text-xs text-gray-300 flex items-center gap-2">
                                            <span className="text-green-400">✓</span> {p}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="bg-green-400/10 border border-green-400/30 rounded-xl p-6 flex items-center justify-between">
                            <div>
                                <p className="text-white font-black text-lg">
                                    {formData.frameworks.length > 1 ? 'Compliance Bundle' : 'Starter Pack'}
                                </p>
                                <p className="text-gray-400 text-xs mt-1">One time payment. Instant download.</p>
                            </div>
                            <p className="text-green-400 font-black text-3xl">
                                {formData.frameworks.length > 1 ? '$799' : '$299'}
                            </p>
                        </div>
                    </div>
                )}

                {/* Navigation buttons */}
                <div className="flex items-center justify-between mt-10">
                    {currentStep > 1 ? (
                        <button
                            onClick={handleBack}
                            className="text-gray-400 hover:text-white text-sm transition-all"
                        >
                            ← Back
                        </button>
                    ) : <div />}

                    {currentStep < 4 ? (
                        <button
                            onClick={handleNext}
                            className="bg-green-400 text-black font-black px-8 py-3 rounded-full hover:bg-green-300 transition-all"
                        >
                            Continue →
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            className="bg-green-400 text-black font-black px-8 py-3 rounded-full hover:bg-green-300 transition-all"
                        >
                            Generate & Download →
                        </button>
                    )}
                </div>

            </div>
        </main>
    )
}