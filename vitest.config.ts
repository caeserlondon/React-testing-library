import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		environment: 'jsdom',
		globals: true,
		ui: true,
		setupFiles: 'tests/setup.ts',
	},
});
