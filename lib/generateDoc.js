import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx'
import { saveAs } from 'file-saver'
import policyData from '../data/policies.json'

function fillTemplate(text, formData) {
    return text
        .replaceAll('{{companyName}}', formData.companyName || 'the Company')
        .replaceAll('{{serverLocation}}', formData.serverLocation || 'cloud infrastructure')
}

export async function generatePolicyDoc(formData) {
    const { companyName, frameworks, policies } = formData

    const today = new Date().toLocaleDateString('en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
    })

    const buildPolicy = (policyName) => {
        const data = policyData[policyName]

        // Fallback for any policy we haven't written content for yet
        if (!data) {
            return [
                new Paragraph({ text: policyName, heading: HeadingLevel.HEADING_1, spacing: { before: 400, after: 200 } }),
                new Paragraph({ text: `This policy is currently being finalized for ${companyName}. Contact support for the full version.`, spacing: { after: 400 } }),
            ]
        }

        // Build control references string, only for frameworks the user selected
        const controlRefs = frameworks
            .filter(fw => data.controls[fw])
            .map(fw => `${fw}: ${data.controls[fw]}`)
            .join('   |   ')

        const sectionParagraphs = data.sections.flatMap((s, i) => [
            new Paragraph({
                text: `${i + 1}. ${s.heading}`,
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 200, after: 100 }
            }),
            new Paragraph({
                text: fillTemplate(s.body, formData),
                spacing: { after: 200 }
            })
        ])

        return [
            new Paragraph({
                text: policyName,
                heading: HeadingLevel.HEADING_1,
                spacing: { before: 400, after: 200 }
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: 'Control References: ', bold: true }),
                    new TextRun({ text: controlRefs })
                ],
                spacing: { after: 100 }
            }),
            new Paragraph({
                children: [
                    new TextRun({ text: 'Effective Date: ', bold: true }),
                    new TextRun({ text: today })
                ],
                spacing: { after: 200 }
            }),
            new Paragraph({
                text: 'Purpose',
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 100, after: 100 }
            }),
            new Paragraph({
                text: fillTemplate(data.purpose, formData),
                spacing: { after: 200 }
            }),
            new Paragraph({
                text: 'Scope',
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 100, after: 100 }
            }),
            new Paragraph({
                text: fillTemplate(data.scope, formData),
                spacing: { after: 200 }
            }),
            ...sectionParagraphs,
        ]
    }

    const titleSection = [
        new Paragraph({
            children: [new TextRun({ text: companyName, bold: true, size: 48 })],
            alignment: AlignmentType.CENTER,
            spacing: { before: 800, after: 200 }
        }),
        new Paragraph({
            children: [new TextRun({ text: 'Compliance Policy Pack', size: 36, color: '666666' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
        }),
        new Paragraph({
            children: [new TextRun({ text: `Frameworks: ${frameworks.join(' | ')}`, size: 24, color: '888888' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 }
        }),
        new Paragraph({
            children: [new TextRun({ text: `Generated: ${today}`, size: 24, color: '888888' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 800 }
        }),
    ]

    const selectedPolicies = policies.length > 0 ? policies : Object.keys(policyData)
    const allSections = selectedPolicies.flatMap(p => buildPolicy(p))

    const doc = new Document({
        sections: [{ properties: {}, children: [...titleSection, ...allSections] }]
    })

    const blob = await Packer.toBlob(doc)
    saveAs(blob, `${companyName}-compliance-policies.docx`)
}