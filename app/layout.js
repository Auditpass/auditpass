import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'AuditPass — SOC 2 Policies in 60 Seconds',
  description: 'Get audit-ready SOC 2, ISO 27001, GDPR and HIPAA policy documents in 60 seconds for $299. Not $12,000/year like Vanta.',
  openGraph: {
    title: 'AuditPass — SOC 2 Policies in 60 Seconds',
    description: 'Audit-ready compliance policies for $299. Not $12,000/year.',
    url: 'https://auditpass.akhnd.com',
    siteName: 'AuditPass',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuditPass — SOC 2 Policies in 60 Seconds',
    description: 'Audit-ready compliance policies for $299. Not $12,000/year.',
    images: ['/opengraph-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
