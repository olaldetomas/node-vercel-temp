import '../config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { sql } from '@vercel/postgres';

export const db =
  process.env.NODE_ENV === 'production'
    ? drizzle(sql)
    : drizzle(
        new Pool({
          connectionString: 'postgres://user:password@localhost:5432/db',
        })
      );
