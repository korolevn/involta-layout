import vituum from "vituum";
import { fileURLToPath, URL } from "node:url";
import pug from "@vituum/vite-plugin-pug";
import pages from "vituum/plugins/pages.js";
import imports from "vituum/plugins/imports.js";
import stylelint from "vite-plugin-stylelint";
import eslint from "vite-plugin-eslint";

export default {
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    base: "./",
    css: {
        preprocessorOptions: {
            scss: {
                api: "modern-compiler",
            },
        },
    },
    plugins: [
        stylelint(),
        eslint(),
        vituum(),
        pug({ root: "/src" }),
        imports({
            filenamePattern: {
                "src/styles": "+.scss",
            },
            paths: [
                "/src/styles/*/**",
                "/src/scripts/*/**",
                "/src/assets/*/**",
            ],
        }),
        pages({
            dir: "./src/templates/pages",
            root: "./src",
            normalizeBasePath: true,
        }),
    ],
    assets: {
        fileExtensions: [
            "jpg",
            "jpeg",
            "png",
            "svg",
            "ico",
            "woff",
            "woff2",
            "ttf",
        ],
    },
    build: {
        minify: true,
        rollupOptions: {
            input: [
                "./src/templates/pages/*.{pug,html}",
                "./src/styles/*.{css,scss}",
                "./src/scripts/**/*.{js}",
                "./src/assets/**/*.{svg,png,jpeg,jpg,woof,woof2,ttf}",
            ],
            output: {
                chunkFileNames: "scripts/[name].js",
                entryFileNames: "scripts/[name].js",
                assetFileNames: ({ name }) => {
                    if (/\.css$/.test(name ?? "")) {
                        return "[name][extname]";
                    }
                    if (/\.(webp|png|jpg|jpeg|gif|ico|svg)$/.test(name ?? "")) {
                        return "assets/img/[name][extname]";
                    }
                    if (/\.(woff|woff2|ttf)$/.test(name ?? "")) {
                        return "assets/fonts/[name][extname]";
                    }
                    return "assets/[name][extname]";
                },
            },
        },
    },
};
