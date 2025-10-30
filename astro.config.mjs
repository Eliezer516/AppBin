// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import db from '@astrojs/db';

import vercel from '@astrojs/vercel';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), db({
    mode: 'web'
  })],

  adapter: netlify(),
  output: 'server'
});