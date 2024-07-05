import './config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './api/db/schema.ts',
  out: './drizzle',
  dbCredentials: {
    url: process.env.POSTGRES_URL,
  },
});
