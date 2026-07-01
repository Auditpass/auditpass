export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/result',
        },
        sitemap: 'https://auditpass.akhnd.com/sitemap.xml',
    }
}