module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,ttf,woff2,png,webp,jpg,ico,svg,html,json}'
	],
	swDest: 'public/sw.js',
	swSrc: 'src/service-worker.js'
};