import { sveltekit } from '@sveltejs/kit/vite';
import unocss from "unocss/vite"
import { presetUno, presetAttributify, extractorSvelte } from "unocss"
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [unocss({
		presets: [
			presetUno(), presetAttributify()
		],
		extractors: [extractorSvelte]
	}), sveltekit()]
})
