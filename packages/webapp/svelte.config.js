/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* jshint esversion: 9 */

// command env properties
const hasAdapter = process.env.ADAPTER;
const adapt = hasAdapter ? hasAdapter : "node";
const isSSR = !!process.env.SSR;
const isAMP = !!process.env.AMP;

// Imports
import sveltePreprocess from "svelte-preprocess";
import { resolve } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

// Adapters
import staticAdapter from "@sveltejs/adapter-static";
import nodeAdapter from "@sveltejs/adapter-node";
import netlifyAdapter from "@sveltejs/adapter-netlify";
import vercelAdapter from "@sveltejs/adapter-vercel";

// Custom require function as replacement for the require from the commonJS in ES Module
const customRequire = createRequire(import.meta.url); // jshint ignore:line

// Custom __dirname as replacement for the __dirname from the commonJS in ES Module
const __dirname = dirname(fileURLToPath(import.meta.url)); // jshint ignore:line
const pkg = customRequire("./package.json");

const options = JSON.stringify(process.env.OPTIONS || "{}");

const getAdapters = (adapt) => {
  switch (adapt) {
    case "node":
      return nodeAdapter;
    case "static":
      return staticAdapter;
    case "netlify":
      return netlifyAdapter;
    case "vercel":
      return vercelAdapter;
    default:
      return nodeAdapter;
  }
};

const adapter = getAdapters(adapt);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    sveltePreprocess({
      postcss: true
    })
  ],
  kit: {
    ssr: isSSR,
    amp: isAMP,
    prerender: {
      crawl: true,
      enabled: true,
      force: true,
      pages: ["*"]
    },
    vite: () => ({
      ssr: {
        noExternal: [...Object.keys(pkg.dependencies || {})]
      },
      resolve: {
        alias: {
          "__@components": resolve(__dirname, "./src/lib/ui/components"),
          "__@ui": resolve(__dirname, "./src/lib/ui"),
          "__@shared": resolve(__dirname, "./src/lib/shared"),
          "__@modules": resolve(__dirname, "./src/modules"),
          "__@core": resolve(__dirname, "./src/lib/core"),
          "__@utils": resolve(__dirname, "./src/lib/utils"),
          "__@environment": resolve(__dirname, "./src/environments")
        }
      },
      optimizeDeps: {
        include: ["detect-node", "broadcast-channel"]
      }
    })
  }
};

if (hasAdapter) {
  config.kit.adapter = adapter(options);
}

export default config;
