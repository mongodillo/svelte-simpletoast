import { svelte } from '@sveltejs/vite-plugin-svelte';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		svelte({
			preprocess: vitePreprocess(),
			configFile: false,
			compilerOptions: {
				dev: false,
				css: 'injected'
			},
			emitCss: false
		})
	],
	build: {
		outDir: './dist-js',
		lib: {
			entry: './src/lib/index.ts',
			name: 'window',
			fileName: (format: string) => `index.${format}.js`
		},
		rollupOptions: {
			output: {
				extend: true
			}
		}
	}
});
