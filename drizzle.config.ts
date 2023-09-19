import type { Config } from 'drizzle-kit'

export default {
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  driver: 'better-sqlite',
  breakpoints: true,
  dbCredentials: {
    url: './.wrangler/state/v3/d1/b79a75b0-c3a5-45d4-8de3-c48432f94bf4/db.sqlite',
  }
} satisfies Config