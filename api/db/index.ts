import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { sql } from '@vercel/postgres';
import { config } from '../config';

export const db =
  config.env === 'production'
    ? drizzle(sql)
    : drizzle(
        new Pool({
          connectionString: 'postgres://user:password@localhost:5432/db',
        })
      );
