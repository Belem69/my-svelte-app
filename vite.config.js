import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimizeDeps: {
        exclude: ["codemirror", "@codemirror/language-javascript" /* ... */],
    }
};

export default config;
