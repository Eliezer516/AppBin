// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import db from "@astrojs/db";

import vercel from "@astrojs/vercel";


import preact from "@astrojs/preact";


import svelte from "@astrojs/svelte";


import auth from "auth-astro";


// https://astro.build/config
export default defineConfig({
  integrations: [icon(), db(), svelte(), auth()],

  adapter: vercel({
    includeFiles: ['./local.db']
  }),
  output: "server"
});