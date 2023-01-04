import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	envDir: '../..',
	envPrefix: 'PUBLIC_'
};

export default config;
