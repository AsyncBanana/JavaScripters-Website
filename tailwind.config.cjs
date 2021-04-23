module.exports = {
	mode: 'jit',
	purge: ['./src/*.html', './src/routes/*.svelte', './src/components/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
