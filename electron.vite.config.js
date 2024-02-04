import path from "path";
import { defineConfig } from "electron-vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from 'vite-plugin-html';

process.env.TARGET = process.env.TARGET || 'web';
const SRC_DIR = path.resolve(__dirname, "./src");
const MAIN_DIR = path.resolve(__dirname, "./main");
const PUBLIC_DIR = path.resolve(__dirname, "./public");

export default defineConfig({
	publicDir: false,
	main: {
		build: {
			rollupOptions: {
				input: {
					index: path.resolve(MAIN_DIR, "index.js"),
				},
			},
		},
	},
	preload: {
		build: {
			rollupOptions: {
				input: {
					index: path.resolve(MAIN_DIR, "preload.js"),
				},
			},
		},
	},
	renderer: {
		root: SRC_DIR,
		plugins: [
			react(),
			createHtmlPlugin({
				minify: false,
				inject: {
					data: {
						TARGET: process.env.TARGET,
					},
				},
			}),
		],
		build: {
			rollupOptions: {
				input: {
					index: path.resolve(SRC_DIR, "index.html"),
				},
			},
		},
	},
});
