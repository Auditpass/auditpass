import jsPDF from 'jspdf'
import policyData from '../data/policies.json'

function fillTemplate(text, formData) {
    return text
        .replaceAll('{{companyName}}', formData.companyName || 'the Company')
        .replaceAll('{{serverLocation}}', formData.serverLocation || 'cloud infrastructure')
}

export async function generatePolicyPDF(formData) {
    const { companyName, frameworks, policies } = formData
    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    })

    const doc = new jsPDF({ unit: 'pt', format: 'a4' })
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 56
    const maxWidth = pageWidth - margin * 2
    let y = margin

    const checkPageBreak = (neededSpace) => {
        if (y + neededSpace > pageHeight - margin) {
            doc.addPage()
            y = margin
        }
    }

    const addText = (text, fontSize, fontStyle, color, spacingAfter) => {
        doc.setFontSize(fontSize)
        doc.setFont('helvetica', fontStyle)
        doc.setTextColor(color)
        const lines = doc.splitTextToSize(text, maxWidth)
        checkPageBreak(lines.length * (fontSize * 1.3) + spacingAfter)
        doc.text(lines, margin, y)
        y += lines.length * (fontSize * 1.3) + spacingAfter
    }

    // ---- Title Page ----
    y = 220
    doc.setFontSize(32)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor('#111111')
    doc.text(companyName, pageWidth / 2, y, { align: 'center' })
    y += 40

    doc.setFontSize(18)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor('#666666')
    doc.text('Compliance Policy Pack', pageWidth / 2, y, { align: 'center' })
    y += 30

    doc.setFontSize(12)
    doc.setTextColor('#888888')
    doc.text(`Frameworks: ${frameworks.join(' | ')}`, pageWidth / 2, y, { align: 'center' })
    y += 20
    doc.text(`Generated: ${today}`, pageWidth / 2, y, { align: 'center' })

    doc.addPage()
    y = margin

    // ---- Policy Sections ----
    const selectedPolicies = policies.length > 0 ? policies : Object.keys(policyData)

    selectedPolicies.forEach((policyName) => {
        const data = policyData[policyName]
        checkPageBreak(60)

        addText(policyName, 20, 'bold', '#0A0A0A', 8)

        if (!data) {
            addText(
                `This policy is currently being finalized for ${companyName}. Contact support for the full version.`,
                10, 'normal', '#444444', 20
            )
            return
        }

        const controlRefs = frameworks
            .filter(fw => data.controls[fw])
            .map(fw => `${fw}: ${data.controls[fw]}`)
            .join('   |   ')

        addText(`Control References: ${controlRefs}`, 9, 'bold', '#555555', 4)
        addText(`Effective Date: ${today}`, 9, 'normal', '#555555', 14)

        addText('Purpose', 13, 'bold', '#1D9E75', 4)
        addText(fillTemplate(data.purpose, formData), 10, 'normal', '#222222', 12)

        addText('Scope', 13, 'bold', '#1D9E75', 4)
        addText(fillTemplate(data.scope, formData), 10, 'normal', '#222222', 12)

        data.sections.forEach((s, i) => {
            addText(`${i + 1}. ${s.heading}`, 12, 'bold', '#111111', 4)
            addText(fillTemplate(s.body, formData), 10, 'normal', '#333333', 14)
        })

        y += 10
    })

    doc.save(`${companyName}-compliance-policies.pdf`)
}