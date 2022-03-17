module.exports = {
	mode: 'jit',
	content: [
		'./src/**/*.{js,jsx,ts,tsx}',
		'./public/index.html'
	],
	theme: {
		extend: {
			aspectRatio: {
				'4/3': '4 / 3',
			}
		},
	},
	plugins: [],
}