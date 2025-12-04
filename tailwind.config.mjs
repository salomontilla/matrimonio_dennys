/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				wedding: {
					gold: '#D4AF37',
					beige: '#FAF9F6',
					text: '#4A4A4A',
					mint: '#E0F2F1',
					'gold-light': '#F4E5B2',
				},
			},
			fontFamily: {
				serif: ['"Playfair Display"', 'serif'],
				sans: ['"Montserrat"', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
