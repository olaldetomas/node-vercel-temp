import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString:
    process.env.POSTGRES_URL || 'postgres://user:password@localhost:5432/db',
});

export const db = drizzle(pool);
