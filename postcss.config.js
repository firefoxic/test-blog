// import sass from "@csstools/postcss-sass"

export default function (ctx) {
	return {
		map: ctx.env === `development`,
		// parser: `postcss-scss`,
		plugins: {
			"postcss-import": {
				// plugins: [
				// 	sass(),
				// ],
			},
			"postcss-url": [
				{
					filter: `**/*.svg`,
					url: `inline`,
				},
				{
					filter: `!**/*.svg`,
					url: `rebase`,
				},
			],
			"postcss-custom-media": {},
			"postcss-lightningcss": {
				"lightningcssOptions": {
					"minify": ctx.env === `production`,
				},
			},
		},
	}
}
