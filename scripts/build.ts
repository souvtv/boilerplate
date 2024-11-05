import { cpSync } from 'node:fs'

import { build, BuildOptions } from 'esbuild'
// import alias from 'esbuild-plugin-alias'

const buildOptions: BuildOptions = {
	assetNames: '[ext]/[name]-[hash]',
	bundle: true,
	chunkNames: '[ext]/[name]-[hash]',
	color: true,
	format: 'esm',
	loader: {
		'.jpg': 'file',
		'.png': 'file',
		'.svg': 'file',
		'.wasm': 'file',
		'.woff': 'file',
		'.woff2': 'file',
	},
	logLevel: 'info',
	minify: true,
	outdir: 'dist',
	sourcemap: false,
	splitting: true,
	target: 'es2021',
	plugins: [
		// alias({
		//   react: require.resolve('preact/compat'),
		//   'react-dom': require.resolve('preact/compat'),
		//   'react-dom/test-utils': require.resolve('preact/test-utils'),
		//   'react/jsx-runtime': require.resolve('preact/jsx-runtime'),
		// }),
	],
}

cpSync(`client/public`, `dist`, { recursive: true })

await build({
	...buildOptions,
	assetNames: `[ext]/[name]-[hash]`,
	chunkNames: `[ext]/[name]-[hash]`,
	entryNames: `[ext]/index`,
	entryPoints: [`client/src`],
	outExtension: { '.js': '.mjs' },
})
