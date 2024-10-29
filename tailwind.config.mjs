const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"dark": "#171A21",
				"darkAccent": "#303643",
				"primary": "#6C5CE7",
			},
			spacing: {
				"desk": "200px",
			},
			fontFamily: {
				"title": ['Barlow Condensed', ...defaultTheme.fontFamily.serif],
				"body": ['Nunito Sans Variable', ...defaultTheme.fontFamily.sans],
			},
			animation: {
				flip: "flip 6s infinite steps(2, end)",
				rotate: "rotate 3s linear infinite both",
			},
			keyframes: {
				flip: {
					to: {
						transform: "rotate(360deg)",
					},
				},
				rotate: {
					to: {
						transform: "rotate(90deg)",
					},
				},
			},
		},
	},
	plugins: [],
}

// export default {
// 	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
// 	theme: {
// 		extend: {
// 			colors: {
// 				"dark": "#171A21",
// 				"darkAccent": "#303643",
// 				"primary": "#6C5CE7",
// 			},
// 			spacing: {
// 				"desk": "200px",
// 			}
// 		},
// 	},
// 	plugins: [],
// }
