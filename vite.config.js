import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA()
	],
	server: {
		proxy: {
			'/api/socket': 'ws://gps.rastreosat.com.br',
			'/api': 'http://gps.rastreosat.com.br'
		}
	}
});
