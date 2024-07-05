import { defineConfig } from 'drizzle-kit';
import { config } from './api/config';

export default defineConfig({
  dialect: 'postgresql',
  schema: './api/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: config.postgresUrl,
  },
});
