import lit from "@astrojs/lit"
import { defineConfig } from "astro/config"
import browserslistToEsbuild from "browserslist-to-esbuild"

import { getProjectRoot } from "./.github/utils/getProjectRoot.js"

// https://astro.build/config
export default defineConfig({
	base: getProjectRoot(),
	scopedStyleStrategy: `class`,
	site: `https://firefoxic-test-blog.netlify.app`,
	build: {
		assets: `assets`,
	},
	vite: {
		build: {
			assetsInlineLimit: 0,
			cssMinify: undefined,
			emptyOutDir: true,
			target: browserslistToEsbuild(),
		},
		css: {
			transformer: `postcss`,
		},
	},
	integrations: [lit()],
})
