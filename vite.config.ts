import { sveltekit } from '@sveltejs/kit/vite';
import { FontaineTransform } from 'fontaine';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), FontaineTransform.vite({ fallbacks: ['Arial', 'Roboto'] })],
});
