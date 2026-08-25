// Parses the cv.md body into structured sections.
// Conventions (documented at the top of src/content/cv.md):
//   "## Title"            → CV section
//   "### Company — Role"  → experience inside a section; the next non-empty
//                           line is its "Period · context" meta line
//   "- text"              → bullet (continuation lines indented 2+ spaces)
//   anything else         → paragraph text

export interface CvExperience {
	company: string;
	role: string;
	period: string;
	note: string;
	bullets: string[];
}

export interface CvSection {
	title: string;
	paragraphs: string[];
	bullets: string[];
	experiences: CvExperience[];
}

export function parseCv(body: string): CvSection[] {
	const text = body.replace(/<!--[\s\S]*?-->/g, '');
	const sections: CvSection[] = [];
	let section: CvSection | null = null;
	let exp: CvExperience | null = null;
	let paragraph: string[] = [];

	const flushParagraph = () => {
		if (paragraph.length && section) section.paragraphs.push(paragraph.join(' '));
		paragraph = [];
	};

	for (const line of text.split('\n')) {
		const trimmed = line.trim();

		if (/^###\s+/.test(line)) {
			flushParagraph();
			const heading = line.replace(/^###\s+/, '').trim();
			const dash = heading.indexOf(' — ');
			exp = {
				company: dash === -1 ? heading : heading.slice(0, dash),
				role: dash === -1 ? '' : heading.slice(dash + 3),
				period: '',
				note: '',
				bullets: [],
			};
			section?.experiences.push(exp);
		} else if (/^##\s+/.test(line)) {
			flushParagraph();
			section = { title: line.replace(/^##\s+/, '').trim(), paragraphs: [], bullets: [], experiences: [] };
			exp = null;
			sections.push(section);
		} else if (/^-\s+/.test(line)) {
			flushParagraph();
			const target = exp ? exp.bullets : section?.bullets;
			target?.push(trimmed.replace(/^-\s+/, ''));
		} else if (/^\s{2,}\S/.test(line)) {
			// continuation of a wrapped bullet
			const target = exp ? exp.bullets : section?.bullets;
			if (target?.length) target[target.length - 1] += ` ${trimmed}`;
			else paragraph.push(trimmed);
		} else if (trimmed) {
			if (exp && !exp.bullets.length && !exp.period) {
				const sep = trimmed.indexOf(' · ');
				exp.period = sep === -1 ? trimmed : trimmed.slice(0, sep);
				exp.note = sep === -1 ? '' : trimmed.slice(sep + 3);
			} else {
				paragraph.push(trimmed);
			}
		} else {
			flushParagraph();
		}
	}
	flushParagraph();
	return sections;
}

// Minimal inline markdown → HTML (escape first, then **bold**, `code`, *em*).
export function mdInline(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
		.replace(/`([^`]+)`/g, '<code>$1</code>')
		.replace(/(^|\s)\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
}
