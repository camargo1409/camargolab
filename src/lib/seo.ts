// Single place for SEO identity data used across pages.

export const SEO = {
	name: 'Gabriel Camargo',
	role: 'Full-Stack Engineer',
	description:
		'Gabriel Camargo — Full-Stack Engineer with 6+ years of experience building scalable, high-performance web applications end to end: Next.js and React interfaces, Node.js and NestJS services, payments, authentication, background processing, and search systems.',
	keywords: [
		'Gabriel Camargo',
		'Full-Stack Engineer',
		'Full-Stack Developer',
		'Software Engineer',
		'Senior Full-Stack Developer',
		'React Developer',
		'Next.js Developer',
		'Node.js Developer',
		'React Native Developer',
		'TypeScript',
		'JavaScript',
		'React',
		'Next.js',
		'React Native',
		'Node.js',
		'NestJS',
		'PostgreSQL',
		'Supabase',
		'Tailwind CSS',
		'AWS',
		'Remote Developer',
		'Brazil',
	],
	email: 'gabrielcamargo1409@gmail.com',
	github: 'https://github.com/camargo1409',
	linkedin: 'https://www.linkedin.com/in/gabriel-mcamargo',
};

export function personSchema(site: string | undefined, knowsAbout: string[] = []) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: SEO.name,
		jobTitle: SEO.role,
		description: SEO.description,
		url: site,
		email: `mailto:${SEO.email}`,
		sameAs: [SEO.github, SEO.linkedin],
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Novo Horizonte',
			addressRegion: 'São Paulo',
			addressCountry: 'BR',
		},
		worksFor: { '@type': 'Organization', name: 'Bytes & Pixels GmbH' },
		alumniOf: { '@type': 'CollegeOrUniversity', name: 'IFSP Catanduva' },
		knowsAbout: knowsAbout.length ? knowsAbout : SEO.keywords,
		knowsLanguage: ['English', 'Portuguese'],
	};
}
