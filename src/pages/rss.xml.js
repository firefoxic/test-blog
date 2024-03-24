import rss, { pagesGlobToRssItems } from "@astrojs/rss"

export async function GET() {
	return rss({
		title: `Astro Learner 🚀 Blog`,
		description: `My journey learning Astro`,
		site: `https://firefoxic-test-blog.netlify.app`,
		items: await pagesGlobToRssItems(import.meta.glob(`./**/*.md`)),
		customData: `<language>en-US</language>`,
	})
}
