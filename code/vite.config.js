import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    base: "https://rainynoodle.github.io/is-web-y27-front-labs/",
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
                about: resolve(__dirname, "about.html"),
                blog: resolve(__dirname, "blog.html"),
                catalog: resolve(__dirname, "catalog.html")
			},
		},
	},
});
